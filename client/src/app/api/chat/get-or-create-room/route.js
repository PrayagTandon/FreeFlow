import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function POST(request) {
  try {
    console.log('=== GET OR CREATE CHAT ROOM API START ===');
    
    const { proposalId, clientMetamaskId, freelancerMetamaskId } = await request.json();

    if (!proposalId || !clientMetamaskId || !freelancerMetamaskId) {
      return NextResponse.json(
        { error: 'Proposal ID, client metamask ID, and freelancer metamask ID are required' },
        { status: 400 }
      );
    }

    console.log(`Getting/creating chat room for proposal ${proposalId}`);

    const dbClient = await pool.connect();
    try {
      // First, check if a chat room already exists for this proposal
      const existingRoomQuery = `
        SELECT id, proposal_id, stream_channel_id, client_id, freelancer_id, created_at, status
        FROM chat_rooms 
        WHERE proposal_id = $1
      `;
      
      const existingRoom = await dbClient.query(existingRoomQuery, [proposalId]);
      
      if (existingRoom.rows.length > 0) {
        console.log('✅ Chat room already exists');
        const room = existingRoom.rows[0];
        
        return NextResponse.json({
          message: 'Chat room retrieved successfully',
          room: {
            id: room.id,
            proposalId: room.proposal_id,
            streamChannelId: room.stream_channel_id,
            clientId: room.client_id,
            freelancerId: room.freelancer_id,
            createdAt: room.created_at,
            status: room.status
          }
        }, { status: 200 });
      }

      // Create a new chat room
      console.log('Creating new chat room...');
      
      // Generate a unique stream channel ID
      const streamChannelId = `proposal_${proposalId}_${Date.now()}`;
      
      const createRoomQuery = `
        INSERT INTO chat_rooms (
          proposal_id, stream_channel_id, client_id, freelancer_id, status
        )
        VALUES ($1, $2, $3, $4, 'active')
        RETURNING id, proposal_id, stream_channel_id, client_id, freelancer_id, created_at, status
      `;
      
      const newRoom = await dbClient.query(createRoomQuery, [
        proposalId,
        streamChannelId,
        clientMetamaskId,
        freelancerMetamaskId
      ]);
      
      console.log('✅ New chat room created successfully');
      
      const room = newRoom.rows[0];
      return NextResponse.json({
        message: 'Chat room created successfully',
        room: {
          id: room.id,
          proposalId: room.proposal_id,
          streamChannelId: room.stream_channel_id,
          clientId: room.client_id,
          freelancerId: room.freelancer_id,
          createdAt: room.created_at,
          status: room.status
        }
      }, { status: 201 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET OR CREATE CHAT ROOM API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET OR CREATE CHAT ROOM API END ===');
  }
} 