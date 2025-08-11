import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_9uQUMtpV7WLS@ep-mute-wind-ae41pg5n-pooler.c-2.us-east-2.aws.neon.tech/freeflow?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool; 