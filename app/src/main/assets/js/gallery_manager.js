/**
 * Epilogue Showcase & Ending Gallery Manager for Walikota Simulator (Nusapura)
 * Manages 12 Unique Collectible Political Endings with HD Visual Artworks
 */

const GalleryManager = (function() {
  const EPILOGUES = [
    {
      id: "negarawan_agung",
      num: 1,
      title_id: "Sang Negarawan Agung",
      title_en: "The Great Statesman",
      category: "Kemenangan Legendaris",
      category_en: "Legendary Victory",
      badge: "👑",
      image: "images/epilogue_negarawan.svg",
      desc_id: "Kota Nusapura bertransformasi menjadi kota metropolitan termaju, mandiri secara fiskal, dan dinikmati seluruh lapisan masyarakat dengan harmoni penuh.",
      desc_en: "Nusapura transforms into the premier sustainable metropolis, fiscally self-sufficient, and flourishing in democratic harmony.",
      criteria_id: "Tuntaskan 2 periode (10 tahun) dengan kepuasan publik > 80%, kas APBD > Rp 6 Triliun, dan zero skandal korupsi.",
      criteria_en: "Complete 2 full terms (10 years) with public approval > 80%, budget surplus, and clean governance."
    },
    {
      id: "bapak_pembangunan",
      num: 2,
      title_id: "Bapak / Ibu Pembangunan",
      title_en: "Architect of Progress",
      category: "Infrastruktur & Megastruktur",
      category_en: "Mega-Infrastructure",
      badge: "🏗️",
      image: "images/epilogue_bapak_pembangunan.svg",
      desc_id: "Pelabuhan Samudera Internasional, stadion kelas dunia, dan jembatan teluk membentang abadi menjadi monumen kepemimpinan berani Anda.",
      desc_en: "The International Deep-Sea Port, landmark suspension bridge, and mega stadium stand as enduring testaments to your vision.",
      criteria_id: "Selesaikan minimal 4 Proyek Strategis Nasional (PSN) dan bangun konektivitas logistik terpadu.",
      criteria_en: "Successfully finalize at least 4 National Strategic Projects (PSN) and transport corridors."
    },
    {
      id: "teknokrat_modern",
      num: 3,
      title_id: "Teknokrat Modern Smart City",
      title_en: "Modern Technocrat",
      category: "Inovasi & Digital",
      category_en: "Digital Innovation",
      badge: "⚡",
      image: "images/epilogue_teknokrat.svg",
      desc_id: "Digitalisasi total tata kelola pemerintahan kota, jaringan transportasi LRT tanpa macet, dan integrasi IoT menjadikan Nusapura kota cerdas percontohan nasional.",
      desc_en: "Full governance digitization, rapid transit light rail, and IoT-driven urban infrastructure make Nusapura the nation's premier smart city.",
      criteria_id: "Tingkatkan indeks efisiensi birokrasi > 85% dan operasikan jaringan LRT layang kota.",
      criteria_en: "Achieve municipal bureaucracy efficiency index > 85% and operate light rail networks."
    },
    {
      id: "populis_rakyat",
      num: 4,
      title_id: "Populis Sang Pembela Rakyat",
      title_en: "The People's Champion",
      category: "Sosial & Kesejahteraan",
      category_en: "Social Welfare",
      badge: "🤝",
      image: "images/epilogue_populis.svg",
      desc_id: "Pasar tradisional dilindungi dari serbuan mall, subsidi pendidikan gratis merata, dan ribuan pedagang kaki lima diakui sebagai urat nadi ekonomi kota.",
      desc_en: "Traditional markets revitalized, universal education subsidies protected, and local street vendors honored as the city's economic backbone.",
      criteria_id: "Pertahankan indeks kemiskinan di bawah 5% dan selesaikan seluruh sengketa buruh/pedagang secara damai.",
      criteria_en: "Keep poverty index under 5% and resolve all civil labor strikes through dialog."
    },
    {
      id: "raja_kompromi",
      num: 5,
      title_id: "Raja Kompromi Politik",
      title_en: "Master of Political Compromise",
      category: "Politik & Parlemen",
      category_en: "Parliamentary Craft",
      badge: "🏛️",
      image: "images/epilogue_kompromi.svg",
      desc_id: "Tidak ada satu pun partai oposisi yang mampu menggoyahkan kursi Anda. Setiap fraksi di dewan mendapatkan porsi kue anggaran dalam harmoni pragmatis.",
      desc_en: "No faction could unseat you. Every political party secured their share of city projects in pragmatic stability.",
      criteria_id: "Jaga stabilitas koalisi DPRD di atas 85% selama 2 periode penuh tanpa mosi tidak percaya.",
      criteria_en: "Maintain legislative coalition approval above 85% without facing no-confidence votes."
    },
    {
      id: "penjaga_fiskal",
      num: 6,
      title_id: "Penjaga Fiskal & WTP Beruntun",
      title_en: "Guardian of the Treasury",
      category: "Keuangan & Akuntabilitas",
      category_en: "Fiscal Discipline",
      badge: "💰",
      image: "images/epilogue_fiskal.svg",
      desc_id: "Badan Pemeriksa Keuangan (BPK) memberikan opini Wajar Tanpa Pengecualian (WTP) tanpa henti. Nusapura menjadi kota dengan kas teraman di tanah air.",
      desc_en: "Consecutive clean audit certificates from national oversight boards establish Nusapura as the gold standard of municipal finance.",
      criteria_id: "Raih predikat WTP selama 5 tahun berturut-turut tanpa defisit anggaran.",
      criteria_en: "Achieve consecutive clean audit certificates without running budget deficits."
    },
    {
      id: "skandal_kpk",
      num: 7,
      title_id: "Terjaring OTT Penegak Hukum",
      title_en: "Arrested in Anti-Corruption Sting",
      category: "Tragedi Politik",
      category_en: "Political Downfall",
      badge: "⚖️",
      image: "images/epilogue_kpk.svg",
      desc_id: "Kamera jurnalis menyala di lobi gedung anti-korupsi. Rompi oranye mengakhiri karier politik Anda setelah rekaman aliran suap proyek pelabuhan terungkap.",
      desc_en: "Flashbulbs illuminate the anti-graft commission lobby. Orange vests seal your career after wiretapped kickback evidence surfaces.",
      criteria_id: "Toleransi gratifikasi pengembang berlebihan hingga indeks integritas jatuh ke 0%.",
      criteria_en: "Accept excessive developer gifts until integrity falls to zero percent."
    },
    {
      id: "pemakzulan_dprd",
      num: 8,
      title_id: "Pemakzulan Paripurna DPRD",
      title_en: "Legislative Impeachment",
      category: "Tragedi Politik",
      category_en: "Political Downfall",
      badge: "🔨",
      image: "images/epilogue_dprd.svg",
      desc_id: "Ketukan palu sidang paripurna menyatakan mosi tidak percaya mutlak. Anda dipaksa mengosongkan ruang kerja walikota di hadapan sorak sorai lawan politik.",
      desc_en: "The speaker's gavel falls in unanimous condemnation. You are compelled to vacate city hall amidst opposition cheers.",
      criteria_id: "Hubungan dengan DPRD mencapai 0% dan tolak lobi anggaran dewan secara frontal.",
      criteria_en: "Allow council relations to collapse to 0% and directly reject statutory budgets."
    },
    {
      id: "kota_bangkrut",
      num: 9,
      title_id: "Kota Bangkrut & Utang Membengkak",
      title_en: "Municipal Insolvency",
      category: "Krisis Fiskal",
      category_en: "Fiscal Crisis",
      badge: "📉",
      image: "images/epilogue_bangkrut.svg",
      desc_id: "Gaji aparatur sipil tertunggak berbulan-bulan, lampu penerangan jalan dipadamkan, dan pemerintah pusat terpaksa mengambil alih administrasi kota.",
      desc_en: "Civil servant payroll frozen, streetlights dimmed, and central government forced to invoke receivership over city finances.",
      criteria_id: "Kas APBD berada di angka minus selama 3 tahun berturut-turut dengan utang obligasi macet.",
      criteria_en: "Run continuous municipal deficits with unserviceable bond debt."
    },
    {
      id: "mogok_massal",
      num: 10,
      title_id: "Mogok Massal & Kerusuhan Kota",
      title_en: "General Strike & Civil Unrest",
      category: "Krisis Sosial",
      category_en: "Social Crisis",
      badge: "🔥",
      image: "images/epilogue_kerusuhan.svg",
      desc_id: "Asap membubung dari bundaran kota. Serikat buruh, sopir angkutan, dan mahasiswa memblokade akses pelabuhan akibat keputusan kenaikan pajak sepihak.",
      desc_en: "Plumes rise over the city square. Labor unions and student coalitions shut down port gateways following unilateral tax hikes.",
      criteria_id: "Kepuasan warga anjlok ke bawah 10% dan represi aparat memicu perlawanan sipil.",
      criteria_en: "Allow public satisfaction to drop below 10% while enforcing police curbs."
    },
    {
      id: "bencana_pesisir",
      num: 11,
      title_id: "Bencana Pesisir Menenggelamkan Kota",
      title_en: "Coastal Inundation Catastrophe",
      category: "Krisis Lingkungan",
      category_en: "Environmental Disaster",
      badge: "🌊",
      image: "images/epilogue_bencana.svg",
      desc_id: "Tanggul laut utara jebol dihantam gelombang pasang rob. Ratusan hektar tambak dan pemukiman berubah menjadi rawa air payau permanen.",
      desc_en: "The north sea wall buckles under monstrous tidal surges. Hundreds of coastal hectares are claimed by the ocean.",
      criteria_id: "Abaikan peringatan mitigasi banjir rob dan pangkas anggaran tanggap darurat BPBD.",
      criteria_en: "Neglect coastal flood mitigation while gutting emergency contingency funds."
    },
    {
      id: "satu_periode",
      num: 12,
      title_id: "Karier Mentok Satu Periode",
      title_en: "One-Term Mayor",
      category: "Politik Biasa",
      category_en: "Standard Tenure",
      badge: "📦",
      image: "images/epilogue_satu_periode.svg",
      desc_id: "Masa bakti 5 tahun pertama berakhir tanpa gebrakan berarti. Anda kalah dalam putaran pertama Pilkada berikutnya dan kembali menjadi warga sipil biasa.",
      desc_en: "Five years conclude quietly without major breakthroughs. You concede the subsequent election and return to private life.",
      criteria_id: "Selesaikan 1 periode (5 tahun) namun gagal memenangkan tiket pemilu periode kedua.",
      criteria_en: "Complete standard 5-year tenure but fail reelection threshold."
    }
  ];

  function getUnlockedList() {
    try {
      const raw = localStorage.getItem('walikota_unlocked_epilogues');
      if (!raw) return ['satu_periode']; // default starter
      return JSON.parse(raw);
    } catch(e) {
      return ['satu_periode'];
    }
  }

  function unlockEpilogue(id) {
    const list = getUnlockedList();
    if (!list.includes(id)) {
      list.push(id);
      try {
        localStorage.setItem('walikota_unlocked_epilogues', JSON.stringify(list));
      } catch(e) {}
      if (typeof AudioManager !== 'undefined') {
        AudioManager.playSfx('sfx_tepuk_tangan');
      }
      return true; // Newly unlocked
    }
    return false;
  }

  function openGalleryModal() {
    renderGallery();
    const modal = document.getElementById('galleryModal');
    if (modal) {
      modal.classList.add('show');
    }
  }

  function closeGalleryModal() {
    if (typeof returnFromSubModal === 'function') {
      returnFromSubModal('galleryModal');
    } else {
      const modal = document.getElementById('galleryModal');
      if (modal) {
        modal.classList.remove('show');
      }
    }
  }

  function renderGallery(filter = 'all') {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    const unlocked = getUnlockedList();
    const isEn = typeof getGameLanguage === 'function' ? getGameLanguage() === 'en' : (typeof currentLanguage !== 'undefined' && currentLanguage === 'en');

    // Stats counter
    const counterEl = document.getElementById('galleryCounter');
    if (counterEl) {
      counterEl.textContent = `${unlocked.length} / ${EPILOGUES.length} ${isEn ? 'Endings Collected' : 'Epilog Terkoleksi'}`;
    }

    let html = '';
    EPILOGUES.forEach(ep => {
      const isUnlocked = unlocked.includes(ep.id);
      if (filter === 'unlocked' && !isUnlocked) return;
      if (filter === 'locked' && isUnlocked) return;

      const title = isEn ? ep.title_en : ep.title_id;
      const cat = isEn ? ep.category_en : ep.category;
      const desc = isEn ? ep.desc_en : ep.desc_id;
      const criteria = isEn ? ep.criteria_en : ep.criteria_id;

      html += `
        <div class="galleryCard glass ${isUnlocked ? 'unlocked' : 'locked'}" onclick="GalleryManager.showDetail('${ep.id}')">
          <div class="galleryCardThumb">
            ${isUnlocked 
              ? `<img src="${ep.image}" alt="${title}" class="galleryThumbImg">` 
              : `<div class="galleryLockedPlaceholder"><span class="lockIcon">🔒</span><span class="lockNum">#${ep.num}</span></div>`}
            <div class="galleryBadge">${ep.badge}</div>
            <div class="galleryStatusTag ${isUnlocked ? 'tagSuccess' : 'tagLocked'}">
              ${isUnlocked ? (isEn ? 'UNLOCKED' : 'TERBUKA') : (isEn ? 'LOCKED' : 'TERKUNCI')}
            </div>
          </div>
          <div class="galleryCardBody">
            <div class="galleryCat">${cat}</div>
            <div class="galleryTitle">${isUnlocked ? title : (isEn ? `Secret Ending #${ep.num}` : `Epilog Rahasia #${ep.num}`)}</div>
            <div class="galleryPreviewDesc">${isUnlocked ? desc : criteria}</div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  function showDetail(id) {
    const ep = EPILOGUES.find(x => x.id === id);
    if (!ep) return;

    const unlocked = getUnlockedList();
    const isUnlocked = unlocked.includes(ep.id);
    const isEn = typeof getGameLanguage === 'function' ? getGameLanguage() === 'en' : (typeof currentLanguage !== 'undefined' && currentLanguage === 'en');

    const detailModal = document.getElementById('galleryDetailModal');
    if (!detailModal) return;

    const title = isEn ? ep.title_en : ep.title_id;
    const desc = isEn ? ep.desc_en : ep.desc_id;
    const criteria = isEn ? ep.criteria_en : ep.criteria_id;

    document.getElementById('galleryDetailTitle').innerHTML = `${ep.badge} ${title}`;
    document.getElementById('galleryDetailImg').src = ep.image;
    document.getElementById('galleryDetailStatus').textContent = isUnlocked ? (isEn ? '✅ Unlocked' : '✅ Terbuka') : (isEn ? '🔒 Locked' : '🔒 Terkunci');
    document.getElementById('galleryDetailDesc').textContent = isUnlocked ? desc : (isEn ? 'This historical political ending remains sealed until you fulfill the governance conditions during your mayoral career.' : 'Epilog sejarah politik ini masih terkunci hingga Anda memenuhi kondisi tata kelola pemerintahan yang dipersyaratkan.');
    document.getElementById('galleryDetailCriteria').textContent = criteria;

    detailModal.classList.add('show');
    if (typeof AudioManager !== 'undefined') {
      AudioManager.playSfx('sfx_stempel');
    }
  }

  function closeDetail() {
    const detailModal = document.getElementById('galleryDetailModal');
    if (detailModal) {
      detailModal.classList.remove('show');
    }
  }

  return {
    EPILOGUES,
    getUnlockedList,
    unlockEpilogue,
    openGalleryModal,
    closeGalleryModal,
    renderGallery,
    showDetail,
    closeDetail
  };
})();

window.GalleryManager = GalleryManager;
