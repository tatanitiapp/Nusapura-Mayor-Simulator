/* ==========================================================================================
   20 SEMESTER PERSONAL LIFE MINI-GAMES ENGINE
   10 Mini-Games in Term 1 (Years 1-5, Semesters 1 & 2)
   10 Mini-Games in Term 2 (Years 6-10, Semesters 1 & 2)
   Interwoven with Family Harmony, Stress, LHKPN Wealth, Integrity, and Citizen Satisfaction
   ========================================================================================== */

var MAYOR_PERSONAL_GAMES = [
  // ==================== TERM 1 (YEARS 1 TO 5) ====================
  {
    term: 1,
    year: 1,
    semester: 1, // Month 6 (Interlude between Event 5 and Event 6/Dangerous Dialogue)
    type: "family_dinner",
    title_id: "Makan Malam Pertama di Rumah Dinas",
    title_en: "First Family Dinner at the Official Residence",
    location_id: "Ruang Makan Rumah Dinas Walikota • Pukul 20.30 WIB",
    location_en: "Mayor's Official Residence Dining Room • 8:30 PM",
    character_id: "Keluarga Inti Walikota",
    character_en: "Mayor's Immediate Family",
    avatar: "🏡",
    story_id: "Malam ini Anda berhasil pulang lebih awal ke rumah dinas. Pasangan Anda telah menyajikan makan malam hangat, dan anak Anda tampak cemas menunggu curhat tentang adaptasi berat di sekolah barunya setelah Anda terpilih. Tiba-tiba ponsel dinas Anda berdering kencang: Ketua DPC Partai Pengusung mendesak panggilan darurat terkait lobi jatah direksi BUMD.",
    story_en: "Tonight you managed to return early to the official residence. Your spouse prepared a warm dinner, and your child looks anxious waiting to discuss severe adaptation challenges at their new school. Suddenly your official phone rings loudly: the Ruling Party Chairman demands an urgent consultation regarding municipal director appointments.",
    dilemma_id: "Fokus mendengarkan anak dan menjaga keharmonisan keluarga, atau abaikan keluarga demi merespons desakan pimpinan partai?",
    dilemma_en: "Focus on listening to your child and preserving family bonding, or step away to appease the party leader's political urgency?",
    choices: [
      {
        id: "family_first",
        tone_id: "👨‍👩‍👧 Matikan Ponsel & Peluk Anak",
        tone_en: "👨‍👩‍👧 Mute Phone & Listen to Child",
        text_id: "“Malam ini ponsel saya heningkan. Masa depan dan mental anak saya jauh lebih berharga daripada urusan lobi kantor!” Anda mendengarkan keluh kesahnya dan memberi dukungan penuh.",
        text_en: "“Tonight my phone stays muted. My child's mental well-being matters far more than backroom lobbying!” You listen attentively and comfort them.",
        life: { familyRel: 18, stress: -15, wealth: 0 },
        fx: { sat: 3 },
        actors: { DPRD: -5, Warga: 4 },
        outcome_id: "Keharmonisan keluarga meningkat pesat! Anak Anda merasa dicintai dan pasangan tersenyum haru. Namun Ketua Partai mengirim chat dingin bernada kesal.",
        outcome_en: "Family harmony surged! Your child felt deeply supported and your spouse smiled. However, the Party Chairman sent a frosty, resentful text."
      },
      {
        id: "compromise_call",
        tone_id: "⏳ Izin 5 Menit Angkat Telepon Sambil Makan",
        tone_en: "⏳ Excuse Yourself for a 5-Minute Call",
        text_id: "Anda meminta izin sebentar mengangkat telepon di sudut teras, merespons singkat Ketua Partai secara diplomatis, lalu segera kembali ke meja makan.",
        text_en: "You briefly step to the veranda, diplomatically deflect the Party Chairman in five minutes, and return to the dinner table.",
        life: { familyRel: 2, stress: 5, wealth: 0 },
        fx: { sat: 0 },
        actors: { DPRD: 2 },
        outcome_id: "Urusan partai tidak meruncing, tetapi anak Anda kehilangan selera bercerita karena suasana makan malam terdistraksi.",
        outcome_en: "Party relations remained stable, but your child lost enthusiasm to share as the family dinner rhythm was disrupted."
      },
      {
        id: "party_priority",
        tone_id: "💼 Tinggalkan Meja & Lari ke Posko Partai",
        tone_en: "💼 Leave the Table & Rush to Party HQ",
        text_id: "“Maaf, ini darurat politik penentu APBD kita!” Anda meninggalkan piring makan setengah penuh dan melesat ke kantor partai.",
        text_en: "“Forgive me, this is a critical political emergency!” You leave your half-finished meal and rush to the party headquarters.",
        life: { familyRel: -15, stress: 20, wealth: 0.1 },
        fx: { sat: -3 },
        actors: { DPRD: 8, Warga: -4 },
        outcome_id: "Elite partai sangat puas atas loyalitas Anda, tetapi pasangan Anda kecewa berat dan anak Anda mengunci pintu kamar semalaman.",
        outcome_en: "Party elites praised your deference, but your spouse was deeply hurt and your child locked their bedroom door for the night."
      }
    ]
  },
  {
    term: 1,
    year: 1,
    semester: 2, // Month 12
    type: "lhkpn_audit",
    title_id: "Audit LHKPN & Bingkisan Parsel Emas",
    title_en: "Initial Wealth Disclosure & Gold Hamper Offer",
    location_id: "Ruang Kerja Rumah Dinas • Akhir Tahun Pertama",
    location_en: "Official Residence Study • End of Year 1",
    character_id: "Asosiasi Pengembang Swasta",
    character_en: "Private Developers Association",
    avatar: "🎁",
    story_id: "Menjelang tenggat pelaporan LHKPN (Laporan Harta Kekayaan Penyelenggara Negara) ke KPK, sebuah kurir pribadi mengantarkan kotak hampers kayu jati ukir ke rumah dinas Anda. Di dalamnya terdapat sertifikat emas murni 100 gram dan jam tangan mewah senilai ratusan juta rupiah tanpa nota resmi, dengan kartu ucapan 'Sukses Memimpin Kota Nusapura'.",
    story_en: "Approaching the deadline for reporting your official asset declaration (LHKPN) to the anti-graft agency, a courier delivers a teak hamper to your private residence. Inside lies a 100g pure gold bar and a luxury watch worth hundreds of millions of rupiah without an official invoice, signed 'To the continued success of Nusapura City'.",
    dilemma_id: "Laporkan seluruh bingkisan ke Direktorat Gratifikasi KPK, atau simpan rahasia di brankas pribadi keluarga?",
    dilemma_en: "Report the luxury hamper to the Anti-Corruption Commission Gratification Directorate, or keep it quietly in your home vault?",
    choices: [
      {
        id: "report_kpk",
        tone_id: "⚖️ Serahkan ke KPK sebagai Gratifikasi",
        tone_en: "⚖️ Surrender to Anti-Graft Commission as Gratification",
        text_id: "Anda menginstruksikan ajudan membuat Berita Acara Penyerahan Gratifikasi ke KPK dalam tempo 1x24 jam dan mempublikasikan tanda terima ke media.",
        text_en: "You instruct your aide to formally submit the gift to the KPK Gratification Directorate within 24 hours and disclose the receipt to journalists.",
        life: { familyRel: 5, stress: -5, wealth: 0 },
        fx: { sat: 8, risk: -12 },
        actors: { Media: 10, Warga: 8, Pengusaha: -6 },
        outcome_id: "Integritas moral Anda diakui publik! KPK memberi piagam apresiasi dan warga mengagumi kejujuran Anda. Asosiasi pengembang merasa dipermalukan.",
        outcome_en: "Your personal integrity won national praise! KPK awarded you an anti-corruption citation, though developer lobbies felt spurned."
      },
      {
        id: "keep_vault",
        tone_id: "🤫 Simpan Diam-Diam di Brankas Rumah",
        tone_en: "🤫 Stash Quietly in the Home Safe",
        text_id: "“Ini cuma tanda terima kasih biasa, bukan suap proyek aktif.” Anda memasukkan emas dan jam tangan ke brankas pribadi untuk simpanan darurat keluarga.",
        text_en: "“This is merely a customary token of appreciation, not an active bribe.” You tuck the gold bar and watch into your family safe for emergency reserves.",
        life: { familyRel: 4, stress: 15, wealth: 0.35 },
        fx: { sat: -4, risk: 18 },
        actors: { Pengusaha: 8, Warga: -4 },
        outcome_id: "Kekayaan pribadi keluarga bertambah Rp 350 juta! Namun batin Anda tidak tenang karena ancaman operasi tangkap tangan (OTT) kini membayangi.",
        outcome_en: "Personal family wealth expanded by Rp 350 million! Yet your anxiety spikes as anti-corruption surveillance risks mount."
      },
      {
        id: "auction_charity",
        tone_id: "🏛️ Lelang Terbuka untuk Panti Asuhan Kota",
        tone_en: "🏛️ Public Auction for City Orphanages",
        text_id: "Anda menolak menyimpan barang mewah tersebut dan menyelenggarakan lelang terbuka balai kota, seluruh hasilnya disumbangkan untuk beasiswa anak yatim.",
        text_en: "You refuse personal luxury and host an open municipal auction, directing every cent into scholarships for impoverished city orphans.",
        life: { familyRel: 8, stress: -10, wealth: 0 },
        fx: { sat: 10, risk: -8 },
        actors: { Warga: 12, Media: 8 },
        outcome_id: "Langkah brilian yang menghangatkan hati warga! Nama Anda viral sebagai teladan pemimpin dermawan dan berintegritas tinggi.",
        outcome_en: "A brilliant philanthropic gesture that touched citizens' hearts! Your benevolent leadership trended positively across social media."
      }
    ]
  },
  {
    term: 1,
    year: 2,
    semester: 1, // Month 18
    type: "morning_doorstop",
    title_id: "Doorstop Pagi Saat Jogging Santai",
    title_en: "Morning Doorstop During Neighborhood Jogging",
    location_id: "Taman Kota Nusapura • Minggu Pagi 06.15 WIB",
    location_en: "Nusapura City Park • Sunday Morning 6:15 AM",
    character_id: "Rombongan Wartawan Investigasi",
    character_en: "Investigative Reporters Press Pack",
    avatar: "🏃‍♂️",
    story_id: "Saat Anda sedang jogging santai bersama pasangan mengenakan kaos olahraga oblong, belasan wartawan media lokal dan nasional tiba-tiba mengepung dan menyodorkan mikrofon: 'Pak Wali! Ada foto viral di TikTok memperlihatkan pasangan Bapak menenteng tas impor edisi terbatas seharga 80 juta saat kunjungan sosial! Apakah itu dibeli dari gaji dinas atau sponsor kontraktor?!'",
    story_en: "While jogging in casual attire with your spouse on Sunday morning, a swarm of journalists blocks your path with cameras: 'Mr. Mayor! A TikTok photo went viral showing your spouse carrying a limited-edition Rp 80 million imported handbag at a charity event! Was that bought with official salary or funded by city contractors?!'",
    dilemma_id: "Bagaimana cara Anda merespons sergapan media di saat santai tanpa merusak citra keluarga maupun reputasi pemerintahan?",
    dilemma_en: "How do you handle an ambush media doorstop without humiliating your spouse or damaging municipal trust?",
    choices: [
      {
        id: "clarify_transparent",
        tone_id: "📋 Buka Bukti Kuitansi & Tabungan Lama",
        tone_en: "📋 Disclose Purchase Receipt & Old Savings",
        text_id: "“Tenang rekan-rekan media. Tas itu hadiah ulang tahun pernikahan dari tabungan pribadi sebelum menjabat, ada bukti pajaknya. Mari kita joging bersama dulu!” Anda menjawab ramah dan transparan.",
        text_en: "“Calm down, friends of the press. That bag was an anniversary gift purchased from our pre-office private savings, fully taxed. Let's finish this lap together!” You answer with calm transparency.",
        life: { familyRel: 8, stress: -5, wealth: 0 },
        fx: { sat: 6, risk: -6 },
        actors: { Media: 8, Warga: 6 },
        outcome_id: "Klarifikasi santai dan bersahabat memadamkan gosip liar dalam hitungan jam. Warganet memuji keharmonisan dan keterbukaan Anda.",
        outcome_en: "Your cheerful, transparent rebuttal quelled social media gossip within hours. Netizens applauded your candid poise."
      },
      {
        id: "snap_angry",
        tone_id: "🛑 Tepis Mikrofon: 'Ini Urusan Privat!'",
        tone_en: "🛑 Push Mics Away: 'This Is Private Family Life!'",
        text_id: "“Kalian ini tidak sopan! Ini hari Minggu dan ruang privat keluarga saya! Jangan cari sensasi murahan!” Anda menepis mikrofon dan bergegas masuk mobil.",
        text_en: "“You are being completely disrespectful! This is Sunday and my family's private time! Stop manufacturing cheap drama!” You shove past the mics.",
        life: { familyRel: -10, stress: 18, wealth: 0 },
        fx: { sat: -8, risk: 10 },
        actors: { Media: -14, Warga: -6 },
        outcome_id: "Video emosional Anda viral dengan judul 'Walikota Arogan Lindungi Gaya Hidup Hedon'. Pasangan Anda menangis karena merasa disalahkan.",
        outcome_en: "The video of your outburst went viral with scathing headlines on mayoral arrogance. Your spouse wept, feeling blamed for the storm."
      },
      {
        id: "donate_bag",
        tone_id: "🤝 Janjikan Lelang Tas untuk Korban Bencana",
        tone_en: "🤝 Pledge to Donate Bag for Disaster Relief",
        text_id: "Pasangan Anda menepuk pundak Anda dan berbicara di mikrofon: 'Jika barang itu melukai hati warga, besok tas tersebut kami lelang untuk bantuan dapur umum banjir.'",
        text_en: "Your spouse gently steps to the microphone: 'If this possession hurts public sentiment, we will auction it tomorrow to fund community flood relief kitchens.'",
        life: { familyRel: 12, stress: -8, wealth: -0.05 },
        fx: { sat: 12, risk: -8 },
        actors: { Warga: 14, Media: 10 },
        outcome_id: "Respons anggun luar biasa dari pasangan Anda! Citra keluarga Walikota meroket menjadi figur teladan rendah hati dan peka nurani rakyat.",
        outcome_en: "A stunning display of grace from your spouse! Your family brand skyrocketed as empathetic, humble leaders aligned with the people."
      }
    ]
  },
  {
    term: 1,
    year: 2,
    semester: 2, // Month 24
    type: "weekend_tennis",
    title_id: "Tenis Akhir Pekan Bersama Kapolresta",
    title_en: "Weekend Tennis Match with the City Police Chief",
    location_id: "Lapangan Tenis Bhayangkara Nusapura • Sabtu Sore",
    location_en: "Police Officers Club Tennis Courts • Saturday Afternoon",
    character_id: "Kombes Pol. Danang W.",
    character_en: "Police Commissioner Danang W.",
    avatar: "🎾",
    story_id: "Kapolresta Nusapura mengajak Anda tanding tenis santai ganda. Di sela set penentuan sambil minum air kelapa muda, beliau membisikkan info intelijen sensitif: 'Pak Wali, ormas binaan salah satu anggota dewan oposisi sedang merencanakan blokade jembatan utama minggu depan. Kita bisa bubarkan dini, tapi anak buah saya butuh dukungan dana operasional pengamanan hibah dari APBD.'",
    story_en: "The City Police Chief invites you for a doubles tennis showdown. Resting between sets over young coconut water, he leans in with classified intelligence: 'Mayor, a radical youth group backed by an opposition lawmaker plans to blockade the city's main bridge next week. We can preempt them, but my team needs supplementary operational security grants.'",
    dilemma_id: "Manfaatkan kedekatan personal untuk membendung instabilitas, atau jaga jarak formal birokrasi kepolisian?",
    dilemma_en: "Leverage personal rapport to neutralize municipal unrest, or maintain rigid administrative distance?",
    choices: [
      {
        id: "play_smart_grant",
        tone_id: "🤝 Acc Dana Operasional Resmi & Jaga Keamanan",
        tone_en: "🤝 Approve Official Security Grant & Safeguard City",
        text_id: "“Siap Komandan, ketertiban kota nomor satu. Ajukan proposal hibah resmi untuk patroli terpadu, biar legal dan tidak jadi temuan BPK.”",
        text_en: "“Understood, Commissioner. Public peace is non-negotiable. Submit a formal grant proposal for joint patrols so everything complies with audit standards.”",
        life: { familyRel: 0, stress: -10, wealth: 0 },
        fx: { sat: 6, apbd: -0.15, risk: -5 },
        actors: { Aparat: 14, DPRD: -4, Warga: 6 },
        outcome_id: "Kapolresta tersenyum puas dan mengamankan jembatan tanpa letupan anarkis. Hubungan personal Anda dengan kepresisian aparat sangat solid.",
        outcome_en: "The Police Chief smiled warmly and secured the bridge without incident. Your strategic alliance with law enforcement solidified."
      },
      {
        id: "lose_tennis_listen",
        tone_id: "🎾 Mengalah di Set Akhir Demi Menjaga Mood",
        tone_en: "🎾 Let the Chief Win the Match to Build Rapport",
        text_id: "Anda sengaja membuat unforced error tipis di deuce terakhir sehingga Kapolresta menang tie-break, lalu membicarakan penyelesaian persuasif tanpa kekerasan.",
        text_en: "You deliberately miss a backhand volley at match point to let the Chief savor a dramatic win, then pitch a peaceful community dialogue.",
        life: { familyRel: 0, stress: -5, wealth: 0 },
        fx: { sat: 4, risk: -2 },
        actors: { Aparat: 10, Warga: 4 },
        outcome_id: "Kapolresta sangat bangga menang dari Walikota dan menyetujui pendekatan mediasi damai untuk membubarkan rencana unjuk rasa.",
        outcome_en: "Thrilled by his tennis victory over the Mayor, the Chief graciously agreed to your soft-power mediation approach."
      },
      {
        id: "strict_refusal",
        tone_id: "🚫 Tolak Halus: 'Polri Punya DIPA Sendiri'",
        tone_en: "🚫 Politely Decline: 'Police Already Have National Budgets'",
        text_id: "“Mohon maaf Bang Danang, APBD kita sedang defisit untuk puskesmas. Penanganan ketertiban mohon gunakan anggaran DIPA Mabes Polri saja ya.”",
        text_en: "“With all respect Chief Danang, our municipal budget is stretched thin for healthcare. Please utilize internal national police allocations.”",
        life: { familyRel: 0, stress: 10, wealth: 0 },
        fx: { sat: -2, risk: 6 },
        actors: { Aparat: -10, DPRD: 4 },
        outcome_id: "Suasana lapangan tenis mendadak kaku. Pengamanan demo di kemudian hari menjadi minim pengawalan polisi.",
        outcome_en: "The tennis mood turned chilly instantly. Subsequent civic demonstrations received only bare-minimum police protection."
      }
    ]
  },
  {
    term: 1,
    year: 3,
    semester: 1, // Month 30
    type: "relative_project",
    title_id: "Dilema Kerabat Kandung Minta Proyek",
    title_en: "Nepotism Dilemma: Close Relative Demands Municipal Contract",
    location_id: "Ruang Tamu Keluarga • Minggu Malam",
    location_en: "Private Residence Living Room • Sunday Evening",
    character_id: "Herman Pratama (Sepupu Kandung)",
    character_en: "Herman Pratama (First Cousin)",
    avatar: "👔",
    story_id: "Sepupu kandung Anda datang membawa map tebal dan sekotak oleh-oleh khas kampung. Beliau baru saja mendirikan CV kontraktor dan memohon sambil terisak: 'Mas/Mbak Wali, bisnis saya hampir bangkrut terlilit utang. Tolong loloskan CV saya untuk proyek penunjukan langsung (PL) pengadaan seragam dinas senilai 1,5 miliar. Kan cuma PL kecil, Kadis Pendidikan pasti manut kalau ada memo sakti dari Mas/Mbak!'",
    story_en: "Your first cousin arrives clutching a proposal binder and specialty snacks from your hometown. His small firm faces bankruptcy: 'Cousin Mayor, I am drowning in debt. Please direct-award my company the Rp 1.5 billion municipal uniform procurement contract. It’s below the open tender threshold; the Education Chief will approve it instantly with a quick note from you!'",
    dilemma_id: "Apakah Anda akan menuruti desakan keluarga besar atau menegakkan prinsip anti-nepotisme secara mutlak?",
    dilemma_en: "Will you succumb to family pressure to bail out kin, or strictly uphold anti-nepotism governance?",
    choices: [
      {
        id: "reject_nepotism",
        tone_id: "🛡️ Tolak Keras & Tawarkan Bantuan Modal Pribadi",
        tone_en: "🛡️ Strictly Refuse Contract & Offer Personal Micro-Loan",
        text_id: "“Herman, saya tidak akan pernah menjual integritas demi memo proyek haram! Kalau kamu butuh modal darurat, pakai uang tabungan pribadi saya 50 juta tanpa bunga.”",
        text_en: "“Herman, I will never sign illegal patronage memos! If your family faces distress, take Rp 50 million from my private personal savings interest-free.”",
        life: { familyRel: -4, stress: -5, wealth: -0.05 },
        fx: { sat: 5, risk: -10 },
        actors: { Birokrasi: 8, Warga: 6 },
        outcome_id: "Prinsip integritas Anda kokoh tak tergoyahkan! Birokrasi kagum karena Anda tidak cawe-cawe proyek, meski keluarga besar menganggap Anda terlalu kaku.",
        outcome_en: "Your anti-nepotism resolve stood immaculate! Civil servants respected your ethical boundary, though distant relatives called you cold."
      },
      {
        id: "sign_memo",
        tone_id: "✍️ Berikan 'Disposisi Khusus' ke Kepala Dinas",
        tone_en: "✍️ Sign Informal Recommendation Memo to Agency Chief",
        text_id: "Merasa iba pada keluarga, Anda menulis catatan kecil di memo kuning agar Kadis Pendidikan 'membina dan memprioritaskan' CV milik sepupu Anda.",
        text_en: "Moved by kinship pity, you write a discrete yellow sticky note urging the Education Chief to 'assist and prioritize' your cousin's company.",
        life: { familyRel: 15, stress: 18, wealth: 0 },
        fx: { sat: -6, risk: 20 },
        actors: { Warga: -6, Birokrasi: -8 },
        outcome_id: "Keluarga besar memuji Anda setinggi langit. Namun pegawai dinas membocorkan memo tersebut ke aktivis anti-korupsi sebagai bukti nepotisme!",
        outcome_en: "Your family hailed you as their savior. But city clerks leaked the sticky note to anti-graft activists as blatant nepotism evidence!"
      },
      {
        id: "train_open_tender",
        tone_id: "📚 Minta Ikut Pelatihan E-Katalog Secara Bersih",
        tone_en: "📚 Direct to Public E-Catalog Vendor Training",
        text_id: "“Daftar resmi di sistem e-Katalog LKPP. Kualitas kainmu harus nomor satu dan harga transparan. Kalau menang lelang fair, tak ada yang bisa memfitnah kita.”",
        text_en: "“Register formally through the national LKPP E-Catalog system. Prove top textile quality and competitive pricing. If you win fairly, no one can accuse us.”",
        life: { familyRel: 5, stress: 0, wealth: 0 },
        fx: { sat: 3, risk: -4 },
        actors: { Birokrasi: 5, Pengusaha: 4 },
        outcome_id: "Sepupu Anda belajar bersaing secara profesional. Anda menanamkan budaya bisnis yang sehat di lingkaran keluarga.",
        outcome_en: "Your cousin learned legitimate procurement channels, planting healthy business practices within your family circle."
      }
    ]
  },
  {
    term: 1,
    year: 3,
    semester: 2, // Month 36
    type: "mental_health",
    title_id: "Kekalutan Mental & Insomnia Kerja",
    title_en: "Executive Burnout & Sleepless Nights",
    location_id: "Kamar Tidur Utama Rumah Dinas • Dini Hari 02.45 WIB",
    location_en: "Official Residence Master Bedroom • 2:45 AM",
    character_id: "dr. Hendrawan, Sp.KJ (Dokter Jiwa Kepercayaan)",
    character_en: "dr. Hendrawan (Confidential Physician)",
    avatar: "💊",
    story_id: "Tekanan tuntutan demo, defisit kas, dan serangan fitnah politik tanpa henti membuat Anda menderita insomnia kronis selama 3 minggu. Kepala Anda berdenyut hebat dan emosi Anda kerap meledak-ledak di rapat dinas. Dokter keluarga memperingatkan: 'Kadar hormon kortisol dan tekanan darah Bapak/Ibu di ambang bahaya stroke ringan. Anda butuh jeda sebelum roboh.'",
    story_en: "Relentless political assaults, budget shortfalls, and public protests have triggered chronic insomnia for 3 straight weeks. Severe migraines and volatile temper flare-ups plague your morning meetings. Your personal physician warns: 'Your cortisol levels and blood pressure are bordering mild stroke risk. You must reset immediately.'",
    dilemma_id: "Bagaimana cara memulihkan kesehatan jiwa dan raga tanpa dianggap lemah oleh musuh politik?",
    dilemma_en: "How do you restore mental resilience without signaling vulnerability to ruthless political adversaries?",
    choices: [
      {
        id: "short_retreat",
        tone_id: "🌿 Cuti Akhir Pekan Singkat di Pesantren/Retreat Alam",
        tone_en: "🌿 Discreet Weekend Mindfulness / Nature Retreat",
        text_id: "Anda mematikan gadget selama 48 jam dan mengasingkan diri ke kaki gunung bersama pasangan untuk meditasi, jalan kaki di hutan, dan istirahat total.",
        text_en: "You disconnect completely for 48 hours, heading into the misty hills with your spouse for restorative walks, meditation, and deep sleep.",
        life: { familyRel: 12, stress: -30, health: 15 },
        fx: { sat: 2 },
        outcome_id: "Kebugaran dan ketajaman berpikir Anda pulih 100%! Anda kembali ke Balaikota dengan senyum cerah dan karisma kepemimpinan yang segar.",
        outcome_en: "Mental clarity and vitality fully restored! You returned to City Hall rejuvenated, radiant with calm executive poise."
      },
      {
        id: "sleeping_pills",
        tone_id: "💊 Minum Obat Tidur Penenang Dosis Tinggi",
        tone_en: "💊 Rely on Heavy Prescription Sedatives",
        text_id: "“Saya tidak punya waktu untuk cuti cengeng!” Anda menenggak obat tidur penenang setiap malam agar tetap bisa memimpin rapat maraton 16 jam per hari.",
        text_en: "“I have no luxury for vacations!” You swallow heavy prescription sedatives nightly to sustain brutal 16-hour workdays.",
        life: { familyRel: -8, stress: 10, health: -20 },
        fx: { sat: -3 },
        outcome_id: "Rapat tetap berjalan, namun Anda tampak pucat, mata cekung, dan refleks bicara melambat sehingga menimbulkan tanda tanya di kalangan wartawan.",
        outcome_en: "Meetings carried on, but your sunken eyes and slurred speech sparked whispers among reporters about declining mayoral health."
      },
      {
        id: "delegate_vice",
        tone_id: "🤝 Serahkan Tugas Rutin Sepekan ke Wakil Walikota",
        tone_en: "🤝 Delegate Routine Municipal Portfolios to Vice Mayor",
        text_id: "Anda mendelegasikan seremonial dan inspeksi lapangan ke Wakil Walikota, sementara Anda fokus mengatur strategi kebijakan makro dari meja kerja santai.",
        text_en: "You formally delegate public inaugurations and ground checks to your Vice Mayor, conserving energy for macro-policy design.",
        life: { familyRel: 6, stress: -18, health: 10 },
        fx: { sat: 1 },
        actors: { Birokrasi: 6 },
        outcome_id: "Beban kerja terbagi seimbang dan Wakil Walikota merasa dihargai. Manajemen pemerintahan kota berjalan jauh lebih sistematis.",
        outcome_en: "Workload harmonized and your Vice Mayor felt genuinely empowered, ushering in a healthier institutional balance."
      }
    ]
  },
  {
    term: 1,
    year: 4,
    semester: 1, // Month 42
    type: "socialite_clique",
    title_id: "Undangan Arisan Mewah Istri Konglomerat",
    title_en: "Elite Socialite Circle & Luxury Jewelry Trap",
    location_id: "Penthouse Hotel Bintang 5 Nusapura • Rabu Siang",
    location_en: "5-Star Luxury Penthouse Suite • Wednesday Noon",
    character_id: "Madam Selvi (Istri Pemilik Nusapura Mall)",
    character_en: "Madam Selvi (Mall Tycoon's Spouse)",
    avatar: "💎",
    story_id: "Pasangan hidup Anda diundang bergabung ke dalam kelompok arisan eksklusif istri-istri konglomerat dan petinggi korporasi kota. Dalam acara penyambutan, pasangan Anda dihadiahi bros berlian bertatahkan permata biru senilai 150 juta sebagai 'tanda persaudaraan arisan'. Beberapa hari kemudian, suami dari ketua arisan mengajukan permohonan pembebasan retribusi izin amdal reklamasi.",
    story_en: "Your spouse is invited into an ultra-exclusive social circle of billionaire heiresses and corporate magnates. At the welcoming high tea, your spouse is gifted a Rp 150 million blue sapphire diamond brooch as 'sisterhood jewelry'. Days later, the hostess's husband submits an application for city environmental fee waivers.",
    dilemma_id: "Tolak dan kembalikan bros demi menghindari konflik kepentingan, atau biarkan pasangan menikmati pergaulan sosial elit?",
    dilemma_en: "Return the sapphire brooch to eliminate conflict of interest, or allow your spouse to mingle in high-society circles?",
    choices: [
      {
        id: "return_brooch",
        tone_id: "📦 Kembalikan Bros dengan Surat Santun",
        tone_en: "📦 Return Brooch with a Courteous Formal Letter",
        text_id: "Anda dan pasangan sepakat mengembalikan bros tersebut dengan ucapan terima kasih: 'Keluarga walikota tidak diperkenankan menerima cinderamata bernilai tinggi demi menjaga muruah jabatan.'",
        text_en: "You and your spouse jointly return the brooch with a gracious note: 'The Mayor’s family is bound by ethics to decline high-value luxury gifts.'",
        life: { familyRel: 8, stress: -5, wealth: 0 },
        fx: { sat: 6, risk: -12 },
        actors: { Pengusaha: -4, Warga: 8, Media: 6 },
        outcome_id: "Sikap tegas ini menyelamatkan keluarga dari jebakan suap terbungkus arisan sosialita! Warga mengapresiasi teladan kesederhanaan Anda.",
        outcome_en: "Your decisive ethical boundary neutralized an insidious bribery trap! Citizens lauded your family’s incorruptible grace."
      },
      {
        id: "keep_silent",
        tone_id: "💍 Biarkan Disimpan: 'Itu Urusan Ibu-Ibu'",
        tone_en: "💍 Keep It: 'It's Purely a Women's Social Affair'",
        text_id: "“Jangan terlalu parno, itu kan urusan pergaulan wanita, tidak ada sangkut pautnya dengan izin mall!” Pasangan Anda memakai bros tersebut di acara gala resmi kota.",
        text_en: "“Don’t be overly paranoid; it’s an innocent ladies' circle, unrelated to zoning permits!” Your spouse wears the brooch to the city gala.",
        life: { familyRel: 6, stress: 15, wealth: 0.15 },
        fx: { sat: -6, risk: 18 },
        actors: { Pengusaha: 10, Warga: -6 },
        outcome_id: "Konglomerat merasa memiliki akses jalan tol ke kebijakan Walikota. LSM lingkungan mulai menelusuri asal-usul perhiasan tersebut.",
        outcome_en: "Tycoons assumed they bought backchannel access. Environmental NGOs promptly began probing the provenance of the jewelry."
      },
      {
        id: "redirect_socialite",
        tone_id: "🎨 Ajak Kelompok Arisan Danai Bank Sampah",
        tone_en: "🎨 Channel Circle Funds to Citywide Waste Banks",
        text_id: "Pasangan Anda mengusulkan arisan tersebut tidak bermain perhiasan, melainkan berlomba mendanai program penuntasan stunting dan bank sampah wanita.",
        text_en: "Your spouse cleverly pivots the socialite circle toward funding maternal stunting nutrition centers and women's recycling cooperatives.",
        life: { familyRel: 15, stress: -10, wealth: 0 },
        fx: { sat: 10, risk: -6 },
        actors: { Warga: 12, Pengusaha: 6 },
        outcome_id: "Ide brilian! Para istri pengusaha mengucurkan miliaran rupiah donasi sosial bagi warga miskin. Pasangan Anda diakui sebagai tokoh inspiratif kota.",
        outcome_en: "Masterstroke! The wealthy socialites channeled billions into grassroots charity. Your spouse became a celebrated community inspiration."
      }
    ]
  },
  {
    term: 1,
    year: 4,
    semester: 2, // Month 48
    type: "charity_auction",
    title_id: "Gala Dinner Amal & Lelang Lukisan Koleksi",
    title_en: "Charity Gala Dinner & Art Auction Diplomacy",
    location_id: "Grand Ballroom Balai Pemuda • Malam Minggu",
    location_en: "Youth Cultural Grand Ballroom • Saturday Evening",
    character_id: "Maestro Sutopo (Seniman Legendaris)",
    character_en: "Maestro Sutopo (Renowned Artist)",
    avatar: "🎨",
    story_id: "Dalam acara penggalangan dana beasiswa anak jalanan, lukisan cat minyak buatan Anda sendiri dilelang di hadapan ratusan pengusaha dan pimpinan partai politik. Penawaran memanas hingga seorang taipan properti yang sedang tersangkut sengketa lahan menawar lukisan Anda seharga Rp 1 Miliar (10 kali lipat harga wajar)! Seluruh mata hadirin tertuju pada Anda.",
    story_en: "At a municipal charity fundraiser for street children, your personal oil painting is put on auction before hundreds of developers and party leaders. Bidding escalates until a real-estate mogul locked in a zoning dispute bids an astonishing Rp 1 Billion (10x fair value)! Every eye in the room swings toward you.",
    dilemma_id: "Terima tawaran fantastis demi beasiswa anak jalanan, atau batasi penawaran untuk mencegah gratifikasi terselubung?",
    dilemma_en: "Accept the outrageous bid for child charity, or cap the auction to prevent disguised financial kickbacks?",
    choices: [
      {
        id: "cap_fair_bid",
        tone_id: "⚖️ Batasi Nilai Maksimal & Alihkan Selisih ke Kas Pemkot",
        tone_en: "⚖️ Cap Bid Value & Mandate Direct Public Escrow",
        text_id: "“Terima kasih atas kemurahan hati Bapak. Namun demi transparansi, nilai lelang karya amatir saya kita batasi Rp 50 juta. Sisa 950 juta silakan transfer langsung ke rekening yayasan resmi yatim piatu.”",
        text_en: "“Thank you for your generosity. However, to maintain integrity, my amateur painting is capped at Rp 50M. Transfer the remaining 950M directly to the orphanage foundation.”",
        life: { familyRel: 5, stress: -5, wealth: 0 },
        fx: { sat: 8, risk: -10 },
        actors: { Media: 10, Warga: 10, Pengusaha: -4 },
        outcome_id: "Standing ovation bergemuruh di ballroom! Anda berhasil mengumpulkan dana besar untuk anak yatim sekaligus menolak jebakan lobi terselubung.",
        outcome_en: "A thunderous standing ovation filled the ballroom! You secured monumental funds for charity while dodging covert lobbying influence."
      },
      {
        id: "accept_full",
        tone_id: "💰 Ketok Palu 1 Miliar Penuh",
        tone_en: "💰 Hammer Down at Full Rp 1 Billion",
        text_id: "Anda mengetok palu lelang sambil tersenyum lebar dan berfoto memegang cek raksasa bersama sang taipan di panggung kehormatan.",
        text_en: "You hammer the gavel with a wide grin, posing on stage with the tycoon and an oversized ceremonial Rp 1 Billion check.",
        life: { familyRel: 0, stress: 10, wealth: 0.1 },
        fx: { sat: -2, risk: 14 },
        actors: { Pengusaha: 12, Media: -6 },
        outcome_id: "Dana yayasan melimpah, namun media investigasi merilis ulasan pedas: 'Lukisan Cat Minyak Walikota Jadi Tiket Pemutihan Sengketa Lahan'.",
        outcome_en: "Charity funds overflowed, but investigative editorials questioned whether the painting was a disguised bribe for land dispute amnesty."
      },
      {
        id: "donate_anonymously",
        tone_id: "🕊️ Serahkan Lukisan Tanpa Nama Pembuat",
        tone_en: "🕊️ Re-Auction the Painting Anonymously",
        text_id: "Anda membatalkan lelang personal dan mendonasikan 50 karya seni anak-anak panti untuk dilelang bersama, meratakan perhatian publik.",
        text_en: "You cancel the personal vanity auction and instead showcase 50 paintings crafted by foster children, redistributing public generosity.",
        life: { familyRel: 10, stress: -10, wealth: 0 },
        fx: { sat: 9, risk: -6 },
        actors: { Warga: 12, Media: 8 },
        outcome_id: "Sorotan bergeser ke bakat luar biasa anak-anak panti. Kota Nusapura dinobatkan sebagai Kota Ramah Anak dan Berbudaya Luhur.",
        outcome_en: "The spotlight illuminated the foster children's brilliance. Nusapura was lauded nationwide as an inspiring cultural sanctuary."
      }
    ]
  },
  {
    term: 1,
    year: 5,
    semester: 1, // Month 54
    type: "tuition_vs_campaign",
    title_id: "Tabungan Pribadi vs Dana Mahar Kampanye",
    title_en: "Child's College Tuition vs Campaign War Chest",
    location_id: "Meja Kerja Pribadi Rumah Dinas • Larut Malam",
    location_en: "Private Residence Study • Late Night",
    character_id: "Pasangan & Tim Sukses Pilkada",
    character_en: "Spouse & Campaign Inner Circle",
    avatar: "🎓",
    story_id: "Pilkada periode kedua tinggal 6 bulan lagi. Tim konsultan politik menyodorkan tagihan survei, cetak kaos, dan saksi TPS senilai 800 juta yang harus dibayar lunas pekan ini. Di saat yang sama, putri sulung Anda menunjukkan surat penerimaan universitas kedokteran impiannya yang menuntut uang pangkal ratusan juta rupiah dari tabungan keluarga Anda.",
    story_en: "The second-term election is only six months away. Your campaign consultants submit an urgent Rp 800M invoice for polling, banners, and ballot witnesses. Concurrently, your eldest daughter proudly holds her admission acceptance letter to medical school, requiring substantial tuition deposit from family savings.",
    dilemma_id: "Gunakan tabungan halal keluarga demi cita-cita masa depan anak, atau alihkan menjadi modal perang politik?",
    dilemma_en: "Protect family savings for your child’s lifelong dream, or liquidate personal reserves for campaign survival?",
    choices: [
      {
        id: "prioritize_child",
        tone_id: "🎓 Bayar Penuh Kuliah Anak: 'Masa Depanmu Utama!'",
        tone_en: "🎓 Pay Tuition Fully: 'Your Future Comes First!'",
        text_id: "“Pilkada bisa kita menangkan dengan rekam jejak kerja nyata, tapi masa depan anak tidak bisa ditunda!” Anda melunasi uang kuliah anak secara penuh.",
        text_en: "“We will win this election on our proven track record, but my daughter’s future is sacred!” You pay her university tuition in full.",
        life: { familyRel: 20, stress: -10, wealth: -0.4 },
        fx: { sat: 6 },
        actors: { Warga: 8, DPRD: -4 },
        outcome_id: "Anak Anda menangis bahagia memeluk Anda. Pengorbanan tulus ini menyulut simpati warganet yang kagum pada integritas seorang ayah/ibu teladan.",
        outcome_en: "Your daughter wept with joy and gratitude. Voters were deeply moved by a leader who prioritized family honesty over campaign greed."
      },
      {
        id: "gamble_campaign",
        tone_id: "🗳️ Alihkan Tabungan untuk Mahar Saksi TPS",
        tone_en: "🗳️ Divert Savings to Campaign Witness Fund",
        text_id: "Anda meminta anak menunda kuliah setahun: 'Kalau ayah/ibu kalah Pilkada, kita kehilangan segalanya! Menang dulu, baru nanti kuliah.'",
        text_en: "You ask your daughter to defer college for a year: 'If we lose this election, we lose everything! Win first, then study later.'",
        life: { familyRel: -18, stress: 25, wealth: -0.6 },
        fx: { sat: -4 },
        actors: { DPRD: 8, Media: -4 },
        outcome_id: "Mesin saksi TPS terdanai penuh, tetapi hubungan Anda dengan anak hancur. Suasana rumah dinas menjadi dingin dan muram.",
        outcome_en: "Campaign infrastructure was fully funded, but your daughter felt betrayed. A suffocating silence descended over your household."
      },
      {
        id: "scholarship_crowdfund",
        tone_id: "🤝 Bimbing Anak Raih Beasiswa Prestasi & Crowdfund Relawan",
        tone_en: "🤝 Coach for Merit Scholarship & Grassroots Crowdfunding",
        text_id: "Anak Anda mendaftar beasiswa jalur riset mandiri dan lolos! Sementara kampanye Pilkada dijalankan lewat sumbangan receh relawan akar rumput.",
        text_en: "Your daughter secures a competitive academic merit fellowship! Meanwhile, your campaign pivots to transparent grassroots micro-donations.",
        life: { familyRel: 12, stress: -5, wealth: 0 },
        fx: { sat: 10, risk: -6 },
        actors: { Warga: 12, Media: 10 },
        outcome_id: "Keluarga mandiri, kampanye bermartabat! Kampanye rakyat berbasis kerelawanan meledak menjadi gerakan sosial terkuat di kota.",
        outcome_en: "Triumph on both fronts! The grassroots crowdfunding movement became an unstoppable civic wave propelling your re-election."
      }
    ]
  },
  {
    term: 1,
    year: 5,
    semester: 2, // Month 60
    type: "legacy_reflection",
    title_id: "Malam Renungan Pra-Pilkada Periode Kedua",
    title_en: "Pre-Election Reflection Night: To Run Again or Step Down?",
    location_id: "Balkon Atas Rumah Dinas Menghadap Kelap-Kelip Kota • Pukul 23.30 WIB",
    location_en: "Residence Balcony Overlooking City Lights • 11:30 PM",
    character_id: "Pasangan Hidup (dr. Sarah / Bambang)",
    character_en: "Life Partner (dr. Sarah / Bambang)",
    avatar: "🌃",
    story_id: "Malam terakhir sebelum genderang masa kampanye Pilkada periode kedua ditabuh. Anda duduk berdua bersama pasangan memandangi lampu-lampu kota yang telah Anda pimpin selama 5 tahun penuh liku. Pasangan Anda memegang tangan Anda dan berbisik lembut: 'Apakah hatimu masih lapang untuk mengabdi 5 tahun lagi? Jangan sampai ambisi kekuasaan meremukkan jiwa dan keluarga kita.'",
    story_en: "The eve of the official campaign kickoff for your second mayoral term. You sit on the quiet balcony with your spouse, watching the glittering city skyline you governed for five turbulent years. Your partner gently holds your hand: 'Is your heart still pure to serve another five years? Make sure power doesn’t hollow out your soul.'",
    dilemma_id: "Bagaimana Anda memantapkan niat suci memasuki pertarungan periode kedua bersama keluarga?",
    dilemma_en: "How do you crystallize your core purpose and family commitment before launching into Term 2?",
    choices: [
      {
        id: "pledge_humble_service",
        tone_id: "🤍 Ikrarkan Janji: 'Hanya Demi Kebaikan Warga'",
        tone_en: "🤍 Renew Solemn Vow: 'Purely for Citizen Welfare'",
        text_id: "“Jika saya melenceng dari kejujuran, ingatkan saya tanpa ragu. Saya maju lagi bukan demi jabatan, tapi menuntaskan amanah sekolah gratis dan penataan banjir.”",
        text_en: "“If I ever stray from integrity, pull me back without hesitation. I run not for vanity, but to finish our flood defenses and free schooling for all.”",
        life: { familyRel: 16, stress: -15, health: 10 },
        fx: { sat: 8, risk: -10 },
        actors: { Warga: 10, Media: 6 },
        outcome_id: "Kedamaian batin menyelimuti jiwa Anda. Keluarga siap menjadi benteng pertahanan moral terkuat dalam mengarungi Pilkada Periode Kedua!",
        outcome_en: "Profound peace settled over your soul. Your united family became an unshakeable moral citadel heading into the election!"
      },
      {
        id: "ruthless_ambition",
        tone_id: "⚡ 'Kita Harus Menang Telak Menghancurkan Lawan!'",
        tone_en: "⚡ 'We Must Crush Opponents with Total Dominance!'",
        text_id: "“Ini bukan soal amanah, ini perang reputasi! Lima tahun ini musuh-musuh politik meremehkan saya. Saya akan buktikan saya penguasa abadi kota ini!”",
        text_en: "“This is raw political warfare! Our enemies tried to bury us for five years. I will prove my total supremacy over this city!”",
        life: { familyRel: -10, stress: 20, health: -10 },
        fx: { sat: -2, risk: 15 },
        actors: { DPRD: 8, Warga: -4 },
        outcome_id: "Ambisi membara menguasai Anda. Kemenangan mungkin tercapai, namun aura kehangatan batin Anda mulai tergerus oleh pragmatisme dingin.",
        outcome_en: "Fierce ambition hardened your demeanor. Electoral victory seemed assured, yet the gentle empathy in your eyes slowly receded."
      },
      {
        id: "family_pact",
        tone_id: "🤝 Buat Pakta Tertulis: Wajib Hari Minggu Bebas Politik",
        tone_en: "🤝 Draft Family Pact: Mandatory Sunday Politics-Free Sanctuary",
        text_id: "Anda menulis pakta bersama pasangan dan anak: 'Sesibuk apapun di periode kedua nanti, hari Minggu adalah milik keluarga seutuhnya tanpa tamu politik.'",
        text_en: "You sign a written pact with your spouse and kids: 'No matter how intense Term 2 becomes, Sundays belong strictly to family with zero political visitors.'",
        life: { familyRel: 18, stress: -20, health: 12 },
        fx: { sat: 6 },
        outcome_id: "Komitmen luar biasa yang menjaga kewarasan hidup! Anak dan pasangan memeluk Anda dengan rasa bangga tak terhingga.",
        outcome_en: "An extraordinary boundary preserving domestic sanity! Your family embraced you with boundless pride and unwavering loyalty."
      }
    ]
  },

  // ==================== TERM 2 (YEARS 6 TO 10) ====================
  {
    term: 2,
    year: 6,
    semester: 1, // Month 66
    type: "dynasty_temptation",
    title_id: "Anak Mulai Tertarik Terjun ke Politik",
    title_en: "The Dynastic Urge: Eldest Child Eyes Council Seat",
    location_id: "Perpustakaan Rumah Dinas • Awal Periode Kedua",
    location_en: "Residence Library • Beginning of Term 2",
    character_id: "Putra/Putri Sulung Walikota",
    character_en: "Mayor's Eldest Child",
    avatar: "🗳️",
    story_id: "Memasuki periode kedua kepemimpinan Anda yang semakin kuat, anak sulung Anda yang baru lulus sarjana hukum menghampiri Anda dengan mata berbinar: 'Bapak/Ibu, pimpinan partai pengusung menawari saya nomor urut satu caleg DPRD Kota di dapil lumbung suara kita! Nama besar Bapak/Ibu jaminan menang telak. Apakah saya boleh ambil tiket emas ini?'",
    story_en: "Stepping into your formidable second term, your eldest child—fresh from law school—approaches with shining ambition: 'Father/Mother, the party chairman offered me ballot slot number one for the City Council in our stronghold district! Your mayoral popularity guarantees an easy victory. May I seize this golden ticket?'",
    dilemma_id: "Apakah Anda membiarkan dinasti politik keluarga terbangun, atau mendidik anak berjuang dari bawah?",
    dilemma_en: "Will you indulge a dynastic family dynasty, or demand your child earn their own credibility from the ground up?",
    choices: [
      {
        id: "block_dynasty",
        tone_id: "🛑 Larang Tegas: 'Rintis Karir Profesional Mandiri Dulu!'",
        tone_en: "🛑 Forbid Privilege: 'Build an Independent Career First!'",
        text_id: "“Tidak boleh! Saya tidak ingin kamu jadi politisi karbitan yang menumpang punggung orang tua. Jadilah pengacara LBH atau aktivis rakyat selama 5 tahun dulu!”",
        text_en: "“Absolutely not! I will not have you become a privileged nepo-baby riding my coattails. Work as a grassroots legal aid defender for five years first!”",
        life: { familyRel: -5, stress: -5, wealth: 0 },
        fx: { sat: 8, risk: -12 },
        actors: { Media: 12, Warga: 10, DPRD: -6 },
        outcome_id: "Keputusan berani anti-dinasti politik menuai decak kagum nasional! Anak Anda awalnya merajuk, namun kemudian bangga menjadi pejuang hukum independen.",
        outcome_en: "National media praised your anti-dynasty integrity! Your child pouted briefly, then flourished as an admired public-interest lawyer."
      },
      {
        id: "bless_dynasty",
        tone_id: "👑 Restui & Pasang Mesin Pemenangan Keluarga",
        tone_en: "👑 Endorse & Deploy Family Campaign Machine",
        text_id: "“Ambil kesempatan itu! Kekuasaan harus diwariskan ke darah daging sendiri agar kebijakan kita tidak diputarbalikkan penerus yang jahat!”",
        text_en: "“Seize the moment! Power must be preserved in trusted hands so our reforms are never undone by hostile successors!”",
        life: { familyRel: 10, stress: 18, wealth: 0.2 },
        fx: { sat: -8, risk: 20 },
        actors: { DPRD: 10, Warga: -10, Media: -12 },
        outcome_id: "Anak Anda melenggang mulus ke kursi dewan, tetapi spanduk kecaman 'Tolak Dinasti Walikota Karbitan' bertebaran di seluruh penjuru kota.",
        outcome_en: "Your child strolled easily into parliament, but protests condemning dynastic nepotism erupted across university campuses."
      },
      {
        id: "run_independent_ngo",
        tone_id: "🌱 Arahkan Memimpin Yayasan Amal & Riset Sosial",
        tone_en: "🌱 Direct toward Directing Municipal Philanthropy & Policy Lab",
        text_id: "“Jangan masuk parlemen dulu. Pimpin yayasan pemberdayaan UMKM anak muda. Buktikan kamu punya karya nyata sebelum meminta mandat rakyat.”",
        text_en: "“Stay out of partisan politics for now. Direct our youth entrepreneurship foundation. Prove concrete public service before asking for votes.”",
        life: { familyRel: 8, stress: -8, wealth: 0 },
        fx: { sat: 7, risk: -6 },
        actors: { Warga: 8, Pengusaha: 6 },
        outcome_id: "Solusi bijak yang membina kematangan anak tanpa menimbulkan resistensi politik. Komunitas pemuda menyambut programnya dengan antusias.",
        outcome_en: "A sagacious compromise fostering genuine maturity. Youth communities embraced the new social enterprise with roaring enthusiasm."
      }
    ]
  },
  {
    term: 2,
    year: 6,
    semester: 2, // Month 72
    type: "special_kpk_audit",
    title_id: "Pemeriksaan Khusus LHKPN Jilid 2",
    title_en: "High-Scrutiny Anti-Graft Wealth Re-Audit",
    location_id: "Ruang Rapat VIP Kantor Perwakilan BPKP • Akhir Tahun ke-6",
    location_en: "State Audit Agency VIP Briefing Room • End of Year 6",
    character_id: "Drs. Taufik Hidayat (Penyidik Khusus KPK)",
    character_en: "Drs. Taufik Hidayat (Senior KPK Investigator)",
    avatar: "🕵️‍♂️",
    story_id: "Tim Direktorat LHKPN KPK memanggil Anda untuk klarifikasi berkas kekayaan tertutup. Pasca terpilih dua periode, ada peningkatan aset tanah warisan dan rekening tabungan keluarga yang dilaporkan oleh LSM sebagai 'ketidakwajaran profil keuangan'. Suasana ruangan sangat formal dengan berkas tebal perbankan di atas meja.",
    story_en: "The KPK Asset Scrutiny Directorate summons you for a closed wealth reconciliation hearing. Entering your second term, an NGO filed complaints alleging anomalous spikes in family land holdings and bank balances. The investigator lays thick banking binders on the table.",
    dilemma_id: "Bagaimana Anda membuktikan transparansi total tanpa memicu kecurigaan atau kebocoran informasi ke lawan politik?",
    dilemma_en: "How do you demonstrate absolute financial transparency without exposing your family to malicious leaks?",
    choices: [
      {
        id: "open_bank_records",
        tone_id: "📂 Buka Seluruh Rekening & Surat Waris Notaris",
        tone_en: "📂 Waive Bank Secrecy & Present Notarized Deeds",
        text_id: "“Silakan buka seluruh rekening saya, pasangan, dan anak hingga ke rupiah terkecil. Ini bukti akta jual-beli warisan dan bukti pajak lunas.”",
        text_en: "“Waive banking secrecy on all our accounts to the last cent. Here are the notarized legacy inheritance deeds and tax clearance proofs.”",
        life: { familyRel: 6, stress: -10, wealth: 0 },
        fx: { sat: 8, risk: -15 },
        actors: { Media: 8, Warga: 10 },
        outcome_id: "Penyidik KPK angkat topi atas transparansi tanpa cela! KPK menyatakan laporan LHKPN Anda wajar, bersih, dan berstatus teladan nasional.",
        outcome_en: "The anti-graft investigators saluted your flawless transparency! Your financial portfolio received an unblemished clean bill of health."
      },
      {
        id: "lobby_commissioners",
        tone_id: "📞 Telepon Pimpinan Lembaga Demi 'Perlindungan'",
        tone_en: "📞 Call Agency Leadership Requesting 'Discretion'",
        text_id: "Merasa tersinggung diperiksa, Anda menelepon kenalan pejabat tinggi di Jakarta untuk meminta agar pemeriksaan daerah ini dihentikan.",
        text_en: "Offended by the scrutiny, you phone a high-ranking national patron in the capital to discreetly quash the provincial inquiry.",
        life: { familyRel: -4, stress: 18, wealth: 0 },
        fx: { sat: -6, risk: 22 },
        actors: { Media: -10, Warga: -8 },
        outcome_id: "Pemeriksaan mereda sejenak, namun desas-desus bahwa Walikota 'kebal hukum lewat lobi pusat' bocor ke wartawan investigasi.",
        outcome_en: "The probe halted temporarily, but leaks alleging you pulled strings to suppress graft audits triggered sensational headlines."
      },
      {
        id: "press_conference_audit",
        tone_id: "📢 Siarkan Hasil Audit Terbuka ke Publik",
        tone_en: "📢 Publish Verified Audit Findings Live to the Public",
        text_id: "Begitu selesai pemeriksaan, Anda langsung menggelar konferensi pers menunjukkan surat tanda bersih dari KPK dan mengunggahnya ke website Pemkot.",
        text_en: "Immediately upon concluding the interview, you stream a press conference displaying the official clearance letter and publish all files online.",
        life: { familyRel: 8, stress: -15, wealth: 0 },
        fx: { sat: 10, risk: -12 },
        actors: { Media: 12, Warga: 12 },
        outcome_id: "Lawan politik yang berharap Anda tersandung KPK langsung bungkam total. Kepercayaan investor dan warga Nusapura melonjak drastis!",
        outcome_en: "Opposition conspirators hoping for an indictment were silenced. Citizen confidence and investment ratings reached all-time highs!"
      }
    ]
  },
  {
    term: 2,
    year: 7,
    semester: 1, // Month 78
    type: "diplomatic_golf",
    title_id: "Golf Diplomatik dengan Utusan Istana",
    title_en: "Diplomatic Golf with the Presidential Envoy",
    location_id: "Padang Golf Bukit Nusapura • Minggu Pagi",
    location_en: "Nusapura Highland Golf Club • Sunday Morning",
    character_id: "Mayjen (Purn.) Hartarto (Staf Khusus Kepresidenan)",
    character_en: "Maj. Gen. (Ret.) Hartarto (Presidential Special Envoy)",
    avatar: "🏌️‍♂️",
    story_id: "Staf Khusus Presiden mengundang Anda bermain golf privat 18-hole. Di green hole ke-14 yang sepi, beliau berbicara santai sambil mengayunkan putter: 'Pak Wali, kinerja periode kedua Anda di Nusapura dipantau Istana. Ada alokasi Proyek Strategis Nasional (PSN) jalan tol lingkar senilai 4 Triliun. Tapi kami butuh jaminan Anda loyal mengamankan suara partai koalisi pusat di Pilpres mendatang.'",
    story_en: "A Special Staff to the President invites you to an exclusive 18-hole golf round. On the isolated 14th green, leaning on his putter, he speaks candidly: 'Mayor, your formidable second term is on the President’s radar. There is a Rp 4 Trillion National Strategic Tollway project ready for Nusapura. But the Palace requires your signed loyalty pledge for the upcoming Presidential election.'",
    dilemma_id: "Tukar komitmen politik Pilpres demi proyek infrastruktur raksasa kota, atau tolak politisasi PSN?",
    dilemma_en: "Trade presidential political loyalty for a massive city tollway, or refuse partisan hijacking of national funds?",
    choices: [
      {
        id: "smart_development",
        tone_id: "🤝 Amankan PSN dengan Syarat Manfaat Riil Warga",
        tone_en: "🤝 Secure Strategic Tollway with Strict Public Guarantees",
        text_id: "“Kami siap bersinergi dengan pemerintah pusat demi kemajuan rakyat, asalkan trase tol tidak menggusur sawah produktif dan melibatkan pengusaha lokal!”",
        text_en: "“We are honored to align with national leadership for citizen welfare, provided the highway spares productive farmland and contracts local builders!”",
        life: { familyRel: 0, stress: 5, wealth: 0 },
        fx: { sat: 10, apbd: 0.5, risk: 4 },
        actors: { Pengusaha: 12, Warga: 8, DPRD: 6 },
        outcome_id: "Proyek tol 4 Triliun resmi masuk Nusapura! Ekonomi kota siap meroket, dan nama Anda mulai diperhitungkan di kancah politik nasional.",
        outcome_en: "The Rp 4 Trillion highway was locked in! Nusapura’s economic velocity soared, placing your name on the national political map."
      },
      {
        id: "reject_palace_pressure",
        tone_id: "🚫 Tolak Tekanan: 'Walikota Milik Seluruh Rakyat'",
        tone_en: "🚫 Rebuke Partisan Conditions: 'I Serve All Citizens'",
        text_id: "“Hak pembangunan infrastruktur adalah hak seluruh rakyat daerah, tidak boleh disandera urusan dukung-mendukung capres!”",
        text_en: "“Infrastructure is a constitutional right of local citizens, not partisan ransom for presidential campaign loyalty!”",
        life: { familyRel: 4, stress: -5, wealth: 0 },
        fx: { sat: 5, risk: -6 },
        actors: { Media: 10, Warga: 6, DPRD: -8 },
        outcome_id: "Anda menjaga marwah netralitas kepala daerah, namun proyek tol dialihkan pemerintah pusat ke kabupaten tetangga.",
        outcome_en: "You defended principled neutrality, though the central government retaliated by rerouting the toll project to a neighboring county."
      },
      {
        id: "hole_in_one_charm",
        tone_id: "⛳ Buat Pukulan Hole-in-One & Bangun Hubungan Personal",
        tone_en: "⛳ Strike a Masterful Eagle & Build Warm Personal Rapport",
        text_id: "Anda menunjukkan keahlian golf yang memukau dan mentraktir santap siang hidangan laut khas pesisir sambil membicarakan konektivitas maritim terpadu.",
        text_en: "You sink a breathtaking 20-foot eagle putt, then treat the envoy to authentic coastal seafood while pitching integrated port connectivity.",
        life: { familyRel: 6, stress: -12, wealth: 0 },
        fx: { sat: 8, apbd: 0.3, risk: -2 },
        actors: { Pengusaha: 8, Media: 6 },
        outcome_id: "Utusan Istana sangat terkesan dengan kepiawaian diplomasi Anda. Dana alokasi khusus (DAK) kementerian mengalir tanpa ikatan politik kotor!",
        outcome_en: "The envoy was thoroughly captivated by your charm and vision. Ministerial development grants were disbursed without degrading partisan strings!"
      }
    ]
  },
  {
    term: 2,
    year: 7,
    semester: 2, // Month 84
    type: "car_scandal",
    title_id: "Skandal Mobil Plat Merah Anak di Malam Minggu",
    title_en: "Red-Plate Government Car Nightclub Scandal",
    location_id: "Garasi Rumah Dinas • Minggu Subuh 04.30 WIB",
    location_en: "Residence Garage • Sunday Dawn 4:30 AM",
    character_id: "Ajudan Senior & Petugas Satpol PP",
    character_en: "Chief Aide & Municipal Police Captain",
    avatar: "🚗",
    story_id: "Ajudan membangunkan Anda di subuh hari dengan wajah panik: mobil dinas sedan mewah plat merah milik Pemkot Nusapura kedapatan parkir di depan kelab malam kawasan hiburan elit. Foto mobil plat merah tersebut dengan botol minuman di dashboard sudah viral di media sosial ditonton jutaan kali dengan tagar #AnakWalikotaParty. Anak Anda tertunduk menangis di sofa.",
    story_en: "Your chief aide shakes you awake at dawn: an official luxury government sedan with red license plates was photographed outside an upscale downtown nightclub. Images of the car with liquor bottles on the hood have gone viral on social media under the hashtag #MayorKidParties. Your child sits weeping on the sofa.",
    dilemma_id: "Apakah Anda akan melindungi anak dengan merekayasa alibi dinas, atau menindak tegas secara hukum terbuka?",
    dilemma_en: "Will you cover for your child with fabricated official excuses, or enforce strict public administrative discipline?",
    choices: [
      {
        id: "public_discipline",
        tone_id: "⚖️ Tarik Mobil Dinas, Terapkan Sanksi & Minta Maaf Terbuka",
        tone_en: "⚖️ Impound Car, Enforce Fine & Issue Public Apology",
        text_id: "Anda menyita kunci mobil dinas untuk selamanya, mewajibkan anak membayar denda BBM dari tabungannya sendiri, dan tampil di depan kamera memohon maaf kepada seluruh warga.",
        text_en: "You permanently impound the vehicle, order your child to repay gas costs from personal allowance, and issue an unreserved public apology to citizens.",
        life: { familyRel: 2, stress: -10, wealth: -0.05 },
        fx: { sat: 6, risk: -10 },
        actors: { Warga: 8, Media: 10, Birokrasi: 8 },
        outcome_id: "Sikap ksatria dan ketegasan Anda tanpa pandang bulu dipuji warganet! Warga melihat Anda sebagai sosok pemimpin yang adil bahkan kepada darah daging sendiri.",
        outcome_en: "Your swift, uncompromising discipline drew nationwide admiration! Voters recognized a leader who places public ethics above parental favoritism."
      },
      {
        id: "coverup_aide",
        tone_id: "🤫 Buat Alibi: 'Mobil Sedang Dipakai Tugas Intel'",
        tone_en: "🤫 Fabricate Cover: 'The Car Was on Discrete Duty'",
        text_id: "Anda memerintahkan Dinas Kominfo dan tim hukum merilis rilis pers bahwa mobil tersebut sedang dipakai 'patroli pengawasan ketertiban malam oleh staf khusus'.",
        text_en: "You instruct Communications to publish a fabricated statement asserting the car was utilized for 'discrete municipal safety monitoring'.",
        life: { familyRel: -10, stress: 20, wealth: 0 },
        fx: { sat: -12, risk: 25 },
        actors: { Media: -16, Warga: -14 },
        outcome_id: "Kebohongan langsung terbongkar karena saksi mata di kelab malam mengunggah rekaman video anak Anda! Kepercayaan publik runtuh seketika.",
        outcome_en: "The cover-up crumbled immediately when club patrons posted undeniable video evidence! Public trust cratered amid deafening ridicule."
      },
      {
        id: "community_service",
        tone_id: "🧹 Hukuman Sosial: Wajib Bersihkan Taman Kota 1 Bulan",
        tone_en: "🧹 Community Penalty: Mandate 1 Month Public Park Cleaning",
        text_id: "Anda menjatuhkan hukuman kerja sosial bagi anak Anda untuk menyapu jalan protokol setiap pagi bersama pasukan oranye kebersihan kota.",
        text_en: "You sentence your child to one month of morning community service sweeping city avenues alongside municipal sanitation crews.",
        life: { familyRel: 10, stress: -15, wealth: 0 },
        fx: { sat: 12, risk: -12 },
        actors: { Warga: 15, Media: 12 },
        outcome_id: "Edukasi keluarga yang luar biasa! Foto anak Walikota menyapu jalan dengan rendah hati menginspirasi para orang tua di seluruh Indonesia.",
        outcome_en: "An inspiring masterclass in parenting and public accountability! Photos of your child sweeping streets humbly touched millions across the nation."
      }
    ]
  },
  {
    term: 2,
    year: 8,
    semester: 1, // Month 90
    type: "university_shares",
    title_id: "Tawaran Saham Yayasan Pendidikan Keluarga",
    title_en: "Endowment Shares Trap: Family University Foundation",
    location_id: "Lobi Yayasan Bakti Nusapura • Siang Hari",
    location_en: "Nusapura Education Foundation Lobby • Afternoon",
    character_id: "Konsorsium Pendidikan Swasta",
    character_en: "Private Education Conglomerate",
    avatar: "🏫",
    story_id: "Sebuah konsorsium properti dan kampus swasta menawarkan hibah gedung perkuliahan 7 lantai senilai puluhan miliar rupiah kepada yayasan pendidikan non-profit milik keluarga Anda. Syaratnya: Pemkot memberikan rekomendasi izin alih fungsi lahan resapan air di bukit utara untuk pembangunan kawasan komersial terpadu mereka.",
    story_en: "A private university conglomerate offers to deed a state-of-the-art 7-story campus building worth tens of billions to your family’s non-profit education foundation. The condition: City Hall must grant rezoning permits for northern catchment hills to facilitate their commercial real-estate complex.",
    dilemma_id: "Terima kampus gratis demi warisan pendidikan keluarga, atau tolak alih fungsi lahan demi menjaga resapan banjir kota?",
    dilemma_en: "Accept the university facility for family prestige, or preserve vital watershed forests against ecological destruction?",
    choices: [
      {
        id: "reject_greed",
        tone_id: "🌲 Tolak Tegas: 'Hutan Resapan Harga Mati Warga!'",
        tone_en: "🌲 Firm Rejection: 'Catchment Forests Are Inviolable!'",
        text_id: "“Kami tidak akan pernah menukar keselamatan jutaan warga dari banjir bandang demi gedung megah yayasan keluarga! Rencana alih fungsi lahan ditolak mutlak!”",
        text_en: "“We will never trade our citizens' flood safety for a gleaming private campus! The watershed rezoning request is denied unconditionally!”",
        life: { familyRel: 10, stress: -5, wealth: 0 },
        fx: { sat: 8, risk: -10 },
        actors: { Warga: 12, Pengusaha: -8 },
        outcome_id: "Integritas ekologis Anda diakui dunia! Hutan resapan terselamatkan, dan Kota Nusapura terhindar dari bencana banjir besar.",
        outcome_en: "Your ecological courage was hailed nationwide! The watershed was preserved, sparing downstream neighborhoods from catastrophic flooding."
      },
      {
        id: "accept_campus",
        tone_id: "🏫 Terima Hibah Gedung Kampus Keluarga",
        tone_en: "🏫 Accept Campus Donation & Quietly Amend Zoning",
        text_id: "Tergoda oleh warisan abadi nama keluarga di gedung kampus megah, Anda menandatangani SK penyesuaian tata ruang secara diam-diam.",
        text_en: "Seduced by immortalizing your family name on a grand university building, you quietly sign the zoning amendment decree.",
        life: { familyRel: 15, stress: 20, wealth: 0.5 },
        fx: { sat: -8, risk: 24, apbd: -0.2 },
        actors: { Pengusaha: 15, Warga: -10 },
        outcome_id: "Yayasan keluarga Anda memiliki kampus mewah, namun saat musim hujan tiba, air bah menenggelamkan ribuan rumah warga di hilir.",
        outcome_en: "Your family acquired a prestigious university asset, but rainy season torrents inundated thousands of working-class homes downstream."
      },
      {
        id: "municipal_polytechnic",
        tone_id: "🎓 Alihkan Jadi Politeknik Negeri Milik Pemkot",
        tone_en: "🎓 Convert Proposal into a Public Municipal Polytechnic",
        text_id: "Anda menolak hibah ke yayasan pribadi dan mewajibkan konsorsium membangun Politeknik Vokasi Negeri milik Pemkot di kawasan industri terbengkalai.",
        text_en: "You reject personal foundation ownership and mandate the consortium build a tuition-free public vocational polytechnic on reclaimed industrial brownfield.",
        life: { familyRel: 8, stress: -10, wealth: 0 },
        fx: { sat: 14, risk: -8 },
        actors: { Warga: 15, Pengusaha: 8 },
        outcome_id: "Langkah brilian yang melahirkan ribuan teknisi muda terserap kerja! Nama Anda harum sebagai bapak/ibu vokasi modern Kota Nusapura.",
        outcome_en: "A monumental masterstroke! Thousands of underprivileged youths gained high-paying technical careers through the new municipal polytechnic."
      }
    ]
  },
  {
    term: 2,
    year: 8,
    semester: 2, // Month 96
    type: "cardiac_warning",
    title_id: "Kesehatan Jantung & Peringatan Dokter Pribadi",
    title_en: "Cardiovascular Warning & Doctor's Ultimatum",
    location_id: "Klinik Jantung Eksekutif RSUD Nusapura • Malam Hari",
    location_en: "Municipal Hospital Executive Cardiac Suite • Night",
    character_id: "dr. Arief Budiman, Sp.JP (Kepala Dokter Spesialis Jantung)",
    character_en: "dr. Arief Budiman (Chief Cardiologist)",
    avatar: "🩺",
    story_id: "Di tengah persiapan maraton pembahasan LKPJ akhir tahun ke-8, Anda tiba-tiba sesak napas dan dilarikan ke ruang darurat RSUD. Hasil rekam jantung EKG menunjukkan penyumbatan pembuluh darah parsial akibat kelelahan kronis dan kopi berlebih. Dokter spesialis memperingatkan tegas di depan pasangan Anda: 'Pak/Ibu Wali, jika Anda memaksakan diri memimpin sidang paripurna besok tanpa istirahat total seminggu, risikonya serangan jantung fatal.'",
    story_en: "During grueling late-night budget accountability sessions in Year 8, acute chest pain strikes, landing you in the municipal hospital emergency suite. The electrocardiogram reveals early myocardial ischemia fueled by chronic sleep deprivation. The cardiologist issues an ultimatum: 'Mayor, if you proceed to tomorrow's parliamentary session without taking a week of complete medical rest, you risk a fatal coronary event.'",
    dilemma_id: "Prioritaskan keselamatan nyawa dan keluarga, atau pertaruhkan nyawa demi menjaga hegemoni rapat dewan?",
    dilemma_en: "Heed medical warning and preserve your life for family, or risk sudden death to dominate council chambers?",
    choices: [
      {
        id: "full_medical_rest",
        tone_id: "🛌 Istirahat Total 1 Minggu & Serahkan Plt ke Wawali",
        tone_en: "🛌 One-Week Strict Rest & Delegate Authority to Vice Mayor",
        text_id: "Melihat tangisan pasangan dan anak, Anda menyadari kekuasaan tiada artinya tanpa nyawa. Anda menandatangani SK Pelaksana Tugas kepada Wakil Walikota.",
        text_en: "Seeing your spouse and children in tears, you recognize power is hollow without life. You sign interim authority over to your Vice Mayor.",
        life: { familyRel: 20, stress: -30, health: 25 },
        fx: { sat: 4, risk: -5 },
        actors: { Birokrasi: 8, Warga: 6 },
        outcome_id: "Kesehatan jantung Anda stabil kembali! Wawali menjalankan tugas dengan disiplin dan warga memanjatkan doa bersama untuk kesembuhan Anda.",
        outcome_en: "Cardiac stability restored! Your Vice Mayor handled the hearings loyally while citizens organized citywide prayers for your recovery."
      },
      {
        id: "force_parliament",
        tone_id: "💉 Suntik Penghilang Sakit & Paksakan Datang Rapat",
        tone_en: "💉 Inject Painkillers & Force Attendance at Council",
        text_id: "“Saya tidak akan membiarkan oposisi merasa menang di paripurna!” Anda meminta suntikan analgesik dan nekat memimpin sidang dewan.",
        text_en: "“I will never let opposition hyenas sense weakness!” You demand painkiller shots and stubbornly march into the legislative chamber.",
        life: { familyRel: -15, stress: 30, health: -35 },
        fx: { sat: -4 },
        actors: { DPRD: 6 },
        outcome_id: "Anda berhasil memenangkan voting dewan, tetapi ambruk tak sadarkan diri di podium sidang! Pasangan Anda syok berat.",
        outcome_en: "You won the council vote, but collapsed unconscious on the podium! Emergency sirens wailed as your terrified family rushed to your side."
      },
      {
        id: "virtual_parliament",
        tone_id: "💻 Pimpin Sidang Paripurna Via Video Konferensi",
        tone_en: "💻 Preside Over Parliamentary Session via High-Res Video Link",
        text_id: "Anda memimpin sidang secara virtual dari ruang rawat rumah sakit dengan wibawa penuh, memaparkan data anggaran tanpa membebani fisik secara berlebihan.",
        text_en: "You preside over the legislative session via secure video stream from your recovery suite, presenting budget matrices with formidable dignity.",
        life: { familyRel: 12, stress: -15, health: 15 },
        fx: { sat: 8, risk: -4 },
        actors: { Media: 10, DPRD: 6 },
        outcome_id: "Inovasi kepemimpinan digital yang cemerlang! Dewan terkesan pada dedikasi Anda dan meloloskan seluruh draf pertanggungjawaban.",
        outcome_en: "A brilliant demonstration of resilient digital governance! Lawmakers were awed by your dedication and passed all accountability bills."
      }
    ]
  },
  {
    term: 2,
    year: 9,
    semester: 1, // Month 102
    type: "national_podcast",
    title_id: "Wawancara Eksklusif Podcast Nasional",
    title_en: "Live National Podcast: Unfiltered Hot Seat",
    location_id: "Studio Podcast Terbesar Jakarta • Siang Hari",
    location_en: "Premier National Media Podcast Studio • Afternoon",
    character_id: "Deddy 'The Host' (Podcaster Nomor Satu)",
    character_en: "Premier National Talk Show Host",
    avatar: "🎙️",
    story_id: "Menjelang tahun terakhir kepemimpinan Anda, pembawa acara podcast terbesar di tanah air dengan 25 juta penonton mengundang Anda untuk wawancara meja bundar live tanpa sensor: 'Pak/Ibu Walikota, 9 tahun Anda memimpin Nusapura, ada yang sebut Anda pemimpin transformatif, tapi ada juga rumor Anda bersiap maju Calon Gubernur dan main mata dengan cukong tambang. Buka-bukaan di sini!'",
    story_en: "Heading into your penultimate year, the nation’s top podcast host with 25 million viewers invites you for a live, unscripted 2-hour interview: 'Mayor, after nine years governing Nusapura, fans call you a visionary reformer, but critics claim you are eyeing the Governorship and taking covert favors from mining tycoons. Let’s hear the truth!'",
    dilemma_id: "Gunakan panggung nasional untuk pamer prestasi menuju tiket Pilgub, atau bicara apa adanya secara tulus dan membumi?",
    dilemma_en: "Use the national megaphone to pitch gubernatorial ambitions, or present an authentic, humble account of municipal struggles?",
    choices: [
      {
        id: "honest_statesman",
        tone_id: "🎙️ Jawab Rendah Hati, Akui Kegagalan & Paparkan Solusi",
        tone_en: "🎙️ Candid & Humble: Acknowledge Flaws and Detail Real Solutions",
        text_id: "“Kami bukan malaikat tanpa salah. Kami pernah gagal di drainase tahun kedua, tapi kami perbaiki dengan keterbukaan. Soal Gubernur, biarkan rakyat yang menilai karya, bukan ambisi.”",
        text_en: "“We are not infallible angels. We faltered on early drainage, but corrected it with transparency. Regarding higher office: let work speak, not vanity.”",
        life: { familyRel: 10, stress: -10, wealth: 0 },
        fx: { sat: 14, risk: -12 },
        actors: { Media: 15, Warga: 15 },
        outcome_id: "Podcast ditonton 10 juta orang dalam 24 jam dengan rasio 99% like! Ketulusan dan kematangan kepemimpinan Anda memukau seluruh penjuru negeri.",
        outcome_en: "10 million views in 24 hours with a 99% approval rating! Your authenticity and grounded wisdom captivated the entire country."
      },
      {
        id: "defensive_brag",
        tone_id: "📊 Pamer Statistik & Serang Balik Pengkritik",
        tone_en: "📊 Boast Statistics & Aggressively Attack Critics",
        text_id: "“Semua kritik itu bermotif politik busuk! Nusapura sekarang termegah di provinsinya berkat tangan dingin saya! Lawan politik cuma bisa iri!”",
        text_en: "“All those critiques are bad-faith political smears! Nusapura is the jewel of the province purely because of my genius! Detractors are just jealous!”",
        life: { familyRel: -5, stress: 15, wealth: 0 },
        fx: { sat: -6, risk: 15 },
        actors: { Media: -10, Warga: -8 },
        outcome_id: "Warganet mencibir gaya bicara Anda yang dinilai narsistik dan sombong. Klip podcast Anda dijadikan meme ejekan di media sosial.",
        outcome_en: "Netizens roasted your prickly, boastful tone. Mocking memes criticizing your vanity circulated widely across online forums."
      },
      {
        id: "champion_citizens",
        tone_id: "👥 Angkat Kisah Perjuangan Guru & Petugas Lapangan",
        tone_en: "👥 Spotlight Grassroots Teachers and City Sanitation Heroes",
        text_id: "Alih-alih membicarakan diri sendiri, Anda menceritakan dedikasi luar biasa ibu guru honorer dan petugas kebersihan Nusapura yang Anda beri jaminan hidup layak.",
        text_en: "Rather than hyping yourself, you dedicate the airtime to honoring grassroots teachers and frontline sanitation workers supported by city programs.",
        life: { familyRel: 14, stress: -15, wealth: 0 },
        fx: { sat: 15, risk: -10 },
        actors: { Warga: 18, Media: 14 },
        outcome_id: "Air mata haru mengalir dari penonton podcast! Citra kepemimpinan Anda dipuji sebagai simbol pemimpin sejati yang mengutamakan rakyat kecil.",
        outcome_en: "Viewers across Indonesia were moved to tears! Your reputation was elevated as the quintessential servant leader of the modern era."
      }
    ]
  },
  {
    term: 2,
    year: 9,
    semester: 2, // Month 108
    type: "biography_book",
    title_id: "Buku Biografi Kepemimpinan Sang Walikota",
    title_en: "Mayoral Leadership Memoir & Publisher Deal",
    location_id: "Panggung Utama Nusapura Book Fair • Akhir Tahun ke-9",
    location_en: "Nusapura Book Fair Grand Pavilion • End of Year 9",
    character_id: "Penerbit Buku Nasional Terkemuka",
    character_en: "National Publishing House Director",
    avatar: "📖",
    story_id: "Penerbit buku terkemuka mengajukan naskah biografi resmi kepemimpinan 9 tahun Anda di Nusapura dengan judul 'Menata Kota, Merawat Manusia'. Penulis biografi menawarkan dua versi naskah: versi pertama menonjolkan kisah otentik perjuangan bersama rakyat miskin kota, sementara versi kedua memoles citra super-heroik Anda sebagai modal pencalonan Gubernur/Presiden dengan royalti fantastis.",
    story_en: "A premier publishing house prepares the definitive 9-year leadership biography of your tenure titled 'Governing the City, Nurturing the Soul'. The lead author presents two drafts: one spotlights raw, authentic community resilience, while the other crafts a heroic hagiography designed for an upcoming Gubernatorial run.",
    dilemma_id: "Pilih buku biografi yang memotret realitas jujur perjuangan kota, atau buku polesan citra politik ambisius?",
    dilemma_en: "Publish an honest, grounded historical record of civic struggle, or an inflated political marketing hagiography?",
    choices: [
      {
        id: "authentic_book",
        tone_id: "📚 Pilih Kisah Otentik & Sumbangkan Seluruh Royalti",
        tone_en: "📚 Choose Authentic Memoir & Donate All Royalties to Libraries",
        text_id: "“Buku ini harus memuat air mata, keringat warga, dan kesalahan yang pernah kami perbaiki. Seluruh royalti buku kita sumbangkan untuk perpustakaan desa.”",
        text_en: "“This book must chronicle our citizens' sweat, our mistakes, and how we grew. Donate every cent of royalties to establish neighborhood reading rooms.”",
        life: { familyRel: 12, stress: -10, wealth: 0 },
        fx: { sat: 12, risk: -10 },
        actors: { Media: 12, Warga: 14 },
        outcome_id: "Buku biografi Anda menjadi best-seller nasional dan rujukan kurikulum kepemimpinan publik di berbagai universitas ternama!",
        outcome_en: "Your memoir became an instant national bestseller and required reading in top public policy graduate programs!"
      },
      {
        id: "glamour_pr_book",
        tone_id: "🏆 Poles Citra Sempurna Demi Tiket Pilgub",
        tone_en: "🏆 Publish Glossy PR Tome to Boost Gubernatorial Ticket",
        text_id: "Anda memilih naskah polesan super-heroik dan memborong ribuan eksemplar menggunakan dana taktis dinas untuk dibagikan ke seluruh kantor partai provinsi.",
        text_en: "You select the heroic draft and purchase thousands of copies with municipal PR funds to distribute across provincial party caucuses.",
        life: { familyRel: -6, stress: 12, wealth: 0.15 },
        fx: { sat: -4, risk: 14 },
        actors: { DPRD: 8, Media: -6 },
        outcome_id: "Elite partai terkesan, namun kritikus sastra dan pengamat politik mengecam buku tersebut sebagai proyek narsisme pencitraan berlebihan.",
        outcome_en: "Party elites nodded favorably, but literary critics and political analysts mocked the publication as a shallow vanity project."
      },
      {
        id: "digital_free_book",
        tone_id: "🌐 Rilis E-Book Gratis untuk Seluruh Generasi Muda",
        tone_en: "🌐 Release Free Open-Access E-Book for Youth",
        text_id: "Anda menolak komersialisasi dan menerbitkan naskah biografi lengkap dalam format e-book interaktif gratis yang dapat diunduh siapa saja.",
        text_en: "You waive commercial publisher deals and release the entire interactive volume free online for aspiring young changemakers everywhere.",
        life: { familyRel: 10, stress: -12, wealth: 0 },
        fx: { sat: 14, risk: -8 },
        actors: { Warga: 16, Media: 10 },
        outcome_id: "Jutaan anak muda mengunduh buku tersebut. Anda menanamkan benih kepemimpinan bersih ke sanubari generasi penerus bangsa.",
        outcome_en: "Over a million young citizens downloaded the book. You sowed enduring seeds of ethical governance in the minds of future leaders."
      }
    ]
  },
  {
    term: 2,
    year: 10,
    semester: 1, // Month 114
    type: "gubernatorial_sponsor",
    title_id: "Lobi Sponsor Cukong Menuju Pilgub",
    title_en: "The Kingmaker's Ultimatum: Gubernatorial Megabillion Backing",
    location_id: "Ruang Cigar Lounge Mewah Kapal Pesiar • Malam Hari",
    location_en: "Luxury Yacht Private Cigar Lounge • Midnight",
    character_id: "Konsorsium Naga Properti & Tambang",
    character_en: "Mining & Industrial Tycoons Consortium",
    avatar: "🛳️",
    story_id: "Tinggal 6 bulan sebelum Anda purna tugas dari kursi Walikota Nusapura. Tiga konglomerat terbesar provinsi mengundang Anda makan malam di atas kapal pesiar pribadi. Mereka menyodorkan komitmen dana kampanye 150 Miliar Rupiah untuk tiket Anda maju Calon Gubernur Jawa/Sumatera: 'Pak/Ibu Wali, Anda pasti menang Gubernur dengan dana kami. Syaratnya cuma satu: kelak beri konsesi izin tambang pasir dan perluasan pabrik semen di kawasan bukit karst.'",
    story_en: "Six months remain before your mayoral retirement. Three of the province’s wealthiest oligarchs host you aboard a private yacht. They lay out a binding Rp 150 Billion war chest to guarantee your victory as the next Provincial Governor: 'Mayor, with our capital, the Governorship is yours. In return, grant our consortium karst quarrying and cement expansion permits upon inauguration.'",
    dilemma_id: "Gadaikan kelestarian alam demi tahta Gubernur, atau tolak dana haram demi menutup masa bakti dengan kepala tegak?",
    dilemma_en: "Mortgage the province's ecological heritage for the Governor’s seat, or walk away clean with unbowed integrity?",
    choices: [
      {
        id: "refuse_oligarchs",
        tone_id: "🛡️ Tolak Mentah-Mentah: 'Karier Saya Tak Dijual!'",
        tone_en: "🛡️ Flatly Reject: 'My Integrity Is Not for Sale!'",
        text_id: "“Simpan uang 150 miliar Anda! Saya tidak akan pernah mengorbankan masa depan air tanah dan paru-paru bumi demi kursi Gubernur! Purna tugas dengan terhormat jauh lebih mulia!”",
        text_en: "“Keep your 150 billion! I will never trade our children's drinking water and mountain forests for high office! Leaving office with clean hands is priceless!”",
        life: { familyRel: 20, stress: -15, health: 15 },
        fx: { sat: 15, risk: -20 },
        actors: { Warga: 20, Media: 15, Pengusaha: -15 },
        outcome_id: "Para cukong ternganga bungkam tak percaya! Ketegasan Anda menjadi legenda hidup politik Indonesia sebagai pemimpin yang tak mempan dibeli.",
        outcome_en: "The oligarchs sat in stunned silence! Your defiant incorruptibility became an enduring legend of modern Indonesian democracy."
      },
      {
        id: "take_billions",
        tone_id: "💼 Terima Kesepakatan Demi Ambisi Gubernur",
        tone_en: "💼 Accept the Mega-War Chest for the Gubernatorial Run",
        text_id: "Melihat tiket Gubernur di depan mata, Anda menjabat tangan para konglomerat dan meneken surat komitmen izin konsesi rahasia.",
        text_en: "Gazing upon the supreme provincial throne, you shake the oligarchs' hands and sign the covert resource concession compact.",
        life: { familyRel: -15, stress: 30, wealth: 2.0 },
        fx: { sat: -15, risk: 35, apbd: -0.5 },
        actors: { Pengusaha: 25, Warga: -20, Media: -15 },
        outcome_id: "Dana politik Anda tak terbatas, tetapi jiwa dan reputasi 10 tahun kepemimpinan Anda kini tersandera selamanya di tangan oligarki.",
        outcome_en: "Your campaign treasury is boundless, yet the pristine legacy of your entire decade of governance is irrevocably mortgaged to oligarchs."
      },
      {
        id: "peoples_movement",
        tone_id: "🌱 Tolak Cukong & Deklarasikan Gerakan Rakyat Independen",
        tone_en: "🌱 Reject Oligarchs & Announce People's Independent Movement",
        text_id: "“Jika rakyat menghendaki saya mengabdi ke tingkat provinsi, biarlah rakyat sendiri yang membiayai lewat gotong-royong satu rupiah per warga!”",
        text_en: "“If citizens demand my service at the provincial level, let ordinary working people fund it through one-dollar grassroots solidarity!”",
        life: { familyRel: 18, stress: -10, wealth: 0 },
        fx: { sat: 18, risk: -15 },
        actors: { Warga: 22, Media: 18 },
        outcome_id: "Gelombang dukungan rakyat meledak secara organik di 20 kabupaten/kota! Fenomena politik baru yang mengguncang tatanan oligarki lama.",
        outcome_en: "An organic civic tsunami erupted across the province! A transformative grassroots phenomenon shook the foundations of old oligarchy."
      }
    ]
  },
  {
    term: 2,
    year: 10,
    semester: 2, // Month 120
    type: "final_packing",
    title_id: "Hari Terakhir Mengemasi Rumah Dinas",
    title_en: "Packing the Last Box at the Official Residence",
    location_id: "Ruang Utama Rumah Dinas Walikota • Malam Terakhir Masa Jabatan",
    location_en: "Official Residence Main Hall • Final Night of Tenure",
    character_id: "Seluruh Anggota Keluarga & Staf Setia",
    character_en: "Entire Family & Loyal Household Staff",
    avatar: "📦",
    story_id: "Kardus-kardus terakhir telah terikat rapi di ruang tamu. Besok pagi, Anda akan menyerahkan kunci rumah dinas kepada Walikota baru terpilih. Pasangan dan anak-anak Anda memeluk Anda erat di tengah ruangan yang kini mulai lengang. Sopir, ajudan, dan koki rumah dinas berdiri terharu berlinang air mata. Satu dekade penuh perjuangan, keringat, dan cinta untuk Kota Nusapura telah tuntas.",
    story_en: "The last moving boxes are taped in the main hall. Tomorrow morning, you hand over the residence keys to the newly elected Mayor. Your partner and grown children embrace you tightly in the echoing, emptied room. Your longtime driver, aides, and household cook stand by in tears. A full decade of sacrifice, honor, and love for Nusapura reaches its completion.",
    dilemma_id: "Bagaimana Anda menutup lembaran 10 tahun pengabdian sebelum kembali menjadi warga biasa?",
    dilemma_en: "How do you seal this historic 10-year chapter of leadership before re-entering life as a private citizen?",
    choices: [
      {
        id: "grateful_speech",
        tone_id: "🤍 Peluk Keluarga & Santuni Seluruh Staf Rumah Tangga",
        tone_en: "🤍 Embrace Family & Reward All Household Staff with Private Savings",
        text_id: "Anda memeluk keluarga dan membagikan tabungan pribadi sebagai apresiasi pensiun bagi para staf setia: 'Terima kasih telah menjaga kami selama 10 tahun. Kita pulang ke rumah lama dengan kepala tegak dan hati bersih.'",
        text_en: "You embrace your family and disburse personal severance bonuses to loyal domestic staff: 'Thank you for protecting us for ten years. We return home with unbowed heads and clean hearts.'",
        life: { familyRel: 25, stress: -40, health: 20, wealth: -0.2 },
        fx: { sat: 15, risk: -25 },
        actors: { Warga: 20, Birokrasi: 20, Media: 15 },
        outcome_id: "Momen perpisahan yang sangat mengharukan dan khidmat. Ribuan warga berkumpul di luar gerbang membentangkan spanduk 'Terima Kasih Walikota Teladan Kami!'.",
        outcome_en: "An unforgettable, deeply moving farewell. Thousands gathered outside waving banners: 'Thank You, Our Beloved Mayor for the Ages!'."
      },
      {
        id: "public_letter",
        tone_id: "📜 Bacakan Surat Cinta Terbuka untuk Seluruh Warga",
        tone_en: "📜 Read a Final Open Letter of Gratitude to All Citizens",
        text_id: "Anda merekam video pesan perpisahan di teras rumah dinas, berterima kasih pada seluruh tukang sapu, dokter, guru, dan pengemudi angkot yang telah bersama membangun Nusapura.",
        text_en: "You broadcast a heartfelt final video message from the porch, thanking every sanitation worker, nurse, teacher, and bus driver who built Nusapura together.",
        life: { familyRel: 20, stress: -35, health: 15 },
        fx: { sat: 18, risk: -20 },
        actors: { Warga: 25, Media: 20 },
        outcome_id: "Surat cinta Anda menjadi video paling viral dan menginspirasi dalam sejarah kota. Warisan kepemimpinan Anda abadi dalam ingatan sejarah.",
        outcome_en: "Your parting letter became the most beloved civic address in provincial history, cementing your legacy into timeless historical memory."
      },
      {
        id: "peaceful_walk",
        tone_id: "🚶‍♂️ Jalan Kaki Pulang ke Rumah Pribadi Bersama Pasangan",
        tone_en: "🚶‍♂️ Walk Quietly Hand-in-Hand Back to Your Private Home",
        text_id: "Anda menolak diantar iring-iringan sirine mobil dinas. Anda menggandeng tangan pasangan dan berjalan kaki santai menyusuri trotoar malam kota yang bersih menuju rumah pribadi.",
        text_en: "You decline siren motorcades. Hand-in-hand with your spouse, you walk quietly along the illuminated, clean city pavements toward your modest home.",
        life: { familyRel: 30, stress: -50, health: 25 },
        fx: { sat: 20, risk: -30 },
        actors: { Warga: 25, Media: 25 },
        outcome_id: "Pemandangan paling puitis dan bermartabat seorang mantan penguasa. Warga yang melihat di jalan menyapa hormat dengan mata berkaca-kaca.",
        outcome_en: "The most poetic, dignified transition in democratic memory. Passersby bowed respectfully, inspired by a true statesman returning to the people."
      }
    ]
  }
];
