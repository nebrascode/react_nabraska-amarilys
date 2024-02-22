##(02) version control and branch management (GIT)##

3 poin yang telah dipelajari: 

1. **GIT adalah salah satu version control yang digunakan para developer untuk berkolaborasi membangun suatu aplikasi/produk digital:**
   - Dengan Git, para pengembang dapat melacak perubahan yang dilakukan pada kode sumber proyek, mengelola cabang (branches) untuk mengembangkan fitur baru secara terisolasi, dan menggabungkan (merge) perubahan dari berbagai kontributor.

2. **Mempelajari cara menginstal GIT:**
   - Proses instalasi Git bervariasi tergantung pada sistem operasi yang digunakan (Windows, MacOS, Linux) dan preferensi pengguna.
   - Untuk Windows, pengguna dapat mengunduh dan menginstal Git melalui installer resmi dari situs web Git (https://git-scm.com/).
   - Pada MacOS, Git bisa diinstal melalui terminal menggunakan package manager seperti Homebrew, atau dengan mengunduh installer dari situs web resmi.
   - Pada distribusi Linux, Git biasanya sudah tersedia melalui paket manajer distribusi atau dapat diunduh melalui sumber kode resmi Git.

3. **Mempelajari cara untuk membuat repository, git pull dan push, membuat dan mengganti branch:**
   - **Membuat Repository:**
     - Untuk membuat repository baru, pengguna dapat menggunakan perintah `git init` pada direktori proyek lokal.
     - Repository tersebut akan berisi semua file dan sejarah perubahan yang terkait dengan proyek tersebut.

   - **Git Pull dan Push:**
     - Git pull digunakan untuk mengambil perubahan terbaru dari repository remote dan menggabungkannya dengan branch lokal.
     - Git push digunakan untuk mengirimkan perubahan lokal ke repository remote agar dapat diakses dan digunakan oleh kontributor lain.

   - **Membuat dan Mengganti Branch:**
     - Untuk membuat branch baru, pengguna dapat menggunakan perintah `git branch <nama-branch>`.
     - Untuk beralih ke branch lain, pengguna dapat menggunakan perintah `git checkout <nama-branch>`.
     - Branch digunakan untuk mengembangkan fitur atau memperbaiki bug tanpa mempengaruhi kode di branch utama (biasanya disebut `master` atau `main`).
     - Setelah selesai mengembangkan fitur di branch tersebut, perubahan dapat digabungkan kembali ke branch utama menggunakan perintah `git merge`.