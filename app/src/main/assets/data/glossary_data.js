/**
 * Indonesian Governance Glossary & Municipal Event Localization Dataset
 */

const GOV_GLOSSARY = [
  {
    id: 'apbd',
    term: 'APBD (Anggaran Pendapatan dan Belanja Daerah)',
    enName: 'Regional Government Revenue & Expenditure Budget',
    cat: 'keuangan',
    icon: '💰',
    desc_id: 'Rencana keuangan tahunan pemerintah daerah yang dibahas dan disetujui bersama oleh Pemerintah Kota dan DPRD. Mencakup seluruh pendapatan daerah, belanja sektoral (infrastruktur, pendidikan, kesehatan), serta pembiayaan daerah.',
    desc_en: 'The annual comprehensive financial plan of the regional government approved jointly by the Mayor and the Regional Parliament (DPRD). Covers all municipal revenues, sectoral expenditures (infrastructure, schools, health, sanitation), and local financing.',
    gameplay_id: 'Mengendalikan saldo kas kota, belanja dinas, proyek fisik, dan modal investasi pembangunan setiap tahunnya.',
    gameplay_en: 'Controls the city\'s treasury balance, municipal agency spending, capital infrastructure projects, and strategic investments each year.'
  },
  {
    id: 'pad',
    term: 'PAD (Pendapatan Asli Daerah)',
    enName: 'Regional Own-Source Revenue',
    cat: 'keuangan',
    icon: '📈',
    desc_id: 'Pendapatan yang diperoleh daerah dari sumber-sumber dalam wilayahnya sendiri, seperti pajak hotel/restoran/PBB, retribusi pasar & e-parking, hasil pengelolaan BUMD, dan aset daerah yang sah.',
    desc_en: 'Revenue generated directly by the municipality from local sources, including municipal taxes (property, hotel, restaurant), public service retributions (e-parking, markets), state-owned local enterprises (BUMD), and asset leasing.',
    gameplay_id: 'Pilar kemandirian fiskal kota. Semakin tinggi PAD, semakin bebas Walikota mengeksekusi program tanpa ketergantungan dana transfer pemerintah pusat.',
    gameplay_en: 'The bedrock of municipal fiscal autonomy. Higher PAD enables the Mayor to execute bold policies independently without relying on central government subsidies.'
  },
  {
    id: 'dak',
    term: 'DAK (Dana Alokasi Khusus)',
    enName: 'Special Allocation Fund from Central Government',
    cat: 'keuangan',
    icon: '🎯',
    desc_id: 'Dana transfer dari APBN Pemerintah Pusat kepada pemerintah daerah tertentu untuk mendanai kegiatan khusus yang menjadi prioritas nasional (misal: RSUD rujukan, jalan lingkar, pencegahan stunting).',
    desc_en: 'Earmarked transfer funds disbursed from the National State Budget (APBN) to regional governments specifically to finance designated national priority infrastructure and public welfare programs.',
    gameplay_id: 'Dapat diperoleh melalui lobi Kementerian dan diplomasi pusat untuk membangun fasilitas megah tanpa menguras kas murni APBD kota.',
    gameplay_en: 'Unlocked through ministerial lobbying and central diplomacy in Jakarta to finance massive civic facilities without depleting local treasury reserves.'
  },
  {
    id: 'dau',
    term: 'DAU (Dana Alokasi Umum)',
    enName: 'General Allocation Fund',
    cat: 'keuangan',
    icon: '🏦',
    desc_id: 'Dana transfer tanpa ikatan dari Pemerintah Pusat untuk pemerataan kemampuan keuangan antardaerah, umumnya digunakan untuk belanja rutin dan gaji pegawai birokrasi (ASN).',
    desc_en: 'Unconditional block grants allocated by the central government to ensure horizontal fiscal equalization across Indonesian regions, predominantly covering routine administrative costs and civil servant payroll.',
    gameplay_id: 'Memberi bantalan dasar keuangan setiap tahun agar operasional pelayanan publik dan gaji ASN tetap stabil.',
    gameplay_en: 'Guarantees annual baseline liquidity so municipal public services and civil servant salaries operate smoothly.'
  },
  {
    id: 'dbh',
    term: 'DBH (Dana Bagi Hasil)',
    enName: 'Revenue Sharing Fund',
    cat: 'keuangan',
    icon: '💎',
    desc_id: 'Dana yang bersumber dari pendapatan APBN (seperti PPh, PBB sektor tertentu, dan bagi hasil sumber daya alam migas/mineral/perhutanan) yang dialokasikan kembali kepada daerah penghasil.',
    desc_en: 'Tax and natural resource revenue shares remitted by the central government back to producing provinces and municipalities based on statutory percentage quotas.',
    gameplay_id: 'Sumber pemasukan ekstra saat kota berhasil menarik industri tambang, migas, atau manufaktur besar.',
    gameplay_en: 'Provides bonus fiscal windfalls when the city successfully attracts resource exploitation, heavy industry, or major logistics hubs.'
  },
  {
    id: 'silpa',
    term: 'SILPA (Sisa Lebih Perhitungan Anggaran)',
    enName: 'Unspent Budget Surplus / Carryover Balance',
    cat: 'keuangan',
    icon: '💵',
    desc_id: 'Selisih lebih antara realisasi penerimaan dan pengeluaran APBD pada akhir satu tahun anggaran yang dialihkan ke tahun anggaran berikutnya.',
    desc_en: 'The unspent net surplus remaining at the end of a fiscal year that rolls over as opening balance into the next municipal budget year.',
    gameplay_id: 'SILPA yang terlalu tinggi menandakan penyerapan anggaran lambat dan Kadis lamban bekerja, memicu kritik media dan teguran Kementerian Keuangan.',
    gameplay_en: 'Excessive SILPA signals sluggish project execution by department heads, attracting harsh media criticism and central budget penalties.'
  },
  {
    id: 'btt',
    term: 'BTT (Belanja Tidak Terduga)',
    enName: 'Unforeseen / Emergency Contingency Fund',
    cat: 'keuangan',
    icon: '🚨',
    desc_id: 'Alokasi anggaran dalam APBD yang dipersiapkan untuk keperluan darurat, tanggap bencana alam (banjir/gempa), krisis kesehatan wabah, atau pengeluaran mendesak yang tak terduga.',
    desc_en: 'Contingency reserves allocated in the APBD budget to fund rapid crisis relief, disaster mobilization (BPBD, fire, medical rescue), and unforeseen emergencies.',
    gameplay_id: 'Digunakan pada Unit Reaksi Cepat Komando Darurat untuk mengerahkan BPBD, Damkar, dan logistik saat bencana melanda kota.',
    gameplay_en: 'Deployed in the Crisis Command Center to mobilize emergency units (BPBD, firefighters, medical teams) when urban disasters occur.'
  },
  {
    id: 'lkpj',
    term: 'LKPJ (Laporan Keterangan Pertanggungjawaban)',
    enName: 'Mayor\'s Annual Accountability Report to DPRD',
    cat: 'regulasi',
    icon: '📑',
    desc_id: 'Laporan tahunan resmi kinerja Walikota kepada DPRD mengenai pelaksanaan APBD dan capaian target indikator pembangunan kota selama satu tahun anggaran.',
    desc_en: 'The statutory annual performance and budget implementation report presented by the Mayor before the Regional Parliament (DPRD) for evaluation.',
    gameplay_id: 'Jika LKPJ ditolak atau mendapat catatan buruk dari fraksi DPRD, Walikota menghadapi risiko Hak Angket hingga sidang pemakzulan (impeachment).',
    gameplay_en: 'If the LKPJ report is rejected by hostile parliamentary factions, the Mayor risks political gridlock, parliamentary inquiry, or impeachment trials.'
  },
  {
    id: 'dprd',
    term: 'DPRD (Dewan Perwakilan Rakyat Daerah)',
    enName: 'Regional People\'s Representative Council (City Parliament)',
    cat: 'lembaga',
    icon: '🏛️',
    desc_id: 'Lembaga perwakilan rakyat daerah yang memegang fungsi legislasi pembentukan Perda, persetujuan penganggaran APBD, dan pengawasan birokrasi eksekutif.',
    desc_en: 'The city\'s unicameral legislative parliament holding authority over municipal bylaw (Perda) enactment, APBD budget appropriations, and executive government oversight.',
    gameplay_id: 'Menjaga hubungan dengan fraksi DPRD koalisi sangat krusial agar pengesahan APBD cepat dan tidak dijegal manuver fraksi oposisi.',
    gameplay_en: 'Maintaining high relations with parliamentary factions is essential to pass budgets swiftly and prevent political opposition deadlock.'
  },
  {
    id: 'musrenbang',
    term: 'Musrenbang (Musyawarah Perencanaan Pembangunan)',
    enName: 'Participatory Development Planning Deliberation',
    cat: 'regulasi',
    icon: '🤝',
    desc_id: 'Forum musyawarah berjenjang mulai dari tingkat RT/Kelurahan, Kecamatan, hingga Kota untuk menampung aspirasi warga dan menentukan prioritas usulan proyek tahun depan.',
    desc_en: 'A bottom-up participatory planning forum conducted annually from neighborhoods and sub-districts up to city hall where citizens voice direct infrastructure and welfare proposals.',
    gameplay_id: 'Mengakomodasi usulan Musrenbang meningkatkan kepuasan warga (+Kepuasan) dan memenangkan simpati pemilih di Pilkada.',
    gameplay_en: 'Fulfilling Musrenbang grassroots demands boosts citizen happiness and secures solid voting bases in reelection campaigns.'
  },
  {
    id: 'ekatalog',
    term: 'E-Katalog & LPSE (Lelang Pengadaan Elektronik)',
    enName: 'National E-Procurement & Digital Tender System',
    cat: 'layanan',
    icon: '💻',
    desc_id: 'Platform digital nasional LKPP untuk pengadaan barang, jasa, dan lelang proyek infrastruktur pemerintah daerah secara terbuka, transparan, dan terstandarisasi.',
    desc_en: 'The national digital procurement catalog and electronic bidding portal operated by LKPP to ensure transparent, competitive municipal purchasing and construction tenders.',
    gameplay_id: 'Memilih pengadaan via E-Katalog mencegah mark-up kontraktor nakal dan menekan potensi penyelidikan korupsi KPK/BPK.',
    gameplay_en: 'Mandating E-Katalog procurement eliminates contractor kickbacks and protects city leadership against anti-corruption probes.'
  },
  {
    id: 'kpk',
    term: 'KPK (Komisi Pemberantasan Korupsi)',
    enName: 'Corruption Eradication Commission',
    cat: 'lembaga',
    icon: '⚖️',
    desc_id: 'Lembaga negara independen yang berwenang melakukan penyelidikan, penyidikan, dan penuntutan terhadap tindak pidana korupsi serta Operasi Tangkap Tangan (OTT).',
    desc_en: 'Indonesia\'s premier independent statutory anti-corruption commission empowered to wiretap, investigate, raid, and prosecute graft cases and undercover sting operations (OTT).',
    gameplay_id: 'Jika integritas kabinet rendah atau risiko korupsi tinggi, KPK akan menerbitkan surat panggilan pemeriksaan atau melancarkan OTT kepada kepala dinas.',
    gameplay_en: 'If cabinet integrity sinks or procurement graft is detected, KPK will issue summons or execute sting operations against municipal officials.'
  },
  {
    id: 'bpk',
    term: 'BPK (Badan Pemeriksa Keuangan)',
    enName: 'Supreme Audit Agency of Indonesia',
    cat: 'lembaga',
    icon: '🛡️',
    desc_id: 'Lembaga tinggi negara yang bertugas memeriksa pengelolaan dan tanggung jawab keuangan negara/daerah serta menerbitkan Opini Laporan Keuangan (WTP/WDP).',
    desc_en: 'The constitutional supreme external audit agency responsible for auditing all public financial accounts and granting official audit opinions (such as WTP / Unqualified).',
    gameplay_id: 'Meraih opini WTP (Wajar Tanpa Pengecualian) dari BPK meningkatkan reputasi kota dan membuka bonus insentif fiskal dari Kementerian Keuangan.',
    gameplay_en: 'Achieving the highest WTP audit opinion raises city prestige and unlocks performance incentive bonuses from the central government.'
  },
  {
    id: 'bappeda',
    term: 'Bappeda (Badan Perencanaan Pembangunan Daerah)',
    enName: 'Regional Development Planning Agency',
    cat: 'lembaga',
    icon: '🗺️',
    desc_id: 'Badan teknis pemerintah kota yang bertugas menyusun Rencana Pembangunan Jangka Menengah Daerah (RPJMD) dan mengoordinasikan seluruh program dinas.',
    desc_en: 'The core urban planning institution responsible for authoring the 5-Year Master Development Plan (RPJMD) and coordinating all municipal department targets.',
    gameplay_id: 'Mengarahkan arah pembangunan kota agar selaras antara janji kampanye Walikota dengan indikator kemiskinan dan pengangguran.',
    gameplay_en: 'Aligns campaign pledges with concrete departmental key performance indicators for poverty, employment, and infrastructure.'
  },
  {
    id: 'sekda',
    term: 'Sekda (Sekretaris Daerah)',
    enName: 'Regional Municipal Secretary (Chief Operating Officer)',
    cat: 'lembaga',
    icon: '👔',
    desc_id: 'Pejabat karier birokrasi tertinggi di lingkungan Pemerintah Kota yang bertindak sebagai penggerak administrasi, pembina ASN, dan ketua Tim Anggaran Pemerintah Daerah (TAPD).',
    desc_en: 'The highest-ranking career civil servant and municipal chief operating officer who directs bureaucratic personnel (ASN) and chairs the Local Government Budget Committee (TAPD).',
    gameplay_id: 'Sekda yang loyal dan berkinerja tinggi memastikan seluruh arahan Walikota dieksekusi dengan cepat oleh seluruh dinas kota.',
    gameplay_en: 'A loyal, competent Sekda ensures swift execution across all municipal agencies and shields city hall from administrative gridlock.'
  },
  {
    id: 'kadis',
    term: 'Kadis (Kepala Dinas) & OPD',
    enName: 'Municipal Department Heads & Executive Agencies',
    cat: 'lembaga',
    icon: '🏢',
    desc_id: 'Pimpinan Organisasi Perangkat Daerah (OPD) seperti Kadis PUPR (Infrastruktur), Kadis Kesehatan, Kadis Pendidikan, Kadis Perhubungan, dan DLH (Lingkungan Hidup).',
    desc_en: 'Directors heading key city line agencies including Public Works (PUPR), Health, Education, Transportation, and Environmental Services.',
    gameplay_id: 'Kinerja dan integritas masing-masing Kadis menentukan keberhasilan proyek sektoral serta mencegah terjadinya kebocoran anggaran dinas.',
    gameplay_en: 'The integrity and competence scores of each Kadis dictate departmental KPI improvements and protect against procurement corruption.'
  },
  {
    id: 'perda',
    term: 'Perda (Peraturan Daerah)',
    enName: 'Regional Municipal Bylaw / Ordinance',
    cat: 'regulasi',
    icon: '📜',
    desc_id: 'Peraturan perundang-undangan tingkat kota yang dibentuk oleh Walikota dengan persetujuan bersama DPRD untuk mengatur ketertiban, tata ruang, dan kebijakan strategis.',
    desc_en: 'Enacted local legislation passed by the Mayor with DPRD consent to enforce municipal regulations on spatial zoning, green standards, tariffs, and civic order.',
    gameplay_id: 'Mengaktifkan Perda tematik memberikan efek pasif berkelanjutan pada kepuasan warga, penerimaan PAD, dan penurunan emisi lingkungan.',
    gameplay_en: 'Enacting specific Perdas awards perpetual passive bonuses to citizen satisfaction, revenue generation, and environmental indices.'
  },
  {
    id: 'pilkada',
    term: 'Pilkada (Pemilihan Kepala Daerah)',
    enName: 'Direct Regional Mayoral Election',
    cat: 'regulasi',
    icon: '🗳️',
    desc_id: 'Kontestasi demokrasi langsung setiap 5 tahun sekali di mana warga kota memilih Walikota dan Wakil Walikota untuk masa jabatan definitif.',
    desc_en: 'The direct democratic election held every 5 years where citizens cast ballots to choose their Mayor and Vice Mayor for a 5-year executive term.',
    gameplay_id: 'Pertarungan kampanye 10 hari, debat kandidat, safari politik kecamatan, dan kalkulasi hitung cepat (Quick Count) penentu kemenangan Periode II.',
    gameplay_en: 'Features interactive 10-day campaigns, candidate debates, and live Quick Count drama determining whether you win reelection.'
  },
  {
    id: 'satpolpp',
    term: 'Satpol PP (Satuan Polisi Pamong Praja)',
    enName: 'Civil Service Police Unit / Municipal Law Enforcement',
    cat: 'lembaga',
    icon: '🛡️',
    desc_id: 'Perangkat pemerintah daerah yang bertugas menegakkan Peraturan Daerah (Perda), menyelenggarakan ketertiban umum, dan menertibkan pelanggaran tata ruang kota.',
    desc_en: 'The municipal law enforcement agency tasked with enforcing local bylaws (Perda), maintaining public order, and clearing unauthorized commercial violations.',
    gameplay_id: 'Penertiban humanis menjaga ketertiban kota (+Keamanan), namun tindakan terlalu represif dapat memicu protes pedagang kaki lima dan aktivis HAM.',
    gameplay_en: 'Disciplined, humane enforcement enhances public safety, whereas overly aggressive raids trigger vendor backlash and civil rights protests.'
  },
  {
    id: 'puskesmas',
    term: 'Puskesmas (Pusat Kesehatan Masyarakat)',
    enName: 'Community Primary Health Center',
    cat: 'layanan',
    icon: '🏥',
    desc_id: 'Fasilitas pelayanan kesehatan primer tingkat pertama di setiap kecamatan dan kelurahan yang menyelenggarakan upaya promotif, preventif, kuratif, dan vaksinasi balita.',
    desc_en: 'The community-level public health network located in every district providing primary healthcare, disease prevention, maternal care, and childhood immunizations.',
    gameplay_id: 'Memperbanyak Puskesmas 24 Jam dan nutrisi gratis balita menurunkan angka kematian ibu/anak dan menekan prevalensi stunting.',
    gameplay_en: 'Expanding 24-hour Puskesmas facilities and nutrition initiatives directly increases health metrics and eliminates childhood stunting.'
  },
  {
    id: 'rusunawa',
    term: 'Rusunawa (Rumah Susun Sederhana Sewa)',
    enName: 'Subsidized Public Rental Housing Flats',
    cat: 'layanan',
    icon: '🏢',
    desc_id: 'Hunian vertikal bertingkat yang dibangun dengan subsidi APBD/APBN untuk disewakan dengan tarif terjangkau kepada masyarakat berpenghasilan rendah (MBR).',
    desc_en: 'Subsidized multi-story public housing apartments developed with state/local funds leased affordably to low-income families and riverbank resettlement communities.',
    gameplay_id: 'Solusi ampuh menata kawasan kumuh pinggir sungai menjadi taman terbuka hijau tanpa menggusur paksa warga miskin.',
    gameplay_en: 'Enables humane slum revitalization along floodways, turning riverbanks into green retention parks without forced displacement.'
  },
  {
    id: 'amdal',
    term: 'AMDAL (Analisis Mengenai Dampak Lingkungan)',
    enName: 'Environmental Impact Assessment (EIA)',
    cat: 'regulasi',
    icon: '🌱',
    desc_id: 'Kajian ilmiah mendalam mengenai dampak penting suatu usaha atau proyek pembangunan terhadap lingkungan hidup sebelum izin operasional diterbitkan.',
    desc_en: 'A rigorous scientific study assessing the environmental, hydrological, and socio-ecological impacts of a proposed development project prior to permit approval.',
    gameplay_id: 'Menegakkan standar AMDAL ketat menjaga kelestarian lingkungan (+Lingkungan), meski terkadang dikeluhkan investor swasta yang ingin izin kilat.',
    gameplay_en: 'Enforcing strict AMDAL compliance preserves urban ecology, despite resistance from commercial developers seeking expedited permits.'
  },
  {
    id: 'wtp',
    term: 'WTP (Wajar Tanpa Pengecualian)',
    enName: 'Unqualified Audit Opinion (Clean Financial Audit)',
    cat: 'regulasi',
    icon: '⭐',
    desc_id: 'Predikat opini audit tertinggi dari BPK yang menyatakan bahwa laporan keuangan pemerintah kota disajikan secara wajar dalam semua hal yang material sesuai Standar Akuntansi.',
    desc_en: 'The highest possible audit opinion issued by the Supreme Audit Agency (BPK), certifying complete transparency and compliance with State Accounting Standards.',
    gameplay_id: 'Syarat utama membuka penghargaan nasional, kenaikan dana insentif fiskal daerah, dan reputasi politik berintegritas tinggi.',
    gameplay_en: 'Crucial requirement to secure national governance awards, central fiscal incentive grants, and a spotless political legacy.'
  },
  {
    id: 'pppk',
    term: 'PPPK (Pegawai Pemerintah Perjanjian Kerja)',
    enName: 'Contract-Based Civil Service Personnel',
    cat: 'lembaga',
    icon: '👥',
    desc_id: 'Aparatur sipil negara yang diangkat berdasarkan perjanjian kerja untuk jangka waktu tertentu dalam rangka mengisi formasi jabatan guru, tenaga medis nakes, dan teknis.',
    desc_en: 'Professional civil servants appointed under fixed-term contractual agreements to fill essential municipal public vacancies in teaching, nursing, and engineering.',
    gameplay_id: 'Mengangkat ribuan tenaga honorer menjadi PPPK memuaskan serikat guru dan nakes (+Kepuasan), namun menambah beban belanja pegawai APBD.',
    gameplay_en: 'Regularizing honorary teachers and nurses into PPPK status pleases labor unions and healthcare workers, while adjusting operational budget expenses.'
  },
  {
    id: 'kek',
    term: 'KEK (Kawasan Ekonomi Khusus)',
    enName: 'Special Economic Zone (SEZ)',
    cat: 'layanan',
    icon: '🏭',
    desc_id: 'Kawasan industri dan teknologi berstatus khusus yang diberikan fasilitas insentif perpajakan, kepabeanan, dan perizinan satu pintu untuk menarik investor multinasional.',
    desc_en: 'Designated technology and industrial zones offering tax holidays, custom exemptions, and streamlined single-window licensing to attract global direct investment.',
    gameplay_id: 'Menarik investasi ratusan triliun rupiah, menciptakan puluhan ribu lapangan kerja baru, dan melipatgandakan PDRB kota.',
    gameplay_en: 'Injects vast private investment, slashes regional unemployment, and multiplies the city\'s gross domestic product (PDRB).'
  },
  {
    id: 'psn',
    term: 'PSN (Proyek Strategis Nasional)',
    enName: 'National Strategic Project (Federal Mega-Project)',
    cat: 'layanan',
    icon: '🚄',
    desc_id: 'Proyek infrastruktur berskala masif yang ditetapkan oleh Pemerintah Pusat yang memiliki urgensi strategis nasional (seperti Jalan Tol Trans, LRT/MRT, Pelabuhan Hub).',
    desc_en: 'Flagship infrastructure mega-projects designated by presidential decree as possessing vital significance to the national economy, funded largely by the central state budget.',
    gameplay_id: 'Membawa proyek PSN ke Nusapura melalui lobi pusat menyulap konektivitas kota dalam sekejap dengan pendanaan APBN penuh.',
    gameplay_en: 'Securing PSN status through central lobbying delivers game-changing mass transit or ring roads funded almost entirely by the national government.'
  },
  {
    id: 'kua_ppas',
    term: 'KUA-PPAS (Kebijakan Umum Anggaran & Prioritas Plafon Anggaran)',
    enName: 'General Budget Policy & Priority Budget Ceilings',
    cat: 'keuangan',
    icon: '📊',
    desc_id: 'Dokumen nota kesepakatan awal antara Walikota dan Pimpinan DPRD yang menetapkan asumsi makroekonomi daerah dan pagu batas belanja sementara untuk tiap dinas sebelum penyusunan Raperda APBD.',
    desc_en: 'The preliminary joint agreement between Mayor and DPRD leadership outlining macroeconomic projections and temporary departmental budget ceilings prior to formal APBD drafting.',
    gameplay_id: 'Menentukan plafon prioritas sektor belanja unggulan (apakah fokus ke infrastruktur fisik, beasiswa pendidikan, atau jaminan kesehatan).',
    gameplay_en: 'Determines the ceiling boundaries for key expenditure sectors before the full municipal budget is enacted.'
  },
  {
    id: 'rpjmd',
    term: 'RPJMD (Rencana Pembangunan Jangka Menengah Daerah)',
    enName: '5-Year Regional Medium-Term Development Plan',
    cat: 'regulasi',
    icon: '📑',
    desc_id: 'Dokumen perencanaan strategis 5 tahunan pemerintah kota yang menjabarkan visi, misi, arah kebijakan, dan target indikator makro (IPM, kemiskinan, pertumbuhan ekonomi) Walikota terpilih.',
    desc_en: 'The master 5-year urban strategic planning blueprint translating the elected Mayor\'s manifesto into statutory targets for poverty alleviation, economic growth, and HDI.',
    gameplay_id: 'Peta jalan utama kinerja 5 tahun; capaian target RPJMD menentukan evaluasi akhir jabatan Walikota di sidang LKPJ dan restu pemilih di Pilkada.',
    gameplay_en: 'The strategic roadmap; achieving target RPJMD milestones dictates end-of-term evaluations, legacy score, and reelection odds.'
  },
  {
    id: 'tapd',
    term: 'TAPD (Tim Anggaran Pemerintah Daerah)',
    enName: 'Regional Government Budget Committee',
    cat: 'lembaga',
    icon: '💼',
    desc_id: 'Tim birokrasi perumus anggaran yang dipimpin oleh Sekretaris Daerah (Sekda) beranggotakan Kepala Bappeda dan BPKAD untuk merancang draf alokasi belanja seluruh dinas kota.',
    desc_en: 'The internal executive budget drafting committee chaired by the Sekda (Municipal Secretary) alongside Planning and Financial heads to formulate draft expenditure allocations.',
    gameplay_id: 'TAPD yang solid dan cermat menyaring usulan pemborosan dinas dan menjaga rasio belanja publik tetap sehat di atas belanja pegawai.',
    gameplay_en: 'A competent TAPD filters wasteful department requests, ensuring capital public investment stays well above administrative overhead.'
  },
  {
    id: 'inspektorat',
    term: 'Inspektorat Daerah & APIP',
    enName: 'Regional Inspectorate & Internal Audit Apparatus',
    cat: 'lembaga',
    icon: '🔍',
    desc_id: 'Aparat Pengawasan Intern Pemerintah (APIP) di tingkat daerah yang bertugas mengaudit kepatuhan seluruh Dinas/OPD, menindak aduan pungli, dan menegakkan sistem integritas internal.',
    desc_en: 'The regional internal government audit agency tasked with auditing department compliance, probing whistleblowing reports, and curbing extortion in municipal permitting.',
    gameplay_id: 'Memperkuat Inspektorat menaikkan Indeks Integritas birokrasi, mencegah kebocoran anggaran, dan menangkal penyelidikan OTT KPK.',
    gameplay_en: 'Empowering the Inspectorate boosts bureaucratic integrity scores, stops budget leakages, and prevents KPK corruption stings.'
  },
  {
    id: 'bpbd',
    term: 'BPBD (Badan Penanggulangan Bencana Daerah)',
    enName: 'Regional Disaster Management Agency',
    cat: 'lembaga',
    icon: '🚒',
    desc_id: 'Lembaga daerah non-struktural yang bertugas memimpin penanggulangan prabencana, tanggap darurat saat bencana terjadi (banjir, gempa, kebakaran), hingga rehabilitasi pascabencana.',
    desc_en: 'The municipal emergency and disaster response command center directing rapid rescue operations, emergency relief distribution, and disaster risk mitigation.',
    gameplay_id: 'Dikerahkan secara cepat di Ruang Komando Krisis menggunakan Belanja Tidak Terduga (BTT) untuk menekan korban jiwa dan kerusakan infrastruktur.',
    gameplay_en: 'Mobilized immediately via the Crisis Command Center using emergency reserves (BTT) to minimize casualties and urban structural damage.'
  },
  {
    id: 'bumd',
    term: 'BUMD (Badan Usaha Milik Daerah)',
    enName: 'Regional State-Owned Enterprise / Municipal Utility',
    cat: 'keuangan',
    icon: '🏢',
    desc_id: 'Badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh Pemerintah Daerah (seperti Perumda Air Minum/PDAM, Bank Daerah, Pasar Niaga, dan Pengelola Transportasi).',
    desc_en: 'Corporations wholly or majority-owned by the municipal government (e.g. municipal water utilities/PDAM, regional banks, municipal markets, public transit operators).',
    gameplay_id: 'BUMD yang dikelola profesional dan bebas titipan politik menyetorkan dividen laba besar untuk melipatgandakan PAD kota.',
    gameplay_en: 'Well-managed, corruption-free BUMD utilities remit substantial profit dividends directly into the city\'s own-source PAD revenues.'
  },
  {
    id: 'interpelasi',
    term: 'Hak Interpelasi & Hak Angket DPRD',
    enName: 'Parliamentary Right of Interpellation & Inquiry',
    cat: 'regulasi',
    icon: '⚖️',
    desc_id: 'Hak istimewa pengawasan dewan legislatif: Hak Interpelasi meminta keterangan resmi Walikota mengenai kebijakan penting, sedangkan Hak Angket melakukan penyelidikan mendalam atas dugaan pelanggaran hukum.',
    desc_en: 'Constitutional oversight powers of the local parliament: Interpellation summons the Mayor to provide official testimony, while Hak Angket conducts formal investigative inquiries.',
    gameplay_id: 'Dipicu jika hubungan dengan fraksi DPRD jatuh drastis atau terjadi skandal tender; dapat berujung pemakzulan (impeachment) jika tidak dinegosiasikan.',
    gameplay_en: 'Triggered when relations with parliamentary factions collapse; can escalate into formal impeachment proceedings if political consensus is lost.'
  },
  {
    id: 'wdp',
    term: 'WDP (Wajar Dengan Pengecualian) & Disclaimer',
    enName: 'Qualified Audit Opinion & Disclaimer of Opinion',
    cat: 'regulasi',
    icon: '⚠️',
    desc_id: 'Predikat opini audit BPK di bawah WTP yang menunjukkan adanya ketidakberesan pembukuan aset, ketidakjelasan pertanggungjawaban kas belanja dinas, atau pembatasan ruang audit.',
    desc_en: 'Sub-par financial audit ratings issued by BPK indicating material accounting discrepancies, untraced asset registers, or restricted audit access in city departments.',
    gameplay_id: 'Mendapat predikat WDP menurunkan reputasi kota, memotong alokasi Dana Insentif Fiskal dari Pusat, dan memicu kecurigaan publik.',
    gameplay_en: 'Receiving a WDP or Disclaimer rating degrades city credit ratings, slashes federal fiscal incentives, and invites harsh public outcry.'
  },
  {
    id: 'spbe',
    term: 'SPBE (Sistem Pemerintahan Berbasis Elektronik)',
    enName: 'Electronic-Based Government System (Digital Smart City)',
    cat: 'layanan',
    icon: '📱',
    desc_id: 'Penyelenggaraan tata kelola pemerintahan yang memanfaatkan teknologi informasi dan komunikasi (seperti Super-App Pelayanan Terpadu, e-Lapor aduan warga, dan e-Perizinan satu pintu).',
    desc_en: 'The digital transformation framework utilizing e-governance platforms, single-window business permitting, civic complaints portals, and smart-city command analytics.',
    gameplay_id: 'Meningkatkan Indeks SPBE mempercepat proses perizinan usaha, memangkas birokrasi lamban, dan mendongkrak kepuasan warga.',
    gameplay_en: 'High SPBE digital ratings streamline business licenses, eliminate red tape delays, and improve overall citizen satisfaction.'
  },
  {
    id: 'pbb',
    term: 'PBB-P2 & BPHTB',
    enName: 'Land & Property Tax (PBB) and Land Acquisition Duty',
    cat: 'keuangan',
    icon: '🏠',
    desc_id: 'Pajak Bumi dan Bangunan Perdesaan & Perkotaan serta Bea Perolehan Hak atas Tanah dan Bangunan, merupakan dua jenis pajak daerah penyumbang terbesar kas murni PAD kota.',
    desc_en: 'Property and real estate transaction taxes collected locally, forming the fundamental pillars of municipal own-source tax revenues.',
    gameplay_id: 'Modernisasi digitalisasi tagihan PBB dan insentif tata ruang mendongkrak realisasi penerimaan kas PAD tahunan.',
    gameplay_en: 'Digitizing property tax collection systems maximizes annual cash inflows into the city treasury without raising tax rates.'
  },
  {
    id: 'ipm',
    term: 'IPM (Indeks Pembangunan Manusia)',
    enName: 'Human Development Index (HDI)',
    cat: 'regulasi',
    icon: '📈',
    desc_id: 'Indikator komposit resmi pengukuran pencapaian pembangunan kualitas hidup manusia berdasarkan 3 dimensi dasar: Umur Panjang & Hidup Sehat, Pengetahuan (Pendidikan), dan Standar Hidup Layak.',
    desc_en: 'The composite index measuring urban human quality of life across three fundamental dimensions: Long & Healthy Life (Health), Knowledge (Education), and Decent Standard of Living.',
    gameplay_id: 'Tolak ukur mahakarya akhir kepemimpinan Walikota. Meningkatkan IPM di atas 80 (Kategori Sangat Tinggi) membuka gelar Walikota Visioner.',
    gameplay_en: 'The ultimate benchmark of mayoral success. Elevating IPM above 80 unlocks legendary visionary mayor achievements.'
  }
];

// ==================== DUAL-LANGUAGE LOCALIZATION DICTIONARY ====================
I18N_DICT = TRANSLATIONS;

// ==================== MASTER COMPREHENSIVE TRANSLATION SYSTEM ====================

const EVENT_TRANSLATIONS = {
  "pol_patronage_apbd_quota": {
    "cat": "Politics",
    "title": "Coalition Demand: APBD Project Quota Fulfillment",
    "text": "The chairman of your governing political coalition visits your private office, demanding a Rp 500B hospital & road procurement quota for party-affiliated contractors as payback for their election endorsement.",
    "choices": [
      {
        "t": "Reject Firmly & Mandate Transparent E-Procurement",
        "d": "Procurement integrity is upheld, though coalition factions threaten to boycott legislative budget hearings.",
        "news": "Mayor mandates strictly open e-procurement, barring partisan project quotas."
      },
      {
        "t": "Accommodate Contract Package for Parliamentary Harmony",
        "d": "Coalition unity is secured and budget passes smoothly, but project quality suffers and graft scrutiny surges.",
        "news": "Coalition party praises Mayor cooperative leadership following speedy budget approval."
      },
      {
        "t": "Compromise: Offer Non-Budget BUMD Oversight Board Seat",
        "d": "Direct budget pressure is diffused, though public enterprise board professionalism is slightly diluted.",
        "news": "City Hall appoints senior coalition member to municipal enterprise oversight board."
      }
    ]
  },
  "fam_scandal_child_flexing": {
    "cat": "Social",
    "title": "Viral Scandal: Mayor's Child Flexing Luxury Vehicle & Breaking Traffic Laws",
    "text": "A 30-second viral clip trends across social media showing your child driving a luxury supercar with modified plates, cutting through dedicated bus lanes and berating traffic officers.",
    "choices": [
      {
        "t": "Public Apology, Impound Vehicle & Enforce Strict Legal Penalty",
        "d": "Citizens applaud equal enforcement of the law, though family harmony experiences heavy strain.",
        "news": "Mayor issues heartfelt public apology over child misconduct and orders strict traffic fines."
      },
      {
        "t": "Defend Child & Blame Opposition Political Slander",
        "d": "Family is shielded, but internet fury boils over and protest hashtags trend nationwide.",
        "news": "Mayor faces fierce public backlash after dismissing viral child video as opposition framing."
      },
      {
        "t": "Deploy City PR Agency & Counter-Narrative Campaign",
        "d": "Viral storm is suppressed from feeds, but municipal public relations expenses swell.",
        "news": "City PR launches intensive road safety campaign to counterbalance viral controversy."
      }
    ]
  },
  "fam_spouse_greenzone_permit": {
    "cat": "Environment",
    "title": "Spouse's Business Permit Dilemma in Protected Green Zone",
    "text": "Your spouse plans to expand the family's eco-resort boutique onto city hills, but the Environmental Agency flags the zone as a vital water catchment and protected green belt.",
    "choices": [
      {
        "t": "Reject Permit to Protect Urban Green Belt & Flood Barriers",
        "d": "Urban flood barriers are preserved and green integrity praised, though spouse feels unsupported.",
        "news": "Mayor strictly denies commercial expansion permits in protected water catchment zones."
      },
      {
        "t": "Issue Special Zoning Discretion with Reforestation Clause",
        "d": "Family enterprise prospers, but environmental NGOs suspect blatant conflict of interest.",
        "news": "Boutique resort permit approval in hilltop green zone sparks protests from conservationists."
      },
      {
        "t": "Relocate Project to Designated Commercial Zone at Own Expense",
        "d": "Ethical middle ground that respects urban zoning, though personal family savings take a hit.",
        "news": "Mayor family business expansion relocated to designated commercial business district."
      }
    ]
  },
  "fam_nepotism_opd_post": {
    "cat": "Civil Service",
    "title": "Bureaucratic Lobby: Brother-in-Law Seeks Revenue Agency Leadership",
    "text": "Your close in-law who serves as a mid-rank civil servant lobbies you over dinner, requesting direct promotion to Head of Regional Revenue Agency without open merit selection.",
    "choices": [
      {
        "t": "Enforce Strict Merit-Based Open Bidding under Civil Service Commission",
        "d": "Civil service meritocracy is reinforced, though family gatherings turn noticeably chilly.",
        "news": "City Hall implements transparent merit-based open competition for all executive posts."
      },
      {
        "t": "Exercise Prerogative to Directly Appoint Relative to Post",
        "d": "Family is pleased and key revenues controlled by loyal kin, but civil servant morale plunges.",
        "news": "Appointment of Mayor close relative to revenue agency draws sharp Ombudsman scrutiny."
      },
      {
        "t": "Assign as Non-Technical Advisory Staff Without Spending Authority",
        "d": "Administrative compromise maintaining family peace without endangering tax governance.",
        "news": "Municipal staff rotation conducted to balance operational stability and governance."
      }
    ]
  },
  "pol_gift_gratification_jet": {
    "cat": "Law & Ethics",
    "title": "Private Jet & Luxury European Vacation Offer from Real Estate Consortium",
    "text": "A mega-development consortium offers your family private jet flights and 5-star Swiss chalets disguised as an 'urban planning benchmarking study trip'.",
    "choices": [
      {
        "t": "Decline & Formally Report to KPK Anti-Corruption Agency",
        "d": "Your ethical stance earns national acclaim, but relations with property tycoons freeze.",
        "news": "Mayor of Nusapura reports luxury private jet benchmarking perks to Anti-Corruption Commission."
      },
      {
        "t": "Quietly Accept the Luxury Family Holiday Trip",
        "d": "Exquisite vacation rejuvenates family spirits, but KPK surveillance risk skyrockets.",
        "news": "Photos of Mayor luxury overseas holiday leak online, sparking funding questions."
      },
      {
        "t": "Politely Decline Privately to Safeguard Investment Climate",
        "d": "Maintains official ethics quietly without alienating major commercial investors.",
        "news": "Mayor focuses weekend agenda on local urban development inspection."
      }
    ]
  },
  "fam_wealth_leak_lhkpn": {
    "cat": "Politics",
    "title": "Asset Leak: Citizens Scrutinize Surging LHKPN Wealth Declarations",
    "text": "An anonymous whistleblower account publishes charts showing your declared family wealth surged 300% since taking office, igniting student protests demanding a public audit.",
    "choices": [
      {
        "t": "Open Private Bank Books & Hold Full Financial Origin Press Briefing",
        "d": "Proves surge originated from legitimate inherited land appreciation; trust is restored.",
        "news": "Mayor transparently discloses family financial records before investigative reporters."
      },
      {
        "t": "Sue Leaker Under Cyber Defamation Laws & Demand Police Arrest",
        "d": "Family is protected from doxxing, but administration is labeled anti-free speech.",
        "news": "Mayor cyber lawsuit against asset whistleblower triggers free-speech backlash."
      },
      {
        "t": "Issue Brief Written Clarification via Official City Spokesperson",
        "d": "Measured response that cools immediate tension though skepticism lingers among critics.",
        "news": "City spokesperson confirms Mayor asset declaration strictly complied with KPK guidelines."
      }
    ]
  },
  "pol_coalition_boycott_audit": {
    "cat": "Infrastructure",
    "title": "Coalition Ultimatum: Demand to Halt Audit of Party-Linked Contractors",
    "text": "The City Inspectorate discovers substandard concrete in 12 bridge projects built by a coalition leader's firm. Party brass threatens to revoke re-election support unless the probe is quashed.",
    "choices": [
      {
        "t": "Push Full Audit & Blacklist Defaulting Contractors",
        "d": "Public safety and structural quality secured; ruling party coalition fractures.",
        "news": "City Inspectorate blacklists defaulting contractors under Mayor strict direct orders."
      },
      {
        "t": "Quash Probe & Grant Quiet Grace Period for Patch Repairs",
        "d": "Coalition backing secured for re-election, but structural collapse risks loom.",
        "news": "Bridge inspection closed; coalition parties unite behind Mayor re-election campaign."
      },
      {
        "t": "Commission Independent Engineering Lab Forensic Assessment",
        "d": "Scientific approach providing irrefutable findings immune to partisan dispute.",
        "news": "Independent engineering experts commissioned to audit municipal infrastructure quality."
      }
    ]
  },
  "fam_illegal_investment_scandal": {
    "cat": "Social",
    "title": "Kin Ensnared in Fraudulent Investment Using Mayor's Name",
    "text": "Your sibling-in-law co-managed an unlicensed credit cooperative that defaulted on Rp 20B in citizen savings, featuring your photo on promotional flyers without consent.",
    "choices": [
      {
        "t": "Dip into Personal Savings to Bail Victims & File Criminal Charges",
        "d": "Victims compensated and justice served, though personal family savings take a heavy blow.",
        "news": "Mayor aids victims of illicit cooperative and insists on strict prosecution of kin."
      },
      {
        "t": "Clarify It Is Purely Private Matter & Disclaim City Liability",
        "d": "Private finances spared, but aggrieved victims stage protests outside City Hall.",
        "news": "Defrauded investors demonstrate outside City Hall demanding mayoral moral accountability."
      },
      {
        "t": "Facilitate Debt Restructuring & Asset Liquidation Mediation",
        "d": "Structured civil mediation aiding asset recovery for victimized citizens.",
        "news": "Cooperatives Department oversees asset recovery negotiations for defrauded citizens."
      }
    ]
  },
  "pol_shadow_campaign_quarry": {
    "cat": "Environment",
    "title": "Shadow Campaign Funding from Illegal Mining Boss Offered to Coalition",
    "text": "An illegal river sand quarry operator offers Rp 2B in covert campaign funding to your coalition party, demanding City Hall halt Satpol PP enforcement raids.",
    "choices": [
      {
        "t": "Reject Fiercely, Impound Heavy Excavators & Seal Illegal Mines",
        "d": "Rivers protected from erosion and flash floods, though party treasurers are furious.",
        "news": "City Enforcement units shut down illegal river sand quarries in major crackdowns."
      },
      {
        "t": "Quietly Channel Covert Funds into Party Campaign Warchest",
        "d": "Political campaign logistics secured, but riverbeds erode and landslide risks climb.",
        "news": "Environmentalists decry unchecked illegal river quarrying and lack of enforcement."
      },
      {
        "t": "Offer Legal Relocation to Designated Mining Zones with Royalties",
        "d": "Transforms wild mining operators into formal local tax and royalty contributors.",
        "news": "City Hall formalizes designated mining zones to boost legitimate municipal revenues."
      }
    ]
  },
  "fam_spouse_burnout_holiday": {
    "cat": "Social",
    "title": "Family Burnout: Spouse Pleads for Quality Time Amidst Budget Crunch",
    "text": "Your spouse breaks down at home, expressing that the children miss your presence due to endless late-night meetings, demanding a 4-day family holiday.",
    "choices": [
      {
        "t": "Take Short Family Retreat & Delegate Routine Meetings to City Secretary",
        "d": "Family harmony restored and stress vanishes, though legislative leaders mock your retreat.",
        "news": "City Secretary presides over municipal sessions while Mayor takes brief family leave."
      },
      {
        "t": "Decline Leave to Power Through Marathon Budget Ratification",
        "d": "Budget approved on schedule, but emotional rift within the family deepens.",
        "news": "Mayor works late into the night with lawmakers to finalize regional budget."
      },
      {
        "t": "Host Family at City Guesthouse to Stay Close While Working",
        "d": "Strives to balance civic duties and family warmth amidst demanding municipal schedules.",
        "news": "Mayor oversees municipal public services while sharing quality family moments."
      }
    ]
  },

  "1": {
    "cat": "Transportation",
    "title": "Public Transit Fleet Modernization",
    "text": "The Department of Transportation proposes replacing aging, breakdown-prone city buses with a modern fleet.",
    "choices": [
      {
        "t": "Procure new electric buses in phases",
        "d": "Significant budget expenditure, but citizens warmly welcome eco-friendly, modern public transit.",
        "news": "Nusapura City Hall officially inaugurates its first electric bus transit fleet."
      },
      {
        "t": "Minor overhaul + spare parts subsidy",
        "d": "Cost-effective short term fix, though maintenance issues will likely resurface in coming months.",
        "news": "City buses receive temporary overhaul; commuters express lingering reliability concerns."
      },
      {
        "t": "Outsource transit routes to private concession",
        "d": "Lightens municipal budget burden, but risks future fare hikes and uncertain service consistency.",
        "news": "Private transit consortium takes over city public bus operations."
      }
    ]
  },
  "2": {
    "cat": "Transportation",
    "title": "Central Intersection Traffic Gridlock",
    "text": "The primary intersection connecting residential sectors to the central business district suffers chronic peak-hour traffic jams.",
    "choices": [
      {
        "t": "Construct modern grade-separated flyover",
        "d": "Capital-intensive megaproject, but provides the most robust long-term traffic relief.",
        "news": "Groundbreaking ceremony marks start of major intersection flyover construction."
      },
      {
        "t": "Optimize smart traffic lights with AI sensors",
        "d": "Low cost and fast implementation, delivering modest congestion reduction.",
        "news": "Smart AI traffic control system deployed at city's busiest intersection."
      },
      {
        "t": "Enforce peak-hour odd-even license plate rules",
        "d": "Zero fiscal cost, but drivers and merchants voice vocal frustration over mobility restrictions.",
        "news": "Odd-even license plate traffic rule takes effect across downtown thoroughfares."
      }
    ]
  },
  "3": {
    "cat": "Education",
    "title": "Public School Facility Disparities",
    "text": "Several public schools in peripheral districts lack functional science laboratories, digital learning tools, and safe roofing.",
    "choices": [
      {
        "t": "Full school rehabilitation budget allocation",
        "d": "Substantial capital investment, dramatically boosting education quality and student welfare.",
        "news": "Comprehensive school renovation program revitalizes 50 suburban public schools."
      },
      {
        "t": "Invite private CSR partnerships for digital labs",
        "d": "Moderate municipal cost; tech companies step in to equip classrooms with digital workstations.",
        "news": "Public-private partnership brings digital computer labs to suburban schools."
      },
      {
        "t": "Reallocate operational surplus from top schools",
        "d": "No added budget impact, but elite inner-city schools and PTAs protest budget redistribution.",
        "news": "Redistribution of school operational grants sparks heated education council debate."
      }
    ]
  },
  "4": {
    "cat": "Education",
    "title": "Merit-Based Higher Education Scholarships",
    "text": "Thousands of underprivileged top-tier high school graduates demand municipal college scholarship aid.",
    "choices": [
      {
        "t": "Launch 'Nusapura Cerdas' University Scholarship Fund",
        "d": "Elevates human capital and public satisfaction, funded through annual educational grants.",
        "news": "Mayor launches 'Nusapura Cerdas' scholarship program for 2,000 university students."
      },
      {
        "t": "Vocational job-training & trade certifications",
        "d": "Cost-efficient program aimed at rapid workforce integration and industrial readiness.",
        "news": "Municipal vocational training center opens high-tech trade certification courses."
      },
      {
        "t": "Negotiate partial tuition discounts with state universities",
        "d": "Zero fiscal expense, but only benefits a narrow fraction of needy students.",
        "news": "City Hall signs tuition waiver agreement with local state universities."
      }
    ]
  },
  "5": {
    "cat": "Healthcare",
    "title": "General Hospital (RSUD) Bed Shortage",
    "text": "The regional general hospital is overwhelmed; emergency patients are left waiting in hallways due to lack of inpatient beds.",
    "choices": [
      {
        "t": "Build a new 8-story hospital wing & ICU ward",
        "d": "Major infrastructure expenditure, permanently solving bed deficits and emergency bottlenecks.",
        "news": "City Hall breaks ground on state-of-the-art 8-story RSUD inpatient wing."
      },
      {
        "t": "Upgrade neighborhood clinics (Puskesmas) to 24/7 care",
        "d": "Smart decentralized approach; relieves main hospital pressure by treating minor cases locally.",
        "news": "Puskesmas 24/7 upgrade initiative successfully diverts non-critical emergency cases."
      },
      {
        "t": "Subsidize private hospital patient beds",
        "d": "Flexible emergency workaround, but incurs recurring monthly subsidy costs.",
        "news": "City contracts private hospitals to absorb overflowing public emergency patients."
      }
    ]
  },
  "101": {
    "cat": "Disaster Management",
    "title": "Chain 1: Downtown Flash Flood Alert",
    "text": "Torrential monsoon rains breach main canals, submerging the downtown shopping district under 50cm of water.",
    "choices": [
      {
        "t": "Deploy emergency pumps & clear canal trash bottlenecks",
        "d": "Rapid emergency relief; costs emergency reserves (BTT) but wins immediate citizen praise.",
        "news": "Mayor personally coordinates emergency pumping operations in flooded commercial hub."
      },
      {
        "t": "Distribute emergency logistics & evaluate master plan",
        "d": "Cautious response; citizens demand permanent structural flood prevention.",
        "news": "Flood victims receive emergency aid as City Hall promises comprehensive drainage review."
      },
      {
        "t": "Engage civic volunteers & private CSR partnerships",
        "d": "Cost-efficient response supported by relief supplies and boats from local entrepreneurs.",
        "news": "Volunteers and local businesses unite to deliver rapid flood relief."
      }
    ]
  },
  "102": {
    "cat": "Civil Protests",
    "title": "Chain 1: Citizen Drainage Protest at City Hall",
    "text": "Residents from flood-prone neighborhoods march to City Hall demanding permanent drainage overhaul and compensation.",
    "choices": [
      {
        "t": "Meet protestors personally & pledge special drainage taskforce",
        "d": "De-escalates public fury; builds trust through transparent civic engagement.",
        "news": "Mayor addresses protesting citizens directly, establishing an Emergency Drainage Taskforce."
      },
      {
        "t": "Deploy Satpol PP security & issue written press statement",
        "d": "Secures government grounds, but damages public sentiment and media image.",
        "news": "Tense standoff at City Hall as security lines redirect marching flood victims."
      },
      {
        "t": "Form Joint Drainage Taskforce with University Experts",
        "d": "Involves student activists and engineering faculties to design comprehensive drainage audits.",
        "news": "Joint academic and civic taskforce formed to audit municipal flood systems."
      }
    ]
  },
  "103": {
    "cat": "Anti-Corruption",
    "title": "Chain 1: Suspicion of Drainage Kickbacks",
    "text": "The Inspectorate discovers substandard concrete and inflated bills in last year's canal widening project.",
    "choices": [
      {
        "t": "Audit Public Works Department & blacklist corrupt contractors",
        "d": "Sends uncompromising anti-graft message; angers entrenched bureaucratic lobbies.",
        "news": "Major graft probe launched into municipal drainage contracts; shady vendors blacklisted."
      },
      {
        "t": "Quiet internal reprimand & mandate structural repairs",
        "d": "Protects bureaucratic stability, but raises persistent corruption risk.",
        "news": "Public Works Department ordered to repair defective canal segments quietly."
      },
      {
        "t": "Request Independent Audit Board (BPK) Comprehensive Probe",
        "d": "Independent oversight uncovers systemic irregularities in drainage budget execution.",
        "news": "Supreme Audit Agency (BPK) deployed for forensic audit of city drainage contracts."
      }
    ]
  },
  "104": {
    "cat": "Law & Justice",
    "title": "Chain 1: Law Enforcement Summons City Officials",
    "text": "State prosecutors summon the Head of Public Works over alleged misappropriation of flood mitigation funds.",
    "choices": [
      {
        "t": "Full judicial transparency & provide all procurement files",
        "d": "Upholds clean governance; temporary political tremor in local parliament.",
        "news": "City Hall hands over complete procurement archives to anti-corruption prosecutors."
      },
      {
        "t": "Provide municipal legal defense team for the agency head",
        "d": "Shields department hierarchy, but invites severe public skepticism and NGO outcry.",
        "news": "City legal counsel assigned to defend Public Works executives in procurement probe."
      },
      {
        "t": "Blacklist Contractors & Seize Performance Bonds for City Treasury",
        "d": "Recovers public funds and sends an uncompromising signal to delinquent vendors.",
        "news": "City Hall blacklists rogue contractors and freezes project performance bonds."
      }
    ]
  },
  "105": {
    "cat": "Anti-Corruption",
    "title": "Chain 1: Drainage Bribery Whistleblower",
    "text": "An anonymous civil servant leaks voice recordings revealing kickback negotiations between legislators and contractors.",
    "choices": [
      {
        "t": "Hand whistleblower evidence to the national anti-graft commission (KPK)",
        "d": "Decisive integrity strike; guarantees clean reputation but alienates compromised factions.",
        "news": "Whistleblower tapes forwarded to KPK; municipal integrity ratings soar."
      },
      {
        "t": "Handle case through internal municipal disciplinary board",
        "d": "Contains political fallout locally, but risks accusations of a cover-up.",
        "news": "City Inspectorate opens internal ethics tribunal regarding drainage bidding leaks."
      },
      {
        "t": "Conduct Sweeping Bureaucracy Reshuffle & Tighten Whistleblowing",
        "d": "Complete overhaul of technical agency officials to eradicate bribery loopholes.",
        "news": "Mayor reshuffles technical agency leadership and bolsters internal oversight."
      }
    ]
  },
  "106": {
    "cat": "Urban Development",
    "title": "Chain 1: Comprehensive Flood Mitigation Masterplan",
    "text": "Consultants present a multi-year masterplan: underground retention basins, retention ponds, and smart telemetry gates.",
    "choices": [
      {
        "t": "Authorize Multi-Year Megaproject Budget with Parliament",
        "d": "Heavy APBD commitment, but permanently ends severe flooding for decades.",
        "news": "City Council approves landmark multi-year Flood-Free Megaproject budget."
      },
      {
        "t": "Implement phased annual maintenance and pump upgrades",
        "d": "Saves capital budget, but leaves the city vulnerable to extreme 50-year rainfall storms.",
        "news": "Phased drainage refurbishment adopted as budget-friendly flood prevention strategy."
      },
      {
        "t": "Enlist National Procurement Agency (LKPP) Direct Supervision",
        "d": "Central agency oversight ensures transparent, tamper-proof tender processes.",
        "news": "National procurement agency deployed to oversee all municipal tenders."
      }
    ]
  },
  "107": {
    "cat": "Urban Development",
    "title": "Chain 1: Flood-Free Metropolis Inauguration",
    "text": "The grand underground water reservoir and automated retention pumping stations are ready for official inauguration.",
    "choices": [
      {
        "t": "Host celebratory civic gala & invite central government dignitaries",
        "d": "Triumphant political legacy; public satisfaction and investor confidence reach peak.",
        "news": "Presidential delegation joins Mayor in cutting ribbon on Nusapura's mega drainage system."
      },
      {
        "t": "Low-key operational test run & divert savings to emergency reserves",
        "d": "Prudent and fiscally conservative; strengthens municipal cash cushion.",
        "news": "Mega drainage infrastructure enters operational service smoothly without lavish fanfare."
      },
      {
        "t": "Adopt Sponge City Framework & Green Retention Bioswales",
        "d": "Integrates green open spaces with natural retention basins for sustainable flood resilience.",
        "news": "Sponge City ecological masterplan implemented in high-risk flood zones."
      }
    ]
  },
  "201": {
    "cat": "Investment & Economy",
    "title": "Chain 2: Tech Consortium Investment Proposal",
    "text": "A global electronics conglomerate explores a $2B investment in Nusapura, requiring special land zoning and tax holidays.",
    "choices": [
      {
        "t": "Grant expedited zoning permits & 3-year local tax relief",
        "d": "Guarantees massive industrial FDI, generating 15,000 new local manufacturing jobs.",
        "news": "Global tech giant commits multi-trillion rupiah industrial investment to Nusapura."
      },
      {
        "t": "Enforce strict environmental safeguards & full tax rates",
        "d": "Protects municipal PAD and ecology, but risks investor relocation to neighboring cities.",
        "news": "City Hall upholds rigorous environmental terms during multinational investment talks."
      },
      {
        "t": "Conditional Approval: Mandatory Green Spaces & Eco Certification",
        "d": "Investors agree to strict sustainable development standards and green buffers.",
        "news": "Industrial consortium commits to green canopy and ecological compliance."
      }
    ]
  },
  "202": {
    "cat": "Housing & Land",
    "title": "Chain 2: Farmland Land Acquisition Dispute",
    "text": "Local farmers in North Nusapura protest against industrial land acquisition for the new tech zone.",
    "choices": [
      {
        "t": "Pay 150% fair market compensation & guarantee family job quotas",
        "d": "Fair and compassionate; resolves land standoff peacefully with high farmer satisfaction.",
        "news": "Win-win agreement reached: farmers receive generous payouts and guaranteed factory jobs."
      },
      {
        "t": "Enforce eminent domain for strategic public interest",
        "d": "Forces project timeline forward, but triggers bitter protests and activist backlash.",
        "news": "City enforces public interest acquisition on northern industrial park parcels."
      },
      {
        "t": "Rezoning Shift: Relocate Industrial Park Away from Customary Lands",
        "d": "Preserves ancestral lands by shifting factory zones to vacant municipal parcels.",
        "news": "City masterplan revised to protect indigenous heritage reserves."
      }
    ]
  },
  "203": {
    "cat": "Public Order",
    "title": "Chain 2: Environmental NGO Blockade",
    "text": "Green activists block construction bulldozers, alleging the industrial park will deplete deep groundwater aquifers.",
    "choices": [
      {
        "t": "Mandate closed-loop water recycling & surface reservoirs",
        "d": "Adds investor compliance costs, but safeguards ground ecology and wins NGO endorsement.",
        "news": "Tech park mandates advanced zero-liquid-discharge water recycling plant."
      },
      {
        "t": "Order Satpol PP to clear access roads and maintain timeline",
        "d": "Keeps construction on schedule, but ignites national environmental press criticism.",
        "news": "Security forces disperse environmental demonstration at industrial park gateway."
      },
      {
        "t": "Appoint Student Delegates & Ecologists to EIA Oversight Council",
        "d": "Civic transparency fosters institutional trust and collaborative monitoring.",
        "news": "Students and environmental experts appointed to environmental impact board."
      }
    ]
  },
  "204": {
    "cat": "Economic Development",
    "title": "Chain 2: Grand Opening of Nusapura Tech Park",
    "text": "The industrial tech zone begins full manufacturing operations, exporting microchips to Southeast Asian markets.",
    "choices": [
      {
        "t": "Inaugurate export terminal & host international trade expo",
        "d": "Transforms Nusapura into a national industrial powerhouse and top investment hub.",
        "news": "Nusapura Tech Industrial Park ships first export cargo; regional economy surges."
      },
      {
        "t": "Channel newly generated tax revenue directly into free education",
        "d": "Maximizes social equity; citizens directly experience economic dividend.",
        "news": "Industrial park tax revenues earmarked for universal student scholarship fund."
      },
      {
        "t": "Establish Specialized Industrial Vocational Training Center",
        "d": "Equips local youth with advanced skills for immediate industrial employment.",
        "news": "New Industrial Vocational Center launched to upskill local workforce."
      }
    ]
  },
  "301": {
    "cat": "Child Health & Stunting",
    "title": "Chain 3: Child Stunting & Malnutrition Audit",
    "text": "Health surveys reveal a 24% child stunting prevalence in coastal fishing villages and urban slums.",
    "choices": [
      {
        "t": "Launch 'Generasi Emas': Free eggs, milk & fortified meals",
        "d": "Targeted nutritional intervention directly cutting stunting rates across high-risk wards.",
        "news": "Mayor launches 'Generasi Emas' nutritional food subsidy for 10,000 toddlers."
      },
      {
        "t": "Distribute stunting guidance booklets to neighborhood clinics",
        "d": "Minimal budget spend, but achieves negligible impact on chronic child malnutrition.",
        "news": "Health Department rolls out nutrition education pamphlets at local clinics."
      },
      {
        "t": "Launch 'Stunting Foster Parent' Civic & Civil Servant Program",
        "d": "Civil servants and business owners sponsor nutritional packages for vulnerable children.",
        "news": "Foster Parent initiative pairs civic sponsors with low-income families."
      }
    ]
  },
  "302": {
    "cat": "Healthcare",
    "title": "Chain 3: Posyandu Digital Monitoring Network",
    "text": "Volunteers at community healthcare posts (Posyandu) request digital scales and smart mobile health tracking apps.",
    "choices": [
      {
        "t": "Equip all 600 Posyandus with IoT digital medical scales",
        "d": "Empowers frontline health cadres; provides real-time malnutrition dashboard to City Hall.",
        "news": "Digital Posyandu network goes live, tracking toddler health metrics across Nusapura."
      },
      {
        "t": "Maintain manual logbooks and annual spot-check visits",
        "d": "Zero tech investment; data remains fragmented and delayed by months.",
        "news": "Community health centers continue manual child growth recording systems."
      },
      {
        "t": "Shift Nutritional Aid to Digital Coupons at Traditional Markets",
        "d": "Eliminates vendor markups while directly empowering local fresh market traders.",
        "news": "Nutrition aid disbursed via digital vouchers redeemable at local markets."
      }
    ]
  },
  "303": {
    "cat": "Public Health",
    "title": "Chain 3: National Zero-Stunting Award",
    "text": "The Ministry of Health nominates Nusapura as the national model city for dramatic stunting reduction.",
    "choices": [
      {
        "t": "Accept national award & boost health cadre honorariums",
        "d": "Rewards hardworking community mothers; inspires grassroots civic pride.",
        "news": "Nusapura wins National Healthcare Trophy for cutting child stunting below 8%."
      },
      {
        "t": "Expand program to include pregnant mother micronutrient support",
        "d": "Institutionalizes prenatal healthcare excellence for the long term.",
        "news": "Mayor pledges permanent prenatal nutritional safety net for all expecting mothers."
      },
      {
        "t": "Allocate Monthly Stipend Bonuses for Community Health Volunteers",
        "d": "Energizes grassroots healthcare workers across all neighborhood posyandu centers.",
        "news": "Monthly stipends allocated for grassroots community health volunteers."
      }
    ]
  },
  "401": {
    "cat": "Waste Management",
    "title": "Chain 4: Municipal Landfill Collapse Crisis",
    "text": "The main municipal landfill (TPA) reaches 110% capacity; surrounding villagers blockade garbage trucks.",
    "choices": [
      {
        "t": "Lease emergency transfer stations & accelerate Waste-to-Energy Plant",
        "d": "Costs emergency funds, but defuses blockade and paves way for modern waste processing.",
        "news": "City Hall deploys interim waste transfer hubs while fast-tracking WTE plant."
      },
      {
        "t": "Offer village cash compensation & deploy Satpol PP escorts",
        "d": "Temporary band-aid; village resentment simmers and landfill remains overfilled.",
        "news": "Compensated villagers allow conditional garbage truck access to overflowing landfill."
      },
      {
        "t": "Mobilize Community Waste Banks & Decentralized Composting",
        "d": "Dramatically cuts waste volume directly at household and neighborhood levels.",
        "news": "Community waste bank movement reduces landfill burden across all districts."
      }
    ]
  },
  "402": {
    "cat": "Clean Energy",
    "title": "Chain 4: Commissioning of Green Waste-to-Energy Plant",
    "text": "The state-of-the-art incinerator and electricity-generating waste plant completes its trial run.",
    "choices": [
      {
        "t": "Sell 15MW green power to state grid (PLN) & earn carbon credits",
        "d": "Converts municipal trash into municipal revenue while eliminating 80% of open dumping.",
        "news": "Nusapura Waste-to-Energy Plant generates 15MW clean electricity for urban grid."
      },
      {
        "t": "Subsidize free electricity for landfill-neighboring villages",
        "d": "Heartfelt community reconciliation; permanently turns former protestors into allies.",
        "news": "Local villagers receive free clean power from new municipal waste-to-energy facility."
      },
      {
        "t": "Recycle Non-Combustible Waste into Free Paving Blocks",
        "d": "Recycled building materials distributed to improve neighborhood alleyways.",
        "news": "Eco-paving blocks produced from recycled waste distributed to neighborhood councils."
      }
    ]
  },
  "501": {
    "cat": "Smart City & Tech",
    "title": "Chain 5: 'NusaPelayanan' Municipal Super-App",
    "text": "The Communication Agency launches a unified digital portal for business licensing, civil registries, and citizen complaints.",
    "choices": [
      {
        "t": "Mandate 100% digital e-Government & eliminate illegal middlemen",
        "d": "Eradicates municipal bribery; citizens complete permits from their smartphones in minutes.",
        "news": "'NusaPelayanan' Super-App eliminates bureaucratic red tape and petty extortion."
      },
      {
        "t": "Gradual voluntary transition with existing paper windows",
        "d": "Slow adoption; traditional bureaucratic bottlenecks and paper processing persist.",
        "news": "City launches digital portal alongside traditional in-person service counters."
      },
      {
        "t": "Integrate 'Report to Mayor' Feature with 24-Hour SLA Guarantee",
        "d": "Agencies must resolve citizen complaints and public service reports within 24 hours.",
        "news": "Direct civic complaint portal guarantees 24-hour agency resolution."
      }
    ]
  },
  "502": {
    "cat": "Smart City & Tech",
    "title": "Chain 5: Ranked #1 National E-Government",
    "text": "The Ministry of Administrative Reform awards Nusapura the highest SPBE Digital Governance Index in Indonesia.",
    "choices": [
      {
        "t": "License open-source system to neighboring regencies",
        "d": "Positions Nusapura as a regional technological leader; boosts inter-city prestige.",
        "news": "Nusapura exports its smart governance architecture to 15 neighboring regencies."
      },
      {
        "t": "Host national smart city summit & attract tech venture capital",
        "d": "Stimulates local hospitality and positions city as a digital startup magnet.",
        "news": "National Smart City Summit convenes in Nusapura, attracting 100 tech startups."
      },
      {
        "t": "Deploy Free Public Wi-Fi & Educational Laptops to Outlying Schools",
        "d": "Bridges the digital divide for students in peripheral and underserved districts.",
        "news": "Free internet and digital devices delivered to suburban public schools."
      }
    ]
  },
  "901": {
    "cat": "Disaster Management",
    "title": "Magnitude 5.8 Tectonic Earthquake Emergency",
    "text": "A shallow offshore earthquake shakes Nusapura, damaging hundreds of homes and coastal port structures.",
    "choices": [
      {
        "t": "Mobilize total emergency reserve (BTT) & dispatch search-and-rescue",
        "d": "Swift, compassionate crisis leadership; saves lives and repairs vital bridges.",
        "news": "Mayor leads 24/7 disaster command center; emergency reconstruction underway."
      },
      {
        "t": "Request central disaster agency (BNPB) emergency intervention",
        "d": "Saves municipal funds, but emergency relief takes several days to arrive.",
        "news": "Central BNPB relief convoy arrives in Nusapura to aid quake-damaged districts."
      },
      {
        "t": "Open Emergency Field Kitchens & Partner with Joint Disaster Command",
        "d": "Coordinated relief post secures food supply and medical staging for affected citizens.",
        "news": "Joint civil-military disaster command mobilizes emergency relief kitchens."
      }
    ]
  },
  "902": {
    "cat": "Culture & Heritage",
    "title": "Ancient Temple Site Discovered in Highway Project",
    "text": "Excavators unearth a 9th-century stone temple complex directly along the planned ring road bypass route.",
    "choices": [
      {
        "t": "Reroute bypass highway & designate archaeological heritage park",
        "d": "Adds construction detour costs, but creates a world-class cultural tourism landmark.",
        "news": "Mayor reroutes municipal highway to preserve newly discovered 9th-century temple."
      },
      {
        "t": "Relocate portable artifacts to museum & continue original highway",
        "d": "Maintains infrastructure schedule, but sparks sharp criticism from historians and UNESCO.",
        "news": "Archaeological artifacts moved to city museum as highway construction resumes."
      },
      {
        "t": "Design Integrated Heritage Park with Scenic Arterial Byway",
        "d": "Preserves archaeological landmarks while creating an iconic cultural tourism destination.",
        "news": "Integrated archaeological heritage park becomes Nusapura's newest cultural landmark."
      }
    ]
  },
  "903": {
    "cat": "Smart City & Tech",
    "title": "UNESCO Smart City Global Laureate",
    "text": "UNESCO announces Nusapura as the recipient of the Global Sustainable Smart City Trophy in Paris.",
    "choices": [
      {
        "t": "Attend ceremony in Paris & present city's green innovation",
        "d": "Elevates international profile; attracts European clean-tech green investments.",
        "news": "Mayor receives UNESCO Smart City Award in Paris, highlighting urban innovations."
      },
      {
        "t": "Accept award remotely & redirect travel budget to citizen social aid",
        "d": "Modest and humble statesmanship; deeply admired by working-class constituents.",
        "news": "Mayor declines overseas trip, reallocating award budget to low-income welfare."
      },
      {
        "t": "Forego Lavish Galas & Channel Smart City Grants Directly to Neighborhoods",
        "d": "Allocates ceremonial budgets toward neighborhood-level computerization and public Wi-Fi.",
        "news": "Mayor redirects award celebration funds directly to grassroots digital kiosks."
      }
    ]
  },
  "904": {
    "cat": "Economic Development",
    "title": "Presidential Working Visit & Strategic Infrastructure Inpres",
    "text": "The President of Indonesia conducts a working inspection in Nusapura, offering Rp 1.5 T in national infrastructure grants.",
    "choices": [
      {
        "t": "Propose Coastal Sea Wall & International Seaport Expansion",
        "d": "Secures massive national co-funding, dramatically boosting maritime logistics capacity.",
        "news": "President approves Rp 1.5 T national grant for Nusapura Seaport expansion."
      },
      {
        "t": "Propose Elevated LRT Rapid Transit & Integrated Station Hub",
        "d": "Unlocks historic public transit transformation fully financed by national treasury.",
        "news": "Presidential decree greenlights national funding for Nusapura LRT network."
      },
      {
        "t": "Prioritize Presidential Grants for Hospital Overhaul & District Schools",
        "d": "Focuses central stimulus on essential public health and education facilities for low-income citizens.",
        "news": "Presidential infrastructure directive prioritizes regional hospitals and public schools."
      }
    ]
  },
  "601": {
    "cat": "Civil Service",
    "title": "Extortion Racket Uncovered in Licensing Agency",
    "text": "An undercover sting catches mid-level officials demanding illegal fees for commercial building permits.",
    "choices": [
      {
        "t": "Dismiss dishonest officials & digitize permit approvals",
        "d": "Restores investor confidence and enforces clean civil service standards.",
        "news": "Mayor dismisses corrupt permit officials; automated digital licensing launched."
      },
      {
        "t": "Transfer officials to administrative posts with written warnings",
        "d": "Prevents administrative friction, but leaves underlying corruption unpunished.",
        "news": "Licensing department reshuffles personnel following internal extortion complaints."
      },
      {
        "t": "Full Audit Across All Technical Agencies & Agency Head Evaluation",
        "d": "Sweeping bureaucratic refreshment to eliminate extortion loopholes.",
        "news": "Comprehensive audit launched across all technical city agencies."
      }
    ]
  },
  "602": {
    "cat": "Public Health",
    "title": "Unannounced Midnight Mayor Inspection at RSUD Hospital",
    "text": "The Mayor arrives unannounced at the regional hospital, finding long patient queues and unattended emergency beds.",
    "choices": [
      {
        "t": "Reprimand hospital director & mandate 15-minute response standard",
        "d": "Demonstrates decisive leadership; medical staff dramatically improve responsiveness.",
        "news": "Mayor conducts midnight inspection at RSUD, demanding immediate triage overhaul."
      },
      {
        "t": "Provide bonus overtime incentives for night-shift nurses",
        "d": "Boosts medical morale and fills nighttime staffing shortages without public conflict.",
        "news": "City Hall approves night-shift hazard pay to improve public hospital coverage."
      },
      {
        "t": "Urge Service Quality Improvements Without Additional Budget",
        "d": "Ceremonial response without tangible facility or personnel upgrades.",
        "news": "Hospital inspection concludes with administrative service guidelines."
      }
    ]
  },
  "603": {
    "cat": "Public Order",
    "title": "Illegal Parking Extortion & Local Gang Clashes",
    "text": "Rival youth organizations clash over lucrative illegal on-street parking turf outside shopping districts.",
    "choices": [
      {
        "t": "Deploy Satpol PP & Police joint raid; install digital parking meters",
        "d": "Eradicates street thuggery and redirects parking revenue into municipal coffers.",
        "news": "Joint police crackdown dismantles illegal parking rackets across commercial avenues."
      },
      {
        "t": "Formally register parking attendants as municipal contractors",
        "d": "Accommodates local youths peacefully, though some informal extortion persists.",
        "news": "City signs partnership with parking cooperatives to formalize street attendants."
      },
      {
        "t": "Refrain from Intervention to Prevent Friction with Local Groups",
        "d": "Illegal parking continues unchecked, escalating citizen frustration.",
        "news": "Unregulated parking fees remain a major grievance for motorists."
      }
    ]
  },
  "604": {
    "cat": "Public Finance & APBD",
    "title": "Audit Finding: Excessive Unspent Budget Surplus (SiLPA)",
    "text": "The Supreme Audit Board (BPK) notes Rp 400 Billion in unspent funds due to slow agency project execution.",
    "choices": [
      {
        "t": "Penalize slow agency heads & fast-track road repair tenders",
        "d": "Accelerates public infrastructure delivery and boosts local economic velocity.",
        "news": "Mayor orders accelerated budget execution for road maintenance and public works."
      },
      {
        "t": "Roll surplus into next year's debt amortization reserve",
        "d": "Prudent fiscal buffer, but delays crucial public infrastructure improvements.",
        "news": "Unspent budget reserves allocated to strengthen municipal fiscal stabilization fund."
      },
      {
        "t": "Roll Surplus into Next Year's Reserves Without Reprimands",
        "d": "Ministry flags city administration for poor budget execution velocity.",
        "news": "National ministry highlights high unspent fiscal surplus in Nusapura."
      }
    ]
  },
  "605": {
    "cat": "Transportation",
    "title": "City Minibus (Angkot) Drivers Strike",
    "text": "Angkot drivers block main thoroughfares, protesting rising fuel costs and competing ride-hailing services.",
    "choices": [
      {
        "t": "Integrate drivers into feeder bus system with fixed monthly salaries",
        "d": "Permanently modernizes transit while guaranteeing fair livelihood for drivers.",
        "news": "City integrates traditional Angkot drivers into municipal feeder network with fixed wages."
      },
      {
        "t": "Provide temporary fuel vouchers & disperse roadblock protests",
        "d": "Restores traffic flow quickly, but fails to address long-term transit viability.",
        "news": "Fuel subsidy vouchers distributed to end citywide minibus strike."
      },
      {
        "t": "Allow Free Market Competition to Resolve Transit Dynamics",
        "d": "Transit driver strike paralyzes daily commuter mobility across town.",
        "news": "Minibus strike temporarily disrupts municipal commuter transit."
      }
    ]
  },
  "606": {
    "cat": "Economic Development",
    "title": "Staple Food Scarcity & Speculative Market Prices",
    "text": "Hoarding by distributors causes rice and cooking oil prices to spike by 30% across traditional wet markets.",
    "choices": [
      {
        "t": "Deploy Cheap Food Market Operations & raid illegal hoarders",
        "d": "Stabilizes food prices immediately and protects low-income family budgets.",
        "news": "City Hall launches subsidized food bazaars; hoarding warehouses raided by police."
      },
      {
        "t": "Coordinate direct farm supplies from neighboring agricultural regencies",
        "d": "Sustainable supply chain remedy, though price normalization takes several weeks.",
        "news": "Nusapura signs direct food supply agreement with neighboring farming districts."
      },
      {
        "t": "Urge Prudent Household Purchasing Without Market Intervention",
        "d": "Households bear the brunt of escalating staple prices without city relief.",
        "news": "Shoppers express frustration over soaring rice prices at public markets."
      }
    ]
  },
  "607": {
    "cat": "Disaster Management",
    "title": "Coastal Tornado Damaged Waterfront Settlements",
    "text": "A severe waterspout strikes coastal fishing settlements, unroofing 120 houses and damaging fishing boats.",
    "choices": [
      {
        "t": "Disburse emergency cash aid (BTT) & rebuild zinc roofs within 48h",
        "d": "Rapid humanitarian relief; earns immense gratitude from coastal families.",
        "news": "Mayor delivers emergency building supplies to tornado-hit coastal villages."
      },
      {
        "t": "Set up temporary evacuation tents & open community soup kitchens",
        "d": "Standard disaster response; meets immediate survival needs within budget limits.",
        "news": "Emergency relief centers established for coastal storm victims."
      },
      {
        "t": "Submit Storm Damage Assistance Claim to Provincial Government",
        "d": "Repair of public facilities is delayed pending provincial grant approvals.",
        "news": "Tornado recovery funding awaits provincial budget disbursement."
      }
    ]
  },
  "608": {
    "cat": "Civil Service",
    "title": "Regularization of Non-Tenured Civil Servants (Honorer)",
    "text": "Thousands of contract teachers and healthcare workers demand conversion to PPPK government employee status.",
    "choices": [
      {
        "t": "Propose maximum PPPK quota to Central Ministry & adjust budget",
        "d": "Greatly improves teacher and nurse welfare; increases annual civil payroll costs.",
        "news": "City Hall opens 2,500 government contract positions for honorer teachers and nurses."
      },
      {
        "t": "Grant regional minimum wage (UMR) parity with contract extensions",
        "d": "Provides fair wage protection while keeping long-term pension liabilities manageable.",
        "news": "Non-tenured municipal staff receive wage hike to match regional minimum standards."
      },
      {
        "t": "Postpone Appointments to Guard Employee Payroll Ceilings",
        "d": "Hundreds of contract teachers and staff stage peaceful demonstration.",
        "news": "Contract civil servants express disappointment over hiring freeze."
      }
    ]
  },
  "609": {
    "cat": "Politics & Governance",
    "title": "DPRD Interpellation Motion on Budget Absorption",
    "text": "Opposition factions in the city parliament submit an interpellation motion challenging municipal project delays.",
    "choices": [
      {
        "t": "Attend plenary session with comprehensive data & transparent defense",
        "d": "Triumph of open accountability; dismantles opposition critiques before the press.",
        "news": "Mayor delivers masterful data-backed presentation at DPRD interpellation hearing."
      },
      {
        "t": "Engage faction leaders in closed-door political negotiations",
        "d": "Neutralizes the impeachment risk privately, but requires strategic political concessions.",
        "news": "Political compromise reached between City Hall and DPRD leadership."
      },
      {
        "t": "Issue Strong Rebuttal via Mass Media & Public Relations",
        "d": "Combative public statements spark intensified feud with city parliament.",
        "news": "Political friction escalates between Mayor and DPRD factions."
      }
    ]
  },
  "610": {
    "cat": "Anti-Corruption",
    "title": "District Head Caught in Red-Handed Bribery Sting",
    "text": "Prosecutors arrest a district head (Camat) red-handed accepting land certification kickbacks.",
    "choices": [
      {
        "t": "Immediately remove official & reform district land procedures",
        "d": "Zero tolerance for graft; restores public trust in local district governance.",
        "news": "Corrupt Camat dismissed immediately; land certification process digitized."
      },
      {
        "t": "Suspend official pending final court ruling & conduct internal review",
        "d": "Follows formal legal protocol, though citizens view it as insufficiently firm.",
        "news": "District official suspended following bribery arrest by law enforcement."
      },
      {
        "t": "Urge Public to Respect Presumption of Innocence",
        "d": "Perceived as indecisive in defending vulnerable victims of land fraud.",
        "news": "Civic groups criticize defensive response to land registration scandal."
      }
    ]
  },
  "611": {
    "cat": "Economic Development",
    "title": "Chili & Shallot Price Inflation Surge",
    "text": "Bad weather triggers a 70% jump in chili prices, driving monthly regional inflation to dangerous levels.",
    "choices": [
      {
        "t": "Distribute 50,000 free chili seedlings for backyard urban farming",
        "d": "Creative grassroots food resilience program enthusiastically adopted by mothers.",
        "news": "'Urban Farming Movement' takes off as City Hall distributes free vegetable seedlings."
      },
      {
        "t": "Subsidize inter-island logistics freight for vegetable wholesalers",
        "d": "Cools wholesale prices quickly at the expense of a modest logistics subsidy.",
        "news": "Freight subsidies stabilize chili and shallot supply in traditional markets."
      },
      {
        "t": "Encourage Home Gardening & Household Spending Restraint",
        "d": "Without concrete supply interventions, residents struggle with food inflation.",
        "news": "Citizens urge concrete price stabilization measures for staple produce."
      }
    ]
  },
  "612": {
    "cat": "Infrastructure",
    "title": "Municipal Stadium & Sports Arena Revitalization",
    "text": "The city's historic football stadium has crumbling stands and outdated floodlights.",
    "choices": [
      {
        "t": "Renovate to FIFA international standards & build public running track",
        "d": "Creates a proud civic sports venue; energizes youth and attracts national matches.",
        "news": "Nusapura City Stadium undergoes major renovation to international standards."
      },
      {
        "t": "Form a public-private concession with the local football club",
        "d": "Club finances stadium upkeep in exchange for commercial naming and retail rights.",
        "news": "Local football club signs commercial management lease for municipal stadium."
      },
      {
        "t": "Defer Stadium Upgrades in Favor of Arterial Roads and Flood Control",
        "d": "Youth and sports communities lament postponement of athletic arena funding.",
        "news": "Sports stadium renovation funds redirected to core infrastructure."
      }
    ]
  },
  "613": {
    "cat": "Education",
    "title": "Public School Zoning (PPDB) Admissions Controversy",
    "text": "Parents protest that the strict residential zoning system denies top academic achievers entry into elite schools.",
    "choices": [
      {
        "t": "Expand academic achievement quota to 30% & upgrade suburban schools",
        "d": "Harmonious compromise: rewards academic excellence while equalizing school standards.",
        "news": "PPDB zoning rules revised to balance neighborhood access and merit achievement."
      },
      {
        "t": "Strictly enforce 100% geographic zoning to eradicate school elitism",
        "d": "Promotes socio-economic integration, but faces vocal demonstrations from middle-class parents.",
        "news": "City Hall upholds pure geographic zoning for state school admissions."
      },
      {
        "t": "Uphold Enrollment Results Without Further Administrative Reviews",
        "d": "Wave of protests erupts outside City Education Agency headquarters.",
        "news": "Parents demonstrate demanding full transparency in school zoning."
      }
    ]
  },
  "614": {
    "cat": "Public Health",
    "title": "Rainy Season Dengue Fever Outbreak",
    "text": "Dengue fever hospitalizations surge across crowded neighborhoods as monsoon puddles foster mosquito breeding.",
    "choices": [
      {
        "t": "Citywide mosquito fogging blitz & mobilize community larva monitors",
        "d": "Halts epidemic spread rapidly; empowers grassroots neighborhood health cadres.",
        "news": "Massive anti-dengue fogging campaign deployed across all 150 sub-districts."
      },
      {
        "t": "Distribute abate powder and mosquito nets to affected households",
        "d": "Low-cost preventive measure; achieves steady reduction in mosquito breeding sites.",
        "news": "Health Department supplies larvicide and mosquito nets to vulnerable wards."
      },
      {
        "t": "Broadcast Hygiene Awareness Advice via Social Media Channels",
        "d": "Sluggish on-the-ground response triggers anxiety in high-density wards.",
        "news": "Residents urge prompt fumigation amidst rising dengue fever cases."
      }
    ]
  },
  "615": {
    "cat": "Environment & Ecology",
    "title": "Industrial Textile Dye Pollution in River",
    "text": "Industrial factories secretly dump untreated purple chemical dye into the city's main river basin.",
    "choices": [
      {
        "t": "Shut down offending factories & mandate centralized treatment plant",
        "d": "Bold ecological enforcement; cleans river basin and protects downstream water intake.",
        "news": "Polluting textile mills sealed by authorities; industrial waste treatment mandated."
      },
      {
        "t": "Issue administrative fines & give 90-day grace period for filter upgrades",
        "d": "Avoids industrial layoffs, but allows continued river contamination for months.",
        "news": "Textile factories fined and given 90-day deadline to install wastewater filters."
      },
      {
        "t": "Hold Closed-Door Mediation Without Issuing Public Sanctions",
        "d": "Environmental organizations stage shoreline protest along polluted river.",
        "news": "Environmental coalitions condemn leniency toward river polluters."
      }
    ]
  },
  "616": {
    "cat": "Bureaucracy & Reform",
    "title": "Launch of Integrated Municipal Super-App",
    "text": "The Communication Agency readies a single smartphone app for citizen ID requests, tax payments, and pothole reports.",
    "choices": [
      {
        "t": "Integrate all municipal agencies & reward fastest response teams",
        "d": "Digital public service innovation earns national praise and cuts red tape.",
        "news": "Super-App 'Nusapura Digital' launched; citizens resolve permits via smartphone."
      },
      {
        "t": "Release beta version for public feedback and security audit",
        "d": "Careful cybersecurity rollout preventing system bugs and user data vulnerabilities.",
        "news": "Beta testing begins for Nusapura's upcoming unified citizen digital services portal."
      },
      {
        "t": "Delay App Launch Due to Staff Readiness Constraints",
        "d": "Public perceives municipal digital innovation as lagging behind peer cities.",
        "news": "Public service super-app launch postponed due to backend readiness."
      }
    ]
  },
  "617": {
    "cat": "Social Welfare",
    "title": "Town Square Street Vendor (PKL) Relocation",
    "text": "Unregulated street food stalls choke the central town square pedestrian lanes and cause messy litter.",
    "choices": [
      {
        "t": "Build an attractive modern culinary center with subsidized rent",
        "d": "Vibrant win-win solution: organizes street vendors into a bustling tourist hotspot.",
        "news": "Mayor opens Modern Culinary Plaza to relocate town square street vendors."
      },
      {
        "t": "Enforce strict Satpol PP clearance to restore open green park",
        "d": "Restores pristine civic square, but triggers outcry and loss of vendor livelihood.",
        "news": "Satpol PP clears illegal street stalls from central civic square."
      },
      {
        "t": "Forcible Eviction Without Providing Designated Relocation Stalls",
        "d": "Clashes erupt between municipal police and informal street vendors.",
        "news": "Vendor clearance operation at town square descends into commotion."
      }
    ]
  },
  "618": {
    "cat": "Tourism & Hospitality",
    "title": "Archipelago Cultural & Culinary Festival",
    "text": "Tourism board suggests hosting a 3-day international food and traditional arts carnival to spur economic growth.",
    "choices": [
      {
        "t": "Sponsor major international festival with national TV broadcasting",
        "d": "Fills hotels and restaurants to capacity; firmly puts city on the global tourism map.",
        "news": "Nusapura Cultural Carnival draws 200,000 domestic and foreign tourists."
      },
      {
        "t": "Organize local community craft fair on a modest budget",
        "d": "Warm neighborhood celebration with zero budget strain and modest economic impact.",
        "news": "Local artisan craft and food fair opens at community cultural park."
      },
      {
        "t": "Host Modest Commemoration in City Hall Auditorium",
        "d": "Negligible economic spillover and muted reception from local artists.",
        "news": "Cultural heritage day celebrated with modest official ceremony."
      }
    ]
  },
  "619": {
    "cat": "Public Safety & Police",
    "title": "Street Lighting Program: Bright Streets, Crime-Free",
    "text": "Dark suburban backstreets suffer a wave of nighttime motorcycle robberies and phone snatching.",
    "choices": [
      {
        "t": "Install 5,000 smart solar LED streetlights across dark alleys",
        "d": "Dramatically cuts nighttime street crime; residents feel safe walking after dark.",
        "news": "'Bright City' initiative illuminates 5,000 dark suburban alleys and roads."
      },
      {
        "t": "Increase nighttime joint police and Satpol PP motorized patrols",
        "d": "Deterrence via visible law enforcement presence without heavy capital investment.",
        "news": "Night patrols intensified in suburban sectors to deter motorcycle theft."
      },
      {
        "t": "Advise Neighborhoods to Self-Fund Alleyway Lighting",
        "d": "Residents feel nighttime safety concerns are overlooked by authorities.",
        "news": "Suburban neighborhoods voice concerns over dark street alleys."
      }
    ]
  },
  "620": {
    "cat": "Anti-Corruption",
    "title": "Open Bidding Merit Selection for Agency Heads",
    "text": "Key department head positions are vacant; political brokers push for patronage appointments.",
    "choices": [
      {
        "t": "Enforce 100% merit-based open competition & public assessment",
        "d": "Appoints top-tier technocrats; breaks political cartel influence over bureaucracy.",
        "news": "Mayor appoints technocratic agency heads via transparent open merit bidding."
      },
      {
        "t": "Balance merit candidates with coalition party recommendations",
        "d": "Maintains legislative harmony, but compromises optimal managerial competence.",
        "news": "New cabinet directors sworn in with balanced political and professional backgrounds."
      },
      {
        "t": "Exercise Mayoral Prerogative to Appoint Close Political Allies",
        "d": "Opposition factions allege cronyism in senior executive appointments.",
        "news": "Appointment of new agency heads scrutinized by opposition critics."
      }
    ]
  },
  "621": {
    "cat": "Infrastructure",
    "title": "Disability-Friendly Sidewalks & Pedestrian Zones",
    "text": "Disabled citizen advocacy groups appeal for tactile paving and wheelchair ramps along commercial boulevards.",
    "choices": [
      {
        "t": "Rebuild 20 km of downtown sidewalks with universal accessibility",
        "d": "Transformative urban beautification; city sets national disability inclusion benchmark.",
        "news": "Downtown pedestrian boulevard converted into barrier-free accessible promenade."
      },
      {
        "t": "Install ramps at government office entrances only",
        "d": "Minimal compliance fix; leaves commercial street mobility hazardous for disabled citizens.",
        "news": "Accessibility ramps added to municipal government building entrances."
      },
      {
        "t": "Defer Sidewalk Construction to Expedite Road Widening",
        "d": "Pedestrian advocates criticize prioritization of cars over walkability.",
        "news": "Urban activists criticize delay in pedestrian walkway investments."
      }
    ]
  },
  "622": {
    "cat": "Waste Management",
    "title": "Landfill Capacity Crisis & Waste-to-Energy Initiative",
    "text": "The city dumps 1,200 tons of waste daily; the existing open landfill will overflow within 6 months.",
    "choices": [
      {
        "t": "Partner with foreign green-tech firm for Waste-to-Energy Plant",
        "d": "Long-term zero-waste solution generating clean electricity from urban refuse.",
        "news": "City signs international agreement for modern Waste-to-Energy thermal plant."
      },
      {
        "t": "Acquire adjacent rural acreage to expand open landfill footprint",
        "d": "Quick emergency capacity, but provokes nearby village protests and bad odors.",
        "news": "City purchases additional land parcel to extend municipal landfill lifespan."
      },
      {
        "t": "Enforce Mandatory Sorting Without Providing Collection Bins",
        "d": "Uncollected trash accumulates at neighborhood transfer hubs.",
        "news": "Piles of uncollected waste draw complaints in suburban districts."
      }
    ]
  },
  "623": {
    "cat": "Education",
    "title": "Free Vocational Coding & Tech Lab Initiative",
    "text": "Vocational high school (SMK) graduates struggle to find jobs due to outdated curriculum.",
    "choices": [
      {
        "t": "Build 10 modern AI & Software Development Labs in vocational schools",
        "d": "Equips youth with high-income tech skills; tech employers queue to hire graduates.",
        "news": "Vocational schools receive state-of-the-art software coding and AI labs."
      },
      {
        "t": "Offer basic Microsoft Office & digital literacy workshops",
        "d": "Budget-friendly program providing basic administrative skill improvements.",
        "news": "Digital literacy certificate workshops launched for vocational students."
      },
      {
        "t": "Rely on Donated Used Computers from Private Corporations",
        "d": "Outdated equipment struggles to meet modern digital curricula standards.",
        "news": "Public schools receive batch of refurbished corporate computers."
      }
    ]
  },
  "624": {
    "cat": "Disaster Management",
    "title": "Severe Slum Fire Leaves 300 Families Homeless",
    "text": "An electrical short circuit ignites a massive blaze in a dense riverside settlement.",
    "choices": [
      {
        "t": "Provide emergency shelter & fast-track subsidized social housing",
        "d": "Transformative humanitarian leadership; permanently relocates victims to safe apartments.",
        "news": "Fire victims provided transitional housing with subsidized flats allocation."
      },
      {
        "t": "Distribute emergency cash compensation & permit on-site rebuilding",
        "d": "Cheap and quick relief, but leaves fire-hazard structural density unresolved.",
        "news": "Emergency building materials distributed to riverside fire victims."
      },
      {
        "t": "Delegate Disaster Response to Provincial Authorities & Volunteers",
        "d": "Emergency relief packages delayed in reaching displaced fire victims.",
        "news": "Fire disaster victims await expedited emergency aid from city."
      }
    ]
  },
  "625": {
    "cat": "Public Safety & Police",
    "title": "Youth Motorcycle Gangs & Midnight Curfew",
    "text": "Juvenile gangs wielding sharp weapons engage in late-night clashes, terrifying shopkeepers.",
    "choices": [
      {
        "t": "Implement 10 PM youth curfew, parental counseling & boxing academies",
        "d": "Combines firm law enforcement with constructive youth athletic development.",
        "news": "City enforces juvenile curfew while opening free martial arts youth centers."
      },
      {
        "t": "Enforce strict police mass detention & legal prosecution",
        "d": "Suppresses gang activity by force; raises concerns over minor criminalization.",
        "news": "Police detain 60 youth gang members during intensive midnight dragnet."
      },
      {
        "t": "Delegate Night Security Exclusively to Regional Police Patrols",
        "d": "Motorists and night commuters continue to feel unsafe on dark highways.",
        "news": "Civic groups urge intensified patrols against midnight street crime."
      }
    ]
  },
  "626": {
    "cat": "Economic Development",
    "title": "Subsidized 3kg LPG Gas Shortage & Long Queues",
    "text": "Restaurants and laundromats illegally hoard subsidized 3kg LPG cylinders, causing poor families to queue for hours.",
    "choices": [
      {
        "t": "Deploy digital rationing cards & raid non-eligible commercial hoarders",
        "d": "Guarantees low-income families get subsidized gas; shuts down commercial hoarding.",
        "news": "Digital LPG distribution card enforced; commercial businesses banned from 3kg gas."
      },
      {
        "t": "Request 20% quota increase from state energy firm Pertamina",
        "d": "Increases overall supply, though leakage to unauthorized businesses may continue.",
        "news": "Pertamina delivers additional 30,000 LPG cylinders to ease market shortage."
      },
      {
        "t": "Urge Middle-Class Households to Switch to Non-Subsidized LPG",
        "d": "Advisory campaign fails to halt panic buying of subsidized canisters.",
        "news": "Long queues for subsidized cooking gas persist at local supply hubs."
      }
    ]
  },
  "627": {
    "cat": "Urban Development",
    "title": "Traditional Market vs Modern Supermarket Land Row",
    "text": "A retail conglomerate applies to build a mega-hypermarket right next to a historic traditional market.",
    "choices": [
      {
        "t": "Reject permit & invest APBD funds to modernize the traditional market",
        "d": "Protects hundreds of small market vendors and preserves vibrant local commerce.",
        "news": "Mayor protects traditional vendors by rejecting adjacent hypermarket permit."
      },
      {
        "t": "Approve hypermarket with 40% shelf quota for local SME goods",
        "d": "Modern retail investment proceeds with guaranteed marketing space for local makers.",
        "news": "Hypermarket approved with strict requirement to sell local MSME products."
      },
      {
        "t": "Grant Unrestricted Retail Chain Permits Without Distance Zoning",
        "d": "Traditional market traders march on City Hall to reject permit approvals.",
        "news": "Market stall owners protest rapid expansion of corporate mini-marts."
      }
    ]
  },
  "628": {
    "cat": "Cybersecurity & Public Data",
    "title": "Suspected Civil Registry Server Data Breach",
    "text": "Dark web forums claim citizen ID and phone numbers from the municipal database are being sold.",
    "choices": [
      {
        "t": "Hire top white-hat cybersecurity firm & migrate to encrypted cloud",
        "d": "Restores robust digital security; prevents identity theft and wins digital trust.",
        "news": "City Hall upgrades municipal database security with end-to-end encryption."
      },
      {
        "t": "Issue press release denying breach & conduct routine internal review",
        "d": "Prevents immediate panic, but leaves technical security vulnerabilities unpatched.",
        "news": "Diskominfo issues statement assuring citizen data integrity remains secure."
      },
      {
        "t": "Deny Data Breach Rumors Without Presenting Technical Audit",
        "d": "Hashtag #CyberVulnerableCity trends online, stoking privacy fears.",
        "news": "Tech netizens criticize lack of transparent municipal cybersecurity audits."
      }
    ]
  },
  "629": {
    "cat": "Transportation",
    "title": "Minibus Drivers Block Roads Opposing Electric Buses",
    "text": "Angkot drivers park their vehicles across arterial roads, demanding the cancellation of the new electric BRT line.",
    "choices": [
      {
        "t": "Offer drivers free retraining & guaranteed employment as BRT drivers",
        "d": "Resolves labor friction with dignity; transitions traditional drivers into modern jobs.",
        "news": "Angkot operators welcomed as salaried drivers in municipal electric bus fleet."
      },
      {
        "t": "Reroute electric BRT lines away from traditional Angkot paths",
        "d": "Compromise that reduces transit efficiency and fragments the public transit map.",
        "news": "BRT routes modified to avoid overlapping with traditional minibus corridors."
      },
      {
        "t": "Enforce Strict Traffic Clearances Without Hosting Driver Dialogue",
        "d": "Tensions escalate between transport regulators and protesting drivers.",
        "news": "Transit strike creates severe gridlock across downtown commercial avenues."
      }
    ]
  },
  "630": {
    "cat": "Civil Service",
    "title": "Appointed Contract Teachers Await Official Decrees",
    "text": "800 teachers who passed national contract exams have waited 6 months for official mayoral decrees (SK).",
    "choices": [
      {
        "t": "Sign all official appointment decrees immediately & disburse backpay",
        "d": "Inspires immense gratitude among educators; eliminates administrative delays.",
        "news": "Mayor signs appointment decrees for 800 contract teachers in festive ceremony."
      },
      {
        "t": "Await central ministry budget confirmation before signing",
        "d": "Cautious bureaucratic approach; teachers continue waiting without legal certainty.",
        "news": "Teacher contract decree issuance postponed pending central budget alignment."
      },
      {
        "t": "Freeze Teacher Appointments Citing Municipal Fiscal Limits",
        "d": "Contract educators stage overnight vigil in front of the Mayoral office.",
        "news": "Honorary teachers demonstrate demanding civil service appointments."
      }
    ]
  },
  "631": {
    "cat": "Public Safety & Police",
    "title": "Football Derby Supporter Clash at Stadium",
    "text": "Rival football fans clash outside the stadium, smashing shopfront windows and burning vehicles.",
    "choices": [
      {
        "t": "Mediate supporter peace pact & install biometric stadium turnstiles",
        "d": "Reconciles fan groups permanently; upgrades stadium crowd security to international standards.",
        "news": "Historic peace accord signed between rival football fan clubs at City Hall."
      },
      {
        "t": "Ban spectator attendance for remainder of the season",
        "d": "Prevents immediate violence, but causes major financial losses for the club and merchants.",
        "news": "Matches ordered behind closed doors following derby stadium unrest."
      },
      {
        "t": "Urge Consumers to Boycott Expensive Meat Without City Intervention",
        "d": "Sluggish response allows staple price gouging to persist before festive holidays.",
        "news": "Soaring meat prices ahead of festive holidays pinch household budgets."
      }
    ]
  },
  "632": {
    "cat": "Culture & Heritage",
    "title": "Ancient Temple Relics Unearthed during Toll Road Works",
    "text": "Construction crews dig up ornate stone reliefs and ancient temple foundations on the toll road alignment.",
    "choices": [
      {
        "t": "Halt excavation & redesign road into cultural heritage corridor",
        "d": "Protects priceless national heritage; creates cultural tourism asset.",
        "news": "Toll road design modified to protect newly discovered ancient temple site."
      },
      {
        "t": "Extract artifacts to museum and resume road paving immediately",
        "d": "Maintains highway deadline, but draws protests from archaeologists and cultural elders.",
        "news": "Archaeological artifacts salvaged as toll road construction proceeds."
      },
      {
        "t": "Limit Renovations to Emergency Roof Repairs and Cleaning",
        "d": "Substandard infrastructure dampens traditional market customer footfall.",
        "news": "Traditional market vendors urge comprehensive facility modernization."
      }
    ]
  },
  "633": {
    "cat": "Healthcare",
    "title": "National Health Insurance (BPJS) Claim Arrears at RSUD",
    "text": "Delayed central BPJS insurance payouts threaten to disrupt medicine purchases at the public hospital.",
    "choices": [
      {
        "t": "Provide emergency APBD bridging loan to ensure medicine supplies",
        "d": "Ensures uninterrupted patient care and hospital operations without disruption.",
        "news": "City Hall provides emergency bridging fund for hospital medicine inventory."
      },
      {
        "t": "Ration elective surgeries until central payments are cleared",
        "d": "Maintains municipal cash reserves, but frustrates patients facing surgical delays.",
        "news": "Public hospital reschedules elective procedures amid national insurance delays."
      },
      {
        "t": "Rely on Conventional Trash Hauling to Saturated Regional Landfills",
        "d": "Landfill saturation crisis looms without long-term waste treatment facilities.",
        "news": "Mounting waste volumes threaten to overwhelm central city landfill."
      }
    ]
  },
  "634": {
    "cat": "Social Welfare",
    "title": "Rampant Online Gambling & Illegal Loan Sharks in Wards",
    "text": "Low-income neighborhoods report family breakdowns and bankruptcies due to predatory apps and online gambling.",
    "choices": [
      {
        "t": "Launch zero-interest micro-credit 'Kredit Nusapura Bangkit' & digital taskforce",
        "d": "Empowers small traders with safe capital; drives loan sharks out of communities.",
        "news": "City launches zero-interest microloans to combat predatory illegal loan apps."
      },
      {
        "t": "Organize anti-gambling sermon campaigns at local mosques & churches",
        "d": "Moral education campaign that raises awareness with negligible budget outlay.",
        "news": "Community religious leaders partner with City Hall to preach against illegal betting."
      },
      {
        "t": "Offer Free Public Transportation Only for Elementary Pupils",
        "d": "Senior high and vocational students continue to rely on motorbikes.",
        "news": "Free bus trial restricted to elementary school pupils."
      }
    ]
  },
  "635": {
    "cat": "Environment & Ecology",
    "title": "Inter-Regional Landfill Waste Dispute",
    "text": "The neighboring regency threatens to close its border to Nusapura's waste trucks unless tipping fees double.",
    "choices": [
      {
        "t": "Negotiate fair tipping fee & fast-track internal recycling plants",
        "d": "Maintains inter-governmental harmony while securing long-term waste autonomy.",
        "news": "Inter-regional waste agreement signed with commitment to local recycling."
      },
      {
        "t": "Reject demand & search for new municipal disposal sites",
        "d": "Saves tipping fee funds, but risks uncollected garbage piling up in city streets.",
        "news": "City explores alternative waste disposal sites following tariff deadlock."
      },
      {
        "t": "Encourage Independent Deep Wells for Disrupted Water Customers",
        "d": "Clean water scarcity spurs protests from low-income apartment dwellers.",
        "news": "Suburban residents voice frustration over persistent tap water outages."
      }
    ]
  },
  "636": {
    "cat": "Investment & Environment",
    "title": "EV Battery Smelter Dilemma: $800M FDI vs Groundwater Strain",
    "text": "A foreign consortium offers $800M to build an EV battery manufacturing plant, but requires 500,000 liters of deep groundwater daily.",
    "choices": [
      {
        "t": "Approve permit requiring mandatory seawater desalination plant",
        "d": "Secures massive manufacturing investment while 100% protecting citizen water tables.",
        "news": "EV battery mega-factory approved with mandatory desalination plant commitment."
      },
      {
        "t": "Reject project to safeguard regional water aquifers",
        "d": "Prioritizes environmental safety above all; misses out on thousands of factory jobs.",
        "news": "Mayor rejects industrial mega-smelter to protect citizen water resources."
      },
      {
        "t": "Reject Smelter Investment to Fully Safeguard Water Table",
        "d": "Preserves ecology but forfeits massive tax revenues and manufacturing jobs.",
        "news": "City declines mega-smelter permit to safeguard regional water aquifers."
      }
    ]
  },
  "637": {
    "cat": "Bureaucracy & Economy",
    "title": "Unexpected Fiscal Deficit: Social Aid vs Civil Perks vs Bank Loan",
    "text": "National revenue-sharing cuts leave a Rp 300 Billion deficit in the municipal revised budget.",
    "choices": [
      {
        "t": "Cut bureaucrat travel & official car allowances by 40%",
        "d": "Prudent and morally upright; protects poverty assistance while streamlining bureaucracy.",
        "news": "Mayor slashes official travel and luxury perks to protect citizen welfare budget."
      },
      {
        "t": "Take a low-interest regional infrastructure loan from state bank",
        "d": "Maintains all social programs and development projects without budget cuts.",
        "news": "City Council approves municipal loan to bridge temporary fiscal revenue gap."
      },
      {
        "t": "Borrow Bank Development Loans to Bridge Sudden Budget Shortfalls",
        "d": "Maintains public services and civil service pay at the cost of future debt.",
        "news": "City Hall bridges deficit with long-term commercial bank borrowing."
      }
    ]
  },
  "638": {
    "cat": "Law & Politics",
    "title": "Hospital Procurement Scandal Implicating Coalition Chief",
    "text": "Anti-graft investigators find inflated ventilator tenders linked to the chairman of your primary coalition party.",
    "choices": [
      {
        "t": "Support full law enforcement prosecution regardless of political ties",
        "d": "Exemplary integrity; sparks political revenge in parliament but wins immense civic honor.",
        "news": "Mayor supports unhindered graft investigation into party chairman's ventilator deal."
      },
      {
        "t": "Advocate for restitution of state losses to avoid public trial",
        "d": "Recovers funds quietly and keeps parliamentary coalition intact; damages moral standing.",
        "news": "Disputed medical procurement funds returned to state coffers following internal audit."
      },
      {
        "t": "Form Joint Special Committee with DPRD to Conduct Internal Inquiries",
        "d": "Diplomatic approach, though public views it as a political compromise.",
        "news": "City Council forms joint investigative committee on hospital procurement."
      }
    ]
  },
  "639": {
    "cat": "Social & Disaster Relief",
    "title": "Riverside Slum Upgrading: Relocation vs In-Situ Social Housing",
    "text": "Slums along the flood-prone riverbank suffer chronic inundation; spatial planners propose clearing the embankment.",
    "choices": [
      {
        "t": "Build low-cost riverside vertical housing (Kampung Susun) on site",
        "d": "Humane urban planning; keeps residents near their livelihoods without forced displacement.",
        "news": "Innovative 'Kampung Susun' social housing project launched for riverside residents."
      },
      {
        "t": "Relocate families to suburban apartments with 1-year free rent",
        "d": "Fully clears the floodway for widening; some families complain about transport distance.",
        "news": "Riverside families relocated to new subsidized apartments in suburban district."
      },
      {
        "t": "Build Reinforced Embankments While Allowing Settlements to Remain",
        "d": "Avoids evictions but riverbanks remain exposed to extreme flood crests.",
        "news": "Reinforced retaining walls constructed along high-density riverbanks."
      }
    ]
  },
  "640": {
    "cat": "Urban Culture & Heritage",
    "title": "Grand Market Revitalization: Modern 15-Story Mall vs Heritage Bazaar",
    "text": "Developers propose replacing the century-old market with a glass high-rise shopping mall.",
    "choices": [
      {
        "t": "Renovate heritage architecture using APBD & preserve traditional stalls",
        "d": "Preserves historical soul of the city and guarantees affordable vendor livelihoods.",
        "news": "Historic Central Market to undergo authentic heritage restoration."
      },
      {
        "t": "Approve mixed-use mall with dedicated basement for traditional vendors",
        "d": "Major private tax injection, but traditional vendors fear higher maintenance fees.",
        "news": "Modern commercial center approved with integrated traditional vendor arcade."
      },
      {
        "t": "Postpone Market Redevelopment & Carry Out Basic Repairs Only",
        "d": "Preserves heritage ambiance but market facilities remain worn and crowded.",
        "news": "City Hall defers grand market overhaul in favor of routine upkeep."
      }
    ]
  },
  "641": {
    "cat": "Coastal Management & Disaster",
    "title": "Coastal Tidal Flooding: Giant Sea Wall vs Traditional Fishermen",
    "text": "Rising sea levels threaten coastal districts; engineers propose a $200M offshore barrier.",
    "choices": [
      {
        "t": "Build hybrid mangrove green barrier & elevated coastal fishing harbor",
        "d": "Eco-friendly, cost-effective coastal resilience that enhances fisherman catches.",
        "news": "Living mangrove green wall and modernized fishing harbor project initiated."
      },
      {
        "t": "Seek central government funding for concrete Giant Sea Wall",
        "d": "Massive coastal engineering protection, but alters coastal marine ecosystems.",
        "news": "City lobbies central ministries for massive coastal sea wall project."
      },
      {
        "t": "Construct Coastal Mangrove Belts & Decentralized Bamboo Breakwaters",
        "d": "Eco-friendly, budget-conscious coastal defense supporting traditional fishermen.",
        "news": "Mangrove restoration and bamboo breakwaters shield coastal fishing hamlets."
      }
    ]
  },
  "642": {
    "cat": "Environment & Municipal Budget",
    "title": "Landfill Crisis: Modern Waste Incinerator vs Waste Bank Recycling",
    "text": "City waste volume climbs to 1,500 tons/day; neighborhood waste banks demand municipal subsidies.",
    "choices": [
      {
        "t": "Combine high-tech Waste-to-Energy incinerator with community recycling hubs",
        "d": "Comprehensive modern waste management reducing landfill deposits by 90%.",
        "news": "Integrated waste management strategy combines modern WTE with local waste banks."
      },
      {
        "t": "Subsidize 500 community waste banks with circular economy grants",
        "d": "Empowers grassroots neighborhood communities and fosters recycling habits.",
        "news": "Community waste bank grants expanded to spur grassroots circular economy."
      },
      {
        "t": "Procure Land for New Sanitary Landfill Extension Outside the City",
        "d": "Reliable capacity expansion, though suburban residents oppose new waste sites.",
        "news": "City acquires rural acreage to expand regional sanitary landfill."
      }
    ]
  },
  "643": {
    "cat": "Law & Social Order",
    "title": "Red-Light District Closure & Economic Transition",
    "text": "Religious leaders urge closure of an informal red-light district, while social workers worry about displaced workers.",
    "choices": [
      {
        "t": "Close complex, provide vocational retraining & convert site to Islamic center/park",
        "d": "Peaceful, compassionate closure providing real alternative livelihoods for women.",
        "news": "Notorious red-light area transformed into green family park and vocational center."
      },
      {
        "t": "Conduct forceful Satpol PP raid and demolition without social assistance",
        "d": "Swift operational closure, but risks scattering unregulated sex work across city alleys.",
        "news": "Security forces shut down informal nightlife complex following municipal order."
      },
      {
        "t": "Issue Curfew Regulations & Conduct Joint Policing Patrols",
        "d": "Curbs vice and nocturnal disturbances while allowing legal businesses to operate.",
        "news": "Midnight curfew and joint patrols restore order in entertainment district."
      }
    ]
  },
  "644": {
    "cat": "Public Services & Utilities",
    "title": "Municipal Water (PDAM) 45% Pipe Leakage & Tariff Dilemma",
    "text": "Aging Dutch-era water pipes leak 45% of treated drinking water before reaching household taps.",
    "choices": [
      {
        "t": "Digitalize pipe network & replace pipes using capital injection",
        "d": "Drastically cuts water loss, guarantees 24-hour clean water for poor households.",
        "news": "City injects capital into PDAM to replace decaying municipal water mains."
      },
      {
        "t": "Raise water tariffs by 35% to fund pipe repairs from user fees",
        "d": "Repairs funded without draining APBD, but sparks anger among working-class customers.",
        "news": "PDAM announces tariff adjustment to finance distribution network modernization."
      },
      {
        "t": "Seek Central Ministry Grant & Perform Phased Pipeline Rehabilitation",
        "d": "Reduces city fiscal strain, though full pipe repairs will take three years.",
        "news": "Central ministry allocates grant to overhaul aging municipal water mains."
      }
    ]
  },
  "645": {
    "cat": "Smart City & Digital Privacy",
    "title": "AI Facial Recognition Surveillance vs Citizen Privacy Rights",
    "text": "Police propose connecting 500 AI facial-recognition cameras to the City Command Center to track criminals.",
    "choices": [
      {
        "t": "Deploy cameras with strict privacy ordinance and independent oversight",
        "d": "Balances cutting-edge crime prevention with robust civil liberties protections.",
        "news": "Smart surveillance cameras installed under strict citizen privacy safeguard laws."
      },
      {
        "t": "Reject facial recognition to uphold strict digital privacy standards",
        "d": "Lauded by human rights defenders, though police rely on manual detective work.",
        "news": "City Hall declines facial recognition software, citing citizen privacy rights."
      },
      {
        "t": "Deploy Surveillance Cameras Exclusively at High-Crime Intersections",
        "d": "Targeted deterrent in crime hotspots while addressing privacy concerns.",
        "news": "Targeted smart CCTV surveillance activated across high-risk intersections."
      }
    ]
  },
  "646": {
    "cat": "Fiscal Budget & Debt Management",
    "title": "Municipal Bond Maturity vs Civil Servant Performance Bonus",
    "text": "A Rp 100 Billion municipal bond payment comes due, threatening employee performance allowances (TPP).",
    "choices": [
      {
        "t": "Amortize bond using revenue surplus and streamline non-essential perks",
        "d": "Maintains impeccable municipal credit rating and preserves core civil service wages.",
        "news": "City successfully settles municipal bond obligations while preserving core wages."
      },
      {
        "t": "Refinance bond debt with state infrastructure financing firm (SMI)",
        "d": "Extends debt tenure at low interest, relieving immediate cash flow pressure.",
        "news": "Municipal debt restructured with state infrastructure financing corporation."
      },
      {
        "t": "Restructure Debt Maturity & Defer Capital Construction Projects",
        "d": "Protects employee allowances and essential services while delaying new buildings.",
        "news": "City restructures bond maturities to preserve basic welfare programs."
      }
    ]
  },
  "647": {
    "cat": "Transport & Labor Relations",
    "title": "Ride-Hailing & Minibus Drivers Threaten General Strike",
    "text": "Over 5,000 online motorcycle taxi (Ojol) drivers plan a citywide strike over low app commission rates.",
    "choices": [
      {
        "t": "Mediate fair commission rates with tech firms & establish free driver rest shelters",
        "d": "Hailed as a heroic labor mediator; provides dignity and rest facilities for delivery workers.",
        "news": "Mayor establishes dedicated transit rest shelters and mediates ride-hail fair pay."
      },
      {
        "t": "Order transport police to penalize strike leaders blockading roads",
        "d": "Restores traffic movement, but leaves underlying driver economic grievances unaddressed.",
        "news": "Police clear road blockades during ride-hailing driver strike."
      },
      {
        "t": "Introduce Peak-Hour Transit Subsidies & Free Shuttle Feeder Routes",
        "d": "Stabilizes driver incomes while keeping public commute fares affordable.",
        "news": "Feeder transit subsidies resolve driver strike and stabilize commute fares."
      }
    ]
  },
  "648": {
    "cat": "Bureaucracy & Anti-Mafia",
    "title": "Land Mafia Syndicate Exposed in Agrarian Agency",
    "text": "A criminal syndicate collaborating with corrupt land officials steals ownership titles of public parks.",
    "choices": [
      {
        "t": "Form Anti-Land Mafia Taskforce & reclaim all stolen municipal assets",
        "d": "Decisive rule of law victory; reclaims billions in public parklands for citizens.",
        "news": "Special Anti-Land Mafia Taskforce recovers 50 hectares of stolen public land."
      },
      {
        "t": "Negotiate out-of-court settlements with private developers",
        "d": "Recovers partial compensation quickly, but corrupt officials evade prison sentences.",
        "news": "City reaches out-of-court financial settlement in contested land title dispute."
      },
      {
        "t": "Form Independent Land Dispute Tribunal & Digitalize Land Registries",
        "d": "Systematically resolves overlapping land claims and prevents future forgery.",
        "news": "Independent land dispute tribunal launched to combat deed fraud."
      }
    ]
  },
  "649": {
    "cat": "Investment & Environment",
    "title": "$1B Chemical Industrial Park vs Drinking Water Basin",
    "text": "Petrochemical investors seek to build near the primary catchment river providing drinking water for 1 million people.",
    "choices": [
      {
        "t": "Relocate industrial zoning 30 km downstream to coastal estuary",
        "d": "Safeguards drinking water reservoirs while preserving multi-million dollar industrial investment.",
        "news": "Petrochemical industrial zone relocated to coastal estuary to protect urban water basin."
      },
      {
        "t": "Reject chemical plant completely in favor of green ecotourism",
        "d": "Pure environmental defense; guarantees pristine water quality forever.",
        "news": "Mayor vetoes chemical plant permit, committing to clean green economy."
      },
      {
        "t": "Mandate Closed-Loop Zero Liquid Discharge (ZLD) Waste Recycling",
        "d": "Unlocks industrial investment while strictly barring industrial water discharge.",
        "news": "Zero-liquid discharge standards mandated for incoming industrial mega-plants."
      }
    ]
  },
  "650": {
    "cat": "Healthcare & Epidemics",
    "title": "Severe Dengue & Respiratory Outbreak Strains Clinics",
    "text": "Hospitals run out of oxygen and beds as simultaneous dengue and respiratory infections surge.",
    "choices": [
      {
        "t": "Convert municipal sports arena into 200-bed emergency hospital",
        "d": "Masterful crisis response; ensures no sick citizen is turned away without medical care.",
        "news": "Municipal sports hall converted into fully equipped 200-bed emergency medical facility."
      },
      {
        "t": "Erect temporary medical tents in hospital parking lots",
        "d": "Quick emergency stopgap, but offers limited comfort and clinical equipment.",
        "news": "Emergency triage tents set up outside overloaded general hospital."
      },
      {
        "t": "Reallocate Underutilized Agency Office Travel Budgets for Epidemic Relief",
        "d": "Funds emergency fever clinics and fogging without tapping disaster reserves.",
        "news": "Official travel funds repurposed to expand neighborhood fever wards."
      }
    ]
  },
  "651": {
    "cat": "Cybersecurity & Public Data",
    "title": "Ransomware Attack Encrypts Civil Registry Servers",
    "text": "Russian ransomware hackers demand a $3M ransom to unlock municipal birth, marriage, and ID databases.",
    "choices": [
      {
        "t": "Refuse ransom, restore from offline cold backups & rebuild fortified system",
        "d": "Never negotiates with cyber terrorists; restores 99% data with enhanced firewalls.",
        "news": "Cybersecurity team successfully restores city databases from secure offline backups."
      },
      {
        "t": "Seek emergency decryption assistance from National Cyber Agency (BSSN)",
        "d": "Resolves crisis systematically through state cyber protocols within 72 hours.",
        "news": "National Cyber Agency assists City Hall in neutralizing municipal ransomware attack."
      },
      {
        "t": "Deploy Expert Cybersecurity Incident Team & Restore Encrypted Clones",
        "d": "Safely recovers citizen identity records within 48 hours without ransom payments.",
        "news": "Cyber incident response unit restores city registry servers from secure backups."
      }
    ]
  },
  "652": {
    "cat": "School Nutrition & Local MSMEs",
    "title": "Universal Nutritious School Meal Program Rollout",
    "text": "City Hall prepares to provide daily free balanced lunches to 45,000 elementary and junior high students.",
    "choices": [
      {
        "t": "Empower neighborhood catering MSMEs & source ingredients from local farmers",
        "d": "Incredible multiplier effect: feeds kids healthy food while enriching local food producers.",
        "news": "Free nutritious school meal program launched in partnership with 200 local MSMEs."
      },
      {
        "t": "Contract single national catering corporation for mass delivery",
        "d": "Simplifies administrative logistics, but local culinary small businesses receive zero benefit.",
        "news": "National food service provider contracted to deliver municipal school lunch program."
      },
      {
        "t": "Distribute Monthly Nutritious Meal Vouchers to Low-Income Households",
        "d": "Empowers families directly to purchase fresh eggs, milk, and local produce.",
        "news": "Digital nutritional vouchers disbursed directly to underprivileged families."
      }
    ]
  },
  "653": {
    "cat": "Clean Energy & EV Transit",
    "title": "EV Charging Infrastructure & Public Transit Fleet",
    "text": "Clean energy investors propose installing 50 fast-charging EV stations across municipal parking lots.",
    "choices": [
      {
        "t": "Grant charging concessions & transition 30% of municipal fleet to EVs",
        "d": "Dramatically cuts urban air pollution and makes Nusapura a national green vehicle model.",
        "news": "Public EV charging network inaugurated across city; municipal fleet goes electric."
      },
      {
        "t": "Install charging points at City Hall and executive offices only",
        "d": "Symbolic green gesture with minimal impact on general urban emissions.",
        "news": "Electric vehicle charging stations installed at City Hall complex."
      },
      {
        "t": "Require Gas Stations to Install EV Fast Chargers as Permit Condition",
        "d": "Accelerates EV infrastructure rollout without burdening the municipal treasury.",
        "news": "Commercial fueling stations mandated to install high-speed EV chargers."
      }
    ]
  },
  "654": {
    "cat": "Tourism & Cultural Festivals",
    "title": "Nusapura International Arts & Heritage Carnival",
    "text": "Cultural troupes from 12 countries propose participating in the annual Nusapura Arts Street Festival.",
    "choices": [
      {
        "t": "Host premier street parade with traditional maritime floats & crafts",
        "d": "Enormous cultural pride and hotel bookings; national media covers the colorful festival.",
        "news": "Spectacular Maritime Cultural Carnival fills downtown streets with 300,000 spectators."
      },
      {
        "t": "Scale down to a 1-day indoor performing arts showcase",
        "d": "Saves municipal budget while providing a polished venue for local artists.",
        "news": "Annual Cultural Arts Gala held at municipal auditorium."
      },
      {
        "t": "Partner with Regional Creative Collectives & Grassroots Cultural Guilds",
        "d": "Delivers a vibrant cultural festival showcasing authentic local heritage economically.",
        "news": "Grassroots cultural guilds headline vibrant, budget-friendly heritage festival."
      }
    ]
  },
  "655": {
    "cat": "Mental Health & Youth Welfare",
    "title": "Youth Mental Health Hotline & Addiction Counseling",
    "text": "Rising academic stress and online addiction drive calls for a dedicated municipal psychological support service.",
    "choices": [
      {
        "t": "Launch free 24/7 Mental Health Hotline 'NusaPeduli' & clinic psychologists",
        "d": "Pioneering public health care; prevents youth suicides and supports struggling families.",
        "news": "'NusaPeduli' 24/7 mental health hotline and free clinic counseling launched."
      },
      {
        "t": "Distribute motivational posters and stress-relief guides in schools",
        "d": "Low-cost awareness effort, but provides little real clinical help for acute distress.",
        "news": "Mental health awareness brochures distributed across public secondary schools."
      },
      {
        "t": "Partner with Universities to Provide Free Tele-Counseling Services",
        "d": "Delivers accessible mental wellness support to youth via digital channels.",
        "news": "University psychology faculties partner with city for free tele-counseling."
      }
    ]
  },
  "656": {
    "cat": "Sports Stadium & Youth Facilities",
    "title": "Municipal Youth Sports Hub & Community Football Grounds",
    "text": "Suburban youth demand accessible sports grounds instead of hanging out on dangerous highways.",
    "choices": [
      {
        "t": "Build 10 mini-stadiums with synthetic turf, basketball courts & skateparks",
        "d": "Vibrant civic investment; channels youth energy into athletics and fosters community spirit.",
        "news": "Network of 10 modern neighborhood sports parks opened across suburban districts."
      },
      {
        "t": "Renovate central stadium grass field only",
        "d": "Focuses resources on elite sports while leaving neighborhood youth without facilities.",
        "news": "Central municipal football pitch undergoes turf refurbishment."
      },
      {
        "t": "Modernize Grassroots Community Football Fields Across All Districts",
        "d": "Encourages neighborhood sports culture at a fraction of stadium costs.",
        "news": "Neighborhood athletic grounds revamped across all municipal districts."
      }
    ]
  },
  "657": {
    "cat": "Disaster Housing & Spatial Planning",
    "title": "Coastal Tidal Surge Reconstruction & Relocation",
    "text": "Severe tidal waves wash away 80 stilt houses in an exposed coastal fishing hamlet.",
    "choices": [
      {
        "t": "Construct resilient inland fisherman village with boat docks & cold storage",
        "d": "Permanently protects families from sea surges while boosting fishing productivity.",
        "news": "New disaster-resilient fishing village inaugurated with modern cold storage facilities."
      },
      {
        "t": "Provide building materials to rebuild on the vulnerable coastline",
        "d": "Respects customary settlement location, but leaves homes exposed to future storm surges.",
        "news": "Coastal families receive building assistance to repair storm-damaged stilt houses."
      },
      {
        "t": "Construct Fire-Resilient Alleys & Install Decentralized Hydrant Networks",
        "d": "Significantly mitigates future fire risks while respecting neighborhood layout.",
        "news": "High-density neighborhoods upgraded with alley hydrants and fire breaks."
      }
    ]
  },
  "658": {
    "cat": "Port Logistics & Heavy Transit",
    "title": "Seaport Freight Corridor: Dedicated Truck Flyover vs Night Restrictions",
    "text": "Heavy container trucks clog arterial roads, causing accidents and destroying asphalt pavements.",
    "choices": [
      {
        "t": "Build dedicated Elevated Port Freight Highway via Public-Private Partnership",
        "d": "Permanently separates heavy trucks from commuter traffic, ending road damage.",
        "news": "Construction begins on Dedicated Port Freight Flyover to clear arterial congestion."
      },
      {
        "t": "Restrict container trucks to 10 PM - 5 AM transit hours only",
        "d": "Immediate daytime traffic relief, but causes port logistics bottlenecks at night.",
        "news": "Daytime container truck ban enforced along central urban thoroughfares."
      },
      {
        "t": "Establish Dedicated Freight Bypass Arterial with Weight In-Motion Sensors",
        "d": "Separates heavy cargo traffic from commuter lanes, slashing accidents and bottlenecks.",
        "news": "Dedicated port freight bypass opens, unclogging downtown thoroughfares."
      }
    ]
  },
  "659": {
    "cat": "Digital Payments & Traditional Markets",
    "title": "QRIS Digital Payments in Traditional Wet Markets",
    "text": "Bank Indonesia proposes digitizing cash transactions across all traditional market stalls.",
    "choices": [
      {
        "t": "Equip all 2,000 market vendors with QRIS & free cash-back incentives",
        "d": "Empowers traditional traders, eliminates counterfeit cash, and boosts financial inclusion.",
        "news": "Nusapura Traditional Markets reach 100% QRIS digital payment adoption."
      },
      {
        "t": "Leave adoption voluntary without municipal promotional support",
        "d": "Slow digital uptake as elderly vendors continue relying exclusively on cash.",
        "news": "Voluntary QRIS payment rollout begins in select central market kiosks."
      },
      {
        "t": "Provide Free Digital POS Terminals & Transaction Cash-Back Incentives",
        "d": "Encourages rapid voluntary adoption of cashless payments among night market vendors.",
        "news": "Night market vendors embrace subsidized digital payment kiosks."
      }
    ]
  },
  "660": {
    "cat": "Flood Retention & Farmland Ecology",
    "title": "Ecological Retention Basins & Urban Flood Control",
    "text": "Civil engineers propose converting 50 hectares of flood-prone swamplands into a scenic ecological retention lake.",
    "choices": [
      {
        "t": "Construct retention lake with jogging track, lotus gardens & water pumps",
        "d": "Dual benefit: prevents urban flooding while creating a beautiful public eco-park.",
        "news": "Grand Retention Eco-Park opens, absorbing floodwaters and serving as leisure hub."
      },
      {
        "t": "Build concrete stormwater canals with high retaining walls",
        "d": "Functional engineering solution, but lacks recreational value and aesthetic charm.",
        "news": "Concrete stormwater channel network completed in eastern catchment zone."
      },
      {
        "t": "Build Underground Retention Vaults Beneath Public Parks and Plazas",
        "d": "Absorbs flash flood runoff without taking away valuable agricultural farmland.",
        "news": "Underground storm retention vaults constructed beneath civic parklands."
      }
    ]
  },
  "661": {
    "cat": "Youth Innovation & University Research",
    "title": "Nusapura Innovation Seed Grant: Youth Startups & University R&D",
    "text": "University researchers and young coders seek municipal seed funding to commercialize local tech inventions.",
    "choices": [
      {
        "t": "Establish Rp 10 Billion Innovation Seed Fund & Incubation Hub",
        "d": "Sparks a wave of tech entrepreneurship; positions Nusapura as a regional startup hub.",
        "news": "City Hall launches Rp 10 Billion Youth Startup Innovation Seed Fund."
      },
      {
        "t": "Host an annual academic invention exhibition with certificate trophies",
        "d": "Celebrates academic ideas with zero capital backing for real commercialization.",
        "news": "Annual University Technology and Innovation Expo held at City Convention Center."
      },
      {
        "t": "Establish Civic Innovation Incubator Matching Startups with City Needs",
        "d": "Channels youth ingenuity into solving municipal traffic, waste, and energy issues.",
        "news": "Municipal tech incubator matches young innovators with civic challenges."
      }
    ]
  },
  "662": {
    "cat": "Slum Upgrading & Social Housing",
    "title": "1,000 Uninhabitable Homes Renovation Program (Bedah Rumah)",
    "text": "Surveys identify 1,000 dilapidated houses with dirt floors, leaking roofs, and no sanitation.",
    "choices": [
      {
        "t": "Disburse Rp 25M renovation grants + install hygienic septic tanks for 1,000 homes",
        "d": "Dramatically lifts living standards and eradicate open defecation in poor wards.",
        "news": "'Bedah Rumah' initiative renovates 1,000 substandard homes into healthy dwellings."
      },
      {
        "t": "Renovate 200 homes this fiscal year and defer the rest",
        "d": "Manages annual cash flow, but leaves 800 poor families waiting in substandard housing.",
        "news": "First phase of home renovation assistance launched for 200 low-income households."
      },
      {
        "t": "Organize Community Mutual-Aid Home Renovation Programs (Gotong Royong)",
        "d": "Empowers neighborhoods to rebuild dilapidated homes with city-supplied raw materials.",
        "news": "Community mutual-aid home improvement drive rehabilitates 1,000 houses."
      }
    ]
  },
  "663": {
    "cat": "Regional Bank & Municipal Enterprise",
    "title": "Regional Development Bank (BPR) Capital Restructuring",
    "text": "The municipal microfinance bank suffers from non-performing loans left by previous political crony lending.",
    "choices": [
      {
        "t": "Restructure management with independent professional bankers & inject capital",
        "d": "Turns regional bank into a profitable engine delivering low-cost microloans to small businesses.",
        "news": "Municipal Bank restructured under professional leadership; SME lending expands."
      },
      {
        "t": "Liquidate bank assets and transfer customer accounts to state bank",
        "d": "Closes fiscal liability permanently, but ends city's direct micro-credit policy arm.",
        "news": "City council votes to consolidate regional microfinance bank operations."
      },
      {
        "t": "Pivot Regional Bank into Dedicated Micro-Credit Engine for Street Vendors",
        "d": "Restructures bad loans while providing low-interest working capital for micro-merchants.",
        "news": "Municipal bank pivots toward micro-loans for street vendors and small shops."
      }
    ]
  },
  "664": {
    "cat": "Street Safety & Youth Drag Racing",
    "title": "Illegal Midnight Drag Racing & Official Municipal Circuit",
    "text": "Teens dangerously race modified motorcycles on bypass highways, disturbing residents and causing fatal accidents.",
    "choices": [
      {
        "t": "Construct safe official community drag circuit & host organized weekend cups",
        "d": "Brilliant civic diversion: channels teenage speed passion into safe, professional motorsports.",
        "news": "Official Municipal Drag Race Circuit opens, ending illegal midnight street racing."
      },
      {
        "t": "Install rumble strips and deploy police road spikes",
        "d": "Deters racing on specific streets, but pushes racers into quieter residential neighborhoods.",
        "news": "Traffic speed bumps installed along main bypass highway to curb illegal racing."
      },
      {
        "t": "Transform Disused Industrial Strip into Supervised Weekend Drag Strip",
        "d": "Channels motor enthusiasts into controlled, safe racing events off public roads.",
        "news": "Supervised weekend drag strip redirects illegal racers off public streets."
      }
    ]
  },
  "665": {
    "cat": "Urban Farming & Food Security",
    "title": "Rooftop Urban Farming & Vegetable Self-Sufficiency",
    "text": "Women's welfare groups (PKK) propose transforming unused government building rooftops into hydroponic farms.",
    "choices": [
      {
        "t": "Fund 100 rooftop hydroponic greenhouses & supply local hospital kitchens",
        "d": "Produces fresh organic greens, reduces building cooling costs, and provides women income.",
        "news": "Green Rooftop Farming program produces tons of fresh vegetables across public buildings."
      },
      {
        "t": "Distribute seeds for flower gardens on office balconies",
        "d": "Aesthetic landscaping improvement with zero food security benefit.",
        "news": "Beautification flower gardens planted along City Hall balconies and plazas."
      },
      {
        "t": "Lease Idle Municipal Land Parcels to Commercial Horticulture Growers",
        "d": "Generates local revenue without municipal expenditures, with limited public access.",
        "news": "Idle city land leased to commercial urban farming enterprises."
      }
    ]
  },
  "666": {
    "cat": "Waterfront City & Coastal Promenade",
    "title": "Nusapura Waterfront Promenade: Public Beach vs Private Luxury Marina",
    "text": "Developers propose building a gated luxury marina, while citizens demand an open public seaside promenade.",
    "choices": [
      {
        "t": "Build 5 km scenic public promenade with bike lanes, parks & open beaches",
        "d": "Creates an iconic public landmark accessible to every citizen regardless of income.",
        "news": "Nusapura Coastal Promenade opens: 5 km of public beach, parks, and sunset plazas."
      },
      {
        "t": "Approve luxury marina with dedicated 20% public beach corridor",
        "d": "Generates high private property tax revenues, but privatizes premium oceanfront views.",
        "news": "Luxury waterfront marina approved with integrated public seaside walkway."
      },
      {
        "t": "Reorganize Tourism Pier & Subsidize Traditional Passenger Ferry Boats",
        "d": "Lifts traditional fishermen's incomes with high economic and tourism efficiency.",
        "news": "Waterfront tourism pier revamped with subsidized traditional ferry services."
      }
    ]
  },
  "667": {
    "cat": "Digital Identity (IKD) & Public Services",
    "title": "Digital ID (IKD) Rollout & Paperless Civil Registry",
    "text": "Civil Registry Agency readies digital mobile IDs to replace physical plastic e-KTP cards.",
    "choices": [
      {
        "t": "Deploy mobile registration booths at malls, campuses & markets with prizes",
        "d": "Achieves 85% digital ID adoption in 3 months; eliminates long queues at district offices.",
        "news": "Nusapura leads nation in Digital ID (IKD) adoption across all demographic groups."
      },
      {
        "t": "Rely strictly on voluntary district office walk-in registrations",
        "d": "Low adoption rate; citizens continue demanding physical plastic cards.",
        "news": "Digital ID registration service available at all district civil registry counters."
      },
      {
        "t": "Mandate Digital ID Exclusively for Civil Servants; Keep Physical IDs for Citizens",
        "d": "Avoids public pushback while gradually piloting digital identity systems.",
        "news": "Digital ID rollout focused on civil service bureaucracy during initial phase."
      }
    ]
  },
  "668": {
    "cat": "Senior Citizen Healthcare & Home Care",
    "title": "Senior Health Initiative: Mobile Home Care & Day Centers",
    "text": "Elderly citizens living alone face difficulty traveling to hospitals for monthly checkups.",
    "choices": [
      {
        "t": "Launch 'Dokter Keliling Lansia': Doctors visit elderly patients at home",
        "d": "Compassionate municipal welfare; delivers free checkups and medicines right to doorsteps.",
        "news": "'Dokter Keliling' mobile healthcare fleet begins home visits for senior citizens."
      },
      {
        "t": "Create dedicated senior express queues at public hospitals",
        "d": "Reduces waiting times at hospital lobbies without solving home mobility challenges.",
        "news": "Priority senior care desks opened across all public hospital outpatient clinics."
      },
      {
        "t": "Subsidize Class-3 Inpatient Ward Hospital Costs for Elderly Citizens",
        "d": "Relieves low-income families from high medical bills during acute hospitalizations.",
        "news": "City subsidizes class-3 hospital ward care for vulnerable elderly patients."
      }
    ]
  },
  "669": {
    "cat": "Vocational Training & Industry 4.0",
    "title": "Vocational Retraining Center for Displaced Industrial Workers",
    "text": "Factory automation leaves 1,500 factory workers unemployed as traditional lines mechanize.",
    "choices": [
      {
        "t": "Open High-Tech Training Center: CNC robotics, solar installation & coding",
        "d": "Successfully reskills 90% of laid-off workers into higher-paying modern technical jobs.",
        "news": "Municipal Advanced Training Center reskills industrial workforce for Industry 4.0."
      },
      {
        "t": "Disburse 3-month severance emergency cash assistance",
        "d": "Short-term financial buffer, but workers struggle to find jobs without modern skills.",
        "news": "Emergency severance aid packages distributed to displaced factory workers."
      },
      {
        "t": "Mandate Corporate Retraining Quotas Before Introducing Automation",
        "d": "Protects existing jobs while encouraging industrial technological transition.",
        "news": "City mandates worker retraining quotas for factories adopting automation."
      }
    ]
  },
  "670": {
    "cat": "Old Town Heritage & Creative Hub",
    "title": "Historic Old Town Revitalization: Art Hub vs Commercial Offices",
    "text": "Colonial-era heritage buildings in Old Town suffer from damp walls and crumbling roofs.",
    "choices": [
      {
        "t": "Restore facades, pedestrianize cobblestone streets & open creative art cafes",
        "d": "Magnificent urban renaissance; Old Town becomes city's top cultural and nightlife destination.",
        "news": "Historic Old Town revitalized into vibrant creative heritage and cafe district."
      },
      {
        "t": "Allow private companies to convert buildings into corporate branch offices",
        "d": "Privately financed restoration, but restricts public access to historic interiors.",
        "news": "Corporate heritage adaptive reuse approved for Old Town historic buildings."
      },
      {
        "t": "Transfer Heritage Management Rights to Boutique Hotel & Dining Investors",
        "d": "Historic buildings beautifully restored, though open civic access is limited.",
        "news": "Historic heritage quarter leased to private hospitality restorers."
      }
    ]
  },
  "671": {
    "cat": "Heatwave Mitigation & Drought Relief",
    "title": "Extreme Heatwave & Deep Water Well Relief",
    "text": "Prolonged El Nino drought dries up shallow neighborhood wells across southern farming villages.",
    "choices": [
      {
        "t": "Deploy 30 water tanker trucks daily & drill deep artesian community wells",
        "d": "Rapid drought relief ensuring clean drinking water for every affected village.",
        "news": "Emergency water convoys and deep artesian wells quench southern drought zones."
      },
      {
        "t": "Distribute plastic water tanks and pray for rain in public squares",
        "d": "Provides temporary storage, but villagers continue waiting for emergency rain.",
        "news": "Emergency water storage tanks distributed to drought-affected communities."
      },
      {
        "t": "Urge Water Conservation & Subsidize Clean Bottled Water Vouchers",
        "d": "Temporary emergency measure that helps vulnerable families manage the drought.",
        "news": "Emergency water subsidies and rationing advisories deployed across city."
      }
    ]
  },
  "672": {
    "cat": "Pedestrian Zones & Car-Free Days",
    "title": "Main Boulevard Total Car-Free Weekend & Pedestrian Expansion",
    "text": "Citizens request making the central shopping boulevard completely vehicle-free on weekends.",
    "choices": [
      {
        "t": "Designate Permanent Weekend Car-Free Zone with street musicians & art stalls",
        "d": "Huge civic success: brings families together, cleans air, and multiplies retail sales.",
        "news": "Weekend Car-Free Promenade draws 80,000 citizens to walk, cycle, and shop."
      },
      {
        "t": "Limit car-free hours to Sunday 6 AM - 10 AM only",
        "d": "Standard short car-free morning, causing minimal disruption to car traffic.",
        "news": "Sunday morning Car-Free Day continues along central boulevard."
      },
      {
        "t": "Restrict Car-Free Days to Sunday Mornings (06:00 - 10:00 AM Only)",
        "d": "Avoids disrupting commercial shop deliveries while providing morning recreation.",
        "news": "Sunday morning Car-Free Day balances public exercise and merchant deliveries."
      }
    ]
  },
  "673": {
    "cat": "Rooftop Solar & Municipal Energy Efficiency",
    "title": "Rooftop Solar Panels on All Government Buildings",
    "text": "Electricity bills for municipal offices cost Rp 40 Billion annually from the city budget.",
    "choices": [
      {
        "t": "Install 5MW rooftop solar array across all schools and City Hall",
        "d": "Cuts municipal electric bills by 50% permanently and saves billions every year.",
        "news": "City Hall and public schools go green with 5MW rooftop solar power installation."
      },
      {
        "t": "Implement strict office policy turning off ACs after 4 PM",
        "d": "Minor behavioral energy saving with zero capital outlay.",
        "news": "Energy efficiency guidelines implemented across all municipal government offices."
      },
      {
        "t": "Defer Solar Installations & Continue Relying on Standard Grid Power",
        "d": "Zero upfront capital spending, but municipal utility bills remain elevated.",
        "news": "City Hall defers solar panel tenders to preserve short-term capital budget."
      }
    ]
  },
  "674": {
    "cat": "Inclusive Education & Special Needs Schools",
    "title": "Inclusive Education & Special Needs Learning Center",
    "text": "Children with disabilities often face rejection from regular schools due to lack of special education teachers.",
    "choices": [
      {
        "t": "Hire 200 shadow teachers & build state-of-the-art Special Education Center",
        "d": "Exemplary compassionate policy: ensures every special-needs child receives top schooling.",
        "news": "Nusapura opens premier Inclusive Education Center and hires specialized educators."
      },
      {
        "t": "Provide annual cash stipends to families of special-needs children",
        "d": "Helps family finances, but does not solve school admission and learning barriers.",
        "news": "Special-needs education assistance stipends disbursed to eligible families."
      },
      {
        "t": "Provide Inclusive Education Grants for Special-Needs Children in Private Schools",
        "d": "Assists special-needs families with tuition support without building new schools.",
        "news": "Special education subsidies granted to children attending private disability centers."
      }
    ]
  },
  "675": {
    "cat": "Export Promotion Center & MSME Growth",
    "title": "Nusapura Export Center: Local MSMEs to ASEAN Markets",
    "text": "Local artisan coffee, batik, and snack producers seek help reaching international export buyers.",
    "choices": [
      {
        "t": "Launch Export Promotion Center: free export packaging, testing & global trade fairs",
        "d": "Drives $20M in direct export contracts for local micro-entrepreneurs.",
        "news": "Nusapura Export Center helps 150 local MSMEs ship goods across Southeast Asia."
      },
      {
        "t": "Host annual local souvenir bazaar at city hall lobby",
        "d": "Pleasant local exhibition with minimal international sales reach.",
        "news": "Local MSME handicraft and culinary bazaar opens at City Hall plaza."
      },
      {
        "t": "Focus Export Initiatives on Regional Trade with Neighboring Districts",
        "d": "Low operational risk and budget, fostering steady domestic trade growth.",
        "news": "Inter-regional trade corridors established for local micro-enterprise goods."
      }
    ]
  },
  "676": {
    "cat": "Single-Use Plastic Ban & Eco-Friendly Retail",
    "title": "City Ordinance Banning Single-Use Plastic Bags",
    "text": "Plastic waste chokes city rivers and drainage gutters; environmentalists urge a strict bag ban.",
    "choices": [
      {
        "t": "Pass strict Single-Use Plastic Ban & subsidize reusable cassava fabric bags",
        "d": "Cuts plastic waste by 70% in 6 months; clean rivers and modern eco-friendly city image.",
        "news": "Single-use plastic bag ban takes effect; retail switches to reusable bags."
      },
      {
        "t": "Encourage voluntary plastic reduction without fines or penalties",
        "d": "Little behavioral change as supermarkets continue dispensing cheap plastic bags.",
        "news": "Voluntary plastic reduction campaign launched with retail associations."
      },
      {
        "t": "Promote Reusable Bag Awareness Campaigns Without Imposing Fines",
        "d": "Maintains merchant goodwill, though single-use plastic consumption remains high.",
        "news": "Public awareness drive encourages voluntary switch to reusable shopping bags."
      }
    ]
  },
  "677": {
    "cat": "Smart CCTV Surveillance & Command Center",
    "title": "Neighborhood Smart CCTV & Integrated Command Center",
    "text": "Community heads (RT/RW) request CCTV security cameras at neighborhood entry gates to curb burglaries.",
    "choices": [
      {
        "t": "Install 2,000 neighborhood CCTVs connected to City Smart Command Center",
        "d": "Residential burglaries drop by 85%; rapid police and ambulance dispatch times.",
        "news": "Neighborhood CCTV network integrated into Central Emergency Command Center."
      },
      {
        "t": "Provide partial subsidies for neighborhoods buying their own cameras",
        "d": "Inconsistent camera coverage without centralized police monitoring.",
        "news": "Matching grants offered to neighborhood associations for local security cameras."
      },
      {
        "t": "Encourage Neighborhoods to Self-Fund Community CCTV Surveillance",
        "d": "Avoids public budget strain, though camera coverage is concentrated in affluent wards.",
        "news": "Neighborhood councils self-fund local security camera installations."
      }
    ]
  },
  "678": {
    "cat": "Youth eSports & Creative Technology Center",
    "title": "Nusapura eSports Arena & Digital Creative Tech Hub",
    "text": "Young gamers and content creators request a high-speed fiber facility for tournaments and digital production.",
    "choices": [
      {
        "t": "Build Municipal eSports & Creative Hub: gigabit fiber, gaming pods & studio",
        "d": "Channels youth digital passions into lucrative careers in gaming, animation, and tech.",
        "news": "Nusapura eSports & Digital Content Hub opens to thunderous youth enthusiasm."
      },
      {
        "t": "Sponsor a one-weekend mobile gaming tournament at a mall",
        "d": "Popular weekend publicity event without permanent infrastructure for youth creators.",
        "news": "Mayor opens annual City Mobile Gaming Cup at downtown exhibition center."
      },
      {
        "t": "Allocate Youth Recreation Funds to Traditional Multi-Sport Courts",
        "d": "Promotes outdoor athletics, though digital tech enthusiasts feel underserved.",
        "news": "Neighborhood volleyball and futsal courts renovated across all districts."
      }
    ]
  },
  "679": {
    "cat": "Tax Amnesty & Citizen Compliance Scheme",
    "title": "Property Tax (PBB) & Motor Vehicle Fine Amnesty Program",
    "text": "Arrears in unpaid property taxes reach Rp 80 Billion as citizens struggle with accumulated late penalties.",
    "choices": [
      {
        "t": "Launch Tax Penalty Amnesty & raffle 5 cars for timely tax payers",
        "d": "Huge revenue windfall: collects Rp 60 Billion in back taxes within 60 days.",
        "news": "PBB Tax Amnesty program reaps tens of billions in delinquent revenue collections."
      },
      {
        "t": "Send legal debt collection letters with threat of property seizure",
        "d": "Collects some revenue, but sparks public resentment and fear among homeowners.",
        "news": "Tax enforcement warnings issued to delinquent commercial property owners."
      },
      {
        "t": "Deploy Field Collection Officers for Active Door-to-Door Tax Verification",
        "d": "Enforces tax compliance firmly, though overdue taxpayers feel scrutinized.",
        "news": "Municipal tax inspectors conduct field sweeps to recover property tax arrears."
      }
    ]
  },
  "680": {
    "cat": "Town Hall Live-Stream & Citizen Q&A",
    "title": "'Lapor Walikota' Live Stream: Unfiltered Public Q&A",
    "text": "Communications team proposes a weekly live-streamed Town Hall where citizens can question the Mayor directly.",
    "choices": [
      {
        "t": "Host weekly unscripted live Q&A & order agency heads to resolve issues on air",
        "d": "Legendary public transparency; citizens feel truly heard and bureaucratic response speeds double.",
        "news": "Mayor's live unscripted Q&A broadcast becomes national sensation for civic openness."
      },
      {
        "t": "Broadcast pre-recorded weekly mayoral activity update videos",
        "d": "Safe, controlled PR broadcast that generates modest viewer engagement.",
        "news": "Weekly mayoral public affairs video program airs on municipal social media."
      },
      {
        "t": "Host Weekly Press Briefings Exclusively for Accredited Journalists",
        "d": "Focuses on professional news outlets, though average citizens cannot ask direct questions.",
        "news": "Weekly mayoral press conference established for accredited city reporters."
      }
    ]
  },
  "681": {
    "cat": "Tourism & Street Culture",
    "title": "Night Culinary Promenade & Street Performance Boulevard",
    "text": "Young people and tourists seek a safe, well-lit pedestrian night market with food, music, and crafts.",
    "choices": [
      {
        "t": "Create Malioboro-style Night Promenade with fairy lights, buskers & food stalls",
        "d": "Creates a magical night-time economy; generates millions in income for small vendors.",
        "news": "Nusapura Night Culinary Promenade opens, transforming downtown into a lively hotspot."
      },
      {
        "t": "Allow weekend food trucks in the City Hall parking lot",
        "d": "Modest weekend gathering that draws small crowds without urban street transformation.",
        "news": "Weekend gourmet food truck market opens in municipal parking grounds."
      },
      {
        "t": "Defer Street Overhaul & Permit Vendors to Operate on Standard Walkways",
        "d": "Saves capital funds, though pedestrian pathways remain congested and untidy.",
        "news": "Night culinary vendors continue operating on designated evening walkways."
      }
    ]
  },
  "682": {
    "cat": "Waste-to-Energy & Modern Incineration",
    "title": "High-Capacity Waste-to-Energy Incineration Plant (PLTSa)",
    "text": "An international environmental engineering group offers to build a 1,000 ton/day smokeless Waste-to-Energy plant.",
    "choices": [
      {
        "t": "Ratify multi-year WTE concession & generate 20MW clean electricity",
        "d": "Permanently solves city's waste crisis for 30 years and creates green energy.",
        "news": "Groundbreaking ceremony for state-of-the-art 20MW Waste-to-Energy Plant."
      },
      {
        "t": "Continue open dumping and invest in small-scale composting heaps",
        "d": "Avoids capital expenditure, but open landfill will reach catastrophic overflow.",
        "news": "City expands open composting yards at municipal waste disposal facility."
      },
      {
        "t": "Expand Suburban Sanitary Landfill Acreage with Odor Buffer Zones",
        "d": "Cost-effective construction, though suburban residents voice environmental concerns.",
        "news": "Suburban landfill expansion approved with green vegetative odor buffers."
      }
    ]
  },
  "683": {
    "cat": "Water Utility (PDAM) Modernization",
    "title": "Universal Clean Tap Water: Smart Flow Meters & New Intake",
    "text": "30% of suburban households still rely on contaminated shallow wells for drinking and cooking.",
    "choices": [
      {
        "t": "Expand PDAM pipelines to 100% of households & install smart digital meters",
        "d": "Fundamental public health triumph: guarantees clean, drinkable tap water for all citizens.",
        "news": "Universal Clean Water pipeline project brings running tap water to every suburb."
      },
      {
        "t": "Provide free chlorine water purification tablets to affected wards",
        "d": "Temporary health safeguard that leaves households without running pipe infrastructure.",
        "news": "Water purification supplies distributed to neighborhoods without piped water access."
      },
      {
        "t": "Raise Water Utility Tariffs to Cover Ongoing Pipeline Maintenance Costs",
        "d": "Stabilizes utility cash flow, but sparks pushback from low-income households.",
        "news": "Water utility adjusts residential tariffs to fund pipeline rehabilitation."
      }
    ]
  },
  "684": {
    "cat": "Farmer Support & Organic Agriculture",
    "title": "'Kartu Tani Nusapura': Subsidized Organic Fertilizer & Seed Aid",
    "text": "Fertilizer scarcity threatens paddy harvest yields across 5,000 hectares of municipal farmlands.",
    "choices": [
      {
        "t": "Distribute 'Kartu Tani' granting free organic fertilizer & guaranteed harvest purchase",
        "d": "Bumper rice harvests; farmers enjoy record profits and food security is guaranteed.",
        "news": "'Kartu Tani' program delivers free organic fertilizers and harvest price guarantees."
      },
      {
        "t": "Request extra chemical fertilizer allocations from the Ministry of Agriculture",
        "d": "Dependent on central government timing; fertilizer arrives past peak planting season.",
        "news": "City requests additional subsidized chemical fertilizer quotas from central ministry."
      },
      {
        "t": "Encourage Farmers to Transition toward Urban Hydroponic Greenhouses",
        "d": "Modern and water-efficient for compact plots, requiring technology adoption.",
        "news": "Farmers encouraged to adopt commercial urban hydroponic agriculture."
      }
    ]
  },
  "685": {
    "cat": "International Maritime Carnival & Culture Fest",
    "title": "International Maritime Festival & Traditional Boat Regatta",
    "text": "Coastal communities propose an international boat regatta and seafood carnival along the waterfront.",
    "choices": [
      {
        "t": "Organize World Maritime Regatta & Seafood Festival with 10 participating nations",
        "d": "Huge international tourism success; highlights maritime heritage and fills hotels.",
        "news": "Nusapura International Maritime Regatta dazzles spectators with 200 sailing vessels."
      },
      {
        "t": "Host local fishing boat parade for coastal villagers",
        "d": "Charming local maritime custom celebrated on a modest community budget.",
        "news": "Traditional coastal fishing boat parade held at southern harbor."
      },
      {
        "t": "Rely Exclusively on Corporate Sponsorships Without Municipal APBD Funds",
        "d": "Protects city treasury, though event programming is heavily branded by sponsors.",
        "news": "Maritime carnival sponsored entirely by corporate and industrial partners."
      }
    ]
  },
  "686": {
    "cat": "Slum Renewal & Subsidized Public Housing",
    "title": "Subsidized Public Rental Flats (Rusunawa) for Low-Income Workers",
    "text": "Low-wage factory workers spend 50% of their earnings on cramped, unsafe boarding room rentals.",
    "choices": [
      {
        "t": "Construct four 10-story modern Rusunawa towers with $20/month subsidized rent",
        "d": "Provides dignified, affordable homes for 2,000 families with gardens and daycare.",
        "news": "Four new subsidized Rusunawa apartment towers opened for low-income workers."
      },
      {
        "t": "Provide temporary rent vouchers for private boarding rooms",
        "d": "Short-term financial relief without adding permanent municipal affordable housing stock.",
        "news": "Rental subsidy vouchers distributed to eligible low-income industrial workers."
      },
      {
        "t": "Clear Illegal Riverbank Dwellings Without Subsidized Flat Options",
        "d": "Clears riverbanks rapidly, but triggers sharp backlash from human rights groups.",
        "news": "Riverbank clearance enforced without municipal housing subsidies."
      }
    ]
  },
  "687": {
    "cat": "Silicon Coast AI & Tech Industrial Park",
    "title": "'Silicon Coast' AI & Software Industrial Hub",
    "text": "Global tech corporations seek to establish regional artificial intelligence and software R&D centers.",
    "choices": [
      {
        "t": "Zone 100 hectares for 'Silicon Coast' with fiber optic backbone & tax holidays",
        "d": "Transforms Nusapura into a leading tech capital; attracts $1B in venture capital investments.",
        "news": "Nusapura inaugurates 'Silicon Coast' AI Tech Park, attracting global technology firms."
      },
      {
        "t": "Open a shared co-working floor inside an existing municipal building",
        "d": "Small-scale startup incubator with limited capacity for major tech corporations.",
        "news": "Municipal co-working space opens to support local software freelancers."
      },
      {
        "t": "Reject Tax Exemptions & Apply Standard Commercial Tax Rates to Tech Firms",
        "d": "Safeguards baseline tax receipts, though tech investors opt for neighboring cities.",
        "news": "City maintains standard commercial corporate tax rates for incoming tech firms."
      }
    ]
  },
  "688": {
    "cat": "Universal Health & Free Ambulance",
    "title": "'Kartu Nusapura Sehat' (KNS) & 24-Hour Free Ambulance Fleet",
    "text": "Emergency patients in remote sub-districts face deadly delays due to lack of municipal ambulances.",
    "choices": [
      {
        "t": "Deploy 30 advanced life-support ambulances & cover 100% universal healthcare",
        "d": "No citizen left behind; average ambulance arrival time drops to under 8 minutes.",
        "news": "Free 24/7 emergency ambulance fleet launched with Universal Health Coverage (KNS)."
      },
      {
        "t": "Equip neighborhood clinic vans with basic stretchers and first-aid kits",
        "d": "Modest emergency upgrade; provides basic transport for non-critical patients.",
        "news": "Local health centers receive upgraded patient transport vehicles."
      },
      {
        "t": "Direct Health Budget Toward Preventive Community Hygiene Education (PHBS)",
        "d": "Extremely cost-effective, though acute medical clinic capacity remains unchanged.",
        "news": "Preventive public health and sanitation campaigns expanded in all wards."
      }
    ]
  },
  "689": {
    "cat": "Subsidized Food Markets & Inflation Control",
    "title": "Subsidized Mobile Food Trucks & Regional Inflation Stabilization",
    "text": "National inflation causes price spikes in eggs, rice, and cooking oil across city wet markets.",
    "choices": [
      {
        "t": "Deploy 10 Mobile Subsidized Food Trucks directly to low-income neighborhoods",
        "d": "Cuts out middleman markups; keeps staple food affordable for all vulnerable families.",
        "news": "Mobile Food Trucks deliver discounted essential groceries across working-class wards."
      },
      {
        "t": "Inspect market stalls and warn merchants against price gouging",
        "d": "Administrative pressure that yields limited effect against broader market supply shortages.",
        "news": "Trade inspectors conduct spot checks on staple food pricing at central markets."
      },
      {
        "t": "Urge Wholesalers to Refrain from Hoarding Stocks Without Price Controls",
        "d": "Zero fiscal cost, but staple grocery prices remain high on open markets.",
        "news": "City appeals to grocery distributors to maintain fair food retail prices."
      }
    ]
  },
  "690": {
    "cat": "Maritime Port Logistics Hub & Free Trade Zone",
    "title": "Deep-Sea Port Logistics Hub & Free Trade Bonded Zone",
    "text": "Container ships queue offshore for days due to shallow berths and cramped container yards.",
    "choices": [
      {
        "t": "Dredge harbor basin to 16m depth & build modern automated container terminal",
        "d": "Triples port handling capacity; Nusapura becomes primary maritime export gateway.",
        "news": "Deepened Maritime Port Container Terminal begins operations, handling mega-vessels."
      },
      {
        "t": "Add two mobile cranes at existing dock without dredging harbor",
        "d": "Modest crane efficiency gain, but deep-draft ocean cargo vessels remain unable to dock.",
        "news": "New container cranes installed to speed up cargo unloading at municipal docks."
      },
      {
        "t": "Wait for Central Ministry of Transportation Strategic Port Allocation",
        "d": "Saves local municipal capital, though deep-sea port expansion is postponed.",
        "news": "Deep-sea port logistics project awaits national transport ministry funding."
      }
    ]
  },
  "691": {
    "cat": "Free Waqf Certification & Child-Friendly Centers",
    "title": "Free Waqf Land Certification & Child-Friendly Places of Worship",
    "text": "Hundreds of historic mosques, churches, and temples lack official land certificates, risking disputes.",
    "choices": [
      {
        "t": "Issue free land certificates for all houses of worship & fund child play yards",
        "d": "Fosters profound interfaith harmony and secures religious heritage lands permanently.",
        "news": "Mayor hands over 500 free land certificates to mosques, churches, and temples."
      },
      {
        "t": "Offer legal consultation clinics for disputed religious property cases",
        "d": "Helps resolve active lawsuits while leaving hundreds of uncertified properties vulnerable.",
        "news": "Legal assistance desk opened for places of worship facing land ownership disputes."
      },
      {
        "t": "Delegate Land Title Formalization Independently to Respective Congregations",
        "d": "Zero cost to city budget, but property boundary disputes remain vulnerable.",
        "news": "Places of worship encouraged to pursue independent land registration."
      }
    ]
  },
  "692": {
    "cat": "Smart On-Street Parking & Anti-Extortion",
    "title": "Smart On-Street Parking Meters & Digital Anti-Extortion",
    "text": "Informal parking mafias siphon off an estimated Rp 30 Billion in municipal parking fees every year.",
    "choices": [
      {
        "t": "Install solar-powered smart parking kiosks & hire attendants as formal staff",
        "d": "Recovers Rp 25 Billion/year for municipal budget and guarantees fixed incomes for workers.",
        "news": "Smart digital parking meters deployed across city; informal extortion eradicated."
      },
      {
        "t": "Increase parking tickets for cars parked in unauthorized zones",
        "d": "Penalizes motorists without stopping informal parking collectors from taking cash.",
        "news": "Traffic police step up fines against illegally parked vehicles on arterial roads."
      },
      {
        "t": "Maintain Conventional Street Parking Attendant Structure",
        "d": "Avoids disruption for parking wardens, but parking revenue leakage persists.",
        "news": "Conventional on-street parking attendants continue routine operations."
      }
    ]
  },
  "693": {
    "cat": "Main Municipal Stadium & Youth Athlete Academy",
    "title": "Grand Municipal Stadium & Elite Youth Athlete Academy",
    "text": "Local athletic talent lacks international-grade training facilities to compete in national games.",
    "choices": [
      {
        "t": "Build Olympic-standard 30,000-seat stadium with Youth Athlete Academy",
        "d": "Proud civic symbol; Nusapura wins bid to host National Sports Games (PON).",
        "news": "Grand Opening of 30,000-seat Nusapura Olympic Stadium and Youth Sports Academy."
      },
      {
        "t": "Refurbish existing running tracks at community school fields",
        "d": "Inexpensive local sports upgrade providing basic recreation for neighborhood schools.",
        "news": "Community athletic running tracks resurfaced across suburban high schools."
      },
      {
        "t": "Prioritize Primary Healthcare Clinics Over Grand Stadium Construction",
        "d": "Rational public health decision, though athletic groups express disappointment.",
        "news": "Sports complex funding deferred in favor of neighborhood health clinics."
      }
    ]
  },
  "694": {
    "cat": "Sidewalk Vendor Upgrading & Modern MSME Plaza",
    "title": "Modern MSME Trade Center: Relocating Sidewalk Stalls into Air-Conditioned Plaza",
    "text": "Downtown sidewalks are impassable due to hundreds of tented street stalls.",
    "choices": [
      {
        "t": "Build modern multi-story MSME Plaza with 1-year free rent & rooftop dining",
        "d": "Clears sidewalks completely while upgrading 800 vendors into prosperous formal shop owners.",
        "news": "New MSME Trade Plaza opens, welcoming 800 former sidewalk vendors into modern stalls."
      },
      {
        "t": "Issue daily permit time windows: sidewalk stalls permitted only 6 PM - midnight",
        "d": "Allows evening street trading while keeping sidewalks clear during daytime office hours.",
        "news": "Evening-only sidewalk vending hours established along commercial avenues."
      },
      {
        "t": "Conduct Forcible Removal of Street Stalls Without Relocation Sites",
        "d": "Town square cleared instantly, but triggers protests and public sympathy for vendors.",
        "news": "Unpermitted street stalls cleared from central square amidst vendor outcry."
      }
    ]
  },
  "695": {
    "cat": "Central Station Transit-Oriented Development (TOD)",
    "title": "Transit-Oriented Development (TOD) at Central Railway Station",
    "text": "The Central Station area suffers from terrible traffic congestion, poor bus connections, and messy parking.",
    "choices": [
      {
        "t": "Construct integrated TOD Skybridge connecting trains, BRT, pedestrian mall & flats",
        "d": "Masterpiece of modern transit: seamless passenger transfers and vibrant transit commerce.",
        "news": "Integrated Central Station TOD Skybridge officially opens to massive public acclaim."
      },
      {
        "t": "Widen station drop-off roundabout and add parking ticket booths",
        "d": "Eases station vehicle pickup flow without integrating citywide public transit modes.",
        "news": "Central railway station drop-off plaza widened to ease passenger vehicle congestion."
      },
      {
        "t": "Maintain Current Station Environs Without Dedicated Transit Zoning",
        "d": "Saves municipal budget, though terminal gridlock and traffic chaos persist.",
        "news": "Central railway station continues standard operations without transit overhaul."
      }
    ]
  },
  "ev_tutorial_apbd_dprd": {
    "cat": "Executive Orientation",
    "title": "[EXECUTIVE PRACTICE CASE] Initial APBD Alignment & Council Approval",
    "text": "Welcome to the Mayor's Executive Desk! Regional Secretary Drs. H. Mulyadi and Parliamentary Budget Committee (Banggar) Chairman Ir. Hendra Gunawan lay down the First-Year General Budget Priorities on your desk.\n\n📘 **EXECUTIVE PRACTICE CASE (YEAR 1 ORIENTATION):**\nAs the newly inaugurated Mayor, master the two fundamental engines of your governance before major crises emerge:\n1. 💰 **APBD (Municipal Treasury):** Every civic program draws from the city treasury. If funds drop into critical deficit (< Rp 1.0 T), the city faces fiscal insolvency.\n2. 🏛️ **Council (DPRD) Relations:** Political harmony with council factions determines your survival. If council relations deteriorate (< 40%), factions can deadlock budgets, submit interpellations, or pursue impeachment.\n\nWhat foundational compromise will you execute to align your inaugural budget?",
    "choices": [
      {
        "t": "Package 1 (Citizen-First): Deploy Direct \"Quick Win\" Spending to Citizens",
        "d": "Allocate Rp 0.4 T for urgent clinic revamps, free ambulances, and ring-road repairs. Citizen approval surges (+8%), but APBD shrinks and council factions grumble as their legislative district pledges wait.",
        "news": "Mayor deploys inaugural Quick Win spending: Healthcare access and public roads surge in quality!"
      },
      {
        "t": "Package 2 (Council Harmonization): Accommodate Council Member Aspirations (Pokir)",
        "d": "Allocate Rp 0.3 T for constituent partnership projects backed by council factions. Council coalition solidifies (+12 DPRD), ensuring effortless ordinance approvals with measured fiscal spending.",
        "news": "Harmonious executive-legislative pact in Nusapura: First-year municipal work plan ratified by council acclamation!"
      },
      {
        "t": "Package 3 (Fiscal Discipline): Restrain Outlays & Fortify Cash Reserves",
        "d": "Enforce administrative efficiency and trim ceremonial overhead (+Rp 0.1 T reserves). State auditors applaud prudent governance, though citizens and council demand immediate concrete projects.",
        "news": "Mayor institutes strict fiscal discipline: Operational cost curbs bolster long-term city cash reserves."
      }
    ]
  },
  "domino_dprd_apbd_boycott": {
    "cat": "Politics",
    "title": "💥 REPERCUSSION: Governing Coalition Boycotts APBD Plenary Session",
    "text": "Following your refusal to grant municipal enterprise (BUMD) directorships to H. Suryo in Year 1, all governing coalition factions boycott the APBD plenary session. Salaries for thousands of contract civil servants and child stunting health funds are on the verge of total paralysis!",
    "choices": [
      {
        "t": "Expose Extortion Documents Publicly & Rally Citizen Pressure on Council",
        "d": "Citizens rally to defend the mayor, but executive-legislative relations are completely shattered.",
        "news": "Mayor reveals documentary evidence of council project kickback extortion to national media."
      },
      {
        "t": "Limited Compromise: Earmark Earmarks Specifically for School Facilities",
        "d": "The plenary session reaches quorum again, though public suspicion of political dealmaking emerges.",
        "news": "APBD plenary session resumes after City Hall agrees on dedicated educational facility funding."
      },
      {
        "t": "Issue Unilateral Emergency Mayoral Decree Without Parliamentary Approval",
        "d": "Municipal services continue uninterrupted, but parliament initiates interpellation proceedings against you.",
        "news": "Mayor enacts emergency decree to bypass budget deadlock; DPRD files formal motion of censure."
      }
    ]
  },
  "domino_bumd_corruption_scandal": {
    "cat": "Politics",
    "title": "💥 REPERCUSSION: Corruption & Extortion Scandal at Patronage-Appointed BUMD",
    "text": "The party cadre you appointed to lead the Municipal Clean Water Enterprise (BUMD PDAM) was caught red-handed collecting illegal extortion fees and slashing field workers' allowances. Hundreds of dry-pipe customers are marching on City Hall!",
    "choices": [
      {
        "t": "Dishonorably Dismiss Directors & Surrender Case to Prosecutors",
        "d": "Citizens rejoice as ethical governance is restored, but coalition party leaders are furious.",
        "news": "Water enterprise board abruptly sacked following extortion findings and pipeline negligence."
      },
      {
        "t": "Form Covert Internal Fact-Finding Team to Protect Coalition Stability",
        "d": "Coalition remains intact on paper, but severe public backlash erupts across social media.",
        "news": "NGO coalition submits documented collusion evidence regarding municipal water board to Judicial Commission."
      }
    ]
  },
  "domino_fishermen_sea_blockade": {
    "cat": "Environment",
    "title": "💥 REPERCUSSION: Hundreds of Fishermen Blockade Commercial Seaport",
    "text": "The coastal reclamation permit for developer Dharmawan Wijaya approved under your watch caused marine siltation and decimated local fish stocks. A flotilla of wooden fishing boats has now blockaded ferries and cargo vessels at the municipal port!",
    "choices": [
      {
        "t": "Temporarily Freeze Reclamation Permit & Provide Fuel Subsidies",
        "d": "The blockade dissolves peacefully, though the property consortium threatens major civil litigation.",
        "news": "Mayor suspends coastal reclamation permit following coordinated blockade by hundreds of fishing boats."
      },
      {
        "t": "Deploy Satpol PP & Maritime Police to Force Open Sea Corridors",
        "d": "Commercial sea lanes reopen rapidly, but violent offshore clashes leave multiple fishermen injured.",
        "news": "Security forces clash with protesting fishermen at logistics cargo terminal."
      }
    ]
  },
  "domino_kpk_hospital_raid": {
    "cat": "Law & Justice",
    "title": "💥 REPERCUSSION: Anti-Corruption Taskforce Raids RSUD Archive Room",
    "text": "The municipal hospital medical equipment procurement probe that you tried to quiet down internally was uncovered by law enforcement. A team of investigators in tactical vests has raided City Hall and seized your executive disposition binders!",
    "choices": [
      {
        "t": "Cooperate Fully & Turn Over All Health Department Financial Ledgers",
        "d": "Your personal integrity is shielded by total transparency, though several senior department officials are named suspects.",
        "news": "City Hall surrenders medical equipment procurement records to anti-corruption investigators in marathon raid."
      },
      {
        "t": "Retain City Legal Counsel to Block Document Seizures",
        "d": "Critical files are shielded, but public opinion widely concludes City Hall is attempting a coverup.",
        "news": "Tense raid at City Hall as municipal legal team denies prosecutors access to executive disposition memos."
      }
    ]
  },
  "domino_family_nepotism_protest": {
    "cat": "Social",
    "title": "💥 REPERCUSSION: Student Demonstrations Protest Mayoral Dynasty",
    "text": "The graft case involving your younger sibling that you shielded from legal consequences has gone viral online. A massive banner reading 'Nusapura Does Not Belong to the Mayor's Family Dynasty' now hangs across the city center monument!",
    "choices": [
      {
        "t": "Deliver Public Apology & Submit Family Member to Due Legal Process",
        "d": "Your family is deeply shaken, but your moral authority and leadership stature are preserved.",
        "news": "Mayor delivers open public apology, affirming no executive immunity for relatives in graft probes."
      },
      {
        "t": "Issue Defensive Rebuttal: \"This Is Slanderous Political Character Assassination!\"",
        "d": "Outraged students pitch an encampment in front of City Hall to demand your immediate resignation.",
        "news": "City Hall denies nepotism allegations as student protesters pitch vigil tents encircling municipal pavilion."
      }
    ]
  },
  "domino_underground_press_expose": {
    "cat": "Media",
    "title": "💥 REPERCUSSION: Investigative Journalists Expose Media Gagging Slush Fund",
    "text": "An alliance of independent journalists has leaked audio recordings and bank transfer receipts showing Communications Agency (Diskominfo) slush funds paid to silence news investigations into diverted flood emergency relief funds!",
    "choices": [
      {
        "t": "Order Thorough Diskominfo Forensic Audit & Terminate Ghost Contracts",
        "d": "Press transparency is restored, and implicated public relations officials are dismissed.",
        "news": "Mayor mandates comprehensive forensic audit into communications spending following media payoff scandal."
      },
      {
        "t": "Threaten Editorial Desks with Criminal Cyber Law (UU ITE) Lawsuits",
        "d": "The National Press Council strongly condemns City Hall for blatant attacks on journalistic freedom.",
        "news": "National Press Council censures City Hall over legal intimidation against investigative journalists."
      }
    ]
  },
  "domino_paramilitary_turf_war": {
    "cat": "Security",
    "title": "💥 REPERCUSSION: Armed Clashes by Client Civic Militia in Central Market",
    "text": "The paramilitary group Garda Nusa, granted parking concession monopolies by City Hall, has grown uncontrollable, extorting produce vendors and engaging in machete brawls with local youth guilds, setting 8 market stalls ablaze!",
    "choices": [
      {
        "t": "Revoke All Militia Concessions & Order Police to Apprehend Ringleaders",
        "d": "Marketplace law and order is swiftly restored, though militia bosses vow electoral retribution in the next Pilkada.",
        "news": "City Police and Satpol PP seize weapons cache at militia market headquarters following violent clashes."
      },
      {
        "t": "Convene Militia Leadership in Private City Hall Room for Reconciliation",
        "d": "Open fighting pauses temporarily, but traders are demoralized as extortion cartels remain entrenched.",
        "news": "Market vendors lament unchecked extortion rackets following closed-door peace talks at City Hall."
      }
    ]
  },
  "domino_flyover_structural_crack": {
    "cat": "Infrastructure",
    "title": "💥 REPERCUSSION: Critical Flyover Fissures & Graft Probe Rumors",
    "text": "The ring-road flyover whose default fines you waived in exchange for an illicit Rp 10B briefcase developed dangerous structural cracks during load stress tests. Engineers expose substandard rebar and rumors of City Hall kickbacks swirl!",
    "choices": [
      {
        "t": "Shut Down Flyover Immediately & Seize Contractor Performance Bond",
        "d": "Citizen safety is safeguarded, and rogue construction executives are dragged before courts.",
        "news": "City ring flyover closed in emergency declaration; City Hall seizes contractor bank guarantee."
      },
      {
        "t": "Inject Emergency APBD Repair Contingencies to Patch Fissures",
        "d": "The overpass reopens sooner, but city cash reserves are drained and suspicion of bribery intensifies.",
        "news": "City Hall disburses billions from contingency reserves to repair cracks on freshly constructed flyover."
      }
    ]
  },
  "domino_ancestral_curse_boycott": {
    "cat": "Social",
    "title": "💥 REPERCUSSION: Customary Tribal Assembly Declares Total Boycott on City Hall",
    "text": "Demolishing sacred ancestral burial grounds for the highway alignment provoked furious wrath from customary tribal elders. The traditional council has issued a solemn edict boycotting all municipal programs and sealing southern district border gates!",
    "choices": [
      {
        "t": "Attend Customary Assembly, Prostrate in Apology & Build Heritage Memorial",
        "d": "Your humility softens the elders' hearts, and traditional harmony with indigenous leaders is restored.",
        "news": "Mayor attends sacred tribal reconciliation rite, presents formal apology, and dedicates heritage memorial."
      },
      {
        "t": "Dismiss Customary Council: \"Modern Urban Progress Cannot Be Held Hostage to Superstition!\"",
        "d": "Furious customary tribesmen padlock and seal sub-district administrative offices across the southern zone.",
        "news": "Customary tribesmen seal district government offices after Mayor dismisses ancestral council petition."
      }
    ]
  },
  "domino_ott_bpk_auditor_bust": {
    "cat": "Law & Justice",
    "title": "💥 REPERCUSSION: Anti-Corruption Agency BPK Auditor Sting at 5-Star Hotel",
    "text": "Regional Audit Board (BPK) auditor Fajar Nugroho was caught red-handed by the KPK accepting kickbacks to grant an Unqualified Audit Opinion (WTP). Inside the evidence envelope was an official Nusapura municipal letterhead memorandum!",
    "choices": [
      {
        "t": "Hand Over Implicated Finance Bureau Officials & Testify Openly",
        "d": "The municipal financial apparatus undergoes a seismic shock, but you avoid being indicted as a suspect.",
        "news": "Mayor cooperates fully, testifying before KPK investigators following audit bribery sting."
      },
      {
        "t": "Claim Extortion: \"Nusapura City Hall Was the Victim of Rogue Auditors!\"",
        "d": "The public remains deeply skeptical, suspecting that the payoff was ordered directly from the executive suite.",
        "news": "KPK traces regional corporate fund flows to audit officials as Mayor claims victimhood from extortion."
      }
    ]
  }
};
