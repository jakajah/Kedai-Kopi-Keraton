# Kopi Keraton

Website katalog kedai kopi dengan tema kopi Indonesia. Halaman ini menampilkan informasi kedai, pilihan menu, produk biji kopi, dan keranjang belanja sederhana.

## Fitur

- Navigasi ke bagian Home, Tentang Kami, Menu, Produk, dan Kontak.
- Tampilan responsif untuk halaman katalog.
- Detail produk dalam modal.
- Keranjang belanja dengan tambah produk, ubah jumlah, hapus produk, dan perhitungan total.
- Formulir data pelanggan pada bagian checkout.

## Menjalankan Proyek

Proyek ini berupa website statis dan tidak memerlukan proses build atau instalasi dependency.

1. Buka folder proyek di Visual Studio Code.
2. Jalankan `index..html` menggunakan ekstensi Live Server atau Five Server, atau buka file tersebut langsung di browser.
3. Koneksi internet diperlukan untuk memuat Alpine.js, Feather Icons, Google Fonts, dan peta Google Maps dari layanan eksternal.

## Struktur Folder

```text
Kedai-Kopi-Keraton/
├── index..html       # Halaman utama
├── css/
│   └── style.css     # Gaya dan layout
├── js/
│   └── script.js     # Navigasi, pencarian, dan modal produk
├── src/
│   └── app.js        # Data produk dan logika keranjang dengan Alpine.js
└── img/
    ├── menu/         # Gambar menu
    └── product/      # Gambar produk kopi
```

## Catatan Checkout

Checkout pada proyek ini hanya menampilkan pesan bahwa pesanan siap dikonfirmasi. Belum ada backend, penyimpanan pesanan, atau integrasi payment gateway; konfirmasi pesanan dan pembayaran dilakukan di luar website.