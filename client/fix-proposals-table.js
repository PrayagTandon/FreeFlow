// Script to fix proposals table structure
const fixProposalsTable = async () => {
  try {
    console.log('🔧 Fixing proposals table structure...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Create a simple API endpoint to fix the proposals table
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
      const errorData = await fixResponse.json();
      console.log('❌ Failed to fix proposals table');
      console.log('Error:', errorData.error);
    }
    
  } catch (error) {
    console.error('💥 Error fixing proposals table:', error.message);
  }
};

// Run the fix
fixProposalsTable(); 