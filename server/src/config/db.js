// db.js
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // include ?sslmode=require
  // If needed locally:
  // ssl: { rejectUnauthorized: false },
  max: 10,                 // concurrent connections
  idleTimeoutMillis: 30000 // close idle after 30s
});
