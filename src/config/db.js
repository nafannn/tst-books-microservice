const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10
}).promise(); 

// Cek koneksi ke database
db.getConnection()
  .then((connection) => {
    console.log("✅ Database Connected: Berhasil terhubung ke MySQL!");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err.message);
  });

module.exports = db;