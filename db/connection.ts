import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "pg";

const { Pool } = pkg;

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set environment
const ENV: string = process.env.NODE_ENV || "dev";

// Load environment variables from the correct .env file
dotenv.config({ path: path.resolve(__dirname, `../.env.${ENV}`) });

// Create and export the PostgreSQL pool
const db = new Pool({
  user: process.env.PGUSER as string,
  password: process.env.PGPASSWORD as string,
  database: process.env.PGDATABASE as string,
  host: process.env.PGHOST as string,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
});

export default db;
