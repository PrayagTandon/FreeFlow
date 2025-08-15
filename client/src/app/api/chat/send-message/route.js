import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function POST(request) {
  try {
    console.log('=== SEND MESSAGE API START ===');
    
    const { chatRoomId, senderId, messageText } = await request.json();

    if (!chatRoomId || !senderId || !messageText) {
      return NextResponse.json(
        { error: 'Chat room ID, sender ID, and message text are required' },
        { status: 400 }
      );
    }

    console.log(`Saving message for chat room ${chatRoomId}`);

    const dbClient = await pool.connect();
    try {
      // Insert the message into the messages table
      const insertMessageQuery = `
        INSERT INTO messages (chat_room_id, sender_id, message_text)
        VALUES ($1, $2, $3)
        RETURNING id, chat_room_id, sender_id, message_text, created_at
      `;
      
      const result = await dbClient.query(insertMessageQuery, [
        chatRoomId,
        senderId,
        messageText
      ]);
      
      console.log('✅ Message saved successfully');
      
      const message = result.rows[0];
      return NextResponse.json({
        message: 'Message sent successfully',
        data: {
          id: message.id,
          chatRoomId: message.chat_room_id,
          senderId: message.sender_id,
          messageText: message.message_text,
          createdAt: message.created_at
        }
      }, { status: 201 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== SEND MESSAGE API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== SEND MESSAGE API END ===');
  }
} 