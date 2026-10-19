/**
 * Nusapura Mayoral Electoral Candidates, Profiles & Political Alignment Dataset
 */

const OPPONENT_POOL = [
  {
    id: 'bambang',
    name: 'Drs. H. Bambang Hartono, M.Si',
    title: 'Politisi Senior & Ex-Ketua DPRD',
    title_en: 'Senior Politician & Former City Parliament Speaker',
    party: 'Partai Pembangunan Daerah (PPD)',
    party_en: 'Regional Development Party (PPD)',
    avatar: '👨‍💼',
    vision: 'Infrastruktur Megah & Pertumbuhan Ekonomi',
    vision_en: 'Grand Infrastructure & Rapid Economic Growth',
    bonus: 0,
    desc: 'Memiliki jaringan birokrasi luas dan dukungan pengusaha besar.',
    desc_en: 'Possesses broad bureaucratic networks and strong backing from major business conglomerates.'
  },
  {
    id: 'laksmi',
    name: 'Laksmi Wardhani, M.B.A.',
    title: 'Pengusaha Muda & Ketua HIPMI',
    title_en: 'Young Entrepreneur & Chamber of Commerce Chair',
    party: 'Partai Inovasi Pertiwi (PIP)',
    party_en: 'Pertiwi Innovation Party (PIP)',
    avatar: '👩‍💼',
    vision: 'Ekonomi Kreatif, Smart City & Digitalisasi',
    vision_en: 'Creative Economy, Smart City & Digital Transformation',
    bonus: 2,
    desc: 'Sangat disukai pemilih muda, milenial, dan pelaku UMKM.',
    desc_en: 'Highly popular among youth, millennials, and SME entrepreneurs.'
  },
  {
    id: 'bambang_tri',
    name: 'Kombes Pol (Purn) Bambang Triyono',
    title: 'Mantan Kapolda & Tokoh Keamanan',
    title_en: 'Retired Police Chief & Public Security Leader',
    party: 'Partai Persatuan Warga (PPW)',
    party_en: 'Citizens Union Party (PPW)',
    avatar: '🎖️',
    vision: 'Ketertiban, Bebas Begal & Penegakan Hukum',
    vision_en: 'Order, Zero Street Crime & Strict Law Enforcement',
    bonus: 3,
    desc: 'Tegas dan populer di kalangan pemilih senior & perumahan.',
    desc_en: 'Strict and authoritative, favored by senior citizens and suburban residents.'
  },
  {
    id: 'ahmad_rijal',
    name: 'Ahmad Rijal, M.Sc.',
    title: 'Aktivis Reformasi & Tokoh LSM',
    title_en: 'Reformist Activist & NGO Leader',
    party: 'Partai Reformasi & Keadilan (PRK)',
    party_en: 'Reform & Justice Party (PRK)',
    avatar: '👨‍🏫',
    vision: 'Pemerintahan Bersih, Anti-Pungli & Pendidikan Gratis',
    vision_en: 'Clean Governance, Zero Corruption & Free Quality Education',
    bonus: 4,
    desc: 'Vokal membongkar dugaan korupsi dan disukai akademisi.',
    desc_en: 'Vocal in exposing corrupt practices, favored by students and academics.'
  },
  {
    id: 'agus_mulyana',
    name: 'H. Agus Mulyana, S.Ag.',
    title: 'Pengasuh Pesantren & Tokoh Agama',
    title_en: 'Spiritual Leader & Boarding School Caretaker',
    party: 'Partai Kebangkitan Ummat (PKU)',
    party_en: "People's Awakening Party (PKU)",
    avatar: '☪️',
    vision: 'Kota Religius, Harmoni & Insentif Rumah Ibadah',
    vision_en: 'Religious Harmony, Civic Ethics & House of Worship Support',
    bonus: 3,
    desc: 'Didukung majelis taklim, tokoh agama, dan Ormas keagamaan.',
    desc_en: 'Broadly backed by religious councils, grassroots community leaders, and faith groups.'
  },
  {
    id: 'dr_sutrisno',
    name: 'Dr. Prof. Sutrisno, Sp.OG',
    title: 'Guru Besar Kesehatan & Ex-Direktur RSUD',
    title_en: 'Professor of Medicine & Former Regional Hospital Director',
    party: 'Partai Nusa Sejahtera (PNS)',
    party_en: 'Nusa Welfare Party (PNS)',
    avatar: '👨‍⚕️',
    vision: 'Kesehatan Gratis, Nusapura Bebas Stunting & RS Modern',
    vision_en: 'Universal Healthcare, Zero Stunting & Modern Regional Hospitals',
    bonus: 2,
    desc: 'Fokus pada pelayanan kesehatan dasar gratis & fasilitas RSUD.',
    desc_en: 'Champion of free primary healthcare and world-class hospital facilities.'
  }
];

function pickRandomOpponent() {
  const idx = Math.floor(Math.random() * OPPONENT_POOL.length);
  state.opponentCand = OPPONENT_POOL[idx];
  return state.opponentCand;
}

/* ==================== MAYOR DISTINCT PERSONAL LIFE PROFILES ==================== */
const MAYOR_PERSONAL_PROFILES = {
  ardhan: {
    id: 'ardhan',
    name: 'Ardhan Wicaksono, S.T., M.T.',
    gender: 'male',
    avatar: '👨‍💼',
    age: 44,
    wealth: 2.40,
    salary: 0.35,
    spouse: 'dr. Sarah Nabila, Sp.A. (Dokter Spesialis Anak RSUD)',
    spouse_en: 'Dr. Sarah Nabila, MD (Pediatric Specialist at Public Hospital)',
    spouseRole: 'Dokter Spesialis Anak di RSUD',
    spouseRole_en: 'Pediatric Specialist at Public Hospital',
    childrenCount: 2,
    childrenDesc: 'Dimas (Mahasiswa Teknik Arsitektur) & Rania (Siswi SMA)',
    childrenDesc_en: 'Dimas (Architecture Student) & Rania (High School Student)',
    house: 'Rumah Studio Desain Asri (Kec. Nusa Tengah)',
    house_en: 'Serene Eco-Design Studio Residence (Central Nusa District)',
    car: 'SUV Listrik Hybrid Ramah Lingkungan',
    car_en: 'Eco-Friendly Electric Hybrid SUV',
    hobby: 'Sketsa lanskap kota, bersepeda santai jalur pedestrian, membaca jurnal tata ruang',
    hobby_en: 'Urban landscape sketching, recreational cycling on pedestrian paths, reading urban design treatises',
    personalBrief: 'Menikah dengan dokter spesialis anak, ayah 2 anak, tinggal di studio arsitektur berpanel surya.',
    personalBrief_en: 'Married to a pediatrician, father of two, resides in a serene solar-powered eco-studio.'
  },
  dian: {
    id: 'dian',
    name: 'Dr. Hj. Dian Paramita, S.E., M.Ec.',
    gender: 'female',
    avatar: '👩‍💼',
    age: 46,
    wealth: 3.80,
    salary: 0.35,
    spouse: 'Ir. H. Budi Santoso, M.M. (Dosen Senior Teknik & Pengusaha Agro)',
    spouse_en: 'Prof. Budi Santoso, Ph.D. (Senior Engineering Lecturer & Agro-Enterpriser)',
    spouseRole: 'Dosen Senior Teknik & Pengusaha Agro',
    spouseRole_en: 'Senior Engineering Lecturer & Agro-Enterpriser',
    childrenCount: 3,
    childrenDesc: 'Aditya (Analis Keuangan), Maya (Mahasiswi Kedokteran), Rizky (Siswa SMP)',
    childrenDesc_en: 'Aditya (Financial Analyst), Maya (Medical Student), Rizky (Junior High Student)',
    house: 'Wisma Asri Paviliun Anggrek (Kawasan Candi Nusa)',
    house_en: 'Orchid Pavilion Family Villa (Candi Nusa Hills)',
    car: 'Sedan Eksekutif Premium & Minibus Keluarga',
    car_en: 'Premium Executive Sedan & Family Van',
    hobby: 'Membina koperasi tenun perempuan, budidaya anggrek langka, memasak kuliner nusantara',
    hobby_en: 'Mentoring women weaving cooperatives, rare orchid cultivation, regional culinary cooking',
    personalBrief: 'Menikah dengan dosen teknik/pengusaha agro, ibu 3 anak, aktif memajukan UMKM keluarga.',
    personalBrief_en: 'Married to an engineering scholar/agro-founder, mother of three, avid family cooperative mentor.'
  },
  tari: {
    id: 'tari',
    name: 'Tari Ratnasari, S.H., M.Kn.',
    gender: 'female',
    avatar: '👩‍⚖️',
    age: 38,
    wealth: 1.20,
    salary: 0.35,
    spouse: 'Fajar Nugroho, M.Hum. (Jurnalis Investigasi Independen & Penulis)',
    spouse_en: 'Fajar Nugroho, M.A. (Independent Investigative Journalist & Author)',
    spouseRole: 'Jurnalis Investigasi Independen & Penulis',
    spouseRole_en: 'Independent Investigative Journalist & Author',
    childrenCount: 1,
    childrenDesc: 'Kirana (Siswi SD Pecinta Satwa & Lingkungan)',
    childrenDesc_en: 'Kirana (Elementary Student & Eco-Kid Activist)',
    house: 'Rumah Minimalis Tenaga Surya (Pesisir Pantai Melati)',
    house_en: 'Solar-Powered Minimalist Home (Melati Coast)',
    car: 'Mobil Listrik Compact Perkotaan',
    car_en: 'Compact Urban Electric Vehicle',
    hobby: 'Trekking konservasi mangrove, lari maraton pesisir pantai, advokasi hukum gratis warga miskin',
    hobby_en: 'Mangrove conservation trekking, coastal marathon running, pro-bono legal literacy clinics',
    personalBrief: 'Menikah dengan jurnalis investigasi, ibu 1 anak, gaya hidup bersahaja dan bebas emisi karbon.',
    personalBrief_en: 'Married to an investigative journalist, mother of one, lives a modest zero-emission coastal lifestyle.'
  },
  hendra: {
    id: 'hendra',
    name: 'Ir. Hendra Kusuma, M.B.A.',
    gender: 'male',
    avatar: '👨‍💻',
    age: 41,
    wealth: 4.50,
    salary: 0.35,
    spouse: 'Clarissa Hartono, B.Des. (Creative Director & Kurator Seni Rupa)',
    spouse_en: 'Clarissa Hartono, B.Des. (Creative Director & Contemporary Art Curator)',
    spouseRole: 'Creative Director & Kurator Seni Rupa',
    spouseRole_en: 'Creative Director & Contemporary Art Curator',
    childrenCount: 2,
    childrenDesc: 'Nathan (Siswa SMP Kreator Game Edukatif) & Chloe (Siswi SD)',
    childrenDesc_en: 'Nathan (Junior High Game Creator) & Chloe (Elementary Student)',
    house: 'Smart Home Otomasi Terintegrasi (Kawasan Digital Park)',
    house_en: 'Integrated Automated Smart Home (Digital Park District)',
    car: 'Sedan Listrik Cerdas Otonom Fast-Charging',
    car_en: 'Autonomous Smart Fast-Charging Electric Sedan',
    hobby: 'Eksperimen gawai IoT, tenis lapangan akhir pekan, mentor inkubator startup teknologi muda',
    hobby_en: 'IoT hardware experimentation, weekend tennis, mentoring youth technology startup founders',
    personalBrief: 'Menikah dengan direktur kreatif/kurator seni, ayah 2 anak, tinggal di hunian cerdas IoT terintegrasi.',
    personalBrief_en: 'Married to a creative director/art curator, father of two, resides in an integrated IoT smart home.'
  },
  farhan: {
    id: 'farhan',
    name: 'Dr. dr. H. Farhan Zulkarnain, Sp.A., M.P.H.',
    gender: 'male',
    avatar: '👨‍⚕️',
    age: 49,
    wealth: 2.80,
    salary: 0.35,
    spouse: 'drg. Hj. Rina Marlina, Sp.Ort. (Dokter Gigi Spesialis & Relawan Posyandu)',
    spouse_en: 'Dr. Rina Marlina, DDS (Orthodontic Specialist & Senior Wellness Volunteer)',
    spouseRole: 'Dokter Gigi Spesialis & Relawan Posyandu',
    spouseRole_en: 'Orthodontic Specialist & Senior Wellness Volunteer',
    childrenCount: 2,
    childrenDesc: 'dr. Kevin Zulkarnain (Residen Bedah RSUD) & Nadia (Mahasiswi Farmasi)',
    childrenDesc_en: 'Dr. Kevin Zulkarnain (Hospital Surgical Resident) & Nadia (Pharmacy Student)',
    house: 'Rumah Asri Taman Herbal & Apotek Hidup (Kec. Nusa Sehat)',
    house_en: 'Herbal Garden Family Residence (Nusa Sehat District)',
    car: 'SUV Tangguh Kunjungan Pelosok & Ambulans Siaga',
    car_en: 'Rugged Outreach All-Terrain SUV & Standby Medical Vehicle',
    hobby: 'Bakti sosial medis keliling kampung, merawat tanaman obat herbal, jalan pagi santai',
    hobby_en: 'Pro-bono mobile neighborhood health clinics, cultivating medicinal herbs, brisk morning walks',
    personalBrief: 'Menikah dengan dokter gigi/relawan kesehatan, ayah 2 anak di bidang medis, pelopor posyandu terpadu.',
    personalBrief_en: 'Married to a dentist/wellness volunteer, father of two in healthcare, grassroots clinic pioneer.'
  }
};

function initLifeState(mayorId) {
  const mId = mayorId || state.selectedMayor || (state.mayorCandidate ? state.mayorCandidate.id : 'ardhan');
  const prof = MAYOR_PERSONAL_PROFILES[mId] || MAYOR_PERSONAL_PROFILES['ardhan'];
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  return {
    mayorId: mId,
    age: prof.age,
    health: 85,
    stress: 20,
    wealth: prof.wealth,
    reputation: 75,
    familyRel: 85,
    salary: prof.salary || 0.35,
    spouse: prof.spouse,
    spouse_en: prof.spouse_en,
    childrenCount: prof.childrenCount,
    childrenDesc: prof.childrenDesc,
    childrenDesc_en: prof.childrenDesc_en,
    house: prof.house,
    house_en: prof.house_en,
    car: prof.car,
    car_en: prof.car_en,
    hobby: prof.hobby,
    hobby_en: prof.hobby_en,
    avatar: prof.avatar,
    investments: [],
    journal: [
      {
        year: 1,
        text: `🎉 Resmi dilantik sebagai Walikota Nusapura. Kekayaan pribadi LHKPN tercatat Rp ${prof.wealth.toFixed(2)} Miliar.`,
        text_en: `🎉 Officially inaugurated as Mayor of Nusapura. LHKPN declared net worth at Rp ${prof.wealth.toFixed(2)} Billion.`
      }
    ]
  };
}

function syncLifeTranslations() {
  if (!state.life) {
    state.life = initLifeState(state.selectedMayor);
    return;
  }
  const mId = state.life.mayorId || state.selectedMayor || (state.mayorCandidate ? state.mayorCandidate.id : 'ardhan');
  const prof = MAYOR_PERSONAL_PROFILES[mId] || MAYOR_PERSONAL_PROFILES['ardhan'];
  state.life.mayorId = mId;
  if (!state.life.spouse_en) state.life.spouse_en = prof.spouse_en;
  if (!state.life.childrenDesc) state.life.childrenDesc = prof.childrenDesc;
  if (!state.life.childrenDesc_en) state.life.childrenDesc_en = prof.childrenDesc_en;
  if (!state.life.house_en) state.life.house_en = prof.house_en;
  if (!state.life.car_en) state.life.car_en = prof.car_en;
  if (!state.life.hobby) state.life.hobby = prof.hobby;
  if (!state.life.hobby_en) state.life.hobby_en = prof.hobby_en;
  if (!state.life.avatar) state.life.avatar = prof.avatar;
}

/* ==================== MAYOR PLAYABLE CANDIDATES POOL ==================== */
const MAYOR_CANDIDATES = [
  {
    id: 'ardhan',
    name: 'Ardhan Wicaksono, S.T., M.T.',
    gender: 'male',
    title: 'Arsitek Perencana Kota & Tokoh Reformis',
    title_en: 'Urban Planning Architect & Reformist Leader',
    avatar: '👨‍💼',
    background: 'Tata Ruang Modern & Infrastruktur Berkelanjutan',
    background_en: 'Modern Urban Planning & Sustainable Infrastructure',
    badge: '🏗️ Arsitek Megapolitan',
    badge_en: '🏗️ Megacity Architect',
    desc: 'Alumnus teknik perkotaan dengan rekam jejak membenahi kawasan kumuh, transportasi publik terintegrasi, dan ruang terbuka hijau.',
    desc_en: 'Urban engineering alumnus with a proven track record revamping dense districts, transit integration, and public green canopy.',
    bonusText: 'Infrastruktur +8, Efisiensi Proyek APBD +15%, Risiko Banjir -5%',
    bonusText_en: 'Infrastructure +8, APBD Project Efficiency +15%, Flood Risk -5%',
    bonus: {
      infra: 8,
      flood: -5,
      elek: 4,
      bonusApbd: 0.2
    },
    uniqueTrait: 'Visi Tata Kota Berkelanjutan',
    uniqueTrait_en: 'Sustainable Urban Masterplan'
  },
  {
    id: 'dian',
    name: 'Dr. Hj. Dian Paramita, S.E., M.Ec.',
    gender: 'female',
    title: 'Ekonom Pembangunan & Tokoh Filantropi',
    title_en: 'Development Economist & Civic Philanthropist',
    avatar: '👩‍💼',
    background: 'Ekonomi Kerakyatan, UMKM & Kesejahteraan Sosial',
    background_en: 'People Economics, SME Empowerment & Social Welfare',
    badge: '📈 Srikandi Ekonomi',
    badge_en: '📈 Economic Srikandi',
    desc: 'Mantan direktur lembaga riset fiskal dan aktivis pemberdayaan ekonomi perempuan. Memprioritaskan pengentasan kemiskinan dan ketahanan pangan keluarga.',
    desc_en: 'Former fiscal research institute director and women empowerment pioneer. Prioritizes poverty reduction, SME funding, and family social safety nets.',
    bonusText: 'PAD +0.3 T, Kemiskinan -5%, Sentimen Warga +5%',
    bonusText_en: 'PAD +0.3 T, Poverty -5%, Citizen Sentiment +5%',
    bonus: {
      pad: 0.3,
      pov: -5,
      sat: 5,
      elek: 4
    },
    uniqueTrait: 'Jejaring Kesejahteraan Kerakyatan',
    uniqueTrait_en: 'Grassroots Welfare Coalition'
  },
  {
    id: 'tari',
    name: 'Tari Ratnasari, S.H., M.Kn.',
    gender: 'female',
    title: 'Aktivis Anti-Korupsi & Advokat Lingkungan',
    title_en: 'Anti-Corruption Advocate & Eco-Jurist',
    avatar: '👩‍⚖️',
    background: 'Transparansi Birokrasi, Hukum Bersih & Ekologi',
    background_en: 'Bureaucratic Transparency, Clean Rule of Law & Ecology',
    badge: '🛡️ Penegak Integritas',
    badge_en: '🛡️ Integrity Enforcer',
    desc: 'Pengacara publik gigih yang membongkar kartel perizinan liar dan memperjuangkan audit terbuka APBD serta perlindungan teluk pesisir.',
    desc_en: 'Courageous public interest litigator who dismantled permit cartels and championed radical open-data APBD audits and coastal ecology.',
    bonusText: 'Risiko Korupsi -10%, Lingkungan Hidup +8, Hubungan LSM & BPK +15',
    bonusText_en: 'Corruption Risk -10%, Environment +8, NGO & BPK Relations +15',
    bonus: {
      env: 8,
      riskKorupsi: -10,
      actorLsm: 15,
      actorBpk: 15,
      elek: 3
    },
    uniqueTrait: 'E-Audit & Advokasi Hijau',
    uniqueTrait_en: 'E-Auditing & Green Defense'
  },
  {
    id: 'hendra',
    name: 'Ir. Hendra Kusuma, M.B.A.',
    gender: 'male',
    title: 'Technopreneur & Mantan Eksekutif BUMD',
    title_en: 'Technopreneur & Former BUMD Executive',
    avatar: '👨‍💻',
    background: 'Smart City, Digitalisasi Layanan & Investasi',
    background_en: 'Smart City, Digital Governance & Venture Inflows',
    badge: '🌐 Inovator Smart City',
    badge_en: '🌐 Smart City Innovator',
    desc: 'Pelopor transformasi digital daerah yang sukses mengintegrasikan sistem perizinan satu pintu dan menarik modal startup ke Nusapura.',
    desc_en: 'Digital transformation pioneer who unified single-window permitting and catalyzed startup venture capital inflows into Nusapura.',
    bonusText: 'Investasi +10, Pengangguran -4%, Kepuasan Gen-Z +8%',
    bonusText_en: 'Investment +10, Unemployment -4%, Youth Sentiment +8%',
    bonus: {
      inv: 10,
      unemp: -4,
      elek: 3,
      sat: 3
    },
    uniqueTrait: 'Ekosistem Digital Terpadu',
    uniqueTrait_en: 'Integrated Digital Ecosystem'
  },
  {
    id: 'farhan',
    name: 'Dr. dr. H. Farhan Zulkarnain, Sp.A., M.P.H.',
    gender: 'male',
    title: 'Dokter Spesialis Anak & Reformis Layanan Medis',
    title_en: 'Pediatric Specialist & Public Health Reformer',
    avatar: '👨‍⚕️',
    background: 'Kesehatan Gratis, Puskesmas 24 Jam & Eliminasi Stunting',
    background_en: 'Universal Healthcare, 24/7 Community Clinics & Stunting Eradication',
    badge: '🩺 Pendekar Kesehatan Rakyat',
    badge_en: '🩺 Healthcare Vanguard',
    desc: 'Mantan direktur RSUD teladan dan dokter anak berdedikasi tinggi. Terjun ke panggung politik demi mewujudkan layanan kesehatan gratis bermartabat, perbaikan gizi balita miskin, dan sanitasi bersih bagi seluruh warga Nusapura.',
    desc_en: 'Former pioneering public hospital director and compassionate pediatrician. Entered civic leadership to ensure dignified free healthcare, eradicate child malnutrition, and bring clean sanitation to every corner of Nusapura.',
    bonusText: 'Kesehatan +10, Kepuasan Publik +8%, Stunting & Kemiskinan -4%',
    bonusText_en: 'Health +10, Public Satisfaction +8%, Stunting & Poverty -4%',
    bonus: {
      health: 10,
      sat: 8,
      pov: -4,
      elek: 4
    },
    uniqueTrait: 'Layanan Medis Semesta & Gizi Balita',
    uniqueTrait_en: 'Universal Healthcare & Child Nutrition'
  }
];

/* ==================== MAYOR EXCLUSIVE CITY EVENTS ==================== */
const MAYOR_CITY_EVENTS = [
  // --- ARDHAN WICAKSONO (Arsitek Perencana Kota) ---
  {
    id: 'ev_ardhan_tod_heritage',
    candId: 'ardhan',
    cat: 'Infrastruktur & Tata Ruang',
    cat_en: 'Infrastructure & Urban Design',
    priority: 16,
    icon: '🏗️',
    title: 'Masterplan TOD Stasiun Sentral & Preservasi Cagar Budaya',
    title_en: 'Central Station TOD Masterplan & Heritage Preservation',
    actor: 'Pengembang',
    relatedActors: ['Pengembang', 'KomunitasLingkungan', 'Mahasiswa'],
    text: 'Sebagai arsitek perencana kota, Anda menerima rancangan revitalisasi Stasiun Sentral Nusapura. Konsorsium pengembang ingin merobohkan gudang cagar budaya kolonial untuk dijadikan megamall komersial, sementara arsitek muda mendesak konsep Transit-Oriented Development (TOD) hijau ramah pedestrian.',
    text_en: 'As an urban planning architect, you review the revitalization blueprint for Nusapura Central Station. A private developer consortium proposes demolishing colonial heritage warehouses for a mega commercial mall, while urbanist architects push for a green Transit-Oriented Development (TOD) pedestrian-canopy corridor.',
    choices: [
      {
        t: 'Desain Kawasan Hijau TOD Terintegrasi & Restorasi Cagar Budaya (APBD -0.2 T)',
        t_en: 'Enact Green TOD Integrated Corridor & Heritage Restoration (APBD -0.2 T)',
        d: 'Alokasikan APBD untuk ruang publik terbuka, jalur sepeda, dan hub transportasi massal dengan tetap merestorasi bangunan bersejarah.',
        d_en: 'Allocate municipal funds for open public plazas, cycleways, and unified transit hubs while restoring historic landmarks.',
        fx: { apbd: -0.2, infra: 8, env: 6, sat: 7 },
        actors: { KomunitasLingkungan: 15, Mahasiswa: 12, Pengembang: -6 },
        news: 'Walikota Ardhan resmikan rancangan Stasiun Sentral: Konsep TOD hijau terpadu pertahankan cagar budaya!',
        news_en: 'Mayor Ardhan unveils Central Station blueprint: Green TOD masterplan preserves colonial heritage!',
        mood: 1
      },
      {
        t: 'Beri Izin Penuh Konsorsium Megamall (Kas APBD +0.4 T, RTH Berkurang)',
        t_en: 'Grant Full Permitting to Megamall Consortium (APBD +0.4 T, Green Area Shrinks)',
        d: 'Beri karpet merah bagi modal swasta. Pundi kas bertambah, namun cagar budaya hilang dan memicu protes arsitek serta warga.',
        d_en: 'Roll out red carpet for private capital. City revenues surge, but historical heritage is lost, sparking outrage from architects.',
        fx: { apbd: 0.4, pad: 0.2, env: -8, sat: -6 },
        actors: { Pengembang: 20, Investor: 15, KomunitasLingkungan: -15, Mahasiswa: -10 },
        news: 'Kawasan Stasiun Sentral diserahkan ke pengembang mall: Komunitas budayawan dan arsitek layangkan somasi.',
        news_en: 'Central Station precinct leased to private mall developer: Heritage advocates and architects file formal protest.',
        mood: -1
      }
    ]
  },
  {
    id: 'ev_ardhan_drainase_sungai',
    candId: 'ardhan',
    cat: 'Tata Ruang & Lingkungan',
    cat_en: 'Urban Ecology & Water Management',
    priority: 15,
    icon: '🌊',
    title: 'Desain Lanskap Retensi Banjir & Koridor Taman Sungai Kali Nusa',
    title_en: 'Kali Nusa Sponge-City Retention Basins & Riverfront Park Corridor',
    actor: 'KomunitasLingkungan',
    relatedActors: ['KomunitasLingkungan', 'Pengusaha', 'ASN'],
    text: 'Mengaplikasikan konsep sponge-city (kota spons), Anda merancang waduk retensi alami dan taman sempadan Kali Nusa yang multifungsi sebagai ruang publik rekreasi sekaligus menampung luapan air bah musim hujan.',
    text_en: 'Applying the sponge-city urban design paradigm, you design natural retention basins and riparian parklands along Kali Nusa, doubling as scenic recreational spaces that absorb torrential wet-season flash floods.',
    choices: [
      {
        t: 'Bangun Koridor Taman Spons Kali Nusa Terpadu (APBD -0.2 T, Risiko Banjir -10%)',
        t_en: 'Construct Integrated Kali Nusa Sponge-Park Corridor (APBD -0.2 T, Flood -10%)',
        d: 'Prioritaskan tata ruang hijau berbasis ekologi dengan pengerjaan drainase porous dan vegetasi tangkapan air.',
        d_en: 'Prioritize ecology-based green space with permeable paving and deep-root water catchment vegetation.',
        fx: { apbd: -0.2, flood: -10, env: 8, sat: 8, infra: 6 },
        actors: { KomunitasLingkungan: 18, LSM: 12, Pengusaha: -4 },
        news: 'Arsitektur hijau Walikota Ardhan terbukti ampuh: Koridor Kali Nusa redam banjir dan jadi magnet wisata warga!',
        news_en: 'Mayor Ardhan green architecture succeeds: Kali Nusa corridor curbs floods and becomes scenic public attraction!',
        mood: 1
      },
      {
        t: 'Gunakan Beton Konvensional Saja demi Efisiensi Anggaran',
        t_en: 'Rely Solely on Conventional Concrete Embankments to Save Budget',
        d: 'Terapkan betonisasi kaku tanpa ruang terbuka hijau publik.',
        d_en: 'Install rigid concrete walls without public green canopies or recreational riverfront parks.',
        fx: { flood: -5, env: -4, sat: -2 },
        actors: { Pengusaha: 8, KomunitasLingkungan: -10 },
        news: 'Normalisasi Kali Nusa gunakan dinding beton kaku: Pegiat lingkungan kritik minimnya resapan air alami.',
        news_en: 'Kali Nusa flood control uses stark concrete walls: Environmentalists lament lack of ecological retention.',
        mood: 0
      }
    ]
  },

  // --- DR. HJ. DIAN PARAMITA (Srikandi Ekonomi & UMKM) ---
  {
    id: 'ev_dian_pangan_intervensi',
    candId: 'dian',
    cat: 'Ekonomi & Ketahanan Pangan',
    cat_en: 'Economy & Food Security',
    priority: 16,
    icon: '🌾',
    title: 'Badai Inflasi Sembako & Spekulasi Kartel Pasar Induk',
    title_en: 'Food Price Inflation & Wholesale Cartel Profiteering',
    actor: 'Pengusaha',
    relatedActors: ['Pengusaha', 'LSM', 'SerikatBuruh'],
    text: 'Sebagai pakar ekonomi pembangunan, Anda mendapati harga beras, minyak, dan cabai melonjak 35% akibat ulah tengkulak di Pasar Induk Nusapura. Ibu-ibu rumah tangga dan pedagang warteg mulai resah karena daya beli tercekik.',
    text_en: 'As a development economist, you identify a 35% spike in rice, cooking oil, and chili prices driven by middleman hoarding at Nusapura Wholesale Market. Housewives and small street food stalls are reeling from eroded purchasing power.',
    choices: [
      {
        t: 'Gelar Operasi Pasar Murah Masif & Bentuk BUMD Logistik Pangan Berdikari (APBD -0.2 T)',
        t_en: 'Deploy Mass Subsidized Food Bazaars & Establish Municipal Food Enterprise (APBD -0.2 T)',
        d: 'Beli pasokan langsung dari petani daerah penghasil, potong rantai tengkulak, dan jual dengan harga HET subsidi ke warga miskin.',
        d_en: 'Procure supply directly from regional farmers, eliminate intermediary cartels, and sell at regulated subsidized rates to low-income families.',
        fx: { apbd: -0.2, pov: -6, sat: 10, pad: 0.1 },
        actors: { LSM: 15, SerikatBuruh: 12, Pengusaha: -10 },
        news: 'Ibu Walikota Dian gebrak operasi pasar sembako murah: Rantai spekulan diputus lewat BUMD Pangan Berdikari!',
        news_en: 'Mayor Dian launches aggressive staple food bazaar: Speculative cartels bypassed via Municipal Food Enterprise!',
        mood: 1
      },
      {
        t: 'Terapkan Pendekatan Pasar Bebas & Serahkan ke Mekanisme Suplai Swasta',
        t_en: 'Rely on Free Market Supply & Private Wholesaler Self-Regulation',
        d: 'Hindari subsidi kas daerah dan berharap harga turun sendiri saat panen raya tiba.',
        d_en: 'Avoid municipal cash outlays, assuming prices will naturally stabilize once seasonal harvests peak.',
        fx: { sat: -8, pov: 4 },
        actors: { Pengusaha: 10, LSM: -10, SerikatBuruh: -12 },
        news: 'Harga sembako masih melangit di Nusapura: Warga keluhkan lambannya intervensi Pemkot atasi inflasi pangan.',
        news_en: 'Staple food prices remain sky-high in Nusapura: Citizens voice frustration over passive municipal inflation response.',
        mood: -1
      }
    ]
  },
  {
    id: 'ev_dian_srikandi_umkm',
    candId: 'dian',
    cat: 'Ekonomi Kerakyatan & UMKM',
    cat_en: 'Grassroots Economy & SMEs',
    priority: 15,
    icon: '👩‍🍳',
    title: 'Program Inkubasi Sentra Kuliner Tradisional & Koperasi Srikandi',
    title_en: 'Traditional Culinary Hub Incubation & Srikandi Cooperative Program',
    actor: 'SerikatBuruh',
    relatedActors: ['SerikatBuruh', 'Pengusaha', 'LSM'],
    text: 'Anda merancang revitalisasi pusat jajanan kaki lima dan sentra oleh-oleh kota menjadi pusat kuliner higienis bersertifikasi halal & BPOM dengan pembayaran QRIS, memberdayakan ribuan pedagang kecil perempuan.',
    text_en: 'You formulate a city-wide revitalization of street food hawkers and handicraft centers into hygienic, certified culinary promenades with QRIS integration, uplifting thousands of female entrepreneurs.',
    choices: [
      {
        t: 'Beri Bantuan Gerobak Higienis, Sertifikasi Gratis & Akses Kredit Nol Bunga (APBD -0.15 T)',
        t_en: 'Provide Hygienic Carts, Free Certification & Zero-Interest Micro-Loans (APBD -0.15 T)',
        d: 'Suntikkan stimulan usaha bagi ribuan pelaku UMKM kuliner. Kemiskinan menurun drastis dan sentra kuliner jadi ikon wisata baru.',
        d_en: 'Provide seed subsidies for thousands of micro-food vendors. Poverty drops substantially and culinary promenades become tourism hubs.',
        fx: { apbd: -0.15, pov: -7, unemp: -5, pad: 0.25, sat: 9 },
        actors: { SerikatBuruh: 16, LSM: 14, Pengusaha: 6 },
        news: 'Sentra Kuliner Srikandi Nusapura viral: Ribuan pedagang kecil naik kelas dan ekonomi warga bergairah!',
        news_en: 'Nusapura Srikandi Food Promenades go viral: Thousands of hawkers flourish and local tourism surges!',
        mood: 1
      },
      {
        t: 'Fokuskan Dana Promosi Hanya untuk Restoran Mewah & Hotel Bintang Lima',
        t_en: 'Focus Tourism Promotions Exclusively on Luxury Fine-Dining & Five-Star Hotels',
        d: 'Prioritaskan turis berkantong tebal, namun mengabaikan kebutuhan ribuan pedagang kaki lima tradisional.',
        d_en: 'Cater exclusively to high-end visitors while neglecting grassroots street food vendors.',
        fx: { pad: 0.1, sat: -5, pov: 2 },
        actors: { Pengusaha: 12, SerikatBuruh: -12, LSM: -10 },
        news: 'Pedagang kaki lima keluhkan diskriminasi: Pemkot dinilai hanya menganakemaskan restoran mewah.',
        news_en: 'Street vendors voice grievances over unequal support: City Hall accused of favoring luxury hospitality chains.',
        mood: -1
      }
    ]
  },

  // --- TARI RATNASARI (Penegak Integritas & Advokat Lingkungan) ---
  {
    id: 'ev_tari_investigasi_tambang',
    candId: 'tari',
    cat: 'Hukum & Lingkungan',
    cat_en: 'Law & Eco-Justice',
    priority: 16,
    icon: '⚖️',
    title: 'Pembongkaran Sindikat Izin Tambang Pasir Teluk Ilegal',
    title_en: 'Crackdown on Illegal Coastal Sand Mining Syndicate',
    actor: 'LSM',
    relatedActors: ['LSM', 'Pengusaha', 'Kejaksaan', 'BPK'],
    text: 'Sebagai advokat anti-korupsi dan hukum lingkungan, Anda menerima berkas investigasi rahasia bahwa izin pengerukan pasir pesisir diterbitkan secara ilegal oleh pejabat dinas korup dengan suap miliaran rupiah, menyebabkan abrasi parah di kampung nelayan.',
    text_en: 'As an anti-corruption attorney and eco-jurist, you obtain a confidential dossier proving coastal dredging permits were illicitly issued by corrupt municipal officials for billions in bribes, inflicting devastating coastal erosion on fishing hamlets.',
    choices: [
      {
        t: 'Cabut Izin Tambang, Segel Tongkang & Serahkan Berkas ke Kejaksaan/KPK',
        t_en: 'Revoke Dredging Permits, Impound Barges & Transfer Dossier to Prosecutors/KPK',
        d: 'Tindak tegas tanpa kompromi. Tegakkan supremasi hukum, lindungi ekosistem teluk, dan bersihkan pejabat dinas yang terlibat.',
        d_en: 'Zero tolerance enforcement. Uphold rule of law, protect coastal ecology, and prosecute implicated bureaucratic heads.',
        fx: { env: 10, sat: 9, risk: -15 },
        actors: { LSM: 20, BPK: 15, KomunitasLingkungan: 20, Pengusaha: -15, DPRD: -8 },
        news: 'Ketegasan Ibu Walikota Tari: Izin tambang pasir teluk dicabut total, pejabat korup diseret ke ranah hukum!',
        news_en: 'Resolute action by Mayor Tari: Coastal dredging permits terminated, corrupt officials referred for criminal prosecution!',
        mood: 1
      },
      {
        t: 'Beri Denda Administratif & Minta Perusahaan Berikan Dana CSR Nelayan',
        t_en: 'Impose Administrative Fine & Mandate Corporate CSR Compensation for Fishermen',
        d: 'Pilih jalur damai agar tidak ribut dengan pemodal besar dan anggota dewan yang membekingi proyek.',
        d_en: 'Take a soft compromise route to avoid clashes with oligarchic investors and council members backing the operation.',
        fx: { apbd: 0.2, risk: 10, sat: -6, env: -5 },
        actors: { Pengusaha: 12, DPRD: 10, LSM: -15, KomunitasLingkungan: -15 },
        news: 'Tambang teluk tetap beroperasi dengan denda ringan: Koalisi nelayan dan aktivis lingkungan kecewa berat.',
        news_en: 'Coastal sand mining continues under token fine: Fishermen alliance and green activists stage sit-in protest.',
        mood: -1
      }
    ]
  },
  {
    id: 'ev_tari_open_budget_audit',
    candId: 'tari',
    cat: 'Tata Kelola & Anti-Korupsi',
    cat_en: 'Governance & Transparency',
    priority: 15,
    icon: '🛡️',
    title: 'Pemberlakuan Sistem Audit E-Katalog & Portal Anggaran Transparan',
    title_en: 'Open E-Procurement Audit System & Transparent Public Budget Portal',
    actor: 'BPK',
    relatedActors: ['BPK', 'DPRD', 'LSM', 'Mahasiswa'],
    text: 'Anda mereformasi pengadaan barang dan jasa Pemkot dengan membuka seluruh nota belanja dan dokumen kontrak ke publik secara real-time. Anggota Banggar DPRD mengeluhkan langkah ini karena membatasi manuver kompensasi politik.',
    text_en: 'You overhaul municipal procurement by publishing all expense vouchers and vendor contracts to an open public dashboard in real-time. Legislative Budget Committee members protest that this strips their political maneuverability.',
    choices: [
      {
        t: 'Tegakkan E-Katalog Terbuka 100% & Lindungi Saksi Whistleblower',
        t_en: 'Enforce 100% Open E-Procurement & Fortify Whistleblower Protections',
        d: 'Transparansi tanpa celah. Risiko korupsi turun drastis, opini WTP dari BPK terjamin, dan kepercayaan warga melambung.',
        d_en: 'Complete transparency. Corruption risks plummet, State Audit Board Clean Opinion (WTP) secured, and civic trust soars.',
        fx: { sat: 11, risk: -20 },
        actors: { BPK: 22, LSM: 22, Mahasiswa: 18, DPRD: -14, ASN: -8 },
        news: 'Nusapura raih rekor tata kelola terbersih: Sistem E-Katalog terbuka Walikota Tari jadi percontohan nasional!',
        news_en: 'Nusapura sets nationwide clean governance record: Mayor Tari open e-procurement recognized as gold standard!',
        mood: 1
      },
      {
        t: 'Kompromi dengan Fraksi Dewan: Beri Akses Khusus Tertutup untuk Proyek Pokir',
        t_en: 'Compromise with Legislative Factions: Grant Confidential Status for Pokir Projects',
        d: 'Beri kelonggaran bagi pos aspirasi anggota dewan demi menjaga suasana sidang paripurna tetap tenang.',
        d_en: 'Grant exemptions for council constituency packages to ensure friction-free plenary sessions.',
        fx: { risk: 12, sat: -5 },
        actors: { DPRD: 16, ASN: 8, LSM: -16, Mahasiswa: -12 },
        news: 'Transparansi anggaran disunat di menit akhir: LSM pertanyakan kompromi Pemkot dengan pimpinan dewan.',
        news_en: 'Open budget portal diluted at the eleventh hour: Watchdogs criticize executive concessions to council bosses.',
        mood: -1
      }
    ]
  },

  // --- IR. HENDRA KUSUMA (Inovator Smart City) ---
  {
    id: 'ev_hendra_tech_silicon_hub',
    candId: 'hendra',
    cat: 'Teknologi & Investasi Digital',
    cat_en: 'Technology & Venture Investment',
    priority: 16,
    icon: '🌐',
    title: 'Pembangunan Nusapura Tech & AI Innovation Campus',
    title_en: 'Development of Nusapura Tech & AI Innovation Campus',
    actor: 'Investor',
    relatedActors: ['Investor', 'Mahasiswa', 'Pengusaha'],
    text: 'Sebagai technopreneur dan mantan eksekutif, Anda berhasil melobi konsorsium teknologi global untuk membangun pusat inkubasi kecerdasan buatan (AI) dan riset semikonduktor di Nusapura, yang menjanjikan ribuan lapangan kerja berpenghasilan tinggi.',
    text_en: 'As a technopreneur and executive, you successfully court a global tech consortium to build an AI innovation campus and semiconductor research hub in Nusapura, promising thousands of high-paying tech jobs for local youths.',
    choices: [
      {
        t: 'Resmikan Kawasan Bebas Pajak Riset & Integrasikan Magang Kampus Lokal (APBD -0.15 T)',
        t_en: 'Enact Research Tax-Incentive Zone & Integrate Local University Apprenticeships (APBD -0.15 T)',
        d: 'Beri insentif lahan dan jaringan fiber optik, dengan syarat 70% tenaga kerja junior direkrut dari mahasiswa dan lulusan SMK kota.',
        d_en: 'Provide land incentives and fiber-optic backbone, mandating 70% of junior hires come from local universities and vocational schools.',
        fx: { apbd: -0.15, inv: 14, unemp: -6, pad: 0.3, sat: 8 },
        actors: { Investor: 18, Mahasiswa: 16, Pengusaha: 12 },
        news: 'Walikota Hendra rilis Tech Campus Nusapura: Ribuan pemuda lokal diserap raksasa inovasi digital!',
        news_en: 'Mayor Hendra launches Nusapura Tech Campus: Thousands of local youths hired by global digital innovators!',
        mood: 1
      },
      {
        t: 'Batasi Fasilitas Khusus demi Menjaga Penerimaan Retribusi Tradisional',
        t_en: 'Restrict Special Concessions to Protect Traditional Local Levies',
        d: 'Perlakukan investor teknologi sama seperti ruko konvensional tanpa insentif konektivitas khusus.',
        d_en: 'Treat high-tech investors like conventional retail without specialized connectivity subsidies.',
        fx: { pad: 0.1, inv: -8, sat: -4 },
        actors: { Investor: -12, Mahasiswa: -8, Pengusaha: -4 },
        news: 'Konsorsium teknologi pertimbangkan pindah ke kota tetangga: Kebijakan digital Nusapura dinilai kurang agresif.',
        news_en: 'Tech consortium reconsiders investment in neighboring city: Nusapura digital roadmap deemed overly cautious.',
        mood: -1
      }
    ]
  },
  {
    id: 'ev_hendra_smart_cashless',
    candId: 'hendra',
    cat: 'Smart City & Ketertiban',
    cat_en: 'Smart City & Public Order',
    priority: 15,
    icon: '📱',
    title: 'Digitalisasi NusaPay & Pemberantasan Pungli Parkir Ilegal',
    title_en: 'NusaPay Cashless Platform & Elimination of Rogue Parking Extortion',
    actor: 'Pengusaha',
    relatedActors: ['Pengusaha', 'Polri', 'Mahasiswa'],
    text: 'Menutup kebocoran retribusi kas daerah hingga ratusan miliar rupiah, Anda menerapkan integrasi sistem smart parking dengan sensor IoT dan pembayaran non-tunai NusaPay di seluruh jalan protokol Kota Nusapura.',
    text_en: 'Plugging hundreds of billions in leaked municipal parking revenues, you implement IoT sensor smart parking and mandatory NusaPay digital transactions along all primary thoroughfares in Nusapura.',
    choices: [
      {
        t: 'Pasang Sensor IoT & Tegakkan Transaksi Non-Tunai Penuh Bersama Kepolisian (APBD -0.1 T)',
        t_en: 'Install IoT Sensors & Enforce 100% Cashless Transit in Partnership with Police (APBD -0.1 T)',
        d: 'Berantas tuntas pungli preman, rekrut juru parkir resmi dengan gaji UMK, dan naikkan PAD parkir kota hingga 400%.',
        d_en: 'Eradicate extortion gangs, onboard parking attendants with living-wage salaries, and increase city parking revenues by 400%.',
        fx: { apbd: -0.1, pad: 0.5, sat: 9, risk: -8 },
        actors: { Pengusaha: 14, Mahasiswa: 12, Polri: 10 },
        news: 'Sistem Smart Parking Walikota Hendra sukses besar: Pungli lenyap, PAD kota melonjak drastis!',
        news_en: 'Mayor Hendra Smart Parking system triumphs: Extortion eliminated, municipal revenues surge drastically!',
        mood: 1
      },
      {
        t: 'Kompromi dengan Ormas: Biarkan Pembayaran Tunai Tradisional di Beberapa Titik',
        t_en: 'Compromise with Local Bosses: Retain Manual Cash Payments at Designated Points',
        d: 'Beri ruang bagi kelompok ormas agar tidak memicu keributan di lapangan.',
        d_en: 'Leave leeway for local muscle groups to prevent potential street friction.',
        fx: { sat: -4, pad: 0.1, risk: 6 },
        actors: { Pengusaha: -6, Mahasiswa: -8 },
        news: 'Pungli parkir masih marak di jalan protokol: Warga soroti setengah hatinya digitalisasi retribusi.',
        news_en: 'Rogue parking extortion persists on main streets: Citizens critique half-hearted digital levy rollout.',
        mood: -1
      }
    ]
  },
  // --- DR. DR. H. FARHAN ZULKARNAIN (Dokter Spesialis Anak & Reformis Medis) ---
  {
    id: 'ev_farhan_puskesmas_24jam',
    candId: 'farhan',
    cat: 'Kesehatan & Layanan Publik',
    cat_en: 'Healthcare & Public Services',
    priority: 16,
    icon: '🏥',
    title: 'Revitalisasi 30 Puskesmas 24 Jam & Ambulans Motor Cepat',
    title_en: '24/7 Primary Clinics Upgrade & Rapid Motorbike Ambulances',
    actor: 'ASN',
    relatedActors: ['SerikatBuruh', 'Pengusaha', 'Mahasiswa'],
    text: 'Sebagai dokter spesialis anak, Anda menginstruksikan renovasi puskesmas kecamatan agar siaga melayani IGD 24 jam gratis dan pengadaan armada ambulans motor untuk menembus gang sempit permukiman padat. Dinkes meminta alokasi APBD untuk dokter jaga dan alat resusitasi darurat.',
    text_en: 'Drawing upon your medical background, you propose upgrading 30 district health centers into fully equipped 24/7 emergency care facilities and deploying motorcycle ambulances for narrow urban alleys. The Health Office requests municipal budget for shift doctors and emergency trauma kits.',
    choices: [
      {
        t: 'Setujui Alokasi Penuh Puskesmas 24 Jam & Armada Ambulans Motor Cepat (APBD -0.2 T)',
        t_en: 'Approve Full 24/7 Clinic Expansion & Rapid Motorcycle Ambulances (APBD -0.2 T)',
        d: 'Warga miskin dapat berobat darurat kapan saja tanpa dipungut biaya sepeser pun.',
        d_en: 'Low-income citizens access emergency medical care anytime without paying a single penny.',
        fx: { apbd: -0.2, sat: 8 },
        actors: { ASN: 10, SerikatBuruh: 15, Mahasiswa: 10 },
        news: 'Walikota Farhan resmikan 30 Puskesmas 24 Jam: Layanan darurat gratis tembus gang sempit warga!',
        news_en: 'Mayor Farhan inaugurates 30 24/7 clinics: Free emergency care reaches deep into dense urban alleys!',
        mood: 1
      },
      {
        t: 'Kerja Sama Klinik Swasta: Alihkan Pasien Malam ke RS Swasta Berbayar (Hemat APBD)',
        t_en: 'Outsource Night Emergencies to Private Clinics (Save APBD, Co-Pay Required)',
        d: 'Puskesmas tetap tutup malam hari; pasien diarahkan ke klinik swasta dengan biaya sendiri.',
        d_en: 'Public clinics stay closed overnight; patients redirected to fee-charging private centers.',
        fx: { sat: -6, apbd: 0.1, risk: 4 },
        actors: { Pengusaha: 15, SerikatBuruh: -12, ASN: -6 },
        news: 'Warga keluhkan IGD puskesmas tetap tutup malam hari: Janji kesehatan gratis Walikota Farhan dinilai tertunda.',
        news_en: 'Citizens lament night clinic closures: Mayor Farhan free medical care pledge questioned by communities.',
        mood: -1
      }
    ]
  },
  {
    id: 'ev_farhan_stunting_protein_lokal',
    candId: 'farhan',
    cat: 'Kesehatan Anak & Ketahanan Pangan',
    cat_en: 'Child Nutrition & Food Security',
    priority: 16,
    icon: '🥚',
    title: 'Gerakan Nutrisi Balita: Telur & Ikan Laut Segar untuk 40.000 Anak Rawan Stunting',
    title_en: 'Zero-Stunting Drive: Fresh Eggs & Marine Protein for 40,000 Toddlers',
    actor: 'TokohAdat',
    relatedActors: ['SerikatBuruh', 'MediaLokal', 'Pengusaha'],
    text: 'Data posyandu menunjukkan angka stunting balita di kawasan pesisir dan pinggiran kota Nusapura masih di angka 18%. Anda menggagas intervensi nutrisi protein hewani harian langsung dari nelayan dan peternak lokal untuk memangkas stunting hingga di bawah 5%.',
    text_en: 'Community health post audits indicate child stunting hovers at 18% in Nusapura coastal and peripheral wards. You initiate a daily direct animal protein nutrition campaign sourced from local fisherfolk and poultry farmers to crush stunting rates below 5%.',
    choices: [
      {
        t: 'Luncurkan Program "Satu Butir Telur & Ikan Segar" Harian Balita (APBD -0.15 T)',
        t_en: 'Launch "One Fresh Egg & Local Fish Daily" Child Program (APBD -0.15 T)',
        d: 'Beli langsung dari peternak & nelayan lokal untuk dibagikan gratis tiap pagi lewat kader posyandu.',
        d_en: 'Procure directly from local farmers and fisherfolk, distributed free every morning via wellness posts.',
        fx: { apbd: -0.15, sat: 8 },
        actors: { TokohAdat: 12, SerikatBuruh: 12, MediaLokal: 15 },
        news: 'Gebarakan Walikota Farhan: 40.000 balita Nusapura terima paket gizi segar harian dari peternak lokal!',
        news_en: 'Mayor Farhan breakthrough: 40,000 Nusapura toddlers receive daily fresh nutrition packages from local farmers!',
        mood: 1
      },
      {
        t: 'Bagikan Biskuit Tambahan Pabrikan Bersubsidi (APBD -0.05 T, Kurang Efektif)',
        t_en: 'Distribute Subsidized Processed Biscuit Supplements (APBD -0.05 T, Less Effective)',
        d: 'Gunakan makanan olahan pabrik yang praktis meski efektivitas pencegahan stunting jauh lebih rendah.',
        d_en: 'Rely on factory-processed biscuit packs despite significantly lower clinical efficacy.',
        fx: { apbd: -0.05, sat: 2 },
        actors: { Pengusaha: 10, Mahasiswa: -6 },
        news: 'Biskuit gizi balita dikritik ahli nutrisi: Walikota Farhan diimbau prioritaskan pangan segar alami.',
        news_en: 'Processed nutritional biscuits criticized by pediatricians: Mayor Farhan urged to emphasize fresh whole foods.',
        mood: 0
      }
    ]
  },
  {
    id: 'ev_farhan_sanitasi_air_bersih',
    candId: 'farhan',
    cat: 'Sanitasi & Lingkungan Hidup',
    cat_en: 'Sanitation & Environment',
    priority: 16,
    icon: '🚰',
    title: 'Program "Jamban Sehat Komunal & Pipa Air Bersih PDAM" Kawasan Kumuh',
    title_en: '"Healthy Communal Sanitation & Clean Water Pipes" in Slum Areas',
    actor: 'KomunitasLingkungan',
    relatedActors: ['ASN', 'SerikatBuruh', 'Pengusaha'],
    text: 'Inspeksi mendadak ke bantaran kali menemukan ribuan rumah warga masih membuang limbah langsung ke sungai dan mengonsumsi air sumur tercemar bakteri E. coli. Anda menargetkan 100% Stop Buang Air Besar Sembarangan (ODF) dan sambungan pipa air PDAM bersubsidi.',
    text_en: 'Your surprise field inspection along riverbanks reveals thousands of informal homes still lacking septic tanks and drinking well water contaminated with E. coli bacteria. You mandate an ambitious 100% Open Defecation Free (ODF) certification and subsidized piped water connections.',
    choices: [
      {
        t: 'Subsidi Penuh Sambungan PDAM & Bangun Tangki Septik Bio-Filter Komunal (APBD -0.2 T)',
        t_en: 'Fully Subsidize Piped Water & Install Communal Bio-Filter Septic Tanks (APBD -0.2 T)',
        d: 'Kualitas air tanah pulih, wabah muntaber dan penyakit kulit anak lenyap dari permukiman padat.',
        d_en: 'Groundwater quality recovers, eliminating waterborne diarrhea and skin ailments among children.',
        fx: { apbd: -0.2, sat: 8 },
        actors: { KomunitasLingkungan: 15, ASN: 8, SerikatBuruh: 12 },
        news: 'Kali Nusapura kian bersih: Walikota Farhan tuntaskan 15.000 jamban bio-filter dan pipa air bersih gratis!',
        news_en: 'Nusapura waterways heal: Mayor Farhan delivers 15,000 bio-filter septic units and free clean water taps!',
        mood: 1
      },
      {
        t: 'Berikan Pinjaman Kredit Sanitasi Mandiri Berbunga Ringan ke Warga (Hemat Kas APBD)',
        t_en: 'Offer Low-Interest Micro-Credit Sanitation Loans to Families (Save Budget)',
        d: 'Beban biaya dibebankan ke kepala keluarga miskin melalui cicilan koperasi perumahan.',
        d_en: 'Cost burden shifted onto low-income households through housing cooperative installments.',
        fx: { sat: -4, pad: 0.05 },
        actors: { Pengusaha: 8, SerikatBuruh: -10, Mahasiswa: -6 },
        news: 'Warga miskin keberatan cicil jamban sanitasi: Program ODF Pemkot Nusapura terancam macet di lapangan.',
        news_en: 'Impoverished families struggle with sanitation loans: City ODF cleanliness target stalled in field.',
        mood: -1
      }
    ]
  },
  {
    id: 'ev_farhan_rsud_onkologi_bebas_antre',
    candId: 'farhan',
    cat: 'Infrastruktur Medis & Rumah Sakit',
    cat_en: 'Medical Infrastructure & Hospital Reform',
    priority: 16,
    icon: '🩺',
    title: 'Pusat Kanker & Bedah Jantung RSUD Nusapura Tanpa Kuota BPJS',
    title_en: 'Nusapura Hospital Heart & Cancer Center with Zero BPJS Quotas',
    actor: 'ASN',
    relatedActors: ['MediaLokal', 'Mahasiswa', 'Pengusaha'],
    text: 'Pasien kanker dan sakit jantung di Nusapura selama ini harus mengantre 6 bulan atau dirujuk ke ibukota provinsi. Anda mengusulkan pembangunan Gedung Spesialis Onkologi & Bedah Jantung terpadu di RSUD Kota Nusapura dengan aturan tegas: dilarang menolak atau membatasi kuota pasien BPJS.',
    text_en: 'Cancer and cardiovascular patients in Nusapura historically endured six-month waiting lists or painful transfers to provincial capitals. You propose constructing a cutting-edge Oncology & Heart Surgery Wing at Nusapura General Hospital with a strict decree: zero rejection and zero discriminatory quotas for universal public healthcare patients.',
    choices: [
      {
        t: 'Bangun Gedung Jantung-Kanker RSUD & Beli Alat Radioterapi Canggih (APBD -0.3 T)',
        t_en: 'Build Cardiac & Oncology Wing with Advanced Radiotherapy Linear Accelerator (APBD -0.3 T)',
        d: 'Warga Nusapura mendapatkan layanan spesialis kelas dunia gratis tanpa diskriminasi kelas ekonomi.',
        d_en: 'Citizens receive world-class specialized surgical and oncological care without class discrimination.',
        fx: { apbd: -0.3, sat: 10 },
        actors: { ASN: 15, Mahasiswa: 12, MediaLokal: 15 },
        news: 'Pusat Jantung & Kanker RSUD Nusapura resmi beroperasi: Warga tak perlu lagi berobat ke luar pulau!',
        news_en: 'Nusapura Hospital Heart & Cancer Center operational: Citizens no longer forced to travel abroad for care!',
        mood: 1
      },
      {
        t: 'Komersialisasikan Sayap VIP untuk Wisata Medis Berbayar (Kas +0.2 T, Akses BPJS Dibatasi)',
        t_en: 'Commercialize VIP Wing for Medical Tourism (Revenues +0.2 T, BPJS Access Capped)',
        d: 'Prioritaskan pasien berbayar mahal demi menambah dividen PAD kas daerah.',
        d_en: 'Prioritize paying VIP patients to boost municipal regional dividend revenues.',
        fx: { apbd: 0.2, pad: 0.15, sat: -8 },
        actors: { Pengusaha: 18, SerikatBuruh: -15, Mahasiswa: -12 },
        news: 'Sayap VIP RSUD Nusapura dikritik diskriminatif: Pasien BPJS kelas bawah dituding jadi nomor dua.',
        news_en: 'Nusapura Hospital VIP wing draws controversy: Low-income patients relegated to second-class status.',
        mood: -1
      }
    ]
  }
];

if (typeof ALL_EVENTS !== 'undefined' && Array.isArray(ALL_EVENTS)) {
  MAYOR_CITY_EVENTS.forEach(ev => {
    if (!ALL_EVENTS.some(existing => existing.id === ev.id)) {
      ALL_EVENTS.push(ev);
    }
  });
}

/* ==================== VICE MAYOR RUNNING MATES POOL ==================== */
const VICE_MAYORS = [
  {
    id: 'syarifuddin',
    name: 'Drs. H. Syarifuddin, M.Si',
    title: 'Birokrat Senior & Mantan Sekda Kota',
    title_en: 'Senior Bureaucrat & Former City Secretary',
    avatar: '👨‍💼',
    background: 'Birokrasi Murni & Tata Kelola ASN',
    background_en: 'Pure Bureaucracy & Civil Service',
    badge: '🛡️ Meritokrasi ASN',
    badge_en: '🛡️ Civil Meritocracy',
    desc: 'Ahli regulasi daerah, penertiban aset, dan peredam konflik internal ASN. Mengutamakan kepatuhan aturan di atas kompromi politik.',
    desc_en: 'Master of regional regulations and municipal asset controls. Prioritizes rule-of-law over political compromises.',
    bonusText: '+12 Integritas Kabinet, -15% Biaya Birokrasi, +15 Kepuasan ASN',
    bonusText_en: '+12 Cabinet Integrity, -15% Bureaucracy Costs, +15 Civil Service Morale',
    bonus: { integritas: 12, costMult: 0.85, asnSat: 15, sat: 5 }
  },
  {
    id: 'dr_anindya',
    name: 'dr. Anindya Putri, Sp.A',
    title: 'Dokter Spesialis Anak & Aktivis Perempuan',
    title_en: 'Pediatrician & Women Healthcare Leader',
    avatar: '👩‍⚕️',
    background: 'Kesehatan Publik & Gizi Keluarga',
    background_en: 'Public Health & Maternal Care',
    badge: '👶 Zero Stunting & Peduli',
    badge_en: '👶 Zero Stunting Champion',
    desc: 'Disukai kaum ibu, relawan posyandu, dan tenaga medis. Sangat gigih memastikan posyandu, puskesmas, dan sekolah inklusif beroperasi prima.',
    desc_en: 'Beloved by mothers, health volunteers, and nurses. Relentless reformer of public clinics, maternal care, and childhood nutrition.',
    bonusText: '+15 Kepuasan Publik Awal, +12 Indeks Kesehatan, Mengurangi Kematian Balita',
    bonusText_en: '+15 Initial Public Approval, +12 Health Index, Decreases Infant Stunting',
    bonus: { sat: 15, health: 12, integritas: 6 }
  },
  {
    id: 'hendra_wijaya',
    name: 'Ir. Hendra Wijaya, M.B.A',
    title: 'Pengusaha Properti & Ketua Kadin Daerah',
    title_en: 'Commercial Developer & Chamber of Commerce Chair',
    avatar: '👔',
    background: 'Investasi Swasta & Akselerasi PAD',
    background_en: 'Private Capital & Revenue Growth',
    badge: '💰 Magnet Investasi & PAD',
    badge_en: '💰 Investment & Revenue Magnet',
    desc: 'Memiliki koneksi luas ke perbankan dan asosiasi pengusaha nasional. Mampu mengakselerasi pajak daerah, kawasan komersial, dan lapangan kerja.',
    desc_en: 'Extensive ties with commercial banks and enterprise syndicates. Accelerates municipal tax revenue, retail zones, and private jobs.',
    bonusText: '+Rp 0.8 T Kas PAD Awal, +15 Pertumbuhan Ekonomi & Bisnis',
    bonusText_en: '+Rp 0.8 T Starting Local Tax (PAD), +15 Economic Growth',
    bonus: { pad: 0.8, economy: 15, sat: 4 }
  },
  {
    id: 'kh_mansyur',
    name: 'K.H. Mansyur Arifin',
    title: 'Tokoh Ulama Karismatik & Pengasuh Pesantren',
    title_en: 'Venerable Religious Scholar & Civic Elder',
    avatar: '👳‍♂️',
    background: 'Harmoni Keberagamaan & Mediasi Warga',
    background_en: 'Interfaith Harmony & Community Mediation',
    badge: '🕊️ Penyejuk Sosial & Moral',
    badge_en: '🕊️ Social Cohesion & Peace',
    desc: 'Sosok karismatik yang mampu meredam gesekan ormas dan aksi demonstrasi. Menjaga kerukunan sosial dan etika ruang publik kota.',
    desc_en: 'Deeply respected elder able to de-escalate civic unrest and sectarian disputes. Champion of ethical governance and social peace.',
    bonusText: '+20 Stabilitas Sosial, -15 Angka Kriminalitas, Dukungan Parlemen Kuat',
    bonusText_en: '+20 Social Harmony, -15 Crime Index, Strong Legislative Respect',
    bonus: { sat: 12, stability: 20, crime: -15 }
  }
];

/* ==================== EXPANDED CAMPAIGN PROMISES POOL (12 PROMISES) ==================== */
const ALL_CAMPAIGN_PROMISES = [
  {
    id: 'p_bus',
    icon: '🚌',
    title: 'Transportasi Publik Terpadu & Bus Listrik Bebas Macet',
    title_en: 'Integrated Electric Bus Rapid Transit Network',
    desc: 'Pengadaan armada bus listrik murah terintegrasi jalur khusus untuk mengurai kemacetan jalan arteri.',
    desc_en: 'Deploying low-fare electric bus rapid transit fleets along dedicated lanes to eradicate urban congestion.',
    targetStat: 'traffic',
    targetDelta: -25
  },
  {
    id: 'p_edu',
    icon: '🏫',
    title: 'Pendidikan Gratis, Seragam Cuma-Cuma & Sekolah Unggul',
    title_en: 'Universal Free Education, Free Uniforms & Modern Schools',
    desc: 'Renovasi total sekolah rusak, beasiswa siswa miskin, dan fasilitas laboratorium digital di tiap kecamatan.',
    desc_en: 'Full renovation of dilapidated classrooms, student subsidies, and digital learning labs in every district.',
    targetStat: 'edu',
    targetDelta: +25
  },
  {
    id: 'p_stunting',
    icon: '👶',
    title: 'Nusapura Zero Stunting & Makanan Bergizi Balita',
    title_en: 'Zero Stunting & Maternal Nutrition Super-Program',
    desc: 'Distribusi paket gizi telur & susu gratis ke posyandu mandiri untuk menjamin tumbuh kembang generasi muda.',
    desc_en: 'Free daily milk and egg nutritional supplements distributed across local health posts for infants.',
    targetStat: 'health',
    targetDelta: +25
  },
  {
    id: 'p_clean',
    icon: '🗑️',
    title: 'Pengolahan Sampah Modern Zero Waste & PLTSa Hijau',
    title_en: 'Modern Zero Waste Processing & Eco Waste-to-Energy',
    desc: 'Pembangunan instalasi pemusnah sampah ramah lingkungan dan program insentif pilah sampah di tingkat RT.',
    desc_en: 'Constructing green waste-to-power energy facilities and neighborhood recycling cashback hubs.',
    targetStat: 'poll',
    targetDelta: -25
  },
  {
    id: 'p_digital',
    icon: '📱',
    title: 'Super-App NusaPelayanan Bebas Pungli & Satu Pintu',
    title_en: 'NusaPelayanan Digital Super-App: Zero Red Tape & Bribes',
    desc: 'Digitalisasi 100% perizinan, KTP, dan layanan publik agar transparan serta bebas percaloan.',
    desc_en: 'Migrating 100% municipal permits and citizen registrations into a transparent bribery-free mobile app.',
    targetStat: 'integritas',
    targetDelta: +25
  },
  {
    id: 'p_umkm',
    icon: '🏪',
    title: 'Inkubator & Bantuan Modal Bergulir 10.000 UMKM',
    title_en: 'Revolving Capital Fund & Incubator for 10,000 Small Businesses',
    desc: 'Akses pinjaman modal tanpa bunga untuk pedagang pasar, pedagang kaki lima, dan wirausaha kreatif lokal.',
    desc_en: 'Zero-interest micro-loans and vocational marketing support for market traders and street entrepreneurs.',
    targetStat: 'unemp',
    targetDelta: -20
  },
  {
    id: 'p_banjir',
    icon: '🌊',
    title: 'Pencegahan Banjir Terpadu: Pompa Air & Normalisasi Sungai',
    title_en: 'Comprehensive Flood Defense: Pumping Stations & River Widening',
    desc: 'Pengerukan sungai sedimentasi tinggi, penataan bantaran kali, dan pemasangan pompa air raksasa otomatis.',
    desc_en: 'Dredging silting canals, reinforcing river dikes, and installing automated floodwater pumping systems.',
    targetStat: 'flood',
    targetDelta: -25
  },
  {
    id: 'p_kesehatan',
    icon: '🏥',
    title: 'Puskesmas Rawat Inap 24 Jam & Ambulans Gratis Antar-Jemput',
    title_en: '24-Hour Inpatient Clinics & Free Rapid Ambulance Fleet',
    desc: 'Setiap puskesmas kecamatan dilengkapi dokter jaga 24 jam dan armada ambulans darurat gratis.',
    desc_en: 'Upgrading community clinics to 24/7 emergency care with free mobile emergency dispatch ambulances.',
    targetStat: 'health',
    targetDelta: +20
  },
  {
    id: 'p_rth',
    icon: '🌳',
    title: 'Taman Rekreasi Tematik & Ruang Terbuka Hijau Per Kecamatan',
    title_en: 'Thematic Public Parks & Urban Forest in Every District',
    desc: 'Membangun taman ramah anak, lapangan olahraga warga, dan ruang publik hijau bebas asap rokok.',
    desc_en: 'Building neighborhood child-friendly eco parks, civic sports squares, and pedestrian greenways.',
    targetStat: 'sat',
    targetDelta: +20
  },
  {
    id: 'p_integritas',
    icon: '⚖️',
    title: 'Transparansi APBD & Seleksi Terbuka Pejabat Tanpa Mahar',
    title_en: 'Open APBD Budget Data & Meritocratic Official Bidding',
    desc: 'Lelang jabatan kepala dinas terbuka tanpa suap dan publikasi rincian setiap rupiah APBD di website kota.',
    desc_en: 'Merit-based open competition for all department heads and live online ledger of all municipal spending.',
    targetStat: 'integritas',
    targetDelta: +30
  },
  {
    id: 'p_keamanan',
    icon: '🚨',
    title: 'Kota Terang Benderang: 15.000 CCTV & Patroli 24 Jam',
    title_en: 'Safe City: 15,000 Smart CCTVs & 24/7 Security Patrols',
    desc: 'Penerangan lorong pemukiman dan penguatan Satpol PP berkolaborasi dengan Babinsa dan kepolisian.',
    desc_en: 'Illuminating all residential alleys with smart solar streetlights and integrated 24-hour civic patrols.',
    targetStat: 'crime',
    targetDelta: -25
  },
  {
    id: 'p_vokasi',
    icon: '💼',
    title: 'Pusat Vokasi Kerja Muda & Akses Industri Prioritas',
    title_en: 'Youth Vocational Career Academy & Direct Industrial Hiring',
    desc: 'Pelatihan bersertifikat gratis bidang teknologi, coding, otomotif, dan perhotelan langsung disalurkan kerja.',
    desc_en: 'Free certified bootcamps in tech, coding, and culinary trades directly linked to regional factory hiring.',
    targetStat: 'unemp',
    targetDelta: -25
  }
];

let activePromisePool = ALL_CAMPAIGN_PROMISES.slice(0, 7);

function rerollCampaignPromisesPool() {
  const shuffled = [...ALL_CAMPAIGN_PROMISES].sort(() => Math.random() - 0.5);
  // Ensure selected promises remain in the view
  const currentlySelected = ALL_CAMPAIGN_PROMISES.filter(p => (state.promises || []).includes(p.id));
  const remaining = shuffled.filter(p => !(state.promises || []).includes(p.id));
  activePromisePool = [...currentlySelected, ...remaining].slice(0, 7);
  renderPromiseScreen();
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  showToast(isEn ? '🎲 Re-rolled campaign promise options!' : '🎲 Opsi janji kampanye berhasil diacak ulang!');
}

/* ==================== MUSRENBANG CITIZEN PROPOSALS POOL ==================== */
/* ==================== SELEKSI TERBUKA KADIS (IQBAL BACKGROUND PROFILES) ==================== */
const BIDDING_PROFILES = {
  kesehatan: [
    {
      type: 'pakar',
      typeBadge: '🩺 Pakar Medis Murni',
      typeBadge_en: '🩺 Pure Medical Specialist',
      name: 'dr. Raden Wicaksono, Sp.JP(K), FIHA',
      title: 'Dokter Spesialis Jantung Senior & Peneliti Klinis RSUP',
      title_en: 'Senior Cardiologist & Lead Clinical Researcher',
      avatar: '👨‍⚕️',
      desc: 'Berpengalaman 18 tahun menangani pasien gawat darurat dan reformasi akreditasi rumah sakit rujukan paripurna. Sangat membenci kompromi politik.',
      desc_en: '18 years of emergency care leadership and hospital accreditation reform. Completely intolerant of political kickbacks.',
      statsText: 'Kinerja Layanan 94%, Integritas 96%, Risiko Korupsi 0%, Relasi Parlemen -8',
      statsText_en: 'Service Output 94%, Integrity 96%, Corruption Risk 0%, Council Relations -8',
      effKinerja: 94,
      effIntegritas: 96,
      effRisk: 0,
      effDprdDelta: -8
    },
    {
      type: 'ipdn',
      typeBadge: '🏛️ Pamong Karier Alumni IPDN',
      typeBadge_en: '🏛️ Career Civil Bureaucrat (IPDN)',
      name: 'Drs. H. Mulyadi Kartasasmita, M.Si',
      title: 'Pamong Praja Senior & Mantan Sekretaris Dinkes',
      title_en: 'Senior Civil Bureaucrat & Former Health Dept Secretary',
      avatar: '👨‍💼',
      desc: 'Alumni kepamongprajaan tulen 24 tahun. Sangat menguasai regulasi SPJ keuangan APBD, disukai dokter dan perawat puskesmas, birokrasi rapi.',
      desc_en: '24 years in municipal administration. Master of civil service procedures, paperwork, and health clinic staff management.',
      statsText: 'Kinerja 84%, Integritas 88%, Risiko Korupsi 8%, Loyalitas ASN Dinkes +18%',
      statsText_en: 'Service Output 84%, Integrity 88%, Corruption Risk 8%, Clinic Staff Morale +18%',
      effKinerja: 84,
      effIntegritas: 88,
      effRisk: 8,
      effDprdDelta: +4
    },
    {
      type: 'parpol',
      typeBadge: '💼 Rekomendasi Parpol Koalisi ("Duit Kenceng")',
      typeBadge_en: '💼 Coalition Party Appointee ("Connected Lobbyist")',
      name: 'H. Surya Sudarsono, S.E., M.B.A',
      title: 'Pengusaha Alkes, Politisi Koalisi & Bendahara Sayap Parpol',
      title_en: 'Medical Equipment Supplier & Coalition Party Treasurer',
      avatar: '👔',
      desc: 'Didukung penuh ketua fraksi dewan pengusung. Menjanjikan kelancaran negosiasi perda dan sponsor event kesehatan, namun integritas disorot.',
      desc_en: 'Strongly backed by ruling council coalition leaders. Guarantees smooth legislative approvals, though conflicts of interest loom.',
      statsText: 'Kinerja 68%, Integritas 52%, Risiko Korupsi 32%, Dukungan DPRD +22, Kas PAD +Rp 0.3 T',
      statsText_en: 'Service Output 68%, Integrity 52%, Corruption Risk 32%, Council Harmony +22, PAD +Rp 0.3 T',
      effKinerja: 68,
      effIntegritas: 52,
      effRisk: 32,
      effDprdDelta: +22,
      bonusPad: 0.3
    }
  ],
  pupr: [
    {
      type: 'pakar',
      typeBadge: '🏗️ Insinyur Teknik Murni',
      typeBadge_en: '🏗️ Structural Civil Engineer',
      name: 'Ir. Bambang Tri Hermanto, M.Eng., Ph.D',
      title: 'Pakar Hidrologi & Dosen Senior Teknik Sipil ITB',
      title_en: 'Hydrology Scholar & Senior Civil Engineering Fellow',
      avatar: '👷‍♂️',
      desc: 'Spesialis perhitungan struktur beton anti-banjir dan audit ketebalan aspal. Menolak keras sistem fee proyek kontraktor.',
      desc_en: 'Specialist in flood prevention structures and asphalt audit. Strictly forbids contractor kickbacks.',
      statsText: 'Kinerja Proyek 95%, Integritas 95%, Bebas Korupsi 0%, Relasi Kontraktor Kritis',
      statsText_en: 'Project Quality 95%, Integrity 95%, Zero Corruption 0%, Council Backlash -6',
      effKinerja: 95,
      effIntegritas: 95,
      effRisk: 0,
      effDprdDelta: -6
    },
    {
      type: 'ipdn',
      typeBadge: '🏛️ Pamong Karier Alumni IPDN',
      typeBadge_en: '🏛️ Career Civil Bureaucrat (IPDN)',
      name: 'Achmad Fauzi, S.STP., M.AP',
      title: 'Birokrat Infrastruktur & Mantan Kabid Bina Marga',
      title_en: 'Infrastructure Administrator & Former Road Chief',
      avatar: '👨‍💼',
      desc: 'Ahli lelang tender LPSE sesuai aturan LKPP. Memastikan proyek jalan dan jembatan terserap 100% tepat waktu tanpa temuan BPK.',
      desc_en: 'Master of e-procurement standards. Ensures 100% budget execution on time without audit sanctions.',
      statsText: 'Kinerja 85%, Integritas 86%, Risiko Korupsi 10%, Serapan Proyek Lancar',
      statsText_en: 'Project Quality 85%, Integrity 86%, Corruption Risk 10%, Smooth Budget Execution',
      effKinerja: 85,
      effIntegritas: 86,
      effRisk: 10,
      effDprdDelta: +5
    },
    {
      type: 'parpol',
      typeBadge: '💼 Rekomendasi Parpol Koalisi ("Duit Kenceng")',
      typeBadge_en: '💼 Coalition Party Appointee ("Connected Lobbyist")',
      name: 'Darmawan Setyadi, S.T',
      title: 'Ketua Asosiasi Kontraktor & Pengurus DPD Parpol',
      title_en: 'Contractor Association Leader & Party Secretary',
      avatar: '👔',
      desc: 'Memiliki jejaring kuat ke fraksi-fraksi DPRD dan asosiasi pengusaha konstruksi besar. Memastikan perda infrastruktur disahkan mulus.',
      desc_en: 'Massive political clout with legislative factions and construction tycoons. Guarantees speedy permit passes.',
      statsText: 'Kinerja 65%, Integritas 50%, Risiko Korupsi 35%, Dukungan Parlemen +25, Kas PAD +Rp 0.4 T',
      statsText_en: 'Project Quality 65%, Integrity 50%, Corruption Risk 35%, Council Backing +25, PAD +Rp 0.4 T',
      effKinerja: 65,
      effIntegritas: 50,
      effRisk: 35,
      effDprdDelta: +25,
      bonusPad: 0.4
    }
  ],
  pendidikan: [
    {
      type: 'pakar',
      typeBadge: '🎓 Akademisi Kurikulum Murni',
      typeBadge_en: '🎓 Curriculum Educationist',
      name: 'Dr. Hj. Maria Fransiska, M.Ed',
      title: 'Pakar Pendidikan Inklusif & Mantan Dekan FKIP',
      title_en: 'Inclusive Education Scholar & Former Dean',
      avatar: '👩‍🏫',
      desc: 'Mendedikasikan hidup untuk reformasi kompetensi guru dan sekolah gratis berkualitas bagi anak miskin. Tolak titipan PPDB.',
      desc_en: 'Dedicated to teacher training reforms and tuition-free schooling for underprivileged kids. Abolishes school admission bribery.',
      statsText: 'Kinerja Sekolah 95%, Integritas 96%, Bebas Korupsi 0%, PPDB Bersih 100%',
      statsText_en: 'School Quality 95%, Integrity 96%, Zero Corruption 0%, Merit Admissions',
      effKinerja: 95,
      effIntegritas: 96,
      effRisk: 0,
      effDprdDelta: -5
    },
    {
      type: 'ipdn',
      typeBadge: '🏛️ Pamong Karier Alumni IPDN',
      typeBadge_en: '🏛️ Career Civil Bureaucrat (IPDN)',
      name: 'Drs. H. Wahyudi, M.M',
      title: 'Birokrat Senior Dinas Pendidikan (20 Tahun Pengabdian)',
      title_en: 'Senior Education Administrator (20 Years)',
      avatar: '👨‍💼',
      desc: 'Disegani ribuan guru PNS dan kepala sekolah se-Kota Nusapura. Tertib administrasi sertifikasi guru dan BOSda tepat waktu.',
      desc_en: 'Deeply respected by thousands of civil teachers and principals. Efficient with teacher stipend disbursement and local grants.',
      statsText: 'Kinerja 86%, Integritas 87%, Risiko Korupsi 9%, Disukai PGRI & Dewan Guru',
      statsText_en: 'School Quality 86%, Integrity 87%, Corruption Risk 9%, Strong Teacher Union Morale',
      effKinerja: 86,
      effIntegritas: 87,
      effRisk: 9,
      effDprdDelta: +6
    },
    {
      type: 'parpol',
      typeBadge: '💼 Rekomendasi Parpol Koalisi ("Duit Kenceng")',
      typeBadge_en: '💼 Coalition Party Appointee ("Connected Lobbyist")',
      name: 'H. Lukman Hakim, S.Sos',
      title: 'Yayasan Sekolah Swasta & Wakil Ketua Komisi Parpol',
      title_en: 'Private Foundation Chair & Party Commissioner',
      avatar: '👔',
      desc: 'Memiliki lobi dana aspirasi pendidikan ke DPRD. Mampu mengamankan suara ormas pendidikan, namun rentan komersialisasi dana hibah.',
      desc_en: 'Secures large legislative grant allocations. Maintains friendly party backing, though prone to grant politicization.',
      statsText: 'Kinerja 70%, Integritas 54%, Risiko Korupsi 30%, Dukungan DPRD +20, Kas PAD +Rp 0.2 T',
      statsText_en: 'School Quality 70%, Integrity 54%, Corruption Risk 30%, Council Backing +20, PAD +Rp 0.2 T',
      effKinerja: 70,
      effIntegritas: 54,
      effRisk: 30,
      effDprdDelta: +20,
      bonusPad: 0.2
    }
  ]
};

