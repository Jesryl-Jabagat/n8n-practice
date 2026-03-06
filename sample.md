# Pull Request: Implementation of Role-Based Access Control (RBAC) Matrix

## 1. Description
This PR implements the core **Role-Based Access Control (RBAC)** logic across all system modules. The implementation ensures that user actions are restricted based on their assigned roles and verification status, specifically addressing the requirements for local government operations.

## 2. Logic Re-Analysis & Decision Summary
Following a logical review of the requirements:
* **Verification Gatekeeping:** Access to "Concern Reporting," "SOS," and "Project Rating" is strictly gated behind a `is_verified` flag for the **Citizen** role.
* **Barangay Scoping:** The **Barangay Official** role is logically restricted to their specific geographical scope for "User Management" and "News."
* **Administrative Separation:** A clear distinction is made between **Category Management** (Admin) and **Concern Processing** (Dept Head/Staff) to prevent unauthorized workflow changes.

---

## 3. Role-Permission Matrix
The following table represents the implemented access levels:

| Module | Citizen | Barangay Official | LGU Staff | Dept Head | Information Officer | MDRRMO | Executive (Mayor/SB) | Admin |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Registration** | Self-Registration (Unverified) | Assisted Registration / Verify Residents | | | | | | Password Reset / Role Assignment |
| **Concern Reporting** | Submit & Track Reports (**Verified Only**) | | Process Assigned Reports / Add Internal Notes | Assign Staff / Escalate / Set Resolution Time | | | View All Reports / Comment | Manage Categories / Auto-Routing Mapping |
| **Emergency (SOS)** | Trigger SOS (**Verified Only**) | | | | | Manage Evacuation Centers / Publish Emergency Alerts | | System Settings |
| **News & Events** | View Only | Post Barangay Announcements | | | Create/Edit/Publish LGU News | | | |
| **Projects & Transparency** | View & Rate Projects (**Verified Only**) | View Barangay Projects | Create Project Entries | Update Project Status | | | View Project Dashboard | |
| **Category Management** | | | | | | | | Create/Edit/Delete Categories / Map to Departments |
| **User Management** | | Manage Residents (Barangay Scope) | | | | | | Full User CRUD / Assign Roles / Map Staff to Departments |

---

## 4. Technical Implementation Details
* **Middleware:** Added `AuthorizeRole` and `EnsureVerified` decorators to API routes.
* **Database Schema:** Updated `users` table to include `role_id` and `barangay_code` for scoped queries.
* **Security:** Enforced server-side validation; hidden UI elements for unauthorized roles do not bypass the API layer security.

## 5. Testing Checklist
- [ ] **Citizen:** Verified unverified users cannot trigger SOS.
- [ ] **Barangay Official:** Confirmed "Manage Residents" only returns users within their specific Barangay.
- [ ] **Dept Head:** Validated the "Escalate" function only works for reports within their department.
- [ ] **Admin:** Verified that mapping categories correctly triggers the "Auto-Routing" logic for LGU Staff.

## 6. Deployment Notes
* Run `migration:run` to initialize the `roles` and `permissions` tables.
* Seed data for default Admin account is required for initial setup.
