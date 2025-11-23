# Simple Workforce Manager

A comprehensive web-based workforce management system for small to medium businesses, built with the PERN stack (PostgreSQL, Express, React, Node.js).

**Version:** 1.1.0  
**Status:** ✅ Production Ready  
**Built with:** React 19, Node.js 18+, PostgreSQL 13+, Socket.io

---

## 📋 Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [Default Credentials](#default-credentials)
7. [User Roles](#user-roles)
8. [Technologies](#technologies)
9. [Project Structure](#project-structure)
10. [Mobile Access](#mobile-access)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)
13. [Documentation](#documentation)

---

## ✨ Features

### Core Functionality
- **User Management** - Create, edit, delete users with role-based access (Admin, Manager, Staff)
- **Task Management** - Assign tasks, track status (Pending, In Progress, Completed), set due dates
- **Attendance System** - Clock in/out with automatic timestamps, view attendance history
- **Real-Time Chat** - Instant messaging with WebSocket, search users, block/unblock conversations
- **Reports & Complaints** - Submit daily reports, complaint system with threaded replies
- **Feedback System** - Staff feedback submission with management responses
- **Allowances Management** - Track employee allowances with different frequencies
- **Profile Management** - Self-service profile updates for all users

### Security Features
- ✅ BCrypt password hashing (10 salt rounds)
- ✅ JWT authentication (1-hour token expiration)
- ✅ Rate limiting (5 login attempts per 15 minutes)
- ✅ API rate limiting (100 requests per minute per IP)
- ✅ SQL injection prevention (parameterized queries)
- ✅ Role-based access control
- ✅ HTTP request logging with morgan

### Performance Features
- ✅ 29 database indexes for optimal query performance (10-100x faster)
- ✅ Connection pool optimization (max: 20, min: 5 connections)
- ✅ Efficient query optimization
- ✅ Real-time WebSocket communication

---

## 📦 Prerequisites

Before installation, ensure you have:

1. **Node.js** 18.0.0 or higher - [Download](https://nodejs.org)
2. **PostgreSQL** 13.0 or higher - [Download](https://www.postgresql.org/download/)
3. **Git** - [Download](https://git-scm.com)

**System Requirements:**
- RAM: 8GB minimum (16GB recommended)
- Storage: 20GB available space
- OS: Windows 10+, macOS 11+, or Linux (Ubuntu 20.04+)

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/kisswh0re/SimpleWorkforceManager.git
cd SimpleWorkforceManager
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend (new terminal)
cd frontend
npm install
```

### 3. Setup Database

```bash
# Create database
psql -U postgres
CREATE DATABASE simple_workforce_manager;
\q

# Initialize schema and create 29 performance indexes
cd backend
node setupDatabase.js

# Create default admin account
node seedAdmin.js

# Verify setup
node verifySetup.js
```

### 4. Configure Environment

**Backend (`backend/.env`):**
```ini
PORT=5001
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=simple_workforce_manager
DB_PASSWORD=your_postgres_password
DB_PORT=5432
JWT_SECRET=your_secure_random_string_min_32_chars
CORS_ORIGIN=http://localhost:3000
FRONTEND_URL=http://localhost:3000

# Optional: SMTP for password reset
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

**Frontend (`frontend/.env`):**
```ini
REACT_APP_API_URL=http://localhost:5001/api
```

### 5. Start Application

```bash
# Terminal 1 - Backend
cd backend
node index.js

# Terminal 2 - Frontend
cd frontend
npm start
```

✅ **Backend:** http://localhost:5001  
✅ **Frontend:** http://localhost:3000 (opens automatically)

**Setup Time:** 5-10 minutes

---

## 🔐 Default Credentials

**Admin Account:**
- Username: `admin`
- Password: `admin`

⚠️ **IMPORTANT:** Change password immediately after first login!

---

## 👥 User Roles

### Admin
- Full system access
- User management (create, edit, delete)
- System settings configuration
- View all reports, complaints, feedback
- Manage allowances

### Manager
- Task assignment and management
- Attendance monitoring (all staff)
- View and respond to reports
- Handle complaints and feedback
- Manage allowances
- Real-time chat

### Staff
- View and update assigned tasks
- Clock in/out for attendance
- Submit reports, complaints, feedback
- View personal allowances
- Real-time chat
- Profile management

---

## 🛠️ Technologies

### Frontend
- **React 19.2.0** - UI framework with Hooks
- **Ant Design 5.28.0** - UI component library
- **Socket.io-client 4.8.1** - Real-time communication
- **Axios 1.13.1** - HTTP client
- **React Router DOM 7.9.5** - Client-side routing
- **Moment 2.30.1** - Date/time formatting

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express 5.1.0** - Web framework
- **PostgreSQL 13+** - Relational database
- **Socket.io 4.8.1** - WebSocket server
- **JWT 9.0.2** - Authentication tokens
- **BCrypt 6.0.0** - Password hashing
- **Morgan 1.10.1** - HTTP logging
- **Express-rate-limit 8.2.1** - Rate limiting

---

## 📁 Project Structure

```
SimpleWorkforceManager/
├── backend/                    # Server application
│   ├── routes/                # API endpoints (11 modules)
│   │   ├── auth.js           # Authentication
│   │   ├── staff.js          # User management
│   │   ├── tasks.js          # Task management
│   │   ├── attendance.js     # Attendance tracking
│   │   ├── chat.js           # Real-time chat
│   │   ├── reports.js        # Report submission
│   │   ├── complaints.js     # Complaint system
│   │   ├── feedback.js       # Feedback system
│   │   ├── allowances.js     # Allowance management
│   │   ├── profile.js        # Profile management
│   │   └── settings.js       # System settings
│   ├── middleware/            # Authentication middleware
│   ├── utils/                 # Helper functions
│   ├── .env.example           # Environment template
│   ├── index.js               # Server entry point
│   ├── db.js                  # Database connection
│   ├── setupDatabase.js       # Schema + 29 indexes
│   ├── seedAdmin.js           # Create admin
│   ├── addIndexes.js          # Add indexes to existing DB
│   └── verifySetup.js         # Verify installation
│
├── frontend/                   # Client application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── utils/             # Helper functions
│   │   ├── api.js             # Axios config
│   │   ├── socket.js          # Socket.io client
│   │   └── App.js             # Main component
│   ├── .env.example           # Environment template
│   └── package.json
│
├── SRS/                        # Software Requirements Specification
│   ├── 1.1 Overall Description.md
│   ├── 1.2 External Interface Requirements.md
│   ├── 1.3 Functional Requirements.md
│   ├── 1.4 Performance Requirements.md
│   ├── 1.5 Design Constraints.md
│   ├── 1.6 Data Flow Diagrams.md
│   ├── 1.7 System Features.md
│   ├── 1.8 System Flow.md
│   ├── 1.9 Use Cases.md
│   └── README.md              # SRS navigation
│
└── README.md                   # This file
```

---

## 📱 Mobile Access

### Access from Mobile Devices (LAN)

1. **Find Server IP Address:**
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   # or
   ip addr show
   ```

2. **Update Frontend Configuration:**
   ```ini
   # frontend/.env
   REACT_APP_API_URL=http://YOUR_SERVER_IP:5001/api
   ```

3. **Update Backend CORS:**
   ```ini
   # backend/.env
   CORS_ORIGIN=http://YOUR_SERVER_IP:3000
   ```

4. **Access from Mobile:**
   - Open browser on mobile device
   - Navigate to: `http://YOUR_SERVER_IP:3000`
   - Login with credentials

**Note:** Ensure both devices are on the same network and firewall allows connections.

---

## 🚀 Deployment

### Production Setup

```bash
# 1. Setup environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
# Edit .env files with production values

# 2. Initialize database
cd backend
node setupDatabase.js && node seedAdmin.js

# 3. Build and deploy with PM2
cd ../frontend && npm run build
npm install -g pm2
cd ../backend && pm2 start index.js --name swm-backend
cd ../frontend/build && pm2 serve . 3000 --name swm-frontend --spa
pm2 save && pm2 startup
```

⚠️ **Security:** Change default admin password, use strong JWT_SECRET, enable HTTPS

---

## 🔧 Troubleshooting

### Common Issues

#### Database Connection Error
**Problem:** Can't connect to PostgreSQL  
**Solution:**
- Check PostgreSQL is running: `sudo systemctl status postgresql` (Linux) or Services (Windows)
- Verify database exists: `psql -U postgres -l`
- Check credentials in `backend/.env`
- Ensure PostgreSQL is listening on correct port (default: 5432)

#### Port Already in Use
**Problem:** Port 5001 or 3000 is already in use  
**Solution:**
```bash
# Find process using port
lsof -i :5001  # macOS/Linux
netstat -ano | findstr :5001  # Windows

# Kill process or change port in .env files
```

#### Login Fails
**Problem:** Can't login with admin/admin  
**Solution:**
- Verify `seedAdmin.js` was executed
- Check database tables exist: `psql -U postgres -d simple_workforce_manager -c "\dt"`
- Re-run setup: `node setupDatabase.js && node seedAdmin.js`

#### Frontend Can't Connect to Backend
**Problem:** API calls fail  
**Solution:**
- Verify backend is running (check terminal)
- Check `REACT_APP_API_URL` in `frontend/.env`
- Ensure `CORS_ORIGIN` in `backend/.env` matches frontend URL
- Clear browser cache and restart

#### WebSocket/Chat Not Working
**Problem:** Real-time chat doesn't work  
**Solution:**
- Check browser console for errors
- Verify Socket.io is running (backend logs)
- Ensure firewall allows WebSocket connections
- Check network allows WebSocket protocol

#### Slow Performance
**Problem:** Queries are slow  
**Solution:**
- Verify indexes were created: `node backend/verifySetup.js`
- Run `node backend/addIndexes.js` if upgrading from older version
- Check database has sufficient resources
- Monitor with: `psql -U postgres -d simple_workforce_manager -c "SELECT * FROM pg_stat_activity;"`

### Verification Commands

```bash
# Check system health
cd backend
node verifySetup.js

# Check database
psql -U postgres -d simple_workforce_manager -c "SELECT COUNT(*) FROM users;"

# Check PM2 processes
pm2 status
pm2 logs swm-backend

# Check disk space
df -h

# Check memory
free -h
```

---

## 📚 Documentation

### Software Requirements Specification

The `SRS/` folder contains comprehensive software requirements specification:

1. **[1.1 Overall Description](SRS/1.1%20Overall%20Description.md)** - System overview, technology stack, user roles
2. **[1.2 External Interface Requirements](SRS/1.2%20External%20Interface%20Requirements.md)** - API specifications, hardware/software interfaces
3. **[1.3 Functional Requirements](SRS/1.3%20Functional%20Requirements.md)** - Detailed functional specifications
4. **[1.4 Performance Requirements](SRS/1.4%20Performance%20Requirements.md)** - Response times, scalability, resource utilization
5. **[1.5 Design Constraints](SRS/1.5%20Design%20Constraints.md)** - Technology constraints, platform requirements
6. **[1.6 Data Flow Diagrams](SRS/1.6%20Data%20Flow%20Diagrams.md)** - System data flows and architecture
7. **[1.7 System Features](SRS/1.7%20System%20Features.md)** - Detailed feature descriptions
8. **[1.8 System Flow](SRS/1.8%20System%20Flow.md)** - End-to-end process flows
9. **[1.9 Use Cases](SRS/1.9%20Use%20Cases.md)** - 16 comprehensive use cases

### Quick Reference

**API Endpoints:**
- Authentication: `/api/auth/*`
- User Management: `/api/staff/*`
- Tasks: `/api/tasks/*`
- Attendance: `/api/attendance/*`
- Chat: `/api/chat/*`
- Reports: `/api/reports/*`
- Complaints: `/api/complaints/*`
- Feedback: `/api/feedback/*`
- Allowances: `/api/allowances/*`
- Profile: `/api/profile/*`
- Settings: `/api/settings/*`

**Database Tables:**
- users, user_profiles
- tasks, attendance
- messages, conversations
- reports, complaints, complaint_replies
- feedback, allowances
- system_settings

**Performance Indexes:** 29 indexes automatically created for optimal query performance

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

---

## 📄 License

This project is open source and available for use.

---

## 📞 Support

For issues, questions, or feature requests:
- Open an issue on GitHub
- Review the [SRS Documentation](SRS/README.md)
- Check [Troubleshooting](#troubleshooting) section

---

## 🎯 Quick Commands Reference

```bash
# Setup
npm install                    # Install dependencies
node setupDatabase.js          # Initialize database + indexes
node seedAdmin.js              # Create admin account
node verifySetup.js            # Verify installation

# Development
node index.js                  # Start backend
npm start                      # Start frontend (in frontend/)

# Production
npm run build                  # Build frontend
pm2 start index.js             # Start with PM2
pm2 logs                       # View logs
pm2 restart all                # Restart services

# Database
pg_dump -U postgres simple_workforce_manager > backup.sql  # Backup
psql -U postgres simple_workforce_manager < backup.sql     # Restore
node addIndexes.js             # Add performance indexes

# Maintenance
pm2 status                     # Check status
pm2 monit                      # Monitor resources
pm2 save                       # Save configuration
```

---

**Version:** 1.1.0  
**Status:** ✅ Production Ready  
**Last Updated:** November 24, 2025  
**Tested On:** Windows 10/11, macOS 11+, Ubuntu 20.04+  
**Recommended Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## 🎯 Quick Start Commands

```bash
# Verify deployment readiness
./verify-deployment.sh

# Setup environment
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Initialize and run
cd backend && npm install && node setupDatabase.js && node seedAdmin.js
cd ../frontend && npm install && npm start
```
