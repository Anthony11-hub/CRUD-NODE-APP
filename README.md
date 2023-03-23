# User Management System
This is a simple web application that allows users to create, read, update, and delete user data. The application is built using Node.js and Express.js, and uses MongoDB as the database.

# Prerequisites
- Node.js (v10 or later)
- MongoDB

# Installation
1. Clone the repository:

```bash
git clone https://github.com/example/CRUD-NODE-APP.git
```

2. Navigate to the project directory:

```bash
  cd CRUD-NODE-APP
```
3. Install dependencies:

```bash
npm install
```

4. Set environment variables:

```bash
cp .env.example .env
```

Edit the .env file to set the MONGO_URI environment variable to the URL of your MongoDB instance.

5. Start the server:
```bash
npm start
```

6. Open your browser and navigate to http://localhost:8080 to view the application.

# Usage
The user management system provides a simple web interface for managing user data. The application includes the following features:

- View list of users: Navigate to the homepage to view a list of all users in the system.
- Add a user: Click the "Add User" button on the homepage to add a new user to the system.
- Edit a user: Click the "Edit" button next to a user on the homepage to edit their details.
- Delete a user: Click the "Delete" button next to a user on the homepage to delete them from the system.

