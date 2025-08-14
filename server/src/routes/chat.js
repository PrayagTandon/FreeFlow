import express from 'express';
import { StreamChat } from 'stream-chat';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Initialize Stream Chat server client
const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

// Create chat room when proposal is submitted
router.post('/create-room', async (req, res) => {
  try {
    const { proposalId, clientId, freelancerId, clientName, freelancerName } = req.body;

    if (!proposalId || !clientId || !freelancerId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if chat room already exists
    const existingRoom = await prisma.chat_rooms.findUnique({
      where: { proposal_id: proposalId }
    });

    if (existingRoom) {
      return res.json({ 
        message: 'Chat room already exists',
        channelId: existingRoom.stream_channel_id 
      });
    }

    // Create Stream channel
    const channel = serverClient.channel('messaging', `proposal-${proposalId}`, {
      name: `Proposal ${proposalId} Chat`,
      members: [`client-${clientId}`, `freelancer-${freelancerId}`],
      created_by_id: `client-${clientId}`,
      custom: {
        proposal_id: proposalId,
        client_id: clientId,
        freelancer_id: freelancerId
      }
    });

    await channel.create();

    // Store in database
    const chatRoom = await prisma.chat_rooms.create({
      data: {
        proposal_id: proposalId,
        stream_channel_id: channel.cid,
        client_id: clientId,
        freelancer_id: freelancerId
      }
    });

    res.status(201).json({
      message: 'Chat room created successfully',
      channelId: channel.cid,
      roomId: chatRoom.id
    });

  } catch (error) {
    console.error('Error creating chat room:', error);
    res.status(500).json({ error: 'Failed to create chat room' });
  }
});

// Get user's chat rooms
router.get('/rooms/:userId/:userRole', async (req, res) => {
  try {
    const { userId, userRole } = req.params;

    let rooms;
    if (userRole === 'Client') {
      rooms = await prisma.chat_rooms.findMany({
        where: { client_id: parseInt(userId) },
        include: {
          // You can add joins here if needed
        },
        orderBy: { created_at: 'desc' }
      });
    } else {
      rooms = await prisma.chat_rooms.findMany({
        where: { freelancer_id: parseInt(userId) },
        include: {
          // You can add joins here if needed
        },
        orderBy: { created_at: 'desc' }
      });
    }

    res.json({ rooms });

  } catch (error) {
    console.error('Error fetching chat rooms:', error);
    res.status(500).json({ error: 'Failed to fetch chat rooms' });
  }
});

// Generate Stream token for user
router.post('/token', async (req, res) => {
  try {
    const { userId, userRole, userName } = req.body;

    if (!userId || !userRole || !userName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const userIdString = `${userRole.toLowerCase()}-${userId}`;
    
    const token = serverClient.createToken(userIdString);

    res.json({ 
      token,
      userId: userIdString,
      userName
    });

  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

// Get chat room by proposal ID
router.get('/room/:proposalId', async (req, res) => {
  try {
    const { proposalId } = req.params;

    const room = await prisma.chat_rooms.findUnique({
      where: { proposal_id: parseInt(proposalId) }
    });

    if (!room) {
      return res.status(404).json({ error: 'Chat room not found' });
    }

    res.json({ room });

  } catch (error) {
    console.error('Error fetching chat room:', error);
    res.status(500).json({ error: 'Failed to fetch chat room' });
  }
});

export default router; 