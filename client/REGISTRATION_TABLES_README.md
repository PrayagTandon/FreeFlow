# Registration System with Client/Freelancer Tables

## Overview
The registration system has been enhanced to store user details in both the main `users` table and the appropriate role-specific table (`client` or `freelancer`) based on the user's selection during registration.

## Database Schema

### Users Table (Main Table)
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cognitoid VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    metamaskid VARCHAR(100) UNIQUE,
    role VARCHAR(20) NOT NULL CHECK (role IN ('Client', 'Freelancer')),
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Client Table
```sql
CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    cognitoid VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    metamask VARCHAR(100)
);
```

### Freelancer Table
```sql
CREATE TABLE freelancer (
    id SERIAL PRIMARY KEY,
    cognitoid VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    metamaskid VARCHAR(100),
    activejobs INTEGER DEFAULT 0,
    rejectbids INTEGER DEFAULT 0,
    pendingbids INTEGER DEFAULT 0
);
```

## Registration Flow

1. **User Registration**: User fills out registration form with role selection
2. **Data Validation**: Server validates all required fields
3. **Password Hashing**: Password is hashed using bcrypt
4. **CognitoID Generation**: Unique CognitoID is generated with role prefix
5. **Transaction Execution**: 
   - Insert into `users` table
   - Insert into appropriate role-specific table (`client` or `freelancer`)
   - If any step fails, entire transaction is rolled back
6. **Success Response**: User receives confirmation and is redirected to login

## Key Features

- **Transaction Safety**: Uses database transactions to ensure data consistency
- **Role-Based Storage**: Automatically stores user data in the appropriate table based on role selection
- **Initial Values**: Freelancer table automatically sets `activejobs`, `rejectbids`, and `pendingbids` to 0
- **Duplicate Prevention**: Maintains unique constraints on email and CognitoID across all tables
- **Error Handling**: Comprehensive error handling with rollback on failures

## API Endpoints

### POST /api/register
Registers a new user and stores data in both tables.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "role": "Freelancer",
  "wallet": "0x1234..."
}
```

**Response:**
```json
{
  "message": "Freelancer registered successfully",
  "user": {
    "id": "uuid",
    "cognitoid": "Freelancer_timestamp",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "metamask": "0x1234...",
    "role": "Freelancer"
  }
}
```

### POST /api/init-db
Initializes the database with all required tables.

## Testing

Run the test script to verify functionality:
```bash
node test-registration-tables.js
```

This will test:
- Database initialization
- Client registration
- Freelancer registration
- Duplicate email prevention
- Login functionality for both user types

## Database Indexes

The following indexes are created for optimal performance:
- `idx_users_email` - Fast email lookups
- `idx_users_role` - Fast role-based filtering
- `idx_users_cognitoid` - Fast CognitoID lookups
- `idx_client_cognitoid` - Fast client table lookups
- `idx_freelancer_cognitoid` - Fast freelancer table lookups

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds of 10
- **Input Validation**: Comprehensive server-side validation of all inputs
- **SQL Injection Prevention**: Uses parameterized queries throughout
- **Transaction Rollback**: Automatic rollback on any database operation failure

## Future Enhancements

- Add user profile management
- Implement role-based access control
- Add user activity tracking
- Implement password reset functionality
- Add email verification system 