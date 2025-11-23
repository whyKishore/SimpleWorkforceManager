# Software Requirements Specification (SRS)

Complete technical documentation for the Simple Workforce Manager system.

---

## 📚 Documents

This folder contains 9 comprehensive SRS documents following IEEE 830 standards:

1. **[1.1 Overall Description](1.1%20Overall%20Description.md)**  
   System overview, technology stack (PERN), user roles, constraints, and dependencies

2. **[1.2 External Interface Requirements](1.2%20External%20Interface%20Requirements.md)**  
   API specifications, hardware/software interfaces, communication protocols, WebSocket details

3. **[1.3 Functional Requirements](1.3%20Functional%20Requirements.md)**  
   Detailed functional specifications for all 11 modules (Input/Processing/Output format)

4. **[1.4 Performance Requirements](1.4%20Performance%20Requirements.md)**  
   Response times, scalability, resource utilization, 29 database indexes

5. **[1.5 Design Constraints](1.5%20Design%20Constraints.md)**  
   Technology constraints, platform requirements, security constraints

6. **[1.6 Data Flow Diagrams](1.6%20Data%20Flow%20Diagrams.md)**  
   Level 0, 1, 2 DFDs showing system architecture and data flows

7. **[1.7 System Features](1.7%20System%20Features.md)**  
   Detailed descriptions of all 11 core modules and their features

8. **[1.8 System Flow](1.8%20System%20Flow.md)**  
   End-to-end process flows and user interaction sequences

9. **[1.9 Use Cases](1.9%20Use%20Cases.md)**  
   16 comprehensive use cases with preconditions, flows, and postconditions

---

## 🎯 Quick Navigation

### For Developers
- Start with [1.1 Overall Description](1.1%20Overall%20Description.md) for system overview
- Review [1.3 Functional Requirements](1.3%20Functional%20Requirements.md) for detailed specs
- Check [1.2 External Interface Requirements](1.2%20External%20Interface%20Requirements.md) for API details

### For Testers
- Review [1.9 Use Cases](1.9%20Use%20Cases.md) for test scenarios
- Check [1.3 Functional Requirements](1.3%20Functional%20Requirements.md) for validation criteria
- Reference [1.4 Performance Requirements](1.4%20Performance%20Requirements.md) for benchmarks

### For Project Managers
- Read [1.1 Overall Description](1.1%20Overall%20Description.md) for project scope
- Review [1.7 System Features](1.7%20System%20Features.md) for feature completeness

---

## 📊 System Overview

**Technology Stack:** PERN (PostgreSQL, Express, React, Node.js)  
**Architecture:** Client-Server with WebSocket for real-time features  
**Security:** JWT authentication, BCrypt hashing, Rate limiting  
**Performance:** 29 database indexes, Connection pool optimization

**Core Modules:** 11
1. Authentication & Authorization
2. User Management
3. Task Management
4. Attendance System
5. Real-Time Chat
6. Reports Module
7. Complaints System
8. Feedback Module
9. Allowances Management
10. Profile Management
11. Settings Module

**User Roles:** 3 (Admin, Manager, Staff)

---

**Documentation Status:** ✅ Complete and Accurate  
**Last Updated:** January 24, 2025
