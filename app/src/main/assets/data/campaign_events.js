/**
 * Electoral Campaign Narrative Dilemmas & Media Press Conferences Dataset
 */

const CAMPAIGN_EVENTS = [
  {
    day: 1,
    title: 'Tawaran Sumbangan Dana Cukong Rp 3 Miliar vs Kampanye Swadaya',
    title_en: 'Rp 3 Billion Secret Developer Donation Offer vs Grassroots Campaign',
    icon: '💰',
    cat: 'Pendanaan Kampanye',
    cat_en: 'Campaign Finance',
    text: 'Konsorsium pengembang menawarkan suntikan dana kampanye Rp 3 Miliar secara rahasia, tetapi menuntut janji kemudahan izin konversi lahan resapan air jika Anda terpilih.',
    text_en: 'A developer consortium discreetly offers a Rp 3 Billion campaign war chest injection, demanding backdoor zoning permits for water catchment reserves once elected.',
    choices: [
      {
        t: '🤝 Terima Sumbangan Rp 3 Miliar untuk Biaya Baliho & Iklan TV Masif',
        t_en: '🤝 Accept Rp 3 Billion Donation for Citywide Billboards & TV Ads',
        d: 'Dana kampanye melimpah dan iklan Anda membanjiri kota, namun berisiko menambah komitmen korupsi birokrasi di masa depan.',
        d_en: 'Abundant campaign funds saturate media channels, but creates risky corrupt obligations to oligarchs.',
        effects: { elek: 7, oppElek: -1, funds: 3000, actors:{Pengusaha:12, Investor:10, KomunitasLingkungan:-15, LSM:-10} },
        media: {
          times: 'Spanduk dan iklan kampanye kandidat mendominasi seluruh pelosok kota.',
          times_en: 'Candidate campaign billboards and broadcast ads dominate every corner of the city.',
          tv: 'Invasifnya media kampanye tingkatkan pengenalan paslon di akar rumput.',
          tv_en: 'Massive media blitz sharply boosts candidate name recognition among grassroots voters.',
          forum: 'Warga: "Gokil balihonya ada di mana-mana, dananya tebel banget."',
          forum_en: 'Citizen: "Incredible, their campaign posters are everywhere. Serious war chest."',
          sosmed: '@NusaWatch: Dana kampanyenya melimpah bgt, dapet sponsor dari mana tuh?',
          sosmed_en: '@NusaWatch: Massive campaign cash everywhere, who is secretly bankrolling this?'
        }
      },
      {
        t: '🛡️ Tolak Sumbangan Cukong & Publikasikan Kampanye Anti-Transaksional',
        t_en: '🛡️ Reject Secret Cash & Publicize Anti-Transactional Campaign',
        d: 'Apresiasi publik meluas atas integritas Anda, tetapi dana kampanye tetap sangat terbatas.',
        d_en: 'Widespread praise for high moral integrity, though campaign operational funds remain modest.',
        effects: { elek: 5, oppElek: -3, funds: -100, sat: 5, actors:{LSM:15, KomunitasLingkungan:12, Investor:-10} },
        media: {
          times: 'Sikap tegas tolak politik cukong pikat simpati akademisi dan aktivis.',
          times_en: 'Principled rejection of shadowy oligarch money wins praise from civic activists.',
          tv: 'Inisiatif kampanye bersih tanpa mahar politik jadi sorotan positif pengamat.',
          tv_en: 'Clean campaign pledge with zero transactional politics receives rave reviews.',
          forum: 'Warga: "Calon idaman, ga mau disetir sama pengusaha nakal."',
          forum_en: 'Citizen: "Finally a principled leader who refuses to be controlled by shady tycoons."',
          sosmed: '@IntegritasNusa: Keren bgt! Calon pemimpin yang ga mau digadaikan!',
          sosmed_en: '@NusaIntegrity: Phenomenal! A leader who refuses to sell out the city!'
        }
      },
      {
        t: '🎁 Minta Sumbangan Diganti Program CSR Bedah Rumah Rakyat Legal',
        t_en: '🎁 Request Funds Converted to Public Housing CSR Initiative',
        d: 'Solusi kompromi legal yang meningkatkan simpati pemilih kelas bawah secara langsung.',
        d_en: 'A legal social compromise directly boosting popularity among working-class voters.',
        effects: { elek: 6, oppElek: -2, funds: 500, sat: 3, actors:{WargaMiskin:12, Pengusaha:6} },
        media: {
          times: 'Bedah rumah warga prasejahtera warnai kegiatan sosial masa kampanye.',
          times_en: 'Public housing renovations headline candidate community social outreach.',
          tv: 'Aksi nyata bantuan sosial sentuh kebutuhan dasar masyarakat pinggiran.',
          tv_en: 'Targeted civic welfare programs directly address impoverished suburban families.',
          forum: 'Warga: "Bagusan begini, bantuannya langsung dirasain warga miskin."',
          forum_en: 'Citizen: "This is much better—direct concrete aid that ordinary people feel."',
          sosmed: '@NusaPeduli: Mantap aksinya, bukan cuma janji tapi langsung aksi sosial.',
          sosmed_en: '@NusaCares: Excellent grassroots action, turning campaign into public aid.'
        }
      }
    ]
  },
  {
    day: 2,
    title: 'Serangan Isu Kampanye Hitam & Video Fitnah SARA di WhatsApp',
    title_en: 'Black Campaign Smears & Manipulated Viral Videos on WhatsApp',
    icon: '⚡',
    cat: 'Krisis Media',
    cat_en: 'Media Crisis',
    text: 'Beredar luas potongan rekaman suara hasil rekayasa AI dan pesan berantai yang menuduh Anda anti-keberagaman dan menerima dana asing ilegal.',
    text_en: 'AI-manipulated voice recordings and viral chain messages falsely accuse you of religious intolerance and accepting illegal foreign campaign contributions.',
    choices: [
      {
        t: '⚖️ Laporkan ke Siber Polri & Gandeng KPU-Bawaslu Bersihkan Nama',
        t_en: '⚖️ Report to Cyber Police & File Formal Complaints with Election Commission',
        d: 'Jalur hukum tegas memulihkan wibawa dan mengungkap dalang penyebar fitnah.',
        d_en: 'Decisive legal enforcement restores reputation and unmasks smear architects.',
        effects: { elek: 5, oppElek: -4, funds: -150, actors:{LSM:10, Kepolisian:10} },
        media: {
          times: 'Polda Nusapura buru produsen dan penyebar video hoaks Pilkada.',
          times_en: 'Regional Cyber Police actively hunt creators of deepfake election slander.',
          tv: 'Bawaslu tegaskan video rekaman hoaks murni fabrikasi teknologi manipulatif.',
          tv_en: 'Election Supervisory Board confirms viral recordings are malicious deepfakes.',
          forum: 'Warga: "Jahat banget fitnahnya, untung aparat gerak cepat."',
          forum_en: 'Citizen: "Despicable slander, glad law enforcement acted with lightning speed."',
          sosmed: '@CekFaktaNusa: Konfirmasi: Video hoaks ya! Jangan mudah terprovokasi.',
          sosmed_en: '@FactCheckNusa: Verified fake news! Do not be duped by coordinated smears.'
        }
      },
      {
        t: '🕌 Kunjungi Tokoh Lintas Agama & Gelar Doa Bersama Perdamaian',
        t_en: '🕌 Visit Interfaith Leaders & Host Citywide Peace Prayer Gathering',
        d: 'Merangkul seluruh elemen masyarakat dan meredam ketegangan horizontal.',
        d_en: 'Unites diverse civic communities and completely defuses social polarization.',
        effects: { elek: 6, oppElek: -2, funds: -200, sat: 4, actors:{TokohAgama:15, Budayawan:10} },
        media: {
          times: 'Silaturahmi lintas agama perkuat persatuan warga di tengah suhu Pilkada.',
          times_en: 'Interfaith dialogue strengthens civic unity amidst election heat.',
          tv: 'Tokoh agama serukan Pilkada damai dan tolak politisasi isu primordial.',
          tv_en: 'Religious leaders demand peaceful elections and reject divisive identity politics.',
          forum: 'Warga: "Sejuk lihat para tokoh agama kumpul rukun bareng calon walikota."',
          forum_en: 'Citizen: "Heartwarming to see interfaith leaders united in harmony with the candidate."',
          sosmed: '@HarmoniNusa: Ini baru calon pemimpin pemersatu bangsa, bukan pemecah belah!',
          sosmed_en: '@HarmoniousNusa: A unifying leader who brings everyone together!'
        }
      },
      {
        t: '🔥 Balas dengan Mengungkap Skandal Rekam Jejak Korupsi Kubu Lawan',
        t_en: '🔥 Counterattack by Exposing Rival Faction Corruption Record',
        d: 'Perang terbuka di media menurunkan elektabilitas lawan drastis, namun polarisasi meningkat.',
        d_en: 'Aggressive expose severely damages rival electability, but escalates political polarization.',
        effects: { elek: 4, oppElek: -6, funds: -100, sat: -3 },
        media: {
          times: 'Adu data skandal korupsi panaskan atmosfer pertarungan Pilkada.',
          times_en: 'Scandal exposures ignite fierce political warfare in mayoral race.',
          tv: 'Debat saling serang rekam jejak warnai ruang publik dan pemberitaan.',
          tv_en: 'Fierce cross-examinations dominate primetime television broadcasts.',
          forum: 'Warga: "Waduh makin panas, dua-duanya saling bongkar aib."',
          forum_en: 'Citizen: "It is getting heated—both camps are dropping massive dossiers."',
          sosmed: '@NusaDrama: Netizen makan popcorn, skandal lama rival akhirnya kebongkar!',
          sosmed_en: '@NusaDrama: Grabbing popcorn, the rival old corruption skeletons are out!'
        }
      }
    ]
  },
  {
    day: 3,
    title: 'Tuntutan Janji Obral Bantuan Tunai Rp 10 Juta/RT vs Realita APBD',
    title_en: 'Populist Cash Handout Demand of Rp 10M/Neighborhood vs Fiscal Budget Reality',
    icon: '📜',
    cat: 'Janji Politik',
    cat_en: 'Policy Promises',
    text: 'Kubu lawan menjanjikan bantuan langsung tunai (BLT) Rp 10 Juta per RT tiap bulan yang tidak realistis secara fiskal. Warga mendesak Anda merespons janji tersebut.',
    text_en: 'The rival camp promises an unsustainable cash handout of Rp 10 Million per neighborhood per month. Voters demand your official policy stance.',
    choices: [
      {
        t: '📊 Edukasi Rasionalitas APBD & Tawarkan Program Modal Usaha Produktif',
        t_en: '📊 Explain City Budget Realities & Propose Productive Business Grants',
        d: 'Masyarakat rasional dan pelaku UMKM mengapresiasi solusi cerdas yang berkesinambungan.',
        d_en: 'Rational citizens and SME entrepreneurs appreciate sustainable financial empowerment.',
        effects: { elek: 6, oppElek: -3, funds: -100, sat: 3, actors:{UMKM:12, Akademisi:10, Investor:8} },
        media: {
          times: 'Pemaparan anggaran realistis kandidat menuai simpati kalangan terdidik.',
          times_en: 'Prudent budget breakdown wins broad support from educated demographics.',
          tv: 'Pakar ekonomi sebut program modal bergulir jauh lebih menyejahterakan.',
          tv_en: 'Economists praise revolving capital funds over populist cash handouts.',
          forum: 'Warga: "Bener juga, daripada uang habis seketika mending buat modal usaha."',
          forum_en: 'Citizen: "Makes total sense: business capital lasts much longer than quick handouts."',
          sosmed: '@CerdasMemilih: Ini baru program masuk akal, ga cuma PHP obral janji palsu!',
          sosmed_en: '@SmartVoter: Finally a realistic, grounded program instead of empty populist blather!'
        }
      },
      {
        t: '💰 Tandingi dengan Janji Gratis PBB Rumah Tangga Miskin & Beasiswa Penuh',
        t_en: '💰 Counter with 100% Property Tax Exemption for Poor & Full Scholarships',
        d: 'Program pro-rakyat yang terukur secara fiskal dan merebut simpati keluarga prasejahtera.',
        d_en: 'Fiscally viable welfare program that secures overwhelming support from working-class families.',
        effects: { elek: 7, oppElek: -2, funds: -200, sat: 5, actors:{WargaMiskin:15, Buruh:10} },
        media: {
          times: 'Komitmen pembebasan PBB warga miskin dan beasiswa penuh disambut antusias.',
          times_en: 'Property tax relief for vulnerable households and scholarships spark mass excitement.',
          tv: 'Solusi pendidikan dan keringanan beban hidup sentuh aspirasi keluarga miskin.',
          tv_en: 'Education scholarships and tax breaks directly address underprivileged families.',
          forum: 'Warga: "Alhamdulillah kalau PBB gratis dan anak bisa kuliah beasiswa."',
          forum_en: 'Citizen: "Praise God, zero property tax and university scholarships for our children."',
          sosmed: '@WargaNusapura: Janjinya terbukti bisa diwujudkan dan pro rakyat kecil!',
          sosmed_en: '@NusapuraCitizen: Grounded and genuinely pro-people policies!'
        }
      },
      {
        t: '🎯 Janjikan Dana Pembangunan Lingkungan Swakelola Rp 50 Juta/RW Berbasis Prestasi',
        t_en: '🎯 Offer Rp 50M/District Merit-Based Neighborhood Development Grants',
        d: 'Mendorong kompetisi positif antar-lingkungan dalam pengelolaan kebersihan dan keamanan.',
        d_en: 'Fosters healthy civic competition across neighborhoods in sanitation and local security.',
        effects: { elek: 5, oppElek: -3, funds: -150, sat: 4, actors:{ASN:8, TokohMasyarakat:12} },
        media: {
          times: 'Program dana stimulasi RW berbasis inovasi pikat dukungan ketua lingkungan.',
          times_en: 'Innovation-based neighborhood stimulation funds win strong local community backing.',
          tv: 'Pemberdayaan rukun warga jadi kunci sukses pembangunan partisipatif.',
          tv_en: 'Empowering community heads unlocks bottom-up participatory development.',
          forum: 'Warga: "Bagus biar warga semangat gotong royong bersihin kampung."',
          forum_en: 'Citizen: "Great idea to energize communal mutual aid and cleanup drives."',
          sosmed: '@NusaGuyub: Mantap! RW yang aktif dan bersih dapet reward pembangunan!',
          sosmed_en: '@ActiveNusa: Excellent incentive for active, well-kept neighborhoods!'
        }
      }
    ]
  },
  {
    day: 4,
    title: 'Unjuk Rasa Masif Buruh Menuntut UMK Naik 20% di Masa Kampanye',
    title_en: 'Mass Labor Protests Demanding 20% Minimum Wage Hike During Campaign',
    icon: '🏭',
    cat: 'Isu Ketenagakerjaan',
    cat_en: 'Labor Issues',
    text: 'Ribuan buruh menggelar demonstrasi di depan posko pemenangan Anda, menuntut komitmen menandatangani pakta integritas kenaikan UMK sebesar 20%.',
    text_en: 'Thousands of industrial workers picket your campaign headquarters, demanding a signed pledge to raise regional minimum wages by 20%.',
    choices: [
      {
        t: '🤝 Temui Demonstran & Sepakati Formula Upah Layak + Subsidi Transportasi & Pangan',
        t_en: '🤝 Meet Protesters & Agree on Living Wage Formula + Transit & Food Subsidies',
        d: 'Menenangkan gejolak buruh tanpa membuat pengusaha hengkang atau gulung tikar.',
        d_en: 'Appeases union workers while protecting business competitiveness and local jobs.',
        effects: { elek: 7, oppElek: -2, funds: -100, sat: 5, actors:{Buruh:14, Pengusaha:6, UMKM:8} },
        media: {
          times: 'Dialog terbuka dengan buruh hasilkan kesepakatan subsidi biaya hidup pekerja.',
          times_en: 'Open dialogue with labor unions yields agreement on worker living subsidies.',
          tv: 'Solusi subsidi pangan dan transportasi buruh dipuji sebagai terobosan adil.',
          tv_en: 'Public transit and food subsidy compromises praised as visionary labor model.',
          forum: 'Warga: "Calon walikota berani turun langsung hadapi massa dengan santun."',
          forum_en: 'Citizen: "Impressive courage to personally meet the protest crowd with respect."',
          sosmed: '@BuruhBersatu: Terima kasih sudah mendengar aspirasi kami dengan kepala dingin!',
          sosmed_en: '@UnitedLabor: Thank you for genuinely listening to working-class voices!'
        }
      },
      {
        t: '✍️ Tanda Tangani Pakta Kenaikan UMK 20% Penuh Secara Terbuka',
        t_en: '✍️ Publicly Sign Full 20% Wage Increase Pact on Stage',
        d: 'Mendapat dukungan mutlak jutaan massa buruh, namun asosiasi pengusaha kecewa berat.',
        d_en: 'Secures overwhelming union labor vote, but sparks panic among chamber of commerce industrialists.',
        effects: { elek: 8, oppElek: 0, funds: -200, actors:{Buruh:20, Pengusaha:-15, Investor:-12} },
        media: {
          times: 'Deklarasi dukungan serikat buruh mengalir deras usai penandatanganan pakta upah.',
          times_en: 'Labor union endorsements flood in following bold wage pact signing.',
          tv: 'Asosiasi pengusaha peringatkan risiko relokasi pabrik akibat lonjakan upah.',
          tv_en: 'Chamber of commerce cautions against manufacturing relocation risks.',
          forum: 'Warga: "Berani banget pasang badan buat kesejahteraan buruh kecil."',
          forum_en: 'Citizen: "Bold stance to champion the living standards of blue-collar workers."',
          sosmed: '@SolidaritasBuruh: Hidup buruh! Paslon ini harga mati pilihan kita!',
          sosmed_en: '@LaborSolidarity: Long live workers! Our definitive candidate for mayor!'
        }
      },
      {
        t: '💼 Gelar Tripartit Kilat Kampanye: Mediasi Buruh, Pengusaha & Pakar Ekonomi',
        t_en: '💼 Host Rapid Tripartite Summit: Labor, Industry & Economic Panelists',
        d: 'Menunjukkan kapasitas kepemimpinan negarawan yang mampu menjadi jembatan solusi.',
        d_en: 'Demonstrates executive statesmanship by bridging opposing socioeconomic factions.',
        effects: { elek: 5, oppElek: -3, funds: -150, sat: 4, actors:{Pengusaha:10, Buruh:8, Akademisi:12} },
        media: {
          times: 'Prakarsa forum tripartit masa kampanye wujudkan iklim investasi kondusif.',
          times_en: 'Tripartite summit initiative creates predictable, investment-friendly climate.',
          tv: 'Pengamat sebut pendekatan deliberatif adalah karakter pemimpin modern.',
          tv_en: 'Pundits highlight collaborative deliberative approach as hallmark of modern leadership.',
          forum: 'Warga: "Bagus ga berat sebelah, mikirin nasib buruh sekaligus pengusaha."',
          forum_en: 'Citizen: "Balanced approach considering both employee livelihoods and business sustainability."',
          sosmed: '@NusaEkonomi: Ini cara menyelesaikan masalah yang elegan tanpa kegaduhan.',
          sosmed_en: '@NusaEconomy: An elegant, conflict-free way to resolve citywide labor tensions.'
        }
      }
    ]
  },
  {
    day: 5,
    title: 'Serangan Fajar & Pembagian Paket Sembako Gelap Kubu Lawan',
    title_en: 'Rival Dawn Raids & Illegal Food Package Vote Buying Operations',
    icon: '📦',
    cat: 'Kecurangan Pilkada',
    cat_en: 'Election Integrity',
    text: 'Laporan intelijen relawan mendeteksi operasi bagi-bagi amplop uang Rp 200 ribu dan paket sembako gelap oleh kubu lawan di perkampungan padat pada dini hari.',
    text_en: 'Intelligence reports reveal rival campaign operatives distributing Rp 200,000 cash envelopes and illicit grocery packs across dense slums before sunrise.',
    choices: [
      {
        t: '📹 Bentuk Tim Satgas Anti-Money Politics & Laporkan Tangkap Tangan ke Bawaslu',
        t_en: '📹 Form Anti-Vote Buying Taskforce & Hand Caught-in-the-Act Evidence to Bawaslu',
        d: 'Bukti video viral OTT mengguncang kubu lawan dan memicu proses diskualifikasi.',
        d_en: 'Viral sting video stuns rival faction and triggers strict election sanction hearings.',
        effects: { elek: 7, oppElek: -6, funds: -150, sat: 4, actors:{LSM:15, Kepolisian:10} },
        media: {
          times: 'Bawaslu proses laporan OTT pembagian sembako berlogo paslon lawan.',
          times_en: 'Election supervisory body probes red-handed evidence of rival vote buying.',
          tv: 'Video tangkap tangan politik uang hebohkan jagat maya Nusapura.',
          tv_en: 'Dramatic sting footage of midnight vote buying goes viral nationwide.',
          forum: 'Warga: "Memalukan masih pakai cara kuno beli suara warga miskin."',
          forum_en: 'Citizen: "Embarrassing that old-school money politics is still being attempted."',
          sosmed: '@KawalPilkada: Bongkar tuntas! Jangan biarkan suara rakyat dibeli murah!',
          sosmed_en: '@WatchElection: Fully expose vote-buying cartels! Our democracy is not for sale!'
        }
      },
      {
        t: '📢 Serukan Gerakan Moral "Ambil Sembakonya, Coblos Sesuai Hati Nurani"',
        t_en: '📢 Champion Moral Slogan "Take the Aid, Vote Your Conscience"',
        d: 'Pesan edukatif yang cerdas menumpulkan efektivitas politik uang lawan.',
        d_en: 'Clever educational appeal renders rival vote-buying money completely ineffective.',
        effects: { elek: 6, oppElek: -4, funds: 0, sat: 3 },
        media: {
          times: 'Slogan ambil sembakonya coblos nurani viral di kalangan warga kampung.',
          times_en: 'Conscience-driven civic slogan goes viral across grassroots neighborhood communities.',
          tv: 'Kampanye kesadaran politik efektif kurangi dampak serangan fajar.',
          tv_en: 'Voter education drives effectively neutralize illicit cash incentives.',
          forum: 'Warga: "Setuju! Sembako rezeki, tapi pilihan walikota tetap yang jujur."',
          forum_en: 'Citizen: "Agreed! Free groceries are a blessing, but our vote remains with the honest leader."',
          sosmed: '@WargaCerdas: Bener bgt! Duitnya ambil, tapi pas nyoblos pilih yang terbaik!',
          sosmed_en: '@SmartVoters: Exactly! Take the food packages, but vote for real integrity at the ballot box!'
        }
      },
      {
        t: '🍱 Tandingi dengan Program Pasar Murah Resmi & Bazar UMKM Halal',
        t_en: '🍱 Counter with Official Fair-Price Markets & Subsidized SME Bazaars',
        d: 'Langkah legal dan terdaftar resmi di KPU yang sangat disukai ibu-ibu rumah tangga.',
        d_en: 'Fully compliant subsidized bazaar certified by the Election Commission, loved by households.',
        effects: { elek: 6, oppElek: -2, funds: -300, sat: 4, actors:{UMKM:10, WargaMiskin:12} },
        media: {
          times: 'Pasar murah sembako resmi diserbu ribuan warga di berbagai kelurahan.',
          times_en: 'Subsidized community commodity markets draw thousands of eager families.',
          tv: 'Bazar sembako murah legal jadi contoh kampanye simpatik dan tertib aturan.',
          tv_en: 'Official fair-price markets serve as model for orderly, compliant campaigning.',
          forum: 'Warga: "Senang ada pasar murah legal, harganya terjangkau dan ga sembunyi-sembunyi."',
          forum_en: 'Citizen: "Love the open, transparent market with fair prices for daily necessities."',
          sosmed: '@EmakEmakNusa: Berkah banget sembako murahnya, sangat membantu dapur kami!',
          sosmed_en: '@NusaHomemakers: Such a blessing—affordable essentials that ease our monthly expenses!'
        }
      }
    ]
  },
  {
    day: 6,
    title: 'Kampanye Akbar & Pesta Rakyat di Lapangan Merdeka',
    title_en: 'Grand Rally & People Festival at Merdeka Square',
    icon: '🎙️',
    cat: 'Kampanye Akbar',
    cat_en: 'Grand Rally',
    text: 'Hari kampanye rapat umum terbuka. Ratusan ribu pendukung tumpah ruah menanti orasi politik visi masa depan Kota Nusapura.',
    text_en: 'Official open-stadium campaign rally day. Hundreds of thousands of impassioned supporters gather to hear your keynote vision for the city.',
    choices: [
      {
        t: '🎸 Hadirkan Artis Papan Atas & Konser Musik Gratis Skala Raksasa',
        t_en: '🎸 Feature Top Headline Musicians & Free Giant Youth Concert',
        d: 'Menarik puluhan ribu massa pemilih muda dan menciptakan euforia pesta rakyat.',
        d_en: 'Draws tens of thousands of energized youth voters and creates electrifying popular momentum.',
        effects: { elek: 7, oppElek: -1, funds: -500, sat: 6 },
        media: {
          times: 'Lautan massa padati Lapangan Merdeka dalam konser akbar kampanye.',
          times_en: 'Massive sea of supporters packs Merdeka Square for blockbuster campaign concert.',
          tv: 'Pesta rakyat spektakuler jadi magnet pemilih pemula dan milenial.',
          tv_en: 'Spectacular cultural celebration acts as magnet for first-time and youth voters.',
          forum: 'Warga: "Pecah banget konsernya, suasana meriah kayak festival internasional."',
          forum_en: 'Citizen: "Incredible energy, feels like a world-class civic festival."',
          sosmed: '@FestNusa: Gokil! Konsernya rame parah, aura kemenangannya berasa bgt!',
          sosmed_en: '@FestNusa: Insane turnout! The winning aura is unmistakable!'
        }
      },
      {
        t: '📋 Pidato Visi Teknokratis: Masterplan Nusapura Kota Metropolitan Hijau 2030',
        t_en: '📋 Deliver Visionary Masterplan: Green Smart Metropolis 2030',
        d: 'Pidato berbobot yang meyakinkan kalangan akademisi, profesional, dan pemilih cerdas.',
        d_en: 'Substantive keynote address commanding respect from academics, business leaders, and professionals.',
        effects: { elek: 6, oppElek: -3, funds: -200, sat: 4, actors:{Akademisi:15, Profesional:12, Investor:10} },
        media: {
          times: 'Orasi politik futuristik tawarkan peta jalan pembangunan kota berkelas dunia.',
          times_en: 'Visionary keynote outlines world-class urban development roadmap.',
          tv: 'Pakar tata kota puji kedalaman analisis dan konsep transportasi terpadu.',
          tv_en: 'Urban planning experts praise comprehensive transit and sustainability design.',
          forum: 'Warga: "Pidatonya berbobot, keliatan faham betul masalah kota."',
          forum_en: 'Citizen: "Inspiring and substantive address showing true mastery of municipal challenges."',
          sosmed: '@NusaMaju: Pidato paling visioner yang pernah saya dengar di panggung Pilkada!',
          sosmed_en: '@NusaForward: The most visionary and articulate address in local election history!'
        }
      },
      {
        t: '📱 Siaran Langsung Multi-Platform & Dialog Interaktif Bareng Netizen',
        t_en: '📱 Multi-Platform Interactive Livestream & Direct Netizen Q&A',
        d: 'Efisiensi biaya maksimal dengan jangkauan viral jutaan tayangan daring.',
        d_en: 'Maximal cost efficiency capturing millions of real-time views across digital channels.',
        effects: { elek: 5, oppElek: -2, funds: -50, sat: 4 },
        media: {
          times: 'Kampanye digital interaktif pecahkan rekor jumlah penonton online.',
          times_en: 'Interactive digital townhall shatters city online viewership records.',
          tv: 'Strategi hemat biaya kampanye dipuji efisien oleh pengamat.',
          tv_en: 'Cost-efficient digital campaign model lauded as future-proof benchmark.',
          forum: 'Warga: "Nonton dari rumah aja udah dapet poin-poin pentingnya."',
          forum_en: 'Citizen: "Watching from home gave us all the key policy blueprints clearly."',
          sosmed: '@GenZNusa: Nonton live streaming berasa ngobrol langsung!',
          sosmed_en: '@GenZNusa: Watching the livestream felt like a direct personal conversation!'
        }
      }
    ]
  },
  {
    day: 7,
    title: 'Menghadapi Serangan Hoaks & Kampanye Hitam di Sosmed',
    title_en: 'Battling Disinformation & Targeted Smear Campaigns on Social Media',
    icon: '⚡',
    cat: 'Krisis Media',
    cat_en: 'Media Crisis',
    text: 'Beredar potongan video editan yang memelintir ucapan Anda mengenai anggaran tempat ibadah. Isu ini viral di grup-grup obrolan warga.',
    text_en: 'Manipulated video clips misleadingly twist your statements regarding house-of-worship budget grants, trending viral across community chat groups.',
    choices: [
      {
        t: '⚖️ Rilis Video Asli & Laporkan Akun Penyebar Fitnah ke Bawaslu',
        t_en: '⚖️ Publish Full Uncut Video & File Defamation Charges with Bawaslu',
        d: 'Masyarakat sadar akan hoaks, reputasi integritas Anda makin kuat.',
        d_en: 'Public recognizes the smear attempt, bolstering your reputation for steadfast honesty.',
        effects: { elek: 5, oppElek: -3, funds: -100 },
        media: {
          times: 'Bawaslu usut pelaku penyebar video hoaks Pilkada Nusapura.',
          times_en: 'Election authorities launch criminal inquiry into deceptive smear campaign clips.',
          tv: 'Fakta terungkap: Video asli menunjukkan komitmen tinggi pada rumah ibadah.',
          tv_en: 'Fact checks reveal full unedited recordings show deep commitment to worship facilities.',
          forum: 'Warga: "Parah banget yang ngedit, untung ada rekaman utuhnya."',
          forum_en: 'Citizen: "Despicable editing manipulation; so glad the full video proved the truth."',
          sosmed: '@CekFakta: Terbukti hoaks ya guys! Jangan gampang termakan fitnah.',
          sosmed_en: '@FactCheck: Debunked as malicious hoaxes! Reject manipulative slander.'
        }
      },
      {
        t: '🔍 Bongkar Isu Transparansi Kekayaan & Janji Batal Lawan Politik',
        t_en: '🔍 Unveil Wealth Transparency Inconsistencies of Political Rival',
        d: 'Politik memanas, perhatian publik beralih ke rekam jejak lawan.',
        d_en: 'Public focus pivots directly toward hidden assets and broken promises of the rival.',
        effects: { elek: 6, oppElek: -5, funds: -200 },
        media: {
          times: 'Tim sukses saling serang data kekayaan dan LHKPN kandidat.',
          times_en: 'Campaign teams exchange detailed asset disclosure filings and audit dossiers.',
          tv: 'Dua kubu kandidat saling melayangkan tudingan politik.',
          tv_en: 'Heated exchanges between candidate camps dominate prime evening news broadcasts.',
          forum: 'Warga: "Waduh makin panas persaingan H-3 pencoblosan."',
          forum_en: 'Citizen: "Race is intensifying fast just days before casting ballots."',
          sosmed: '@NusaWatch: Data kekayaan lawan terbukti banyak yang ganjil tuh.',
          sosmed_en: '@NusaWatch: Rival wealth disclosures show glaring unresolved anomalies.'
        }
      },
      {
        t: '😄 Tanggapi dengan Santai & Konten Humor Edukatif Viral',
        t_en: '😄 Defuse with Good Humor & Viral Educational Satire Content',
        d: 'Pendekatan humanis mematikan serangan fitnah secara elegan.',
        d_en: 'A witty, humane approach elegantly neutralizes smear attempts while winning hearts.',
        effects: { elek: 4, oppElek: -2, funds: 0 },
        media: {
          times: 'Respon santai kandidat dalam hadapi hoaks menuai pujian.',
          times_en: 'Candidate witty, calm response to hoaxes garners widespread civic praise.',
          tv: 'Konten klarifikasi berbalut humor viral ditonton jutaan kali.',
          tv_en: 'Humorous fact-checking response video hits millions of views across platforms.',
          forum: 'Warga: "Suka sama gayanya, ga baperan dan tetep kalem."',
          forum_en: 'Citizen: "Love the composure—unshakable, humorous, and completely poised."',
          sosmed: '@TikTokNusa: Cara klarifikasinya keren bgt, malah bikin respect!',
          sosmed_en: '@TikTokNusa: Brilliant way to debunk smears with class and charm!'
        }
      }
    ]
  },
  {
    day: 8,
    title: 'Debat Pamungkas Kandidat Walikota di Media Nasional',
    title_en: 'Final Televised Mayoral Debate on National Broadcast',
    icon: '🎙️',
    cat: 'Debat Final',
    cat_en: 'Final Debate',
    text: 'Debat pamungkas ditonton jutaan warga. Tema debat meliputi tata kelola APBD, pemberantasan korupsi, dan proyek infrastruktur.',
    text_en: 'The decisive final debate is watched live by millions. Topics encompass municipal budget governance, anti-corruption safeguards, and major infrastructure.',
    choices: [
      {
        t: '📋 Tampilkan Data Konkret & Peta Jalan 100 Hari Kerja Pertama',
        t_en: '📋 Present Concrete Data & 100-Day Executive Action Roadmap',
        d: 'Penampilan terstruktur dan menguasai materi memukau para pengamat.',
        d_en: 'A polished, masterclass performance commanding unanimous praise from analysts.',
        effects: { elek: 6, oppElek: -3, funds: -100 },
        media: {
          times: 'Penampilan debat pamungkas kunci keunggulan elektabilitas.',
          times_en: 'Commanding debate performance locks in solid polling lead.',
          tv: 'Pengamat politik sebut masterplan 100 hari sangat realistis.',
          tv_en: 'Political analysts praise 100-day executive roadmap as pragmatic and grounded.',
          forum: 'Warga: "Keliatan banget yang beneran faham data tata kota."',
          forum_en: 'Citizen: "Clear as day who genuinely understands urban governance and budget mechanics."',
          sosmed: '@PengamatNusa: Penguasaan materi 10/10, tanpa ragu!',
          sosmed_en: '@NusaAnalyst: 10/10 mastery of data and policy details, undisputed victory!'
        }
      },
      {
        t: '🛡️ Skat Mat Lawan Soal Audit Rekening Kas Daerah & Utang Proyek',
        t_en: '🛡️ Checkmate Rival on Regional Treasury Audit Discrepancies & Project Debts',
        d: 'Pernyataan menohok membuat lawan kesulitan mempertahankan argumentasinya.',
        d_en: 'Sharp inquiries leave the rival struggling to justify past fiscal mismanagements.',
        effects: { elek: 5, oppElek: -4, funds: -50 },
        media: {
          times: 'Debat pamungkas diwarnai hujan pertanyaan transparansi lelang.',
          times_en: 'Final debate punctuated by sharp questioning on procurement transparency.',
          tv: 'Kandidat lawan kesulitan mempertahankan argumentasi utang proyek.',
          tv_en: 'Rival candidate visibly flustered defending controversial project liabilities.',
          forum: 'Warga: "Skat mati pas ditanya masalah lelang proyek kemarin."',
          forum_en: 'Citizen: "Total checkmate when pressed on past public tender irregularities."',
          sosmed: '@PolitikKritis: Skat mat total di segmen terakhir debat!',
          sosmed_en: '@CriticalPolitics: Decisive victory in the final debate segment!'
        }
      },
      {
        t: '🌟 Fokus pada Pesan Persatuan & Pengalaman Birokrasi Bersih',
        t_en: '🌟 Emphasize Message of Unity & Clean Administrative Track Record',
        d: 'Menarik simpati besar dari kelompok pemilih moderat dan lansia.',
        d_en: 'Deeply appeals to undecided moderate voters, senior citizens, and civic leaders.',
        effects: { elek: 5, oppElek: -2, funds: 0 },
        media: {
          times: 'Pesan penutup yang hangat sentuh hati warga Nusapura.',
          times_en: 'Warm closing statement resonates deeply across the electorate.',
          tv: 'Pendekatan santun dan solutif tutupi debat Pilkada dengan manis.',
          tv_en: 'Courteous and constructive solutions conclude election debate series gracefully.',
          forum: 'Warga: "Sejuk denger closing statement-nya."',
          forum_en: 'Citizen: "So calming and inspiring to hear that unifying closing statement."',
          sosmed: '@WargaDamai: Bikin terharu, persatuan kota emang nomor satu.',
          sosmed_en: '@PeacefulNusa: Moving words, keeping city unity above partisan squabbles.'
        }
      }
    ]
  },
  {
    day: 9,
    title: 'Mobilisasi Saksi TPS & Pengamanan Perolehan Suara',
    title_en: 'Polling Station Witness Mobilization & Ballot Security Shield',
    icon: '🛡️',
    cat: 'Pengamanan TPS',
    cat_en: 'Ballot Security',
    text: 'Persiapan akhir pengawalan suara di 2.450 TPS seluruh wilayah kota untuk mencegah manipulasi dan politik uang.',
    text_en: 'Final deployment preparations to secure ballots across 2,450 polling stations citywide against vote tampering and election fraud.',
    choices: [
      {
        t: '📋 Terjunkan 2.450 Saksi Resmi & Posko Pengaduan Bawaslu',
        t_en: '📋 Deploy 2,450 Certified Observers & Rapid Election Grievance Command Center',
        d: 'Seluruh TPS terkawal rapat, jaminan keamanan suara warga.',
        d_en: 'Every single polling station is monitored, guaranteeing absolute ballot integrity.',
        effects: { elek: 5, oppElek: -3, funds: -400 },
        media: {
          times: 'Ribuan saksi TPS siap amankan proses pemungutan suara.',
          times_en: 'Thousands of certified observers stand guard over polling stations.',
          tv: 'Bawaslu & KPU apresiasi kesiapan saksi di seluruh kelurahan.',
          tv_en: 'Election commissions praise flawless deployment of accredited monitors.',
          forum: 'Warga: "Mari kita kawal suara warga Nusapura esok hari!"',
          forum_en: 'Citizen: "Let us all protect the sacred voice of Nusapura citizens tomorrow!"',
          sosmed: '@KawalSuara: Besok jangan lupa coblos dan awasi TPS masing-masing!',
          sosmed_en: '@GuardTheVote: Remember to cast your vote early and monitor your local polling booth!'
        }
      },
      {
        t: '📱 Luncurkan Aplikasi Real-Count Digital Saksi Berbasis Foto C1',
        t_en: '📱 Launch Digital Real-Count App with C1 Ballot Photo Verification',
        d: 'Data rekapitulasi cepat dan akurat dapat dipantau dalam hitungan jam.',
        d_en: 'Fast, verifiable digital tabulation aggregates precinct records within hours.',
        effects: { elek: 5, oppElek: -2, funds: -200 },
        media: {
          times: 'Sistem Hitung Cepat internal berbasis foto C1 diresmikan.',
          times_en: 'Internal real-count tabulation network with photo verification unveiled.',
          tv: 'Pemanfaatan teknologi ciptakan transparansi penghitungan suara.',
          tv_en: 'Smart technology integration ensures uncompromised vote counting transparency.',
          forum: 'Warga: "Bagus ga bisa dimanipulasi data angka C1-nya."',
          forum_en: 'Citizen: "Excellent! Direct photo uploads leave zero room for tally manipulation."',
          sosmed: '@TechKawal: Digitalisasi saksi TPS mantap bgt!',
          sosmed_en: '@TechVote: Digital polling station tabulation is a game-changer!'
        }
      },
      {
        t: '🤝 Gandeng Organisasi Kepemudaan & Satgas Anti Money Politics',
        t_en: '🤝 Partner with Youth Alliances & Citizen Anti-Vote Buying Patrols',
        d: 'Mencegah serangan fajar dan pembagian sembako gelap di malam hari.',
        d_en: 'Neutralizes midnight bribe distribution and clandestine vote buying attempts.',
        effects: { elek: 5, oppElek: -4, funds: -100 },
        media: {
          times: 'Satgas Pemuda patroli keliling cegah politik uang di lingkungan warga.',
          times_en: 'Youth patrols conduct night surveillance to eradicate money politics.',
          tv: 'Warga apresiasi gerakan pemilu bersih tanpa suap suara.',
          tv_en: 'Grassroots communities applaud clean election initiatives rejecting bribery.',
          forum: 'Warga: "Tolak money politics! Pilih yang jujur dan berintegritas."',
          forum_en: 'Citizen: "Say no to money politics! Vote for integrity and honest governance."',
          sosmed: '@NusaBersih: Tolak amplop, selamatkan masa depan kota 5 tahun!',
          sosmed_en: '@CleanNusa: Reject cash envelopes, protect our city for the next 5 years!'
        }
      }
    ]
  },
  {
    day: 10,
    title: 'Refleksi Malam Doa Bersama & Penutupan Masa Kampanye',
    title_en: 'Final Evening Reflection, Interfaith Prayer & Campaign Conclusion',
    icon: '🏛️',
    cat: 'Hari Terakhir Kampanye',
    cat_en: 'Campaign Finale',
    text: 'Masa tenang akan segera dimulai esok hari. Langkah terakhir untuk menyatukan barisan sebelum hari pemungutan suara.',
    text_en: 'The official cooling-off period begins tomorrow. The final moment to unite campaign volunteers before voting day.',
    choices: [
      {
        t: '🕯️ Gelar Refleksi Malam Doa Bersama & Santunan Anak Yatim',
        t_en: '🕯️ Host Interfaith Prayer Night & Charity Outreach for Orphans',
        d: 'Suasana haru dan khidmat menutup seluruh rangkaian kampanye.',
        d_en: 'A solemn, heartfelt conclusion honoring civic values and communal goodwill.',
        effects: { elek: 5, oppElek: -2, funds: -150 },
        media: {
          times: 'Malam refleksi meriah ditutup dengan santunan & doa bersama.',
          times_en: 'Reflective evening concludes with charity outreach and unified prayers.',
          tv: 'Relawan lintas generasi bersatu bulatkan tekad perubahan.',
          tv_en: 'Multi-generational volunteers rally with shared dedication for positive progress.',
          forum: 'Warga: "Besok penentu masa depan kota kita untuk 5 tahun ke depan."',
          forum_en: 'Citizen: "Tomorrow determines the trajectory of our city for the next five years."',
          sosmed: '@NusapuraMaju: Bismillah esok Nusapura punya pemimpin baru!',
          sosmed_en: '@ForwardNusapura: Ready for voting day! Nusapura is set for great leadership!'
        }
      },
      {
        t: '🧹 Pimpin Operasi Bersih APK & Penertiban Baliho Bersama Relawan',
        t_en: '🧹 Lead Volunteer Citywide Cleanup of Campaign Banners & Posters',
        d: 'Tindakan simpatik membersihkan sampah kampanye mendapat pujian publik.',
        d_en: 'Proactive street cleanup of election materials earns immense public appreciation.',
        effects: { elek: 6, oppElek: -2, funds: -50 },
        media: {
          times: 'Aksi relawan bersihkan baliho mandiri dipuji masyarakat.',
          times_en: 'Volunteer cleanup of campaign banners wins widespread civic admiration.',
          tv: 'Inisiatif bersihkan APK tunjukkan kepedulian pada keindahan kota.',
          tv_en: 'Proactive banner removal demonstrates authentic care for urban aesthetics.',
          forum: 'Warga: "Contoh bagus! Habis kampanye kota langsung bersih lagi."',
          forum_en: 'Citizen: "What a role model! Taking down their own posters before the cooling-off period."',
          sosmed: '@KotaBersih: Salut bgt kandidatnya ikut nyapu dan copot spanduk!',
          sosmed_en: '@CleanCity: Respect! The candidate personally helped sweep and take down banners!'
        }
      },
      {
        t: '📹 Rilis Pesan Video Pamungkas "Saatnya Nusapura Bangkit Bersama"',
        t_en: '📹 Release Inspiring Final Video Address "Time for Nusapura to Rise Together"',
        d: 'Video pidato penutup tontonan jutaan warga di seluruh platform sosmed.',
        d_en: 'An emotionally resonant keynote broadcast watched by millions across social channels.',
        effects: { elek: 5, oppElek: -2, funds: 0 },
        media: {
          times: 'Pesan video pamungkas viral jelang masa tenang Pilkada.',
          times_en: 'Final address video goes viral right before the election cooling-off period.',
          tv: 'Pidato menyentuh ajak warga gunakan hak pilih dengan bijak.',
          tv_en: 'Touching address urges all eligible citizens to exercise their voting rights wisely.',
          forum: 'Warga: "Besok jangan golput ya guys, tentukan arah kota kita!"',
          forum_en: 'Citizen: "Do not abstain tomorrow, everyone! Shape the future of our home!"',
          sosmed: '@PilkadaNusa: Video penutupnya merinding bgt, fix besok coblos!',
          sosmed_en: '@ElectionNusa: That final message gave me chills! Definitely voting tomorrow!'
        }
      }
    ]
  }
];

const CAMPAIGN_EVENTS_TERM2 = [
  {
    day: 1,
    title: 'Deklarasi Petahana & Pertanggungjawaban Rekam Jejak 5 Tahun',
    title_en: 'Incumbent Declaration & 5-Year Administrative Accountability Address',
    icon: '🏛️',
    cat: 'Kampanye Petahana',
    cat_en: 'Incumbent Campaign',
    text: 'Sebagai Walikota petahana, Anda menggelar panggung pertanggungjawaban publik memamerkan pencapaian 5 tahun kepemimpinan di hadapan relawan dan media.',
    text_en: 'As incumbent Mayor, you host a transparent public accountability forum presenting first-term achievements before citizen volunteers and media.',
    choices: [
      {
        t: '📊 Pamerkan Capaian Pembangunan, Taman Kota & PAD Nusapura',
        t_en: '📊 Showcase Infrastructure Triumphs, Public Parks & Local Revenue Growth',
        d: 'Masyarakat mengapresiasi bukti fisik hasil kerja nyata selama periode pertama.',
        d_en: 'Voters appreciate tangible physical deliverables accomplished throughout the first term.',
        effects: { elek: 5, oppElek: -2, funds: -200 },
        media: {
          times: 'Pameran hasil kerja 5 tahun petahana buktikan pembangunan pesat.',
          times_en: 'Five-year milestone exhibition demonstrates rapid municipal development.',
          tv: 'Analis nilai keberhasilan PAD jadi modal kuat kampanye petahana.',
          tv_en: 'Fiscal revenue growth serves as powerful proof of mayoral competence.',
          forum: 'Warga: "Memang kelihatan bedanya kota kita dibanding 5 tahun lalu."',
          forum_en: 'Citizen: "The transformation over the past 5 years is crystal clear."',
          sosmed: '@NusaLanjut: Bukti nyata lebih berbicara daripada janji manis!',
          sosmed_en: '@NusaContinues: Real track record speaks louder than empty promises!'
        }
      },
      {
        t: '🤝 Bentuk Koalisi Besar Lintas Partai & Dukungan Tokoh Masyarakat',
        t_en: '🤝 Assemble Broad Cross-Party Coalition & Civic Community Leaders',
        d: 'Dominasi mesin politik koalisi menekan pergerakan kubu oposisi.',
        d_en: 'A formidable bipartisan coalition machine limits the momentum of the challenger.',
        effects: { elek: 4, oppElek: -4, funds: -300 },
        media: {
          times: 'Koalisi Nusapura Bersatu resmi deklarasikan dukungan 2 periode.',
          times_en: 'United Coalition officially declares endorsement for second mayoral term.',
          tv: 'Mesin partai koalisi bergerak masif hingga tingkat RT/RW.',
          tv_en: 'Coalition political machinery activates across all municipal subdistricts.',
          forum: 'Warga: "Dukungan parpolnya kuat banget, solid dari atas sampe bawah."',
          forum_en: 'Citizen: "Solid political consensus backing the continuation of good programs."',
          sosmed: '@PolitikKota: Oposisi dipaksa kerja ekstra lawan koalisi besar petahana.',
          sosmed_en: '@CityPolitics: Challengers face an uphill battle against strong bipartisan unity.'
        }
      },
      {
        t: '🌱 Fokus Luncurkan Visi 5 Tahun Kedua: Nusapura Kota Hijau Berkelanjutan',
        t_en: '🌱 Launch Second-Term Blueprint: Sustainable Green Smart Metropolis',
        d: 'Visi masa depan yang segar menarik pemilih muda dan pemerhati lingkungan.',
        d_en: 'A fresh forward-looking vision appeals strongly to youth and environmentalists.',
        effects: { elek: 6, oppElek: -2, funds: -100 },
        media: {
          times: 'Peta jalan transisi energi dan kota hijau jadi tema sentral kampanye.',
          times_en: 'Green energy transition and sustainable urbanism headline campaign launch.',
          tv: 'Pemerhati lingkungan sambut baik komitmen pelestarian ruang hijau.',
          tv_en: 'Environmentalists laud legally binding urban conservation commitments.',
          forum: 'Warga: "Suka visinya, bukan cuma bangun gedung tapi juga lingkungan."',
          forum_en: 'Citizen: "Love the vision—balancing modern infrastructure with lush green spaces."',
          sosmed: '@HijauNusa: Menuju Nusapura net-zero emission, wajib didukung!',
          sosmed_en: '@GreenNusa: Moving towards sustainable urban living, fully endorsed!'
        }
      }
    ]
  },
  {
    day: 2,
    title: 'Serangan Oposisi Soal Kebocoran Kas APBD & Isu Birokrasi',
    title_en: 'Opposition Attack on Municipal Budget Efficiencies & Bureaucracy',
    icon: '⚡',
    cat: 'Kritik Oposisi',
    cat_en: 'Opposition Challenge',
    text: 'Kubu penantang merilis laporan yang mengkritik sisa lebih pembiayaan anggaran (SiLPA) dan menuding birokrasi masih lamban.',
    text_en: 'The challenger releases an audit critique regarding unspent budget reserves (SiLPA), alleging persistent bureaucratic sluggishness.',
    choices: [
      {
        t: '📋 Buka Data Transparansi Open-Budget & Audit BPK Predikat WTP',
        t_en: '📋 Publish Open-Budget Portal Data & Unqualified (WTP) Clean BPK Audit Record',
        d: 'Data resmi lembaga audit negara mematahkan seluruh kritik kubu lawan.',
        d_en: 'Official state audit certificates decisively refute opponent allegations.',
        effects: { elek: 6, oppElek: -4, funds: -100 },
        media: {
          times: 'Predikat WTP berturut-turut bukti pengelolaan APBD bersih dan transparan.',
          times_en: 'Consecutive clean audit ratings validate fiscal transparency.',
          tv: 'Pengamat sebut kritik oposisi kurang berbasis data keuangan valid.',
          tv_en: 'Financial analysts deem opposition critiques poorly substantiated.',
          forum: 'Warga: "Audit BPK kan resmi dari negara, ga bisa dibohongin."',
          forum_en: 'Citizen: "State audit findings are objective facts, impossible to fake."',
          sosmed: '@TransparansiKota: Data open-budget bisa diakses siapa aja, jelas bersih!',
          sosmed_en: '@OpenGovNusa: Anyone can verify open-budget figures online, cleanly accounted for!'
        }
      },
      {
        t: '📱 Luncurkan Inovasi Sistem Layanan Birokrasi Kilat 1 Jam Jadi',
        t_en: '📱 Roll Out 1-Hour Guaranteed Digital Public Service Initiative',
        d: 'Solusi konkret digitalisasi layanan publik langsung membungkam kritik.',
        d_en: 'Fast digital service guarantee instantly addresses civic pain points.',
        effects: { elek: 5, oppElek: -3, funds: -150 },
        media: {
          times: 'Pelayanan perizinan kilat 1 jam jadi standar baru pemkot Nusapura.',
          times_en: '1-hour permit processing sets benchmark for municipal efficiency.',
          tv: 'Warga antusias coba kemudahan aplikasi layanan kependudukan instan.',
          tv_en: 'Citizens applaud smooth zero-bureaucracy public document processing.',
          forum: 'Warga: "Urus KTP sekarang emang cepet bgt, ga pake calo."',
          forum_en: 'Citizen: "Getting permits and ID cards is genuinely instantaneous now without middlemen."',
          sosmed: '@NusaLayanan: Pelayanan publik era petahana emang beda level cepetnya!',
          sosmed_en: '@NusaServices: Public administration speed under current leadership is exceptional!'
        }
      },
      {
        t: '🤝 Akui Ruang Perbaikan & Bentuk Satgas Reformasi Birokrasi Terpadu',
        t_en: '🤝 Acknowledge Room for Growth & Form Integrated Bureaucratic Reform Taskforce',
        d: 'Sikap rendah hati dan terbuka terhadap masukan diapresiasi pemilih cerdas.',
        d_en: 'Humble and solution-oriented governance wins over critical intellectuals.',
        effects: { elek: 5, oppElek: -2, funds: -50 },
        media: {
          times: 'Keterbukaan petahana menerima kritik jadi nilai tambah kepemimpinan.',
          times_en: 'Mayoral receptiveness to constructive critique earns high marks.',
          tv: 'Satgas percepatan pelayanan publik mulai dipersiapkan untuk periode kedua.',
          tv_en: 'Reform taskforce blueprint prepared for seamless second-term integration.',
          forum: 'Warga: "Bagus mau dengerin keluhan warga, ga antikritik."',
          forum_en: 'Citizen: "Great to have a leader who listens rather than getting defensive."',
          sosmed: '@WargaKritis: Pemimpin yang mau introspeksi dan langsung cari solusi!',
          sosmed_en: '@CriticalVoters: A leader with humility who turns feedback into action!'
        }
      }
    ]
  },
  {
    day: 3,
    title: 'Sidak Proyek Unggulan & Dialog Bareng Penerima Bantuan Kota',
    title_en: 'Flagship Project Field Inspection & Dialogue with City Aid Recipients',
    icon: '🏗️',
    cat: 'Inspeksi Lapangan',
    cat_en: 'Field Inspection',
    text: 'Agenda kampanye hari ini adalah meninjau langsung proyek infrastruktur yang telah tuntas dan berdialog dengan warga penerima manfaat.',
    text_en: 'Today campaign schedule features on-site visits to completed urban infrastructure and direct dialogues with welfare beneficiaries.',
    choices: [
      {
        t: '🚌 Tinjau Terminal Terpadu & Jajal Armada Bus Listrik Bareng Warga',
        t_en: '🚌 Inspect Intermodal Transit Hub & Ride Electric Bus Fleet with Citizens',
        d: 'Menegaskan komitmen modernisasi transportasi publik perkotaan.',
        d_en: 'Underscores steadfast commitment to sustainable green rapid transit.',
        effects: { elek: 6, oppElek: -2, funds: -100 },
        media: {
          times: 'Warga nikmati kenyamanan bus listrik keliling rute koridor kota.',
          times_en: 'Commuters praise smooth rides along modern electric bus transit corridors.',
          tv: 'Transportasi publik Nusapura dipuji sebagai percontohan nasional.',
          tv_en: 'Nusapura public transit recognized as national urban benchmark.',
          forum: 'Warga: "Bus listriknya nyaman dan ber-AC dingin, jarang macet lagi."',
          forum_en: 'Citizen: "The electric buses are quiet, cool, and drastically cut traffic delays."',
          sosmed: '@NusaTransit: Bangga kotaku punya transportasi publik sekeren ini!',
          sosmed_en: '@NusaTransit: Proud of our modern transit network!'
        }
      },
      {
        t: '🏥 Kunjungi RSUD Tipe A & Serahkan Kartu Nusapura Sehat Tambahan',
        t_en: '🏥 Tour Class-A Regional Hospital & Expand Nusapura Healthcare Card Coverage',
        d: 'Sentuhan kepedulian di sektor kesehatan gratis sangat menyentuh warga prasejahtera.',
        d_en: 'Expanding free primary healthcare strikes an emotional chord with vulnerable families.',
        effects: { elek: 7, oppElek: -2, funds: -200 },
        media: {
          times: 'Fasilitas RSUD modern bukti keberhasilan program kesehatan gratis.',
          times_en: 'World-class municipal hospital highlights healthcare program success.',
          tv: 'Pasien RSUD apresiasi kemudahan berobat tanpa antrean panjang.',
          tv_en: 'Patients appreciate streamlined access to quality medical treatment.',
          forum: 'Warga: "Alhamdulillah berobat gratis dan pelayanannya ramah."',
          forum_en: 'Citizen: "Praise God, hospital care is free and medical staff are very courteous."',
          sosmed: '@KesehatanNusa: Berobat gratis bukan cuma janji, tapi udah dinikmati!',
          sosmed_en: '@HealthNusa: Universal healthcare is not just a promise—it is reality!'
        }
      },
      {
        t: '🎓 Temui Ribuan Mahasiswa Penerima Beasiswa Nusapura Cerdas',
        t_en: '🎓 Meet Thousands of Nusapura Future Scholar University Awardees',
        d: 'Investasi sumber daya manusia menggalang basis dukungan kuat generasi muda.',
        d_en: 'Human capital investments cement staunch loyalty among youth and student bodies.',
        effects: { elek: 6, oppElek: -3, funds: -150 },
        media: {
          times: 'Ribuan penerima beasiswa siap sumbangkan inovasi untuk kemajuan kota.',
          times_en: 'Thousands of scholarship recipients pledge to contribute to city innovation.',
          tv: 'Program beasiswa penuh cetak generasi emas berdaya saing global.',
          tv_en: 'Comprehensive scholarship scheme builds globally competitive local talent.',
          forum: 'Warga: "Banyak anak tetangga bisa kuliah karena program beasiswa ini."',
          forum_en: 'Citizen: "So many local kids could attend university thanks to this grant program."',
          sosmed: '@MahasiswaNusa: Makasih Pak Walikota, berkat beasiswa saya bisa sarjana!',
          sosmed_en: '@NusaStudents: Thank you Mayor, this scholarship made my degree possible!'
        }
      }
    ]
  },
  {
    day: 4,
    title: 'Konsolidasi Asosiasi Pengusaha & Kamar Dagang Industri (Kadin)',
    title_en: 'Chamber of Commerce (Kadin) & Regional Business Leadership Summit',
    icon: '💼',
    cat: 'Ekonomi & Investasi',
    cat_en: 'Economy & Investment',
    text: 'Pertemuan akbar dengan ratusan pengusaha, investor, dan pelaku UMKM untuk memaparkan kepastian iklim investasi 5 tahun ke depan.',
    text_en: 'A high-level summit with investors, entrepreneurs, and SME leaders to establish clear regulatory certainty for the upcoming 5-year cycle.',
    choices: [
      {
        t: '🤝 Tawarkan Insentif Pajak Kawasan Industri Hijau & Pusat Logistik Modern',
        t_en: '🤝 Offer Tax Incentives for Eco-Industrial Parks & Logistics Hubs',
        d: 'Menarik komitmen investasi triliunan rupiah dan membuka puluhan ribu lapangan kerja.',
        d_en: 'Secures trillions in committed investment capital, creating thousands of quality jobs.',
        effects: { elek: 5, oppElek: -3, funds: 500 },
        media: {
          times: 'Kadin deklarasikan dukungan kelanjutan kepemimpinan petahana.',
          times_en: 'Chamber of Commerce declares support for continued mayoral leadership.',
          tv: 'Komitmen investasi industri hijau janjikan serapan 25 ribu tenaga kerja.',
          tv_en: 'Green industrial investments forecast over 25,000 new local job opportunities.',
          forum: 'Warga: "Bagus biar anak-anak muda ga susah nyari kerjaan."',
          forum_en: 'Citizen: "Excellent so our young graduates can easily find great jobs locally."',
          sosmed: '@NusaInvest: Kepastian regulasi bikin investor makin betah di Nusapura.',
          sosmed_en: '@InvestNusa: Regulatory stability makes Nusapura the premier investment magnet.'
        }
      },
      {
        t: '🏪 Luncurkan Program Bantuan Modal Bunga 0% & Inkubator UMKM Digital',
        t_en: '🏪 Launch 0% Interest Micro-Capital & Digital SME Incubation Program',
        d: 'Mengukuhkan dukungan dari jutaan pelaku usaha mikro dan pedagang pasar tradisional.',
        d_en: 'Cements deep loyalty from grassroots market vendors and micro-entrepreneurs.',
        effects: { elek: 6, oppElek: -2, funds: -200 },
        media: {
          times: 'Bantuan modal tanpa bunga jadi penyelamat UMKM pasca-pandemi.',
          times_en: 'Zero-interest revolving loans revitalize grassroots retail economy.',
          tv: 'Inkubator digital bantu produk lokal Nusapura tembus pasar ekspor.',
          tv_en: 'Digital incubators propel homegrown Nusapura products to export markets.',
          forum: 'Warga: "Pedagang pasar sangat terbantu pinjaman tanpa bunga ini."',
          forum_en: 'Citizen: "Local market stall owners are immensely helped by zero-interest credit."',
          sosmed: '@UMKMNusa: UMKM naik kelas bersama program walikota petahana!',
          sosmed_en: '@NusaSMEs: Small businesses thriving under forward-thinking mayoral policies!'
        }
      },
      {
        t: '🛡️ Komitmen Berantas Pungli Perizinan & Integrasikan Sistem OSS Digital',
        t_en: '🛡️ Eradicate Bureaucratic Extortion & Integrate Seamless Digital OSS System',
        d: 'Memberikan kepastian hukum dan efisiensi biaya operasional bagi dunia usaha.',
        d_en: 'Provides legal certainty and slashes compliance red tape for all businesses.',
        effects: { elek: 5, oppElek: -2, funds: 0 },
        media: {
          times: 'Survei integritas KPK beri nilai tinggi kemudahan berusaha di Nusapura.',
          times_en: 'National anti-corruption integrity audit awards Nusapura top ease-of-business score.',
          tv: 'Sistem perizinan digital nol pungli jadi standar tata kelola modern.',
          tv_en: 'Zero-extortion digital licensing acclaimed as blueprint for clean governance.',
          forum: 'Warga: "Urus izin usaha ga ada lagi biaya siluman."',
          forum_en: 'Citizen: "Zero hidden under-the-table fees when registering business permits now."',
          sosmed: '@BisnisBersih: Bikin usaha di Nusapura sekarang bener-bener gampang & transparan!',
          sosmed_en: '@CleanBusiness: Starting a business in Nusapura is genuinely fast and transparent!'
        }
      }
    ]
  },
  {
    day: 5,
    title: 'Forum Dialog Publik Tokoh Adat, Veteran & Tokoh Keagamaan',
    title_en: 'Public Dialogue Forum with Cultural Custodians, Veterans & Faith Leaders',
    icon: '🕌',
    cat: 'Harmoni Warga',
    cat_en: 'Civic Harmony',
    text: 'Pertemuan silaturahmi dengan para sesepuh kota, pejuang veteran, dan pemuka agama untuk memohon restu kelanjutan pembangunan.',
    text_en: 'A respectful civic gathering with city elders, veteran freedom fighters, and spiritual leaders seeking blessings for ongoing progress.',
    choices: [
      {
        t: '📜 Alokasikan Dana Insentif Rumah Ibadah & Tunjangan Hari Tua Veteran',
        t_en: '📜 Grant House of Worship Subsidies & Senior Veteran Welfare Allowances',
        d: 'Bentuk penghormatan nyata yang menuai simpati mendalam dari pemilih senior.',
        d_en: 'A tangible mark of civic honor winning profound respect from senior generations.',
        effects: { elek: 6, oppElek: -2, funds: -250 },
        media: {
          times: 'Perhatian pada veteran dan rumah ibadah buktikan komitmen moral pemimpin.',
          times_en: 'Honoring veterans and religious sites highlights moral administrative integrity.',
          tv: 'Forum lintas agama doakan keselamatan dan kemajuan Kota Nusapura.',
          tv_en: 'Interfaith council offers joint prayers for the prosperity of Nusapura.',
          forum: 'Warga: "Senang melihat sesepuh kota dan pejuang dihargai dengan layak."',
          forum_en: 'Citizen: "Touching to see our senior veterans and city elders treated with dignity."',
          sosmed: '@HarmoniNusa: Pemimpin yang memuliakan orang tua dan sejarah kotanya.',
          sosmed_en: '@HarmoniousNusa: A leader who cherishes our heritage and respects senior pioneers.'
        }
      },
      {
        t: '🏛️ Revitalisasi Cagar Budaya & Bangun Pusat Kebudayaan Nusapura',
        t_en: '🏛️ Revitalize Heritage Districts & Construct Nusapura Cultural Arts Center',
        d: 'Melestarikan identitas sejarah lokal dan memikat dukungan komunitas seniman.',
        d_en: 'Preserves rich local cultural identity and wins enthusiastic support from artists.',
        effects: { elek: 5, oppElek: -3, funds: -200 },
        media: {
          times: 'Pusat kebudayaan baru jadi wadah ekspresi seniman dan budayawan lokal.',
          times_en: 'New municipal cultural center becomes vibrant hub for regional artists.',
          tv: 'Revitalisasi kota tua bangkitkan potensi pariwisata heritage nusantara.',
          tv_en: 'Old town heritage revitalization sparks thriving cultural tourism.',
          forum: 'Warga: "Kota tua sekarang hidup lagi, estetik dan ramai wisatawan."',
          forum_en: 'Citizen: "Our historic district is vibrant and aesthetic again, full of visitors."',
          sosmed: '@BudayaNusa: Keren bgt komitmennya menjaga warisan sejarah kita!',
          sosmed_en: '@CultureNusa: Phenomenal commitment to safeguarding our architectural heritage!'
        }
      },
      {
        t: '🤝 Deklarasikan Piagam Nusapura Rukun: Nol Toleransi Intoleransi SARA',
        t_en: '🤝 Proclaim Nusapura Harmony Charter: Zero Tolerance for Intolerance',
        d: 'Mempertegas posisi Nusapura sebagai kota paling toleran dan majemuk di tanah air.',
        d_en: 'Solidifies Nusapura ranking as one of the most inclusive and harmonious cities.',
        effects: { elek: 5, oppElek: -2, funds: 0 },
        media: {
          times: 'Piagam Nusapura Rukun jadi benteng pertahanan keberagaman warga.',
          times_en: 'Nusapura Harmony Charter serves as bulwark protecting civic diversity.',
          tv: 'Komnas HAM apresiasi kebijakan inklusif dan anti-diskriminasi petahana.',
          tv_en: 'Human Rights Commissions praise inclusive anti-discrimination policies.',
          forum: 'Warga: "Semua golongan merasa aman dan diayomi di kota ini."',
          forum_en: 'Citizen: "Every community feels safe, respected, and welcomed in this city."',
          sosmed: '@NusaToleran: Bangga tinggal di kota yang menjunjung tinggi toleransi!',
          sosmed_en: '@TolerantNusa: Proud to live in a city that truly champions mutual respect!'
        }
      }
    ]
  },
  {
    day: 6,
    title: 'Kampanye Akbar Petahana: Konser "Nusapura Berkelanjutan"',
    title_en: 'Incumbent Grand Rally: "Sustainable Nusapura" Stadium Mega-Concert',
    icon: '🎙️',
    cat: 'Pesta Rakyat',
    cat_en: 'Grand Rally',
    text: 'Puncak pengerahan massa periode kedua di Stadion Gelora Nusapura. Stadion dipadati lebih dari 50 ribu pendukung berkaos seragam.',
    text_en: 'The second-term campaign mobilization peak at Gelora Stadium. Over 50,000 enthusiastic citizens pack the stands.',
    choices: [
      {
        t: '🎸 Hadirkan Kolaborasi Musisi Legendaris & Parade Budaya Nusantara',
        t_en: '🎸 Headline Legendary Music Icons & Grand Nusantara Cultural Parade',
        d: 'Gelombang antusiasme luar biasa mengukuhkan dominasi elektabilitas di ruang publik.',
        d_en: 'An extraordinary wave of civic enthusiasm locks in dominant polling momentum.',
        effects: { elek: 7, oppElek: -2, funds: -500 },
        media: {
          times: 'Gelora Nusapura membiru dalam kampanye akbar teramai sepanjang sejarah.',
          times_en: 'Stadium overflows with joyous crowds in historic grand rally.',
          tv: 'Pesta rakyat spektakuler buktikan solidnya basis pendukung petahana.',
          tv_en: 'Spectacular festival demonstrates rock-solid incumbent voter base.',
          forum: 'Warga: "Stadion penuh sesak, energinya bener-bener luar biasa."',
          forum_en: 'Citizen: "Stadium was packed to the brim, the festive energy was electric."',
          sosmed: '@NusaBersatu: Gelora pecah! Nusapura siap lanjut 2 periode!',
          sosmed_en: '@UnitedNusa: Historic turnout! Nusapura is ready for a triumphant second term!'
        }
      },
      {
        t: '📋 Paparan Pidato Kenegaraan: 5 Megaproyek Pengubah Wajah Nusapura',
        t_en: '📋 Keynote Policy Address: 5 Transformational Megaprojects for Nusapura',
        d: 'Pemaparan komprehensif mengunci kepercayaan penuh para profesional dan investor.',
        d_en: 'Comprehensive masterplan presentation secures total trust from professionals and investors.',
        effects: { elek: 6, oppElek: -3, funds: -200 },
        media: {
          times: 'Rencana 5 megaproyek petahana siap bawa Nusapura ke kancah global.',
          times_en: '5 transformational megaprojects ready to place Nusapura on the global map.',
          tv: 'Pakar infrastruktur nilai rencana pembangunan kedua sangat matang.',
          tv_en: 'Infrastructure specialists rate second-term masterplan highly feasible.',
          forum: 'Warga: "Proyeknya jelas, bukan cuma mimpi di awang-awang."',
          forum_en: 'Citizen: "Concrete projects with clear execution steps, not empty daydreams."',
          sosmed: '@VisionerNusa: Rencana megaproyeknya bener-bener bikin optimis!',
          sosmed_en: '@VisionaryNusa: The visionary project portfolio fills everyone with optimism!'
        }
      },
      {
        t: '📱 Gelar Pesta Rakyat Terdesentralisasi di 10 Titik Kecamatan',
        t_en: '📱 Host Decentralized Community Festivals Across 10 Districts',
        d: 'Menjangkau akar rumput secara merata tanpa membebani kemacetan pusat kota.',
        d_en: 'Reaches grassroots neighborhoods equally without clogging central city avenues.',
        effects: { elek: 6, oppElek: -3, funds: -300 },
        media: {
          times: 'Pesta rakyat serentak di 10 kecamatan gerakkan ekonomi pedagang kecil.',
          times_en: 'Simultaneous 10-district festivals provide massive revenue for street vendors.',
          tv: 'Konsep kampanye terdesentralisasi dipuji ramah lingkungan dan tertib.',
          tv_en: 'Decentralized campaign model praised for zero traffic disruption.',
          forum: 'Warga: "Ga perlu jauh-jauh ke stadion, di kecamatan sendiri udah rame."',
          forum_en: 'Citizen: "Did not need to commute to the central stadium; district celebrations were lively."',
          sosmed: '@WargaKecamatan: Kampanye yang dekat dengan rakyat di lingkungan sendiri!',
          sosmed_en: '@DistrictLocals: A celebration brought right into our local neighborhood communities!'
        }
      }
    ]
  },
  {
    day: 7,
    title: 'Serangan Kampanye Hitam Fitnah LHKPN & Rekening Kas Daerah',
    title_en: 'Black Campaign Smear on Asset Disclosures & Municipal Treasury',
    icon: '⚡',
    cat: 'Krisis Berita',
    cat_en: 'Media Crisis',
    text: 'Muncul dokumen palsu di media sosial yang mengklaim adanya transaksi tersembunyi kas daerah ke rekening pribadi tim sukses Anda.',
    text_en: 'Forged documents circulate on social media alleging illicit secret transactions from the treasury to your campaign associates.',
    choices: [
      {
        t: '⚖️ Laporkan ke Siber Polda & Rilis Surat Keterangan Bank Resmi',
        t_en: '⚖️ File Cyber Police Charges & Release Verified Official Bank Certificates',
        d: 'Dokumen palsu terbongkar cepat, pelaku penyebar hoaks ditangkap polisi.',
        d_en: 'Forged papers are quickly exposed and malicious smear fabricators are arrested.',
        effects: { elek: 5, oppElek: -4, funds: -100 },
        media: {
          times: 'Polisi ringkus penyebar dokumen palsu fitnah kas daerah.',
          times_en: 'Cyber police apprehend suspects orchestrating fabricated bank document smears.',
          tv: 'Bukti audit independen buktikan kas daerah aman tanpa kejanggalan.',
          tv_en: 'Independent bank audit verifications confirm treasury funds fully secure.',
          forum: 'Warga: "Jahat banget fitnahnya, untung langsung dibongkar kepolisian."',
          forum_en: 'Citizen: "Despicable forgery, glad the truth was established immediately."',
          sosmed: '@CekFakta: Terbukti fitnah keji ya guys, jangan percaya hoaks editan!',
          sosmed_en: '@FactCheck: Verified as fabricated smears! Beware of deceptive disinformation!'
        }
      },
      {
        t: '📢 Gelar Konferensi Pers Bersama BPK & PPATK Transparansi Total',
        t_en: '📢 Joint Press Conference with BPK & Financial Intelligence PPATK',
        d: 'Audit resmi lembaga keuangan negara mengukuhkan predikat WTP kota.',
        d_en: 'Official state financial audits reaffirm unblemished clean governance record.',
        effects: { elek: 6, oppElek: -3, funds: -200 },
        media: {
          times: 'BPK konfirmasi predikat Opini WTP untuk laporan keuangan pemkot.',
          times_en: 'Supreme Audit Agency reconfirms clean Unqualified Opinion for city financials.',
          tv: 'Hasil transparansi publik bungkam tuduhan tanpa bukti kubu lawan.',
          tv_en: 'Radical fiscal transparency silences unsubstantiated opposition accusations.',
          forum: 'Warga: "Predikat WTP dari BPK ga bisa direkayasa, lawan langsung kecele."',
          forum_en: 'Citizen: "Official state audit certification cannot be faked; accusations fell flat."',
          sosmed: '@AuditBersih: BPK udah bicara, klaim oposisi gugur total!',
          sosmed_en: '@CleanAudit: Supreme audit authority cleared the record, opponent claims debunked!'
        }
      },
      {
        t: '🎥 Rilis Video Edukasi Santai "Bedah Anggaran APBD Bersama Walikota"',
        t_en: '🎥 Release Engaging Educational Video "Demystifying the City Budget with the Mayor"',
        d: 'Gaya penjelasan simpel membuat warga awam paham alur keuangan kota.',
        d_en: 'Clear visual graphics help ordinary citizens understand how tax revenues are invested.',
        effects: { elek: 4, oppElek: -2, funds: -50 },
        media: {
          times: 'Video penjelasan APBD berbalut animasi disukai ribuan warganet.',
          times_en: 'Animated city budget explainer video praised by thousands of citizens.',
          tv: 'Respon edukatif petahana atasi hoaks jadi contoh politik dewasa.',
          tv_en: 'Educational response sets high standard for mature, transparent political conduct.',
          forum: 'Warga: "Jadi paham cara baca APBD, makasih penjelasannya Pak."',
          forum_en: 'Citizen: "Now I understand how our city budget works. Thank you for the clear breakdown."',
          sosmed: '@EdukasiPolitik: Cara meng-counter fitnah yang sangat cerdas!',
          sosmed_en: '@CivicEdu: A brilliantly smart and dignified way to counter misinformation!'
        }
      }
    ]
  },
  {
    day: 8,
    title: 'Debat Pamungkas TV Nasional: Petahana vs Oposisi',
    title_en: 'Final Televised Debate on National TV: Incumbent vs Opposition',
    icon: '🎙️',
    cat: 'Debat Pamungkas',
    cat_en: 'Decisive Debate',
    text: 'Debat sengit penentu arah kota. Tema debat meliputi kesinambungan APBD, investasi teknologi, dan rencana aksi 5 tahun ke depan.',
    text_en: 'High-stakes debate determining the trajectory of the city. Topics cover long-term fiscal sustainability, technology investments, and 5-year execution milestones.',
    choices: [
      {
        t: '📋 Tunjukkan Peta Grafik Capaian Nyata & Rencana Detail Periode II',
        t_en: '📋 Present Concrete Performance Charts & Detailed Term II Action Blueprint',
        d: 'Penguasaan materi mendalam membuktikan kapasitas petahana jauh unggul.',
        d_en: 'Deep mastery of data demonstrates superior executive competence and readiness.',
        effects: { elek: 6, oppElek: -3, funds: -100 },
        media: {
          times: 'Petahana kuasai panggung debat pamungkas dengan paparan data presisi.',
          times_en: 'Incumbent dominates final debate with precise data presentations.',
          tv: 'Analis sebut debat pamungkas perkokoh elektabilitas calon petahana.',
          tv_en: 'Analysts state final debate solidifies incumbent polling advantage.',
          forum: 'Warga: "Kelas banget penampilannya, menguasai angka dan masalah."',
          forum_en: 'Citizen: "Masterclass performance, commanding complete grasp over numbers and issues."',
          sosmed: '@PengamatNusa: Kemenangan mutlak di segmen debat pamungkas!',
          sosmed_en: '@NusaAnalyst: Clear and undisputed victory in the decisive final debate!'
        }
      },
      {
        t: '🛡️ Skat Mat Oposisi yang Tidak Punya Masterplan Anggaran Konkret',
        t_en: '🛡️ Checkmate Opposition on Lack of Concrete Budgeting Plans',
        d: 'Lawan politik kesulitan menjawab rincian sumber pendanaan janji mereka.',
        d_en: 'Challenger struggles visibly to explain where funding for uncosted pledges will come from.',
        effects: { elek: 5, oppElek: -4, funds: -50 },
        media: {
          times: 'Debat memanas saat petahana pertanyakan perhitungan janji lawan.',
          times_en: 'Debate heats up as incumbent questions financial math behind rival pledges.',
          tv: 'Kubu oposisi kelabakan jelaskan asal-usul anggaran program gratis.',
          tv_en: 'Opposition camp stumbles explaining fiscal sources for sweeping free handouts.',
          forum: 'Warga: "Kena skat mat pas ditanya asal duitnya dari mana."',
          forum_en: 'Citizen: "Total checkmate when asked where the budget billions would come from."',
          sosmed: '@DebatHot: Janji lawan langsung ambrul pas ditanya detail APBD.',
          sosmed_en: '@DebateHot: Rival populist promises collapsed when pressed on actual budget mechanics.'
        }
      },
      {
        t: '🕊️ Tutup dengan Pidato Persatuan & Ajakan Menjaga Kerukunan Kota',
        t_en: '🕊️ Conclude with Unifying Statesman Address on Civic Brotherhood',
        d: 'Pesan damai menyentuh simpati masyarakat luas dan pemilih mengambang.',
        d_en: 'A dignified call for peace resonates deeply with undecided voters and civic leaders.',
        effects: { elek: 5, oppElek: -2, funds: 0 },
        media: {
          times: 'Closing statement hangat petahana serukan persatuan pasca-Pilkada.',
          times_en: 'Warm closing statement calls for civic brotherhood regardless of election results.',
          tv: 'Suasana haru dan kesejukan akhiri rangkaian debat resmi KPU.',
          tv_en: 'A dignified and serene atmosphere concludes official election debate series.',
          forum: 'Warga: "Siapapun yang menang, Kota Nusapura harus tetap damai."',
          forum_en: 'Citizen: "Whoever triumphs, Nusapura must remain peaceful and united."',
          sosmed: '@NusapuraDamai: Pidato penutupnya adem banget, bikin tenang.',
          sosmed_en: '@PeacefulNusa: So soothing and statesmanlike, a true leader for all citizens.'
        }
      }
    ]
  },
  {
    day: 9,
    title: 'Instruksi Pengamanan TPS & Satgas Anti Money Politics',
    title_en: 'Precinct Guard Directives & Anti-Money Politics Rapid Response',
    icon: '🛡️',
    cat: 'Kawal TPS',
    cat_en: 'Ballot Security',
    text: 'Menjelang hari pencoblosan, ribuan relawan dan saksi TPS disiapkan untuk mengawal kotak suara dari potensi kecurangan.',
    text_en: 'On the eve of voting day, thousands of precinct observers and volunteers mobilize to shield ballot boxes from manipulation.',
    choices: [
      {
        t: '📋 Terjunkan 2.450 Saksi Resmi Berpengalaman di Tiap TPS',
        t_en: '📋 Deploy 2,450 Experienced Accredited Witnesses to Every Polling Booth',
        d: 'Saksi terlatih siap mencatat dan memfoto form C1 secara akurat.',
        d_en: 'Trained observers stand ready to verify, photograph, and digitally upload C1 tallies.',
        effects: { elek: 5, oppElek: -3, funds: -400 },
        media: {
          times: 'Pasukan saksi TPS petahana siap siaga amankan suara rakyat.',
          times_en: 'Certified polling station monitors stand vigil over popular vote.',
          tv: 'Bawaslu apresiasi kesiapan saksi di seluruh pelosok kelurahan.',
          tv_en: 'Supervisory boards praise disciplined observer deployment across all districts.',
          forum: 'Warga: "Ayo kita jaga TPS masing-masing besok pagi!"',
          forum_en: 'Citizen: "Let us all protect our local polling stations tomorrow morning!"',
          sosmed: '@KawalTPS: Besok datang ke TPS pagi-pagi, gunakan hak pilih!',
          sosmed_en: '@VoteGuard: Arrive early at your polling station tomorrow and cast your vote!'
        }
      },
      {
        t: '📱 Aktifkan Aplikasi Tabulasi Hitung Cepat Real-Count C1 Digital',
        t_en: '📱 Activate Real-Count Digital Tabulation Network for Fast C1 Verification',
        d: 'Sistem rekapitulasi independen mampu sajikan data akurat dalam 2 jam.',
        d_en: 'Encrypted independent tally system delivers verified results within 2 hours.',
        effects: { elek: 4, oppElek: -2, funds: -200 },
        media: {
          times: 'Sistem Tabulasi Digital C1 internal siap tayangkan data TPS.',
          times_en: 'Internal digital tabulation command center ready to process precinct data.',
          tv: 'Teknologi verifikasi foto C1 jamin transparansi perolehan suara.',
          tv_en: 'C1 photo verification algorithm guarantees transparent election tabulation.',
          forum: 'Warga: "Mantap ga ada ruang buat manipulasi angka suara."',
          forum_en: 'Citizen: "Superb! Zero room for ballot alteration or fraudulent vote adjustments."',
          sosmed: '@TechKawal: Real count digital siap mengawal kemurnian suara!',
          sosmed_en: '@TechVote: Digital real-count is ready to safeguard democratic integrity!'
        }
      },
      {
        t: '🤝 Patroli Bersama Warga Cegah Serangan Fajar & Sembako Gelap',
        t_en: '🤝 Conduct Joint Citizen Patrols to Halt Clandestine Midnight Bribes',
        d: 'Patroli malam warga berhasil menggagalkan berbagai bentuk politik uang.',
        d_en: 'Vigilant neighborhood night patrols intercept illicit cash distributions.',
        effects: { elek: 5, oppElek: -4, funds: -100 },
        media: {
          times: 'Satgas warga amankan dugaan sembako gelap di kawasan pinggiran.',
          times_en: 'Citizen patrols intercept illicit midnight grocery hand-outs on the outskirts.',
          tv: 'Masyarakat pro-aktif tolak politik uang demi masa depan kota.',
          tv_en: 'Grassroots communities proactively reject bribery to protect their future.',
          forum: 'Warga: "Tolak amplop! Pilih pemimpin yang sudah terbukti kerja."',
          forum_en: 'Citizen: "Reject bribe envelopes! Choose leaders with a proven record of service."',
          sosmed: '@BersihSuara: Patroli warga malam ini jalan terus, tolak suap!',
          sosmed_en: '@CleanBallot: Community patrols active all night, refusing all vote-buying bribes!'
        }
      }
    ]
  },
  {
    day: 10,
    title: 'Malam Doa Bersama & Penutupan Masa Kampanye Periode II',
    title_en: 'Second-Term Interfaith Prayer Vigil & Campaign Period Finale',
    icon: '🏛️',
    cat: 'Penutupan Kampanye',
    cat_en: 'Campaign Finale',
    text: 'Masa tenang akan dimulai esok. Seluruh tim dan relawan berkumpul dalam doa bersama memohon kelancaran hari pemungutan suara.',
    text_en: 'The cooling-off period begins tomorrow. Volunteers and supporters gather in unified reflection and prayer for a peaceful election day.',
    choices: [
      {
        t: '🕯️ Gelar Malam Istighosah & Santunan Yatim Piatu Se-Kota',
        t_en: '🕯️ Host Spiritual Prayer Vigil & Citywide Orphan Charity Outreach',
        d: 'Suasana khusyuk dan haru mengiringi pelepasan seluruh ikhtiar kampanye.',
        d_en: 'A serene and emotionally resonant gathering concluding all campaign efforts.',
        effects: { elek: 5, oppElek: -2, funds: -150 },
        media: {
          times: 'Malam refleksi dan doa bersama tutup masa kampanye petahana.',
          times_en: 'Reflective evening of unified prayer concludes incumbent campaign.',
          tv: 'Ribuan relawan lintas agama panjatkan doa untuk keselamatan kota.',
          tv_en: 'Thousands of multi-faith volunteers pray for peace and civic wellbeing.',
          forum: 'Warga: "Bismillah esok hari pencoblosan berjalan lancar dan damai."',
          forum_en: 'Citizen: "May tomorrow election day proceed smoothly, peacefully, and justly."',
          sosmed: '@DoaNusa: Semoga Allah takdirkan yang terbaik buat kota kita.',
          sosmed_en: '@PrayersForNusa: Hoping for the very best future for our beloved city.'
        }
      },
      {
        t: '🧹 Pimpin Aksi Bersih APK & Penertiban Spanduk Bersama Warga',
        t_en: '🧹 Lead Hands-On Citywide Cleanup of Campaign Materials with Residents',
        d: 'Aksi simpatik membersihkan jalanan kota mendapat pujian hangat warga.',
        d_en: 'Proactive volunteer cleanup of street signs and banners wins heartfelt praise.',
        effects: { elek: 6, oppElek: -2, funds: -50 },
        media: {
          times: 'Walikota petahana terjun langsung bersihkan alat peraga kampanye.',
          times_en: 'Incumbent Mayor personally joins cleanup crews to remove campaign posters.',
          tv: 'Inisiatif bersihkan spanduk mandiri kembalikan keindahan kota.',
          tv_en: 'Spontaneous banner removal initiative restores pristine urban beauty.',
          forum: 'Warga: "Contoh teladan! Sebelum masa tenang jalanan udah bersih."',
          forum_en: 'Citizen: "True role model! Streets are sparkling clean before the cooling-off window."',
          sosmed: '@AsriNusa: Salut banget! Kampanye tertib, kota langsung bersih.',
          sosmed_en: '@PristineNusa: Huge respect! Orderly campaign, immediate clean streets.'
        }
      },
      {
        t: '☕ Cangkrukan Santai Bersama Media & Tokoh Pemuda di Cafe Kota',
        t_en: '☕ Relaxed Informal Coffee Gathering with Journalists & Youth Leaders',
        d: 'Suasana hangat dan cair mempererat silaturahmi menjelang hari tenang.',
        d_en: 'A warm, open exchange strengthening friendships right before voting day.',
        effects: { elek: 4, oppElek: -1, funds: -50 },
        media: {
          times: 'Silaturahmi santai walikota dengan wartawan tutup masa kampanye.',
          times_en: 'Relaxed press meetup marks cordial conclusion of the election campaign.',
          tv: 'Pilkada Nusapura dicatat sebagai salah satu pilkada terdamai.',
          tv_en: 'Nusapura election praised as one of the most peaceful in the nation.',
          forum: 'Warga: "Besok tinggal ke TPS dengan tenang dan penuh keyakinan."',
          forum_en: 'Citizen: "Ready to head to the polling booths tomorrow with confidence."',
          sosmed: '@PilkadaDamai: Sampai ketemu di TPS esok hari teman-teman!',
          sosmed_en: '@PeacefulVote: See you all at the polling stations tomorrow, friends!'
        }
      }
    ]
  }
];
