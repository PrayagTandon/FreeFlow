# Freelancer Home Page Updates

## Overview
The freelancer-home page has been updated to include role-based access control and real-time data fetching from the database.

## Key Changes Made

### 1. Role-Based Access Control
- **User Role Verification**: The page now checks if the logged-in user is a freelancer
- **Automatic Redirect**: Non-freelancers are automatically logged out and redirected to the login page
- **Security Enhancement**: Prevents unauthorized access to freelancer-specific features

### 2. Database Integration
- **Real-Time Stats**: "My Projects" and "Active Bids" now display actual data from the database
- **Dynamic Job Listings**: Jobs are fetched from the database instead of using hardcoded data
- **Live Data**: All statistics and job information are updated in real-time

### 3. New API Endpoint
- **`/api/get-freelancer-stats`**: Fetches freelancer statistics including:
  - `activejobs`: Number of active projects
  - `activebids`: Number of pending bids

### 4. Enhanced User Experience
- **Loading States**: Proper loading indicators while fetching data
- **Error Handling**: Graceful error handling for API failures
- **Logout Functionality**: Added logout button in the navigation
- **User Profile Display**: Shows actual user name and MetaMask ID

## Database Schema Changes

### Jobposted Table
- **Foreign Key Update**: Changed from `client(cognitoid)` to `client(metamaskid)`
- **Blockchain Integration**: Now uses MetaMask wallet addresses for client identification
- **Email Field Addition**: Added `email VARCHAR(100)` field to store client email from client table
- **Consistent Data**: Aligns with the blockchain-based architecture

### Freelancer Table
- **Stats Fields**: Uses existing `activejobs` and `pendingbids` fields
- **MetaMask Integration**: Primary identifier is now the MetaMask wallet address

### Proposals Table
- **Structure**: New table for storing freelancer proposals
- **Fields**: id, jobid, coverletter, budgetquoted, proposedtimeline, status, submittedat, fromemail, toemail
- **Relationships**: Foreign key to jobposted table
- **Status Management**: Enum-based status (Active, Accepted, Rejected, Withdrawn)

## API Endpoints Updated

### 1. Post-Proposal API (`/api/post-proposal`)
- **Table Creation**: Updated foreign key constraint to reference `client(metamaskid)`
- **Client Lookup**: Now searches for clients by MetaMask ID instead of cognitoid
- **Email Population**: Automatically populates email field from client table using MetaMask ID

### 2. Get-Jobs API (`/api/get-jobs`)
- **JOIN Update**: Changed from `c.cognitoid` to `c.metamaskid`
- **Data Consistency**: Ensures proper client information display
- **Email Field**: Includes client email in API response for internal use (not displayed to freelancers)

### 3. New: Get-Freelancer-Stats API (`/api/get-freelancer-stats`)
- **Purpose**: Fetches freelancer-specific statistics
- **Input**: MetaMask wallet address
- **Output**: Active jobs and pending bids count

### 4. New: Submit-Proposal API (`/api/submit-proposal`)
- **Purpose**: Handles proposal submissions from freelancers
- **Input**: Job details, cover letter, budget, timeline, and email addresses
- **Output**: Created proposal with all fields populated
- **Features**: Automatic table creation, foreign key validation, status management

## Frontend Updates

### Freelancer-Home Page
- **Role Checking**: Automatic verification of user role on page load
- **Data Fetching**: Real-time data from multiple API endpoints
- **Dynamic Rendering**: Jobs and stats update based on database content
- **Error States**: Proper handling of empty data and API failures
- **Proposal Submission**: Interactive modal for submitting job proposals
- **Form Fields**: Cover letter, budget quoted, proposed timeline with unit selection
- **Validation**: Required field validation and proper error handling

### Client Dashboard
- **MetaMask Integration**: Now uses MetaMask ID for job creation
- **Foreign Key Compliance**: Aligns with updated database schema
- **Simplified Interface**: Removed inprogress/completed tabs and active/completed stats
- **Bid Management**: Added "View Freelancer Bids" button for future bid system integration

## Testing

### Test Scripts
- **`test-freelancer-home.js`**: Tests the complete freelancer-home functionality
- **`test-client-table.js`**: Tests job creation with new MetaMask ID foreign key
- **`check-client-table.js`**: Verifies client table structure and data
- **`test-email-field.js`**: Tests email field population and retrieval in jobposted table
- **`test-proposal-submission.js`**: Tests proposal submission functionality and API integration
- **`view-bids`**: New page for clients to view freelancer bids (placeholder for future implementation)

### Test Coverage
- ✅ Role-based access control
- ✅ Database integration
- ✅ API endpoint functionality
- ✅ Foreign key relationships
- ✅ Error handling
- ✅ User experience flows

## Usage Instructions

### For Freelancers
1. **Login**: Must be logged in with a freelancer account
2. **Access**: Navigate to `/freelancer-home`
3. **View Stats**: See real-time project and bid statistics
4. **Browse Jobs**: View available jobs from the database

### For Non-Freelancers
1. **Automatic Redirect**: Will be logged out and sent to login page
2. **Security**: Cannot access freelancer-specific features
3. **Clear Messaging**: Understand why access was denied

## Technical Implementation

### State Management
```javascript
const [freelancerStats, setFreelancerStats] = useState({
  activejobs: 0,
  activebids: 0
});
const [availableJobs, setAvailableJobs] = useState([]);
```

### API Integration
```javascript
// Fetch freelancer stats
await fetchFreelancerStats(parsedUser.metamaskid);

// Fetch available jobs
await fetchAvailableJobs();
```

### Role Verification
```javascript
if (parsedUser.role !== 'Freelancer') {
  localStorage.removeItem('user');
  router.push('/login');
  return;
}
```

## Future Enhancements

### Planned Features
- **Real-time Updates**: WebSocket integration for live data updates
- **Advanced Filtering**: Job search and filtering capabilities
- **Bid Management**: Direct bid submission from job listings
- **Profile Management**: Freelancer profile editing and verification

### Performance Optimizations
- **Caching**: Implement data caching for better performance
- **Pagination**: Add pagination for large job lists
- **Lazy Loading**: Implement lazy loading for job images and content

## Troubleshooting

### Common Issues
1. **Role Mismatch**: Ensure user account has 'Freelancer' role
2. **MetaMask Connection**: Verify MetaMask wallet is connected
3. **Database Connection**: Check if database is accessible
4. **API Endpoints**: Verify all API routes are working correctly

### Debug Information
- Check browser console for detailed error messages
- Verify localStorage contains valid user data
- Confirm database schema matches expected structure
- Test API endpoints independently using test scripts

## Security Considerations

### Access Control
- **Role Verification**: Strict checking of user roles
- **Session Management**: Proper logout and session cleanup
- **Data Validation**: Input validation on all API endpoints

### Data Protection
- **User Isolation**: Users can only access their own data
- **Foreign Key Constraints**: Database-level relationship validation
- **API Security**: Proper authentication and authorization checks

### Privacy Protection
- **Client Email Privacy**: Client email addresses are stored for internal use but not displayed to freelancers
- **Data Minimization**: Only necessary information is shown to maintain user privacy
- **Internal Use Only**: Email field is used for system operations and client verification, not for public display 