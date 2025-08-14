// Test script to insert into jobposted without foreign key constraint
const testInsertWithoutFK = async () => {
  try {
    console.log('🧪 Testing insert without foreign key constraint...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Try to create a simple test job
    const testJob = {
      name: 'FK Test Job',
      description: 'Testing insert without foreign key constraint',
      tags: 'Test, FK',
      location: 'Remote',
      jobLevel: 'Entry',
      budget: 100,
      qualificationsPreferred: 'None',
      validTill: '2024-12-31',
      companyName: 'FK Test Corp',
      photoUrl: ['https://example.com/test.jpg'],
      clientId: 'TEST_CLIENT_123',
      clientEmail: 'test@example.com'
    };
    
    console.log('\n📝 Attempting to create test job...');
    
    const createResponse = await fetch('http://localhost:3000/api/post-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testJob)
    });
    
    if (createResponse.ok) {
      console.log('🎉 SUCCESS! Job created without foreign key issues');
      console.log('✅ This means the basic insert works, foreign key is the problem');
    } else {
      const errorData = await createResponse.json();
      console.log('❌ Still failing');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
      
      if (errorData.details && errorData.details.includes('foreign key constraint')) {
        console.log('\n💡 Foreign key constraint is still the issue');
        console.log('This suggests the constraint is properly set and enforced');
      } else {
        console.log('\n💡 Different error - not foreign key related');
      }
    }
    
  } catch (error) {
    console.error('💥 Error in test:', error.message);
  }
};

// Run the test
testInsertWithoutFK(); 