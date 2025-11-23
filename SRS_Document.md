# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

## Simple Workforce Manager

---

**Version:** 1.0  
**Date:** [TO BE FILLED]

---

**Prepared By:**  
[STUDENT NAME]  
[ROLL NUMBER]

**Course:**  
[COURSE NAME AND CODE]

**Institution:**  
[COLLEGE/UNIVERSITY NAME]

**Instructor:**  
[PROFESSOR NAME]

**Academic Year/Semester:**  
[TO BE FILLED]

---

## Document Revision History

| Version | Date | Description | Author |
|---------|------|-------------|--------|
| 1.0 | [TO BE FILLED] | Initial SRS Document | [TO BE FILLED] |

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 [Purpose](#11-purpose)
   - 1.2 [Scope](#12-scope)
   - 1.3 [Definitions, Acronyms, and Abbreviations](#13-definitions-acronyms-and-abbreviations)
   - 1.4 [References](#14-references)
   - 1.5 [Document Overview](#15-document-overview)

2. [Overall Description](#2-overall-description)
   - 2.1 [Product Perspective](#21-product-perspective)
   - 2.2 [Product Features](#22-product-features)
   - 2.3 [User Classes and Characteristics](#23-user-classes-and-characteristics)
   - 2.4 [Operating Environment](#24-operating-environment)
   - 2.5 [Design and Implementation Constraints](#25-design-and-implementation-constraints)
   - 2.6 [Assumptions and Dependencies](#26-assumptions-and-dependencies)

3. [System Features (Functional Requirements)](#3-system-features-functional-requirements)
   - 3.1 [User Management](#31-user-management)
   - 3.2 [Authentication and Authorization](#32-authentication-and-authorization)
   - 3.3 [Task Management](#33-task-management)
   - 3.4 [Attendance Tracking](#34-attendance-tracking)
   - 3.5 [Real-Time Chat System](#35-real-time-chat-system)
   - 3.6 [Reports Management](#36-reports-management)
   - 3.7 [Complaints Management](#37-complaints-management)
   - 3.8 [Feedback System](#38-feedback-system)
   - 3.9 [Allowances Management](#39-allowances-management)
   - 3.10 [Profile Management](#310-profile-management)
   - 3.11 [System Settings](#311-system-settings)

4. [External Interface Requirements](#4-external-interface-requirements)
   - 4.1 [User Interfaces](#41-user-interfaces)
   - 4.2 [Hardware Interfaces](#42-hardware-interfaces)
   - 4.3 [Software Interfaces](#43-software-interfaces)
   - 4.4 [Communication Interfaces](#44-communication-interfaces)

5. [Non-Functional Requirements](#5-non-functional-requirements)
   - 5.1 [Performance Requirements](#51-performance-requirements)
   - 5.2 [Security Requirements](#52-security-requirements)
   - 5.3 [Safety Requirements](#53-safety-requirements)
   - 5.4 [Reliability](#54-reliability)
   - 5.5 [Availability](#55-availability)
   - 5.6 [Maintainability](#56-maintainability)
   - 5.7 [Usability](#57-usability)
   - 5.8 [Compliance and Legal Requirements](#58-compliance-and-legal-requirements)

6. [System Architecture and Design](#6-system-architecture-and-design)
   - 6.1 [System Architecture Overview](#61-system-architecture-overview)
   - 6.2 [Database Design](#62-database-design)
   - 6.3 [API Design](#63-api-design)

7. [Data Requirements](#7-data-requirements)
   - 7.1 [Data Structures and Entities](#71-data-structures-and-entities)
   - 7.2 [Database Requirements](#72-database-requirements)
   - 7.3 [Storage, Backup, and Recovery](#73-storage-backup-and-recovery)
   - 7.4 [Data Privacy](#74-data-privacy)

8. [System Flow](#8-system-flow)
   - 8.1 [Authentication Flow](#81-authentication-flow)
   - 8.2 [Main Processing Flows](#82-main-processing-flows)
   - 8.3 [Error Handling Flow](#83-error-handling-flow)

9. [System Models](#9-system-models)
   - 9.1 [Use Case Diagrams](#91-use-case-diagrams)
   - 9.2 [Use Case Descriptions](#92-use-case-descriptions)
   - 9.3 [Data Flow Diagrams](#93-data-flow-diagrams)
   - 9.4 [Sequence Diagrams](#94-sequence-diagrams)
   - 9.5 [Entity-Relationship Diagram](#95-entity-relationship-diagram)
   - 9.6 [Activity Diagrams](#96-activity-diagrams)

10. [Constraints](#10-constraints)
    - 10.1 [Technical Constraints](#101-technical-constraints)
    - 10.2 [Environmental Constraints](#102-environmental-constraints)
    - 10.3 [Regulatory Constraints](#103-regulatory-constraints)

11. [Appendices](#11-appendices)
    - A. [Glossary](#a-glossary)
    - B. [Technology Stack Details](#b-technology-stack-details)
    - C. [Sample UI Screens](#c-sample-ui-screens)
    - D. [API Specifications](#d-api-specifications)

---

# 1. Introduction

## 1.1 Purpose

[TO BE FILLED BY STUDENT]

This Software Requirements Specification (SRS) document provides a comprehensive description of the Simple Workforce Manager system. It details the functional and non-functional requirements, system architecture, design constraints, and interfaces for the workforce management application.

The document serves as:
- A contractual basis for system development
- A reference for system validation and verification
- Documentation for future maintenance and enhancement
- Academic submission for course evaluation

## 1.2 Scope

### 1.2.1 Product Name
**Simple Workforce Manager** - A web-based workforce management system for small to medium-sized businesses.

### 1.2.2 Product Objectives
The Simple Workforce Manager is designed to replace manual and spreadsheet-based workforce management processes with an integrated, automated, and user-friendly digital solution. The system operates as a standalone application that does not require integration with external enterprise systems.

### 1.2.3 Target Users
The system is intended for small to medium-sized businesses with 10-100 employees who need to manage their workforce efficiently without the complexity and cost of enterprise-level solutions.

### 1.2.4 System Capabilities

The system shall provide the following capabilities:

**User Management:**
- Create, read, update, and delete user accounts
- Support three distinct user roles: Admin, Manager, and Staff
- Manage user profiles with personal and professional information

**Task Management:**
- Create and assign tasks to staff members
- Track task status (Pending, In Progress, Completed)
- Set and monitor task due dates
- View task history and assignments

**Attendance Tracking:**
- Clock-in and clock-out functionality for staff
- Automatic timestamp recording
- Attendance history viewing and reporting
- Real-time attendance status monitoring

**Real-Time Communication:**
- Instant messaging between users
- User search and conversation initiation
- Conversation management (block/unblock)
- Chat history management

**Reports and Feedback:**
- Daily report submission by staff
- Complaint submission and tracking
- Feedback collection and response system
- Administrative response capabilities

**Allowances Management:**
- Create and manage employee allowances
- Support multiple frequency types (monthly, one-time, etc.)
- Track allowance history

**System Administration:**
- Profile management for all users
- System-wide settings configuration
- Password management and reset functionality
- Role-based access control

### 1.2.5 Benefits
- Eliminates manual record-keeping and reduces paperwork
- Improves communication between management and staff
- Provides real-time visibility into workforce activities
- Centralizes workforce data in a secure, accessible location
- Reduces administrative overhead and human errors
- Enables data-driven decision making

### 1.2.6 Out of Scope
The following features are explicitly excluded from this version:
- Native mobile applications (iOS/Android)
- Payroll processing and salary calculations
- Advanced HR analytics and reporting dashboards
- Integration with third-party systems (accounting, ERP, etc.)
- Biometric attendance devices
- Video conferencing capabilities
- Document management system
- Performance appraisal workflows
- Leave management system
- Shift scheduling and roster management

## 1.3 Definitions, Acronyms, and Abbreviations

### Definitions

**Admin (Administrator):** A user with full system access who can manage all users, system settings, and has oversight of all system functions.

**Manager:** A user with elevated privileges who can manage tasks, view reports and complaints, manage allowances, and oversee staff activities.

**Staff:** A regular user who can view assigned tasks, clock in/out, submit reports and complaints, use chat, and manage their own profile.

**Clock-In:** The action of recording the start time of a work shift.

**Clock-Out:** The action of recording the end time of a work shift.

**Conversation:** A chat thread between two users containing message history.

**Task:** A work assignment with a title, description, assignee, status, and due date.

**Allowance:** A financial benefit or compensation provided to an employee (e.g., travel allowance, meal allowance).

**Report:** A daily work summary submitted by staff members.

**Complaint:** A formal issue or concern raised by staff members.

**Feedback:** General suggestions or comments provided by staff members.

### Acronyms

**API:** Application Programming Interface  
**CORS:** Cross-Origin Resource Sharing  
**CRUD:** Create, Read, Update, Delete  
**DFD:** Data Flow Diagram  
**ER:** Entity-Relationship  
**HTTP:** Hypertext Transfer Protocol  
**HTTPS:** Hypertext Transfer Protocol Secure  
**JWT:** JSON Web Token  
**RBAC:** Role-Based Access Control  
**REST:** Representational State Transfer  
**SPA:** Single Page Application  
**SQL:** Structured Query Language  
**SRS:** Software Requirements Specification  
**UI:** User Interface  
**UX:** User Experience  
**WebSocket:** A protocol for full-duplex communication channels

### Abbreviations

**Auth:** Authentication  
**DB:** Database  
**ID:** Identifier  
**JSON:** JavaScript Object Notation  
**MTBF:** Mean Time Between Failures  
**MTTR:** Mean Time To Recovery  
**NFR:** Non-Functional Requirement  
**PK:** Primary Key  
**FK:** Foreign Key

## 1.4 References

1. **IEEE Std 830-1998:** IEEE Recommended Practice for Software Requirements Specifications

2. **Technology Documentation:**
   - React Documentation: https://react.dev/
   - Node.js Documentation: https://nodejs.org/docs/
   - Express.js Documentation: https://expressjs.com/
   - PostgreSQL Documentation: https://www.postgresql.org/docs/
   - Socket.io Documentation: https://socket.io/docs/

3. **Security Standards:**
   - OWASP Top 10 Web Application Security Risks
   - JWT Best Practices: https://tools.ietf.org/html/rfc7519

4. **Design Patterns:**
   - RESTful API Design Best Practices
   - React Component Design Patterns

5. **Database Design:**
   - Database Normalization Principles
   - PostgreSQL Best Practices

6. **Project Repository:**
   - GitHub: https://github.com/kisswh0re/SimpleWorkforceManager

## 1.5 Document Overview

This SRS document is organized into eleven major sections:

**Section 1 (Introduction):** Provides an overview of the document, defines the scope of the system, and establishes terminology.

**Section 2 (Overall Description):** Describes the general factors that affect the product and its requirements, including product perspective, features, user characteristics, and constraints.

**Section 3 (System Features):** Details all functional requirements organized by feature modules, including inputs, outputs, processing logic, and error handling.

**Section 4 (External Interface Requirements):** Specifies the interfaces between the system and external entities, including user interfaces, hardware, software, and communication protocols.

**Section 5 (Non-Functional Requirements):** Defines quality attributes such as performance, security, reliability, and usability requirements.

**Section 6 (System Architecture and Design):** Presents the high-level architecture, database design, and API structure.

**Section 7 (Data Requirements):** Describes data structures, database requirements, storage, backup, and privacy considerations.

**Section 8 (System Flow):** Illustrates the flow of control and data through the system for key processes.

**Section 9 (System Models):** Provides visual models including use case diagrams, data flow diagrams, sequence diagrams, ER diagrams, and activity diagrams.

**Section 10 (Constraints):** Lists technical, environmental, and regulatory constraints that limit design choices.

**Section 11 (Appendices):** Contains supplementary information including glossary, technology details, UI screens, and API specifications.

---

# 2. Overall Description

## 2.1 Product Perspective

The Simple Workforce Manager is a standalone, self-contained web-based application designed to replace manual and spreadsheet-based workforce management processes in small to medium-sized businesses. The system does not integrate with external enterprise systems and operates independently.

### 2.1.1 System Context

The system exists within the following context:

**Replacement System:** The Simple Workforce Manager replaces:
- Manual attendance registers and timesheets
- Excel/Google Sheets for task tracking
- Email-based communication for work-related matters
- Paper-based report and complaint submission
- Manual allowance tracking spreadsheets

**Standalone Operation:** The system operates independently without requiring:
- Integration with existing HR management systems
- Connection to payroll processing systems
- Integration with enterprise resource planning (ERP) systems
- Third-party authentication providers
- External data sources

### 2.1.2 System Interfaces

**User Interface:** Web-based responsive interface accessible through modern web browsers

**Database Interface:** PostgreSQL relational database for persistent data storage

**Real-Time Communication:** WebSocket-based bidirectional communication for instant messaging

**Email Interface:** SMTP-based email service for password reset functionality

### 2.1.3 System Architecture

The system follows a three-tier architecture:

1. **Presentation Tier:** React-based single-page application (SPA) running in the user's web browser
2. **Application Tier:** Node.js/Express.js RESTful API server handling business logic
3. **Data Tier:** PostgreSQL database managing persistent data storage

### 2.1.4 System Boundaries

**Within System Scope:**
- User authentication and authorization
- Task creation, assignment, and tracking
- Attendance recording and monitoring
- Real-time chat communication
- Report, complaint, and feedback management
- Allowance tracking
- Profile and settings management

**Outside System Scope:**
- Payroll calculations and processing
- Leave and vacation management
- Performance evaluation workflows
- Document storage and management
- Integration with external systems
- Mobile native applications

## 2.2 Product Features

The Simple Workforce Manager provides the following major features:

### 2.2.1 User Management
- Multi-role user system (Admin, Manager, Staff)
- User account lifecycle management (create, read, update, delete)
- Profile management with personal and professional information
- Role-based access control (RBAC)

### 2.2.2 Authentication and Security
- Secure login with username and password
- JWT-based stateless authentication
- Password encryption using BCrypt
- Password reset via email
- Forced password change for default passwords
- Session management with token expiration

### 2.2.3 Task Management
- Task creation and assignment by managers
- Task status tracking (Pending, In Progress, Completed)
- Due date management
- Task history and audit trail
- Staff can update their own task status

### 2.2.4 Attendance System
- Clock-in/clock-out functionality for staff
- Automatic timestamp recording
- Attendance history viewing
- Real-time attendance status
- Attendance reporting for managers

### 2.2.5 Real-Time Chat
- Instant messaging between users
- User search functionality
- Conversation management
- Block/unblock conversations
- Clear chat history
- Real-time message delivery using WebSockets

### 2.2.6 Reports Management
- Daily report submission by staff
- Report viewing for managers and admins
- Report history tracking
- Timestamp recording

### 2.2.7 Complaints System
- Complaint submission by staff
- Complaint status tracking (Open, Resolved)
- Multi-threaded reply system
- Admin/Manager response capabilities
- Complaint history and audit trail

### 2.2.8 Feedback System
- Feedback submission by staff
- Admin/Manager response functionality
- Feedback history tracking
- Response timestamp recording

### 2.2.9 Allowances Management
- Allowance creation and assignment
- Multiple frequency types (monthly, one-time, etc.)
- Allowance history tracking
- CRUD operations for managers

### 2.2.10 Profile Management
- Personal information management
- Professional details (job title, hire date)
- Contact information
- Profile viewing and editing

### 2.2.11 System Settings
- Personal preferences (date format, notifications)
- System-wide settings (company name, currency)
- Password change functionality
- Configuration management

## 2.3 User Classes and Characteristics

The system supports three distinct user classes, each with different characteristics, privileges, and technical proficiency requirements.

### 2.3.1 Administrator (Admin)

**Description:** System administrators with full access to all system functions and data.

**Characteristics:**
- Technical Proficiency: Moderate to High
- Frequency of Use: Daily
- Number of Users: 1-2 per organization
- Training Required: 2-4 hours

**Responsibilities:**
- Manage all user accounts (create, edit, delete)
- Configure system-wide settings
- Oversee all system activities
- Manage system security
- Handle escalated issues

**Privileges:**
- Full CRUD access to user accounts
- Access to all system modules
- System configuration rights
- View all data across the organization
- Manage system settings

**Technical Skills:**
- Basic understanding of user management
- Familiarity with web applications
- Understanding of role-based permissions
- Basic troubleshooting abilities

### 2.3.2 Manager

**Description:** Supervisory users who manage teams, assign tasks, and oversee staff activities.

**Characteristics:**
- Technical Proficiency: Moderate
- Frequency of Use: Daily
- Number of Users: 5-15% of total users
- Training Required: 1-2 hours

**Responsibilities:**
- Create and assign tasks to staff
- Monitor task completion and progress
- View attendance records
- Review and respond to reports, complaints, and feedback
- Manage employee allowances
- Oversee team activities

**Privileges:**
- Create, edit, and delete tasks
- View all staff attendance records
- Access all reports, complaints, and feedback
- Manage allowances for staff
- View staff profiles (read-only)
- Cannot create or delete user accounts

**Technical Skills:**
- Comfortable with web applications
- Basic task management understanding
- Ability to interpret reports and data
- Communication skills for responding to complaints

### 2.3.3 Staff

**Description:** Regular employees who use the system for daily work activities.

**Characteristics:**
- Technical Proficiency: Basic to Moderate
- Frequency of Use: Daily
- Number of Users: 80-90% of total users
- Training Required: 30 minutes to 1 hour

**Responsibilities:**
- Clock in and out for attendance
- View and update assigned tasks
- Submit daily reports
- Submit complaints and feedback
- Use chat for communication
- Manage personal profile
- View personal allowances

**Privileges:**
- Clock in/out for attendance
- View and update status of assigned tasks
- Submit reports, complaints, and feedback
- Send and receive chat messages
- Edit own profile
- View own allowances
- Change own password

**Technical Skills:**
- Basic computer literacy
- Ability to navigate web applications
- Basic text input and form filling
- Understanding of instant messaging

### 2.3.4 User Characteristics Summary

| Characteristic | Admin | Manager | Staff |
|----------------|-------|---------|-------|
| Technical Proficiency | Moderate-High | Moderate | Basic-Moderate |
| System Access Level | Full | Elevated | Limited |
| Training Time | 2-4 hours | 1-2 hours | 30-60 minutes |
| Frequency of Use | Daily | Daily | Daily |
| Primary Functions | System Management | Team Oversight | Daily Operations |
| Data Access | All Data | Team Data | Personal Data |

## 2.4 Operating Environment

### 2.4.1 Client-Side Environment

**Hardware Requirements:**
- Processor: Dual-core 1.6 GHz or higher
- RAM: Minimum 4 GB
- Storage: 100 MB free space for browser cache
- Display: Minimum 1024x768 resolution
- Network: Stable internet connection (minimum 1 Mbps)

**Software Requirements:**
- Operating System: Windows 10/11, macOS 10.14+, or Linux (Ubuntu 18.04+)
- Web Browser (one of the following):
  - Google Chrome 90 or higher
  - Mozilla Firefox 88 or higher
  - Microsoft Edge 90 or higher
  - Safari 14 or higher
- JavaScript must be enabled
- Cookies must be enabled for authentication

**Network Requirements:**
- Internet/Intranet connectivity
- HTTP/HTTPS protocol support
- WebSocket protocol support for real-time chat
- Firewall must allow connections to server ports

### 2.4.2 Server-Side Environment

**Hardware Requirements:**
- Processor: Quad-core 2.0 GHz or higher
- RAM: Minimum 8 GB (16 GB recommended)
- Storage: Minimum 50 GB SSD
- Network: 100 Mbps or higher network interface

**Software Requirements:**
- Operating System: Linux (Ubuntu 20.04 LTS or higher), Windows Server 2019+, or macOS Server
- Node.js: Version 18.0 or higher
- PostgreSQL: Version 13.0 or higher
- npm: Version 8.0 or higher

**Network Requirements:**
- Static IP address or domain name
- Open ports: 5001 (API server), 5432 (PostgreSQL)
- SMTP server access for email functionality
- SSL/TLS certificate for HTTPS (recommended for production)

### 2.4.3 Database Environment

**PostgreSQL Database:**
- Version: 13.0 or higher
- Storage: Minimum 10 GB (scales with data)
- Backup storage: Equal to database size
- Character encoding: UTF-8
- Timezone: UTC

### 2.4.4 Development Environment

**Frontend Development:**
- Node.js 18+
- React 19.2
- npm or yarn package manager
- Code editor (VS Code, WebStorm, etc.)

**Backend Development:**
- Node.js 18+
- Express.js 5.1
- PostgreSQL 13+
- Postman or similar API testing tool

### 2.4.5 Deployment Environment

**Production Deployment:**
- Web server: Node.js with PM2 or similar process manager
- Reverse proxy: Nginx or Apache (recommended)
- Database: PostgreSQL with regular backups
- SSL/TLS: Let's Encrypt or commercial certificate
- Monitoring: System monitoring tools (optional)

**Network Configuration:**
- CORS configured for frontend domain
- WebSocket support enabled
- Rate limiting configured
- Firewall rules configured

## 2.5 Design and Implementation Constraints

### 2.5.1 Technology Constraints

**Frontend Technology:**
- Must use React framework for user interface development
- Must be a single-page application (SPA)
- Must use Ant Design component library for UI consistency
- Must support modern ES6+ JavaScript features

**Backend Technology:**
- Must use Node.js with Express.js framework
- Must implement RESTful API architecture
- Must use Socket.io for real-time communication
- Must follow MVC or similar architectural pattern

**Database Technology:**
- Must use PostgreSQL as the relational database
- No support for other database systems (MySQL, MongoDB, etc.)
- Must use parameterized queries to prevent SQL injection
- Must maintain referential integrity with foreign keys

**Authentication:**
- Must use JWT (JSON Web Tokens) for stateless authentication
- Must use BCrypt for password hashing
- Token expiration must be enforced
- No support for OAuth or third-party authentication providers

### 2.5.2 Performance Constraints

**Response Time:**
- API endpoints must respond within 2 seconds under normal load
- Database queries must execute within 1 second
- Real-time messages must be delivered within 500 milliseconds
- Page load time must not exceed 3 seconds

**Scalability:**
- System must support up to 100 concurrent users
- Database must handle up to 10,000 records per table efficiently
- Chat system must support up to 50 active conversations simultaneously

**Resource Usage:**
- Server memory usage must not exceed 2 GB under normal load
- Database connections must be pooled and reused
- Client-side memory usage must remain under 500 MB

### 2.5.3 Security Constraints

**Password Policy:**
- Minimum password length: 6 characters
- Passwords must be hashed using BCrypt with salt
- Default passwords must be changed on first login
- Password reset tokens expire after 15 minutes

**Authentication:**
- JWT tokens expire after 1 hour
- Tokens must be validated on every protected endpoint
- Failed login attempts should be logged
- No session storage on server side

**Data Protection:**
- All passwords must be encrypted in database
- Sensitive data must not be logged
- SQL injection must be prevented through parameterized queries
- XSS attacks must be prevented through React's built-in escaping

**Access Control:**
- Role-based access control (RBAC) must be enforced
- Users can only access data appropriate to their role
- Admin cannot be deleted through the application
- Staff cannot access other users' personal data

### 2.5.4 Regulatory Constraints

**Data Privacy:**
- User data must be stored securely
- Personal information must be protected
- Users must be able to view their own data
- Data retention policies must be followed

**Compliance:**
- System must comply with local data protection laws
- Audit trails must be maintained for critical operations
- User consent must be obtained for data collection (if required by law)

### 2.5.5 Development Constraints

**Code Quality:**
- Code must follow consistent naming conventions
- Functions must be modular and reusable
- Comments must be provided for complex logic
- Error handling must be implemented throughout

**Version Control:**
- Git must be used for version control
- Meaningful commit messages must be used
- Branching strategy must be followed

**Testing:**
- Critical functions must have test coverage
- API endpoints must be tested
- User interface must be tested across browsers

### 2.5.6 Operational Constraints

**Browser Support:**
- Must support modern browsers only (last 2 versions)
- No support for Internet Explorer
- JavaScript must be enabled
- Cookies must be enabled

**Network Dependency:**
- System requires continuous internet/intranet connectivity
- No offline mode available
- WebSocket connection required for real-time features

**Maintenance:**
- System updates may require downtime
- Database migrations must be planned
- Backup and restore procedures must be documented

## 2.6 Assumptions and Dependencies

### 2.6.1 Assumptions

**User Assumptions:**
1. Users have basic computer literacy and can navigate web applications
2. Users have access to a computer or laptop with a modern web browser
3. Users have stable internet connectivity during system usage
4. Users understand their role and responsibilities within the organization
5. Users will change default passwords upon first login
6. Users will not share their login credentials with others
7. Staff members work regular shifts that require clock-in/clock-out

**Technical Assumptions:**
1. PostgreSQL database is properly installed and configured
2. Node.js runtime environment is available on the server
3. SMTP server is available and configured for sending emails
4. Server has sufficient resources (CPU, RAM, storage) to handle expected load
5. Network infrastructure supports WebSocket connections
6. System administrators have basic knowledge of server management
7. Backup systems are in place for data protection

**Business Assumptions:**
1. Organization has fewer than 100 employees
2. Organization operates during standard business hours
3. Tasks are assigned on a daily or weekly basis
4. Attendance tracking is required for staff members
5. Organization requires basic workforce management capabilities
6. Budget is available for hosting and maintenance
7. Organization has at least one person designated as system administrator

**Environmental Assumptions:**
1. Server environment is secure and protected from unauthorized access
2. Network is protected by firewall and security measures
3. Regular backups are performed by IT infrastructure
4. System will be hosted on a reliable server with minimal downtime
5. Internet service provider offers stable connectivity

### 2.6.2 Dependencies

**External Dependencies:**

1. **Node.js Runtime**
   - System depends on Node.js version 18 or higher
   - npm package manager must be available
   - Impact: System cannot run without Node.js

2. **PostgreSQL Database**
   - System depends on PostgreSQL version 13 or higher
   - Database must be running and accessible
   - Impact: No data persistence without database

3. **SMTP Email Server**
   - Password reset functionality depends on email service
   - SMTP credentials must be configured
   - Impact: Password reset feature unavailable without email service

4. **Network Infrastructure**
   - System depends on stable network connectivity
   - WebSocket protocol support required
   - Impact: Real-time chat unavailable without WebSocket support

5. **Web Browser**
   - System depends on modern web browsers
   - JavaScript and cookies must be enabled
   - Impact: System unusable without compatible browser

**Internal Dependencies:**

1. **Authentication System**
   - All protected features depend on JWT authentication
   - Impact: Users cannot access features without valid authentication

2. **User Management**
   - Task assignment depends on user accounts existing
   - Attendance tracking depends on staff user accounts
   - Impact: Core features require user accounts to be created first

3. **Database Schema**
   - All features depend on proper database schema
   - Foreign key relationships must be maintained
   - Impact: Data integrity issues if schema is incorrect

4. **Role-Based Access Control**
   - Feature access depends on user roles
   - Impact: Incorrect role assignment affects feature availability

**Third-Party Library Dependencies:**

1. **Frontend Libraries:**
   - React 19.2
   - Ant Design 5.28
   - Axios 1.13
   - Socket.io-client 4.8
   - React Router 7.9

2. **Backend Libraries:**
   - Express.js 5.1
   - BCrypt 6.0
   - JSON Web Token 9.0
   - Socket.io 4.8
   - PostgreSQL driver (pg) 8.16
   - Nodemailer 7.0

**Dependency Risks:**

1. **Version Compatibility:** Library updates may introduce breaking changes
2. **Security Vulnerabilities:** Third-party libraries may have security issues
3. **Deprecation:** Libraries may become deprecated or unsupported
4. **Performance:** Library performance may impact system performance
5. **License Changes:** Library licenses may change affecting usage rights

**Mitigation Strategies:**

1. Lock dependency versions in package.json
2. Regularly update dependencies for security patches
3. Monitor security advisories for used libraries
4. Maintain documentation of all dependencies
5. Test thoroughly after dependency updates
6. Have fallback plans for critical dependencies

---

# 3. System Features (Functional Requirements)

This section describes all functional requirements of the Simple Workforce Manager system, organized by feature modules. Each feature includes description, inputs, processing logic, outputs, preconditions, postconditions, exceptions, and priority level.

## 3.1 User Management

### 3.1.1 Feature Description
The User Management module enables administrators to manage user accounts throughout their lifecycle. This includes creating new users, viewing user information, updating user details, and deleting users when necessary. The system supports three user roles (Admin, Manager, Staff) with different privilege levels.

### 3.1.2 Functional Requirements

#### FR-UM-001: Create User Account
**Priority:** High (Essential)

**Description:** Admin can create new user accounts with profile information and assign roles.

**Inputs:**
- Username (string, unique, required)
- Email (string, unique, valid email format, required)
- Password (string, minimum 6 characters, required)
- Role (enum: admin/manager/staff, required)
- First Name (string, required)
- Last Name (string, required)
- Phone Number (string, unique, required)
- Sex (enum: male/female/other, required)
- Job Title (string, optional)

**Processing:**
1. Validate all required fields are provided
2. Check username uniqueness in database
3. Check email uniqueness in database
4. Check phone number uniqueness in database
5. Validate email format
6. Validate password length (minimum 6 characters)
7. Hash password using BCrypt with salt
8. Begin database transaction
9. Insert user record into users table
10. Insert profile record into user_profiles table
11. Set is_default_password flag to true
12. Commit transaction
13. Return success response

**Outputs:**
- Success: HTTP 201, message "User created successfully"
- Failure: HTTP 400/409/500 with error message

**Preconditions:**
- User must be authenticated
- User must have Admin role
- Database must be accessible
- All required fields must be provided

**Postconditions:**
- New user account exists in database
- User can log in with provided credentials
- User profile is created and linked to user account
- User must change password on first login

**Exceptions:**
- E-UM-001: Username already exists → HTTP 409 "Username already taken"
- E-UM-002: Email already exists → HTTP 409 "Email already taken"
- E-UM-003: Phone number already exists → HTTP 409 "Phone number already taken"
- E-UM-004: Invalid email format → HTTP 400 "Invalid email format"
- E-UM-005: Password too short → HTTP 400 "Password must be at least 6 characters"
- E-UM-006: Missing required fields → HTTP 400 "All fields are required"
- E-UM-007: Database error → HTTP 500 "Server error creating user"
- E-UM-008: Transaction rollback → HTTP 500 "Failed to create user"


#### FR-UM-002: View All Users
**Priority:** High (Essential)

**Description:** Admin and Manager can view a list of all non-admin users with their profile information.

**Inputs:**
- Authentication token (JWT)
- User role (from token)

**Processing:**
1. Validate authentication token
2. Check user has Admin or Manager role
3. Query database for all users except admins
4. Join with user_profiles table
5. Return user list with profile information

**Outputs:**
- Success: HTTP 200, JSON array of user objects
- Failure: HTTP 401/403/500 with error message

**Preconditions:**
- User must be authenticated
- User must have Admin or Manager role
- Database must be accessible

**Postconditions:**
- No changes to database
- User list is returned

**Exceptions:**
- E-UM-009: Not authenticated → HTTP 401 "Authentication required"
- E-UM-010: Insufficient permissions → HTTP 403 "Access denied"
- E-UM-011: Database error → HTTP 500 "Server error"

#### FR-UM-003: View Single User
**Priority:** High (Essential)

**Description:** Admin and Manager can view detailed information about a specific user.

**Inputs:**
- User ID (integer, required)
- Authentication token (JWT)

**Processing:**
1. Validate authentication token
2. Check user has Admin or Manager role
3. Query database for user by ID
4. Join with user_profiles table
5. Exclude admin users from results
6. Return user details

**Outputs:**
- Success: HTTP 200, JSON user object with profile
- Failure: HTTP 404/401/403/500 with error message

**Preconditions:**
- User must be authenticated
- User must have Admin or Manager role
- User ID must be valid

**Postconditions:**
- No changes to database
- User details are returned

**Exceptions:**
- E-UM-012: User not found → HTTP 404 "Staff user not found"
- E-UM-013: Not authenticated → HTTP 401 "Authentication required"
- E-UM-014: Insufficient permissions → HTTP 403 "Access denied"
- E-UM-015: Database error → HTTP 500 "Server error"


#### FR-UM-004: Update User Account
**Priority:** High (Essential)

**Description:** Admin can update user account information and profile details.

**Inputs:**
- User ID (integer, required)
- Username (string, unique, required)
- Email (string, unique, valid email format, required)
- Role (enum: admin/manager/staff, required)
- First Name (string, required)
- Last Name (string, required)
- Phone Number (string, unique, required)
- Sex (enum: male/female/other, required)
- Job Title (string, optional)

**Processing:**
1. Validate authentication token
2. Check user has Admin role
3. Validate all required fields
4. Check uniqueness constraints (username, email, phone)
5. Begin database transaction
6. Update users table
7. Upsert user_profiles table (insert or update)
8. Exclude admin users from updates
9. Commit transaction
10. Return success response

**Outputs:**
- Success: HTTP 200, message "User updated successfully"
- Failure: HTTP 400/404/409/500 with error message

**Preconditions:**
- User must be authenticated
- User must have Admin role
- Target user must exist
- Target user must not be admin

**Postconditions:**
- User account is updated in database
- User profile is updated in database
- Changes are immediately effective

**Exceptions:**
- E-UM-016: Username already exists → HTTP 409 "Username already taken"
- E-UM-017: Email already exists → HTTP 409 "Email already taken"
- E-UM-018: Phone already exists → HTTP 409 "Phone number already taken"
- E-UM-019: Missing required fields → HTTP 400 "All required fields must be provided"
- E-UM-020: User not found → HTTP 404 "User not found"
- E-UM-021: Database error → HTTP 500 "Server error"
- E-UM-022: Transaction rollback → HTTP 500 "Failed to update user"

#### FR-UM-005: Delete User Account
**Priority:** High (Essential)

**Description:** Admin can delete user accounts. Admin accounts cannot be deleted.

**Inputs:**
- User ID (integer, required)
- Authentication token (JWT)

**Processing:**
1. Validate authentication token
2. Check user has Admin role
3. Query database to verify user exists
4. Check user is not admin
5. Delete user from database (CASCADE deletes profile)
6. Return success response with deleted username

**Outputs:**
- Success: HTTP 200, message "User [username] deleted successfully"
- Failure: HTTP 404/409/500 with error message

**Preconditions:**
- User must be authenticated
- User must have Admin role
- Target user must exist
- Target user must not be admin

**Postconditions:**
- User account is deleted from database
- User profile is deleted (CASCADE)
- All related records are handled per foreign key constraints
- User cannot log in anymore

**Exceptions:**
- E-UM-023: User not found → HTTP 404 "Staff user not found or is an admin"
- E-UM-024: Foreign key constraint → HTTP 409 "Cannot delete user. They are referenced in other records"
- E-UM-025: Database error → HTTP 500 "Server error"


## 3.2 Authentication and Authorization

### 3.2.1 Feature Description
The Authentication and Authorization module provides secure access control to the system. It handles user login, password management, token-based authentication, and role-based access control.

### 3.2.2 Functional Requirements

#### FR-AUTH-001: User Login
**Priority:** High (Essential)

**Description:** Users can log in to the system using username and password.

**Inputs:**
- Username (string, required)
- Password (string, required)

**Processing:**
1. Validate username and password are provided
2. Query database for user by username
3. Compare provided password with stored hash using BCrypt
4. Generate JWT token with user ID, role, and default password flag
5. Set token expiration to 1 hour
6. Return token to client

**Outputs:**
- Success: HTTP 200, JWT token, message "Login successful!"
- Failure: HTTP 400/401/500 with error message

**Preconditions:**
- User account must exist
- Database must be accessible

**Postconditions:**
- User receives valid JWT token
- Token is valid for 1 hour
- User can access protected endpoints

**Exceptions:**
- E-AUTH-001: Missing credentials → HTTP 400 "Username and password are required"
- E-AUTH-002: Invalid credentials → HTTP 401 "Invalid credentials"
- E-AUTH-003: Database error → HTTP 500 "Server error during login"

#### FR-AUTH-002: Password Reset (Authenticated)
**Priority:** High (Essential)

**Description:** Authenticated users can reset their password.

**Inputs:**
- New Password (string, minimum 6 characters, required)
- Authentication token (JWT)

**Processing:**
1. Validate authentication token
2. Extract user ID from token
3. Validate new password length
4. Generate salt and hash new password using BCrypt
5. Update password in database
6. Set is_default_password flag to false
7. Return success response

**Outputs:**
- Success: HTTP 200, message "Password reset successful. Please log in again."
- Failure: HTTP 400/500 with error message

**Preconditions:**
- User must be authenticated
- New password must meet minimum length requirement

**Postconditions:**
- Password is updated in database
- is_default_password flag is set to false
- User must log in again with new password

**Exceptions:**
- E-AUTH-004: Password too short → HTTP 400 "Password must be at least 6 characters long"
- E-AUTH-005: Database error → HTTP 500 "Server error"


#### FR-AUTH-003: Forgot Password
**Priority:** Medium (Desirable)

**Description:** Users can request a password reset link via email.

**Inputs:**
- Email (string, valid email format, required)

**Processing:**
1. Validate email format
2. Query database for user by email
3. Generate random reset token (32 bytes hex)
4. Set token expiration to 15 minutes from now
5. Store token and expiration in database
6. Send password reset email with token
7. Return generic success message (security measure)

**Outputs:**
- Success: HTTP 200, message "If an account with that email exists, a reset link has been sent."
- Failure: HTTP 500 with error message

**Preconditions:**
- SMTP server must be configured
- Email service must be available

**Postconditions:**
- Reset token is stored in database
- Email is sent to user (if account exists)
- Token expires after 15 minutes

**Exceptions:**
- E-AUTH-006: Email service error → HTTP 500 "Server error"
- E-AUTH-007: Database error → HTTP 500 "Server error"

#### FR-AUTH-004: Perform Password Reset
**Priority:** Medium (Desirable)

**Description:** Users can reset password using emailed token.

**Inputs:**
- Reset Token (string, required)
- New Password (string, minimum 6 characters, required)

**Processing:**
1. Validate token and new password are provided
2. Query database for valid, non-expired token
3. Validate new password length
4. Generate salt and hash new password
5. Update password in database
6. Clear reset token and expiration
7. Set is_default_password flag to false
8. Return success response

**Outputs:**
- Success: HTTP 200, message "Password reset successful. You can now log in."
- Failure: HTTP 400/500 with error message

**Preconditions:**
- Reset token must be valid and not expired
- New password must meet requirements

**Postconditions:**
- Password is updated
- Reset token is cleared
- User can log in with new password

**Exceptions:**
- E-AUTH-008: Missing fields → HTTP 400 "Token and new password are required"
- E-AUTH-009: Invalid/expired token → HTTP 400 "Password reset token is invalid or has expired"
- E-AUTH-010: Database error → HTTP 500 "Server error"

#### FR-AUTH-005: Token Validation
**Priority:** High (Essential)

**Description:** System validates JWT tokens on protected endpoints.

**Inputs:**
- JWT token (from Authorization header)

**Processing:**
1. Extract token from Authorization header
2. Verify token signature using JWT_SECRET
3. Check token expiration
4. Extract user information from token payload
5. Attach user info to request object

**Outputs:**
- Success: Request proceeds to endpoint handler
- Failure: HTTP 401/403 with error message

**Preconditions:**
- Token must be provided in Authorization header
- Token must be valid and not expired

**Postconditions:**
- User information is available in request
- Request proceeds to protected endpoint

**Exceptions:**
- E-AUTH-011: Missing token → HTTP 401 "No token provided"
- E-AUTH-012: Invalid token → HTTP 401 "Invalid token"
- E-AUTH-013: Expired token → HTTP 401 "Token expired"

#### FR-AUTH-006: Role-Based Access Control
**Priority:** High (Essential)

**Description:** System enforces role-based access to endpoints.

**Inputs:**
- User role (from validated token)
- Required roles (from endpoint configuration)

**Processing:**
1. Extract user role from token
2. Check if user role is in allowed roles list
3. Allow or deny access based on role

**Outputs:**
- Success: Request proceeds to endpoint handler
- Failure: HTTP 403 "Access denied"

**Preconditions:**
- User must be authenticated
- Token must contain valid role

**Postconditions:**
- Access is granted or denied based on role
- Unauthorized access is prevented

**Exceptions:**
- E-AUTH-014: Insufficient permissions → HTTP 403 "Access denied"


## 3.3 Task Management

### 3.3.1 Feature Description
The Task Management module enables managers to create, assign, and track tasks for staff members. Staff can view their assigned tasks and update task status.

### 3.3.2 Functional Requirements

#### FR-TASK-001: Create Task
**Priority:** High (Essential)

**Description:** Managers can create and assign tasks to staff members.

**Inputs:**
- Title (string, required)
- Description (string, optional)
- Assigned To (user_id, required)
- Due Date (timestamp, optional)

**Processing:**
1. Validate required fields
2. Verify assigned user exists
3. Get assigner ID from token
4. Insert task into database
5. Return created task

**Outputs:**
- Success: HTTP 201, task object
- Failure: HTTP 400/404/500

**Preconditions:**
- User must have Manager or Admin role
- Assigned user must exist

**Postconditions:**
- Task is created in database
- Task is visible to assigned user

**Exceptions:**
- E-TASK-001: Missing required fields → HTTP 400
- E-TASK-002: Assigned user not found → HTTP 404
- E-TASK-003: Database error → HTTP 500

#### FR-TASK-002: View My Tasks
**Priority:** High (Essential)

**Description:** Staff can view tasks assigned to them.

**Inputs:**
- Authentication token (user_id from token)

**Processing:**
1. Extract user ID from token
2. Query tasks assigned to user
3. Join with users table for assigner name
4. Order by creation date (descending)
5. Return task list

**Outputs:**
- Success: HTTP 200, array of task objects
- Failure: HTTP 500

**Preconditions:**
- User must be authenticated

**Postconditions:**
- No database changes
- Task list is returned

**Exceptions:**
- E-TASK-004: Database error → HTTP 500

#### FR-TASK-003: View All Tasks
**Priority:** High (Essential)

**Description:** Managers can view all tasks in the system.

**Inputs:**
- Authentication token

**Processing:**
1. Validate user has Manager or Admin role
2. Query all tasks from database
3. Join with users table for assignee and assigner names
4. Order by creation date (descending)
5. Return task list

**Outputs:**
- Success: HTTP 200, array of task objects
- Failure: HTTP 403/500

**Preconditions:**
- User must have Manager or Admin role

**Postconditions:**
- No database changes
- Complete task list is returned

**Exceptions:**
- E-TASK-005: Insufficient permissions → HTTP 403
- E-TASK-006: Database error → HTTP 500

#### FR-TASK-004: Update Task
**Priority:** High (Essential)

**Description:** Managers can update task details.

**Inputs:**
- Task ID (integer, required)
- Title (string, required)
- Description (string, optional)
- Assigned To (user_id, required)
- Status (enum: pending/in_progress/completed, required)
- Due Date (timestamp, optional)

**Processing:**
1. Validate required fields
2. Validate status value
3. Update task in database
4. Return updated task

**Outputs:**
- Success: HTTP 200, updated task object
- Failure: HTTP 400/404/500

**Preconditions:**
- User must have Manager role
- Task must exist

**Postconditions:**
- Task is updated in database
- Changes are immediately visible

**Exceptions:**
- E-TASK-007: Missing required fields → HTTP 400
- E-TASK-008: Invalid status → HTTP 400
- E-TASK-009: Task not found → HTTP 404
- E-TASK-010: Database error → HTTP 500

#### FR-TASK-005: Delete Task
**Priority:** Medium (Desirable)

**Description:** Managers can delete tasks.

**Inputs:**
- Task ID (integer, required)

**Processing:**
1. Delete task from database by ID
2. Return success message with task title

**Outputs:**
- Success: HTTP 200, message "Task [title] deleted successfully"
- Failure: HTTP 404/500

**Preconditions:**
- User must have Manager role
- Task must exist

**Postconditions:**
- Task is deleted from database
- Task is no longer visible

**Exceptions:**
- E-TASK-011: Task not found → HTTP 404
- E-TASK-012: Database error → HTTP 500

#### FR-TASK-006: Update Task Status (Staff)
**Priority:** High (Essential)

**Description:** Staff can update status of their assigned tasks.

**Inputs:**
- Task ID (integer, required)
- Status (enum: pending/in_progress/completed, required)

**Processing:**
1. Validate status value
2. Verify task is assigned to current user
3. Update task status in database
4. Return updated task

**Outputs:**
- Success: HTTP 200, updated task object
- Failure: HTTP 400/404/500

**Preconditions:**
- User must have Staff role
- Task must be assigned to user

**Postconditions:**
- Task status is updated
- Manager can see updated status

**Exceptions:**
- E-TASK-013: Missing status → HTTP 400
- E-TASK-014: Invalid status → HTTP 400
- E-TASK-015: Task not found or permission denied → HTTP 404
- E-TASK-016: Database error → HTTP 500


## 3.4 Attendance Tracking

### 3.4.1 Feature Description
The Attendance Tracking module allows staff to clock in and out, and enables managers to view attendance records.

### 3.4.2 Functional Requirements

#### FR-ATT-001: Clock In
**Priority:** High (Essential)

**Description:** Staff can clock in to record start of work shift.

**Inputs:** Authentication token (user_id from token)

**Processing:**
1. Check if user already clocked in today
2. If not clocked in, create new attendance record
3. Record current timestamp as clock_in_time
4. Return attendance record

**Outputs:**
- Success: HTTP 201, attendance object, message "Clocked in successfully"
- Failure: HTTP 409/500

**Preconditions:** User must have Staff role, not already clocked in today

**Postconditions:** Attendance record created with clock-in time

**Exceptions:**
- E-ATT-001: Already clocked in → HTTP 409 "You are already clocked in"
- E-ATT-002: Database error → HTTP 500

#### FR-ATT-002: Clock Out
**Priority:** High (Essential)

**Description:** Staff can clock out to record end of work shift.

**Inputs:** Authentication token (user_id from token)

**Processing:**
1. Find open clock-in record for today
2. Update record with current timestamp as clock_out_time
3. Return updated attendance record

**Outputs:**
- Success: HTTP 200, attendance object, message "Clocked out successfully"
- Failure: HTTP 400/500

**Preconditions:** User must have Staff role, must be clocked in

**Postconditions:** Attendance record updated with clock-out time

**Exceptions:**
- E-ATT-003: Not clocked in → HTTP 400 "You are not clocked in"
- E-ATT-004: Database error → HTTP 500

#### FR-ATT-003: View All Attendance
**Priority:** High (Essential)

**Description:** Managers can view all attendance records.

**Inputs:** Authentication token

**Processing:**
1. Query all attendance records
2. Join with users table for usernames
3. Order by date and time (descending)
4. Return attendance list

**Outputs:**
- Success: HTTP 200, array of attendance objects
- Failure: HTTP 403/500

**Preconditions:** User must have Manager or Admin role

**Postconditions:** No database changes

**Exceptions:**
- E-ATT-005: Insufficient permissions → HTTP 403
- E-ATT-006: Database error → HTTP 500

#### FR-ATT-004: Check Clock-In Status
**Priority:** Medium (Desirable)

**Description:** Staff can check if they are currently clocked in.

**Inputs:** Authentication token (user_id from token)

**Processing:**
1. Query for open clock-in record for today
2. Return status and record if exists

**Outputs:**
- Success: HTTP 200, {isClockedIn: boolean, record: object}
- Failure: HTTP 500

**Preconditions:** User must have Staff role

**Postconditions:** No database changes

**Exceptions:**
- E-ATT-007: Database error → HTTP 500


## 3.5 Real-Time Chat System

### 3.5.1 Feature Description
The Real-Time Chat System enables instant messaging between users using WebSocket technology for real-time communication.

### 3.5.2 Functional Requirements

#### FR-CHAT-001: Search Users
**Priority:** High (Essential)

**Description:** Users can search for other users to start conversations.

**Inputs:**
- Query string (username or email pattern)

**Processing:**
1. Search users table by username or email (case-insensitive)
2. Exclude current user from results
3. Join with user_profiles for names
4. Return matching users

**Outputs:**
- Success: HTTP 200, array of user objects
- Failure: HTTP 500

**Preconditions:** User must be authenticated

**Postconditions:** No database changes

**Exceptions:**
- E-CHAT-001: Database error → HTTP 500

#### FR-CHAT-002: View Conversations
**Priority:** High (Essential)

**Description:** Users can view list of their conversations (contacts).

**Inputs:** Authentication token (user_id from token)

**Processing:**
1. Query conversations where user is participant
2. Join with users table for other participant details
3. Include conversation status and blocked_by info
4. Return conversation list

**Outputs:**
- Success: HTTP 200, array of conversation objects
- Failure: HTTP 500

**Preconditions:** User must be authenticated

**Postconditions:** No database changes

**Exceptions:**
- E-CHAT-002: Database error → HTTP 500

#### FR-CHAT-003: View Message History
**Priority:** High (Essential)

**Description:** Users can view message history with another user.

**Inputs:**
- Other User ID (integer, required)

**Processing:**
1. Calculate conversation ID (min/max of user IDs)
2. Query conversation from database
3. Check conversation is not blocked
4. Get user's cleared_at timestamp
5. Query messages sent after cleared_at time
6. Order messages by sent_at (ascending)
7. Return conversation and messages

**Outputs:**
- Success: HTTP 200, {conversation: object, messages: array}
- Failure: HTTP 403/500

**Preconditions:** User must be authenticated

**Postconditions:** No database changes

**Exceptions:**
- E-CHAT-003: Conversation blocked → HTTP 403 "This conversation is blocked"
- E-CHAT-004: Database error → HTTP 500

#### FR-CHAT-004: Send Message (WebSocket)
**Priority:** High (Essential)

**Description:** Users can send real-time messages via WebSocket.

**Inputs:**
- Receiver ID (integer, required)
- Content (string, required)
- Socket connection with authenticated user

**Processing:**
1. Authenticate socket connection with JWT
2. Get sender ID from socket authentication
3. Calculate conversation ID (min/max of user IDs)
4. Create conversation if doesn't exist
5. Check conversation is not blocked
6. Insert message into database
7. Emit message to receiver's socket if online
8. Return success callback to sender

**Outputs:**
- Success: {status: "ok", message: object, conversation: object}
- Failure: {status: "error", message: string}

**Preconditions:**
- User must be authenticated via WebSocket
- Receiver must exist
- Conversation must not be blocked

**Postconditions:**
- Message is stored in database
- Receiver gets real-time notification if online

**Exceptions:**
- E-CHAT-005: Not authenticated → "Not authenticated"
- E-CHAT-006: Conversation blocked → "This conversation is blocked"
- E-CHAT-007: Database error → "Server error"

#### FR-CHAT-005: Block Conversation
**Priority:** Medium (Desirable)

**Description:** Users can block conversations to prevent messaging.

**Inputs:**
- Conversation ID (integer, required)

**Processing:**
1. Update conversation status to 'blocked'
2. Set blocked_by to current user ID
3. Return updated conversation

**Outputs:**
- Success: HTTP 200, updated conversation object
- Failure: HTTP 404/500

**Preconditions:**
- User must be participant in conversation

**Postconditions:**
- Conversation is blocked
- No messages can be sent

**Exceptions:**
- E-CHAT-008: Conversation not found → HTTP 404
- E-CHAT-009: Database error → HTTP 500

#### FR-CHAT-006: Unblock Conversation
**Priority:** Medium (Desirable)

**Description:** Users can unblock conversations they previously blocked.

**Inputs:**
- Conversation ID (integer, required)

**Processing:**
1. Verify user is the one who blocked conversation
2. Update conversation status to 'active'
3. Clear blocked_by field
4. Return updated conversation

**Outputs:**
- Success: HTTP 200, updated conversation object
- Failure: HTTP 403/500

**Preconditions:**
- User must be the one who blocked conversation

**Postconditions:**
- Conversation is unblocked
- Messages can be sent again

**Exceptions:**
- E-CHAT-010: Cannot unblock → HTTP 403 "Cannot unblock this conversation"
- E-CHAT-011: Database error → HTTP 500

#### FR-CHAT-007: Clear Chat History
**Priority:** Medium (Desirable)

**Description:** Users can clear their view of chat history.

**Inputs:**
- Conversation ID (integer, required)

**Processing:**
1. Update user's cleared_at timestamp to current time
2. Messages before this time won't be shown to user
3. Other participant's view is unaffected

**Outputs:**
- Success: HTTP 200, message "Chat cleared successfully"
- Failure: HTTP 500

**Preconditions:**
- User must be participant in conversation

**Postconditions:**
- User's cleared_at timestamp is updated
- Old messages are hidden from user's view

**Exceptions:**
- E-CHAT-012: Database error → HTTP 500


## 3.6 Reports Management

### 3.6.1 Feature Description
Staff can submit daily work reports, and managers can view all submitted reports.

### 3.6.2 Functional Requirements

#### FR-REP-001: Submit Report
**Priority:** High (Essential)
**Description:** Staff can submit daily work reports.
**Inputs:** Title (string, required), Content (string, required)
**Processing:** Validate fields, insert report with user_id and timestamp
**Outputs:** Success: HTTP 201, report object | Failure: HTTP 400/500
**Preconditions:** User must have Staff role
**Postconditions:** Report is stored in database
**Exceptions:** E-REP-001: Missing fields → HTTP 400 | E-REP-002: Database error → HTTP 500

#### FR-REP-002: View All Reports
**Priority:** High (Essential)
**Description:** Managers can view all submitted reports.
**Inputs:** Authentication token
**Processing:** Query all reports, join with users for usernames, order by date
**Outputs:** Success: HTTP 200, array of reports | Failure: HTTP 403/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** No database changes
**Exceptions:** E-REP-003: Insufficient permissions → HTTP 403 | E-REP-004: Database error → HTTP 500

## 3.7 Complaints Management

### 3.7.1 Feature Description
Staff can submit complaints, managers can reply, and track complaint status.

### 3.7.2 Functional Requirements

#### FR-COMP-001: Submit Complaint
**Priority:** High (Essential)
**Description:** Staff can submit complaints.
**Inputs:** Title (string, required), Content (string, required)
**Processing:** Validate fields, insert complaint with status 'open'
**Outputs:** Success: HTTP 201, complaint object | Failure: HTTP 400/500
**Preconditions:** User must have Staff role
**Postconditions:** Complaint is created with 'open' status
**Exceptions:** E-COMP-001: Missing fields → HTTP 400 | E-COMP-002: Database error → HTTP 500

#### FR-COMP-002: View My Complaints
**Priority:** High (Essential)
**Description:** Staff can view their complaints with replies.
**Inputs:** Authentication token (user_id from token)
**Processing:** Query user's complaints, aggregate replies using JSON, return with nested replies
**Outputs:** Success: HTTP 200, array of complaints with replies | Failure: HTTP 500
**Preconditions:** User must be authenticated
**Postconditions:** No database changes
**Exceptions:** E-COMP-003: Database error → HTTP 500

#### FR-COMP-003: View All Complaints
**Priority:** High (Essential)
**Description:** Managers can view all complaints with replies.
**Inputs:** Authentication token
**Processing:** Query all complaints, aggregate replies, join with users, order by status and date
**Outputs:** Success: HTTP 200, array of complaints | Failure: HTTP 403/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** No database changes
**Exceptions:** E-COMP-004: Insufficient permissions → HTTP 403 | E-COMP-005: Database error → HTTP 500

#### FR-COMP-004: Reply to Complaint
**Priority:** High (Essential)
**Description:** Managers can reply to complaints.
**Inputs:** Complaint ID (integer, required), Content (string, required)
**Processing:** Verify complaint exists, insert reply with replier user_id and timestamp
**Outputs:** Success: HTTP 201, reply object | Failure: HTTP 400/404/500
**Preconditions:** User must have Manager or Admin role, complaint must exist
**Postconditions:** Reply is added to complaint
**Exceptions:** E-COMP-006: Missing content → HTTP 400 | E-COMP-007: Complaint not found → HTTP 404 | E-COMP-008: Database error → HTTP 500

#### FR-COMP-005: Update Complaint Status
**Priority:** High (Essential)
**Description:** Managers can update complaint status.
**Inputs:** Complaint ID (integer, required), Status (enum: open/resolved, required)
**Processing:** Validate status value, update complaint status in database
**Outputs:** Success: HTTP 200, updated complaint | Failure: HTTP 400/404/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** Complaint status is updated
**Exceptions:** E-COMP-009: Invalid status → HTTP 400 | E-COMP-010: Complaint not found → HTTP 404 | E-COMP-011: Database error → HTTP 500

## 3.8 Feedback System

### 3.8.1 Feature Description
Staff can submit feedback, and managers can respond to feedback.

### 3.8.2 Functional Requirements

#### FR-FEED-001: Submit Feedback
**Priority:** Medium (Desirable)
**Description:** Staff can submit feedback.
**Inputs:** Title (string, required), Content (string, required)
**Processing:** Validate fields, insert feedback with user_id and timestamp
**Outputs:** Success: HTTP 201, feedback object | Failure: HTTP 400/500
**Preconditions:** User must have Staff role
**Postconditions:** Feedback is stored in database
**Exceptions:** E-FEED-001: Missing fields → HTTP 400 | E-FEED-002: Database error → HTTP 500

#### FR-FEED-002: View My Feedback
**Priority:** Medium (Desirable)
**Description:** Staff can view their submitted feedback with replies.
**Inputs:** Authentication token (user_id from token)
**Processing:** Query user's feedback, join with users for replier username, order by date
**Outputs:** Success: HTTP 200, array of feedback | Failure: HTTP 500
**Preconditions:** User must be authenticated
**Postconditions:** No database changes
**Exceptions:** E-FEED-003: Database error → HTTP 500

#### FR-FEED-003: View All Feedback
**Priority:** Medium (Desirable)
**Description:** Managers can view all feedback.
**Inputs:** Authentication token
**Processing:** Query all feedback, join with users for submitter and replier names, order by date
**Outputs:** Success: HTTP 200, array of feedback | Failure: HTTP 403/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** No database changes
**Exceptions:** E-FEED-004: Insufficient permissions → HTTP 403 | E-FEED-005: Database error → HTTP 500

#### FR-FEED-004: Reply to Feedback
**Priority:** Medium (Desirable)
**Description:** Managers can reply to feedback.
**Inputs:** Feedback ID (integer, required), Reply (string, required)
**Processing:** Validate reply content, update feedback with reply, replied_by, and replied_at timestamp
**Outputs:** Success: HTTP 200, updated feedback | Failure: HTTP 400/404/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** Feedback is updated with reply
**Exceptions:** E-FEED-006: Missing reply → HTTP 400 | E-FEED-007: Feedback not found → HTTP 404 | E-FEED-008: Database error → HTTP 500


## 3.9 Allowances Management

### 3.9.1 Feature Description
Managers can create and manage employee allowances, and staff can view their allowances.

### 3.9.2 Functional Requirements

#### FR-ALLOW-001: Create Allowance
**Priority:** Medium (Desirable)
**Description:** Managers can create allowances for employees.
**Inputs:** User ID (integer, required), Title (string, required), Description (string, optional), Amount (decimal, required), Frequency (string, required)
**Processing:** Validate required fields, insert allowance with timestamp
**Outputs:** Success: HTTP 201, allowance object | Failure: HTTP 400/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** Allowance is created in database
**Exceptions:** E-ALLOW-001: Missing required fields → HTTP 400 | E-ALLOW-002: Database error → HTTP 500

#### FR-ALLOW-002: View My Allowances
**Priority:** Medium (Desirable)
**Description:** Staff can view their allowances.
**Inputs:** Authentication token (user_id from token)
**Processing:** Query allowances for user, order by creation date
**Outputs:** Success: HTTP 200, array of allowances | Failure: HTTP 500
**Preconditions:** User must have Staff role
**Postconditions:** No database changes
**Exceptions:** E-ALLOW-003: Database error → HTTP 500

#### FR-ALLOW-003: View All Allowances
**Priority:** Medium (Desirable)
**Description:** Managers can view all allowances.
**Inputs:** Authentication token
**Processing:** Query all allowances, join with users for usernames, order by date
**Outputs:** Success: HTTP 200, array of allowances | Failure: HTTP 403/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** No database changes
**Exceptions:** E-ALLOW-004: Insufficient permissions → HTTP 403 | E-ALLOW-005: Database error → HTTP 500

#### FR-ALLOW-004: Update Allowance
**Priority:** Medium (Desirable)
**Description:** Managers can update allowance details.
**Inputs:** Allowance ID (integer, required), User ID, Title, Description, Amount, Frequency
**Processing:** Validate required fields, update allowance in database
**Outputs:** Success: HTTP 200, updated allowance | Failure: HTTP 400/404/500
**Preconditions:** User must have Manager or Admin role, allowance must exist
**Postconditions:** Allowance is updated
**Exceptions:** E-ALLOW-006: Missing required fields → HTTP 400 | E-ALLOW-007: Allowance not found → HTTP 404 | E-ALLOW-008: Database error → HTTP 500

#### FR-ALLOW-005: Delete Allowance
**Priority:** Medium (Desirable)
**Description:** Managers can delete allowances.
**Inputs:** Allowance ID (integer, required)
**Processing:** Delete allowance from database by ID
**Outputs:** Success: HTTP 200, message "Allowance [title] deleted successfully" | Failure: HTTP 404/500
**Preconditions:** User must have Manager or Admin role
**Postconditions:** Allowance is deleted
**Exceptions:** E-ALLOW-009: Allowance not found → HTTP 404 | E-ALLOW-010: Database error → HTTP 500

## 3.10 Profile Management

### 3.10.1 Feature Description
Users can view and update their personal profile information.

### 3.10.2 Functional Requirements

#### FR-PROF-001: View My Profile
**Priority:** High (Essential)
**Description:** Users can view their own profile information.
**Inputs:** Authentication token (user_id from token)
**Processing:** Query user and profile data, join tables, return complete profile
**Outputs:** Success: HTTP 200, profile object | Failure: HTTP 404/500
**Preconditions:** User must be authenticated
**Postconditions:** No database changes
**Exceptions:** E-PROF-001: User not found → HTTP 404 | E-PROF-002: Database error → HTTP 500

#### FR-PROF-002: Update My Profile
**Priority:** High (Essential)
**Description:** Users can update their profile information.
**Inputs:** Username, Email, First Name, Last Name, Phone Number, Job Title, Hire Date, Address, Sex
**Processing:** Begin transaction, update users table (username, email), upsert user_profiles table, commit transaction
**Outputs:** Success: HTTP 200, updated profile | Failure: HTTP 409/500
**Preconditions:** User must be authenticated
**Postconditions:** Profile is updated in database
**Exceptions:** E-PROF-003: Username taken → HTTP 409 | E-PROF-004: Email taken → HTTP 409 | E-PROF-005: Phone taken → HTTP 409 | E-PROF-006: Database error → HTTP 500

## 3.11 System Settings

### 3.11.1 Feature Description
Users can manage personal settings, and admins can configure system-wide settings.

### 3.11.2 Functional Requirements

#### FR-SET-001: View Settings
**Priority:** Medium (Desirable)
**Description:** Users can view personal and system settings.
**Inputs:** Authentication token
**Processing:** Query personal settings from user_profiles, if admin query system_settings, return both
**Outputs:** Success: HTTP 200, {personal: object, system: object} | Failure: HTTP 500
**Preconditions:** User must be authenticated
**Postconditions:** No database changes
**Exceptions:** E-SET-001: Database error → HTTP 500

#### FR-SET-002: Update Personal Settings
**Priority:** Medium (Desirable)
**Description:** Users can update personal preferences.
**Inputs:** Date Format (string), Notification Preferences (JSON)
**Processing:** Update user_profiles table with new settings
**Outputs:** Success: HTTP 200, updated settings | Failure: HTTP 500
**Preconditions:** User must be authenticated
**Postconditions:** Personal settings are updated
**Exceptions:** E-SET-002: Database error → HTTP 500

#### FR-SET-003: Update System Settings
**Priority:** Medium (Desirable)
**Description:** Admins can update system-wide settings.
**Inputs:** Company Name (string), Currency Symbol (string)
**Processing:** Upsert system_settings table with new values
**Outputs:** Success: HTTP 200, message "System settings updated" | Failure: HTTP 403/500
**Preconditions:** User must have Admin role
**Postconditions:** System settings are updated for all users
**Exceptions:** E-SET-003: Insufficient permissions → HTTP 403 | E-SET-004: Database error → HTTP 500

#### FR-SET-004: Change Password
**Priority:** High (Essential)
**Description:** Users can change their password.
**Inputs:** Old Password (string, required), New Password (string, minimum 6 characters, required)
**Processing:** Verify old password, validate new password length, hash new password, update database
**Outputs:** Success: HTTP 200, message "Password changed successfully" | Failure: HTTP 400/401/404/500
**Preconditions:** User must be authenticated
**Postconditions:** Password is updated
**Exceptions:** E-SET-005: Missing fields → HTTP 400 | E-SET-006: Password too short → HTTP 400 | E-SET-007: Incorrect old password → HTTP 401 | E-SET-008: User not found → HTTP 404 | E-SET-009: Database error → HTTP 500

---

# 4. External Interface Requirements

## 4.1 User Interfaces

### 4.1.1 General UI Requirements

**UI Framework:** React 19 with Ant Design component library

**Design Principles:**
- Clean, modern, and professional appearance
- Consistent layout across all pages
- Responsive design for desktop and tablet devices
- Intuitive navigation with clear visual hierarchy
- Accessible color contrast ratios
- Loading indicators for asynchronous operations
- Clear error messages and validation feedback

**Common UI Elements:**
- Navigation bar with user role-based menu items
- User profile dropdown in header
- Logout button
- Breadcrumb navigation where appropriate
- Data tables with sorting and filtering
- Modal dialogs for forms and confirmations
- Toast notifications for success/error messages

### 4.1.2 Login Page

**Purpose:** Authenticate users and provide access to the system

**Elements:**
- Application logo and title
- Username input field
- Password input field (masked)
- Login button
- "Forgot Password" link
- Error message display area
- Loading indicator during authentication

**Behavior:**
- Validate required fields before submission
- Display error for invalid credentials
- Redirect to dashboard on successful login
- Show password reset prompt if default password

### 4.1.3 Dashboard Page

**Purpose:** Provide overview of user-specific information

**Elements (Role-Dependent):**
- Welcome message with user name
- Quick stats (tasks, attendance, etc.)
- Recent activity feed
- Quick action buttons
- Clock-in/Clock-out widget (Staff only)
- Navigation cards to main features

### 4.1.4 User Management Interface (Admin)

**Purpose:** Manage user accounts

**Elements:**
- User list table with columns: Username, Email, Role, Name, Phone, Actions
- "Add User" button
- Search/filter functionality
- Edit and Delete action buttons per row
- User form modal (Create/Edit) with all user fields
- Confirmation dialog for delete operations

### 4.1.5 Task Management Interface

**Purpose:** Create, assign, and track tasks

**Elements (Manager View):**
- Task list table: Title, Assigned To, Status, Due Date, Actions
- "Create Task" button
- Task form modal with fields: Title, Description, Assign To dropdown, Due Date picker, Status
- Edit and Delete buttons per task
- Status filter dropdown
- Search functionality

**Elements (Staff View):**
- My Tasks list: Title, Description, Status, Due Date, Assigned By
- Status update dropdown per task
- Status filter
- Task details view

### 4.1.6 Attendance Interface

**Purpose:** Track and view attendance records

**Elements (Staff View):**
- Clock-in/Clock-out widget with current status
- Current date and time display
- Clock-in time display when clocked in
- Large action button (Clock In / Clock Out)
- Attendance history table

**Elements (Manager View):**
- Attendance records table: Username, Date, Clock In, Clock Out, Duration
- Date range filter
- User filter
- Export functionality (optional)

### 4.1.7 Chat Interface

**Purpose:** Real-time messaging between users

**Elements:**
- User search bar
- Conversations list (left sidebar): User names, last message preview
- Message area (center): Message history, sender names, timestamps
- Message input field with send button
- Conversation actions: Block/Unblock, Clear History
- Online status indicators
- Unread message badges

### 4.1.8 Reports Interface

**Purpose:** Submit and view work reports

**Elements (Staff View):**
- "Submit Report" button
- Report form modal: Title, Content (textarea)
- My reports history table

**Elements (Manager View):**
- All reports table: Title, Submitted By, Date, Actions
- View report details modal
- Date filter
- User filter

### 4.1.9 Complaints Interface

**Purpose:** Submit and manage complaints

**Elements (Staff View):**
- "Submit Complaint" button
- Complaint form: Title, Content
- My complaints list: Title, Status, Date, Replies count
- Complaint details view with threaded replies

**Elements (Manager View):**
- All complaints table: Title, Submitted By, Status, Date
- Status filter (Open/Resolved)
- Complaint details with reply thread
- Reply form
- Update status button

### 4.1.10 Feedback Interface

**Purpose:** Collect and respond to feedback

**Elements (Staff View):**
- "Submit Feedback" button
- Feedback form: Title, Content
- My feedback list with replies

**Elements (Manager View):**
- All feedback table
- Feedback details view
- Reply form

### 4.1.11 Allowances Interface

**Purpose:** Manage employee allowances

**Elements (Manager View):**
- Allowances table: Employee, Title, Amount, Frequency, Date
- "Create Allowance" button
- Allowance form: User dropdown, Title, Description, Amount, Frequency dropdown
- Edit and Delete actions

**Elements (Staff View):**
- My allowances list: Title, Amount, Frequency, Date
- Read-only view

### 4.1.12 Profile Page

**Purpose:** View and edit personal profile

**Elements:**
- Profile information display/edit form
- Fields: Username, Email, First Name, Last Name, Phone, Job Title, Hire Date, Address, Sex
- Save button
- Cancel button
- Success/error notifications

### 4.1.13 Settings Page

**Purpose:** Configure personal and system settings

**Elements (All Users):**
- Personal settings section: Date Format dropdown, Notification preferences
- Change password form: Old Password, New Password, Confirm Password
- Save buttons

**Elements (Admin Only):**
- System settings section: Company Name, Currency Symbol
- Save button

### 4.1.14 UI Placeholder for Screenshots

**[SPACE FOR UI SCREENSHOTS TO BE INSERTED BY STUDENT]**

_This section is reserved for actual screenshots of the application interface showing:_
- Login page
- Dashboard (Admin, Manager, Staff views)
- User management interface
- Task management interface
- Attendance tracking interface
- Chat interface
- Reports interface
- Complaints interface
- Profile page
- Settings page

## 4.2 Hardware Interfaces

### 4.2.1 Client-Side Hardware

The system does not directly interface with client hardware. However, it requires:

**Input Devices:**
- Keyboard for text input
- Mouse or touchpad for navigation
- Touch screen support (optional, for tablet devices)

**Output Devices:**
- Display monitor (minimum 1024x768 resolution)
- Speakers (optional, for notification sounds)

**Network Interface:**
- Ethernet or Wi-Fi network adapter for internet connectivity

### 4.2.2 Server-Side Hardware

The system does not directly interface with specialized hardware. Standard server hardware is required:

**Processor:** Multi-core CPU for handling concurrent requests

**Memory:** RAM for application and database operations

**Storage:** SSD or HDD for database and application files

**Network Interface:** Network adapter for client connections

**No Special Hardware:** The system does not require:
- Biometric devices
- Card readers
- Barcode scanners
- Specialized input devices

## 4.3 Software Interfaces

### 4.3.1 Database Interface

**System:** PostgreSQL Database Management System

**Version:** 13.0 or higher

**Interface Type:** TCP/IP connection using pg (node-postgres) driver

**Connection Details:**
- Host: Configurable (default: localhost)
- Port: Configurable (default: 5432)
- Database: simple_workforce_manager
- Authentication: Username/password

**Data Exchange:**
- Protocol: PostgreSQL wire protocol
- Format: SQL queries and result sets
- Character Encoding: UTF-8

**Operations:**
- CRUD operations on all database tables
- Transaction support for data integrity
- Parameterized queries for security
- Connection pooling for performance

### 4.3.2 Email Service Interface

**System:** SMTP Email Server

**Purpose:** Send password reset emails

**Interface Type:** SMTP protocol using Nodemailer library

**Connection Details:**
- Host: Configurable SMTP server
- Port: Configurable (typically 587 for TLS, 465 for SSL)
- Authentication: Username/password
- Encryption: TLS/SSL

**Data Exchange:**
- Protocol: SMTP
- Format: HTML/Plain text emails
- Content: Password reset links with tokens

**Operations:**
- Send password reset emails
- Handle email delivery failures gracefully

### 4.3.3 Web Browser Interface

**System:** Modern Web Browsers

**Supported Browsers:**
- Google Chrome 90+
- Mozilla Firefox 88+
- Microsoft Edge 90+
- Safari 14+

**Interface Type:** HTTP/HTTPS and WebSocket protocols

**Requirements:**
- JavaScript enabled
- Cookies enabled
- Local storage support
- WebSocket support

**Data Exchange:**
- HTTP/HTTPS for RESTful API calls
- WebSocket for real-time chat
- JSON format for data exchange

### 4.3.4 Operating System Interface

**Server Operating System:**
- Linux (Ubuntu 20.04 LTS or higher)
- Windows Server 2019+
- macOS Server

**Interface Type:** System calls through Node.js runtime

**Operations:**
- File system access for logs and temporary files
- Network socket operations
- Process management
- Environment variable access

### 4.3.5 Third-Party Libraries

**Frontend Libraries:**
- React 19.2: UI framework
- Ant Design 5.28: UI component library
- Axios 1.13: HTTP client
- Socket.io-client 4.8: WebSocket client
- React Router 7.9: Client-side routing
- jwt-decode 4.0: JWT token decoding
- Moment.js 2.30: Date/time formatting

**Backend Libraries:**
- Express.js 5.1: Web application framework
- BCrypt 6.0: Password hashing
- JSON Web Token 9.0: Authentication tokens
- Socket.io 4.8: WebSocket server
- pg 8.16: PostgreSQL client
- Nodemailer 7.0: Email sending
- dotenv 17.2: Environment configuration
- CORS 2.8: Cross-origin resource sharing

## 4.4 Communication Interfaces

### 4.4.1 HTTP/HTTPS Protocol

**Purpose:** RESTful API communication between frontend and backend

**Protocol:** HTTP 1.1 / HTTPS

**Port:** Configurable (default: 5001 for development, 443 for production HTTPS)

**Methods Used:**
- GET: Retrieve data
- POST: Create new resources
- PUT: Update existing resources
- PATCH: Partial updates
- DELETE: Remove resources

**Data Format:** JSON (JavaScript Object Notation)

**Headers:**
- Content-Type: application/json
- Authorization: Bearer [JWT_TOKEN]
- CORS headers for cross-origin requests

**Status Codes:**
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error

### 4.4.2 WebSocket Protocol

**Purpose:** Real-time bidirectional communication for chat

**Protocol:** WebSocket (ws:// for development, wss:// for production)

**Port:** Same as HTTP server (upgrade from HTTP)

**Library:** Socket.io 4.8

**Events:**
- connection: Client connects to server
- authenticate: Client sends JWT for authentication
- send_message: Client sends message
- receive_message: Server pushes message to client
- disconnect: Client disconnects

**Data Format:** JSON objects

**Authentication:** JWT token sent via 'authenticate' event

**Connection Management:**
- Automatic reconnection on disconnect
- Heartbeat/ping-pong for connection health
- User-socket mapping for message routing

### 4.4.3 SMTP Protocol

**Purpose:** Send password reset emails

**Protocol:** SMTP (Simple Mail Transfer Protocol)

**Port:** 587 (TLS) or 465 (SSL)

**Encryption:** TLS/SSL

**Authentication:** Username/password

**Data Format:** MIME (Multipurpose Internet Mail Extensions)

**Operations:**
- Send password reset emails with token links
- Handle delivery failures

### 4.4.4 Network Requirements

**Bandwidth:**
- Minimum: 1 Mbps per client
- Recommended: 10 Mbps for server

**Latency:**
- Maximum acceptable: 200ms for API calls
- Real-time chat: < 100ms preferred

**Firewall Configuration:**
- Allow inbound connections on HTTP/HTTPS port
- Allow outbound SMTP connections
- Allow WebSocket upgrade requests

**Security:**
- HTTPS recommended for production
- WSS (WebSocket Secure) recommended for production
- CORS configured to allow only trusted origins
- Rate limiting to prevent abuse

---

# 5. Non-Functional Requirements

## 5.1 Performance Requirements

### 5.1.1 Response Time

**API Response Time:**
- Standard API endpoints: Maximum 2 seconds under normal load
- Simple queries (login, profile): Maximum 1 second
- Complex queries (reports with joins): Maximum 3 seconds
- Database queries: Maximum 1 second execution time

**Page Load Time:**
- Initial page load: Maximum 3 seconds
- Subsequent page navigation: Maximum 1 second (SPA routing)
- Static assets (CSS, JS): Cached for fast loading

**Real-Time Communication:**
- Message delivery latency: Maximum 500 milliseconds
- WebSocket connection establishment: Maximum 2 seconds
- Message acknowledgment: Immediate (< 100ms)

### 5.1.2 Throughput

**Concurrent Users:**
- System must support up to 100 concurrent users
- No degradation in performance up to 80 concurrent users
- Graceful degradation between 80-100 users

**Request Handling:**
- Minimum 50 requests per second
- Peak load: 100 requests per second for short bursts

**Database Operations:**
- Minimum 100 queries per second
- Transaction processing: 50 transactions per second

### 5.1.3 Capacity

**Data Storage:**
- Support up to 10,000 records per table
- Database size: Up to 10 GB
- Message history: Up to 100,000 messages

**User Accounts:**
- Support up to 100 user accounts
- Unlimited tasks per user
- Unlimited messages per conversation

**File Storage:**
- No file upload functionality in current version
- Database storage only

### 5.1.4 Resource Utilization

**Server Resources:**
- CPU usage: Maximum 70% under normal load
- Memory usage: Maximum 2 GB RAM
- Disk I/O: Optimized with database indexing
- Network bandwidth: Maximum 10 Mbps

**Client Resources:**
- Browser memory: Maximum 500 MB
- CPU usage: Minimal (< 20% on modern systems)
- Network usage: Efficient with data pagination

### 5.1.5 Scalability

**Vertical Scaling:**
- System can benefit from increased server resources
- Database can be optimized with more RAM
- Application server can utilize multiple CPU cores

**Horizontal Scaling:**
- Current architecture supports single-server deployment
- Future enhancement: Load balancing across multiple servers
- Database replication not implemented in current version

## 5.2 Security Requirements

### 5.2.1 Authentication

**Password Requirements:**
- Minimum length: 6 characters
- No maximum length limit
- No complexity requirements (can be enhanced)
- Passwords hashed using BCrypt with salt (cost factor 10)

**Token-Based Authentication:**
- JWT (JSON Web Tokens) for stateless authentication
- Token expiration: 1 hour
- Token contains: user_id, role, is_default_password flag
- Token signed with secret key (HS256 algorithm)
- No token refresh mechanism (user must re-login)

**Session Management:**
- Stateless authentication (no server-side sessions)
- Client stores token in local storage or memory
- Token validated on every protected endpoint request

**Default Password Policy:**
- New users created with default password
- is_default_password flag set to true
- System prompts password change on first login
- Users cannot access full features until password changed

### 5.2.2 Authorization

**Role-Based Access Control (RBAC):**
- Three roles: Admin, Manager, Staff
- Permissions enforced at API endpoint level
- Middleware checks user role before processing request
- Unauthorized access returns HTTP 403 Forbidden

**Access Control Matrix:**

| Feature | Admin | Manager | Staff |
|---------|-------|---------|-------|
| User Management (CRUD) | ✓ | ✗ | ✗ |
| View Users | ✓ | ✓ | ✗ |
| Task Management (CRUD) | ✓ | ✓ | ✗ |
| Update Own Task Status | ✗ | ✗ | ✓ |
| View All Attendance | ✓ | ✓ | ✗ |
| Clock In/Out | ✗ | ✗ | ✓ |
| View All Reports | ✓ | ✓ | ✗ |
| Submit Report | ✗ | ✗ | ✓ |
| Manage Complaints | ✓ | ✓ | ✗ |
| Submit Complaint | ✗ | ✗ | ✓ |
| Manage Allowances | ✓ | ✓ | ✗ |
| View Own Allowances | ✗ | ✗ | ✓ |
| Chat | ✓ | ✓ | ✓ |
| Profile Management | ✓ | ✓ | ✓ |
| System Settings | ✓ | ✗ | ✗ |
| Personal Settings | ✓ | ✓ | ✓ |

### 5.2.3 Data Protection

**Password Storage:**
- All passwords hashed using BCrypt
- Salt automatically generated per password
- Original passwords never stored or logged
- Password hashes never transmitted to client

**Sensitive Data:**
- JWT secret key stored in environment variables
- Database credentials stored in environment variables
- No sensitive data in source code
- No sensitive data in client-side code

**SQL Injection Prevention:**
- All database queries use parameterized statements
- User input never directly concatenated into SQL
- pg library provides automatic escaping

**Cross-Site Scripting (XSS) Prevention:**
- React automatically escapes output
- No dangerouslySetInnerHTML usage
- User input sanitized before storage

**Cross-Site Request Forgery (CSRF):**
- JWT tokens provide CSRF protection
- Stateless authentication eliminates CSRF risk
- CORS configured to allow only trusted origins

### 5.2.4 Communication Security

**HTTPS (Production):**
- HTTPS recommended for production deployment
- SSL/TLS certificate required
- All API communication encrypted
- WebSocket Secure (WSS) for chat

**CORS (Cross-Origin Resource Sharing):**
- CORS configured to allow frontend origin only
- Credentials allowed for authenticated requests
- Preflight requests handled correctly

**API Security:**
- Authentication required for all protected endpoints
- Rate limiting recommended for production
- Input validation on all endpoints
- Error messages don't reveal sensitive information

### 5.2.5 Password Reset Security

**Token Generation:**
- Cryptographically secure random tokens (32 bytes)
- Tokens stored hashed in database
- Token expiration: 15 minutes

**Email Security:**
- Password reset links sent via email
- Links contain one-time use tokens
- Tokens invalidated after use
- Generic success message (doesn't reveal if email exists)

### 5.2.6 Audit and Logging

**Security Logging:**
- Failed login attempts logged
- Authentication errors logged
- Database errors logged (without sensitive data)
- No passwords or tokens logged

**Audit Trail:**
- Timestamps on all database records
- created_at fields for tracking record creation
- User IDs tracked for actions (assigned_by, replied_by, etc.)

## 5.3 Safety Requirements

### 5.3.1 Data Loss Prevention

**Database Transactions:**
- Critical operations wrapped in transactions
- Automatic rollback on errors
- Data integrity maintained through foreign keys
- Cascade deletes configured appropriately

**Data Validation:**
- Input validation on all forms
- Required field validation
- Data type validation
- Uniqueness constraints enforced

**Error Handling:**
- Try-catch blocks around critical operations
- Graceful error handling
- User-friendly error messages
- System continues operating after non-critical errors

### 5.3.2 System Failure Impact

**Graceful Degradation:**
- If WebSocket fails, chat becomes unavailable but other features work
- If email service fails, password reset unavailable but login works
- Database connection pooling prevents connection exhaustion

**Data Consistency:**
- Foreign key constraints prevent orphaned records
- Transactions ensure atomic operations
- No partial updates on failures

**User Impact Mitigation:**
- Clear error messages guide users
- System state preserved on errors
- No data corruption on failures

### 5.3.3 Backup and Recovery

**Database Backup:**
- Regular database backups recommended
- Backup frequency: Daily (recommended)
- Backup retention: 30 days (recommended)
- Backup storage: Separate from production server

**Disaster Recovery:**
- Database restore procedures documented
- Recovery Time Objective (RTO): 4 hours
- Recovery Point Objective (RPO): 24 hours
- Backup testing recommended quarterly

**Data Export:**
- Database can be exported using PostgreSQL tools
- No built-in export functionality in application
- Manual export possible through database queries


## 5.4 Reliability

### 5.4.1 Availability Metrics

**System Uptime:**
- Target uptime: 99% (approximately 7.2 hours downtime per month)
- Planned maintenance windows: Off-peak hours
- Unplanned downtime: Minimized through monitoring

**Mean Time Between Failures (MTBF):**
- Target MTBF: 720 hours (30 days)
- Critical failures: Database connection loss, server crash
- Non-critical failures: Email service unavailable

**Mean Time To Recovery (MTTR):**
- Target MTTR: 2 hours
- Critical issues: 1 hour
- Non-critical issues: 4 hours

### 5.4.2 Fault Tolerance

**Database Connection:**
- Connection pooling prevents exhaustion
- Automatic reconnection on connection loss
- Graceful error handling on database failures

**Error Recovery:**
- Application restarts automatically on crash (using PM2 or similar)
- Database transactions rollback on errors
- User sessions preserved through JWT tokens

**Redundancy:**
- No built-in redundancy in current version
- Single point of failure: Database server
- Future enhancement: Database replication

### 5.4.3 Data Integrity

**Referential Integrity:**
- Foreign key constraints enforced
- Cascade deletes configured appropriately
- No orphaned records

**Transaction Integrity:**
- ACID properties maintained
- Atomic operations for multi-table updates
- Consistent state after transactions

**Validation:**
- Input validation prevents invalid data
- Database constraints enforce data rules
- Unique constraints prevent duplicates

## 5.5 Availability

### 5.5.1 Operating Hours

**System Availability:**
- 24/7 availability target
- No scheduled downtime during business hours
- Maintenance windows: Weekends or off-peak hours

**Support Hours:**
- System administrator availability: Business hours
- Emergency support: On-call for critical issues
- User support: Business hours

### 5.5.2 Maintenance Windows

**Planned Maintenance:**
- Scheduled during off-peak hours (e.g., weekends, late night)
- Advance notice: 48 hours minimum
- Duration: Maximum 4 hours
- Frequency: Monthly or as needed

**Emergency Maintenance:**
- Performed immediately for critical security issues
- Minimal downtime target: 1 hour
- Users notified as soon as possible

### 5.5.3 Degraded Mode Operation

**Partial Functionality:**
- If WebSocket fails: Chat unavailable, other features work
- If email service fails: Password reset unavailable, login works
- If database slow: Increased response times, but system functional

**User Notification:**
- Error messages inform users of unavailable features
- Status indicators show system health
- Graceful degradation without crashes

## 5.6 Maintainability

### 5.6.1 Code Quality

**Code Organization:**
- Modular architecture with separation of concerns
- Backend: Routes, middleware, utilities separated
- Frontend: Components, pages, utilities separated
- Consistent file and folder structure

**Code Standards:**
- Consistent naming conventions
- Meaningful variable and function names
- Comments for complex logic
- No hardcoded values (use constants or environment variables)

**Documentation:**
- README with setup instructions
- Inline code comments
- API endpoint documentation
- Database schema documentation

### 5.6.2 Maintainability Metrics

**Code Complexity:**
- Functions kept small and focused
- Maximum function length: 50 lines (guideline)
- Cyclomatic complexity: Low to moderate

**Modularity:**
- Reusable components and functions
- DRY (Don't Repeat Yourself) principle
- Single Responsibility Principle

**Testability:**
- Functions designed for easy testing
- Minimal dependencies between modules
- Mock-friendly architecture

### 5.6.3 Update and Patch Management

**Dependency Updates:**
- Regular security updates for dependencies
- npm audit for vulnerability scanning
- Semantic versioning for dependency management

**Application Updates:**
- Version control using Git
- Branching strategy for features and fixes
- Testing before deployment

**Database Migrations:**
- Schema changes documented
- Migration scripts for database updates
- Rollback procedures documented

### 5.6.4 Monitoring and Diagnostics

**Logging:**
- Application logs for errors and important events
- Database query logging (development)
- No sensitive data in logs

**Error Tracking:**
- Console logging for development
- Error messages returned to client (non-sensitive)
- Server logs for debugging

**Performance Monitoring:**
- Manual monitoring of server resources
- Database query performance analysis
- No built-in monitoring dashboard

## 5.7 Usability

### 5.7.1 Ease of Use

**User Interface:**
- Intuitive navigation with clear menu structure
- Consistent layout across all pages
- Familiar UI patterns (tables, forms, buttons)
- Visual feedback for user actions

**Learning Curve:**
- Admin: 2-4 hours training required
- Manager: 1-2 hours training required
- Staff: 30-60 minutes training required
- Minimal technical knowledge required

**User Guidance:**
- Clear labels and instructions
- Placeholder text in input fields
- Validation messages guide correct input
- Error messages explain what went wrong

### 5.7.2 Accessibility

**Visual Design:**
- Adequate color contrast for readability
- Consistent font sizes and styles
- Clear visual hierarchy
- Responsive design for different screen sizes

**Keyboard Navigation:**
- Tab navigation through forms
- Enter key submits forms
- Escape key closes modals

**Browser Compatibility:**
- Works on all modern browsers
- Consistent experience across browsers
- No browser-specific features required

### 5.7.3 User Feedback

**Success Feedback:**
- Toast notifications for successful actions
- Success messages in green
- Confirmation messages for important actions

**Error Feedback:**
- Clear error messages explaining the problem
- Error messages in red
- Validation errors shown near relevant fields
- Suggestions for fixing errors

**Loading Indicators:**
- Spinners for loading data
- Disabled buttons during processing
- Progress indication for long operations

### 5.7.4 Help and Documentation

**In-Application Help:**
- Tooltips for complex features (optional)
- Placeholder text as guidance
- Clear field labels

**External Documentation:**
- README file with setup instructions
- User manual (can be created separately)
- FAQ document (can be created separately)

## 5.8 Compliance and Legal Requirements

### 5.8.1 Data Privacy

**Personal Data Protection:**
- User data stored securely in database
- Passwords encrypted (hashed)
- Access control prevents unauthorized data access
- Users can view and update their own data

**Data Collection:**
- Only necessary data collected
- Purpose of data collection clear
- No third-party data sharing
- No analytics or tracking in current version

**Data Retention:**
- Data retained indefinitely (no automatic deletion)
- Manual data deletion possible by admin
- Deleted users' data removed (CASCADE)

### 5.8.2 Regulatory Compliance

**General Data Protection Regulation (GDPR) Considerations:**
- Right to access: Users can view their data
- Right to rectification: Users can update their data
- Right to erasure: Admin can delete user accounts
- Data minimization: Only necessary data collected
- Security: Passwords encrypted, access controlled

**Local Data Protection Laws:**
- System should be configured to comply with local laws
- Data residency: Database hosted in appropriate jurisdiction
- User consent: Obtained during account creation (if required)

### 5.8.3 Audit and Compliance

**Audit Trail:**
- Timestamps on all records
- User IDs tracked for actions
- No modification of historical records
- Complaint and feedback replies tracked

**Compliance Reporting:**
- Data can be exported for compliance audits
- User activity can be traced through database
- No built-in compliance reporting features

### 5.8.4 Terms of Use and Privacy Policy

**Legal Documents:**
- Terms of use should be created by organization
- Privacy policy should be created by organization
- User acceptance of terms (can be implemented)
- Legal disclaimers (organization's responsibility)

### 5.8.5 Intellectual Property

**Software Licensing:**
- Application code: Proprietary or open-source (as decided)
- Third-party libraries: Respective licenses apply
- No license violations in dependencies

**Data Ownership:**
- Organization owns all data in system
- Users own their personal information
- No transfer of data ownership

---

# 6. System Architecture and Design

## 6.1 System Architecture Overview

### 6.1.1 Architectural Pattern

The Simple Workforce Manager follows a **Three-Tier Architecture** pattern:

**Tier 1: Presentation Layer (Client-Side)**
- Technology: React 19 Single Page Application (SPA)
- Responsibility: User interface, user interaction, client-side routing
- Communication: HTTP/HTTPS REST API calls, WebSocket for real-time chat
- Deployment: Served as static files from web server or CDN

**Tier 2: Application Layer (Server-Side)**
- Technology: Node.js with Express.js framework
- Responsibility: Business logic, authentication, authorization, API endpoints
- Communication: Receives HTTP requests, queries database, sends responses
- Deployment: Node.js process on application server

**Tier 3: Data Layer (Database)**
- Technology: PostgreSQL relational database
- Responsibility: Data persistence, data integrity, transaction management
- Communication: SQL queries via pg driver
- Deployment: PostgreSQL server instance

### 6.1.2 Architectural Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT TIER                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         React SPA (Browser)                          │  │
│  │  - Components (UI)                                   │  │
│  │  - Pages (Views)                                     │  │
│  │  - Axios (HTTP Client)                               │  │
│  │  - Socket.io Client (WebSocket)                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ HTTP/HTTPS (REST API)
                          │ WebSocket (Real-time)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   APPLICATION TIER                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │      Node.js + Express.js Server                     │  │
│  │  ┌────────────────────────────────────────────────┐ │  │
│  │  │  Routes (API Endpoints)                        │ │  │
│  │  │  - /api/auth, /api/tasks, /api/chat, etc.     │ │  │
│  │  └────────────────────────────────────────────────┘ │  │
│  │  ┌────────────────────────────────────────────────┐ │  │
│  │  │  Middleware                                    │ │  │
│  │  │  - Authentication (JWT)                        │ │  │
│  │  │  - Authorization (RBAC)                        │ │  │
│  │  │  - CORS, Body Parser                           │ │  │
│  │  └────────────────────────────────────────────────┘ │  │
│  │  ┌────────────────────────────────────────────────┐ │  │
│  │  │  Socket.io Server (WebSocket)                  │ │  │
│  │  │  - Real-time message handling                  │ │  │
│  │  └────────────────────────────────────────────────┘ │  │
│  │  ┌────────────────────────────────────────────────┐ │  │
│  │  │  Utilities                                     │ │  │
│  │  │  - Email service, Constants                    │ │  │
│  │  └────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ SQL Queries (pg driver)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATA TIER                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         PostgreSQL Database                          │  │
│  │  - Tables (users, tasks, attendance, etc.)           │  │
│  │  - Constraints (PK, FK, UNIQUE)                      │  │
│  │  - Indexes (Performance optimization)                │  │
│  │  - Transactions (Data integrity)                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 6.1.3 Component Interaction

**User Authentication Flow:**
1. User enters credentials in React login form
2. React sends POST request to /api/auth/login
3. Express server validates credentials against database
4. Server generates JWT token and returns to client
5. Client stores token and includes in subsequent requests
6. Middleware validates token on protected endpoints

**Data Retrieval Flow:**
1. User action triggers API call from React
2. Axios sends HTTP request with JWT token
3. Express middleware validates token and role
4. Route handler queries PostgreSQL database
5. Database returns result set
6. Server formats response as JSON
7. React receives data and updates UI

**Real-Time Chat Flow:**
1. User connects to Socket.io server via WebSocket
2. Client sends JWT token for authentication
3. Server maps user ID to socket ID
4. User sends message via socket event
5. Server stores message in database
6. Server emits message to recipient's socket
7. Recipient receives real-time notification

### 6.1.4 Design Patterns

**Model-View-Controller (MVC) Variant:**
- Model: Database tables and queries
- View: React components
- Controller: Express route handlers

**Repository Pattern:**
- Database queries centralized in db.js
- Connection pooling for efficiency

**Middleware Pattern:**
- Authentication middleware
- Authorization middleware
- Error handling middleware

**Observer Pattern:**
- Socket.io event-driven architecture
- Real-time message notifications


## 6.2 Database Design

### 6.2.1 Database Schema Overview

The database consists of 12 tables organized to support all system features with proper normalization and referential integrity.

**Core Tables:**
- users: User accounts and authentication
- user_profiles: Extended user information
- system_settings: System-wide configuration

**Feature Tables:**
- tasks: Task management
- attendance: Attendance tracking
- reports: Daily work reports
- complaints: Complaint submissions
- complaint_replies: Threaded complaint responses
- feedback: Feedback submissions
- allowances: Employee allowances
- conversations: Chat conversations
- messages: Chat messages

### 6.2.2 Custom Data Types (ENUMs)

```sql
CREATE TYPE user_role AS ENUM ('admin', 'manager', 'staff');
CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'completed');
CREATE TYPE complaint_status AS ENUM ('open', 'resolved');
CREATE TYPE sex_type AS ENUM ('male', 'female', 'other');
CREATE TYPE conversation_status AS ENUM ('active', 'blocked');
```

### 6.2.3 Table Structures

**users Table:**
```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role user_role NOT NULL,
  is_default_password BOOLEAN DEFAULT true NOT NULL,
  password_reset_token TEXT,
  password_reset_expires TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**user_profiles Table:**
```sql
CREATE TABLE user_profiles (
  profile_id SERIAL PRIMARY KEY,
  user_id INT UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(20) UNIQUE NOT NULL,
  sex sex_type NOT NULL,
  job_title VARCHAR(100),
  hire_date DATE,
  address TEXT,
  date_format VARCHAR(20) DEFAULT 'MM/DD/YYYY',
  notification_prefs JSONB DEFAULT '{}',
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**tasks Table:**
```sql
CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status task_status DEFAULT 'pending' NOT NULL,
  assigned_to INT,
  assigned_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  due_date TIMESTAMP,
  FOREIGN KEY(assigned_to) REFERENCES users(user_id) ON DELETE SET NULL,
  FOREIGN KEY(assigned_by) REFERENCES users(user_id) ON DELETE SET NULL
);
```

**attendance Table:**
```sql
CREATE TABLE attendance (
  attendance_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  clock_in_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  clock_out_time TIMESTAMP,
  attendance_date DATE DEFAULT CURRENT_DATE NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**conversations Table:**
```sql
CREATE TABLE conversations (
  conversation_id SERIAL PRIMARY KEY,
  user1_id INT NOT NULL,
  user2_id INT NOT NULL,
  status conversation_status NOT NULL DEFAULT 'active',
  blocked_by INT,
  user1_cleared_at TIMESTAMP,
  user2_cleared_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user1_id, user2_id),
  FOREIGN KEY(user1_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY(user2_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY(blocked_by) REFERENCES users(user_id) ON DELETE SET NULL
);
```

**messages Table:**
```sql
CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  conversation_id INT NOT NULL,
  sender_id INT NOT NULL,
  content TEXT NOT NULL,
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY(conversation_id) REFERENCES conversations(conversation_id) ON DELETE CASCADE,
  FOREIGN KEY(sender_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**complaints Table:**
```sql
CREATE TABLE complaints (
  complaint_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  status complaint_status DEFAULT 'open' NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**complaint_replies Table:**
```sql
CREATE TABLE complaint_replies (
  reply_id SERIAL PRIMARY KEY,
  complaint_id INT NOT NULL,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  replied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY(complaint_id) REFERENCES complaints(complaint_id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**reports Table:**
```sql
CREATE TABLE reports (
  report_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**feedback Table:**
```sql
CREATE TABLE feedback (
  feedback_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  reply TEXT,
  replied_by INT,
  replied_at TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY(replied_by) REFERENCES users(user_id) ON DELETE SET NULL
);
```

**allowances Table:**
```sql
CREATE TABLE allowances (
  allowance_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  frequency VARCHAR(50) DEFAULT 'one-time' NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
```

**system_settings Table:**
```sql
CREATE TABLE system_settings (
  setting_key VARCHAR(50) PRIMARY KEY,
  setting_value TEXT
);
```

### 6.2.4 Relationships and Constraints

**Primary Keys:**
- All tables have auto-incrementing SERIAL primary keys
- Ensures unique identification of records

**Foreign Keys:**
- user_profiles.user_id → users.user_id (CASCADE DELETE)
- tasks.assigned_to → users.user_id (SET NULL on delete)
- tasks.assigned_by → users.user_id (SET NULL on delete)
- attendance.user_id → users.user_id (CASCADE DELETE)
- conversations.user1_id → users.user_id (CASCADE DELETE)
- conversations.user2_id → users.user_id (CASCADE DELETE)
- messages.conversation_id → conversations.conversation_id (CASCADE DELETE)
- messages.sender_id → users.user_id (CASCADE DELETE)
- complaints.user_id → users.user_id (CASCADE DELETE)
- complaint_replies.complaint_id → complaints.complaint_id (CASCADE DELETE)
- complaint_replies.user_id → users.user_id (CASCADE DELETE)
- reports.user_id → users.user_id (CASCADE DELETE)
- feedback.user_id → users.user_id (CASCADE DELETE)
- allowances.user_id → users.user_id (CASCADE DELETE)

**Unique Constraints:**
- users.username (UNIQUE)
- users.email (UNIQUE)
- user_profiles.user_id (UNIQUE)
- user_profiles.phone_number (UNIQUE)
- conversations.(user1_id, user2_id) (UNIQUE composite)

**Check Constraints:**
- ENUM types enforce valid values for role, status, sex, etc.

### 6.2.5 Indexing Strategy

**Automatic Indexes:**
- Primary keys automatically indexed
- Unique constraints automatically indexed

**Recommended Additional Indexes:**
- users.username (for login queries)
- users.email (for password reset queries)
- tasks.assigned_to (for "my tasks" queries)
- attendance.user_id (for attendance history)
- messages.conversation_id (for message history)
- complaints.user_id (for user's complaints)

### 6.2.6 Normalization

**Normal Forms Achieved:**
- 1NF: All attributes contain atomic values
- 2NF: No partial dependencies (all non-key attributes depend on entire primary key)
- 3NF: No transitive dependencies (non-key attributes don't depend on other non-key attributes)

**Denormalization Decisions:**
- None: Database is fully normalized for data integrity


## 6.3 API Design

### 6.3.1 API Architecture

**Style:** RESTful API

**Protocol:** HTTP/HTTPS

**Data Format:** JSON

**Base URL:** http://localhost:5001/api (development)

**Authentication:** JWT Bearer Token in Authorization header

### 6.3.2 API Endpoint Summary

**Authentication Endpoints:**
- POST /api/auth/login - User login
- POST /api/auth/reset-password - Reset password (authenticated)
- POST /api/auth/forgot-password - Request password reset email
- POST /api/auth/perform-reset - Reset password with token

**User Management Endpoints:**
- POST /api/staff - Create user (Admin)
- GET /api/staff - Get all users (Admin, Manager)
- GET /api/staff/:id - Get user by ID (Admin, Manager)
- PUT /api/staff/:id - Update user (Admin)
- DELETE /api/staff/:id - Delete user (Admin)

**Task Management Endpoints:**
- POST /api/tasks - Create task (Admin, Manager)
- GET /api/tasks - Get all tasks (Admin, Manager)
- GET /api/tasks/mytasks - Get my tasks (Staff)
- PUT /api/tasks/:id - Update task (Manager)
- DELETE /api/tasks/:id - Delete task (Manager)
- PATCH /api/tasks/:id/status - Update task status (Staff)

**Attendance Endpoints:**
- POST /api/attendance/clock-in - Clock in (Staff)
- POST /api/attendance/clock-out - Clock out (Staff)
- GET /api/attendance/status - Get clock-in status (Staff)
- GET /api/attendance/all - Get all attendance (Admin, Manager)

**Chat Endpoints:**
- GET /api/chat/search - Search users
- GET /api/chat/conversations - Get conversations
- GET /api/chat/history/:userId - Get message history
- PUT /api/chat/conversation/:convoId/block - Block conversation
- PUT /api/chat/conversation/:convoId/unblock - Unblock conversation
- DELETE /api/chat/conversation/:convoId/clear - Clear chat history

**Reports Endpoints:**
- POST /api/reports - Submit report (Staff)
- GET /api/reports - Get all reports (Admin, Manager)

**Complaints Endpoints:**
- POST /api/complaints - Submit complaint (Staff)
- GET /api/complaints/my-complaints - Get my complaints (Staff)
- GET /api/complaints/all - Get all complaints (Admin, Manager)
- POST /api/complaints/:id/reply - Reply to complaint (Admin, Manager)
- PUT /api/complaints/:id/status - Update complaint status (Admin, Manager)

**Feedback Endpoints:**
- POST /api/feedback - Submit feedback (Staff)
- GET /api/feedback/my-feedback - Get my feedback (Staff)
- GET /api/feedback/all - Get all feedback (Admin, Manager)
- PUT /api/feedback/:id/reply - Reply to feedback (Admin, Manager)

**Allowances Endpoints:**
- POST /api/allowances - Create allowance (Admin, Manager)
- GET /api/allowances/my-allowances - Get my allowances (Staff)
- GET /api/allowances/all - Get all allowances (Admin, Manager)
- PUT /api/allowances/:id - Update allowance (Admin, Manager)
- DELETE /api/allowances/:id - Delete allowance (Admin, Manager)

**Profile Endpoints:**
- GET /api/profile/me - Get my profile
- PUT /api/profile/me - Update my profile

**Settings Endpoints:**
- GET /api/settings - Get settings
- PUT /api/settings/personal - Update personal settings
- PUT /api/settings/system - Update system settings (Admin)
- PUT /api/settings/change-password - Change password

### 6.3.3 WebSocket Events

**Connection Events:**
- connection - Client connects to server
- authenticate - Client sends JWT token
- disconnect - Client disconnects

**Message Events:**
- send_message - Client sends message
- receive_message - Server pushes message to client

### 6.3.4 Request/Response Format

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
```

**Success Response Format:**
```json
{
  "data": { ... },
  "message": "Success message"
}
```

**Error Response Format:**
```json
{
  "message": "Error description"
}
```

**HTTP Status Codes:**
- 200: OK - Request successful
- 201: Created - Resource created successfully
- 400: Bad Request - Invalid input
- 401: Unauthorized - Authentication required
- 403: Forbidden - Insufficient permissions
- 404: Not Found - Resource not found
- 409: Conflict - Duplicate resource
- 500: Internal Server Error - Server error

### 6.3.5 Authentication Flow

**Login Request:**
```
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin"
}
```

**Login Response:**
```
HTTP 200 OK
Content-Type: application/json

{
  "message": "Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Authenticated Request:**
```
GET /api/tasks/mytasks
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 6.3.6 API Security

**Authentication:**
- JWT token required for all protected endpoints
- Token validated using middleware
- Token contains user_id, role, is_default_password

**Authorization:**
- Role-based access control enforced
- Middleware checks user role before processing
- Unauthorized access returns 403 Forbidden

**Input Validation:**
- Required fields validated
- Data types validated
- Uniqueness constraints checked
- SQL injection prevented with parameterized queries

**Error Handling:**
- Try-catch blocks around all operations
- Meaningful error messages returned
- No sensitive information in error messages
- Database errors logged server-side

---

# 7. Data Requirements

## 7.1 Data Structures and Entities

### 7.1.1 Core Entities

**User Entity:**
- Attributes: user_id, username, email, password_hash, role, is_default_password, password_reset_token, password_reset_expires, created_at
- Relationships: Has one profile, has many tasks (assigned), has many attendance records, has many reports, has many complaints, has many feedback, has many allowances, participates in conversations

**User Profile Entity:**
- Attributes: profile_id, user_id, first_name, last_name, phone_number, sex, job_title, hire_date, address, date_format, notification_prefs
- Relationships: Belongs to one user

**Task Entity:**
- Attributes: task_id, title, description, status, assigned_to, assigned_by, created_at, due_date
- Relationships: Assigned to one user, assigned by one user

**Attendance Entity:**
- Attributes: attendance_id, user_id, clock_in_time, clock_out_time, attendance_date
- Relationships: Belongs to one user

**Conversation Entity:**
- Attributes: conversation_id, user1_id, user2_id, status, blocked_by, user1_cleared_at, user2_cleared_at, created_at
- Relationships: Between two users, has many messages

**Message Entity:**
- Attributes: message_id, conversation_id, sender_id, content, sent_at
- Relationships: Belongs to one conversation, sent by one user

**Complaint Entity:**
- Attributes: complaint_id, user_id, title, content, status, submitted_at
- Relationships: Submitted by one user, has many replies

**Complaint Reply Entity:**
- Attributes: reply_id, complaint_id, user_id, content, replied_at
- Relationships: Belongs to one complaint, replied by one user

**Report Entity:**
- Attributes: report_id, user_id, title, content, submitted_at
- Relationships: Submitted by one user

**Feedback Entity:**
- Attributes: feedback_id, user_id, title, content, submitted_at, reply, replied_by, replied_at
- Relationships: Submitted by one user, replied by one user (optional)

**Allowance Entity:**
- Attributes: allowance_id, user_id, title, description, amount, frequency, created_at
- Relationships: Belongs to one user

**System Settings Entity:**
- Attributes: setting_key, setting_value
- Relationships: None (key-value store)

### 7.1.2 Data Types

**Primitive Types:**
- INTEGER: IDs, user references
- VARCHAR: Short text (usernames, titles, names)
- TEXT: Long text (descriptions, content, addresses)
- DECIMAL: Monetary amounts (allowances)
- TIMESTAMP: Date and time values
- DATE: Date only values
- BOOLEAN: True/false flags
- JSONB: JSON data (notification preferences)

**Custom ENUM Types:**
- user_role: admin, manager, staff
- task_status: pending, in_progress, completed
- complaint_status: open, resolved
- sex_type: male, female, other
- conversation_status: active, blocked

### 7.1.3 Data Validation Rules

**Username:**
- Required, unique
- Maximum 100 characters
- No special validation (can contain any characters)

**Email:**
- Required, unique
- Maximum 255 characters
- Must be valid email format

**Password:**
- Required
- Minimum 6 characters
- Stored as BCrypt hash (255 characters)

**Phone Number:**
- Required, unique
- Maximum 20 characters
- No format validation (international support)

**Amount (Allowances):**
- Required
- DECIMAL(10, 2) - up to 99,999,999.99
- Must be positive

**Dates:**
- Timestamps: ISO 8601 format
- Dates: YYYY-MM-DD format

## 7.2 Database Requirements

### 7.2.1 Database Management System

**DBMS:** PostgreSQL

**Version:** 13.0 or higher

**Justification:**
- Robust ACID compliance
- Strong data integrity with foreign keys
- Support for custom ENUM types
- JSONB support for flexible data
- Excellent performance for relational data
- Open-source and widely supported

### 7.2.2 Database Configuration

**Character Encoding:** UTF-8 (for international character support)

**Timezone:** UTC (for consistent timestamp storage)

**Connection Pooling:**
- Minimum connections: 2
- Maximum connections: 10
- Idle timeout: 30 seconds

**Transaction Isolation:** Read Committed (default)

### 7.2.3 Database Size Estimates

**Initial Database Size:** < 100 MB

**Growth Estimates (per year for 50 users):**
- Users and Profiles: Negligible (< 1 MB)
- Tasks: ~5 MB (assuming 1000 tasks/year)
- Attendance: ~2 MB (assuming 12,000 records/year)
- Messages: ~50 MB (assuming 100,000 messages/year)
- Reports: ~10 MB (assuming 5,000 reports/year)
- Complaints: ~5 MB (assuming 500 complaints/year)
- Feedback: ~2 MB (assuming 200 feedback/year)
- Allowances: ~1 MB (assuming 500 allowances/year)

**Total Estimated Growth:** ~75 MB per year

**5-Year Projection:** ~500 MB

### 7.2.4 Performance Requirements

**Query Performance:**
- Simple queries (by primary key): < 10ms
- Complex queries (with joins): < 100ms
- Aggregate queries: < 500ms

**Transaction Performance:**
- Insert operations: < 50ms
- Update operations: < 50ms
- Delete operations: < 50ms

**Concurrent Access:**
- Support 100 concurrent connections
- No deadlocks under normal operation
- Transaction isolation prevents conflicts

## 7.3 Storage, Backup, and Recovery

### 7.3.1 Storage Requirements

**Primary Storage:**
- Database files: 10 GB allocated (room for growth)
- Transaction logs: 5 GB allocated
- Temporary files: 2 GB allocated

**Storage Type:**
- SSD recommended for performance
- RAID configuration recommended for redundancy

**File System:**
- Linux: ext4 or XFS
- Windows: NTFS
- macOS: APFS

### 7.3.2 Backup Strategy

**Backup Types:**

**Full Backup:**
- Frequency: Daily
- Time: Off-peak hours (e.g., 2:00 AM)
- Method: pg_dump or pg_basebackup
- Retention: 30 days

**Incremental Backup:**
- Frequency: Hourly (optional)
- Method: WAL (Write-Ahead Logging) archiving
- Retention: 7 days

**Backup Storage:**
- Location: Separate physical server or cloud storage
- Encryption: Recommended for sensitive data
- Compression: Enabled to save space

**Backup Verification:**
- Test restores: Monthly
- Integrity checks: Weekly
- Backup monitoring: Daily

### 7.3.3 Recovery Procedures

**Recovery Time Objective (RTO):** 4 hours
- Time to restore system to operational state

**Recovery Point Objective (RPO):** 24 hours
- Maximum acceptable data loss (1 day of data)

**Recovery Scenarios:**

**Complete Database Loss:**
1. Provision new database server
2. Install PostgreSQL
3. Restore latest full backup
4. Apply incremental backups if available
5. Verify data integrity
6. Update application connection strings
7. Test system functionality
8. Resume operations

**Partial Data Loss:**
1. Identify affected tables/records
2. Restore from backup to temporary database
3. Extract affected data
4. Import into production database
5. Verify data consistency
6. Resume operations

**Corruption:**
1. Identify corrupted data
2. Stop write operations to affected tables
3. Restore from backup
4. Verify integrity
5. Resume operations

### 7.3.4 Disaster Recovery

**Disaster Scenarios:**
- Hardware failure
- Data center outage
- Natural disaster
- Cyber attack
- Human error

**Disaster Recovery Plan:**
1. Maintain off-site backups
2. Document recovery procedures
3. Maintain contact list for emergency
4. Test disaster recovery annually
5. Keep backup of application code
6. Maintain system documentation

**Business Continuity:**
- Maximum downtime: 8 hours
- Critical data backed up daily
- Recovery procedures documented
- Alternative hosting prepared (optional)

## 7.4 Data Privacy

### 7.4.1 Personal Data Classification

**Highly Sensitive Data:**
- Passwords (hashed, never stored in plain text)
- Password reset tokens

**Sensitive Personal Data:**
- Email addresses
- Phone numbers
- Full names
- Addresses
- Sex/gender information
- Job titles
- Hire dates

**Non-Sensitive Data:**
- Usernames (public within system)
- Task titles and descriptions
- Report content
- Complaint content
- Feedback content
- Attendance timestamps
- Chat messages (within system)

### 7.4.2 Data Protection Measures

**Encryption:**
- Passwords: BCrypt hashing with salt
- Database: Encryption at rest (optional, recommended for production)
- Transmission: HTTPS/TLS for data in transit (recommended for production)

**Access Control:**
- Role-based access control (RBAC)
- Users can only access their own personal data
- Managers can view team data
- Admins have full access

**Data Minimization:**
- Only necessary data collected
- No unnecessary personal information
- Optional fields for non-essential data

### 7.4.3 Data Retention

**Active Data:**
- User accounts: Retained while user is active
- Tasks: Retained indefinitely
- Attendance: Retained indefinitely
- Messages: Retained indefinitely (user can clear their view)
- Reports: Retained indefinitely
- Complaints: Retained indefinitely
- Feedback: Retained indefinitely
- Allowances: Retained indefinitely

**Deleted Data:**
- User deletion: CASCADE deletes all related data
- Manual deletion: Immediate removal from database
- No soft deletes: Data is permanently removed

**Archival:**
- No automatic archival in current version
- Manual export possible via database tools
- Archival strategy: Organization's responsibility

### 7.4.4 Data Subject Rights

**Right to Access:**
- Users can view their own profile
- Users can view their own data (tasks, reports, etc.)
- Export functionality: Not built-in (manual via database)

**Right to Rectification:**
- Users can update their own profile
- Users cannot edit historical records (reports, complaints)

**Right to Erasure:**
- Admin can delete user accounts
- Deletion removes all personal data (CASCADE)
- No "right to be forgotten" automation

**Right to Data Portability:**
- No built-in export functionality
- Manual export possible via database queries
- JSON format available via API

### 7.4.5 Data Breach Response

**Detection:**
- Monitor for unauthorized access
- Log authentication failures
- Database audit logs (if enabled)

**Response Plan:**
1. Identify scope of breach
2. Contain the breach
3. Assess impact
4. Notify affected users (if required by law)
5. Notify authorities (if required by law)
6. Remediate vulnerabilities
7. Document incident

**Prevention:**
- Regular security updates
- Strong password policy
- Access control enforcement
- Regular backups
- Security monitoring

---

# 8. System Flow

## 8.1 Authentication Flow

### 8.1.1 User Login Flow

**Flow Description:**
```
START
  ↓
User enters username and password
  ↓
Frontend validates fields are not empty
  ↓
Frontend sends POST request to /api/auth/login
  ↓
Backend receives request
  ↓
Backend validates username and password are provided
  ├─ NO → Return HTTP 400 "Username and password are required"
  └─ YES → Continue
       ↓
Backend queries database for user by username
  ↓
User found in database?
  ├─ NO → Return HTTP 401 "Invalid credentials"
  └─ YES → Continue
       ↓
Backend compares password with stored hash using BCrypt
  ↓
Password matches?
  ├─ NO → Return HTTP 401 "Invalid credentials"
  └─ YES → Continue
       ↓
Backend creates JWT payload with user_id, role, is_default_password
  ↓
Backend signs JWT token with secret key (expires in 1 hour)
  ↓
Backend returns HTTP 200 with token and success message
  ↓
Frontend receives token
  ↓
Frontend stores token (localStorage or memory)
  ↓
Check is_default_password flag
  ├─ TRUE → Show password reset prompt
  └─ FALSE → Redirect to dashboard
       ↓
END
```

### 8.1.2 Password Reset Flow (Authenticated User)

**Flow Description:**
```
START
  ↓
User clicks "Change Password" in settings
  ↓
User enters new password
  ↓
Frontend validates password length (minimum 6 characters)
  ├─ INVALID → Show error message
  └─ VALID → Continue
       ↓
Frontend sends POST request to /api/auth/reset-password with JWT token
  ↓
Backend validates JWT token
  ├─ INVALID → Return HTTP 401 "Unauthorized"
  └─ VALID → Continue
       ↓
Backend extracts user_id from token
  ↓
Backend validates new password length
  ├─ TOO SHORT → Return HTTP 400 "Password must be at least 6 characters"
  └─ VALID → Continue
       ↓
Backend generates salt and hashes new password with BCrypt
  ↓
Backend updates password_hash in database
  ↓
Backend sets is_default_password = false
  ↓
Backend returns HTTP 200 "Password reset successful"
  ↓
Frontend shows success message
  ↓
Frontend prompts user to log in again
  ↓
END
```

### 8.1.3 Forgot Password Flow

**Flow Description:**
```
START
  ↓
User clicks "Forgot Password" on login page
  ↓
User enters email address
  ↓
Frontend sends POST request to /api/auth/forgot-password
  ↓
Backend queries database for user by email
  ↓
User found?
  ├─ NO → Return generic success message (security measure)
  └─ YES → Continue
       ↓
Backend generates random reset token (32 bytes hex)
  ↓
Backend calculates expiration time (current time + 15 minutes)
  ↓
Backend stores token and expiration in database
  ↓
Backend sends email with reset link containing token
  ↓
Backend returns generic success message
  ↓
Frontend shows "If account exists, email sent" message
  ↓
User receives email
  ↓
User clicks reset link in email
  ↓
Frontend extracts token from URL
  ↓
User enters new password
  ↓
Frontend sends POST request to /api/auth/perform-reset with token and new password
  ↓
Backend validates token and new password are provided
  ├─ MISSING → Return HTTP 400 "Token and new password required"
  └─ PROVIDED → Continue
       ↓
Backend queries database for valid, non-expired token
  ↓
Token valid and not expired?
  ├─ NO → Return HTTP 400 "Token invalid or expired"
  └─ YES → Continue
       ↓
Backend hashes new password with BCrypt
  ↓
Backend updates password_hash in database
  ↓
Backend clears reset token and expiration
  ↓
Backend sets is_default_password = false
  ↓
Backend returns HTTP 200 "Password reset successful"
  ↓
Frontend shows success message
  ↓
Frontend redirects to login page
  ↓
END
```

## 8.2 Main Processing Flows

### 8.2.1 Task Assignment Flow

**Flow Description:**
```
START (Manager creates task)
  ↓
Manager navigates to Task Management page
  ↓
Manager clicks "Create Task" button
  ↓
System displays task creation form
  ↓
Manager enters task details:
  - Title (required)
  - Description (optional)
  - Assign To (select staff member, required)
  - Due Date (optional)
  ↓
Manager clicks "Submit"
  ↓
Frontend validates required fields
  ├─ INVALID → Show validation errors
  └─ VALID → Continue
       ↓
Frontend sends POST request to /api/tasks with JWT token
  ↓
Backend validates JWT token and checks Manager role
  ├─ UNAUTHORIZED → Return HTTP 401/403
  └─ AUTHORIZED → Continue
       ↓
Backend validates required fields (title, assigned_to)
  ├─ MISSING → Return HTTP 400 "Title and assigned_to required"
  └─ VALID → Continue
       ↓
Backend queries database to verify assigned user exists
  ├─ NOT FOUND → Return HTTP 404 "Assigned user does not exist"
  └─ EXISTS → Continue
       ↓
Backend extracts assigner user_id from JWT token
  ↓
Backend inserts task into database with:
  - title, description, assigned_to, assigned_by, due_date
  - status = 'pending' (default)
  - created_at = current timestamp
  ↓
Database returns created task with task_id
  ↓
Backend returns HTTP 201 with task object
  ↓
Frontend shows success message
  ↓
Frontend refreshes task list
  ↓
Staff member can now see task in "My Tasks"
  ↓
END
```

### 8.2.2 Attendance Tracking Flow

**Flow Description:**
```
START (Staff clocks in)
  ↓
Staff navigates to Dashboard or Attendance page
  ↓
System displays Clock-In widget with current status
  ↓
System checks if staff is already clocked in today
  ├─ CLOCKED IN → Show "Clock Out" button with clock-in time
  └─ NOT CLOCKED IN → Show "Clock In" button
       ↓
Staff clicks "Clock In" button
  ↓
Frontend sends POST request to /api/attendance/clock-in with JWT token
  ↓
Backend validates JWT token and checks Staff role
  ├─ UNAUTHORIZED → Return HTTP 401/403
  └─ AUTHORIZED → Continue
       ↓
Backend extracts user_id from token
  ↓
Backend queries database for existing clock-in record today
  ↓
Already clocked in today?
  ├─ YES → Return HTTP 409 "You are already clocked in"
  └─ NO → Continue
       ↓
Backend inserts new attendance record:
  - user_id = current user
  - clock_in_time = current timestamp
  - clock_out_time = NULL
  - attendance_date = current date
  ↓
Database returns created attendance record
  ↓
Backend returns HTTP 201 with attendance object and success message
  ↓
Frontend shows success notification "Clocked in successfully"
  ↓
Frontend updates widget to show "Clock Out" button
  ↓
Frontend displays clock-in time
  ↓
--- Staff works ---
  ↓
Staff clicks "Clock Out" button
  ↓
Frontend sends POST request to /api/attendance/clock-out with JWT token
  ↓
Backend validates JWT token and checks Staff role
  ↓
Backend queries database for open clock-in record today
  ↓
Open record found?
  ├─ NO → Return HTTP 400 "You are not clocked in"
  └─ YES → Continue
       ↓
Backend updates attendance record:
  - clock_out_time = current timestamp
  ↓
Backend returns HTTP 200 with updated attendance object
  ↓
Frontend shows success notification "Clocked out successfully"
  ↓
Frontend updates widget to show "Clock In" button
  ↓
Frontend displays total work duration
  ↓
Manager can view attendance record in Attendance Management
  ↓
END
```

### 8.2.3 Real-Time Chat Flow

**Flow Description:**
```
START (User sends message)
  ↓
User logs in and navigates to Chat page
  ↓
Frontend establishes WebSocket connection to server
  ↓
Frontend sends 'authenticate' event with JWT token
  ↓
Backend validates JWT token
  ├─ INVALID → Disconnect socket
  └─ VALID → Continue
       ↓
Backend extracts user_id from token
  ↓
Backend stores mapping: user_id → socket_id
  ↓
User searches for another user to chat with
  ↓
Frontend sends GET request to /api/chat/search?query=username
  ↓
Backend returns matching users
  ↓
User selects recipient and clicks to open conversation
  ↓
Frontend sends GET request to /api/chat/history/:userId
  ↓
Backend calculates conversation_id (min/max of user IDs)
  ↓
Backend queries database for conversation
  ↓
Conversation exists?
  ├─ NO → Return empty conversation and messages
  └─ YES → Continue
       ↓
Backend checks conversation status
  ├─ BLOCKED → Return HTTP 403 "Conversation is blocked"
  └─ ACTIVE → Continue
       ↓
Backend gets user's cleared_at timestamp
  ↓
Backend queries messages sent after cleared_at time
  ↓
Backend returns conversation and messages
  ↓
Frontend displays message history
  ↓
User types message and clicks "Send"
  ↓
Frontend emits 'send_message' event via WebSocket with:
  - receiver_id
  - content
  ↓
Backend receives 'send_message' event
  ↓
Backend gets sender_id from socket mapping
  ├─ NOT AUTHENTICATED → Return error callback
  └─ AUTHENTICATED → Continue
       ↓
Backend calculates conversation_id (min/max of user IDs)
  ↓
Backend queries database for conversation
  ↓
Conversation exists?
  ├─ NO → Create new conversation with status 'active'
  └─ YES → Use existing conversation
       ↓
Backend checks conversation status
  ├─ BLOCKED → Return error callback "Conversation is blocked"
  └─ ACTIVE → Continue
       ↓
Backend inserts message into database:
  - conversation_id
  - sender_id
  - content
  - sent_at = current timestamp
  ↓
Database returns created message
  ↓
Backend looks up receiver's socket_id
  ↓
Receiver online?
  ├─ YES → Emit 'receive_message' event to receiver's socket
  └─ NO → Message stored, will be delivered when online
       ↓
Backend sends success callback to sender
  ↓
Sender's frontend shows message in chat
  ↓
Receiver's frontend receives 'receive_message' event
  ↓
Receiver's frontend displays message in real-time
  ↓
END
```

### 8.2.4 Complaint Submission and Resolution Flow

**Flow Description:**
```
START (Staff submits complaint)
  ↓
Staff navigates to Complaints page
  ↓
Staff clicks "Submit Complaint" button
  ↓
System displays complaint form
  ↓
Staff enters:
  - Title (required)
  - Content (required)
  ↓
Staff clicks "Submit"
  ↓
Frontend validates required fields
  ├─ INVALID → Show validation errors
  └─ VALID → Continue
       ↓
Frontend sends POST request to /api/complaints with JWT token
  ↓
Backend validates JWT token and checks Staff role
  ├─ UNAUTHORIZED → Return HTTP 401/403
  └─ AUTHORIZED → Continue
       ↓
Backend validates required fields
  ├─ MISSING → Return HTTP 400 "Title and content required"
  └─ VALID → Continue
       ↓
Backend extracts user_id from token
  ↓
Backend inserts complaint into database:
  - user_id, title, content
  - status = 'open' (default)
  - submitted_at = current timestamp
  ↓
Database returns created complaint
  ↓
Backend returns HTTP 201 with complaint object
  ↓
Frontend shows success message
  ↓
Frontend refreshes complaint list
  ↓
Staff can view complaint in "My Complaints"
  ↓
Manager can view complaint in "All Complaints"
  ↓
--- Manager reviews complaint ---
  ↓
Manager navigates to Complaints page
  ↓
Manager clicks on complaint to view details
  ↓
Frontend sends GET request to /api/complaints/all
  ↓
Backend returns all complaints with replies (JSON aggregated)
  ↓
Manager reads complaint and decides to reply
  ↓
Manager enters reply content
  ↓
Manager clicks "Submit Reply"
  ↓
Frontend sends POST request to /api/complaints/:id/reply
  ↓
Backend validates JWT token and checks Manager/Admin role
  ↓
Backend validates reply content is provided
  ├─ MISSING → Return HTTP 400 "Reply content required"
  └─ PROVIDED → Continue
       ↓
Backend verifies complaint exists
  ├─ NOT FOUND → Return HTTP 404 "Complaint not found"
  └─ EXISTS → Continue
       ↓
Backend inserts reply into complaint_replies table:
  - complaint_id, user_id (replier), content
  - replied_at = current timestamp
  ↓
Backend returns HTTP 201 with reply object
  ↓
Frontend shows success message
  ↓
Frontend refreshes complaint details
  ↓
Staff can see reply in their complaint view
  ↓
--- Manager resolves complaint ---
  ↓
Manager clicks "Mark as Resolved"
  ↓
Frontend sends PUT request to /api/complaints/:id/status
  ↓
Backend validates status value ('open' or 'resolved')
  ├─ INVALID → Return HTTP 400 "Invalid status"
  └─ VALID → Continue
       ↓
Backend updates complaint status in database
  ↓
Backend returns HTTP 200 with updated complaint
  ↓
Frontend shows success message
  ↓
Complaint status updated to 'resolved'
  ↓
END
```


## 8.3 Error Handling Flow

### 8.3.1 General Error Handling Flow

**Flow Description:**
```
START (Any API Request)
  ↓
Frontend sends request to backend
  ↓
Backend receives request
  ↓
Try-Catch block begins
  ↓
Execute request processing
  ↓
Error occurs?
  ├─ NO → Return success response → END
  └─ YES → Continue to error handling
       ↓
Identify error type:
  ├─ Authentication Error (401)
  │   ↓
  │   Log error (no sensitive data)
  │   ↓
  │   Return HTTP 401 with message
  │   ↓
  │   Frontend receives 401
  │   ↓
  │   Frontend clears stored token
  │   ↓
  │   Frontend redirects to login page
  │   ↓
  │   END
  │
  ├─ Authorization Error (403)
  │   ↓
  │   Log error
  │   ↓
  │   Return HTTP 403 "Access denied"
  │   ↓
  │   Frontend shows error message
  │   ↓
  │   Frontend stays on current page
  │   ↓
  │   END
  │
  ├─ Validation Error (400)
  │   ↓
  │   Identify validation failure
  │   ↓
  │   Return HTTP 400 with specific error message
  │   ↓
  │   Frontend shows validation error near relevant field
  │   ↓
  │   User corrects input
  │   ↓
  │   END
  │
  ├─ Not Found Error (404)
  │   ↓
  │   Return HTTP 404 with message
  │   ↓
  │   Frontend shows "Resource not found" message
  │   ↓
  │   Frontend may redirect or refresh list
  │   ↓
  │   END
  │
  ├─ Conflict Error (409)
  │   ↓
  │   Identify conflict (duplicate username, email, etc.)
  │   ↓
  │   Return HTTP 409 with specific message
  │   ↓
  │   Frontend shows error message
  │   ↓
  │   User modifies input to resolve conflict
  │   ↓
  │   END
  │
  └─ Database/Server Error (500)
      ↓
      Log full error details server-side
      ↓
      Return HTTP 500 "Server error" (no sensitive details)
      ↓
      Frontend shows generic error message
      ↓
      Frontend may offer retry option
      ↓
      END
```

### 8.3.2 Database Connection Error Flow

**Flow Description:**
```
START (Database operation needed)
  ↓
Application attempts to get database connection from pool
  ↓
Connection available?
  ├─ YES → Execute query → END (success)
  └─ NO → Continue to error handling
       ↓
Connection pool exhausted?
  ├─ YES → Wait for available connection (with timeout)
  │   ↓
  │   Connection becomes available?
  │   ├─ YES → Execute query → END
  │   └─ NO → Return HTTP 500 "Database connection timeout"
  │       ↓
  │       Frontend shows error message
  │       ↓
  │       END
  │
  └─ Database server unreachable?
      ↓
      Log connection error
      ↓
      Return HTTP 500 "Server error"
      ↓
      Frontend shows error message
      ↓
      System administrator notified (manual)
      ↓
      Administrator investigates database server
      ↓
      Administrator restarts database if needed
      ↓
      Application reconnects automatically
      ↓
      END
```

### 8.3.3 Transaction Rollback Flow

**Flow Description:**
```
START (Multi-step database operation)
  ↓
Begin database transaction
  ↓
Execute first operation (e.g., insert user)
  ↓
First operation successful?
  ├─ NO → Go to rollback
  └─ YES → Continue
       ↓
Execute second operation (e.g., insert profile)
  ↓
Second operation successful?
  ├─ NO → Go to rollback
  └─ YES → Continue
       ↓
All operations successful
  ↓
Commit transaction
  ↓
Return success response
  ↓
END (success)

ROLLBACK PATH:
  ↓
Error detected in any operation
  ↓
Rollback transaction
  ↓
All changes reverted
  ↓
Database state unchanged
  ↓
Log error details
  ↓
Return appropriate error response (400/409/500)
  ↓
Frontend shows error message
  ↓
User can retry operation
  ↓
END (failure, but data integrity maintained)
```

### 8.3.4 WebSocket Connection Error Flow

**Flow Description:**
```
START (User opens chat page)
  ↓
Frontend attempts to establish WebSocket connection
  ↓
Connection successful?
  ├─ YES → Authenticate with JWT → Continue to chat
  └─ NO → Continue to error handling
       ↓
Connection failed
  ↓
Frontend shows "Connecting..." indicator
  ↓
Frontend attempts automatic reconnection (exponential backoff)
  ↓
Retry attempt 1 (after 1 second)
  ↓
Connected?
  ├─ YES → Authenticate → Continue to chat
  └─ NO → Continue
       ↓
Retry attempt 2 (after 2 seconds)
  ↓
Connected?
  ├─ YES → Authenticate → Continue to chat
  └─ NO → Continue
       ↓
Retry attempt 3 (after 4 seconds)
  ↓
Connected?
  ├─ YES → Authenticate → Continue to chat
  └─ NO → Continue
       ↓
Max retries reached
  ↓
Frontend shows error message "Unable to connect to chat server"
  ↓
Frontend disables chat functionality
  ↓
Frontend shows "Retry" button
  ↓
User clicks "Retry"
  ↓
Restart connection attempt
  ↓
END

DISCONNECTION DURING CHAT:
  ↓
WebSocket connection drops
  ↓
Frontend detects disconnection
  ↓
Frontend shows "Reconnecting..." indicator
  ↓
Frontend attempts automatic reconnection
  ↓
Connected?
  ├─ YES → Re-authenticate → Restore chat session → END
  └─ NO → Show error message → Offer retry → END
```

### 8.3.5 Email Service Error Flow

**Flow Description:**
```
START (User requests password reset)
  ↓
User enters email address
  ↓
Frontend sends request to /api/auth/forgot-password
  ↓
Backend generates reset token
  ↓
Backend attempts to send email via SMTP
  ↓
Email sent successfully?
  ├─ YES → Return success message → END
  └─ NO → Continue to error handling
       ↓
SMTP connection failed?
  ├─ YES → Log error "SMTP connection failed"
  └─ NO → Check other errors
       ↓
Authentication failed?
  ├─ YES → Log error "SMTP authentication failed"
  └─ NO → Check other errors
       ↓
Email rejected?
  ├─ YES → Log error "Email rejected by server"
  └─ NO → Unknown error
       ↓
Log full error details
  ↓
Backend still returns generic success message (security measure)
  ↓
Frontend shows "If account exists, email sent" message
  ↓
User doesn't receive email
  ↓
User waits and checks spam folder
  ↓
Email still not received after 15 minutes
  ↓
User contacts system administrator
  ↓
Administrator checks email service configuration
  ↓
Administrator fixes email service
  ↓
User retries password reset
  ↓
END
```

---

# 9. System Models

## 9.1 Use Case Diagrams

### 9.1.1 Admin Use Cases

```
                    ┌─────────────────────────────────────┐
                    │         Admin Actor                 │
                    └─────────────────────────────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌──────────────┐    ┌──────────────┐   ┌──────────────┐
        │ Manage Users │    │ Manage Tasks │   │View Reports  │
        │ - Create     │    │ - Create     │   │& Complaints  │
        │ - Edit       │    │ - Edit       │   └──────────────┘
        │ - Delete     │    │ - Delete     │
        │ - View       │    │ - View       │
        └──────────────┘    └──────────────┘
                │                   │
                │                   │
                ▼                   ▼
        ┌──────────────┐    ┌──────────────┐
        │Configure     │    │View          │
        │System        │    │Attendance    │
        │Settings      │    │Records       │
        └──────────────┘    └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Manage        │
        │Allowances    │
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Use Chat      │
        │System        │
        └──────────────┘
```

### 9.1.2 Manager Use Cases

```
                    ┌─────────────────────────────────────┐
                    │        Manager Actor                │
                    └─────────────────────────────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌──────────────┐    ┌──────────────┐   ┌──────────────┐
        │ View Users   │    │ Manage Tasks │   │View & Reply  │
        │ (Read Only)  │    │ - Create     │   │to Complaints │
        └──────────────┘    │ - Edit       │   └──────────────┘
                            │ - Delete     │
                            │ - View       │
                            └──────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌──────────────┐    ┌──────────────┐   ┌──────────────┐
        │View          │    │View & Reply  │   │Manage        │
        │Attendance    │    │to Feedback   │   │Allowances    │
        │Records       │    └──────────────┘   │- Create      │
        └──────────────┘                       │- Edit        │
                                               │- Delete      │
                                               └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │View Reports  │
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Use Chat      │
        │System        │
        └──────────────┘
```

### 9.1.3 Staff Use Cases

```
                    ┌─────────────────────────────────────┐
                    │         Staff Actor                 │
                    └─────────────────────────────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌──────────────┐    ┌──────────────┐   ┌──────────────┐
        │View My Tasks │    │Clock In/Out  │   │Submit Daily  │
        │& Update      │    │for Attendance│   │Reports       │
        │Status        │    └──────────────┘   └──────────────┘
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Submit        │
        │Complaints    │
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Submit        │
        │Feedback      │
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │View My       │
        │Allowances    │
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Use Chat      │
        │System        │
        └──────────────┘
                │
                │
                ▼
        ┌──────────────┐
        │Manage        │
        │Personal      │
        │Profile       │
        └──────────────┘
```

## 9.2 Use Case Descriptions

### 9.2.1 Use Case: User Login

**Use Case ID:** UC-001  
**Use Case Name:** User Login  
**Actor:** All Users (Admin, Manager, Staff)  
**Preconditions:** User has valid account credentials  
**Postconditions:** User is authenticated and redirected to dashboard  

**Main Flow:**
1. User navigates to login page
2. System displays login form
3. User enters username and password
4. User clicks "Login" button
5. System validates credentials
6. System generates JWT token
7. System returns token to user
8. System redirects user to dashboard

**Alternative Flows:**
- 5a. Invalid credentials: System displays error message, user returns to step 3
- 5b. Default password: System prompts password change after login

**Exception Flows:**
- Database unavailable: System displays error message
- Network error: System displays connection error

### 9.2.2 Use Case: Create Task

**Use Case ID:** UC-002  
**Use Case Name:** Create Task  
**Actor:** Manager, Admin  
**Preconditions:** User is authenticated with Manager or Admin role  
**Postconditions:** Task is created and assigned to staff member  

**Main Flow:**
1. Manager navigates to Task Management page
2. Manager clicks "Create Task" button
3. System displays task creation form
4. Manager enters task title (required)
5. Manager enters task description (optional)
6. Manager selects staff member from dropdown (required)
7. Manager selects due date (optional)
8. Manager clicks "Submit" button
9. System validates input
10. System creates task in database
11. System displays success message
12. System refreshes task list

**Alternative Flows:**
- 9a. Validation fails: System displays validation errors, manager returns to step 4
- 9b. Assigned user not found: System displays error, manager returns to step 6

**Exception Flows:**
- Database error: System displays error message and rolls back transaction

### 9.2.3 Use Case: Clock In/Out

**Use Case ID:** UC-003  
**Use Case Name:** Clock In/Out for Attendance  
**Actor:** Staff  
**Preconditions:** User is authenticated with Staff role  
**Postconditions:** Attendance record created or updated  

**Main Flow (Clock In):**
1. Staff navigates to Dashboard or Attendance page
2. System displays clock-in widget
3. System checks if staff is already clocked in
4. System displays "Clock In" button
5. Staff clicks "Clock In" button
6. System records current timestamp
7. System creates attendance record
8. System displays success message
9. System updates widget to show "Clock Out" button

**Main Flow (Clock Out):**
1. Staff clicks "Clock Out" button
2. System records current timestamp
3. System updates attendance record with clock-out time
4. System displays success message
5. System updates widget to show "Clock In" button

**Alternative Flows:**
- 3a. Already clocked in: System displays "Clock Out" button instead
- 5a. Already clocked in: System displays error message

**Exception Flows:**
- Database error: System displays error message

### 9.2.4 Use Case: Submit Complaint

**Use Case ID:** UC-004  
**Use Case Name:** Submit Complaint  
**Actor:** Staff  
**Preconditions:** User is authenticated with Staff role  
**Postconditions:** Complaint is submitted and visible to managers  

**Main Flow:**
1. Staff navigates to Complaints page
2. Staff clicks "Submit Complaint" button
3. System displays complaint form
4. Staff enters complaint title (required)
5. Staff enters complaint content (required)
6. Staff clicks "Submit" button
7. System validates input
8. System creates complaint with status 'open'
9. System displays success message
10. System refreshes complaint list

**Alternative Flows:**
- 7a. Validation fails: System displays validation errors, staff returns to step 4

**Exception Flows:**
- Database error: System displays error message

### 9.2.5 Use Case: Send Real-Time Message

**Use Case ID:** UC-005  
**Use Case Name:** Send Real-Time Message  
**Actor:** All Users  
**Preconditions:** User is authenticated, WebSocket connection established  
**Postconditions:** Message is sent and delivered in real-time  

**Main Flow:**
1. User navigates to Chat page
2. System establishes WebSocket connection
3. User searches for recipient
4. User selects recipient
5. System loads message history
6. User types message
7. User clicks "Send" button
8. System sends message via WebSocket
9. System stores message in database
10. System delivers message to recipient if online
11. System displays message in sender's chat
12. Recipient receives message in real-time

**Alternative Flows:**
- 5a. No conversation exists: System creates new conversation
- 10a. Recipient offline: Message stored, delivered when recipient comes online

**Exception Flows:**
- WebSocket disconnected: System attempts reconnection
- Database error: System displays error message


## 9.3 Data Flow Diagrams

### 9.3.1 Level 0 DFD (Context Diagram)

```
                    ┌─────────────┐
                    │    Admin    │
                    └──────┬──────┘
                           │
                           │ User Management
                           │ System Configuration
                           │
                    ┌──────▼──────┐
                    │   Manager   │
                    └──────┬──────┘
                           │
                           │ Task Management
                           │ View Reports
                           │ Manage Allowances
                           │
    ┌──────────────────────▼──────────────────────┐
    │                                              │
    │      Simple Workforce Manager System         │
    │                                              │
    └──────────────────────┬──────────────────────┘
                           │
                           │ View Tasks
                           │ Clock In/Out
                           │ Submit Reports
                           │ Submit Complaints
                           │ Chat Messages
                           │
                    ┌──────▼──────┐
                    │    Staff    │
                    └──────┬──────┘
                           │
                           │
                    ┌──────▼──────┐
                    │  PostgreSQL │
                    │  Database   │
                    └──────┬──────┘
                           │
                           │
                    ┌──────▼──────┐
                    │ Email Server│
                    │   (SMTP)    │
                    └─────────────┘
```

### 9.3.2 Level 1 DFD (System Decomposition)

```
┌─────────┐                                              ┌─────────┐
│  Admin  │                                              │ Manager │
└────┬────┘                                              └────┬────┘
     │                                                        │
     │ User Data                                              │ Task Data
     │                                                        │
     ▼                                                        ▼
┌─────────────────┐                                  ┌─────────────────┐
│  1.0 User       │                                  │  2.0 Task       │
│  Management     │                                  │  Management     │
└────────┬────────┘                                  └────────┬────────┘
         │                                                    │
         │ User Records                                       │ Task Records
         │                                                    │
         ▼                                                    ▼
    ┌────────────────────────────────────────────────────────────┐
    │                    D1: Database                            │
    └────────────────────────────────────────────────────────────┘
         ▲                    ▲                    ▲
         │                    │                    │
         │ Attendance         │ Messages           │ Reports
         │ Records            │                    │ Complaints
         │                    │                    │
┌────────┴────────┐  ┌────────┴────────┐  ┌────────┴────────┐
│  3.0 Attendance │  │  4.0 Real-Time  │  │  5.0 Reports &  │
│  Tracking       │  │  Chat           │  │  Complaints     │
└────────┬────────┘  └────────┬────────┘  └────────┬────────┘
         ▲                    ▲                    ▲
         │                    │                    │
         │ Clock In/Out       │ Messages           │ Reports
         │                    │                    │ Complaints
         │                    │                    │
    ┌────┴────┐          ┌────┴────┐          ┌────┴────┐
    │  Staff  │          │All Users│          │  Staff  │
    └─────────┘          └─────────┘          └─────────┘
```

### 9.3.3 Level 2 DFD (Authentication Process)

```
┌─────────┐
│  User   │
└────┬────┘
     │
     │ Username, Password
     │
     ▼
┌─────────────────┐
│  1.1 Validate   │
│  Credentials    │
└────────┬────────┘
         │
         │ Query User
         │
         ▼
    ┌────────────────────────────────────┐
    │     D1: Users Table                │
    └────────────┬───────────────────────┘
                 │
                 │ User Record
                 │
                 ▼
         ┌───────────────┐
         │  1.2 Compare  │
         │  Password     │
         └───────┬───────┘
                 │
                 │ Valid?
                 │
                 ▼
         ┌───────────────┐
         │  1.3 Generate │
         │  JWT Token    │
         └───────┬───────┘
                 │
                 │ Token
                 │
                 ▼
            ┌─────────┐
            │  User   │
            └─────────┘
```

## 9.4 Sequence Diagrams

### 9.4.1 User Login Sequence

```
User          Frontend        Backend         Database
 │                │              │               │
 │ Enter creds   │              │               │
 │──────────────>│              │               │
 │                │              │               │
 │                │ POST /login  │               │
 │                │─────────────>│               │
 │                │              │               │
 │                │              │ Query user    │
 │                │              │──────────────>│
 │                │              │               │
 │                │              │ User record   │
 │                │              │<──────────────│
 │                │              │               │
 │                │              │ Compare hash  │
 │                │              │───────┐       │
 │                │              │       │       │
 │                │              │<──────┘       │
 │                │              │               │
 │                │              │ Generate JWT  │
 │                │              │───────┐       │
 │                │              │       │       │
 │                │              │<──────┘       │
 │                │              │               │
 │                │ JWT token    │               │
 │                │<─────────────│               │
 │                │              │               │
 │ Redirect to    │              │               │
 │ dashboard      │              │               │
 │<──────────────│              │               │
 │                │              │               │
```

### 9.4.2 Task Creation Sequence

```
Manager     Frontend      Backend       Database
 │             │             │              │
 │ Fill form  │             │              │
 │───────────>│             │              │
 │             │             │              │
 │ Submit     │             │              │
 │───────────>│             │              │
 │             │             │              │
 │             │ POST /tasks │              │
 │             │────────────>│              │
 │             │             │              │
 │             │             │ Validate JWT │
 │             │             │──────┐       │
 │             │             │      │       │
 │             │             │<─────┘       │
 │             │             │              │
 │             │             │ Check role   │
 │             │             │──────┐       │
 │             │             │      │       │
 │             │             │<─────┘       │
 │             │             │              │
 │             │             │ Verify user  │
 │             │             │─────────────>│
 │             │             │              │
 │             │             │ User exists  │
 │             │             │<─────────────│
 │             │             │              │
 │             │             │ Insert task  │
 │             │             │─────────────>│
 │             │             │              │
 │             │             │ Task created │
 │             │             │<─────────────│
 │             │             │              │
 │             │ Task object │              │
 │             │<────────────│              │
 │             │             │              │
 │ Success msg │             │              │
 │<───────────│             │              │
 │             │             │              │
```

### 9.4.3 Real-Time Chat Sequence

```
Sender    Frontend    WebSocket    Backend    Database    Recipient
 │           │           │           │           │            │
 │ Type msg  │           │           │           │            │
 │──────────>│           │           │           │            │
 │           │           │           │           │            │
 │ Send      │           │           │           │            │
 │──────────>│           │           │           │            │
 │           │           │           │           │            │
 │           │ send_msg  │           │           │            │
 │           │──────────>│           │           │            │
 │           │           │           │           │            │
 │           │           │ Process   │           │            │
 │           │           │──────────>│           │            │
 │           │           │           │           │            │
 │           │           │           │ Get/Create│            │
 │           │           │           │ convo     │            │
 │           │           │           │──────────>│            │
 │           │           │           │           │            │
 │           │           │           │ Convo ID  │            │
 │           │           │           │<──────────│            │
 │           │           │           │           │            │
 │           │           │           │ Insert msg│            │
 │           │           │           │──────────>│            │
 │           │           │           │           │            │
 │           │           │           │ Message   │            │
 │           │           │           │<──────────│            │
 │           │           │           │           │            │
 │           │           │ receive_msg          │            │
 │           │           │──────────────────────────────────>│
 │           │           │           │           │            │
 │           │ callback  │           │           │            │
 │           │<──────────│           │           │            │
 │           │           │           │           │            │
 │ Display   │           │           │           │ Display    │
 │ message   │           │           │           │ message    │
 │<──────────│           │           │           │<───────────│
 │           │           │           │           │            │
```

## 9.5 Entity-Relationship Diagram

```
┌─────────────────┐
│     users       │
├─────────────────┤
│ PK user_id      │
│    username     │
│    email        │
│    password_hash│
│    role         │
│    created_at   │
└────────┬────────┘
         │ 1
         │
         │ 1
         ▼
┌─────────────────┐
│ user_profiles   │
├─────────────────┤
│ PK profile_id   │
│ FK user_id      │
│    first_name   │
│    last_name    │
│    phone_number │
│    sex          │
│    job_title    │
└─────────────────┘

┌─────────────────┐
│     tasks       │
├─────────────────┤
│ PK task_id      │
│    title        │
│    description  │
│    status       │
│ FK assigned_to  │───┐
│ FK assigned_by  │───┤
│    due_date     │   │
│    created_at   │   │
└─────────────────┘   │
                      │
         ┌────────────┘
         │ N
         │
         │ 1
         ▼
┌─────────────────┐
│     users       │
└─────────────────┘

┌─────────────────┐
│   attendance    │
├─────────────────┤
│ PK attendance_id│
│ FK user_id      │───┐
│    clock_in_time│   │
│    clock_out_time│  │
│    attendance_date│ │
└─────────────────┘   │
                      │
         ┌────────────┘
         │ N
         │
         │ 1
         ▼
┌─────────────────┐
│     users       │
└─────────────────┘

┌─────────────────┐
│ conversations   │
├─────────────────┤
│ PK conversation_id│
│ FK user1_id     │───┐
│ FK user2_id     │───┤
│    status       │   │
│ FK blocked_by   │───┤
│    created_at   │   │
└────────┬────────┘   │
         │ 1          │
         │            │
         │ N          │
         ▼            │
┌─────────────────┐   │
│    messages     │   │
├─────────────────┤   │
│ PK message_id   │   │
│ FK conversation_id│ │
│ FK sender_id    │───┤
│    content      │   │
│    sent_at      │   │
└─────────────────┘   │
                      │
         ┌────────────┘
         │ N
         │
         │ 1
         ▼
┌─────────────────┐
│     users       │
└─────────────────┘

┌─────────────────┐
│   complaints    │
├─────────────────┤
│ PK complaint_id │
│ FK user_id      │───┐
│    title        │   │
│    content      │   │
│    status       │   │
│    submitted_at │   │
└────────┬────────┘   │
         │ 1          │
         │            │
         │ N          │
         ▼            │
┌─────────────────┐   │
│complaint_replies│   │
├─────────────────┤   │
│ PK reply_id     │   │
│ FK complaint_id │   │
│ FK user_id      │───┤
│    content      │   │
│    replied_at   │   │
└─────────────────┘   │
                      │
         ┌────────────┘
         │ N
         │
         │ 1
         ▼
┌─────────────────┐
│     users       │
└─────────────────┘

┌─────────────────┐
│    reports      │
├─────────────────┤
│ PK report_id    │
│ FK user_id      │───┐
│    title        │   │
│    content      │   │
│    submitted_at │   │
└─────────────────┘   │
                      │
┌─────────────────┐   │
│    feedback     │   │
├─────────────────┤   │
│ PK feedback_id  │   │
│ FK user_id      │───┤
│    title        │   │
│    content      │   │
│    reply        │   │
│ FK replied_by   │───┤
│    submitted_at │   │
└─────────────────┘   │
                      │
┌─────────────────┐   │
│   allowances    │   │
├─────────────────┤   │
│ PK allowance_id │   │
│ FK user_id      │───┤
│    title        │   │
│    amount       │   │
│    frequency    │   │
│    created_at   │   │
└─────────────────┘   │
                      │
         ┌────────────┘
         │ N
         │
         │ 1
         ▼
┌─────────────────┐
│     users       │
└─────────────────┘
```


## 9.6 Activity Diagrams

### 9.6.1 User Login Activity

```
START
  │
  ▼
[User opens application]
  │
  ▼
[Display login page]
  │
  ▼
[User enters username and password]
  │
  ▼
<Credentials valid?>
  │
  ├─ NO ──> [Display error message] ──> [Return to login page] ──┐
  │                                                                │
  └─ YES                                                           │
      │                                                            │
      ▼                                                            │
  <Is default password?>                                          │
      │                                                            │
      ├─ YES ──> [Prompt password change] ──> [User changes password]
      │                                              │
      └─ NO                                          │
          │                                          │
          ▼                                          ▼
      [Generate JWT token]                    [Generate JWT token]
          │                                          │
          ▼                                          ▼
      [Store token in client]                [Store token in client]
          │                                          │
          ▼                                          ▼
      [Redirect to dashboard]                [Redirect to dashboard]
          │                                          │
          └──────────────────┬───────────────────────┘
                             │
                             ▼
                           END
```

### 9.6.2 Task Assignment Activity

```
START (Manager)
  │
  ▼
[Navigate to Task Management]
  │
  ▼
[Click "Create Task"]
  │
  ▼
[Display task form]
  │
  ▼
[Enter task title]
  │
  ▼
[Enter task description (optional)]
  │
  ▼
[Select staff member from dropdown]
  │
  ▼
[Select due date (optional)]
  │
  ▼
[Click "Submit"]
  │
  ▼
<All required fields filled?>
  │
  ├─ NO ──> [Show validation errors] ──> [Return to form] ──┐
  │                                                           │
  └─ YES                                                      │
      │                                                       │
      ▼                                                       │
  <Assigned user exists?>                                    │
      │                                                       │
      ├─ NO ──> [Show error message] ──> [Return to form] ──┤
      │                                                       │
      └─ YES                                                  │
          │                                                   │
          ▼                                                   │
      [Create task in database]                              │
          │                                                   │
          ▼                                                   │
      [Show success message]                                 │
          │                                                   │
          ▼                                                   │
      [Refresh task list]                                    │
          │                                                   │
          ▼                                                   │
      [Task visible to staff member]                         │
          │                                                   │
          ▼                                                   │
        END                                                   │
          │                                                   │
          └───────────────────────────────────────────────────┘
```

### 9.6.3 Attendance Clock In/Out Activity

```
START (Staff)
  │
  ▼
[Navigate to Dashboard/Attendance]
  │
  ▼
[Display clock-in widget]
  │
  ▼
<Already clocked in today?>
  │
  ├─ YES ──> [Show "Clock Out" button]
  │              │
  │              ▼
  │          [Staff clicks "Clock Out"]
  │              │
  │              ▼
  │          [Record clock-out time]
  │              │
  │              ▼
  │          [Update attendance record]
  │              │
  │              ▼
  │          [Show success message]
  │              │
  │              ▼
  │          [Display "Clock In" button]
  │              │
  │              └──> END
  │
  └─ NO ──> [Show "Clock In" button]
                │
                ▼
            [Staff clicks "Clock In"]
                │
                ▼
            [Record clock-in time]
                │
                ▼
            [Create attendance record]
                │
                ▼
            [Show success message]
                │
                ▼
            [Display "Clock Out" button]
                │
                ▼
              END
```

### 9.6.4 Complaint Submission and Resolution Activity

```
START (Staff submits complaint)
  │
  ▼
[Navigate to Complaints page]
  │
  ▼
[Click "Submit Complaint"]
  │
  ▼
[Display complaint form]
  │
  ▼
[Enter complaint title]
  │
  ▼
[Enter complaint content]
  │
  ▼
[Click "Submit"]
  │
  ▼
<All required fields filled?>
  │
  ├─ NO ──> [Show validation errors] ──> [Return to form] ──┐
  │                                                           │
  └─ YES                                                      │
      │                                                       │
      ▼                                                       │
  [Create complaint with status "open"]                      │
      │                                                       │
      ▼                                                       │
  [Show success message]                                     │
      │                                                       │
      ▼                                                       │
  [Complaint visible to managers]                            │
      │                                                       │
      ▼                                                       │
  ═══════════════════════════════════                        │
  Manager reviews complaint                                  │
  ═══════════════════════════════════                        │
      │                                                       │
      ▼                                                       │
  [Manager views complaint details]                          │
      │                                                       │
      ▼                                                       │
  <Manager wants to reply?>                                  │
      │                                                       │
      ├─ YES ──> [Enter reply content]                       │
      │              │                                        │
      │              ▼                                        │
      │          [Submit reply]                              │
      │              │                                        │
      │              ▼                                        │
      │          [Reply added to complaint]                  │
      │              │                                        │
      │              ▼                                        │
      │          [Staff can view reply]                      │
      │              │                                        │
      │              └──> <Manager wants to resolve?>        │
      │                          │                            │
      └─ NO ──────────────────────┘                          │
                                  │                           │
                                  ▼                           │
                              <Resolve?>                      │
                                  │                           │
                                  ├─ YES ──> [Update status to "resolved"]
                                  │              │
                                  │              ▼
                                  │          [Show success message]
                                  │              │
                                  │              ▼
                                  │            END
                                  │
                                  └─ NO ──> [Leave as "open"]
                                                │
                                                ▼
                                              END
```

### 9.6.5 Real-Time Chat Activity

```
START (User wants to chat)
  │
  ▼
[Navigate to Chat page]
  │
  ▼
[Establish WebSocket connection]
  │
  ▼
<Connection successful?>
  │
  ├─ NO ──> [Show connection error] ──> [Retry connection] ──┐
  │                                                            │
  └─ YES                                                       │
      │                                                        │
      ▼                                                        │
  [Authenticate with JWT token]                               │
      │                                                        │
      ▼                                                        │
  [Search for user to chat with]                              │
      │                                                        │
      ▼                                                        │
  [Select recipient]                                          │
      │                                                        │
      ▼                                                        │
  [Load message history]                                      │
      │                                                        │
      ▼                                                        │
  <Conversation blocked?>                                     │
      │                                                        │
      ├─ YES ──> [Show "Conversation blocked" message] ──> END
      │                                                        │
      └─ NO                                                    │
          │                                                    │
          ▼                                                    │
      [Display chat interface]                                │
          │                                                    │
          ▼                                                    │
      [User types message]                                    │
          │                                                    │
          ▼                                                    │
      [User clicks "Send"]                                    │
          │                                                    │
          ▼                                                    │
      [Send message via WebSocket]                            │
          │                                                    │
          ▼                                                    │
      [Store message in database]                             │
          │                                                    │
          ▼                                                    │
      <Recipient online?>                                     │
          │                                                    │
          ├─ YES ──> [Deliver message in real-time]          │
          │              │                                     │
          │              ▼                                     │
          │          [Recipient sees message]                 │
          │              │                                     │
          └─ NO ──> [Message stored for later]               │
                        │                                     │
                        ▼                                     │
                    [Display message in sender's chat]       │
                        │                                     │
                        ▼                                     │
                    <User wants to send more?>               │
                        │                                     │
                        ├─ YES ──> [Return to "User types message"]
                        │                                     │
                        └─ NO ──> END                         │
                                                              │
          └─────────────────────────────────────────────────┘
```

---

# 10. Constraints

## 10.1 Technical Constraints

### 10.1.1 Technology Stack Constraints

**Frontend Technology:**
- Must use React framework (version 19 or compatible)
- Must use JavaScript/JSX (no TypeScript in current version)
- Must use Ant Design component library for UI consistency
- Cannot use other UI frameworks (Bootstrap, Material-UI, etc.)
- Must be single-page application (SPA) architecture

**Backend Technology:**
- Must use Node.js runtime (version 18 or higher)
- Must use Express.js framework (version 5 or compatible)
- Must use JavaScript (no TypeScript in current version)
- Cannot use other backend frameworks (Nest.js, Fastify, etc.)

**Database Technology:**
- Must use PostgreSQL (version 13 or higher)
- Cannot use other databases (MySQL, MongoDB, etc.)
- Must use pg (node-postgres) driver
- No ORM frameworks (Sequelize, TypeORM, etc.)

**Real-Time Communication:**
- Must use Socket.io for WebSocket communication
- Cannot use native WebSocket API or other libraries

### 10.1.2 Platform Constraints

**Server Platform:**
- Must run on Node.js-compatible operating systems
- Supported: Linux, Windows Server, macOS Server
- Requires command-line access for setup and maintenance

**Client Platform:**
- Must run in web browsers (no native applications)
- Requires modern browser with JavaScript enabled
- Requires cookies enabled for authentication
- No support for Internet Explorer

**Network Requirements:**
- Requires TCP/IP network connectivity
- Requires HTTP/HTTPS protocol support
- Requires WebSocket protocol support
- Firewall must allow configured ports

### 10.1.3 Performance Constraints

**Scalability Limits:**
- Maximum 100 concurrent users
- Maximum 10,000 records per table (recommended)
- Single-server deployment only
- No horizontal scaling support

**Resource Limits:**
- Server memory: Maximum 2 GB usage
- Database size: Recommended maximum 10 GB
- Connection pool: Maximum 10 database connections
- WebSocket connections: Maximum 100 simultaneous

**Response Time Constraints:**
- API endpoints: Maximum 2 seconds
- Database queries: Maximum 1 second
- Real-time messages: Maximum 500ms latency
- Page load: Maximum 3 seconds

### 10.1.4 Integration Constraints

**No External Integrations:**
- No third-party authentication (OAuth, SAML, etc.)
- No payment gateway integration
- No cloud storage integration
- No external API integrations
- No social media integration

**Limited Email Integration:**
- Only SMTP email for password reset
- No email templates or advanced features
- No email tracking or analytics

### 10.1.5 Development Constraints

**Version Control:**
- Git required for source code management
- No specific branching strategy enforced

**Development Tools:**
- Any text editor or IDE can be used
- No specific IDE required
- npm required for package management

**Testing:**
- No automated testing framework included
- Manual testing required
- No continuous integration/deployment

## 10.2 Environmental Constraints

### 10.2.1 Hardware Constraints

**Server Hardware:**
- Minimum: Dual-core CPU, 4 GB RAM, 50 GB storage
- Recommended: Quad-core CPU, 8 GB RAM, 100 GB SSD
- No specialized hardware required
- No GPU requirements

**Client Hardware:**
- Minimum: Dual-core CPU, 4 GB RAM
- Display: Minimum 1024x768 resolution
- Input: Keyboard and mouse/touchpad
- No specialized hardware required

**Network Infrastructure:**
- Minimum bandwidth: 1 Mbps per client
- Recommended: 10 Mbps for server
- Stable internet/intranet connection required
- No offline mode available

### 10.2.2 Software Environment Constraints

**Server Software:**
- Operating System: Linux, Windows Server, or macOS Server
- Node.js: Version 18 or higher required
- PostgreSQL: Version 13 or higher required
- SMTP server: Required for password reset emails

**Client Software:**
- Web Browser: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
- JavaScript: Must be enabled
- Cookies: Must be enabled
- No browser plugins required

**Development Environment:**
- Node.js and npm for development
- PostgreSQL for database
- Git for version control
- Text editor or IDE

### 10.2.3 Deployment Constraints

**Deployment Model:**
- On-premises deployment only
- Single-server architecture
- No cloud deployment templates provided
- No containerization (Docker) in current version

**Installation Requirements:**
- Command-line access required
- Database setup required before application
- Manual configuration of environment variables
- No automated installation script

**Maintenance Requirements:**
- Manual updates and patches
- Database backups must be configured separately
- No automated monitoring or alerting
- Manual log management

### 10.2.4 Operational Constraints

**Availability:**
- No built-in high availability
- Single point of failure (database and application server)
- Downtime required for updates
- No automatic failover

**Backup and Recovery:**
- Manual backup configuration required
- No built-in backup functionality
- Recovery procedures must be documented separately
- No automated disaster recovery

**Monitoring:**
- No built-in monitoring dashboard
- Manual log review required
- No performance metrics collection
- No alerting system

## 10.3 Regulatory Constraints

### 10.3.1 Data Protection Regulations

**General Data Protection Regulation (GDPR) Considerations:**
- System collects and processes personal data
- Organization must ensure GDPR compliance
- Data subject rights must be respected
- Privacy policy must be created by organization
- User consent may be required (organization's responsibility)

**Local Data Protection Laws:**
- System must comply with local data protection laws
- Data residency requirements must be considered
- Cross-border data transfer restrictions may apply
- Organization responsible for legal compliance

### 10.3.2 Industry-Specific Regulations

**No Industry-Specific Compliance:**
- System not designed for specific regulated industries
- No HIPAA compliance features (healthcare)
- No PCI DSS compliance features (payment processing)
- No SOX compliance features (financial reporting)
- Organization must assess regulatory requirements

### 10.3.3 Accessibility Regulations

**Limited Accessibility Features:**
- No WCAG 2.1 compliance certification
- Basic keyboard navigation supported
- No screen reader optimization
- No accessibility testing performed
- Organization must assess accessibility requirements

### 10.3.4 Security and Privacy Regulations

**Security Measures:**
- Password encryption (BCrypt)
- JWT-based authentication
- Role-based access control
- SQL injection prevention
- XSS prevention (React auto-escaping)

**Privacy Measures:**
- User data access control
- No third-party data sharing
- No analytics or tracking
- User can view and update own data
- Admin can delete user accounts

**Limitations:**
- No data encryption at rest (optional, can be configured)
- No data encryption in transit (HTTPS recommended but not enforced)
- No audit logging of data access
- No data anonymization features
- No automated data retention policies

### 10.3.5 Intellectual Property Constraints

**Software Licensing:**
- Application code: License determined by organization
- Third-party libraries: Subject to respective licenses
- No proprietary components with restrictive licenses

**Open Source Compliance:**
- All dependencies use permissive licenses (MIT, Apache, BSD)
- No GPL or copyleft licenses that restrict usage
- License compliance is organization's responsibility

### 10.3.6 Export and Import Regulations

**No Export Restrictions:**
- Software contains no encryption subject to export controls
- No military or dual-use technology
- Can be deployed internationally (subject to local laws)

**Import Considerations:**
- Organization must ensure compliance with local import laws
- No restrictions on software import in most jurisdictions

### 10.3.7 Labor and Employment Regulations

**Attendance Tracking:**
- System records work hours (clock in/out)
- Organization must ensure compliance with labor laws
- Overtime tracking not included
- Break time tracking not included
- Organization responsible for legal compliance

**Data Retention:**
- No automated data retention policies
- Organization must implement retention policies per local laws
- Employee data deletion upon termination (manual process)

### 10.3.8 Compliance Reporting

**No Built-In Compliance Reporting:**
- No automated compliance reports
- Data can be exported manually via database queries
- Organization must create compliance reports separately
- Audit trail limited to timestamps and user IDs

---

# 11. Appendices

## A. Glossary

**Admin (Administrator):** A user role with full system access, including user management, system configuration, and oversight of all features.

**Allowance:** A financial benefit or compensation provided to an employee, such as travel allowance, meal allowance, or housing allowance.

**API (Application Programming Interface):** A set of protocols and tools for building software applications, allowing different software components to communicate.

**Attendance:** A record of an employee's work hours, including clock-in and clock-out times.

**Authentication:** The process of verifying the identity of a user attempting to access the system.

**Authorization:** The process of determining what actions an authenticated user is permitted to perform.

**BCrypt:** A password hashing function designed to be computationally expensive to resist brute-force attacks.

**CASCADE:** A database constraint action that automatically deletes or updates related records when a parent record is deleted or updated.

**Clock In:** The action of recording the start time of a work shift by an employee.

**Clock Out:** The action of recording the end time of a work shift by an employee.

**Complaint:** A formal issue or concern raised by a staff member, which can be reviewed and responded to by managers or administrators.

**Conversation:** A chat thread between two users containing their message history.

**CORS (Cross-Origin Resource Sharing):** A security feature that allows or restricts web applications running at one origin to access resources from a different origin.

**CRUD:** An acronym for Create, Read, Update, Delete - the four basic operations for persistent storage.

**Database Transaction:** A sequence of database operations that are treated as a single unit of work, ensuring data integrity.

**Feedback:** General suggestions or comments provided by staff members to management.

**Foreign Key:** A database constraint that establishes a relationship between two tables by referencing the primary key of another table.

**JWT (JSON Web Token):** A compact, URL-safe means of representing claims to be transferred between two parties, used for authentication.

**Manager:** A user role with elevated privileges to manage tasks, view reports, handle complaints, and oversee staff activities.

**Middleware:** Software that acts as a bridge between an operating system or database and applications, especially on a network.

**Normalization:** The process of organizing database tables to reduce redundancy and improve data integrity.

**Primary Key:** A unique identifier for a record in a database table.

**RBAC (Role-Based Access Control):** An approach to restricting system access to authorized users based on their role.

**Report:** A daily work summary submitted by staff members describing their activities and accomplishments.

**RESTful API:** An architectural style for designing networked applications using HTTP requests to access and manipulate data.

**Rollback:** The process of reverting a database transaction to its previous state when an error occurs.

**Salt:** Random data added to a password before hashing to protect against rainbow table attacks.

**Single Page Application (SPA):** A web application that loads a single HTML page and dynamically updates content as the user interacts with the app.

**SMTP (Simple Mail Transfer Protocol):** An internet standard for email transmission.

**Socket.io:** A JavaScript library for real-time, bidirectional communication between web clients and servers.

**SQL Injection:** A code injection technique that exploits security vulnerabilities in an application's database layer.

**Staff:** A regular user role with access to view assigned tasks, clock in/out, submit reports and complaints, and use chat features.

**Task:** A work assignment with a title, description, assignee, status, and due date.

**Token:** A piece of data that represents the right to perform some operation or access a resource.

**Transaction:** A unit of work performed against a database that is treated in a coherent and reliable way independent of other transactions.

**WebSocket:** A protocol providing full-duplex communication channels over a single TCP connection.

**XSS (Cross-Site Scripting):** A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.

## B. Technology Stack Details

### B.1 Frontend Technologies

**React 19.2**
- Purpose: JavaScript library for building user interfaces
- License: MIT
- Key Features: Component-based architecture, virtual DOM, hooks
- Documentation: https://react.dev/

**Ant Design 5.28.0**
- Purpose: UI component library
- License: MIT
- Key Features: Pre-built components, consistent design, responsive
- Documentation: https://ant.design/

**Axios 1.13.1**
- Purpose: HTTP client for making API requests
- License: MIT
- Key Features: Promise-based, request/response interceptors, automatic JSON transformation
- Documentation: https://axios-http.com/

**Socket.io-client 4.8.1**
- Purpose: WebSocket client for real-time communication
- License: MIT
- Key Features: Real-time bidirectional communication, automatic reconnection
- Documentation: https://socket.io/docs/

**React Router 7.9.5**
- Purpose: Client-side routing for single-page applications
- License: MIT
- Key Features: Declarative routing, nested routes, navigation
- Documentation: https://reactrouter.com/

**jwt-decode 4.0.0**
- Purpose: Decode JWT tokens on the client side
- License: MIT
- Key Features: Lightweight, no dependencies
- Documentation: https://github.com/auth0/jwt-decode

**Moment.js 2.30.1**
- Purpose: Date and time manipulation and formatting
- License: MIT
- Key Features: Parse, validate, manipulate, and display dates
- Documentation: https://momentjs.com/

### B.2 Backend Technologies

**Node.js 18+**
- Purpose: JavaScript runtime environment
- License: MIT
- Key Features: Event-driven, non-blocking I/O, npm ecosystem
- Documentation: https://nodejs.org/docs/

**Express.js 5.1.0**
- Purpose: Web application framework
- License: MIT
- Key Features: Routing, middleware, HTTP utilities
- Documentation: https://expressjs.com/

**BCrypt 6.0.0**
- Purpose: Password hashing library
- License: MIT
- Key Features: Secure password hashing with salt, configurable cost factor
- Documentation: https://github.com/kelektiv/node.bcrypt.js

**JSON Web Token 9.0.2**
- Purpose: JWT token generation and verification
- License: MIT
- Key Features: Stateless authentication, token signing and verification
- Documentation: https://github.com/auth0/node-jsonwebtoken

**Socket.io 4.8.1**
- Purpose: WebSocket server for real-time communication
- License: MIT
- Key Features: Real-time bidirectional communication, room support
- Documentation: https://socket.io/docs/

**pg (node-postgres) 8.16.3**
- Purpose: PostgreSQL client for Node.js
- License: MIT
- Key Features: Connection pooling, parameterized queries, transaction support
- Documentation: https://node-postgres.com/

**Nodemailer 7.0.10**
- Purpose: Email sending library
- License: MIT
- Key Features: SMTP support, HTML emails, attachments
- Documentation: https://nodemailer.com/

**dotenv 17.2.3**
- Purpose: Environment variable management
- License: BSD-2-Clause
- Key Features: Load environment variables from .env file
- Documentation: https://github.com/motdotla/dotenv

**CORS 2.8.5**
- Purpose: Cross-Origin Resource Sharing middleware
- License: MIT
- Key Features: Configure CORS policies, handle preflight requests
- Documentation: https://github.com/expressjs/cors

### B.3 Database Technology

**PostgreSQL 13+**
- Purpose: Relational database management system
- License: PostgreSQL License (permissive open-source)
- Key Features: ACID compliance, foreign keys, custom types, JSONB support
- Documentation: https://www.postgresql.org/docs/

### B.4 Development Tools

**npm (Node Package Manager)**
- Purpose: Package manager for JavaScript
- License: Artistic License 2.0
- Key Features: Dependency management, script running, package publishing
- Documentation: https://docs.npmjs.com/

**Git**
- Purpose: Version control system
- License: GPL-2.0
- Key Features: Distributed version control, branching, merging
- Documentation: https://git-scm.com/doc

### B.5 Browser Compatibility

**Supported Browsers:**
- Google Chrome 90+ (Recommended)
- Mozilla Firefox 88+
- Microsoft Edge 90+
- Safari 14+

**Required Browser Features:**
- JavaScript ES6+ support
- WebSocket support
- Local Storage support
- Cookies support
- Fetch API support

## C. Sample UI Screens

**[SPACE RESERVED FOR UI SCREENSHOTS]**

_This section is intentionally left blank for the student to insert actual screenshots of the application interface._

**Screenshots to be included:**

1. **Login Page**
   - Login form with username and password fields
   - "Forgot Password" link
   - Error message display

2. **Admin Dashboard**
   - Welcome message
   - Quick stats
   - Navigation menu
   - Recent activity

3. **User Management Interface (Admin)**
   - User list table
   - "Add User" button
   - Edit and Delete actions
   - User creation/edit modal

4. **Task Management Interface (Manager)**
   - Task list table
   - "Create Task" button
   - Task status filters
   - Task creation modal

5. **My Tasks Page (Staff)**
   - Assigned tasks list
   - Task status update dropdown
   - Task details view

6. **Attendance Interface (Staff)**
   - Clock-in/Clock-out widget
   - Current status display
   - Attendance history table

7. **Attendance Management (Manager)**
   - All attendance records table
   - Date and user filters
   - Duration calculations

8. **Chat Interface**
   - User search bar
   - Conversations list
   - Message area
   - Message input field

9. **Reports Page (Staff)**
   - "Submit Report" button
   - Report submission form
   - My reports history

10. **Complaints Interface (Staff)**
    - "Submit Complaint" button
    - My complaints list
    - Complaint details with replies

11. **Complaints Management (Manager)**
    - All complaints table
    - Status filter
    - Reply form
    - Status update button

12. **Allowances Interface (Manager)**
    - Allowances table
    - "Create Allowance" button
    - Allowance form

13. **Profile Page**
    - Profile information form
    - Edit and save buttons

14. **Settings Page**
    - Personal settings section
    - Change password form
    - System settings (Admin only)

## D. API Specifications

### D.1 API Overview

**Base URL:** `http://localhost:5001/api` (development)

**Authentication:** JWT Bearer Token in Authorization header

**Content Type:** application/json

**Response Format:** JSON

### D.2 Authentication Endpoints

#### POST /api/auth/login
**Description:** Authenticate user and receive JWT token  
**Authentication:** None required  
**Request Body:**
```json
{
  "username": "string (required)",
  "password": "string (required)"
}
```
**Success Response (200):**
```json
{
  "message": "Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
**Error Responses:**
- 400: Missing credentials
- 401: Invalid credentials
- 500: Server error

#### POST /api/auth/reset-password
**Description:** Reset password for authenticated user  
**Authentication:** Required (JWT)  
**Request Body:**
```json
{
  "newPassword": "string (required, min 6 characters)"
}
```
**Success Response (200):**
```json
{
  "message": "Password reset successful. Please log in again."
}
```

#### POST /api/auth/forgot-password
**Description:** Request password reset email  
**Authentication:** None required  
**Request Body:**
```json
{
  "email": "string (required, valid email)"
}
```
**Success Response (200):**
```json
{
  "message": "If an account with that email exists, a reset link has been sent."
}
```

#### POST /api/auth/perform-reset
**Description:** Reset password using email token  
**Authentication:** None required  
**Request Body:**
```json
{
  "token": "string (required)",
  "newPassword": "string (required, min 6 characters)"
}
```
**Success Response (200):**
```json
{
  "message": "Password reset successful. You can now log in."
}
```

### D.3 User Management Endpoints

#### POST /api/staff
**Description:** Create new user account  
**Authentication:** Required (Admin only)  
**Request Body:**
```json
{
  "username": "string (required, unique)",
  "email": "string (required, unique, valid email)",
  "password": "string (required, min 6 characters)",
  "role": "string (required, enum: admin/manager/staff)",
  "first_name": "string (required)",
  "last_name": "string (required)",
  "phone_number": "string (required, unique)",
  "sex": "string (required, enum: male/female/other)",
  "job_title": "string (optional)"
}
```
**Success Response (201):**
```json
{
  "message": "User created successfully"
}
```

#### GET /api/staff
**Description:** Get all non-admin users  
**Authentication:** Required (Admin or Manager)  
**Success Response (200):**
```json
[
  {
    "user_id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "staff",
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "+1234567890",
    "sex": "male",
    "job_title": "Developer"
  }
]
```

#### GET /api/staff/:id
**Description:** Get user by ID  
**Authentication:** Required (Admin or Manager)  
**URL Parameters:** id (integer)  
**Success Response (200):** User object with profile

#### PUT /api/staff/:id
**Description:** Update user account  
**Authentication:** Required (Admin only)  
**URL Parameters:** id (integer)  
**Request Body:** Same as POST /api/staff  
**Success Response (200):**
```json
{
  "message": "User updated successfully"
}
```

#### DELETE /api/staff/:id
**Description:** Delete user account  
**Authentication:** Required (Admin only)  
**URL Parameters:** id (integer)  
**Success Response (200):**
```json
{
  "message": "User [username] deleted successfully"
}
```

### D.4 Task Management Endpoints

#### POST /api/tasks
**Description:** Create new task  
**Authentication:** Required (Admin or Manager)  
**Request Body:**
```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "assigned_to": "integer (required, user_id)",
  "due_date": "string (optional, ISO 8601 timestamp)"
}
```
**Success Response (201):** Task object

#### GET /api/tasks
**Description:** Get all tasks  
**Authentication:** Required (Admin or Manager)  
**Success Response (200):** Array of task objects

#### GET /api/tasks/mytasks
**Description:** Get tasks assigned to current user  
**Authentication:** Required (Staff)  
**Success Response (200):** Array of task objects

#### PUT /api/tasks/:id
**Description:** Update task  
**Authentication:** Required (Manager)  
**URL Parameters:** id (integer)  
**Request Body:**
```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "assigned_to": "integer (required)",
  "status": "string (required, enum: pending/in_progress/completed)",
  "due_date": "string (optional)"
}
```
**Success Response (200):** Updated task object

#### DELETE /api/tasks/:id
**Description:** Delete task  
**Authentication:** Required (Manager)  
**URL Parameters:** id (integer)  
**Success Response (200):**
```json
{
  "message": "Task [title] deleted successfully"
}
```

#### PATCH /api/tasks/:id/status
**Description:** Update task status (Staff only)  
**Authentication:** Required (Staff)  
**URL Parameters:** id (integer)  
**Request Body:**
```json
{
  "status": "string (required, enum: pending/in_progress/completed)"
}
```
**Success Response (200):** Updated task object

### D.5 Attendance Endpoints

#### POST /api/attendance/clock-in
**Description:** Clock in for work  
**Authentication:** Required (Staff)  
**Success Response (201):**
```json
{
  "message": "Clocked in successfully",
  "attendance": {
    "attendance_id": 1,
    "user_id": 1,
    "clock_in_time": "2024-01-15T09:00:00Z",
    "clock_out_time": null,
    "attendance_date": "2024-01-15"
  }
}
```

#### POST /api/attendance/clock-out
**Description:** Clock out from work  
**Authentication:** Required (Staff)  
**Success Response (200):**
```json
{
  "message": "Clocked out successfully",
  "attendance": {
    "attendance_id": 1,
    "user_id": 1,
    "clock_in_time": "2024-01-15T09:00:00Z",
    "clock_out_time": "2024-01-15T17:00:00Z",
    "attendance_date": "2024-01-15"
  }
}
```

#### GET /api/attendance/status
**Description:** Get current clock-in status  
**Authentication:** Required (Staff)  
**Success Response (200):**
```json
{
  "isClockedIn": true,
  "record": {
    "attendance_id": 1,
    "clock_in_time": "2024-01-15T09:00:00Z"
  }
}
```

#### GET /api/attendance/all
**Description:** Get all attendance records  
**Authentication:** Required (Admin or Manager)  
**Success Response (200):** Array of attendance objects with usernames

### D.6 Chat Endpoints

#### GET /api/chat/search?query=username
**Description:** Search for users to chat with  
**Authentication:** Required  
**Query Parameters:** query (string)  
**Success Response (200):** Array of user objects

#### GET /api/chat/conversations
**Description:** Get all conversations  
**Authentication:** Required  
**Success Response (200):** Array of conversation objects

#### GET /api/chat/history/:userId
**Description:** Get message history with specific user  
**Authentication:** Required  
**URL Parameters:** userId (integer)  
**Success Response (200):**
```json
{
  "conversation": {
    "conversation_id": 1,
    "status": "active"
  },
  "messages": [
    {
      "message_id": 1,
      "sender_id": 1,
      "content": "Hello!",
      "sent_at": "2024-01-15T10:00:00Z"
    }
  ]
}
```

#### PUT /api/chat/conversation/:convoId/block
**Description:** Block conversation  
**Authentication:** Required  
**URL Parameters:** convoId (integer)  
**Success Response (200):** Updated conversation object

#### PUT /api/chat/conversation/:convoId/unblock
**Description:** Unblock conversation  
**Authentication:** Required  
**URL Parameters:** convoId (integer)  
**Success Response (200):** Updated conversation object

#### DELETE /api/chat/conversation/:convoId/clear
**Description:** Clear chat history (user's view only)  
**Authentication:** Required  
**URL Parameters:** convoId (integer)  
**Success Response (200):**
```json
{
  "message": "Chat cleared successfully"
}
```

### D.7 WebSocket Events

#### Event: authenticate
**Direction:** Client → Server  
**Payload:**
```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." (JWT token string)
```

#### Event: send_message
**Direction:** Client → Server  
**Payload:**
```json
{
  "receiver_id": 2,
  "content": "Hello, how are you?"
}
```
**Callback Response:**
```json
{
  "status": "ok",
  "message": {
    "message_id": 1,
    "conversation_id": 1,
    "sender_id": 1,
    "content": "Hello, how are you?",
    "sent_at": "2024-01-15T10:00:00Z"
  },
  "conversation": {
    "conversation_id": 1,
    "status": "active"
  }
}
```

#### Event: receive_message
**Direction:** Server → Client  
**Payload:**
```json
{
  "message": {
    "message_id": 1,
    "conversation_id": 1,
    "sender_id": 1,
    "content": "Hello, how are you?",
    "sent_at": "2024-01-15T10:00:00Z"
  },
  "conversation": {
    "conversation_id": 1,
    "status": "active"
  }
}
```

### D.8 Additional Endpoints

**Reports, Complaints, Feedback, Allowances, Profile, and Settings endpoints follow similar patterns with appropriate authentication and authorization requirements. Refer to Section 3 (System Features) for detailed specifications of each endpoint.**

---

# End of Software Requirements Specification Document

**Document Version:** 1.0  
**Last Updated:** [TO BE FILLED]  
**Total Pages:** [TO BE FILLED]

---

**Approval Signatures:**

**Student:**  
Name: [TO BE FILLED]  
Signature: ________________  
Date: ________________

**Instructor:**  
Name: [TO BE FILLED]  
Signature: ________________  
Date: ________________

---

