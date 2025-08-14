// Test script to verify bid rejection functionality
const testBidRejection = async () => {
  try {
    console.log('🧪 Testing bid rejection functionality...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
         // Check proposals table structure
     console.log('\n🔧 Checking proposals table structure...');
     const fixResponse = await fetch('http://localhost:3000/api/fix-schema', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         action: 'add_updatedat_to_proposals'
       })
     });
     
     if (fixResponse.ok) {
       console.log('✅ Proposals table structure verified!');
     } else {
       console.log('❌ Failed to verify proposals table structure');
     }
    
    // Test getting client bids to see current status
    const testClientEmail = 'test@example.com';
    console.log(`\n🔍 Testing get-client-bids API with email: ${testClientEmail}`);
    
    const bidsResponse = await fetch(`http://localhost:3000/api/get-client-bids?clientEmail=${encodeURIComponent(testClientEmail)}`);
    if (bidsResponse.ok) {
      const bidsData = await bidsResponse.json();
      console.log(`✅ Found ${bidsData.bids.length} bids for client`);
      
      if (bidsData.bids.length > 0) {
        const firstBid = bidsData.bids[0];
        console.log('First bid details:', {
          proposalId: firstBid.proposalId,
          currentStatus: firstBid.status,
          jobTitle: firstBid.jobTitle
        });
        
        // Test updating bid status to rejected
        if (firstBid.status === 'pending') {
          console.log('\n🔄 Testing bid rejection...');
          const rejectResponse = await fetch('/api/update-bid-status', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              proposalId: firstBid.proposalId,
              status: 'rejected',
              clientEmail: testClientEmail
            }),
          });
          
          if (rejectResponse.ok) {
            const rejectData = await rejectResponse.json();
            console.log('✅ Bid rejected successfully!');
            console.log('Updated proposal:', rejectData.proposal);
            
            // Verify the status was updated by fetching bids again
            console.log('\n🔄 Verifying status update...');
            const verifyResponse = await fetch(`http://localhost:3000/api/get-client-bids?clientEmail=${encodeURIComponent(testClientEmail)}`);
            if (verifyResponse.ok) {
              const verifyData = await verifyResponse.json();
              const updatedBid = verifyData.bids.find(bid => bid.proposalId === firstBid.proposalId);
              if (updatedBid) {
                console.log('✅ Status verification successful!');
                console.log('Updated bid status:', updatedBid.status);
                console.log('Job title:', updatedBid.jobTitle);
              } else {
                console.log('❌ Could not find updated bid');
              }
            } else {
              console.log('❌ Failed to verify status update');
            }
          } else {
            const errorData = await rejectResponse.json();
            console.log('❌ Failed to reject bid');
            console.log('Error:', errorData.error);
          }
        } else {
          console.log(`⚠️ First bid is not pending (status: ${firstBid.status}), cannot test rejection`);
        }
      } else {
        console.log('⚠️ No bids found to test rejection');
      }
    } else {
      console.log('❌ Failed to get client bids');
      const errorData = await bidsResponse.json();
      console.log('Error:', errorData.error);
    }
    
    console.log('\n✅ Bid rejection test completed!');
    
  } catch (error) {
    console.error('💥 Error testing bid rejection:', error.message);
  }
};

// Run the test
testBidRejection(); 