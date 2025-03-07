# Greeting Application

## Description
The Greeting Application is a full-stack web application built using React for the frontend and Express.js for the backend. The application allows users to enter their name and receive a personalized greeting message.

## Features
- User enters their name and gets a greeting message.
- Backend API built with Express.js.
- Frontend built using React.
- Uses CORS for cross-origin requests.
- Environment variables for backend configuration.

## Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Utkarsh164/Greeting-Application.git
   cd Greeting-Application
   ```

2. Install concurrently for managing frontend and backend together:
   ```sh
   npm install concurrently
   ```

3. Navigate to the backend folder and install dependencies:
   ```sh
   cd backend
   npm install
   ```

4. Navigate to the frontend folder and install dependencies:
   ```sh
   cd frontend
   npm install
   ```

## Configuration
1. Create a `.env` file in the `backend` directory and add the following:
   ```sh
   PORT=9000
   ```

2. Create a `.env` file in the `frontend` directory and add the following:
   ```sh
   VITE_BACKEND_PORT=9000
   ```

## Running the Application
   
```sh
   cd Greeting-Application
   npm start
```
