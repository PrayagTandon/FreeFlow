import { Pool } from 'pg';
 
const pool = new Pool({
  connectionString: `${process.env.POSTGRE_SQL}`,
  ssl: {
    rejectUnauthorized: false
  }
});
 
export default pool;