# TaskTide

This is a full-stack task management application with a React frontend and a Node.js backend.

## Project Structure

The project is divided into two main directories:

-   `frontend`: Contains the React application.
-   `backend`: Contains the Node.js/Express application.

## How to Run

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory with the following variables:
    ```
    DB_USER=<your_db_user>
    DB_HOST=<your_db_host>
    DB_NAME=<your_db_name>
    DB_PASSWORD=<your_db_password>
    DB_PORT=<your_db_port>
    JWT_SECRET=<your_jwt_secret>
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    SESSION_SECRET=<your_session_secret>
    ```
4.  Start the backend server:
    ```bash
    npm start
    ```

### Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.
