### Rangkuman Materi Data Structure: Array dan Set dalam JavaScript

#### Array:
1. **Definisi:**
   - Sebuah struktur data yang digunakan untuk menyimpan kumpulan elemen dalam satu variabel.

2. **Deklarasi:**
   - Dapat dideklarasikan dengan cara `let namaArray = [elemen1, elemen2, ...];`.

3. **Akses Elemen:**
   - Elemen dalam array diakses menggunakan indeks.
   - Indeks array dimulai dari 0.

4. **Operasi:**
   - **Tambah Elemen:** 
     - `namaArray.push(elemenBaru)`: Menambahkan elemen baru ke akhir array.
   - **Hapus Elemen:** 
     - `namaArray.pop()`: Menghapus elemen terakhir dari array.
   - **Akses Elemen:** 
     - `namaArray[indeks]`: Mengakses elemen array pada indeks tertentu.
   - **Panjang Array:** 
     - `namaArray.length`: Mengembalikan jumlah elemen dalam array.
   - **Iterasi Array:** 
     - `for (let i = 0; i < namaArray.length; i++) { ... }` atau menggunakan metode seperti `forEach()`.

5. **Contoh:**
   ```javascript
   let fruits = ["Apple", "Banana", "Orange"];
   console.log(fruits[0]); // Output: Apple
   fruits.push("Mango");
   console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Mango"]
   ```

#### Set:
1. **Definisi:**
   - Koleksi nilai unik tanpa urutan tertentu.

2. **Deklarasi:**
   - Dapat dideklarasikan dengan cara `let namaSet = new Set([nilai1, nilai2, ...]);`.

3. **Operasi:**
   - **Tambah Elemen:** 
     - `namaSet.add(nilaiBaru)`: Menambahkan nilai baru ke dalam set.
   - **Hapus Elemen:** 
     - `namaSet.delete(nilai)`: Menghapus nilai tertentu dari set.
   - **Cek Kehadiran Elemen:** 
     - `namaSet.has(nilai)`: Memeriksa apakah nilai ada dalam set.
   - **Iterasi Set:** 
     - Menggunakan `for...of` atau metode seperti `forEach()`.

4. **Contoh:**
   ```javascript
   let uniqueNumbers = new Set([1, 2, 3, 4, 5]);
   uniqueNumbers.add(6);
   uniqueNumbers.delete(3);
   console.log(uniqueNumbers.has(4)); // Output: true
   ```

5. **Kelebihan:**
   - Memastikan setiap nilai adalah unik (tidak bisa sama)
   - Operasi penambahan dan penghapusan elemen dilakukan dengan cepat.
