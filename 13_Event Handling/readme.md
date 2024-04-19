Event handling di React adalah proses menanggapi aksi pengguna, seperti klik mouse, input keyboard, atau perubahan data. Saat pengguna berinteraksi dengan elemen UI, event handling memicu fungsi tertentu untuk dijalankan.

Contoh event handling di React:

1. **onClick:** Ketika pengguna mengklik sebuah tombol, fungsi tertentu dapat dijalankan.
   
   ```jsx
   <button onClick={handleClick}>Klik Saya</button>
   ```

2. **onChange:** Saat nilai input berubah, fungsi tertentu dapat dipanggil.
   
   ```jsx
   <input type="text" onChange={handleChange} />
   ```

3. **onSubmit:** Ketika pengguna mengirimkan formulir, fungsi tertentu dapat dijalankan.
   
   ```jsx
   <form onSubmit={handleSubmit}>
     <input type="text" />
     <button type="submit">Submit</button>
   </form>
   ```

4. **onMouseOver/onMouseOut:** Saat pengguna mengarahkan kursor mouse ke atau keluar dari elemen, fungsi dapat dipanggil.
   
   ```jsx
   <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover saya</div>
   ```

Dengan menggunakan event handling, React memungkinkan aplikasi web berinteraksi secara dinamis dengan pengguna dan lingkungannya.
