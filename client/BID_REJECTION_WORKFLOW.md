# Bid Rejection Workflow

## Overview
When a client rejects a freelancer's bid, the system automatically updates the `status` field in the `proposals` table to "rejected". This document explains the complete workflow.

## How It Works

### 1. Client Action
When a client clicks the "❌ Reject Bid" button in the client dashboard:

```javascript
<button 
  className="job-proposal-btn"
  onClick={() => handleBidAction(bid.proposalId, 'rejected')}
  style={{
    background: '#dc3545',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }}
>
  ❌ Reject Bid
</button>
```

### 2. Frontend Function Call
The `handleBidAction` function is called with the proposal ID and status "rejected":

```javascript
const handleBidAction = async (proposalId, action) => {
  try {
    const response = await fetch('/api/update-bid-status', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        proposalId,
        status: action, // 'rejected' in this case
        clientEmail: user.email
      }),
    });

    if (response.ok) {
      // Refresh bids to show updated status
      fetchBids(user.email);
      alert(`Bid ${action} successfully!`);
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Error updating bid status:', error);
    alert('Failed to update bid status. Please try again.');
  }
};
```

### 3. API Endpoint
The `/api/update-bid-status` endpoint receives the request and updates the database:

```javascript
// Verify that this proposal belongs to the client
const verifyQuery = `
  SELECT p.id, p.jobid, j.clientid 
  FROM proposals p
  INNER JOIN jobposted j ON p.jobid = j.id
  WHERE p.id = $1 AND p.toemail = $2
`;

// Update the proposal status
const updateQuery = `
  UPDATE proposals 
  SET status = $1, updatedat = CURRENT_TIMESTAMP
  WHERE id = $2
  RETURNING id, status, updatedat
`;

const result = await dbClient.query(updateQuery, [status, proposalId]);
```

### 4. Database Update
The SQL UPDATE statement changes the `status` field in the `proposals` table and updates the freelancer's activebids count:

```sql
-- Update proposal status
UPDATE proposals 
SET status = 'rejected'
WHERE id = [proposal_id]
RETURNING id, status, fromemail;

-- Decrement freelancer activebids count
UPDATE freelancer 
SET activebids = GREATEST(COALESCE(activebids, 0) - 1, 0)
WHERE email = [freelancer_email]
RETURNING email, activebids;
```

### 5. Status Verification
After the update, the system:
- Returns the updated proposal data
- Logs the successful update
- Updates the freelancer's activebids count
- Refreshes the bids list to show the new status

### 6. Activebids Management
The system automatically manages the freelancer's `activebids` count:

- **When submitting a proposal**: `activebids` is incremented by 1
- **When accepting a bid**: `activebids` is decremented by 1 (bid is no longer active)
- **When rejecting a bid**: `activebids` is decremented by 1 (bid is no longer active)
- **When bid is under review**: `activebids` remains unchanged (bid is still active)

This ensures accurate tracking of how many active bids each freelancer has.

## Database Schema

### Proposals Table Structure
```sql
CREATE TABLE IF NOT EXISTS proposals (
  id SERIAL PRIMARY KEY,
  jobid INTEGER REFERENCES jobposted(id),
  coverletter TEXT NOT NULL,
  budgetquoted INTEGER NOT NULL,
  proposedtimeline VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- This field gets updated to 'rejected'
  submittedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fromemail VARCHAR(100) NOT NULL, -- freelancer email
  toemail VARCHAR(100) NOT NULL    -- client email
);
```

### Freelancer Table Structure
```sql
CREATE TABLE IF NOT EXISTS freelancer (
  id SERIAL PRIMARY KEY,
  cognitoid VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  metamaskid VARCHAR(100),
  activebids INTEGER DEFAULT 0, -- Tracks number of active bids
  rejectedbids INTEGER DEFAULT 0,
  pendingbids INTEGER DEFAULT 0
);
```

### Status Values
- `pending` - Initial status when bid is submitted
- `accepted` - Bid has been accepted by client
- `rejected` - Bid has been rejected by client
- `under_review` - Bid is being evaluated

## Frontend Display

### Bid Status Overview
All bid statuses now include chat functionality to maintain communication with freelancers:

#### Pending Status
- Bid shows with "Pending" status
- Action buttons are visible (Accept, Reject, Chat)
- Bid appears in the main bids list

#### Accepted Status
- Bid status shows "Accepted" with green styling
- Status message: "✅ Bid accepted! You can now start working with this freelancer."
- Chat button available to communicate with the accepted freelancer
- Green chat button styling

#### Rejected Status
- Bid status changes to "Rejected" with red styling
- Action buttons are hidden (no longer pending)
- Status message shows: "❌ Bid rejected. You can still chat with the freelancer if needed."
- Chat button is available to communicate with the freelancer
- Blue chat button styling
- Bid remains visible but with rejected status

#### Under Review Status
- Bid status shows "Under Review" with yellow styling
- Status message: "🔍 Bid is under review. You can chat with the freelancer while evaluating."
- Chat button available to communicate during evaluation
- Yellow chat button styling

## Security Features

### Client Verification
- Only the client who posted the job can reject bids
- Verification through `toemail` field matching
- Foreign key constraints ensure data integrity

### Input Validation
- Status must be one of: `accepted`, `rejected`, `pending`, `under_review`
- Proposal ID and client email are required
- SQL injection protection through parameterized queries

## Testing

### Test Scripts
Run these scripts to verify the complete workflow:

```bash
# Test bid rejection workflow
node test-bid-rejection.js

# Test activebids count updates
node test-activebids-update.js

# Test chat buttons for all statuses
node test-chat-buttons.js
```

### Manual Testing
1. Login as a client
2. Navigate to client dashboard
3. Find a pending bid
4. Click "❌ Reject Bid"
5. Verify status changes to "rejected"
6. Check database to confirm update

## Logging

### Server Logs
The API provides detailed logging:

```
=== UPDATE BID STATUS API START ===
Action requested: rejected
Updating proposal 123 status to rejected for client client@example.com
Executing UPDATE query: UPDATE proposals SET status = $1 WHERE id = $2 RETURNING id, status
Parameters: status=rejected, proposalId=123
✅ Proposal 123 status successfully updated to rejected
Updated record: { id: 123, status: 'rejected' }
=== UPDATE BID STATUS API END ===
```

### Frontend Logs
Browser console shows:
- Success/error messages
- API response details
- State updates

## Error Handling

### Common Issues
1. **Proposal not found**: Invalid proposal ID
2. **Access denied**: Client email doesn't match
3. **Database errors**: Connection or constraint issues

### Error Responses
```json
{
  "error": "Proposal not found or access denied",
  "status": 404
}
```

## Future Enhancements

### Planned Features
- Email notifications to freelancers when bids are rejected
- Rejection reason field for better communication
- Bulk rejection for multiple bids
- Rejection analytics and reporting

### Technical Improvements
- Real-time status updates via WebSocket
- Audit trail for all status changes
- Integration with notification system 