# Client Dashboard Bids Functionality

## Overview
The client dashboard now includes comprehensive bid management functionality that allows clients to view, accept, reject, and manage freelancer bids for their job postings.

## Features

### 1. View Freelancer Bids
- **Automatic Loading**: Bids are automatically loaded when the dashboard loads
- **Filtered by Client**: Only shows bids for jobs posted by the current client (filtered by `toemail` field)
- **Real-time Updates**: Bids list refreshes automatically after status changes

### 2. Bid Information Display
For each bid, clients can see:
- **Job Details**: Title, description, company name, location, job level, tags
- **Budget Comparison**: Your posted budget vs. freelancer's quoted price
- **Freelancer Information**: Email address and submission date
- **Cover Letter**: Full cover letter from the freelancer
- **Proposed Timeline**: Freelancer's estimated project duration
- **Current Status**: Pending, accepted, rejected, or under review

### 3. Bid Actions
- **Accept Bid**: Change status to "accepted" and start working with freelancer
- **Reject Bid**: Change status to "rejected" to decline the proposal
- **Chat with Freelancer**: Initiate communication (placeholder for future chat system)

### 4. Status Management
- **Pending**: New bids that require action
- **Accepted**: Bids that have been approved
- **Rejected**: Bids that have been declined
- **Under Review**: Bids being evaluated

## API Endpoints

### 1. Get Client Bids (`/api/get-client-bids`)
- **Method**: GET
- **Parameters**: `clientEmail` (query parameter)
- **Returns**: Array of bids with job and proposal details
- **Filtering**: Only returns bids where `toemail` matches the client's email

### 2. Update Bid Status (`/api/update-bid-status`)
- **Method**: PUT
- **Body**: `{ proposalId, status, clientEmail }`
- **Status Values**: `accepted`, `rejected`, `pending`, `under_review`
- **Security**: Verifies the proposal belongs to the requesting client

## Database Structure

### Proposals Table
```sql
CREATE TABLE IF NOT EXISTS proposals (
  id SERIAL PRIMARY KEY,
  jobid INTEGER REFERENCES jobposted(id),
  coverletter TEXT NOT NULL,
  budgetquoted INTEGER NOT NULL,
  proposedtimeline VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  submittedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fromemail VARCHAR(100) NOT NULL, -- freelancer email
  toemail VARCHAR(100) NOT NULL    -- client email
);
```

### Jobposted Table (Jobs)
```sql
CREATE TABLE IF NOT EXISTS jobposted (
  id SERIAL PRIMARY KEY,
  clientid VARCHAR(100) NOT NULL,
  name VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[],
  location VARCHAR(100),
  joblevel VARCHAR(50),
  budget INTEGER,
  -- ... other fields
);
```

## Frontend Implementation

### State Management
```javascript
const [bids, setBids] = useState([]);
const [loadingBids, setLoadingBids] = useState(false);
```

### Key Functions
- `fetchBids(clientEmail)`: Retrieves all bids for a client
- `handleBidAction(proposalId, action)`: Updates bid status
- `openChat(freelancerEmail)`: Initiates chat (placeholder)

### UI Components
- **Bids Section**: Displays all received bids in card format
- **Action Buttons**: Accept, reject, and chat buttons for pending bids
- **Status Indicators**: Color-coded status badges
- **Budget Comparison**: Side-by-side budget display
- **Cover Letter Display**: Formatted cover letter in dedicated section

## Usage Instructions

### For Clients
1. **Login**: Access the client dashboard with a client account
2. **View Bids**: Bids are automatically loaded and displayed
3. **Review Details**: Click on bid cards to see full information
4. **Take Action**: Accept, reject, or chat with freelancers
5. **Monitor Status**: Track bid status changes in real-time

### For Developers
1. **Database Setup**: Ensure proposals table has `updatedat` column
2. **API Testing**: Use test scripts to verify endpoints
3. **Frontend Integration**: Bids section is automatically included in dashboard

## Testing

### Test Scripts
- **`test-client-bids.js`**: Tests the complete bids functionality
- **`fix-proposals-table.js`**: Fixes database schema if needed

### Test Coverage
- ✅ Database schema validation
- ✅ API endpoint functionality
- ✅ Frontend bid display
- ✅ Bid status management
- ✅ Error handling
- ✅ Security validation

## Security Features

### Access Control
- **Client Verification**: Only shows bids for authenticated client
- **Email Filtering**: Bids filtered by client email in `toemail` field
- **Status Update Validation**: Verifies proposal ownership before updates

### Data Protection
- **Foreign Key Constraints**: Maintains referential integrity
- **Input Validation**: Validates all status updates
- **Error Handling**: Graceful failure with user feedback

## Future Enhancements

### Planned Features
- **Real-time Chat**: Integrated messaging system
- **Bid Analytics**: Statistics and insights
- **Automated Notifications**: Email alerts for new bids
- **Bid Comparison**: Side-by-side bid evaluation tools
- **Contract Management**: Automated contract generation

### Technical Improvements
- **WebSocket Integration**: Real-time bid updates
- **Advanced Filtering**: Search and sort capabilities
- **Bulk Actions**: Multiple bid management
- **Export Functionality**: Bid data export options

## Troubleshooting

### Common Issues
1. **No Bids Displayed**: Check if proposals table exists and has data
2. **Status Update Failures**: Verify proposal ownership and database permissions
3. **Loading Errors**: Check API endpoint availability and database connection

### Debug Steps
1. Run `test-client-bids.js` to verify functionality
2. Check browser console for error messages
3. Verify database schema with `fix-proposals-table.js`
4. Test API endpoints directly with tools like Postman

## Support

For technical support or feature requests:
1. Check the test scripts for common issues
2. Review database schema and API responses
3. Verify user authentication and permissions
4. Check server logs for detailed error information 