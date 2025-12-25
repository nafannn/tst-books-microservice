require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const bookRoutes = require("./routes/bookRoutes");

// Base route - Dokumentasi API
app.get("/", (req, res) => {
  res.json({
    name: "Book Catalog API",
    version: "1.0.0",
    description: "Advanced Microservice with Automated Pagination & Search",
    endpoints: {
      allBooks: "GET /books?apiKey=...",
      pagination: "GET /books?page=2&apiKey=...",
      search: "GET /books?search=judul_atau_author&apiKey=...",
      filterGenre: "GET /books?genre=Fiction&apiKey=...",
      topRated: "GET /books?top_rated=true&apiKey=..."
    },
    authentication: {
      type: "API Key Required",
      methods: ["Headers: x-api-key", "Query: ?apiKey="],
      key_preview: "BOOK-KEY-UASTST***"
    },
    deployment: {
      environment: "STB Armbian - Docker Container",
      status: "Active 🚀",
      timestamp: new Date().toISOString()
    }
  });
});

// Endpoint
app.use("/books", bookRoutes);
module.exports = app;
