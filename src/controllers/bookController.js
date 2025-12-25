const Book = require("../models/bookModels");

exports.getAllBooks = async (req, res) => {
  try {
    // Ambil page dari query, default ke halaman 1
    const page = parseInt(req.query.page) || 1; 
    const limit = 10; // Jumlah buku yang ditampilkan per halaman
    const offset = (page - 1) * limit;

    // Mengambil parameter dari query string
    const { search, genre, top_rated } = req.query;

    // Panggil fungsi dari model
    const rows = await Book.findMany({ search, genre, top_rated, limit, offset });
    
    res.json({ 
      status: "success", 
      page: page,
      results: rows.length,
      data: rows 
    });

  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    
    if (!book) {
      return res.status(404).json({ status: "error", message: "Buku tidak ditemukan" });
    }
    
    res.json({ status: "success", data: book });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};