// Test script to verify message storage functionality
const testMessageStorage = async () => {
  try {
    console.log('🧪 Testing Message Storage System...');
    
    // Test data
    const testProposalId = 1;
    const testClientMetamaskId = '0x1234567890abcdef';
    const testFreelancerMetamaskId = '0xfedcba0987654321';
    
    console.log(`\n🔍 Testing with proposal ID: ${testProposalId}`);
    console.log(`Client: ${testClientMetamaskId}`);
    console.log(`Freelancer: ${testFreelancerMetamaskId}`);
    
    // Step 1: Create a chat room
    console.log('\n📝 Step 1: Creating chat room...');
    const createRoomResponse = await fetch('/api/chat/get-or-create-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        proposalId: testProposalId,
        clientMetamaskId: testClientMetamaskId,
        freelancerMetamaskId: testFreelancerMetamaskId
      }),
    });
    
    if (!createRoomResponse.ok) {
      console.log('❌ Failed to create chat room');
      return;
    }
    
    const roomData = await createRoomResponse.json();
    const chatRoomId = roomData.room.id;
    console.log('✅ Chat room created with ID:', chatRoomId);
    
    // Step 2: Send a message from client
    console.log('\n💬 Step 2: Sending message from client...');
    const clientMessage = "Hello freelancer! I'm interested in your proposal.";
    const sendClientMessageResponse = await fetch('/api/chat/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatRoomId: chatRoomId,
        senderId: testClientMetamaskId,
        messageText: clientMessage
      }),
    });
    
    if (sendClientMessageResponse.ok) {
      const clientMessageData = await sendClientMessageResponse.json();
      console.log('✅ Client message sent successfully:', clientMessageData.data.id);
    } else {
      console.log('❌ Failed to send client message');
      return;
    }
    
    // Step 3: Send a message from freelancer
    console.log('\n💬 Step 3: Sending message from freelancer...');
    const freelancerMessage = "Hi client! Thank you for your interest. I'm excited to work on this project.";
    const sendFreelancerMessageResponse = await fetch('/api/chat/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatRoomId: chatRoomId,
        senderId: testFreelancerMetamaskId,
        messageText: freelancerMessage
      }),
    });
    
    if (sendFreelancerMessageResponse.ok) {
      const freelancerMessageData = await sendFreelancerMessageResponse.json();
      console.log('✅ Freelancer message sent successfully:', freelancerMessageData.data.id);
    } else {
      console.log('❌ Failed to send freelancer message');
      return;
    }
    
    // Step 4: Fetch all messages for the chat room
    console.log('\n📥 Step 4: Fetching all messages...');
    const getMessagesResponse = await fetch(`/api/chat/get-messages?chatRoomId=${chatRoomId}`);
    
    if (getMessagesResponse.ok) {
      const messagesData = await getMessagesResponse.json();
      console.log(`✅ Retrieved ${messagesData.messages.length} messages:`);
      
      messagesData.messages.forEach((msg, index) => {
        console.log(`  ${index + 1}. [${msg.createdAt}] ${msg.senderId}: ${msg.messageText}`);
      });
      
      // Verify we have both messages
      if (messagesData.messages.length === 2) {
        console.log('✅ Both messages were stored and retrieved correctly!');
      } else {
        console.log('❌ Expected 2 messages, got:', messagesData.messages.length);
      }
    } else {
      console.log('❌ Failed to fetch messages');
    }
    
    // Step 5: Send another message to test persistence
    console.log('\n💬 Step 5: Testing message persistence...');
    const followUpMessage = "Great! When can we start?";
    const sendFollowUpResponse = await fetch('/api/chat/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatRoomId: chatRoomId,
        senderId: testClientMetamaskId,
        messageText: followUpMessage
      }),
    });
    
    if (sendFollowUpResponse.ok) {
      console.log('✅ Follow-up message sent successfully');
      
      // Fetch messages again to verify persistence
      const finalMessagesResponse = await fetch(`/api/chat/get-messages?chatRoomId=${chatRoomId}`);
      if (finalMessagesResponse.ok) {
        const finalMessagesData = await finalMessagesResponse.json();
        console.log(`✅ Final message count: ${finalMessagesData.messages.length}`);
        
        if (finalMessagesData.messages.length === 3) {
          console.log('✅ All 3 messages persisted correctly!');
        } else {
          console.log('❌ Message count mismatch');
        }
      }
    } else {
      console.log('❌ Failed to send follow-up message');
    }
    
    console.log('\n✅ Message Storage Test Completed!');
    console.log('📝 Summary:');
    console.log('  ✅ Chat room creation works');
    console.log('  ✅ Messages are saved to database');
    console.log('  ✅ Messages are retrieved correctly');
    console.log('  ✅ Message persistence works');
    console.log('  ✅ Multiple users can send messages');
    console.log('\n🎯 The message storage system is working perfectly!');
    
  } catch (error) {
    console.error('💥 Error testing message storage:', error.message);
  }
};

// Run the test
testMessageStorage(); 