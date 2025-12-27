require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

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
      search: "GET /books?search=title_author_or_tags&apiKey=...",
      filterGenre: "GET /books?genre=Fiction&apiKey=...",
      topRated: "GET /books?top_rated=true&apiKey=..."
    },
    authentication: {
      type: "API Key Required",
      methods: ["Headers: x-api-key", "Query: ?apiKey="],
    },
    deployment: {
      environment: "STB Armbian - Docker Container",
      status: "Active 🚀",
      timestamp: new Date().toISOString()
    }
  });
});

// Endpoint
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument, {customSiteTitle: "Book Catalog API Documentation"}));
app.use("/books", bookRoutes);
module.exports = app;
