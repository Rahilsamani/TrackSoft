from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import shutil
from datetime import datetime
import pyscreenshot as ImageGrab
from apscheduler.schedulers.background import BackgroundScheduler
import cloudinary
import cloudinary.uploader

# load .env file
load_dotenv()

app = FastAPI()

# config cloudinary 
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)

# cors middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create default background scheduler
sched = BackgroundScheduler()

isrunning = True
onetime = True

# function for taking screenshot
def take_screenshot():
    image_name = f"screenshot-{str(datetime.now()).replace(':', '')}.png"
    
    screen_shot = ImageGrab.grab()
    
    # save in temp file
    temp_path = f"./{image_name}"
    screen_shot.save(temp_path)

    # upload in cloudinary
    response = cloudinary.uploader.upload(temp_path, folder="TrackSoft")

    # remove the temp file
    os.remove(temp_path)

# function to clear the screenshots
def clear_media():
    dir = 'media'
    shutil.rmtree(dir)
    os.mkdir(dir)

# api for taking screenshots
@app.post("/start_screenshot")
def start_screenshot(background_tasks: BackgroundTasks):
    global onetime, isrunning
    if onetime:
        sched.add_job(take_screenshot, 'interval', seconds=5)
        sched.add_job(clear_media, 'cron', hour=23, minute=42)
        sched.start()
        onetime = False
        isrunning = True
    elif not isrunning:
        sched.resume()
        isrunning = True
    return {"message": "Screenshot taking started"}

# api for stopping the screenshots
@app.post("/stop_screenshot")
def stop_screenshot():
    global isrunning, onetime
    if isrunning:
        sched.pause()
        isrunning = False
        onetime = True
    return {"message": "Screenshot taking stopped"}

#api for listing all the screenshots
@app.get("/screenshots")
def get_screenshots():
    # cloudinary api for fetching all images
    response = cloudinary.api.resources(type="upload", prefix="TrackSoft")
    photo_urls = [resource['secure_url'] for resource in response['resources']]
    return {"photo_urls": photo_urls}


# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
