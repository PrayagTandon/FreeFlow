// Debug script to test chat system step by step
const testChatDebug = async () => {
  try {
    console.log('🔍 Debugging Chat System...');
    
    // Test 1: Check if the API endpoints are accessible
    console.log('\n📋 Test 1: Checking API accessibility...');
    
    try {
      const response = await fetch('/api/chat/get-or-create-room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proposalId: 1,
          clientMetamaskId: '0x1234567890abcdef',
          freelancerMetamaskId: '0xfedcba0987654321'
        }),
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ API response:', data);
      } else {
        const errorData = await response.json();
        console.log('❌ API error:', errorData);
      }
    } catch (error) {
      console.log('❌ Fetch error:', error.message);
    }
    
    // Test 2: Check if the component can be imported
    console.log('\n📋 Test 2: Checking component import...');
    try {
      // This will test if the component file exists
      const componentResponse = await fetch('/components/ChatSystem.js');
      console.log('Component file accessible:', componentResponse.ok);
    } catch (error) {
      console.log('❌ Component import issue:', error.message);
    }
    
    // Test 3: Check database connection
    console.log('\n📋 Test 3: Checking database connection...');
    try {
      const dbResponse = await fetch('/api/init-db');
      console.log('Database accessible:', dbResponse.ok);
    } catch (error) {
      console.log('❌ Database connection issue:', error.message);
    }
    
    console.log('\n🔍 Debug Summary:');
    console.log('Check the console above for specific error messages');
    console.log('Common issues:');
    console.log('1. API endpoint not found (404)');
    console.log('2. Database connection failed');
    console.log('3. Missing required fields in request');
    
  } catch (error) {
    console.error('💥 Debug error:', error.message);
  }
};

// Run the debug test
testChatDebug(); 