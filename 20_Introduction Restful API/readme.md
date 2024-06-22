### Introduction to REST API

**1. Pengertian REST API**

REST API (Representational State Transfer Application Programming Interface) adalah arsitektur yang digunakan dalam pengembangan layanan web untuk memungkinkan komunikasi antara klien dan server. REST menggunakan metode HTTP untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada sumber daya yang direpresentasikan dalam format tertentu, seperti JSON atau XML.

**2. JSON (JavaScript Object Notation)**

JSON adalah format pertukaran data yang ringan dan mudah dibaca serta ditulis oleh manusia. JSON digunakan untuk menyimpan dan mengirim data dalam REST API. Contoh struktur JSON:
```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
JSON terdiri dari pasangan kunci-nilai (key-value pairs) dan mendukung struktur data sederhana seperti objek (dengan {}), array (dengan []), string, angka, boolean, dan null.

**3. HTTP (Hypertext Transfer Protocol)**

HTTP adalah protokol yang digunakan untuk komunikasi di web. REST API memanfaatkan metode HTTP untuk mengoperasikan data, yang meliputi:

- **GET:** Mengambil data dari server.
- **POST:** Mengirim data baru ke server.
- **PUT:** Memperbarui data yang ada di server.
- **DELETE:** Menghapus data dari server.

Setiap permintaan HTTP terdiri dari URL, metode, header, dan body (untuk POST dan PUT).

**4. REST (Representational State Transfer)**

REST adalah gaya arsitektur yang didasarkan pada beberapa prinsip dasar:

- **Stateless:** Setiap permintaan dari klien ke server harus berisi semua informasi yang diperlukan untuk memahami dan memproses permintaan tersebut. Server tidak menyimpan konteks klien di antara permintaan.
- **Client-Server:** Pemisahan antara klien (yang membuat permintaan) dan server (yang menyediakan sumber daya).
- **Cacheable:** Respon dari server harus mengindikasikan apakah mereka bisa di-cache oleh klien untuk meningkatkan kinerja.
- **Uniform Interface:** Penggunaan URL untuk mengakses sumber daya dan metode HTTP standar untuk operasi CRUD.

### Contoh Sederhana REST API

Misalkan kita memiliki REST API untuk mengelola data buku di perpustakaan. Berikut adalah contoh permintaan HTTP yang dapat dilakukan:

- **GET /books:** Mengambil daftar semua buku.
- **GET /books/1:** Mengambil detail buku dengan ID 1.
- **POST /books:** Menambahkan buku baru dengan mengirimkan data buku dalam format JSON.
- **PUT /books/1:** Memperbarui buku dengan ID 1 dengan data baru.
- **DELETE /books/1:** Menghapus buku dengan ID 1.

Dengan memahami dasar-dasar ini, kita dapat mengembangkan dan mengonsumsi layanan REST API untuk berbagai keperluan aplikasi web dan mobile.