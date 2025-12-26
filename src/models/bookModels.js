const db = require("../config/db");

const Book = {
  // Fungsi untuk mengambil banyak buku dengan filter
  findMany: async ({ search, genre, top_rated, limit, offset }) => {
    // Memastikan limit dan offset adalah angka murni untuk mencegah error di MySQL Docker
    const safeLimit = parseInt(limit) || 10;
    const safeOffset = parseInt(offset) || 0;

    // Menampilkan data buku
    let query = "SELECT title, author, genre, rating FROM books WHERE 1=1";
    let params = [];

    // Fitur Search (Judul, Author atau Tags)
    if (search) {
      query += " AND (title LIKE ? OR author LIKE ? OR tags LIKE ?)";
      params.push(`%${search}%`, `%${search}%`,`%${search}%`);
    }

    // Filter Genre
    if (genre) {
      query += " AND genre = ?";
      params.push(genre);
    }

    // Menampilkan top rated books
    if (top_rated === 'true') {
      query += " ORDER BY rating DESC";
    } else {
      query += " ORDER BY id ASC";
    }

    // Tampilan dibatasi 10 buku menggunakan Template Literals untuk menghindari error "Incorrect arguments"
    query += ` LIMIT ${safeLimit} OFFSET ${safeOffset}`;

    // Menggunakan db.query agar kompatibel dengan LIMIT/OFFSET di berbagai versi MySQL
    const [rows] = await db.query(query, params);
    return rows;
  },

  // Fungsi untuk ambil satu buku berdasarkan ID
  findById: async (id) => {
    const [rows] = await db.execute("SELECT * FROM books WHERE id = ?", [id]);
    return rows[0];
  }
};

module.exports = Book;
