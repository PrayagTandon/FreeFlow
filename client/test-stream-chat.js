// Test script to verify Stream Chat functionality
const BASE_URL = 'http://localhost:3000/api';
const SERVER_URL = 'http://localhost:5000/api';

async function testStreamChat() {
  console.log('🧪 Testing Stream Chat Feature...\n');

  try {
    // Test 1: Initialize Stream database
    console.log('1️⃣ Testing Stream database initialization...');
    const initResponse = await fetch(`${BASE_URL}/init-stream-db`);
    
    if (initResponse.ok) {
      const initData = await initResponse.json();
      console.log('✅ Stream database initialized successfully');
      console.log('Tables created:', initData.tables);
    } else {
      console.log('❌ Stream database initialization failed');
      const errorData = await initResponse.json();
      console.log('Error:', errorData.error);
    }

    // Test 2: Generate Stream token
    console.log('\n2️⃣ Testing Stream token generation...');
    const tokenData = {
      userId: 1,
      userRole: 'Client',
      userName: 'Test Client'
    };

    const tokenResponse = await fetch(`${SERVER_URL}/chat/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tokenData)
    });

    if (tokenResponse.ok) {
      const tokenResult = await tokenResponse.json();
      console.log('✅ Stream token generated successfully');
      console.log('User ID:', tokenResult.userId);
      console.log('Token length:', tokenResult.token.length);
    } else {
      console.log('❌ Stream token generation failed');
      const errorData = await tokenResponse.json();
      console.log('Error:', errorData.error);
    }

    // Test 3: Create chat room
    console.log('\n3️⃣ Testing chat room creation...');
    const roomData = {
      proposalId: 1,
      clientId: 1,
      freelancerId: 1,
      clientName: 'Test Client',
      freelancerName: 'Test Freelancer'
    };

    const roomResponse = await fetch(`${SERVER_URL}/chat/create-room`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(roomData)
    });

    if (roomResponse.ok) {
      const roomResult = await roomResponse.json();
      console.log('✅ Chat room created successfully');
      console.log('Channel ID:', roomResult.channelId);
      console.log('Room ID:', roomResult.roomId);
      
      const channelId = roomResult.channelId;

      // Test 4: Fetch chat rooms for client
      console.log('\n4️⃣ Testing chat rooms retrieval...');
      const roomsResponse = await fetch(`${SERVER_URL}/chat/rooms/1/Client`);

      if (roomsResponse.ok) {
        const roomsData = await roomsResponse.json();
        console.log('✅ Chat rooms fetched successfully');
        console.log('Number of rooms:', roomsData.rooms.length);
        if (roomsData.rooms.length > 0) {
          console.log('First room channel ID:', roomsData.rooms[0].stream_channel_id);
        }
      } else {
        console.log('❌ Chat rooms fetching failed');
        const errorData = await roomsResponse.json();
        console.log('Error:', errorData.error);
      }

      // Test 5: Get chat room by proposal ID
      console.log('\n5️⃣ Testing chat room by proposal ID...');
      const roomByIdResponse = await fetch(`${SERVER_URL}/chat/room/1`);

      if (roomByIdResponse.ok) {
        const roomByIdData = await roomByIdResponse.json();
        console.log('✅ Chat room by proposal ID fetched successfully');
        console.log('Room proposal ID:', roomByIdData.room.proposal_id);
        console.log('Room channel ID:', roomByIdData.room.stream_channel_id);
      } else {
        console.log('❌ Chat room by proposal ID fetching failed');
        const errorData = await roomByIdResponse.json();
        console.log('Error:', errorData.error);
      }

    } else {
      console.log('❌ Chat room creation failed');
      const errorData = await roomResponse.json();
      console.log('Error:', errorData.error);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }

  console.log('\n🎉 Stream Chat feature test completed!');
  console.log('\n📝 Next Steps:');
  console.log('1. Set up Stream account at https://getstream.io');
  console.log('2. Add environment variables (see STREAM_CHAT_SETUP.md)');
  console.log('3. Install dependencies: npm install');
  console.log('4. Start the application and test the chat feature');
}

// Run the test
testStreamChat(); 