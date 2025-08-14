# Stream Chat Setup Guide for FreeFlow

## Overview
This implementation uses **Stream Chat** to provide real-time messaging between clients and freelancers. Chat rooms are automatically created when proposals are submitted.

## Features
- ✅ Real-time messaging with Stream Chat
- ✅ Automatic chat room creation on proposal submission
- ✅ Rich chat features (typing indicators, read receipts, file uploads)
- ✅ Responsive design
- ✅ Secure token-based authentication

## Setup Instructions

### 1. Stream Account Setup

1. Go to [GetStream.io](https://getstream.io) and create a free account
2. Create a new app in the Stream dashboard
3. Get your credentials:
   - API Key
   - API Secret
   - App ID

### 2. Environment Variables

#### Client (.env.local)
```env
# Database
DATABASE_URL="your_neon_database_url"

# Stream Chat Configuration
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key_here
```

#### Server (.env)
```env
# Database
DATABASE_URL="your_neon_database_url"

# Stream Chat Configuration
STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here
```

### 3. Install Dependencies

#### Client
```bash
cd client
npm install stream-chat@^8.14.0 stream-chat-react@^11.10.0
```

#### Server
```bash
cd server
npm install stream-chat@^8.14.0
```

### 4. Database Setup

Initialize the chat database tables:

```bash
# Start your client app
npm run dev

# Then visit: http://localhost:3000/api/init-stream-db
```

### 5. Start the Application

```bash
# Terminal 1 - Start the client
cd client
npm run dev

# Terminal 2 - Start the server
cd server
npm start
```

## How It Works

### 1. Proposal Submission Flow
```
Freelancer submits proposal
         ↓
Backend creates Stream channel
         ↓
Store mapping: proposalId → channelId → participants
         ↓
Both users can access chat via /chat page
```

### 2. Chat Room Creation
- When a proposal is submitted, a Stream channel is created
- Channel ID is stored in the `chat_rooms` table
- Both client and freelancer are added as channel members

### 3. Real-time Messaging
- Users connect to Stream using secure tokens
- Messages are handled entirely by Stream Chat
- Rich features like typing indicators and read receipts included

## API Endpoints

### Backend (Server)
- `POST /api/chat/create-room` - Create chat room for proposal
- `GET /api/chat/rooms/:userId/:userRole` - Get user's chat rooms
- `POST /api/chat/token` - Generate Stream token for user
- `GET /api/chat/room/:proposalId` - Get chat room by proposal ID

### Frontend (Client)
- `/chat` - Main chat page with rooms list and chat interface

## Database Schema

```sql
CREATE TABLE chat_rooms (
    id SERIAL PRIMARY KEY,
    proposal_id INTEGER NOT NULL,
    stream_channel_id VARCHAR(255) NOT NULL,
    client_id INTEGER NOT NULL,
    freelancer_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active',
    UNIQUE(proposal_id)
);
```

## Usage

### For Clients
1. Go to `/chat` page
2. See all conversations with freelancers who submitted proposals
3. Click on a conversation to start chatting
4. Real-time messaging with rich features

### For Freelancers
1. Go to `/chat` page
2. See all conversations with clients you've submitted proposals to
3. Click on a conversation to start chatting
4. Real-time messaging with rich features

## Stream Free Tier Limits
- 100 users
- 1M messages/month
- No credit card required for free tier
- Perfect for development and small to medium projects

## Integration Points

### Proposal Submission
To integrate chat room creation with proposal submission, add this to your proposal API:

```javascript
// After successful proposal creation
const chatResponse = await fetch('/api/chat/create-room', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    proposalId: proposal.id,
    clientId: proposal.clientId,
    freelancerId: proposal.freelancerId,
    clientName: client.name,
    freelancerName: freelancer.name
  })
});
```

## Troubleshooting

### Common Issues

1. **Chat not loading**
   - Check Stream API credentials
   - Verify environment variables are set
   - Check browser console for errors

2. **Token generation fails**
   - Ensure server is running
   - Check Stream API secret is correct
   - Verify user data is being passed correctly

3. **Chat rooms not appearing**
   - Ensure database tables are created
   - Check if chat rooms are being created on proposal submission
   - Verify user authentication

### Debug Commands

```bash
# Test database connection
curl http://localhost:3000/api/test-db

# Test chat room creation
curl -X POST http://localhost:3000/api/chat/create-room \
  -H "Content-Type: application/json" \
  -d '{"proposalId": 1, "clientId": 1, "freelancerId": 1}'

# Test token generation
curl -X POST http://localhost:3000/api/chat/token \
  -H "Content-Type: application/json" \
  -d '{"userId": 1, "userRole": "Client", "userName": "Test User"}'
```

## Security Considerations

1. **Token-based Authentication**: Users get secure Stream tokens
2. **Channel Access Control**: Only participants can access their channels
3. **Input Validation**: All API inputs are validated
4. **Environment Variables**: Sensitive data stored in environment variables

## Future Enhancements

- File/image sharing (built into Stream)
- Message reactions (built into Stream)
- Typing indicators (built into Stream)
- Push notifications
- Message search functionality
- Conversation archiving

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Stream credentials are correct
3. Ensure database tables are created
4. Check network connectivity
5. Review Stream dashboard for usage limits 