# SOFTWARE REQUIREMENTS SPECIFICATION
# Simple Workforce Manager

**Version:** 2.0  
**Date:** November 24, 2025  
**Prepared By:** Software Engineering Team  
**Project Type:** Web-Based Workforce Management System

---

## 0. PROBLEM STATEMENT

### 0.1 Background

In contemporary organizational environments, particularly small to medium-sized enterprises, workforce management presents significant operational challenges. Traditional manual methods of employee coordination, task allocation, attendance tracking, and internal communication have proven inadequate in meeting the demands of modern business operations. Organizations frequently encounter difficulties in maintaining accurate employee records, coordinating work schedules, tracking task completion, monitoring attendance patterns, and facilitating effective inter-employee communication.

### 0.2 Current Challenges

The absence of a centralized, automated workforce management system results in several critical operational inefficiencies:

**Manual Scheduling Inefficiency:** Organizations relying on manual scheduling methods experience substantial time wastage and increased probability of scheduling conflicts. The lack of automated scheduling tools necessitates extensive manual coordination, leading to suboptimal resource allocation and reduced operational efficiency.

**Employee and Task Tracking Limitations:** Without a unified system for tracking employee assignments and task progress, management faces challenges in monitoring workload distribution, identifying bottlenecks, and ensuring timely task completion. This opacity in task management impedes effective project planning and resource optimization.


**Transparency and Accountability Deficits:** Manual record-keeping systems lack the transparency required for effective organizational governance. Employees and managers cannot readily access historical data regarding task assignments, attendance records, or performance metrics, resulting in accountability gaps and difficulty in performance evaluation.

**Coordination and Communication Barriers:** The absence of integrated communication channels within workforce management systems necessitates reliance on disparate communication tools, leading to information fragmentation, delayed responses, and miscommunication among team members.

**Error-Prone Processes:** Manual data entry and record maintenance are inherently susceptible to human error. Inaccuracies in attendance records, task assignments, and employee information can result in payroll discrepancies, compliance issues, and operational disruptions.

**Absence of Centralized Reporting:** Organizations lacking centralized reporting mechanisms struggle to generate comprehensive workforce analytics, hindering data-driven decision-making and strategic planning capabilities.

### 0.3 Proposed Solution

The Simple Workforce Manager system addresses these challenges through a comprehensive web-based platform that integrates user authentication, role-based access control, employee management, task assignment and tracking, attendance monitoring, real-time communication, complaint and feedback management, allowance tracking, and reporting capabilities. This system provides a unified solution that eliminates manual inefficiencies, enhances transparency, improves coordination, reduces errors, and enables data-driven workforce management decisions.

---

## 1. PROCESS MODEL

### 1.1 Selected Process Model: Waterfall Model


The Simple Workforce Manager project adopts the Waterfall software development process model. This traditional, sequential approach is justified by the well-defined nature of workforce management requirements, the stability of functional specifications, and the necessity for comprehensive documentation in enterprise software systems. The Waterfall model ensures systematic progression through distinct development phases with clearly defined deliverables and validation criteria at each stage.

### 1.2 Phase Descriptions

**Phase 1: Requirement Analysis**  
The requirement analysis phase involves comprehensive stakeholder consultation to identify functional and non-functional requirements. This phase encompasses user role identification (Admin, Manager, Staff), feature specification (authentication, task management, attendance tracking, communication, reporting), performance requirement definition, security constraint identification, and interface requirement documentation. Deliverables include the Software Requirements Specification (SRS) document, use case diagrams, and functional requirement matrices.

**Phase 2: System Design**  
The system design phase translates requirements into architectural and detailed design specifications. This includes database schema design with entity-relationship modeling, API endpoint specification following RESTful principles, user interface wireframe development, system architecture definition employing client-server model with three-tier architecture, and security mechanism design including authentication and authorization protocols. Deliverables comprise system architecture diagrams, database schemas, API documentation, and UI/UX design specifications.

**Phase 3: Implementation**  
The implementation phase involves actual code development based on design specifications. Backend development utilizes Node.js with Express framework, implementing RESTful APIs, JWT-based authentication, and PostgreSQL database integration. Frontend development employs React framework with Ant Design component library, implementing responsive user interfaces and real-time communication via Socket.io. Development follows modular architecture with separate route handlers for authentication, user management, task management, attendance, chat, reports, complaints, feedback, and allowances.


**Phase 4: Testing**  
The testing phase ensures system functionality, reliability, and security through multiple testing levels. Unit testing validates individual components and functions. Integration testing verifies inter-module communication and data flow. System testing evaluates end-to-end functionality against requirements. Security testing assesses authentication mechanisms, authorization controls, SQL injection prevention, and rate limiting effectiveness. Performance testing measures response times, concurrent user handling, and database query optimization. User acceptance testing involves stakeholder validation of system functionality and usability.

**Phase 5: Deployment**  
The deployment phase involves system installation in the production environment. Activities include production server configuration, PostgreSQL database setup with schema initialization and index creation, environment variable configuration for security parameters, SSL/TLS certificate installation for HTTPS communication, process manager (PM2) configuration for application monitoring and automatic restart, and initial data seeding including default administrator account creation.

**Phase 6: Maintenance**  
The maintenance phase encompasses ongoing system support, bug fixes, performance optimization, and feature enhancements. Activities include monitoring system logs for errors and performance issues, applying security patches, optimizing database queries based on usage patterns, implementing user-requested features, and providing technical support to end users. Maintenance ensures system reliability, security, and alignment with evolving organizational requirements.

---

## 2. SOFTWARE REQUIREMENT SPECIFICATION

### 2.1 Overall Description


The Simple Workforce Manager is a comprehensive web-based application designed to streamline workforce management operations for small to medium-sized organizations. The system provides an integrated platform for managing employee information, assigning and tracking tasks, monitoring attendance, facilitating real-time communication, handling complaints and feedback, managing employee allowances, and generating operational reports. Built on the PERN stack (PostgreSQL, Express, React, Node.js), the system employs modern web technologies to deliver a responsive, secure, and scalable solution.

The system serves three primary user categories: Administrators who possess full system access and configuration capabilities, Managers who coordinate workforce activities and monitor performance, and Staff members who execute assigned tasks and utilize self-service features. The application architecture follows a client-server model with clear separation between presentation layer (React frontend), application layer (Express backend), and data layer (PostgreSQL database).

Key capabilities include secure user authentication with JWT tokens, role-based access control ensuring appropriate permission levels, comprehensive employee lifecycle management, dynamic task assignment with status tracking, automated attendance recording with clock-in/clock-out functionality, real-time bidirectional communication via WebSocket protocol, structured complaint and feedback submission with management response mechanisms, flexible allowance tracking with multiple frequency options, and customizable reporting for operational insights.

#### 2.1.1 Product Functions

The Simple Workforce Manager provides the following core functional capabilities:

- **User Authentication and Authorization:** Secure login mechanism with username/password credentials, JWT token-based session management with 1-hour expiration, password reset functionality via email verification, role-based access control with three distinct permission levels (Admin, Manager, Staff), and rate limiting to prevent brute-force attacks (5 login attempts per 15 minutes).


- **Employee Management:** Complete CRUD operations for employee records including username, email, role assignment, personal information (first name, last name, phone number, gender, job title, hire date, address), profile management with self-service update capabilities, and user search and filtering functionality.

- **Task Management:** Task creation with title, description, assignee, assigner, due date, and status fields, task assignment to specific employees by managers, status tracking through three states (Pending, In Progress, Completed), task modification and deletion by managers, employee self-service status updates, and task history with timestamp tracking.

- **Attendance Tracking:** Clock-in functionality recording entry timestamp, clock-out functionality recording exit timestamp, automatic date association for attendance records, attendance history viewing with date range filtering, manager access to all employee attendance records, and employee access to personal attendance history.

- **Real-Time Communication:** WebSocket-based instant messaging between users, conversation management with active/blocked status, message history persistence, user search functionality for initiating conversations, conversation clearing capability, and real-time message delivery notifications.

- **Complaint Management:** Complaint submission by employees with title and detailed content, complaint status tracking (Open, Resolved), threaded reply system for management responses, complaint history viewing, status update capability by management, and timestamp tracking for submission and responses.

- **Feedback System:** Feedback submission by staff members with title and content, management review and response capability, feedback history with submission timestamps, reply tracking with responder identification, and feedback status monitoring.


- **Allowance Management:** Allowance record creation with title, description, amount, and frequency, multiple frequency options (one-time, weekly, monthly, quarterly, annual), employee-specific allowance assignment, allowance history tracking, and allowance modification and deletion by administrators.

- **Report Submission:** Daily report submission by employees with title and content, report history viewing with chronological ordering, manager access to all employee reports, timestamp tracking for submission, and report search and filtering capabilities.

- **System Administration:** System settings configuration (company name, currency symbol), user role management, database performance optimization with 29 indexed fields, connection pool management for optimal database performance, and comprehensive error logging with Morgan HTTP logger.

#### 2.1.2 User Characteristics

**Administrator Users:**  
Administrators represent the highest privilege level within the system, typically occupied by IT personnel or senior management. These users possess comprehensive technical knowledge and are responsible for system configuration, user account management, and overall system maintenance. Administrators are expected to have advanced understanding of workforce management principles, database concepts, and system security practices. They require full access to all system modules including user creation/modification/deletion, system settings configuration, and access to all organizational data.

**Manager Users:**  
Managers constitute the operational coordination tier, responsible for workforce planning, task allocation, and performance monitoring. These users typically include department heads, team leaders, and supervisors. Managers are expected to possess intermediate technical proficiency with web applications and comprehensive understanding of organizational workflows. Their primary responsibilities include task assignment and tracking, attendance monitoring across their teams, review and response to complaints and feedback, allowance management, and report generation. Managers require read access to employee information and full control over task and attendance modules within their scope of authority.


**Staff Users:**  
Staff members represent the operational workforce executing assigned tasks and utilizing self-service features. These users encompass all regular employees across various organizational functions. Staff users are expected to possess basic to intermediate computer literacy with web browser navigation capabilities. Their primary interactions include viewing and updating assigned task status, recording attendance through clock-in/clock-out functionality, submitting daily reports, filing complaints and feedback, viewing personal allowance information, and engaging in real-time communication with colleagues. Staff users have restricted access limited to their personal data and assigned tasks, ensuring data privacy and security.

#### 2.1.3 General Constraints

**Technical Constraints:**  
The system requires Node.js runtime environment version 18.0 or higher for backend execution. PostgreSQL database version 13.0 or higher is mandatory for data persistence. Modern web browsers supporting ES6 JavaScript, WebSocket protocol, and responsive CSS are required for frontend access (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). The system requires stable network connectivity for real-time communication features. Server infrastructure must support concurrent HTTP and WebSocket connections.

**Environmental Constraints:**  
The system operates in a client-server architecture requiring dedicated server infrastructure or cloud hosting platform. Minimum server specifications include 8GB RAM (16GB recommended), 20GB available storage, and multi-core processor. The system requires continuous internet connectivity for remote access. Firewall configurations must permit HTTP/HTTPS traffic on designated ports (default 5001 for backend, 3000 for frontend development, 80/443 for production).

**Business Constraints:**  
The system is designed for small to medium-sized organizations with employee counts ranging from 10 to 500 users. Implementation requires organizational commitment to digital transformation and user training. The system assumes availability of technical personnel for initial setup and ongoing maintenance. Budget constraints may limit advanced features such as biometric integration or mobile native applications.


**Security Constraints:**  
The system must comply with data protection regulations regarding employee personal information. Password storage must employ industry-standard hashing algorithms (BCrypt with 10 salt rounds). Authentication tokens must have limited validity periods (1-hour expiration). The system must implement rate limiting to prevent denial-of-service attacks. All sensitive data transmission must occur over encrypted channels (HTTPS/TLS). Role-based access control must be strictly enforced at both frontend and backend layers.

**Platform Constraints:**  
The system is platform-independent at the client level, accessible via standard web browsers on Windows, macOS, Linux, iOS, and Android operating systems. Server deployment is optimized for Linux-based environments but supports Windows and macOS. The system requires PostgreSQL database which must be installed and configured separately. The system utilizes npm package manager for dependency management, requiring Node.js ecosystem compatibility.

**Organizational Constraints:**  
Successful implementation requires organizational change management including user training programs, policy documentation, and stakeholder buy-in. The system requires designation of administrator personnel responsible for user account management and system configuration. Organizations must establish data backup and disaster recovery procedures. The system assumes organizational commitment to maintaining current software versions and applying security updates.

#### 2.1.4 Assumptions and Dependencies

**Assumptions:**

1. End users possess basic computer literacy and web browser navigation skills
2. The organization maintains stable internet connectivity with sufficient bandwidth for real-time communication
3. Server infrastructure meets minimum hardware specifications for expected user load
4. PostgreSQL database is properly installed, configured, and maintained
5. System administrators possess technical knowledge for initial setup and ongoing maintenance
6. Users have access to email accounts for password reset functionality
7. The organization has established policies for workforce management aligned with system capabilities
8. Concurrent user load does not exceed system capacity (designed for up to 100 concurrent users with current configuration)


**Dependencies:**

1. **Backend Framework:** Express.js version 5.1.0 - Web application framework providing routing, middleware, and HTTP utility methods
2. **Database System:** PostgreSQL version 13+ with pg driver version 8.16.3 - Relational database management system for data persistence
3. **Authentication Library:** jsonwebtoken version 9.0.2 - JWT token generation and verification for stateless authentication
4. **Password Hashing:** bcrypt version 6.0.0 - Cryptographic hashing library for secure password storage
5. **Real-Time Communication:** Socket.io version 4.8.1 - WebSocket library enabling bidirectional real-time communication
6. **Frontend Framework:** React version 19.2.0 - JavaScript library for building user interfaces with component-based architecture
7. **UI Component Library:** Ant Design version 5.28.0 - Enterprise-class UI design system providing pre-built components
8. **HTTP Client:** Axios version 1.13.1 - Promise-based HTTP client for API communication
9. **Routing Library:** React Router DOM version 7.9.5 - Declarative routing for React applications
10. **Date Manipulation:** Moment.js version 2.30.1 - Date parsing, validation, and formatting library
11. **Email Service:** Nodemailer version 7.0.10 - Email sending capability for password reset functionality
12. **HTTP Logging:** Morgan version 1.10.1 - HTTP request logger middleware for debugging and monitoring
13. **Rate Limiting:** express-rate-limit version 8.2.1 - Rate limiting middleware for API protection
14. **CORS Handling:** cors version 2.8.5 - Cross-Origin Resource Sharing middleware for secure API access
15. **Environment Configuration:** dotenv version 17.2.3 - Environment variable management for configuration
16. **Process Management:** PM2 (optional) - Production process manager for application monitoring and automatic restart
17. **Web Browser:** Modern browsers supporting ES6, WebSocket, and responsive design (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
18. **Operating System:** Server OS supporting Node.js runtime (Linux, Windows, macOS)
19. **Network Infrastructure:** Stable network connectivity with firewall configuration permitting required ports

---

### 2.2 External Interface Requirements


#### 2.2.1 User Interfaces

The Simple Workforce Manager employs a responsive web-based user interface accessible through standard web browsers. The interface design follows modern UI/UX principles with consistent navigation, intuitive layouts, and role-appropriate content presentation.

**Login Interface:**  
The login screen presents a centered authentication form containing username and password input fields, a login button, and a "Forgot Password" link. The interface implements client-side validation for required fields and displays error messages for invalid credentials or server errors. Upon successful authentication, users are redirected to their role-appropriate dashboard. The login interface includes rate limiting feedback when excessive login attempts are detected.

**Dashboard Interface:**  
The dashboard serves as the primary landing page post-authentication, presenting role-specific information and quick access to frequently used features. The layout includes a top navigation bar with user profile access, notifications, and logout functionality. A sidebar menu provides hierarchical navigation to all accessible modules. The main content area displays summary widgets including pending tasks count, recent attendance records, unread messages, and system notifications. The dashboard employs responsive design adapting to various screen sizes from desktop monitors to mobile devices.

**Employee Management Interface:**  
The employee management screen (accessible to Admin and Manager roles) presents a tabular listing of all employees with columns for username, email, role, full name, phone number, and job title. The interface includes search and filter functionality for locating specific employees. Action buttons enable viewing detailed employee profiles, editing employee information, and deleting employee records (Admin only). The employee creation form includes input fields for all required and optional employee attributes with client-side validation. The interface employs modal dialogs for create and edit operations to maintain context.


**Task Management Interface:**  
The task management interface provides distinct views for Managers and Staff. Managers access a comprehensive task list displaying all organizational tasks with columns for task title, assigned employee, assigner, status, due date, and creation date. The interface includes filtering by status, assignee, and date range. Task creation and editing forms include fields for title, description, assignee selection (dropdown populated from employee list), due date picker, and status selection. Staff members view a personalized task list showing only their assigned tasks with the ability to update task status through a dropdown selector. The interface employs color coding for status visualization (pending: yellow, in progress: blue, completed: green).

**Attendance Tracking Interface:**  
The attendance interface presents a clock-in/clock-out widget prominently displayed on the employee dashboard. The widget displays current date and time, current attendance status (clocked in/out), and action buttons for clock-in or clock-out operations. Upon clock-in, the system records the timestamp and disables the clock-in button while enabling clock-out. The attendance history view presents a tabular listing of attendance records with columns for date, clock-in time, clock-out time, and total hours worked. Managers access an expanded view showing attendance records for all employees with filtering by employee and date range.

**Real-Time Chat Interface:**  
The chat interface employs a three-panel layout: a left sidebar listing all conversations with user names and last message preview, a center panel displaying the selected conversation's message history with sender identification and timestamps, and a right panel (optional) showing user profile information. The message composition area at the bottom includes a text input field and send button. The interface implements auto-scrolling to display the most recent messages and real-time message delivery without page refresh. User search functionality enables initiating new conversations. Conversation management options include blocking/unblocking users and clearing conversation history.


**Complaint Management Interface:**  
The complaint submission interface provides a form with fields for complaint title and detailed content description. Upon submission, the system displays a confirmation message and redirects to the complaint history view. The complaint listing interface presents all submitted complaints with columns for title, status, submission date, and action buttons. Clicking a complaint opens a detailed view showing the full content and threaded replies. Management users can add replies and update complaint status through dropdown selection. The interface employs status badges (Open: red, Resolved: green) for visual status indication.

**Feedback Interface:**  
The feedback submission interface mirrors the complaint interface structure with title and content fields. The feedback history view displays submitted feedback items with submission dates and reply status indicators. Detailed feedback view shows the original submission and management response if available. Management users access a feedback review interface listing all employee feedback with the ability to add responses. The interface tracks and displays responder identity and response timestamp.

**Allowance Management Interface:**  
The allowance management interface (accessible to Admin and Manager roles) presents a tabular listing of all allowances with columns for employee name, allowance title, amount, frequency, and creation date. The allowance creation form includes fields for employee selection, title, description, amount (numeric input with currency symbol), and frequency selection (dropdown: one-time, weekly, monthly, quarterly, annual). Employees view a read-only list of their personal allowances with the same information display. The interface implements currency formatting based on system settings.

**Report Submission Interface:**  
The report submission interface provides a form for daily report entry with fields for report title and detailed content. The report history view presents a chronological listing of submitted reports with submission timestamps. Managers access an expanded view showing reports from all employees with filtering by employee and date range. The interface supports report search functionality for locating specific reports by title or content keywords.


**Profile Management Interface:**  
The profile management interface enables users to view and update their personal information including first name, last name, phone number, address, and preferences. The interface presents a form pre-populated with current profile data. Users can modify editable fields and submit changes through a save button. The interface includes password change functionality with fields for current password, new password, and password confirmation. Client-side validation ensures password strength requirements are met. The interface displays success or error messages based on update operation results.

**Settings Interface (Admin Only):**  
The system settings interface provides configuration options for organization-wide parameters including company name and currency symbol. The interface presents a form with input fields for each configurable setting. Changes are saved individually or collectively through save buttons. The interface includes validation to prevent invalid configuration values. Settings changes take effect immediately upon successful save operation.

#### 2.2.2 Hardware Interfaces

**Client Hardware:**  
The system requires client devices capable of running modern web browsers. Minimum client specifications include: processor capable of executing JavaScript (any modern CPU), 2GB RAM minimum (4GB recommended), display resolution of 1024x768 minimum (1920x1080 recommended for optimal experience), network interface card for internet connectivity, and input devices (keyboard and mouse or touchscreen for mobile devices). The system does not require specialized hardware peripherals such as biometric scanners or card readers in the current implementation.

**Server Hardware:**  
The server infrastructure requires hardware capable of hosting Node.js applications and PostgreSQL database. Minimum server specifications include: multi-core processor (quad-core recommended), 8GB RAM minimum (16GB recommended for production environments), 20GB available storage for application files and database (SSD recommended for optimal database performance), network interface card with sufficient bandwidth for expected concurrent users (1 Gbps recommended), and uninterruptible power supply (UPS) for production environments to ensure data integrity during power failures.


**Network Hardware:**  
The system requires network infrastructure supporting TCP/IP communication. Required network components include: router with sufficient throughput for expected user load, firewall with configurable rules to permit HTTP/HTTPS and WebSocket traffic, switches for local network connectivity, and internet gateway with adequate bandwidth (minimum 10 Mbps upload/download for small deployments, scaling with user count). For production deployments, load balancers may be employed to distribute traffic across multiple server instances.

#### 2.2.3 Software Interfaces

**Operating System Interface:**  
The server application interfaces with the host operating system for file system access, network socket management, and process execution. Supported server operating systems include Linux distributions (Ubuntu 20.04+, CentOS 8+, Debian 10+), Windows Server 2016+, and macOS 11+. The application utilizes OS-provided networking stack for HTTP and WebSocket communication. File system interface is used for log file writing and static file serving.

**Database Interface:**  
The application interfaces with PostgreSQL database management system through the pg (node-postgres) driver version 8.16.3. The database interface employs connection pooling for optimal performance with configurable pool parameters (maximum 20 connections, minimum 5 connections, 30-second idle timeout, 2-second connection timeout). All database interactions utilize parameterized queries to prevent SQL injection vulnerabilities. The interface supports transaction management for operations requiring atomicity (e.g., user creation with profile). Database interface handles connection error recovery and automatic reconnection.

**Email Service Interface:**  
The application interfaces with SMTP email servers through the Nodemailer library version 7.0.10 for password reset functionality. The email interface supports standard SMTP protocols with TLS encryption. Configuration parameters include SMTP host, port (typically 587 for TLS), authentication credentials, and sender email address. The interface handles email composition, attachment support (if needed), and delivery status tracking. Common SMTP providers supported include Gmail, Outlook, SendGrid, and self-hosted SMTP servers.


**Web Browser Interface:**  
The frontend application interfaces with web browsers through standard web APIs including DOM manipulation, Fetch API/XMLHttpRequest for HTTP communication, WebSocket API for real-time communication, Local Storage API for client-side data persistence (authentication tokens), and History API for client-side routing. The application requires browsers supporting ECMAScript 6 (ES6) features, CSS3 for styling, and HTML5 for semantic markup. Tested and supported browsers include Google Chrome 90+, Mozilla Firefox 88+, Apple Safari 14+, and Microsoft Edge 90+.

**Third-Party Library Interfaces:**  
The application integrates multiple third-party libraries through their respective APIs:
- Express.js: Middleware-based web framework providing routing, request/response handling, and middleware chain execution
- React: Component-based UI library with virtual DOM, hooks API, and lifecycle methods
- Ant Design: UI component library providing pre-built components with consistent styling and behavior
- Socket.io: Real-time communication library with event-based messaging, room management, and automatic reconnection
- JWT: Token-based authentication with signing, verification, and expiration management
- BCrypt: Password hashing with configurable salt rounds and comparison methods
- Moment.js: Date manipulation with parsing, formatting, and timezone support

**Process Manager Interface (Optional):**  
For production deployments, the application interfaces with PM2 process manager for application lifecycle management. PM2 provides process monitoring, automatic restart on failure, log management, cluster mode for load distribution, and startup script generation. The interface enables zero-downtime deployments through reload functionality.

#### 2.2.4 Communication Interfaces

**HTTP/HTTPS Protocol:**  
The application employs HTTP/HTTPS protocols for client-server communication. RESTful API endpoints utilize standard HTTP methods (GET, POST, PUT, PATCH, DELETE) with appropriate status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error). Request and response bodies employ JSON format for data serialization. HTTPS with TLS 1.2+ encryption is required for production deployments to ensure data confidentiality and integrity. The application implements CORS (Cross-Origin Resource Sharing) headers to control cross-origin access.


**WebSocket Protocol:**  
Real-time communication features utilize WebSocket protocol through Socket.io library. WebSocket connections are established after initial HTTP handshake, enabling full-duplex bidirectional communication. The protocol supports event-based messaging with custom event names (authenticate, send_message, receive_message, disconnect). Socket.io implements automatic reconnection with exponential backoff, heartbeat mechanism for connection health monitoring, and fallback to HTTP long-polling if WebSocket is unavailable. WebSocket communication occurs over the same port as HTTP server with automatic protocol upgrade.

**Database Communication Protocol:**  
Communication with PostgreSQL database employs PostgreSQL wire protocol over TCP/IP. The pg driver manages connection establishment, query execution, result set retrieval, and connection termination. The protocol supports prepared statements for query optimization and parameterized queries for security. Connection pooling minimizes connection overhead by reusing established connections. The protocol includes transaction support with BEGIN, COMMIT, and ROLLBACK commands.

**SMTP Protocol:**  
Email communication for password reset functionality employs SMTP (Simple Mail Transfer Protocol) with STARTTLS encryption. The protocol sequence includes connection establishment, EHLO greeting, STARTTLS negotiation, authentication (AUTH PLAIN or AUTH LOGIN), mail composition (MAIL FROM, RCPT TO, DATA), and connection termination (QUIT). The application supports SMTP authentication with username/password credentials. Port 587 is standard for SMTP with STARTTLS, while port 465 is used for SMTP over SSL.

**API Communication Format:**  
All API communications employ JSON (JavaScript Object Notation) format for request and response bodies. Request headers include Content-Type: application/json for POST/PUT/PATCH requests and Authorization: Bearer <token> for authenticated endpoints. Response format follows consistent structure with data payload, status indicators, and error messages when applicable. API implements versioning through URL path (/api/v1/) to support future API evolution without breaking existing clients.

---

### 2.3 Functional Requirements


#### 2.3.1 User Authentication and Authorization Module

**FR-AUTH-001: User Login**  
*Input:* Username (string, required), Password (string, required)  
*Processing:* System validates input fields for presence. System queries database for user record matching username. System compares provided password with stored password hash using BCrypt comparison. Upon successful validation, system generates JWT token containing user ID, role, and default password flag with 1-hour expiration. System applies rate limiting (5 attempts per 15 minutes per IP address).  
*Output:* Success: JWT authentication token and success message. Failure: Error message indicating invalid credentials or rate limit exceeded. HTTP Status: 200 (success), 401 (invalid credentials), 429 (rate limit exceeded).

**FR-AUTH-002: Password Reset (Authenticated User)**  
*Input:* JWT authentication token (header), New password (string, minimum 6 characters)  
*Processing:* System validates JWT token and extracts user ID. System validates new password meets minimum length requirement. System generates password hash using BCrypt with 10 salt rounds. System updates user record with new password hash and sets is_default_password flag to false. System invalidates current JWT token requiring re-authentication.  
*Output:* Success: Confirmation message indicating password reset successful. Failure: Error message indicating invalid token, insufficient password length, or server error. HTTP Status: 200 (success), 400 (validation error), 401 (invalid token), 500 (server error).

**FR-AUTH-003: Forgot Password Request**  
*Input:* Email address (string, required, valid email format)  
*Processing:* System validates email format. System queries database for user record with matching email. If user exists, system generates cryptographically secure random token (32 bytes hexadecimal). System stores token and expiration timestamp (15 minutes from current time) in user record. System sends password reset email containing reset link with token to user's email address. System returns generic success message regardless of email existence to prevent user enumeration.  
*Output:* Success: Generic message "If an account with that email exists, a reset link has been sent." Failure: Error message indicating server error. HTTP Status: 200 (success), 500 (server error).


**FR-AUTH-004: Perform Password Reset**  
*Input:* Reset token (string, required), New password (string, minimum 6 characters)  
*Processing:* System validates presence of token and new password. System queries database for user record with matching token and expiration timestamp greater than current time. If valid token found, system generates password hash using BCrypt with 10 salt rounds. System updates user record with new password hash, clears reset token and expiration timestamp, and sets is_default_password flag to false.  
*Output:* Success: Confirmation message "Password reset successful. You can now log in." Failure: Error message indicating invalid or expired token, or server error. HTTP Status: 200 (success), 400 (invalid/expired token), 500 (server error).

**FR-AUTH-005: Token Validation**  
*Input:* JWT authentication token (Authorization header: Bearer <token>)  
*Processing:* System extracts token from Authorization header. System verifies token signature using JWT_SECRET. System validates token expiration timestamp. System extracts user payload (user ID, role, default password flag) from token. System attaches user information to request object for downstream processing.  
*Output:* Success: Request proceeds to protected endpoint with user information attached. Failure: Error response indicating invalid or expired token. HTTP Status: 401 (invalid/expired token), 403 (insufficient permissions for role-protected endpoints).

**FR-AUTH-006: Role-Based Access Control**  
*Input:* JWT authentication token (validated), Required roles (array of role strings)  
*Processing:* System extracts user role from validated token. System compares user role against required roles for endpoint. System permits access if user role matches any required role. System denies access if user role does not match required roles.  
*Output:* Success: Request proceeds to endpoint handler. Failure: Error message "Access denied. Insufficient permissions." HTTP Status: 403 (forbidden).

#### 2.3.2 Employee and Role Management Module

**FR-EMP-001: Create Employee**  
*Input:* Username (string, unique, required), Email (string, unique, valid format, required), Password (string, required), Role (enum: admin/manager/staff, required), First name (string, required), Last name (string, required), Phone number (string, unique, required), Sex (enum: male/female/other, required), Job title (string, optional)  
*Processing:* System validates all required fields are present and meet format requirements. System checks username and email uniqueness in database. System generates password hash using BCrypt with 10 salt rounds. System initiates database transaction. System inserts user record with username, email, password hash, role, and is_default_password=true. System inserts user profile record with user ID, first name, last name, phone number, sex, and job title. System commits transaction if both inserts successful, rolls back if any failure occurs.  
*Output:* Success: Confirmation message "User created successfully" with HTTP 201 status. Failure: Error message indicating duplicate username/email/phone or validation error with HTTP 400/409 status. HTTP Status: 201 (created), 400 (validation error), 409 (duplicate), 500 (server error).


**FR-EMP-002: Retrieve All Employees**  
*Input:* JWT authentication token (Admin or Manager role required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining users and user_profiles tables. System filters results to exclude admin role users. System retrieves user_id, username, email, role, first_name, last_name, phone_number, sex, and job_title for all non-admin users. System orders results by user_id.  
*Output:* Success: JSON array of employee objects containing all specified fields. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

**FR-EMP-003: Retrieve Single Employee**  
*Input:* JWT authentication token (Admin or Manager role required), Employee ID (integer, required, URL parameter)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining users and user_profiles tables filtered by user_id. System excludes admin role users from results. System retrieves comprehensive employee information including user_id, username, email, role, first_name, last_name, phone_number, sex, job_title, hire_date, and address.  
*Output:* Success: JSON object containing employee details. Failure: Error message "Staff user not found" if employee does not exist or is admin. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-EMP-004: Update Employee**  
*Input:* JWT authentication token (Admin role required), Employee ID (integer, required, URL parameter), Username (string, unique, required), Email (string, unique, valid format, required), Role (enum: admin/manager/staff, required), First name (string, required), Last name (string, required), Phone number (string, unique, required), Sex (enum: male/female/other, required), Job title (string, optional)  
*Processing:* System validates authentication token and verifies user has Admin role. System validates all required fields are present and meet format requirements. System initiates database transaction. System updates users table with username, email, and role for specified user_id excluding admin users. System performs upsert operation on user_profiles table updating first_name, last_name, phone_number, sex, and job_title, creating profile if not exists. System commits transaction if both operations successful, rolls back if any failure occurs.  
*Output:* Success: Confirmation message "User updated successfully". Failure: Error message indicating duplicate username/email/phone, validation error, or user not found. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found), 409 (duplicate), 500 (server error).


**FR-EMP-005: Delete Employee**  
*Input:* JWT authentication token (Admin role required), Employee ID (integer, required, URL parameter)  
*Processing:* System validates authentication token and verifies user has Admin role. System executes delete operation on users table for specified user_id excluding admin role users. System relies on database CASCADE constraints to automatically delete related records in user_profiles, tasks, attendance, messages, reports, complaints, feedback, and allowances tables. System retrieves deleted user's username for confirmation message.  
*Output:* Success: Confirmation message "User [username] deleted successfully". Failure: Error message "Staff user not found or is an admin" if user does not exist, is admin, or has foreign key constraints preventing deletion. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 409 (foreign key constraint), 500 (server error).

#### 2.3.3 Task and Assignment Management Module

**FR-TASK-001: Create Task**  
*Input:* JWT authentication token (Admin or Manager role required), Title (string, required), Description (string, optional), Assigned to (integer, user_id, required), Due date (timestamp, optional)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System validates title and assigned_to fields are present. System verifies assigned_to user exists in database. System extracts assigned_by user ID from authentication token. System inserts task record with title, description, assigned_to, assigned_by, due_date, status (default: pending), and created_at (current timestamp).  
*Output:* Success: JSON object containing created task with all fields including generated task_id. Failure: Error message indicating missing required fields or assigned user not found. HTTP Status: 201 (created), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (user not found), 500 (server error).

**FR-TASK-002: Retrieve User's Assigned Tasks**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query joining tasks and users tables. System filters tasks where assigned_to matches authenticated user ID. System retrieves task_id, title, description, status, due_date, created_at, assigned_by, and assigned_by_username. System orders results by created_at descending (most recent first).  
*Output:* Success: JSON array of task objects assigned to authenticated user. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).


**FR-TASK-003: Retrieve All Tasks**  
*Input:* JWT authentication token (Admin or Manager role required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining tasks table with users table twice (for assignee and assigner). System retrieves task_id, title, description, status, due_date, created_at, assigned_to, assigned_to_username, assigned_by, and assigned_by_username for all tasks. System orders results by created_at descending.  
*Output:* Success: JSON array of all task objects with assignee and assigner information. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

**FR-TASK-004: Update Task**  
*Input:* JWT authentication token (Manager role required), Task ID (integer, required, URL parameter), Title (string, required), Description (string, optional), Assigned to (integer, user_id, required), Status (enum: pending/in_progress/completed, required), Due date (timestamp, optional)  
*Processing:* System validates authentication token and verifies user has Manager role. System validates all required fields are present. System validates status value is one of allowed enum values. System executes update operation on tasks table for specified task_id. System updates title, description, assigned_to, status, and due_date fields.  
*Output:* Success: JSON object containing updated task with all fields. Failure: Error message indicating validation error, invalid status, or task not found. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-TASK-005: Delete Task**  
*Input:* JWT authentication token (Manager role required), Task ID (integer, required, URL parameter)  
*Processing:* System validates authentication token and verifies user has Manager role. System executes delete operation on tasks table for specified task_id. System retrieves task title for confirmation message before deletion.  
*Output:* Success: Confirmation message "Task '[title]' deleted successfully". Failure: Error message "Task not found" if task does not exist. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).


**FR-TASK-006: Update Task Status (Employee Self-Service)**  
*Input:* JWT authentication token (Staff role required), Task ID (integer, required, URL parameter), Status (enum: pending/in_progress/completed, required)  
*Processing:* System validates authentication token and verifies user has Staff role. System validates status field is present and contains valid enum value. System extracts user ID from authentication token. System executes update operation on tasks table for specified task_id where assigned_to matches authenticated user ID. System updates only status field, preventing modification of other task attributes.  
*Output:* Success: JSON object containing updated task with all fields. Failure: Error message indicating validation error, invalid status, or "Task not found or permission denied" if task does not exist or is not assigned to authenticated user. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found/permission denied), 500 (server error).

#### 2.3.4 Attendance Tracking Module

**FR-ATT-001: Clock In**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System retrieves current date. System checks if user already has an open attendance record (clock_in_time exists but clock_out_time is NULL) for current date. If open record exists, system returns error preventing duplicate clock-in. If no open record, system inserts attendance record with user_id, clock_in_time (current timestamp), attendance_date (current date), and clock_out_time (NULL).  
*Output:* Success: JSON object containing created attendance record with attendance_id, user_id, clock_in_time, attendance_date. Failure: Error message "Already clocked in for today" if open record exists. HTTP Status: 201 (created), 400 (already clocked in), 401 (unauthorized), 500 (server error).

**FR-ATT-002: Clock Out**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System retrieves current date. System queries for open attendance record (clock_out_time is NULL) for authenticated user and current date. If no open record found, system returns error indicating user must clock in first. If open record found, system updates attendance record setting clock_out_time to current timestamp.  
*Output:* Success: JSON object containing updated attendance record with attendance_id, user_id, clock_in_time, clock_out_time, attendance_date. Failure: Error message "No active clock-in found for today" if no open record exists. HTTP Status: 200 (success), 400 (no active clock-in), 401 (unauthorized), 500 (server error).


**FR-ATT-003: Retrieve User Attendance History**  
*Input:* JWT authentication token (any authenticated user), Optional: Start date (date), End date (date)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query on attendance table filtered by user_id. If date range parameters provided, system applies additional filters for attendance_date between start and end dates. System retrieves attendance_id, user_id, clock_in_time, clock_out_time, attendance_date. System orders results by attendance_date descending.  
*Output:* Success: JSON array of attendance records for authenticated user. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

**FR-ATT-004: Retrieve All Employee Attendance (Manager)**  
*Input:* JWT authentication token (Admin or Manager role required), Optional: User ID filter (integer), Start date (date), End date (date)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining attendance and users tables. If user_id filter provided, system applies filter for specific employee. If date range provided, system applies attendance_date filters. System retrieves attendance_id, user_id, username, first_name, last_name, clock_in_time, clock_out_time, attendance_date. System orders results by attendance_date descending.  
*Output:* Success: JSON array of attendance records with employee information. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

**FR-ATT-005: Calculate Work Hours**  
*Input:* Clock-in timestamp, Clock-out timestamp  
*Processing:* System calculates time difference between clock_out_time and clock_in_time. System converts difference to hours with decimal precision. System handles cases where clock_out_time is NULL (ongoing shift) by returning NULL or current time difference.  
*Output:* Decimal value representing hours worked, or NULL if shift ongoing.

#### 2.3.5 Real-Time Communication Module

**FR-CHAT-001: Authenticate WebSocket Connection**  
*Input:* JWT authentication token (via WebSocket authenticate event)  
*Processing:* System receives authenticate event from client with JWT token. System verifies token signature and expiration using JWT_SECRET. System extracts user ID from token payload. System stores mapping between user ID and socket ID in server memory (userSocketMap). System maintains connection for authenticated user.  
*Output:* Success: WebSocket connection remains active with user authenticated. Failure: System disconnects socket if token invalid or expired.


**FR-CHAT-002: Send Message**  
*Input:* WebSocket send_message event containing Receiver ID (integer, required), Content (string, required)  
*Processing:* System retrieves sender ID from socket authentication mapping. If sender not authenticated, system returns error callback. System validates receiver_id and content are present. System determines conversation participants as user1_id (minimum of sender and receiver IDs) and user2_id (maximum of sender and receiver IDs) to ensure consistent conversation identification. System queries for existing conversation between participants. If no conversation exists, system creates new conversation with status 'active'. If conversation exists but status is 'blocked', system returns error. System inserts message record with conversation_id, sender_id, content, and sent_at (current timestamp). System retrieves receiver's socket ID from userSocketMap. If receiver is online (socket ID exists), system emits receive_message event to receiver's socket with message payload and conversation information. System returns success callback to sender with message and conversation data.  
*Output:* Success: Callback with status 'ok', message object, and conversation object. Real-time message delivery to receiver if online. Failure: Callback with status 'error' and error message (not authenticated, conversation blocked, server error).

**FR-CHAT-003: Retrieve Conversations**  
*Input:* JWT authentication token (HTTP GET request)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query on conversations table where user1_id or user2_id matches authenticated user. System joins with users table to retrieve other participant's information (username, first_name, last_name). System retrieves conversation_id, status, created_at, and participant information. System orders results by most recent message or creation date.  
*Output:* Success: JSON array of conversation objects with participant information. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

**FR-CHAT-004: Retrieve Conversation Messages**  
*Input:* JWT authentication token, Conversation ID (integer, required, URL parameter), Optional: Limit (integer), Offset (integer)  
*Processing:* System validates authentication token. System extracts user ID from token. System verifies authenticated user is participant in specified conversation (user1_id or user2_id matches user ID). System executes database query on messages table filtered by conversation_id. System retrieves message_id, sender_id, content, sent_at. System applies limit and offset for pagination if provided. System orders results by sent_at ascending (chronological order).  
*Output:* Success: JSON array of message objects. Failure: Error message "Conversation not found or access denied" if conversation does not exist or user is not participant. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).


**FR-CHAT-005: Block/Unblock Conversation**  
*Input:* JWT authentication token, Conversation ID (integer, required, URL parameter), Action (enum: block/unblock, required)  
*Processing:* System validates authentication token. System extracts user ID from token. System verifies authenticated user is participant in specified conversation. If action is 'block', system updates conversation status to 'blocked' and sets blocked_by to authenticated user ID. If action is 'unblock', system updates conversation status to 'active' and clears blocked_by field. System prevents message sending in blocked conversations.  
*Output:* Success: Confirmation message "Conversation blocked/unblocked successfully". Failure: Error message indicating conversation not found or access denied. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-CHAT-006: Clear Conversation History**  
*Input:* JWT authentication token, Conversation ID (integer, required, URL parameter)  
*Processing:* System validates authentication token. System extracts user ID from token. System verifies authenticated user is participant in specified conversation. System updates conversation record setting user1_cleared_at or user2_cleared_at (depending on which participant is authenticated user) to current timestamp. System modifies message retrieval queries to exclude messages sent before cleared_at timestamp for respective user. System does not delete actual message records, maintaining data integrity.  
*Output:* Success: Confirmation message "Conversation history cleared". Failure: Error message indicating conversation not found or access denied. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-CHAT-007: Search Users for Chat**  
*Input:* JWT authentication token, Search query (string, optional)  
*Processing:* System validates authentication token. System executes database query on users and user_profiles tables. If search query provided, system filters by username, first_name, or last_name containing search string (case-insensitive). System excludes authenticated user from results. System retrieves user_id, username, first_name, last_name, role. System orders results alphabetically by username.  
*Output:* Success: JSON array of user objects matching search criteria. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

#### 2.3.6 Complaint Management Module


**FR-COMP-001: Submit Complaint**  
*Input:* JWT authentication token (any authenticated user), Title (string, required), Content (string, required)  
*Processing:* System validates authentication token. System extracts user ID from token. System validates title and content fields are present and non-empty. System inserts complaint record with user_id, title, content, status (default: 'open'), and submitted_at (current timestamp).  
*Output:* Success: JSON object containing created complaint with complaint_id, user_id, title, content, status, submitted_at. Failure: Error message indicating validation error or authentication failure. HTTP Status: 201 (created), 400 (validation error), 401 (unauthorized), 500 (server error).

**FR-COMP-002: Retrieve User's Complaints**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query on complaints table filtered by user_id matching authenticated user. System retrieves complaint_id, title, content, status, submitted_at. System orders results by submitted_at descending (most recent first).  
*Output:* Success: JSON array of complaint objects submitted by authenticated user. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

**FR-COMP-003: Retrieve All Complaints (Manager)**  
*Input:* JWT authentication token (Admin or Manager role required), Optional: Status filter (enum: open/resolved), User ID filter (integer)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining complaints and users tables. If status filter provided, system applies filter for specified status. If user_id filter provided, system applies filter for specific employee. System retrieves complaint_id, user_id, username, first_name, last_name, title, content, status, submitted_at. System orders results by submitted_at descending.  
*Output:* Success: JSON array of complaint objects with submitter information. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).


**FR-COMP-004: Retrieve Complaint Details with Replies**  
*Input:* JWT authentication token, Complaint ID (integer, required, URL parameter)  
*Processing:* System validates authentication token. System verifies user has permission to view complaint (complaint submitter, or Admin/Manager role). System executes database query retrieving complaint details with complaint_id, user_id, username, title, content, status, submitted_at. System executes second query retrieving all replies for complaint from complaint_replies table joined with users table. System retrieves reply_id, user_id, username, content, replied_at for each reply. System orders replies by replied_at ascending (chronological order).  
*Output:* Success: JSON object containing complaint details and array of reply objects. Failure: Error message "Complaint not found or access denied" if complaint does not exist or user lacks permission. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-COMP-005: Add Complaint Reply**  
*Input:* JWT authentication token (Admin or Manager role required), Complaint ID (integer, required, URL parameter), Content (string, required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System extracts user ID from token. System validates content field is present and non-empty. System verifies complaint exists in database. System inserts complaint_reply record with complaint_id, user_id, content, and replied_at (current timestamp).  
*Output:* Success: JSON object containing created reply with reply_id, complaint_id, user_id, content, replied_at. Failure: Error message indicating validation error, complaint not found, or insufficient permissions. HTTP Status: 201 (created), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (complaint not found), 500 (server error).

**FR-COMP-006: Update Complaint Status**  
*Input:* JWT authentication token (Admin or Manager role required), Complaint ID (integer, required, URL parameter), Status (enum: open/resolved, required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System validates status field contains valid enum value. System executes update operation on complaints table for specified complaint_id. System updates status field to provided value.  
*Output:* Success: JSON object containing updated complaint with all fields. Failure: Error message indicating validation error, invalid status value, complaint not found, or insufficient permissions. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

#### 2.3.7 Feedback Management Module


**FR-FEED-001: Submit Feedback**  
*Input:* JWT authentication token (any authenticated user), Title (string, required), Content (string, required)  
*Processing:* System validates authentication token. System extracts user ID from token. System validates title and content fields are present and non-empty. System inserts feedback record with user_id, title, content, submitted_at (current timestamp), reply (NULL), replied_by (NULL), replied_at (NULL).  
*Output:* Success: JSON object containing created feedback with feedback_id, user_id, title, content, submitted_at. Failure: Error message indicating validation error or authentication failure. HTTP Status: 201 (created), 400 (validation error), 401 (unauthorized), 500 (server error).

**FR-FEED-002: Retrieve User's Feedback**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query on feedback table filtered by user_id matching authenticated user. System retrieves feedback_id, title, content, submitted_at, reply, replied_by, replied_at. System orders results by submitted_at descending (most recent first).  
*Output:* Success: JSON array of feedback objects submitted by authenticated user including any management replies. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

**FR-FEED-003: Retrieve All Feedback (Manager)**  
*Input:* JWT authentication token (Admin or Manager role required), Optional: User ID filter (integer), Replied status filter (boolean)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining feedback and users tables. If user_id filter provided, system applies filter for specific employee. If replied status filter provided, system filters by reply IS NULL (unreplied) or reply IS NOT NULL (replied). System retrieves feedback_id, user_id, username, first_name, last_name, title, content, submitted_at, reply, replied_by, replied_at. System orders results by submitted_at descending.  
*Output:* Success: JSON array of feedback objects with submitter information. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).


**FR-FEED-004: Reply to Feedback**  
*Input:* JWT authentication token (Admin or Manager role required), Feedback ID (integer, required, URL parameter), Reply content (string, required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System extracts user ID from token. System validates reply content field is present and non-empty. System verifies feedback exists in database. System executes update operation on feedback table for specified feedback_id. System updates reply field with provided content, replied_by field with authenticated user ID, and replied_at field with current timestamp.  
*Output:* Success: JSON object containing updated feedback with all fields including reply information. Failure: Error message indicating validation error, feedback not found, or insufficient permissions. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-FEED-005: Retrieve Feedback Details**  
*Input:* JWT authentication token, Feedback ID (integer, required, URL parameter)  
*Processing:* System validates authentication token. System verifies user has permission to view feedback (feedback submitter, or Admin/Manager role). System executes database query retrieving feedback details joined with users table for submitter and replier information. System retrieves feedback_id, user_id, username (submitter), title, content, submitted_at, reply, replied_by, replied_by_username, replied_at.  
*Output:* Success: JSON object containing complete feedback details with submitter and replier information. Failure: Error message "Feedback not found or access denied" if feedback does not exist or user lacks permission. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

#### 2.3.8 Allowance Management Module

**FR-ALLOW-001: Create Allowance**  
*Input:* JWT authentication token (Admin or Manager role required), User ID (integer, required), Title (string, required), Description (string, optional), Amount (decimal, required, positive), Frequency (enum: one-time/weekly/monthly/quarterly/annual, required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System validates all required fields are present. System validates amount is positive decimal value. System validates frequency is valid enum value. System verifies user_id exists in database. System inserts allowance record with user_id, title, description, amount, frequency, and created_at (current timestamp).  
*Output:* Success: JSON object containing created allowance with allowance_id, user_id, title, description, amount, frequency, created_at. Failure: Error message indicating validation error, user not found, or insufficient permissions. HTTP Status: 201 (created), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (user not found), 500 (server error).


**FR-ALLOW-002: Retrieve User's Allowances**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query on allowances table filtered by user_id matching authenticated user. System retrieves allowance_id, title, description, amount, frequency, created_at. System orders results by created_at descending (most recent first).  
*Output:* Success: JSON array of allowance objects for authenticated user. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

**FR-ALLOW-003: Retrieve All Allowances (Manager)**  
*Input:* JWT authentication token (Admin or Manager role required), Optional: User ID filter (integer), Frequency filter (enum)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining allowances and users tables. If user_id filter provided, system applies filter for specific employee. If frequency filter provided, system applies filter for specified frequency. System retrieves allowance_id, user_id, username, first_name, last_name, title, description, amount, frequency, created_at. System orders results by created_at descending.  
*Output:* Success: JSON array of allowance objects with employee information. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

**FR-ALLOW-004: Update Allowance**  
*Input:* JWT authentication token (Admin or Manager role required), Allowance ID (integer, required, URL parameter), Title (string, required), Description (string, optional), Amount (decimal, required, positive), Frequency (enum, required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System validates all required fields are present and meet validation criteria. System executes update operation on allowances table for specified allowance_id. System updates title, description, amount, and frequency fields.  
*Output:* Success: JSON object containing updated allowance with all fields. Failure: Error message indicating validation error, allowance not found, or insufficient permissions. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).


**FR-ALLOW-005: Delete Allowance**  
*Input:* JWT authentication token (Admin or Manager role required), Allowance ID (integer, required, URL parameter)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes delete operation on allowances table for specified allowance_id. System retrieves allowance title for confirmation message before deletion.  
*Output:* Success: Confirmation message "Allowance '[title]' deleted successfully". Failure: Error message "Allowance not found" if allowance does not exist. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

#### 2.3.9 Report Submission Module

**FR-REP-001: Submit Report**  
*Input:* JWT authentication token (any authenticated user), Title (string, required), Content (string, required)  
*Processing:* System validates authentication token. System extracts user ID from token. System validates title and content fields are present and non-empty. System inserts report record with user_id, title, content, and submitted_at (current timestamp).  
*Output:* Success: JSON object containing created report with report_id, user_id, title, content, submitted_at. Failure: Error message indicating validation error or authentication failure. HTTP Status: 201 (created), 400 (validation error), 401 (unauthorized), 500 (server error).

**FR-REP-002: Retrieve User's Reports**  
*Input:* JWT authentication token (any authenticated user)  
*Processing:* System validates authentication token. System extracts user ID from token. System executes database query on reports table filtered by user_id matching authenticated user. System retrieves report_id, title, content, submitted_at. System orders results by submitted_at descending (most recent first).  
*Output:* Success: JSON array of report objects submitted by authenticated user. Failure: Error message indicating authentication failure. HTTP Status: 200 (success), 401 (unauthorized), 500 (server error).

**FR-REP-003: Retrieve All Reports (Manager)**  
*Input:* JWT authentication token (Admin or Manager role required), Optional: User ID filter (integer), Date range filter (start_date, end_date)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query joining reports and users tables. If user_id filter provided, system applies filter for specific employee. If date range provided, system applies submitted_at filters. System retrieves report_id, user_id, username, first_name, last_name, title, content, submitted_at. System orders results by submitted_at descending.  
*Output:* Success: JSON array of report objects with submitter information. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).


**FR-REP-004: Retrieve Report Details**  
*Input:* JWT authentication token, Report ID (integer, required, URL parameter)  
*Processing:* System validates authentication token. System verifies user has permission to view report (report submitter, or Admin/Manager role). System executes database query retrieving report details joined with users table. System retrieves report_id, user_id, username, first_name, last_name, title, content, submitted_at.  
*Output:* Success: JSON object containing complete report details with submitter information. Failure: Error message "Report not found or access denied" if report does not exist or user lacks permission. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 404 (not found), 500 (server error).

**FR-REP-005: Search Reports**  
*Input:* JWT authentication token (Admin or Manager role required), Search query (string, required)  
*Processing:* System validates authentication token and verifies user has Admin or Manager role. System executes database query on reports table with full-text search or LIKE pattern matching on title and content fields. System retrieves matching reports with report_id, user_id, username, title, content, submitted_at. System orders results by relevance or submitted_at descending.  
*Output:* Success: JSON array of report objects matching search criteria. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

#### 2.3.10 System Administration Module

**FR-ADMIN-001: Retrieve System Settings**  
*Input:* JWT authentication token (Admin role required)  
*Processing:* System validates authentication token and verifies user has Admin role. System executes database query on system_settings table retrieving all setting key-value pairs. System retrieves setting_key and setting_value for all configured settings.  
*Output:* Success: JSON object or array containing system settings (company_name, currency_symbol, etc.). Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

**FR-ADMIN-002: Update System Settings**  
*Input:* JWT authentication token (Admin role required), Settings object containing key-value pairs (e.g., company_name: string, currency_symbol: string)  
*Processing:* System validates authentication token and verifies user has Admin role. System validates provided settings keys are recognized configuration parameters. System validates setting values meet format requirements. System executes upsert operations on system_settings table for each provided setting. System updates existing settings or inserts new settings as appropriate.  
*Output:* Success: Confirmation message "System settings updated successfully" with updated settings object. Failure: Error message indicating validation error, authentication failure, or insufficient permissions. HTTP Status: 200 (success), 400 (validation error), 401 (unauthorized), 403 (forbidden), 500 (server error).


**FR-ADMIN-003: View System Logs**  
*Input:* JWT authentication token (Admin role required), Optional: Log level filter (enum: error/warn/info), Date range filter  
*Processing:* System validates authentication token and verifies user has Admin role. System retrieves application logs from log files or logging service. If log level filter provided, system filters logs by specified level. If date range provided, system filters logs by timestamp. System formats logs for presentation with timestamp, level, message, and context information.  
*Output:* Success: JSON array or text stream of log entries. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

**FR-ADMIN-004: Database Performance Monitoring**  
*Input:* JWT authentication token (Admin role required)  
*Processing:* System validates authentication token and verifies user has Admin role. System executes database queries to retrieve performance metrics including active connections, query execution statistics, index usage, table sizes, and cache hit ratios. System formats metrics for presentation.  
*Output:* Success: JSON object containing database performance metrics. Failure: Error message indicating authentication failure or insufficient permissions. HTTP Status: 200 (success), 401 (unauthorized), 403 (forbidden), 500 (server error).

---

### 2.4 Performance Requirements

#### 2.4.1 Response Time Requirements

**API Response Times:**  
The system shall maintain the following maximum response times for API endpoints under normal load conditions (up to 50 concurrent users):

- Authentication endpoints (login, token validation): Maximum 500 milliseconds
- Simple data retrieval operations (single record queries): Maximum 300 milliseconds
- Complex data retrieval operations (joined queries, filtered lists): Maximum 1000 milliseconds
- Data creation operations (INSERT queries): Maximum 500 milliseconds
- Data update operations (UPDATE queries): Maximum 500 milliseconds
- Data deletion operations (DELETE queries): Maximum 500 milliseconds
- Real-time message delivery (WebSocket): Maximum 200 milliseconds latency
- File operations and report generation: Maximum 3000 milliseconds


**Database Query Performance:**  
Database queries shall be optimized through indexing to achieve the following performance targets:

- Indexed column lookups (user_id, task_id, etc.): Maximum 50 milliseconds
- Filtered queries with indexed columns: Maximum 200 milliseconds
- JOIN operations with indexed foreign keys: Maximum 300 milliseconds
- Full-text search operations: Maximum 1000 milliseconds
- Aggregate queries (COUNT, SUM, AVG): Maximum 500 milliseconds

The system implements 29 database indexes on frequently queried columns including user_id, task status, attendance dates, message timestamps, and complaint status to ensure optimal query performance. Index effectiveness shall be monitored and maintained through regular database maintenance procedures.

**User Interface Response:**  
Frontend user interface shall provide responsive feedback within the following timeframes:

- Page load time (initial render): Maximum 2000 milliseconds
- Navigation between pages (client-side routing): Maximum 500 milliseconds
- Form submission feedback (loading indicators): Immediate (< 100 milliseconds)
- Real-time message display: Maximum 300 milliseconds from send to display
- Interactive element response (button clicks, dropdown menus): Maximum 100 milliseconds

#### 2.4.2 Concurrent Users and Scalability

**Concurrent User Capacity:**  
The system shall support the following concurrent user loads with current configuration:

- Minimum guaranteed concurrent users: 50 users
- Recommended concurrent users: 100 users
- Maximum concurrent users (with performance degradation): 200 users

Concurrent user capacity is defined as simultaneous active sessions with ongoing request/response activity. The system employs connection pooling (maximum 20 database connections) and rate limiting (100 requests per minute per IP) to manage concurrent load effectively.


**Scalability Provisions:**  
The system architecture supports horizontal and vertical scaling approaches:

- Vertical Scaling: Increasing server resources (CPU, RAM, storage) can support up to 500 concurrent users with proportional resource allocation (32GB RAM, 8-core CPU recommended)
- Horizontal Scaling: Deploying multiple application server instances behind load balancer with shared PostgreSQL database can support 1000+ concurrent users
- Database Scaling: PostgreSQL supports read replicas for distributing query load and connection pooling for efficient connection management
- WebSocket Scaling: Socket.io supports Redis adapter for multi-server WebSocket synchronization enabling horizontal scaling of real-time features

**User Growth Capacity:**  
The system shall accommodate the following total user counts (registered accounts):

- Small deployment: 10-50 users
- Medium deployment: 50-200 users
- Large deployment: 200-500 users
- Enterprise deployment (with scaling): 500-2000 users

#### 2.4.3 Data Storage and Throughput

**Database Storage Requirements:**  
The system shall manage data storage with the following capacity planning:

- Base application and schema: 100 MB
- Per-user storage (profile, settings): 50 KB average
- Per-task storage: 2 KB average
- Per-attendance record: 1 KB average
- Per-message storage: 1 KB average
- Per-report/complaint/feedback: 5 KB average
- Total estimated storage for 100 users over 1 year: 5-10 GB
- Recommended available storage: 50 GB minimum (100 GB recommended for growth)

**Data Throughput:**  
The system shall handle the following data throughput rates:

- Database write operations: Minimum 100 transactions per second
- Database read operations: Minimum 500 queries per second
- Real-time message throughput: Minimum 50 messages per second
- API request throughput: Minimum 100 requests per second (enforced by rate limiting)
- Concurrent WebSocket connections: Minimum 100 simultaneous connections


**Backup and Recovery:**  
The system shall support data backup and recovery procedures:

- Database backup frequency: Daily full backups, hourly incremental backups recommended
- Backup retention: Minimum 30 days, 90 days recommended
- Backup storage: Separate physical location or cloud storage
- Recovery Time Objective (RTO): Maximum 4 hours for full system restoration
- Recovery Point Objective (RPO): Maximum 1 hour of data loss acceptable
- Backup verification: Weekly backup restoration testing recommended

#### 2.4.4 Availability and Uptime

**System Availability:**  
The system shall maintain the following availability targets:

- Target uptime: 99.5% (approximately 3.6 hours downtime per month)
- Planned maintenance window: Maximum 4 hours per month during off-peak hours
- Unplanned downtime: Maximum 2 hours per month
- Mean Time Between Failures (MTBF): Minimum 720 hours (30 days)
- Mean Time To Recovery (MTTR): Maximum 2 hours

**High Availability Provisions:**  
For production deployments requiring higher availability:

- Process monitoring with automatic restart (PM2 or equivalent)
- Database replication for failover capability
- Load balancer health checks with automatic traffic rerouting
- Redundant server infrastructure in active-passive or active-active configuration
- Monitoring and alerting for proactive issue detection

**Service Degradation:**  
The system shall implement graceful degradation under stress conditions:

- Rate limiting prevents system overload by rejecting excessive requests
- Connection pooling prevents database connection exhaustion
- WebSocket fallback to HTTP long-polling if WebSocket unavailable
- Error messages inform users of temporary service unavailability
- Retry mechanisms with exponential backoff for transient failures

#### 2.4.5 Security Requirements

**Authentication Security:**  
The system shall implement the following authentication security measures:

- Password hashing using BCrypt algorithm with 10 salt rounds (computational cost factor)
- Minimum password length: 6 characters (configurable)
- JWT token expiration: 1 hour maximum session duration
- Secure token storage: Tokens stored in browser localStorage with HttpOnly cookies recommended for production
- Password reset token expiration: 15 minutes maximum validity
- Rate limiting on login endpoint: Maximum 5 attempts per 15 minutes per IP address


**Authorization Security:**  
The system shall enforce role-based access control:

- Three-tier role hierarchy: Admin (full access), Manager (operational access), Staff (limited access)
- Authorization validation at both frontend (UI element visibility) and backend (API endpoint protection)
- JWT token contains role information for stateless authorization
- Middleware functions verify role requirements before endpoint execution
- Database queries include user_id filters to prevent unauthorized data access

**Data Security:**  
The system shall protect sensitive data through:

- SQL injection prevention using parameterized queries exclusively
- Cross-Site Scripting (XSS) prevention through input sanitization and output encoding
- Cross-Site Request Forgery (CSRF) protection through token validation
- HTTPS/TLS encryption for all data transmission in production (TLS 1.2+ required)
- Database connection encryption for sensitive environments
- Personal Identifiable Information (PII) protection through access controls

**API Security:**  
The system shall secure API endpoints through:

- Rate limiting: 100 requests per minute per IP address for general API endpoints
- CORS (Cross-Origin Resource Sharing) configuration restricting allowed origins
- Request size limits preventing denial-of-service through large payloads
- Input validation on all user-provided data
- Error messages that do not expose system internals or sensitive information
- HTTP security headers (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options)

**Audit and Logging:**  
The system shall maintain security audit trails:

- HTTP request logging with Morgan middleware (combined format in production)
- Authentication attempt logging (successful and failed logins)
- Authorization failure logging (access denied events)
- Data modification logging (create, update, delete operations with user identification)
- Error logging with stack traces for debugging (sanitized in production)
- Log retention: Minimum 90 days for security audit purposes

#### 2.4.6 Backup, Recovery, and Fault Tolerance

**Backup Strategy:**  
The system shall implement comprehensive backup procedures:

- Database backups using pg_dump utility for PostgreSQL
- Application code backups through version control system (Git)
- Configuration file backups including environment variables (excluding secrets)
- Backup automation through scheduled cron jobs or backup services
- Backup integrity verification through periodic restoration testing
- Off-site backup storage for disaster recovery


**Recovery Procedures:**  
The system shall support the following recovery scenarios:

- Database restoration from backup: pg_restore utility with specified backup file
- Application restoration: Git checkout of specific version tag or commit
- Configuration restoration: Environment variable reconfiguration from backup
- Partial recovery: Table-level restoration for specific data corruption
- Point-in-time recovery: Using transaction logs for precise recovery timestamp

**Fault Tolerance:**  
The system shall implement fault tolerance mechanisms:

- Database connection error handling with automatic reconnection attempts
- Transaction rollback on operation failures maintaining data consistency
- WebSocket automatic reconnection with exponential backoff
- Process monitoring and automatic restart on application crashes (PM2)
- Error boundaries in frontend preventing complete application failure
- Graceful error messages to users with actionable guidance

**Data Integrity:**  
The system shall maintain data integrity through:

- Database constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL)
- Transaction management for multi-step operations (BEGIN, COMMIT, ROLLBACK)
- Referential integrity with CASCADE delete for dependent records
- Data type validation at database level (ENUM types, CHECK constraints)
- Application-level validation before database operations
- Concurrent access control through database locking mechanisms

---

### 2.5 Design Constraints

#### 2.5.1 Technology Stack Constraints

**Backend Technology Constraints:**  
The system is constrained to Node.js runtime environment version 18.0 or higher, limiting deployment to platforms supporting this runtime. The Express.js framework version 5.1.0 dictates middleware architecture and routing patterns. PostgreSQL database version 13+ is mandatory, precluding use of NoSQL or other relational databases without significant architectural changes. The system requires npm package manager for dependency management, creating dependency on Node.js ecosystem.


**Frontend Technology Constraints:**  
The system employs React version 19.2.0 with functional components and hooks, requiring modern JavaScript knowledge and precluding class-based component patterns. Ant Design version 5.28.0 UI library constrains visual design to library's component set and styling system. The system requires modern web browsers supporting ES6, WebSocket, and responsive CSS, limiting support for legacy browsers (Internet Explorer not supported). Client-side routing with React Router DOM version 7.9.5 requires browser support for History API.

**Database Constraints:**  
PostgreSQL-specific features including ENUM types, JSONB data type, and advanced indexing strategies create database vendor lock-in. The system utilizes PostgreSQL wire protocol through pg driver, requiring PostgreSQL-compatible database servers. Database schema employs CASCADE constraints and triggers that may not be portable to other database systems. The connection pooling implementation is specific to pg driver configuration.

**Real-Time Communication Constraints:**  
Socket.io version 4.8.1 for WebSocket communication requires both client and server Socket.io libraries, creating tight coupling. The WebSocket protocol requires network infrastructure supporting WebSocket connections (some corporate firewalls block WebSocket). The current implementation stores socket-user mappings in server memory, limiting horizontal scaling without Redis adapter implementation.

#### 2.5.2 Performance and Architecture Constraints

**Single-Server Architecture:**  
The current implementation assumes single-server deployment with in-memory session management (socket mappings), limiting horizontal scalability without architectural modifications. Stateful WebSocket connections require sticky sessions if load balancing is implemented. The system does not implement distributed caching, limiting performance optimization options for multi-server deployments.

**Connection Pool Limitations:**  
Database connection pool configured with maximum 20 connections limits concurrent database operations. This constraint affects maximum concurrent user capacity and requires careful connection management. Exceeding connection pool capacity results in connection timeout errors (2-second timeout configured).


**Rate Limiting Constraints:**  
API rate limiting (100 requests per minute per IP) prevents excessive API usage but may impact legitimate high-frequency operations. Login rate limiting (5 attempts per 15 minutes) enhances security but may frustrate users with forgotten passwords. Rate limits are enforced per IP address, which may affect users behind shared NAT gateways or corporate proxies.

**Memory Constraints:**  
The system stores WebSocket connection mappings in server memory, consuming RAM proportional to concurrent user count. Large result sets from database queries are loaded entirely into memory before transmission, potentially causing memory pressure with extensive data retrieval. The system does not implement pagination for all list endpoints, potentially causing performance issues with large datasets.

#### 2.5.3 Security Constraints

**Authentication Mechanism:**  
JWT token-based authentication is stateless, preventing server-side token revocation without additional infrastructure (token blacklist). Token expiration is fixed at 1 hour, requiring users to re-authenticate frequently. The system does not implement refresh tokens, requiring complete re-authentication on token expiration. Token storage in browser localStorage is vulnerable to XSS attacks (HttpOnly cookies recommended for production but not implemented).

**Password Policy:**  
Minimum password length of 6 characters is relatively weak by modern standards but balances security with usability. The system does not enforce password complexity requirements (uppercase, lowercase, numbers, special characters). Password reset tokens expire after 15 minutes, which may be insufficient for users with email delivery delays.

**HTTPS Requirement:**  
The system requires HTTPS/TLS for production deployments to protect authentication tokens and sensitive data in transit. Development environments typically use HTTP, requiring configuration changes for production. SSL/TLS certificate management is external to the application, requiring separate infrastructure.

#### 2.5.4 Usability Constraints

**Web-Only Interface:**  
The system provides only web browser interface, lacking native mobile applications. Mobile access is limited to responsive web design, which may not provide optimal mobile user experience. The system does not support offline functionality, requiring continuous internet connectivity.


**Language Support:**  
The system currently implements English language interface only, lacking internationalization (i18n) support. Date and time formatting uses system defaults without user-configurable locale preferences. Currency display uses configured currency symbol without multi-currency support or exchange rate handling.

**Accessibility:**  
The system relies on Ant Design component library for accessibility features, which provides basic ARIA attributes and keyboard navigation. Custom components may not fully comply with WCAG 2.1 accessibility guidelines. The system does not provide screen reader optimization or high-contrast themes for visually impaired users.

#### 2.5.5 Integration Constraints

**Email Service Dependency:**  
Password reset functionality requires external SMTP email service configuration. The system does not include built-in email service, requiring third-party SMTP provider or self-hosted mail server. Email delivery reliability depends on external service availability and configuration correctness. The system does not implement email queuing or retry mechanisms for failed deliveries.

**External API Limitations:**  
The system does not currently integrate with external services (payroll systems, HR platforms, calendar services). Adding external integrations requires custom development and may introduce additional dependencies and failure points. The system lacks webhook support for external system notifications.

**Data Import/Export:**  
The system does not provide built-in data import functionality for migrating from existing systems. Data export is limited to database backup utilities without user-friendly export formats (CSV, Excel). Bulk operations require direct database access or custom scripting.

#### 2.5.6 Future Scalability Constraints

**Database Schema Evolution:**  
The database schema uses PostgreSQL ENUM types which are difficult to modify after creation (adding enum values requires ALTER TYPE). Schema migrations require careful planning and may necessitate downtime for structural changes. The system does not implement database migration framework (e.g., Knex.js migrations, Sequelize migrations).

**API Versioning:**  
The system does not implement API versioning, making backward-incompatible changes difficult without breaking existing clients. Future API changes may require careful deprecation strategies and client coordination.


**Monitoring and Observability:**  
The system implements basic HTTP logging with Morgan but lacks comprehensive application performance monitoring (APM). The system does not include built-in metrics collection, distributed tracing, or real-time alerting. Production monitoring requires integration with external monitoring services (e.g., New Relic, Datadog, Prometheus).

---

### 2.6 Data Flow Diagrams

#### 2.6.1 Level 0 Data Flow Diagram (Context Diagram)

The Level 0 DFD represents the Simple Workforce Manager system as a single process interacting with external entities.

**External Entities:**
1. Admin User - System administrator with full access privileges
2. Manager User - Operational coordinator with management capabilities
3. Staff User - Regular employee with limited access
4. Email System - External SMTP service for password reset emails
5. Database System - PostgreSQL database for data persistence

**Data Flows:**

From Admin User to System:
- Login credentials (username, password)
- Employee creation/modification/deletion requests
- System configuration changes
- User role assignments

From Manager User to System:
- Login credentials
- Task assignments and updates
- Attendance monitoring requests
- Complaint and feedback responses
- Report viewing requests

From Staff User to System:
- Login credentials
- Task status updates
- Attendance clock-in/clock-out
- Report submissions
- Complaint and feedback submissions
- Chat messages

From System to Admin User:
- Authentication tokens
- Employee lists and details
- System settings
- Comprehensive reports

From System to Manager User:
- Authentication tokens
- Task lists and assignments
- Attendance records
- Complaints and feedback
- Employee reports

From System to Staff User:
- Authentication tokens
- Assigned task lists
- Personal attendance history
- Allowance information
- Chat messages

From System to Email System:
- Password reset emails with tokens

From Email System to System:
- Email delivery status

From System to Database System:
- SQL queries (SELECT, INSERT, UPDATE, DELETE)
- Transaction commands (BEGIN, COMMIT, ROLLBACK)

From Database System to System:
- Query results
- Transaction confirmations
- Error messages


#### 2.6.2 Level 1 Data Flow Diagram

The Level 1 DFD decomposes the system into major functional modules.

**Processes:**

**Process 1.0: Authentication and Authorization**
- Inputs: Login credentials, password reset requests, authentication tokens
- Outputs: JWT tokens, authentication status, password reset emails
- Data Stores: Users table, Password reset tokens
- Description: Handles user authentication, token generation, password management, and role-based authorization

**Process 2.0: Employee Management**
- Inputs: Employee data (username, email, role, profile information), employee queries
- Outputs: Employee lists, employee details, operation confirmations
- Data Stores: Users table, User_profiles table
- Description: Manages employee lifecycle including creation, retrieval, update, and deletion operations

**Process 3.0: Task Management**
- Inputs: Task data (title, description, assignee, due date), task status updates
- Outputs: Task lists, task details, assignment notifications
- Data Stores: Tasks table
- Description: Handles task creation, assignment, tracking, and status management

**Process 4.0: Attendance Tracking**
- Inputs: Clock-in/clock-out requests, attendance queries
- Outputs: Attendance records, attendance history, work hour calculations
- Data Stores: Attendance table
- Description: Records and manages employee attendance with timestamp tracking

**Process 5.0: Real-Time Communication**
- Inputs: Chat messages, conversation management requests
- Outputs: Message delivery, conversation lists, message history
- Data Stores: Conversations table, Messages table
- Description: Facilitates real-time messaging between users via WebSocket

**Process 6.0: Complaint Management**
- Inputs: Complaint submissions, complaint replies, status updates
- Outputs: Complaint lists, complaint details with replies
- Data Stores: Complaints table, Complaint_replies table
- Description: Manages employee complaints with threaded reply system

**Process 7.0: Feedback Management**
- Inputs: Feedback submissions, management responses
- Outputs: Feedback lists, feedback with responses
- Data Stores: Feedback table
- Description: Handles employee feedback submission and management review

**Process 8.0: Allowance Management**
- Inputs: Allowance data (title, amount, frequency), allowance queries
- Outputs: Allowance lists, allowance details
- Data Stores: Allowances table
- Description: Tracks employee allowances with various frequency options

**Process 9.0: Report Submission**
- Inputs: Report submissions, report queries
- Outputs: Report lists, report details
- Data Stores: Reports table
- Description: Manages daily report submissions and retrieval

**Process 10.0: System Administration**
- Inputs: System configuration changes, monitoring requests
- Outputs: System settings, performance metrics, logs
- Data Stores: System_settings table, Application logs
- Description: Handles system configuration and monitoring


**Data Stores:**
- D1: Users - Stores user authentication and role information
- D2: User_profiles - Stores detailed employee profile information
- D3: Tasks - Stores task assignments and status
- D4: Attendance - Stores clock-in/clock-out records
- D5: Conversations - Stores chat conversation metadata
- D6: Messages - Stores individual chat messages
- D7: Complaints - Stores employee complaints
- D8: Complaint_replies - Stores replies to complaints
- D9: Feedback - Stores employee feedback
- D10: Allowances - Stores employee allowance records
- D11: Reports - Stores daily report submissions
- D12: System_settings - Stores system configuration parameters

#### 2.6.3 Level 2 Data Flow Diagram - Authentication Module (Process 1.0)

**Sub-Processes:**

**Process 1.1: User Login**
- Inputs: Username, password
- Processing Steps:
  1. Validate input fields presence
  2. Query Users table for username match
  3. Compare password with stored hash using BCrypt
  4. Apply rate limiting check (5 attempts per 15 minutes)
  5. Generate JWT token with user ID, role, and expiration
- Outputs: JWT authentication token or error message
- Data Stores: D1 (Users) - Read

**Process 1.2: Token Validation**
- Inputs: JWT token from Authorization header
- Processing Steps:
  1. Extract token from header
  2. Verify token signature using JWT_SECRET
  3. Check token expiration timestamp
  4. Extract user payload (ID, role)
  5. Attach user information to request
- Outputs: Validated user information or authentication error
- Data Stores: None (stateless validation)

**Process 1.3: Password Reset Request**
- Inputs: Email address
- Processing Steps:
  1. Validate email format
  2. Query Users table for email match
  3. Generate cryptographic random token
  4. Calculate expiration timestamp (15 minutes)
  5. Update Users table with token and expiration
  6. Send email via SMTP with reset link
- Outputs: Password reset email, generic confirmation message
- Data Stores: D1 (Users) - Read/Write
- External: Email System

**Process 1.4: Password Reset Execution**
- Inputs: Reset token, new password
- Processing Steps:
  1. Validate token and password presence
  2. Query Users table for valid token with future expiration
  3. Generate password hash using BCrypt
  4. Update Users table with new hash
  5. Clear reset token and expiration
  6. Set is_default_password flag to false
- Outputs: Success confirmation or error message
- Data Stores: D1 (Users) - Read/Write

**Process 1.5: Role-Based Authorization**
- Inputs: Validated user information, required roles
- Processing Steps:
  1. Extract user role from validated token
  2. Compare user role against required roles array
  3. Permit or deny access based on match
- Outputs: Authorization decision (permit/deny)
- Data Stores: None (uses token data)


#### 2.6.4 Level 2 Data Flow Diagram - Task Management Module (Process 3.0)

**Sub-Processes:**

**Process 3.1: Create Task**
- Inputs: Task title, description, assigned_to user_id, due_date, authenticated user (assigner)
- Processing Steps:
  1. Validate required fields (title, assigned_to)
  2. Verify assigned_to user exists in Users table
  3. Extract assigned_by from authentication token
  4. Insert task record with status 'pending'
  5. Record creation timestamp
- Outputs: Created task object with task_id
- Data Stores: D1 (Users) - Read, D3 (Tasks) - Write

**Process 3.2: Retrieve Tasks**
- Inputs: User authentication, optional filters (status, assignee, date range)
- Processing Steps:
  1. Determine user role from authentication
  2. If Staff: Query tasks where assigned_to = user_id
  3. If Manager/Admin: Query all tasks
  4. Apply filters if provided
  5. Join with Users table for assignee/assigner names
  6. Order by creation date descending
- Outputs: Array of task objects with user information
- Data Stores: D1 (Users) - Read, D3 (Tasks) - Read

**Process 3.3: Update Task (Manager)**
- Inputs: Task_id, updated fields (title, description, assigned_to, status, due_date), authenticated manager
- Processing Steps:
  1. Validate required fields and status enum value
  2. Verify manager role authorization
  3. Update task record in Tasks table
  4. Return updated task object
- Outputs: Updated task object or error message
- Data Stores: D3 (Tasks) - Read/Write

**Process 3.4: Update Task Status (Employee)**
- Inputs: Task_id, new status, authenticated employee
- Processing Steps:
  1. Validate status enum value
  2. Verify task is assigned to authenticated user
  3. Update only status field in Tasks table
  4. Prevent modification of other task attributes
- Outputs: Updated task object or permission denied error
- Data Stores: D3 (Tasks) - Read/Write

**Process 3.5: Delete Task**
- Inputs: Task_id, authenticated manager
- Processing Steps:
  1. Verify manager role authorization
  2. Retrieve task title for confirmation
  3. Delete task record from Tasks table
- Outputs: Deletion confirmation message
- Data Stores: D3 (Tasks) - Read/Delete

---

### 2.7 System Features


#### 2.7.1 User Authentication and Authorization

**Purpose:**  
The authentication and authorization feature provides secure access control to the workforce management system, ensuring that only authorized users can access the system and that users can only perform actions appropriate to their assigned roles.

**How It Works:**  
Users authenticate by providing username and password credentials. The system validates credentials against stored password hashes using BCrypt cryptographic hashing. Upon successful authentication, the system generates a JSON Web Token (JWT) containing the user's ID, role, and expiration timestamp. This token is returned to the client and included in subsequent requests via the Authorization header. The system validates tokens on each request, extracting user information and verifying the token signature and expiration. Role-based authorization middleware checks whether the authenticated user's role matches the required roles for specific endpoints, permitting or denying access accordingly.

**Who Uses It:**  
All system users (Admin, Manager, Staff) must authenticate to access the system. The authentication feature is universal, while authorization rules vary by role. Administrators have unrestricted access, Managers have operational access to workforce coordination features, and Staff have limited access to personal information and assigned tasks.

**Why It Is Necessary:**  
Authentication ensures that only legitimate users with valid credentials can access the system, protecting against unauthorized access. Authorization ensures that users can only perform actions appropriate to their organizational role, maintaining data security and operational integrity. The feature prevents data breaches, maintains audit trails of user actions, and ensures compliance with security best practices. Without authentication and authorization, the system would be vulnerable to unauthorized access, data manipulation, and security breaches.

#### 2.7.2 Employee and Workforce Management

**Purpose:**  
The employee management feature provides comprehensive lifecycle management of employee records, including creation, retrieval, modification, and deletion of employee accounts and profile information.

**How It Works:**  
Administrators create employee accounts by providing username, email, password, role assignment, and profile information (name, phone, gender, job title). The system generates password hashes and stores user credentials in the Users table while storing profile details in the User_profiles table. The system maintains referential integrity between these tables through foreign key constraints. Administrators and Managers can retrieve employee lists with filtering and search capabilities. Administrators can modify employee information through update operations that transactionally update both user credentials and profile data. Employee deletion cascades to related records (tasks, attendance, messages) maintaining database consistency.


**Who Uses It:**  
Administrators use this feature for complete employee lifecycle management including account creation, role assignment, and account deletion. Managers use read-only access to view employee information for operational coordination. Staff members have limited access to view their own profile information and update personal details through the profile management interface.

**Why It Is Necessary:**  
Centralized employee management eliminates manual record-keeping and ensures data consistency across the organization. The feature provides a single source of truth for employee information, enabling accurate task assignment, attendance tracking, and communication. Role-based access ensures that sensitive employee information is protected while allowing appropriate access for operational needs. Without this feature, organizations would struggle with fragmented employee data, inconsistent information, and difficulty coordinating workforce activities.

#### 2.7.3 Task Assignment and Tracking

**Purpose:**  
The task management feature enables systematic assignment, tracking, and completion monitoring of work assignments across the organization.

**How It Works:**  
Managers create tasks by specifying title, description, assignee, and optional due date. The system records the assigner's identity and sets initial status to 'pending'. Tasks are stored in the Tasks table with relationships to both assignee and assigner users. Employees view their assigned tasks through a personalized task list and update task status through three states: pending, in progress, and completed. Managers monitor all organizational tasks with filtering by status, assignee, and date range. The system maintains complete task history with creation timestamps and status change tracking. Managers can modify task details including reassignment and due date changes, while employees can only update status of their assigned tasks.

**Who Uses It:**  
Managers and Administrators use this feature to assign tasks, monitor progress, and coordinate work distribution. Staff members use the feature to view assigned tasks, understand requirements, and update completion status. The feature facilitates communication of work expectations and accountability for task completion.

**Why It Is Necessary:**  
Systematic task management eliminates ambiguity in work assignments and provides transparency in workload distribution. The feature enables managers to track progress, identify bottlenecks, and ensure timely task completion. Employees benefit from clear task specifications and due dates, reducing confusion and improving productivity. Without task management, organizations rely on informal communication methods that are prone to miscommunication, forgotten assignments, and lack of accountability. The feature provides audit trails for performance evaluation and workload analysis.


#### 2.7.4 Attendance Monitoring

**Purpose:**  
The attendance tracking feature provides automated recording and monitoring of employee work hours through clock-in and clock-out functionality.

**How It Works:**  
Employees initiate attendance recording by clicking the clock-in button, which records the current timestamp and date in the Attendance table. The system prevents duplicate clock-ins for the same date by checking for existing open attendance records. When employees complete their work shift, they click clock-out, which updates the attendance record with the exit timestamp. The system calculates work hours by computing the difference between clock-out and clock-in times. Employees view their personal attendance history with date filtering. Managers access comprehensive attendance reports for all employees with filtering by employee and date range. The system maintains complete attendance history for payroll processing and compliance reporting.

**Who Uses It:**  
All employees use the clock-in/clock-out functionality to record their work hours. Staff members view their personal attendance history for verification. Managers and Administrators access organization-wide attendance data for monitoring, payroll processing, and compliance reporting. HR personnel use attendance data for leave management and performance evaluation.

**Why It Is Necessary:**  
Automated attendance tracking eliminates manual timesheets and reduces errors in work hour recording. The feature provides accurate data for payroll calculation, ensuring employees are compensated correctly. Managers gain visibility into employee attendance patterns, enabling identification of tardiness, absenteeism, or overtime issues. The system creates audit trails for compliance with labor regulations and dispute resolution. Without automated attendance tracking, organizations face time-consuming manual processes, data entry errors, and difficulty in generating accurate payroll and compliance reports.

#### 2.7.5 Real-Time Communication

**Purpose:**  
The real-time communication feature enables instant messaging between employees, facilitating rapid information exchange and collaboration.

**How It Works:**  
The system establishes WebSocket connections between clients and server upon user authentication. Users search for colleagues and initiate conversations, which creates conversation records in the Conversations table. When a user sends a message, the system stores the message in the Messages table and immediately delivers it to the recipient's WebSocket connection if they are online. The system maintains conversation history with message timestamps and sender identification. Users can manage conversations by blocking/unblocking participants or clearing conversation history. The system handles offline message delivery by storing messages in the database for retrieval when recipients reconnect. Conversation status (active/blocked) controls message delivery permissions.


**Who Uses It:**  
All authenticated users can engage in real-time messaging with colleagues. The feature is particularly valuable for managers coordinating with team members, employees seeking clarification on tasks, and cross-functional collaboration. The feature supports both one-on-one conversations and provides message history for reference.

**Why It Is Necessary:**  
Integrated real-time communication eliminates reliance on external messaging platforms, keeping workforce coordination within the management system. Instant messaging enables rapid problem resolution, quick clarifications, and efficient coordination without email delays. The feature maintains conversation history for reference and accountability. Without integrated communication, employees must switch between multiple applications, leading to information fragmentation and reduced productivity. The feature enhances collaboration and reduces response times for time-sensitive coordination.

#### 2.7.6 Complaint and Feedback Management

**Purpose:**  
The complaint and feedback management features provide structured channels for employees to raise concerns and provide suggestions, with mechanisms for management review and response.

**How It Works:**  
Employees submit complaints or feedback through dedicated forms specifying title and detailed content. The system stores submissions in respective tables (Complaints or Feedback) with timestamps and submitter identification. Complaints support threaded replies, allowing managers to respond and engage in dialogue through the Complaint_replies table. Managers can update complaint status from 'open' to 'resolved' as issues are addressed. Feedback submissions support single management responses stored directly in the Feedback table with responder identification and timestamp. Both features maintain complete history of submissions and responses. Managers access comprehensive lists of all complaints and feedback with filtering by status and submitter. Employees view their personal submission history and management responses.

**Who Uses It:**  
All employees use these features to submit complaints about workplace issues or provide feedback on processes and improvements. Managers and Administrators review submissions, provide responses, and track resolution. HR personnel use complaint data for identifying systemic issues and improving workplace conditions. The features facilitate two-way communication between employees and management.

**Why It Is Necessary:**  
Structured complaint and feedback channels provide employees with formal mechanisms to raise concerns, improving workplace satisfaction and retention. The features enable management to identify and address issues proactively before they escalate. Documented complaint resolution provides legal protection and demonstrates organizational responsiveness. Feedback collection enables continuous improvement of processes and policies. Without these features, organizations lack visibility into employee concerns, miss improvement opportunities, and risk employee dissatisfaction. The features demonstrate organizational commitment to employee voice and engagement.


#### 2.7.7 Allowance Tracking

**Purpose:**  
The allowance management feature provides systematic tracking of employee allowances with various frequency options for different allowance types.

**How It Works:**  
Administrators and Managers create allowance records for employees specifying title, description, amount, and frequency (one-time, weekly, monthly, quarterly, annual). The system stores allowances in the Allowances table with relationships to employee records. Employees view their personal allowances through a read-only interface showing all allowance details. Managers access comprehensive allowance reports for all employees with filtering by employee and frequency. The system maintains allowance history with creation timestamps. Managers can modify allowance amounts or frequencies and delete obsolete allowances. The feature supports multiple concurrent allowances per employee for different allowance types (transportation, housing, meal, etc.).

**Who Uses It:**  
Administrators and Managers use this feature to create, modify, and track employee allowances. HR personnel use allowance data for payroll processing and compensation analysis. Employees view their personal allowances for financial planning and verification. Finance departments use allowance reports for budgeting and expense tracking.

**Why It Is Necessary:**  
Centralized allowance tracking ensures accurate and transparent compensation management. The feature eliminates manual spreadsheets and reduces errors in allowance calculation. Employees gain visibility into their complete compensation package beyond base salary. The system provides audit trails for compliance and financial reporting. Multiple frequency options accommodate diverse allowance types with different payment schedules. Without this feature, organizations struggle with fragmented allowance data, calculation errors, and lack of transparency in employee compensation.

#### 2.7.8 Report Submission and Management

**Purpose:**  
The report submission feature enables employees to submit daily or periodic reports documenting work activities, progress, and issues.

**How It Works:**  
Employees submit reports through a form interface specifying report title and detailed content. The system stores reports in the Reports table with timestamps and submitter identification. Employees view their personal report history in chronological order. Managers access comprehensive reports from all employees with filtering by employee and date range. The system supports report search functionality for locating specific reports by title or content keywords. Reports are immutable once submitted, maintaining data integrity and audit trails. The feature provides managers with visibility into employee activities and progress without requiring constant direct supervision.


**Who Uses It:**  
All employees submit reports documenting their work activities, accomplishments, and challenges. Managers review reports to monitor progress, identify issues, and provide guidance. The feature supports remote work scenarios where direct observation is not feasible. Project managers use reports for status tracking and documentation.

**Why It Is Necessary:**  
Systematic report submission provides documentation of work activities and progress, supporting performance evaluation and project tracking. The feature enables asynchronous communication of status updates without requiring meetings. Managers gain visibility into employee activities across distributed teams. Report history provides valuable documentation for project retrospectives and knowledge transfer. Without this feature, organizations lack systematic documentation of work activities, making progress tracking and performance evaluation difficult. The feature supports accountability and transparency in work execution.

---

### 2.8 System Flow

#### 2.8.1 User Authentication Flow

**Step 1: User Access**  
User navigates to the application URL using a web browser. The frontend application loads and detects absence of valid authentication token in browser localStorage. The system redirects user to the login page.

**Step 2: Credential Entry**  
User enters username and password in the login form. The frontend validates that both fields are populated before enabling the login button. User clicks the login button, triggering form submission.

**Step 3: Authentication Request**  
The frontend sends HTTP POST request to /api/auth/login endpoint with username and password in JSON request body. The request passes through rate limiting middleware which checks if the IP address has exceeded 5 login attempts in the past 15 minutes.

**Step 4: Credential Validation**  
The backend authentication handler receives the request and validates input fields. The system queries the Users table for a record matching the provided username. If no user found, the system returns 401 Unauthorized error. If user found, the system retrieves the stored password hash and compares it with the provided password using BCrypt.compare().

**Step 5: Token Generation**  
Upon successful password validation, the system creates a JWT payload containing user ID, role, and is_default_password flag. The system signs the payload using JWT_SECRET with 1-hour expiration. The system returns the generated token and success message to the frontend.


**Step 6: Token Storage and Redirection**  
The frontend receives the authentication token and stores it in browser localStorage. The frontend decodes the token to extract user role and default password status. If is_default_password is true, the system redirects to password reset page. Otherwise, the system redirects to the role-appropriate dashboard (Admin, Manager, or Staff dashboard).

**Step 7: Authenticated Requests**  
For subsequent API requests, the frontend includes the authentication token in the Authorization header as "Bearer <token>". The backend authenticateToken middleware intercepts requests, validates the token signature and expiration, and attaches user information to the request object. Protected endpoints proceed with user context available.

**Step 8: Token Expiration**  
When the token expires (after 1 hour), subsequent API requests return 401 Unauthorized errors. The frontend detects authentication failure, clears the stored token, and redirects the user to the login page to re-authenticate.

#### 2.8.2 Employee Management Flow

**Step 1: Access Employee Management**  
Administrator logs into the system and navigates to the Staff Management page from the sidebar menu. The frontend sends GET request to /api/staff endpoint with authentication token. The backend validates the token and verifies the user has Admin or Manager role.

**Step 2: Display Employee List**  
The backend queries the Users and User_profiles tables with a JOIN operation, filtering out admin users. The system retrieves user_id, username, email, role, first_name, last_name, phone_number, sex, and job_title for all employees. The backend returns the employee array to the frontend. The frontend renders the employee list in a table with columns for each attribute and action buttons.

**Step 3: Create New Employee**  
Administrator clicks "Add Employee" button, opening a modal form. Administrator fills in required fields: username, email, password, role, first_name, last_name, phone_number, sex, and optional job_title. The frontend validates all required fields are populated and email format is valid. Administrator clicks "Submit" button.

**Step 4: Employee Creation Processing**  
The frontend sends POST request to /api/staff with employee data in JSON body. The backend validates all required fields and checks username/email uniqueness. The system initiates a database transaction. The backend generates password hash using BCrypt with 10 salt rounds. The system inserts user record into Users table with is_default_password=true. The system inserts profile record into User_profiles table with the new user_id. The transaction commits if both inserts succeed, or rolls back if any failure occurs.


**Step 5: Confirmation and Refresh**  
Upon successful creation, the backend returns 201 Created status with success message. The frontend displays success notification, closes the modal form, and refreshes the employee list by re-fetching from /api/staff endpoint. The new employee appears in the table.

**Step 6: Update Employee**  
Administrator clicks "Edit" button for an employee, opening a modal form pre-populated with current employee data. Administrator modifies desired fields and clicks "Save". The frontend sends PUT request to /api/staff/:id with updated data. The backend validates data, initiates transaction, updates Users table, and upserts User_profiles table. Upon success, the frontend refreshes the employee list showing updated information.

**Step 7: Delete Employee**  
Administrator clicks "Delete" button for an employee. The frontend displays confirmation dialog. Upon confirmation, the frontend sends DELETE request to /api/staff/:id. The backend deletes the user record, which cascades to delete related records in other tables (tasks, attendance, messages, etc.). The frontend refreshes the employee list, and the deleted employee no longer appears.

#### 2.8.3 Task Assignment and Tracking Flow

**Step 1: Task Creation Initiation**  
Manager logs into the system and navigates to the Task Management page. Manager clicks "Create Task" button, opening a task creation form. The form includes fields for title, description, assignee (dropdown populated with employee list), and due date (date picker).

**Step 2: Assignee Selection**  
The frontend loads the employee list by sending GET request to /api/staff endpoint. The system populates the assignee dropdown with employee names and IDs. Manager selects the employee to whom the task will be assigned, enters task title and description, and optionally sets a due date.

**Step 3: Task Submission**  
Manager clicks "Create Task" button. The frontend validates that title and assignee are provided. The frontend sends POST request to /api/tasks with task data including title, description, assigned_to (user_id), and due_date. The backend validates the request and verifies the assigned_to user exists.

**Step 4: Task Record Creation**  
The backend extracts assigned_by (manager's user_id) from the authentication token. The system inserts a task record into the Tasks table with title, description, assigned_to, assigned_by, due_date, status (default: 'pending'), and created_at (current timestamp). The backend returns the created task object with generated task_id.


**Step 5: Task Notification**  
The frontend displays success notification to the manager. The system refreshes the task list showing the newly created task. The assigned employee will see the new task in their "My Tasks" view upon next page load or refresh.

**Step 6: Employee Task View**  
Employee logs into the system and navigates to "My Tasks" page. The frontend sends GET request to /api/tasks/mytasks with authentication token. The backend queries Tasks table filtered by assigned_to matching the employee's user_id. The system joins with Users table to retrieve assigner's username. The backend returns array of tasks assigned to the employee.

**Step 7: Task Status Update**  
Employee reviews task details and begins work. Employee changes task status dropdown from "Pending" to "In Progress" and clicks "Update Status". The frontend sends PATCH request to /api/tasks/:id/status with new status value. The backend validates the status enum value and verifies the task is assigned to the authenticated employee. The system updates only the status field in the Tasks table.

**Step 8: Task Completion**  
Upon completing the task, employee changes status to "Completed" and updates. The backend processes the status update as in Step 7. The manager viewing the task list sees the updated status in real-time upon page refresh. The completed task may be filtered or highlighted differently in the manager's view.

**Step 9: Manager Task Monitoring**  
Manager navigates to Task Management page to view all organizational tasks. The frontend sends GET request to /api/tasks endpoint. The backend queries all tasks with joins to Users table for both assignee and assigner information. The system returns comprehensive task list with employee names. Manager can filter by status, assignee, or date range to focus on specific tasks. Manager can modify task details or reassign tasks using the edit functionality.

#### 2.8.4 Attendance Tracking Flow

**Step 1: Clock-In Initiation**  
Employee logs into the system and views the dashboard containing the attendance widget. The widget displays current date, time, and attendance status (not clocked in). Employee clicks the "Clock In" button to start their work shift.

**Step 2: Clock-In Processing**  
The frontend sends POST request to /api/attendance/clockin with authentication token. The backend validates the token and extracts user_id. The system retrieves the current date and checks for existing open attendance record (clock_out_time is NULL) for the user and date. If open record exists, the system returns error "Already clocked in for today". If no open record, the system inserts attendance record with user_id, clock_in_time (current timestamp), attendance_date (current date), and clock_out_time (NULL).


**Step 3: Clock-In Confirmation**  
The backend returns the created attendance record with attendance_id and clock_in_time. The frontend updates the attendance widget to show "Clocked In" status with the clock-in time. The "Clock In" button is disabled and the "Clock Out" button is enabled. The employee can now proceed with their work activities.

**Step 4: Clock-Out Initiation**  
At the end of the work shift, employee returns to the dashboard and clicks the "Clock Out" button. The frontend sends POST request to /api/attendance/clockout with authentication token.

**Step 5: Clock-Out Processing**  
The backend validates the token and extracts user_id. The system queries for open attendance record (clock_out_time is NULL) for the user and current date. If no open record found, the system returns error "No active clock-in found for today". If open record found, the system updates the attendance record setting clock_out_time to current timestamp.

**Step 6: Clock-Out Confirmation**  
The backend returns the updated attendance record with both clock_in_time and clock_out_time. The frontend calculates work hours by computing the time difference. The attendance widget displays "Clocked Out" status with total hours worked. Both "Clock In" and "Clock Out" buttons are disabled until the next work day.

**Step 7: Attendance History View**  
Employee navigates to Attendance History page to view past attendance records. The frontend sends GET request to /api/attendance/history with optional date range parameters. The backend queries Attendance table filtered by user_id and date range. The system returns array of attendance records with dates, clock-in times, clock-out times, and calculated work hours. The frontend displays attendance history in a table format with date filtering options.

**Step 8: Manager Attendance Monitoring**  
Manager navigates to Attendance Management page to monitor employee attendance. The frontend sends GET request to /api/attendance/all with optional employee and date range filters. The backend queries Attendance table joined with Users and User_profiles tables. The system returns comprehensive attendance data for all employees or filtered subset. Manager can identify attendance patterns, tardiness, absenteeism, or overtime situations. The data supports payroll processing and performance evaluation.

#### 2.8.5 Real-Time Communication Flow

**Step 1: WebSocket Connection Establishment**  
Upon successful login, the frontend establishes WebSocket connection to the server using Socket.io client. The client emits "authenticate" event with the JWT authentication token. The backend Socket.io server receives the authenticate event and verifies the token using JWT.verify(). Upon successful verification, the server extracts user_id from the token and stores the mapping between user_id and socket_id in the userSocketMap. The WebSocket connection remains active for real-time communication.


**Step 2: User Search and Conversation Initiation**  
User navigates to the Chat page and uses the search functionality to find colleagues. The frontend sends GET request to /api/chat/users with optional search query. The backend queries Users and User_profiles tables, filtering by username or name matching the search string and excluding the authenticated user. The system returns array of users with user_id, username, and full name. User selects a colleague from the search results to initiate or continue a conversation.

**Step 3: Conversation History Retrieval**  
The frontend sends GET request to /api/chat/conversations/:id/messages to retrieve message history. The backend verifies the authenticated user is a participant in the conversation. The system queries Messages table filtered by conversation_id, ordered by sent_at ascending. The backend returns array of message objects with message_id, sender_id, content, and sent_at. The frontend displays the message history in chronological order with sender identification.

**Step 4: Message Composition and Sending**  
User types a message in the message input field and clicks "Send" or presses Enter. The frontend emits "send_message" WebSocket event with receiver_id and message content. The backend receives the event and retrieves sender_id from the socket authentication mapping. The system determines conversation participants as user1_id (minimum of sender and receiver IDs) and user2_id (maximum) for consistent conversation identification.

**Step 5: Conversation Management**  
The backend queries Conversations table for existing conversation between participants. If no conversation exists, the system creates new conversation record with user1_id, user2_id, and status 'active'. If conversation exists but status is 'blocked', the system returns error callback. If conversation is active, the system proceeds to message insertion.

**Step 6: Message Storage and Delivery**  
The backend inserts message record into Messages table with conversation_id, sender_id, content, and sent_at (current timestamp). The system retrieves the receiver's socket_id from userSocketMap. If receiver is online (socket_id exists), the server emits "receive_message" event to the receiver's socket with message payload and conversation information. The receiver's frontend immediately displays the new message in the chat interface. The backend returns success callback to the sender with message and conversation data.

**Step 7: Offline Message Handling**  
If the receiver is not online (no socket_id in userSocketMap), the message is still stored in the Messages table but not delivered in real-time. When the receiver logs in and establishes WebSocket connection, they retrieve message history through the conversation history endpoint (Step 3), which includes messages sent while they were offline.

**Step 8: Conversation Management Actions**  
User can block a conversation by clicking "Block" button. The frontend sends POST request to /api/chat/conversations/:id/block. The backend updates conversation status to 'blocked' and sets blocked_by to the authenticated user_id. Blocked conversations prevent message sending. User can unblock by similar process, setting status back to 'active'. User can clear conversation history, which sets user-specific cleared_at timestamp, filtering messages in future retrievals without deleting actual records.


#### 2.8.6 Complaint Submission and Resolution Flow

**Step 1: Complaint Submission**  
Employee navigates to the Complaints page and clicks "Submit Complaint" button. The frontend displays a form with fields for complaint title and detailed content. Employee fills in the title and describes the issue in detail. Employee clicks "Submit" button.

**Step 2: Complaint Processing**  
The frontend sends POST request to /api/complaints with title and content in JSON body. The backend validates both fields are present and non-empty. The system extracts user_id from authentication token. The backend inserts complaint record into Complaints table with user_id, title, content, status (default: 'open'), and submitted_at (current timestamp). The system returns the created complaint object with complaint_id.

**Step 3: Complaint Confirmation**  
The frontend displays success notification to the employee. The system redirects to the complaint history page showing all submitted complaints. The new complaint appears in the list with "Open" status badge.

**Step 4: Manager Complaint Review**  
Manager logs into the system and navigates to Complaints Management page. The frontend sends GET request to /api/complaints with optional status and employee filters. The backend queries Complaints table joined with Users and User_profiles tables. The system returns array of complaints with submitter information, ordered by submission date descending. Manager can filter to view only open complaints requiring attention.

**Step 5: Complaint Details and Reply**  
Manager clicks on a complaint to view full details. The frontend sends GET request to /api/complaints/:id. The backend retrieves complaint details and all associated replies from Complaint_replies table. The system returns complaint object with array of reply objects. The frontend displays the complaint content and threaded replies in chronological order.

**Step 6: Manager Response**  
Manager types a response in the reply input field and clicks "Submit Reply". The frontend sends POST request to /api/complaints/:id/replies with reply content. The backend validates content is present and verifies manager role authorization. The system inserts reply record into Complaint_replies table with complaint_id, user_id (manager), content, and replied_at (current timestamp). The backend returns the created reply object.

**Step 7: Status Update**  
After addressing the complaint, manager updates status to "Resolved". The frontend sends PATCH request to /api/complaints/:id/status with status value 'resolved'. The backend validates status enum value and updates the Complaints table. The complaint status badge changes to "Resolved" in the manager's view.

**Step 8: Employee Notification**  
Employee navigates to their complaint history and views the complaint details. The frontend retrieves the complaint with replies, showing the manager's response. Employee can see the complaint has been addressed and marked as resolved. If further discussion is needed, manager can add additional replies, creating a threaded conversation.


---

### 2.9 Use Cases

#### Use Case 1: User Login and Authentication

**Use Case ID:** UC-001  
**Use Case Name:** User Login and Authentication  
**Actors:** Admin, Manager, Staff (any system user)  
**Preconditions:**  
- User has valid account credentials (username and password)
- System is accessible via network
- Database is operational

**Postconditions:**  
- User is authenticated and receives JWT token
- User is redirected to role-appropriate dashboard
- Authentication token is stored in browser localStorage
- User session is active for 1 hour

**Basic Flow:**
1. User navigates to application URL in web browser
2. System displays login page with username and password fields
3. User enters username in username field
4. User enters password in password field
5. User clicks "Login" button
6. System validates input fields are not empty
7. System sends authentication request to backend API
8. Backend validates credentials against database
9. Backend generates JWT token with user information
10. System returns token to frontend
11. Frontend stores token in localStorage
12. System redirects user to dashboard based on role
13. User views personalized dashboard

**Alternative Flows:**

*Alternative Flow 3a: Invalid Credentials*
- 3a1. User enters incorrect username or password
- 3a2. System returns "Invalid credentials" error message
- 3a3. System displays error notification to user
- 3a4. User remains on login page
- 3a5. Use case returns to step 3 of basic flow

*Alternative Flow 3b: Rate Limit Exceeded*
- 3b1. User has attempted login 5 times in past 15 minutes
- 3b2. System blocks additional login attempts
- 3b3. System returns "Too many login attempts" error
- 3b4. User must wait 15 minutes before retrying
- 3b5. Use case ends

*Alternative Flow 3c: Default Password*
- 3c1. User successfully authenticates with default password
- 3c2. System detects is_default_password flag is true
- 3c3. System redirects to password reset page instead of dashboard
- 3c4. User must change password before accessing system
- 3c5. Use case continues to UC-002 (Password Reset)

**Exception Flows:**

*Exception Flow 1: Network Error*
- E1. Network connection fails during authentication request
- E2. System displays "Network error, please try again" message
- E3. Use case returns to step 3 of basic flow

*Exception Flow 2: Server Error*
- E2.1. Backend server encounters internal error
- E2.2. System returns 500 Internal Server Error
- E2.3. System displays "Server error, please contact administrator"
- E2.4. Use case ends

**Special Requirements:**
- Password must be transmitted over HTTPS in production
- Login attempts must be rate-limited to prevent brute force attacks
- Authentication token must expire after 1 hour
- System must log all authentication attempts for security audit


#### Use Case 2: Create New Employee Account

**Use Case ID:** UC-002  
**Use Case Name:** Create New Employee Account  
**Actors:** Admin (primary), Manager (view only)  
**Preconditions:**  
- Admin is authenticated and logged into system
- Admin has navigated to Staff Management page
- Database is operational

**Postconditions:**  
- New employee account is created in database
- Employee can log in with provided credentials
- Employee profile information is stored
- Employee appears in staff listing

**Basic Flow:**
1. Admin clicks "Add Employee" button on Staff Management page
2. System displays employee creation modal form
3. Admin enters username in username field
4. Admin enters email address in email field
5. Admin enters initial password in password field
6. Admin selects role from dropdown (Manager or Staff)
7. Admin enters first name in first name field
8. Admin enters last name in last name field
9. Admin enters phone number in phone number field
10. Admin selects gender from dropdown (Male, Female, Other)
11. Admin optionally enters job title in job title field
12. Admin clicks "Submit" button
13. System validates all required fields are populated
14. System sends employee creation request to backend
15. Backend validates data and checks uniqueness constraints
16. Backend generates password hash using BCrypt
17. Backend initiates database transaction
18. Backend inserts user record into Users table
19. Backend inserts profile record into User_profiles table
20. Backend commits transaction
21. System returns success response
22. Frontend displays success notification
23. System closes modal form
24. System refreshes employee list
25. New employee appears in staff listing

**Alternative Flows:**

*Alternative Flow 13a: Missing Required Fields*
- 13a1. User has not filled all required fields
- 13a2. System highlights missing fields in red
- 13a3. System displays "Please fill all required fields" message
- 13a4. Submit button remains disabled
- 13a5. Use case returns to step 3 of basic flow

*Alternative Flow 15a: Duplicate Username*
- 15a1. Provided username already exists in database
- 15a2. Backend returns 409 Conflict error
- 15a3. System displays "Username already exists" error
- 15a4. Admin remains on creation form
- 15a5. Use case returns to step 3 of basic flow

*Alternative Flow 15b: Duplicate Email*
- 15b1. Provided email already exists in database
- 15b2. Backend returns 409 Conflict error
- 15b3. System displays "Email already exists" error
- 15b4. Use case returns to step 4 of basic flow

*Alternative Flow 15c: Duplicate Phone Number*
- 15c1. Provided phone number already exists in database
- 15c2. Backend returns 409 Conflict error
- 15c3. System displays "Phone number already exists" error
- 15c4. Use case returns to step 9 of basic flow

**Exception Flows:**

*Exception Flow 1: Database Transaction Failure*
- E1.1. Database transaction fails during user or profile insertion
- E1.2. Backend rolls back transaction
- E1.3. System returns 500 Internal Server Error
- E1.4. Frontend displays "Failed to create employee" error
- E1.5. No partial data is saved
- E1.6. Use case returns to step 3 of basic flow

*Exception Flow 2: Network Timeout*
- E2.1. Network request times out before completion
- E2.2. System displays "Request timeout, please try again"
- E2.3. Use case returns to step 13 of basic flow

**Special Requirements:**
- Password must be hashed using BCrypt with 10 salt rounds
- New employee account must have is_default_password flag set to true
- Username must be unique across all users
- Email must be valid format and unique
- Phone number must be unique
- Transaction must be atomic (both user and profile created or neither)
- Admin role cannot be assigned through this interface


#### Use Case 3: Assign Task to Employee

**Use Case ID:** UC-003  
**Use Case Name:** Assign Task to Employee  
**Actors:** Manager (primary), Admin (secondary)  
**Preconditions:**  
- Manager is authenticated and logged into system
- At least one employee exists in the system
- Manager has navigated to Task Management page

**Postconditions:**  
- New task is created and assigned to employee
- Task appears in manager's task list
- Task appears in assigned employee's "My Tasks" list
- Task status is set to "Pending"

**Basic Flow:**
1. Manager clicks "Create Task" button on Task Management page
2. System displays task creation form
3. System loads employee list for assignee dropdown
4. Manager enters task title in title field
5. Manager enters task description in description field
6. Manager selects employee from assignee dropdown
7. Manager optionally selects due date using date picker
8. Manager clicks "Create Task" button
9. System validates title and assignee are provided
10. System sends task creation request to backend
11. Backend validates assigned employee exists
12. Backend extracts manager's user_id as assigned_by
13. Backend inserts task record with status 'pending'
14. Backend returns created task object
15. Frontend displays success notification
16. System refreshes task list
17. New task appears in manager's task list

**Alternative Flows:**

*Alternative Flow 9a: Missing Required Fields*
- 9a1. Title or assignee is not provided
- 9a2. System displays "Title and assignee are required" error
- 9a3. Use case returns to step 4 of basic flow

*Alternative Flow 11a: Invalid Assignee*
- 11a1. Selected employee no longer exists in database
- 11a2. Backend returns 404 Not Found error
- 11a3. System displays "Assigned user not found" error
- 11a4. Use case returns to step 6 of basic flow

**Exception Flows:**

*Exception Flow 1: Database Error*
- E1.1. Database fails to insert task record
- E1.2. Backend returns 500 Internal Server Error
- E1.3. System displays "Failed to create task" error
- E1.4. Use case returns to step 4 of basic flow

**Special Requirements:**
- Task must be assigned to valid employee (not admin)
- Assigner (manager) must be recorded automatically
- Creation timestamp must be recorded automatically
- Default status must be 'pending'
- Due date is optional but must be future date if provided


#### Use Case 4: Employee Clock In/Out for Attendance

**Use Case ID:** UC-004  
**Use Case Name:** Employee Clock In and Clock Out for Attendance  
**Actors:** Staff, Manager, Admin (any authenticated user)  
**Preconditions:**  
- Employee is authenticated and logged into system
- Employee is viewing dashboard with attendance widget
- Current date and time are displayed

**Postconditions:**  
- Attendance record is created or updated in database
- Clock-in or clock-out time is recorded
- Attendance widget reflects current status
- Work hours are calculated (for clock-out)

**Basic Flow (Clock-In):**
1. Employee views dashboard with attendance widget
2. Widget displays "Not Clocked In" status
3. Widget shows current date and time
4. Employee clicks "Clock In" button
5. System sends clock-in request to backend
6. Backend validates authentication token
7. Backend checks for existing open attendance record for today
8. No open record found
9. Backend inserts attendance record with current timestamp
10. Backend returns created attendance record
11. Frontend updates widget to show "Clocked In" status
12. Widget displays clock-in time
13. "Clock In" button is disabled
14. "Clock Out" button is enabled

**Basic Flow (Clock-Out):**
15. At end of work shift, employee views dashboard
16. Widget displays "Clocked In" status with clock-in time
17. Employee clicks "Clock Out" button
18. System sends clock-out request to backend
19. Backend validates authentication token
20. Backend queries for open attendance record for today
21. Open record is found
22. Backend updates record with clock-out timestamp
23. Backend returns updated attendance record
24. Frontend calculates work hours (clock-out minus clock-in)
25. Widget displays "Clocked Out" status
26. Widget shows total hours worked
27. Both buttons are disabled

**Alternative Flows:**

*Alternative Flow 7a: Already Clocked In*
- 7a1. Open attendance record exists for today
- 7a2. Backend returns 400 Bad Request error
- 7a3. System displays "Already clocked in for today" message
- 7a4. Use case ends

*Alternative Flow 20a: No Active Clock-In*
- 20a1. No open attendance record found for today
- 20a2. Backend returns 400 Bad Request error
- 20a3. System displays "No active clock-in found for today" message
- 20a4. Use case ends

**Exception Flows:**

*Exception Flow 1: Database Error*
- E1.1. Database operation fails
- E1.2. Backend returns 500 Internal Server Error
- E1.3. System displays "Attendance recording failed" error
- E1.4. Use case ends

**Special Requirements:**
- Clock-in and clock-out must record precise timestamps
- Only one open attendance record allowed per employee per day
- Work hours calculation must be accurate to minutes
- Attendance records must be immutable after creation
- System must prevent duplicate clock-ins
- System must prevent clock-out without prior clock-in


#### Use Case 5: Send Real-Time Chat Message

**Use Case ID:** UC-005  
**Use Case Name:** Send Real-Time Chat Message  
**Actors:** Staff, Manager, Admin (any authenticated user)  
**Preconditions:**  
- User is authenticated and logged into system
- WebSocket connection is established
- User has navigated to Chat page
- User has selected or initiated conversation with another user

**Postconditions:**  
- Message is stored in database
- Message is delivered to recipient in real-time (if online)
- Message appears in sender's conversation view
- Message appears in recipient's conversation view
- Conversation timestamp is updated

**Basic Flow:**
1. User navigates to Chat page
2. System establishes WebSocket connection
3. Frontend emits "authenticate" event with JWT token
4. Backend validates token and stores user-socket mapping
5. User searches for colleague or selects existing conversation
6. System loads conversation history
7. User types message in message input field
8. User clicks "Send" button or presses Enter
9. Frontend emits "send_message" WebSocket event with receiver_id and content
10. Backend receives event and retrieves sender_id from socket mapping
11. Backend determines conversation participants (user1_id, user2_id)
12. Backend queries for existing conversation
13. Conversation exists with status 'active'
14. Backend inserts message record with conversation_id, sender_id, content, timestamp
15. Backend retrieves receiver's socket_id from mapping
16. Receiver is online (socket_id exists)
17. Backend emits "receive_message" event to receiver's socket
18. Receiver's frontend displays message immediately
19. Backend returns success callback to sender
20. Sender's frontend displays message in conversation view

**Alternative Flows:**

*Alternative Flow 12a: No Existing Conversation*
- 12a1. No conversation exists between participants
- 12a2. Backend creates new conversation record with status 'active'
- 12a3. Use case continues at step 14 of basic flow

*Alternative Flow 13a: Blocked Conversation*
- 13a1. Conversation exists but status is 'blocked'
- 13a2. Backend returns error callback "This conversation is blocked"
- 13a3. Frontend displays error notification
- 13a4. Message is not sent
- 13a5. Use case ends

*Alternative Flow 16a: Receiver Offline*
- 16a1. Receiver's socket_id not found in mapping
- 16a2. Backend skips real-time delivery
- 16a3. Message is stored in database
- 16a4. Backend returns success callback to sender
- 16a5. Receiver will see message when they log in and load conversation
- 16a6. Use case continues at step 20 of basic flow

**Exception Flows:**

*Exception Flow 1: WebSocket Disconnection*
- E1.1. WebSocket connection drops during message send
- E1.2. Frontend detects disconnection
- E1.3. System attempts automatic reconnection
- E1.4. Upon reconnection, user can retry message send
- E1.5. Use case returns to step 7 of basic flow

*Exception Flow 2: Database Error*
- E2.1. Database fails to insert message record
- E2.2. Backend returns error callback
- E2.3. Frontend displays "Failed to send message" error
- E2.4. Use case returns to step 7 of basic flow

**Special Requirements:**
- Message delivery latency must be under 200 milliseconds
- Messages must be stored persistently even if recipient is offline
- WebSocket must automatically reconnect on connection loss
- Conversation participants must be consistently identified (user1_id < user2_id)
- Blocked conversations must prevent message sending
- Message timestamps must be server-generated for consistency


#### Use Case 6: Generate Employee Attendance Report

**Use Case ID:** UC-006  
**Use Case Name:** Generate Employee Attendance Report  
**Actors:** Manager (primary), Admin (secondary)  
**Preconditions:**  
- Manager is authenticated and logged into system
- Attendance records exist in database
- Manager has navigated to Attendance Management page

**Postconditions:**  
- Attendance report is generated and displayed
- Report shows attendance records for specified criteria
- Work hours are calculated for each record
- Report can be filtered by employee and date range

**Basic Flow:**
1. Manager navigates to Attendance Management page
2. System displays attendance report interface
3. Manager optionally selects employee from dropdown filter
4. Manager optionally selects start date using date picker
5. Manager optionally selects end date using date picker
6. Manager clicks "Generate Report" or "Apply Filters" button
7. System sends attendance query request to backend with filters
8. Backend validates authentication and manager role
9. Backend queries Attendance table joined with Users and User_profiles
10. Backend applies employee filter if provided
11. Backend applies date range filter if provided
12. Backend retrieves attendance records with employee information
13. Backend calculates work hours for each record (clock_out - clock_in)
14. Backend orders results by date descending
15. Backend returns attendance report data
16. Frontend displays report in table format
17. Table shows columns: Employee Name, Date, Clock-In Time, Clock-Out Time, Hours Worked
18. Manager reviews attendance patterns and identifies issues

**Alternative Flows:**

*Alternative Flow 3a: View All Employees*
- 3a1. Manager does not select specific employee
- 3a2. System includes all employees in report
- 3a3. Use case continues at step 4 of basic flow

*Alternative Flow 4a: No Date Range*
- 4a1. Manager does not specify date range
- 4a2. System includes all historical attendance records
- 4a3. Use case continues at step 7 of basic flow

*Alternative Flow 12a: No Records Found*
- 12a1. No attendance records match specified criteria
- 12a2. Backend returns empty array
- 12a3. Frontend displays "No attendance records found" message
- 12a4. Use case ends

**Exception Flows:**

*Exception Flow 1: Database Query Error*
- E1.1. Database query fails due to connection or syntax error
- E1.2. Backend returns 500 Internal Server Error
- E1.3. Frontend displays "Failed to generate report" error
- E1.4. Use case returns to step 3 of basic flow

**Special Requirements:**
- Report must include only employees within manager's scope (if applicable)
- Work hours calculation must handle incomplete records (no clock-out)
- Report must support export to CSV or Excel format (future enhancement)
- Large result sets should be paginated for performance
- Report generation should complete within 3 seconds for typical queries

---

## 3. ESTIMATION

### 3.1 Function Point Analysis

Function Point (FP) estimation provides a quantitative measure of system functionality based on user requirements. The Simple Workforce Manager system is analyzed using the IFPUG (International Function Point Users Group) methodology.


#### 3.1.1 External Inputs (EI)

External Inputs represent data or control information provided by the user to add, delete, or change data.

| Function | Complexity | Count | Weight | FP |
|----------|-----------|-------|--------|-----|
| User Login | Simple | 1 | 3 | 3 |
| Password Reset Request | Simple | 1 | 3 | 3 |
| Password Reset Execution | Simple | 1 | 3 | 3 |
| Create Employee | Average | 1 | 4 | 4 |
| Update Employee | Average | 1 | 4 | 4 |
| Delete Employee | Simple | 1 | 3 | 3 |
| Create Task | Average | 1 | 4 | 4 |
| Update Task | Average | 1 | 4 | 4 |
| Update Task Status | Simple | 1 | 3 | 3 |
| Delete Task | Simple | 1 | 3 | 3 |
| Clock In | Simple | 1 | 3 | 3 |
| Clock Out | Simple | 1 | 3 | 3 |
| Send Chat Message | Simple | 1 | 3 | 3 |
| Block/Unblock Conversation | Simple | 1 | 3 | 3 |
| Submit Complaint | Simple | 1 | 3 | 3 |
| Add Complaint Reply | Simple | 1 | 3 | 3 |
| Update Complaint Status | Simple | 1 | 3 | 3 |
| Submit Feedback | Simple | 1 | 3 | 3 |
| Reply to Feedback | Simple | 1 | 3 | 3 |
| Create Allowance | Average | 1 | 4 | 4 |
| Update Allowance | Average | 1 | 4 | 4 |
| Delete Allowance | Simple | 1 | 3 | 3 |
| Submit Report | Simple | 1 | 3 | 3 |
| Update System Settings | Average | 1 | 4 | 4 |
| **Total EI** | | **24** | | **76** |

#### 3.1.2 External Outputs (EO)

External Outputs represent data or control information sent to the user, typically involving calculations or derived data.

| Function | Complexity | Count | Weight | FP |
|----------|-----------|-------|--------|-----|
| Generate Attendance Report | Average | 1 | 5 | 5 |
| Calculate Work Hours | Simple | 1 | 4 | 4 |
| Task Statistics Dashboard | Average | 1 | 5 | 5 |
| Attendance Summary | Average | 1 | 5 | 5 |
| **Total EO** | | **4** | | **19** |

#### 3.1.3 External Queries (EQ)

External Queries represent input-output combinations that result in data retrieval without significant processing.

| Function | Complexity | Count | Weight | FP |
|----------|-----------|-------|--------|-----|
| Retrieve All Employees | Simple | 1 | 3 | 3 |
| Retrieve Single Employee | Simple | 1 | 3 | 3 |
| Retrieve All Tasks | Average | 1 | 4 | 4 |
| Retrieve User's Tasks | Simple | 1 | 3 | 3 |
| Retrieve Attendance History | Simple | 1 | 3 | 3 |
| Retrieve All Attendance | Average | 1 | 4 | 4 |
| Retrieve Conversations | Simple | 1 | 3 | 3 |
| Retrieve Conversation Messages | Simple | 1 | 3 | 3 |
| Search Users for Chat | Simple | 1 | 3 | 3 |
| Retrieve User's Complaints | Simple | 1 | 3 | 3 |
| Retrieve All Complaints | Average | 1 | 4 | 4 |
| Retrieve Complaint Details | Simple | 1 | 3 | 3 |
| Retrieve User's Feedback | Simple | 1 | 3 | 3 |
| Retrieve All Feedback | Average | 1 | 4 | 4 |
| Retrieve User's Allowances | Simple | 1 | 3 | 3 |
| Retrieve All Allowances | Average | 1 | 4 | 4 |
| Retrieve User's Reports | Simple | 1 | 3 | 3 |
| Retrieve All Reports | Average | 1 | 4 | 4 |
| Search Reports | Average | 1 | 4 | 4 |
| Retrieve System Settings | Simple | 1 | 3 | 3 |
| **Total EQ** | | **20** | | **66** |


#### 3.1.4 Internal Logical Files (ILF)

Internal Logical Files represent data stored and maintained within the application.

| File | Complexity | Count | Weight | FP |
|------|-----------|-------|--------|-----|
| Users | Average | 1 | 10 | 10 |
| User_profiles | Average | 1 | 10 | 10 |
| Tasks | Simple | 1 | 7 | 7 |
| Attendance | Simple | 1 | 7 | 7 |
| Conversations | Simple | 1 | 7 | 7 |
| Messages | Simple | 1 | 7 | 7 |
| Complaints | Simple | 1 | 7 | 7 |
| Complaint_replies | Simple | 1 | 7 | 7 |
| Feedback | Simple | 1 | 7 | 7 |
| Allowances | Simple | 1 | 7 | 7 |
| Reports | Simple | 1 | 7 | 7 |
| System_settings | Simple | 1 | 7 | 7 |
| **Total ILF** | | **12** | | **90** |

#### 3.1.5 External Interface Files (EIF)

External Interface Files represent data referenced from external systems.

| File | Complexity | Count | Weight | FP |
|------|-----------|-------|--------|-----|
| SMTP Email Service | Simple | 1 | 5 | 5 |
| **Total EIF** | | **1** | | **5** |

#### 3.1.6 Unadjusted Function Points (UFP)

| Component | Count | Total FP |
|-----------|-------|----------|
| External Inputs (EI) | 24 | 76 |
| External Outputs (EO) | 4 | 19 |
| External Queries (EQ) | 20 | 66 |
| Internal Logical Files (ILF) | 12 | 90 |
| External Interface Files (EIF) | 1 | 5 |
| **Unadjusted Function Points (UFP)** | | **256** |

#### 3.1.7 General System Characteristics (GSC)

The Value Adjustment Factor (VAF) is calculated based on 14 General System Characteristics, each rated from 0 (no influence) to 5 (strong influence).

| # | Characteristic | Rating | Justification |
|---|----------------|--------|---------------|
| 1 | Data Communications | 4 | Real-time WebSocket communication, RESTful APIs |
| 2 | Distributed Data Processing | 2 | Client-server architecture, single database |
| 3 | Performance | 4 | Response time requirements, database indexing |
| 4 | Heavily Used Configuration | 3 | Moderate concurrent user load (100 users) |
| 5 | Transaction Rate | 3 | Moderate transaction volume |
| 6 | Online Data Entry | 5 | All data entry through web interface |
| 7 | End-User Efficiency | 4 | Responsive UI, real-time updates, intuitive design |
| 8 | Online Update | 5 | All CRUD operations performed online |
| 9 | Complex Processing | 2 | Moderate business logic complexity |
| 10 | Reusability | 3 | Modular architecture, reusable components |
| 11 | Installation Ease | 2 | Requires technical setup (Node.js, PostgreSQL) |
| 12 | Operational Ease | 3 | Process monitoring, logging, error handling |
| 13 | Multiple Sites | 2 | Designed for single deployment, scalable |
| 14 | Facilitate Change | 4 | Modular design, clear separation of concerns |
| **Total Degree of Influence (TDI)** | | **46** | |

**Value Adjustment Factor (VAF) = 0.65 + (0.01 × TDI) = 0.65 + (0.01 × 46) = 1.11**

#### 3.1.8 Adjusted Function Points (AFP)

**AFP = UFP × VAF = 256 × 1.11 = 284.16 ≈ 284 Function Points**

#### 3.1.9 Effort Estimation

Using industry-standard productivity rates:
- Average productivity: 10-15 FP per person-month
- Using 12 FP per person-month (moderate complexity)

**Estimated Effort = AFP / Productivity = 284 / 12 = 23.67 ≈ 24 person-months**

For a team of 4 developers:
**Project Duration = 24 / 4 = 6 months**

---

## 4. SCHEDULING

### 4.1 Project Schedule Overview

The Simple Workforce Manager project follows a phased development approach with the following schedule:


### 4.2 Development Phases and Timeline

**Phase 1: Requirement Analysis and Planning (Weeks 1-2, 2 weeks)**
- Stakeholder interviews and requirement gathering
- Use case development and validation
- SRS document preparation
- Technology stack selection and justification
- Project plan and schedule development
- Risk identification and mitigation planning
- **Deliverables:** SRS document, Project plan, Risk register
- **Team:** Full team (4 members)

**Phase 2: System Design (Weeks 3-5, 3 weeks)**
- Database schema design with entity-relationship modeling
- API endpoint specification and documentation
- User interface wireframe and mockup creation
- System architecture design (client-server, three-tier)
- Security mechanism design (authentication, authorization)
- Real-time communication architecture (WebSocket)
- **Deliverables:** Database schema, API documentation, UI/UX designs, Architecture diagrams
- **Team:** 2 backend developers, 1 frontend developer, 1 architect

**Phase 3: Development Setup and Infrastructure (Week 6, 1 week)**
- Development environment configuration
- Version control repository setup (Git)
- Database installation and configuration (PostgreSQL)
- Node.js and npm environment setup
- React development environment setup
- CI/CD pipeline configuration (optional)
- **Deliverables:** Configured development environments, Repository structure
- **Team:** Full team (4 members)

**Phase 4: Backend Development (Weeks 7-14, 8 weeks)**
- Database schema implementation and migration scripts
- Authentication module (login, password reset, JWT)
- Employee management module (CRUD operations)
- Task management module (assignment, tracking, status)
- Attendance tracking module (clock-in/clock-out)
- Real-time communication module (WebSocket, Socket.io)
- Complaint management module (submission, replies, status)
- Feedback management module (submission, responses)
- Allowance management module (CRUD operations)
- Report submission module (submission, retrieval)
- System administration module (settings, monitoring)
- API testing and documentation
- **Deliverables:** Functional backend API, API documentation, Unit tests
- **Team:** 2 backend developers

**Phase 5: Frontend Development (Weeks 9-16, 8 weeks, parallel with backend)**
- React application structure and routing setup
- Authentication UI (login, password reset)
- Dashboard components (role-specific dashboards)
- Employee management UI (list, create, edit, delete)
- Task management UI (list, create, edit, status update)
- Attendance UI (clock-in/out widget, history)
- Real-time chat UI (conversation list, message view, send)
- Complaint management UI (submission, viewing, replies)
- Feedback management UI (submission, viewing, responses)
- Allowance management UI (list, viewing)
- Report submission UI (submission, viewing)
- System settings UI (configuration)
- Responsive design implementation
- **Deliverables:** Functional frontend application, UI components, Integration tests
- **Team:** 2 frontend developers

**Phase 6: Integration and System Testing (Weeks 17-19, 3 weeks)**
- Frontend-backend integration
- End-to-end workflow testing
- Cross-browser compatibility testing
- Responsive design testing (mobile, tablet, desktop)
- Performance testing (load testing, stress testing)
- Security testing (penetration testing, vulnerability assessment)
- Usability testing with stakeholders
- Bug fixing and refinement
- **Deliverables:** Integrated system, Test reports, Bug fix documentation
- **Team:** Full team (4 members)

**Phase 7: Documentation and Training (Weeks 20-21, 2 weeks)**
- User manual preparation
- Administrator guide preparation
- API documentation finalization
- Installation and deployment guide
- Training material development
- User training sessions
- **Deliverables:** User documentation, Training materials, Deployment guide
- **Team:** 2 team members, 2 continue bug fixes

**Phase 8: Deployment and Handover (Weeks 22-24, 3 weeks)**
- Production environment setup
- Database migration and seeding
- Application deployment
- SSL/TLS certificate installation
- Performance monitoring setup
- User acceptance testing in production
- System handover to operations team
- Post-deployment support
- **Deliverables:** Deployed production system, Handover documentation
- **Team:** Full team (4 members)

### 4.3 Total Project Duration

**Total Duration:** 24 weeks (6 months)  
**Team Size:** 4 developers (2 backend, 2 frontend)  
**Total Effort:** 24 person-months

### 4.4 Critical Path and Dependencies

**Critical Dependencies:**
- Backend API development must precede frontend integration
- Database schema must be finalized before backend development
- Authentication module must be completed before other modules
- System testing depends on completion of both frontend and backend
- Deployment depends on completion of testing and documentation

**Parallel Activities:**
- Frontend and backend development occur simultaneously (Weeks 9-14)
- Documentation can begin during testing phase
- Training material preparation can overlap with final testing

---

## 5. RISK MANAGEMENT

### 5.1 Technical Risks

**Risk 5.1.1: Database Performance Degradation**  
*Description:* As data volume grows, database queries may slow down, affecting system responsiveness.  
*Likelihood:* Medium  
*Impact:* High  
*Mitigation Strategies:*
- Implement comprehensive database indexing (29 indexes already implemented)
- Regular database maintenance (VACUUM, ANALYZE)
- Query optimization and execution plan analysis
- Connection pooling to manage database connections efficiently
- Consider database partitioning for large tables
- Monitor query performance and optimize slow queries
- Implement caching layer (Redis) for frequently accessed data


**Risk 5.1.2: WebSocket Connection Instability**  
*Description:* WebSocket connections may drop due to network issues, affecting real-time communication.  
*Likelihood:* Medium  
*Impact:* Medium  
*Mitigation Strategies:*
- Implement automatic reconnection with exponential backoff
- Provide fallback to HTTP long-polling if WebSocket unavailable
- Display connection status to users
- Queue messages during disconnection for retry
- Implement heartbeat mechanism to detect connection health
- Test WebSocket stability across different network conditions

**Risk 5.1.3: Security Vulnerabilities**  
*Description:* System may be vulnerable to SQL injection, XSS, CSRF, or authentication bypass attacks.  
*Likelihood:* Medium  
*Impact:* Critical  
*Mitigation Strategies:*
- Use parameterized queries exclusively to prevent SQL injection
- Implement input validation and sanitization
- Use BCrypt for password hashing with appropriate salt rounds
- Implement JWT token expiration and validation
- Apply rate limiting to prevent brute force attacks
- Conduct regular security audits and penetration testing
- Keep dependencies updated to patch known vulnerabilities
- Implement HTTPS/TLS for all production communications
- Use security headers (CSP, X-Frame-Options, etc.)

**Risk 5.1.4: Scalability Limitations**  
*Description:* Current single-server architecture may not scale to support growing user base.  
*Likelihood:* Medium  
*Impact:* High  
*Mitigation Strategies:*
- Design with horizontal scalability in mind
- Implement Redis adapter for Socket.io to support multi-server WebSocket
- Use load balancer for distributing traffic across multiple servers
- Implement database read replicas for query distribution
- Monitor system performance and capacity metrics
- Plan for infrastructure upgrades based on growth projections
- Consider microservices architecture for future expansion

### 5.2 Operational Risks

**Risk 5.2.1: Data Loss or Corruption**  
*Description:* Hardware failure, software bugs, or human error may result in data loss or corruption.  
*Likelihood:* Low  
*Impact:* Critical  
*Mitigation Strategies:*
- Implement daily automated database backups
- Store backups in separate physical location or cloud storage
- Test backup restoration procedures regularly
- Implement database transaction management for data consistency
- Use database constraints and validation to prevent invalid data
- Implement audit logging for critical data changes
- Maintain backup retention policy (minimum 30 days)

**Risk 5.2.2: System Downtime**  
*Description:* Server failures, network outages, or maintenance may cause system unavailability.  
*Likelihood:* Medium  
*Impact:* High  
*Mitigation Strategies:*
- Implement process monitoring with automatic restart (PM2)
- Use redundant server infrastructure (active-passive or active-active)
- Schedule maintenance during off-peak hours
- Implement health checks and monitoring alerts
- Maintain disaster recovery plan with documented procedures
- Use UPS for power failure protection
- Implement graceful degradation for partial failures

**Risk 5.2.3: Insufficient User Training**  
*Description:* Users may not understand system functionality, leading to underutilization or errors.  
*Likelihood:* High  
*Impact:* Medium  
*Mitigation Strategies:*
- Develop comprehensive user documentation and manuals
- Conduct hands-on training sessions for all user roles
- Create video tutorials for common workflows
- Implement intuitive UI with clear labels and help text
- Provide ongoing support during initial deployment period
- Establish help desk or support channel for user questions
- Gather user feedback and address usability issues

### 5.3 Project Management Risks

**Risk 5.3.1: Schedule Delays**  
*Description:* Development may take longer than estimated, delaying project delivery.  
*Likelihood:* Medium  
*Impact:* Medium  
*Mitigation Strategies:*
- Build buffer time into schedule (20% contingency)
- Track progress against milestones weekly
- Identify and address blockers promptly
- Prioritize features using MoSCoW method (Must, Should, Could, Won't)
- Consider phased delivery with MVP first
- Maintain clear communication with stakeholders about progress
- Adjust scope or resources if delays occur

**Risk 5.3.2: Resource Unavailability**  
*Description:* Key team members may become unavailable due to illness, resignation, or competing priorities.  
*Likelihood:* Low  
*Impact:* High  
*Mitigation Strategies:*
- Cross-train team members on multiple components
- Maintain comprehensive code documentation
- Use version control with clear commit messages
- Conduct regular knowledge sharing sessions
- Maintain backup resources or contractors
- Document critical processes and procedures
- Implement pair programming for knowledge distribution

**Risk 5.3.3: Scope Creep**  
*Description:* Stakeholders may request additional features beyond original requirements, expanding scope.  
*Likelihood:* High  
*Impact:* Medium  
*Mitigation Strategies:*
- Establish clear requirements baseline in SRS
- Implement formal change request process
- Assess impact of changes on schedule and budget
- Prioritize changes and defer non-critical features to future releases
- Maintain regular communication with stakeholders
- Document all approved changes
- Use agile methodology for flexibility within constraints

### 5.4 Human Resource Risks

**Risk 5.4.1: Skill Gaps**  
*Description:* Team members may lack expertise in specific technologies (React, PostgreSQL, Socket.io).  
*Likelihood:* Medium  
*Impact:* Medium  
*Mitigation Strategies:*
- Assess team skills during project planning
- Provide training or learning resources for new technologies
- Allocate time for learning curve in schedule
- Pair experienced developers with less experienced
- Leverage online resources and documentation
- Consider hiring consultants for specialized areas
- Encourage continuous learning and skill development

**Risk 5.4.2: Team Communication Issues**  
*Description:* Miscommunication or lack of coordination may lead to integration problems or duplicated effort.  
*Likelihood:* Medium  
*Impact:* Medium  
*Mitigation Strategies:*
- Hold daily standup meetings for status updates
- Use collaboration tools (Slack, Microsoft Teams)
- Maintain shared documentation (Confluence, Wiki)
- Establish clear roles and responsibilities
- Use project management tools for task tracking
- Conduct regular code reviews
- Foster open communication culture

### 5.5 External Risks

**Risk 5.5.1: Third-Party Service Failures**  
*Description:* SMTP email service or other external dependencies may become unavailable.  
*Likelihood:* Low  
*Impact:* Medium  
*Mitigation Strategies:*
- Use reliable third-party services with SLA guarantees
- Implement error handling for external service failures
- Provide alternative workflows when external services unavailable
- Monitor external service status
- Maintain backup email service provider
- Document external dependencies and their criticality

**Risk 5.5.2: Regulatory Compliance Changes**  
*Description:* Changes in data protection regulations may require system modifications.  
*Likelihood:* Low  
*Impact:* Medium  
*Mitigation Strategies:*
- Design system with privacy and security best practices
- Implement data encryption and access controls
- Maintain audit logs for compliance
- Stay informed about regulatory changes
- Conduct periodic compliance reviews
- Build flexibility for compliance-related changes

---

## 6. DESIGN

### 6.1 System Design

#### 6.1.1 High-Level Architecture

The Simple Workforce Manager employs a three-tier client-server architecture with clear separation of concerns:

**Presentation Layer (Client Tier):**  
The presentation layer consists of a React-based single-page application (SPA) running in the user's web browser. This layer is responsible for user interface rendering, user input handling, client-side validation, and presentation logic. The React application utilizes component-based architecture with functional components and hooks for state management. Ant Design UI library provides consistent, professional interface components. The presentation layer communicates with the application layer through RESTful HTTP APIs and WebSocket connections for real-time features.


**Application Layer (Server Tier):**  
The application layer consists of a Node.js server running Express.js framework. This layer implements business logic, request routing, authentication and authorization, data validation, and API endpoint handlers. The server is organized into modular route handlers for different functional areas (authentication, employees, tasks, attendance, chat, complaints, feedback, allowances, reports, settings). Middleware functions provide cross-cutting concerns including authentication token validation, role-based authorization, rate limiting, CORS handling, and HTTP logging. The application layer communicates with the data layer through database queries and manages WebSocket connections for real-time communication.

**Data Layer (Database Tier):**  
The data layer consists of a PostgreSQL relational database management system. This layer is responsible for persistent data storage, data integrity enforcement through constraints, transaction management, and query optimization through indexing. The database schema includes 12 primary tables (users, user_profiles, tasks, attendance, conversations, messages, complaints, complaint_replies, feedback, allowances, reports, system_settings) with appropriate relationships, constraints, and indexes. The data layer ensures ACID properties (Atomicity, Consistency, Isolation, Durability) for all transactions.

#### 6.1.2 Component Architecture

**Backend Components:**

1. **Authentication Module** - Handles user login, password management, JWT token generation and validation
2. **Authorization Middleware** - Enforces role-based access control on protected endpoints
3. **Employee Management Module** - Manages employee lifecycle (CRUD operations)
4. **Task Management Module** - Handles task assignment, tracking, and status updates
5. **Attendance Module** - Records and retrieves attendance data
6. **Real-Time Communication Module** - Manages WebSocket connections and message delivery
7. **Complaint Management Module** - Handles complaint submission, replies, and status
8. **Feedback Management Module** - Manages feedback submission and responses
9. **Allowance Management Module** - Tracks employee allowances
10. **Report Management Module** - Handles report submission and retrieval
11. **System Administration Module** - Manages system settings and configuration
12. **Database Connection Pool** - Manages PostgreSQL connections efficiently
13. **Rate Limiting Module** - Prevents API abuse and brute force attacks
14. **Logging Module** - Records HTTP requests and application events

**Frontend Components:**

1. **Authentication Components** - Login form, password reset forms
2. **Dashboard Components** - Role-specific dashboard views with widgets
3. **Employee Management Components** - Employee list, create/edit forms
4. **Task Management Components** - Task list, create/edit forms, status updates
5. **Attendance Components** - Clock-in/out widget, attendance history
6. **Chat Components** - Conversation list, message view, message input
7. **Complaint Components** - Complaint submission, list, detail view with replies
8. **Feedback Components** - Feedback submission, list, detail view with responses
9. **Allowance Components** - Allowance list and detail views
10. **Report Components** - Report submission and list views
11. **Settings Components** - System configuration interface
12. **Navigation Components** - Sidebar menu, top navigation bar
13. **Common Components** - Buttons, forms, tables, modals, notifications
14. **API Client** - Axios-based HTTP client with authentication token injection
15. **WebSocket Client** - Socket.io client for real-time communication

#### 6.1.3 Communication Patterns

**HTTP RESTful API:**  
The system uses RESTful API design principles for client-server communication. API endpoints follow resource-based URL structure (/api/resource) with appropriate HTTP methods (GET for retrieval, POST for creation, PUT for full update, PATCH for partial update, DELETE for deletion). Request and response bodies use JSON format. Authentication is handled through JWT tokens in Authorization header. The API returns appropriate HTTP status codes (2xx for success, 4xx for client errors, 5xx for server errors) with descriptive error messages.

**WebSocket Communication:**  
Real-time features utilize WebSocket protocol through Socket.io library. WebSocket connections are established after HTTP handshake and maintained for bidirectional communication. The system uses event-based messaging with custom event names (authenticate, send_message, receive_message, disconnect). Socket.io provides automatic reconnection, heartbeat mechanism, and fallback to HTTP long-polling. The server maintains mapping between user IDs and socket IDs for message routing.

**Database Communication:**  
The application layer communicates with PostgreSQL database through pg (node-postgres) driver. Connection pooling manages database connections efficiently with configurable pool size. All database queries use parameterized statements to prevent SQL injection. The system employs transaction management for multi-step operations requiring atomicity. Database queries are optimized through strategic indexing on frequently queried columns.

### 6.2 Data Design

#### 6.2.1 Entity Descriptions

**Users Entity:**  
Stores core user authentication and role information. Attributes include user_id (primary key, serial), username (unique, varchar), email (unique, varchar), password_hash (varchar), role (enum: admin/manager/staff), is_default_password (boolean), password_reset_token (text, nullable), password_reset_expires (timestamp, nullable), created_at (timestamp). This entity serves as the central user registry with relationships to all user-specific data.

**User_profiles Entity:**  
Stores detailed employee profile information. Attributes include profile_id (primary key, serial), user_id (foreign key to users, unique), first_name (varchar), last_name (varchar), phone_number (unique, varchar), sex (enum: male/female/other), job_title (varchar, nullable), hire_date (date, nullable), address (text, nullable), date_format (varchar), notification_prefs (jsonb). This entity extends user information with personal and employment details.

**Tasks Entity:**  
Stores task assignments and tracking information. Attributes include task_id (primary key, serial), title (varchar), description (text, nullable), status (enum: pending/in_progress/completed), assigned_to (foreign key to users, nullable), assigned_by (foreign key to users, nullable), created_at (timestamp), due_date (timestamp, nullable). This entity supports task management workflow with assignee and assigner relationships.

**Attendance Entity:**  
Stores employee attendance records. Attributes include attendance_id (primary key, serial), user_id (foreign key to users), clock_in_time (timestamp), clock_out_time (timestamp, nullable), attendance_date (date). This entity records work hours with clock-in and clock-out timestamps for payroll and monitoring purposes.

**Conversations Entity:**  
Stores chat conversation metadata. Attributes include conversation_id (primary key, serial), user1_id (foreign key to users), user2_id (foreign key to users), status (enum: active/blocked), blocked_by (foreign key to users, nullable), user1_cleared_at (timestamp, nullable), user2_cleared_at (timestamp, nullable), created_at (timestamp). Unique constraint on (user1_id, user2_id) ensures single conversation per user pair.

**Messages Entity:**  
Stores individual chat messages. Attributes include message_id (primary key, serial), conversation_id (foreign key to conversations), sender_id (foreign key to users), content (text), sent_at (timestamp). This entity maintains complete message history for conversations.

**Complaints Entity:**  
Stores employee complaints. Attributes include complaint_id (primary key, serial), user_id (foreign key to users), title (varchar), content (text), status (enum: open/resolved), submitted_at (timestamp). This entity supports complaint tracking and resolution workflow.

**Complaint_replies Entity:**  
Stores replies to complaints. Attributes include reply_id (primary key, serial), complaint_id (foreign key to complaints), user_id (foreign key to users), content (text), replied_at (timestamp). This entity enables threaded conversation on complaints.

**Feedback Entity:**  
Stores employee feedback submissions. Attributes include feedback_id (primary key, serial), user_id (foreign key to users), title (varchar), content (text), submitted_at (timestamp), reply (text, nullable), replied_by (foreign key to users, nullable), replied_at (timestamp, nullable). This entity supports single-response feedback mechanism.

**Allowances Entity:**  
Stores employee allowance records. Attributes include allowance_id (primary key, serial), user_id (foreign key to users), title (varchar), description (text, nullable), amount (decimal), frequency (varchar), created_at (timestamp). This entity tracks various employee allowances with different payment frequencies.

**Reports Entity:**  
Stores employee report submissions. Attributes include report_id (primary key, serial), user_id (foreign key to users), title (varchar), content (text), submitted_at (timestamp). This entity maintains record of employee work reports.

**System_settings Entity:**  
Stores system configuration parameters. Attributes include setting_key (primary key, varchar), setting_value (text). This entity provides flexible key-value storage for system-wide settings.

#### 6.2.2 Entity Relationships

- Users (1) to User_profiles (1): One-to-one relationship, each user has exactly one profile
- Users (1) to Tasks (N) as assignee: One-to-many, user can be assigned multiple tasks
- Users (1) to Tasks (N) as assigner: One-to-many, user can assign multiple tasks
- Users (1) to Attendance (N): One-to-many, user has multiple attendance records
- Users (1) to Conversations (N): One-to-many, user participates in multiple conversations
- Users (1) to Messages (N): One-to-many, user sends multiple messages
- Users (1) to Complaints (N): One-to-many, user submits multiple complaints
- Users (1) to Complaint_replies (N): One-to-many, user creates multiple replies
- Users (1) to Feedback (N): One-to-many, user submits multiple feedback items
- Users (1) to Allowances (N): One-to-many, user has multiple allowances
- Users (1) to Reports (N): One-to-many, user submits multiple reports
- Conversations (1) to Messages (N): One-to-many, conversation contains multiple messages
- Complaints (1) to Complaint_replies (N): One-to-many, complaint has multiple replies

#### 6.2.3 Data Integrity Constraints

- Primary keys ensure unique identification of all records
- Foreign keys enforce referential integrity between related entities
- Unique constraints prevent duplicate usernames, emails, and phone numbers
- NOT NULL constraints ensure required fields are always populated
- ENUM types restrict values to predefined valid options
- CASCADE delete ensures dependent records are removed when parent deleted
- CHECK constraints validate data ranges and formats
- Default values provide sensible initial states for optional fields

---

## 7. TESTING

### 7.1 Testing Strategy

The Simple Workforce Manager employs a comprehensive testing strategy encompassing multiple testing levels to ensure system quality, reliability, and security.

**Testing Objectives:**
- Verify all functional requirements are correctly implemented
- Ensure system performance meets specified requirements
- Validate security mechanisms prevent unauthorized access
- Confirm system usability and user experience quality
- Identify and resolve defects before production deployment
- Ensure system reliability and stability under various conditions

**Testing Levels:**
1. Unit Testing - Individual component and function testing
2. Integration Testing - Module interaction and API testing
3. System Testing - End-to-end workflow and requirement validation
4. Security Testing - Vulnerability assessment and penetration testing
5. Performance Testing - Load testing and stress testing
6. Usability Testing - User experience and interface evaluation
7. Acceptance Testing - Stakeholder validation and sign-off


### 7.2 Unit Testing

Unit testing validates individual functions, components, and modules in isolation.

**Backend Unit Testing:**
- Test authentication functions (password hashing, token generation, token validation)
- Test database query functions with mock database connections
- Test validation functions for input data
- Test utility functions (date formatting, calculations)
- Use Jest or Mocha testing frameworks
- Achieve minimum 70% code coverage

**Frontend Unit Testing:**
- Test React components with React Testing Library
- Test component rendering with various props
- Test user interaction handlers (button clicks, form submissions)
- Test state management and hooks
- Test utility functions and helpers
- Achieve minimum 60% code coverage

### 7.3 Integration Testing

Integration testing validates interactions between modules and external systems.

**API Integration Testing:**
- Test all API endpoints with various input combinations
- Test authentication and authorization middleware
- Test database operations (CRUD) through API
- Test error handling and edge cases
- Use Postman or automated API testing tools
- Validate request/response formats and status codes

**Frontend-Backend Integration:**
- Test API calls from frontend components
- Test data flow from user input to database and back
- Test WebSocket connection establishment and messaging
- Test error handling and user feedback
- Test authentication token flow

**Database Integration:**
- Test database connection pooling
- Test transaction management (commit/rollback)
- Test foreign key constraints and cascading deletes
- Test database triggers and constraints
- Test query performance with realistic data volumes

### 7.4 System Testing

System testing validates complete end-to-end workflows against requirements.

**Functional System Testing:**
- Test complete user authentication workflow (login, password reset)
- Test employee management workflow (create, view, edit, delete)
- Test task assignment and tracking workflow
- Test attendance recording workflow (clock-in, clock-out, history)
- Test real-time chat workflow (send, receive, conversation management)
- Test complaint submission and resolution workflow
- Test feedback submission and response workflow
- Test allowance management workflow
- Test report submission workflow
- Validate all functional requirements from SRS

**Non-Functional System Testing:**
- Test system performance under normal load
- Test system behavior under stress conditions
- Test system recovery from failures
- Test data backup and restoration procedures
- Test system monitoring and logging

### 7.5 Security Testing

Security testing identifies vulnerabilities and validates security mechanisms.

**Authentication Security Testing:**
- Test password hashing strength (BCrypt verification)
- Test JWT token generation and validation
- Test token expiration enforcement
- Test rate limiting on login endpoint
- Attempt brute force attacks and verify prevention
- Test password reset token security and expiration

**Authorization Security Testing:**
- Test role-based access control enforcement
- Attempt unauthorized access to protected endpoints
- Test privilege escalation prevention
- Verify users can only access their own data

**Input Validation Testing:**
- Test SQL injection prevention (parameterized queries)
- Test cross-site scripting (XSS) prevention
- Test input sanitization and validation
- Test file upload security (if applicable)

**Network Security Testing:**
- Test HTTPS/TLS encryption in production
- Test CORS configuration
- Test security headers (CSP, X-Frame-Options)
- Test WebSocket security

### 7.6 Performance Testing

Performance testing validates system responsiveness and scalability.

**Load Testing:**
- Simulate 50 concurrent users (normal load)
- Simulate 100 concurrent users (peak load)
- Measure API response times under load
- Measure database query performance
- Identify performance bottlenecks

**Stress Testing:**
- Simulate 200+ concurrent users (beyond capacity)
- Identify system breaking point
- Test system recovery after stress
- Validate error handling under stress

**Endurance Testing:**
- Run system under normal load for extended period (24-48 hours)
- Monitor for memory leaks
- Monitor for performance degradation over time
- Test database connection pool stability

### 7.7 Usability Testing

Usability testing evaluates user experience and interface quality.

**User Interface Testing:**
- Test navigation intuitiveness
- Test form usability and validation feedback
- Test error message clarity
- Test responsive design on various screen sizes
- Test cross-browser compatibility

**User Acceptance Testing:**
- Conduct testing with actual end users (Admin, Manager, Staff)
- Gather feedback on workflow efficiency
- Identify usability issues and improvement opportunities
- Validate system meets user expectations

### 7.8 Sample Test Cases

#### Test Case 1: User Login with Valid Credentials

**Test Case ID:** TC-AUTH-001  
**Test Objective:** Verify user can successfully log in with valid credentials  
**Preconditions:** User account exists with username "testuser" and password "password123"  
**Test Steps:**
1. Navigate to login page
2. Enter username "testuser"
3. Enter password "password123"
4. Click "Login" button

**Expected Results:**
- System validates credentials
- System generates JWT token
- System redirects to appropriate dashboard
- Token is stored in localStorage
- User can access protected pages

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:** [Any observations]

#### Test Case 2: Create Task and Assign to Employee

**Test Case ID:** TC-TASK-001  
**Test Objective:** Verify manager can create task and assign to employee  
**Preconditions:** 
- Manager is logged in
- At least one employee exists in system

**Test Steps:**
1. Navigate to Task Management page
2. Click "Create Task" button
3. Enter task title "Complete monthly report"
4. Enter task description "Prepare and submit monthly performance report"
5. Select employee "John Doe" from assignee dropdown
6. Select due date (7 days from today)
7. Click "Create Task" button

**Expected Results:**
- System validates input fields
- System creates task record in database
- Task appears in manager's task list
- Task appears in John Doe's "My Tasks" list
- Task status is "Pending"
- Success notification is displayed

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:** [Any observations]

#### Test Case 3: Employee Clock-In and Clock-Out

**Test Case ID:** TC-ATT-001  
**Test Objective:** Verify employee can clock in and clock out successfully  
**Preconditions:** 
- Employee is logged in
- Employee has not clocked in today

**Test Steps:**
1. View dashboard with attendance widget
2. Verify widget shows "Not Clocked In" status
3. Click "Clock In" button
4. Verify widget shows "Clocked In" status with timestamp
5. Wait 1 minute
6. Click "Clock Out" button
7. Verify widget shows "Clocked Out" status
8. Verify work hours are calculated and displayed

**Expected Results:**
- Clock-in records current timestamp
- Clock-in button becomes disabled after clock-in
- Clock-out button becomes enabled after clock-in
- Clock-out records current timestamp
- Work hours are calculated correctly (approximately 1 minute)
- Attendance record is created in database
- Both buttons are disabled after clock-out

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:** [Any observations]

---

## 8. REFERENCES

1. Pressman, R. S., & Maxim, B. R. (2020). *Software Engineering: A Practitioner's Approach* (9th ed.). McGraw-Hill Education.

2. Sommerville, I. (2016). *Software Engineering* (10th ed.). Pearson Education.

3. IEEE Computer Society. (1998). *IEEE Recommended Practice for Software Requirements Specifications*. IEEE Std 830-1998.

4. Fowler, M. (2018). *Refactoring: Improving the Design of Existing Code* (2nd ed.). Addison-Wesley Professional.

5. Node.js Documentation. (2025). Retrieved from https://nodejs.org/docs/

6. Express.js Documentation. (2025). Retrieved from https://expressjs.com/

7. React Documentation. (2025). Retrieved from https://react.dev/

8. PostgreSQL Documentation. (2025). Retrieved from https://www.postgresql.org/docs/

9. Socket.io Documentation. (2025). Retrieved from https://socket.io/docs/

10. Ant Design Documentation. (2025). Retrieved from https://ant.design/docs/

11. JSON Web Token (JWT) Specification. RFC 7519. Retrieved from https://tools.ietf.org/html/rfc7519

12. OWASP Top Ten Web Application Security Risks. (2021). Retrieved from https://owasp.org/www-project-top-ten/

13. International Function Point Users Group (IFPUG). (2020). *Function Point Counting Practices Manual*.

14. Project Management Institute. (2021). *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* (7th ed.).

15. Albrecht, A. J. (1979). "Measuring Application Development Productivity". *Proceedings of the Joint SHARE/GUIDE/IBM Application Development Symposium*.

---

## 9. APPENDIX

### 9.1 Glossary of Terms

**API (Application Programming Interface):** A set of protocols and tools for building software applications, defining how components should interact.

**BCrypt:** A password hashing function designed to be computationally expensive to resist brute-force attacks.

**CRUD:** Create, Read, Update, Delete - the four basic operations for persistent storage.

**JWT (JSON Web Token):** A compact, URL-safe means of representing claims to be transferred between two parties for authentication.

**PERN Stack:** PostgreSQL, Express, React, Node.js - a technology stack for building web applications.

**RESTful API:** An architectural style for designing networked applications using HTTP methods and stateless communication.

**Socket.io:** A JavaScript library for real-time, bidirectional communication between web clients and servers.

**WebSocket:** A communication protocol providing full-duplex communication channels over a single TCP connection.

**Middleware:** Software that acts as a bridge between an operating system or database and applications, especially on a network.

**ORM (Object-Relational Mapping):** A programming technique for converting data between incompatible type systems in object-oriented programming languages.

**CORS (Cross-Origin Resource Sharing):** A mechanism that allows restricted resources on a web page to be requested from another domain.

**Rate Limiting:** A technique for limiting network traffic by restricting the number of requests a user can make in a given timeframe.

**Connection Pooling:** A method of creating and managing a pool of connections that are ready for use by any thread that needs them.

**ACID Properties:** Atomicity, Consistency, Isolation, Durability - a set of properties guaranteeing database transactions are processed reliably.

**SPA (Single Page Application):** A web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages.

### 9.2 Acronyms

- **AFP:** Adjusted Function Points
- **API:** Application Programming Interface
- **CRUD:** Create, Read, Update, Delete
- **CSS:** Cascading Style Sheets
- **DFD:** Data Flow Diagram
- **EI:** External Input
- **EIF:** External Interface File
- **EO:** External Output
- **EQ:** External Query
- **FP:** Function Point
- **GSC:** General System Characteristics
- **HTML:** HyperText Markup Language
- **HTTP:** HyperText Transfer Protocol
- **HTTPS:** HyperText Transfer Protocol Secure
- **ILF:** Internal Logical File
- **JSON:** JavaScript Object Notation
- **JWT:** JSON Web Token
- **MTBF:** Mean Time Between Failures
- **MTTR:** Mean Time To Recovery
- **PERN:** PostgreSQL, Express, React, Node.js
- **REST:** Representational State Transfer
- **RPO:** Recovery Point Objective
- **RTO:** Recovery Time Objective
- **SPA:** Single Page Application
- **SQL:** Structured Query Language
- **SRS:** Software Requirements Specification
- **SSL:** Secure Sockets Layer
- **TDI:** Total Degree of Influence
- **TLS:** Transport Layer Security
- **UAT:** User Acceptance Testing
- **UFP:** Unadjusted Function Points
- **UI:** User Interface
- **UPS:** Uninterruptible Power Supply
- **URL:** Uniform Resource Locator
- **UX:** User Experience
- **VAF:** Value Adjustment Factor
- **WCAG:** Web Content Accessibility Guidelines
- **XSS:** Cross-Site Scripting

### 9.3 Database Schema Diagram Description

The database schema consists of 12 interconnected tables organized around the central Users table. The Users table connects to User_profiles in a one-to-one relationship for extended profile information. Tasks table has two foreign keys to Users (assigned_to and assigned_by) creating a many-to-one relationship for both assignee and assigner. Attendance table links to Users in a one-to-many relationship for tracking multiple attendance records per user. Conversations table links to Users twice (user1_id and user2_id) for chat participants, with Messages table linking to Conversations for message storage. Complaints table links to Users for submitters, with Complaint_replies linking to both Complaints and Users for threaded replies. Feedback, Allowances, and Reports tables each link to Users in one-to-many relationships. System_settings table stands alone with no foreign key relationships.

### 9.4 API Endpoint Summary

**Authentication Endpoints:**
- POST /api/auth/login - User login
- POST /api/auth/reset-password - Reset password (authenticated)
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/perform-reset - Execute password reset with token

**Employee Management Endpoints:**
- GET /api/staff - Retrieve all employees
- GET /api/staff/:id - Retrieve single employee
- POST /api/staff - Create new employee
- PUT /api/staff/:id - Update employee
- DELETE /api/staff/:id - Delete employee

**Task Management Endpoints:**
- GET /api/tasks - Retrieve all tasks (Manager/Admin)
- GET /api/tasks/mytasks - Retrieve user's assigned tasks
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task (Manager)
- PATCH /api/tasks/:id/status - Update task status (Employee)
- DELETE /api/tasks/:id - Delete task

**Attendance Endpoints:**
- POST /api/attendance/clockin - Clock in
- POST /api/attendance/clockout - Clock out
- GET /api/attendance/history - Retrieve user's attendance history
- GET /api/attendance/all - Retrieve all attendance (Manager/Admin)

**Chat Endpoints:**
- GET /api/chat/conversations - Retrieve user's conversations
- GET /api/chat/conversations/:id/messages - Retrieve conversation messages
- POST /api/chat/conversations/:id/block - Block conversation
- POST /api/chat/conversations/:id/unblock - Unblock conversation
- GET /api/chat/users - Search users for chat

**Complaint Endpoints:**
- GET /api/complaints - Retrieve all complaints (Manager/Admin)
- GET /api/complaints/my - Retrieve user's complaints
- GET /api/complaints/:id - Retrieve complaint details
- POST /api/complaints - Submit complaint
- POST /api/complaints/:id/replies - Add complaint reply
- PATCH /api/complaints/:id/status - Update complaint status

**Feedback Endpoints:**
- GET /api/feedback - Retrieve all feedback (Manager/Admin)
- GET /api/feedback/my - Retrieve user's feedback
- GET /api/feedback/:id - Retrieve feedback details
- POST /api/feedback - Submit feedback
- POST /api/feedback/:id/reply - Reply to feedback

**Allowance Endpoints:**
- GET /api/allowances - Retrieve all allowances (Manager/Admin)
- GET /api/allowances/my - Retrieve user's allowances
- POST /api/allowances - Create allowance
- PUT /api/allowances/:id - Update allowance
- DELETE /api/allowances/:id - Delete allowance

**Report Endpoints:**
- GET /api/reports - Retrieve all reports (Manager/Admin)
- GET /api/reports/my - Retrieve user's reports
- GET /api/reports/:id - Retrieve report details
- POST /api/reports - Submit report

**Settings Endpoints:**
- GET /api/settings - Retrieve system settings
- PUT /api/settings - Update system settings

### 9.5 Environment Variables

**Backend Environment Variables (.env):**
```
PORT=5001
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=simple_workforce_manager
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_secret_key_minimum_32_characters
CORS_ORIGIN=http://localhost:3000
FRONTEND_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
NODE_ENV=development
```

**Frontend Environment Variables (.env):**
```
REACT_APP_API_URL=http://localhost:5001/api
```

---

**END OF SOFTWARE REQUIREMENTS SPECIFICATION**

**Document Version:** 2.0  
**Date:** November 24, 2025  
**Status:** Final  
**Total Pages:** [Auto-generated]  
**Prepared By:** Software Engineering Team  
**Approved By:** [To be filled]  
**Approval Date:** [To be filled]

