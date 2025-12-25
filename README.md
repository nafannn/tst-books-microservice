# 📘 BOOK CATALOG MICROSERVICE

**UAS II3160 – Teknologi Sistem Terintegrasi**  
**Nama:** Nurul Na'im Natifah  
**NIM:** 18223106  
**Kelas:** K-02  

---

## 1. Deskripsi Layanan

Book Catalog Microservice merupakan layanan berbasis *microservice architecture* yang berfungsi untuk mengelola dan menyediakan data katalog buku. Layanan ini dikembangkan menggunakan **Node.js** dengan **MySQL** sebagai basis data, serta dideploy menggunakan **Docker** di atas infrastruktur **STB Armbian**.

Sistem ini dirancang untuk memungkinkan pengguna melakukan pencarian, penyaringan, dan penelusuran data buku secara efisien melalui antarmuka berbasis API. Informasi yang disediakan mencakup judul buku, penulis, genre, tahun terbit, dan rating.

Sebagai bagian dari sistem terintegrasi, layanan ini berperan sebagai *data provider* yang dapat digunakan oleh layanan lain, seperti sistem rekomendasi atau aplikasi frontend. Pendekatan microservice memungkinkan sistem menjadi modular, mudah dikembangkan, dan scalable.

---

## 2. Akses Layanan

Layanan dapat diakses melalui endpoint publik berikut:
https://nafa.otwdochub.my.id/
Seluruh endpoint tersedia di bawah domain tersebut dan dapat diakses menggunakan metode HTTP yang sesuai.

---

## 3. Autentikasi dan Keamanan

Layanan ini menggunakan **API Key Authentication** untuk menjaga keamanan akses.

API Key dapat dikirimkan dengan salah satu cara berikut:

### 🔹 Melalui Header
x-api-key: API_KEY

### 🔹 Melalui Query Parameter
?apiKey=API_KEY

> **Catatan:** API Key tidak bersifat publik.

---

## 4. Daftar Endpoint dan Fungsionalitas

| Fitur | Endpoint | Deskripsi |
|------|----------|-----------|
| Health Check | `GET /` | Menampilkan status layanan dan daftar endpoint |
| Daftar Buku | `GET /books` | Mengambil seluruh data buku |
| Pagination | `GET /books?page=n` | Menampilkan data buku per halaman (10 data per halaman) |
| Pencarian | `GET /books?search=keyword` | Mencari buku berdasarkan judul atau penulis |
| Filter Genre | `GET /books?genre=fiction` | Mencari buku berdasarkan genre |
| Rating Tertinggi | `GET /books?top_rated=true` | Mengurutkan buku berdasarkan rating tertinggi |

---

## 5. Contoh Request

Contoh pemanggilan API menggunakan browser atau tools seperti Postman:
https://nafa.otwdochub.my.id/books?apiKey=API_KEY&search=little

---

## 6. Format Respon

Layanan akan mengembalikan data dalam format **JSON**.

### Contoh Status Respon:
- **200 OK** → Permintaan berhasil dan data dikembalikan  
- **401 Unauthorized** → API Key tidak valid atau tidak disertakan
- **500 Internal Server Error** → Kegagalan pada koneksi basis data atau logika server
