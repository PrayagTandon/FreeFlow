import { StreamChat } from 'stream-chat';

// Initialize Stream Chat client
const streamChat = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY);

export default streamChat; 