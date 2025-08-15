# Activebids Management System

## Overview
The system automatically tracks and updates the `activebids` count in the freelancer table whenever bids are submitted, accepted, or rejected. This ensures accurate tracking of how many active bids each freelancer currently has.

## How It Works

### 1. Proposal Submission (Increment)
When a freelancer submits a new proposal:

```javascript
// Start transaction
await dbClient.query('BEGIN');

// Insert the proposal
const insertQuery = `
  INSERT INTO proposals (
    jobid, coverletter, budgetquoted, proposedtimeline, 
    status, submittedat, fromemail, toemail
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING id, jobid, coverletter, budgetquoted, proposedtimeline, 
            status, submittedat, fromemail, toemail
`;

// Increment freelancer's activebids count
const updateFreelancerQuery = `
  UPDATE freelancer 
  SET activebids = COALESCE(activebids, 0) + 1
  WHERE email = $1
  RETURNING email, activebids
`;

await dbClient.query(updateFreelancerQuery, [freelancerEmail]);

// Commit transaction
await dbClient.query('COMMIT');
```

**Result**: `activebids` is incremented by 1

### 2. Bid Acceptance/Rejection (Decrement)
When a client accepts or rejects a bid:

```javascript
// Start transaction
await dbClient.query('BEGIN');

// Update proposal status
const updateQuery = `
  UPDATE proposals 
  SET status = $1
  WHERE id = $2
  RETURNING id, status, fromemail
`;

// If bid is accepted or rejected, decrement activebids
if (status === 'accepted' || status === 'rejected') {
  const freelancerEmail = result.rows[0].fromemail;
  
  const updateFreelancerQuery = `
    UPDATE freelancer 
    SET activebids = GREATEST(COALESCE(activebids, 0) - 1, 0)
    WHERE email = $1
    RETURNING email, activebids
  `;
  
  await dbClient.query(updateFreelancerQuery, [freelancerEmail]);
}

// Commit transaction
await dbClient.query('COMMIT');
```

**Result**: `activebids` is decremented by 1 (but never goes below 0)

### 3. Bid Status Changes
Different bid statuses affect the `activebids` count differently:

- **`pending`**: Counts as active bid (increments on submission)
- **`accepted`**: No longer active (decrements count)
- **`rejected`**: No longer active (decrements count)
- **`under_review`**: Still counts as active (no change to count)
- **`withdrawn`**: No longer active (decrements count when bid is withdrawn)

## Database Schema

### Freelancer Table
```sql
CREATE TABLE IF NOT EXISTS freelancer (
  id SERIAL PRIMARY KEY,
  cognitoid VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  metamaskid VARCHAR(100),
  activebids INTEGER DEFAULT 0,    -- Tracks active bids
  rejectedbids INTEGER DEFAULT 0,   -- Tracks rejected bids
  pendingbids INTEGER DEFAULT 0     -- Tracks pending bids
);
```

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

## API Endpoints

### 1. Submit Proposal (`/api/submit-proposal`)
- **Method**: POST
- **Action**: Increments `activebids` by 1
- **Transaction**: Ensures both proposal creation and freelancer update succeed

### 2. Update Bid Status (`/api/update-bid-status`)
- **Method**: PUT
- **Action**: Decrements `activebids` by 1 (for accepted/rejected bids)
- **Transaction**: Ensures both status update and freelancer update succeed

### 3. Withdraw Bid (`/api/withdraw-bid`)
- **Method**: DELETE
- **Action**: Decrements `activebids` by 1 (for withdrawn bids)
- **Transaction**: Ensures both proposal deletion and freelancer update succeed
- **Restriction**: Only pending bids can be withdrawn

## Transaction Safety

All operations use database transactions to ensure data consistency:

```javascript
try {
  await dbClient.query('BEGIN');
  
  // Perform multiple database operations
  await dbClient.query(operation1);
  await dbClient.query(operation2);
  
  await dbClient.query('COMMIT');
} catch (error) {
  await dbClient.query('ROLLBACK');
  throw error;
}
```

**Benefits**:
- If any operation fails, all changes are rolled back
- Prevents partial updates that could leave data in inconsistent state
- Ensures `activebids` count always matches actual number of active proposals

## Edge Cases Handled

### 1. Null/Undefined activebids
```sql
SET activebids = COALESCE(activebids, 0) + 1
```
- If `activebids` is NULL, it defaults to 0 before incrementing

### 2. Preventing Negative Counts
```sql
SET activebids = GREATEST(COALESCE(activebids, 0) - 1, 0)
```
- Uses `GREATEST()` function to ensure count never goes below 0

### 3. Freelancer Not Found
- If freelancer email doesn't exist, the update fails gracefully
- Transaction rollback ensures no partial updates

## Testing

### Test Scripts
```bash
# Test complete activebids workflow
node test-activebids-update.js

# Test bid rejection with activebids update
node test-bid-rejection.js

# Test chat functionality
node test-chat-buttons.js

# Test freelancer bids viewing and withdrawal
node test-freelancer-bids-view.js
```

### Manual Testing
1. **Submit Proposal**: Check that freelancer's `activebids` increases by 1
2. **Accept Bid**: Check that freelancer's `activebids` decreases by 1
3. **Reject Bid**: Check that freelancer's `activebids` decreases by 1
4. **Under Review**: Check that freelancer's `activebids` remains unchanged

## Monitoring and Logging

### Server Logs
The APIs provide detailed logging:

```
=== SUBMIT PROPOSAL API START ===
Transaction started for proposal submission
Proposal created successfully: { id: 123, ... }
Incrementing freelancer activebids count for: freelancer@example.com
✅ Freelancer activebids updated successfully
Updated freelancer: { email: 'freelancer@example.com', activebids: 5 }
Transaction committed successfully
=== SUBMIT PROPOSAL API END ===
```

### Database Queries
Monitor the actual SQL queries being executed:
```sql
-- Increment activebids
UPDATE freelancer SET activebids = COALESCE(activebids, 0) + 1 WHERE email = $1

-- Decrement activebids
UPDATE freelancer SET activebids = GREATEST(COALESCE(activebids, 0) - 1, 0) WHERE email = $1
```

## Performance Considerations

### Indexes
Ensure proper indexing for performance:
```sql
CREATE INDEX IF NOT EXISTS idx_freelancer_email ON freelancer(email);
CREATE INDEX IF NOT EXISTS idx_proposals_fromemail ON proposals(fromemail);
```

### Batch Operations
For bulk operations, consider batching updates:
```sql
UPDATE freelancer 
SET activebids = (
  SELECT COUNT(*) 
  FROM proposals 
  WHERE fromemail = freelancer.email 
  AND status = 'pending'
);
```

## Future Enhancements

### Planned Features
- **Real-time Updates**: WebSocket notifications when activebids count changes
- **Analytics Dashboard**: Track bid submission patterns and success rates
- **Automated Cleanup**: Periodic cleanup of stale or abandoned bids
- **Bid Limits**: Configurable maximum active bids per freelancer

### Technical Improvements
- **Caching**: Redis cache for frequently accessed freelancer stats
- **Background Jobs**: Async processing for non-critical updates
- **Audit Trail**: Track all activebids changes with timestamps
- **API Rate Limiting**: Prevent abuse of bid submission endpoints

## Troubleshooting

### Common Issues

1. **Activebids Count Mismatch**
   - Check for failed transactions
   - Verify all status updates are properly processed
   - Run consistency check queries

2. **Transaction Failures**
   - Check database connection pool
   - Verify table permissions
   - Check for constraint violations

3. **Performance Issues**
   - Monitor query execution times
   - Check index usage
   - Consider query optimization

### Debug Queries
```sql
-- Check freelancer activebids count
SELECT email, activebids FROM freelancer WHERE email = 'freelancer@example.com';

-- Count actual pending proposals
SELECT COUNT(*) FROM proposals WHERE fromemail = 'freelancer@example.com' AND status = 'pending';

-- Find proposals by status
SELECT status, COUNT(*) FROM proposals WHERE fromemail = 'freelancer@example.com' GROUP BY status;
```

## Support

For technical support or questions about activebids management:
1. Check server logs for detailed operation information
2. Run test scripts to verify functionality
3. Use debug queries to check database state
4. Verify transaction rollback behavior in error scenarios 