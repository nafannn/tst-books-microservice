const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");
require("dotenv").config();

const dbPath = '/app/data/database.sqlite';

const dbPromise = (async () => {
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("✅ Database Connected: Berhasil terhubung ke SQLite!");

    return db;
  } catch (err) {
    console.error("❌ Database Connection Error:", err.message);
  }
})();

module.exports = dbPromise;
