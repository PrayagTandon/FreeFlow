import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    console.log('=== INITIALIZING STREAM CHAT DATABASE ===');
    
    const dbClient = await pool.connect();
    try {
      // Create chat rooms table
      const createChatRoomsTable = `
        CREATE TABLE IF NOT EXISTS chat_rooms (
          id SERIAL PRIMARY KEY,
          proposal_id INTEGER NOT NULL,
          stream_channel_id VARCHAR(255) NOT NULL,
          client_id INTEGER NOT NULL,
          freelancer_id INTEGER NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'archived', 'closed')),
          UNIQUE(proposal_id)
        )
      `;
      
      await dbClient.query(createChatRoomsTable);
      console.log('✅ Chat rooms table created/verified');

      // Create indexes
      const createIndexes = [
        'CREATE INDEX IF NOT EXISTS idx_chat_rooms_proposal_id ON chat_rooms(proposal_id)',
        'CREATE INDEX IF NOT EXISTS idx_chat_rooms_client_id ON chat_rooms(client_id)',
        'CREATE INDEX IF NOT EXISTS idx_chat_rooms_freelancer_id ON chat_rooms(freelancer_id)'
      ];

      for (const indexQuery of createIndexes) {
        await dbClient.query(indexQuery);
      }
      console.log('✅ Chat room indexes created/verified');

      return NextResponse.json({
        message: 'Stream Chat database initialized successfully',
        tables: ['chat_rooms'],
        indexes: ['idx_chat_rooms_proposal_id', 'idx_chat_rooms_client_id', 'idx_chat_rooms_freelancer_id']
      });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== STREAM CHAT DATABASE INITIALIZATION ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Failed to initialize Stream Chat database', details: error.message },
      { status: 500 }
    );
  }
} 