# Role-Based Access Control (RBAC) Matrix

Project: One Talibon App  
Iteration: Current Sprint  
Related Issue: #54

## Roles

1. Citizen
2. Barangay Official
3. LGU Staff
4. Department Head
5. Information Officer
6. MDRRMO Officer
7. Executive (Mayor/SB)
8. System Admin

## RBAC Matrix

| Module              | Citizen        | Barangay Official           | LGU Staff        | Dept Head         | Information Officer | MDRRMO         | Executive | Admin             |
| ------------------- | -------------- | --------------------------- | ---------------- | ----------------- | ------------------- | -------------- | --------- | ----------------- |
| Registration        | Self Register (Unverified)| Assisted Registration / Verify Residents |                  |                   |                    |                |           | Password Reset    |
| Concern Reporting   | Create / Track (Verified Only) |                             | Process Reports  | Assign / Escalate |                     |                | View All  | Manage Categories |
| Emergency (SOS)     | Trigger SOS (Verified Only)   |                             |                  |                   |                     | Manage Centers |           | System Config     |
| News / Events       | View           | Barangay Post Announcement              |                  |                   | Publish LGU News    | Alerts         |           |                   |
| Projects            | View / Rate (Verified Only)    | View Barangay Project                      | Post Information | Update Status     |                     |                | Dashboard |                   |
| Category Management |                |                             |                  |                   |                     |                |           | Manage Categories |
| User Management     |                | Manage Residents(Brgy Scope)  |                  |                   |                     |                |           | CRUD Users        |
