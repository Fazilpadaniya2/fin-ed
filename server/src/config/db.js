import 'dotenv/config';
import { Pool } from 'pg';

export const pool = new Pool({
  host: 'db.nxsyeynalvhdlivygdra.supabase.co',
  port: 5432,
  user: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'postgres',
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
});
