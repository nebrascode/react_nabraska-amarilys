Ringkasan Materi Bootstrap:

1. **Pengertian Bootstrap:**
   Bootstrap adalah kerangka kerja (framework) front-end yang populer untuk pengembangan web responsif dan mobile-first. Ini menyediakan seperangkat alat dan gaya yang dapat digunakan untuk mempercepat proses pengembangan web dengan menyediakan komponen-komponen siap pakai dan gaya-gaya yang dapat disesuaikan.

2. **Cara Install:**
   - Unduh Bootstrap dari situs resminya atau gunakan manajer paket seperti npm atau yarn.
   - Integrasikan Bootstrap ke dalam proyek Anda dengan menautkan berkas CSS dan JavaScript Bootstrap ke halaman HTML Anda.
   - Anda juga dapat menggunakan platform seperti BootstrapCDN untuk menyertakan Bootstrap secara online.

3. **Macam-Macam Komponen Bootstrap:**
   - **Container:** Komponen ini digunakan untuk membungkus konten situs Anda. Biasanya digunakan untuk mengatur lebar konten dan responsif.
   - **Col (Column):** Digunakan dalam grid sistem Bootstrap untuk mengatur tata letak konten di dalam baris (row). Dapat digunakan untuk membuat kolom-kolom dengan lebar yang berbeda sesuai dengan kebutuhan tata letak.
   - **Row:** Merupakan baris dalam grid sistem Bootstrap yang digunakan untuk mengelompokkan kolom-kolom. Baris-baris ini membantu dalam penataan dan pengaturan kolom-kolom secara horizontal.
   - **Table:** Bootstrap menyediakan gaya yang siap pakai untuk tabel, yang membuat tabel terlihat lebih rapi dan responsif. Anda dapat menambahkan kelas-kelas seperti `table`, `table-striped`, `table-bordered`, dll., untuk mengatur gaya dan perilaku tabel.

4. **Contoh Container, Col, Row, Table:**
   - **Container:**
     ```html
     <div class="container">
         <!-- Konten situs Anda di sini -->
     </div>
     ```

   - **Col:**
     ```html
     <div class="container">
         <div class="row">
             <div class="col-md-6">Kolom 1</div>
             <div class="col-md-6">Kolom 2</div>
         </div>
     </div>
     ```

   - **Row:**
     ```html
     <div class="container">
         <div class="row">
             <!-- Kolom-kolom di sini -->
         </div>
     </div>
     ```

   - **Table:**
     ```html
     <table class="table table-striped">
         <thead>
             <tr>
                 <th>#</th>
                 <th>Nama</th>
                 <th>Email</th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>1</td>
                 <td>John Doe</td>
                 <td>john@example.com</td>
             </tr>
             <tr>
                 <td>2</td>
                 <td>Jane Doe</td>
                 <td>jane@example.com</td>
             </tr>
         </tbody>
     </table>
     ```

Dengan menggunakan Bootstrap, Anda dapat dengan cepat membangun situs web yang responsif dan menarik dengan menggunakan komponen-komponen yang telah disediakan tanpa perlu membuat dari awal.