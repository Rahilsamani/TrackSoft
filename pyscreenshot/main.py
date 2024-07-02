from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
import os
import shutil
from datetime import datetime
import pyscreenshot as ImageGrab
from apscheduler.schedulers.background import BackgroundScheduler

app = FastAPI()

# create default background scheduler
sched = BackgroundScheduler()

isrunning = True
onetime = True

# function for taking screenshot
def take_screenshot():
    if not os.path.exists("media"):
        os.mkdir("media")

    image_name = f"screenshot-{str(datetime.now()).replace(':', '')}.png"
    file_path_loc = f"./media/{image_name}"
    
    screen_shot = ImageGrab.grab()
    screen_shot.save(file_path_loc)

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
    if not os.path.exists("media"):
        os.mkdir("media")
    photo_files = os.listdir("media")
    photo_urls = [os.path.join("media", photo) for photo in photo_files if photo.endswith('.png')]
    return {"photo_urls": photo_urls}


# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
