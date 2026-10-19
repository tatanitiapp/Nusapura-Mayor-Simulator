# 🏛️ Nusapura: Mayor Simulator & City Governance Engine

> *"Membangun kota bukan hanya soal anggaran, tetapi tentang jalinan keputusan yang hidup selama bertahun-tahun."*  
> **Nusapura: City of Opportunities**

![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20WebView-3DDC84?logo=android&logoColor=white)
![Language](https://img.shields.io/badge/Language-Kotlin%20%7C%20JavaScript-F18E33?logo=kotlin&logoColor=white)
![3D Engine](https://img.shields.io/badge/3D%20Engine-Three.js%20WebGL-000000?logo=three.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 🌟 Tentang Permainan (About The Game)

**Nusapura: Mayor Simulator** adalah game simulasi tata kelola pemerintahan kota dan dinamika politik daerah (*civic governance & political simulator*). Pemain berperan sebagai Walikota terpilih Kota Nusapura yang dihadapkan pada dilema kebijakan publik yang kompleks, negosiasi parlemen daerah, tuntutan aksi massa, pengelolaan anggaran kas daerah (APBD), serta pengawasan lembaga anti-rasuah.

Dilengkapi dengan **Ruang Kerja Walikota 3D Interaktif (*3D Executive Chamber*)**, pemain dapat menjelajahi ruang kerja resmi, memeriksa dokumen APBD di atas meja kayu jati, menjawab telepon hotline rahasia, dan memantau panorama kota metropolitan Nusapura secara langsung.

---

## 🎮 Fitur Utama (Key Features)

### 1. 🏛️ Ruang Kerja Walikota 3D (*Free-Roam 3D Executive Chamber*)
* **Navigasi Bebas (*Free-Roam Walking*)**: Bergerak leluasa di dalam ruangan menggunakan Virtual Joystick analog pada layar sentuh atau tombol keyboard **W, A, S, D**.
* **Kamera 360°**: Menoleh ke segala arah dengan kontrol sentuh halus (*smooth camera damping* & *head bobbing*).
* **Objek Meja Interaktif (*Raycast Touch*)**:
  * 📑 **Map Merah APBD**: Membuka rincian fiskal dan alokasi anggaran belanja daerah.
  * 📞 **Telepon Hotline Rahasia**: Membuka memo ajudan pribadi dan intelijen politik.
  * 💻 **Laptop Walikota**: Memeriksa portal karir, kekayaan pribadi (LHKPN), dan kehidupan keluarga.
  * 🗺️ **Papan Peta Wilayah**: Membuka forum Musrenbang aspirasi kecamatan.
  * 🗂️ **Lemari Buku Perda**: Membuka evaluasi kepala dinas dan regulasi daerah.
* **Lambang Resmi Kota Nusapura**: Perisai resmi bertuliskan *"NUSAPURA - CITY OF OPPORTUNITIES"* terpasang megah pada plakat dinding utama, medalion meja eksekutif, dan bendera pataka daerah.
* **Pencahayaan Dinamis**: Pergantian waktu secara *real-time* antara Siang (☀️ *Daylight*), Senja (🌇 *Sunset*), dan Malam (🌙 *Night*).

### 2. 📜 Mesin Narasi Dinamis (*Dynamic Civic Narrative Engine*)
* **Siklus 4-Triwulan Tahunan**: Mengarungi masa jabatan penuh tantangan dengan ratusan peristiwa acak bertingkat kelangkaan (*Common, Uncommon, Rare, Legendary*).
* **Konsekuensi Berantai (*Long-Term Memory Vault*)**: Setiap tanda tangan keputusan terekam dalam memori jangka panjang birokrasi yang akan memicu respon balik di tahun-tahun berikutnya.
* **Indikator Vital Kota**:
  * 📊 **Kepuasan Publik (*Public Approval*)**
  * 💰 **Kas APBD & Pendapatan Asli Daerah (PAD)**
  * ⚠️ **Indeks Risiko Korupsi & Integritas**
  * 📡 **Sentimen Warga & Stabilitas Sosial**

### 3. ⚖️ Dinamika Politik & Birokrasi Otentik
* **Sidang Paripurna & Lobi Fraksi DPRD**: Negosiasi persetujuan anggaran dan Perda dengan fraksi partai pendukung maupun oposisi.
* **Kabinet Dinas & Seleksi Terbuka (*Open Bidding*)**: Evaluasi integritas pejabat eselon, mutasi dinas, hingga pemecatan kepala dinas bermasalah.
* **Musrenbang (Musyawarah Perencanaan Pembangunan)**: Menampung dan memilih usulan pembangunan riil dari warga di tingkat kecamatan.
* **Konferensi Pers & Doorstop Wartawan**: Menguji kecakapan berbicara di depan media untuk meredam kepanikan publik atau menjawab skandal.
* **Sidang Pemakzulan & Pengawasan KPK**: Hadapi risiko sidang istimewa pemakzulan (*impeachment*) bila stabilitas politik runtuh.

### 4. 👤 Dimensi Kehidupan Pribadi & LHKPN
* Pantau neraca aset pribadi, aset properti, kendaraan dinas, serta laporan kepatuhan LHKPN.
* Dinamika keluarga, waktu luang bersama pasangan, serta pengaruh gaya hidup terhadap citra publik.

### 5. 🌐 Sistem Bilingual Terintegrasi (ID / EN)
* Mendukung penuh **Bahasa Indonesia** dan **Hybrid English Mode** yang menerjemahkan narasi dan antarmuka dengan tetap mempertahankan istilah unik tata kelola pemerintahan Indonesia (APBD, DAK, DPRD, Musrenbang, dsb).

---

## 🛠️ Arsitektur & Teknologi (Tech Stack)

* **Platform Inti**: Android Native (Kotlin, Jetpack Compose, WebKit WebView).
* **Frontend UI**: Modern ES6+ JavaScript, HTML5 Canvas, Responsive CSS3 Glassmorphism.
* **3D Viewport Engine**: Three.js (r128 WebGL Renderer, PCFSoftShadowMap, ACES Filmic Tone Mapping).
* **Audio Engine**: Web Audio API & HTML5 Polyphonic Audio Manager.
* **Penyimpanan State**: LocalStorage Double-Buffering & JSON Serialization.

---

## 📂 Struktur Repositori (Project Structure)

```text
app/
├── src/main/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css            # Desain UI Glassmorphism & Virtual Joystick
│   │   ├── data/
│   │   │   ├── campaign_events.js   # Event kampanye & debat pilkada
│   │   │   ├── glossary_data.js     # Glosarium tata kelola & lokalisasi event
│   │   │   ├── mayor_data.js        # Data profil walikota, wawalkot, & janji
│   │   │   └── translations.js      # Kamus lokalisasi bilingual (ID/EN)
│   │   ├── images/
│   │   │   ├── logo_nusapura.svg    # Vektor Lambang Resmi Kota Nusapura
│   │   │   └── epilogue_*.svg       # Ilustrasi pencapaian epilog akhir jabatan
│   │   ├── js/
│   │   │   ├── app.js               # Pengendali utama siklus game & state
│   │   │   ├── audio_manager.js     # Pengatur musik BGM & efek suara SFX
│   │   │   ├── gallery_manager.js   # Pengelola galeri akhir masa jabatan
│   │   │   └── office_3d.js         # Engine Ruang Kerja 3D & Joystick Fisika
│   │   ├── libs/
│   │   │   └── three.min.js         # Library 3D WebGL Three.js r128
│   │   └── index.html               # Entry point antarmuka game
│   ├── java/com/example/            # Android MainActivity & WebView bridge
│   └── AndroidManifest.xml
├── build.gradle.kts
└── settings.gradle.kts
```

---

## 🚀 Cara Menjalankan & Membangun (Getting Started)

### 1. Prasyarat
* Android Studio Ladybug / Meerkat atau yang lebih baru.
* JDK 17 atau 21.
* Android SDK dengan target API 34+.

### 2. Membuka Proyek
1. Clone repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com/USERNAME/nusapura-mayor-simulator.git
   ```
2. Buka **Android Studio**, pilih **File > Open**, lalu pilih direktori proyek ini.
3. Tunggu proses *Gradle Sync* selesai.

### 3. Kompilasi & Menjalankan di HP
* Hubungkan perangkat Android fisik via kabel USB (aktifkan *USB Debugging* di Pengaturan Pengembang).
* Klik tombol **Run 'app' (▶)** di Android Studio untuk memasang game secara langsung.
* Atau jalankan perintah Gradle pada terminal:
  ```bash
  ./gradlew assembleDebug
  ```
  File `.apk` hasil build akan tersedia di:
  `app/build/outputs/apk/debug/app-debug.apk`

---

## 📜 Lisensi & Catatan (License & Disclaimer)

* **Lisensi**: Proyek ini dilisensikan di bawah lisensi [MIT License](LICENSE).
* **Disclaimer**: Segala nama tokoh, lembaga, fraksi partai, dan peristiwa di dalam game ini merupakan karya fiksi dramatisasi untuk tujuan simulasi edukatif dan hiburan.
