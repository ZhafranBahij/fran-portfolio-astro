# Fran HRIS

## About
Fran HRIS is a comprehensive Human Resource Information System built with Laravel Filament v4. It provides complete employee management functionality including attendance tracking, leave management, performance evaluations, recruitment, and more. The system features role-based access control, approval workflows, and robust reporting capabilities for modern HR operations.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ZhafranBahij/fran-hris
    ```

2. Install PHP dependencies:
    ```bash
    composer install
    ```

3. Create a .env file by copying the .env.example file and fill in the database connection details:
    ```bash
    cp .env.example .env
    ```

4. Run database migrations and seeders:
    ```bash
    php artisan migrate --seed
    ```

5. Start the development server:
    ```bash
    php artisan serve
    ```

## Features

### Dashboard Overview

![Dashboard](public/fran-hris-documentation/dashboard.jpg)

### Core HR Management

**Attendance Management**
- Track employee attendance with check-in/check-out times
- Multiple attendance status: Present, Absent, Leave, Sick, Permit
- Support for manual, imported, and system-generated records
- Date-based attendance tracking and reporting

![Attendance Management](public/fran-hris-documentation/attendance.jpg)

**User Management**
- Complete employee profile management with photos
- Employee information including NIK, employee code, position, join date
- Employment status tracking (Probation, Contract, Permanent, Inactive, Active)
- Division assignment and role-based access control
- Excel export functionality for employee data

![User Management](public/fran-hris-documentation/user.jpg)

**Division Management**
- Hierarchical organizational structure with parent-child divisions
- Create and manage departmental divisions
- Support for division descriptions and relationships

![Division Management](public/fran-hris-documentation/division.jpg)

### Leave and Time Management

**Paid Leave Management**
- Comprehensive paid leave request system with approval workflow
- Leave category management and classification
- Backup PIC assignment for work continuity
- Date range tracking with start and end dates
- Attachment and signature support for documentation

![Paid Leave Management](public/fran-hris-documentation/paidleave.jpg)

**Sick Leave Management**
- Sick leave request and approval system
- Backup person assignment for critical roles
- Medical attachment support
- Date range tracking for illness periods

![Sick Leave Management](public/fran-hris-documentation/sickleave.jpg)

**Permit Management**
- Employee permit request system
- Permit categorization and management
- Single-day permit tracking
- Approval workflow with documentation support

![Permit Management](public/fran-hris-documentation/permit.jpg)

**Overtime Management**
- Overtime request and approval system
- Duration tracking in hours
- Reason documentation and attachment support
- Digital signature integration

![Overtime Management](public/fran-hris-documentation/overtime.jpg)

### Performance and Development

**Employee Evaluation**
- Performance review system with customizable indicators
- Scoring system (0 to 100 range)
- Multiple evaluation types (Performance Review, Probation, Annual Review, Project Review)
- Total score calculation and reporting
- Evaluation date tracking

![Employee Evaluation](public/fran-hris-documentation/evaluation.jpg)

**Training Management**
- Training program organization and management
- Participant assignment and tracking
- Training categorization and cost management
- Benefit and outcome documentation
- Training materials attachment support

![Training Management](public/fran-hris-documentation/training.jpg)

### Recruitment and Onboarding

**Recruitment Management**
- Job posting and vacancy management
- Position details with job descriptions and responsibilities
- Candidate requirement specifications (education, age, gender)
- Recruitment status tracking (In Progress, Done)
- Starting work date scheduling

![Recruitment Management](public/fran-hris-documentation/recruitment.jpg)

### Employee Relations

**Exit Clearance Management**
- Employee exit process management
- Clearance item checklist and tracking
- End date tracking and reason documentation
- Status monitoring (In Progress, Done, Rejected)

![Exit Clearance Management](public/fran-hris-documentation/exit-clearence.jpg)

**Recommendation Letters**
- Employee recommendation request system
- Supervisor assignment and approval workflow
- Recommendation categorization
- Document attachment and signature support

![Recommendation Letters](public/fran-hris-documentation/recommendation.jpg)

### Financial Management

**Reimbursement Management**
- Expense reimbursement request system
- Category-based reimbursement classification
- Amount tracking with currency support
- Receipt attachment support
- Approval workflow with documentation

![Reimbursement Management](public/fran-hris-documentation/reimbursement.jpg)

**Travel Management**
- Business travel request and approval
- Travel expense tracking and management
- Travel categorization and documentation
- Digital signature and attachment support

![Travel Management](public/fran-hris-documentation/travel.jpg)

### System Administration

**Role and Permission Management**
- Granular role-based access control using Filament Shield
- Dynamic permission assignment
- Custom role creation and management
- Team-based permission support

![Role and Permission Management](public/fran-hris-documentation/role.jpg)

**Dashboard and Monitoring**
- Comprehensive HR dashboard with key metrics
- Application health monitoring
- System log viewing and analysis

![Application Health Monitoring](public/fran-hris-documentation/application-health.jpg)

## Technology Stack

- **Backend**: Laravel 11.x
- **Frontend**: Filament v4 (Admin Panel Framework)
- **Authentication**: Laravel Filament Auth
- **Permissions**: Filament Shield
- **Media Management**: Spatie Media Library
- **Export/Import**: Filament Excel
- **Health Monitoring**: Filament Spatie Health
- **Logging**: Filament Log Viewer
- **Performance**: Laravel Pulse

## Key Features

- **Role-Based Access Control**: Granular permissions for different user roles
- **Approval Workflows**: Multi-level approval system for various requests
- **Document Management**: Attachment and signature support for important documents
- **Reporting**: Excel export capabilities for data analysis
- **Audit Trail**: Complete tracking of created/updated by information
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Live status updates and notifications
