/* ==================== 20 DANGEROUS DIALOGUES ENGINE (5 YEARS X 4 QUARTERS) ==================== */
var DANGEROUS_DIALOGUES = [
  {
    "quarter": 1,
    "year": 1,
    "quarterNum": 1,
    "title_id": "Tuntutan Mahar Politik Partai Pengusung",
    "title_en": "Ruling Coalition's Patronage Demands",
    "character_id": "H. Suryo Pranoto",
    "character_en": "H. Suryo Pranoto",
    "role_id": "Ketua DPC Partai Pengusung Utama",
    "role_en": "Chairman of the Mayoral Ruling Party DPC",
    "avatar": "🧔‍♂️",
    "mood_id": "😠 Menuntut Balas Budi Pilkada",
    "mood_en": "😠 Demanding Campaign Payback",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, jangan pura-pura amnesia. Mesin partai kami yang pontang-panting beli saksi TPS dan pasang baliho Anda sampai subuh! Sekarang BUMD Air Bersih dan parkir kota harus diserahkan ke kader kami. Kalau menolak, jangan harap APBD perdana Anda disetujui fraksi kami di DPRD!”",
    "dialogue_en": "“Mr. Mayor, don't play amnesiac with me. It was our party machine that bled sweat buying polling station witnesses and hanging your banners until dawn! Now, the Municipal Water Board and parking contracts must go to our cadres. If you refuse, don't expect our parliamentary faction to pass your first APBD!”",
    "dilemma_id": "Partai menuntut kursi basah BUMD sebagai balas jasa Pilkada. Menolak keras berisiko memicu boikot parlemen di Tahun 2.",
    "dilemma_en": "The party demands lucrative municipal board seats as election payback. Outright refusal risks an immediate parliamentary budget blockade in Year 2.",
    "choices": [
      {
        "id": "confront",
        "tone_id": "🛡️ Tolak Tegas & Ancam Buka ke Publik",
        "tone_en": "🛡️ Firm Refusal & Threaten Public Disclosure",
        "text_id": "“Saya disumpah di atas kitab suci untuk melayani warga, bukan membagikan BUMD seperti warisan pribadi Anda! Sekali lagi Anda mengancam APBD, saya umumkan transkrip ini di konferensi pers besok pagi!”",
        "text_en": "“I took an oath on the holy scriptures to serve the citizens, not divide city enterprises like your private inheritance! Threaten the APBD once more, and I will read this transcript at tomorrow's press conference!”",
        "fx": {
          "sat": 6,
          "risk": -5
        },
        "actors": {
          "DPRD": -12,
          "Media": 8,
          "Warga": 6
        },
        "flag": "y1q1_refused_party_patronage",
        "consequence_id": "Anda menjaga profesionalitas BUMD, namun Ketua Partai bersumpah membalas dendam dengan menjegal Pokir APBD di Tahun ke-2.",
        "consequence_en": "You preserved municipal corporate integrity, but the Party Chairman swore revenge by sabotaging your Year 2 legislative budgets."
      },
      {
        "id": "compromise",
        "tone_id": "🤝 Kompromi Terbatas (Satu Kursi Non-Teknis)",
        "tone_en": "🤝 Limited Compromise (One Non-Technical Seat)",
        "text_id": "“Tenang, Kang Suryo. Mari kita realistis. Posisi Direktur Utama tetap harus lelang terbuka demi kredibilitas, tapi saya sediakan satu kursi Dewan Pengawas independen untuk perwakilan partai Anda.”",
        "text_en": "“Calm down, Kang Suryo. Let's be realistic. The Managing Director must remain an open merit-based search for credibility, but I will allocate one independent Supervisory Board seat for your party representative.”",
        "fx": {
          "sat": -2,
          "risk": 5
        },
        "actors": {
          "DPRD": 6,
          "Birokrasi": -4
        },
        "flag": "y1q1_compromised_party_patronage",
        "consequence_id": "Fraksi partai merasa diredam dan mendukung APBD, tetapi birokrat senior mulai mengendus kompromi politik Anda.",
        "consequence_en": "The party faction feels placated and backs your budget, but senior civil servants begin detecting political concessions."
      },
      {
        "id": "secret_deal",
        "tone_id": "💼 Tunduk Sepenuhnya Demi Kelancaran Parlemen",
        "tone_en": "💼 Fully Concede for Smooth Legislative Sailing",
        "text_id": "“Baiklah, saya serahkan SK pengangkatan pengurus BUMD sesuai daftar Anda, asalkan fraksi Anda mengawal seluruh draf perda saya tanpa banyak revisi.”",
        "text_en": "“Very well, I will sign the municipal enterprise appointments exactly as your list dictates, provided your faction shields all my upcoming mayoral decrees without debate.”",
        "fx": {
          "sat": -5,
          "risk": 15,
          "apbd": -0.2
        },
        "actors": {
          "DPRD": 15,
          "Warga": -6
        },
        "flag": "y1q1_surrendered_to_party",
        "consequence_id": "Koalisi parlemen sangat solid, namun bibit inefisiensi dan korupsi di BUMD tertanam dan siap meledak di Tahun ke-3.",
        "consequence_en": "The legislative coalition is rock-solid, but seeds of mismanagement and corruption in city utilities are planted to erupt in Year 3."
      }
    ]
  },
  {
    "quarter": 2,
    "year": 1,
    "quarterNum": 2,
    "title_id": "Rayuan Maut Konglomerat Reklamasi",
    "title_en": "The Beachfront Tycoon's Lucrative Trap",
    "character_id": "Dharmawan Wijaya",
    "character_en": "Dharmawan Wijaya",
    "role_id": "Presiden Direktur Nusa Mega Property Group",
    "role_en": "President Director of Nusa Mega Property Group",
    "avatar": "👨‍💼",
    "mood_id": "😏 Menawarkan Cek Bernilai Fantastis",
    "mood_en": "😏 Offering Astronomical Private Investment",
    "tension": "medium",
    "dialogue_id": "“Pak Wali yang terhormat. Izin AMDAL reklamasi teluk kami tertahan di dinas lingkungan hidup Anda sudah 8 bulan. Jika besok tanda tangan izin keluar, konsorsium kami siap kucurkan investasi Rp 2 Triliun, bangun waterfront modern, dan ada kompensasi CSR khusus ke yayasan keluarga Bapak.”",
    "dialogue_en": "“Distinguished Mayor. Our waterfront reclamation environmental impact permit has been stuck in your ecology agency for 8 months. If you sign the authorization tomorrow, our consortium will inject Rp 2 Trillion in direct investment, construct a modern waterfront, and channel special CSR funding to your family foundation.”",
    "dilemma_id": "Investasi raksasa pengembang menjanjikan PAD tinggi dan lapangan kerja, namun berpotensi mematikan kampung nelayan dan merusak terumbu karang.",
    "dilemma_en": "The developer's massive investment promises booming PAD and jobs, but risks destroying coastal fishing villages and marine ecosystems.",
    "choices": [
      {
        "id": "reject",
        "tone_id": "🛑 Tolak AMDAL Cacat & Bela Nelayan",
        "tone_en": "🛑 Reject Flawed Environmental Permit & Defend Fisherfolk",
        "text_id": "“Simpan tawaran yayasan Anda, Pak Dharmawan! Dokumen AMDAL Anda jelas merekayasa dampak sedimentasi bagi 3.000 keluarga nelayan. Proyek ini dibatalkan sampai ada desain ramah ekologi!”",
        "text_en": "“Keep your foundation offers to yourself, Mr. Dharmawan! Your environmental documents clearly falsified sedimentation impact on 3,000 fishing families. This project is halted until there is a genuinely green design!”",
        "fx": {
          "sat": 8,
          "pad": -0.2
        },
        "actors": {
          "Bisnis": -12,
          "Warga": 10,
          "Media": 6
        },
        "flag": "y1q2_rejected_reclamation_tycoon",
        "consequence_id": "Warga pesisir menjuluki Anda pahlawan ekologi, namun asosiasi pengembang memboikot lelang proyek infrastruktur kota.",
        "consequence_en": "Coastal communities hail you as an ecology hero, but the real estate guild retaliates by boycotting municipal infrastructure bids."
      },
      {
        "id": "strict_conditions",
        "tone_id": "⚖️ Izinkan dengan Syarat Ketat & Kampung Tematik",
        "tone_en": "⚖️ Permit with Stringent Covenants & Fisher Housing",
        "text_id": "“Investasi diterima, tapi tanpa CSR terselubung. Anda wajib bangun 1.000 rumah susun gratis untuk nelayan dan alokasikan 40% ruang terbuka hijau publik di area proyek.”",
        "text_en": "“The investment is welcome, but without backdoor CSR. You are legally required to construct 1,000 free social apartments for fishermen and deed 40% of the project as public green space.”",
        "fx": {
          "sat": 3,
          "pad": 0.4
        },
        "actors": {
          "Bisnis": 5,
          "Warga": 3
        },
        "flag": "y1q2_conditioned_reclamation",
        "consequence_id": "Solusi jalan tengah berhasil menciptakan PAD baru dan relokasi layak, meski aktivis radikal tetap melayangkan kritik.",
        "consequence_en": "A middle-ground creates fresh municipal revenue and decent resettlement, though radical activists continue filing petitions."
      },
      {
        "id": "embrace_tycoon",
        "tone_id": "💰 Tanda Tangani Izin Cepat Demi Lonjakan PAD",
        "tone_en": "💰 Expedite the Permit for Immediate Revenue Boom",
        "text_id": "“Sepakat, Pak Dharmawan. Kota ini butuh percepatan ekonomi dan modernisasi waterfront berkelas dunia. Saya instruksikan dinas selesaikan perizinan sore ini.”",
        "text_en": "“Agreed, Mr. Dharmawan. This city needs accelerated growth and a world-class waterfront skyline. I will order the licensing bureau to finalize the paperwork this afternoon.”",
        "fx": {
          "sat": -4,
          "pad": 0.8,
          "risk": 10
        },
        "actors": {
          "Bisnis": 16,
          "Warga": -8
        },
        "flag": "y1q2_endorsed_reclamation_tycoon",
        "consequence_id": "PAD melesat pesat, namun nelayan tradisional menggelar aksi demonstrasi perahu yang menjadi sorotan media nasional.",
        "consequence_en": "Treasury revenue surges rapidly, but traditional fishermen stage flotilla boat blockades that attract national news headlines."
      }
    ]
  },
  {
    "quarter": 3,
    "year": 1,
    "quarterNum": 3,
    "title_id": "Ancaman Mogok Massal Aliansi Buruh",
    "title_en": "Labor Federation's General Strike Ultimatum",
    "character_id": "Siti Rahmawati",
    "character_en": "Siti Rahmawati",
    "role_id": "Ketua Presidium Aliansi Buruh Nusapura",
    "role_en": "Chairwoman of the Nusapura Labor Union Presidium",
    "avatar": "👩‍🏭",
    "mood_id": "🔥 Siap Turunkan Puluhan Ribu Buruh",
    "mood_en": "🔥 Mobilizing Tens of Thousands to Paralyze Roads",
    "tension": "high",
    "dialogue_id": "“Pak Wali, inflasi sembako sudah mencekik leher kami! Kami menuntut rekomendasi Upah Minimum Kota (UMK) naik 18% dan audit keselamatan di kawasan industri barat. Jika besok surat rekomendasi tidak dikirim ke Gubernur, 50 ribu buruh akan lumpuhkan jalan tol dan akses pelabuhan!”",
    "dialogue_en": "“Mr. Mayor, grocery inflation is choking our families to death! We demand a municipal minimum wage (UMK) recommendation hike of 18% and safety audits in the western industrial park. If your letter to the Governor is not signed tomorrow, 50,000 workers will paralyze the highway and seaport access!”",
    "dilemma_id": "Kenaikan upah 18% membahagiakan kaum buruh, tetapi asosiasi pengusaha (Apindo) mengancam relokasi pabrik ke kabupaten sebelah.",
    "dilemma_en": "An 18% wage bump delights working families, but employers threaten mass factory closures and relocation to neighboring regencies.",
    "choices": [
      {
        "id": "side_with_labor",
        "tone_id": "✊ Rekomendasikan Kenaikan Upah 18%",
        "tone_en": "✊ Recommend Full 18% Wage Hike",
        "text_id": "“Keringat buruh adalah fondasi denyut nadi kota ini! Saya tanda tangani rekomendasi 18%, tapi kalian wajib kawal ketertiban dan jangan rusak fasilitas umum!”",
        "text_en": "“The sweat of workers is the very foundation of this city! I will sign the 18% wage recommendation, but you must guarantee strict peace and protect public infrastructure!”",
        "fx": {
          "sat": 8
        },
        "actors": {
          "Warga": 12,
          "Bisnis": -15
        },
        "flag": "y1q3_supported_labor_federation",
        "consequence_id": "Kaum buruh menjadi basis pemilih paling militan bagi Anda, namun sejumlah pabrik garmen mengumumkan PHK bertahap.",
        "consequence_en": "Laborers become your most loyal voting stronghold, but several garment exporters announce phased hiring freezes."
      },
      {
        "id": "win_win_subsidies",
        "tone_id": "🚌 Solusi Paket: Kenaikan 9% + Subsidi Transportasi & Pangan",
        "tone_en": "🚌 Compromise Package: 9% Hike + Free Transit & Food Vouchers",
        "text_id": "“Mari bersikap realistis agar pabrik tidak hengkang. Upah naik 9%, tetapi pemkot sediakan bus gratis untuk buruh dan kartu sembako murah bersubsidi APBD.”",
        "text_en": "“Let us be pragmatic so factories don't flee. We set a 9% wage rise, but the city covers free worker bus routes and APBD-subsidized grocery vouchers.”",
        "fx": {
          "sat": 4,
          "apbd": -0.15
        },
        "actors": {
          "Warga": 6,
          "Bisnis": 4
        },
        "flag": "y1q3_compromised_labor_subsidies",
        "consequence_id": "Ketegangan mereda tanpa pemogokan, dan kedua belah pihak memuji kepemimpinan Anda yang mengutamakan solusi terukur.",
        "consequence_en": "Tension diffuses without a strike, and both labor and commerce praise your pragmatic, balanced statecraft."
      },
      {
        "id": "side_with_business",
        "tone_id": "🏭 Kunci Upah Rendah & Gandeng Aparat Bubarkan Aksi",
        "tone_en": "🏭 Restrain Wages & Mobilize Police to Deter Roadblocks",
        "text_id": "“Saya tidak akan membiarkan iklim investasi hancur oleh aksi anarkis. Kenaikan dikunci 4% sesuai PP pusat. Jika ada yang blokade jalan tol, aparat akan bertindak tegas!”",
        "text_en": "“I will not allow our investment climate to be wrecked by blockades. The wage rise is capped at 4% per national formula. If the highway is blocked, police will intervene swiftly!”",
        "fx": {
          "sat": -8
        },
        "actors": {
          "Bisnis": 12,
          "Warga": -12
        },
        "flag": "y1q3_suppressed_labor_protest",
        "consequence_id": "Investor menganggap kota Anda surga industri, namun serikat buruh mencap Anda penguasa otoriter anti-rakyat kecil.",
        "consequence_en": "Investors celebrate your pro-business resolve, but labor unions brand you an authoritarian oligarch's puppet."
      }
    ]
  },
  {
    "quarter": 4,
    "year": 1,
    "quarterNum": 4,
    "title_id": "Interogasi Senyap Penyidik Tipikor",
    "title_en": "Anti-Corruption Investigator's Quiet Interrogation",
    "character_id": "Kompol Bagas Wicaksono",
    "character_en": "Senior Investigator Bagas Wicaksono",
    "role_id": "Penyidik Unit Tindak Pidana Korupsi (Tipikor)",
    "role_en": "Senior Anti-Corruption Unit Detective",
    "avatar": "👮‍♂️",
    "mood_id": "🧐 Menatap Dingin Membawa Berkas Rahasia",
    "mood_en": "🧐 Cold Stare with Sealed Wiretap Dossiers",
    "tension": "critical",
    "dialogue_id": "“Selamat malam, Pak Wali. Saya sengaja datang tanpa seragam. Kami mendeteksi penggelembungan dana Rp 18 Miliar pada proyek pengadaan alat kesehatan RSUD warisan walikota sebelumnya. Masalahnya, dua kepala dinas Anda yang sekarang ikut menandatangani pencairannya bulan lalu. Apakah Bapak mau membuka pintu penggeledahan, atau kita selesaikan 'di bawah meja'?”",
    "dialogue_en": "“Good evening, Mayor. I purposely came out of uniform. We uncovered an Rp 18 Billion markup in municipal hospital medical equipment procured by the previous administration. Problem is, two of your current cabinet heads signed off on disbursements last month. Do you greenlight an internal raid, or do we resolve this 'quietly'?”",
    "dilemma_id": "Membuka penggeledahan dinas akan mencoreng citra tahun pertama Anda, namun menutupi kasus membuat Anda menjadi target pemerasan penegak hukum.",
    "dilemma_en": "Allowing a police raid tarnishes your first year's prestige, but covering it up ensnares you in blackmail and criminal conspiracy.",
    "choices": [
      {
        "id": "full_transparency",
        "tone_id": "⚖️ Izinkan Penggeledahan Penuh & Bersihkan Pejabat",
        "tone_en": "⚖️ Authorize Full Police Raid & Purge Corrupt Officials",
        "text_id": "“Silakan geledah seluruh ruangan malam ini juga, Pak Bagas! Tidak ada perlindungan bagi pencuri uang rakyat di bawah pemerintahan saya, sekalipun mereka pejabat senior!”",
        "text_en": "“Search every office tonight, Detective Bagas! There is zero immunity for thieves of public money under my administration, even if they are senior bureaucrats!”",
        "fx": {
          "sat": 6,
          "risk": -10
        },
        "actors": {
          "Hukum": 15,
          "Media": 8,
          "Birokrasi": -10
        },
        "flag": "y1q4_cleansed_hospital_corruption",
        "consequence_id": "Kredibilitas antikorupsi Anda diakui nasional, namun jajaran birokrat internal menjadi panik dan lambat mengeksekusi anggaran.",
        "consequence_en": "Your clean governance credibility gains national praise, but terrified civil servants slow down budget execution out of fear."
      },
      {
        "id": "internal_settlement",
        "tone_id": "📁 Selesaikan via Inspektorat & Kembalikan Kerugian",
        "tone_en": "📁 Settle via Municipal Inspectorate & Mandate Restitution",
        "text_id": "“Beri saya waktu 30 hari. Saya perintahkan Inspektorat Daerah memaksa kedua kepala dinas mengembalikan uang Rp 18 Miliar ke kas kota tanpa perlu heboh di media massa.”",
        "text_en": "“Give me 30 days. I will order the Municipal Inspectorate to compel both agency heads to return the full Rp 18 Billion into the treasury without media circus.”",
        "fx": {
          "sat": 0,
          "apbd": 0.05,
          "risk": 4
        },
        "actors": {
          "Hukum": 4,
          "Birokrasi": 4
        },
        "flag": "y1q4_internal_recovery_settlement",
        "consequence_id": "Kas daerah terselamatkan secara diam-diam, namun penyidik menyimpan berkas ini sebagai senjata penekan di masa depan.",
        "consequence_en": "The treasury is secretly reimbursed, but investigators keep the dossier as political leverage for future leverage."
      },
      {
        "id": "cover_up",
        "tone_id": "🤫 Lindungi Kepala Dinas & Tutup Berkas",
        "tone_en": "🤫 Shield Agency Heads & Suppress the Investigation",
        "text_id": "“Kedua kepala dinas itu tulang punggung program prioritas saya. Mari kita cari 'jalan kekeluargaan'. Saya siapkan dana hibah khusus untuk posko kepolisian Anda.”",
        "text_en": "“Those two agency heads are linchpins of my key agenda. Let us find an amicable 'family resolution'. I will grant a dedicated municipal welfare fund for your precinct.”",
        "fx": {
          "sat": -4,
          "risk": 20,
          "apbd": -0.1
        },
        "actors": {
          "Hukum": 8,
          "Birokrasi": 12
        },
        "flag": "y1q4_covered_up_procurement_graft",
        "consequence_id": "Birokrasi berhutang budi pada Anda, namun bom waktu kasus Tipikor ini siap diledakkan lawan politik pada Tahun ke-4.",
        "consequence_en": "The bureaucracy owes you deep loyalty, but this corruption time-bomb will be weaponized by rivals in Year 4."
      }
    ]
  },
  {
    "quarter": 5,
    "year": 2,
    "quarterNum": 1,
    "title_id": "Pemerasan Paripurna Banggar DPRD",
    "title_en": "Parliamentary Budget Committee Extortion",
    "character_id": "Ir. Hendra Gunawan",
    "character_en": "Ir. Hendra Gunawan",
    "role_id": "Ketua Badan Anggaran (Banggar) DPRD",
    "role_en": "Chairman of the Parliamentary Budget Committee",
    "avatar": "👨‍⚖️",
    "mood_id": "💼 Mengancam Memangkas APBD 30%",
    "mood_en": "💼 Threatening a 30% Budget Deadlock",
    "tension": "critical",
    "dialogue_id": "“Pak Wali, LKPJ dan APBD Perubahan Anda ada di tangan palu saya. Kami minta plot anggaran dana aspirasi pokok pikiran (Pokir) sebesar Rp 80 Miliar untuk 50 anggota dewan tanpa verifikasi ketat. Kalau Bapak tolak, seluruh sidang paripurna kami boikot dan gaji ribuan honorer pemkot akan tertunda!”",
    "dialogue_en": "“Mayor, your Accountability Report and Supplementary Budget rest under my gavel. We demand an Rp 80 Billion discretionary Pokir constituency pork fund for all 50 legislators, free from strict verifications. Refuse, and we boycott the parliamentary plenary, freezing salaries for thousands of city workers!”",
    "dilemma_id": "Dana Pokir siluman DPRD memboroskan kas daerah, tetapi menolak mentah-mentah membuat roda birokrasi macet total.",
    "dilemma_en": "Legislative slush funds drain the public purse, but a flat refusal causes a total bureaucratic paralysis.",
    "choices": [
      {
        "id": "veto_pork",
        "tone_id": "🚫 Tolak Pokir Siluman & Siapkan Pergub Darurat",
        "tone_en": "🚫 Veto Pork Fund & Enact Emergency Mayoral Decree",
        "text_id": "“Silakan boikot, Pak Hendra! Saya tidak takut menggunakan Peraturan Walikota mendahului APBD sesuai Undang-Undang. Rakyat akan tahu siapa wakil rakyat yang menyandera gaji guru honorer!”",
        "text_en": "“Go ahead and boycott, Mr. Hendra! I am not afraid to execute the prior year's budget via Mayoral Decree under the law. The citizens will know exactly which legislators held teachers' salaries hostage!”",
        "fx": {
          "sat": 6,
          "apbd": 0.2
        },
        "actors": {
          "DPRD": -20,
          "Warga": 8,
          "Media": 8
        },
        "flag": "y2q1_vetoed_dprd_pork_barrel",
        "consequence_id": "Kas kota terselamatkan dari pemborosan pokir siluman, namun DPRD membentuk Pansus Hak Angket untuk mendesak pemakzulan Anda.",
        "consequence_en": "City funds are saved from pork-barrel waste, but the parliament initiates an Inquiry Committee aiming for your impeachment."
      },
      {
        "id": "digitize_pork",
        "tone_id": "💻 Izinkan via E-Pokir Transparan Terbuka",
        "tone_en": "💻 Mandate Digital Public E-Pokir Tagging",
        "text_id": "“Usulan konstituen Anda kami tampung, tetapi syarat mutlak: semua harus diunggah ke sistem e-Pokir publik lengkap dengan titik GPS proyek dan nama anggota dewan pengusul.”",
        "text_en": "“We accept constituent aspirations under one ironclad condition: every project must be uploaded to the public e-Pokir portal with GPS coordinates and the proposing lawmaker's name.”",
        "fx": {
          "sat": 2,
          "apbd": -0.1
        },
        "actors": {
          "DPRD": 6,
          "Warga": 4
        },
        "flag": "y2q1_e_pokir_transparency",
        "consequence_id": "Sebagian dewan menggerutu karena sulit mengakali proyek, namun situasi politik paripurna tetap aman dan terkendali.",
        "consequence_en": "Lawmakers grumble over strict digital audits, but the plenary vote passes smoothly without shutdown."
      },
      {
        "id": "surrender_pork",
        "tone_id": "🤝 Setujui Demi Kenyamanan Politik",
        "tone_en": "🤝 Acquiesce for Parliamentary Harmony",
        "text_id": "“Sudahlah, saya tidak ingin ribut di media. Silakan alokasikan Pokir tersebut melalui dinas terkait, yang penting hubungan pemkot dan legislatif tetap harmonis.”",
        "text_en": "“Let us not fight in the press. Allocate the funds through relevant departments, as long as executive-legislative harmony remains undisturbed.”",
        "fx": {
          "sat": -5,
          "apbd": -0.3,
          "risk": 15
        },
        "actors": {
          "DPRD": 18,
          "Warga": -6
        },
        "flag": "y2q1_surrendered_to_pork_barrel",
        "consequence_id": "Paripurna meloloskan APBD dengan tepuk tangan meriah, namun dana publik menguap ke proyek-proyek fiktif binaan dewan.",
        "consequence_en": "The plenary passes the budget with standing ovations, but public funds leak into phantom contractor shell companies."
      }
    ]
  },
  {
    "quarter": 6,
    "year": 2,
    "quarterNum": 2,
    "title_id": "Air Mata & Tekanan Keluarga Pribadi",
    "title_en": "Spousal Tears & Family Scandals",
    "character_id": "{{SPOUSE_NAME}}",
    "character_en": "{{SPOUSE_NAME}}",
    "role_id": "Pasangan Walikota & Ketua TP PKK Kota",
    "role_en": "Mayoral Spouse & Civic Welfare Foundation Chair",
    "avatar": "👩‍🦰",
    "mood_id": "🥺 Menangis Membela Saudara Kandung",
    "mood_en": "🥺 Weeping in Defense of Sibling",
    "tension": "medium",
    "dialogue_id": "“Mas... adik kandungku Anto ditangkap intel kejaksaan siang tadi. Katanya dia menerima transfer dana pelicin proyek revitalisasi pasar tradisional. Wartawan sudah berkumpul di depan pagar rumah pribadi kita! Mas harus telepon Kajari sekarang juga untuk bebaskan Anto... kalau tidak, nama besar keluarga kita hancur lebur!”",
    "dialogue_en": "“Dear... my younger brother Anto was detained by prosecutors this afternoon. They allege he took kickbacks on the traditional market overhaul project. Reporters are swarming our private home! You must call the Chief Prosecutor right now to release him... otherwise our family honor is ruined!”",
    "dilemma_id": "Menyelamatkan adik ipar menyalahgunakan kekuasaan demi keluarga, namun membiarkannya dipenjara memicu keretakan rumah tangga yang parah.",
    "dilemma_en": "Intervening abuses your power for family nepotism, but letting him face prison causes severe domestic turmoil.",
    "choices": [
      {
        "id": "impartial_law",
        "tone_id": "⚖️ Tolak Intervensi: Hukum Tetap Hukum",
        "tone_en": "⚖️ Refuse Intervention: Justice Must Take Its Course",
        "text_id": "“{{SPOUSE_FIRSTNAME}}, dengarkan aku. Aku sangat menyayangi keluargamu, tapi hukum tidak boleh tebang pilih! Jika Anto bersalah, dia harus bertanggung jawab di pengadilan. Kita sewa pengacara terbaik, tapi aku tidak akan menyentuh jaksa!”",
        "text_en": "“{{SPOUSE_FIRSTNAME}}, listen to me. I love your family dearly, but justice cannot play favorites! If Anto committed a crime, he must answer in court. We will hire top legal defense, but I will not tamper with prosecutors!”",
        "fx": {
          "sat": 8,
          "risk": -10
        },
        "actors": {
          "Hukum": 12,
          "Media": 10
        },
        "flag": "y2q2_let_family_face_justice",
        "consequence_id": "Rakyat dan media kagum atas ketegasan moral Anda, meskipun hubungan rumah tangga Anda membeku selama berbulan-bulan.",
        "consequence_en": "The public and press revere your unimpeachable integrity, though your home life turns bitterly cold for months."
      },
      {
        "id": "quiet_resignation",
        "tone_id": "🚪 Paksa Anto Mundur & Restitusi Penuh",
        "tone_en": "🚪 Compel Resignation & Full Civil Restitution",
        "text_id": "“Aku tidak akan menyuap jaksa. Anto harus mengembalikan seluruh uang suap tersebut detik ini juga, mundur dari seluruh asosiasi pasar, dan mengasingkan diri keluar kota sampai proses hukum selesai.”",
        "text_en": "“I will not bribe any prosecutor. Anto must return every penny of that kickback this very hour, resign from all market guilds, and leave town until legal scrutiny settles.”",
        "fx": {
          "sat": 1,
          "risk": 5
        },
        "actors": {
          "Hukum": -2,
          "Media": -4
        },
        "flag": "y2q2_family_quiet_restitution",
        "consequence_id": "Skandal berhasil diredam tanpa sidang heboh, namun rumor 'perlakuan istimewa keluarga walikota' mulai beredar di medsos.",
        "consequence_en": "The scandal is quieted without viral trials, but rumors of mayoral family privilege simmer on social media."
      },
      {
        "id": "abuse_power",
        "tone_id": "📞 Telepon Kajari & Hentikan Kasus",
        "tone_en": "📞 Pull Strings with the Chief Prosecutor",
        "text_id": "“Tenang, Bu. Hapus air matamu. Aku hubungi Kajari sekarang untuk mengalihkan status Anto hanya sebagai saksi ahli, dan kita alokasikan hibah renovasi kantor kejaksaan tahun depan.”",
        "text_en": "“Hush now, dear. Dry your tears. I will phone the Chief Prosecutor to downgrade Anto to a witness, and we will fund a plush office renovation grant for them next year.”",
        "fx": {
          "sat": -6,
          "risk": 25,
          "apbd": -0.1
        },
        "actors": {
          "Hukum": 8,
          "Media": -10
        },
        "flag": "y2q2_shielded_corrupt_family",
        "consequence_id": "Keluarga selamat dari jeruji besi, namun berkas kasus ini disimpan di brankas kejaksaan sebagai tali penjerat leher politik Anda.",
        "consequence_en": "Family is spared incarceration, but the prosecutor tucks the wiretaps into a safe as lethal blackmail against you."
      }
    ]
  },
  {
    "quarter": 7,
    "year": 2,
    "quarterNum": 3,
    "title_id": "Manuver Kudeta Wakil Walikota",
    "title_en": "The Vice Mayor's Coup Maneuver",
    "character_id": "{{VICE_MAYOR_NAME}}",
    "character_en": "{{VICE_MAYOR_NAME}}",
    "role_id": "Wakil Walikota Nusapura",
    "role_en": "Vice Mayor of Nusapura",
    "avatar": "👨‍💼",
    "mood_id": "😏 Tersenyum Dingin Membawa Dukungan Ormas",
    "mood_en": "😏 Smirking with Backing from Militant Guilds",
    "tension": "high",
    "dialogue_id": "“Pak Wali, mari bicara dari hati ke hati. Selama dua tahun ini saya merasa hanya dijadikan pajangan potong pita. Sementara itu, jaringan ormas dan tokoh agama kota lebih mendengar kata-kata saya. Saya minta kewenangan perizinan investasi dan mutasi pejabat diserahkan ke meja saya. Jika tidak, saya umumkan perpecahan koalisi kita besok!”",
    "dialogue_en": "“Mr. Mayor, let us speak candidly. For two years, I have been treated as a ceremonial ribbon-cutter. Yet the grassroots guilds and religious elders answer directly to my call. Hand over licensing authority and bureaucratic personnel reshuffles to my desk. If not, I announce our coalition divorce tomorrow!”",
    "dilemma_id": "Wawalkot mengancam memecah birokrasi dan memobilisasi ormas. Memberinya kewenangan mutasi berisiko melahirkan 'kerajaan politik kembar' di Balaikota.",
    "dilemma_en": "The Vice Mayor threatens to fracture the civil service. Granting him hiring powers creates a rival shadow government in City Hall.",
    "choices": [
      {
        "id": "purge_rival",
        "tone_id": "⚡ Pangkas Staf Wawalkot & Lawan Terbuka",
        "tone_en": "⚡ Strip Vice Mayoral Portfolios & Counter Openly",
        "text_id": "“Nusapura hanya punya SATU Walikota! Jika Anda ingin menjadi Walikota, tunggu Pilkada berikutnya. Saya cabut semua delegasi wewenang Anda dan isolasi loyalis Anda di Balaikota!”",
        "text_en": "“Nusapura has only ONE Mayor! If you want to run this city, wait for the next election. I am revoking your delegated portfolios and isolating your loyalists today!”",
        "fx": {
          "sat": 4,
          "pol": -15
        },
        "actors": {
          "Birokrasi": 6,
          "DPRD": -8
        },
        "flag": "y2q3_purged_vice_mayor",
        "consequence_id": "Anda menegaskan kepemimpinan tunggal tanpa kompromi, namun Wawalkot resmi menyeberang dan menjadi oposisi paling agresif.",
        "consequence_en": "You cemented undisputed executive supremacy, but the Vice Mayor defected to lead a fiery opposition bloc."
      },
      {
        "id": "diplomatic_taskforce",
        "tone_id": "🤝 Beri Posisi Strategis Satgas Penanggulangan Kemiskinan",
        "tone_en": "🤝 Delegate Poverty Eradication Taskforce Leadership",
        "text_id": "“Pak {{VICE_MAYOR_FIRSTNAME}}, jangan terburu nafsu. Birokrasi tidak boleh pecah. Saya tunjuk Anda sebagai Ketua Satgas Percepatan Kemiskinan & UMKM dengan anggaran otonom. Tunjukkan karya nyata Anda di sana.”",
        "text_en": "“{{VICE_MAYOR_FIRSTNAME}}, let us not act in haste. The civil service cannot be fractured. I appoint you Chief of the Poverty & Small Enterprise Taskforce with dedicated funding. Prove your worth there.”",
        "fx": {
          "sat": 4,
          "apbd": -0.1
        },
        "actors": {
          "Birokrasi": 8,
          "Warga": 4
        },
        "flag": "y2q3_delegated_taskforce_vice",
        "consequence_id": "Manuver kudeta berhasil diredam secara elegan menjadi kompetisi prestasi yang menguntungkan warga miskin kota.",
        "consequence_en": "The revolt is tactfully defused into a constructive performance competition that directly aids low-income residents."
      },
      {
        "id": "surrender_licensing",
        "tone_id": "📑 Bagi Kekuasaan Perizinan Demi Ketenteraman",
        "tone_en": "📑 Concede Licensing Authority for Peace",
        "text_id": "“Baiklah, daripada kita ribut di depan publik yang bikin investor kabur, saya serahkan urusan perizinan UKM dan pasar kepada Anda.”",
        "text_en": "“Very well, rather than bickering publicly and scaring investors, I hand commercial licensing oversight over to your desk.”",
        "fx": {
          "sat": -4,
          "risk": 15
        },
        "actors": {
          "Birokrasi": -10,
          "Bisnis": 4
        },
        "flag": "y2q3_surrendered_licensing_to_vice",
        "consequence_id": "Balaikota tenang sementara, namun dualisme kepemimpinan memicu pungutan liar tak terkendali di dinas perizinan.",
        "consequence_en": "City Hall enjoys temporary peace, but administrative dualism breeds unchecked extortion rings in the licensing office."
      }
    ]
  },
  {
    "quarter": 8,
    "year": 2,
    "quarterNum": 4,
    "title_id": "Rekaman Sadapan Jurnalis Investigasi",
    "title_en": "Investigative Reporter's Leaked Audio Tapes",
    "character_id": "Rian Pratama",
    "character_en": "Rian Pratama",
    "role_id": "Redaktur Utama Investigasi 'Radar Nusa'",
    "role_en": "Chief Investigative Editor at 'Radar Nusa'",
    "avatar": "🧑‍💻",
    "mood_id": "🕵️ Menatap Tajam Memegang Voice Recorder",
    "mood_en": "🕵️ Piercing Stare Holding Audio Dictaphone",
    "tension": "critical",
    "dialogue_id": "“Pak Wali, kami memegang rekaman audio rapat tertutup Anda saat memerintahkan pemindahan anggaran tanggap darurat banjir ke proyek taman kota. Besok pagi naskah investigasi 'Dosa Tersembunyi Balaikota' terbit di halaman depan dan podcast viral kami. Apakah Anda ingin mengonfirmasi, atau ada yang ingin ditawarkan sebelum naik cetak?”",
    "dialogue_en": "“Mayor, we have the audio recording of your executive session diverting emergency flood response reserves into the downtown beautification fund. Tomorrow morning, our explosive expose 'City Hall's Hidden Sins' goes live on our front page and viral podcast. Do you wish to clarify, or negotiate before we print?”",
    "dilemma_id": "Pemberitaan investigasi dapat menghancurkan elektabilitas tahun ke-2, namun membungkam media dengan suap atau ancaman adalah dosa fatal demokrasi.",
    "dilemma_en": "The investigative scoop risks cratering your approval, but silencing the free press with bribes or intimidation poisons democracy.",
    "choices": [
      {
        "id": "open_interview",
        "tone_id": "🎙️ Hadapi Wawancara Terbuka & Buka Konteks Sebenarnya",
        "tone_en": "🎙️ On-the-Record Live Interview & Full Context",
        "text_id": "“Nyalakan alat rekam Anda sekarang, Bung Rian! Saya jelaskan di depan kamera: pengalihan itu dilakukan karena kajian teknis drainase sudah selesai dan taman itu berfungsi sebagai resapan biopori raksasa. Buka semuanya tanpa ada yang ditutupi!”",
        "text_en": "“Turn your recorder on right now, Rian! I will explain on camera: that reallocation occurred because the drainage engineering was finished and the park acts as a giant stormwater retention sponge. Air the full tape without cuts!”",
        "fx": {
          "sat": 5,
          "risk": -5
        },
        "actors": {
          "Media": 14,
          "Warga": 6
        },
        "flag": "y2q4_braved_media_investigation",
        "consequence_id": "Keberanian Anda menghadapi pers secara terbuka mengubah potensi skandal menjadi liputan keberhasilan tata ruang modern.",
        "consequence_en": "Your courage in confronting the press head-on transforms a brewing scandal into acclaim for innovative urban drainage."
      },
      {
        "id": "ad_spending_muzzle",
        "tone_id": "🗞️ Guyur Iklan Advertorial Pemkot untuk Meredam",
        "tone_en": "🗞️ Buy Mega Advertorial Contracts to Soften the Blow",
        "text_id": "“Bung Rian, Radar Nusa adalah mitra strategis kami. Mari kita buat kontrak advetorial sosialisasi pembangunan senilai Rp 500 Juta untuk media Anda, dan tunda liputan ini sampai evaluasi akhir tahun.”",
        "text_en": "“Rian, Radar Nusa is our strategic partner. Let us sign an Rp 500 Million municipal PR advertorial campaign with your paper, and shelve this story until year-end review.”",
        "fx": {
          "sat": -2,
          "apbd": -0.05,
          "risk": 8
        },
        "actors": {
          "Media": 6,
          "Hukum": -4
        },
        "flag": "y2q4_bought_media_silence",
        "consequence_id": "Liputan kritis diredam sementara, namun redaksi lain mulai mencium bau pemborosan anggaran iklan pemkot.",
        "consequence_en": "The expose is shelved for now, but rival media houses sniff out corrupt municipal advertorial payoffs."
      },
      {
        "id": "intimidation",
        "tone_id": "⚖️ Somasi Hukum & Boikot Akses Liputan Balaikota",
        "tone_en": "⚖️ Retaliate with Lawsuits & Revoke Press Badges",
        "text_id": "“Rekaman itu ilegal dan melanggar UU ITE! Jika berita fitnah itu terbit besok pagi, saya tuntut perdata Rp 50 Miliar dan seluruh jurnalis Radar Nusa dicabut akses liputannya dari Balaikota!”",
        "text_en": "“That recording is illegal under wiretap statutes! Publish that libel tomorrow, and I will sue for Rp 50 Billion in damages and strip all your reporters of their City Hall press badges!”",
        "fx": {
          "sat": -10,
          "risk": 15
        },
        "actors": {
          "Media": -20,
          "Warga": -8
        },
        "flag": "y2q4_intimidated_press",
        "consequence_id": "Aliansi Jurnalis Nasional melancarkan kampanye boikot terhadap Anda, mencap Anda sebagai musuh kebebasan pers.",
        "consequence_en": "The National Journalist Union launches a fierce boycott campaign, branding you an authoritarian foe of press freedom."
      }
    ]
  },
  {
    "quarter": 9,
    "year": 3,
    "quarterNum": 1,
    "title_id": "Konfrontasi Panglima Ormas Garda Nusa",
    "title_en": "Confrontation with the Grassroots Warlord",
    "character_id": "Bang Jampang",
    "character_en": "Bang Jampang",
    "role_id": "Panglima Besar Ormas Garda Nusapura",
    "role_en": "Supreme Commander of Garda Nusapura Militia",
    "avatar": "🧔",
    "mood_id": "⚔️ Menggebrak Meja Didampingi Ratusan Anggota",
    "mood_en": "⚔️ Slamming the Desk Backed by Hundreds of Men",
    "tension": "critical",
    "dialogue_id": "“Pak Wali! Satpol PP Anda kemarin berani-beraninya membongkar posko kami dan menyita lahan parkir basah di pasar induk! Kami ini yang jaga keamanan kampung waktu Pilkada Anda! Mulai hari ini, pemkot wajib beri jatah resmi dana hibah APBD Rp 15 Miliar per tahun untuk ormas kami, atau pasar induk kami boikot total!”",
    "dialogue_en": "“Mayor! Your municipal police had the audacity to demolish our guard posts and seize our lucrative parking slots at the central wholesale market! We were the ones guarding your precinct polling stations! From today, the city must mandate an annual Rp 15 Billion grant for our organization, or we shut the market down!”",
    "dilemma_id": "Memberi hibah APBD kepada ormas adalah pemerasan terselubung, tetapi menindak keras berisiko memicu tawuran massal.",
    "dilemma_en": "Funding paramilitary guilds is glorified extortion, but crushing them risks violent street riots and supply disruptions.",
    "choices": [
      {
        "id": "crush_thugs",
        "tone_id": "👮 Operasi Gabungan TNI-Polri Sikat Premanisme",
        "tone_en": "👮 Joint Military-Police Crackdown on Protection Rackets",
        "text_id": "“Tidak ada negara di dalam negara! Nusapura diatur oleh hukum, bukan oleh golok dan premanisme ormas Anda! Saya perintahkan Kapolres dan Dandim bersihkan seluruh posko liar sore ini juga!”",
        "text_en": "“There is no state within a state! Nusapura is governed by the rule of law, not your militia's muscle! I have instructed the Police Chief and Military Commander to dismantle every illegal post today!”",
        "fx": {
          "sat": 8,
          "risk": -10
        },
        "actors": {
          "Warga": 12,
          "Bisnis": 10,
          "Hukum": 10
        },
        "flag": "y3q1_crushed_paramilitary_extortion",
        "consequence_id": "Pasar induk bebas dari pungli dan pedagang bersorak gembira, meski Anda harus dikawal ketat aparat dari ancaman fisik.",
        "consequence_en": "Markets are liberated from extortion as merchants rejoice, though you require 24/7 security against physical threats."
      },
      {
        "id": "empower_legal",
        "tone_id": "🤝 Alihkan Menjadi Petugas Parkir Resmi BUMD",
        "tone_en": "🤝 Professionalize Members into Certified Utility Staff",
        "text_id": "“Saya tidak akan beri uang tunai cuma-cuma. Anggota Anda yang memenuhi syarat kami latih, beri seragam resmi, dan pekerjakan sebagai juru parkir e-parking BUMD dengan gaji UMK resmi.”",
        "text_en": "“I will not hand out free taxpayer cash. Your able-bodied members will be trained, uniformed, and hired as official municipal e-parking attendants earning legal minimum wage.”",
        "fx": {
          "sat": 4,
          "apbd": -0.05
        },
        "actors": {
          "Warga": 6,
          "Bisnis": 4
        },
        "flag": "y3q1_formalized_parking_thugs",
        "consequence_id": "Potensi premanisme dijinakkan menjadi tenaga kerja resmi pemkot yang meningkatkan retribusi daerah secara tertib.",
        "consequence_en": "Street extortion is channeled into formalized municipal personnel, boosting parking revenues under orderly oversight."
      },
      {
        "id": "pay_protection",
        "tone_id": "💰 Bayar Dana Hibah Pembinaan Demi Stabilitas",
        "tone_en": "💰 Disburse 'Civic Harmony' Grants for Peace",
        "text_id": "“Baiklah Bang Jampang, jangan sampai pasar ricuh. Kami cairkan dana hibah pembinaan kepemudaan melalui dinas sosial, yang penting anggota Anda jaga kondusivitas kota.”",
        "text_en": "“Very well, Bang Jampang, let us keep the peace. We will disburse youth harmony development grants via social services, provided your men maintain absolute order.”",
        "fx": {
          "sat": -6,
          "apbd": -0.15,
          "risk": 18
        },
        "actors": {
          "Bisnis": -6,
          "Warga": -6
        },
        "flag": "y3q1_bribed_paramilitary_guild",
        "consequence_id": "Kota tampak tenang di permukaan, tetapi warga mengeluhkan premanisme yang semakin merajalela dengan restu pemkot.",
        "consequence_en": "The city looks quiet on the surface, but citizens suffer rampant daily extortion operating with municipal impunity."
      }
    ]
  },
  {
    "quarter": 10,
    "year": 3,
    "quarterNum": 2,
    "title_id": "Ultimatum Pembekuan DAU oleh Irjen Kemendagri",
    "title_en": "Central Government Fiscal Sanctions Ultimatum",
    "character_id": "Dr. Aris Sudibyo",
    "character_en": "Dr. Aris Sudibyo",
    "role_id": "Inspektur Jenderal Kementerian Dalam Negeri RI",
    "role_en": "Inspector General of the Ministry of Home Affairs",
    "avatar": "👨‍💼",
    "mood_id": "📋 Menunjukkan Rapor Merah Serapan Anggaran",
    "mood_en": "📋 Presenting Red-Flagged Budget Execution Audits",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, realisasi belanja modal infrastruktur Anda hingga pertengahan tahun baru 28%! Banyak dana mengendap di bank daerah demi mengejar bunga deposito. Kemenkeu dan Kemendagri siap menjatuhkan sanksi penundaan Dana Alokasi Umum (DAU) sebesar Rp 300 Miliar jika dalam 60 hari serapan tidak digenjot!”",
    "dialogue_en": "“Mayor, your municipal capital infrastructure disbursement by mid-year stands at an abysmal 28%! Trillions are idling in municipal bank deposit accounts chasing interest. The Ministries of Finance and Home Affairs will freeze Rp 300 Billion in General Allocation Grants (DAU) if execution is not accelerated within 60 days!”",
    "dilemma_id": "Mempercepat serapan anggaran secara tergesa-gesa rawan memicu proyek asal jadi, namun terkena sanksi DAU akan melumpuhkan kas kota.",
    "dilemma_en": "Rushing budget execution risks substandard infrastructure construction, but taking the DAU sanction cripples city cash flow.",
    "choices": [
      {
        "id": "accelerate_quality",
        "tone_id": "⚡ Buka Tender Cepat Multi-Shift 24 Jam dengan Pengawasan BPKP",
        "tone_en": "⚡ Fast-Track 24-Hour Shifts under BPKP State Audit Oversight",
        "text_id": "“Kami terima peringatan ini, Pak Irjen. Hari ini saya terbitkan instruksi kerja lembur 3 shift untuk seluruh proyek fisik, didampingi langsung auditor BPKP agar mutu dan spesifikasi tetap terjamin!”",
        "text_en": "“We acknowledge this warning, Inspector General. Today I issue an executive order mandating 3-shift 24-hour construction across all public works, shadowed directly by state BPKP auditors to safeguard quality!”",
        "fx": {
          "sat": 4,
          "infra": 6,
          "apbd": -0.1
        },
        "actors": {
          "Birokrasi": 6,
          "Warga": 6
        },
        "flag": "y3q2_accelerated_infrastructure_audited",
        "consequence_id": "Serapan anggaran melonjak hingga 92% dan kota mendapat penghargaan dari Presiden atas percepatan infrastruktur berkualitas.",
        "consequence_en": "Disbursement surges to 92%, earning the city a Presidential Award for high-speed, quality infrastructure delivery."
      },
      {
        "id": "defend_prudence",
        "tone_id": "🛡️ Pertahankan Kehati-hatian & Surati Menteri Keuangan",
        "tone_en": "🛡️ Stand Ground on Fiscal Prudence & Appeal to the Minister",
        "text_id": "“Kami sengaja tidak gegabah mencairkan dana demi mencegah kontraktor nakal. Saya akan terbang ke Jakarta menemui Menkeu untuk memaparkan jadwal lelang kami yang matang tanpa perlu sanksi.”",
        "text_en": "“We intentionally refuse to rush disbursements to filter out shoddy contractors. I will fly to Jakarta to brief the Finance Minister on our prudent procurement schedule without sanctions.”",
        "fx": {
          "sat": -2,
          "risk": -5
        },
        "actors": {
          "Birokrasi": 4,
          "DPRD": -6
        },
        "flag": "y3q2_appealed_central_sanctions",
        "consequence_id": "Sanksi DAU ditangguhkan sementara berkat lobi diplomatik, namun DPRD menuduh kepemimpinan Anda lamban dan peragu.",
        "consequence_en": "The fiscal penalty is postponed via diplomatic lobbying, but local lawmakers accuse you of paralysis and indecision."
      },
      {
        "id": "panic_spending",
        "tone_id": "💨 Belanja Kilat Beli Aset Demi Angka di Atas Kertas",
        "tone_en": "💨 Panic Purchase Municipal Vehicles to Inflate Statistics",
        "text_id": "“Instruksikan seluruh dinas beli mobil operasional baru, laptop, dan renovasi kantor dinas sekarang juga! Yang penting serapan hijau di sistem Kemendagri!”",
        "text_en": "“Order every agency to purchase fleet vehicles, laptops, and redecorate offices immediately! All that matters is turning the execution bar green on the Ministry dashboard!”",
        "fx": {
          "sat": -8,
          "apbd": -0.25,
          "risk": 15
        },
        "actors": {
          "Birokrasi": -8,
          "Media": -8
        },
        "flag": "y3q2_panic_budget_dumping",
        "consequence_id": "Rapor Kemendagri terselamatkan, namun warga mencibir pemborosan anggaran untuk kemewahan mobil pejabat.",
        "consequence_en": "The ministry metrics are saved on paper, but citizens rage over wasteful spending on luxury mayoral fleet sedans."
      }
    ]
  },
  {
    "quarter": 11,
    "year": 3,
    "quarterNum": 3,
    "title_id": "Kartel RS Swasta & Penolakan Pasien BPJS",
    "title_en": "Private Hospital Syndicate & BPJS Healthcare Lockout",
    "character_id": "dr. Michelle Chandra",
    "character_en": "Dr. Michelle Chandra",
    "role_id": "Ketua Konsorsium Rumah Sakit Swasta Nusapura",
    "role_en": "President of the Nusapura Private Hospital Consortium",
    "avatar": "👩‍⚕️",
    "mood_id": "🧊 Mengancam Menutup IGD Pasien BPJS",
    "mood_en": "🧊 Threatening to Shut Emergency Wards to Subsidized Patients",
    "tension": "critical",
    "dialogue_id": "“Pak Wali, klaim selisih tarif BPJS Kesehatan yang tertunggak di pemkot sudah tembus Rp 45 Miliar! Kami ini institusi swasta yang harus bayar gaji dokter spesialis dan beli obat impor. Jika dalam 7 hari pemkot tidak talangi tunai dari APBD, seluruh 12 RS swasta kami akan tolak pasien BPJS!”",
    "dialogue_en": "“Mr. Mayor, overdue municipal BPJS universal healthcare claim arrears have reached Rp 45 Billion! We are private hospitals that must pay specialist doctors and import life-saving medicine. If the city does not cash-reimburse this from the APBD in 7 days, all 12 private hospitals will lock out subsidized BPJS patients!”",
    "dilemma_id": "Klaim rumah sakit swasta membebani kas APBD di tengah tahun, tetapi penolakan pasien dapat memicu gelombang kematian warga miskin.",
    "dilemma_en": "Bailing out private hospitals burdens the city treasury, but locking out poor patients will spark needless deaths on ER floors.",
    "choices": [
      {
        "id": "bailout_audit",
        "tone_id": "💉 Talangi Kas Darurat APBD Disertai Audit Ketat",
        "tone_en": "💉 Emergency APBD Bailout Backed by Forensic Medical Audit",
        "text_id": "“Keselamatan nyawa warga tidak bisa ditawar satu detik pun! Saya cairkan pos belanja tidak terduga Rp 45 Miliar sekarang juga. Tetapi tim BPKP akan mengaudit setiap tagihan obat Anda sampai ke sen terakhir!”",
        "text_en": "“Human life cannot be bartered for a single second! I release Rp 45 Billion from emergency contingency funds right now. However, state forensic auditors will scrutinize every medicine billing down to the cent!”",
        "fx": {
          "sat": 8,
          "apbd": -0.25
        },
        "actors": {
          "Warga": 14,
          "Bisnis": 6
        },
        "flag": "y3q3_bailed_out_healthcare_crisis",
        "consequence_id": "Ribuan pasien tertolong dan tidak ada IGD yang tutup; audit menemukan sejumlah penggelembungan yang dipaksa kembalikan.",
        "consequence_en": "Thousands of patients are treated without closure; forensic audits subsequently claw back inflated pharmaceutical markups."
      },
      {
        "id": "expand_public_hospital",
        "tone_id": "🏥 Tolak Ancaman & Mobilisasi RSUD Daerah 24 Jam",
        "tone_en": "🏥 Defy the Syndicate & Expand Public Hospital Capacity",
        "text_id": "“Jangan jadikan nyawa rakyat sebagai sandera bisnis, Dokter! Saya tidak akan tunduk pada pemerasan kartel. Seluruh RSUD pemerintah kota saya perintahkan pasang tenda darurat dan rawat semua warga gratis!”",
        "text_en": "“Do not hold innocent lives hostage for corporate greed, Doctor! I will not bow to syndicate extortion. I order all public municipal hospitals to erect triage wards and treat every citizen free of charge!”",
        "fx": {
          "sat": 3,
          "health": 4,
          "apbd": -0.1
        },
        "actors": {
          "Bisnis": -12,
          "Warga": 8
        },
        "flag": "y3q3_defied_hospital_syndicate",
        "consequence_id": "Kemandirian fasilitas kesehatan publik menguat pesat, namun konsorsium swasta menggugat pemkot ke pengadilan niaga.",
        "consequence_en": "Public hospital resilience expands dramatically, though the private consortium retaliates with lawsuits in commercial court."
      },
      {
        "id": "ration_coverage",
        "tone_id": "📉 Batasi Layanan BPJS Gratis untuk Penyakit Berat",
        "tone_en": "📉 Ration Healthcare Services to Cut Treasury Strain",
        "text_id": "“Kas pemkot sedang menipis. Kami hanya bisa bayar separuh klaim, dan RS dipersilakan membatasi kuota rawat inap untuk kasus-kasus ringan.”",
        "text_en": "“Our treasury is strained. We can only clear half the arrears, and hospitals are authorized to ration beds for non-critical ailments.”",
        "fx": {
          "sat": -10,
          "health": -8
        },
        "actors": {
          "Warga": -16,
          "Bisnis": -4
        },
        "flag": "y3q3_rationed_public_healthcare",
        "consequence_id": "Antrean pasien BPJS telantar di koridor rumah sakit menjadi skandal kemanusiaan yang mencoreng reputasi kepemimpinan Anda.",
        "consequence_en": "Abandoned patients waiting on hospital corridors becomes a humanitarian scandal that severely batters your moral legacy."
      }
    ]
  },
  {
    "quarter": 12,
    "year": 3,
    "quarterNum": 4,
    "title_id": "Tawaran Koper Tunai Kontraktor Tol Lingkar",
    "title_en": "Ring Road Contractor's Cash Briefcase Bribe",
    "character_id": "Kuntoro Sanjaya",
    "character_en": "Kuntoro Sanjaya",
    "role_id": "Direktur Utama Konsorsium Jalan Tol Lingkar Nusapura",
    "role_en": "CEO of the Nusapura Outer Ring Road Tollway Consortium",
    "avatar": "👨‍🦳",
    "mood_id": "💼 Membuka Koper Berisi Uang Tunai Rp 10 Miliar",
    "mood_en": "💼 Opening a Briefcase Packed with Rp 10 Billion Cash",
    "tension": "critical",
    "dialogue_id": "“Pak Wali, kita berdua tahu proyek flyover lingkar kota ini terlambat 6 bulan karena tanah ambles. Surat denda penalti keterlambatan Rp 25 Miliar sudah di meja Bapak. Di koper ini ada Rp 10 Miliar uang segar tanpa jejak perbankan. Cukup tanda tangani addendum perpanjangan waktu tanpa denda karena alasan force majeure, dan koper ini menjadi dana taktis Pilkada periode kedua Bapak.”",
    "dialogue_en": "“Mayor, we both know the outer flyover is 6 months behind schedule due to soil settlement. The Rp 25 Billion contractual delay penalty notice sits on your desk. In this briefcase is Rp 10 Billion in untraceable cash. Simply sign a force majeure time-extension addendum waiving the penalty, and this briefcase becomes your campaign war-chest for re-election.”",
    "dilemma_id": "Menerima suap memberi amunisi kampanye tanpa batas, tetapi satu tanda tangan palsu adalah tiket emas menuju penjara Sukamiskin.",
    "dilemma_en": "Taking the bribe funds an unstoppable re-election campaign, but one fraudulent signature guarantees a prison sentence.",
    "choices": [
      {
        "id": "sting_operation",
        "tone_id": "🚨 Jebak Kontraktor & Gandeng Satgas OTT KPK",
        "tone_en": "🚨 Trap the Contractor in an Anti-Corruption Sting",
        "text_id": "“Tutup koper Anda sekarang, Pak Kuntoro! Ruangan ini sudah dipasangi kamera pengawas kejaksaan. Anda bukan hanya kena denda Rp 25 Miliar, tapi malam ini Anda tidur di sel tahanan Tipikor!”",
        "text_en": "“Shut that briefcase right now, Mr. Kuntoro! This office has been wired by prosecutors. You will not only pay the full Rp 25 Billion penalty, but you will spend tonight in a detention cell!”",
        "fx": {
          "sat": 10,
          "apbd": 0.25,
          "risk": -15
        },
        "actors": {
          "Hukum": 20,
          "Warga": 12,
          "Media": 12,
          "Bisnis": -10
        },
        "flag": "y3q4_trapped_corrupt_contractor",
        "consequence_id": "Operasi Tangkap Tangan (OTT) ini menggegerkan nusantara; integritas Anda diakui sebagai teladan walikota paling bersih.",
        "consequence_en": "The sting operation sends shockwaves across the nation; your name is celebrated as the vanguard of incorruptible governance."
      },
      {
        "id": "reject_no_sting",
        "tone_id": "🚫 Tolak Koper & Tagih Denda Sesuai Kontrak",
        "tone_en": "🚫 Reject the Bribe & Enforce Full Contractual Penalties",
        "text_id": "“Bawa pulang koper kotor ini sebelum saya panggil Satpol PP! Saya tidak menerima suap sepeser pun. Denda Rp 25 Miliar wajib disetor ke kas kota dalam 14 hari, atau proyek kami putus kontrak!”",
        "text_en": "“Take that filthy suitcase out before I summon the municipal guards! I don't touch bribes. The Rp 25 Billion penalty must be paid into the treasury in 14 days, or your contract is terminated!”",
        "fx": {
          "sat": 5,
          "apbd": 0.2,
          "risk": -5
        },
        "actors": {
          "Hukum": 8,
          "Bisnis": -6
        },
        "flag": "y3q4_enforced_contract_fines",
        "consequence_id": "Kas kota mendapat pemasukan denda proyek, dan kontraktor terpaksa menyelesaikan flyover dengan spesifikasi ketat.",
        "consequence_en": "The treasury secures sizable penalty revenues, forcing the contractor to accelerate construction under strict supervision."
      },
      {
        "id": "accept_kickback",
        "tone_id": "🤫 Terima Koper Demi Dana Kampanye Periode Kedua",
        "tone_en": "🤫 Accept the Briefcase to Fund the Re-Election Machine",
        "text_id": "“Bencana tanah ambles memang di luar kendali manusia. Saya tanda tangani addendum perpanjangan 6 bulan tanpa denda. Pastikan flyover selesai sebelum masa jabatan saya berakhir.”",
        "text_en": "“Soil instability was indeed an act of nature. I will sign the 6-month penalty-free extension. Just ensure the flyover opens before my first term concludes.”",
        "fx": {
          "sat": -4,
          "risk": 35
        },
        "actors": {
          "Bisnis": 14,
          "Hukum": -15
        },
        "flag": "y3q4_took_contractor_kickback",
        "consequence_id": "Dana kampanye Anda melimpah ruah, namun seorang staf dinas membocorkan salinan addendum rahasia ke wartawan investigasi.",
        "consequence_en": "Your war-chest is flush with illicit cash, but a whistleblowing clerk photocopies the secret addendum for investigative journalists."
      }
    ]
  },
  {
    "quarter": 13,
    "year": 4,
    "quarterNum": 1,
    "title_id": "Peringatan Darurat Intelijen Militer",
    "title_en": "Regional Military Intelligence Threat Assessment",
    "character_id": "Kolonel Bambang",
    "character_en": "Colonel Bambang",
    "role_id": "Komandan Kodim & Satgas Intelijen Teritorial",
    "role_en": "Regional Military Garrison Commander",
    "avatar": "🎖️",
    "mood_id": "⚠️ Memaparkan Peta Ancaman Kerusuhan Pilkada",
    "mood_en": "⚠️ Briefing on Pre-Election Terror & Sabotage Intel",
    "tension": "critical",
    "dialogue_id": "“Pak Walikota, informasi intelijen A1 kami mengonfirmasi ada kelompok radikal yang menyusup ke demonstrasi buruh dan mahasiswa minggu depan. Mereka menyiapkan bom molotov untuk membakar gedung DPRD dan fasilitas kelistrikan kota demi menciptakan instabilitas menjelang tahun politik. Kami minta Bapak terbitkan status Siaga Darurat dan larang semua demonstrasi!”",
    "dialogue_en": "“Mr. Mayor, verified grade-A intelligence confirms radical agitators have infiltrated next week's labor and student protests. They are stockpiling incendiary devices to torch the parliament building and the power grid to spark chaos ahead of the election year. We ask you to declare a State of Emergency and ban all public assemblies!”",
    "dilemma_id": "Melarang demonstrasi mencegah kerusuhan namun mematikan kebebasan berpendapat dan dicap gaya militer Orde Baru.",
    "dilemma_en": "Banning protests secures infrastructure but suffocates civil liberties, branding your administration as neo-authoritarian.",
    "choices": [
      {
        "id": "dialogue_security",
        "tone_id": "🕊️ Buka Mimbar Terbuka Balaikota & Filter Keamanan Ketat",
        "tone_en": "🕊️ Host Open Dialogue Forum at City Hall with Tight Perimeter Searches",
        "text_id": "“Jangan batalkan hak konstitusi warga untuk bersuara! Kita undang pimpinan mahasiswa berdialog langsung di aula Balaikota, sementara aparat TNI-Polri fokus memeriksa senjata dan ransel penyusup di perbatasan!”",
        "text_en": "“Do not crush our citizens' constitutional right to speak! We invite student leaders directly into City Hall for an open forum, while security forces intercept weapons and agitators at outer perimeters!”",
        "fx": {
          "sat": 7,
          "crime": -4
        },
        "actors": {
          "Warga": 12,
          "Hukum": 8
        },
        "flag": "y4q1_democratic_dialogue_security",
        "consequence_id": "Aspirasi tersampaikan damai, penyusup bersenjata ditangkap tanpa insiden, dan kota menjadi teladan resolusi konflik sipil.",
        "consequence_en": "Grievances are aired peacefully, armed instigators are arrested without casualties, and the city sets a benchmark for civil mediation."
      },
      {
        "id": "lockdown_city",
        "tone_id": "🛡️ Deklarasikan Jam Malam & Larang Demonstrasi",
        "tone_en": "🛡️ Declare Curfew & Impose Total Assembly Ban",
        "text_id": "“Keamanan obyek vital dan keselamatan warga di atas segalanya. Saya tanda tangani surat pembatasan kegiatan masyarakat dan gelar patroli skala besar bersama Kodim.”",
        "text_en": "“The security of critical utilities and human life overrides everything. I sign the municipal curfew and authorize full-scale joint military patrols.”",
        "fx": {
          "sat": -6,
          "crime": -8
        },
        "actors": {
          "Hukum": 12,
          "Warga": -10,
          "Media": -6
        },
        "flag": "y4q1_militarized_lockdown",
        "consequence_id": "Kerusuhan berhasil digagalkan total, namun mahasiswa menggelar aksi panggung duka mengenang matinya demokrasi di Nusapura.",
        "consequence_en": "Disruption is preempted with iron discipline, but students stage silent vigils mourning the death of free democracy in the city."
      },
      {
        "id": "underestimate",
        "tone_id": "📻 Abaikan Laporan Intelijen sebagai Isu Musiman",
        "tone_en": "📻 Dismiss Intelligence Warning as Seasonal Alarmism",
        "text_id": "“Intelijen selalu melebih-lebihkan keadaan. Biarkan aksi berjalan apa adanya tanpa penjagaan berlebihan agar tidak memancing provokasi.”",
        "text_en": "“Intelligence officers always exaggerate threats. Let the protests take their natural course without heavy guard to avoid provocation.”",
        "fx": {
          "sat": -8,
          "crime": 10,
          "infra": -6
        },
        "actors": {
          "Hukum": -10,
          "Warga": -8
        },
        "flag": "y4q1_underestimated_security_intel",
        "consequence_id": "Provokator menyusup dan membakar dua halte bus raya terpadu; Anda dicap lalai menjaga ketertiban kota.",
        "consequence_en": "Infiltrators torch two arterial transit stations; the media lambasts your administration for gross negligence."
      }
    ]
  },
  {
    "quarter": 14,
    "year": 4,
    "quarterNum": 2,
    "title_id": "Gugatan Cagar Budaya & Kutukan Tetua Adat",
    "title_en": "Heritage Protection Suit & Ancestral Elder's Curse",
    "character_id": "Abah Rustam",
    "character_en": "Abah Rustam",
    "role_id": "Sesepuh Agung Majelis Adat Nusapura",
    "role_en": "High Elder of the Nusapura Indigenous Council",
    "avatar": "👴",
    "mood_id": "🪓 Membawa Tongkat Pusaka & Dokumen Tanah Ulayat",
    "mood_en": "🪓 Holding Sacred Staff & Ancestral Land Deeds",
    "tension": "medium",
    "dialogue_id": "“Anakku Walikota, dengarkan suara bumi leluhurmu! Proyek jalan layang bertingkat yang kau bangun itu menerabas bukit pemakaman para pendiri kota dan pohon beringin berusia 200 tahun. Kami tidak butuh aspal jika harus menumbalkan akar sejarah kami! Hentikan alat beratmu, atau kami duduki lokasi dan leluhur akan mengutuk kepemimpinanmu!”",
    "dialogue_en": "“My son the Mayor, listen to the soil of your ancestors! The elevated highway you are engineering cuts directly through the sacred burial ground of our city founders and our 200-year-old banyan grove. We do not need asphalt if it means desecrating our historical soul! Halt your bulldozers, or we occupy the site and the ancestors will curse your rule!”",
    "dilemma_id": "Mengubah rute jalan layang menambah biaya konstruksi Rp 50 Miliar, tetapi menggusur tanah ulayat memicu kutukan sosial dan boikot tokoh budaya.",
    "dilemma_en": "Rerouting the highway adds Rp 50 Billion in redesign costs, but razing the sacred heritage triggers moral condemnation and cultural strikes.",
    "choices": [
      {
        "id": "reroute_heritage",
        "tone_id": "🏛️ Ubah Desain Melengkung & Bangun Taman Cagar Budaya",
        "tone_en": "🏛️ Reroute Highway with Arc Span & Build Cultural Eco-Park",
        "text_id": "“Ampun Abah, kami mohon maaf. Pembangunan sejati tidak boleh mencabut akar peradaban. Saya perintahkan desainer PUPR membelokkan trase jalan layang melengkungi bukit, dan area beringin kita jadikan Taman Cagar Budaya Terbuka!”",
        "text_en": "“Forgive us, Abah. Genuine progress must never uproot ancestral civilizational identity. I order the engineering corps to curve the elevated viaduct around the hill, preserving the grove as a public Heritage Sanctuary!”",
        "fx": {
          "sat": 8,
          "apbd": -0.1,
          "env": 6
        },
        "actors": {
          "Warga": 12,
          "Media": 8
        },
        "flag": "y4q2_preserved_ancestral_heritage",
        "consequence_id": "Desain jembatan melengkung indah itu viral sebagai mahakarya tata kota humanis yang menyatukan modernitas dan tradisi.",
        "consequence_en": "The sweeping curved bridge goes viral as a masterpiece of humane urbanism marrying cutting-edge infrastructure with heritage."
      },
      {
        "id": "financial_compensation",
        "tone_id": "💰 Tawarkan Ganti Untung Besar & Relokasi Makam Megah",
        "tone_en": "💰 Offer Lucrative Compensation & State Mausoleum Reburial",
        "text_id": "“Kami sediakan dana kompensasi Rp 20 Miliar untuk lembaga adat, dan makam leluhur kami pindahkan dengan upacara agung ke kompleks pemakaman pahlawan baru di bukit timur.”",
        "text_en": "“We offer an Rp 20 Billion community endowment to the council, and the ancestral graves will be re-interred with full state honors in a majestic eastern mausoleum.”",
        "fx": {
          "sat": 2,
          "apbd": -0.08
        },
        "actors": {
          "Warga": 2,
          "Bisnis": 4
        },
        "flag": "y4q2_compensated_heritage_relocation",
        "consequence_id": "Sebagian warga adat menerima kompensasi, meski beberapa budayawan senior tetap menolak hadir di peresmian flyover.",
        "consequence_en": "Most clan members accept the settlement, though several venerable historians boycott the highway ribbon-cutting."
      },
      {
        "id": "force_bulldoze",
        "tone_id": "🚜 Gusur Paksa Demi Tenggat Waktu Proyek Strategis",
        "tone_en": "🚜 Bulldoze through Protests for Strategic Project Deadlines",
        "text_id": "“Proyek flyover ini Proyek Strategis Nasional untuk mengurai kemacetan 1 juta warga! Kita tidak boleh terjebak takhayul masa lalu. Kerahkan Satpol PP untuk kawal ekskavator!”",
        "text_en": "“This flyover is a National Strategic Project unlocking congestion for 1 million commuters! We cannot halt modern transit for superstitions. Deploy municipal security to clear the site!”",
        "fx": {
          "sat": -10,
          "traffic": -6
        },
        "actors": {
          "Warga": -14,
          "Media": -10
        },
        "flag": "y4q2_bulldozed_sacred_heritage",
        "consequence_id": "Jalan layang selesai tepat waktu, namun pemandangan pohon beringin tumbang memicu simpati publik dan air mata warga.",
        "consequence_en": "The viaduct opens on schedule, but footage of the ancient banyans toppled stirs national grief and sorrow."
      }
    ]
  },
  {
    "quarter": 15,
    "year": 4,
    "quarterNum": 3,
    "title_id": "Penjualan Tiket Koalisi Parpol Menjelang Pilkada",
    "title_en": "The Coalition Kingmaker's Re-Election Extortion",
    "character_id": "Ibu Mega Srikandi",
    "character_en": "Mega Srikandi",
    "role_id": "Ketua Presidium Koalisi Gabungan 7 Partai",
    "role_en": "President of the 7-Party Mayoral Coalition",
    "avatar": "👩‍💼",
    "mood_id": "📑 Memegang Rekomendasi Resmi Formulir B1-KWK",
    "mood_en": "📑 Holding Certified Mayoral Re-Election Nominations",
    "tension": "critical",
    "dialogue_id": "“Pak Petahana, selamat... survei kepuasan Anda tinggi. Tapi ingat, tanpa tanda tangan surat rekomendasi partai kami (B1-KWK), Bapak tidak bisa mendaftar ke KPU untuk periode kedua! Syarat kami sederhana: serahkan kendali posisi Kepala Dinas Pendapatan, Dinas PU, dan Direksi BUMD kepada tim koalisi kami untuk 5 tahun ke depan. Mau tiket emas, atau jadi penonton di rumah?”",
    "dialogue_en": "“Mr. Incumbent, congratulations... your approval ratings are enviable. But remember: without our coalition's certified B1-KWK endorsement letter, you cannot even register on the ballot for a second term! Our price is modest: transfer full control of the Revenue Service, Public Works, and Utility Directorships to our party committee for the next 5 years. Take the golden ticket, or sit at home as a spectator?”",
    "dilemma_id": "Menyerahkan dinas strategis menjual kedaulatan kota kepada oligarki partai, namun menolak bisa menggagalkan pencalonan Anda kembali.",
    "dilemma_en": "Handing over key bureaus sells out municipal sovereignty to party oligarchs, but refusal locks you off the ballot.",
    "choices": [
      {
        "id": "independent_threat",
        "tone_id": "✊ Tolak Gandeng Oligarki & Kumpulkan KTP Jalur Independen",
        "tone_en": "✊ Defy Oligarchs & Mobilize Citizen KTPs for Independent Run",
        "text_id": "“Simpan surat rekomendasi transaksional Anda, Bu Mega! Saya tidak akan menjual masa depan kota demi tiket jabatan. Relawan saya siap mengumpulkan 150 ribu KTP warga untuk maju lewat Jalur Perseorangan Independen!”",
        "text_en": "“Keep your transactional endorsements, Mega! I will not auction the city's future for a party ticket. My grassroots volunteers are already gathering 150,000 citizen ID cards to run on the Independent Ballot!”",
        "fx": {
          "sat": 10,
          "risk": -5
        },
        "actors": {
          "Warga": 16,
          "DPRD": -16,
          "Media": 12
        },
        "flag": "y4q3_launched_independent_rebellion",
        "consequence_id": "Langkah berani Anda memicu gelombang dukungan rakyat yang luar biasa; ribuan warga mengantre sukarela menyerahkan KTP.",
        "consequence_en": "Your audacious rebellion ignites an unprecedented grassroots surge; long queues of citizens form to donate their voter endorsements."
      },
      {
        "id": "smart_coalition_bargain",
        "tone_id": "🤝 Negosiasi Pakta Integritas Terbuka Tanpa Kursi Basah",
        "tone_en": "🤝 Negotiate Public Policy Compact Barring Bureaucratic Patronage",
        "text_id": "“Mari kita buat kesepakatan terhormat. Kami adopsi program kerja prioritas partai Anda ke dalam visi misi Pilkada, tetapi jabatan birokrasi profesional haram dibagi-bagikan. Publik akan menghargai koalisi yang bermartabat.”",
        "text_en": "“Let us forge an honorable pact. We will integrate your party's priority civic programs into our platform, but professional bureaucratic seats remain non-negotiable. The electorate will reward a dignified alliance.”",
        "fx": {
          "sat": 4,
          "pol": 8
        },
        "actors": {
          "DPRD": 8,
          "Warga": 4
        },
        "flag": "y4q3_negotiated_clean_coalition",
        "consequence_id": "Koalisi partai akhirnya luluh dan menandatangani rekomendasi tanpa syarat bagi-bagi jabatan karena takut kehilangan figur populer Anda.",
        "consequence_en": "The party coalition capitulates and endorses you unconditionally, terrified of losing your soaring voter popularity."
      },
      {
        "id": "sell_out_cabinets",
        "tone_id": "💼 Teken Kontrak Politik Rahasia Demi Kepastian Tiket",
        "tone_en": "💼 Sign Secret Coalition Compact Securing Guaranteed Candidacy",
        "text_id": "“Baik Bu Mega, yang penting tiket pencalonan aman dan tidak ada calon tandingan yang membeli partai Anda. Draf pembagian dinas kita kunci malam ini.”",
        "text_en": "“Very well, Mega, as long as my candidacy is locked and rivals cannot buy your parties out. We will finalize the agency assignments tonight.”",
        "fx": {
          "sat": -6,
          "risk": 20
        },
        "actors": {
          "DPRD": 18,
          "Birokrasi": -12
        },
        "flag": "y4q3_surrendered_bureaus_to_coalition",
        "consequence_id": "Anda resmi mengantongi dukungan 80% kursi parlemen, namun birokrat berprestasi patah arang karena tahu dinas mereka akan dipimpin politisi.",
        "consequence_en": "You secure 80% parliamentary endorsement, but competent civil servants despair knowing their departments are mortgaged to party hacks."
      }
    ]
  },
  {
    "quarter": 16,
    "year": 4,
    "quarterNum": 4,
    "title_id": "Audit Investigasi BPK RI & Taruhan Opini WTP",
    "title_en": "Supreme Audit Board's Investigatory Ultimatum",
    "character_id": "Fajar Nugroho, Ak.",
    "character_en": "Senior Auditor Fajar Nugroho",
    "role_id": "Pengendali Teknis Audit BPK RI Perwakilan Daerah",
    "role_en": "Chief Technical Inspector, Supreme Audit Board (BPK RI)",
    "avatar": "🧐",
    "mood_id": "📊 Menyodorkan Lembar Temuan Kerugian Negara",
    "mood_en": "📊 Disclosing State Treasury Deficit Audit Findings",
    "tension": "critical",
    "dialogue_id": "“Pak Walikota, tim audit kami menemukan ketekoran kas fisik Rp 14 Miliar dan selisih aset tanah fasum yang belum bersertifikat. Laporan Keuangan Pemkot terancam anjlok ke opini 'Tidak Wajar' (Disclaimer) yang akan menghancurkan citra 4 tahun kepemimpinan Bapak di tahun politik besok. Ada opsi diskresi administratif... jika Bapak bersedia menanggung kompensasi pengujian audit kami.”",
    "dialogue_en": "“Mayor, our audit team discovered a physical Rp 14 Billion cash discrepancy and uncertified municipal land assets. Your city financial statement is on track for a devastating 'Disclaimer of Opinion', which will shatter your 4-year track record right before the election. There is an administrative discretionary pathway... if you accommodate our field team's audit facilitation.”",
    "dilemma_id": "Membayar uang pelicin audit mengamankan opini WTP untuk kampanye, namun tertangkap operasi suap BPK berujung vonis kurungan seumur hidup.",
    "dilemma_en": "Bribing auditors secures a pristine WTP rating for campaign flyers, but an auditor bribery bust guarantees career annihilation.",
    "choices": [
      {
        "id": "transparent_remedy",
        "tone_id": "⚖️ Buka Temuan, Tuntut Ganti Rugi & Tolak Suap",
        "tone_en": "⚖️ Publish Findings, Demand Restitution & Reject Bribes",
        "text_id": "“Simpan tawaran diskresi Anda, Pak Auditor! Saya tidak akan membeli sertifikat WTP dengan uang sogokan! Rilis seluruh temuan itu apa adanya. Saya perintahkan Majelis Tuntutan Ganti Rugi (TGR) menyita aset pejabat yang teledor dalam 60 hari!”",
        "text_en": "“Keep your backroom discretion, Auditor! I will never purchase a clean audit rating with bribes! Publish the raw findings. I order the Municipal Restitution Tribunal to seize negligent officials' assets within 60 days!”",
        "fx": {
          "sat": 5,
          "risk": -10,
          "apbd": 0.05
        },
        "actors": {
          "Hukum": 16,
          "Warga": 8,
          "Media": 8
        },
        "flag": "y4q4_clean_bpk_restitution",
        "consequence_id": "Meskipun opini tertahan Wajar Dengan Pengecualian (WDP), keberanian Anda menolak suap BPK dipuji sebagai teladan akuntabilitas langka.",
        "consequence_en": "Though your audit rating is qualified (WDP), your refusal to bribe auditors earns national admiration for raw institutional honesty."
      },
      {
        "id": "crash_rectification",
        "tone_id": "🏃 Kerja Maraton 30 Hari Sertifikasi Kilat Aset Fasum",
        "tone_en": "🏃 30-Day Emergency Marathon Land Title Certification",
        "text_id": "“Beri kami waktu sanggah 30 hari sesuai undang-undang. Saya kerahkan BPN dan seluruh camat bekerja siang malam mensertifikasikan 100% tanah fasum yang bermasalah!”",
        "text_en": "“Grant us the statutory 30-day clarification window. I will deploy the National Land Agency and district chiefs 24/7 to certify 100% of disputed municipal plots!”",
        "fx": {
          "sat": 4,
          "apbd": -0.05
        },
        "actors": {
          "Birokrasi": 8,
          "Hukum": 8
        },
        "flag": "y4q4_certified_city_assets",
        "consequence_id": "Kerja keras maraton berhasil menuntaskan temuan secara sah tanpa suap, mengantarkan Nusapura meraih opini WTP murni.",
        "consequence_en": "The administrative marathon successfully clears all findings legally without bribes, clinching an unblemished WTP audit victory."
      },
      {
        "id": "bribe_auditor",
        "tone_id": "🤫 Sediakan 'Dana Fasilitasi' BPK Demi Status WTP",
        "tone_en": "🤫 Provide 'Field Audit Facilitation' to Guarantee Clean Opinion",
        "text_id": "“Tahun politik besok taruhannya terlalu mahal untuk opini disclaimer. Siapkan dana taktis representasi untuk tim audit agar rapor kota tetap WTP sempurna.”",
        "text_en": "“With elections next year, the stakes are too immense for a disclaimer rating. Prepare tactical hospitality funds so the city keeps its clean WTP badge.”",
        "fx": {
          "sat": -4,
          "risk": 30,
          "apbd": -0.05
        },
        "actors": {
          "Media": -6,
          "Hukum": -10
        },
        "flag": "y4q4_bribed_bpk_auditors",
        "consequence_id": "Sertifikat WTP terpampang di baliho kampanye Anda, namun KPK diam-diam telah menyadap aliran dana penginapan tim auditor.",
        "consequence_en": "Clean audit banners decorate your campaign billboards, but anti-graft agents have tapped the auditor's hotel transactions."
      }
    ]
  },
  {
    "quarter": 17,
    "year": 5,
    "quarterNum": 1,
    "title_id": "Serangan Fajar & Tawaran Dana Bansos Gelap",
    "title_en": "Dawn Vote-Buying & Tactical Campaign Funding",
    "character_id": "Kapten Doni",
    "character_en": "Campaign Chief Doni",
    "role_id": "Ketua Tim Pemenangan Pilkada Walikota",
    "role_en": "Head of the Mayoral Re-Election Campaign War-Room",
    "avatar": "🕵️",
    "mood_id": "⚡ Panik Melaporkan Operasi Uang Calon Lawan",
    "mood_en": "⚡ Panicked over Opponent's Massive Vote-Buying Blitz",
    "tension": "critical",
    "dialogue_id": "“Komandan! Calon penantang kita menyebarkan ratusan ribu amplop serangan fajar berisi Rp 300 ribu di kampung-kampung padat! Tim kita lumpuh jika hanya mengandalkan rekam jejak dan retorika bersih. Kita harus cairkan pos Bansos Darurat APBD Rp 30 Miliar minggu ini untuk dibagikan atas nama Bapak, atau kita kalah telak di TPS!”",
    "dialogue_en": "“Commander! Our challenger is distributing hundreds of thousands of dawn cash envelopes stuffed with Rp 300,000 across the dense working-class districts! Our ground teams are helpless relying solely on clean track records and speeches. We must unlock Rp 30 Billion in emergency APBD social assistance this week branded under your name, or we are decimated at the ballot box!”",
    "dilemma_id": "Mempolitisasi bansos APBD menjamin kemenangan Pilkada, tetapi mengkhianati seluruh prinsip tata kelola yang Anda bangun selama 4 tahun.",
    "dilemma_en": "Weaponizing public welfare funds guarantees electoral victory, but betrays every standard of clean governance you built for 4 years.",
    "choices": [
      {
        "id": "reject_vote_buying",
        "tone_id": "🛡️ Tolak Serangan Fajar & Lawan via Edukasi Rakyat",
        "tone_en": "🛡️ Reject Vote-Buying & Launch Anti-Money Politics Blitz",
        "text_id": "“Hentikan kegilaan ini, Doni! Uang bansos itu hak fakir miskin, bukan peluru politik saya! Jika rakyat ingin menjual masa depan kota seharga tiga ratus ribu, itu pilihan mereka. Tapi saya akan bertarung dan menang dengan kehormatan!”",
        "text_en": "“Stop this madness, Doni! That welfare fund belongs to the impoverished, not to my political artillery! If citizens choose to mortgage their future for cash envelopes, that is their choice. But I will fight and win with spotless honor!”",
        "fx": {
          "sat": 8,
          "risk": -10
        },
        "actors": {
          "Warga": 12,
          "Media": 10,
          "Hukum": 10
        },
        "flag": "y5q1_rejected_election_graft",
        "consequence_id": "Warga terpelajar dan anak muda bergerak masif mengampanyekan gerakan 'Ambil Uangnya, Jangan Pilih Orangnya' untuk membela Anda.",
        "consequence_en": "Educated youths and civil society launch viral counter-campaigns urging citizens to reject vote-buying oligarchs."
      },
      {
        "id": "accelerate_legit_works",
        "tone_id": "🏗️ Resmikan Proyek Nyata & Tampilkan Bukti Kinerja",
        "tone_en": "🏗️ Inaugurate Tangible Projects & Showcase Proven Delivery",
        "text_id": "“Bansos tidak boleh dipolitisasi. Tapi kita bisa memotong pita 20 puskesmas baru, jembatan, dan sekolah gratis pekan ini. Biarkan semen, aspal, dan obat gratis berbicara lebih keras daripada amplop uang lawan!”",
        "text_en": "“We cannot hijack welfare. But we can inaugurate 20 new clinics, bridges, and free vocational schools this week. Let concrete, asphalt, and free medicine speak louder than the rival's envelopes!”",
        "fx": {
          "sat": 6,
          "infra": 4
        },
        "actors": {
          "Warga": 8,
          "Birokrasi": 4
        },
        "flag": "y5q1_inaugurated_deliverables",
        "consequence_id": "Peresmian karya nyata secara sah mendominasi berita lokal dan membalikkan arus elektabilitas tanpa melanggar hukum.",
        "consequence_en": "Legitimate infrastructure inaugurations dominate local airwaves, swinging voter momentum without breaching election laws."
      },
      {
        "id": "weaponize_welfare",
        "tone_id": "💸 Cairkan Bansos Darurat Berlogo Stiker Kampanye",
        "tone_en": "💸 Flood Slums with Campaign-Branded Emergency Relief",
        "text_id": "“Kemenangan adalah segalanya. Jika kita kalah, semua proyek kita dihancurkan lawan. Cairkan bansos Rp 30 Miliar segera, pasang stiker wajah saya di setiap karung beras!”",
        "text_en": "“Victory is everything. If we lose, our entire legacy is dismantled by rivals. Release the Rp 30 Billion welfare package today with my portrait on every rice sack!”",
        "fx": {
          "sat": -4,
          "apbd": -0.3,
          "risk": 30
        },
        "actors": {
          "Hukum": -15,
          "Media": -12
        },
        "flag": "y5q1_weaponized_welfare_funds",
        "consequence_id": "Elektabilitas Anda melonjak tajam di akar rumput, namun Bawaslu melayangkan surat peringatan pelanggaran pidana pemilu berat.",
        "consequence_en": "Your polling numbers spike among low-income voters, but Election Oversight issues stern warnings of severe criminal election violations."
      }
    ]
  },
  {
    "quarter": 18,
    "year": 5,
    "quarterNum": 2,
    "title_id": "Jebakan Debat Terbuka Televisi Nasional",
    "title_en": "The Televised Mayoral Debate Ambush",
    "character_id": "Prof. Salomo",
    "character_en": "Prof. Salomo",
    "role_id": "Ketua Panelis Independen Debat Publik Pilkada",
    "role_en": "Chief Independent Moderator, Mayoral Live TV Debate",
    "avatar": "👨‍🏫",
    "mood_id": "🎙️ Menatap Tajam di Ruang Tunggu Siaran Langsung",
    "mood_en": "🎙️ Piercing Gaze in the Live Broadcasting Greenroom",
    "tension": "high",
    "dialogue_id": "“Pak Petahana, 5 menit lagi lampu siaran langsung menyala di hadapan 3 juta pemirsa televisi. Saya tidak akan basa-basi: segmen ketiga nanti saya akan membuka data kegagalan penanganan kemiskinan dan kompromi politik Anda selama 4 tahun terakhir. Apakah Bapak akan berkelit dengan angka statistik palsu, atau berani mengakui kekurangan di hadapan rakyat?”",
    "dialogue_en": "“Mr. Incumbent, in 5 minutes the live studio cameras turn on before 3 million viewers. I will not mince words: in segment three, I will confront you with raw data on poverty lingering and your political compromises over the past 4 years. Will you dodge with sanitized statistical spin, or display the courage to own your failures before the people?”",
    "dilemma_id": "Mengakui kelemahan di siaran langsung berisiko dipelintir lawan politik, namun berdusta dapat ditelanjangi oleh panelis independen.",
    "dilemma_en": "Admitting flaws on live television risks opponent spin, but lying will be publicly eviscerated by rigorous fact-checkers.",
    "choices": [
      {
        "id": "radical_honesty",
        "tone_id": "🌟 Kejujuran Radikal & Paparkan Solusi Masa Depan",
        "tone_en": "🌟 Radical Honesty & Visionary Roadmap for the Future",
        "text_id": "“Saya tidak akan berdusta di depan warga saya, Prof! Sebagai manusia biasa, tentu ada target yang belum tuntas dan kompromi berat yang harus diambil. Tapi inilah peta jalan perbaikan konkret yang saya tawarkan untuk 5 tahun ke depan!”",
        "text_en": "“I will not lie to my citizens, Professor! As a human leader, there are unfinished goals and painful compromises made under fire. But here is the uncompromising roadmap I offer to complete the job in our next term!”",
        "fx": {
          "sat": 12,
          "risk": -5
        },
        "actors": {
          "Warga": 14,
          "Media": 14
        },
        "flag": "y5q2_radical_honesty_debate",
        "consequence_id": "Kejujuran dan ketulusan Anda di panggung debat memukau publik; para pengamat menyebutnya penampilan kenegarawanan terbaik.",
        "consequence_en": "Your vulnerability and authenticity electrify the electorate; commentators call it the finest display of statesmanship in modern history."
      },
      {
        "id": "deflect_and_attack",
        "tone_id": "⚔️ Serang Balik Rekam Jejak Kelam Calon Lawan",
        "tone_en": "⚔️ Counter-Attack the Challenger's Questionable Record",
        "text_id": "“Mengapa panelis hanya menyorot kekurangan kami? Mengapa tidak membedah calon penantang yang pernah terseret skandal korupsi dan tidak punya pengalaman mengelola anggaran satu rupiah pun!”",
        "text_en": "“Why does the panel exclusively interrogate our administration? Why not scrutinize the challenger whose past is tainted by graft and who hasn't managed a single public budget in his life!”",
        "fx": {
          "sat": 2
        },
        "actors": {
          "DPRD": -6,
          "Warga": 2
        },
        "flag": "y5q2_aggressive_debate_counterattack",
        "consequence_id": "Debat berubah menjadi adu serang panas yang menghibur penonton, membelah opini publik menjadi dua kubu fanatik.",
        "consequence_en": "The debate devolves into a fierce ideological clash that divides viewers into polarized partisan camps."
      },
      {
        "id": "statistical_spin",
        "tone_id": "📊 Banjiri Panggung dengan Grafik & Bahasa Birokrasi",
        "tone_en": "📊 Drown the Stage in Bureaucratic Jargon & Statistics",
        "text_id": "“Menurut indeks IPM dan formula regresi BPS, pertumbuhan kami sudah di atas rata-rata provinsi sebesar 0,42 persen berbasis matriks sektoral multi-tahun...”",
        "text_en": "“According to the Human Development Index and multi-year provincial regression models, our performance exceeds the baseline by 0.42 percent based on sectoral matrices...”",
        "fx": {
          "sat": -4
        },
        "actors": {
          "Media": -6,
          "Warga": -4
        },
        "flag": "y5q2_bureaucratic_spin_debate",
        "consequence_id": "Penonton merasa bosan dan menganggap Anda pemimpin elitis yang berlindung di balik tumpukan angka tanpa empati.",
        "consequence_en": "Viewers find the performance clinical and sterile, accusing you of being an out-of-touch technocrat lacking human empathy."
      }
    ]
  },
  {
    "quarter": 19,
    "year": 5,
    "quarterNum": 3,
    "title_id": "Ancaman Kerusuhan Pasca-Pencoblosan",
    "title_en": "Post-Election Counting Riot Ultimatum",
    "character_id": "Kombes Pol Tejo",
    "character_en": "Police Chief Tejo",
    "role_id": "Kapolresta Nusapura",
    "role_en": "Metropolitan Police Commissioner",
    "avatar": "👮",
    "mood_id": "🚨 Suara Sirene & Laporan Massa Mengepung KPU",
    "mood_en": "🚨 Sirens Blaring with Angry Mobs Encircling City Hall",
    "tension": "critical",
    "dialogue_id": "“Pak Walikota! Hasil hitung cepat (quick count) menunjukkan selisih sangat tipis: Bapak unggul 51% melawan 49%. Massa pendukung lawan menuduh ada kecurangan sistemik dan sekarang mengepung kantor KPU serta membakar ban di bundaran kota! Pasukan Brimob meminta otorisasi penggunaan gas air mata dan pentungan untuk membubarkan paksa sebelum anarkis meluas!”",
    "dialogue_en": "“Mayor! Quick count returns show a razor-thin margin: you lead at 51% against 49%. The challenger's supporters claim systemic fraud, besieging the Election Commission building and burning tires at the city rotunda! Riot police request authorization for tear gas and baton charges to disperse the crowd before violence spreads!”",
    "dilemma_id": "Tindakan represif aparat dapat memakan korban jiwa warga sendiri, namun membiarkannya berisiko membakar gedung KPU dan membatalkan hasil pemilu.",
    "dilemma_en": "Police force risks civilian casualties among your own people, but inaction risks the arson of electoral ballots and constitutional anarchy.",
    "choices": [
      {
        "id": "walk_into_crowd",
        "tone_id": "🕊️ Turun Langsung Tanpa Senjata ke Tengah Massa",
        "tone_en": "🕊️ Walk Unarmed into the Mob to Address the Grievances",
        "text_id": "“Tahan tembakan gas air mata! Saya sendiri yang akan berjalan ke tengah bundaran menemui pimpinan demonstran. Sediakan pengeras suara. Mereka warga saya juga, bukan musuh perang!”",
        "text_en": "“Hold all tear gas! I will personally walk unarmed into the crowd to speak with their leaders. Bring me a megaphone. They are my citizens too, not an enemy army!”",
        "fx": {
          "sat": 14,
          "crime": -10,
          "risk": -15
        },
        "actors": {
          "Warga": 20,
          "Hukum": 12,
          "Media": 16
        },
        "flag": "y5q3_heroic_street_reconciliation",
        "consequence_id": "Keberanian luar biasa Anda berdiri di bawah hujan menenangkan amarah massa; para demonstran membubarkan diri dengan damai sambil bersalaman.",
        "consequence_en": "Your fearless presence in the rain diffuses the fury; protesters disperse peacefully with handshakes and national anthems."
      },
      {
        "id": "legal_recount",
        "tone_id": "⚖️ Buka Rekapitulasi Terbuka Live-Streaming 24 Jam",
        "tone_en": "⚖️ Mandate 24/7 Live-Streamed Ballot Recounting",
        "text_id": "“Beri jaminan transparansi mutlak. Saya instruksikan KPU dan Bawaslu membuka siaran langsung pembukaan kotak suara TPS per TPS secara digital agar seluruh saksi melihat tanpa curiga.”",
        "text_en": "“Provide total, unimpeachable transparency. I request the Election Commission to livestream the ballot tally box-by-box with digital signatures for every witness.”",
        "fx": {
          "sat": 8,
          "risk": -5
        },
        "actors": {
          "Hukum": 10,
          "Media": 10
        },
        "flag": "y5q3_livestreamed_ballot_audit",
        "consequence_id": "Transparansi digital membuktikan keaslian suara Anda tanpa celah, meredam protes kubu lawan secara terhormat.",
        "consequence_en": "Digital transparency indisputably validates your victory, dissolving the opposition's conspiracy theories with dignity."
      },
      {
        "id": "iron_fist",
        "tone_id": "🛡️ Bubarkan Paksa Demi Menjaga Kewibawaan Hukum",
        "tone_en": "🛡️ Authorize Riot Squads to Disperse Unlawful Mobs",
        "text_id": "“KPU obyek vital negara yang tidak boleh diinjak-injak perusuh pemilu! Tembakkan gas air mata dan tangkap seluruh provokator di lapangan sekarang juga!”",
        "text_en": "“The Election Commission is sacred state infrastructure that cannot be trampled! Deploy tear gas and detain the instigators immediately!”",
        "fx": {
          "sat": -10,
          "crime": -12
        },
        "actors": {
          "Hukum": 8,
          "Warga": -16,
          "Media": -8
        },
        "flag": "y5q3_repressed_election_riots",
        "consequence_id": "Ketertiban pulih dalam satu jam, namun foto-foto pentungan aparat meninggalkan luka batin yang dalam bagi demokrasi kota.",
        "consequence_en": "Order is restored swiftly, but images of bruised protesters leave deep traumatic scars across the civic soul."
      }
    ]
  },
  {
    "quarter": 20,
    "year": 5,
    "quarterNum": 4,
    "title_id": "Malam Terakhir di Balaikota: Pengadilan Sejarah",
    "title_en": "The Final Night at City Hall: Judgment of History",
    "character_id": "Prof. Dr. Soemitro Hadi",
    "character_en": "Prof. Dr. Soemitro Hadi",
    "role_id": "Pamong Praja Senior & Guru Bangsa Nusapura",
    "role_en": "Senior Statesman & Mayoral Mentor",
    "avatar": "🏛️",
    "mood_id": "📜 Membawa Berkas Arsip 5 Tahun Kepemimpinan Anda",
    "mood_en": "📜 Reviewing the 5-Year Dossier of Your Stewardship",
    "tension": "high",
    "dialogue_id": "“Selamat malam, sahabatku. Di malam terakhir masa jabatan 5 tahun Anda ini, lampu-lampu Balaikota mulai redup. Di meja ini bertumpuk 20 berkas keputusan berdarah yang pernah Anda ambil: dari menghadapi mahar partai, godaan taipan, ancaman aparat, hingga badai Pilkada. Sejarah tidak menilai seorang Walikota dari mewahnya gedung yang ia bangun, melainkan dari nurani yang ia selamatkan. Apakah Anda bangga dengan apa yang telah Anda tinggalkan untuk anak cucu Nusapura?”",
    "dialogue_en": "“Good evening, my friend. On this final night of your 5-year stewardship, the chandeliers of City Hall begin to dim. On this desk sit 20 dossiers of high-stakes choices you made under fire: from defying party bosses, tycoon bribes, prosecutor interrogations, to electoral storms. History judges a Mayor not by the marble buildings erected, but by the moral conscience preserved. Are you proud of the legacy you leave behind for the children of Nusapura?”",
    "dilemma_id": "Penghakiman terakhir dari pengabdian Anda: refleksi atas seluruh warisan, integritas, dan takdir masa depan kota Nusapura.",
    "dilemma_en": "The final reckoning of your stewardship: reflecting on your lasting legacy, moral integrity, and the destiny of Nusapura.",
    "choices": [
      {
        "id": "legacy_people",
        "tone_id": "🌟 Pengabdian Murni: Kedaulatan untuk Rakyat",
        "tone_en": "🌟 Pure Service: Sovereignty Belongs to the People",
        "text_id": "“Saya datang tanpa kekayaan, dan saya pergi dengan tangan bersih. Jika nama saya dilupakan, biarlah. Yang terpenting: anak-anak miskin bisa sekolah, rumah sakit melayani tanpa diskriminasi, dan rakyat tahu bahwa keadilan itu nyata di Nusapura!”",
        "text_en": "“I arrived without wealth, and I depart with clean hands. If my name is forgotten, so be it. What matters is that poor children can study, hospitals heal without prejudice, and citizens know that justice is real in Nusapura!”",
        "fx": {
          "sat": 15
        },
        "actors": {
          "Warga": 20,
          "Media": 15,
          "Hukum": 15
        },
        "flag": "y5q4_immortal_statesman_legacy",
        "consequence_id": "Kepemimpinan 5 tahun Anda diabadikan dengan tinta emas sebagai salah satu era keemasan paling bersejarah di Nusantara.",
        "consequence_en": "Your 5-year stewardship is immortalized in gold as one of the finest golden eras in regional governance history."
      },
      {
        "id": "legacy_builder",
        "tone_id": "🏗️ Karya Fisik: Kota Modern Bertaraf Dunia",
        "tone_en": "🏗️ Modern Marvel: A Transformed Global Metropolis",
        "text_id": "“Lihatlah ke luar jendela Balaikota, Guru. Kota yang dulu macet, kumuh, dan terbelakang kini berdiri megah dengan jalan layang modern, MRT berkecepatan tinggi, dan taman-taman asri. Saya telah mengubah wajah kota ini selamanya!”",
        "text_en": "“Look out the City Hall window, Master. The once choked, flooded backwater now stands proud with modern expressways, rapid transit, and pristine public parks. I transformed the physical destiny of this city forever!”",
        "fx": {
          "sat": 8,
          "infra": 10
        },
        "actors": {
          "Bisnis": 15,
          "Warga": 10
        },
        "flag": "y5q4_master_builder_legacy",
        "consequence_id": "Patung dan nama Anda diabadikan di pusat kota sebagai bapak pembangunan modern Nusapura.",
        "consequence_en": "Your name and portrait are commemorated in the civic plaza as the visionary master-builder of modern Nusapura."
      },
      {
        "id": "legacy_pragmatist",
        "tone_id": "♟️ Seni Kemungkinan: Realisme Politik Kekuasaan",
        "tone_en": "♟️ Realpolitik Master: Survival in the Crucible of Power",
        "text_id": "“Saya memimpin bukan di surga malaikat, melainkan di rimba politik kekuasaan. Saya berkompromi saat harus bertahan, dan memukul saat harus menang. Kota ini tetap berjalan, dan saya tetap memegang kendali. Itulah seni tata kelola yang sesungguhnya.”",
        "text_en": "“I governed not in a paradise of angels, but in the ruthless jungle of power politics. I bent when survival demanded, and struck when victory required. The city persevered, and I maintained command. That is the true art of statecraft.”",
        "fx": {
          "sat": 2
        },
        "actors": {
          "DPRD": 10,
          "Bisnis": 10
        },
        "flag": "y5q4_cunning_pragmatist_legacy",
        "consequence_id": "Para sejarawan mengingat Anda sebagai politisi lihai dan tak terkalahkan yang menguasai seni kekuasaan tanpa pernah tumbang.",
        "consequence_en": "Historians remember you as a formidable master of realpolitik who navigated lethal political minefields without ever falling."
      }
    ]
  }
];

/* ==================== 20 DANGEROUS DIALOGUES ENGINE - TERM 2 ==================== */
var DANGEROUS_DIALOGUES_TERM2 = [
  {
    "quarter": 1,
    "year": 1,
    "quarterNum": 1,
    "title_id": "Tuntutan Oligarki & Mahar Pilkada Periode Kedua",
    "title_en": "Second-Term Kingmakers & Oligarch Tithes",
    "character_id": "H. Suryo Pranoto",
    "character_en": "H. Suryo Pranoto",
    "role_id": "Ketua Presidium Koalisi Partai Pengusung",
    "role_en": "Ruling Coalition Presidium Chairman",
    "avatar": "🧔‍♂️",
    "mood_id": "😏 Menagih Janji Tiket Periode 2",
    "mood_en": "😏 Demanding Second-Term Endorsement Dues",
    "tension": "high",
    "dialogue_id": "“Selamat atas kemenangan periode kedua, Pak Walikota! Tapi ingat, ongkos koalisi 8 partai sangat mahal. Kami menuntut 4 pos Direktur Utama BUMD dan jatah perizinan kawasan industri sentral. Jika menolak, fraksi kami siap menggulirkan Hak Angket di tahun pertama!”",
    "dialogue_en": "“Congratulations on your second term, Mr. Mayor! But remember, the 8-party coalition came with massive costs. We demand 4 municipal utility CEO seats and exclusive quotas in central industrial zoning. Refuse, and our factions will launch an impeachment inquiry in year one!”",
    "dilemma_id": "Koalisi menuntut penguasaan total BUMD di awal periode 2. Menolak memicu pemakzulan dini di DPRD, menerima merusak tata kelola profesional.",
    "dilemma_en": "The coalition demands total control of municipal utilities. Refusing sparks an immediate legislative inquiry; accepting destroys professional governance.",
    "choices": [
      {
        "id": "firm_reject_t2",
        "tone_id": "🛡️ Tolak Pembagian BUMD & Wajibkan Lelang Terbuka",
        "tone_en": "🛡️ Reject Board Plunder & Enforce Open Merit Exams",
        "text_id": "“Periode kedua adalah warisan integritas saya untuk rakyat, bukan pasar barter kekuasaan! Seluruh direksi BUMD wajib seleksi terbuka. Silakan ajukan hak angket jika berani!”",
        "text_en": "“This second term is my legacy of integrity for the citizens, not a market for spoils! Every utility director will undergo open merit exams. File your inquiry if you dare!”",
        "fx": {
          "sat": 8,
          "risk": -5
        },
        "actors": {
          "DPRD": -15,
          "Birokrasi": 10,
          "Warga": 8
        },
        "flag": "y1q1_t2_refused_coalition_plunder",
        "consequence_id": "Profesionalitas BUMD terselamatkan, namun koalisi parpol memboikot sidang APBD tahun pertama.",
        "consequence_en": "City enterprises remain professional, but the ruling coalition boycotts your Year 1 budget ratification."
      },
      {
        "id": "tactical_compromise_t2",
        "tone_id": "🤝 Beri Posisi Dewan Pengawas Independen",
        "tone_en": "🤝 Grant Independent Supervisory Board Seats",
        "text_id": "“Direksi tetap profesional agar dividen tinggi, namun saya sediakan kursi Dewan Pengawas non-operasional untuk representasi partai Anda.”",
        "text_en": "“Executive directors must remain professional, but I will allocate non-operational Supervisory seats for party oversight.”",
        "fx": {
          "sat": -2,
          "risk": 4
        },
        "actors": {
          "DPRD": 10,
          "Birokrasi": -4
        },
        "flag": "y1q1_t2_compromised_supervisory",
        "consequence_id": "Koalisi puas dan parlemen tenang, namun pengamat mengendus aroma kompromi politik.",
        "consequence_en": "The coalition is appeased and quiet, though civil society watchdogs note the quiet political compromise."
      },
      {
        "id": "total_surrender_t2",
        "tone_id": "📑 Serahkan BUMD Air & Parkir Demi Ketenangan",
        "tone_en": "📑 Surrender Water & Parking Utilities for Peace",
        "text_id": "“Ambil alih BUMD Air dan Parkir, asalkan fraksi Anda menjamin APBD disahkan tanpa syarat selama 5 tahun ke depan.”",
        "text_en": "“Take the Water and Parking utilities, provided your factions guarantee unconditional APBD approval for the next 5 years.”",
        "fx": {
          "sat": -10,
          "risk": 25,
          "apbd": -0.2
        },
        "actors": {
          "DPRD": 20,
          "Birokrasi": -15,
          "Warga": -10
        },
        "flag": "y1q1_t2_surrendered_bumd_to_parties",
        "consequence_id": "DPRD bertepuk tangan meriah, namun tarif air bersih bocor dan memicu gelombang unjuk rasa pelanggan.",
        "consequence_en": "Council factions rejoice, but rampant utility leaks trigger bitter civic protests across the city."
      }
    ]
  },
  {
    "quarter": 2,
    "year": 1,
    "quarterNum": 2,
    "title_id": "Mega-Konsorsium Reklamasi Teluk Tahap II",
    "title_en": "Bay Reclamation Megaproject Phase II",
    "character_id": "Dharmawan Wijaya",
    "character_en": "Dharmawan Wijaya",
    "role_id": "Chairman Nusa Mega Capital Consortium",
    "role_en": "Chairman Nusa Mega Capital Consortium",
    "avatar": "👔",
    "mood_id": "🤑 Menawarkan Saham Kosong Kawasan Elit",
    "mood_en": "🤑 Offering Phantom Equity in Luxury Waterfront",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, di periode kedua ini mari kita selesaikan Masterplan Reklamasi Teluk Tahap II senilai Rp 45 Triliun. Kami siapkan 15% saham atas nama yayasan keluarga Anda, asalkan izin AMDAL kawasan mangrove pesisir Bahari diteken minggu ini tanpa dengar pendapat publik!”",
    "dialogue_en": "“Mr. Mayor, let us finalize the Rp 45 Trillion Bay Reclamation Phase II masterplan. We have reserved a 15% trust share for your family foundation, provided the mangrove environmental exemption is signed this week without public hearings!”",
    "dilemma_id": "Mendapat investasi raksasa dan saham tersembunyi dengan mengorbankan hutan mangrove dan nelayan tradisional.",
    "dilemma_en": "Gain massive private investment and hidden family shares at the expense of coastal mangroves and artisanal fishermen.",
    "choices": [
      {
        "id": "save_mangrove_t2",
        "tone_id": "🌿 Lindungi Hutan Mangrove & Batalkan Reklamasi",
        "tone_en": "🌿 Preserve Mangroves & Cancel Commercial Landfill",
        "text_id": "“Pesisir Bahari adalah benteng alami tsunami dan nafkah nelayan, bukan mainan spekulan properti! Simpan saham busuk Anda, izin ini saya tolak mutlak!”",
        "text_en": "“The Bahari coast is our natural tsunami barrier and artisanal fishing ground, not a playground for property syndicates! Keep your dirty shares, this permit is permanently denied!”",
        "fx": {
          "sat": 10,
          "risk": -10
        },
        "actors": {
          "Bisnis": -20,
          "Warga": 12,
          "Hukum": 10
        },
        "flag": "y1q2_t2_saved_mangrove_wetlands",
        "consequence_id": "Kawasan konservasi mangrove selamat abadi, namun konsorsium Dharmawan menarik rencana investasi pabrik baterai dari kota.",
        "consequence_en": "The mangrove reserve is permanently saved, but the tycoon consortium retaliates by relocating a clean battery plant out of town."
      },
      {
        "id": "green_eco_corridor_t2",
        "tone_id": "🌊 Syaratkan 40% Hutan Lindung & Polder Ramah Lingkungan",
        "tone_en": "🌊 Mandate 40% Conservation Polder & Eco-Corridor",
        "text_id": "“Investasi boleh jalan dengan syarat ketat: 40% area wajib dijadikan cagar alam mangrove terbuka dan konsorsium membangun tanggul rob untuk kampung nelayan.”",
        "text_en": "“You may proceed under strict conditions: 40% of the tract must be open public reserve and you must construct modern sea walls for adjacent fishermen villages.”",
        "fx": {
          "sat": 5,
          "risk": 5,
          "pad": 0.4
        },
        "actors": {
          "Bisnis": 10,
          "Warga": 6
        },
        "flag": "y1q2_t2_eco_reclamation_compromise",
        "consequence_id": "Pembangunan berjalan seimbang dengan restu warga pesisir, menambah PAD kota secara signifikan.",
        "consequence_en": "Development proceeds in ecological balance with coastal blessing, generating steady new local tax revenues."
      },
      {
        "id": "sign_reclamation_deal_t2",
        "tone_id": "📑 Teken Izin & Amankan Saham Yayasan Keluarga",
        "tone_en": "📑 Sign Exemption & Accept Secret Foundation Trust",
        "text_id": "“Setuju. Percepat perizinan sekarang juga. Nusapura butuh citra kota megapolitan modern, apa pun risikonya.”",
        "text_en": "“Agreed. Expedite the permits immediately. Nusapura needs the prestige of an ultra-modern global waterfront, whatever the cost.”",
        "fx": {
          "sat": -8,
          "risk": 28,
          "pad": 0.8
        },
        "actors": {
          "Bisnis": 25,
          "Warga": -14,
          "Hukum": -15
        },
        "flag": "y1q2_t2_signed_corrupt_reclamation",
        "consequence_id": "Gedung pencakar langit mulai dibangun, namun nelayan tradisional terpinggirkan dan intel Tipikor mencium aliran saham.",
        "consequence_en": "Skyscrapers rise on the bay, but traditional fishermen are evicted and graft prosecutors track the foundation equity."
      }
    ]
  },
  {
    "quarter": 3,
    "year": 1,
    "quarterNum": 3,
    "title_id": "Boikot Massal & Mogok Umum Serikat Buruh Nusapura",
    "title_en": "Citywide General Strike & Labor Federation Ultimatums",
    "character_id": "Siti Rahmawati",
    "character_en": "Siti Rahmawati",
    "role_id": "Sekretaris Jenderal Aliansi Buruh Bersatu",
    "role_en": "Secretary General Unified Labor Alliance",
    "avatar": "👩‍🏭",
    "mood_id": "🔥 Memimpin Barikade Gerbang Kawasan Industri",
    "mood_en": "🔥 Manning the Industrial Estate Barricades",
    "tension": "high",
    "dialogue_id": "“Pak Walikota! Di periode kedua ini inflasi sewa rumah dan pangan mencekik 200 ribu buruh pabrik. Kami menuntut revisi UMK naik 16% dan subsidi sewa rusunawa buruh! Jika Balai Kota bergeming, besok pelabuhan kargo dan jalan tol lingkar kami tutup total!”",
    "dialogue_en": "“Mayor! Rent and food costs are choking 200,000 factory workers. We demand a 16% minimum wage hike and dedicated municipal rental housing subsidies! If you stall, we shut down the container port and outer ring road tomorrow!”",
    "dilemma_id": "Menyetujui kenaikan upah memicu protes asosiasi pengusaha, menolak memicu kerusuhan dan kelumpuhan logistik kota.",
    "dilemma_en": "Raising wages infuriates employer syndicates; refusing risks violent pickets and total municipal economic paralysis.",
    "choices": [
      {
        "id": "meet_union_demands_t2",
        "tone_id": "🤝 Naikkan UMK & Bangun 1.000 Unit Rusunawa Buruh",
        "tone_en": "🤝 Raise Municipal Wage & Subsidize 1,000 Worker Flats",
        "text_id": "“Keringat buruh adalah penggerak ekonomi Nusapura! Saya tetapkan kenaikan UMK yang layak dan anggarkan Rp 0.2 T untuk pembangunan rusunawa terintegrasi.”",
        "text_en": "“Worker sweat is the true engine of Nusapura! I hereby decree the fair wage hike and budget Rp 0.2 T for modern integrated municipal flats.”",
        "fx": {
          "sat": 10,
          "risk": -5,
          "apbd": -0.2
        },
        "actors": {
          "SerikatBuruh": 20,
          "Bisnis": -14,
          "Warga": 8
        },
        "flag": "y1q3_t2_backed_labor_welfare",
        "consequence_id": "Buruh membubarkan barikade dengan nyanyian haru, namun Asosiasi Pengusaha mengancam menahan ekspansi pabrik baru.",
        "consequence_en": "Workers dissolve barricades in jubilation, but the Chamber of Commerce threatens to freeze factory expansions."
      },
      {
        "id": "tripartite_compromise_t2",
        "tone_id": "⚖️ Skema Upah Tripartit & Subsidi Transportasi Gratis",
        "tone_en": "⚖️ Tripartite Wage Formula & Free Public Transit Pass",
        "text_id": "“Kenaikan UMK 8.5% sesuai formula riil, dan seluruh buruh ber-KTP Nusapura mendapat kartu sakti gratis naik BRT dan sembako bersubsidi.”",
        "text_en": "“We raise wages by 8.5% matched with real inflation, and all registered workers receive free transit passes and food cooperatives.”",
        "fx": {
          "sat": 6,
          "risk": 0,
          "apbd": -0.1
        },
        "actors": {
          "SerikatBuruh": 10,
          "Bisnis": 6
        },
        "flag": "y1q3_t2_tripartite_labor_pact",
        "consequence_id": "Kompromi tripartit berhasil meredam konflik industri, menciptakan hubungan perburuhan paling kondusif di provinsi.",
        "consequence_en": "The tripartite agreement defuses tensions, establishing the most harmonious industrial climate in the province."
      },
      {
        "id": "crackdown_pickets_t2",
        "tone_id": "🛡️ Turunkan Satpol PP & Bubarkan Barikade Paksa",
        "tone_en": "🛡️ Deploy Riot Police & Disperse Pickets Forcefully",
        "text_id": "“Jalan tol dan pelabuhan adalah objek vital nasional! Saya instruksikan Satpol PP dan kepolisian membuka blokade dengan tindakan tegas terukur.”",
        "text_en": "“The expressway and port are vital national security infrastructure! I instruct police and municipal units to clear the barricades immediately.”",
        "fx": {
          "sat": -12,
          "risk": 15
        },
        "actors": {
          "SerikatBuruh": -25,
          "Bisnis": 16,
          "Warga": -8
        },
        "flag": "y1q3_t2_suppressed_labor_pickets",
        "consequence_id": "Jalan tol kembali dibuka, namun bentrokan berdarah menelan korban luka dan menuai kecaman Komnas HAM.",
        "consequence_en": "Traffic resumes, but violent clashes leave injuries and spark harsh condemnation from human rights watchdogs."
      }
    ]
  },
  {
    "quarter": 4,
    "year": 1,
    "quarterNum": 4,
    "title_id": "Interogasi Khusus Tim Satgas Tipikor Mabes",
    "title_en": "Special Inquiry by Anti-Graft Taskforce",
    "character_id": "Kompol Bagas Wicaksono",
    "character_en": "Kompol Bagas Wicaksono",
    "role_id": "Penyidik Khusus Satgas Tipikor Mabes",
    "role_en": "Special Investigator Anti-Graft Taskforce",
    "avatar": "👮‍♂️",
    "mood_id": "📂 Menunjukkan Berkas Sadapan Tender Proyek",
    "mood_en": "📂 Presenting Wiretap Dossiers of Public Tenders",
    "tension": "high",
    "dialogue_id": "“Malam, Pak Walikota. Kami menemukan rekaman penyadapan Kepala Dinas PUPR Anda yang mengatur pemenang lelang flyover sentral dengan fee 7%. Rekaman ini menyebut nama tim sukses ring satu Anda. Buka seluruh akses digital e-katalog dan copot Kadis malam ini, atau esok kami geledah Balai Kota!”",
    "dialogue_en": "“Good evening, Mayor. We have intercepted wiretaps showing your Public Works Chief fixing bids on the central flyover with a 7% kickback. Your inner campaign circles are implicated. Open all municipal servers and fire the chief tonight, or we raid City Hall tomorrow!”",
    "dilemma_id": "Mengorbankan Kepala Dinas dan timses sendiri demi supremasi hukum, atau melindungi mereka dengan risiko operasi tangkap tangan di Balai Kota.",
    "dilemma_en": "Sacrifice your trusted chief and campaign loyalists to uphold the law, or shield them and face an explosive dawn raid on City Hall.",
    "choices": [
      {
        "id": "cooperate_investigators_t2",
        "tone_id": "⚖️ Serahkan Berkas Lengkap & Copot Pejabat Nakal",
        "tone_en": "⚖️ Hand Over All Server Logs & Dismiss Corrupt Chief",
        "text_id": "“Tidak ada ruang untuk korupsi di periode kedua saya! Saya tanda tangani surat pencopotan Kadis sekarang dan buka seluruh log server e-katalog untuk penyidik.”",
        "text_en": "“There is no sanctuary for corruption in my second term! I sign the termination decree right now and grant investigators unrestricted server logs.”",
        "fx": {
          "sat": 10,
          "risk": -20
        },
        "actors": {
          "Hukum": 20,
          "Birokrasi": -10,
          "Warga": 10
        },
        "flag": "y1q4_t2_purged_corrupt_tender_clique",
        "consequence_id": "Citra antikorupsi Anda dipuji nasional, pejabat birokrasi menjadi sangat berhati-hati dan bersih dalam lelang.",
        "consequence_en": "Your integrity is lauded nationally, instilling unprecedented transparency across municipal procurement agencies."
      },
      {
        "id": "internal_inspectorate_first_t2",
        "tone_id": "📑 Minta Waktu Audit Inspektorat Daerah 14 Hari",
        "tone_en": "📑 Request 14-Day Internal Regional Audit First",
        "text_id": "“Beri kami waktu 14 hari agar Inspektorat Daerah memverifikasi kerugian negara secara prosedural sebelum status pidana ditetapkan.”",
        "text_en": "“Grant us 14 days for the Regional Inspectorate to establish procedural findings before criminal status is formalized.”",
        "fx": {
          "sat": -2,
          "risk": 8
        },
        "actors": {
          "Hukum": -8,
          "Birokrasi": 6
        },
        "flag": "y1q4_t2_internal_audit_delay",
        "consequence_id": "Penyelidikan berjalan tenang, namun media mencurigai adanya upaya mengulur waktu untuk menghilangkan barang bukti.",
        "consequence_en": "The probe proceeds discreetly, though investigative outlets allege an attempt to shred sensitive paper trails."
      },
      {
        "id": "block_investigation_t2",
        "tone_id": "🛡️ Hubungi Pimpinan Mabes & Minta Perlindungan Politik",
        "tone_en": "🛡️ Pull Strings at High Headquarters to Quash Probe",
        "text_id": "“Kompol Bagas, jangan gegabah mempermalukan pemerintah daerah. Saya akan telepon atasan Anda di Mabes untuk koordinasi tertutup.”",
        "text_en": "“Officer, do not recklessly humiliate regional governance. I will speak directly to your superiors to coordinate this behind closed doors.”",
        "fx": {
          "sat": -12,
          "risk": 35
        },
        "actors": {
          "Hukum": -22,
          "Media": -15,
          "Birokrasi": 10
        },
        "flag": "y1q4_t2_suppressed_tipikor_probe",
        "consequence_id": "Penggeledahan dibatalkan sementara, namun penyidik membocorkan dokumen ke jurnalis dan memicu ancaman OTT.",
        "consequence_en": "The raid is postponed, but frustrated investigators leak the wiretaps to press outlets, creating an imminent sting threat."
      }
    ]
  },
  {
    "quarter": 5,
    "year": 2,
    "quarterNum": 1,
    "title_id": "Penyanderaan Pokir & Anggaran Siluman Banggar",
    "title_en": "Legislative Hostage-Taking & Phantom Slush Funds",
    "character_id": "Ir. Hendra Gunawan",
    "character_en": "Ir. Hendra Gunawan",
    "role_id": "Ketua Badan Anggaran (Banggar) DPRD",
    "role_en": "Chairman Legislative Budgeting Committee (Banggar)",
    "avatar": "👨‍⚖️",
    "mood_id": "📑 Menyandera Pengesahan Perda APBD Perubahan",
    "mood_en": "📑 Stalling Mid-Year Budget Amendments",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, di periode kedua ini Anda jangan bermimpi bisa meloloskan APBD-Perubahan tanpa restu Banggar! Kami minta alokasi dana Pokir Rp 400 Miliar disebar ke 50 anggota dewan tanpa input SIPD e-budgeting. Jika ditolak, seluruh program megastruktur Anda kami coret sampai nol!”",
    "dialogue_en": "“Mayor, do not dream of passing the Revised APBD without our blessing! We demand Rp 400 Billion in discretionary constituent grants distributed off-the-books outside the e-budget system. Refuse, and we will slash your signature transit projects to zero!”",
    "dilemma_id": "Menolak pemerasan Banggar berisiko memicu kebuntuan total proyek infrastruktur kota, menerima melanggar undang-undang perbendaharaan daerah.",
    "dilemma_en": "Defying the budget chair halts urban construction dead in its tracks; yielding breaches strict public finance transparency statutes.",
    "choices": [
      {
        "id": "veto_pork_t2",
        "tone_id": "⚖️ Tolak Mentah-mentah & Buka Draf Pokir ke Warga",
        "tone_en": "⚖️ Veto Slush Funds & Publish Council Allocations Online",
        "text_id": "“Setiap rupiah uang rakyat wajib tercatat di e-budgeting transparan! Saya tidak akan tunduk pada pemerasan dewan. Draf usulan siluman ini saya unggah ke portal terbuka sekarang juga!”",
        "text_en": "“Every rupiah of public funds must be tracked on transparent e-budgeting! I will never bow to legislative extortion. I am uploading your slush fund draft to the city portal right now!”",
        "fx": {
          "sat": 12,
          "risk": -10
        },
        "actors": {
          "DPRD": -25,
          "Media": 15,
          "Warga": 12
        },
        "flag": "y2q1_t2_published_pork_barrel",
        "consequence_id": "Warga berunjuk rasa mengepung gedung DPRD mendukung Walikota, memaksa fraksi menyetujui APBD murni tanpa dana siluman.",
        "consequence_en": "Citizens swarm the council building in support of the Mayor, forcing cowed politicians to pass a clean budget without pork."
      },
      {
        "id": "rationalize_pokir_t2",
        "tone_id": "🤝 Akomodir Program Fisik Warga Resmi Lewat Musrenbang",
        "tone_en": "🤝 Legalize Demands as Verified Musrenbang Projects",
        "text_id": "“Kami tidak bisa cairkan dana gelondongan tanpa sistem. Namun jika usulan dewan berupa perbaikan drainase warga dan jalan kampung, kami masukkan resmi ke Musrenbang.”",
        "text_en": "“We cannot disburse blind lump sums. But if your proposals target neighborhood drainage and paving, we will integrate them into verified community planning.”",
        "fx": {
          "sat": 4,
          "risk": 4,
          "apbd": -0.2
        },
        "actors": {
          "DPRD": 12,
          "Birokrasi": 4
        },
        "flag": "y2q1_t2_legalized_constituent_works",
        "consequence_id": "Parlemen puas tanpa melanggar regulasi, proyek-proyek lingkungan warga terwujud cepat di lapangan.",
        "consequence_en": "The council is pacified within legal bounds, accelerating grassroots paving and drainage works across districts."
      },
      {
        "id": "capitulate_banggar_t2",
        "tone_id": "📑 Pasrahkan Alokasi Anggaran Demi Kelancaran Proyek",
        "tone_en": "📑 Capitulate to Slush Fund Demands for Speed",
        "text_id": "“Terserah Banggar bagaimana membaginya, yang penting seluruh anggaran proyek strategis saya disahkan tepat waktu.”",
        "text_en": "“Distribute it as you see fit, as long as my flagship city projects are fully funded and ratified without delays.”",
        "fx": {
          "sat": -8,
          "risk": 25,
          "apbd": -0.4
        },
        "actors": {
          "DPRD": 25,
          "Warga": -12,
          "Hukum": -10
        },
        "flag": "y2q1_t2_surrendered_to_banggar_slush",
        "consequence_id": "APBD disahkan dalam hitungan jam dengan pesta makan malam mewah, namun defisit APBD melebar tajam.",
        "consequence_en": "The budget is ratified in record hours over lavish banquets, but municipal treasury reserves suffer severe strain."
      }
    ]
  },
  {
    "quarter": 6,
    "year": 2,
    "quarterNum": 2,
    "title_id": "Bisnis Yayasan Pasangan & Konflik Kepentingan",
    "title_en": "Spousal Foundations & Shadow Conflicts of Interest",
    "character_id": "{{SPOUSE_NAME}}",
    "character_en": "{{SPOUSE_NAME}}",
    "role_id": "Pasangan Walikota & Ketua TP PKK Kota",
    "role_en": "Mayoral Spouse & Civic Welfare Foundation Chair",
    "avatar": "👩‍🦰",
    "mood_id": "🥺 Memohon Izin Hibah Sosial & Lahan Yayasan",
    "mood_en": "🥺 Pleading for Social Grants & Foundation Land Title",
    "tension": "medium",
    "dialogue_id": "“Mas... yayasan sosial dan klinik kanker anak yang kubangun membutuhkan hibah bansos Rp 15 Miliar dan pelepasan aset lahan milik Pemkot di pusat kota. LSM dan wartawan mulai menuduh ini konflik kepentingan nepotisme keluarga walikota. Mas, apakah kamu tega melihat klinik anak-anak ini ditutup hanya demi menjaga citra sucimu di koran?”",
    "dialogue_en": "“My love... the pediatric oncology foundation and clinics I run desperately need a Rp 15 Billion city grant and prime municipal land titles. Watchdogs and reporters are accusing us of family nepotism. Can you really bear to see poor children turned away just to preserve your spotless saintly image in newspapers?”",
    "dilemma_id": "Membantu yayasan keluarga demi tujuan kemanusiaan namun sarat konflik kepentingan, atau menolak dan memicu keretakan rumah tangga.",
    "dilemma_en": "Funding a family foundation serves noble humanitarian goals but constitutes clear conflict of interest; refusing fractures your marriage.",
    "choices": [
      {
        "id": "deny_spousal_grant_t2",
        "tone_id": "⚖️ Tolak Hibah Daerah: Gunakan Penggalangan Dana Swasta",
        "tone_en": "⚖️ Deny Public Grants: Mandate Private Philanthropy",
        "text_id": "“{{SPOUSE_FIRSTNAME}}, niatmu mulia, tapi uang APBD tidak boleh mengalir ke yayasan keluarga walikota! Itu pelanggaran integritas fatal. Aku akan bantu carikan sponsor CSR swasta murni tanpa menyentuh satu rupiah pun kas daerah.”",
        "text_en": "“{{SPOUSE_FIRSTNAME}}, your mission is noble, but public funds must never flow to the mayoral family foundation! That is an absolute integrity violation. I will help rally private corporate philanthropists without taking a single cent from taxpayers.”",
        "fx": {
          "sat": 8,
          "risk": -12
        },
        "actors": {
          "Hukum": 15,
          "Media": 10,
          "Warga": 6
        },
        "flag": "y2q2_t2_denied_spousal_foundation_grant",
        "consequence_id": "Media dan KPK memuji etika kepemimpinan Anda, yayasan keluarga berhasil mandiri lewat donasi filantropi terpercaya.",
        "consequence_en": "Press and anti-graft bodies praise your ethical stance, and the foundation succeeds through transparent private charity."
      },
      {
        "id": "open_partnership_t2",
        "tone_id": "🏥 Hibahkan Aset Secara Terbuka Lewat RSUD Daerah",
        "tone_en": "🏥 Integrate Facility Directly into Regional Public Hospital",
        "text_id": "“Tanah dan bangunan tersebut tetap aset Pemkot, namun dioperasikan bersama RSUD secara resmi sehingga tidak ada kepemilikan pribadi.”",
        "text_en": "“The land remains city property, operated under formal joint governance with the City Hospital so no private ownership exists.”",
        "fx": {
          "sat": 6,
          "risk": 4,
          "apbd": -0.05
        },
        "actors": {
          "Birokrasi": 6,
          "Warga": 8
        },
        "flag": "y2q2_t2_public_health_integration",
        "consequence_id": "Pelayanan medis anak miskin terjamin prima di bawah naungan Pemkot tanpa celaan hukum.",
        "consequence_en": "Pediatric care is safeguarded under official municipal auspices without exposing you to legal liabilities."
      },
      {
        "id": "approve_exclusive_grant_t2",
        "tone_id": "📑 Teken Hibah Rp 15 Miliar & Berikan Sertifikat Aset",
        "tone_en": "📑 Approve Rp 15B Grant & Transfer Land Title Privately",
        "text_id": "“Ambillah demi anak-anak itu. Aku akan perintahkan Kepala BPKAD menyelesaikan berkasnya tanpa banyak tanya.”",
        "text_en": "“Take it for the sake of the children. I will order the Asset Management Chief to sign off on the title transfer quietly.”",
        "fx": {
          "sat": -6,
          "risk": 28,
          "apbd": -0.15
        },
        "actors": {
          "Hukum": -15,
          "Media": -12,
          "Warga": -6
        },
        "flag": "y2q2_t2_favored_family_foundation",
        "consequence_id": "Klinik berdiri megah, namun LSM antikorupsi mendaftarkan gugatan hukum atas dugaan gratifikasi keluarga penguasa.",
        "consequence_en": "The clinic opens in luxury, but civic watchdogs file formal lawsuits alleging illegal executive family patronage."
      }
    ]
  },
  {
    "quarter": 7,
    "year": 2,
    "quarterNum": 3,
    "title_id": "Manuver Wakil Walikota Menjelang Suksesi 2029",
    "title_en": "The Vice Mayor's 2029 Succession Ambitions",
    "character_id": "{{VICE_MAYOR_NAME}}",
    "character_en": "{{VICE_MAYOR_NAME}}",
    "role_id": "Wakil Walikota Nusapura",
    "role_en": "Vice Mayor of Nusapura",
    "avatar": "👨‍💼",
    "mood_id": "😏 Menggalang Barisan Birokrat & Parpol Oposisi",
    "mood_en": "😏 Rallying Bureaucrats & Shadow Opposition Factions",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, periode kedua ini adalah akhir kepemimpinan Anda. Sudah saatnya estafet dipersiapkan untuk saya pada Pilkada berikutnya. Saya minta kendali mutasi pejabat eselon II dan ketua lelang proyek fisik diserahkan kepada saya. Jangan paksa saya memobilisasi birokrasi untuk memboikot program Anda!”",
    "dialogue_en": "“Mayor, this term is the final chapter of your rule. It is time to prepare the succession for me in the next election. Hand over appointments for department heads and tender committees to my desk. Do not force me to mobilize the civil service to stall your projects!”",
    "dilemma_id": "Menghadapi pembangkangan politik dari dalam Balai Kota sendiri saat pamor menjelang akhir jabatan.",
    "dilemma_en": "Face a rising shadow mutiny inside your own executive branch as your tenure enters its final cycle.",
    "choices": [
      {
        "id": "reign_in_vice_t2",
        "tone_id": "⚡ Tegaskan Satu Komando: Pangkas Wewenang Tambahan",
        "tone_en": "⚡ Enforce Single Executive Command: Strip Discretionary Portfolios",
        "text_id": "“Pak {{VICE_MAYOR_FIRSTNAME}}, jangan berkhianat di tengah jalan! Selama saya menjabat, komando birokrasi ada di tangan saya. Siapa pun ASN yang bermain politik praktis akan saya nonjob-kan hari ini juga!”",
        "text_en": "“{{VICE_MAYOR_FIRSTNAME}}, do not betray our pact halfway! As long as I wear this sash, executive command rests with me. Any bureaucrat playing partisan politics will be demoted today!”",
        "fx": {
          "sat": 6,
          "risk": -5
        },
        "actors": {
          "Birokrasi": 12,
          "DPRD": -10
        },
        "flag": "y2q3_t2_purged_vice_cabinet_influence",
        "consequence_id": "Birokrasi kembali tegak disiplin di bawah komando Walikota, Wawalkot terisolir tanpa pengaruh struktural.",
        "consequence_en": "The civil service snaps back to strict discipline under your sole command; your deputy is structurally isolated."
      },
      {
        "id": "mentor_succession_t2",
        "tone_id": "🤝 Bentuk Tim Akselerasi Bersama & Berbagi Panggung Positif",
        "tone_en": "🤝 Form Joint Acceleration Taskforce & Share Public Stage",
        "text_id": "“Jika Anda ingin menjadi penerus saya, buktikan dengan kerja nyata. Pimpin program pengentasan kemiskinan dan buktikan di depan warga bahwa Anda layak memimpin.”",
        "text_en": "“If you wish to succeed me, earn it through exceptional performance. Lead the anti-poverty drive and prove to citizens you are worthy to govern.”",
        "fx": {
          "sat": 8,
          "risk": 0,
          "apbd": -0.1
        },
        "actors": {
          "Birokrasi": 10,
          "Warga": 8
        },
        "flag": "y2q3_t2_mentored_succession_pact",
        "consequence_id": "Balaikota solid dan harmonis, publik mengapresiasi kedewasaan politik transisi kepemimpinan kota.",
        "consequence_en": "City Hall remains completely unified, and voters admire the mature, orderly succession planning."
      },
      {
        "id": "appease_vice_bureaucracy_t2",
        "tone_id": "📑 Serahkan Penataan ASN Demi Ketenangan Kantor",
        "tone_en": "📑 Concede Bureaucratic Personnel Files for Quiet",
        "text_id": "“Silakan kelola mutasi pejabat, asal jangan bikin gaduh yang mengganggu penyelesaian program kerja saya.”",
        "text_en": "“Handle civil service appointments as you like, as long as you do not disrupt the completion of my key programs.”",
        "fx": {
          "sat": -6,
          "risk": 20
        },
        "actors": {
          "Birokrasi": -15,
          "DPRD": 10
        },
        "flag": "y2q3_t2_surrendered_personnel_to_vice",
        "consequence_id": "Terbentuk polarisasi birokrasi kembar di Balaikota, pejabat ASN bingung menentukan loyalitas kerja.",
        "consequence_en": "A dual-power factionalism paralyzes City Hall, leaving department staff torn between conflicting executive masters."
      }
    ]
  },
  {
    "quarter": 8,
    "year": 2,
    "quarterNum": 4,
    "title_id": "Investigasi Media Nasional & Konsorsium Wartawan",
    "title_en": "National Media Consortium & Whistleblower Dossiers",
    "character_id": "Rian Pratama",
    "character_en": "Rian Pratama",
    "role_id": "Redaktur Utama Konsorsium Investigasi Pers",
    "role_en": "Chief Editor National Investigative Consortium",
    "avatar": "🎙️",
    "mood_id": "📸 Menunjukkan Rekaman Audit Forensik Dana Bansos",
    "mood_en": "📸 Revealing Forensic Bank Slips of Secret City Discretionary Funds",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, konsorsium jurnalis kami mendapatkan bocoran rekening koran dan percakapan rahasia mengenai penggunaan pos dana darurat bencana untuk pembiayaan politik kampanye lalu. Kami memberi waktu 24 jam untuk hak jawab sebelum laporan investigasi ini tayang di prime time televisi dan media nasional!”",
    "dialogue_en": "“Mr. Mayor, our investigative team has obtained leaked transaction slips showing emergency relief accounts diverted toward election operations. We offer 24 hours for your formal response before this special investigation airs on national prime-time television!”",
    "dilemma_id": "Menghadapi pengungkapan media yang berpotensi menghancurkan reputasi kepemimpinan periode kedua.",
    "dilemma_en": "Confront an explosive media exposé threatening to implode your legacy and trigger instant federal scrutiny.",
    "choices": [
      {
        "id": "open_transparent_press_t2",
        "tone_id": "🎙️ Konferensi Pers Terbuka & Buka Audit BPK Lengkap",
        "tone_en": "🎙️ Live Press Conference & Publish Unredacted Audit Files",
        "text_id": "“Buka pintu untuk seluruh jurnalis! Kita gelar konferensi pers langsung, buka draf audit BPK, dan tunjukkan setiap sen pos darurat benar-benar tersalurkan ke warga.”",
        "text_en": "“Open the doors to every journalist! We hold a live press conference, publish the complete audit logs, and demonstrate every cent reached verified victims.”",
        "fx": {
          "sat": 10,
          "risk": -15
        },
        "actors": {
          "Media": 20,
          "Warga": 12,
          "Hukum": 10
        },
        "flag": "y2q4_t2_open_press_transparency",
        "consequence_id": "Keterbukaan total Anda membersihkan nama baik Balai Kota, media memuji standar akuntabilitas publik Nusapura.",
        "consequence_en": "Unrestricted transparency vindicates the administration, earning widespread praise for exemplary public disclosure."
      },
      {
        "id": "clarify_legal_spokesperson_t2",
        "tone_id": "📑 Tanggapi Tertulis Lewat Tim Kuasa Hukum Resmi",
        "tone_en": "📑 Issue Detailed Written Rebuttal via Corporation Counsel",
        "text_id": "“Sampaikan keterangan tertulis secara rinci dan legalistik lewat Dinas Kominfo dan Bagian Hukum agar tidak dipelintir.”",
        "text_en": "“Submit a meticulous legal rebuttal through the City Attorney and Communications Bureau to avoid sensationalist spin.”",
        "fx": {
          "sat": 0,
          "risk": 5
        },
        "actors": {
          "Media": 4,
          "Hukum": 4
        },
        "flag": "y2q4_t2_formal_legal_rebuttal",
        "consequence_id": "Berita tayang dengan porsi berimbang tanpa kegaduhan berlebih, opini publik tetap terkendali.",
        "consequence_en": "The report airs with balanced executive rebuttals, keeping public sentiment steady and contained."
      },
      {
        "id": "buy_advertising_silence_t2",
        "tone_id": "💰 Gelontorkan Belanja Iklan Daerah untuk Membungkam",
        "tone_en": "💰 Blanket Media with Massive Public Ad Contracts",
        "text_id": "“Hubungi pimpinan redaksi mereka. Alokasikan paket iklan sosialisasi pembangunan Rp 2 Miliar agar pemberitaan miring ini dihentikan.”",
        "text_en": "“Contact their corporate publishers. Allocate Rp 2 Billion in municipal promotional contracts to cancel the broadcast.”",
        "fx": {
          "sat": -10,
          "risk": 30,
          "apbd": -0.1
        },
        "actors": {
          "Media": -15,
          "Hukum": -15,
          "Warga": -8
        },
        "flag": "y2q4_t2_bought_media_suppression",
        "consequence_id": "Liputan dibatalkan di media tersebut, namun para jurnalis independen membocorkan skandal uang bungkam ke platform media sosial viral.",
        "consequence_en": "The broadcast is spiked, but independent journalists leak the hush-money contract online, causing explosive viral outrage."
      }
    ]
  },
  {
    "quarter": 9,
    "year": 3,
    "quarterNum": 1,
    "title_id": "Tuntutan Jatah Parkir & Keamanan dari Aliansi Ormas",
    "title_en": "Paramilitary Guilds & Municipal Turf Extortion",
    "character_id": "Bang Jampang",
    "character_en": "Bang Jampang",
    "role_id": "Panglima Presidium Gabungan Ormas Nusapura",
    "role_en": "Commander United Paramilitary Civic Guilds",
    "avatar": "🤠",
    "mood_id": "💥 Menggebrak Meja Menuntut Retribusi Parkir",
    "mood_en": "💥 Slapping the Table Demanding City Parking Concessions",
    "tension": "high",
    "dialogue_id": "“Pak Walikota! Ribuan anggota kami sudah menjaga ketertiban kota dan mengamankan TPS Anda kemarin. Sekarang Pemkot mau pasang mesin parkir elektronik di seluruh Nusapura? Itu mematikan dapur anak buah kami! Serahkan pengelolaan parkir 5 kecamatan kepada kami, atau jalanan kota tidak akan pernah aman lagi!”",
    "dialogue_en": "“Mayor! Thousands of our men kept peace and defended your ballot boxes. Now City Hall wants automated digital parking meters across Nusapura? That kills our men's livelihoods! Hand over the parking concession in all 5 districts, or we guarantee the streets will never be peaceful again!”",
    "dilemma_id": "Menghadapi pemerasan premanisme terorganisir yang mengancam ketertiban umum dan kebocoran retribusi daerah.",
    "dilemma_en": "Confront entrenched protection rackets threatening public order and draining millions in municipal revenue.",
    "choices": [
      {
        "id": "digitalize_enforce_t2",
        "tone_id": "🛡️ Tegakkan Parkir Digital & Tangkap Oknum Pemeras",
        "tone_en": "🛡️ Enforce Digital Meters & Arrest Extortion Rings",
        "text_id": "“Nusapura adalah kota hukum, bukan milik ormas! Mesin e-parkir tetap dipasang, dan siapa pun yang berani memeras warga atau merusak mesin akan langsung diseret ke sel tahanan!”",
        "text_en": "“Nusapura is ruled by law, not thuggish syndicates! Digital meters will be deployed as scheduled, and anyone extorting drivers will be arrested on the spot!”",
        "fx": {
          "sat": 12,
          "risk": -10,
          "pad": 0.3
        },
        "actors": {
          "Ormas": -30,
          "Warga": 15,
          "Hukum": 15
        },
        "flag": "y3q1_t2_eliminated_parking_mafia",
        "consequence_id": "Pendapatan retribusi parkir naik 300% masuk kas daerah, jalanan kota tertib dan warga merasa sangat terlindungi.",
        "consequence_en": "City parking revenue surges 300% into public coffers; streets become orderly and citizens feel truly safe."
      },
      {
        "id": "empower_formal_guardians_t2",
        "tone_id": "👔 Rekrut Anggota Ormas Jadi Petugas Resmi Parkir",
        "tone_en": "👔 Train & Enlist Guild Members as Uniformed City Staff",
        "text_id": "“Kami tidak ingin mematikan nafkah siapa pun. Anggota Anda kami rekrut resmi dengan gaji UMK dan BPJS sebagai juru parkir berseragam resmi Pemkot.”",
        "text_en": "“We do not wish to starve anyone. We will formally train and hire your men as uniformed municipal attendants with living wages and health insurance.”",
        "fx": {
          "sat": 6,
          "risk": 2,
          "apbd": -0.05
        },
        "actors": {
          "Ormas": 15,
          "Warga": 6
        },
        "flag": "y3q1_t2_formalized_parking_labor",
        "consequence_id": "Gesekan premanisme berhasil ditransformasikan menjadi lapangan kerja legal yang tertib dan produktif.",
        "consequence_en": "Grassroots thuggery is transformed into disciplined, productive civic employment with community gratitude."
      },
      {
        "id": "surrender_turf_t2",
        "tone_id": "📑 Beri SK Pengelolaan Parkir Tradisional Tanpa Mesin",
        "tone_en": "📑 Grant Concessions to Paramilitary Enforcers for Peace",
        "text_id": "“Baiklah, batalkan pemasangan e-parkir di 3 kecamatan pinggiran dan serahkan kepada ormas Anda asal keamanan dijamin.”",
        "text_en": "“Fine. Scrap digital meters in the 3 outer districts and grant concessions to your guilds, provided you keep the peace.”",
        "fx": {
          "sat": -8,
          "risk": 25,
          "pad": -0.2
        },
        "actors": {
          "Ormas": 25,
          "Warga": -14,
          "Hukum": -12
        },
        "flag": "y3q1_t2_capitulated_to_paramilitary",
        "consequence_id": "Ormas menguasai seluruh kantong parkir kota secara liar, pungli merajalela dan memicu kemarahan pemilik kendaraan.",
        "consequence_en": "Rackets take full control of parking lots; unchecked extortion spreads and triggers bitter backlash from motorists."
      }
    ]
  },
  {
    "quarter": 10,
    "year": 3,
    "quarterNum": 2,
    "title_id": "Audit Khusus BPKP & Ancaman Pemotongan Dana Transfer",
    "title_en": "Special Federal Audit & National Transfer Withholding",
    "character_id": "Dr. Aris Sudibyo",
    "character_en": "Dr. Aris Sudibyo",
    "role_id": "Inspektur Jenderal Kementerian Keuangan RI",
    "role_en": "Inspector General Ministry of Finance",
    "avatar": "👨‍💼",
    "mood_id": "📑 Membawa Hasil Audit Silpa & Proyek Mangkrak",
    "mood_en": "📑 Presenting Unabsorbed Capital & Inactive Municipal Balances",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, di periode kedua ini Kemenkeu mendapati saldo kas daerah Anda mengendap di deposito perbankan hingga Rp 1,5 Triliun sementara belanja modal infrastruktur publik terlambat. Jika dana ini tidak direalokasikan ke proyek produktif dalam kuartal ini, Dana Alokasi Umum (DAU) Nusapura kami pangkas 20%!”",
    "dialogue_en": "“Mayor, federal auditors discovered Rp 1.5 Trillion in municipal funds idle in commercial bank deposits while infrastructure lagged behind. Reallocate these reserves into productive citizen projects this quarter, or we deduct 20% from Nusapura's General Allocation Grant!”",
    "dilemma_id": "Mempercepat serapan anggaran secara masif namun berisiko salah sasaran, atau menolak dan kehilangan dana transfer pusat.",
    "dilemma_en": "Dramatically accelerate budget absorption with speed vs risk of waste, or face a crippling federal grant penalty.",
    "choices": [
      {
        "id": "emergency_stimulus_t2",
        "tone_id": "⚡ Luncurkan Paket Stimulus Kilat: Bedah Rumah & Irigasi",
        "tone_en": "⚡ Launch Rapid Municipal Stimulus: Home Upgrades & Canals",
        "text_id": "“Kami tidak akan biarkan uang rakyat mengendap! Saya terbitkan Perwali darurat mencairkan dana cadangan untuk renovasi 3.000 rumah tak layak dan normalisasi saluran air.”",
        "text_en": "“We will not allow public money to sit idle! I issue an emergency decree deploying reserves for 3,000 low-income home repairs and flood canal cleanups.”",
        "fx": {
          "sat": 12,
          "risk": -5,
          "infra": 8
        },
        "actors": {
          "Pusat": 15,
          "Warga": 15,
          "Birokrasi": 10
        },
        "flag": "y3q2_t2_rapid_stimulus_absorption",
        "consequence_id": "Serapan anggaran melonjak menembus 95%, ekonomi rakyat bergairah dan Kemenkeu memberi Dana Insentif Daerah tambahan.",
        "consequence_en": "Fiscal absorption spikes to 95%, stimulating the grassroots economy and earning a major national performance bonus."
      },
      {
        "id": "reallocate_megaproject_t2",
        "tone_id": "🚆 Suntikkan ke Pembangunan Proyek MRT & PLTS Bersih",
        "tone_en": "🚆 Capitalize Active MRT & Solar Green Energy Hubs",
        "text_id": "“Alihkan dana mengendap untuk melunasi cicilan konstruksi MRT Line 1 dan perluasan jaringan PLTS kota agar bebas bunga utang.”",
        "text_en": "“Reallocate idle balances toward paying down construction contracts for MRT Line 1 and municipal solar expansion.”",
        "fx": {
          "sat": 6,
          "risk": 0,
          "infra": 12
        },
        "actors": {
          "Pusat": 10,
          "Bisnis": 10
        },
        "flag": "y3q2_t2_capitalized_megaprojects",
        "consequence_id": "Proyek strategis selesai lebih cepat dari jadwal, mempercepat kemandirian energi dan transportasi kota.",
        "consequence_en": "Key megaprojects finish ahead of schedule, accelerating the city's energy independence and transit networks."
      },
      {
        "id": "lobby_minister_t2",
        "tone_id": "📑 Lobi Politik ke Menteri Keuangan Minta Dispensasi",
        "tone_en": "📑 Deploy Political Allies to Secure Federal Waiver",
        "text_id": "“Bunga deposito perbankan adalah penyumbang PAD yang sah. Saya akan bicara dengan pimpinan komisi XI DPR dan menteri untuk meminta kelonggaran.”",
        "text_en": "“Deposit interest is legitimate local revenue. I will coordinate with parliamentary leaders to secure a formal waiver.”",
        "fx": {
          "sat": -6,
          "risk": 18
        },
        "actors": {
          "Pusat": -15,
          "Media": -8,
          "Warga": -6
        },
        "flag": "y3q2_t2_lobbied_federal_waiver",
        "consequence_id": "Pemotongan DAU ditunda, namun pengamat mengecam Pemkot Nusapura yang lebih suka bermain bunga bank daripada membangun kota.",
        "consequence_en": "Sanctions are stayed, but economists blast City Hall for hoarding cash in banks instead of delivering public utilities."
      }
    ]
  },
  {
    "quarter": 11,
    "year": 3,
    "quarterNum": 3,
    "title_id": "Kartel Farmasi & Boikot Pasien BPJS RS Swasta",
    "title_en": "Private Hospital Cartel & Indigent Care Lockouts",
    "character_id": "dr. Michelle Chandra",
    "character_en": "dr. Michelle Chandra",
    "role_id": "Ketua Asosiasi Rumah Sakit Swasta Nusapura",
    "role_en": "President Private Hospital Association",
    "avatar": "👩‍⚕️",
    "mood_id": "🏥 Mengancam Menolak Pasien Kartu Sehat Nusapura",
    "mood_en": "🏥 Threatening to Refuse Municipal Universal Health Patients",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, inflasi alat kesehatan impor melonjak 40%. Klaim BPJS dan Kartu Sehat Nusapura dari Pemkot menunggak Rp 120 Miliar. Jika Pemkot tidak menaikkan tarif subsidi dan mencairkan klaim dalam 7 hari, 14 rumah sakit swasta kami akan menghentikan penerimaan pasien darurat BPJS!”",
    "dialogue_en": "“Mayor, medical inflation has jumped 40%. City reimbursement backlogs have reached Rp 120 Billion. If City Hall does not increase rate subsidies and disburse arrears within 7 days, our 14 private hospitals will refuse indigent emergency admissions!”",
    "dilemma_id": "Membayar tunggakan klaim membengkakkan anggaran kesehatan, membiarkannya menyebabkan pasien miskin ditolak di instalasi darurat.",
    "dilemma_en": "Settling private arrears strains the health budget; stalling leads to indigent patients turned away at emergency wards.",
    "choices": [
      {
        "id": "expand_public_hospital_t2",
        "tone_id": "🏥 Bayar Klaim Sah, Buka Audit & Wajibkan Layanan Darurat",
        "tone_en": "🏥 Pay Verified Claims, Audit Billing & Mandate ER Admissions",
        "text_id": "“Klaim yang terverifikasi bersih kami cairkan segera! Namun jika ada satu pun RS yang berani menolak pasien darurat yang sekarat, izin operasionalnya saya cabut hari itu juga!”",
        "text_en": "“Cleanly audited claims will be honored at once! But if any hospital dares turn away a dying patient at the emergency door, I will revoke their operating license that very day!”",
        "fx": {
          "sat": 10,
          "risk": -5,
          "apbd": -0.15
        },
        "actors": {
          "Warga": 15,
          "Bisnis": 4,
          "Hukum": 10
        },
        "flag": "y3q3_t2_enforced_universal_healthcare",
        "consequence_id": "Tidak ada warga yang terlantar, sistem rujukan kesehatan kota menjadi rujukan percontohan nasional.",
        "consequence_en": "Emergency rejections cease completely; Nusapura's health safety net becomes a national gold standard."
      },
      {
        "id": "build_smart_rsud_t2",
        "tone_id": "🏗️ Tambah 500 Tempat Tidur RSUD Baru Agar Tak Tergantung Swasta",
        "tone_en": "🏗️ Add 500 Public Hospital Beds to Break Private Monopoly",
        "text_id": "“Selesaikan tunggakan pokok, dan alokasikan Rp 0.25 T untuk ekspansi sayap baru RSUD Kota sehingga kita memiliki kapasitas rawat inap mandiri.”",
        "text_en": "“Settle verified balances and allocate Rp 0.25 T to build a massive new wing at the City Hospital, ending reliance on private cartels.”",
        "fx": {
          "sat": 8,
          "risk": 0,
          "apbd": -0.25,
          "health": 10
        },
        "actors": {
          "Warga": 12,
          "Bisnis": -8
        },
        "flag": "y3q3_t2_expanded_city_hospital_beds",
        "consequence_id": "Kemandirian fasilitas kesehatan publik terwujud, warga miskin menikmati layanan kamar rawat modern gratis.",
        "consequence_en": "Public medical sovereignty is achieved, giving low-income families access to first-class modern hospital care."
      },
      {
        "id": "cave_to_hospital_tariffs_t2",
        "tone_id": "📑 Naikkan Subsidi Tarif RS Swasta Tanpa Audit Mendalam",
        "tone_en": "📑 Bow to Private Demands & Hike Tariff Subsidies",
        "text_id": "“Kami naikkan tarif sesuai permintaan konsorsium demi menghindari mogok layanan rumah sakit.”",
        "text_en": "“We will raise subsidized tariffs as demanded by the consortium to avoid any service disruptions.”",
        "fx": {
          "sat": -4,
          "risk": 18,
          "apbd": -0.3
        },
        "actors": {
          "Bisnis": 20,
          "Warga": -6,
          "Hukum": -8
        },
        "flag": "y3q3_t2_subsidized_private_hospital_cartel",
        "consequence_id": "RS swasta melayani kembali dengan ramah, namun APBD terserap habis oleh klaim pengobatan yang membengkak luar biasa.",
        "consequence_en": "Hospitals reopen doors warmly, but medical budget outlays soar out of control, squeezing other civic priorities."
      }
    ]
  },
  {
    "quarter": 12,
    "year": 3,
    "quarterNum": 4,
    "title_id": "Skandal Konstruksi Retak Jalan Tol Lingkar Nusapura",
    "title_en": "Structural Flaws & Kickback Claims on Ring Road",
    "character_id": "Kuntoro Sanjaya",
    "character_en": "Kuntoro Sanjaya",
    "role_id": "Direktur Utama Konsorsium Jalan Tol Lingkar",
    "role_en": "CEO Outer Ring Road Construction Consortium",
    "avatar": "👷‍♂️",
    "mood_id": "💼 Membawa Koper Dokumen Penutupan Hasil Uji Kelayakan",
    "mood_en": "💼 Bringing Settlement Dossiers on Structural Safety Audits",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, pilar layang seksi 3 Tol Lingkar ditemukan mengalami retak rambut saat uji beban dinamis. Jika ini dibongkar, peresmian tol mundur 18 bulan dan konsorsium rugi Rp 800 Miliar. Kami mohon terbitkan sertifikat laik fungsi sementara. Kami siapkan dana kompensasi Rp 25 Miliar untuk kas relawan Anda!”",
    "dialogue_en": "“Mayor, micro-fractures were discovered on the Section 3 elevated pillars during dynamic load testing. Demolishing them delays opening by 18 months and costs Rp 800 Billion. Issue a provisional operating permit. We have set aside Rp 25 Billion in goodwill compensation for your civic foundation!”",
    "dilemma_id": "Memilih antara keselamatan nyawa jutaan pengendara atau menutup mata demi meresmikan proyek tepat waktu dengan uang suap.",
    "dilemma_en": "Choose between commuter lives or covering up engineering flaws to open a showcase megaproject with a bribe.",
    "choices": [
      {
        "id": "halt_and_rebuild_t2",
        "tone_id": "⛔ Tolak Sertifikat, Hentikan Tol & Paksa Audit Independen",
        "tone_en": "⛔ Deny Permit, Halt Tollway & Enforce Independent Audit",
        "text_id": "“Keselamatan nyawa warga Nusapura tidak bisa dibeli dengan sepeser pun uang Anda! Bongkar dan perbaiki pilar retak itu sekarang juga dengan biaya konsorsium Anda sendiri!”",
        "text_en": "“Commuter safety in Nusapura is non-negotiable! Tear down and rebuild those defective pillars immediately at your consortium's sole expense!”",
        "fx": {
          "sat": 8,
          "risk": -20
        },
        "actors": {
          "Hukum": 20,
          "Warga": 14,
          "Bisnis": -15
        },
        "flag": "y3q4_t2_enforced_structural_safety",
        "consequence_id": "Ketegasan Anda mencegah potensi bencana runtuhnya jalan layang, reputasi integritas kepemimpinan Anda abadi.",
        "consequence_en": "Your integrity averts an unimaginable highway collapse tragedy, earning immortal historical reverence."
      },
      {
        "id": "reinforce_with_monitoring_t2",
        "tone_id": "🔬 Pasang Penguat Baja Karbon & Sensor Real-Time",
        "tone_en": "🔬 Mandate Carbon-Fiber Retrofit & Real-Time Sensors",
        "text_id": "“Konsorsium wajib memasang jaket penguat serat karbon dan sensor getaran digital 24 jam yang terhubung langsung ke monitor Balai Kota.”",
        "text_en": "“The consortium must wrap all pillars with carbon-fiber retrofits and install 24/7 digital stress monitors connected to City Hall.”",
        "fx": {
          "sat": 4,
          "risk": 4,
          "pad": 0.2
        },
        "actors": {
          "Bisnis": 8,
          "Warga": 4
        },
        "flag": "y3q4_t2_mandated_carbon_retrofit",
        "consequence_id": "Pilar diperkuat secara sains modern tanpa menunda peresmian, tol dibuka aman dengan pengawasan digital ketat.",
        "consequence_en": "Pillars are scientifically reinforced without major delays; the expressway opens safely under continuous sensor telemetry."
      },
      {
        "id": "accept_bribe_permit_t2",
        "tone_id": "📑 Teken Izin Sementara & Terima Dana Koper Tunai",
        "tone_en": "📑 Issue Provisional Permit & Pocket Foundation Bribe",
        "text_id": "“Teken sertifikat laik fungsi sementara. Pastikan pembatasan tonase truk dipasang agar tidak ada risiko ambruk.”",
        "text_en": "“Sign the provisional permit. Just ensure gross vehicle weight limits are posted to minimize collapse risk.”",
        "fx": {
          "sat": -10,
          "risk": 35,
          "apbd": 0.2
        },
        "actors": {
          "Bisnis": 25,
          "Hukum": -25,
          "Warga": -15
        },
        "flag": "y3q4_t2_took_ringroad_kickback",
        "consequence_id": "Jalan tol diresmikan meriah dengan pita emas, namun intel Tipikor telah merekam penyerahan koper suap tersebut.",
        "consequence_en": "The highway opens with golden ribbon fanfare, but anti-graft agents secretly photograph the payoff exchange."
      }
    ]
  },
  {
    "quarter": 13,
    "year": 4,
    "quarterNum": 1,
    "title_id": "Peringatan Intelijen Teritorial: Ancaman Polarisasi Ekstrem",
    "title_en": "Territorial Defense Intel: Radicalization & Civic Polarization",
    "character_id": "Kolonel Bambang",
    "character_en": "Kolonel Bambang",
    "role_id": "Komandan Kodim & Satgas Intelijen Teritorial",
    "role_en": "Military District Commander & Territorial Intel Chief",
    "avatar": "🎖️",
    "mood_id": "⚠️ Peta Ancaman Gesekan Antar-Kelompok Warga",
    "mood_en": "⚠️ Threat Map of Sectarian & Civic Flashpoints",
    "tension": "high",
    "dialogue_id": "“Lapor Pak Walikota. Menjelang akhir masa jabatan Anda, kelompok radikal dan sel teror memanfaatkan isu penggusuran lahan rel kereta api untuk menyulut kerusuhan komunal di wilayah Sentral dan Cakrawala. Kami menyarankan penerapan Operasi Teritorial gabungan dan razia senjata tajam serentak.”",
    "dialogue_en": "“Mayor, as your final term approaches its twilight, militant sleeper cells are exploiting transit corridor evictions to provoke sectarian riots across Sentral and Cakrawala. We strongly recommend a joint territorial operation and immediate sweep operations.”",
    "dilemma_id": "Menerapkan pendekatan militeristik tegas menjaga stabilitas namun menekan hak sipil, atau dialog terbuka dengan risiko pecah kerusuhan.",
    "dilemma_en": "Deploy aggressive military patrols to guarantee stability at cost of civil liberties, or rely on dialogue risking riots.",
    "choices": [
      {
        "id": "dialogue_and_fair_resettlement_t2",
        "tone_id": "🕊️ Musyawarah Damai Warga & Skema Ganti Untung Relokasi",
        "tone_en": "🕊️ Community Dialogue & Fair Relocation Compensation",
        "text_id": "“Jangan gunakan moncong senjata kepada rakyat sendiri! Saya akan turun langsung ke Sentral malam ini, duduk berdialog dengan tokoh warga, dan siapkan ganti untung tanah yang adil.”",
        "text_en": "“Do not aim military rifles at our own people! I will go to Sentral tonight myself, sit on the floor with community elders, and ensure fair compensation.”",
        "fx": {
          "sat": 12,
          "risk": -10,
          "apbd": -0.1
        },
        "actors": {
          "Warga": 20,
          "Militer": 6,
          "Hukum": 10
        },
        "flag": "y4q1_t2_peaceful_conflict_resolution",
        "consequence_id": "Ketegangan mereda damai tanpa sebutir peluru pun meletus, warga menyerahkan senjata tradisional secara sukarela.",
        "consequence_en": "Tensions dissolve peacefully without a single shot fired; residents voluntarily surrender improvised weapons in trust."
      },
      {
        "id": "joint_community_policing_t2",
        "tone_id": "🛡️ Pos Terpadu Kamtibmas Gabungan TNI-Polri & Warga",
        "tone_en": "🛡️ Joint Civil-Military Peace Posts with Neighborhood Leaders",
        "text_id": "“Dirikan pos terpadu ronda bersama warga dan aparat di 12 titik rawan untuk mencegah provokator luar masuk.”",
        "text_en": "“Establish joint neighborhood defense posts with citizens and soldiers at 12 vulnerable intersections to block external agitators.”",
        "fx": {
          "sat": 6,
          "risk": -5
        },
        "actors": {
          "Militer": 12,
          "Warga": 8
        },
        "flag": "y4q1_t2_community_policing_posts",
        "consequence_id": "Keamanan lingkungan terjaga kondusif dengan partisipasi aktif pemuda dan tokoh agama setempat.",
        "consequence_en": "District peace is secured through active grassroots youth and clergy participation, keeping agitation at zero."
      },
      {
        "id": "military_curfew_t2",
        "tone_id": "⚡ Berlakukan Jam Malam & Tangkap Seluruh Tokoh Protes",
        "tone_en": "⚡ Declare Municipal Night Curfew & Detain Protest Leaders",
        "text_id": "“Terapkan jam malam mulai pukul 21.00 di Sentral. Tangkap siapa pun yang berkerumun di jalanan.”",
        "text_en": "“Declare a 9:00 PM curfew across Sentral. Detain anyone assembling on the avenues to guarantee total order.”",
        "fx": {
          "sat": -15,
          "risk": 15
        },
        "actors": {
          "Militer": 20,
          "Warga": -22,
          "Media": -12
        },
        "flag": "y4q1_t2_imposed_military_curfew",
        "consequence_id": "Kota hening mencekam di bawah laras senjata, namun kemarahan rakyat terhadap kesewenang-wenangan memuncak.",
        "consequence_en": "The streets fall into fearful silence under armed convoys, but deep resentment against martial overreach brews beneath."
      }
    ]
  },
  {
    "quarter": 14,
    "year": 4,
    "quarterNum": 2,
    "title_id": "Krisis Air Bersih & Pencemaran Limbah Industri Sungai Nusapura",
    "title_en": "Drinking Water Crisis & River Toxic Chemical Dumping",
    "character_id": "Abah Rustam",
    "character_en": "Abah Rustam",
    "role_id": "Sesepuh Agung Majelis Adat & Lingkungan Nusapura",
    "role_en": "Grand Elder Council of Indigenous Guardians & River Stewards",
    "avatar": "🧓",
    "mood_id": "🌊 Membawa Sampel Air Sungai Hitam Beracun",
    "mood_en": "🌊 Bearing Samples of Black Toxic River Sludge",
    "tension": "high",
    "dialogue_id": "“Anak prabu Walikota... Sungai Nusapura yang menghidupi nenek moyang kita ratusan tahun kini menghitam berbusa racun kimia pabrik tekstil sentral. Ribuan warga kami di hilir keracunan kulit dan air PDAM mati total! Jika engkau tidak menyegel pabrik-pabrik perusak itu sekarang, kutukan leluhur dan gugatan class action adat akan menimpamu!”",
    "dialogue_en": "“Mayor... the great river that sustained our ancestors for centuries now flows pitch black with industrial chemical froth. Thousands downstream suffer skin lesions and city water intakes are shut down! If you do not seal those factories today, the wrath of ancestral guardians and class-action suits will descend upon you!”",
    "dilemma_id": "Menyegel pabrik mencoreng iklim investasi industri, membiarkannya meracuni pasokan air bersih 1 juta jiwa warga kota.",
    "dilemma_en": "Sealing offending factories upsets corporate titans; inaction poisons the sole water lifeline of 1 million citizens.",
    "choices": [
      {
        "id": "seal_polluting_factories_t2",
        "tone_id": "🚫 Segel 8 Pabrik Tekstil & Wajibkan IPAL Terpadu Modern",
        "tone_en": "🚫 Seal 8 Offending Mills & Mandate Ultra-Modern Effluent Plants",
        "text_id": "“Air adalah sumber kehidupan suci yang tak boleh dinodai! Saya perintahkan Satpol PP dan DLH memasang garis segel di 8 pabrik itu siang ini. Buka kembali hanya jika IPAL modern beroperasi!”",
        "text_en": "“Water is the sacred source of all life! I order municipal enforcers and the environmental bureau to seal those 8 plants this afternoon. Reopening requires certified wastewater plants!”",
        "fx": {
          "sat": 12,
          "risk": -10,
          "env": 15
        },
        "actors": {
          "Warga": 18,
          "Hukum": 15,
          "Bisnis": -18
        },
        "flag": "y4q2_t2_sealed_toxic_industrial_mills",
        "consequence_id": "Sungai Nusapura kembali jernih dan aliran PDAM normal, warga adat menggelar upacara syukuran agung untuk Walikota.",
        "consequence_en": "The great river runs clear once more; grateful ancestral elders conduct sacred civic thanksgiving rites for the Mayor."
      },
      {
        "id": "built_communal_ipal_t2",
        "tone_id": "🏗️ Bangun IPAL Komunal Kawasan Berbagi Biaya APBD-Swasta",
        "tone_en": "🏗️ Build Shared Industrial Wastewater Facility via Public-Private Cost Share",
        "text_id": "“Beri denda administratif pembinaan, dan bangun fasilitas pengolahan limbah terpadu bersama konsorsium pengusaha agar pabrik tetap beroperasi.”",
        "text_en": "“Issue formal compliance fines and build a centralized communal wastewater plant co-funded by industrial owners to save jobs.”",
        "fx": {
          "sat": 6,
          "risk": 0,
          "apbd": -0.15,
          "env": 8
        },
        "actors": {
          "Bisnis": 8,
          "Warga": 8
        },
        "flag": "y4q2_t2_shared_industrial_effluent_plant",
        "consequence_id": "Solusi teknologi modern mengakhiri pencemaran sungai tanpa mematikan mata pencaharian ribuan buruh pabrik.",
        "consequence_en": "Modern engineering eliminates river pollutants permanently without destroying thousands of manufacturing jobs."
      },
      {
        "id": "ignore_river_dumping_t2",
        "tone_id": "📑 Beri Peringatan Kertas Biasa Demi Menjaga Target PAD",
        "tone_en": "📑 Issue Paper Warnings Only to Protect Industrial Tax Revenues",
        "text_id": "“Jangan segel pabrik-pabrik itu, mereka penyumbang pajak terbesar kota. Beri saja surat teguran pertama.”",
        "text_en": "“Do not seal the mills; they generate our largest corporate tax receipts. Send a standard administrative reprimand instead.”",
        "fx": {
          "sat": -15,
          "risk": 25,
          "env": -20
        },
        "actors": {
          "Bisnis": 20,
          "Warga": -25,
          "Hukum": -15
        },
        "flag": "y4q2_t2_shielded_toxic_polluters",
        "consequence_id": "Pencemaran sungai meluas ke laut, puluhan ton ikan mati massal dan media menjuluki Nusapura sebagai 'Kota Sungai Racun'.",
        "consequence_en": "Toxic sludge reaches coastal fisheries, killing tons of sea life and earning the city the moniker 'Toxic River Capital'."
      }
    ]
  },
  {
    "quarter": 15,
    "year": 4,
    "quarterNum": 3,
    "title_id": "Tuntutan Suksesi Pilkada 2029 & Tiket Emas Parpol",
    "title_en": "The 2029 Succession Battle & Golden Party Tickets",
    "character_id": "Ibu Mega Srikandi",
    "character_en": "Ibu Mega Srikandi",
    "role_id": "Ketua Dewan Pembina Koalisi Gabungan Parpol",
    "role_en": "Chairwoman Board of Trustees National Party Coalition",
    "avatar": "🧕",
    "mood_id": "👑 Menentukan Calon Walikota Suksesor Pilihan Partai",
    "mood_en": "👑 Demanding Endorsement for Party Heir-Apparent",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, masa jabatan 10 tahun Anda segera tuntas. Koalisi kami telah memutuskan mencalonkan putra bungsu konglomerat Surya sebagai Walikota berikutnya. Kami menuntut Anda mengeluarkan endorsement terbuka dan mengerahkan mesin birokrasi serta Bansos kota untuk memenangkannya. Jika menolak, kami pastikan LKPJ akhir jabatan Anda ditolak DPRD!”",
    "dialogue_en": "“Mayor, your 10-year reign nears its final hour. Our coalition has chosen young heir Surya as the next Mayoral candidate. We demand your full public endorsement and the deployment of municipal relief funds to ensure his victory. Refuse, and your final legacy accountability report will be rejected by parliament!”",
    "dilemma_id": "Menyerahkan suksesi kota pada dinasti oligarki parpol demi pengamanan LKPJ, atau mendukung kader meritokratis independen.",
    "dilemma_en": "Surrender the city to an oligarchic family dynasty to safeguard your final report, or back a true meritocratic reformer.",
    "choices": [
      {
        "id": "endorse_merit_reformer_t2",
        "tone_id": "🛡️ Tolak Politik Dinasti & Dukung Calon Meritokratis Rakyat",
        "tone_en": "🛡️ Defy Dynastic Anointment & Support Merit Reform Candidate",
        "text_id": "“Kota Nusapura bukan tanah feodal warisan klan tertentu! Rakyat berhak memilih pemimpin terbaik secara demokratis. Saya tolak intervensi ini, silakan rakyat yang menentukan di bilik suara!”",
        "text_en": "“Nusapura is not the private feudal estate of any family clan! Citizens have the democratic right to choose their best champion. I reject your dynastic pawn!”",
        "fx": {
          "sat": 15,
          "risk": -5
        },
        "actors": {
          "Warga": 20,
          "DPRD": -20,
          "Media": 15
        },
        "flag": "y4q3_t2_championed_merit_succession",
        "consequence_id": "Pernyataan berani Anda menginspirasi kebangkitan politik warga independen, memicu gerakan relawan rakyat terbesar sepanjang sejarah.",
        "consequence_en": "Your defiant stand ignites a massive civic grassroots movement, permanently breaking backroom dynastic party monopolies."
      },
      {
        "id": "neutral_statesman_t2",
        "tone_id": "⚖️ Bersikap Netral & Jamin Netralitas Seluruh ASN",
        "tone_en": "⚖️ Maintain Absolute Statesman Neutrality for All Civil Servants",
        "text_id": "“Sebagai Walikota dua periode, tugas suci saya adalah menjadi negarawan netral. Seluruh ASN dilarang terlibat politik praktis dan fasilitas kota steril dari kampanye.”",
        "text_en": "“As a two-term executive, my sacred duty is unblemished neutrality. All civil servants are strictly barred from partisan campaigning.”",
        "fx": {
          "sat": 8,
          "risk": 0
        },
        "actors": {
          "Birokrasi": 15,
          "Hukum": 12,
          "DPRD": 4
        },
        "flag": "y4q3_t2_enforced_strict_neutrality",
        "consequence_id": "Pilkada berlangsung sejuk, adil, dan transparan, kepemimpinan Anda dihormati oleh seluruh kontestan politik.",
        "consequence_en": "The election proceeds with impeccable fairness; your statesmanlike conduct wins universal respect across parties."
      },
      {
        "id": "yield_to_dynasty_t2",
        "tone_id": "📑 Beri Endorsement Terbuka & Arahkan Logistik Bansos",
        "tone_en": "📑 Endorse Dynastic Candidate & Mobilize Municipal Relief",
        "text_id": "“Baiklah, demi kelancaran pengesahan LKPJ saya di DPRD, saya akan deklarasikan dukungan resmi untuk calon koalisi Anda.”",
        "text_en": "“Very well. To ensure safe passage of my final accountability report in parliament, I will publicly endorse your chosen candidate.”",
        "fx": {
          "sat": -12,
          "risk": 25
        },
        "actors": {
          "DPRD": 25,
          "Warga": -20,
          "Media": -15
        },
        "flag": "y4q3_t2_endorsed_dynastic_oligarchy",
        "consequence_id": "LKPJ disahkan mulus, namun publik mencap Anda sebagai pelindung dinasti politik yang mengkhianati amanah reformasi.",
        "consequence_en": "Your final report passes easily, but citizens view you with bitter disappointment as an enabler of dynastic oligarchy."
      }
    ]
  },
  {
    "quarter": 16,
    "year": 4,
    "quarterNum": 4,
    "title_id": "Audit Akhir Dekade BPK RI & Taruhan Opini WTP Terakhir",
    "title_en": "Decade-End BPK Audit & The Ultimate Clean Opinion Stakes",
    "character_id": "Fajar Nugroho, Ak.",
    "character_en": "Fajar Nugroho, Ak.",
    "role_id": "Ketua Tim Auditor Utama BPK RI",
    "role_en": "Lead Senior Auditor Supreme Audit Board (BPK)",
    "avatar": "🧐",
    "mood_id": "📊 Menghitung Selisih Aset & Rekonsiliasi Kas 10 Tahun",
    "mood_en": "📊 Reconciling 10-Year Municipal Balance Sheets & Fixed Assets",
    "tension": "high",
    "dialogue_id": "“Pak Walikota, ini adalah audit komprehensif 10 tahun masa jabatan Anda. Kami menemukan selisih pencatatan aset tanah dan belanja modal senilai Rp 80 Miliar pada periode lalu yang belum terselesaikan. Kembalikan atau koreksi pembukuan aset ini secara transparan dalam 30 hari, atau predikat Wajar Tanpa Pengecualian (WTP) Anda dicabut dan dialihkan menjadi Disclaimer!”",
    "dialogue_en": "“Mayor, this is the 10-year comprehensive audit of your double-tenure. We discovered an unresolved Rp 80 Billion asset variance from past terms. Reconcile this asset registry transparently within 30 days, or your prestigious Clean Audit Opinion (WTP) will be downgraded to Disclaimer!”",
    "dilemma_id": "Menuntaskan audit aset warisan masa lalu secara transparan atau mencari jalan pintas lobi auditor.",
    "dilemma_en": "Painstakingly reconcile inherited asset liabilities through rigorous accounting, or attempt audit lobbying shortcuts.",
    "choices": [
      {
        "id": "digital_asset_reconcile_t2",
        "tone_id": "🔍 Bentuk Satgas Inventarisasi Aset Digital 24 Jam Non-Stop",
        "tone_en": "🔍 Launch 24/7 Digital Asset Reconciliation Taskforce",
        "text_id": "“Tertibkan seluruh aset daerah tanpa kecuali! Saya bentuk tim gabungan BPKAD dan BPN melacak setiap sertifikat tanah kota ke sistem GIS digital dan selesaikan rekonsiliasi kas sampai sen terakhir.”",
        "text_en": "“Reconcile every municipal property without exception! I mobilize a joint land title taskforce to map all parcels onto GIS and clear every variance down to the last penny.”",
        "fx": {
          "sat": 10,
          "risk": -15
        },
        "actors": {
          "Hukum": 20,
          "Birokrasi": 15,
          "Warga": 8
        },
        "flag": "y4q4_t2_achieved_pristine_wtp_legacy",
        "consequence_id": "Kota Nusapura meraih Opini WTP Murni selama 10 tahun berturut-turut, menjadi rekor tata kelola keuangan terbaik di Indonesia.",
        "consequence_en": "Nusapura clinches an unbroken 10-year clean audit streak, setting an all-time record for public fiscal excellence in the nation."
      },
      {
        "id": "legal_clarification_notes_t2",
        "tone_id": "📑 Beri Catatan Penjelasan Hukum Sengketa Masa Lalu",
        "tone_en": "📑 Attach Comprehensive Legal Disclosure Addendums",
        "text_id": "“Sertakan penjelasan hukum resmi bahwa aset tersebut adalah sengketa masa lalu peninggalan era sebelum saya menjabat.”",
        "text_en": "“Attach formal legal addendums proving the variance stems from historic disputes pre-dating my administration.”",
        "fx": {
          "sat": 4,
          "risk": 0
        },
        "actors": {
          "Hukum": 10,
          "Birokrasi": 6
        },
        "flag": "y4q4_t2_disclosed_asset_liabilities",
        "consequence_id": "BPK menerima catatan pengungkapan dengan Opini WTP Dengan Paragraf Penjelas, pembukuan daerah dinilai tertib.",
        "consequence_en": "BPK accepts the formal disclosure notes, granting a clean opinion with emphasis of matter and closing the books cleanly."
      },
      {
        "id": "bribe_auditors_t2",
        "tone_id": "💼 Lobi Auditor dengan Alokasi Hibah Kantor Baru BPK",
        "tone_en": "💼 Bribe Audit Team with Plush Office Reconstruction Grants",
        "text_id": "“Alokasikan dana hibah renovasi gedung perwakilan BPK di APBD tahun depan asalkan selisih aset ini diputihkan.”",
        "text_en": "“Quietly earmark a new regional headquarters grant for the audit board in exchange for expunging the asset discrepancy.”",
        "fx": {
          "sat": -10,
          "risk": 35,
          "apbd": -0.2
        },
        "actors": {
          "Hukum": -25,
          "Media": -15,
          "Birokrasi": -10
        },
        "flag": "y4q4_t2_bribed_decade_end_auditors",
        "consequence_id": "Opini WTP diterbitkan secara palsu, namun KPK melakukan operasi tangkap tangan terhadap auditor BPK penerima suap.",
        "consequence_en": "A fraudulent clean opinion is issued, but anti-graft detectives raid the hotel and arrest the compromised auditors red-handed."
      }
    ]
  },
  {
    "quarter": 17,
    "year": 5,
    "quarterNum": 1,
    "title_id": "Kepanikan Hari Pencoblosan & Suap 'Serangan Fajar' Terbuka",
    "title_en": "Election Day Panic & Massive Dawn Cash Buying",
    "character_id": "Kapten Doni",
    "character_en": "Kapten Doni",
    "role_id": "Ketua Tim Sukses Pengawal Reformasi",
    "role_en": "Mayoral Campaign Field Commander",
    "avatar": "🧢",
    "mood_id": "🏃 Lari Terengah-engah Membawa Bukti Amplop Lawan",
    "mood_en": "🏃 Rushing In with Intercepted Vote-Buying Envelopes",
    "tension": "high",
    "dialogue_id": "“Pak Walikota! Tiga hari menjelang pencoblosan Pilkada suksesor, lawan politik menyebarkan Rp 50 Miliar uang tunai serangan fajar per kepala Rp 300 ribu di perkampungan padat! Calon penerus reformasi kita terancam kalah telak! Kami mohon izin mencairkan pos Bansos Walikota darurat malam ini untuk menandingi mereka!”",
    "dialogue_en": "“Mayor! 72 hours before voting for your successor, oligarch candidates are flooding dense tenements with Rp 50 Billion in dawn vote-buying envelopes! Our reformist candidate faces an absolute blowout! Authorize emergency release of mayoral relief funds tonight to counter-attack!”",
    "dilemma_id": "Membiarkan lawan memenangkan Pilkada lewat politik uang, atau menggunakan dana Bansos Pemkot secara ilegal demi kemenangan calon reformis.",
    "dilemma_en": "Let corrupt money-politics hijack the mayoral election, or illegally disburse city relief cash to save the reformist movement.",
    "choices": [
      {
        "id": "anti_money_politics_taskforce_t2",
        "tone_id": "🚫 Tolak Bansos Politis & Tangkap Pelaku Serangan Fajar",
        "tone_en": "🚫 Reject Slush Operations & Mobilize Anti-Vote Buying Patrols",
        "text_id": "“Saya tidak akan menodai 10 tahun kepemimpinan saya dengan ikut bermain politik uang kotor! Bekerja sama dengan Bawaslu dan kepolisian, tangkap pelaku pembagi amplop dan sita uangnya untuk kas daerah!”",
        "text_en": "“I will never soil 10 years of honor by playing disgusting vote-buying games! Mobilize election monitors and police, catch the bagmen in the act, and seize the dirty cash!”",
        "fx": {
          "sat": 15,
          "risk": -10
        },
        "actors": {
          "Hukum": 20,
          "Warga": 18,
          "Media": 15
        },
        "flag": "y5q1_t2_crushed_election_vote_buying",
        "consequence_id": "Operasi tangkap tangan pelaku politik uang menjadi berita utama nasional, rakyat berbondong-bondong memilih calon bersih berintegritas.",
        "consequence_en": "The capture of corrupt vote-buyers dominates national headlines; inspired citizens turn out in record numbers for clean governance."
      },
      {
        "id": "civic_education_broadcast_t2",
        "tone_id": "🎙️ Pidato Darurat Televisi: Serukan 'Ambil Uangnya, Jangan Pilih Orangnya'",
        "tone_en": "🎙️ Emergency Televised Address: Urge Citizens to Reject Corrupt Buyers",
        "text_id": "“Saya siarkan pidato resmi di seluruh stasiun TV lokal mengingatkan warga bahwa masa depan 5 tahun anak-cucu tidak boleh ditukar selembar amplop sesaat.”",
        "text_en": "“I will deliver an emergency address across all media, reminding voters that their children's 5-year future must never be sold for a quick envelope.”",
        "fx": {
          "sat": 8,
          "risk": 0
        },
        "actors": {
          "Warga": 12,
          "Media": 10
        },
        "flag": "y5q1_t2_broadcasted_election_integrity",
        "consequence_id": "Pidato Walikota menyentuh nurani warga, gelombang penolakan politik uang menggema di seluruh TPS kota.",
        "consequence_en": "Your stirring words resonate deeply across neighborhoods, sparking a powerful spontaneous civic rejection of cash bribes."
      },
      {
        "id": "disburse_mayoral_cash_t2",
        "tone_id": "📑 Guyur Bansos Darurat APBD untuk Menandingi Lawan",
        "tone_en": "📑 Flood Swing Wards with Expedited Mayoral Cash Grants",
        "text_id": "“Cairkan dana bansos darurat sekarang juga ke wilayah padat. Kita tidak boleh membiarkan kota ini jatuh ke tangan bandit oligarki!”",
        "text_en": "“Disburse the emergency relief grants to swing wards immediately. We cannot allow this city to fall into the hands of oligarchic bandits!”",
        "fx": {
          "sat": -10,
          "risk": 35,
          "apbd": -0.25
        },
        "actors": {
          "Warga": -10,
          "Hukum": -25,
          "DPRD": -15
        },
        "flag": "y5q1_t2_weaponized_mayoral_bansos",
        "consequence_id": "Calon binaan Anda menang tipis, namun Bawaslu mencatat penyalahgunaan wewenang APBD yang menjadi delik pidana pemilu.",
        "consequence_en": "Your protege wins narrowly, but election tribunals record gross abuse of municipal relief, triggering criminal indictments."
      }
    ]
  },
  {
    "quarter": 18,
    "year": 5,
    "quarterNum": 2,
    "title_id": "Debat Terbuka Akbar: Warisan Sejarah 10 Tahun",
    "title_en": "The Grand Exit Debate: Legacy of a Decade",
    "character_id": "Prof. Salomo",
    "character_en": "Prof. Salomo",
    "role_id": "Ketua Dewan Panelis Debat Publik Pilkada",
    "role_en": "Dean of Presidential Debate Panelists & Senior Jurist",
    "avatar": "👨‍🏫",
    "mood_id": "🧐 Menyerahkan Berkas Ujian Akhir Kepemimpinan",
    "mood_en": "🧐 Presenting the Comprehensive Mayoral Report Card",
    "tension": "high",
    "dialogue_id": "“Selamat malam, Pak Walikota. Malam ini seluruh Indonesia menyaksikan siaran langsung evaluasi 10 tahun kepemimpinan Anda. Pengamat menilai Anda berhasil membangun fisik kota, namun meninggalkan utang obligasi daerah dan beban pemeliharaan infrastruktur yang tinggi bagi suksesor. Apa pertanggungjawaban nurani Anda kepada generasi mendatang?”",
    "dialogue_en": "“Good evening, Mayor. Tonight the entire nation tunes in to evaluate your 10-year transformation of Nusapura. Observers argue that while you erected soaring landmarks, you left municipal bond debts and heavy asset maintenance for your successor. What is your ethical accounting to the next generation?”",
    "dilemma_id": "Menjawab kritik tajam atas keberlanjutan fiskal dan warisan pembangunan kota di panggung siaran langsung nasional.",
    "dilemma_en": "Defend your 10-year master-building record against fiscal debt criticisms before a live audience of millions.",
    "choices": [
      {
        "id": "visionary_accounting_t2",
        "tone_id": "🌟 Paparkan Transformasi Menyeluruh & Kemandirian PAD",
        "tone_en": "🌟 Present Holistic Transformation & Municipal Revenue Surge",
        "text_id": "“Pembangunan bukan beban, melainkan investasi peradaban! MRT, tanggul laut, dan rumah sakit pintar ini menghasilkan peningkatan PAD 300% dan menyelamatkan jutaan warga dari kemiskinan. Nusapura hari ini adalah kota kelas dunia yang bermartabat!”",
        "text_en": "“Building is not an expenditure, but an investment in human dignity! Our transit, seawalls, and smart clinics tripled regional tax revenues and lifted generations from poverty. Nusapura today stands as a proud world-class metropolis!”",
        "fx": {
          "sat": 15,
          "risk": -5
        },
        "actors": {
          "Warga": 20,
          "Media": 20,
          "Bisnis": 15
        },
        "flag": "y5q2_t2_triumphant_debate_defense",
        "consequence_id": "Tepuk tangan berdiri membahana di seluruh studio, pidato Anda diputar ulang jutaan kali sebagai kuliah kepemimpinan terbaik bangsa.",
        "consequence_en": "A thunderous standing ovation sweeps the auditorium; your address becomes a celebrated masterclass in municipal statecraft."
      },
      {
        "id": "humble_statesman_t2",
        "tone_id": "🤝 Akui Kekurangan dengan Kerendahan Hati & Titipkan Harapan",
        "tone_en": "🤝 Acknowledge Unfinished Work with Statesman Humility",
        "text_id": "“Sebagai manusia biasa, tentu ada target yang belum tuntas. Namun pondasi telah kokoh kami letakkan. Saya titipkan kota tercinta ini kepada penerus saya untuk disempurnakan dengan cinta.”",
        "text_en": "“As a mortal public servant, some goals remain unfinished. But the foundations are unshakable. I entrust this beloved city to my successor to be perfected with love.”",
        "fx": {
          "sat": 10,
          "risk": 0
        },
        "actors": {
          "Warga": 15,
          "Media": 15,
          "DPRD": 10
        },
        "flag": "y5q2_t2_humble_statesman_legacy",
        "consequence_id": "Kerendahan hati Anda memikat jutaan pemirsa di seluruh tanah air, menuai pujian luas sebagai negarawan sejati.",
        "consequence_en": "Your humility touches millions of viewers nationwide, earning reverence as a compassionate statesman."
      },
      {
        "id": "combative_defense_t2",
        "tone_id": "⚔️ Serang Balik Pengamat & Tuduh Panelis Beragenda Politik",
        "tone_en": "⚔️ Counter-Attack Panelists & Allege Partisan Bias",
        "text_id": "“Para panelis hanya pintar mengkritik di ruangan ber-AC tanpa pernah merasakan sulitnya mencari uang membangun kota di lapangan!”",
        "text_en": "“Academics criticize easily from air-conditioned auditoriums without ever tasting the grit of funding actual city bridges!”",
        "fx": {
          "sat": -8,
          "risk": 10
        },
        "actors": {
          "Media": -15,
          "Warga": -8
        },
        "flag": "y5q2_t2_combative_debate_clash",
        "consequence_id": "Debat berakhir panas dan gaduh, media mengkritik sikap defensif walikota yang enggan menerima masukan obyektif.",
        "consequence_en": "The debate closes in bitter shouting matches, drawing sharp media criticism of thin-skinned defensiveness."
      }
    ]
  },
  {
    "quarter": 19,
    "year": 5,
    "quarterNum": 3,
    "title_id": "Peringatan Darurat Kamtibmas: Pasca-Penetapan Pemenang Pilkada",
    "title_en": "Post-Election Emergency: Defeated Factions Reject Tally",
    "character_id": "Kombes Pol Tejo",
    "character_en": "Kombes Pol Tejo",
    "role_id": "Kapolresta Nusapura",
    "role_en": "Chief of Nusapura Metropolitan Police",
    "avatar": "👮‍♂️",
    "mood_id": "🚨 Laporan Intelijen Konvoi Massa Anarkis Membawa Bom Molotov",
    "mood_en": "🚨 Intel Report of Armed Enforcers Converging on Election Commission",
    "tension": "high",
    "dialogue_id": "“Lapor Pak Walikota! Pleno KPU baru saja menetapkan hasil suksesi Walikota baru. Kubu kandidat yang kalah menolak hasil rekapitulasi dan memobilisasi ribuan preman bersenjata mengepung KPU dan membakar kantor dinas perhubungan! Kami meminta izin status Siaga 1 dan tindakan pembubaran tegas dengan gas air mata!”",
    "dialogue_en": "“Mayor! The Electoral Commission has formally ratified the successor tally. Defeated oligarch factions reject the outcome, mobilizing armed mobs surrounding City Hall and torching transit facilities! We request authorization for Maximum Alert Status and aggressive crowd dispersal!”",
    "dilemma_id": "Menghadapi amuk massa yang menolak transisi demokrasi dengan kekuatan senjata aparat atau mediasi darurat langsung.",
    "dilemma_en": "Confront armed mobs rejecting democratic succession with riot police force or high-stakes personal mediation.",
    "choices": [
      {
        "id": "personal_mayoral_mediation_t2",
        "tone_id": "🕊️ Turun Langsung ke Massa & Mediasi Pimpinan Koalisi Kalah",
        "tone_en": "🕊️ Walk into the Crowds & Personally Mediate Faction Leaders",
        "text_id": "“Tahan tembakan gas air mata! Saya akan keluar menemui mereka sendiri tanpa rompi antipeluru. Saya undang calon yang kalah ke Balaikota malam ini untuk rekonsiliasi demi kedamaian Nusapura!”",
        "text_en": "“Hold your tear gas volleys! I will walk into the square myself without body armor. I invite the defeated candidates to City Hall tonight for peaceful reconciliation!”",
        "fx": {
          "sat": 15,
          "risk": -10
        },
        "actors": {
          "Warga": 20,
          "Polisi": 10,
          "DPRD": 15
        },
        "flag": "y5q3_t2_mayoral_peace_reconciliation",
        "consequence_id": "Keberanian luar biasa Walikota meluluhkan amarah massa; kedua kubu berpelukan dan menandatangani pakta perdamaian kota abadi.",
        "consequence_en": "Your extraordinary courage disarms the enraged crowds; rival leaders embrace and ink an enduring peace accord."
      },
      {
        "id": "measured_police_cordon_t2",
        "tone_id": "🛡️ Barikade Water Cannon & Amankan Kotak Suara ke Markas Polisi",
        "tone_en": "🛡️ Water Cannon Cordon & Secure Ballots to Police Headquarters",
        "text_id": "“Amankan seluruh komisioner KPU dan kotak suara dengan barikade rantis water cannon, hindari penggunaan peluru tajam sama sekali.”",
        "text_en": "“Secure the election commissioners and ballot boxes behind armored water cannon barriers, avoiding live ammunition at all costs.”",
        "fx": {
          "sat": 8,
          "risk": -5
        },
        "actors": {
          "Polisi": 15,
          "Hukum": 12
        },
        "flag": "y5q3_t2_secured_election_peace",
        "consequence_id": "Kerusuhan berhasil dilokalisir tanpa korban jiwa, proses demokrasi berjalan tuntas dan sah di mata hukum.",
        "consequence_en": "Unrest is safely contained without casualties; the democratic outcome stands fully vindicated and lawful."
      },
      {
        "id": "heavy_iron_fist_t2",
        "tone_id": "⚡ Perintahkan Penindakan Keras Peluru Karet & Tangkap Semua Provokator",
        "tone_en": "⚡ Order Heavy Rubber-Bullet Crackdown & Sweep Ringleaders",
        "text_id": "“Bakar fasilitas publik adalah makar! Bubarkan paksa dengan tindakan paling keras dan tangkap seluruh pimpinan aksi malam ini.”",
        "text_en": "“Arson of public assets is treason! Disperse them with full force and arrest every ringleader behind the riots tonight.”",
        "fx": {
          "sat": -10,
          "risk": 20
        },
        "actors": {
          "Polisi": 15,
          "Warga": -18,
          "Media": -12
        },
        "flag": "y5q3_t2_harsh_riot_crackdown",
        "consequence_id": "Massa kocar-kacir, namun puluhan warga terluka dan meninggalkan dendam politik mendalam di akhir masa jabatan Anda.",
        "consequence_en": "The mob scatters, but dozens are wounded, leaving lingering political scars as your final term expires."
      }
    ]
  },
  {
    "quarter": 20,
    "year": 5,
    "quarterNum": 4,
    "title_id": "Malam Terakhir di Balai Kota: Vonis Pengadilan Sejarah",
    "title_en": "The Final Night at City Hall: History's Verdict",
    "character_id": "Prof. Dr. Soemitro Hadi",
    "character_en": "Prof. Dr. Soemitro Hadi",
    "role_id": "Pamong Praja Senior & Guru Bangsa Nusapura",
    "role_en": "Venerable Elder Statesman & Conscience of the City",
    "avatar": "👴",
    "mood_id": "📜 Membuka Kitab Catatan Jejak 10 Tahun Kekuasaan",
    "mood_en": "📜 Opening the Sacred Ledger of a Decade in Power",
    "tension": "climax",
    "dialogue_id": "“Selamat malam, sahabatku. Di malam terakhir masa jabatan 10 tahun Anda ini, lampu-lampu megapolitan Nusapura menyala benderang di luar jendela kerja Anda. Anda telah memimpin kota ini melewati badai korupsi, intrik politik, krisis sosial, dan godaan kekuasaan. Kini, di hadapan nurani dan Tuhan Yang Maha Esa, bagaimana Anda memandang seluruh warisan kepemimpinan Anda?”",
    "dialogue_en": "“Good evening, my dear friend. On this final night of your full decade in office, the bright lights of modern Nusapura shimmer outside your executive window. You guided this metropolis through storms of corruption, political treachery, social crises, and the sweet intoxicants of absolute power. Now, before history and your own soul, how do you define your legacy?”",
    "dilemma_id": "Menentukan sikap filosofis terakhir atas 10 tahun kepemimpinan dan warisan sejarah yang ditinggalkan bagi peradaban kota.",
    "dilemma_en": "Deliver your ultimate philosophical reflection on a decade in power and the enduring legacy you leave behind for history.",
    "choices": [
      {
        "id": "legacy_servant_t2",
        "tone_id": "🕊️ Abdi Rakyat Sejati: Integritas di Atas Segalanya",
        "tone_en": "🕊️ True Servant Leader: Uncompromising Integrity to the End",
        "text_id": "“Saya meninggalkan kursi ini dengan tangan bersih dan hati yang damai. Saya tidak memperkaya keluarga saya, tidak tunduk pada oligarki, dan telah mewakafkan seluruh jiwa raga saya demi kehormatan warga Nusapura. Biarlah sejarah mencatat bahwa nurani tidak pernah bisa dibeli!”",
        "text_en": "“I vacate this chair with clean hands and a tranquil soul. I enriched no family dynasty, bowed to no oligarch, and dedicated every beat of my heart to the dignity of Nusapura citizens. Let history record that conscience is never for sale!”",
        "fx": {
          "sat": 15
        },
        "actors": {
          "Warga": 25,
          "Hukum": 25,
          "Birokrasi": 20
        },
        "flag": "y5q4_t2_flawless_statesman_legacy",
        "consequence_id": "Nama Anda diabadikan dengan tinta emas sebagai Walikota Legendaris Nusapura yang dicintai dari generasi ke generasi.",
        "consequence_en": "Your name is inscribed in golden letters as the Legendary Mayor of Nusapura, beloved across generations."
      },
      {
        "id": "legacy_builder_t2",
        "tone_id": "🏗️ Sang Arsitek Peradaban: Karya Nyata yang Berbicara",
        "tone_en": "🏗️ Visionary Master-Builder: Concrete Monuments of Progress",
        "text_id": "“Lihatlah ke luar jendela itu, Guru. Rel kereta cepat meluncur, tanggul laut berdiri kokoh, gedung-gedung sekolah bersinar. Saya mengubah Nusapura dari kota tertinggal menjadi megapolitan modern kebanggaan nusantara. Karya nyata inilah monumen abadi saya!”",
        "text_en": "“Look out that window, Master. High-speed transit glides across the horizon, the sea wall shields our shores, and schools shine bright. I transformed Nusapura from a struggling town into a proud modern metropolis. These monuments are my eternal voice!”",
        "fx": {
          "sat": 12,
          "infra": 15
        },
        "actors": {
          "Bisnis": 20,
          "Warga": 15
        },
        "flag": "y5q4_t2_master_builder_legacy",
        "consequence_id": "Monumen megah dan jalan protokol kota dinamai atas nama Anda, dikenang sebagai Bapak Pembangunan Modern Nusapura.",
        "consequence_en": "Grand civic plazas and avenues are christened in your honor, venerated as the Founding Father of Modern Nusapura."
      },
      {
        "id": "legacy_realpolitik_t2",
        "tone_id": "♟️ Sang Penguasa Realpolitik: Bertahan di Rimba Kekuasaan",
        "tone_en": "♟️ Undisputed Political Master: Sovereign of Realpolitik",
        "text_id": "“Kekuasaan adalah seni bertahan hidup. Saya menari di antara singa dan serigala, memukul saat harus menang, dan merangkul saat harus menguasai. Sepuluh tahun saya memegang kendali tanpa pernah tumbang. Itulah hakikat sejati dari memimpin manusia.”",
        "text_en": "“Power is the sublime art of survival. I danced among lions and wolves, struck when victory called, and embraced when mastery demanded. For ten years I commanded this helm without ever faltering. That is the true essence of statecraft.”",
        "fx": {
          "sat": 6
        },
        "actors": {
          "DPRD": 15,
          "Bisnis": 15
        },
        "flag": "y5q4_t2_cunning_pragmatist_legacy",
        "consequence_id": "Buku-buku biografi politik mempelajari strategi taktik kepemimpinan Anda sebagai ahli strategi kekuasaan terhebat di masanya.",
        "consequence_en": "Political biographers study your tenure for decades as one of the most formidable masters of executive power in modern history."
      }
    ]
  }
];
