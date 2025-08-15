// Script to check what's in the client table
const checkClientTable = async () => {
  try {
    console.log('🔍 Checking client table contents...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Check what user data we have
    const userData = localStorage.getItem('user');
    if (!userData) {
      console.log('❌ No user data in localStorage. Please login first.');
      return;
    }
    
    const user = JSON.parse(userData);
    console.log('👤 Current user:', {
      name: user.name,
      email: user.email,
      role: user.role,
      metamaskid: user.metamaskid
    });
    
    // Now let's check what's in the client table
    console.log('\n🔍 Checking client table structure and data...');
    
    // We'll use the post-proposal API to check the client table
    // (it has the debug logging we need)
    const checkResponse = await fetch('http://localhost:3000/api/post-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Debug Check',
        description: 'Just checking client table',
        tags: 'Debug',
        location: 'Remote',
        jobLevel: 'Entry',
        budget: 100,
        qualificationsPreferred: 'None',
        validTill: '2024-12-31',
        companyName: 'Debug Corp',
        photoUrl: ['https://example.com/debug.jpg'],
        clientId: user.metamaskid,
        clientEmail: user.email
      })
    });
    
    if (checkResponse.ok) {
      console.log('✅ Job created successfully - client table check passed!');
    } else {
      const errorData = await checkResponse.json();
      console.log('❌ Job creation failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
      
      // The error should show us what's in the client table from the debug logs
      console.log('\n💡 Check your server console for the debug logs that show:');
      console.log('1. What clientId was received');
      console.log('2. Whether it was found in the client table');
      console.log('3. What records exist in the client table');
    }
    
  } catch (error) {
    console.error('💥 Error checking client table:', error.message);
  }
};

// Run the check
checkClientTable(); 