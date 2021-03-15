## Menjalankan Aplikasi

1. npm install
2. npm start

## notes:
Berikut adalah beberapa notes saya dalam pengerjaan tugas berikut.
1. Saya baru mengerjakan sevara sepenuhnya untuk dashboard dan product
2. Asumsi saya semua yang ada di JSON baik isShowed atau isAllowed harus diletakkan di state management redux sehingga setiap section saya buat di reduxnya (karena ada beberapa fitur isAllowed yang false)
3. Saya mendefinisikan isShowed sebagai item yang bisa di show/hide sedangkan isAllowed fitur tertentu yang bisa di allowed jik user adalah pro member. Sedangkan untuk kasus tugas saya, saya baru menerapkan hingga sidebar product (user non pro member akan mendapatkan message merah seperti yang saya tampilkan)
4. Untuk sidebar yang lainnya diluar dashboard dan product, belum saya handle (saya kekurangan waktu) seharusnya mekanisme isShowed dan isAllowednya bekerja seperti pada sidebar all product. Disinipun saya belum mengatur tata component reactnya sepenuhnya
5. Terimakasih