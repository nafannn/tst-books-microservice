const dbPromise = require("../config/db");

const Book = {
  findMany: async ({ search, genre, top_rated, limit, offset }) => {
    const db = await dbPromise;
    const safeLimit = parseInt(limit) || 10;
    const safeOffset = parseInt(offset) || 0;

    let query = "SELECT title, author, genre, rating FROM books WHERE 1=1";
    let params = [];

    if (search) {
      query += " AND (title LIKE ? OR author LIKE ? OR tags LIKE ?)";
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }
    if (genre) {
      query += " AND genre = ?";
      params.push(genre);
    }
    
    query += top_rated === 'true' ? " ORDER BY rating DESC" : " ORDER BY id ASC";
    query += ` LIMIT ${safeLimit} OFFSET ${safeOffset}`;

    return await db.all(query, params); 
  },

  findById: async (id) => {
    const db = await dbPromise;
    return await db.get("SELECT * FROM books WHERE id = ?", [id]);
  }
};