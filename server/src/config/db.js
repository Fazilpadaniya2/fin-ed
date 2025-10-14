// db.js
import 'dotenv/config';
import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.DB_HOST,               // aws-1-ca-central-1.pooler.supabase.com
  port: Number(process.env.DB_PORT),       // 6543
  user: process.env.DB_USER,               // postgres.<project-ref>
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,           // postgres
  ssl: { rejectUnauthorized: false },      // <— ignore CA check
  max: 10,
  idleTimeoutMillis: 30000,
});

pool.query('select current_database() db, now() ts')
  .then(r => console.log('Connected DB:', r.rows[0].db))
  .catch(e => console.error('DB connect error:', e.message));
