// Test script for client dashboard bids functionality
const testClientBids = async () => {
  try {
    console.log('🧪 Testing client dashboard bids functionality...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Fix proposals table structure if needed
    console.log('\n🔧 Fixing proposals table structure...');
    const fixResponse = await fetch('http://localhost:3000/api/fix-schema', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'add_updatedat_to_proposals'
      })
    });
    
    if (fixResponse.ok) {
      console.log('✅ Proposals table structure fixed successfully!');
    } else {
      console.log('❌ Failed to fix proposals table structure');
    }
    
    // Test getting client bids (replace with actual client email)
    const testClientEmail = 'test@example.com';
    console.log(`\n🔍 Testing get-client-bids API with email: ${testClientEmail}`);
    
    const bidsResponse = await fetch(`http://localhost:3000/api/get-client-bids?clientEmail=${encodeURIComponent(testClientEmail)}`);
    if (bidsResponse.ok) {
      const bidsData = await bidsResponse.json();
      console.log(`✅ Found ${bidsData.bids.length} bids for client`);
      if (bidsData.bids.length > 0) {
        console.log('Sample bid:', bidsData.bids[0]);
      }
    } else {
      console.log('❌ Failed to get client bids');
      const errorData = await bidsResponse.json();
      console.log('Error:', errorData.error);
    }
    
    console.log('\n✅ Client bids functionality test completed!');
    
  } catch (error) {
    console.error('💥 Error testing client bids:', error.message);
  }
};

// Run the test
testClientBids(); 