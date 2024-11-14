/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://ryde_owner:ykJC8uISFRx0@ep-proud-silence-a1fs3ypl.ap-southeast-1.aws.neon.tech/ryde?sslmode=require",
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");
    client.release();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

testConnection();
