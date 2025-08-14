// Browser-compatible debug script for freelancer registration
// Run this in your browser console (F12 → Console tab)

const debugFreelancerInBrowser = async () => {
  try {
    console.log('🔍 Debugging freelancer registration in browser...');
    
    // Check localStorage
    const userData = localStorage.getItem('user');
    if (!userData) {
      console.log('❌ No user data in localStorage');
      return;
    }
    
    const user = JSON.parse(userData);
    console.log('👤 User data from localStorage:', user);
    
    // Check if user has required fields
    if (!user.metamaskid) {
      console.log('❌ User missing metamaskid');
      return;
    }
    
    if (!user.role) {
      console.log('❌ User missing role');
      return;
    }
    
    console.log(`\n📋 User Details:`);
    console.log(`  Name: ${user.name}`);
    console.log(`  Email: ${user.email}`);
    console.log(`  Role: ${user.role}`);
    console.log(`  MetaMask ID: ${user.metamaskid}`);
    console.log(`  MetaMask ID length: ${user.metamaskid.length}`);
    console.log(`  MetaMask ID type: ${typeof user.metamaskid}`);
    
    // Check for whitespace or hidden characters
    console.log(`\n🔍 MetaMask ID analysis:`);
    console.log(`  Raw: "${user.metamaskid}"`);
    console.log(`  Trimmed: "${user.metamaskid.trim()}"`);
    console.log(`  Has leading space: ${user.metamaskid.startsWith(' ')}`);
    console.log(`  Has trailing space: ${user.metamaskid.endsWith(' ')}`);
    console.log(`  Contains only hex: ${/^[0-9a-fA-Fx]+$/.test(user.metamaskid)}`);
    
    if (user.role !== 'Freelancer') {
      console.log(`\n❌ ROLE MISMATCH! You are registered as: ${user.role}`);
      console.log('This explains why the freelancer stats API can\'t find you!');
      console.log('You need to register as a Freelancer, not a Client.');
      return;
    }
    
    console.log('\n✅ User role is Freelancer, testing API...');
    
    // Test the freelancer stats API
    console.log('\n🧪 Testing freelancer stats API...');
    const statsResponse = await fetch('/api/get-freelancer-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metamaskId: user.metamaskid })
    });
    
    console.log(`Response status: ${statsResponse.status}`);
    
    if (statsResponse.ok) {
      const statsData = await statsResponse.json();
      console.log('✅ Stats API response:', statsData);
    } else {
      const errorData = await statsResponse.json();
      console.log('❌ Stats API error:', errorData);
      
      // Try with trimmed MetaMask ID
      console.log('\n🔄 Trying with trimmed MetaMask ID...');
      const trimmedResponse = await fetch('/api/get-freelancer-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ metamaskId: user.metamaskid.trim() })
      });
      
      if (trimmedResponse.ok) {
        const trimmedData = await trimmedResponse.json();
        console.log('🎉 SUCCESS with trimmed ID!', trimmedData);
        console.log('The issue was whitespace in your MetaMask ID!');
      } else {
        const trimmedError = await trimmedResponse.json();
        console.log('❌ Still failed with trimmed ID:', trimmedError);
      }
    }
    
    // Check if we can access the database directly
    console.log('\n🗄️ Testing database access...');
    try {
      const testResponse = await fetch('/api/test-db');
      if (testResponse.ok) {
        console.log('✅ Database connection working');
      } else {
        console.log('❌ Database connection failed');
      }
    } catch (dbError) {
      console.log('❌ Database test failed:', dbError.message);
    }
    
    // Check if there are any jobs in the system
    console.log('\n📝 Checking for available jobs...');
    try {
      const jobsResponse = await fetch('/api/get-jobs');
      if (jobsResponse.ok) {
        const jobsData = await jobsResponse.json();
        console.log(`📋 Found ${jobsData.total} jobs in the system`);
        if (jobsData.jobs.length > 0) {
          console.log('Sample job:', jobsData.jobs[0]);
        }
      } else {
        console.log('❌ Failed to fetch jobs');
      }
    } catch (jobsError) {
      console.log('❌ Jobs fetch failed:', jobsError.message);
    }
    
    console.log('\n💡 Summary of findings:');
    if (user.role !== 'Freelancer') {
      console.log('❌ MAIN ISSUE: You registered as a Client, not a Freelancer');
      console.log('   Solution: Re-register and select "Freelancer" as your role');
    } else {
      console.log('✅ Role is correct (Freelancer)');
      console.log('❌ MetaMask ID not found in freelancer table');
      console.log('   Possible causes:');
      console.log('   - Whitespace in MetaMask ID');
      console.log('   - Case sensitivity mismatch');
      console.log('   - Database record was never created');
    }
    
  } catch (error) {
    console.error('💥 Error in debug script:', error.message);
  }
};

// Run the debug function
debugFreelancerInBrowser(); 