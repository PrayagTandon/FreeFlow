import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET(request) {
  try {
    console.log('=== GET MESSAGES API START ===');
    
    const { searchParams } = new URL(request.url);
    const chatRoomId = searchParams.get('chatRoomId');

    if (!chatRoomId) {
      return NextResponse.json(
        { error: 'Chat room ID is required' },
        { status: 400 }
      );
    }

    console.log(`Fetching messages for chat room ${chatRoomId}`);

    const dbClient = await pool.connect();
    try {
      // Get all messages for this chat room, ordered by creation time
      const getMessagesQuery = `
        SELECT id, chat_room_id, sender_id, message_text, created_at
        FROM messages 
        WHERE chat_room_id = $1
        ORDER BY created_at ASC
      `;
      
      const result = await dbClient.query(getMessagesQuery, [chatRoomId]);
      
      console.log(`Found ${result.rows.length} messages for chat room ${chatRoomId}`);

      return NextResponse.json({
        message: 'Messages retrieved successfully',
        messages: result.rows.map(msg => ({
          id: msg.id,
          chatRoomId: msg.chat_room_id,
          senderId: msg.sender_id,
          messageText: msg.message_text,
          createdAt: msg.created_at
        }))
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET MESSAGES API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET MESSAGES API END ===');
  }
} 