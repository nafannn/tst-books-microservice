const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Fungsi middleware untuk cek API Key
const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ status: 'error', message: 'Unauthorized: API Key diperlukan' });
  }
  next(); // Lanjut ke controller jika key benar
};

// Pasang middleware di semua route buku
router.use(authMiddleware);

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);

module.exports = router;