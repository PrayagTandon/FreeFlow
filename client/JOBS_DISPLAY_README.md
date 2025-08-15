# Jobs Display in Freelancer Home

This update adds the ability to display real jobs from the database in the freelancer-home page, sorted by expiration date (validtill) so jobs expiring soonest appear first.

## What's New

### 1. New API Endpoint: `/api/get-jobs`
- Fetches all active jobs from the `jobposted` table
- Orders jobs by expiration date (soonest first)
- Includes client information (name and metamask ID)
- Only shows jobs that haven't expired yet

### 2. Updated Freelancer Home Page
- Replaces hardcoded job data with real database data
- Shows loading states while fetching jobs
- Displays error messages if something goes wrong
- Enhanced job cards with:
  - Company name
  - Budget information
  - Location and job level
  - Expiration date with urgency indicators
  - Tags and photo placeholders
  - Client name (posted by information)

### 3. Smart Sorting
- Jobs are automatically sorted by `validtill` date
- Jobs expiring soonest appear at the top
- Secondary sort by posting date (newest first)
- Jobs without expiration dates appear last

## Current Status

✅ **Resolved**: The JOIN issue between `jobposted` and `users` tables has been fixed. The `clientid` field in `jobposted` is now VARCHAR and properly joins with `users.cognitoid` to display client names.

## How to Test

### Step 1: Start the Development Server
```bash
cd client
npm run dev
```

### Step 2: Add Sample Jobs (Optional)
If you want to test with sample data, run:
```bash
node add-sample-jobs.js
```

This will add 5 sample jobs with different expiration dates to test the sorting.

### Step 3: View the Freelancer Home Page
Navigate to `http://localhost:3000/freelancer-home` to see the jobs displayed with full client information.

## Job Data Structure

Each job includes:
- **Basic Info**: title, description, company name
- **Requirements**: tags, location, job level, qualifications
- **Financial**: budget, contract type
- **Timing**: posting date, expiration date, days until expiry
- **Client Info**: client name, metamask ID, email
- **Media**: photo URLs (if any)

## Features

### Urgency Indicators
- **Red**: Jobs expiring in 3 days or less
- **Orange**: Jobs expiring in 4-7 days
- **Green**: Jobs with more than 7 days left

### Responsive Design
- Job cards adapt to different screen sizes
- Mobile-friendly layout for job details
- Responsive expiry information display

### Error Handling
- Graceful fallbacks for missing data
- User-friendly error messages
- Retry functionality for failed requests

## Database Schema

The jobs are fetched from the `jobposted` table with this structure:
```sql
CREATE TABLE jobposted (
  id SERIAL PRIMARY KEY,
  clientid VARCHAR(100) NOT NULL,  -- Now VARCHAR to match users.cognitoid
  name VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[],
  location VARCHAR(100),
  joblevel VARCHAR(50),
  budget INTEGER,
  contracttohire BOOLEAN DEFAULT false,
  qualificationspreferred TEXT,
  postingtime TIME DEFAULT CURRENT_TIME,
  postingdate DATE DEFAULT CURRENT_DATE,
  validtill DATE,
  companyname VARCHAR(100),
  customizable BOOLEAN DEFAULT true,
  photourls TEXT[],
  email VARCHAR(100)
);
```

The API now properly JOINs with the `users` table using:
```sql
LEFT JOIN users u ON j.clientid = u.cognitoid
```

## Future Enhancements

- Add job filtering by category, location, or budget
- Implement job search functionality
- Add job bookmarking/saving feature
- Show proposal count for each job
- Add job application tracking

## Troubleshooting

### Common Issues

1. **No jobs displayed**: Check if the database has jobs and if the API endpoint is working
2. **API errors**: Check the console for error messages
3. **Sorting issues**: Ensure `validtill` dates are properly formatted in the database

### Debug Commands

```bash
# Test database connection
node test-db-simple.js

# Test job posting
node test-proposal-direct.js

# Add sample jobs for testing
node add-sample-jobs.js
```

## API Response Format

```json
{
  "success": true,
  "jobs": [
    {
      "id": 1,
      "title": "Job Title",
      "description": "Job description...",
      "tags": ["tag1", "tag2"],
      "budget": 5000,
      "location": "Remote",
      "validTill": "2024-01-15",
      "daysUntilExpiry": 5,
      "companyName": "Company Name",
      "clientId": "user_cognito_id",
      "clientName": "Client Name",
      "clientMetamaskId": "0x123..."
    }
  ],
  "total": 1
}
``` 