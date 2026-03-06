## PR: Create 8-Role RBAC Matrix #54

### Description
This PR implements the Role-Based Access Control (RBAC) system. It maps 8 specific user roles to their respective module permissions to ensure secure access and clear separation of duties within the LGU portal.

### Role-Permission Matrix

| Module | Citizen | Barangay Official | LGU Staff | Dept Head | Information Officer | MDRRMO | Executive (Mayor/SB) | Admin |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Registration** | Self-Registration (Unverified) | Assisted Registration / Verify Residents | | | | | | Password Reset / Role Assignment |
| **Concern Reporting** | Submit & Track Reports (Verified Only) | | Process Assigned Reports  | Assign Staff / Escalate / Set Resolution Time | | | View All Reports / Comment | Manage Categories / Auto-Routing Mapping |
| **Emergency (SOS)** | Trigger SOS (Verified Only) | | | | | Manage Evacuation Centers / Publish Emergency Alerts | | System Settings |
| **News & Events** | View Only | Post Barangay Announcements | | | Create/Edit/Publish LGU News | | | |
| **Projects & Transparency** | View & Rate Projects (Verified Only) | View Barangay Projects | Create Project Entries | Update Project Status | | | View Project Dashboard | |
| **Category Management** | | | | | | | | Create/Edit/Delete Categories / Map to Departments |
| **User Management** | | Manage Residents (Barangay Scope) | | | | | | Full User CRUD / Assign Roles / Map Staff to Departments |

### Key Changes
- **Module Access:** Restricted module visibility based on the matrix above.
- **Citizen Verification:** Implemented logic gates to ensure only "Verified" citizens can access SOS and Reporting features.
- **Scoped Management:** Limited Barangay Officials to managing residents within their specific geographic scope.
- **Admin Control:** Centralized system configuration and user role assignment to the Admin role.
