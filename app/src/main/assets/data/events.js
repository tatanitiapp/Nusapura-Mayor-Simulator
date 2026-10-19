// ==================== DYNAMIC NARRATIVE ENGINE: CATEGORIES & ACTORS ====================
const EVENT_CATEGORIES = {
  POLITICS: 'EVENT_POLITICS', ECONOMY: 'EVENT_ECONOMY', SOCIAL: 'EVENT_SOCIAL',
  HEALTH: 'EVENT_HEALTH', EDUCATION: 'EVENT_EDUCATION', TRANSPORT: 'EVENT_TRANSPORT',
  INFRASTRUCTURE: 'EVENT_INFRASTRUCTURE', ENVIRONMENT: 'EVENT_ENVIRONMENT',
  DISASTER: 'EVENT_DISASTER', PUBLIC_SERVICE: 'EVENT_PUBLIC_SERVICE', INVESTMENT: 'EVENT_INVESTMENT',
  PERMIT: 'EVENT_PERMIT', ASN: 'EVENT_ASN', CORRUPTION: 'EVENT_CORRUPTION',
  LAW: 'EVENT_LAW', UMKM: 'EVENT_UMKM', TOURISM: 'EVENT_TOURISM',
  SPORTS: 'EVENT_SPORTS', CULTURE: 'EVENT_CULTURE', TECHNOLOGY: 'EVENT_TECHNOLOGY',
  DIGITAL: 'EVENT_DIGITAL', POVERTY: 'EVENT_POVERTY', STUNTING: 'EVENT_STUNTING',
  UNEMPLOYMENT: 'EVENT_UNEMPLOYMENT', WASTE: 'EVENT_WASTE', TRAFFIC: 'EVENT_TRAFFIC',
  WATER: 'EVENT_WATER', ENERGY: 'EVENT_ENERGY', HOUSING: 'EVENT_HOUSING', AGRI: 'EVENT_AGRI'
};

const ACTORS = {
  LSM: { name: 'LSM Lingkungan & HAM', icon: '🔍', desc: 'Sangat peduli transparansi, lingkungan, dan HAM.' },
  Mahasiswa: { name: 'Gerakan Mahasiswa', icon: '🎓', desc: 'Kritis terhadap isu sosial, korupsi, dan fasilitas kota.' },
  Pengusaha: { name: 'Asosiasi Pengusaha Local', icon: '💼', desc: 'Menginginkan kemudahan perizinan dan Pajak yang rendah.' },
  Investor: { name: 'Konsorsium Investor Swasta', icon: '🏦', desc: 'Membutuhkan kepastian hukum dan fasilitas kawasan.' },
  MediaNasional: { name: 'Media Nasional', icon: '📺', desc: 'Mencari berita besar, skandal, dan prestasi spektakuler.' },
  MediaLokal: { name: 'Pers Lokal', icon: '📰', desc: 'Menyuarakan keluhan warga dan kebijakan sehari-hari.' },
  TokohAgama: { name: 'Forum Tokoh Agama', icon: '🕌', desc: 'Fokus pada moralitas, kesejahteraan sosial, dan kerukunan.' },
  TokohAdat: { name: 'Lembaga Adat Kota', icon: '🗡️', desc: 'Menjaga kelestarian lahan, budaya, dan kearifan lokal.' },
  KomunitasLingkungan: { name: 'Komunitas Hijau Nusapura', icon: '🌱', desc: 'Menolak alih fungsi RTH dan polusi industri.' },
  SerikatBuruh: { name: 'Serikat Buruh Nusantara', icon: '⚒️', desc: 'Memperjuangkan UMK, jaminan kerja, dan padat karya.' },
  ASN: { name: 'Korps ASN Kota', icon: '📋', desc: 'Stabilitas birokrasi, tunjangan kinerja, dan kenyamanan kerja.' },
  BPK: { name: 'BPK Perwakilan Daerah', icon: '⚖️', desc: 'Audit keuangan, wajar tanpa pengecualian (WTP).' },
  KPK: { name: 'KPK Sub-Penindakan', icon: '🕵️', desc: 'Pencegahan korupsi, pengadaan barang, dan penindakan OTT.' },
  Kejaksaan: { name: 'Kejaksaan Negeri', icon: '🏛️', desc: 'Penegakan hukum, sengketa aset daerah, dan pidana.' },
  Inspektorat: { name: 'Inspektorat Kota', icon: '🔎', desc: 'Pengawasan internal, pembinaan ASN, dan investigasi.' },
  Polri: { name: 'Polresta Nusapura', icon: '🚓', desc: 'Ketertiban jalanan, keamanan umum, dan penanganan aksi.' },
  Pengembang: { name: 'Asosiasi Pengembang Property', icon: '🏘️', desc: 'Membutuhkan izin hunian, kawasan bisnis, dan jalan.' },
  Akademisi: { name: 'Dewan Pakar Universitas', icon: '🔬', desc: 'Mendorong kajian saintifik, AMDAL, dan tata kota berbasis data.' },
  Influencer: { name: 'Kreator Konten & Influencer', icon: '📱', desc: 'Membentuk persepsi pemilih muda dan tren medsos.' },
  DPRD: { name: 'DPRD Kota Nusapura', icon: '🏛️', desc: 'Parlemen kota, penentu persetujuan APBD dan pengawasan Perda.' }
};

function EV(id, cat, icon, title, text, choices, opts) {
  opts = opts || {};
  return {
    id, cat, icon, title, text, choices,
    category: EVENT_CATEGORIES[cat] || EVENT_CATEGORIES.PUBLIC_SERVICE,
    rarity: opts.rarity || 'common',
    weight: opts.weight != null ? opts.weight : 1,
    cooldown: opts.cooldown != null ? opts.cooldown : 0,
    requirements: opts.requirements || null,
    priority: opts.priority || 0,
    followUp: opts.followUp || null,
    previousEvent: opts.previousEvent || null,
    futureEvent: opts.futureEvent || null,
    relatedActors: opts.relatedActors || [],
    affectedDepartment: opts.affectedDepartment || null,
    publicReaction: opts.publicReaction || null,
    mediaReaction: opts.mediaReaction || null,
    oppositionReaction: opts.oppositionReaction || null,
    cabinetReaction: opts.cabinetReaction || null,
    longTermEffect: opts.longTermEffect || null,
    achievement: opts.achievement || null
  };
}

// ==================== BASELINE EVENTS (Migrated & Expanded) ====================
var BASE_EVENTS = [
  EV(1,'Transportasi','🚌','Revitalisasi Angkutan Umum',
    'Dinas Perhubungan mengusulkan peremajaan armada bus kota yang sudah tua dan sering mogok.',
    [
      {t:'Beli bus listrik baru secara bertahap', d:'Anggaran terkuras namun warga menyambut baik transportasi ramah lingkungan.',
        fx:{apbd:-1.2, poll:-4, sat:5, inv:3}, lt:{fx:{poll:-1, sat:1}, dur:3}, news:'Pemkot Nusapura resmikan armada bus listrik pertama.', mood:1, actors:{KomunitasLingkungan:8, Pengusaha:-2, Mahasiswa:5}},
      {t:'Perbaikan minor + subsidi suku cadang', d:'Biaya lebih hemat, tapi masalah tetap muncul beberapa bulan ke depan.',
        fx:{apbd:-0.3, sat:1, traffic:-1}, lt:{fx:{traffic:1}, dur:2}, news:'Bus kota diperbaiki sementara, warga masih mengeluh.', mood:0, actors:{SerikatBuruh:2}},
      {t:'Serahkan ke swasta lewat tender', d:'APBD lebih ringan namun tarif berpotensi naik dan kualitas tak terjamin.',
        fx:{apbd:0.2, sat:-3, inv:2}, lt:{fx:{sat:-1}, dur:2}, news:'Operator swasta ambil alih trayek bus kota.', mood:-1, actors:{Pengusaha:6, Mahasiswa:-5}},
    ], {relatedActors:['KomunitasLingkungan', 'Pengusaha', 'SerikatBuruh'], affectedDepartment:'dishub'}),

  EV(2,'Transportasi','🚦','Kemacetan Simpang Kota',
    'Simpang utama menuju kawasan bisnis macet parah setiap jam sibuk selama berbulan-bulan.',
    [
      {t:'Bangun flyover baru', d:'Proyek besar dan mahal, tapi solusi jangka panjang paling efektif.',
        fx:{apbd:-2.5, traffic:-10, sat:4, infra:6}, lt:{fx:{traffic:-2}, dur:3}, news:'Pembangunan flyover simpang kota dimulai.', mood:1, actors:{Pengembang:5, Pengusaha:4}},
      {t:'Terapkan sistem ganjil-genap', d:'Murah dan cepat diterapkan, tapi warga sebagian mengeluh ribet.',
        fx:{apbd:-0.1, traffic:-6, sat:-1}, lt:{fx:{traffic:1}, dur:1}, news:'Ganjil-genap resmi berlaku di simpang utama.', mood:0, actors:{Polri:4}},
      {t:'Optimalkan lampu lalu lintas pintar', d:'Solusi teknologi murah meski efeknya terbatas pada jam puncak ekstrem.',
        fx:{apbd:-0.6, traffic:-4, inv:2}, news:'Lampu lalin adaptif dipasang di titik macet.', mood:1, actors:{Akademisi:5}},
    ], {relatedActors:['Polri', 'Pengembang', 'Akademisi'], affectedDepartment:'dishub'}),

  EV(3,'Pendidikan','🏫','Renovasi Sekolah Rusak',
    'Puluhan sekolah negeri di pinggiran kota memiliki ruang kelas rusak dan minim fasilitas.',
    [
      {t:'Renovasi total tahun ini', d:'Kualitas pendidikan naik signifikan, meski anggaran tahun ini ketat.',
        fx:{apbd:-1.8, edu:10, sat:6}, lt:{fx:{edu:2}, dur:2}, news:'Sekolah-sekolah pinggiran kota kini punya gedung layak.', mood:1, actors:{Mahasiswa:6, LSM:4}},
      {t:'Renovasi bertahap 3 tahun', d:'Beban anggaran lebih ringan, hasil terasa lebih lambat.',
        fx:{apbd:-0.6, edu:3, sat:2}, lt:{fx:{edu:2}, dur:3}, news:'Renovasi sekolah dimulai secara bertahap.', mood:0},
      {t:'Tunda dan alihkan dana ke prioritas lain', d:'Anggaran aman, tapi keluhan orang tua siswa meningkat di media sosial.',
        fx:{apbd:0.2, edu:-3, sat:-4}, news:'Rencana renovasi sekolah ditunda, orang tua kecewa.', mood:-1, actors:{Mahasiswa:-8, Influencer:-5}},
    ], {relatedActors:['Mahasiswa', 'LSM', 'Influencer'], affectedDepartment:'disdik'}),

  EV(4,'Pendidikan','🎓','Beasiswa Anak Kurang Mampu',
    'Banyak anak putus sekolah karena kendala biaya di tengah kenaikan harga kebutuhan pokok.',
    [
      {t:'Luncurkan beasiswa penuh warga miskin', d:'Angka putus sekolah turun, anggaran sosial membengkak.',
        fx:{apbd:-1.0, pov:-3, edu:6, sat:5}, news:'Program beasiswa penuh diluncurkan, animo warga tinggi.', mood:1, actors:{Mahasiswa:8, SerikatBuruh:5}},
      {t:'Beasiswa parsial + subsidi seragam', d:'Bantuan lebih merata meski jumlah per anak lebih kecil.',
        fx:{apbd:-0.4, pov:-1, edu:2, sat:2}, news:'Subsidi seragam dan buku bagi siswa kurang mampu berjalan.', mood:0},
      {t:'Serahkan ke program bantuan pusat', d:'Tidak membebani APBD kota, tapi cakupan bantuan terbatas.',
        fx:{apbd:0, edu:0, sat:-1}, news:'Pemkot arahkan warga ke program beasiswa pemerintah pusat.', mood:0},
    ], {relatedActors:['Mahasiswa', 'SerikatBuruh'], affectedDepartment:'disdik'}),

  EV(5,'Rumah Sakit','🏥','Antrean Panjang RSUD',
    'RSUD kota kewalahan menampung pasien, antrean mengular hingga ke luar gedung.',
    [
      {t:'Bangun sayap rawat inap baru', d:'Investasi besar, kapasitas layanan kesehatan meningkat drastis.',
        fx:{apbd:-2.2, health:9, sat:5}, lt:{fx:{health:2}, dur:2}, news:'RSUD Nusapura tambah 120 tempat tidur baru.', mood:1, actors:{Akademisi:4}},
      {t:'Tambah tenaga medis kontrak & shift', d:'Solusi cepat dengan biaya operasional lebih terjangkau.',
        fx:{apbd:-0.7, health:4, sat:2}, news:'Tenaga medis tambahan diterjunkan ke RSUD.', mood:1, actors:{ASN:3}},
      {t:'Rujuk sebagian pasien ke RS swasta mitra', d:'Antrean berkurang cepat, namun biaya berobat warga naik.',
        fx:{apbd:-0.2, health:2, sat:-2, pov:1}, news:'Kerja sama rujukan RS swasta diberlakukan.', mood:-1, actors:{Pengusaha:5, LSM:-4}},
    ], {relatedActors:['LSM', 'Pengusaha', 'ASN'], affectedDepartment:'diskes'})
];

// ==================== DYNAMIC MULTI-STAGE NARRATIVE CHAINS ====================
var CHAIN_EVENTS = [
  // ---------------- CHAIN 1: BANJIR & SKANDAL DRAINASE (10-Stage Narrative) ----------------
  EV(101, 'Bencana', '🌊', 'Rantai 1: Hujan Ekstrem & Banjir Bandang',
    'Curah hujan tinggi menyebabkan banjir luapan sungai menggenangi 5 kecamatan. Warga mengungsi dan jalan utama terputus.',
    [
      {t:'Buka posko darurat & dana tak terduga', d:'Korban tertangani cepat, anggaran tanggap darurat terpakai.', fx:{apbd:-1.5, sat:3, flood:-2}, news:'Pemkot turunkan tim evakuasi banjir.', mood:1, actors:{MediaLokal:5, TokohAgama:4}, flag:'c1_posko'},
      {t:'Minta warga evakuasi mandiri & hemat APBD', d:'Hemat anggaran, namun keluhan warga dan amarah publik membuncah.', fx:{sat:-6, flood:2}, news:'Warga kritik lambatnya penanganan banjir.', mood:-1, actors:{LSM:-6, Mahasiswa:-8}, flag:'c1_abaikan'},
      {t:'Gandeng relawan & kemitraan swasta', d:'Efisiensi anggaran dengan dukungan sembako & perahu dari pengusaha lokal.', fx:{apbd:-0.5, sat:4, flood:-1}, news:'Relawan dan swasta bahu membahu bantu banjir.', mood:1, actors:{LSM:7, Pengusaha:5}, flag:'c1_posko'}
    ], {priority:10, relatedActors:['MediaLokal', 'TokohAgama', 'LSM', 'Mahasiswa'], affectedDepartment:'pu'}),

  EV(102, 'Demonstrasi', '📢', 'Rantai 1: Aksi Protes Warga Korban Banjir',
    'Warga didampingi LSM dan Mahasiswa mendatangi Balai Kota menuntut ganti rugi dan evaluasi drainase buruk.',
    [
      {t:'Temui demonstran & janjikan audit proyek', d:'Menenangkan massa, menaikkan transparansi & ekspektasi publik.', fx:{sat:3, crime:-2}, news:'Walikota temui korban banjir dan janjikan audit.', mood:1, actors:{LSM:6, Mahasiswa:7}, flag:'c1_audit_promised'},
      {t:'Kerahkan Polresta untuk pembubaran', d:'Ketegangan memuncak di media sosial dan dicap represif.', fx:{sat:-8, crime:4}, news:'Aksi korban banjir dibubarkan petugas.', mood:-1, actors:{Polri:5, LSM:-10, Mahasiswa:-12}, flag:'c1_represif'},
      {t:'Bentuk Tim Gabungan Kajian Drainase Bersama Akademisi', d:'Melibatkan aktivis mahasiswa & pakar teknik untuk merumuskan audit terpadu.', fx:{apbd:-0.3, sat:5, crime:-1}, news:'Tim gabungan akademisi dan warga kaji drainase.', mood:1, actors:{Mahasiswa:9, LSM:8}, flag:'c1_audit_promised'}
    ], {priority:12, requirements: (s,f)=>!!(f.c1_posko || f.c1_abaikan), relatedActors:['LSM', 'Mahasiswa', 'Polri'], previousEvent:101}),

  EV(103, 'Korupsi', '🔍', 'Rantai 1: Pemanggilan DPRD & Audit Drainase',
    'Komisi III DPRD menggelar Rapat Dengar Pendapat dan meminta Inspektorat memeriksa proyek drainase 2 tahun terakhir.',
    [
      {t:'Buka seluruh dokumen kontrak proyek ke publik', d:'Transparansi tinggi, terindikasi mark-up material oleh kontraktor.', fx:{crime:-3, sat:4}, news:'Dokumen drainase dibuka, terindikasi ketidaksesuaian spek.', mood:1, actors:{BPK:8, KPK:6, MediaNasional:7}, flag:'c1_bukti_terbuka'},
      {t:'Sembunyikan laporan teknis internal', d:'DPRD mengancam penggunaan Hak Interpelasi dan publik curiga.', fx:{sat:-5, crime:5}, news:'DPRD soroti kejanggalan dokumen drainase yang ditutupi.', mood:-1, actors:{KPK:10, MediaNasional:9}, flag:'c1_tutupi'},
      {t:'Minta BPK Lakukan Audit Investigatif Menyeluruh', d:'Pengawasan independen membongkar kejanggalan sistemik.', fx:{apbd:-0.2, crime:-6, sat:6}, news:'BPK diterjunkan audit investigatif proyek drainase.', mood:1, actors:{BPK:10, KPK:8}, flag:'c1_bukti_terbuka'}
    ], {priority:15, requirements: (s,f)=>!!f.c1_audit_promised, relatedActors:['BPK', 'KPK', 'MediaNasional'], previousEvent:102}),

  EV(104, 'Hukum', '🏛️', 'Rantai 1: Pemeriksaan Kontraktor PUPR',
    'Kejaksaan dan Inspektorat memanggil 3 kontraktor pemenang tender proyek drainase kota.',
    [
      {t:'Dukung penuh proses hukum tanpa intervensi', d:'Pemenang tender ditetapkan sebagai tersangka pidana korupsi.', fx:{sat:5, crime:-5}, news:'Kejaksaan tetapkan dirut kontraktor drainase jadi tersangka.', mood:1, actors:{Kejaksaan:8, LSM:6}, flag:'c1_tersangka'},
      {t:'Lakukan mediasi ganti rugi tanpa pidana', d:'Dituding melindungi pemodal nakal oleh pegiat antikorupsi.', fx:{sat:-6, crime:4}, news:'Penyelesaian drainase dilakukan kekeluargaan, LSM kecewa.', mood:-1, actors:{LSM:-8, Kejaksaan:-5}, flag:'c1_damai'},
      {t:'Blacklist Kontraktor & Sita Jaminan Proyek untuk Kas Daerah', d:'Uang kas kembali dan memberi efek jera bagi rekanan nakal.', fx:{apbd:0.8, sat:4, crime:-3}, news:'Pemkot sanksi blacklist dan sita jaminan kontraktor.', mood:1, actors:{Inspektorat:8, Pengusaha:-8}, flag:'c1_tersangka'}
    ], {priority:18, requirements: (s,f)=>!!f.c1_bukti_terbuka, relatedActors:['Kejaksaan', 'LSM'], previousEvent:103}),

  EV(105, 'Korupsi', '🕵️', 'Rantai 1: Terbongkarnya Suap Oknum Pejabat',
    'Pemeriksaan kontraktor mengungkap adanya aliran dana suap ke Kepala Dinas PUPR dan oknum anggota DPRD.',
    [
      {t:'Nonaktifkan Kadis PUPR & serahkan ke KPK', d:'Birokrasi terguncang namun integritas walikota terbukti bersih.', fx:{sat:8, crime:-8, apbd:-0.4}, news:'Kadis PUPR dinonaktifkan terkait dugaan suap drainase.', mood:1, actors:{KPK:10, ASN:-4, MediaNasional:8}, flag:'c1_kadis_pecat'},
      {t:'Bela pejabat dengan dalih praduga tak bersalah', d:'Gelombang protes meluas hingga ke media nasional.', fx:{sat:-12, crime:8}, news:'Walikota dibully netizen karena lindungi pejabat terindikasi suap.', mood:-1, actors:{Mahasiswa:-15, MediaNasional:-10}, flag:'c1_lindungi'},
      {t:'Rotasi Masif Birokrasi & Perketat Whistleblowing System', d:'Penyegaran total pejabat dinas teknis untuk cegah suap berulang.', fx:{sat:5, crime:-4, apbd:-0.2}, news:'Pemkot reshuffle dinas dan perketat sistem pengawasan internal.', mood:1, actors:{ASN:6, KPK:7}, flag:'c1_kadis_pecat'}
    ], {priority:20, requirements: (s,f)=>!!f.c1_tersangka, relatedActors:['KPK', 'ASN', 'MediaNasional'], previousEvent:104}),

  EV(106, 'ASN', '📋', 'Rantai 1: Reaksi & Gejolak Internal ASN',
    'Penindakan tegas membuat jajaran birokrasi ASN merasa tertekan dan takut menandatangani pencairan proyek baru.',
    [
      {t:'Beri pendampingan hukum resmi & insentif kepatuhan', d:'Birokrasi kembali percaya diri dan tertib aturan.', fx:{sat:3, infra:3, apbd:-0.3}, news:'Bimtek integritas birokrasi digelar di Balai Kota.', mood:1, actors:{ASN:8, BPK:5}, flag:'c1_asn_solid'},
      {t:'Ancam sanksi demosi bagi ASN yang lambat', d:'Suasana kerja tegang, serapan anggaran drop drastis.', fx:{infra:-5, sat:-3}, news:'ASN mengeluh lambatnya pencairan akibat rasa takut.', mood:-1, actors:{ASN:-10}},
      {t:'Gunakan Pendampingan Pengadaan oleh LKPP', d:'Proses lelang diawasi lembaga pusat, transparan dan aman hukum.', fx:{apbd:-0.1, infra:4, sat:2}, news:'LKPP dampingi lelang dan pengadaan dinas.', mood:1, actors:{BPK:7, ASN:7}, flag:'c1_asn_solid'}
    ], {priority:22, requirements: (s,f)=>!!f.c1_kadis_pecat, relatedActors:['ASN', 'BPK'], previousEvent:105}),

  EV(107, 'Infrastruktur', '🏗️', 'Rantai 1: Tender Ulang & Masterplan Bebas Banjir',
    'Pemkot menyusun ulang Masterplan Drainase dengan melibatkan akademisi dan LSM lingkungan.',
    [
      {t:'Alokasikan anggaran besar untuk kolam retensi & sumur resapan', d:'Risiko banjir turun permanen dalam 3 tahun ke depan.', fx:{apbd:-2.0, flood:-15, env:6, sat:6}, lt:{fx:{flood:-3}, dur:3}, news:'Masterplan Bebas Banjir Nusapura resmi diluncurkan.', mood:1, actors:{Akademisi:9, KomunitasLingkungan:8}, achievement:'banjir'},
      {t:'Perbaikan sekadar pengerukan lumpur rutin', d:'Murah, namun risiko banjir tetap mengintai saat hujan besar.', fx:{apbd:-0.4, flood:-3}, news:'Pengerukan sungai dilakukan berkala.', mood:0},
      {t:'Adopsi Konsep Sponge City (Kota Spons) & Taman Resapan Hijau', d:'Mengombinasikan ruang terbuka hijau dan kolam penampung air alami.', fx:{apbd:-1.2, flood:-10, env:9, sat:5}, news:'Konsep Sponge City diterapkan di kawasan rawan banjir.', mood:1, actors:{KomunitasLingkungan:10, Akademisi:8}, achievement:'banjir'}
    ], {priority:25, requirements: (s,f)=>!!f.c1_asn_solid, relatedActors:['Akademisi', 'KomunitasLingkungan'], previousEvent:106}),

  // ---------------- CHAIN 2: INVESTOR MEGA-PROYEK & ADAT (8-Stage Narrative) ----------------
  EV(201, 'Investasi', '🏢', 'Rantai 2: Proposal Konsorsium Investor',
    'Konsorsium Investor Internasional mengajukan nilai investasi Rp 5 Triliun untuk Pusat Industri & Logistik Terpadu.',
    [
      {t:'Setujui prinsip investasi & siapkan lahan', d:'Sinyal positif ekonomi, memicu spekulasi tanah.', fx:{inv:10, apbd:0.8, pad:0.5}, news:'Konsorsium raksasa minati investasi di Nusapura.', mood:1, actors:{Investor:10, Pengusaha:8}, flag:'c2_investor_setuju'},
      {t:'Tolak proposal demi keamanan tata ruang', d:'Investor mengalihkan dana ke kota tetangga.', fx:{inv:-6}, news:'Pemkot tolak proposal investasi raksasa.', mood:-1, actors:{Investor:-10, Pengusaha:-6}},
      {t:'Setujui bersyarat: Wajib Bangun RTH & Sertifikasi Ekologis', d:'Investor menerima syarat pembangunan berkesinambungan.', fx:{inv:6, apbd:0.5, env:4, sat:3}, news:'Investor sepakat bangun RTH dan kawasan berwawasan lingkungan.', mood:1, actors:{KomunitasLingkungan:7, Investor:5}, flag:'c2_investor_setuju'}
    ], {priority:10, relatedActors:['Investor', 'Pengusaha'], affectedDepartment:'bappeda'}),

  EV(202, 'Perumahan', '🏡', 'Rantai 2: Pembebasan Lahan & Penolakan Adat',
    'Area proyek mengenai kawasan permukiman tua dan tanah ulayat milik Tokoh Adat serta warga setempat.',
    [
      {t:'Musyawarah adat & ganti rugi di atas harga pasar', d:'Biaya investasi naik, namun hubungan warga kondusif.', fx:{apbd:-1.2, sat:4, pov:-2}, news:'Kesepakatan pembebasan lahan dicapai secara adat.', mood:1, actors:{TokohAdat:9, Pengembang:5}, flag:'c2_damai_adat'},
      {t:'Gunakan surat paksa eksekusi lahan', d:'DPRD dan LSM mengecam tindakan otoriter.', fx:{sat:-8, crime:5}, news:'Eksekusi lahan investasi diwarnai bentrok warga.', mood:-1, actors:{TokohAdat:-12, LSM:-10}, flag:'c2_bentrok'},
      {t:'Ganti Zonasi: Pindahkan Kawasan Industri Tanpa Mengganggu Ulayat', d:'Lahan adat utuh, lokasi industri digeser ke area kosong.', fx:{apbd:-0.8, inv:4, sat:5}, news:'Tata ruang disesuaikan, kawasan adat tetap terlindungi.', mood:1, actors:{TokohAdat:10, Investor:4}, flag:'c2_damai_adat'}
    ], {priority:13, requirements: (s,f)=>!!f.c2_investor_setuju, relatedActors:['TokohAdat', 'Pengembang', 'LSM'], previousEvent:201}),

  EV(203, 'Demonstrasi', '📢', 'Rantai 2: Solusi Kompensasi vs Demo Mahasiswa',
    'Aksi demo menentang alih fungsi lahan dan mengkritik potensi ancaman pencemaran lingkungan kawasan industri.',
    [
      {t:'Wajibkan AMDAL Transparan & Konsorsium Hijau', d:'Menenangkan aktivis, investasi disesuaikan standar ekologis.', fx:{env:5, inv:-2, sat:4}, news:'Pemkot patok syarat ketat AMDAL Hijau bagi investor.', mood:1, actors:{KomunitasLingkungan:8, Mahasiswa:6, Investor:-2}, flag:'c2_amdal_ketat'},
      {t:'Abaikan protes dan percepat izin AMDAL', d:'Protes meluas ke skala nasional.', fx:{inv:5, env:-8, sat:-6}, news:'Izin AMDAL terbit cepat, aktivis ancam gugatan PTUN.', mood:-1, actors:{KomunitasLingkungan:-10, LSM:-10}, flag:'c2_amdal_kilat'},
      {t:'Undang Perwakilan Mahasiswa & Pakar dalam Tim Pengawas AMDAL', d:'Keterbukaan publik menciptakan kepercayaan bersama.', fx:{env:4, sat:6, inv:2}, news:'Mahasiswa dan pakar dilibatkan dalam pengawasan AMDAL.', mood:1, actors:{Mahasiswa:10, Akademisi:8}, flag:'c2_amdal_ketat'}
    ], {priority:16, requirements: (s,f)=>!!(f.c2_damai_adat || f.c2_bentrok), relatedActors:['KomunitasLingkungan', 'Mahasiswa', 'LSM'], previousEvent:202}),

  EV(204, 'Investasi', '🏭', 'Rantai 2: Groundbreaking & Penyerapan Tenaga Kerja',
    'Kawasan industri mulai dibangun. Ribuan lowongan kerja dibuka bagi warga Nusapura.',
    [
      {t:'Wajibkan minimal 70% tenaga kerja lokal kota', d:'Pengangguran turun drastis, warga puas.', fx:{unemp:-4, pov:-3, sat:7, pad:0.8}, news:'Kawasan industri serap ribuan tenaga kerja lokal.', mood:1, actors:{SerikatBuruh:9, Pengusaha:6}, achievement:'investasi'},
      {t:'Bebaskan perekrutan tanpa kuota daerah', d:'Pekerja luar kota mendominasi, warga lokal protes.', fx:{unemp:-1, sat:-4}, news:'Perekrutan pekerja kawasan industri disorot warga lokal.', mood:-1, actors:{SerikatBuruh:-8}},
      {t:'Mendirikan Balai Latihan Kerja (BLK) Khusus Industri', d:'Menyiapkan keahlian pemuda lokal agar langsung siap kerja.', fx:{apbd:-0.6, unemp:-3, edu:5, sat:5}, news:'BLK Industri dibuka untuk tingkatkan skill pemuda lokal.', mood:1, actors:{SerikatBuruh:8, Akademisi:6}, achievement:'investasi'}
    ], {priority:20, requirements: (s,f)=>!!f.c2_amdal_ketat, relatedActors:['SerikatBuruh', 'Pengusaha'], previousEvent:203}),

  // ---------------- CHAIN 3: STUNTING, POSYANDU & AUDIT BPK (6-Stage Narrative) ----------------
  EV(301, 'Stunting', '👶', 'Rantai 3: Lonjakan Angka Stunting Anak',
    'Data Dinas Kesehatan menunjukkan angka stunting anak balita di kelurahan kumuh mencapai 28%.',
    [
      {t:'Luncurkan Gerakan Nutrisi & Posyandu Mandiri', d:'Alokasikan paket makanan bergizi rutin.', fx:{apbd:-0.8, health:6, pov:-2, sat:4}, news:'Gerakan Nusapura Bebas Stunting diluncurkan.', mood:1, actors:{TokohAgama:5, Akademisi:6}, flag:'c3_nutrisi'},
      {t:'Imbauan sosialisasi tanpa dana khusus', d:'Angka stunting tetap tinggi.', fx:{health:-2, sat:-2}, news:'Program penanganan stunting dinilai seremonial.', mood:-1},
      {t:'Program "Orang Tua Asuh Stunting" Kemitraan ASN & Swasta', d:'ASN dan pengusaha menjadi sponsor nutrisi anak stunting.', fx:{apbd:-0.2, health:5, sat:5}, news:'Program Orang Tua Asuh Stunting bantu gizi anak miskin.', mood:1, actors:{ASN:6, Pengusaha:6}, flag:'c3_nutrisi'}
    ], {priority:10, relatedActors:['TokohAgama', 'Akademisi'], affectedDepartment:'diskes'}),

  EV(302, 'Korupsi', '📋', 'Rantai 3: Kejanggalan Pengadaan Paket Makanan',
    'Inspektorat menemukan mark-up harga susu dan biskuit gizi pada dinas terkait.',
    [
      {t:'Ganti vendor & audit investigasi penuh', d:'Kualitas makanan bergizi meningkat.', fx:{crime:-4, sat:3, health:3}, news:'Vendor pengadaan gizi stunting diganti pasca temuan audit.', mood:1, actors:{Inspektorat:8, BPK:6}, flag:'c3_audit_ok'},
      {t:'Beri peringatan tertulis tanpa putus kontrak', d:'Kualitas bantuan makanan tetap buruk.', fx:{sat:-4, crime:3}, news:'Kualitas makanan gizi anak dipertanyakan warga.', mood:-1, actors:{LSM:-6}},
      {t:'Alihkan Bantuan ke Kupon Digital Sembako di Pasar Tradisional', d:'Mencegah korupsi vendor dan memberdayakan pedagang pasar.', fx:{apbd:-0.1, pad:0.3, health:4, sat:5}, news:'Bantuan nutrisi disalurkan via voucher digital pedagang pasar.', mood:1, actors:{Pengusaha:7, Inspektorat:6}, flag:'c3_audit_ok'}
    ], {priority:14, requirements: (s,f)=>!!f.c3_nutrisi, relatedActors:['Inspektorat', 'BPK', 'LSM'], previousEvent:301}),

  EV(303, 'Kesehatan', '🏅', 'Rantai 3: Predikat Kota Sehat & Apresiasi Kemenkes',
    'Intervensi gizi terpadu berhasil menurunkan stunting hingga di bawah 10%. Kemenkes memberikan penghargaan nasional.',
    [
      {t:'Jadikan Nusapura percontohan stunting nasional', d:'Mendapat insentif dana perimbangan pusat.', fx:{apbd:1.2, health:8, sat:6}, news:'Nusapura raih penghargaan Kota Bebas Stunting Nasional.', mood:1, actors:{MediaNasional:8, Akademisi:7}, achievement:'kesehatan'},
      {t:'Pertahankan program tanpa publikasi berlebih', d:'Kesehatan anak terjaga stabil.', fx:{health:3, sat:2}, news:'Program gizi anak berlanjut konsisten.', mood:1},
      {t:'Alokasikan Bonus Insentif Bulanan Kader Posyandu & Bidan', d:'Memotivasi tenaga kesehatan garis depan di kelurahan.', fx:{apbd:-0.4, health:6, sat:7}, news:'Kader Posyandu & bidan kelurahan dapat insentif bulanan.', mood:1, actors:{SerikatBuruh:6, TokohAgama:5}, achievement:'kesehatan'}
    ], {priority:18, requirements: (s,f)=>!!f.c3_audit_ok, relatedActors:['MediaNasional', 'Akademisi'], previousEvent:302}),

  // ---------------- CHAIN 4: SAMPAH, ENERGI & TPA ZERO WASTE (5-Stage Narrative) ----------------
  EV(401, 'Sampah', '🗑️', 'Rantai 4: Krisis Overload TPA Nusapura',
    'TPA utama kota sudah melebihi kapasitas 150%. Gunungan sampah meluber ke pemukiman dan jalan.',
    [
      {t:'Gagas Pembangkit Listrik Tenaga Sampah (PLTSa)', d:'Proyek energi hijau terpadu butuh kemitraan swasta.', fx:{apbd:-1.5, poll:-5, env:6, inv:4}, news:'Pemkot wacanakan pembangunan PLTSa modern.', mood:1, actors:{KomunitasLingkungan:7, Investor:6}, flag:'c4_pltsa'},
      {t:'Perluas TPA sewa lahan tetangga', d:'Solusi sewa mahal dan memicu gesekan daerah.', fx:{apbd:-0.8, poll:2, env:-4}, news:'Sewa lahan TPA tambahan memicu protes tetangga.', mood:-1, actors:{KomunitasLingkungan:-6}},
      {t:'Galakkan Bank Sampah Kelurahan & Daur Ulang Mandiri', d:'Mengurangi volume sampah dari sumbernya di rumah tangga.', fx:{apbd:-0.4, poll:-3, env:7, sat:4}, news:'Gerakan Bank Sampah kelurahan kurangi beban TPA.', mood:1, actors:{KomunitasLingkungan:9, TokohAgama:5}, flag:'c4_pltsa'}
    ], {priority:10, relatedActors:['KomunitasLingkungan', 'Investor'], affectedDepartment:'dlh'}),

  EV(402, 'Energi', '⚡', 'Rantai 4: Operasional PLTSa & Zero Waste',
    'PLTSa selesai dibangun dan mulai mengolah 800 ton sampah per hari menjadi energi listrik 15 MW.',
    [
      {t:'Jual pasokan listrik ke PLN & subsidi sampah warga', d:'PAD naik berkelanjutan, lingkungan kota bersih.', fx:{pad:0.6, poll:-8, env:10, sat:6}, news:'PLTSa Nusapura sukses hasilkan energi hijau terbarukan.', mood:1, actors:{PLN:8, KomunitasLingkungan:10}, achievement:'bersih'},
      {t:'Gunakan listrik hanya untuk operasional internal', d:'Penghematan rutin pemkot.', fx:{apbd:0.3, poll:-4, env:5}, news:'PLTSa bantu efisiensi energi balai kota.', mood:1},
      {t:'Olah Sisa Sampah Jadi Batako Material Konstruksi Gratis', d:'Material daur ulang digunakan untuk perbaikan jalan dan fasilitas warga.', fx:{apbd:-0.2, infra:4, env:6, sat:5}, news:'Material paving block dari daur ulang sampah dibagikan ke RT/RW.', mood:1, actors:{KomunitasLingkungan:8, Pengembang:6}, achievement:'bersih'}
    ], {priority:16, requirements: (s,f)=>!!f.c4_pltsa, relatedActors:['KomunitasLingkungan'], previousEvent:401}),

  // ---------------- CHAIN 5: DIGITALISASI & E-GOV (5-Stage Narrative) ----------------
  EV(501, 'Digitalisasi', '📱', 'Rantai 5: Aplikasi Super-App "NusaPelayanan"',
    'Diskominfo meluncurkan aplikasi tunggal untuk surat, izin usaha, retribusi, dan pengaduan warga.',
    [
      {t:'Wajibkan e-Government 100% & pangkas calo', d:'Layanan publik transparan, Pungli drop.', fx:{apbd:-0.8, sat:7, crime:-6, inv:5}, news:'NusaPelayanan pangkas birokrasi dan pungli.', mood:1, actors:{Influencer:8, LSM:7, Pengusaha:6}, flag:'c5_egov'},
      {t:'Gunakan aplikasi sebagai opsi pendamping saja', d:'Sistem manual masih mendominasi.', fx:{sat:2, crime:-1}, news:'Aplikasi NusaPelayanan dirilis bertahap.', mood:0},
      {t:'Integrasikan Fitur "Lapor Walikota" SLA 24 Jam', d:'Aduan warga wajib ditindaklanjuti dinas dalam 1x24 jam.', fx:{apbd:-0.5, sat:8, crime:-4}, news:'Fitur Lapor Walikota selesaikan aduan warga dalam 24 jam.', mood:1, actors:{Influencer:9, MediaLokal:7}, flag:'c5_egov'}
    ], {priority:10, relatedActors:['Influencer', 'LSM', 'Pengusaha'], affectedDepartment:'dpmptsp'}),

  EV(502, 'Teknologi', '🏆', 'Rantai 5: Peringkat 1 E-Government Nasional',
    'KemenPAN-RB mendapuk Kota Nusapura sebagai Kota Digital Terbaik dalam Indeks SPBE Nasional.',
    [
      {t:'Buka Smart City Hub & tarik startup teknologi', d:'Ekosistem teknologi lokal berkembang pesat.', fx:{inv:8, pad:0.4, sat:5}, news:'Startup teknologi menyerbu kawasan Smart City Nusapura.', mood:1, actors:{Akademisi:8, Influencer:7}, achievement:'digital'},
      {t:'Pertahankan standar sistem saat ini', d:'Sistem e-gov stabil.', fx:{sat:2}, news:'Pelayanan digital Nusapura dipuji kementerian.', mood:1},
      {t:'Bagikan Wi-Fi Gratis & Laptop untuk Sekolah Pinggiran', d:'Pemerataan akses teknologi hingga ke pelosok kota.', fx:{apbd:-0.8, edu:7, sat:6}, news:'Program internet & laptop gratis disalurkan ke sekolah pinggiran.', mood:1, actors:{Mahasiswa:8, Akademisi:7}, achievement:'digital'}
    ], {priority:15, requirements: (s,f)=>!!f.c5_egov, relatedActors:['Akademisi', 'Influencer'], previousEvent:501})
];

// ==================== RARE / EPIC / LEGENDARY SURPRISE EVENTS ====================
var RARE_EVENTS = [
  EV(901, 'Bencana', '🌋', 'Gempa Bumi Tektonik 5.8 SR',
    'Gempa sedang mengguncang kawasan pesisir Nusapura, merusak sebagian jembatan dan fasilitas publik.',
    [
      {t:'Tanggap darurat kilat & perbaikan infrastruktur', d:'Memperbaiki fasilitas dan menenangkan warga.', fx:{apbd:-1.8, sat:4, infra:2}, news:'Pemkot gerak cepat perbaiki jembatan terdampak gempa.', mood:1, actors:{Polri:6, TokohAgama:5}},
      {t:'Minta bantuan bencana dari Pemprov', d:'Pemulihan memakan waktu lebih lama.', fx:{sat:-3, infra:-3}, news:'Perbaikan infrastruktur gempa menunggu bantuan provinsi.', mood:-1},
      {t:'Buka Dapur Umum & Gandeng TNI/Polri', d:'Posko siaga bencana gabungan mengamankan bahan pangan warga.', fx:{apbd:-0.9, sat:6, infra:1}, news:'Posko bencana gabungan TNI/Polri & pemkot layani warga.', mood:1, actors:{Polri:10, TokohAgama:7}}
    ], {rarity:'rare', weight:0.05, priority:30, relatedActors:['Polri', 'TokohAgama']}),

  EV(902, 'Culture', '🏺', 'Penemuan Situs Purbakala di Proyek PUPR',
    'Pekerja proyek jalan menemukan candi dan artefak purbakala abad ke-12 di bawah tanah.',
    [
      {t:'Hentikan proyek sementara & jadikan Cagar Budaya', d:'Potensi pariwisata sejarah tinggi.', fx:{apbd:-0.5, pad:0.5, sat:5, env:3}, news:'Situs purbakala di Nusapura dilindungi sebagai Cagar Budaya.', mood:1, actors:{TokohAdat:10, Akademisi:9}},
      {t:'Pindahkan artefak ke museum & lanjutkan proyek jalan', d:'Infrastruktur lancar, budayawan mengeluh.', fx:{infra:3, sat:-2}, news:'Artefak dipindah ke museum, proyek jalan berlanjut.', mood:0, actors:{TokohAdat:-8}},
      {t:'Rancang Taman Cagar Budaya Terpadu dengan Jalur Wisata', d:'Integrasi cagar sejarah dan jalan raya menjadi tujuan wisata baru.', fx:{apbd:-1.0, pad:0.8, sat:6, infra:2}, news:'Jalan terpadu dengan taman cagar budaya jadi ikon wisata baru.', mood:1, actors:{TokohAdat:10, Akademisi:9, Pengembang:6}}
    ], {rarity:'epic', weight:0.02, priority:40, relatedActors:['TokohAdat', 'Akademisi']}),

  EV(903, 'Teknologi', '🌐', 'Anugerah Smart City UNESCO',
    'UNESCO menetapkan Nusapura sebagai Kota Cerdas Berkelanjutan di Asia Tenggara.',
    [
      {t:'Terima penghargaan di Paris & bentuk Konsorsium Global', d:'Citra internasional Nusapura membumbung tinggi.', fx:{inv:12, sat:8, pad:0.8}, news:'Nusapura harum di kancah internasional raih anugerah UNESCO.', mood:1, actors:{MediaNasional:10, Investor:9}, achievement:'visioner'},
      {t:'Gelar Konferensi Cerdas Internasional & Beasiswa IT Pemuda', d:'Menarik modal intelektual dan membuka peluang bagi generasi muda.', fx:{apbd:-0.5, edu:6, inv:8, sat:7}, news:'Nusapura gelar Konferensi Smart City & obral beasiswa IT.', mood:1, actors:{Akademisi:9, Influencer:8}, achievement:'visioner'},
      {t:'Tolak Seremonial Mewah & Salurkan Hibah Teknologi ke Kelurahan', d:'Alokasikan seluruh dana seremonial untuk komputerisasi RT/RW.', fx:{apbd:0.2, sat:9, edu:4}, news:'Walikota alokasikan dana penghargaan langsung ke kelurahan.', mood:1, actors:{LSM:9, MediaLokal:8}, achievement:'visioner'}
    ], {rarity:'legendary', weight:0.005, priority:50, relatedActors:['MediaNasional', 'Investor']}),

  EV(904, 'Ekonomi', '👑', 'Kunjungan Kerja Presiden RI & Inpres Infrastruktur',
    'Presiden RI melakukan kunjungan kerja ke Nusapura dan meresmikan Instruksi Presiden (Inpres) Bantuan Daerah.',
    [
      {t:'Sambut Presiden & ajukan Inpres Pelabuhan Terpadu', d:'Mendapat kucuran dana pusat Rp 2 Triliun.', fx:{apbd:2.0, infra:8, sat:6}, news:'Presiden kucurkan dana Inpres untuk Pelabuhan Nusapura.', mood:1, actors:{MediaNasional:8, Pengusaha:8}},
      {t:'Ajukan Bantuan Pusat untuk Tram & Transportasi Publik Terpadu', d:'Pusat mengucurkan dana perimbangan khusus proyek transportasi massal.', fx:{apbd:1.5, traffic:-8, sat:7, infra:6}, news:'Presiden setujui Inpres pembangunan transportasi publik.', mood:1, actors:{MediaNasional:9, KomunitasLingkungan:8}},
      {t:'Prioritaskan Inpres Revitalisasi Total RSUD & Sekolah Daerah', d:'Fokus pada fasilitas dasar warga masyarakat kurang mampu.', fx:{apbd:1.8, health:7, edu:7, sat:7}, news:'Inpres Presiden prioritaskan sarana kesehatan & sekolah.', mood:1, actors:{MediaNasional:8, TokohAgama:7}}
    ], {rarity:'epic', weight:0.01, priority:45, relatedActors:['MediaNasional', 'Pengusaha']})
];

// ==================== RANDOM BACKGROUND STORY EVENTS ====================
var RANDOM_STORY_EVENTS = [
  EV(601, 'Birokrasi', '🕵️', 'Pungli Perizinan Terbongkar di Dinas Teknis',
    'Inspektorat menemukan indikasi oknum staf dinas meminta pelicin (pungli) dalam proses Izin Mendirikan Bangunan (IMB) & izin usaha UMKM.',
    [
      {t:'Pecat oknum & terapkan perizinan digital 100%', d:'Meningkatkan kepuasan publik & iklim investasi transparan.', fx:{apbd:-0.2, sat:5, crime:-6, inv:4}, news:'Pemkot pecat oknum pungli & terapkan perizinan online.', mood:1, actors:{Pengusaha:7, LSM:8}},
      {t:'Beri sanksi administratif internal', d:'Hemat biaya namun dinilai kurang tegas oleh media & LSM.', fx:{sat:1, crime:-2}, news:'Oknum pungli dinas diberi sanksi peringatan.', mood:0, actors:{LSM:-4}},
      {t:'Audit total seluruh dinas teknis & evaluasi Kadis', d:'Penyegaran birokrasi menyeluruh untuk eliminasi celah pungli.', fx:{apbd:-0.3, sat:6, crime:-8}, news:'Audit total birokrasi dilakukan pasca temuan pungli.', mood:1, actors:{ASN:6, KPK:7}}
    ], {priority:8, relatedActors:['LSM', 'Pengusaha', 'ASN']}),

  EV(602, 'Kesehatan', '🏥', 'Sidak Mendadak Wali Kota ke RSUD Kota',
    'Saat sidak jam 2 malam, ditemui banyak antrean pasien BPJS belum tertangani akibat kekurangan dokter jaga & staf medis gawat darurat.',
    [
      {t:'Tegur Kadiskes & alokasikan dana darurat dokter jaga', d:'Layanan medis cepat membaik dan warga merasa diperhatikan.', fx:{apbd:-0.5, health:6, sat:5}, news:'Walikota sidak RSUD dan tambah dokter jaga.', mood:1, actors:{LSM:6, TokohAgama:5}},
      {t:'Rotasi Dirut RSUD & perbaiki sistem antrean digital', d:'Rombak manajemen RSUD agar lebih responsif melayani publik.', fx:{sat:4, health:4}, news:'Manajemen RSUD dirombak total pasca sidak walikota.', mood:1, actors:{ASN:4}},
      {t:'Imbau peningkatan mutu pelayanan tanpa dana tambahan', d:'Respon seremonial tanpa perbaikan fasilitas nyata.', fx:{sat:-2, health:0}, news:'Sidak RSUD berujung imbauan staf medis.', mood:-1, actors:{LSM:-5}}
    ], {priority:8, relatedActors:['LSM', 'ASN']}),

  EV(603, 'Ketertiban', '🅿️', 'Sengketa Sektor Parkir Liar & Ormas Lokal',
    'Maraknya juru parkir liar di pusat bisnis diprotes warga dan pemilik toko karena disertai intimidasi.',
    [
      {t:'Kerahkan Satpol PP & wujudkan e-Parking resmi', d:'Retribusi masuk kas daerah dan parkir tertib.', fx:{apbd:-0.3, pad:0.5, crime:-5, sat:5}, news:'Sistem e-Parking terapkan tarif transparan bebas jukir liar.', mood:1, actors:{Polri:7, Pengusaha:6}},
      {t:'Rangkul ormas jadi jukir resmi berseragam & terdata', d:'Mencegah konflik fisik dengan memberi penghasilan terdata.', fx:{sat:2, pad:0.2, crime:-2}, news:'Juru parkir dibina & diberi identitas resmi pemkot.', mood:0, actors:{TokohAgama:4}},
      {t:'Biarkan saja demi menghindari konfrontasi dengan ormas', d:'Parkir liar terus menjamur dan meresahkan warga.', fx:{sat:-4, crime:3}, news:'Keluhan parkir liar masih terus dikeluhkan warga.', mood:-1, actors:{Pengusaha:-6}}
    ], {priority:8, relatedActors:['Polri', 'Pengusaha']}),

  EV(604, 'Keuangan', '📈', 'Temuan BPK: SILPA Membengkak di Akhir Tahun',
    'Sisa Lebih Pembiayaan Anggaran (SILPA) menembus Rp 400 Miliar akibat lambatnya penyerapan program di beberapa OPD/Dinas.',
    [
      {t:'Evaluasi Kepala Dinas lambat & genjot belanja publik', d:'Percepatan lelang sarana publik demi penyerapan optimal.', fx:{sat:4, infra:3, edu:3}, news:'Walikota beri deadline percepatan penyerapan APBD.', mood:1, actors:{BPK:8, DPRD:6}},
      {t:'Alokasikan SILPA untuk dana cadangan bencana & investasi', d:'Menjaga ketahanan kas kota untuk kebutuhan mendadak.', fx:{apbd:0.8, pad:0.3, sat:2}, news:'SILPA dialihkan ke dana abadi & cadangan daerah.', mood:1, actors:{BPK:7}},
      {t:'Biarkan masuk ke kas tahun depan tanpa teguran', d:'Disorot kementerian karena efisiensi penyerapan rendah.', fx:{sat:-2}, news:'Pusat soroti tingginya angka SILPA Nusapura.', mood:-1, actors:{BPK:-5}}
    ], {priority:8, relatedActors:['BPK', 'DPRD']}),

  EV(605, 'Perhub', '🚐', 'Aksi Mogok Sopir Angkutan Kota (Angkot)',
    'Ratusan sopir angkot menggelar mogok jalan menuntut subsidi BBM dan penataan trayek seiring maraknya angkutan umum modern.',
    [
      {t:'Beri subsidi voucher BBM & rekrut sopir ke bus kota', d:'Pengemudi angkot terakomodasi jadi armada pendukung kota.', fx:{apbd:-0.6, traffic:-3, sat:5}, news:'Sopir angkot direkrut jadi pengemudi bus kota terpadu.', mood:1, actors:{SerikatBuruh:8, Polri:5}},
      {t:'Fasilitasi kemitraan angkot feeder digital', d:'Angkot direvitalisasi menjadi pengumpan rute pemukiman.', fx:{apbd:-0.3, traffic:-2, sat:4}, news:'Angkot direvitalisasi jadi feeder pemukiman.', mood:1, actors:{SerikatBuruh:6}},
      {t:'Biarkan persaingan pasar menentukan', d:'Mogok angkot melumpuhkan transportasi warga seharian.', fx:{sat:-3, traffic:3}, news:'Mogok angkot lumpuhkan mobilitas warga.', mood:-1, actors:{SerikatBuruh:-8}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Polri']}),

  EV(606, 'Ekonomi', '🌾', 'Kelangkaan Sembako & Spekulasi Harga di Pasar',
    'Harga beras dan minyak goreng melonjak 30% akibat spekulasi distributor & kendala pasokan daerah.',
    [
      {t:'Gelar Operasi Pasar Murah di 15 Kecamatan', d:'Menstabilkan harga pangan dan meringankan warga miskin.', fx:{apbd:-0.5, pov:-2, sat:6}, news:'Operasi pasar murah stabilkan harga sembako.', mood:1, actors:{SerikatBuruh:7, TokohAgama:6}},
      {t:'Sidak Satpol PP ke gudang distributor penimbun', d:'Sanksi tegas bagi oknum penimbun sembako.', fx:{crime:-4, sat:4}, news:'Gudang penimbun sembako digerebek petugas.', mood:1, actors:{Polri:7}},
      {t:'Imbau warga berbelanja secara bijak', d:'Tanpa intervensi pasar, warga menanggung lonjakan harga.', fx:{sat:-4, pov:1}, news:'Warga keluhkan melonjaknya harga beras di pasar.', mood:-1, actors:{SerikatBuruh:-6}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Polri', 'TokohAgama']}),

  EV(607, 'Bencana', '🌪️', 'Bencana Angin Puting Beliung Pesisir',
    'Angin kencang merusak puluhan atap rumah warga dan fasilitas dermaga di kecamatan pesisir.',
    [
      {t:'Cairkan Bantuan Sosial Bencana & Renovasi Rumah', d:'Perbaikan cepat rumah warga terdampak bencana.', fx:{apbd:-0.7, sat:6, pov:-1}, news:'Bantuan darurat bencana cair untuk korban puting beliung.', mood:1, actors:{TokohAgama:7, MediaLokal:6}},
      {t:'Kerahkan BPBD & Relawan Gotong Royong', d:'Pembersihan puing dan bantuan bahan pokok darurat.', fx:{apbd:-0.2, sat:4}, news:'Relawan dan BPBD bahu membahu bantu warga pesisir.', mood:1, actors:{LSM:6}},
      {t:'Ajukan klaim ke pemerintah provinsi', d:'Perbaikan fasilitas umum memakan waktu lebih lama.', fx:{sat:-1}, news:'Bantuan kerusakan angin puting beliung tunggu provinsi.', mood:0}
    ], {priority:8, relatedActors:['TokohAgama', 'LSM', 'MediaLokal']}),

  EV(608, 'Kepegawaian', '📝', 'Pengangkatan Ribuan Tenaga Honorer ASN',
    'Ribuan guru dan tenaga kesehatan honorer mendesak kejelasan status pengangkatan menjadi PPPK.',
    [
      {t:'Angkat honorer bertahap dengan uji kompetensi transparan', d:'Kepastian status meningkatkan semangat nakes & guru.', fx:{apbd:-0.9, edu:5, health:5, sat:6}, news:'Pengangkatan PPPK beri kepastian bagi guru & nakes.', mood:1, actors:{ASN:9, Mahasiswa:6}},
      {t:'Beri insentif honorarium sesuai UMK kota', d:'Meningkatkan kesejahteraan honorer tanpa langsung beban pegawai permanen.', fx:{apbd:-0.4, sat:3}, news:'Gaji honorer dinaikkan setara UMK kota.', mood:1, actors:{ASN:6}},
      {t:'Tunda pengangkatan demi menjaga beban belanja pegawai', d:'Ratusan honorer menggelar unjuk rasa damai.', fx:{sat:-5, edu:-2}, news:'Honorer kecewa pengangkatan PPPK ditunda lagi.', mood:-1, actors:{ASN:-8}}
    ], {priority:8, relatedActors:['ASN', 'Mahasiswa']}),

  EV(609, 'Politik', '🏛️', 'Interpelasi DPRD Terkait Penyerapan Anggaran',
    'DPRD melayangkan hak interpelasi mempertanyakan penyerapan anggaran fasilitas kesehatan dan sekolah negeri yang dinilai lambat.',
    [
      {t:'Hadir di Paripurna & Buka Data Realisasi Transparan', d:'Paparan data kuantitatif yang lugas meredakan emosi politisi DPRD.', fx:{sat:5, crime:-3}, news:'Walikota paparkan data rinci penyerapan APBD di rapat DPRD.', mood:1, actors:{BPK:8, Mahasiswa:6, MediaLokal:7}},
      {t:'Lakukan Lobi Politik Lintas Fraksi & Jamuan Makan', d:'Merangkul fraksi-fraksi kunci agar interpelasi tidak berlanjut.', fx:{apbd:-0.2, sat:2}, news:'Lobi politik dinilai cairkan hubungan eksekutif-legislatif.', mood:0, actors:{DPRD:6}},
      {t:'Layangkan Bantahan Keras via Media Massa', d:'Pernyataan frontal memicu perseteruan memanas dengan parlemen.', fx:{sat:-4}, news:'Ketegangan politik meningkat antara Walikota dan DPRD.', mood:-1, actors:{DPRD:-8, MediaNasional:7}}
    ], {priority:8, relatedActors:['BPK', 'Mahasiswa', 'MediaLokal']}),

  EV(610, 'Hukum', '⚖️', 'Operasi Tangkap Tangan (OTT) Oknum Camat',
    'Aparat penegak hukum memproses OTT terhadap oknum Camat terkait pungutan liar sertifikasi tanah warga.',
    [
      {t:'Dukung Penegakan Hukum & Pecat Oknum Seketika', d:'Ketegasan Walikota mendapat apresiasi tinggi dari publik & LSM.', fx:{sat:6, crime:-8}, news:'Walikota pecat oknum Camat kena OTT & bersihkan perizinan.', mood:1, actors:{KPK:9, LSM:8, MediaNasional:7}},
      {t:'Bentuk Tim Investigasi Internal Inspektorat', d:'Pemeriksaan berlapis untuk memastikan kelengkapan bukti hukum.', fx:{sat:2, crime:-3}, news:'Inspektorat selidiki dugaan penyalahgunaan wewenang di kecamatan.', mood:0, actors:{Inspektorat:7}},
      {t:'Minta Publik Menghormati Azas Praduga Tak Bersalah', d:'Respon dianggap publik kurang tegas dalam membela keadilan warga.', fx:{sat:-3, crime:2}, news:'Publik kritik sikap defensif terhadap kasus pungli tanah.', mood:-1, actors:{LSM:-6}}
    ], {priority:8, relatedActors:['KPK', 'LSM', 'Inspektorat']}),

  EV(611, 'Ekonomi', '🌶️', 'Lonjakan Inflasi Cabai & Bawang Merah',
    'Jelang hari raya, harga cabai dan bawang melonjak 80% akibat gagal panen daerah penyangga.',
    [
      {t:'Kerjasama Antar Daerah (KAD) Pasok Langsung dari Petani', d:'Memotong rantai tengkulak dan menstabilkan harga pasar.', fx:{apbd:-0.4, pov:-2, sat:6}, news:'Pemkot pasok bahan pokok langsung dari daerah penghasil.', mood:1, actors:{SerikatBuruh:7, TokohAgama:6}},
      {t:'Subsidi Ongkos Angkut Komoditas Pangan', d:'Menjaga stabilitas harga di pedagang eceran pasar tradisional.', fx:{apbd:-0.3, sat:4}, news:'Subsidi transportasi pangan ringankan patokan harga pasar.', mood:1, actors:{Pengusaha:6}},
      {t:'Imbau Warga Menghemat & Memanfaatkan Pekarangan', d:'Tanpa intervensi konkrit, warga tetap mengeluhkan harga.', fx:{sat:-3, pov:1}, news:'Warga soroti belum adanya langkah konkret stabilkan harga cabai.', mood:-1, actors:{SerikatBuruh:-5}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Pengusaha']}),

  EV(612, 'Infrastruktur', '🏟️', 'Revitalisasi Stadion & Gelanggang Olahraga Kota',
    'Komunitas pemuda dan asosiasi olahraga mendesak perbaikan fasilitas stadion kota yang memprihatinkan.',
    [
      {t:'Bangun Sport Center Modern Berkonsep KPBU Swasta', d:'Fasilitas megah bertaraf internasional tanpa menguras APBD.', fx:{apbd:-0.8, infra:7, sat:6, inv:5}, news:'Kawasan Sport Center modern siap dibangun bersama investor.', mood:1, actors:{Investor:8, Influencer:7}},
      {t:'Renovasi Tribun & Rumput Stadion Swakelola Dinas', d:'Perbaikan standar nasional agar dapat menggelar liga resmi.', fx:{apbd:-0.5, infra:4, sat:4}, news:'Stadion kota diresmikan pasca renovasi rumput & tribun.', mood:1, actors:{Akademisi:5}},
      {t:'Tunda Pembangunan Demi Prioritas Jalan & Banjir', d:'Komunitas pemuda kecewa dengan penundaan anggaran olahraga.', fx:{sat:-2, infra:0}, news:'Anggaran perbaikan stadion dialihkan ke sektor lain.', mood:-1, actors:{Influencer:-6}}
    ], {priority:8, relatedActors:['Investor', 'Influencer']}),

  EV(613, 'Pendidikan', '🏫', 'Polemik Sistem Zonasi PPDB Sekolah Negeri',
    'Orang tua murid memprotes dugaan pemalsuan surat domisili dalam penerimaan peserta didik baru (PPDB).',
    [
      {t:'Verifikasi Faktual Alamat & Tindak Pidana Pemalsuan', d:'Penegakan aturan fair memberikan keadilan bagi warga lokal.', fx:{sat:6, edu:4, crime:-4}, news:'Verifikasi ketat PPDB batalkan puluhan domisili palsu.', mood:1, actors:{Mahasiswa:7, LSM:7}},
      {t:'Tambah Kuota Jalur Prestasi & Afirmasi Warga Miskin', d:'Memberi ruang lebih luas bagi anak berprestasi dari keluarga kurang mampu.', fx:{apbd:-0.2, edu:5, sat:5}, news:'Kuota jalur prestasi PPDB ditambah pemkot.', mood:1, actors:{Akademisi:6}},
      {t:'Pertahankan Hasil Tanpa Evaluasi Lanjutan', d:'Gelombang protes terjadi di depan kantor Dinas Pendidikan.', fx:{sat:-4, edu:-2}, news:'Orang tua murid unjuk rasa tuntut transparansi PPDB.', mood:-1, actors:{Mahasiswa:-7}}
    ], {priority:8, relatedActors:['Mahasiswa', 'LSM', 'Akademisi']}),

  EV(614, 'Kesehatan', '🦟', 'Lonjakan Kasus Demam Berdarah (DBD) Musim Hujan',
    'Musim hujan memicu lonjakan penderita DBD hingga ruang rawat RSUD dipenuhi pasien anak-anak.',
    [
      {t:'Masifkan Fogging Gratis & Gerakan 3M di Seluruh RT/RW', d:'Respon cepat menekan jentik nyamuk dan angka penularan.', fx:{apbd:-0.4, health:6, sat:6}, news:'Gebrakan fogging gratis & 3M serentak turunkan DBD.', mood:1, actors:{LSM:7, TokohAgama:6}},
      {t:'Tambah Bed Darurat RSUD & Bebaskan Biaya Perawatan', d:'Penanganan medis gratis menyelamatkan puluhan jiwa anak.', fx:{apbd:-0.6, health:7, sat:5}, news:'RSUD siapkan bangsal darurat pasien DBD gratis.', mood:1, actors:{ASN:6}},
      {t:'Imbauan Pola Hidup Bersih via Media Sosial', d:'Respon lambat memicu kepanikan warga di beberapa kelurahan.', fx:{sat:-3, health:-2}, news:'Warga minta tindakan nyata penanganan wabah DBD.', mood:-1, actors:{LSM:-5}}
    ], {priority:8, relatedActors:['LSM', 'TokohAgama']}),

  EV(615, 'Lingkungan', '🏭', 'Pencemaran Limbah Tekstil di Sungai Kota',
    'Komunitas lingkungan menemukan pabrik tekstil membuang limbah kimia berbahaya langsung ke sungai warga.',
    [
      {t:'Cabut Izin Operasional & Denda Berat Pabrik Pencemar', d:'Ketegasan lingkungan membuktikan komitmen kota hijau.', fx:{sat:6, env:8, inv:-2}, news:'Pemkot tutup pabrik pencemar sungai & berlakukan denda.', mood:1, actors:{KomunitasLingkungan:9, LSM:8, Investor:-4}},
      {t:'Beri Peringatan Tertulis & Wajibkan Bangun IPAL', d:'Solusi kompromi agar pabrik tetap beroperasi dengan standar pengolahan limbah.', fx:{apbd:-0.2, env:4, sat:3}, news:'Pabrik tekstil diwajibkan bangun instalasi IPAL modern.', mood:1, actors:{Pengusaha:6}},
      {t:'Mediasi Tertutup Tanpa Sanksi Publik', d:'Komunitas lingkungan menggelar aksi protes di tepi sungai.', fx:{sat:-4, env:-4}, news:'Komunitas kritik pembiaran pencemaran sungai kota.', mood:-1, actors:{KomunitasLingkungan:-8}}
    ], {priority:8, relatedActors:['KomunitasLingkungan', 'LSM', 'Pengusaha']}),

  EV(616, 'Birokrasi', '📱', 'Peluncuran Super-App Layanan Publik "NusaPay & Service"',
    'Dinas Kominfo menyiapkan sistem layanan perizinan, adminduk, dan aduan warga terpadu dalam 1 genggaman.',
    [
      {t:'Integrasikan 100% OPD & Hadiahi Respon Aduan Tercepat', d:'Inovasi digital diakui nasional & pangkas birokrasi berbelit.', fx:{apbd:-0.6, sat:7, inv:5, crime:-5}, news:'Super-App Nusapura raih penghargaan E-Gov Terbaik Nasional.', mood:1, actors:{Influencer:8, Akademisi:7, Pengusaha:6}},
      {t:'Uji Coba Terbatas di 3 Dinas Utama Lebih Dulu', d:'Transisi bertahap untuk memastikan keandalan server data.', fx:{apbd:-0.3, sat:4}, news:'Uji coba layanan digital perizinan mulai diterapkan.', mood:1, actors:{ASN:5}},
      {t:'Tunda Peluncuran Akibat Kendala Kesiapan ASN', d:'Publik menilai inovasi birokrasi daerah tertinggal dari kota lain.', fx:{sat:-2}, news:'Peluncuran aplikasi layanan publik ditunda lagi.', mood:-1, actors:{Influencer:-5}}
    ], {priority:8, relatedActors:['Influencer', 'Akademisi', 'Pengusaha']}),

  EV(617, 'Sosial', '🏪', 'Penataan Pedagang Kakilima (PKL) Alun-Alun',
    'Ratusan PKL memenuhi Alun-alun kota memicu kemacetan, kumuh, dan penumpukan sampah malam hari.',
    [
      {t:'Relokasi ke Sentra Kuliner Modern Bersubsidi & Wifi Gratis', d:'Alun-alun rapi, pedagang mendapat omzet lebih stabil di tempat baru.', fx:{apbd:-0.8, sat:6, env:5, pad:0.4}, news:'Sentra Kuliner Alun-Alun diresmikan, PKL tertata rapi.', mood:1, actors:{Pengusaha:7, SerikatBuruh:6, TokohAgama:6}},
      {t:'Atur Jam Operasional Ketat & Penjagaan Satpol PP', d:'Mencegah kumuh tanpa menggusur sumber penghidupan warga.', fx:{apbd:-0.2, sat:3, env:2}, news:'Jam operasional PKL Alun-Alun diatur ketat petugas.', mood:0, actors:{Polri:5}},
      {t:'Penertiban Paksa Tanpa Menyediakan Lokasi Pengganti', d:'Kericuhan meletus antara petugas Satpol PP dan pedagang.', fx:{sat:-5, env:3, crime:3}, news:'Penertiban PKL di Alun-Alun diwarnai kericuhan.', mood:-1, actors:{SerikatBuruh:-8}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Pengusaha', 'Polri']}),

  EV(618, 'Pariwisata', '🎨', 'Festival Kebudayaan & Kuliner Nusantara',
    'Dinas Pariwisata merencanakan event tahunan pariwisata untuk mendatangkan wisatawan dan menggerakkan UMKM.',
    [
      {t:'Alokasikan Dana Promosi Besar & Undang Artis Nasional', d:'Kunjungan wisatawan melonjak, hotel & restoran panen omzet.', fx:{apbd:-0.9, pad:1.2, sat:6, inv:4}, news:'Festival Nusapura sukses hadirkan 100 ribu pengunjung.', mood:1, actors:{Pengusaha:8, Influencer:8, TokohAdat:7}},
      {t:'Rangkul Sanggar Seni & Komunitas Budaya Lokal', d:'Pesta rakyat meriah berbasis kearifan lokal yang hemat anggaran.', fx:{apbd:-0.4, pad:0.5, sat:5}, news:'Pesta Budaya Lokal pamerkan kerajinan & kuliner khas.', mood:1, actors:{TokohAdat:8, LSM:6}},
      {t:'Gelar Acara Skala Kecil di Aula Pemkot', d:'Dampak ekonomi minim dan respon publik hambar.', fx:{sat:1}, news:'Peringatan hari budaya digelar sederhana.', mood:0}
    ], {priority:8, relatedActors:['TokohAdat', 'Influencer', 'Pengusaha']}),

  EV(619, 'Infrastruktur', '💡', 'Program PJU: Kota Terang Bebas Begal',
    'Maraknya kejahatan jalanan di malam hari dipicu oleh ribuan penerangan jalan umum (PJU) mati.',
    [
      {t:'Ganti 10.000 Titik PJU dengan LED Smart Sensor', d:'Jalanan terang benderang, angka kriminalitas jalanan anjlok drastis.', fx:{apbd:-1.1, crime:-8, sat:7, infra:5}, news:'Program Nusapura Terang pasang 10 ribu lampu LED smart.', mood:1, actors:{Polri:8, TokohAgama:7, MediaLokal:7}},
      {t:'Perbaikan Swakelola Petugas Dinas Bertahap', d:'Lampu jalan diperbaiki berkala sesuai laporan aduan warga.', fx:{apbd:-0.4, crime:-3, sat:3}, news:'Petugas sweeping PJU mati di jalur-jalur rawan.', mood:1, actors:{ASN:5}},
      {t:'Imbau Warga Swadaya Penerangan Lorong Rumah', d:'Warga merasa keluhan keamanan malam kurang direspon pemerintah.', fx:{sat:-3, crime:2}, news:'Rasa aman di malam hari masih dikeluhkan warga.', mood:-1, actors:{Polri:-4}}
    ], {priority:8, relatedActors:['Polri', 'MediaLokal']}),

  EV(620, 'Korupsi', '🏢', 'Pelaksanaan Open Bidding Seleksi Jabatan Kadis',
    'Sejumlah posisi Kepala Dinas strategis kosong dan membutuhkan pimpinan birokrasi baru.',
    [
      {t:'Buka Seleksi Terbuka Diawasi KASN & Publik', d:'Menghasilkan pejabat profesional dengan integritas dan keahlian teruji.', fx:{apbd:-0.3, sat:6, crime:-6}, news:'Seleksi terbuka pejabat pemkot dipuji panitia KASN.', mood:1, actors:{Akademisi:8, KPK:8, ASN:7}},
      {t:'Bentuk Tim Pansel dari Akademisi & Tokoh Masyarakat', d:'Proses seleksi transparan yang memperhitungkan rekam jejak.', fx:{apbd:-0.2, sat:4}, news:'Tim independen uji kelayakan calon Kepala Dinas.', mood:1, actors:{Akademisi:7}},
      {t:'Gunakan Hak Prerogatif Menunjuk Pejabat Dekat', d:'Isu nepotisme dan jual beli jabatan dihembuskan kelompok oposisi.', fx:{sat:-4, crime:4}, news:'Penunjukan Kadis baru disorot isu nepotisme.', mood:-1, actors:{LSM:-7, KPK:-6}}
    ], {priority:8, relatedActors:['Akademisi', 'KPK', 'ASN']}),

  EV(621, 'Infrastruktur', '♿', 'Trotoar Ramah Disabilitas & Pedestrian Kota',
    'Trotoar jalan utama kota dalam kondisi rusak, licin, dan tidak ramah bagi pejalan kaki & disabilitas.',
    [
      {t:'Bangun Trotoar Pedestrian M3 Lengkap Guiding Block & Bollard', d:'Kawasan pejalan kaki cantik dan aksesibel bagi semua warga.', fx:{apbd:-1.2, infra:6, sat:6, env:4}, news:'Trotoar ramah disabilitas diresmikan di koridor utama.', mood:1, actors:{LSM:8, KomunitasLingkungan:7}},
      {t:'Perbaikan Tambal Sulam di Titik Terparah', d:'Hemat anggaran namun estetika kota belum tertata utuh.', fx:{apbd:-0.4, infra:2, sat:2}, news:'Perbaikan trotoar dilakukan di pusat perbelanjaan.', mood:0},
      {t:'Tunda Pembangunan Trotoar Demi Pelebaran Jalan', d:'Dikritik aktivis karena mengutamakan kendaraan ketimbang pejalan kaki.', fx:{sat:-3, env:-2}, news:'Aktivis kritik penundaan fasilitas pejalan kaki.', mood:-1, actors:{LSM:-6}}
    ], {priority:8, relatedActors:['LSM', 'KomunitasLingkungan']}),

  EV(622, 'Lingkungan', '♻️', 'Krisis TPA Sampah & Proyek Listrik Sampah (PLTSa)',
    'Kapasitas TPA utama kota makin kritis, menimbulkan bau tidak sedap ke pemukiman sekitar.',
    [
      {t:'Bangun Pembangkit Listrik Tenaga Sampah (PLTSa) Modern', d:'Mengubah 800 ton sampah harian menjadi energi listrik bersih.', fx:{apbd:-1.8, env:9, sat:7, inv:6}, news:'PLTSa Nusapura mulai dibangun untuk kelola sampah kota.', mood:1, actors:{KomunitasLingkungan:9, Investor:8, BPK:6}},
      {t:'Perluas Lahan TPA & Beri Uang Kompensasi Bau Warga', d:'Solusi sementara yang membutuhkan anggaran ganti rugi rutin.', fx:{apbd:-0.7, env:2, sat:2}, news:'Kompensasi bau dicairkan untuk warga sekitar TPA.', mood:0, actors:{SerikatBuruh:5}},
      {t:'Paksa Pemilahan Sampah Mandiri Tanpa Sarana Pendukung', d:'Sampah menumpuk di tempat pembuangan sementara (TPS) kelurahan.', fx:{sat:-4, env:-4}, news:'Tumpukan sampah di sudut kota keluhkan warga.', mood:-1, actors:{KomunitasLingkungan:-8}}
    ], {priority:8, relatedActors:['KomunitasLingkungan', 'Investor']}),

  EV(623, 'Pendidikan', '💻', 'Program Lab Komputer & Coding Gratis SMK',
    'Dunia kerja membutuhkan lulusan sekolah vokasi yang mahir teknologi & pemrograman.',
    [
      {t:'Pengadaan 1.000 Laptop & Sertifikasi Digital Internasional', d:'Siswa SMK kota memiliki keahlian digital kompetitif.', fx:{apbd:-0.9, edu:8, sat:6, inv:5}, news:'Siswa SMK Nusapura raih sertifikasi digital internasional.', mood:1, actors:{Akademisi:8, Pengusaha:8}},
      {t:'Pelatihan Coding Gratis untuk Guru & Instruktur Sekolah', d:'Meningkatkan mutu pengajaran IT secara berkelanjutan.', fx:{apbd:-0.3, edu:4, sat:4}, news:'Guru SMK ikuti pelatihan coding & kecerdasan buatan.', mood:1, actors:{ASN:6}},
      {t:'Andalkan Bantuan Komputer Bekas dari Perusahaan Swasta', d:'Spesifikasi perangkat terbatas untuk standar pembelajaran terkini.', fx:{sat:1, edu:1}, news:'Penyerahan bantuan komputer bekas untuk sekolah.', mood:0}
    ], {priority:8, relatedActors:['Akademisi', 'Pengusaha']}),

  EV(624, 'Sosial', '🔥', 'Bantuan Kebakaran Pemukiman Padat Penduduk',
    'Kebakaran hebat menghanguskan puluhan rumah warga di kawasan pemukiman padat.',
    [
      {t:'Sediakan Rusunawa Gratis & Dana Rekonstruksi Rumah', d:'Penanganan bencana menyeluruh yang memulihkan kehidupan korban.', fx:{apbd:-0.8, sat:7, pov:-2}, news:'Walikota jamin tempat tinggal & bantuan korban kebakaran.', mood:1, actors:{TokohAgama:8, MediaLokal:7}},
      {t:'Bantuan Dapur Umum BPBD & Paket Sembako Lengkap', d:'Memenuhi kebutuhan dasar darurat masa tanggap bencana.', fx:{apbd:-0.3, sat:4}, news:'Dapur umum BPBD layani ratusan korban kebakaran.', mood:1, actors:{LSM:6}},
      {t:'Serahkan Penanganan ke Pemprov & Relawan Swadaya', d:'Bantuan dinilai terlambat sampai ke tangan korban.', fx:{sat:-3}, news:'Korban kebakaran harapkan percepatan bantuan pemkot.', mood:-1, actors:{MediaLokal:-5}}
    ], {priority:8, relatedActors:['TokohAgama', 'MediaLokal']}),

  EV(625, 'Keamanan', '🚔', 'Aksi Geng Motor & Program Jam Malam Remaja',
    'Konvoi geng motor meresahkan warga di akhir pekan dengan aksi keonarannya.',
    [
      {t:'Patroli Gabungan Polri/Satpol PP & Jam Malam Anak Sekolah', d:'Kota kembali kondusif, orang tua merasa lebih tenang.', fx:{apbd:-0.3, crime:-7, sat:6}, news:'Patroli skala besar berhasil amankan puluhan geng motor.', mood:1, actors:{Polri:9, TokohAgama:7}},
      {t:'Bangun Gelanggang Otomotif & Wadah Positif Pemuda', d:'Mengarahkan hobi balap remaja ke tempat resmi yang aman.', fx:{apbd:-0.6, crime:-4, sat:5}, news:'Sirkuit balap resmi pemkot dibuka untuk pembinaan pemuda.', mood:1, actors:{Influencer:7}},
      {t:'Serahkan Sepenuhnya Penanganan ke Kepolisian', d:'Warga masih merasa was-was saat melintas malam hari.', fx:{sat:-2, crime:1}, news:'Warga desak tindakan lebih masif atasi kejahatan malam.', mood:-1, actors:{Polri:-3}}
    ], {priority:8, relatedActors:['Polri', 'Influencer']}),

  EV(626, 'Ekonomi', '🟢', 'Isu Kelangkaan LPG 3 Kg & Antrean Melon Panjang',
    'Warga mengeluhkan kelangkaan pangkalan gas LPG 3 kg di berbagai kecamatan, memicu antrean panjang dari subuh.',
    [
      {t:'Gelar Operasi Pasar Gas LPG Bersubsidi & Tambah Pasokan Pertamina', d:'Mendistribusikan ribuan tabung gas langsung ke kelurahan sasaran.', fx:{apbd:-0.4, sat:6, pov:-2}, news:'Pemkot & Pertamina gelar operasi pasar LPG 3 kg gratis retribusi.', mood:1, actors:{LSM:7, SerikatBuruh:7}},
      {t:'Sidak Pangkalan Gas & Tindak Tegas Penimbun Eceran', d:'Sidak gabungan Satpol PP menangkap oknum penimbun tabung melon.', fx:{apbd:-0.1, sat:5, crime:-3}, news:'Sidak pemkot berhasil amankan ratusan tabung LPG yang ditimbun.', mood:1, actors:{Polri:8, Pengusaha:-4}},
      {t:'Imbau Warga Mampu Beralih ke Gas Non-Subsidi 5.5 Kg', d:'Langkah imbauan dinilai kurang efektif mengatasi panic buying warga.', fx:{sat:-3}, news:'Antrean gas melon masih terjadi di sejumlah pasar tradisional.', mood:-1, actors:{LSM:-5}}
    ], {priority:8, relatedActors:['Polri', 'SerikatBuruh', 'LSM']}),

  EV(627, 'Sosial', '🏪', 'Sengketa Lahan Pasar Tradisional vs Modern Supermarket',
    'Pengembang ritel modern berencana membangun pusat perbelanjaan persis di sebelah pasar tradisional tua kota.',
    [
      {t:'Batasi Izin Ritel & Wajibkan Kemitraan Lapak Pedagang Lokal', d:'Melindungi keberlangsungan ekonomi pedagang kecil tanpa mematikan investasi.', fx:{apbd:-0.2, sat:6, inv:3, pad:0.5}, news:'Pemkot wajibkan ritel modern akuisisi produk pedagang pasar lokal.', mood:1, actors:{Pengusaha:7, Investor:5, SerikatBuruh:7}},
      {t:'Revitalisasi Total Pasar Tradisional Menjadi Pasar Modern Bersih', d:'Bangunan pasar lama dipermodern agar sanggup bersaing dengan mall.', fx:{apbd:-1.2, sat:7, infra:5}, news:'Pasar tradisional kota direvitalisasi jadi pusat ekonomi modern.', mood:1, actors:{Pengusaha:8, TokohAdat:6}},
      {t:'Otorisasi Penuh Izin Ritel Tanpa Syarat Batas Jarak', d:'Pedagang pasar tradisional menggelar aksi demonstrasi menolak kelulusan izin.', fx:{sat:-5, inv:6, pad:0.8}, news:'Pedagang pasar tradisional unjuk rasa tolak ritel raksasa.', mood:-1, actors:{SerikatBuruh:-9, Investor:8}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Investor', 'Pengusaha']}),

  EV(628, 'Teknologi', '💻', 'Dugaan Kebocoran Data Kependudukan Diskominfo',
    'Peretas mengklaim telah mengunggah jutaan data NIK dan alamat warga Nusapura di forum web gelap.',
    [
      {t:'Audit Keamanan Siber Total & Undang BSSN/Pakar IT', d:'Audit menyeluruh dan pembaharuan enkripsi server kependudukan kota.', fx:{apbd:-0.6, sat:5, crime:-5}, news:'Pemkot gandeng BSSN perkuat benteng siber data warga.', mood:1, actors:{Akademisi:8, Influencer:7}},
      {t:'Ganti Infrastruktur Server Cloud Daerah & Edukasi Warga', d:'Memindahkan pusat data ke cloud tersertifikasi ISO nasional.', fx:{apbd:-0.8, sat:4}, news:'Diskominfo migrasi pusat data kependudukan ke cloud terenkripsi.', mood:1, actors:{ASN:6}},
      {t:'Bantah Kebocoran Data Tanpa Menyajikan Investigasi Teknis', d:'Tagar #KawasanRentanSiber trending dan memicu ketakutan warganet.', fx:{sat:-5}, news:'Netizen soroti lemahnya respon siber pemerintah kota.', mood:-1, actors:{Influencer:-8, Akademisi:-7}}
    ], {priority:8, relatedActors:['Akademisi', 'Influencer']}),

  EV(629, 'Transportasi', '🚌', 'Aksi Mogok Angkutan Kota (Angkot) Menolak Bus Listrik',
    'Sopir angkot menggelar aksi mogok jalan menolak pengoperasian rute koridor baru Bus Trans-Nusapura.',
    [
      {t:'Program Re-Skilling Sopir Angkot Jadi Pengemudi Bus Bergaji UMR', d:'Merangkul pengemudi angkot masuk dalam manajemen transportasi publik resmi.', fx:{apbd:-0.7, sat:7, traffic:-6}, news:'Ratusan sopir angkot direkrut jadi pengemudi resmi Bus Trans-Nusapura.', mood:1, actors:{SerikatBuruh:9, Pengusaha:6}},
      {t:'Subsidi Rute Feeder Angkot Pembantu Rute Utama Bus', d:'Angkot difungsikan sebagai pengumpan dari pemukiman ke halte utama.', fx:{apbd:-0.4, sat:5, traffic:-3}, news:'Angkot kota dijadikan armada feeder integrasi jalanan.', mood:1, actors:{SerikatBuruh:7}},
      {t:'Tindak Tegas Penutupan Jalan Tanpa Buka Dialog', d:'Bentrokan pecah antara petugas pengawas jalan dan rombongan sopir.', fx:{sat:-4, traffic:5, crime:4}, news:'Mogok angkot akibatkan kemacetan parah di pusat kota.', mood:-1, actors:{SerikatBuruh:-9}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Polri']}),

  EV(630, 'Birokrasi', '📜', 'Pengangkatan Guru Honorer Lolos PPPK Tertahan SK',
    'Ratusan guru honorer yang telah lolos seleksi PPPK menagih penerbitan Surat Keputusan (SK) pengangkatan.',
    [
      {t:'Percepat Penerbitan SK & Alokasikan Gaji PPPK di APBD Perubahan', d:'Memberikan kepastian kesejahteraan bagi para pahlawan tanpa tanda jasa.', fx:{apbd:-0.9, sat:8, edu:7}, news:'SK PPPK Guru resmi diserahkan Walikota dalam suasana haru.', mood:1, actors:{SerikatBuruh:9, Akademisi:8, ASN:7}},
      {t:'Buka Posko Layanan Konsultasi & Penjadwalan Bertahap', d:'Proses verifikasi dokumen diselesaikan secara transparan per-wilayah.', fx:{apbd:-0.3, sat:4, edu:3}, news:'Penyerahan SK PPPK Guru dilaksanakan bertahap per kecamatan.', mood:1, actors:{ASN:6}},
      {t:'Tunda Pengangkatan Karena Alasan Keterbatasan Kas Daerah', d:'Perwakilan guru honorer menggelar aksi menginap di depan Balaikota.', fx:{sat:-5, edu:-3}, news:'Guru honorer unjuk rasa minta kepastian SK pengangkatan.', mood:-1, actors:{SerikatBuruh:-8, Akademisi:-6}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Akademisi', 'ASN']}),

  EV(631, 'Keamanan', '⚽', 'Kericuhan Suporter Sepakbola di Stadion Kota',
    'Laga derby sepakbola lokal berakhir ricuh antar kelompok suporter di sekitar kawasan stadion.',
    [
      {t:'Fasilitasi Deklarasi Damai Suporter & Renovasi Fasilitas Stadion', d:'Membangun komunikasi persaudaraan antar suporter serta fasilitas keamanan modern.', fx:{apbd:-0.5, sat:6, crime:-5}, news:'Deklarasi damai suporter sepakbola Nusapura disepakati bersama.', mood:1, actors:{Polri:8, Influencer:7}},
      {t:'Terapkan Sanksi Pertandingan Tanpa Penonton Sementara Waktu', d:'Langkah tegas mendinginkan tensi permusuhan antar klub.', fx:{sat:2, crime:-3}, news:'Laga kandang klub kota digelar tanpa penonton demi keamanan.', mood:0, actors:{Polri:7}},
      {t:'Biarkan Tanpa Evaluasi Pengamanan Stadion', d:'Dugaan perusakan fasilitas umum meluas ke pemukiman sekitar.', fx:{sat:-4, crime:5}, news:'Warga sekitar stadion keluhkan fasilitas rusak pasca pertandingan.', mood:-1, actors:{Polri:-6}}
    ], {priority:8, relatedActors:['Polri', 'Influencer']}),

  EV(632, 'Pembangunan', '🏺', 'Temuan Benda Cagar Budaya Candi Saat Proyek Tol',
    'Pekerja proyek jalan tol perkotaan menemukan struktur candi kuno dan benda purbakala di kedalaman tanah.',
    [
      {t:'Alihkan Trase Tol & Jadikan Kawasan Cagar Budaya Wisata Sejarah', d:'Langkah penyelamatan sejarah yang diapresiasi arkeolog dunia.', fx:{apbd:-1.1, sat:7, env:5, pad:0.6}, news:'Situs candi kuno diselamatkan, trase tol dialihkan pemkot.', mood:1, actors:{TokohAdat:9, Akademisi:9, KomunitasLingkungan:8}},
      {t:'Dokumentasi Purbakala & Lanjutkan Proyek Tol Terpadu', d:'Benda bersejarah dipindahkan ke museum kota sementara proyek berjalan.', fx:{apbd:-0.4, sat:4, infra:5}, news:'Artefak bersejarah diamankan di Museum Kota Nusapura.', mood:1, actors:{Pengusaha:6}},
      {t:'Abaikan Temuan Demi Mengikuti Target Waktu Tol', d:'Komunitas budaya meradang dan mengecam perusakan situs warisan bangsa.', fx:{sat:-5, env:-4}, news:'Komunitas sejarah protes dugaan perusakan situs kuno.', mood:-1, actors:{TokohAdat:-9, Akademisi:-8}}
    ], {priority:8, relatedActors:['TokohAdat', 'Akademisi']}),

  EV(633, 'Kesehatan', '🏥', 'Tunggakan Klaim BPJS Kesehatan RSUD Kota',
    'RSUD Kota mengalami kesulitan operasional obat akibat klaim BPJS Kesehatan yang belum cair.',
    [
      {t:'Talangi Dana Operasional RSUD via Kas APBD Dana Darurat', d:'Pasokan obat dan pelayanan rumah sakit tetap berjalan normal tanpa terganggu.', fx:{apbd:-0.8, health:7, sat:6}, news:'Pemkot talangi kas RSUD, pelayanan pasien BPJS dijamin normal.', mood:1, actors:{LSM:8, TokohAgama:7}},
      {t:'Lakukan Audit Manajemen RSUD & Negosiasi dengan BPJS Pusat', d:'Menata efisiensi belanja obat serta mempercepat pembayaran klaim.', fx:{apbd:-0.2, health:4, sat:3}, news:'Pemkot mediasi percepatan klaim BPJS Kesehatan RSUD.', mood:1, actors:{ASN:6}},
      {t:'Pembatasan Layanan Obat Pasien BPJS di Poliklinik', d:'Keluhan pasien meluap akibat tidak mendapatkan resep obat lengkap.', fx:{sat:-5, health:-4}, news:'Pasien keluhkan kelangkaan obat di RSUD kota.', mood:-1, actors:{LSM:-7}}
    ], {priority:8, relatedActors:['LSM', 'TokohAgama']}),

  EV(634, 'Sosial', '📱', 'Maraknya Judi Online & Pinjol Ilegal di Kelurahan',
    'Banyak warga kelurahan terjerat utang judi online & pinjaman online ilegal yang merusak tatanan keluarga.',
    [
      {t:'Satgas Bantuan Hukum, Blokir Wifi Liar & Program Kredit Mesra', d:'Memberikan pinjaman tanpa bunga bagi UMKM serta pendampingan hukum.', fx:{apbd:-0.6, sat:7, crime:-6, pov:-3}, news:'Program Kredit Mesra tanpa bunga berhasil bebaskan warga dari pinjol.', mood:1, actors:{TokohAgama:9, LSM:8, Pengusaha:6}},
      {t:'Sosialisasi Literasi Keuangan & Bahaya Judi Online di Posyandu/RT', d:'Pencegahan dini melalui penyuluhan bahaya keuangan ilegal.', fx:{apbd:-0.2, sat:4, crime:-3}, news:'Edukasi literasi keuangan gencar dilakukan di tingkat RW.', mood:1, actors:{TokohAgama:7}},
      {t:'Abaikan dan Anggap Sebagai Masalah Pribadi Masing-masing', d:'Maraknya kasus penagihan kasar debt collector meresahkan lingkungan.', fx:{sat:-4, crime:4}, news:'Aksi teror debt collector pinjol resahkan warga kelurahan.', mood:-1, actors:{Polri:-5, LSM:-6}}
    ], {priority:8, relatedActors:['TokohAgama', 'LSM', 'Polri']}),

  EV(635, 'Lingkungan', '🚛', 'Sengketa Tempat Pembuangan Sampah Antar-Daerah',
    'Kota tetangga menolak akses truk sampah Nusapura melintasi wilayahnya menuju TPA Regional.',
    [
      {t:'Negosiasi Uang Kompensasi Bau (Bisa) & Kerjasama Antar Daerah', d:'Mencapai kesepakatan win-win solution yang menguntungkan kedua pemerintah daerah.', fx:{apbd:-0.5, env:6, sat:5}, news:'Sengketa TPA selesai, kerjasama pengelolaan sampah antar-daerah disepakati.', mood:1, actors:{Pengusaha:7, BPK:6}},
      {t:'Percepat Pengolahan Sampah Mandiri di Tiap Kecamatan', d:'Mendorong Tempat Pengolahan Sampah 3R (Reuse, Reduce, Recycle) lokal.', fx:{apbd:-0.7, env:7, sat:5}, news:'Kecamatan di Nusapura diwajibkan olah sampah mandiri.', mood:1, actors:{KomunitasLingkungan:8}},
      {t:'Paksakan Truk Tetap Melintas Tanpa Kesepakatan', d:'Warga perbatasan memblokir jalan raya dengan barikade truk.', fx:{sat:-4, env:-5, traffic:5}, news:'Warga perbatasan blokir armada truk sampah kota.', mood:-1, actors:{KomunitasLingkungan:-7}}
    ], {priority:8, relatedActors:['KomunitasLingkungan', 'Pengusaha']}),

  EV(636, 'Investasi & Lingkungan', '🏭', 'Dilema Pabrik Smelter EV: Investasi Rp 12 T vs Krisis Air Tanah',
    'Konsorsium asing mengajukan izin investasi Rp 12 Triliun untuk membangun pabrik komponen EV di kawasan industri kota. Namun, operasional pabrik berisiko menyedot air tanah masif dan mencemari sungai.',
    [
      {t:'Izinkan Operasional Penuh & Bebas Pajak 3 Tahun Demi Lapangan Kerja', d:'Sektor ekonomi melonjak pesat dan pengangguran turun, namun warga sekitar mengalami krisis air bersih dan pencemaran air tanah.', fx:{apbd:1.5, pad:1.8, inv:8, unemp:-3, env:-10, sat:-6, health:-5}, news:'Pabrik EV resmi beroperasi di Nusapura; warga pesisir keluhkan air sumur keruh.', mood:0, actors:{Pengusaha:12, Investor:15, KomunitasLingkungan:-15, LSM:-10}},
      {t:'Syaratkan Instalasi Desalinasi Air Laut Mandiri dengan Biaya Investor', d:'Mencegah pencemaran air bersih warga, tetapi investor memotong nilai investasi dan menunda konstruksi hingga 2 tahun.', fx:{apbd:-0.5, pad:0.8, inv:2, env:4, sat:5}, news:'Pemkot wajibkan Amdal ketat desalinasi untuk proyek pabrik EV.', mood:1, actors:{Pengusaha:-5, Investor:-8, KomunitasLingkungan:10, Akademisi:8}},
      {t:'Tolak Izin Lokasi Pabrik Demi Konservasi Air & Kelestarian Kota', d:'Mendapat apresiasi luas dari pegiat lingkungan, namun asosiasi pengusaha dan parlemen kecewa kehilangan potensi pendapatan terbesar.', fx:{sat:8, env:9, health:6, inv:-8, pad:-0.8}, news:'Pemkot tolak pembangunan pabrik EV demi perlindungan sumber air warga.', mood:1, actors:{KomunitasLingkungan:15, TokohAdat:10, Pengusaha:-12, Investor:-15}}
    ], {priority:9, relatedActors:['Investor', 'KomunitasLingkungan', 'Pengusaha']}),

  EV(637, 'Birokrasi & Ekonomi', '⚖️', 'Defisit APBD Mendadak: Pangkas Bansos Miskin vs Tunjangan ASN vs Utang Bank',
    'Inflasi tak terduga dan penurunan pendapatan pajak memicu defisit kas daerah sebesar Rp 800 Miliar pada APBD Perubahan.',
    [
      {t:'Pangkas Subsidi Bahan Pokok & Bantuan Sosial Kelurahan Miskin', d:'Kas APBD terselamatkan tanpa memotong belanja operasional birokrasi, namun tingkat kemiskinan melonjak dan gelombang unjuk rasa pecah.', fx:{apbd:1.2, pov:4, sat:-12, crime:5}, news:'Pengurangan subsidi pangan memicu unjuk rasa ribuan warga di Balaikota.', mood:-1, actors:{BPK:8, SerikatBuruh:-15, LSM:-12, ASN:5}},
      {t:'Potong Tunjangan Kinerja (Tukir) Seluruh ASN & Pejabat Pemkot', d:'Masyarakat memuji keadilan dan kepemimpinan prihatin Walikota, tetapi efisiensi kerja birokrasi jatuh dramatis dan rawan timbul praktek pungli.', fx:{apbd:1.2, sat:7, pov:-1, eff:-12, crime:-2}, news:'Walikota potong tunjangan pejabat demi amankan program publik.', mood:1, actors:{ASN:-15, SerikatBuruh:8, LSM:9, BPK:5}},
      {t:'Terbitkan Obligasi Utang Daerah dengan Agunan Aset Pemkot', d:'Layanan publik dan gaji birokrasi aman hari ini, tetapi beban bunga utang daerah membengkak dan membebani APBD kepemimpinan mendatang.', fx:{apbd:0.8, pad:-0.6, sat:-2, inv:-4}, news:'Pemkot terbitkan surat utang daerah untuk tutupi defisit APBD.', mood:0, actors:{BPK:-10, Pengusaha:4, Akademisi:-6}}
    ], {priority:9, relatedActors:['SerikatBuruh', 'ASN', 'BPK']}),

  EV(638, 'Hukum & Politik', '🔍', 'Skandal Korupsi RSUD: Serahkan Ketua Partai Pengusung vs Interpelasi DPRD',
    'Kejaksaan menemukan bukti aliran dana markup alat kesehatan RSUD yang menyeret Ketua Partai Pengusung utama Walikota di parlemen.',
    [
      {t:'Buka Bukti Transparan & Dukung Penyelidikan Hukum Kejaksaan/KPK', d:'Mendapat dukungan penuh warga dan KPK, namun Fraksi Partai Pengusung mencabut dukungan politik dan mengancam pemakzulan.', fx:{sat:10, crime:-8, apbd:-0.3}, news:'Walikota izinkan Kejaksaan periksa Ketua Partai terkait tuduhan korupsi RSUD.', mood:1, actors:{KPK:15, LSM:12, DPRD:-18, PartaiPengusung:-20}},
      {t:'Selesaikan Secara Internal & Tuntut Pengembalian Uang Tanpa Pidana', d:'Stabilitas parlemen dankoalisi pemerintah aman, tetapi media mencium upaya pembungkaman kasus dan kepuasan publik merosot.', fx:{apbd:0.5, sat:-8, crime:4}, news:'LSM soroti penghentian pengusutan dugaan korupsi RSUD di tingkat internal.', mood:-1, actors:{DPRD:8, PartaiPengusung:10, KPK:-12, LSM:-14, MediaLokal:-10}},
      {t:'Copot Direktur RSUD Sebagai Kambing Hitam & Tutup Akses Informasi', d:'Menyelesaikan masalah sementara di permukaan, namun rumor korupsisistemik meluas di kalangan tenaga medis dan publik.', fx:{sat:-14, crime:8}, news:'Mantan Dirut RSUD angkat suara tuduh ada konspirasi pelepasan tanggung jawab.', mood:-1, actors:{Akademisi:-12, LSM:-15, KPK:-15}}
    ], {priority:9, relatedActors:['KPK', 'LSM', 'DPRD']}),

  EV(639, 'Sosial & Bencana', '🌊', 'Penataan Bantaran Sungai: Penggusuran Masif vs Kampung Susun vs Tanggul Riskan',
    'BMKG memprediksi cuaca ekstrem. 3.000 KK bermukim ilegal di bantaran sungai utama kota yang memicu penyempitan alur dan ancaman banjir bandang.',
    [
      {t:'Penggusuran Masif & Relokasi Warga ke Rusunawa Pinggiran Kota', d:'Ancaman banjir bandang teratasi secara efektif, tetapi warga kehilangan mata pencaharian dan Komnas HAM/LSM mengecam aksi penggusuran.', fx:{apbd:-1.2, env:8, sat:-8, infra:6, flood:-12, crime:-3}, news:'Penggusuran bantaran sungai diwarnai tangis warga; risiko banjir kota berkurang.', mood:0, actors:{KomunitasLingkungan:8, LSM:-12, TokohAdat:-8, Polri:5}},
      {t:'Program Land Consolidation / Kampung Susun Bahari di Lokasi Asli', d:'Solusi humanis yang dipuji komunitas internasional, namun menyerap 15% APBD dan pengerjaannya memakan waktu 3 tahun.', fx:{apbd:-2.0, env:6, sat:8, infra:5, flood:-8}, news:'Pemkot bangun Kampung Susun Bahari untuk warga bantaran sungai.', mood:1, actors:{LSM:12, TokohAdat:10, BPK:-8, Pengusaha:-5}},
      {t:'Bangun Tanggul Darurat & Sistem Peringatan Dini Tanpa Relokasi', d:'Hemat anggaran dan menghindari bentrokan warga, namun tanggul riskan jebol saat puncaknya hujan ekstrem.', fx:{apbd:-0.4, env:-2, sat:-2, flood:3}, news:'Pembangunan tanggul darurat di bantaran sungai dikejar waktu.', mood:0, actors:{KomunitasLingkungan:-8, LSM:-5}}
    ], {priority:9, relatedActors:['KomunitasLingkungan', 'LSM', 'TokohAdat']}),

  EV(640, 'Kota & Budaya', '🏬', 'Revitalisasi Pasar Gedhe: Mall 15 Lantai vs Pasar Heritage APBD',
    'Pasar Gedhe bersejarah terbakar sebagian. Konsorsium investor menawarkan membangun Mall Perbelanjaan 15 lantai dengan bagi hasil PAD tinggi, sementara asosiasi pedagang menolak keras.',
    [
      {t:'Setujui Pembangunan Mall Modern 15 Lantai & Uang Kerahiman Pedagang', d:'PAD kota melesat tinggi dan kota memiliki mall megah baru, namun identitas sejarah kota hilang dan ratusan pedagang kecil terdepak.', fx:{apbd:-0.3, pad:2.2, inv:9, sat:-10, env:-4, unemp:2}, news:'Pasar Gedhe diubah jadi Mall Modern 15 lantai; pedagang lama protes.', mood:-1, actors:{Investor:15, Pengusaha:10, TokohAdat:-18, SerikatBuruh:-12, Akademisi:-10}},
      {t:'Rekonstruksi Asli Cagar Budaya Pasar Gedhe dengan APBD Murni', d:'Warisan sejarah kota terjaga utuh dan pedagang kecil bersorak gembira, namun membebani kas APBD secara masif.', fx:{apbd:-1.8, pad:0.4, sat:9, env:5, unemp:-2}, news:'Pemkot rekonstruksi total Pasar Gedhe sesuai arsitektur asli cagar budaya.', mood:1, actors:{TokohAdat:18, SerikatBuruh:12, Akademisi:12, Investor:-10}},
      {t:'Konsep Pasar Heritage Hibrida (Pasar Tradisional Bawah, Ruang Kreatif Atas)', d:'Solusi kompromi yang memadukan pasar tradisional di lantai bawah dan pusat UMKM/Kreatif anak muda di lantai atas.', fx:{apbd:-1.1, pad:1.1, inv:4, sat:7, env:3}, news:'Pemkot gagas konsep Pasar Heritage Hibrida untuk Pasar Gedhe.', mood:1, actors:{Influencer:10, Akademisi:8, Pengusaha:5, SerikatBuruh:5}}
    ], {priority:9, relatedActors:['TokohAdat', 'SerikatBuruh', 'Investor']}),

  EV(641, 'Pesisir & Bencana', '🌊', 'Abrasi Pesisir: Giant Sea Wall Rp 3 T vs Nasib 2.000 Nelayan Tradisional',
    'Banjir rob merendam kawasan bisnis pesisir kota setiap bulan. Konsorsium pengembang menawarkan proyek Giant Sea Wall, tetapi membendung akses melaut 2.000 nelayan tradisional.',
    [
      {t:'Setujui Giant Sea Wall APBD Multiyears & Relokasi Nelayan ke TPI Baru', d:'Kawasan bisnis pesisir aman total dari rob, tetapi nelayan protes kehilangan wilayah tangkap & APBD terkuras.', fx:{apbd:-1.5, infra:8, env:-6, sat:-7, flood:-10, inv:6}, news:'Giant Sea Wall disahkan; kelompok nelayan gelar aksi unjuk rasa di pesisir.', mood:0, actors:{Investor:12, Pengusaha:10, TokohAdat:-12, KomunitasLingkungan:-14}},
      {t:'Fokus Restorasi Sabuk Hijau Mangrove & Tanggul Terbuka Pesisir', d:'Solusi ramah lingkungan yang melindungi habitat laut, tetapi butuh 5 tahun untuk efektif dan kawasan bisnis tetap rawan genangan.', fx:{apbd:-0.6, env:9, sat:6, flood:-4, inv:-3}, news:'Pemkot pilih restorasi hutan mangrove untuk benteng alami pesisir.', mood:1, actors:{KomunitasLingkungan:15, TokohAdat:10, Investor:-8, Pengusaha:-6}},
      {t:'Peninggian Jalan Protokol Pesisir & Pompa Air Raksasa Tanpa Bendungan', d:'Jalan utama tetap bisa dilalui kendaraan, namun pemukiman nelayan tetap kebanjiran rob.', fx:{apbd:-1.0, infra:5, sat:2, flood:-6}, news:'Peninggian jalan pesisir dikejar untuk cegah banjir rob di kawasan bisnis.', mood:0, actors:{Pengusaha:5, KomunitasLingkungan:-5}}
    ], {priority:10, relatedActors:['KomunitasLingkungan', 'Investor', 'TokohAdat']}),

  EV(642, 'Lingkungan & APBD', '♻️', 'Krisis TPA Sampah: Incinerator WTE Mahal vs Protes Polusi Warga',
    'TPA utama kota tersisa 4 bulan kapasitas. Investor asing menawarkan proyek Waste-to-Energy (Incinerator) bernilai triliunan, namun warga takut dioksin dan tipping fee APBD sangat mahal.',
    [
      {t:'Kontrak Incinerator WTE: APBD Bayar Tipping Fee Rp 250 M/Tahun', d:'Kota bebas ancaman darurat sampah, namun membebani APBD tahunan dan memicu protes pencemaran udara warga sekitar.', fx:{apbd:-1.8, env:6, sat:-6, health:-4, inv:5}, news:'Kontrak Incinerator disepakati; warga sekitar lokasi TPA gugat Pemkot.', mood:-1, actors:{Investor:15, BPK:-12, LSM:-10, KomunitasLingkungan:-12}},
      {t:'Buka TPA Sanitary Landfill Baru di Kecamatan Pinggiran Kota', d:'Biaya operasional jauh lebih murah, namun ditolak keras oleh warga pemukiman sekitar TPA baru dan memicu blokade jalan.', fx:{apbd:-0.8, env:-5, sat:-8, health:-3}, news:'Warga pinggiran blokir jalan akses rencana TPA baru.', mood:-1, actors:{TokohAdat:-12, LSM:-8, BPK:5}},
      {t:'Wajibkan Pemilahan Sampah Mandiri di Tiap RT/RW & Retribusi Olahan', d:'Sangat ramah lingkungan dan edukatif, namun butuh waktu bertahun-tahun sehingga TPA lama terancam meluap.', fx:{apbd:-0.4, env:8, sat:4, health:3}, news:'Pemkot wajibkan pilah sampah mandiri dari rumah tangga.', mood:1, actors:{KomunitasLingkungan:16, Akademisi:10, Pengusaha:-5}}
    ], {priority:10, relatedActors:['KomunitasLingkungan', 'Investor', 'BPK']}),

  EV(643, 'Hukum & Sosial', '🚫', 'Penertiban Kawasan Remang-remang: Penggusuran Hukum vs Nasib UMKM Sekitar',
    'Ormas agama menuntut penutupan kawasan hiburan malam terlarang. Namun kawasan tersebut menjadi sumber mata pencaharian ratusan pedagang kuliner malam, tukang parkir, dan pengemudi angkutan.',
    [
      {t:'Operasi Gabungan Satpol PP & TNI/Polri Tutup Total Kawasan', d:'Kawasan tertib & disanjung tokoh agama, namun angka pengangguran/kriminalitas terselubung menyebar ke pemukiman lain.', fx:{sat:-5, crime:-6, unemp:3, apbd:-0.3}, news:'Kawasan hiburan resmi ditutup total; ratusan pedagang kecil kehilangan omzet.', mood:0, actors:{TokohAdat:15, Ormas:15, SerikatBuruh:-12, LSM:-8}},
      {t:'Transformasi Kawasan Menjadi Pusat Wisata Kuliner Malam Resmi', d:'Menyelamatkan pedagang kecil dan menambah PAD, namun Ormas mengecam karena dianggap memutihkan tempat maksiat.', fx:{apbd:-0.8, pad:1.0, sat:6, crime:-3, unemp:-2}, news:'Pemkot ubah kawasan remang-remang jadi Sentra Kuliner Malam Resmi.', mood:1, actors:{SerikatBuruh:10, Pengusaha:8, Influencer:8, Ormas:-10}},
      {t:'Penerapan Jam Malam Ketat & Patroli Keamanan Rutin Tanpa Penggusuran', d:'Sikap kompromi yang meredakan gesekan, namun isu peredaran miras dan kejahatan malam tetap membara.', fx:{apbd:-0.2, crime:-2, sat:1}, news:'Pemkot perketat jam operasional & pengawasan di kawasan hiburan malam.', mood:0, actors:{Polri:8, Ormas:-5}}
    ], {priority:10, relatedActors:['Ormas', 'SerikatBuruh', 'Polri']}),

  EV(644, 'Layanan Publik', '💧', 'Kebocoran Pipa PDAM 45%: Kenaikan Tarif 40% vs Subsidi APBD Rp 250 M',
    'PDAM kota terancam bangkrut akibat tingkat kebocoran pipa 45% dan tarif tidak naik 8 tahun. Direksi menuntut kenaikan tarif air bersih atau subsidi APBD besar-besaran.',
    [
      {t:'Naikkan Tarif Air PDAM 40% Khusus Pelanggan Menengah-Atas & Industri', d:'PDAM kembali sehat dan sanggup meremajakan pipa tua, tetapi memicu gelombang protes warga & inflasi biaya hidup.', fx:{pad:1.5, apbd:0.8, sat:-9, pov:2}, news:'Penyesuaian tarif PDAM menuai protes dari asosiasi pelanggan & pedagang.', mood:-1, actors:{BPK:10, Pengusaha:-10, SerikatBuruh:-12, LSM:-8}},
      {t:'Suntik Modal APBD Rp 250 M Murni Tanpa Menaikkan Tarif Air Warga', d:'Masyarakat bersorak tarif tetap murah, tetapi memotong anggaran perbaikan sekolah dan puskesmas kota.', fx:{apbd:-1.5, sat:7, infra:4}, news:'Pemkot gelontorkan subsidi APBD untuk amankan tarif air bersih murah.', mood:1, actors:{SerikatBuruh:12, LSM:10, BPK:-10, Investor:-5}},
      {t:'Swastisasi Partial / Kerjasama Konsesi Pengelolaan Pipa Air Kota', d:'Suntikan modal swasta masuk tanpa APBD, tetapi tarif jangka panjang dikontrol swasta dan ditolak Serikat Buruh.', fx:{apbd:0.5, inv:7, sat:-5}, news:'Pemkot gandeng swasta untuk modernisasi jaringan pipa air PDAM.', mood:0, actors:{Investor:12, Pengusaha:8, SerikatBuruh:-15, LSM:-12}}
    ], {priority:10, relatedActors:['BPK', 'SerikatBuruh', 'LSM']}),

  EV(645, 'Teknologi & Privasi', '👁️', 'Smart City AI Surveillance: 500 Kamera Wajah vs Privasi Warga',
    'Kepolisian mengajukan proposal pemasangan 500 Kamera AI Pengenal Wajah (Face Recognition) di seluruh jalan raya kota untuk menekan begal dan kecelakaan, namun membutuhkan biaya lisensi software bernilai miliaran.',
    [
      {t:'Setujui Pemasangan 500 Kamera AI Face Recognition & ETLE Otomatis', d:'Angka kejahatan jalanan & kecelakaan anjlok tajam, tapi aktivis privasi protes keras tuduh Pemkot jadi "Big Brother".', fx:{apbd:-1.2, crime:-10, sat:-4, infra:6}, news:'Nusapura pasang 500 kamera AI; angka kejahatan jalanan anjlok tajam.', mood:1, actors:{Polri:18, Pengusaha:8, LSM:-15, Akademisi:-10}},
      {t:'Tolak Kamera Pengenal Wajah & Alokasikan Anggaran untuk Pos Polisi Lapangan', d:'Menjaga kebebasan sipil warga dan hemat lisensi, tetapi penanganan aksi kejahatan malam tetap lambat.', fx:{apbd:-0.6, crime:-4, sat:5}, news:'Pemkot pilih pos keamanan fisik dibanding pengawasan kamera AI.', mood:1, actors:{LSM:12, Akademisi:10, Polri:-8}},
      {t:'Batasi Pemasangan AI Hanya di Lampu Merah Utama & Kawasan Objek Vital', d:'Solusi tengah hemat biaya, tetapi pemukiman padat penduduk tetap menjadi titik buta kejahatan.', fx:{apbd:-0.5, crime:-5, sat:2}, news:'Kamera ETLE dipasang terbatas di persimpangan jalan protokol.', mood:0, actors:{Polri:5, LSM:-3}}
    ], {priority:10, relatedActors:['Polri', 'LSM', 'Akademisi']}),

  EV(646, 'Keuangan & APBD', '💸', 'Krisis Defisit Kas APBD: Jatuh Tempo Obligasi Rp 1.5 T vs TPP ASN',
    'Kas daerah Nusapura krisis akibat pembayaran jatuh tempo obligasi Pembangunan RSUD & Jalan Tol. Jika tidak dibayar, peringkat utang daerah anjlok & bunga membengkak.',
    [
      {t:'Potong Tukin/TPP ASN & Honorer 3 Bulan Demi Lunasi Obligasi', d:'Kas daerah selamat dari gagal bayar, tetapi moral pegawai pemkot hancur dan pelayanan publik melambat.', fx:{apbd:1.2, sat:-8, unemp:1}, news:'Tukin ASN dipotong 3 bulan untuk amankan utang jatuh tempo daerah.', mood:-1, actors:{BPK:12, ASN:-18, SerikatBuruh:-12}},
      {t:'Terbitkan Obligasi Pinjaman Baru Bunga Tinggi ke Konsorsium Bank', d:'Menunda krisis sementara tanpa memotong Tukin, tetapi menyandera kas APBD periode depan dengan bunga membengkak.', fx:{apbd:1.5, pad:-0.8, sat:-4}, news:'Pemkot terbitkan obligasi pinjaman baru bunga tinggi.', mood:0, actors:{Investor:12, BPK:-15, DPRD:-10}},
      {t:'Hentikan 40% Proyek Pembangunan Fisik / Infrastruktur Berjalan', d:'Menyelamatkan Tukin pegawai, namun kontraktor lokal gulung tikar dan pembangunan kota mangkrak.', fx:{apbd:1.0, infra:-8, sat:-6}, news:'Puluhan proyek fisik ditunda akibat krisis kas APBD.', mood:-1, actors:{Pengusaha:-15, BPK:8, Contractor:-10}}
    ], {priority:10, relatedActors:['BPK', 'ASN', 'Investor']}),

  EV(647, 'Transportasi & Sosial', '🚌', 'Ancaman Mogok Kerja Massal Sopir Angkot & Ojol: Penyesuaian Tarif vs Subsidi BBM APBD',
    'Lonjakan harga BBM nasional memicu aksi mogok lumpuh jalanan oleh 8.000 pengemudi angkutan umum kota.',
    [
      {t:'Alokasikan Subsidi BBM APBD Rp 300 M/Tahun Khusus Angkutan Umum', d:'Jalanan kembali normal dan pengemudi lega, tetapi menguras dana alokasi perbaikan sekolah dan jalan.', fx:{apbd:-1.2, sat:7, traffic:-6}, news:'Pemkot kucurkan subsidi BBM APBD untuk pengemudi angkutan kota.', mood:1, actors:{SerikatBuruh:16, Pengusaha:-6, BPK:-10}},
      {t:'Izinkan Kenaikan Tarif Angkutan Umum 30% Secara Resmi', d:'Pemkot tidak mengeluarkan APBD, tetapi memicu gelombang inflasi dan protes keras warga pengguna jalan.', fx:{pad:0.8, sat:-10, pov:2, inf:3}, news:'Tarif angkutan resmi naik 30%; warga keluhkan biaya hidup.', mood:-1, actors:{SerikatBuruh:-14, Pengusaha:10}},
      {t:'Operasikan Bus Sekolah & Kendaraan Dinas Gratis Sebagai Armada Pengganti', d:'Langkah darurat sementara, namun terjadi gesekan fisik antara petugas dan sopir angkot di jalanan.', fx:{apbd:-0.5, sat:2, traffic:4}, news:'Armada dinas dikerahkan bantu angkut warga saat mogok angkot.', mood:0, actors:{SerikatBuruh:-8, MediaLokal:6}}
    ], {priority:10, relatedActors:['SerikatBuruh', 'BPK', 'Pengusaha']}),

  EV(648, 'Birokrasi & Hukum', '🏛️', 'Skandal Sertifikat Fiktif Mafia Tanah & Indikasi Keterlibatan Oknum Kabinet',
    'Kejaksaan menemukan indikasi oknum Kepala Dinas dan Camat menerbitkan sertifikat tanah fiktif di kawasan industri senilai Rp 800 Miliar.',
    [
      {t:'Pecat Langsung & Serahkan Oknum Pejabat ke Kejaksaan / KPK', d:'Tindakan tegas diapresiasi aktivis antikorupsi, tetapi memicu guncangan politik & perlawanan fraksi DPRD.', fx:{sat:8, apbd:-0.4}, news:'Walikota serahkan oknum Kadis ke Kejaksaan terkait mafia tanah.', mood:1, actors:{KPK:18, LSM:15, ASN:-10, DPRD:-8}},
      {t:'Selesaikan Lewat Sanksi Etik Internal & Ganti Rugi Lahan', d:'Stabilitas birokrasi terjaga dari kegaduhan, tetapi pemkot dituduh melindungi koruptor oleh LSM.', fx:{sat:-8, apbd:0.5}, news:'Skandal tanah diselesaikan internal; aktivis tuduh pemkot tebang pilih.', mood:-1, actors:{ASN:8, KPK:-15, LSM:-15}},
      {t:'Bentuk Tim Investigasi Independen & Tunda Keputusan Hukum', d:'Sikap hati-hati mencegah salah tangkap, namun dinilai lamban dan tidak tegas.', fx:{sat:-3}, news:'Pemkot bentuk tim independen usut skandal lahan industri.', mood:0, actors:{Akademisi:8, LSM:-6}}
    ], {priority:10, relatedActors:['KPK', 'LSM', 'ASN']}),

  EV(649, 'Investasi & Lingkungan', '🏭', 'Izin Industri Smelter/Pabrik Kimia Rp 12 T vs Pencemaran Sumber Air PDAM',
    'Investor asing siap menanamkan investasi Rp 12 Triliun dan menyerap 5.000 tenaga kerja, namun ampas limbahnya berisiko tinggi mencemari sumber air PDAM utama kota.',
    [
      {t:'Izinkan Beroperasi & Buka Insentif Bebas Pajak 3 Tahun', d:'Investasi raksasa masuk dan pengangguran anjlok, tetapi kualitas air bersih kota memburuk dan warga jatuh sakit.', fx:{apbd:0.8, pad:2.5, inv:12, unemp:-4, env:-10, health:-6, sat:-6}, news:'Pabrik kimia raksasa diresmikan; aktivis lingkungan gelar aksi protes.', mood:0, actors:{Investor:20, Pengusaha:12, KomunitasLingkungan:-18, LSM:-12}},
      {t:'Wajibkan Pembangunan Instalasi Pengolahan Limbah (IPAL) Terpadu Rp 500 M', d:'Keseimbangan ekonomi dan lingkungan, walau investor memprotes penambahan biaya investasi.', fx:{apbd:-0.4, inv:5, env:4, sat:5}, news:'Pabrik kimia wajib operasikan IPAL modern sebelum berproduksi.', mood:1, actors:{KomunitasLingkungan:10, Investor:-8, Pengusaha:5}},
      {t:'Tolak Izin Operasi Pabrik Demi Keamanan Sumber Air Kota', d:'Lingkungan hidup dan air kota aman total, tetapi investor membatalkan proyek dan pindah ke kabupaten tetangga.', fx:{inv:-10, env:10, sat:6, unemp:2}, news:'Pemkot tolak izin smelter kimia; investor beralih ke daerah lain.', mood:1, actors:{KomunitasLingkungan:18, Investor:-18, Pengusaha:-10}}
    ], {priority:10, relatedActors:['KomunitasLingkungan', 'Investor', 'LSM']}),

  EV(650, 'Kesehatan & Bencana', '🏥', 'Wabah Demam Berdarah & Krisis RSUD: Dana BTT vs Gedung Olahraga',
    'Kasus DBD dan ISPA melonjak 300%. RSUD kota kehabisan tempat tidur & oksigen, memaksa pasien dirawat di selasar gedung.',
    [
      {t:'Alokasikan Anggaran BTT Rp 200 M & Rangkul Rumah Sakit Swasta', d:'Seluruh pasien tertangani dengan fasilitas layak, namun menyerap kas APBD belanja darurat.', fx:{apbd:-1.0, health:10, sat:8}, news:'Pemkot tanggung penuh biaya perawatan pasien di RS Swasta.', mood:1, actors:{LSM:12, BPK:-6, MediaLokal:8}},
      {t:'Konversi Gedung Olahraga & Sekolah Jadi Rumah Sakit Darurat', d:'Penanganan cepat berbiaya hemat, walau kenyamanan pasien terbatas dan kegiatan belajar terganggu.', fx:{apbd:-0.4, health:5, edu:-4, sat:-2}, news:'GOR kota disulap jadi RS Darurat penanganan penyakit menular.', mood:0, actors:{MediaLokal:5, Akademisi:-5}},
      {t:'Imbau Berobat Mandiri di Puskesmas & Fogging Swadaya', d:'Masyarakat mengeluhkan pelayanan pemerintah yang lamban saat krisis kesehatan.', fx:{health:-8, sat:-12, pov:2}, news:'Krisis tempat tidur RSUD dikeluhkan keluarga pasien.', mood:-1, actors:{LSM:-15, TokohAdat:-10}}
    ], {priority:10, relatedActors:['LSM', 'BPK', 'MediaLokal']}),

  EV(651, 'Teknologi & Siber', '💻', 'Serangan Ransomware Server Data Dukcapil: Tebusan Rp 50 M vs Pemulihan Backup Manual',
    'Peretas mengunci database kependudukan Dinas Dukcapil dan mengancam menyebarkan data ribuan warga jika tebusan Rp 50 Miliar tidak dibayar dalam 48 jam.',
    [
      {t:'Rekrut Tim Siber Independen & Pulihkan dari Cold Backup', d:'Mencegah pemerasan digital, namun layanan KTP & KK terganggu selama 2 minggu.', fx:{apbd:-0.5, sat:-4, infra:4}, news:'Layanan Dukcapil bertahap pulih pasca serangan ransomware.', mood:0, actors:{KPK:10, LSM:8, MediaLokal:5}},
      {t:'Bayar Tebusan Kripto Pakai Dana BTT Darurat Pemkot', d:'Layanan langsung kembali normal jam itu juga, tetapi mengecewakan pakar siber dan diselidiki KPK.', fx:{apbd:-1.0, sat:2, crime:5}, news:'Kontroversi penggunaan APBD untuk tebusan peretas siber.', mood:-1, actors:{KPK:-15, LSM:-12, BPK:-10}},
      {t:'Migrasikan Seluruh Server Kependudukan ke Data Center Nasional (PDN)', d:'Menjamin keamanan jangka panjang berstandar nasional dengan biaya efisien.', fx:{apbd:-0.3, sat:5, inv:6}, news:'Pemkot Nusapura integrasikan data ke Pusat Data Nasional.', mood:1, actors:{Akademisi:10, Investor:8}}
    ], {priority:8, relatedActors:['KPK', 'LSM', 'Akademisi']}),

  EV(652, 'Pendidikan & Pangan', '🍱', 'Program Makan Bergizi Gratis Siswa: Dapur Umum APBD vs Konsorsium UMKM',
    'Instruksi pemerintah pusat agar Pemkot menyediakan makan siang bergizi bagi 50.000 siswa SD dan SMP negeri.',
    [
      {t:'Kerjasama Konsorsium UMKM Kuliner & Warung Lokal', d:'Menggerakkan ekonomi ratusan pedagang lokal, walau pengawasan kualitas gizi membutuhkan tim khusus.', fx:{apbd:-1.0, sat:8, pov:-2, health:6}, news:'500 UMKM lokal dilibatkan dalam penyediaan makan siang sekolah.', mood:1, actors:{SerikatBuruh:12, Pengusaha:10, LSM:8}},
      {t:'Pusatkan di Dapur Umum Raksasa Berstandar Higienis', d:'Kualitas makanan dan gizi terpantau sangat presisi, namun membengkakkan investasi alat.', fx:{apbd:-1.5, health:8, edu:5, sat:5}, news:'Pemkot resmikan Dapur Umum Raksasa ramah gizi anak.', mood:1, actors:{Akademisi:10, BPK:-5}},
      {t:'Ubah Menjadi Bantuan Tunai Nutrisi Lewat Kartu Ibu Anak', d:'Praktis dan hemat operasional, walau berisiko dana dipakai belanja non-pangan oleh orang tua.', fx:{apbd:-0.6, sat:3, pov:-1}, news:'Bantuan tunai nutrisi disalurkan langsung ke rekening orang tua.', mood:0, actors:{LSM:-5, Akademisi:-5}}
    ], {priority:8, relatedActors:['SerikatBuruh', 'Pengusaha', 'Akademisi']}),

  EV(653, 'Energi & Transportasi', '⚡', 'Infrastruktur SPKLU Listrik: Insentif Investor vs Subsidikan Angkot',
    'Transisi energi hijau memerlukan penambahan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) di seluruh penjuru kota.',
    [
      {t:'Bebaskan Retribusi Lahan SPKLU untuk Pengembang 5 Tahun', d:'SPKLU tumbuh subur di mana-mana dan menarik pengusaha EV, meski pendapatan retribusi berkurang.', fx:{apbd:-0.2, pad:-0.3, inv:8, poll:-5, sat:4}, news:'Nusapura raih predikat Kota Ramah Kendaraan Listrik.', mood:1, actors:{Investor:15, KomunitasLingkungan:10, Pengusaha:8}},
      {t:'Gunakan APBD untuk Konversi Angkot Bensin Jadi Angkot Listrik', d:'Pengemudi angkot bersorak gembira dan emisi berkurang masif, tetapi menyerap anggaran belanja daerah.', fx:{apbd:-1.2, poll:-6, sat:7, traffic:-3}, news:'Pemkot luncurkan armada Angkot Listrik gratis retribusi.', mood:1, actors:{SerikatBuruh:15, KomunitasLingkungan:12}},
      {t:'Serahkan Sepenuhnya pada Mekanisme Pasar Tanpa Intervensi Pemkot', d:'Anggaran aman murni, namun pertumbuhan stasiun charger lambat dan polusi tetap tinggi.', fx:{apbd:0.1, poll:3, sat:-2}, news:'Fasilitas pengisian kendaraan listrik masih terbatas di pusat kota.', mood:0, actors:{KomunitasLingkungan:-10, Investor:-5}}
    ], {priority:8, relatedActors:['Investor', 'KomunitasLingkungan', 'SerikatBuruh']}),

  EV(654, 'Pariwisata & Budaya', '🎭', 'Festival Seni & Budaya Nusantara Nusapura: Skala Internasional vs Efisiensi APBD',
    'Dinas Pariwisata mengajukan anggaran Rp 15 Miliar untuk menggelar Festival Seni Budaya Internasional penarik wisatawan asing.',
    [
      {t:'Dukung Anggaran Penuh & Gandeng Sponsorship Media Internasional', d:'Kota Nusapura viral dunia, okupansi hotel 100%, dan UMKM suvenir panen omzet.', fx:{apbd:-0.8, pad:1.2, inv:6, sat:8}, news:'Festival Budaya Nusapura pukau ribuan turis mancanegara.', mood:1, actors:{Pengusaha:12, Influencer:15, TokohAdat:10}},
      {t:'Skala Lokal Hemat & Fokus Pentas Komunitas Seni Rakyat', d:'Hemat anggaran APBD, namun jangkauan promosi wisata terbatas pada warga lokal.', fx:{apbd:-0.2, pad:0.3, sat:4}, news:'Pentas seni rakyat Nusapura berlangsung meriah dan hangat.', mood:1, actors:{TokohAdat:10, Pengusaha:-4}},
      {t:'Batalkan Festival & Alihkan Dana ke Pemeliharaan Jalan Pasar', d:'Mendapat pujian dari pedagang pasar, tetapi komunitas seniman mengelar aksi panggung keprihatinan.', fx:{apbd:0.3, infra:4, sat:-3}, news:'Batal gelar festival, Pemkot fokus tambal jalan pasar.', mood:0, actors:{TokohAdat:-12, Influencer:-10, Pengusaha:5}}
    ], {priority:7, relatedActors:['Influencer', 'TokohAdat', 'Pengusaha']}),

  EV(655, 'Kesehatan & Pemuda', '🧠', 'Layanan Darurat Kesehatan Mental & Judi Online: Hotline 112 vs Klinik Khusus',
    'Laporan kasus gangguan kecemasan pemuda dan jeratan judi online di kelurahan padat penduduk meningkat 150%.',
    [
      {t:'Buka Klinik Kesehatan Mental & Konseling Gratis di Tiap Puskesmas', d:'Inovasi layanan kesehatan komprehensif yang menyelamatkan generasi muda Nusapura.', fx:{apbd:-0.6, health:8, sat:7, crime:-4}, news:'Nusapura resmikan Posko Konseling Kesehatan Mental di Puskesmas.', mood:1, actors:{Mahasiswa:12, LSM:10, Akademisi:8}},
      {t:'Bentuk Tim Siber Pemkot & Blokir Situs Judi Online di Wifi Publik', d:'Langkah preventif cepat memutus akses, meski butuh pembaruan perangkat pemblokir.', fx:{apbd:-0.3, crime:-6, sat:5}, news:'Pemkot blokir ribuan situs judi di jaringan wifi publik kota.', mood:1, actors:{Polri:10, Ormas:12}},
      {t:'Kampanye Edukasi Komunitas lewat Influencer & Tokoh Agama', d:'Biaya sangat murah, tetapi dampaknya kurang langsung terhadap korban yang terjerat.', fx:{apbd:-0.1, sat:3}, news:'Penyuluhan bahaya judi online digencarkan di kampus & masjid.', mood:0, actors:{Influencer:8, Ormas:8}}
    ], {priority:7, relatedActors:['Mahasiswa', 'LSM', 'Polri']}),

  EV(656, 'Infrastruktur & Olahraga', '⚽', 'Renovasi Stadion Sepakbola Kota: Standar FIFA vs Kemitraan Klub Swasta',
    'Stadion Gelora Nusapura tidak lolos audit keselamatan Liga dan membutuhkan renovasi fasilitas riskan runtuh.',
    [
      {t:'Renovasi Total APBD Multiyears Berstandar Internasional FIFA', d:'Kebanggaan warga dan pendukung klub kota, namun menyedot anggaran besar.', fx:{apbd:-1.8, infra:7, sat:9, inv:4}, news:'Stadion Gelora Nusapura direnovasi total jadi arena modern.', mood:1, actors:{Influencer:12, Pengusaha:8, BPK:-8}},
      {t:'Serahkan Pengelolaan & Renovasi ke Konsorsium Klub Swasta', d:'Hemat anggaran APBD sepenuhnya, tetapi tarif tiket pertandingan naik signifikan.', fx:{apbd:0.2, inv:6, sat:-2}, news:'Klub swasta resmi ambil alih hak kelola Stadion Nusapura.', mood:0, actors:{Pengusaha:10, Influencer:-6}},
      {t:'Perbaiki Hanya Sektor Riskan Keselamatan (Tribun & Lampu)', d:'Pertandingan tetap berjalan aman dengan biaya efisien tanpa fasilitas mewah.', fx:{apbd:-0.5, infra:3, sat:3}, news:'Perbaikan tribun stadion selesai tepat waktu sebelum laga.', mood:1, actors:{BPK:5}}
    ], {priority:7, relatedActors:['Influencer', 'Pengusaha', 'BPK']}),

  EV(657, 'Sosial & Kebencanaan', '🔥', 'Kebakaran Hebat Pemukiman Padat: Hunian Sementara vs Penataan Ulang Tata Ruang',
    'Kebakaran melahap 120 rumah di kawasan padat. Ratusan keluarga kehilangan tempat tinggal.',
    [
      {t:'Tata Ulang Kawasan Jadi Pemukiman Sehat Teratur & Lebarkan Jalan', d:'Mencegah potensi kebakaran terulang dan kawasan jadi tertib, meski sebagian warga menolak penggeseran lahan.', fx:{apbd:-1.0, infra:6, env:5, sat:4, crime:-3}, news:'Pemkot tata ulang kawasan bekas kebakaran jadi pemukiman ramah bencana.', mood:1, actors:{KomunitasLingkungan:10, LSM:8, TokohAdat:-5}},
      {t:'Bangunkan Kembali Rumah Swadaya Sesuai Sertifikat Lahan Asli', d:'Proses sangat cepat dan warga puas dapat rumah kembali, walau kawasan tetap padat dan rawan.', fx:{apbd:-0.7, sat:7}, news:'Bantuan pembangunan rumah korban kebakaran disalurkan.', mood:1, actors:{LSM:10, TokohAdat:8}},
      {t:'Relokasikan Seluruh Korban ke Rusunawa Pemkot Terdekat', d:'Lahan bekas kebakaran diubah jadi ruang terbuka hijau, namun warga mengeluh jauh dari lokasi kerja.', fx:{apbd:-0.5, env:6, sat:-3}, news:'Korban kebakaran dipindahkan ke Rusunawa Pemkot.', mood:0, actors:{KomunitasLingkungan:8, LSM:-8}}
    ], {priority:8, relatedActors:['LSM', 'TokohAdat', 'KomunitasLingkungan']}),

  EV(658, 'Transportasi & Logistik', '🚛', 'Jalur Khusus Logistik Pelabuhan: Jalan Flyover Truk vs Pembatasan Jam Malam',
    'Truk kontainer raksasa memicu kemacetan parah dan merusak konstruksi jalan protokol kota menuju pelabuhan.',
    [
      {t:'Bangun Flyover Khusus Angkutan Logistik Pelabuhan', d:'Solusi permanen kelancaran barang dan jalan protokol bebas macet truk.', fx:{apbd:-1.6, infra:8, traffic:-8, inv:6}, news:'Jalan melayang khusus logistik pelabuhan resmi dibangun.', mood:1, actors:{Pengusaha:12, Investor:10, BPK:-6}},
      {t:'Batasi Operasional Truk Kontainer Hanya Jam 22.00 - 05.00 WIB', d:'Jalanan siang hari lancar tanpa APBD, namun asosiasi logistik memprotes keterlambatan pengiriman.', fx:{traffic:-6, sat:4, inv:-4}, news:'Pembatasan jam melintas truk kontainer berlaku hari ini.', mood:0, actors:{Pengusaha:-10, Investor:-8, Polri:8}},
      {t:'Wajibkan Truk Gunakan Jalur Kereta Barang Pelabuhan', d:'Efisien dan mengurangi beban jalan, meski butuh kesepakatan dengan PT KAI.', fx:{apbd:-0.4, traffic:-5, env:4}, news:'Pemkot dorong optimalisasi moda kereta untuk barang pelabuhan.', mood:1, actors:{Akademisi:10, Pengusaha:5}}
    ], {priority:7, relatedActors:['Pengusaha', 'Investor', 'Polri']}),

  EV(659, 'UMKM & Digital', '📲', 'Modernisasi Pasar Malam Tradisional: QRIS Wajib vs Pelatihan Bebas Biaya',
    'Perhimpunan pedagang kaki lima memohon bantuan modal digitalisasi agar mampu bersaing dengan e-commerce.',
    [
      {t:'Subsidi Perangkat Pembayaran QRIS & Wifi Gratis di 20 Pasar Malam', d:'Omzet pedagang kecil naik 30% dan transaksi keuangan pasar menjadi sangat transparan.', fx:{apbd:-0.4, pad:0.6, sat:8, inv:5}, news:'Pasar malam Nusapura kini dilengkapi jaringan digital & transaksi QRIS.', mood:1, actors:{SerikatBuruh:12, Influencer:10, Pengusaha:8}},
      {t:'Gelar Pelatihan Pemasaran Digital & Fotografi Produk UMKM', d:'Meningkatkan kapasitas pedagang secara berkelanjutan dengan biaya terjangkau.', fx:{apbd:-0.1, sat:5, unemp:-2}, news:'Ratusan pedagang kecil ikuti workshop pemasaran digital Pemkot.', mood:1, actors:{Akademisi:8, Mahasiswa:8}},
      {t:'Wajibkan Retribusi Digital Tanpa Bantuan Fasilitas Alat', d:'Memudahkan penarikan PAD, namun memicu keluhan pedagang senior yang gagap teknologi.', fx:{pad:0.4, sat:-5}, news:'Penerapan retribusi digital di pasar malam dikritik pedagang.', mood:-1, actors:{SerikatBuruh:-10, BPK:5}}
    ], {priority:6, relatedActors:['SerikatBuruh', 'Influencer', 'Akademisi']}),

  EV(660, 'Lingkungan & Bencana', '🏞️', 'Kolam Retensi Bencana Banjir: Pembebasan Lahan Lahan Pertanian vs Pompa Otomatis',
    'Survei PUPR merekomendasikan pembuatan kolam retensi 5 hektar untuk menampung limpasan air hujan ekstrem.',
    [
      {t:'Bebaskan Lahan Pertanian Pinggiran dengan Ganti Rugi Diatas NJOP', d:'Kawasan perkotaan bebas banjir total, dan pemilik lahan bersyukur mendapat ganti untung layak.', fx:{apbd:-1.4, flood:-10, env:6, sat:6}, news:'Pembangunan kolam retensi raksasa dimulai di Nusapura.', mood:1, actors:{TokohAdat:10, KomunitasLingkungan:12, BPK:-6}},
      {t:'Pasang 10 Unit Pompa Air Otomatis Kapasitas Tinggi di Muara Sungai', d:'Biaya pembebasan lahan hemat, namun biaya listrik dan perawatan bulanan tinggi.', fx:{apbd:-0.6, flood:-6, infra:4}, news:'Pompa air kapasitas tinggi dipasang di titik rawan genangan.', mood:1, actors:{BPK:4, KomunitasLingkungan:2}},
      {t:'Keruk Lumpur Selokan & Sungai Secara Rutin Tanpa Proyek Fisik Baru', d:'Pilihan paling hemat anggaran, walau tidak cukup saat intensitas hujan badai.', fx:{apbd:-0.2, flood:-3, sat:1}, news:'Pengerukan masif sungai kota digelar menyambut musim hujan.', mood:0, actors:{KomunitasLingkungan:-4}}
    ], {priority:8, relatedActors:['KomunitasLingkungan', 'TokohAdat', 'BPK']}),

  EV(661, 'Pendidikan & Riset', '🔬', 'Nusapura Innovation Award: Beasiswa Startup Pemuda vs Riset Kampus Lokal',
    'Dewan Riset Daerah mengusulkan alokasi dana inovasi untuk mencetak teknopreneur muda kota.',
    [
      {t:'Mendanai 50 Startup Pemuda Lokal & Sediakan Incubation Hub', d:'Tercipta ratusan lapangan kerja kreatif baru dan melahirkan unicorn lokal Nusapura.', fx:{apbd:-0.5, inv:8, unemp:-3, sat:7}, news:'Pemkot kucurkan hibah modal untuk 50 startup inovasi muda.', mood:1, actors:{Mahasiswa:15, Influencer:12, Investor:10}},
      {t:'Salurkan Beasiswa S2/S3 Peneliti Kampus Lokal', d:'Kualitas akademis daerah naik pesat, meski hasilnya baru terasa 3-5 tahun mendatang.', fx:{apbd:-0.4, edu:8, sat:5}, news:'Beasiswa peneliti muda Nusapura resmi dibuka.', mood:1, actors:{Akademisi:15, Mahasiswa:10}},
      {t:'Gunakan Dana untuk Perbaikan Lab Komputer Sekolah Menengah', d:'Fasilitas belajar siswa makin modern secara merata di seluruh kecamatan.', fx:{apbd:-0.3, edu:6, sat:4}, news:'Puluhan sekolah terima bantuan komputer dan internet cepat.', mood:1, actors:{Mahasiswa:5, Disdik:8}}
    ], {priority:6, relatedActors:['Mahasiswa', 'Akademisi', 'Influencer']}),

  EV(662, 'Tata Kota & Pemukiman', '🏠', 'Program Bedah Rumah Kumuh 1.000 Unit: Bantuan APBD vs Kemitraan CSR BUMN',
    'Masih terdapat 1.000 rumah tidak layak huni (RTLH) bertatap bocor dan berdinding bambu di pinggiran kota.',
    [
      {t:'Alokasikan APBD Murni Rp 20 Juta / Rumah + Gotong Royong Warga', d:'1.000 keluarga miskin kini memiliki rumah kokoh dan sehat, kemiskinan turun tajam.', fx:{apbd:-0.8, pov:-4, sat:8, health:4}, news:'Program Bedah Rumah APBD sentuh 1.000 keluarga pra-sejahtera.', mood:1, actors:{LSM:12, SerikatBuruh:10, TokohAdat:8}},
      {t:'Gandeng Program CSR BUMN & Perbankan Daerah Tanpa APBD', d:'Hemat kas daerah sepenuhnya, tetapi kuota pengerjaan terbatas 300 rumah per tahun.', fx:{pov:-2, sat:4, inv:4}, news:'Sinergi CSR BUMN bantu bedah rumah warga kurang mampu.', mood:1, actors:{Investor:10, Pengusaha:8}},
      {t:'Berikan Bantuan Material Bahan Bangunan Secara Bertahap', d:'Mendorong kemandirian warga, walau pengerjaan membutuhkan waktu lebih lama.', fx:{apbd:-0.4, pov:-2, sat:3}, news:'Bantuan material semen dan seng disalurkan ke kelurahan.', mood:0, actors:{LSM:4}}
    ], {priority:7, relatedActors:['LSM', 'SerikatBuruh', 'TokohAdat']}),

  EV(663, 'Keuangan & BUMD', '🏦', 'Penyehatan Bank Daerah (BPR Nusapura): Penyertaan Modal vs Audit Total Manajemen',
    'Bank BPR milik Pemkot mengalami lonjakan kredit macet akibat tata kelola yang tidak profesional.',
    [
      {t:'Restrukturisasi Direksi & Suntik Modal APBD Rp 100 M dengan Syarat Ketat', d:'Bank daerah kembali sehat, Penyaluran KUR UMKM berjalan lancar kembali.', fx:{apbd:-0.6, pad:0.8, inv:5, sat:4}, news:'BPR Nusapura selesai direstrukturisasi dan kembali cetak laba.', mood:1, actors:{BPK:10, Pengusaha:8, Investor:6}},
      {t:'Lakukan Merger dengan Bank Pembangunan Daerah (BPD) Provinsi', d:'Efisiensi total tanpa risiko APBD tambahan, walau kewenangan pemkot berkurang.', fx:{apbd:0.2, pad:0.4, sat:1}, news:'BPR Nusapura resmi dikonsolidasikan ke dalam BPD Provinsi.', mood:0, actors:{BPK:8, Investor:5}},
      {t:'Serahkan Kasus Kredit Macet ke Kejaksaan & Biarkan Beroperasi Terbatas', d:'Tindakan hukum tegas memburu penikmat kredit macet, walau citra perbankan terguncang.', fx:{crime:-4, sat:-3}, news:'Kejaksaan usut dugaan penyimpangan penyaluran kredit BPR.', mood:-1, actors:{KPK:12, BPK:10, Pengusaha:-8}}
    ], {priority:7, relatedActors:['BPK', 'Pengusaha', 'KPK']}),

  EV(664, 'Hukum & Keamanan', '🏍️', 'Aksi Balap Liar & Geng Motor Malam: Operasi Presisi Polri vs Sirkuit Resmi',
    'Warga mengeluhkan kebisingan knalpot brong dan kecemasan aksi geng motor remaja di jalan protokol setiap akhir pekan.',
    [
      {t:'Bangun Sirkuit Drag & Otomotif Resmi untuk Komunitas Pemuda', d:'Menyalurkan hobi otomotif anak muda ke jalur prestasi, balap liar jalanan lenyap total.', fx:{apbd:-0.5, crime:-8, sat:7, infra:4}, news:'Pemkot Nusapura resmikan Sirkuit Otomotif Pemuda.', mood:1, actors:{Influencer:15, Mahasiswa:10, Polri:8}},
      {t:'Operasi Gabungan Skala Besar Satpol PP & Patwal Kepolisian', d:'Tindakan tegas di lapangan meredam gangguan malam, walau terkesan represif.', fx:{apbd:-0.2, crime:-6, sat:4}, news:'Ratusan sepeda motor knalpot brong diamankan tim gabungan.', mood:1, actors:{Polri:15, LSM:-4}},
      {t:'Pasang Pita Kejut & Speed Bump di Titik Rawan Balapan', d:'Murah dan cepat dipasang, walau mengganggu kenyamanan pengemudi mobil reguler.', fx:{apbd:-0.1, crime:-3, sat:1, traffic:2}, news:'Pita kejut dipasang di lokasi rawan balapan liar.', mood:0, actors:{Polri:5}}
    ], {priority:7, relatedActors:['Influencer', 'Polri', 'Mahasiswa']}),

  EV(665, 'Lingkungan & Pangan', '🌾', 'Program Urban Farming & Taman Atap Gedung: Ketahanan Pangan Lokal',
    'Dinas Pertanian mengusulkan pemanfaatan atap gedung pemerintah dan lahan kosong untuk pertanian perkotaan.',
    [
      {t:'Sulap Seluruh Atap Gedung DInas Jadi Keberlanjutan Hydroponic Park', d:'Kota makin hijau, emisi panas gedung turun, dan hasil panen disalurkan ke panti asuhan.', fx:{apbd:-0.3, env:7, health:4, sat:6}, news:'Gedung-gedung Balaikota Nusapura hijau oleh pertanian atap.', mood:1, actors:{KomunitasLingkungan:15, Akademisi:10, Influencer:8}},
      {t:'Sediakan Bantuan Bibit & Pupuk Organik Gratis untuk Tiap RT', d:'Warga antusias menanam sayur mandiri di pekarangan rumah, memperkuat pangan keluarga.', fx:{apbd:-0.2, env:5, pov:-1, sat:5}, news:'Gerakan Menanam di Pekarangan Rumah diluncurkan Pemkot.', mood:1, actors:{KomunitasLingkungan:10, LSM:8}},
      {t:'Sewakan Lahan Tidur Milik Pemkot ke Pengusaha Hortikultura', d:'Menambah PAD kota tanpa pengeluaran APBD, walau pemanfaatan publik terbatas.', fx:{apbd:0.2, pad:0.3, inv:3}, news:'Lahan kosong milik Pemkot disewakan untuk perkebunan modern.', mood:0, actors:{Pengusaha:8, KomunitasLingkungan:-4}}
    ], {priority:6, relatedActors:['KomunitasLingkungan', 'Akademisi', 'Influencer']}),

  EV(666, 'Pariwisata & Pesisir', '🏖️', 'Pengembangan Waterfront City Nusapura: Pedestrian Hijau vs Reklamasi Komersial',
    'Kawasan pesisir kota berpotensi diubah menjadi destinasi wisata bahari unggulan berkelas internasional.',
    [
      {t:'Bina Jalur Pedestrian Hijau, Taman Mangrove, & Sentra Kuliner Ikan', d:'Tampilan kota makin cantik, nelayan lokal tetap bisa berdagang, dan lingkungan lestari.', fx:{apbd:-0.9, env:8, pad:0.8, sat:8}, news:'Waterfront City Nusapura jadi destinasi favorit wisata keluarga.', mood:1, actors:{KomunitasLingkungan:12, TokohAdat:10, Pengusaha:8}},
      {t:'Izinkan Reklamasi Komersial Konsorsium Swasta untuk Hotel & Marina', d:'PAD melonjak drastis dan investasi asing masuk masif, meski diprotes aktivis lingkungan.', fx:{apbd:0.5, pad:2.0, inv:10, env:-8, sat:-4}, news:'Proyek reklamasi marina pantai dimulai investor swasta.', mood:0, actors:{Investor:15, Pengusaha:12, KomunitasLingkungan:-15, LSM:-10}},
      {t:'Tata Ulang Dermaga Wisata & Fasilitasi Perahu Penyeberangan Tradisional', d:'Mengangkat ekonomi nelayan kecil dengan anggaran investasi yang sangat efisien.', fx:{apbd:-0.3, pad:0.4, sat:5}, news:'Dermaga wisata pesisir diresmikan untuk perahu tradisional.', mood:1, actors:{TokohAdat:8, SerikatBuruh:8}}
    ], {priority:7, relatedActors:['KomunitasLingkungan', 'Investor', 'TokohAdat']}),

  EV(667, 'Layanan Publik & Digital', '🆔', 'Identitas Kependudukan Digital (IKD): Wajib Layanan Publik vs Transisi Bertahap',
    'Kementerian Dalam Negeri mendorong percepatan migrasi KTP fisik menuju KTP Digital berbasis aplikasi smartphone.',
    [
      {t:'Terapkan Integrasi IKD untuk Seluruh Layanan Rumah Sakit & Sekolah', d:'Layanan publik makin cepat tanpa fotokopi KTP, walau warga senior sempat kebingungan.', fx:{apbd:-0.2, sat:5, infra:5}, news:'Nusapura jadi pelopor kota bebas fotokopi KTP lewat IKD.', mood:1, actors:{Mahasiswa:10, Akademisi:8, Influencer:8}},
      {t:'Buka Posko Pendampingan IKD Mobile di Tiap Kelurahan & Pasar', d:'Proses migrasi berjalan ramah dan inklusif bagi seluruh lapisan masyarakat.', fx:{apbd:-0.3, sat:7}, news:'Petugas kelurahan keliling bantu warga mendaftar KTP Digital.', mood:1, actors:{LSM:10, SerikatBuruh:8}},
      {t:'Wajibkan Khusus ASN & Biarkan Warga Regulasi Pakai KTP Fisik', d:'Aman tanpa resistensi publik, namun pencapaian target digitalisasi kota lambat.', fx:{sat:1}, news:'ASN Pemkot Nusapura 100% gunakan Identitas Digital.', mood:0, actors:{ASN:5, Akademisi:-3}}
    ], {priority:6, relatedActors:['Mahasiswa', 'LSM', 'Akademisi']}),

  EV(668, 'Kesehatan & Lansia', '👵', 'Layanan Kartu Nusapura Sehat Lansia: Ambulans Kelurahan vs Home Care',
    'Jumlah penduduk usia lanjut meningkat. Dewan Kesehatan mengusulkan jaminan khusus perawat keliling.',
    [
      {t:'Luncurkan Program Perawat Home-Care & Bantuan Obat Gratis Lansia', d:'Para lansia tersenyum bahagia mendapatkan perhatian medis langsung di rumah.', fx:{apbd:-0.6, health:9, sat:8, pov:-1}, news:'Program Perawat Keliling Lansia Nusapura dipuji kementerian.', mood:1, actors:{LSM:12, TokohAdat:10, MediaLokal:8}},
      {t:'Pengadaan 25 Unit Ambulans Cepat Kelurahan Berfasilitas Lengkap', d:'Kecepatan tanggap darurat medis kota meningkat pesat saat situasi krisis.', fx:{apbd:-0.8, health:6, infra:5, sat:6}, news:'Ambulans siaga kelurahan siap melayani warga 24 jam.', mood:1, actors:{SerikatBuruh:8, BPK:-4}},
      {t:'Subsidi Biaya Kamar Rawat Inap Kelas 3 di Seluruh Rumah Sakit', d:'Meringankan beban keluarga lansia saat harus mendapatkan perawatan intensif.', fx:{apbd:-0.5, health:5, sat:5}, news:'Keringanan biaya rawat inap lansia resmi diberlakukan.', mood:1, actors:{LSM:8, BPK:2}}
    ], {priority:7, relatedActors:['LSM', 'TokohAdat', 'MediaLokal']}),

  EV(669, 'Tenaga Kerja & Industri', '👷', 'Pusat Vokasi & Retraining Industri 4.0: Sinergi Politeknik vs Sertifikasi Gratis',
    'Otomatisasi pabrik menyebabkan ratusan buruh manufaktur terancam pemutusan hubungan kerja (PHK).',
    [
      {t:'Bangun Pusat Vokasi Otomatisasi & Sediakan Beasiswa Sertifikasi', d:'Buruh terampil menguasai teknologi baru dan langsung terserap industri modern.', fx:{apbd:-0.7, unemp:-4, inv:6, sat:7}, news:'Pusat Vokasi Industri Nusapura hasilkan tenaga kerja siap pakai.', mood:1, actors:{SerikatBuruh:15, Pengusaha:12, Akademisi:10}},
      {t:'Subsidi Pesangon & Alokasikan Pinjaman Modal Buka Usaha UMKM', d:'Bantalan ekonomi cepat bagi korban PHK agar sanggup mandiri.', fx:{apbd:-0.5, pov:-2, sat:5, unemp:-2}, news:'Bantuan modal usaha disalurkan untuk pekerja terdampak efisiensi.', mood:1, actors:{SerikatBuruh:10, Pengusaha:5}},
      {t:'Tuntut Perusahan Batasi Otomatisasi Lewat Peraturan Walikota', d:'Melindungi lapangan kerja lama, tetapi membuat investor enggan masuk.', fx:{sat:3, inv:-6, unemp:1}, news:'Pemkot terbitkan imbauan prioritas tenaga kerja manusia.', mood:0, actors:{SerikatBuruh:8, Investor:-12, Pengusaha:-10}}
    ], {priority:7, relatedActors:['SerikatBuruh', 'Pengusaha', 'Investor']}),

  EV(670, 'Budaya & Kota', '🏛️', 'Revitalisasi Kawasan Kota Tua Heritage: Restorasi Gedung vs Pusat Kreatif',
    'Gedung-gedung bersejarah peninggalan era kolonial di pusat kota terlantar dan rawan roboh.',
    [
      {t:'Restorasi Total Gedung Heritage & Ubah Jadi Kawasan Pedestrian Kreatif', d:'Kawasan Kota Tua berubah menjadi ikon estetis kota, ramai wisatawan & kafe anak muda.', fx:{apbd:-0.9, pad:1.0, env:6, sat:8, inv:5}, news:'Kawasan Kota Tua Nusapura tampil megah pasca restorasi.', mood:1, actors:{Influencer:15, TokohAdat:12, Akademisi:10, Investor:8}},
      {t:'Beri Insentif Potongan PBB bagi Pemilik Swasta yang Merawat Gedung', d:'Mendorong kepedulian pemilik tanpa membebani anggaran pembangunan APBD.', fx:{apbd:-0.2, pad:-0.2, env:4, sat:4}, news:'Pemkot berikan keringanan pajak bagi pemilik gedung bersejarah.', mood:1, actors:{Pengusaha:10, TokohAdat:8}},
      {t:'Alihkan Hak Kelola ke Investor Swasta untuk Hotel & Restoran Mewah', d:'Gedung terawat megah dan PAD masuk, meski akses publik terbuka berkurang.', fx:{apbd:0.3, pad:0.8, inv:7, sat:-2}, news:'Swasta sulap gedung tua Nusapura jadi hotel heritage mewah.', mood:0, actors:{Investor:12, TokohAdat:-8, Mahasiswa:-6}}
    ], {priority:7, relatedActors:['Influencer', 'TokohAdat', 'Investor']}),

  EV(671, 'Kebencanaan & Iklim', '☀️', 'Krisis Gelombang Panas & Kekeringan Air: Armada Tangki vs Drilling Sumur Dalam',
    'Fenomena El Nino memicu kekeringan sumur warga di 12 kelurahan selama dua bulan berturut-turut.',
    [
      {t:'Persetujuan Darurat Pengeboran 15 Sumur Dalam PDAM & Tangki Air Gratis', d:'Kebutuhan air bersih warga terpenuhi total dalam hitungan hari, krisis teratasi.', fx:{apbd:-0.6, health:5, sat:8, flood:0}, news:'15 Sumur Dalam PDAM resmi beroperasi atasi kekeringan warga.', mood:1, actors:{LSM:10, TokohAdat:8, BPK:2}},
      {t:'Kerahkan Armada Mobil Tangki TNI/Polri & Damkar Keliling Kelurahan', d:'Penyaluran air cepat merata tanpa biaya proyek permanen mahal.', fx:{apbd:-0.2, sat:5}, news:'Mobil tangki gabungan setiap hari suplai air bersih ke pemukiman.', mood:1, actors:{Polri:10, LSM:6}},
      {t:'Imbau Hemat Air & Salurkan Bantuan Subsidi Air Kemasan', d:'Langkah darurat sementara, namun warga tetap mengeluhkan kerepotan air bersih.', fx:{apbd:-0.1, sat:-4, health:-2}, news:'Warga antre air bersih mengular di kelurahan pinggiran.', mood:-1, actors:{LSM:-8, TokohAdat:-6}}
    ], {priority:8, relatedActors:['LSM', 'TokohAdat', 'Polri']}),

  EV(672, 'Transportasi & Kota', '🚶', 'Kawasan Pedestrian Bebas Kendaraan: Car Free Day Total vs Jalur Logistik Toko',
    'Asosiasi pejalan kaki menuntut perluasan area pedestrian bebas kendaraan di sepanjang koridor bisnis.',
    [
      {t:'Tetapkan Bebas Kendaraan Total Setiap Sabtu & Minggu Penuh', d:'Kualitas udara membaik drastis, warga berekreasi, dan bisnis kuliner melonjak.', fx:{apbd:-0.2, poll:-5, sat:7, pad:0.5}, news:'Koridor bisnis Nusapura resmi Bebas Kendaraan tiap akhir pekan.', mood:1, actors:{KomunitasLingkungan:15, Influencer:12, Pengusaha:6}},
      {t:'Sediakan Jalur Khusus Sepeda & Melebarkan Trotoar Tanpa Tutup Jalan', d:'Pejalan kaki nyaman dan arus lalu lintas pertokoan tetap berjalan normal.', fx:{apbd:-0.5, infra:5, poll:-2, sat:5}, news:'Trotoar lebar ramah disabilitas diresmikan di pusat kota.', mood:1, actors:{KomunitasLingkungan:8, Pengusaha:8}},
      {t:'Batasi CFD Hanya Hari Minggu Pagi Jam 06.00 - 10.00 WIB', d:'Aman bagi pemilik toko, walau manfaat ekologis terbatas.', fx:{sat:2, poll:-1}, news:'Kegiatan Car Free Day Minggu pagi tetap berjalan rutin.', mood:0, actors:{Pengusaha:5, KomunitasLingkungan:-2}}
    ], {priority:6, relatedActors:['KomunitasLingkungan', 'Influencer', 'Pengusaha']}),

  EV(673, 'BUMD & Energi', '☀️', 'Program Panel Surya PLTS Atap Gedung DInas: Efisiensi Tagihan Listrik',
    'Dinas ESDM mengusulkan pemasangan solar panel di 40 gedung perkantoran pemerintah.',
    [
      {t:'Alokasikan APBD untuk Pemasangan PLTS Atap Masif', d:'Tagihan listrik pemkot hemat Rp 30 M/tahun dan raih penghargaan Green Government.', fx:{apbd:-0.8, pad:0.6, poll:-4, sat:6, env:6}, news:'Perkantoran Pemkot Nusapura beralih ke energi surya hemat biaya.', mood:1, actors:{KomunitasLingkungan:16, Investor:10, BPK:8}},
      {t:'Skema Sewa Atap dengan Perusahaan Energi Swasta (Zero Capital)', d:'Tanpa mengeluarkan modal APBD sepeser pun, pemkot langsung mendapat diskon tarif listrik.', fx:{pad:0.3, poll:-2, sat:3, inv:6}, news:'Pemkot gandeng swasta untuk kelola panel surya gedung dinas.', mood:1, actors:{Investor:12, Pengusaha:8}},
      {t:'Tunda Pemasangan & Gunakan Listrik PLN Reguler', d:'Tidak ada investasi awal, tetapi pengeluaran rutin tagihan listrik tetap tinggi.', fx:{sat:0}, news:'Rencana insiatif energi surya perkantoran ditunda.', mood:0, actors:{KomunitasLingkungan:-8}}
    ], {priority:6, relatedActors:['KomunitasLingkungan', 'Investor', 'BPK']}),

  EV(674, 'Pendidikan & Sosial', '♿', 'Program Sekolah Inklusi & Rumah Belajar Ramah Disabilitas Nusapura',
    'Orang tua anak berkebutuhan khusus (ABK) menyampaikan aspirasi minimnya fasilitas pendidikan inklusif.',
    [
      {t:'Wajibkan 1 Sekolah Inklusi Berfasilitas Lengkap di Tiap Kecamatan', d:'Anak-anak berkebutuhan khusus mendapatkan hak pendidikan layak mendampingi teman sebayanya.', fx:{apbd:-0.5, edu:8, sat:8, pov:-1}, news:'Nusapura resmikan 15 Sekolah Inklusi Ramah Disabilitas.', mood:1, actors:{LSM:15, Mahasiswa:10, Akademisi:10}},
      {t:'Rekrut 100 Guru Pendamping Khusus (GPK) Berstatus PPPK', d:'Kualitas pengajaran ABK meningkat pesat dengan tenaga ahli berlisensi.', fx:{apbd:-0.4, edu:6, sat:6}, news:'100 Guru Pendamping Khusus resmi diangkat Pemkot.', mood:1, actors:{SerikatBuruh:10, LSM:8}},
      {t:'Berikan Beasiswa Khusus Pendidikan ABK di Sekolah Swasta', d:'Membantu biaya sekolah tanpa perlu membangun fasilitas fisik baru.', fx:{apbd:-0.3, edu:4, sat:4}, news:'Beasiswa pendidikan inklusif disalurkan ke ratusan siswa.', mood:1, actors:{LSM:8}}
    ], {priority:7, relatedActors:['LSM', 'Mahasiswa', 'Akademisi']}),

  EV(675, 'Perdagangan & Ekspor', '📦', 'Nusapura Export Center: Dorong Komoditas Olahan UMKM ke Pasar ASEAN',
    'Kamar Dagang dan Industri (KADIN) mengusulkan pendirian etalase promosi ekspor produk lokal.',
    [
      {t:'Mendirikan Export Center & Sediakan Fasilitas Sertifikasi Halal/ISO Gratis', d:'Produk kerajinan dan makanan olahan Nusapura menembus pasar Singapura & Malaysia.', fx:{apbd:-0.6, pad:1.2, inv:8, unemp:-3, sat:7}, news:'Produk UMKM Nusapura resmi diekspor ke pasar Asia Tenggara.', mood:1, actors:{Pengusaha:15, Investor:10, SerikatBuruh:8}},
      {t:'Gelar Pameran Dagang Virtual & Hubungkan dengan Buyer Asing', d:'Biaya hemat dan jangkauan luas lewat teknologi webinar pencocokan bisnis.', fx:{apbd:-0.2, pad:0.5, inv:4, sat:4}, news:'Business Matching Online sambungkan UMKM kota dengan buyer asing.', mood:1, actors:{Pengusaha:10, Influencer:6}},
      {t:'Fokus pada Pemasaran Domestik antar Kabupaten/Kota Tetangga', d:'Resiko kecil dan biaya murah, walau lonjakan omzet UMKM tidak terlalu besar.', fx:{apbd:-0.1, pad:0.2, sat:2}, news:'Kerjasama perdagangan antar daerah diperkuat Pemkot.', mood:0, actors:{Pengusaha:5}}
    ], {priority:6, relatedActors:['Pengusaha', 'Investor', 'SerikatBuruh']}),

  EV(676, 'Lingkungan & Toko', '🛍️', 'Perda Larangan Kantong Plastik Sekali Pakai: Toko Modern vs Pasar Rakyat',
    'Aktivis lingkungan menuntut penghentian penggunaan kantong plastik di toko ritel dan pasar.',
    [
      {t:'Terapkan Larangan Total di Minimarket, Mall, & Pasar Tradisional', d:'Timbulan sampah plastik kota turun 40%, sungai-sungai kota bebas sumbatan plastik.', fx:{apbd:-0.1, env:9, poll:-6, sat:6}, news:'Perda Bebas Kantong Plastik resmi berlaku di seluruh toko & pasar.', mood:1, actors:{KomunitasLingkungan:18, LSM:12, Pengusaha:4}},
      {t:'Terapkan Wajib Bayar Rp 1.000 / Kantong Plastik untuk Kas Lingkungan', d:'Mendorong pengurangan plastik secara bertahap sambil mengumpulkan dana pembersihan.', fx:{pad:0.4, env:5, sat:2}, news:'Kebijakan kantong plastik berbayar diterapkan di ritel modern.', mood:0, actors:{KomunitasLingkungan:8, Pengusaha:6}},
      {t:'Sosialisasi Kampanye Tas Belanja Tanpa Sanksi Larangan', d:'Tidak ada gejolak pedagang, namun penggunaan plastik tetap tinggi.', fx:{env:2, sat:1}, news:'Gerakan membawa tas belanja sendiri terus disosialisasikan.', mood:0, actors:{KomunitasLingkungan:-6}}
    ], {priority:7, relatedActors:['KomunitasLingkungan', 'LSM', 'Pengusaha']}),

  EV(677, 'Keamanan & Digital', '📹', 'Pos Siskamling Digital & CCTV RT/RW: Integrasi Command Center Pemkot',
    'Pengurus RT/RW memohon bantuan integrasi sistem keamanan lingkungan berbasis CCTV online.',
    [
      {t:'Subsidi 2 Kamera CCTV HD & Akses Internet untuk 500 RT/RW', d:'Lingkungan warga aman dari curanmor, angka kejahatan pemukiman anjlok drastis.', fx:{apbd:-0.5, crime:-9, sat:8, infra:4}, news:'500 RT/RW di Nusapura kini terkoneksi ke Command Center Kota.', mood:1, actors:{Polri:15, TokohAdat:10, LSM:6}},
      {t:'Beri Insentif Lomba Siskamling Teraktif & Pos Ronda Posko', d:'Meningkatkan kebersamaan dan gotong royong warga menjaga lingkungan malam.', fx:{apbd:-0.1, crime:-4, sat:5}, news:'Lomba Siskamling Swadaya bangkitkan semangat ronda malam warga.', mood:1, actors:{TokohAdat:12, Polri:8}},
      {t:'Serahkan Pengadaan CCTV Sepenuhnya pada Swadaya Warga', d:'Selamat dari beban APBD, namun hanya komplek perumahan mampu yang terpasang.', fx:{sat:0}, news:'Pemasangan CCTV swadaya digalakkan di perumahan warga.', mood:0, actors:{Polri:4, TokohAdat:-4}}
    ], {priority:6, relatedActors:['Polri', 'TokohAdat', 'LSM']}),

  EV(678, 'Pemuda & Teknologi', '🎮', 'Nusapura eSports & Creative Technology Center: Wadah Bakat Generasi Z',
    'Komunitas pemuda mengusulkan wadah pengasahan bakat industri kreatif game dan eSports.',
    [
      {t:'Bangun Creative Hub & Arena eSports Berfasilitas PC High-End', d:'Generasi muda Nusapura meraih prestasi nasional, iklim industri kreatif meledak.', fx:{apbd:-0.4, inv:6, sat:8, unemp:-2}, news:'Nusapura eSports & Creative Hub resmi dibuka untuk umum.', mood:1, actors:{Influencer:18, Mahasiswa:15, Investor:8}},
      {t:'Gelar Turnamen eSports Piala Walikota Tingkat Pelajar & Mahasiswa', d:'Ajang kompetisi positif yang memotivasi pemuda dengan biaya efisien.', fx:{apbd:-0.1, sat:5}, news:'Ratusan tim ikuti Turnamen eSports Piala Walikota Nusapura.', mood:1, actors:{Influencer:12, Mahasiswa:10}},
      {t:'Fokuskan Anggaran untuk Lapangan Olahraga Fisik Tradisional (Voli/Futsal)', d:'Mendukung kesehatan fisik, meski pemuda penggemar teknologi merasa kurang difasilitasi.', fx:{apbd:-0.2, sat:3, health:3}, news:'Pemkot perbaiki belasan lapangan futsal kelurahan.', mood:0, actors:{Influencer:-5, Mahasiswa:2}}
    ], {priority:6, relatedActors:['Influencer', 'Mahasiswa', 'Investor']}),

  EV(679, 'Keuangan & Pajak', '🏷️', 'Program Pemutihan Denda Pajak Kendaraan & PBB: Gebyar Sadar Pajak',
    'Bappenda mengusulkan insentif pembebasan sanksi denda untuk mengejar target piutang pajak.',
    [
      {t:'Buka Pemutihan Denda Pajak 100% & Diskon Pokok 10% Selama 3 Bulan', d:'Pemilik kendaraan & tanah berbondong-bondong bayar, kas APBD langsung terisi tunai.', fx:{apbd:1.5, pad:2.0, sat:8}, news:'Masyarakat serbu kantor Bappenda manfaatkan pemutihan denda pajak.', mood:1, actors:{Pengusaha:10, BPK:10, MediaLokal:8}},
      {t:'Berikan Hadiah Undian Mobil/Umroh bagi Wajib Pajak Taat', d:'Meningkatkan kesadaran masyarakat membayar pajak tepat waktu tanpa memotong pokok.', fx:{apbd:-0.2, pad:0.8, sat:5}, news:'Gebyar Sadar Pajak Nusapura siapkan hadiah bagi warga taat.', mood:1, actors:{MediaLokal:6, BPK:5}},
      {t:'Lakukan Penagihan Aktif Door-to-Door Lewat Petugas Lapangan', d:'Penegakan aturan tegas, walau warga menunggak merasa sedikit tertekan.', fx:{pad:0.5, sat:-2}, news:'Petugas pajak keliling datangi penunggak pajak kendaraan & PBB.', mood:0, actors:{BPK:8, LSM:-4}}
    ], {priority:7, relatedActors:['Pengusaha', 'BPK', 'MediaLokal']}),

  EV(680, 'Komunikasi & Transparansi', '📻', 'Program Halo Walikota Live Streaming: Tanya Jawab Warga Tanpa Settingan',
    'Dinas Kominfo menyajikan usulan siaran langsung mingguan tempat warga berdialog dengan Walikota.',
    [
      {t:'Gelar Live Streaming Tiap Jumat Malam di TikTok, YouTube, & Radio', d:'Akses komunikasi langsung tanpa sekat, keluhan warga direspon real-time, transparansi tinggi.', fx:{apbd:-0.1, sat:9, crime:-2}, news:'Program Halo Walikota puncaki trending topic media sosial.', mood:1, actors:{Influencer:18, LSM:12, MediaLokal:10, Mahasiswa:10}},
      {t:'Format Rubrik Surat Warga di Koran Lokal & Portal Resmi Pemkot', d:'Terstruktur dan rapi, walau kurang interaktif bagi generasi muda.', fx:{apbd:-0.05, sat:4}, news:'Rubrik Tanggapan Walikota hadir rutin di koran lokal.', mood:0, actors:{MediaLokal:8, Influencer:-4}},
      {t:'Manfaatkan Jumpa Pers Mingguan Khusus Jurnalis Resmi Balaikota', d:'Fokus pada media profesional, namun warga umum tidak berinteraksi langsung.', fx:{sat:2}, news:'Konferensi pers mingguan Balaikota terus berjalan rutin.', mood:0, actors:{MediaLokal:6, Influencer:-6}}
    ], {priority:7, relatedActors:['Influencer', 'LSM', 'MediaLokal']}),

  EV(681, 'Pariwisata & Kuliner', '🍢', 'Kawasan Pedestrian & Wisata Kuliner Malam Malioboro-Style Nusapura',
    'Dinas Pariwisata mengusulkan penataan koridor utama kota menjadi zona pedestrian khusus kuliner malam & seni jalanan.',
    [
      {t:'Sulap Koridor Utama Jadi Zone Pedestrian Malam Lengkap dengan Panggung Seni', d:'Geliat ekonomi UMKM malam hari meledak, wisatawan domestik memadati pusat kota.', fx:{apbd:-0.6, pad:1.2, inv:8, sat:8, unemp:-2}, news:'Kawasan Kuliner Malam Pedestrian Nusapura resmi dibuka.', mood:1, actors:{Pengusaha:16, Influencer:14, Investor:10}},
      {t:'Terapkan Car Free Night Khusus Akhir Pekan (Sabtu-Minggu)', d:'Biaya efisien dan tidak mengganggu arus lalu lintas pada hari kerja.', fx:{apbd:-0.2, pad:0.5, sat:5}, news:'Car Free Night akhir pekan disambut antusias warga kota.', mood:1, actors:{Pengusaha:10, Influencer:8}},
      {t:'Tunda Penataan & Biarkan Pedagang Berjualan di Trotoar Biasa', d:'Hemat anggaran, walau trotoar terasa kumuh dan pejalan kaki terganggu.', fx:{sat:-2}, news:'Rencana penataan kawasan kuliner pusat kota ditunda.', mood:0, actors:{Pengusaha:-6, LSM:-4}}
    ], {priority:7, relatedActors:['Pengusaha', 'Influencer', 'Investor']}),

  EV(682, 'Kebersihan & Energi', '♻️', 'Pengolahan Sampah Modern: Teknologi Incinerator Waste-to-Energy (PLTSa)',
    'TPA kota hampir membludak. Dinas Lingkungan Hidup mengusulkan pembangunan Pembangkit Listrik Berbasis Sampah.',
    [
      {t:'Bangun Fasilitas PLTSa Pengolah 1.000 Ton Sampah/Hari', d:'Volume sampah TPA anjlok 80%, pemkot memproduksi listrik hijau tambahan.', fx:{apbd:-1.5, pad:0.8, env:9, poll:-7, sat:7}, news:'Pabrik Pengolah Sampah Menjadi Listrik resmi beroperasi.', mood:1, actors:{KomunitasLingkungan:16, Investor:12, BPK:8}},
      {t:'Galang Program Bank Sampah & Pilah Sampah Organik dari Rumah Tangga', d:'Mengedukasi masyarakat dengan biaya murah, namun kapasitas reduksi terbatas.', fx:{apbd:-0.2, env:5, poll:-3, sat:4}, news:'Gerakan Bank Sampah Mandiri tingkat RT/RW digalakkan.', mood:1, actors:{KomunitasLingkungan:12, LSM:8}},
      {t:'Perluas Lahan TPA Sanitari Landfill di Wilayah Pinggiran', d:'Biaya konstruksi murah, tetapi memicu protes keras dari warga sekitar TPA.', fx:{apbd:-0.5, env:-4, sat:-5}, news:'Warga pinggiran gelar aksi protes perluasan lahan TPA.', mood:-1, actors:{KomunitasLingkungan:-10, LSM:-8}}
    ], {priority:8, relatedActors:['KomunitasLingkungan', 'Investor', 'LSM']}),

  EV(683, 'Air & Infrastruktur', '🚰', 'Krisis Pasokan Air Bersih PDAM & Digitalisasi Pipa Distribusi Utama',
    'Warga di beberapa wilayah pinggiran mengeluhkan aliran air PDAM sering keruh & mati saat jam puncak.',
    [
      {t:'Peremajaan Pipa Distribusi & Digitalisasi Sensor Kebocoran Air PDAM', d:'Tingkat kebocoran air turun drastis, pasokan air bersih mengalir lancar 24 jam.', fx:{apbd:-0.9, health:6, sat:7, infra:6}, news:'PDAM Nusapura selesaikan peremajaan sistem pipa utama.', mood:1, actors:{Akademisi:10, LSM:8, Pengusaha:6}},
      {t:'Sediakan Armada Mobil Tangki Air Gratis untuk Wilayah Kritis', d:'Penanganan darurat cepat, walau bukan solusi permanen jangka panjang.', fx:{apbd:-0.2, sat:3}, news:'Belasan tangki air bersih dikirim gratis ke kelurahan terdampak.', mood:0, actors:{LSM:5}},
      {t:'Naikkan Tarif PDAM untuk Tutup Biaya Operasional Pemeliharaan', d:'Kas PDAM membaik, namun memicu gelombang kritik warga kurang mampu.', fx:{pad:0.6, sat:-6, pov:1}, news:'Penyesuaian tarif air PDAM menuai protes pelanggan.', mood:-1, actors:{SerikatBuruh:-8, LSM:-6}}
    ], {priority:7, relatedActors:['LSM', 'SerikatBuruh', 'Akademisi']}),

  EV(684, 'Pertanian & Pangan', '🌾', 'Program Kartu Tani Nusapura & Subsidi Pupuk Organik Daerah',
    'Asosiasi petani lokal memohon intervensi harga pupuk dan kepastian pasokan air irigasi.',
    [
      {t:'Subsidikan Pupuk Organik Lokal & Bangun Embung Irigasi Pertanian', d:'Hasil panen padi kota melonjak 25%, ketahanan pangan daerah makin kokoh.', fx:{apbd:-0.6, pad:0.5, pov:-3, sat:7}, news:'Program Kartu Tani Nusapura hasilkan panen raya melimpah.', mood:1, actors:{TokohAdat:14, SerikatBuruh:8, LSM:8}},
      {t:'Fasilitasi Kemitraan Petani dengan Perusahaan Ritel & Hotel Kota', d:'Petani mendapat kepastian pembeli hasil panen dengan harga tinggi.', fx:{apbd:-0.1, pad:0.4, inv:5, sat:5}, news:'Hasil tani lokal resmi diserap rantai hotel & supermarket.', mood:1, actors:{Pengusaha:12, TokohAdat:10}},
      {t:'Arahkan Petani Beralih ke Tanaman Hidroponik Perkotaan (Urban Farming)', d:'Modern dan efisien di lahan sempit, meski butuh adaptasi teknologi.', fx:{apbd:-0.3, env:4, sat:4}, news:'Gerakan Urban Farming hidroponik berkembang pesat.', mood:1, actors:{KomunitasLingkungan:10, Influencer:6}}
    ], {priority:6, relatedActors:['TokohAdat', 'SerikatBuruh', 'Pengusaha']}),

  EV(685, 'Seni & Budaya', '🎭', 'Karnaval Maritim & Festival Budaya Internasional Nusapura',
    'Dewan Kesenian mengusulkan festival tahunan untuk menarik wisatawan mancanegara & menggerakkan perekonomian.',
    [
      {t:'Gelar Festival Budaya & Maritim Megah Berkelas Internasional', d:'Ribuan turis asing berkunjung, okupansi hotel 100%, citra kota mendunia.', fx:{apbd:-0.8, pad:1.5, inv:9, sat:8}, news:'Karnaval Maritim Nusapura pukau wisatawan internasional.', mood:1, actors:{Pengusaha:18, Influencer:16, TokohAdat:12}},
      {t:'Gelar Pesta Rakyat & Pentas Seni Lokal di Tiap Kecamatan', d:'Biaya terjangkau, merangkul seniman lokal, kegembiraan warga merata.', fx:{apbd:-0.3, sat:6}, news:'Pentas seni budaya meriahkan panggung kecamatan.', mood:1, actors:{TokohAdat:10, Mahasiswa:8}},
      {t:'Dukung Penuh Sponsorship Swasta Tanpa Dana APBD', d:'Hemat kas daerah, meski konten acara didominasi promosi produk komersial.', fx:{pad:0.3, sat:3}, news:'Festival budaya sukses terselenggara didukung penuh swasta.', mood:0, actors:{Pengusaha:10, Influencer:6}}
    ], {priority:7, relatedActors:['Pengusaha', 'Influencer', 'TokohAdat']}),

  EV(686, 'Perumahan & Sosial', '🏢', 'Revitalisasi Permukiman Kumuh & Program Rusunawa Subsidi',
    'Kawasan pinggir sungai dinilai kumuh dan rawan banjir. Dinas Perkim mengusulkan pemindahan ke Rusunawa.',
    [
      {t:'Bangun 3 Menara Rusunawa Modern Dilengkapi PAUD & Puskesmas Pembantu', d:'Warga bantaran sungai huni hunian layak & aman dari luapan banjir.', fx:{apbd:-1.2, health:5, flood:-5, sat:7, pov:-2}, news:'Rusunawa Subsidi Nusapura resmi dihuni ratusan keluarga.', mood:1, actors:{LSM:14, TokohAgama:10, BPK:6}},
      {t:'Program Bedah Rumah Swadaya & Penataan Ruang Terbuka Hijau Bantaran', d:'Warga tetap tinggal di lokasi awal dengan perbaikan kualitas bangunan.', fx:{apbd:-0.5, env:4, sat:4}, news:'Program Bedah Rumah Bantaran Sungai perindah permukiman.', mood:1, actors:{LSM:10, KomunitasLingkungan:8}},
      {t:'Lakukan Penertiban Lahan Tanpa Opsi Relokasi Subsidi', d:'Bantaran bersih cepat, namun memicu amarah warga dan kritikan LSM HAM.', fx:{sat:-8, crime:3}, news:'Penertiban kawasan bantaran sungai diwarnai ricuh.', mood:-1, actors:{LSM:-15, Mahasiswa:-12}}
    ], {priority:8, relatedActors:['LSM', 'TokohAgama', 'Mahasiswa']}),

  EV(687, 'Teknologi & Investasi', '💻', 'Pengembangan Kawasan Industri AI & Tech Park Nusapura Silicon Coast',
    'Pengusaha teknologi nasional menawarkan kemitraan pembangunan pusat riset & inkubator startup.',
    [
      {t:'Beri Insentif Pajak & Sediakan Lahan Khusus Tech Park Nusapura', d:'Ratusan perusahaan startup & AI berinvestasi, ribuan lapangan kerja digital tercipta.', fx:{apbd:-0.8, pad:2.0, inv:15, unemp:-4, sat:8}, news:'Nusapura Silicon Coast resmi diluncurkan jadi pusat AI daerah.', mood:1, actors:{Investor:20, Pengusaha:16, Mahasiswa:12}},
      {t:'Fokuskan Kemitraan Inkubator Startup dengan Universitas Lokal', d:'Biaya efisien dan mencetak wirausaha muda dari kampus-kampus kota.', fx:{apbd:-0.3, inv:6, edu:6, sat:5}, news:'Inkubator bisnis kampus hasilkan belasan startup baru.', mood:1, actors:{Mahasiswa:14, Akademisi:12}},
      {t:'Tolak Pemberian Insentif Pajak & Berlakukan Tarif Pajak Normal', d:'Melindungi penerimaan rutin, meski investor tech memilih kota tetangga.', fx:{pad:0.2, inv:-4}, news:'Investor teknologi batalkan ekspansi ke Nusapura.', mood:-1, actors:{Investor:-10, Pengusaha:-6}}
    ], {priority:8, relatedActors:['Investor', 'Pengusaha', 'Mahasiswa']}),

  EV(688, 'Kesehatan & Layanan', '🚑', 'Kartu Nusapura Sehat (KNS) & Layanan Ambulans Gratis 24 Jam',
    'Dinas Kesehatan mengusulkan integrasi rujukan kesehatan gratis & unit respon darurat cepat.',
    [
      {t:'Luncurkan Program KNS & Armada Ambulans Motor/Mobil Call Center 112', d:'Layanan medis darurat tiba dalam 10 menit, angka kematian pasien darurat anjlok.', fx:{apbd:-0.8, health:10, sat:9}, news:'Program Kartu Nusapura Sehat & Ambulans 112 resmi beroperasi.', mood:1, actors:{LSM:12, TokohAgama:10, SerikatBuruh:8}},
      {t:'Optimalisasi Puskesmas Rawat Inap 24 Jam di Tiap Kecamatan', d:'Penguatan kesehatan tingkat dasar dengan biaya operasional terkontrol.', fx:{apbd:-0.4, health:6, sat:5}, news:'Seluruh Puskesmas kecamatan kini buka layanan 24 jam.', mood:1, actors:{LSM:8, ASN:6}},
      {t:'Fokuskan Anggaran Kesehatan untuk Promosi Pola Hidup Bersih (PHBS)', d:'Sangat murah, meski pelayanan medis saat sakit tidak mengalami perubahan.', fx:{apbd:-0.1, health:2, sat:2}, news:'Kampanye Pola Hidup Bersih & Sehat digiatkan Dinkes.', mood:0, actors:{LSM:3}}
    ], {priority:7, relatedActors:['LSM', 'TokohAgama', 'SerikatBuruh']}),

  EV(689, 'Ekonomi & Pasar', '🧺', 'Operasi Pasar Murah & Stabilitas Harga Sembako Saat Inflasi',
    'Lonjakan harga beras dan minyak goreng menekan daya beli masyarakat kurang mampu.',
    [
      {t:'Gelar Operasi Pasar Sembako Bersubsidi di 50 Titik Kelurahan', d:'Harga beras & minyak stabil, beban ekonomi warga miskin teringankan.', fx:{apbd:-0.5, pov:-2, sat:8}, news:'Operasi Pasar Murah Pemkot diserbu ribuan warga.', mood:1, actors:{SerikatBuruh:12, LSM:10, MediaLokal:8}},
      {t:'Buka Kerjasama Supply Pangan Langsung dari Daerah Penghasil (B2B)', d:'Memotong rantai tengkulak secara permanen tanpa menguras dana subsidi terus-menerus.', fx:{apbd:-0.2, pad:0.4, sat:5}, news:'Pemkot amankan pasokan pangan langsung dari daerah produsen.', mood:1, actors:{Pengusaha:10, BPK:8}},
      {t:'Himbau Pedagang Tidak Menimbun Stok Tanpa Intervensi Harga', d:'Hemat anggaran, namun harga sembako tetap tinggi di pasaran.', fx:{sat:-4, pov:1}, news:'Harga kebutuhan pokok di pasar tradisional masih merangkak naik.', mood:-1, actors:{SerikatBuruh:-8, LSM:-6}}
    ], {priority:7, relatedActors:['SerikatBuruh', 'LSM', 'Pengusaha']}),

  EV(690, 'Pelabuhan & Logistik', '⚓', 'Pengembangan Kawasan Pelabuhan Maritim & Hub Logistik Nusantara',
    'Otoritas Pelabuhan mengajukan pengerukan alur pelayaran agar kapal kargo besar dapat bersandar.',
    [
      {t:'Pengerukan Alur & Pembangunan Dermaga Kontainer Modern', d:'Volume bongkar muat barang naik 50%, biaya logistik industri kota turun murah.', fx:{apbd:-1.4, pad:2.2, inv:12, infra:8, sat:7}, news:'Dermaga Kontainer Baru Pelabuhan Nusapura resmi beroperasi.', mood:1, actors:{Investor:16, Pengusaha:14, BPK:8}},
      {t:'Pengembangan Kawasan Pergudangan Terpadu di Daratan Pelabuhan', d:'Meningkatkan kapasitas simpan barang tanpa pengerukan laut mahal.', fx:{apbd:-0.6, pad:0.9, inv:6, sat:4}, news:'Kawasan Pergudangan Terpadu Pelabuhan mulai dibangun.', mood:1, actors:{Pengusaha:10, Investor:8}},
      {t:'Menunggu Bantuan Anggaran Kementerian Perhubungan Pusat', d:'Hemat APBD kota, walau pengembangan pelabuhan tertunda bertahun-tahun.', fx:{sat:0}, news:'Pemkot usulkan bantuan alokasi anggaran pelabuhan ke pusat.', mood:0, actors:{Pengusaha:-4}}
    ], {priority:7, relatedActors:['Investor', 'Pengusaha', 'BPK']}),

  EV(691, 'Sosial & Keagamaan', '🕌', 'Sertifikasi Lahan Wakaf Gratis & Rumah Ibadah Ramah Anak',
    'MUI & Tokoh Agama memohon bantuan legalitas tanah tempat ibadah dan sarana keagamaan masyarakat.',
    [
      {t:'Subsidi Penuh Sertifikasi Sertifikat Tanah Wakaf Masjid/Gereja/Pura', d:'Sengketa lahan tempat ibadah tuntas 100%, kedamaian antar umat beragama terjaga.', fx:{apbd:-0.3, sat:8}, news:'Ratusan sertifikat tanah wakaf tempat ibadah diserahkan gratis.', mood:1, actors:{TokohAgama:20, TokohAdat:12, MediaLokal:8}},
      {t:'Bantuan Hibah Bantuan Operasional Tempat Ibadah & Guru Ngaji/Sekolah Minggu', d:'Kesejahteraan pengajar keagamaan meningkat, apresiasi luas dari masyarakat.', fx:{apbd:-0.4, sat:6}, news:'Insentif guru keagamaan disalurkan Pemkot Nusapura.', mood:1, actors:{TokohAgama:15, SerikatBuruh:6}},
      {t:'Serahkan Proses Legalitas Mandiri Kepada Pengurus Masing-Masing', d:'Tidak membebani APBD, namun sengketa lahan rumah ibadah tetap rawan muncul.', fx:{sat:-2}, news:'Pemkot imbau pengurus tempat ibadah urus sertifikat mandiri.', mood:0, actors:{TokohAgama:-8}}
    ], {priority:7, relatedActors:['TokohAgama', 'TokohAdat', 'MediaLokal']}),

  EV(692, 'Perhubungan & PAD', '🅿️', 'Digitalisasi System Parkir On-Street & Pemberantasan Juru Parkir Liar',
    'Dinas Perhubungan mengusulkan penetapan parkir berbayar kartu elektronik (e-parking).',
    [
      {t:'Penerapan Mesin E-Parking & Rangkul Jukir Resmi Berstatus PPPK', d:'Kebocoran retribusi parkir hilang, Pendapatan Asli Daerah (PAD) melambung tinggi.', fx:{apbd:-0.4, pad:1.8, crime:-5, sat:7}, news:'Sistem E-Parking resmi berlaku, kebocoran PAD parkir diberantas.', mood:1, actors:{BPK:14, Pengusaha:10, SerikatBuruh:8}},
      {t:'Operasi Penertiban Jukir Liar Bersama Satpol PP & Kepolisian', d:'Keamanan parkir terjaga sementara, walau kebocoran penerimaan masih ada.', fx:{apbd:-0.1, crime:-3, sat:3}, news:'Satpol PP tertibkan belasan juru parkir liar di pusat kota.', mood:0, actors:{Polri:10, BPK:4}},
      {t:'Biarkan Sistem Parkir Manual Konvensional Berjalan', d:'Tidak ada gejolak jukir, namun kebocoran anggaran parkir terus berlanjut.', fx:{pad:-0.3, sat:-3}, news:'Sistem parkir manual masih banyak dikeluhkan pengguna jalan.', mood:-1, actors:{BPK:-8, Pengusaha:-4}}
    ], {priority:7, relatedActors:['BPK', 'Pengusaha', 'Polri']}),

  EV(693, 'Pemuda & Olahraga', '⚽', 'Pembangunan Stadion Utama Nusapura & Akademi Pembinaan Atlet Muda',
    'KONI daerah memohon pembangunan stadion megah modern untuk mencetak atlet berprestasi.',
    [
      {t:'Bangun Kompleks Sport Center Modern & Akademi Olahraga Daerah', d:'Fasilitas olahraga megah, Nusapura sukses mencetak atlet berprestasi internasional.', fx:{apbd:-1.5, health:7, sat:8, infra:6}, news:'Kompleks Sport Center & Stadion Utama Nusapura mulai dibangun.', mood:1, actors:{Influencer:14, Mahasiswa:12, Pengusaha:8}},
      {t:'Renovasi Stadion Lama & Fasilitasi Kompetisi Olahraga Antar Sekolah', d:'Biaya terjangkau, semangat olahraga pemuda kota tetap menyala.', fx:{apbd:-0.4, health:4, sat:5}, news:'Stadion lama kota selesai direnovasi dan siap digunakan.', mood:1, actors:{Mahasiswa:8, Influencer:6}},
      {t:'Fokuskan Anggaran untuk Sektor Kesehatan Primer Dulu', d:'Keputusan rasional, meski komunitas olahraga dan pemuda merasa kecewa.', fx:{sat:-2}, news:'Rencana pembangunan stadion baru ditunda Pemkot.', mood:0, actors:{Influencer:-6, Mahasiswa:-4}}
    ], {priority:7, relatedActors:['Influencer', 'Mahasiswa', 'Pengusaha']}),

  EV(694, 'Perdagangan & Ketertiban', '🛒', 'Penataan Pedagang Kakilima (PKL) Alun-Alun & Sentra UMKM Modern',
    'Keberadaan PKL liar di sekitar alun-alun memicu kemacetan dan kesan kumuh.',
    [
      {t:'Relokasi PKL ke Sentra Wisata Kuliner Modern Berfasilitas Lengkap', d:'Alun-alun bersih & rapi, pedagang mendapat lapak permanen higienis.', fx:{apbd:-0.5, pad:0.6, sat:8, env:4}, news:'Sentra UMKM Alun-Alun resmi dihuni ratusan pedagang kuliner.', mood:1, actors:{Pengusaha:12, LSM:10, KomunitasLingkungan:8}},
      {t:'Tetapkan Jam Operasional Khusus PKL (Pukul 17.00 - 23.00 WIB)', d:'Solusi kompromi, jalan tidak macet di siang hari, PKL tetap bisa mengais rezeki.', fx:{apbd:-0.1, sat:4}, news:'Aturan jam operasional PKL alun-alun resmi diberlakukan.', mood:0, actors:{Pengusaha:6, LSM:6}},
      {t:'Gelar Penggusuran Paksa Tanpa Menyediakan Solusi Lapak Baru', d:'Alun-alun bersih sekejap, namun memicu bentrok dan gelombang simpati publik.', fx:{sat:-7, crime:2}, news:'Penggusuran PKL alun-alun diwarnai aksi saling dorong.', mood:-1, actors:{LSM:-12, SerikatBuruh:-10}}
    ], {priority:7, relatedActors:['Pengusaha', 'LSM', 'SerikatBuruh']}),

  EV(695, 'Tata Ruang & Transit', '🚆', 'Inisiatif Transit-Oriented Development (TOD) Stasiun Utama Nusapura',
    'Bappeda mengusulkan penataan kawasan seputar stasiun kereta menjadi pusat transit antarmoda terpadu.',
    [
      {t:'Kembangkan Kawasan TOD Terpadu: Integrasi Stasiun, Bus, & Pedestrian', d:'Akses mobilitas warga sangat cepat, nilai properti & investasi sekitar stasiun meroket.', fx:{apbd:-1.2, pad:1.8, inv:12, traffic:-8, sat:8}, news:'Kawasan TOD Stasiun Utama Nusapura jadi percontohan nasional.', mood:1, actors:{Investor:18, Pengembang:16, Pengusaha:12}},
      {t:'Bangun Jembatan Penyeberangan Orang (JPO) Skywalk Penghubung Stasiun', d:'Biaya efisien, kenyamanan pejalan kaki melintas antarmoda meningkat.', fx:{apbd:-0.3, traffic:-3, sat:4}, news:'JPO Skywalk Stasiun Utama resmi dapat digunakan warga.', mood:1, actors:{Pengembang:8, Pengusaha:6}},
      {t:'Biarkan Kawasan Stasiun Berjalan Tanpa Penataan Khusus', d:'Hemat anggaran daerah, meski kemacetan dan kesemrawutan stasiun terus berlanjut.', fx:{sat:-3, traffic:2}, news:'Kawasan sekitar stasiun utama kerap dikeluhkan macet.', mood:-1, actors:{Investor:-6, Pengembang:-6}}
    ], {priority:8, relatedActors:['Investor', 'Pengembang', 'Pengusaha']})
];

var EVENTS = [];

// ==================== PERSONAL LIFE, FAMILY SCANDAL & COALITION POLITICS EVENTS ====================
var PERSONAL_POLITICS_EVENTS = [
  EV('pol_patronage_apbd_quota', 'Politik', '🤝', 'Tagihan Janji Proyek dari Pimpinan Koalisi Parpol',
    'Ketua Partai koalisi utama mendatangi ruang kerja Anda secara tertutup, menuntut alokasi paket proyek pengadaan RSUD dan jalan lingkar senilai Rp 500 Miliar untuk kontraktor binaan partai sebagai balas jasa tiket pencalonan.',
    [
      {
        t: 'Tolak Tegas & Wajibkan Tender Elektronik Transparan',
        t_en: 'Reject Firmly & Mandate Transparent E-Procurement',
        d: 'Integritas dan lelang terbuka ditegakkan, meski fraksi koalisi mengancam memboikot sidang paripurna APBD.',
        d_en: 'Procurement integrity is upheld, though coalition factions threaten to boycott legislative budget hearings.',
        fx: { sat: 8, inv: 4 },
        actors: { DPRD: -20, Pengusaha: -10, Mahasiswa: 12 },
        life: { stress: 15 },
        risk: -10,
        news: 'Walikota tegaskan seluruh proyek APBD wajib lelang transparan tanpa kuota titipan partai.',
        news_en: 'Mayor mandates strictly open e-procurement, barring partisan project quotas.',
        mood: 1
      },
      {
        t: 'Akomodasi Paket Proyek demi Stabilitas Parlemen',
        t_en: 'Accommodate Contract Package for Parliamentary Harmony',
        d: 'Koalisi solid dan APBD cepat disahkan, namun kualitas proyek berisiko dan potensi audit KPK meningkat.',
        d_en: 'Coalition unity is secured and budget passes smoothly, but project quality suffers and graft scrutiny surges.',
        fx: { apbd: -0.5, sat: -6 },
        actors: { DPRD: 25, Pengusaha: 15, Mahasiswa: -15 },
        life: { wealth: 0.1 },
        risk: 22,
        news: 'Koalisi parlemen puji kepemimpinan Walikota yang dinilai kooperatif dan merangkul.',
        news_en: 'Coalition party praises Mayor cooperative leadership following speedy budget approval.',
        mood: -1
      },
      {
        t: 'Kompromi: Beri Posisi Dewan Pengawas BUMD Non-Anggaran',
        t_en: 'Compromise: Offer Non-Budget BUMD Oversight Board Seat',
        d: 'Tekanan proyek fisik dialihkan, meski profesionalitas BUMD daerah sedikit terbebani.',
        d_en: 'Direct budget pressure is diffused, though public enterprise board professionalism is slightly diluted.',
        fx: { sat: -2, pad: -0.1 },
        actors: { DPRD: 10, Pengusaha: 5 },
        life: { stress: 5 },
        risk: 6,
        news: 'Pemkot tunjuk kader senior koalisi sebagai dewan pengawas BUMD kota.',
        news_en: 'City Hall appoints senior coalition member to municipal enterprise oversight board.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 12, relatedActors: ['DPRD', 'Pengusaha', 'Mahasiswa'] }
  ),

  EV('fam_scandal_child_flexing', 'Sosial', '🏎️', 'Viral Medsos: Anak Walikota Flexing Supercar & Langgar Marka',
    'Video berdurasi 30 detik viral di linimasa menampilkan anak Anda mengendarai supercar mewah berpelat modifikasi menerobos jalur busway dan bersitegang dengan petugas Dishub.',
    [
      {
        t: 'Minta Maaf Publik, Tilang Maksimal & Sita Kendaraan',
        t_en: 'Public Apology, Impound Vehicle & Enforce Strict Legal Penalty',
        d: 'Keteladanan hukum diapresiasi warga, walau hubungan keluarga sempat memanas dan anak merasa malu.',
        d_en: 'Citizens applaud equal enforcement of the law, though family harmony experiences heavy strain.',
        fx: { sat: 10, traffic: -2 },
        actors: { Mahasiswa: 10, KomunitasLingkungan: 8 },
        life: { familyRel: -18, stress: 12 },
        risk: -5,
        news: 'Walikota minta maaf secara terbuka atas ulah sang anak dan pastikan proses hukum berjalan.',
        news_en: 'Mayor issues heartfelt public apology over child misconduct and orders strict traffic fines.',
        mood: 1
      },
      {
        t: 'Bela Anak & Klaim Rekaman Diedit oleh Buzzer Oposisi',
        t_en: 'Defend Child & Blame Opposition Political Slander',
        d: 'Keluarga terlindungi, namun kemarahan netizen meledak dan tagar kecaman trending nomor satu di media sosial.',
        d_en: 'Family is shielded, but internet fury boils over and protest hashtags trend nationwide.',
        fx: { sat: -16 },
        actors: { Mahasiswa: -20, SerikatBuruh: -10 },
        life: { familyRel: 10, stress: 20 },
        risk: 10,
        news: 'Pernyataan Walikota terkait video viral anak tuai gelombang kritik pedas publik.',
        news_en: 'Mayor faces fierce public backlash after dismissing viral child video as opposition framing.',
        mood: -1
      },
      {
        t: 'Gunakan Anggaran Humas & Buzzer Pemkot Redam Isu',
        t_en: 'Deploy City PR Agency & Counter-Narrative Campaign',
        d: 'Isu berhasil diredam dari linimasa, namun pos anggaran komunikasi publik membengkak.',
        d_en: 'Viral storm is suppressed from feeds, but municipal public relations expenses swell.',
        fx: { apbd: -0.2, sat: -3 },
        actors: { Pengusaha: -5 },
        life: { wealth: -0.05 },
        risk: 8,
        news: 'Dinas Kominfo gencarkan kampanye keselamatan jalan guna alihkan isu viral.',
        news_en: 'City PR launches intensive road safety campaign to counterbalance viral controversy.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 12, relatedActors: ['Mahasiswa', 'KomunitasLingkungan'] }
  ),

  EV('fam_spouse_greenzone_permit', 'Lingkungan', '🌿', 'Dilema Izin Bisnis Pasangan di Kawasan Resapan Air',
    'Pasangan Anda berencana memperluas jaringan kafe & resort keluarga di lereng bukit kota. Namun, Dinas Lingkungan Hidup menyatakan lokasi tersebut masuk dalam zona tangkapan air lindung.',
    [
      {
        t: 'Tolak Izin demi Konservasi Tata Ruang Hijau Kota',
        t_en: 'Reject Permit to Protect Urban Green Belt & Flood Barriers',
        d: 'Banjir dicegah dan kredibilitas lingkungan terjaga, namun pasangan merasa kecewa dan kurang didukung.',
        d_en: 'Urban flood barriers are preserved and green integrity praised, though spouse feels unsupported.',
        fx: { env: 8, flood: -4, sat: 6 },
        actors: { KomunitasLingkungan: 18, Pengembang: -8 },
        life: { familyRel: -22, stress: 10 },
        risk: -8,
        news: 'Walikota tolak izin komersial di kawasan resapan air demi kelestarian lingkungan kota.',
        news_en: 'Mayor strictly denies commercial expansion permits in protected water catchment zones.',
        mood: 1
      },
      {
        t: 'Terbitkan Diskresi Khusus dengan Syarat Tanam 1.000 Pohon',
        t_en: 'Issue Special Zoning Discretion with Reforestation Clause',
        d: 'Bisnis keluarga berkembang pesat, tetapi LSM lingkungan mencium dugaan konflik kepentingan.',
        d_en: 'Family enterprise prospers, but environmental NGOs suspect blatant conflict of interest.',
        fx: { sat: -8, flood: 3, env: -4 },
        actors: { KomunitasLingkungan: -16, Pengusaha: 10 },
        life: { familyRel: 18, wealth: 0.3 },
        risk: 18,
        news: 'Pemberian izin resort di kawasan bukit picu kritik keras dari aktivis lingkungan.',
        news_en: 'Boutique resort permit approval in hilltop green zone sparks protests from conservationists.',
        mood: -1
      },
      {
        t: 'Relokasi Proyek ke Zona Komersial Resmi Biaya Sendiri',
        t_en: 'Relocate Project to Designated Commercial Zone at Own Expense',
        d: 'Solusi jalan tengah yang etis, meski tabungan pribadi keluarga terkuras cukup dalam.',
        d_en: 'Ethical middle ground that respects urban zoning, though personal family savings take a hit.',
        fx: { sat: 4, inv: 2 },
        actors: { KomunitasLingkungan: 5, Pengusaha: 5 },
        life: { wealth: -0.2, familyRel: 5 },
        risk: 0,
        news: 'Pengembangan usaha keluarga Walikota dialihkan ke kawasan niaga terpadu.',
        news_en: 'Mayor family business expansion relocated to designated commercial business district.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 11, relatedActors: ['KomunitasLingkungan', 'Pengusaha', 'Pengembang'] }
  ),

  EV('fam_nepotism_opd_post', 'Birokrasi', '📋', 'Lobi Jabatan: Saudara Ipar Ingin Menjabat Kepala Bapenda',
    'Kerabat dekat keluarga yang berstatus ASN golongan IV melobi Anda saat acara keluarga, meminta dipromosikan langsung menjadi Kepala Badan Pendapatan Daerah (Bapenda) tanpa lelang jabatan terbuka.',
    [
      {
        t: 'Wajibkan Seleksi Terbuka Murni Berbasis Meritokrasi',
        t_en: 'Enforce Strict Merit-Based Open Bidding under Civil Service Commission',
        d: 'Integritas birokrasi ASN meningkat, meski suasana di grup percakapan keluarga menjadi dingin.',
        d_en: 'Civil service meritocracy is reinforced, though family gatherings turn noticeably chilly.',
        fx: { pad: 0.2, sat: 5 },
        actors: { ASN: 15, Mahasiswa: 8 },
        life: { familyRel: -15, stress: 8 },
        risk: -10,
        news: 'Pemkot terapkan lelang jabatan terbuka murni untuk seluruh posisi eselon II.',
        news_en: 'City Hall implements transparent merit-based open competition for all executive posts.',
        mood: 1
      },
      {
        t: 'Gunakan Hak Prerogatif Lantik Kerabat Menjadi Kepala Dinas',
        t_en: 'Exercise Prerogative to Directly Appoint Relative to Post',
        d: 'Keluarga puas dan posisi pendapatan dipegang orang kepercayaan, tetapi moral ASN anjlok.',
        d_en: 'Family is pleased and key revenues controlled by loyal kin, but civil servant morale plunges.',
        fx: { sat: -10, pad: -0.1 },
        actors: { ASN: -20, Mahasiswa: -15 },
        life: { familyRel: 20, wealth: 0.1 },
        risk: 20,
        news: 'Pelantikan kerabat Walikota pada posisi strategis menuai sorotan tajam Ombudsman.',
        news_en: 'Appointment of Mayor close relative to revenue agency draws sharp Ombudsman scrutiny.',
        mood: -1
      },
      {
        t: 'Tunjuk sebagai Staf Ahli Non-Teknis Tanpa Kuasa Anggaran',
        t_en: 'Assign as Non-Technical Advisory Staff Without Spending Authority',
        d: 'Kompromi birokrasi yang menjaga harmoni keluarga tanpa merusak tata kelola penerimaan daerah.',
        d_en: 'Administrative compromise maintaining family peace without endangering tax governance.',
        fx: { sat: 1 },
        actors: { ASN: -2 },
        life: { familyRel: 5, stress: 3 },
        risk: 4,
        news: 'Mutasi pejabat pemkot dilakukan dengan menyeimbangkan kompetensi dan stabilitas.',
        news_en: 'Municipal staff rotation conducted to balance operational stability and governance.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 11, relatedActors: ['ASN', 'Mahasiswa'] }
  ),

  EV('pol_gift_gratification_jet', 'Hukum', '✈️', 'Hadiah Jet Pribadi & Liburan Eropa dari Konsorsium Properti',
    'Konsorsium pengembang superblok menawarkan tiket penerbangan jet pribadi sekeluarga dan penginapan hotel bintang 5 di Swiss sebagai undangan studi banding tata ruang kota.',
    [
      {
        t: 'Tolak & Laporkan Undangan ke Direktorat Gratifikasi KPK',
        t_en: 'Decline & Formally Report to KPK Anti-Corruption Agency',
        d: 'Integritas Anda dipuji di panggung nasional, namun relasi dengan asosiasi pengembang membeku.',
        d_en: 'Your ethical stance earns national acclaim, but relations with property tycoons freeze.',
        fx: { sat: 12, inv: -2 },
        actors: { Mahasiswa: 15, Pengusaha: -12 },
        life: { stress: 10 },
        risk: -15,
        news: 'Walikota Nusapura laporkan tawaran fasilitas jet mewah pengembang ke KPK.',
        news_en: 'Mayor of Nusapura reports luxury private jet benchmarking perks to Anti-Corruption Commission.',
        mood: 1
      },
      {
        t: 'Terima Fasilitas Liburan Diam-Diam Bersama Keluarga',
        t_en: 'Quietly Accept the Luxury Family Holiday Trip',
        d: 'Liburan mewah menyegarkan pikiran keluarga, namun bayang-bayang penyadapan KPK mengintai.',
        d_en: 'Exquisite vacation rejuvenates family spirits, but KPK surveillance risk skyrockets.',
        fx: { sat: -5 },
        actors: { Pengusaha: 20 },
        life: { familyRel: 25, stress: -30, wealth: 0.15 },
        risk: 28,
        news: 'Beredar foto Walikota berlibur di Eropa, publik pertanyakan sumber pembiayaan.',
        news_en: 'Photos of Mayor luxury overseas holiday leak online, sparking funding questions.',
        mood: -1
      },
      {
        t: 'Tolak Halus Tanpa Publikasi demi Jaga Iklim Investasi',
        t_en: 'Politely Decline Privately to Safeguard Investment Climate',
        d: 'Menjaga etika jabatan secara tenang tanpa menciptakan ketegangan dengan para investor.',
        d_en: 'Maintains official ethics quietly without alienating major commercial investors.',
        fx: { sat: 3, inv: 2 },
        actors: { Pengusaha: 2 },
        life: { stress: 2 },
        risk: 2,
        news: 'Walikota fokuskan agenda akhir pekan untuk peninjauan program kota.',
        news_en: 'Mayor focuses weekend agenda on local urban development inspection.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 12, relatedActors: ['Pengusaha', 'Mahasiswa'] }
  ),

  EV('fam_wealth_leak_lhkpn', 'Politik', '📑', 'Kebocoran Data Aset: Netizen Soroti Lonjakan Harta LHKPN',
    'Akun anonim di media sosial merilis grafik perbandingan harta kekayaan keluarga Anda yang meningkat 300% sejak menjabat, memicu desakan audit independen dari aliansi mahasiswa.',
    [
      {
        t: 'Buka Rekening Pribadi & Konferensi Pers Asal Usul Harta',
        t_en: 'Open Private Bank Books & Hold Full Financial Origin Press Briefing',
        d: 'Terbukti peningkatan berasal dari apresiasi nilai tanah warisan yang sah; kepercayaan publik pulih.',
        d_en: 'Proves surge originated from legitimate inherited land appreciation; trust is restored.',
        fx: { sat: 9 },
        actors: { Mahasiswa: 12, ASN: 5 },
        life: { stress: 15, familyRel: -5 },
        risk: -12,
        news: 'Walikota buka rekening keluarga secara transparan di depan jurnalis investigasi.',
        news_en: 'Mayor transparently discloses family financial records before investigative reporters.',
        mood: 1
      },
      {
        t: 'Tuntut Pembocor Data ke Polisi atas Pelanggaran UU ITE',
        t_en: 'Sue Leaker Under Cyber Defamation Laws & Demand Police Arrest',
        d: 'Keluarga terlindungi dari doxxing, namun citra Anda dianggap anti-kritik dan otoriter.',
        d_en: 'Family is protected from doxxing, but administration is labeled anti-free speech.',
        fx: { sat: -14 },
        actors: { Mahasiswa: -18, SerikatBuruh: -8 },
        life: { wealth: -0.1, familyRel: 10 },
        risk: 8,
        news: 'Pelaporan akun pembocor aset LHKPN Walikota menuai kritik pegiat kebebasan berpendapat.',
        news_en: 'Mayor cyber lawsuit against asset whistleblower triggers free-speech backlash.',
        mood: -1
      },
      {
        t: 'Klarifikasi Singkat Tertulis Melalui Juru Bicara Resmi',
        t_en: 'Issue Brief Written Clarification via Official City Spokesperson',
        d: 'Respon minimalis yang cukup meredakan situasi meski beberapa pihak masih sangsi.',
        d_en: 'Measured response that cools immediate tension though skepticism lingers among critics.',
        fx: { sat: -2 },
        actors: { Mahasiswa: -4 },
        life: { stress: 5 },
        risk: 2,
        news: 'Jubir Pemkot tegaskan kenaikan LHKPN Walikota sesuai prosedur pelaporan KPK.',
        news_en: 'City spokesperson confirms Mayor asset declaration strictly complied with KPK guidelines.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 11, relatedActors: ['Mahasiswa', 'ASN', 'SerikatBuruh'] }
  ),

  EV('pol_coalition_boycott_audit', 'Infrastruktur', '⚖️', 'Ancaman Koalisi: Desakan Hentikan Audit Rekanan Partai',
    'Inspektorat menemukan kejanggalan mutu beton pada proyek jembatan kota yang dikerjakan kontraktor pengurus partai koalisi. Pimpinan fraksi mengancam menarik dukungan pencalonan kembali jika audit dilanjutkan.',
    [
      {
        t: 'Lanjutkan Audit Total & Blacklist Kontraktor Bermasalah',
        t_en: 'Push Full Audit & Blacklist Defaulting Contractors',
        d: 'Keselamatan warga dan kualitas infrastruktur terjamin; koalisi partai pecah kongsi.',
        d_en: 'Public safety and structural quality secured; ruling party coalition fractures.',
        fx: { infra: 6, sat: 10 },
        actors: { DPRD: -25, Pengusaha: -15, Mahasiswa: 15 },
        life: { stress: 18 },
        risk: -15,
        news: 'Inspektorat blacklist belasan rekanan bermasalah atas instruksi tegas Walikota.',
        news_en: 'City Inspectorate blacklists defaulting contractors under Mayor strict direct orders.',
        mood: 1
      },
      {
        t: 'Hentikan Audit & Beri Dispensasi Perbaikan Diam-diam',
        t_en: 'Quash Probe & Grant Quiet Grace Period for Patch Repairs',
        d: 'Koalisi aman dan tiket pencalonan terjaga, namun risiko keretakan jembatan mengintai.',
        d_en: 'Coalition backing secured for re-election, but structural collapse risks loom.',
        fx: { infra: -6, sat: -8 },
        actors: { DPRD: 22, Pengusaha: 18, Mahasiswa: -16 },
        life: { wealth: 0.15 },
        risk: 25,
        news: 'Pemeriksaan proyek jembatan ditutup, fraksi koalisi kompak dukung penuh Walikota.',
        news_en: 'Bridge inspection closed; coalition parties unite behind Mayor re-election campaign.',
        mood: -1
      },
      {
        t: 'Minta Uji Forensik Independen dari Laboratorium ITB/ITS',
        t_en: 'Commission Independent Engineering Lab Forensic Assessment',
        d: 'Pendekatan ilmiah yang tidak bisa dibantah secara politis oleh pimpinan partai.',
        d_en: 'Scientific approach providing irrefutable findings immune to partisan dispute.',
        fx: { apbd: -0.1, infra: 3, sat: 5 },
        actors: { DPRD: -5, Mahasiswa: 8 },
        life: { stress: 6 },
        risk: -5,
        news: 'Tim ahli independen dilibatkan untuk audit mutu infrastruktur kota.',
        news_en: 'Independent engineering experts commissioned to audit municipal infrastructure quality.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 12, relatedActors: ['DPRD', 'Pengusaha', 'Mahasiswa'] }
  ),

  EV('fam_illegal_investment_scandal', 'Sosial', '💰', 'Kerabat Terjerat Investasi Bodong: Nama Walikota Dicatut',
    'Adik ipar Anda menjadi pengurus koperasi simpan pinjam ilegal yang gagal bayar Rp 20 Miliar kepada ratusan warga, dan mencatut foto Anda di brosur promosi mereka.',
    [
      {
        t: 'Gunakan Tabungan Pribadi Talangi Korban & Polisikan Kerabat',
        t_en: 'Dip into Personal Savings to Bail Victims & File Criminal Charges',
        d: 'Kerugian warga terobati dan hukum ditegakkan, meski tabungan pribadi keluarga terpukul keras.',
        d_en: 'Victims compensated and justice served, though personal family savings take a heavy blow.',
        fx: { sat: 12 },
        actors: { SerikatBuruh: 12, Mahasiswa: 10 },
        life: { wealth: -0.5, familyRel: -30, stress: 20 },
        risk: -12,
        news: 'Walikota bantu ganti rugi korban koperasi ilegal dan tegaskan proses hukum kerabat.',
        news_en: 'Mayor aids victims of illicit cooperative and insists on strict prosecution of kin.',
        mood: 1
      },
      {
        t: 'Klarifikasi Bahwa Itu Urusan Pribadi & Tolak Ikut Campur',
        t_en: 'Clarify It Is Purely Private Matter & Disclaim City Liability',
        d: 'Keuangan pribadi aman, namun ratusan korban menggelar aksi unjuk rasa di depan balai kota.',
        d_en: 'Private finances spared, but aggrieved victims stage protests outside City Hall.',
        fx: { sat: -12 },
        actors: { SerikatBuruh: -15, Mahasiswa: -10 },
        life: { familyRel: 5, stress: 15 },
        risk: 5,
        news: 'Korban investasi bodong berunjuk rasa menuntut tanggung jawab moral Walikota.',
        news_en: 'Defrauded investors demonstrate outside City Hall demanding mayoral moral accountability.',
        mood: -1
      },
      {
        t: 'Fasilitasi Mediasi Restrukturisasi Aset Lewat Dinas Koperasi',
        t_en: 'Facilitate Debt Restructuring & Asset Liquidation Mediation',
        d: 'Penyelesaian terstruktur melalui jalur hukum perdata yang membantu pemulihan aset warga.',
        d_en: 'Structured civil mediation aiding asset recovery for victimized citizens.',
        fx: { sat: 2, pad: -0.05 },
        actors: { SerikatBuruh: 4 },
        life: { stress: 8 },
        risk: 0,
        news: 'Dinas Koperasi dampingi restrukturisasi aset korban investasi bermasalah.',
        news_en: 'Cooperatives Department oversees asset recovery negotiations for defrauded citizens.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 11, relatedActors: ['SerikatBuruh', 'Mahasiswa'] }
  ),

  EV('pol_shadow_campaign_quarry', 'Lingkungan', '⛏️', 'Dana Gelap Kampanye dari Bos Tambang Ilegal untuk Koalisi',
    'Cukong tambang pasir ilegal menawarkan suntikan dana segar Rp 2 Miliar ke kas pemenangan partai pengusung, dengan syarat Pemkot menghentikan razia Satpol PP di bantaran sungai.',
    [
      {
        t: 'Tolak Keras, Sita Alat Berat & Segel Tambang Ilegal',
        t_en: 'Reject Fiercely, Impound Heavy Excavators & Seal Illegal Mines',
        d: 'Sungai terlindungi dari erosi dan banjir, walau bendahara partai murka kehilangan logistik.',
        d_en: 'Rivers protected from erosion and flash floods, though party treasurers are furious.',
        fx: { env: 10, flood: -6, sat: 8 },
        actors: { KomunitasLingkungan: 20, Pengusaha: -15, DPRD: -12 },
        life: { stress: 12 },
        risk: -15,
        news: 'Satpol PP dan aparat segel tambang galian ilegal di bantaran sungai utama.',
        news_en: 'City Enforcement units shut down illegal river sand quarries in major crackdowns.',
        mood: 1
      },
      {
        t: 'Terima Bantuan Kampanye secara Terselubung demi Logistik Partai',
        t_en: 'Quietly Channel Covert Funds into Party Campaign Warchest',
        d: 'Kebutuhan dana politik aman, namun bantaran sungai rusak dan risiko longsor meningkat.',
        d_en: 'Political campaign logistics secured, but riverbeds erode and landslide risks climb.',
        fx: { sat: -10, env: -10, flood: 6 },
        actors: { Pengusaha: 20, DPRD: 15, KomunitasLingkungan: -20 },
        life: { wealth: 0.2 },
        risk: 30,
        news: 'Aktivis lingkungan keluhkan maraknya aktivitas galian pasir liar tanpa tindakan tegas.',
        news_en: 'Environmentalists decry unchecked illegal river quarrying and lack of enforcement.',
        mood: -1
      },
      {
        t: 'Tawarkan Relokasi ke Wilayah Pertambangan Rakyat (WPR) Resmi',
        t_en: 'Offer Legal Relocation to Designated Mining Zones with Royalties',
        d: 'Menertibkan pelaku usaha liar menjadi pembayar retribusi resmi bagi PAD kota.',
        d_en: 'Transforms wild mining operators into formal local tax and royalty contributors.',
        fx: { pad: 0.25, env: -2, sat: 2 },
        actors: { Pengusaha: 8, KomunitasLingkungan: 2 },
        life: { stress: 4 },
        risk: 2,
        news: 'Pemkot tata zonasi pertambangan rakyat guna genjot pendapatan daerah resmi.',
        news_en: 'City Hall formalizes designated mining zones to boost legitimate municipal revenues.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 12, relatedActors: ['KomunitasLingkungan', 'Pengusaha', 'DPRD'] }
  ),

  EV('fam_spouse_burnout_holiday', 'Sosial', '🏖️', 'Tuntutan Waktu Keluarga: Pasangan Mengeluh Walikota Terlalu Sibuk',
    'Pasangan Anda menyatakan anak-anak kehilangan figur orang tua karena Anda selalu lembur dan rapat hingga larut malam. Pasangan menuntut cuti bersama keluarga selama beberapa hari.',
    [
      {
        t: 'Ambil Cuti Singkat Bersama Keluarga & Delegasikan ke Sekda',
        t_en: 'Take Short Family Retreat & Delegate Routine Meetings to City Secretary',
        d: 'Keharmonisan rumah tangga pulih dan stres sirna, meski fraksi DPRD menyindir Walikota santai.',
        d_en: 'Family harmony restored and stress vanishes, though legislative leaders mock your retreat.',
        fx: { sat: -1 },
        actors: { DPRD: -6 },
        life: { familyRel: 30, stress: -35, wealth: -0.05 },
        risk: 0,
        news: 'Sekda pimpin rapat koordinasi pemkot selama Walikota cuti bersama keluarga.',
        news_en: 'City Secretary presides over municipal sessions while Mayor takes brief family leave.',
        mood: 0
      },
      {
        t: 'Tolak Cuti demi Tuntaskan Maraton Pengesahan APBD',
        t_en: 'Decline Leave to Power Through Marathon Budget Ratification',
        d: 'APBD tuntas tepat waktu, namun kerenggangan emosional dalam keluarga kian memuncak.',
        d_en: 'Budget approved on schedule, but emotional rift within the family deepens.',
        fx: { apbd: 0.2, sat: 3 },
        actors: { DPRD: 8, ASN: 5 },
        life: { familyRel: -25, stress: 25 },
        risk: -2,
        news: 'Walikota maraton selesaikan RAPBD bersama jajaran legislatif hingga larut malam.',
        news_en: 'Mayor works late into the night with lawmakers to finalize regional budget.',
        mood: 1
      },
      {
        t: 'Ajak Keluarga Menginap di Wisma Dekat Balai Kota Sambil Bekerja',
        t_en: 'Host Family at City Guesthouse to Stay Close While Working',
        d: 'Upaya menyeimbangkan tugas negara dan kehangatan keluarga di tengah jadwal padat.',
        d_en: 'Strives to balance civic duties and family warmth amidst demanding municipal schedules.',
        fx: { sat: 1 },
        actors: { ASN: 2 },
        life: { familyRel: 12, stress: -10, wealth: -0.02 },
        risk: 0,
        news: 'Walikota tetap pantau layanan publik sambil luangkan waktu berkualitas bersama keluarga.',
        news_en: 'Mayor oversees municipal public services while sharing quality family moments.',
        mood: 0
      }
    ],
    { isPersonal: true, priority: 10, relatedActors: ['DPRD', 'ASN'] }
  )
];


// ==================== DOMINO CONSEQUENCE EVENTS (SEBAB-AKIBAT DARI PERCAKAPAN BERBAHAYA) ====================
var DOMINO_CONSEQUENCE_EVENTS = [
  {
    id: 'domino_dprd_apbd_boycott',
    cat: 'Politik',
    icon: '⚡',
    title: '💥 REPERKUSI: Pemboikotan Sidang APBD oleh Koalisi Parpol',
    title_en: '💥 REPERCUSSION: Legislative Budget Boycott by Coalition',
    text: 'Buntut penolakan Anda membagikan kursi direksi BUMD kepada H. Suryo di Tahun ke-1, seluruh fraksi partai koalisi memboikot sidang paripurna APBD. Gaji ribuan pegawai honorer dan anggaran stunting terancam lumpuh total!',
    text_en: 'Following your refusal to surrender utility board seats to party boss Suryo in Year 1, coalition factions walk out of the city budget plenary. Municipal payroll and public health funds are completely frozen!',
    isDomino: true,
    triggerFlag: 'y1q1_refused_party_patronage',
    consequenceContext_id: 'Dipicu penolakan jatah kursi BUMD kepada Partai di Tahun 1 Triwulan 1',
    consequenceContext_en: 'Triggered by refusing utility board seats to the party in Year 1 Q1',
    choices: [
      {
        t: 'Buka Dokumen Pemerasan ke Publik & Ajak Rakyat Menekan Dewan',
        t_en: 'Expose Legislative Blackmail & Mobilize Public Pressure',
        d: 'Rakyat membela walikota, namun hubungan dengan DPRD rusak total.',
        d_en: 'Citizens back the mayor, but ties with the city council are severed.',
        fx: { sat: 12, risk: 15 },
        actors: { DPRD: -30, Mahasiswa: 20 },
        news: 'Walikota beberkan bukti pemerasan jatah proyek oleh oknum dewan ke media.',
        news_en: 'Mayor exposes legislative blackmail and project quota demands to press.',
        mood: 1
      },
      {
        t: 'Kompromi Terbatas: Alokasikan Pokir Khusus Fasilitas Sekolah',
        t_en: 'Limited Compromise: Fund School Facilities via Pork Barrel',
        d: 'Sidang kembali berjalan kuorum, namun kompromi politik mulai tercium.',
        d_en: 'Session resumes with quorum, but political compromise is noted.',
        fx: { sat: 4, apbd: -0.3, risk: -5 },
        actors: { DPRD: 20 },
        news: 'Paripurna APBD dilanjutkan setelah Pemkot sepakati paket fasilitas pendidikan.',
        news_en: 'Plenary budget session resumes after administration compromises on school packages.',
        mood: 1
      },
      {
        t: 'Terbitkan Perwali Darurat Anggaran Sepihak Tanpa DPRD',
        t_en: 'Issue Emergency Mayoral Budget Decree Without Council',
        d: 'Pemerintahan tetap berjalan, namun dewan menggulirkan hak interpelasi.',
        d_en: 'Government continues running, but council initiates impeachment inquiries.',
        fx: { sat: -6, apbd: 0.2, risk: 30 },
        actors: { DPRD: -35 },
        news: 'Walikota gunakan Perwali darurat usai parlemen macet, DPRD layangkan mosi kecaman.',
        news_en: 'Mayor bypasses deadlocked council with emergency decree; censure motion filed.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_bumd_corruption_scandal',
    cat: 'Politik',
    icon: '⚡',
    title: '💥 REPERKUSI: Skandal Korupsi & Pungli Direksi BUMD Titipan',
    title_en: '💥 REPERCUSSION: Crony Utility Board Embezzlement Scandal',
    text: 'Kader partai yang Anda serahkan kursi Direksi BUMD Air Bersih tertangkap basah menarik setoran liar dan memotong tunjangan buruh lapangan. Ratusan pelanggan berunjuk rasa memegang pipa kering!',
    text_en: 'The party crony you appointed to head the Water Utility was caught red-handed collecting illegal levies and withholding worker wages. Enraged citizens protest brandishing dry pipes!',
    isDomino: true,
    triggerFlag: 'y1q1_surrendered_to_party',
    consequenceContext_id: 'Dipicu penyerahan kursi BUMD kepada kader titipan partai di Tahun 1 Triwulan 1',
    consequenceContext_en: 'Triggered by handing utility board seats to party cronies in Year 1 Q1',
    choices: [
      {
        t: 'Copot Direksi Secara Tidak Hormat & Serahkan ke Kejaksaan',
        t_en: 'Dishonorably Discharge Board & Refer to Prosecutors',
        d: 'Warga puas integritas ditegakkan, namun pimpinan partai mencak-mencak.',
        d_en: 'Citizens applaud the crackdown, but party bosses are furious.',
        fx: { sat: 10, risk: -10 },
        actors: { DPRD: -20, Mahasiswa: 15 },
        news: 'Direksi BUMD titipan dicopot mendadak usai temuan pungli pipa air bersih.',
        news_en: 'Crony utility directors sacked in graft crackdown following extortion discovery.',
        mood: 1
      },
      {
        t: 'Bentuk Tim Investigasi Internal Senyap untuk Melindungi Koalisi',
        t_en: 'Form Quiet Internal Probe to Shield Coalition Harmony',
        d: 'Koalisi aman di atas kertas, namun kecaman publik meluas di media sosial.',
        d_en: 'Coalition is preserved, but public outrage spreads across social feeds.',
        fx: { sat: -14, risk: 25 },
        actors: { DPRD: 15, Media: -20 },
        news: 'Koalisi LSM laporkan indikasi kongkalikong audit BUMD ke Komisi Yudisial.',
        news_en: 'NGO coalition files complaint regarding soft-pedaled municipal utility probe.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_fishermen_sea_blockade',
    cat: 'Lingkungan',
    icon: '⚡',
    title: '💥 REPERKUSI: Ratusan Nelayan Memblokade Akses Pelabuhan',
    title_en: '💥 REPERCUSSION: Fishermen Blockade Commercial Harbor',
    text: 'Izin reklamasi Dharmawan Wijaya yang Anda restui menyebabkan pendangkalan laut dan matinya tangkapan ikan. Armada perahu nelayan kini memblokade kapal feri dan kargo di pelabuhan kota!',
    text_en: 'The coastal reclamation permit you granted to Dharmawan Wijaya has silted the shoreline and destroyed fisheries. A fleet of fishing boats is now blockading commercial harbor transit!',
    isDomino: true,
    triggerFlag: 'y1q2_endorsed_reclamation_tycoon',
    consequenceContext_id: 'Dipicu persetujuan izin reklamasi pantai megah di Tahun 1 Triwulan 2',
    consequenceContext_en: 'Triggered by approving controversial reclamation permits in Year 1 Q2',
    choices: [
      {
        t: 'Bekukan Izin Reklamasi Sementara & Beri Kompensasi Bahan Bakar',
        t_en: 'Freeze Reclamation Work & Subsidize Fishing Fuel',
        d: 'Blokade bubar dengan damai, namun konsorsium properti mengancam gugatan perdata.',
        d_en: 'Blockade lifts peacefully, but property developers threaten massive lawsuits.',
        fx: { sat: 14, apbd: -0.4, risk: -10 },
        actors: { Pengusaha: -25, Buruh: 15 },
        news: 'Walikota bekukan reklamasi pesisir usai aksi blokade ratusan perahu nelayan.',
        news_en: 'Mayor freezes coastal reclamation following maritime blockade by fishing fleet.',
        mood: 1
      },
      {
        t: 'Kerahkan Satpol PP & Polairud untuk Membuka Paksa Jalur Laut',
        t_en: 'Deploy Marine Police to Forcibly Clear Harbor Transit',
        d: 'Jalur perdagangan terbuka cepat, namun bentrokan di laut melukai beberapa nelayan.',
        d_en: 'Trade lanes reopen quickly, but clashes at sea injure local fishermen.',
        fx: { sat: -18, risk: 30 },
        actors: { Pengusaha: 20, Mahasiswa: -25 },
        news: 'Aparat bentrok dengan nelayan penolak reklamasi di dermaga logistik.',
        news_en: 'Security forces clash with anti-reclamation fishermen at commercial docks.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_kpk_hospital_raid',
    cat: 'Hukum',
    icon: '⚡',
    title: '💥 REPERKUSI: Penyidik Tipikor Geledah Ruang Arsip RSUD',
    title_en: '💥 REPERCUSSION: Anti-Graft Squad Raids Hospital Archives',
    text: 'Penyelidikan korupsi alat kesehatan RSUD yang Anda redam secara internal terendus penegak hukum. Tim penyidik berseragam rompi menggeledah Balaikota dan menyita berkas memo disposisi Anda!',
    text_en: 'The hospital equipment graft you suppressed internally has leaked to anti-corruption prosecutors. Investigators in tactical vests raid City Hall and seize your personal disposition memos!',
    isDomino: true,
    triggerFlag: 'y1q4_covered_up_procurement_graft',
    consequenceContext_id: 'Dipicu penutupan kasus pengadaan alkes RSUD di Tahun 1 Triwulan 4',
    consequenceContext_en: 'Triggered by covering up hospital procurement graft in Year 1 Q4',
    choices: [
      {
        t: 'Kooperatif Penuh & Serahkan Seluruh Pembukuan Dinas Kesehatan',
        t_en: 'Cooperate Fully & Turn Over All Health Department Records',
        d: 'Citra Anda selamat berkat sikap terbuka, meski beberapa pejabat eselon jadi tersangka.',
        d_en: 'Your standing survives on transparency, though senior bureaucrats face arrest.',
        fx: { sat: 8, risk: -15 },
        actors: { ASN: -15, Mahasiswa: 12 },
        news: 'Balaikota serahkan berkas proyek alkes ke penyidik dalam penggeledahan maraton.',
        news_en: 'City Hall turns over healthcare procurement archives during extensive search.',
        mood: 1
      },
      {
        t: 'Gunakan Kuasa Hukum Pemkot untuk Halangi Penyitaan Dokumen',
        t_en: 'Deploy City Attorneys to Obstruct File Confiscation',
        d: 'Dokumen kunci selamat, namun opini publik menganggap Balaikota bersalah.',
        d_en: 'Key documents are shielded, but public opinion brands the administration guilty.',
        fx: { sat: -20, risk: 35 },
        actors: { Mahasiswa: -30, Media: -25 },
        news: 'Penggeledahan di Balaikota tegang, Pemkot tolak serahkan memo disposisi pimpinan.',
        news_en: 'Tense standoff at City Hall as administration resists seizure of executive memos.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_family_nepotism_protest',
    cat: 'Sosial',
    icon: '⚡',
    title: '💥 REPERKUSI: Aksi Mahasiswa Menggugat Dinasti Balaikota',
    title_en: '💥 REPERCUSSION: Student Uprising Denounces Mayoral Dynasty',
    text: 'Kasus korupsi adik kandung yang Anda lindungi dari jerat hukum meledak di media sosial. Spanduk raksasa "Nusapura Bukan Milik Dinasti Keluarga Walikota" terpampang di bundaran tugu kota!',
    text_en: 'The market kickback case of your sibling that you shielded from justice has blown up on social media. Massive banners reading "Nusapura Is Not Your Family Dynasty" hang across the city square!',
    isDomino: true,
    triggerFlag: 'y2q2_shielded_corrupt_family',
    consequenceContext_id: 'Dipicu perlindungan anggota keluarga dari jerat hukum di Tahun 2 Triwulan 2',
    consequenceContext_en: 'Triggered by shielding a corrupt family relative in Year 2 Q2',
    choices: [
      {
        t: 'Minta Maaf Terbuka & Serahkan Keluarga ke Proses Peradilan',
        t_en: 'Public Apology & Surrender Relative to Court Proceedings',
        d: 'Keluarga terpukul berat, namun wibawa moral kepemimpinan Anda terselamatkan.',
        d_en: 'Family relations are shattered, but your moral authority is restored.',
        fx: { sat: 6, risk: -10 },
        actors: { Mahasiswa: 15, TokohAgama: 10 },
        news: 'Walikota Nusapura minta maaf terbuka dan tegaskan tak lindungi keluarga yang korupsi.',
        news_en: 'Mayor issues emotional public apology, refusing immunity for family members.',
        mood: 1
      },
      {
        t: 'Klarifikasi Defensif: "Ini Fitnah Pembunuhan Karakter Politik!"',
        t_en: 'Defensive Stance: "This Is a Politically Motivated Smear!"',
        d: 'Mahasiswa semakin marah dan mendirikan tenda keprihatinan di depan Balaikota.',
        d_en: 'Students escalate protests, pitching permanent encampments outside City Hall.',
        fx: { sat: -16, risk: 25 },
        actors: { Mahasiswa: -25, Media: -20 },
        news: 'Balaikota bantah isu dinasti, mahasiswa dirikan tenda protes kelilingi pendopo.',
        news_en: 'Administration denies nepotism claims; students set up tent protest perimeter.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_underground_press_expose',
    cat: 'Media',
    icon: '⚡',
    title: '💥 REPERKUSI: Media Investigasi Bongkar Dana Pembungkaman Pers',
    title_en: '💥 REPERCUSSION: Leaked Papers Expose Media Hush Slush Fund',
    text: 'Aliansi jurnalis independen membocorkan rekaman suara dan bukti transfer dana siluman Kominfo yang Anda bayarkan untuk membungkam investigasi pengalihan dana darurat banjir!',
    text_en: 'An independent press consortium publishes leaked recordings and bank transfer slips from the secret slush fund used to muzzle reporting on diverted flood relief funds!',
    isDomino: true,
    triggerFlag: 'y2q4_bought_media_silence',
    consequenceContext_id: 'Dipicu pembelian kebisuan jurnalis investigasi di Tahun 2 Triwulan 4',
    consequenceContext_en: 'Triggered by bribing investigative journalists in Year 2 Q4',
    choices: [
      {
        t: 'Audit Investigatif Dinas Kominfo & Cabut Seluruh Kontrak Siluman',
        t_en: 'Audit Public Relations Bureau & Cancel Dark Slush Contracts',
        d: 'Keterbukaan pers dipulihkan, beberapa staf hubungan masyarakat dicopot.',
        d_en: 'Press transparency restored, several communications aides dismissed.',
        fx: { sat: 6, risk: -12 },
        actors: { Media: 20 },
        news: 'Walikota perintahkan audit total anggaran publikasi Kominfo menyusul skandal dana liputan.',
        news_en: 'Mayor orders full audit of municipal media contracts following hush money scandal.',
        mood: 1
      },
      {
        t: 'Ancam Somasi Pidana UU ITE Terhadap Kantor Redaksi',
        t_en: 'Threaten Defamation Charges Against News Outlets',
        d: 'Dewan Pers mengecam keras tindakan Walikota yang dinilai antikritik.',
        d_en: 'Press Council severely reprimands City Hall for press intimidation tactics.',
        fx: { sat: -16, risk: 30 },
        actors: { Media: -35, Mahasiswa: -20 },
        news: 'Dewan Pers kecam somasi Balaikota terhadap jurnalis investigasi.',
        news_en: 'Press Council slams City Hall for threatening journalists with criminal lawsuits.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_paramilitary_turf_war',
    cat: 'Keamanan',
    icon: '⚡',
    title: '💥 REPERKUSI: Bentrokan Bersenjata Ormas Binaan di Pusat Pasar',
    title_en: '💥 REPERCUSSION: Armed Turf War by Paramilitary Guild',
    text: 'Ormas Garda Nusa yang Anda beri jatah parkir bertindak semakin liar, memeras pedagang sayur dan bentrok senjata tajam dengan paguyuban pemuda lokal, membakar 8 kios!',
    text_en: 'The Garda Nusa paramilitary group you subsidized with parking rackets has spun out of control, extorting vendors and clashing with machetes, torching 8 market stalls!',
    isDomino: true,
    triggerFlag: 'y3q1_bribed_paramilitary_guild',
    consequenceContext_id: 'Dipicu kompromi jatah lahan parkir kepada pimpinan ormas di Tahun 3 Triwulan 1',
    consequenceContext_en: 'Triggered by conceding parking extortion to paramilitary bosses in Year 3 Q1',
    choices: [
      {
        t: 'Cabut Seluruh Hibah Ormas & Perintahkan Aparat Tangkap Pelaku',
        t_en: 'Revoke Paramilitary Grants & Order Mass Arrests',
        d: 'Ketertiban pasar pulih seketika, namun pentolan ormas bersumpah membalas di Pilkada.',
        d_en: 'Market order restored, but underworld bosses vow electoral revenge.',
        fx: { sat: 10, apbd: 0.2, risk: -15 },
        actors: { Ormas: -35, Pedagang: 25 },
        news: 'Polres dan Satpol PP sita senjata tajam markas ormas di pasar induk usai bentrokan.',
        news_en: 'Joint police forces sweep paramilitary headquarters following market brawl.',
        mood: 1
      },
      {
        t: 'Kumpulkan Pimpinan Ormas di Ruang Tertutup untuk Rekonsiliasi',
        t_en: 'Summon Bosses Behind Closed Doors for Quiet Appeasement',
        d: 'Bentrokan reda sejenak, namun pedagang kecewa karena premanisme tetap dipelihara.',
        d_en: 'Violence pauses, but shopkeepers lament the perpetuation of protection rackets.',
        fx: { sat: -14, risk: 20 },
        actors: { Ormas: 15, Pedagang: -25 },
        news: 'Pedagang pasar mengeluh pungli tetap marak pasca-pertemuan tertutup di Balaikota.',
        news_en: 'Traders lament unabated extortion after secret truce brokered in City Hall.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_flyover_structural_crack',
    cat: 'Infrastruktur',
    icon: '⚡',
    title: '💥 REPERKUSI: Flyover Retak Kritis & Koper Suap Tercium Jaksa',
    title_en: '💥 REPERCUSSION: Flyover Suffers Critical Cracks Amid Graft Rumors',
    text: 'Flyover yang Anda bebaskan dendanya demi koper Rp 10 Miliar retak betonnya saat uji beban. Ahli konstruksi membongkar pengurangan spesifikasi besi dan rumor suap di lingkaran Balaikota!',
    text_en: 'The ring flyover you exempted from penalties in exchange for the 10-billion cash suitcase has developed severe structural cracks. Engineers blow the whistle on compromised rebar specs!',
    isDomino: true,
    triggerFlag: 'y3q4_took_contractor_kickback',
    consequenceContext_id: 'Dipicu penerimaan koper suap bebas denda kontraktor di Tahun 3 Triwulan 4',
    consequenceContext_en: 'Triggered by accepting a contractor cash kickback in Year 3 Q4',
    choices: [
      {
        t: 'Tutup Total Flyover & Sita Jaminan Bank Perusahaan Rekanan',
        t_en: 'Shut Down Flyover & Forfeit Contractor Bank Guarantees',
        d: 'Keselamatan warga terlindungi, kontraktor nakal digiring ke meja hijau.',
        d_en: 'Public safety secured, rogue contractor hauled into court.',
        fx: { sat: 6, apbd: -0.6, risk: -10 },
        actors: { Pengusaha: -30, DPRD: -15 },
        news: 'Flyover lingkar ditutup darurat, Pemkot sita jaminan proyek kontraktor rekanan.',
        news_en: 'Bypass flyover closed after structural flaws detected; contractor bonds frozen.',
        mood: 1
      },
      {
        t: 'Suntikkan Dana Tambahan Perbaikan dari Kas Darurat APBD',
        t_en: 'Inject Emergency City Repair Subsidies Quietly',
        d: 'Proyek bisa dibuka kembali, namun kas daerah terkuras dan aroma suap makin pekat.',
        d_en: 'Project reopens, but municipal treasury bleeds and graft rumors intensify.',
        fx: { sat: -16, apbd: -0.8, risk: 30 },
        actors: { Mahasiswa: -25 },
        news: 'Pemkot kucurkan miliaran rupiah kas darurat tutupi retakan flyover yang baru dibangun.',
        news_en: 'City pours billions in emergency funds to patch cracks on brand new overpass.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_ancestral_curse_boycott',
    cat: 'Sosial',
    icon: '⚡',
    title: '💥 REPERKUSI: Sidang Adat Memfatwakan Boikot Total Balaikota',
    title_en: '💥 REPERCUSSION: Council of Elders Decrees City Hall Boycott',
    text: 'Penghancuran makam leluhur demi trase flyover memicu murka tetua adat. Seluruh tetua kampung mengeluarkan fatwa pemboikotan program pemkot dan menutup akses wilayah selatan!',
    text_en: 'Bulldozing the ancient ancestral burial grove for the bypass has infuriated cultural elders. The Council decrees a complete municipal boycott, sealing off southern districts!',
    isDomino: true,
    triggerFlag: 'y4q2_bulldozed_sacred_heritage',
    consequenceContext_id: 'Dipicu perataan makam cagar budaya leluhur di Tahun 4 Triwulan 2',
    consequenceContext_en: 'Triggered by bulldozing sacred heritage grounds in Year 4 Q2',
    choices: [
      {
        t: 'Hadiri Sidang Adat Bersujud Meminta Maaf & Bangun Monumen Budaya',
        t_en: 'Kneel Before Council of Elders & Erect Memorial Shrine',
        d: 'Ketulusan walikota melunakkan hati tetua, hubungan adat kembali harmonis.',
        d_en: 'Mayor humility softens elders, cultural peace is reestablished.',
        fx: { sat: 10, apbd: -0.3, risk: -10 },
        actors: { TokohAgama: 25, WargaAdat: 30 },
        news: 'Walikota hadiri upacara sakral minta maaf dan resmikan taman makam pusaka.',
        news_en: 'Mayor attends solemn reconciliation rite, dedicating new heritage memorial.',
        mood: 1
      },
      {
        t: 'Abaikan Tetua Adat: "Pembangunan Modern Tak Boleh Dihambat Takhayul"',
        t_en: 'Dismiss Elders: "Modern Progress Will Not Bow to Superstition"',
        d: 'Warga adat meradang dan menyegel kantor camat di 3 wilayah selatan.',
        d_en: 'Indigenous residents rage and padlock municipal subdistrict offices.',
        fx: { sat: -18, risk: 25 },
        actors: { TokohAgama: -30, WargaAdat: -40 },
        news: 'Warga adat segel kantor kecamatan usai Walikota tolak aspirasi tetua.',
        news_en: 'Community seals subdistrict offices as administration ignores indigenous elders.',
        mood: -1
      }
    ]
  },
  {
    id: 'domino_ott_bpk_auditor_bust',
    cat: 'Hukum',
    icon: '⚡',
    title: '💥 REPERKUSI: OTT KPK Terhadap Auditor BPK di Hotel Berbintang',
    title_en: '💥 REPERCUSSION: Anti-Graft Sting Busts State Auditor',
    text: 'Auditor BPK Fajar Nugroho tertangkap tangan oleh KPK saat menerima uang pelicin WTP. Dalam amplop barang bukti terdapat memo berkop dinas pemkot Nusapura!',
    text_en: 'State auditor Fajar Nugroho has been arrested in a sting operation with cash envelopes for the clean audit opinion. Evidence seized includes official City Hall memos!',
    isDomino: true,
    triggerFlag: 'y4q4_bribed_bpk_auditors',
    consequenceContext_id: 'Dipicu pemberian suap uang fasilitasi kepada auditor BPK di Tahun 4 Triwulan 4',
    consequenceContext_en: 'Triggered by bribing state auditors in Year 4 Q4',
    choices: [
      {
        t: 'Serahkan Pejabat BPKAD yang Terlibat & Bersaksi Terbuka',
        t_en: 'Turn Over Implicated Finance Bureaucrats & Testify Openly',
        d: 'Birokrasi keuangan terguncang hebat, namun Anda terhindar dari penetapan tersangka.',
        d_en: 'Finance bureau is shaken, but you narrowly evade criminal indictments.',
        fx: { sat: 4, risk: -15 },
        actors: { ASN: -25, Mahasiswa: 15 },
        news: 'Walikota kooperatif bersaksi di KPK pasca-OTT suap opini wajar tanpa pengecualian.',
        news_en: 'Mayor testifies at anti-corruption commission following auditor bribery bust.',
        mood: 1
      },
      {
        t: 'Klaim Pemerasan: "Pemkot Nusapura Adalah Korban Oknum Auditor!"',
        t_en: 'Claim Extortion: "The City Administration Was The Victim!"',
        d: 'Publik skeptis dan mencurigai bahwa suap tersebut adalah instruksi langsung pimpinan.',
        d_en: 'Public remains skeptical, suspecting kickback directives came from the very top.',
        fx: { sat: -14, risk: 30 },
        actors: { Media: -20, DPRD: -15 },
        news: 'KPK telusuri aliran dana korporasi pemda ke oknum BPK, Walikota klaim pemerasan.',
        news_en: 'Anti-graft agency probes municipal slush funds as Mayor alleges auditor extortion.',
        mood: -1
      }
    ]
  }
];

// ==================== TAHUN PERTAMA: KASUS LATIHAN SEDERHANA (TUTORIAL ORIENTASI EKSEKUTIF) ====================
// Dirancang khusus memandu pemain baru memahami korelasi vital antara APBD, Respon DPRD, dan Kepuasan Publik
const TUTORIAL_APBD_DPRD_EVENT = {
  id: 'ev_tutorial_apbd_dprd',
  isTutorial: true,
  cat: 'Orientasi Eksekutif',
  cat_en: 'Executive Orientation',
  icon: '📚',
  title: '[KASUS LATIHAN EKSEKUTIF] Penyelarasan APBD Perdana & Restu Politik DPRD',
  title_en: '[EXECUTIVE PRACTICE CASE] Initial APBD Alignment & Council Approval',
  rarity: 'special',
  priority: 999,
  relatedActors: ['DPRD', 'ASN', 'LSM'],
  actor: 'DPRD',
  text: 'Selamat bertugas di Meja Kerja Walikota! Sekretaris Daerah (Sekda) Drs. H. Mulyadi dan Ketua Badan Anggaran (Banggar) DPRD Ir. Hendra Gunawan meletakkan draf Kebijakan Umum Anggaran (KUA) Tahun Pertama di hadapan Anda.\n\n📘 **PANDUAN PEMULA (KASUS LATIHAN TAHUN KE-1):**\nSebagai Walikota baru, pahami dua motor penggerak kekuasaan Anda sebelum badai krisis melanda:\n1. 💰 **APBD (Kas Keuangan Daerah):** Setiap program publik menguras kas APBD. Jika kas daerah jatuh ke defisit kritis (< Rp 1.0 T), kota terancam kebangkrutan fiskal.\n2. 🏛️ **Respon DPRD (Parlemen Kota):** Hubungan politik dengan fraksi DPRD (diukur lewat Relasi DPRD & Keharmonisan Parlemen) menentukan nasib Anda. Jika dewan kecewa (< 40%), mereka dapat memboikot Perda APBD, mengajukan Hak Interpelasi, hingga memicu sidang Pemakzulan.\n\nBagaimana strategi kompromi awal yang Anda ambil untuk menyelaraskan APBD perdana ini?',
  text_en: 'Welcome to the Mayor\'s Executive Desk! Regional Secretary Drs. H. Mulyadi and Parliamentary Budget Committee (Banggar) Chairman Ir. Hendra Gunawan lay down the First-Year General Budget Priorities on your desk.\n\n📘 **EXECUTIVE PRACTICE CASE (YEAR 1 ORIENTATION):**\nAs the newly inaugurated Mayor, master the two fundamental engines of your governance before major crises emerge:\n1. 💰 **APBD (Municipal Treasury):** Every civic program draws from the city treasury. If funds drop into critical deficit (< Rp 1.0 T), the city faces fiscal insolvency.\n2. 🏛️ **Council (DPRD) Relations:** Political harmony with council factions determines your survival. If council relations deteriorate (< 40%), factions can deadlock budgets, submit interpellations, or pursue impeachment.\n\nWhat foundational compromise will you execute to align your inaugural budget?',
  choices: [
    {
      t: 'Paket 1 (Pro-Rakyat): Kucurkan Belanja "Quick Win" Langsung ke Warga',
      t_en: 'Package 1 (Citizen-First): Deploy Direct "Quick Win" Spending to Citizens',
      d: 'Alokasikan Rp 0.4 T untuk rehab puskesmas, ambulans gratis, dan perbaikan jalan lingkar. Kepuasan warga melonjak (+8%), namun saldo APBD berkurang dan fraksi DPRD menggerutu karena Pokir dewan belum diakomodasi.',
      d_en: 'Allocate Rp 0.4 T for urgent clinic revamps, free ambulances, and ring-road repairs. Citizen approval surges (+8%), but APBD shrinks and council factions grumble as their legislative district pledges wait.',
      fx: { apbd: -0.4, sat: 8, health: 4, infra: 3 },
      actors: { DPRD: -5, LSM: 8, Mahasiswa: 6, ASN: 3 },
      news: 'Walikota eksekusi belanja Quick Win perdana: Pelayanan kesehatan dan jalan publik langsung melonjak!',
      news_en: 'Mayor deploys inaugural Quick Win spending: Healthcare access and public roads surge in quality!',
      mood: 1
    },
    {
      t: 'Paket 2 (Harmonisasi Parlemen): Akomodasi Pokok Pikiran (Pokir) Fraksi DPRD',
      t_en: 'Package 2 (Council Harmonization): Accommodate Council Member Aspirations (Pokir)',
      d: 'Alokasikan Rp 0.3 T untuk program kemitraan konstituen dapil DPRD. Koalisi dewan sangat solid (+12 Relasi DPRD), Perda APBD disahkan mulus tanpa hambatan, dengan pengeluaran fiskal terukur.',
      d_en: 'Allocate Rp 0.3 T for constituent partnership projects backed by council factions. Council coalition solidifies (+12 DPRD), ensuring effortless ordinance approvals with measured fiscal spending.',
      fx: { apbd: -0.3, sat: 4, infra: 3 },
      actors: { DPRD: 12, ASN: 6, LSM: -2, Pengusaha: 5 },
      news: 'Kemitraan eksekutif-legislatif Nusapura harmonis: APBD tahun pertama disepakati secara aklamasi!',
      news_en: 'Harmonious executive-legislative pact in Nusapura: First-year municipal work plan ratified by council acclamation!',
      mood: 1
    },
    {
      t: 'Paket 3 (Disiplin Fiskal): Tahan Belanja & Amankan Cadangan Kas Daerah',
      t_en: 'Package 3 (Fiscal Discipline): Restrain Outlays & Fortify Cash Reserves',
      d: 'Terapkan efisiensi birokrasi, pangkas biaya seremonial dinas (+Rp 0.1 T kas cadangan). BPK memuji tata kelola hemat, namun publik dan fraksi DPRD menuntut realisasi pembangunan nyata segera.',
      d_en: 'Enforce administrative efficiency and trim ceremonial overhead (+Rp 0.1 T reserves). State auditors applaud prudent governance, though citizens and council demand immediate concrete projects.',
      fx: { apbd: 0.1, sat: -2 },
      actors: { BPK: 8, DPRD: -3, LSM: -2, Pengusaha: -2 },
      news: 'Pemkot canangkan disiplin anggaran ketat: Penghematan pos operasional demi stabilitas kas jangka panjang.',
      news_en: 'Mayor institutes strict fiscal discipline: Operational cost curbs bolster long-term city cash reserves.',
      mood: 0
    }
  ]
};

var ALL_EVENTS = [TUTORIAL_APBD_DPRD_EVENT, ...EVENTS, ...BASE_EVENTS, ...CHAIN_EVENTS, ...RARE_EVENTS, ...RANDOM_STORY_EVENTS, ...PERSONAL_POLITICS_EVENTS, ...DOMINO_CONSEQUENCE_EVENTS];