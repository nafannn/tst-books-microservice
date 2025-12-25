const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const bookRoutes = require("./routes/bookRoutes");

// Base route untuk health check
app.get("/", (req, res) => {
  res.json({
    message: "Book Service API is running 🚀",
    status: "Active",
    timestamp: new Date().toISOString()
  });
});

// Endpoint utama
app.use("/books", bookRoutes);

module.exports = app;