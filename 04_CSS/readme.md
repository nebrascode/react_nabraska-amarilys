CSS, atau Cascading Style Sheets, adalah bahasa pemrograman yang digunakan untuk mendesain tampilan halaman web. Ini memungkinkan pemisahan antara struktur (HTML) dan tampilan (CSS) dari suatu halaman web. Berikut adalah ringkasan materi perkenalan CSS beserta contoh pemakaiannya:

### Perkenalan CSS:

1. **Tujuan Utama CSS:**
   - Memisahkan struktur dan tampilan halaman web.
   - Mengontrol tata letak, warna, font, dan gaya lainnya dari elemen HTML.

2. **Konsep Dasar CSS:**
   - **Selektor:** Menunjuk elemen HTML yang ingin diberi gaya.
   - **Properti:** Atribut yang ingin diubah (misalnya, warna atau ukuran font).
   - **Nilai:** Nilai yang diberikan kepada properti (misalnya, "red" atau "12px").

3. **Cara Menghubungkan CSS ke HTML:**
   - **Internal:** CSS ditulis di dalam elemen `<style>` di dalam tag `<head>` halaman HTML.
   - **External:** CSS disimpan di file terpisah dengan ekstensi `.css` dan dihubungkan ke halaman HTML dengan tag `<link>` di dalam tag `<head>`.
   - **Inline:** Gaya CSS ditambahkan langsung ke elemen HTML menggunakan atribut `style`.

4. **Prioritas dan Cascading:**
   - Prioritas CSS ditentukan oleh aturan cascading, yang menentukan urutan mana aturan yang lebih spesifik atau lebih dekat yang akan diterapkan.
   - Cascading mengikuti urutan: Inline CSS > Internal CSS > External CSS. 

### Contoh Pemakaian CSS:

1. **Mengubah Warna Teks:**
   ```css
   p {
       color: blue;
   }
   ```
   Ini akan mengubah warna teks semua elemen `<p>` menjadi biru.

2. **Mengatur Tata Letak:**
   ```css
   .container {
       width: 80%;
       margin: 0 auto;
   }
   ```
   Ini akan membuat semua elemen dengan kelas "container" menjadi lebar 80% dari lebar layar dan di tengah halaman.

3. **Mengubah Warna Latar Belakang:**
   ```css
   body {
       background-color: #f2f2f2;
   }
   ```
   Ini akan mengubah warna latar belakang halaman menjadi abu-abu muda.

4. **Mengatur Ukuran Font:**
   ```css
   h1 {
       font-size: 24px;
   }
   ```
   Ini akan membuat semua judul level 1 (`<h1>`) menjadi ukuran font 24 piksel.

5. **Pseudo-Class:**
   ```css
   a:hover {
       color: red;
   }
   ```
   Ini akan mengubah warna tautan saat dihover menjadi merah.

6. **Media Queries (Responsif):**
   ```css
   @media screen and (max-width: 600px) {
       body {
           font-size: 14px;
       }
   }
   ```
   Ini akan mengubah ukuran font menjadi 14 piksel saat lebar layar kurang dari atau sama dengan 600 piksel.

Dengan CSS, Anda memiliki kendali penuh atas tampilan halaman web Anda, memungkinkan Anda untuk membuat desain yang kreatif dan responsif.
