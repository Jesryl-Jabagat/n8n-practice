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
| Registration        | Self Register  | Register / Verify Residents | -                | -                 | -                   | -              | -         | Password Reset    |
| Concern Reporting   | Create / Track | -                           | Process Reports  | Assign / Escalate | -                   | -              | View All  | Manage Categories |
| Emergency (SOS)     | Trigger SOS    | -                           | -                | -                 | -                   | Manage Centers | -         | System Config     |
| News / Events       | View           | Barangay Post               | -                | -                 | Publish LGU News    | Alerts         | -         | -                 |
| Projects            | View / Rate    | View                        | Post Information | Update Status     | -                   | -              | Dashboard | -                 |
| Category Management | -              | -                           | -                | -                 | -                   | -              | -         | Manage Categories |
| User Management     | -              | Manage Barangay Residents   | -                | -                 | -                   | -              | -         | CRUD Users        |
