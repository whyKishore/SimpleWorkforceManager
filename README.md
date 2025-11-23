# Simple Workforce Manager

A web-based workforce management system for small businesses.

**Built with:** React, Node.js, PostgreSQL, Socket.io  
**Version:** 1.0.0

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation & Setup](#installation--setup)
4. [Running the Application](#running-the-application)
5. [Login Credentials](#login-credentials)
6. [Demo Flow](#demo-flow)
7. [Technologies Used](#technologies-used)
8. [Project Structure](#project-structure)
9. [Technical Implementation](#technical-implementation)
10. [Troubleshooting](#troubleshooting)

---

## Features

### User Management
- Admin can create, edit, and delete users
- Three user roles: Admin, Manager, Staff
- Profile management for all users

### Task Management
- Create and assign tasks to staff
- Track task status (Pending, In Progress, Completed)
- Set due dates for tasks

### Attendance System
- Staff can clock in and clock out
- Automatic timestamp recording
- View attendance history

### Real-Time Chat
- Instant messaging between users
- Search users to start conversations
- Block/unblock conversations
- Clear chat history

### Reports & Complaints
- Staff can submit daily reports
- Complaint system with admin replies
- Feedback submission and responses

### Allowances
- Manage employee allowances
- Different frequency options (monthly, one-time, etc.)

### Security
- Password encryption with BCrypt
- JWT authentication
- Role-based access control
- Secure API endpoints

---

## Prerequisites

Install these before running the project:

1. **Node.js** (version 18 or higher) - [Download](https://nodejs.org)
2. **PostgreSQL** (version 13 or higher) - [Download](https://www.postgresql.org/download/)
3. **Git** - [Download](https://git-scm.com)

---

## Installation & Setup

### Step 1: Clone the Project

```bash
git clone https://github.com/kisswh0re/SimpleWorkforceManager.git
cd SimpleWorkforceManager
```

### Step 2: Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend (open new terminal)
cd frontend
npm install
```

### Step 3: Setup Database

Open PostgreSQL and create a database:

```bash
psql -U postgres
CREATE DATABASE simple_workforce_manager;
\q
```

### Step 4: Configure Environment Variables

**Create `backend/.env`:**
```ini
PORT=5001
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=simple_workforce_manager
DB_PASSWORD=your_postgres_password
DB_PORT=5432
JWT_SECRET=your_secret_key_here
CORS_ORIGIN=http://localhost:3000
FRONTEND_URL=http://localhost:3000
```

**Create `frontend/.env`:**
```ini
REACT_APP_API_URL=http://localhost:5001/api
```

### Step 5: Initialize Database

```bash
cd backend
node setupDatabase.js
node seedAdmin.js
```

---

## Running the Application

### Start Backend (Terminal 1)

```bash
cd backend
node index.js
```

✅ You should see: `Server running on http://localhost:5001`

### Start Frontend (Terminal 2)

```bash
cd frontend
npm start
```

✅ Browser will open automatically at `http://localhost:3000`

**Estimated Setup Time:** 5-10 minutes

---

## Login Credentials

**Default Admin Account:**
- Username: `admin`
- Password: `admin`

⚠️ **Important:** Change the password after first login!

### User Roles

1. **Admin** - Full system access, manage users, system settings
2. **Manager** - Manage tasks, view reports, handle complaints, view attendance
3. **Staff** - View own tasks, clock in/out, submit reports, use chat

---

## Demo Flow

### Getting Started

1. **Login as Admin**
   - Access: `http://localhost:3000`
   - Login with admin/admin
   - Navigate to "Manage Staff"
   - Create a Manager user
   - Create a Staff user

2. **Test Manager Features**
   - Logout and login as Manager
   - Go to "Manage Tasks"
   - Create a task and assign to Staff
   - View attendance records
   - Check reports and complaints

3. **Test Staff Features**
   - Logout and login as Staff
   - View "My Tasks" and update status
   - Use Clock In/Out feature
   - Submit a report
   - Submit a complaint

4. **Test Real-Time Chat**
   - Open two browser windows (or use incognito)
   - Login as different users in each window
   - Navigate to Chat
   - Send messages and see real-time updates

---

## Technologies Used

### Frontend
- **React 19** - UI framework
- **Ant Design** - UI component library
- **Socket.io-client** - Real-time communication
- **Axios** - HTTP client for API calls
- **React Router** - Navigation

### Backend
- **Node.js & Express** - Server framework
- **PostgreSQL** - Relational database
- **Socket.io** - WebSocket for real-time features
- **JWT** - Authentication tokens
- **BCrypt** - Password hashing

---

## Project Structure

```
SimpleWorkforceManager/
├── backend/                    # Server-side application
│   ├── routes/                # API endpoints
│   │   ├── auth.js           # Authentication routes
│   │   ├── tasks.js          # Task management
│   │   ├── attendance.js     # Attendance tracking
│   │   ├── chat.js           # Chat functionality
│   │   └── ...               # Other routes
│   ├── middleware/            # Custom middleware
│   │   └── auth.js           # JWT authentication
│   ├── utils/                 # Helper functions
│   ├── constants.js           # Application constants
│   ├── db.js                  # Database connection
│   ├── index.js               # Server entry point
│   ├── setupDatabase.js       # Database schema setup
│   └── seedAdmin.js           # Create default admin
│
├── frontend/                   # Client-side application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Login.js
│   │   │   ├── ProtectedRoute.js
│   │   │   └── ClockInWidget.js
│   │   ├── pages/             # Page components
│   │   │   ├── DashboardPage.js
│   │   │   ├── MyTasksPage.js
│   │   │   ├── ChatPage.js
│   │   │   └── ...
│   │   ├── utils/             # Helper functions
│   │   ├── api.js             # Axios configuration
│   │   ├── socket.js          # Socket.io client
│   │   ├── App.js             # Main app component
│   │   └── index.js           # Entry point
│   └── package.json
│
├── .gitignore
└── README.md                   # This file
```

---

## Technical Implementation

### Backend Architecture

**RESTful API Design:**
- Organized route handlers by feature
- Consistent error handling
- Input validation on all endpoints

**Authentication & Authorization:**
- JWT-based stateless authentication
- Role-based middleware for access control
- Secure password hashing with BCrypt

**Database Design:**
- Normalized PostgreSQL schema
- Foreign key constraints for data integrity
- Proper indexing for performance
- Transaction support for critical operations

**Real-Time Features:**
- WebSocket connection with Socket.io
- User authentication for socket connections
- Real-time message delivery
- Connection state management

### Frontend Architecture

**Component Structure:**
- Functional components with React Hooks
- Protected routes based on user roles
- Reusable UI components
- Centralized state management

**API Communication:**
- Axios interceptors for authentication
- Consistent error handling
- Loading states for better UX

**Real-Time Updates:**
- Socket.io client integration
- Automatic reconnection handling
- Real-time message notifications

### Security Features

✅ **Password Security:** BCrypt hashing with salt  
✅ **Authentication:** JWT tokens with expiration  
✅ **Authorization:** Role-based access control  
✅ **SQL Injection Prevention:** Parameterized queries  
✅ **XSS Prevention:** React auto-escaping  
✅ **CORS Configuration:** Controlled origin access

---

## Troubleshooting

### Database Connection Error
**Problem:** Can't connect to PostgreSQL  
**Solution:**
- Ensure PostgreSQL is running: `sudo systemctl status postgresql` (Linux) or check Services (Windows)
- Verify database exists: `psql -U postgres -l`
- Check credentials in `backend/.env`

### Port Already in Use
**Problem:** Port 5001 or 3000 is already in use  
**Solution:**
- Change `PORT` in `backend/.env` to a different number (e.g., 5002)
- Update `REACT_APP_API_URL` in `frontend/.env` accordingly
- Or kill the process using the port

### Can't Login
**Problem:** Login fails with admin/admin  
**Solution:**
- Make sure you ran `node seedAdmin.js`
- Check if database tables exist: `psql -U postgres -d simple_workforce_manager -c "\dt"`
- Try running `node setupDatabase.js` again

### Frontend Can't Connect to Backend
**Problem:** API calls fail  
**Solution:**
- Verify backend is running (check Terminal 1)
- Check `REACT_APP_API_URL` in `frontend/.env`
- Ensure `CORS_ORIGIN` in `backend/.env` matches frontend URL
- Clear browser cache and restart frontend

### WebSocket Connection Issues
**Problem:** Chat doesn't work in real-time  
**Solution:**
- Check browser console for errors
- Verify backend Socket.io is running
- Ensure firewall isn't blocking WebSocket connections

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## Support

For issues or questions, please open an issue on GitHub.

---

**Tested On:** Windows 10/11, macOS, Ubuntu Linux  
**Recommended Browser:** Google Chrome, Mozilla Firefox
