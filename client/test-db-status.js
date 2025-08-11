// Test script to check database status and table existence
const BASE_URL = 'http://localhost:3000/api';

async function checkDatabaseStatus() {
  console.log('🔍 Checking Database Status...\n');

  try {
    // Check database schema
    console.log('1️⃣ Checking database schema...');
    const schemaResponse = await fetch(`${BASE_URL}/check-schema`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (schemaResponse.ok) {
      const schemaData = await schemaResponse.json();
      console.log('✅ Schema check successful');
      console.log('Database:', schemaData.database);
      console.log('\nTable Status:');
      
      Object.entries(schemaData.tables).forEach(([tableName, status]) => {
        console.log(`   ${tableName}: ${status.status}`);
        if (status.columns) {
          console.log(`     Columns: ${status.columns.map(col => `${col.column_name}(${col.data_type})`).join(', ')}`);
        }
      });
    } else {
      console.log('❌ Schema check failed');
      const errorData = await schemaResponse.json();
      console.log('Error:', errorData.error);
      return;
    }

    // Try to initialize database if needed
    console.log('\n2️⃣ Checking if database initialization is needed...');
    const initResponse = await fetch(`${BASE_URL}/init-db`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (initResponse.ok) {
      const initData = await schemaResponse.json();
      console.log('✅ Database initialization completed');
    } else {
      console.log('⚠️ Database initialization may have failed or tables already exist');
    }

    console.log('\n🎉 Database status check completed!');

  } catch (error) {
    console.error('❌ Check failed:', error.message);
  }
}

// Run the check
checkDatabaseStatus(); 