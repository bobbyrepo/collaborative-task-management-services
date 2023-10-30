# collaborative-task-management-services

## Introduction

The Real-Time Collaborative Task Management App's backend is responsible for handling the server-side logic of the application. It provides RESTful APIs, handles authentication, and enables real-time functionality using Socket.io. This backend component is built with Node.js and Express, ensuring secure access via JWT-based authentication.

## API Documentation

The backend of the Real-Time Collaborative Task Management App provides a set of API endpoints that allow you to interact with the application. Below, you will find documentation for the available API routes.

### Authentication

- **POST /api/users/register**
  - Create a new user account.
  - Request body:
    - `username` (username of the user)
    - `password` (password of the user)
    - `admin` (login as admin `boolean`)
   
- **POST /api/users/login**
  - Log in and obtain a JWT token.
  - Request body:
    - `username` (username of the user)
    - `password` (password of the user)

### Tasks

- **GET /api/tasks/get-all**
  - Retrieve a list of tasks.
  - Headers:
    - `Authorization: Bearer your_access_token_here`
  
- **POST /api/tasks/save**
  - Create a new task.
  - Request body:
    - `user` (Email of the user)
    - `userId` (ID of the user)
    - `title` (Title of the task)
    - `details` (Details of the task)
  - Headers:
    - `Authorization: Bearer your_access_token_here`
  
- **PUT /api/tasks/update?id=:taskId**
  - Update an existing task by its ID.
  - Request parameter: `taskId` (ID of the task)
  - Request body:
    - `taskId` (ID of the task)
    - `title` (Updated title of the task)
    - `details` (Updated details of the task)
    - `resolved` (Boolean, set to `true` for task resolution)
  - Headers:
    - `Authorization: Bearer your_access_token_here`

- **DELETE /api/tasks/remove?id=:taskId**
  - Delete a task by its ID.
  - Request parameter: `taskId` (ID of the task)
  - Headers:
    - `Authorization: Bearer your_access_token_here`
  
### Users

- **GET /api/users/get-all**
  - Retrieve a list of users.
  
- **GET /api/users?userId=:userId**
  - Retrieve a specific user by their ID.
  - Request parameter: `userId` (ID of the user)

Make sure to include the necessary headers and JWT token for authentication when making API requests.

## Technologies Used

The backend of the project utilizes the following technologies:

- **Node.js with Express:** Provides the server-side framework for building RESTful APIs.

- **Socket.io:** Enables real-time functionality and communication with the frontend.

- **JWT (JSON Web Tokens):** Ensures secure user authentication.

- **Database:**
  - **MongoDB:** Stores tasks and user data.
 
### Project Configuration

Before you can run this project, you need to set up some environment variables. Create an `.env` file in the project root and add the following variables:
  
- `PORT`: 8000
- `MONGO_URI`: your_mongodb_connection_uri
- `ACCESS_TOKEN_SECRET`: your_secret_key_for_jwt

## Usage

1. Run `git clone https://github.com/bobbyrepo/collaborative-task-management-services` to clone the repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Run `nodemon server.js` to start the development server.
4. Open your browser and visit `http://localhost:3001`.
