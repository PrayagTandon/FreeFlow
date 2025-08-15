# Chat System Documentation

## Overview
The chat system allows clients and freelancers to communicate once a bid is accepted or when they want to discuss project details. It's built around your existing `chat_rooms` table and provides a seamless messaging experience.

## Database Schema

### Chat Rooms Table
```sql
CREATE TABLE chat_rooms (
  id SERIAL PRIMARY KEY,
  proposal_id INTEGER UNIQUE NOT NULL,
  stream_channel_id VARCHAR(255) NOT NULL,
  client_id VARCHAR NOT NULL,           -- Client metamask ID
  freelancer_id VARCHAR NOT NULL,       -- Freelancer metamask ID
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active'
);

-- Constraints
CONSTRAINT chat_rooms_clientid_fkey
  FOREIGN KEY (client_id) REFERENCES public.client(metamaskid) ON DELETE CASCADE

CONSTRAINT chat_rooms_freelancerid_fkey
  FOREIGN KEY (freelancer_id) REFERENCES public.freelancer(metamaskid) ON DELETE CASCADE

CONSTRAINT chat_rooms_proposal_id_key
  UNIQUE (proposal_id)
```

### Messages Table
```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  chat_room_id INTEGER NOT NULL,
  sender_id VARCHAR NOT NULL,           -- Metamask ID of message sender
  message_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (chat_room_id) REFERENCES chat_rooms(id) ON DELETE CASCADE
);
```

## API Endpoints

### 1. Get or Create Chat Room
**Endpoint**: `POST /api/chat/get-or-create-room`

**Purpose**: Creates a new chat room for a proposal or retrieves an existing one.

**Request Body**:
```json
{
  "proposalId": 123,
  "clientMetamaskId": "0x1234567890abcdef",
  "freelancerMetamaskId": "0xfedcba0987654321"
}
```

**Response**:
```json
{
  "message": "Chat room created successfully",
  "room": {
    "id": 1,
    "proposalId": 123,
    "streamChannelId": "proposal_123_1703123456789",
    "clientId": "client@example.com",
    "freelancerId": "freelancer@example.com",
    "createdAt": "2023-12-21T10:30:56.789Z",
    "status": "active"
  }
}
```

**Features**:
- Prevents duplicate chat rooms for the same proposal
- Generates unique stream channel IDs
- Returns existing room if already created

### 2. Get User Chat Rooms
**Endpoint**: `GET /api/chat/get-user-rooms?userMetamaskId=id&userRole=role`

**Purpose**: Retrieves all chat rooms for a specific user (client or freelancer).

**Query Parameters**:
- `userMetamaskId`: User's metamask ID
- `userRole`: Either "client" or "freelancer"

### 3. Send Message
**Endpoint**: `POST /api/chat/send-message`

**Purpose**: Saves a new message to the database.

**Request Body**:
```json
{
  "chatRoomId": 1,
  "senderId": "0x1234567890abcdef",
  "messageText": "Hello! How are you?"
}
```

**Response**:
```json
{
  "message": "Message sent successfully",
  "data": {
    "id": 1,
    "chatRoomId": 1,
    "senderId": "0x1234567890abcdef",
    "messageText": "Hello! How are you?",
    "createdAt": "2023-12-21T10:30:56.789Z"
  }
}
```

### 4. Get Messages
**Endpoint**: `GET /api/chat/get-messages?chatRoomId=1`

**Purpose**: Retrieves all messages for a specific chat room.

**Query Parameters**:
- `chatRoomId`: ID of the chat room

**Response**:
```json
{
  "message": "Messages retrieved successfully",
  "messages": [
    {
      "id": 1,
      "chatRoomId": 1,
      "senderId": "0x1234567890abcdef",
      "messageText": "Hello! How are you?",
      "createdAt": "2023-12-21T10:30:56.789Z"
    }
  ]
}
```

**Response**:
```json
{
  "message": "User chat rooms retrieved successfully",
  "rooms": [
    {
      "id": 1,
      "proposalId": 123,
      "streamChannelId": "proposal_123_1703123456789",
      "clientId": "client@example.com",
      "freelancerId": "freelancer@example.com",
      "createdAt": "2023-12-21T10:30:56.789Z",
      "status": "active",
      "proposal": {
        "coverLetter": "I'm excited to work on this project...",
        "budgetQuoted": 1500,
        "proposedTimeline": "2 weeks",
        "status": "accepted"
      },
      "job": {
        "title": "Web Development Project",
        "description": "Build a modern web application...",
        "budget": 2000,
        "companyName": "TechCorp"
      },
      "participants": {
        "clientName": "John Client",
        "freelancerName": "Jane Freelancer"
      }
    }
  ]
}
```

**Features**:
- Joins with `proposals`, `jobposted`, `client`, and `freelancer` tables
- Provides comprehensive context for each chat room
- Orders by creation date (newest first)

## Frontend Components

### ChatSystem Component
**Location**: `src/components/ChatSystem.js`

**Props**:
- `userEmail`: Current user's email
- `userRole`: User's role ("client" or "freelancer")
- `proposalId`: ID of the proposal for this chat
- `otherPartyEmail`: Email of the person being chatted with
- `jobTitle`: Title of the job being discussed
- `onClose`: Function to close the chat modal

**Features**:
- Modal-based chat interface
- Real-time message display
- Message input with send functionality
- Responsive design
- Loading states and error handling

## Integration Points

### Client Dashboard
**Location**: `src/app/client-dashboard/page.js`

**Chat Triggers**:
- Chat button on accepted bids
- Chat button on rejected bids
- Chat button on pending bids
- Chat button on under-review bids

**Implementation**:
```javascript
const openChat = (bid) => {
  setSelectedChatBid(bid);
  setShowChat(true);
};

// Chat button in bid cards
<button onClick={() => openChat(bid)}>
  💬 Chat with Freelancer
</button>

// Chat system component
{showChat && selectedChatBid && (
  <ChatSystem
    userEmail={user.email}
    userRole="client"
    proposalId={selectedChatBid.proposalId}
    otherPartyEmail={selectedChatBid.freelancerEmail}
    jobTitle={selectedChatBid.jobTitle}
    onClose={() => {
      setShowChat(false);
      setSelectedChatBid(null);
    }}
  />
)}
```

### Freelancer Dashboard
**Location**: `src/app/freelancer-home/page.js`

**Chat Triggers**:
- Chat button on all bid statuses in "My Bids" modal

**Implementation**:
```javascript
const openChat = (bid) => {
  setSelectedChatBid(bid);
  setShowChat(true);
};

// Chat button in bid cards
<button onClick={() => openChat(bid)}>
  💬 Chat with Client
</button>

// Chat system component
{showChat && selectedChatBid && (
  <ChatSystem
    userEmail={user.email}
    userRole="freelancer"
    proposalId={selectedChatBid.proposalId}
    otherPartyEmail={selectedChatBid.clientEmail}
    jobTitle={selectedChatBid.jobTitle}
    onClose={() => {
      setShowChat(false);
      setSelectedChatBid(null);
    }}
  />
)}
```

## Chat Flow

### 1. Bid Acceptance/Rejection
When a client accepts or rejects a bid:
1. Bid status is updated in `proposals` table
2. Chat room is automatically available
3. Both parties can initiate chat

### 2. Chat Initiation
1. User clicks chat button on a bid
2. System checks if chat room exists
3. If not, creates new chat room
4. Opens chat modal with room context

### 3. Message Exchange
1. User types message and clicks send
2. Message is added to local state
3. In production, message would be sent to Stream API
4. Real-time updates for both parties

## Security Features

### Access Control
- Users can only access chat rooms they're part of
- Chat room creation requires valid proposal ID
- Email verification for room participants

### Data Validation
- Required fields validation
- Email format validation
- Role validation (client/freelancer only)

## Future Enhancements

### Stream API Integration
The current implementation simulates messaging. For production:

1. **Install Stream SDK**:
```bash
npm install stream-chat
```

2. **Initialize Stream Client**:
```javascript
import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance('your_api_key');
```

3. **Create Channel**:
```javascript
const channel = client.channel('messaging', room.streamChannelId, {
  name: `Chat for ${jobTitle}`,
  members: [clientEmail, freelancerEmail]
});
```

4. **Send Messages**:
```javascript
await channel.sendMessage({
  text: messageText,
  user_id: userEmail
});
```

### Real-time Features
- Typing indicators
- Online/offline status
- Message read receipts
- Push notifications
- File attachments

### Chat Management
- Chat history persistence
- Message search
- Chat room archiving
- Block/unblock users

## Testing

### Test Script
**Location**: `test-chat-system.js`

**Tests**:
1. Chat room creation
2. Duplicate room prevention
3. User chat room retrieval (client perspective)
4. User chat room retrieval (freelancer perspective)

**Run Test**:
```bash
node test-chat-system.js
```

### Manual Testing
1. **Client Dashboard**:
   - Accept a bid and click chat
   - Reject a bid and click chat
   - Click chat on pending bids

2. **Freelancer Dashboard**:
   - View bids modal
   - Click chat button on any bid

3. **Chat Functionality**:
   - Send messages
   - Verify message display
   - Test modal close/open

## Troubleshooting

### Common Issues

1. **Chat Room Not Created**:
   - Check proposal ID exists
   - Verify email addresses are valid
   - Check database connection

2. **Chat Modal Not Opening**:
   - Verify ChatSystem component is imported
   - Check state variables are properly set
   - Verify bid object structure

3. **Messages Not Sending**:
   - Check chat room initialization
   - Verify user authentication
   - Check console for errors

### Debug Queries
```sql
-- Check chat rooms
SELECT * FROM chat_rooms WHERE proposal_id = 123;

-- Check user's chat rooms
SELECT * FROM chat_rooms WHERE client_id = 'client@example.com' OR freelancer_id = 'freelancer@example.com';

-- Verify proposal exists
SELECT * FROM proposals WHERE id = 123;
```

## Performance Considerations

### Database Optimization
- Index on `proposal_id` (already unique)
- Index on `client_id` and `freelancer_id`
- Consider pagination for users with many chat rooms

### Frontend Optimization
- Lazy load chat components
- Debounce message input
- Virtual scrolling for long chat histories

## Support

For technical support or questions about the chat system:
1. Check server logs for API errors
2. Run test script to verify functionality
3. Check database schema and constraints
4. Verify frontend component integration

The chat system is designed to be robust, secure, and easily extensible for future real-time messaging features. 