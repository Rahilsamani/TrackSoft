import asyncio
import httpx
from fastapi import FastAPI, HTTPException, BackgroundTasks, Depends, Header
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

# config cloudinary
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)

app = FastAPI()

# cors middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://tracksoft.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create default background scheduler
sched = BackgroundScheduler()
sched.start()

isrunning = False

# Dependency to extract the token from Authorization header
async def get_token(authorization: str = Header(None)):
    if authorization is None:
        raise HTTPException(status_code=401, detail="Unauthorized")
    token = authorization.replace("Bearer ", "")
    return token

# function for taking screenshot
async def take_screenshot(token: str):
    image_name = f"screenshot-{str(datetime.now()).replace(':', '')}.png"
    
    screen_shot = ImageGrab.grab()
    
    # Save screenshot to a temporary location
    temp_path = f"./{image_name}"
    screen_shot.save(temp_path)

    # upload in cloudinary
    response = cloudinary.uploader.upload(temp_path, folder="TrackSoft")

    # remove the temp file
    os.remove(temp_path)

    # post request to add the urls in users model
    try:
        update_url = "http://localhost:4000/api/v1/user/updateUser"
        data = {
            "imageUrl": response['secure_url']
        }
        headers = {
            "Authorization": f"Bearer {token}"
        }
        async with httpx.AsyncClient() as client:
            response = await client.post(update_url, json=data, headers=headers)
            response.raise_for_status()
    except Exception as error:
        print('Error is', error)

# function to clear the screenshots
def clear_media():
    dir = 'media'
    shutil.rmtree(dir)
    os.mkdir(dir)

# api for taking screenshots
@app.post("/start_screenshot")
@app.post("/start_screenshot")
async def start_screenshot(
    background_tasks: BackgroundTasks,
    token: str = Depends(get_token)
):
    global isrunning
    if not isrunning:
        if not sched.get_job('screenshot_job'):
            # Schedule the screenshot job
            sched.add_job(lambda: asyncio.run(take_screenshot(token)), 'interval', seconds=5, id='screenshot_job')
        else:
            sched.resume_job('screenshot_job')
        
        if not sched.get_job('clear_media_job'):
            # Schedule the media clearing job
            sched.add_job(clear_media, 'cron', hour=23, minute=42, id='clear_media_job')
        else:
            sched.resume_job('clear_media_job')
        
        isrunning = True
        return {"success": True, "message": "Screenshot taking started"}
    else:
        return {"success": False, "message": "Screenshot taking is already running"}


# api for stopping the screenshots
@app.post("/stop_screenshot")
def stop_screenshot():
    global isrunning
    if isrunning:
        sched.pause_job('screenshot_job')
        sched.pause_job('clear_media_job')
        isrunning = False
        return {"success": True, "message": "Screenshot taking stopped"}
    else:
        return {"success": False, "message": "Screenshot taking was not started"}

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
