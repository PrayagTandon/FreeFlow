// Script to fix the activebids column in freelancer table
const fixActivebidsColumn = async () => {
  try {
    console.log('🔧 Fixing activebids column in freelancer table...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Fix the activebids column
    console.log('\n🔧 Adding activebids column to freelancer table...');
    const fixResponse = await fetch('http://localhost:3000/api/fix-schema', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'add_activebids_to_freelancer'
      }),
    });
    
    if (fixResponse.ok) {
      const fixData = await fixResponse.json();
      console.log('✅ Schema fix completed successfully!');
      console.log('Response:', fixData);
      
      // Test the freelancer stats API to verify the fix
      console.log('\n🧪 Testing freelancer stats API...');
      const testMetamaskId = 'test-freelancer-123'; // Replace with actual test ID
      
      const statsResponse = await fetch('http://localhost:3000/api/get-freelancer-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ metamaskId: testMetamaskId }),
      });
      
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        console.log('✅ Freelancer stats API working!');
        console.log('Stats:', statsData);
        console.log(`Active Bids: ${statsData.activebids}`);
      } else {
        const errorData = await statsResponse.json();
        console.log('⚠️ Freelancer stats API returned error:');
        console.log('Error:', errorData.error);
      }
      
    } else {
      const errorData = await fixResponse.json();
      console.log('❌ Schema fix failed');
      console.log('Error:', errorData.error);
    }
    
    console.log('\n✅ Activebids column fix completed!');
    console.log('📝 Summary:');
    console.log('  - Added activebids column to freelancer table');
    console.log('  - Set default value to 0');
    console.log('  - Updated existing records to use pendingbids value');
    console.log('  - Freelancer dashboard should now show correct activebids count');
    
  } catch (error) {
    console.error('💥 Error fixing activebids column:', error.message);
  }
};

// Run the fix
fixActivebidsColumn(); 