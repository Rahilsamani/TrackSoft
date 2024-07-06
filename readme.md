# TrackSoft

TrackSoft is a comprehensive time tracking and productivity management tool that integrates a MERN stack backend with a Python microservice for taking screenshots. The project features a timer for tracking work hours, a page for displaying screenshots, a progress page for tracking daily progress, and Redis for caching data.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

- **Timer Feature**: Track work hours with in-time and out-time recording.
- **Screenshots Page**: Display all screenshots taken during the work session.
- **Progress Page**: View daily progress with detailed work logs and total hours.
- **Caching with Redis**: Efficiently manage data caching for improved performance.

## Architecture

TrackSoft is built using a microservice architecture with the following components:

- **Frontend**: MERN Stack (MongoDB, Express.js, React.js, Node.js)
- **Backend**: Node.js and Express.js
- **Microservice**: Python for taking screenshots
- **Database**: MongoDB for storing user data and progress
- **Cache**: Redis for caching user screenshots and details

### Microservices

- **Screenshot Microservice**: A Python-based service that captures screenshots, uploads them to Cloudinary, and communicates with the Node.js backend for storing image URLs.

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **Microservice**:
  - Python
  - `pyscreenshot` for capturing screenshots
  - `Cloudinary` for storing images

- **Cache**:
  - Redis

## Installation

### Prerequisites

- Node.js and npm
- Python 3.x
- MongoDB
- Redis
- Cloudinary account

### Clone the Repository

```bash
git clone https://github.com/Rahilsamani/TrackSoft.git
cd TrackSoft
```

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend server:**

   ```bash
   npm start
   ```

### Frontend Setup

1. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

3. **Start the React development server:**

   ```bash
   npm start
   ```

## Usage

### Starting the Application

1. **Ensure that MongoDB and Redis are running.**
2. **Start the backend server and the microservice.**
3. **Launch the frontend React app.**

### Accessing the Application

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:4000`
- **Microservice**: `http://localhost:8000`

### API Endpoints

| Method | Endpoint                 | Description                                   |
|--------|--------------------------|-----------------------------------------------|
| `POST`  | `/start_screenshot`      | Start taking screenshots every 5 seconds.   |
| `POST`  | `/stop_screenshot`       | Stop the screenshot-taking process.         |
| `GET`   | `/`                      | Welcome message from the server.            |
| `GET`   | `/api/v1/user/screenshots` | Get all screenshots of the logged-in user.   |
| `POST`  | `/api/v1/user/updateUser` | Update user details with a new screenshot.   |
| `POST`  | `/api/v1/user/updateDailyProgress` | Update daily work progress.                 |
| `GET`   | `/api/v1/user/details`   | Get user details including progress data.    |

## Screenshots

Here are some screenshots of the application:

- **SignUp Page**:
  ![SignUp Page](https://example.com/timer-feature.png)

- **Login Page**:
  ![Login Page](https://example.com/timer-feature.png)

- **Home Page**:
  ![Home Page](https://example.com/timer-feature.png)

- **About Page**:
  ![Home Page](https://example.com/timer-feature.png)

- **Timer Feature**:
  ![Timer Feature](https://example.com/timer-feature.png)

- **Screenshots Page**:
  ![Screenshots Page](https://example.com/screenshots-page.png)

- **Progress Page**:
  ![Progress Page](https://example.com/progress-page.png)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix.**
3. **Make your changes.**
4. **Submit a pull request with a clear description of your changes.**

---

