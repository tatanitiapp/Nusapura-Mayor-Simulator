/**
 * ============================================================================
 * NUSAPURA: MAYOR SIMULATOR & PUBLIC GOVERNANCE ENGINE
 * ============================================================================
 * Architecture: Mobile Web / Android WebView Hybrid
 * Core Game Controller, Reactive State Machine & Event Dispatcher
 *
 * Design & Performance Notes:
 * - Single-source-of-truth state container with persistent LocalStorage double-buffering.
 * - Modularized datasets: large static catalogs externalized to data/ folder.
 * - Optimized DOM reflows and lightweight CSS transitions for smooth 60fps on mobile.
 * ============================================================================
 */

/* ==================== DIRECT ACCESS MODAL CONTROLLERS & NOTIFICATION BADGES ==================== */
function openCabinetDirect(source) {
  subModalSource = source || null;
  if (source) {
    const sModal = document.getElementById(source);
    if (sModal) sModal.classList.remove('show');
  }
  const hModal = document.getElementById('hamburgerModal');
  if (hModal) hModal.classList.remove('show');
  renderCabinetModal();
  const cModal = document.getElementById('cabinetModal');
  if (cModal) {
    cModal.classList.add('show');
    cModal.style.display = 'flex';
  }
}

function openMusrenbangDirect(source) {
  subModalSource = source || null;
  if (source) {
    const sModal = document.getElementById(source);
    if (sModal) sModal.classList.remove('show');
  }
  const hModal = document.getElementById('hamburgerModal');
  if (hModal) hModal.classList.remove('show');
  openMusrenbangModal();
}

function openPerdaDirect(source) {
  subModalSource = source || null;
  if (source) {
    const sModal = document.getElementById(source);
    if (sModal) sModal.classList.remove('show');
  }
  const hModal = document.getElementById('hamburgerModal');
  if (hModal) hModal.classList.remove('show');
  renderPerdaModal();
  const pModal = document.getElementById('perdaModal');
  if (pModal) {
    pModal.classList.add('show');
    pModal.style.display = 'flex';
  }
}

function openDiplomacyDirect(source) {
  subModalSource = source || null;
  if (source) {
    const sModal = document.getElementById(source);
    if (sModal) sModal.classList.remove('show');
  }
  const hModal = document.getElementById('hamburgerModal');
  if (hModal) hModal.classList.remove('show');
  openCentralDiplomacyModal();
}

function openParipurnaDirect(source) {
  subModalSource = source || null;
  if (source) {
    const sModal = document.getElementById(source);
    if (sModal) sModal.classList.remove('show');
  }
  const hModal = document.getElementById('hamburgerModal');
  if (hModal) hModal.classList.remove('show');
  renderDprdParipurnaModal();
  const pModal = document.getElementById('dprdParipurnaModal');
  if (pModal) {
    pModal.classList.add('show');
    pModal.style.display = 'flex';
  }
}

function openPressDirect(source) {
  subModalSource = source || null;
  if (source) {
    const sModal = document.getElementById(source);
    if (sModal) sModal.classList.remove('show');
  }
  const hModal = document.getElementById('hamburgerModal');
  if (hModal) hModal.classList.remove('show');
  openPressModal();
}

function updateDirectFeatureBadges() {
  let urgentCabinet = false;
  if (state.cabinet && Array.isArray(state.cabinet)) {
    urgentCabinet = state.cabinet.some(c => c.status === 'Aktif' && (c.integritas < 60 || c.kinerja < 50));
  }
  const cBadge = document.getElementById('quickCabinetBadge');
  if (cBadge) {
    cBadge.style.display = urgentCabinet ? 'inline-block' : 'none';
  }

  const hBadge = document.getElementById('hamUrgentBadge');
  if (hBadge) {
    const isCrisis = (state.sat != null && state.sat < 45) || urgentCabinet || (state.stats && state.stats.unemp > 12);
    hBadge.style.display = isCrisis ? 'inline-block' : 'none';
  }
}

// ==================== I18N & MULTI-LANGUAGE SYSTEM ====================
function getGameLanguage() {
  try {
    return localStorage.getItem('walikota_lang') || localStorage.getItem('nusapura_lang') || 'id';
  } catch (e) {
    return 'id';
  }
}

// Note: Core UI translations dictionary is externalized to data/translations.js
// for maintainability and faster incremental DOM compilation.

function applyLanguage(lang = 'id') {
  const isEn = lang === 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // Update toggle buttons active state
  const btnId = document.getElementById('langBtnId');
  const btnEn = document.getElementById('langBtnEn');
  if (btnId && btnEn) {
    btnId.classList.toggle('active', !isEn);
    btnEn.classList.toggle('active', isEn);
  }

  const sBtnId = document.getElementById('btnLangId');
  const sBtnEn = document.getElementById('btnLangEn');
  if (sBtnId && sBtnEn) {
    sBtnId.style.borderColor = !isEn ? 'var(--blue-soft)' : 'var(--line)';
    sBtnEn.style.borderColor = isEn ? 'var(--blue-soft)' : 'var(--line)';
    sBtnId.style.fontWeight = !isEn ? '900' : 'normal';
    sBtnEn.style.fontWeight = isEn ? '900' : 'normal';
  }

    const btnToggle = document.getElementById('btnToggleCleanMode');
  const btnDashToggle = document.getElementById('btnDashToggle');
  if (state && state.cleanMode) {
    if (btnToggle) btnToggle.textContent = isEn ? '📊 Detailed View' : '📊 Mode Lengkap';
    if (btnDashToggle) btnDashToggle.textContent = isEn ? '📊 Detailed View' : '📊 Mode Lengkap';
  } else {
    if (btnToggle) btnToggle.textContent = isEn ? '👁️ Compact View' : '👁️ Mode Ringkas';
    if (btnDashToggle) btnDashToggle.textContent = isEn ? '👁️ Compact View' : '👁️ Mode Ringkas';
  }
  if (typeof updateHUD === 'function') updateHUD();
  if (typeof renderNews === 'function') renderNews();
  if (typeof renderSocial === 'function') renderSocial();
  if (typeof renderCurrentEvent === 'function') renderCurrentEvent();
}

function setGameLanguage(lang) {
  if (lang !== 'en' && lang !== 'id') lang = 'id';
  try {
    localStorage.setItem('nusapura_lang', lang);
    localStorage.setItem('walikota_lang', lang);
  } catch (e) {}

  applyLanguage(lang);
  showToast(lang === 'en' ? '🇬🇧 English Language Mode Active' : '🇮🇩 Mode Bahasa Indonesia Aktif');
}


// ==================== ACTORS & NARRATIVE GAME STATE ====================
const ACTOR_ALIASES = {
  Buruh: 'SerikatBuruh',
  Media: 'MediaLokal',
  Disdik: 'ASN',
  Ormas: 'TokohAdat',
  Pedagang: 'Pengusaha',
  WargaAdat: 'TokohAdat',
  Contractor: 'Pengembang',
  PartaiPengusung: 'DPRD'
};

function initActors() {
  const obj = {};
  for (const k in ACTORS) {
    obj[k] = { name: ACTORS[k].name, relation: 50 };
  }
  return obj;
}

function updateActorRelations(changes) {
  if (!state.actors) state.actors = initActors();
  if (!changes) return;
  for (const rawK in changes) {
    const k = ACTOR_ALIASES[rawK] || rawK;
    if (state.actors[k]) {
      state.actors[k].relation = Math.max(0, Math.min(100, Math.round(state.actors[k].relation + changes[rawK])));
    }
  }
  if (state.actors.DPRD) {
    state.dprdHarmony = state.actors.DPRD.relation;
  }
}

function spawnFloatingStatsFeedback(fx, actors, choice) {
  let container = document.getElementById('floatingFeedbackContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'floatingFeedbackContainer';
    container.className = 'floatingFeedbackContainer';
    document.body.appendChild(container);
  }

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const items = [];
  if (fx) {
    if (fx.apbd != null) {
      const val = fx.apbd;
      const sign = val > 0 ? '+' : '';
      items.push({
        text: `💰 ${sign}${val} T APBD`,
        cls: val > 0 ? 'positive' : 'negative'
      });
    }
    if (fx.sat != null) {
      const val = fx.sat;
      const sign = val > 0 ? '+' : '';
      items.push({
        text: `${val >= 0 ? '😊' : '😠'} ${sign}${val}% ${isEn ? 'Approval' : 'Kepuasan'}`,
        cls: val >= 0 ? 'positive' : 'negative'
      });
    }
    if (fx.risk != null) {
      const val = fx.risk;
      const sign = val > 0 ? '+' : '';
      items.push({
        text: `⚖️ ${sign}${val}% ${isEn ? 'KPK Risk' : 'Risiko KPK'}`,
        cls: val > 0 ? 'negative' : 'positive'
      });
    }
  }
  if (choice && choice.risk != null && (!fx || fx.risk == null)) {
    const val = choice.risk;
    const sign = val > 0 ? '+' : '';
    items.push({
      text: `⚖️ ${sign}${val}% ${isEn ? 'KPK Risk' : 'Risiko KPK'}`,
      cls: val > 0 ? 'negative' : 'positive'
    });
  }
  if (actors) {
    const dprdVal = actors.DPRD || (actors.PartaiPengusung != null ? actors.PartaiPengusung : null);
    if (dprdVal != null) {
      const sign = dprdVal > 0 ? '+' : '';
      items.push({
        text: `🏛️ ${sign}${dprdVal} ${isEn ? 'DPRD Harmony' : 'Relasi DPRD'}`,
        cls: dprdVal > 0 ? 'positive' : 'negative'
      });
    }
    if (actors.KPK != null) {
      const sign = actors.KPK > 0 ? '+' : '';
      items.push({
        text: `🕵️ ${sign}${actors.KPK} ${isEn ? 'KPK Stance' : 'Relasi KPK'}`,
        cls: actors.KPK > 0 ? 'positive' : 'negative'
      });
    }
  }

  items.forEach((item, i) => {
    setTimeout(() => {
      const pill = document.createElement('div');
      pill.className = `floatingFeedbackPill ${item.cls}`;
      pill.textContent = item.text;
      container.appendChild(pill);
      setTimeout(() => {
        if (pill.parentNode) pill.parentNode.removeChild(pill);
      }, 1600);
    }, i * 140);
  });
}



// ==================== EVENT SELECTION ENGINE & QUARTER SYSTEM ====================
const YEARS = 5;
const EVENTS_PER_YEAR = 12; // 4 Quarters x 3 Monthly Beats = 12 Dynamic Events per Year

const QUARTERS = [
  { q: 1, name: 'Triwulan I (Jan - Mar)', name_en: 'Quarter I (Jan - Mar)', short: 'Q1 (Jan-Mar)', short_en: 'Q1 (Jan-Mar)', theme: 'Musrenbang & Perencanaan APBD', theme_en: 'Musrenbang & APBD Fiscal Planning', icon: '🌱' },
  { q: 2, name: 'Triwulan II (Apr - Jun)', name_en: 'Quarter II (Apr - Jun)', short: 'Q2 (Apr-Jun)', short_en: 'Q2 (Apr-Jun)', theme: 'Eksekusi Proyek Pembangunan & Perizinan', theme_en: 'Infrastructure & Project Execution', icon: '🏗️' },
  { q: 3, name: 'Triwulan III (Jul - Sep)', name_en: 'Quarter III (Jul - Sep)', short: 'Q3 (Jul-Sep)', short_en: 'Q3 (Jul-Sep)', theme: 'Dinamika Sosial & Tanggap Krisis Kota', theme_en: 'Civic Dynamics & Municipal Crisis Response', icon: '☀️' },
  { q: 4, name: 'Triwulan IV (Okt - Des)', name_en: 'Quarter IV (Okt - Des)', short: 'Q4 (Okt-Des)', short_en: 'Q4 (Oct-Dec)', theme: 'Evaluasi Serapan Anggaran & Sidang LKPJ DPRD', theme_en: 'Fiscal Absorption Review & DPRD LKPJ Session', icon: '⚖️' }
];

function getQuarterInfo(eventIndex) {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  const eIdx = eventIndex != null ? eventIndex : (state.eventIdx || 0);
  const qIndex = Math.min(3, Math.floor(eIdx / 3));
  const qInYear = (eIdx % 3) + 1;
  const rawQ = QUARTERS[qIndex] || QUARTERS[0];
  
  const monthNamesId = [
    ['Januari', 'Februari', 'Maret'],
    ['April', 'Mei', 'Juni'],
    ['Juli', 'Agustus', 'September'],
    ['Oktober', 'November', 'Desember']
  ];
  const monthNamesEn = [
    ['January', 'February', 'March'],
    ['April', 'May', 'June'],
    ['July', 'August', 'September'],
    ['October', 'November', 'December']
  ];
  const curMonth = isEn ? (monthNamesEn[qIndex] ? monthNamesEn[qIndex][qInYear - 1] : '') : (monthNamesId[qIndex] ? monthNamesId[qIndex][qInYear - 1] : '');

  return {
    ...rawQ,
    name: isEn ? rawQ.name_en : rawQ.name,
    short: isEn ? rawQ.short_en : rawQ.short,
    theme: isEn ? rawQ.theme_en : rawQ.theme,
    quarterNum: qIndex + 1,
    eventInQuarter: qInYear,
    monthName: curMonth,
    isQuarterEnd: qInYear === 3
  };
}

function shuffleList(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildYearOrder() {
  return buildYearOrderDynamic();
}

function getEventObject(ref) {
  if (!ref) return ALL_EVENTS[0];
  if (typeof ref === 'object' && ref.choices) return ref;
  const found = ALL_EVENTS.find(e => e.id === ref || e.id == ref);
  return found || ALL_EVENTS[0];
}

function buildYearOrderDynamic() {
  // Take all eligible events from the comprehensive scenario database
  const available = ALL_EVENTS.filter(e => {
    if (e.requirements && !e.requirements(state.stats || {}, state.flags || {}, state.actors || {})) return false;
    if (state.cooldowns && state.cooldowns[e.id] > 0) return false;
    return true;
  });

  // Separate personal life / family scandal / coalition politics events from general civic events
  const personalPool = available.filter(e => e.isPersonal || (typeof e.id === 'string' && (e.id.startsWith('pol_') || e.id.startsWith('fam_'))));
  const generalPool = available.filter(e => !e.isPersonal && !(typeof e.id === 'string' && (e.id.startsWith('pol_') || e.id.startsWith('fam_'))));

  const shuffledPersonal = shuffleList(personalPool);
  const shuffledGeneral = shuffleList(generalPool);

  const scoredGeneral = shuffledGeneral.map(e => ({
    event: e,
    score: (Math.random() * 85) + Math.min(15, (e.priority || 1) * 1.2)
  }));
  scoredGeneral.sort((a, b) => b.score - a.score);
  const generalList = scoredGeneral.map(s => s.event);

  const perYear = [];
  let genIdx = 0;
  let persIdx = 0;

  for (let y = 0; y < YEARS; y++) {
    const yearList = [];

    // MANDATORY: Guarantee at least 1 personal life / family scandal / coalition demand event every year
    if (persIdx < shuffledPersonal.length) {
      yearList.push(shuffledPersonal[persIdx++]);
    } else if (shuffledPersonal.length > 0) {
      yearList.push(shuffledPersonal[Math.floor(Math.random() * shuffledPersonal.length)]);
    } else if (genIdx < generalList.length) {
      yearList.push(generalList[genIdx++]);
    }

    // Fill remaining slots up to EVENTS_PER_YEAR
    while (yearList.length < EVENTS_PER_YEAR) {
      if (genIdx < generalList.length) {
        yearList.push(generalList[genIdx++]);
      } else {
        const randFallback = ALL_EVENTS[Math.floor(Math.random() * ALL_EVENTS.length)];
        yearList.push(randFallback);
      }
    }

    // Shuffle within the year so the personal event appears organically at any quarter (Q1-Q4)
    if (y === 0) {
      // TAHUN 1: Pastikan Kasus Latihan Sederhana (Tutorial APBD vs Respon DPRD) selalu berada di urutan pertama (index 0)
      const tutEvent = (typeof TUTORIAL_APBD_DPRD_EVENT !== 'undefined') ? TUTORIAL_APBD_DPRD_EVENT : ALL_EVENTS.find(e => e.id === 'ev_tutorial_apbd_dprd');
      const otherEvents = yearList.filter(e => !tutEvent || e.id !== tutEvent.id);
      const shuffledOthers = shuffleList(otherEvents);
      while (shuffledOthers.length < EVENTS_PER_YEAR - 1) {
        if (genIdx < generalList.length) shuffledOthers.push(generalList[genIdx++]);
        else shuffledOthers.push(ALL_EVENTS[Math.floor(Math.random() * ALL_EVENTS.length)]);
      }
      perYear.push([tutEvent || yearList[0], ...shuffledOthers]);
    } else {
      perYear.push(shuffleList(yearList));
    }
  }

  return perYear;
}

// ==================== COMPLETE GAME STATE & CONTROLLER ====================
var state = {
  term: 1,
  year: 1,
  eventIdx: 0,
  transferPusat: 2.6,
  apbd: 3.8,
  pad: 1.2,
  penduduk: 1350000,
  sat: 68,
  stats: { unemp: 7, pov: 8, inf: 3, traffic: 65, poll: 55, inv: 50, crime: 50, flood: 50, edu: 55, health: 55, infra: 50, env: 45 },
  selectedDiff: 'normal',
  selectedCand: null,
  opponentCand: null,
  promises: [],
  actors: {},
  cooldowns: {},
  flags: {},
  news: [],
  social: [],
  earnedAch: [],
  history: [],
  yearEvents: []
};

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function hasSave() {
  return localStorage.getItem('walikota_save_v3') !== null;
}

function saveGame() {
  localStorage.setItem('walikota_save_v3', JSON.stringify(state));
  const banner = document.getElementById('continueBanner');
  if (banner) banner.style.display = 'flex';
  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '💾 Game progress saved successfully!' : '💾 Progress permainan berhasil disimpan!');
}

function showHamburgerFab() {
  const fab = document.getElementById('hamburgerFab');
  if (fab) fab.style.display = 'flex';
}

function hideHamburgerFab() {
  const fab = document.getElementById('hamburgerFab');
  if (fab) fab.style.display = 'none';
}

function loadGame() {
  const raw = localStorage.getItem('walikota_save_v3');
  if (!raw) {
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '⚠️ No saved game data found.' : '⚠️ Belum ada data tersimpan.');
    return false;
  }
  try {
    state = JSON.parse(raw);
    if (!state.actors || Object.keys(state.actors).length === 0) state.actors = initActors();
    if (!state.cabinet || !Array.isArray(state.cabinet) || state.cabinet.length === 0) {
      state.cabinet = initCabinet();
    } else if (typeof syncCabinetTranslations === 'function') {
      syncCabinetTranslations();
    }
    if (!state.budgetAlloc) {
      state.budgetAlloc = { infra: 25, edu: 20, health: 20, env: 15, economy: 10, operasional: 10 };
    }
    if (!state.yearEvents || !Array.isArray(state.yearEvents) || state.yearEvents.length === 0) {
      state.yearEvents = buildYearOrder();
    }
    if (!state.stats) {
      state.stats = { unemp: 7, pov: 8, inf: 3, traffic: 65, poll: 55, inv: 50, crime: 50, flood: 50, edu: 55, health: 55, infra: 50, env: 45 };
    }
    if (!state.activePerdas) state.activePerdas = [];
    if (!state.centralLobby) {
      state.centralLobby = { dakUsedYear: 0, psnUsedTerm: 0, rakorGovYear: 0, mouUsedYear: 0 };
    }
    if (!state.life) {
      state.life = typeof initLifeState === 'function' ? initLifeState(state.selectedMayor) : {
        age: 42 + ((state.year || 1) - 1),
        health: 85,
        stress: 20,
        wealth: 1.8,
        reputation: 75,
        familyRel: 85,
        salary: 0.35,
        spouse: 'dr. Sarah N. (Dokter Spesialis)',
        childrenCount: 2,
        house: 'Rumah Pribadi Asri (Kec. Nusa Tengah)',
        car: 'SUV MPV Keluarga',
        investments: [],
        journal: [
          { year: 1, text: '🎉 Resmi dilantik sebagai Walikota Nusapura.' }
        ]
      };
    } else if (typeof syncLifeTranslations === 'function') {
      syncLifeTranslations();
    }
    if (!state.cooldowns) state.cooldowns = {};
    if (!state.flags) state.flags = {};
    if (!state.earnedAch) state.earnedAch = [];
    if (!state.news) state.news = [];
    if (!state.social) state.social = [];
    if (!state.history) state.history = [];
    if (typeof getCorruptionRisk === 'function') getCorruptionRisk();

    hideAllScreens();
    document.getElementById('app').style.display = 'block';
    showHamburgerFab();
    updateHUD();
    updateDashboard();
    updateGauges();
    renderNews();
    renderSocial();
    renderCurrentEvent();
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '📂 Game loaded successfully!' : '📂 Data permainan berhasil dimuat!');
    return true;
  } catch (e) {
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '⚠️ Failed to load saved data.' : '⚠️ Gagal memuat data tersimpan.');
    return false;
  }
}

function resetProgress() {
  localStorage.removeItem('walikota_save_v3');
  const banner = document.getElementById('continueBanner');
  if (banner) banner.style.display = 'none';
  showToast('♻️ Progress telah direset!');
}

function hideAllScreens() {
  const screens = ['startScreen', 'mayorSelectionScreen', 'difficultyScreen', 'candidateScreen', 'promiseScreen', 'campaignScreen', 'quickCountScreen', 'evaluationScreen', 'gameOverScreen'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('show');
      el.style.display = '';
      if (id === 'startScreen') el.classList.add('hidden-force');
    }
  });
  const modals = document.querySelectorAll('.modalOverlay');
  modals.forEach(m => {
    m.classList.remove('show');
    m.style.display = '';
  });
  const appEl = document.getElementById('app');
  if (appEl) appEl.style.display = 'none';
}

function showStartScreen() {
  hideAllScreens();
  hideHamburgerFab();
  const start = document.getElementById('startScreen');
  if (start) {
    start.classList.remove('hidden-force');
    start.classList.add('show');
  }
  if (hasSave()) {
    const banner = document.getElementById('continueBanner');
    if (banner) banner.style.display = 'flex';
  }
}

function initNewGame() {
  const diffs = {
    easy: { apbdBonus: 1.0, padBonus: 0.6, satBonus: 10 },
    normal: { apbdBonus: 0.0, padBonus: 0.0, satBonus: 0 },
    hard: { apbdBonus: -1.0, padBonus: -0.4, satBonus: -8 },
    extreme: { apbdBonus: -1.8, padBonus: -0.7, satBonus: -15 }
  };
  const diff = diffs[state.selectedDiff || 'normal'] || diffs.normal;

  state.term = 1;
  state.year = 1;
  state.eventIdx = 0;
  state.transferPusat = 2.6;
  state.pad = Math.round((1.2 + diff.padBonus) * 10) / 10;
  state.apbd = Math.round((state.transferPusat + state.pad + diff.apbdBonus) * 10) / 10;
  state.sat = Math.max(20, Math.min(100, 68 + diff.satBonus));
  state.stats = { unemp: 7, pov: 8, inf: 3, traffic: 65, poll: 55, inv: 50, crime: 50, flood: 50, edu: 55, health: 55, infra: 50, env: 45 };
  state.actors = initActors();
  state.cooldowns = {};
  state.flags = {};
  state.usedEventIds = [];
  state.currentActiveEvent = null;
  state.earnedAch = state.earnedAch || [];
  state.news = [{
    year: 'Thn 1',
    year_en: 'Yr 1',
    text: 'Walikota resmi dilantik untuk memimpin Kota Nusapura.',
    text_en: 'Mayor formally inaugurated to lead the City of Nusapura.',
    mood: 1
  }];
  state.social = [{
    avatar: '👤',
    handle: '@WargaNusapura',
    handle_en: '@NusapuraCitizen',
    text: 'Selamat bertugas Pak Walikota! Bawa Kota Nusapura lebih maju! 👍',
    text_en: 'Congratulations Mayor! Lead Nusapura City toward greater prosperity! 👍',
    sentiment: '👍',
    type: 'praise',
    handled: true,
    statusText: '👍 Diapresiasi warga',
    statusText_en: '👍 Appreciated by citizens'
  }];
  state.history = [];
  state.life = typeof initLifeState === 'function' ? initLifeState(state.selectedMayor) : {
    age: 42,
    health: 85,
    stress: 20,
    wealth: 1.8,
    reputation: 75,
    familyRel: 85,
    salary: 0.35,
    spouse: 'dr. Sarah N. (Dokter Spesialis)',
    spouse_en: 'Dr. Sarah N. (Medical Specialist)',
    childrenCount: 2,
    house: 'Rumah Pribadi Asri (Kec. Nusa Tengah)',
    house_en: 'Serene Private Residence (Central District)',
    car: 'SUV MPV Keluarga',
    car_en: 'Family MPV Vehicle',
    investments: [],
    journal: [
      { year: 1, text: '🎉 Resmi dilantik sebagai Walikota Nusapura. Kekayaan pribadi tercatat Rp 1.8 Miliar.' }
    ]
  };
  state.yearEvents = buildYearOrder();

  hideAllScreens();
  document.getElementById('app').style.display = 'block';
  showHamburgerFab();
  updateHUD();
  updateDashboard();
  updateGauges();
  renderNews();
  renderSocial();
  renderCurrentEvent();
  saveGame();
}

function updateHUD() {
  const dBadge = document.getElementById('dossierBadge');
  if (dBadge) dBadge.textContent = (state.longTermMemories ? state.longTermMemories.length : 0);

  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  const elMayor = document.getElementById('hudMayorName');
  if (elMayor) {
    if (state.mayorCandidate) {
      const mTitle = isEn ? (state.mayorCandidate.title_en || state.mayorCandidate.title) : state.mayorCandidate.title;
      elMayor.textContent = `${state.mayorCandidate.avatar || '👔'} ${state.mayorCandidate.name.split(',')[0]}`;
      elMayor.title = `${state.mayorCandidate.name} (${mTitle})`;
    } else {
      elMayor.textContent = '-';
    }
  }

  const elVice = document.getElementById('hudViceName');
  if (elVice) {
    if (state.viceMayor) {
      const vmTitle = isEn ? (state.viceMayor.background_en || state.viceMayor.background) : state.viceMayor.background;
      elVice.textContent = `${state.viceMayor.avatar || '👤'} ${state.viceMayor.name}`;
      elVice.title = vmTitle;
    } else {
      elVice.textContent = '-';
    }
  }

  const elYear = document.getElementById('hudYear');
  if (elYear) {
    elYear.textContent = isEn 
      ? `Year ${state.year || 1} (Term ${state.term || 1})`
      : `Thn ke-${state.year || 1} (Periode ${state.term || 1})`;
  }

  const elApbd = document.getElementById('hudApbd');
  if (elApbd) elApbd.textContent = `Rp ${(state.apbd != null ? state.apbd : 18).toFixed(1)} T`;

  const elPad = document.getElementById('hudPad');
  if (elPad) elPad.textContent = `Rp ${(state.pad != null ? state.pad : 7).toFixed(1)} T`;

  const elPenduduk = document.getElementById('hudPenduduk');
  if (elPenduduk) elPenduduk.textContent = (state.penduduk || 1350000).toLocaleString(isEn ? 'en-US' : 'id-ID');

  const satVal = Math.round(state.sat != null ? state.sat : 68);
  const elSat = document.getElementById('hudSat');
  if (elSat) elSat.textContent = `${satVal}%`;

  const elSatBar = document.getElementById('hudSatBar');
  if (elSatBar) elSatBar.style.width = `${satVal}%`;

  const termTrack = document.getElementById('termTrack');
  if (termTrack) {
    termTrack.innerHTML = Array.from({ length: YEARS }).map((_, i) => {
      const yr = i + 1;
      let cls = 'termSeg';
      if (yr < state.year) cls += ' done';
      else if (yr === state.year) cls += ' current';
      const title = isEn ? `Year ${yr}` : `Tahun ke-${yr}`;
      return `<div class="${cls}" title="${title}"></div>`;
    }).join('');
  }
  if (typeof updateDirectFeatureBadges === 'function') updateDirectFeatureBadges();
}

function updateDashboard() {
  updateCoreVitalSigns();
  const mapping = {
    gPengangguranVal: ['unemp', '%'], gKemiskinanVal: ['pov', '%'], gInflasiVal: ['inf', '%'],
    gKemacetanVal: ['traffic', ''], gPolusiVal: ['poll', ''], gInvestasiVal: ['inv', ''],
    gKriminalitasVal: ['crime', ''], gBanjirVal: ['flood', ''], gPendidikanVal: ['edu', ''],
    gKesehatanVal: ['health', ''], gInfrastrukturVal: ['infra', ''], gLingkunganVal: ['env', '']
  };

  for (const id in mapping) {
    const el = document.getElementById(id);
    const bar = document.getElementById(id.replace('Val', 'Bar'));
    const key = mapping[id][0];
    const unit = mapping[id][1];
    const val = (state.stats && state.stats[key] != null) ? state.stats[key] : 50;

    if (el) el.textContent = `${val}${unit}`;
    if (bar) bar.style.width = `${Math.max(0, Math.min(100, val))}%`;
  }
}

function updateGauges() {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  const satVal = Math.round(state.sat != null ? state.sat : 68);
  const sentBar = document.getElementById('v3SentimentBar');
  const sentVal = document.getElementById('v3SentimentVal');
  if (sentBar && sentVal) {
    sentBar.style.width = `${satVal}%`;
    if (isEn) {
      if (satVal >= 75) sentVal.textContent = '🟢 Highly Favorable';
      else if (satVal >= 50) sentVal.textContent = '🟡 Moderately Stable';
      else if (satVal >= 30) sentVal.textContent = '🟠 Wary / Discontent';
      else sentVal.textContent = '🔴 Critical / Outraged';
    } else {
      if (satVal >= 75) sentVal.textContent = '🟢 Sangat Positif';
      else if (satVal >= 50) sentVal.textContent = '🟡 Cukup Stabil';
      else if (satVal >= 30) sentVal.textContent = '🟠 Waspada / Kecewa';
      else sentVal.textContent = '🔴 Kritis / Marah';
    }
  }

  const riskBar = document.getElementById('v3RiskBar');
  const riskVal = document.getElementById('v3RiskVal');
  const crimeVal = (state.stats && state.stats.crime != null) ? state.stats.crime : 0;
  if (riskBar && riskVal) {
    riskBar.style.width = `${crimeVal}%`;
    if (isEn) {
      if (crimeVal >= 70) riskVal.textContent = '🔴 Severe Risk';
      else if (crimeVal >= 40) riskVal.textContent = '🟡 Moderate';
      else riskVal.textContent = '🟢 Low';
    } else {
      if (crimeVal >= 70) riskVal.textContent = '🔴 Bahaya Tinggi';
      else if (crimeVal >= 40) riskVal.textContent = '🟡 Sedang';
      else riskVal.textContent = '🟢 Rendah';
    }
  }
}

let NEWS_ID_TO_EN_MAP = null;
let SOCIAL_ID_TO_EN_MAP = null;

function ensureNewsAndSocialTranslationMaps() {
  if (NEWS_ID_TO_EN_MAP && SOCIAL_ID_TO_EN_MAP) return;
  NEWS_ID_TO_EN_MAP = new Map();
  SOCIAL_ID_TO_EN_MAP = new Map();
  if (typeof ALL_EVENTS !== 'undefined' && Array.isArray(ALL_EVENTS)) {
    ALL_EVENTS.forEach(ev => {
      const loc = typeof EVENT_TRANSLATIONS !== 'undefined' ? EVENT_TRANSLATIONS[String(ev.id)] : null;
      if (ev.choices && Array.isArray(ev.choices)) {
        ev.choices.forEach((c, idx) => {
          const transChoice = loc && loc.choices && loc.choices[idx];
          const newsEn = (transChoice && transChoice.news) || c.news_en;
          const dEn = (transChoice && transChoice.d) || c.d_en;
          if (c.news && newsEn) {
            NEWS_ID_TO_EN_MAP.set(c.news.trim(), newsEn.trim());
          }
          if (c.d && dEn) {
            SOCIAL_ID_TO_EN_MAP.set(c.d.trim(), dEn.trim());
          }
        });
      }
    });
  }
}

function getLocalizedNewsString(item, lang = 'id') {
  if (!item) return '';
  const isEn = lang === 'en';
  if (!isEn) {
    if (typeof item === 'object') return item.text || item.text_id || '';
    return String(item || '');
  }

  if (typeof item === 'object') {
    if (item.text_en) return item.text_en;
    item = item.text || '';
  }

  if (typeof item !== 'string') return String(item || '');
  const trimmed = item.trim();

  ensureNewsAndSocialTranslationMaps();
  if (NEWS_ID_TO_EN_MAP && NEWS_ID_TO_EN_MAP.has(trimmed)) {
    return NEWS_ID_TO_EN_MAP.get(trimmed);
  }

  const dynamicNewsDict = [
    [/^Walikota resmi dilantik untuk Kota Nusapura\.?/i, 'Mayor formally inaugurated to lead the City of Nusapura.'],
    [/^Walikota resmi dilantik untuk memimpin Kota Nusapura Periode Pertama\.?/i, 'Mayor formally inaugurated to lead the City of Nusapura for the First Term.'],
    [/^🎉 Walikota resmi dilantik kembali untuk Periode Kedua kepemimpinan Kota Nusapura!?/i, '🎉 Mayor officially inaugurated for the Second Term of Nusapura City governance!'],
    [/^Kinerja birokrasi disorot akibat tingginya risiko kebocoran kas daerah\.?/i, 'Bureaucracy scrutinized due to high municipal budget leakage risks.'],
    [/^Integrasi birokrasi & integritas kabinet mendapat pujian dari lembaga pengawas\.?/i, 'Cabinet integrity & bureaucratic efficiency receive praise from independent auditors.'],
    [/^OTT KPK bongkar suap perizinan oknum birokrasi daerah\.?/i, 'KPK sting operation exposes permit kickback bribery among municipal department officials.'],
    [/^Aksi pemblokiran komentar kritik warga di akun resmi pemkot diprotes aktivis digital\.?/i, 'Censorship of critical citizen comments on official city accounts sparks digital rights protests.'],
    [/^Tim kampanye terlilit utang vendor & pencetakan spanduk\.?/i, 'Campaign team overwhelmed with banner printing & vendor debts.'],
    [/^Walikota memberhentikan (.+?) dan mengangkat (.+?) sebagai (.+?)\.?$/i, 'Mayor dismissed $1 and appointed $2 as $3.'],
    [/^🚫 (.+?) resmi dipecat\. (.+?) ditunjuk sebagai pengganti!?/i, '🚫 $1 officially dismissed. $2 appointed as successor!'],
    [/^Walikota melakukan mutasi & penyegaran tata kelola posisi (.+?) \((.+?)\)\.?$/i, 'Mayor ordered governance rotation & restructuring for $1 ($2).'],
    [/^Proyek raksasa (.+?) resmi selesai dikerjakan & beroperasi!?/i, 'Megaproject $1 is officially completed and operational!'],
    [/^Walikota menginstruksikan penerjunan darurat unit (.+?)\.?$/i, 'Mayor ordered emergency deployment of $1 disaster response unit.'],
    [/^Konferensi Pers selesai dengan predikat (.+?)\.?$/i, 'City Hall press conference concluded with grade $1.'],
    [/^📢 Serikat Buruh menggelar aksi demonstrasi menolak kebijakan pemkot.*/i, '📢 Labor Unions staged protests rejecting municipal policies! Citizen Approval -4% & Unemployment +2%'],
    [/^💸 Konsorsium Investor menunda investasi proyek baru.*/i, '💸 Investor Consortium delayed new project investments! Investment -5 & PAD -0.3 T'],
    [/^🔍 LSM merilis laporan investigasi kritik transparansi Pemkot.*/i, '🔍 NGOs released an investigative report criticizing City Hall transparency! Citizen Approval -4%'],
    [/^📜 BPK menerbitkan LHP Opini WDP terkait ketidaksesuaian kas.*/i, '📜 Supreme Audit Agency (BPK) issued a Qualified Opinion audit report! Budget -0.4 T & Approval -3%'],
    [/^🚨 Tensi sosial meningkat akibat minimnya koordinasi keamanan.*/i, '🚨 Social tensions escalated due to lack of security coordination! Crime rate +4%'],
    [/^📜 Kelompok (.+?) menerbitkan petisi keprihatinan atas kebijakan pemkot.*/i, '📜 The $1 group published a petition of concern regarding municipal policies! Approval -3%'],
    [/^⚠️ Hubungan buruk dengan (.+?) memicu tekanan politik ke Balaikota.*/i, '⚠️ Strained relations with $1 triggered political friction against City Hall! Approval -3%']
  ];

  for (const [pattern, repl] of dynamicNewsDict) {
    if (pattern.test(trimmed)) {
      return trimmed.replace(pattern, repl).replace(/\.\s*disaster response unit/i, ' disaster response unit');
    }
  }

  return typeof translateDynamicText === 'function' ? translateDynamicText(trimmed, 'en') : trimmed;
}

function getLocalizedSocialPost(s, lang = 'id') {
  if (!s) return s;
  const isEn = lang === 'en';
  if (!isEn) {
    return {
      ...s,
      displayHandle: s.handle || '@Warga',
      displayText: s.text || '',
      displayStatus: s.statusText || ''
    };
  }

  let handle = s.handle_en || s.handle || '@Citizen';
  const handleMap = {
    '@WargaNusapura': '@NusapuraCitizen',
    '@SuaraPublik': '@PublicVoice',
    '@AktivisKota': '@CityActivist',
    '@NetizenJujur': '@HonestNetizen',
    '@PedagangKota': '@UrbanMerchant',
    '@AnakMudaNusa': '@NusaYouth',
    '@DriverOnline': '@RideshareDriver',
    '@IbuRT_Kota': '@CommunityLeader',
    '@WargaKritis': '@CriticalCitizen',
    '@NetizenSantai': '@CasualNetizen',
    '@KomunitasWarga': '@CitizenCommunity',
    '@Warga': '@Citizen'
  };
  if (handleMap[handle]) handle = handleMap[handle];

  let text = s.text_en || '';
  if (!text) {
    const rawText = s.text || '';
    const emojiMatch = rawText.match(/(\s*[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]+)$/u);
    const trailingEmoji = emojiMatch ? emojiMatch[1] : '';
    const baseText = emojiMatch ? rawText.slice(0, -emojiMatch[0].length).trim() : rawText.trim();

    ensureNewsAndSocialTranslationMaps();
    if (SOCIAL_ID_TO_EN_MAP && SOCIAL_ID_TO_EN_MAP.has(baseText)) {
      text = SOCIAL_ID_TO_EN_MAP.get(baseText) + (trailingEmoji ? ' ' + trailingEmoji.trim() : '');
    } else if (SOCIAL_ID_TO_EN_MAP && SOCIAL_ID_TO_EN_MAP.has(rawText.trim())) {
      text = SOCIAL_ID_TO_EN_MAP.get(rawText.trim());
    } else if (/^Selamat bertugas Pak Walikota/i.test(rawText)) {
      text = 'Congratulations Mayor! Lead Nusapura City toward greater prosperity! 👍';
    } else if (/^Selamat atas periode kedua/i.test(rawText)) {
      text = 'Congratulations on your second term Mayor! Keep up the momentum! 🚀';
    } else {
      const dynamicSocialDict = [
        [/^Macet parah di Simpang Lima.*/i, 'Severe traffic congestion at Simpang Lima, please take swift action! 😡'],
        [/^Banjir merendam jalan protokol.*/i, 'Floodwaters submerging main protocol roads, please deploy drainage pumps! 🌊'],
        [/^Sampah menumpuk di TPS.*/i, 'Garbage piling up at waste disposal points, smells terrible! 🗑️'],
        [/^Kriminalitas malam hari makin rawan.*/i, 'Nighttime street crime is escalating, need more police patrols! 🚨']
      ];
      let matchedDynamic = false;
      for (const [pattern, repl] of dynamicSocialDict) {
        if (pattern.test(rawText)) {
          text = rawText.replace(pattern, repl);
          matchedDynamic = true;
          break;
        }
      }
      if (!matchedDynamic) {
        text = typeof translateDynamicText === 'function' ? translateDynamicText(rawText, 'en') : rawText;
      }
    }
  }

  let statusText = s.statusText_en || '';
  if (!statusText && s.statusText) {
    const statusMap = {
      '👍 Diapresiasi warga': '👍 Appreciated by citizens',
      '🤫 Didiamkan oleh Pemkot': '🤫 Ignored by City Administration',
      '📢 Diklarifikasi: Humas Pemkot menyampaikan penjelasan resmi.': '📢 Clarified: City PR released an official clarification.',
      '🙏 Dibalas: Walikota menyampaikan permohonan maaf & janji perbaikan.': '🙏 Addressed: Mayor issued a public apology & pledged swift fixes.',
      '🚫 Komentar diblokir (VIRAL BACKLASH!)': '🚫 Comment blocked (VIRAL BACKLASH!)',
      '🚫 Komentar telah diblokir.': '🚫 Comment silenced quietly.'
    };
    statusText = statusMap[s.statusText] || s.statusText;
  }

  return {
    ...s,
    displayHandle: handle,
    displayText: text,
    displayStatus: statusText
  };
}

function renderNews() {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  const container = document.getElementById('newsList');
  if (!container) return;
  if (!state.news || state.news.length === 0) {
    container.innerHTML = `<div class="newsEmpty">${isEn ? 'No top news stories yet today.' : 'Belum ada berita utama hari ini.'}</div>`;
    return;
  }
  container.innerHTML = state.news.slice(-8).reverse().map(n => {
    const rawText = getLocalizedNewsString(n, lang);
    let yrText = n.year || '';
    if (isEn) {
      if (n.year_en) yrText = n.year_en;
      else yrText = yrText.replace(/Thn\s*/i, 'Yr ').replace(/Pilkada/i, 'Election').replace(/P2/i, 'T2');
    }
    const highlighted = typeof highlightGovTerms === 'function' ? highlightGovTerms(rawText) : rawText;
    return `
      <div class="newsItem mood-${n.mood != null ? n.mood : 0}">
        <span class="newsYear">${yrText}</span>
        <span>${highlighted}</span>
      </div>
    `;
  }).join('');
}

function renderSocial() {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  renderCivicNetTrending(lang);
  const container = document.getElementById('socialList');
  if (!container) return;
  if (!state.social || state.social.length === 0) {
    container.innerHTML = `<div class="newsEmpty">${isEn ? 'No citizen posts on NusaTalk yet.' : 'Belum ada postingan warga di NusaTalk.'}</div>`;
    return;
  }

  container.innerHTML = state.social.slice(-10).reverse().map(s => {
    const locItem = getLocalizedSocialPost(s, lang);
    let sentColor = 'var(--blue-soft)';
    let sentBg = 'rgba(255,255,255,0.035)';
    if (s.sentiment === '👍' || s.sentiment === '🤩') {
      sentColor = 'var(--green)';
      sentBg = 'rgba(62,207,142,0.06)';
    } else if (s.sentiment === '😡' || s.sentiment === '😤') {
      sentColor = 'var(--red)';
      sentBg = 'rgba(242,89,107,0.06)';
    }

    const isPending = !s.handled && (s.type === 'anger' || s.type === 'complaint');
    const highlightedText = typeof highlightGovTerms === 'function' ? highlightGovTerms(locItem.displayText) : locItem.displayText;
    const statusDisplay = locItem.displayStatus || '';

    return `
      <div class="socialItemInteractive" style="background:${sentBg};border-left:3.5px solid ${sentColor};">
        <div class="socialHeaderRow">
          <div class="socialUserGroup">
            <div class="socialAvatarBadge">${s.avatar || '👤'}</div>
            <div>
              <div class="socialHandleText">${locItem.displayHandle}</div>
            </div>
          </div>
          <span class="socialTagSentiment">${s.sentiment || '💬'}</span>
        </div>
        <div class="socialBodyText">${highlightedText}</div>
        ${isPending ? `
          <div class="socialActionRow">
            <button class="socialActionBtn" onclick="handleSocialAction('${s.id}', 'ignore')">${isEn ? '🤫 Ignore' : '🤫 Diam'}</button>
            <button class="socialActionBtn" onclick="handleSocialAction('${s.id}', 'clarify')">${isEn ? '📢 Clarify' : '📢 Klarifikasi'}</button>
            <button class="socialActionBtn" onclick="handleSocialAction('${s.id}', 'apologize')">${isEn ? '🙏 Apologize' : '🙏 Minta Maaf'}</button>
            <button class="socialActionBtn blockRisk" onclick="handleSocialAction('${s.id}', 'block')">${isEn ? '🚫 Block (Risk)' : '🚫 Blokir (Risiko)'}</button>
          </div>
        ` : (statusDisplay ? `<div class="socialHandledText">${statusDisplay}</div>` : '')}
      </div>
    `;
  }).join('');
}

function handleSocialAction(postId, action) {
  if (!state.social) return;
  const post = state.social.find(p => p.id === postId);
  if (!post) return;

  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  post.handled = true;

  if (action === 'ignore') {
    post.statusText = '🤫 Didiamkan oleh Pemkot';
    post.statusText_en = '🤫 Ignored by City Administration';
    if (post.type === 'anger' || post.type === 'complaint') {
      state.sat = Math.max(0, state.sat - 1);
    }
    showToast(isEn ? '🤫 You chose to disregard the citizen grievance.' : '🤫 Anda memilih mendiamkan keluhan warga.');
  } else if (action === 'clarify') {
    post.statusText = '📢 Diklarifikasi: Humas Pemkot menyampaikan penjelasan resmi.';
    post.statusText_en = '📢 Clarified: City PR released an official clarification.';
    state.sat = Math.min(100, state.sat + 1);
    showToast(isEn ? '📢 Official clarification published to social feeds.' : '📢 Klarifikasi resmi dikirimkan ke warganet.');
  } else if (action === 'apologize') {
    post.statusText = '🙏 Dibalas: Walikota menyampaikan permohonan maaf & janji perbaikan.';
    post.statusText_en = '🙏 Addressed: Mayor issued a public apology & pledged swift fixes.';
    state.sat = Math.min(100, state.sat + 2);
    updateActorRelations({ LSM: 2, MediaLokal: 2 });
    showToast(isEn ? '🙏 Formal apology delivered to the public.' : '🙏 Permohonan maaf resmi disampaikan ke warga.');
  } else if (action === 'block') {
    if (Math.random() < 0.40) {
      post.statusText = '🚫 Komentar diblokir (VIRAL BACKLASH!)';
      post.statusText_en = '🚫 Comment blocked (VIRAL BACKLASH!)';
      state.sat = Math.max(0, state.sat - 5);
      updateActorRelations({ LSM: -8, Influencer: -8, MediaLokal: -6 });
      showToast(isEn ? '🚨 Censorship controversy! Silencing critical comments sparked viral outrage! Approval -5%!' : '🚨 Kontroversi! Aksi pembungkaman komentar viral di TikTok & X! Kepuasan Warga -5%!');
      if (!state.news) state.news = [];
      state.news.push({ 
        year: `Thn ${state.year}`, 
        text: 'Aksi pemblokiran komentar kritik warga di akun resmi pemkot diprotes aktivis digital.',
        text_en: 'Censorship of critical citizen comments on official city accounts sparks digital rights protests.',
        mood: -1 
      });
    } else {
      post.statusText = '🚫 Komentar telah diblokir.';
      post.statusText_en = '🚫 Comment silenced quietly.';
      showToast(isEn ? '🚫 Comment removed without immediate public backlash.' : '🚫 Komentar diblokir tanpa timbul kegaduhan.');
    }
  }

  updateHUD();
  updateGauges();
  renderNews();
  renderSocial();
  saveGame();
}

function getCurrentEvent() {
  if (!state.usedEventIds) state.usedEventIds = [];

  if (state.currentActiveEvent && state.currentActiveYear === state.year && state.currentActiveIdx === state.eventIdx) {
    return state.currentActiveEvent;
  }

  // Mandatory Year 1 Beat 0: Kasus Latihan Sederhana (Tutorial Orientasi APBD & Respon DPRD)
  if (state.year === 1 && state.eventIdx === 0 && (!state.usedEventIds || !state.usedEventIds.includes('ev_tutorial_apbd_dprd'))) {
    const tutEvent = (typeof TUTORIAL_APBD_DPRD_EVENT !== 'undefined') ? TUTORIAL_APBD_DPRD_EVENT : (typeof ALL_EVENTS !== 'undefined' ? ALL_EVENTS.find(e => e.id === 'ev_tutorial_apbd_dprd') : null);
    if (tutEvent) {
      state.currentActiveEvent = tutEvent;
      state.currentActiveYear = 1;
      state.currentActiveIdx = 0;
      return tutEvent;
    }
  }

  // Mandatory Annual RAPBD Deliberation Event in Card at Quarter 4 (eventIdx 6 of 8)
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (state.eventIdx === 6 && (!state.lastBudgetEventYear || state.lastBudgetEventYear !== state.year)) {
    const budgetCardEvent = {
      id: `ev_annual_rapbd_${state.year}`,
      cat: isEn ? 'Budget & Fiscal' : 'Anggaran & Fiskal',
      icon: '🏛️',
      title: isEn ? `Annual APBD Deliberation (Fiscal Year ${state.year + 1})` : `Rapat Paripurna RAPBD (Tahun Anggaran ${state.year + 1})`,
      text: isEn 
        ? `Tim Anggaran Pemerintah Daerah (TAPD) and the Regional Secretary present the Draft APBD for next fiscal year (Current APBD: Rp ${state.apbd.toFixed(1)} T | PAD: Rp ${state.pad.toFixed(1)} T). What is your executive policy direction for city allocations?`
        : `Sekda dan Tim Anggaran Pemerintah Daerah (TAPD) memaparkan Rancangan APBD untuk tahun depan (Total Kas APBD: Rp ${state.apbd.toFixed(1)} T | Realisasi PAD: Rp ${state.pad.toFixed(1)} T). Bagaimana arah kebijakan alokasi belanja yang Bapak/Ibu Walikota tetapkan?`,
      choices: [
        {
          t: isEn ? 'Package A: Pro-Citizen Welfare (60% Health & Education)' : 'Paket A: Pro-Rakyat Sejahtera (60% Pendidikan & Kesehatan)',
          d: isEn ? 'Enact heavy investment into clinics, schools, and social safety nets. Increases citizen approval significantly.' : 'Alokasikan belanja maksimal untuk puskesmas gratis, sekolah, dan bansos. Kepuasan warga melonjak tajam.',
          budgetType: 'rakyat',
          fx: { sat: 8, apbd: -0.1 },
          actors: { LSM: 10, Mahasiswa: 8, DPRD: 5 },
          news: 'Walikota sahkan arah RAPBD pro-rakyat: 60% anggaran difokuskan ke sektor pendidikan dan kesehatan gratis!',
          news_en: 'Mayor ratifies pro-welfare budget policy: 60% prioritized for healthcare and quality public schooling!'
        },
        {
          t: isEn ? 'Package B: Infrastructure Acceleration (40% Public Works)' : 'Paket B: Akselerasi Infrastruktur & Jalan Kota (40%)',
          d: isEn ? 'Prioritize roads, flyovers, drainage, and public transport infrastructure. Reduces city traffic and flood risk.' : 'Genjot perbaikan jalan protokol, drainase anti-banjir, dan transportasi. Mempercepat konektivitas ekonomi.',
          budgetType: 'infra',
          fx: { infra: 6, traffic: -4, sat: 4, apbd: -0.2 },
          actors: { Pengusaha: 10, Investor: 10, LSM: -3 },
          news: 'RAPBD menitikberatkan akselerasi infrastruktur: proyek jalan dan drainase kota dipacu maksimal!',
          news_en: 'Annual budget accelerates capital infrastructure: roadworks and stormwater drainage prioritized!'
        },
        {
          t: isEn ? 'Package C: Fiscal Discipline & Balanced Growth' : 'Paket C: Alokasi Berimbang & Penguatan Kas Daerah',
          d: isEn ? 'Maintain balanced allocations across infrastructure, health, education, and municipal reserves.' : 'Alokasi proporsional 25% infra, 20% pendidikan, 20% kesehatan, dan jaga efisiensi belanja dinas.',
          budgetType: 'seimbang',
          fx: { sat: 5, pad: 0.2 },
          actors: { BPK: 8, ASN: 6 },
          news: 'Kebijakan APBD berimbang diteken: fokus efisiensi belanja dan penguatan pundi Pendapatan Asli Daerah (PAD).',
          news_en: 'Balanced municipal budget enacted: emphasizing spending efficiency and strengthening local revenue reserves.'
        },
        {
          t: isEn ? 'Option D: Open Full Interactive Budget Table (Custom Sliders)' : 'Opsi D: Masuk Meja Slider Rinci (Kustomisasi Mandiri)',
          d: isEn ? 'Open the detailed APBD control panel to fine-tune sector percentages manually with live economic forecast.' : 'Buka meja simulasi APBD lengkap untuk mengatur persentase tiap dinas secara presisi dan melihat proyeksi langsung.',
          openBudgetModalDirect: true,
          budgetType: 'seimbang',
          fx: { sat: 3 },
          news: 'Walikota menggelar rapat maraton rincian pos belanja APBD bersama seluruh kepala dinas dan TAPD.',
          news_en: 'Mayor convenes executive budget workshop to fine-tune detailed departmental allocations.'
        }
      ]
    };
    state.lastBudgetEventYear = state.year;
    state.currentActiveEvent = budgetCardEvent;
    state.currentActiveYear = state.year;
    state.currentActiveIdx = state.eventIdx;
    return budgetCardEvent;
  }

  // 1. Check pre-scheduled yearEvents if available
  let candidate = null;
  if (state.yearEvents && state.yearEvents[state.year - 1] && state.yearEvents[state.year - 1][state.eventIdx]) {
    candidate = state.yearEvents[state.year - 1][state.eventIdx];
  }

  // Verify candidate validity
  if (candidate) {
    const isUsed = state.usedEventIds.includes(candidate.id);
    const reqPassed = !candidate.requirements || candidate.requirements(state.stats || {}, state.flags || {}, state.actors || {});
    const onCooldown = state.cooldowns && state.cooldowns[candidate.id] > 0;

    if (!isUsed && reqPassed && !onCooldown) {
      state.currentActiveEvent = candidate;
      state.currentActiveYear = state.year;
      state.currentActiveIdx = state.eventIdx;
      return candidate;
    }
  }

  // 2. If candidate is invalid or already used, pull dynamically from ALL_EVENTS with high randomization
  const activeMayorId = state.selectedMayor || (state.mayorCandidate ? state.mayorCandidate.id : 'ardhan');
  const eligible = ALL_EVENTS.filter(e => {
    if (state.usedEventIds.includes(e.id)) return false;
    if (e.candId && e.candId !== activeMayorId) return false;
    if (e.requirements && !e.requirements(state.stats || {}, state.flags || {}, state.actors || {})) return false;
    if (state.cooldowns && state.cooldowns[e.id] > 0) return false;
    return true;
  });

  let picked = null;
  if (eligible.length > 0) {
    const shuffled = shuffleList(eligible);
    const scored = shuffled.map(e => ({
      event: e,
      weight: (Math.random() * 85) + Math.min(15, (e.priority || 1) * 1.2) + (e.candId === activeMayorId ? 45 : 0)
    }));
    scored.sort((a, b) => b.weight - a.weight);
    picked = scored[0].event;
  } else {
    // Reset used history cache retaining last 6 to avoid immediate consecutive loops
    state.usedEventIds = state.usedEventIds.slice(-6);
    const reEligible = ALL_EVENTS.filter(e => {
      if (state.usedEventIds.includes(e.id)) return false;
      if (e.candId && e.candId !== activeMayorId) return false;
      if (e.requirements && !e.requirements(state.stats || {}, state.flags || {}, state.actors || {})) return false;
      return true;
    });
    const fallbackPool = reEligible.length > 0 ? reEligible : ALL_EVENTS.filter(e => !e.candId || e.candId === activeMayorId);
    picked = fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
  }

  state.currentActiveEvent = picked;
  state.currentActiveYear = state.year;
  state.currentActiveIdx = state.eventIdx;
  return picked;
}





let showDetailedSectors = false;

function toggleSectorDetails() {
  showDetailedSectors = !showDetailedSectors;
  const indGrid = document.getElementById('indGridContainer') || document.querySelector('.indGrid');
  const icon = document.getElementById('sectorToggleIcon');
  const text = document.getElementById('sectorToggleText');
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (indGrid) {
    indGrid.style.display = showDetailedSectors ? 'grid' : 'none';
  }
  if (icon) icon.textContent = showDetailedSectors ? '▴' : '▾';
  if (text) {
    if (isEn) {
      text.textContent = showDetailedSectors ? 'Hide 12 Sectoral Indicators' : 'Show 12 Sectoral Indicators';
    } else {
      text.textContent = showDetailedSectors ? 'Sembunyikan Rincian 12 Indikator Sektoral' : 'Tampilkan Rincian 12 Indikator Sektoral';
    }
  }
}

function updateCoreVitalSigns() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  
  // 1. Approval
  const sat = Math.round(state.sat != null ? state.sat : 68);
  const elAppVal = document.getElementById('vitalApprovalVal');
  const elAppBadge = document.getElementById('vitalApprovalBadge');
  if (elAppVal) elAppVal.textContent = sat + '%';
  if (elAppBadge) {
    if (sat >= 75) {
      elAppBadge.textContent = isEn ? '🟢 Highly Favorable' : '🟢 Sangat Dicintai';
      elAppBadge.style.background = 'rgba(34,197,94,0.2)';
      elAppBadge.style.color = '#86efac';
    } else if (sat >= 50) {
      elAppBadge.textContent = isEn ? '🟡 Stable' : '🟡 Cukup Stabil';
      elAppBadge.style.background = 'rgba(234,179,8,0.2)';
      elAppBadge.style.color = '#fef08a';
    } else if (sat >= 30) {
      elAppBadge.textContent = isEn ? '🟠 Wary / Discontent' : '🟠 Rawan / Bergejolak';
      elAppBadge.style.background = 'rgba(249,115,22,0.2)';
      elAppBadge.style.color = '#fed7aa';
    } else {
      elAppBadge.textContent = isEn ? '🔴 Impeachment Alert' : '🔴 Kritis / Bahaya Pemakzulan';
      elAppBadge.style.background = 'rgba(239,68,68,0.2)';
      elAppBadge.style.color = '#fca5a5';
    }
  }

  // 2. APBD Treasury
  const apbd = (state.apbd != null ? state.apbd : 3.8);
  const elApbdVal = document.getElementById('vitalApbdVal');
  const elApbdBadge = document.getElementById('vitalApbdBadge');
  if (elApbdVal) elApbdVal.textContent = 'Rp ' + apbd.toFixed(1) + ' T';
  if (elApbdBadge) {
    if (apbd >= 3.0) {
      elApbdBadge.textContent = isEn ? '🟢 Robust Surplus' : '🟢 Surplus Stabil';
      elApbdBadge.style.background = 'rgba(34,197,94,0.2)';
      elApbdBadge.style.color = '#86efac';
    } else if (apbd >= 1.5) {
      elApbdBadge.textContent = isEn ? '🟡 Balanced' : '🟡 Anggaran Cukup';
      elApbdBadge.style.background = 'rgba(234,179,8,0.2)';
      elApbdBadge.style.color = '#fef08a';
    } else {
      elApbdBadge.textContent = isEn ? '🔴 Critical Deficit' : '🔴 Defisit Kritis';
      elApbdBadge.style.background = 'rgba(239,68,68,0.2)';
      elApbdBadge.style.color = '#fca5a5';
    }
  }

  // 3. Political & Legal Stability
  const risk = Math.round(state.risk != null ? state.risk : 15);
  const dprdRel = (state.actors && state.actors.DPRD && state.actors.DPRD.relation != null) ? state.actors.DPRD.relation : 50;
  const elStabVal = document.getElementById('vitalStabilityVal');
  const elStabBadge = document.getElementById('vitalStabilityBadge');
  if (elStabVal) {
    if (risk >= 35) {
      elStabVal.textContent = isEn ? 'High Risk' : 'Rawan Tipikor';
    } else if (dprdRel < 40) {
      elStabVal.textContent = isEn ? 'Deadlock' : 'Konflik Parlemen';
    } else {
      elStabVal.textContent = isEn ? 'Conducive' : 'Kondusif';
    }
  }
  if (elStabBadge) {
    if (risk >= 35) {
      elStabBadge.textContent = isEn ? '🚨 Law Enforcement Radar' : '🚨 Radar Tipikor/KPK';
      elStabBadge.style.background = 'rgba(239,68,68,0.2)';
      elStabBadge.style.color = '#fca5a5';
    } else if (dprdRel < 40) {
      elStabBadge.textContent = isEn ? '⚡ Legislative Friction' : '⚡ Tegang dengan DPRD';
      elStabBadge.style.background = 'rgba(245,158,11,0.2)';
      elStabBadge.style.color = '#fde68a';
    } else {
      elStabBadge.textContent = isEn ? '🛡️ Stable Coalition' : '🛡️ Koalisi Solid';
      elStabBadge.style.background = 'rgba(59,130,246,0.2)';
      elStabBadge.style.color = '#93c5fd';
    }
  }
}

function getQuarterIndex(year, eventIdx) {
  const y = Math.max(1, Math.min(5, year || 1));
  const qInYear = Math.min(3, Math.floor((eventIdx || 0) / 3));
  return ((y - 1) * 4) + qInYear;
}

function isDangerousDialogueBeat() {
  // In each quarter with 3 beats (Month 1, Month 2, Month 3),
  // Beat 3 (index % 3 === 2) is the climactic Closed-Door Audience / Dangerous Dialogue
  return (state.eventIdx % 3 === 2);
}

function getPersonalLifeGameForCurrentState() {
  if (typeof MAYOR_PERSONAL_GAMES === 'undefined') return null;
  const currentTerm = state.term || 1;
  const currentYear = state.year || 1;
  // Semester 1: eventIdx === 4 (Month 5 / before Closed Door Beat 2 in Q2)
  // Semester 2: eventIdx === 10 (Month 11 / before Closed Door Beat 4 in Q4)
  const sem = (state.eventIdx === 4) ? 1 : ((state.eventIdx === 10) ? 2 : 0);
  if (!sem) return null;

  return MAYOR_PERSONAL_GAMES.find(g => g.term === currentTerm && g.year === currentYear && g.semester === sem) || null;
}

function isPersonalLifeBeat() {
  // Inserted at Semester 1 (eventIdx 4) and Semester 2 (eventIdx 10)
  // between the public policy dilemma and the dangerous closed-door audience
  return (state.eventIdx === 4 || state.eventIdx === 10);
}

function renderPersonalLifeGame() {
  try {
    const card = document.getElementById('eventCard');
    if (!card) return;

    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
    const g = getPersonalLifeGameForCurrentState();
    if (!g) {
      // Fallback if game not found for this specific semester
      const prevEv = getCurrentEvent();
      if (prevEv) return;
    }

    if (typeof AudioManager !== 'undefined') {
      AudioManager.playVoiceGrunt('family');
    }

    const qInfo = getQuarterInfo(state.eventIdx);
    const labelEl = document.getElementById('progressLabel');
    if (labelEl) {
      const semNum = (state.eventIdx === 4) ? 1 : 2;
      labelEl.innerHTML = isEn
        ? `<span>Semester <b>${semNum}</b> • Mid-Year Reflection</span> <span style="opacity:0.4;margin:0 4px;">•</span> <span style="color:#d8b4fe;font-weight:800;">🏡 Mayor's Private Life (Year ${state.year})</span>`
        : `<span>Semester <b>${semNum}</b> • Refleksi Pribadi</span> <span style="opacity:0.4;margin:0 4px;">•</span> <span style="color:#d8b4fe;font-weight:800;">🏡 Kehidupan Privat Walikota (Tahun ke-${state.year})</span>`;
    }

    const badgeEl = document.getElementById('eventRarityBadge');
    if (badgeEl) {
      badgeEl.style.display = 'inline-block';
      badgeEl.textContent = isEn ? '🏡 PRIVATE RESIDENCE' : '🏡 RUMAH DINAS & KELUARGA';
      badgeEl.className = 'eventRarityBadge';
      badgeEl.style.background = 'linear-gradient(135deg, #a855f7, #7e22ce)';
      badgeEl.style.color = '#fff';
      badgeEl.style.borderColor = 'rgba(216,180,254,0.4)';
    }

    const panel = document.querySelector('.eventPanel');
    if (panel) {
      panel.classList.remove('secretMode');
      panel.style.borderTopColor = '#a855f7';
    }

    // Update Live City Ticker for Mayor's Private Life
    const tickerBadge = document.getElementById('cityTickerBadge');
    const tickerText = document.getElementById('cityTickerText');
    if (tickerBadge && tickerText) {
      tickerBadge.textContent = isEn ? 'PRIVATE LIFE' : 'RUMAH DINAS';
      tickerBadge.style.background = 'linear-gradient(135deg,#a855f7,#7e22ce)';
      tickerText.textContent = isEn
        ? `Mayor returns to residence for private affairs: ${formatDialogueText(g.title_en || g.title_id)}.`
        : `Walikota rehat sejenak di rumah dinas mengurus urusan personal: ${formatDialogueText(g.title_id)}.`;
    }

    const choicesHtml = (g.choices || []).map((c, idx) => `
      <button class="personalChoiceBtn" onclick="handlePersonalLifeChoice(${idx})">
        <div class="personalChoiceTone">
          <span>${formatDialogueText(isEn ? c.tone_en : c.tone_id)}</span>
        </div>
        <div class="personalChoiceText">
          ${formatDialogueText(isEn ? c.text_en : c.text_id)}
        </div>
      </button>
    `).join('');

    card.innerHTML = `
      <div class="personalLifeCard">
        <div class="personalHeaderBadge">
          <span>🏡</span>
          <span>${isEn ? 'OFFICIAL RESIDENCE & PERSONAL DILEMMA' : 'RUMAH DINAS & KEHIDUPAN PRIBADI'}</span>
        </div>

        <div class="personalLifeLocation">
          <span>📍</span>
          <span>${formatDialogueText(isEn ? g.location_en : g.location_id)}</span>
        </div>

        <div class="personalLifeCharacterRow">
          <div class="personalAvatarWrap">
            <span>${g.avatar || '🏡'}</span>
          </div>
          <div>
            <div class="personalCharacterName">${formatDialogueText(isEn ? g.character_en : g.character_id)}</div>
            <div class="personalCharacterRole">${isEn ? ('Year ' + g.year + ' • Semester ' + g.semester + ' Special Interlude') : ('Tahun ke-' + g.year + ' • Semester ke-' + g.semester + ' Refleksi Personal')}</div>
          </div>
        </div>

        <div style="font-size:15px;font-weight:900;color:#f8fafc;margin-bottom:8px;">
          ${formatDialogueText(isEn ? g.title_en : g.title_id)}
        </div>

        <div class="personalNarrativeBox">
          ${formatDialogueText(isEn ? g.story_en : g.story_id)}
        </div>

        <div class="personalDilemmaBox">
          <span>⚖️</span>
          <span><b>${isEn ? 'Personal Dilemma:' : 'Dilema Nurani Pribadi:'}</b> ${formatDialogueText(isEn ? g.dilemma_en : g.dilemma_id)}</span>
        </div>

        <div style="font-size:11px;font-weight:800;color:#d8b4fe;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">
          ${isEn ? 'Choose Mayoral Personal Action:' : 'Pilih Sikap Pribadi Walikota:'}
        </div>

        <div class="personalChoicesContainer">
          ${choicesHtml}
        </div>
      </div>
    `;
  } catch (err) {
    console.error("Critical error in renderPersonalLifeGame:", err);
  }
}

function handlePersonalLifeChoice(choiceIdx) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const g = getPersonalLifeGameForCurrentState();
  if (!g || !g.choices || !g.choices[choiceIdx]) return;

  const choice = g.choices[choiceIdx];
  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_stempel');
  }
  takeUndoSnapshot(isEn ? choice.tone_en : choice.tone_id);

  // Apply Life Stats
  if (!state.life) {
    state.life = typeof initLifeState === 'function' ? initLifeState(state.selectedMayor) : { age: 42, health: 85, stress: 20, wealth: 1.8, reputation: 75, familyRel: 85, salary: 0.35, investments: [], journal: [] };
  }
  if (choice.life) {
    if (choice.life.familyRel != null) state.life.familyRel = Math.max(0, Math.min(100, state.life.familyRel + choice.life.familyRel));
    if (choice.life.stress != null) state.life.stress = Math.max(0, Math.min(100, state.life.stress + choice.life.stress));
    if (choice.life.health != null) state.life.health = Math.max(0, Math.min(100, state.life.health + choice.life.health));
    if (choice.life.wealth != null) state.life.wealth = Math.max(0, Math.round((state.life.wealth + choice.life.wealth) * 100) / 100);
  }

  // Apply FX to City
  if (choice.fx) {
    if (choice.fx.sat != null) state.sat = Math.max(0, Math.min(100, (state.sat || 68) + choice.fx.sat));
    if (choice.fx.risk != null) state.risk = Math.max(0, Math.min(100, (state.risk || 15) + choice.fx.risk));
    if (choice.fx.apbd != null) state.apbd = Math.max(0.5, Math.round(((state.apbd || 3.8) + choice.fx.apbd) * 10) / 10);
  }

  if (choice.actors && typeof updateActorRelations === 'function') {
    updateActorRelations(choice.actors);
  }

  // Record into mayor personal journal
  if (!state.life.journal) state.life.journal = [];
  state.life.journal.unshift({
    year: state.year,
    term: state.term || 1,
    semester: g.semester,
    title: formatDialogueText(isEn ? g.title_en : g.title_id),
    outcome: formatDialogueText(isEn ? choice.outcome_en : choice.outcome_id)
  });

  // Show outcome modal
  const modal = document.getElementById('personalOutcomeModal');
  const txt = document.getElementById('personalOutcomeText');
  const semTag = document.getElementById('personalOutcomeSemTag');
  const sRel = document.getElementById('personalStatRel');
  const sHealth = document.getElementById('personalStatHealth');
  const sStress = document.getElementById('personalStatStress');
  const sWealth = document.getElementById('personalStatWealth');

  if (modal && txt) {
    txt.innerHTML = `
      <div style="font-weight:800;color:#f8fafc;margin-bottom:8px;font-size:14px;">
        ${formatDialogueText(isEn ? choice.tone_en : choice.tone_id)}
      </div>
      <p style="margin:0 0 10px 0;line-height:1.5;">${formatDialogueText(isEn ? choice.outcome_en : choice.outcome_id)}</p>
    `;
    if (semTag) semTag.textContent = isEn ? `Year ${state.year} • Semester ${g.semester}` : `Tahun ${state.year} • Semester ${g.semester}`;
    if (sRel) sRel.textContent = `${state.life.familyRel}%`;
    if (sHealth) sHealth.textContent = `${state.life.health}%`;
    if (sStress) sStress.textContent = `${state.life.stress}%`;
    if (sWealth) sWealth.textContent = `Rp ${state.life.wealth} M`;

    const pTitle = document.getElementById('personalOutcomeTitle');
    if (pTitle) pTitle.textContent = isEn ? '🏡 PERSONAL LIFE REFLECTION' : '🏡 REFLEKSI KEHIDUPAN PRIBADI';
    const btnProceed = document.getElementById('btnPersonalProceed');
    if (btnProceed) btnProceed.textContent = isEn ? 'Continue Mayoral Service →' : 'Lanjutkan Pengabdian Kota →';
    const lblRel = document.getElementById('lblPersonalRel');
    if (lblRel) lblRel.textContent = isEn ? 'Family Harmony' : 'Harmoni Keluarga';
    const lblHealth = document.getElementById('lblPersonalHealth');
    if (lblHealth) lblHealth.textContent = isEn ? 'Physical Health' : 'Kesehatan Fisik';
    const lblStress = document.getElementById('lblPersonalStress');
    if (lblStress) lblStress.textContent = isEn ? 'Stress Level' : 'Beban Stres';
    const lblWealth = document.getElementById('lblPersonalWealth');
    if (lblWealth) lblWealth.textContent = isEn ? 'Personal Wealth' : 'Kekayaan Pribadi';

    modal.style.display = 'flex';
    modal.classList.add('show');
  } else {
    advanceFromPersonalLifeChoice();
  }
}

function closePersonalOutcomeModal() {
  const modal = document.getElementById('personalOutcomeModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
  advanceFromPersonalLifeChoice();
}

function advanceFromPersonalLifeChoice() {
  state.currentActiveEvent = null;
  const prevIdx = state.eventIdx;
  state.eventIdx++;

  updateHUD();
  updateDashboard();
  updateGauges();
  updateCoreVitalSigns();
  renderNews();
  renderSocial();

  if (state.eventIdx >= EVENTS_PER_YEAR) {
    showYearSummaryModal();
  } else {
    if (state.eventIdx % 3 === 0) {
      const nextQ = getQuarterInfo(state.eventIdx);
      const prevQ = getQuarterInfo(prevIdx);
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en')
        ? `🗓️ ${prevQ.name_en || prevQ.name} Completed! Entering ${nextQ.name_en || nextQ.name} (${nextQ.theme_en || nextQ.theme}).`
        : `🗓️ ${prevQ.name} Selesai! Memasuki ${nextQ.name} (${nextQ.theme}).`);
      notifySecretaryBriefingReady();
    }
    renderCurrentEvent();
    saveGame();
  }
}

function formatDialogueText(text) {
  if (!text || typeof text !== 'string') return text || '';
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const vmName = (state.viceMayor && state.viceMayor.name) ? state.viceMayor.name : 'Drs. H. Syarifuddin, M.Si';
  const cleanVm = vmName.replace(/^((?:Drs\.|Ir\.|dr\.|H\.|Hj\.|Prof\.|K\.H\.)\s*)+/gi, '');
  const vmFirstName = cleanVm.split(' ')[0].replace(/,/g, '') || 'Syarifuddin';

  let spouseName = (state.life && ((isEn && state.life.spouse_en) ? state.life.spouse_en : state.life.spouse))
    ? ((isEn && state.life.spouse_en) ? state.life.spouse_en : state.life.spouse)
    : (state.spouseName || (state.gender === 'female' ? (isEn ? 'Budi Santoso' : 'Ir. H. Budi Santoso') : (isEn ? 'Dr. Sarah N.' : 'dr. Sarah N.')));
  const cleanSpouseFull = spouseName.replace(/\s*\(.*?\)/g, '');
  const cleanSpouse = cleanSpouseFull.replace(/^((?:Drs\.|Ir\.|dr\.|H\.|Hj\.|Prof\.|K\.H\.)\s*)+/gi, '');
  const spouseFirstName = cleanSpouse.split(' ')[0].replace(/,/g, '') || (state.gender === 'female' ? 'Budi' : 'Sarah');

  return text
    .replace(/Pasangan Hidup \(dr\. Sarah \/ Bambang\)/g, isEn ? `Life Partner (${cleanSpouseFull})` : `Pasangan Hidup (${cleanSpouseFull})`)
    .replace(/Life Partner \(dr\. Sarah \/ Bambang\)/g, isEn ? `Life Partner (${cleanSpouseFull})` : `Pasangan Hidup (${cleanSpouseFull})`)
    .replace(/\{\{VICE_MAYOR_NAME\}\}/g, vmName)
    .replace(/\{\{VICE_MAYOR_FIRSTNAME\}\}/g, vmFirstName)
    .replace(/\{\{SPOUSE_NAME\}\}/g, cleanSpouseFull)
    .replace(/\{\{SPOUSE_FIRSTNAME\}\}/g, spouseFirstName);
}

function renderDangerousDialogue() {
  try {
    const card = document.getElementById('eventCard');
    if (!card) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const qIdx = getQuarterIndex(state.year, state.eventIdx);
  const dialoguePool = (state.term === 2 && typeof DANGEROUS_DIALOGUES_TERM2 !== 'undefined')
    ? DANGEROUS_DIALOGUES_TERM2
    : DANGEROUS_DIALOGUES;
  const d = dialoguePool[qIdx] || dialoguePool[0] || DANGEROUS_DIALOGUES[0];

  if (typeof AudioManager !== 'undefined') {
    const speaker = (d && (d.speaker || d.character || d.speaker_en)) || 'dprd';
    AudioManager.playVoiceGrunt(speaker);
  }

  const qInfo = getQuarterInfo(state.eventIdx);
  const labelEl = document.getElementById('progressLabel');
  if (labelEl) {
    const monthText = qInfo.monthName ? ` (${qInfo.monthName})` : '';
    labelEl.innerHTML = isEn
      ? `<span>Quarter <b>${qInfo.quarterNum}</b> of <b>4</b> • Beat ${qInfo.eventInQuarter}/3${monthText}</span> <span style="opacity:0.4;margin:0 4px;">•</span> <span style="color:#ef4444;font-weight:800;">⚡ Closed-Door Audience (Year ${state.year})</span>`
      : `<span>Triwulan <b>${qInfo.quarterNum}</b> dari <b>4</b> • Agenda ${qInfo.eventInQuarter}/3${monthText}</span> <span style="opacity:0.4;margin:0 4px;">•</span> <span style="color:#ef4444;font-weight:800;">⚡ Pertemuan Ruang Tertutup (Tahun ke-${state.year})</span>`;
  }

  const badgeEl = document.getElementById('eventRarityBadge');
  if (badgeEl) {
    badgeEl.textContent = isEn ? '🚨 HIGH TENSION' : '🚨 BERISIKO TINGGI';
    badgeEl.className = 'eventBadge critical';
    badgeEl.style.background = 'rgba(239,68,68,0.25)';
    badgeEl.style.borderColor = '#ef4444';
    badgeEl.style.color = '#fca5a5';
  }


  // Comprehensive 20-Quarter Repercussion Engine (Mendeteksi Pilihan Masa Lalu & Menghidupkan Reaksi Balasan)
  let pastRepercussionHtml = '';
  let reactionNote = '';
  if (state.flags) {
    if (state.term === 2) {
      if (qIdx === 1 && state.flags.y1q1_t2_compromised_with_smugglers) {
        reactionNote = isEn
          ? 'Tycoon Dharmawan smirks that you compromised with port smugglers, expecting similar exemptions for his reclamation mall!'
          : 'Konglomerat Dharmawan tersenyum sinis mengetahui Anda berkompromi dengan penyelundup pelabuhan, menuntut dispensasi serupa!';
      } else if (qIdx === 2 && state.flags.y1q2_t2_seized_tycoon_concession) {
        reactionNote = isEn
          ? 'Corporate lobby groups warn your family of severe commercial boycotts following your seizure of reclamation concessions!'
          : 'Konsorsium bisnis menekan lingkaran keluarga Anda menyusul pencabutan sepihak izin konsesi lahan reklamasi mereka!';
      } else if (qIdx === 3 && state.flags.y1q3_t2_rejected_syndicate_extortion) {
        reactionNote = isEn
          ? 'Underworld bosses retaliated against your defiance by bribing street gangs to stage riots in traditional markets!'
          : 'Gembong sindikat membalas penolakan Anda dengan membiayai kerusuhan preman bayaran di pasar-pasar induk kota!';
      } else if (qIdx === 4 && state.flags.y1q4_t2_shut_down_mafia_rackets) {
        reactionNote = isEn
          ? 'Legislative factions affiliated with the dismantled parking syndicates are preparing a retaliatory budget blockade!'
          : 'Fraksi DPRD terafiliasi bisnis parkir liar yang Anda berantas bersiap membalas dendam dengan memboikot APBD!';
      } else if (qIdx === 5 && state.flags.y2q1_t2_vetoed_legislative_extortion) {
        reactionNote = isEn
          ? 'Your spouse is distressed because vengeful councilors are threatening to audit your family foundation!'
          : 'Pasangan Anda cemas karena anggota dewan yang sakit hati mengancam akan mempolitisasi audit yayasan sosial keluarga!';
      } else if (qIdx === 6 && state.flags.y2q2_t2_held_press_conference) {
        reactionNote = isEn
          ? 'Your Vice Mayor is taking advantage of your foundation controversy to demand autonomous executive authority!'
          : 'Wakil Walikota memanfaatkan polemik yayasan keluarga untuk menuntut pembagian wewenang eksekutif secara penuh!';
      } else if (qIdx === 7 && state.flags.y2q3_t2_fired_corrupt_vice_mayor) {
        reactionNote = isEn
          ? 'Investigative journalist Rian holds confidential whistleblowing memos leaked by your dismissed former deputy!'
          : 'Jurnalis Rian memegang memo rahasia yang dibocorkan oleh mantan Wakil Walikota Anda yang tersingkir!';
      } else if (qIdx === 8 && state.flags.y2q4_t2_exposed_blackmail_editor) {
        reactionNote = isEn
          ? 'Paramilitary commander Bang Jampang deployed hundreds of intimidation squads after you jailed the extortionist editor!'
          : 'Panglima Ormas Bang Jampang mengerahkan ratusan laskar setelah Anda memenjarakan antek medianya!';
      } else if (qIdx === 11 && state.flags.y2q1_t2_transparent_epokir) {
        reactionNote = isEn
          ? 'Greedy contractors attempt to subvert your transparent e-pokir platform through fake consortium proxies!'
          : 'Kontraktor Sanjaya mencoba membobol transparansi sistem e-pokir dengan skema konsorsium boneka!';
      } else if (qIdx === 12 && state.flags.y3q1_t2_dissolved_paramilitary_militias) {
        reactionNote = isEn
          ? 'Military intelligence warns that disbanded militia cells are regrouping under radical underground factions.'
          : 'Intelijen militer melaporkan eks-laskar ormas yang Anda bubarkan mulai menyusup ke sel-sel bawah tanah.';
      } else if (qIdx === 15 && state.flags.y3q4_t2_took_ringroad_kickback) {
        reactionNote = isEn
          ? 'State Auditor Fajar uncovered offshore deposits linked to the ring road penalty waiver addendum!'
          : 'Auditor BPK Fajar menemukan jejak aliran rekening luar negeri addendum pembebasan denda jalan lingkar!';
      } else if (qIdx === 17 && (state.flags.y3q4_t2_took_ringroad_kickback || state.flags.y4q2_t2_took_industrial_bribe)) {
        reactionNote = isEn
          ? 'Live debate moderator Prof. Salomo is holding unredacted files detailing your secret corporate deals!'
          : 'Panelis debat publik Prof. Salomo memegang bukti otentik gratifikasi korporasi pada masa jabatan kedua Anda!';
      } else if (qIdx === 19) {
        reactionNote = isEn
          ? 'Prof. Soemitro Hadi has gathered your complete decade of executive decisions to deliver history\'s indelible verdict.'
          : 'Prof. Soemitro Hadi telah mencatat seluruh neraca kepemimpinan dua dekade Anda untuk diadili oleh mahkamah sejarah nusantara.';
      }
    } else {
      if (qIdx === 1 && state.flags.y1q1_refused_party_patronage) {
        reactionNote = isEn 
          ? 'DPC Chairman Suryo warned corporate tycoons that you are an uncooperative hardliner who refuses backroom patronage.' 
          : 'Ketua DPC Suryo memperingatkan konglomerat bahwa Anda adalah walikota keras kepala yang menolak kompromi kekuasaan.';
      } else if (qIdx === 2 && state.flags.y1q2_endorsed_reclamation_tycoon) {
        reactionNote = isEn
          ? 'Labor federation leaders are infuriated that you granted trillions in reclamation permits while ignoring worker livelihoods!'
          : 'Aliansi buruh mengecam keras karpet merah reklamasi triliunan rupiah yang Anda berikan kepada konglomerat Dharmawan!';
      } else if (qIdx === 3 && state.flags.y1q3_suppressed_labor_protest) {
        reactionNote = isEn
          ? 'Police intelligence noted your harsh crackdown on laborers last quarter, alerting anti-graft units to inspect City Hall documents.'
          : 'Aparat mencatat penindakan represif Anda terhadap aksi buruh lalu, memicu penyelidik Tipikor menelusuri berkas rumah sakit.';
      } else if (qIdx === 4 && state.flags.y1q1_refused_party_patronage) {
        reactionNote = isEn
          ? 'DPRD Budget Chairman Hendra is retaliating for the utility board seats you refused to give his party factions in Year 1!'
          : 'Ketua Banggar Hendra melancarkan aksi balas dendam atas penolakan Anda membagikan kursi BUMD kepada kader partai di Tahun ke-1!';
      } else if (qIdx === 5 && state.flags.y2q1_vetoed_dprd_pork_barrel) {
        reactionNote = isEn
          ? 'Your spouse weeps that your uncompromising crusade against legislative pork barrel has left your family isolated without political allies.'
          : 'Istri Anda menangis karena sikap tanpa kompromi Anda terhadap dewan membuat keluarga terkucil tanpa perlindungan politik.';
      } else if (qIdx === 6 && state.flags.y2q2_shielded_corrupt_family) {
        reactionNote = isEn
          ? 'The Vice Mayor knows you shielded your corrupt relative in the market scandal and now exploits your moral weakness to seize power!'
          : 'Wakil Walikota mengetahui Anda menyelamatkan adik ipar di kasus pasar dan kini memanfaatkan kelemahan moral Anda untuk merebut kendali!';
      } else if (qIdx === 7 && state.flags.y2q2_shielded_corrupt_family) {
        reactionNote = isEn
          ? 'Investigative reporter Rian holds leaked bank receipts and wiretaps detailing your cover-up of your corrupt family members!'
          : 'Jurnalis Rian memegang rekaman sadapan dan bukti transfer pelindung keluarga Anda dalam skandal gratifikasi pasar!';
      } else if (qIdx === 8 && state.flags.y2q4_bought_media_silence) {
        reactionNote = isEn
          ? 'Paramilitary thugs learned you paid millions in hush money to journalists, emboldening them to demand massive city extortion!'
          : 'Panglima Ormas mengetahui Anda menggelontorkan dana siluman membungkam pers, membuat mereka semakin berani memeras Balaikota!';
      } else if (qIdx === 9 && state.flags.y1q2_endorsed_reclamation_tycoon) {
        reactionNote = isEn
          ? 'Home Ministry inspectors are investigating irregular commercial zoning permits granted to coastal property consortiums.'
          : 'Kemendagri mencium kejanggalan perizinan reklamasi pantai tergesa-gesa yang Anda teken pada tahun-tahun awal jabatan.';
      } else if (qIdx === 10 && state.flags.y1q4_cleansed_hospital_corruption) {
        reactionNote = isEn
          ? 'Private hospital consortiums cite your previous hospital corruption clean-up to justify their aggressive tariff pushback.'
          : 'Konsorsium RS swasta memanfaatkan trauma pembersihan alkes masa lalu untuk menekan tarif subsidi BPJS daerah.';
      } else if (qIdx === 11 && state.flags.y2q1_e_pokir_transparency) {
        reactionNote = isEn
          ? 'Contractor Sanjaya attempts to bypass your transparent e-procurement rules by bringing a cold cash suitcase to your residence.'
          : 'Kontraktor Sanjaya mencoba menembus sistem transparansi e-pokir Anda dengan membawa koper tunai langsung ke pendopo.';
      } else if (qIdx === 12 && state.flags.y3q1_bribed_paramilitary_guild) {
        reactionNote = isEn
          ? 'Military intelligence warns that the paramilitary groups you subsidized with market extortion are now stockpiling weapons.'
          : 'Intelijen militer memperingatkan bahwa ormas yang Anda beri jatah parkir kini telah membentuk milisi bersenjata di terminal!';
      } else if (qIdx === 13 && state.flags.y3q4_took_contractor_kickback) {
        reactionNote = isEn
          ? 'Ancestral elders discovered that the bypass flyover you exempted from penalties is encroaching onto sacred ancestral graves.'
          : 'Tetua adat mencium bahwa jalan layang rekanan Anda yang dibebaskan denda mulai meratakan makam keramat pendiri kota.';
      } else if (qIdx === 14 && state.flags.y1q1_refused_party_patronage) {
        reactionNote = isEn
          ? 'Party coalition boss Mega demands you repay your five-year defiance before granting the official party re-election ticket!'
          : 'Ketua Koalisi Mega menuntut Anda membayar lunas pembangkangan lima tahun lalu sebelum menerbitkan tiket Pilkada periode kedua!';
      } else if (qIdx === 15 && state.flags.y3q4_took_contractor_kickback) {
        reactionNote = isEn
          ? 'State Auditor Fajar has reconstructed the flyover penalty-waiver addendum and points directly at the 10-billion kickback!'
          : 'Auditor BPK Fajar merekonstruksi addendum bebas denda flyover dan mengantongi bukti aliran suap koper Rp 10 Miliar!';
      } else if (qIdx === 15 && state.flags.y1q4_covered_up_procurement_graft) {
        reactionNote = isEn
          ? 'BPK audit teams unearthed your Year 1 hospital procurement cover-up and are preparing a formal referral to anti-graft courts!'
          : 'Tim audit BPK membongkar berkas pengadaan alkes RSUD Tahun ke-1 yang Anda petieskan dan siap menyerahkannya ke jaksa tipikor!';
      } else if (qIdx === 16 && state.flags.y4q4_bribed_bpk_auditors) {
        reactionNote = isEn
          ? 'Campaign Chairman Doni panics because anti-graft wiretaps on the bribed BPK auditors threaten to implode your re-election!'
          : 'Ketua Timses Doni panik karena sadapan KPK atas suap auditor BPK tahun lalu terancam meledak menjelang hari pemungutan suara!';
      } else if (qIdx === 17 && (state.flags.y3q4_took_contractor_kickback || state.flags.y2q2_shielded_corrupt_family || state.flags.y4q4_bribed_bpk_auditors)) {
        reactionNote = isEn
          ? 'Live TV debate moderator Prof. Salomo is holding unredacted dossier files regarding your secret deals and family scandals!'
          : 'Panelis debat Prof. Salomo memegang berkas investigasi skandal keluarga dan kompromi ruang tertutup Anda untuk disiarkan nasional!';
      } else if (qIdx === 18 && state.flags.y4q1_militarized_lockdown) {
        reactionNote = isEn
          ? 'Police Chief Tejo warns that public outrage from your previous military-style curfew has radicalized opposition demonstrators!'
          : 'Kapolresta Tejo memperingatkan bahwa trauma jam malam militer tahun lalu membuat massa pendukung kini membawa bom molotov!';
      } else if (qIdx === 19) {
        reactionNote = isEn
          ? 'Senior Statesman Soemitro Hadi has gathered your complete five-year closed-door ledger to deliver history\'s final judgment on your soul.'
          : 'Pamong Senior Soemitro Hadi telah mengumpulkan 20 berkas keputusan ruang tertutup Anda untuk menimbang vonis nurani dan warisan sejarah.';
      }
    }
  }

  if (reactionNote) {
    pastRepercussionHtml = `
      <div style="background:linear-gradient(135deg,rgba(239,68,68,0.22),rgba(185,28,28,0.32));border:1px solid #ef4444;border-radius:10px;padding:10px 14px;margin-bottom:12px;animation:pulseTension 2.2s infinite;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="font-size:16px;">⚡</span>
          <span style="font-size:11px;font-weight:900;color:#fca5a5;letter-spacing:0.5px;text-transform:uppercase;">
            ${isEn ? 'REPERCUSSION OF YOUR PAST ACTION' : 'REAKSI BALASAN ATAS PILIHAN MASA LALU ANDA'}
          </span>
        </div>
        <div style="font-size:12px;font-weight:700;color:#f8fafc;line-height:1.45;">
          ${reactionNote}
        </div>
      </div>
    `;
  }

  let charAvatar = d.avatar || '👤';
  if ((d.character_id && d.character_id.includes('VICE_MAYOR')) || (d.role_id && d.role_id.includes('Wakil Walikota'))) {
    if (state.viceMayor && state.viceMayor.avatar) charAvatar = state.viceMayor.avatar;
  } else if ((d.character_id && d.character_id.includes('SPOUSE')) || (d.role_id && d.role_id.includes('Pasangan'))) {
    charAvatar = (state.gender === 'female') ? '👨' : '👩';
  }

  const choicesHtml = (d.choices || []).map((c, cIdx) => `
    <button class="dangerousChoiceCard" onclick="handleDangerousChoice(${cIdx})">
      <div class="dangerousChoiceTone">${formatDialogueText(isEn ? c.tone_en : c.tone_id)}</div>
      <div class="dangerousChoiceText">${formatDialogueText(isEn ? c.text_en : c.text_id)}</div>
      <div class="dangerousChoiceConsequence">
        <span>⏳ ${isEn ? 'Long-Term Consequence:' : 'Konsekuensi Jangka Panjang:'} ${formatDialogueText(isEn ? c.consequence_en : c.consequence_id)}</span>
      </div>
    </button>
  `).join('');

  const panel = document.querySelector('.eventPanel');
  if (panel) {
    panel.classList.add('secretMode');
    panel.setAttribute('data-secret-label', isEn ? 'CONFIDENTIAL AUDIENCE' : 'RUANG TERTUTUP');
  }

  // Update Live City Ticker for Secret Audience
  const tickerBadge = document.getElementById('cityTickerBadge');
  const tickerText = document.getElementById('cityTickerText');
  if (tickerBadge && tickerText) {
    tickerBadge.textContent = isEn ? 'CONFIDENTIAL' : 'RUANG TERTUTUP';
    tickerBadge.style.background = 'linear-gradient(135deg,#dc2626,#991b1b)';
    tickerText.textContent = isEn
      ? `Audiences at City Hall behind closed doors. High political tension regarding ${formatDialogueText(d.role_en || d.role_id)}.`
      : `Pintu ruang kerja Walikota tertutup rapat. Pembicaraan sensitif berlangsung bersama ${formatDialogueText(d.role_id || d.character_id)}.`;
  }

  card.innerHTML = `
    <div class="dangerousMeetingCard">
      <div class="dangerousHeaderBadge">
        <div class="dangerousBadgeLeft">
          <span>🚨</span>
          <span>${isEn ? 'CLOSED-DOOR AUDIENCE' : 'PERTEMUAN RUANG TERTUTUP'}</span>
        </div>
        <div class="dangerousBadgeRight">
          <span>${isEn ? 'Year ' + d.year + ' • Quarter ' + d.quarterNum : 'Tahun ' + d.year + ' • Triwulan ' + d.quarterNum}</span>
        </div>
      </div>

      <div class="dangerousCharacterStage">
        <div class="dangerousAvatarWrapper">
          <span>${charAvatar}</span>
        </div>
        <div class="dangerousCharDetails">
          <div class="dangerousCharName">${formatDialogueText(isEn ? d.character_en : d.character_id)}</div>
          <div class="dangerousCharRole">${formatDialogueText(isEn ? d.role_en : d.role_id)}</div>
          <div class="dangerousCharMood">${formatDialogueText(isEn ? d.mood_en : d.mood_id)}</div>
        </div>
      </div>

      <div class="dangerousDialogueSpeech" onclick="showClosedDoorPreviewModal()" role="button" tabindex="0" title="${isEn ? 'Click to view full transcript preview' : 'Klik untuk melihat pratinjau teks lengkap'}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <div style="flex:1;">${formatDialogueText(isEn ? d.dialogue_en : d.dialogue_id)}</div>
          <span style="font-size:11px;opacity:0.75;color:#93c5fd;flex-shrink:0;cursor:pointer;padding-left:4px;" title="${isEn ? 'Preview' : 'Pratinjau'}">🔍</span>
        </div>
      </div>

      ${pastRepercussionHtml}

      <div class="dangerousDilemmaBox" onclick="showClosedDoorPreviewModal()" role="button" tabindex="0" title="${isEn ? 'Click to view full details preview' : 'Klik untuk melihat detail lengkap'}">
        <span>⚖️</span>
        <span style="flex:1;"><b>${isEn ? 'Dilemma & Stakes:' : 'Taruhan & Dilema Politik:'}</b> ${formatDialogueText(isEn ? d.dilemma_en : d.dilemma_id)}</span>
        <span style="font-size:10px;opacity:0.7;color:#fcd34d;flex-shrink:0;">🔍</span>
      </div>

      <div style="font-size:11px;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;margin-top:2px;">
        ${isEn ? 'Select Mayoral Response:' : 'Pilih Sikap & Respons Walikota:'}
      </div>

      <div class="dangerousChoicesContainer">
        ${choicesHtml}
      </div>
    </div>
  `;
  } catch (err) {
    console.error("Critical error in renderDangerousDialogue:", err);
  }
}

function showCityTickerPreview() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const tickerBadge = document.getElementById('cityTickerBadge');
  const tickerText = document.getElementById('cityTickerText');
  const badge = tickerBadge ? tickerBadge.textContent.trim() : (isEn ? 'CITY BRIEFING' : 'KILAS KOTA');
  const text = tickerText ? tickerText.textContent.trim() : '';

  const modal = document.getElementById('textPreviewModal');
  const titleEl = document.getElementById('textPreviewModalTitle');
  const subtitleEl = document.getElementById('textPreviewModalSubtitle');
  const bodyEl = document.getElementById('textPreviewModalBody');

  if (titleEl) titleEl.innerHTML = `📢 ${badge}`;
  if (subtitleEl) subtitleEl.textContent = isEn ? 'Real-time city briefing and situational pulse' : 'Pratinjau lengkap situasi dan dinamika kota terkini';
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="font-size:15px;line-height:1.7;color:#f8fafc;padding:4px 0;">
        ${text || (isEn ? 'No immediate breaking developments.' : 'Tidak ada catatan perkembangan mendesak.')}
      </div>
      <div style="margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:var(--gray-400);">
        💡 ${isEn ? 'Information is synchronized live with citizen sentiment, city events, and policy developments.' : 'Informasi ini disinkronkan secara langsung dengan sentimen warga, agenda kota, dan dampak kebijakan Walikota.'}
      </div>
    `;
  }

  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
  }
}

function showClosedDoorPreviewModal() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const qIdx = getQuarterIndex(state.year, state.eventIdx);
  const dialoguePool = (state.term === 2 && typeof DANGEROUS_DIALOGUES_TERM2 !== 'undefined')
    ? DANGEROUS_DIALOGUES_TERM2
    : DANGEROUS_DIALOGUES;
  const d = (dialoguePool && dialoguePool[qIdx]) ? dialoguePool[qIdx] : (dialoguePool ? dialoguePool[0] : null);

  const modal = document.getElementById('textPreviewModal');
  const titleEl = document.getElementById('textPreviewModalTitle');
  const subtitleEl = document.getElementById('textPreviewModalSubtitle');
  const bodyEl = document.getElementById('textPreviewModalBody');

  if (!d) {
    showCityTickerPreview();
    return;
  }

  const charName = formatDialogueText(isEn ? d.character_en : d.character_id);
  const charRole = formatDialogueText(isEn ? d.role_en : d.role_id);
  const charMood = formatDialogueText(isEn ? d.mood_en : d.mood_id);
  const speech = formatDialogueText(isEn ? d.dialogue_en : d.dialogue_id);
  const dilemma = formatDialogueText(isEn ? d.dilemma_en : d.dilemma_id);

  if (titleEl) titleEl.innerHTML = `🚨 ${isEn ? 'Closed-Door Transcript' : 'Transkrip Ruang Tertutup'}`;
  if (subtitleEl) subtitleEl.textContent = `${charName} (${charRole}) • ${isEn ? 'Year ' + d.year + ' Quarter ' + d.quarterNum : 'Tahun ' + d.year + ' Triwulan ' + d.quarterNum}`;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.3);border-radius:10px;padding:10px 14px;margin-bottom:12px;">
        <div style="font-size:11px;color:#fca5a5;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;">${isEn ? 'INTERLOCUTOR' : 'PIHAK AUDIENSI'}</div>
        <div style="font-size:15px;font-weight:800;color:#fff;">${charName}</div>
        <div style="font-size:12px;color:#cbd5e1;">${charRole} • <span style="color:#f87171;">${charMood}</span></div>
      </div>
      <div style="font-size:12px;font-weight:800;color:var(--gray-400);text-transform:uppercase;margin-bottom:6px;">${isEn ? 'COMPLETE TRANSCRIPT / SPEECH:' : 'TRANSKRIP PERKATAAN LENGKAP:'}</div>
      <div style="font-size:14.5px;line-height:1.65;color:#f1f5f9;font-style:italic;background:rgba(30,41,59,0.7);padding:14px;border-radius:10px;border-left:4px solid #ef4444;margin-bottom:14px;">
        "${speech}"
      </div>
      <div style="font-size:12px;font-weight:800;color:#fbbf24;text-transform:uppercase;margin-bottom:6px;">⚖️ ${isEn ? 'POLITICAL DILEMMA & STAKES:' : 'TARUHAN & DILEMA POLITIK:'}</div>
      <div style="font-size:13px;line-height:1.55;color:#fef3c7;background:rgba(245,158,11,0.1);border:1px dashed rgba(245,158,11,0.35);padding:12px;border-radius:10px;">
        ${dilemma}
      </div>
    `;
  }

  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
  }
}

function closeTextPreviewModal() {
  const modal = document.getElementById('textPreviewModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
}

function handleDangerousChoice(choiceIdx) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const qIdx = getQuarterIndex(state.year, state.eventIdx);
  const dialoguePool = (state.term === 2 && typeof DANGEROUS_DIALOGUES_TERM2 !== 'undefined')
    ? DANGEROUS_DIALOGUES_TERM2
    : DANGEROUS_DIALOGUES;
  const d = dialoguePool[qIdx];
  if (!d || !d.choices || !d.choices[choiceIdx]) return;

  const choice = d.choices[choiceIdx];

  // Apply FX
  if (choice.fx) {
    if (choice.fx.sat != null) state.sat = Math.max(0, Math.min(100, (state.sat || 68) + choice.fx.sat));
    if (choice.fx.apbd != null) state.apbd = Math.max(0.5, Math.round(((state.apbd || 3.8) + choice.fx.apbd) * 10) / 10);
    if (choice.fx.pad != null) state.pad = Math.max(0.5, Math.round(((state.pad || 1.2) + choice.fx.pad) * 10) / 10);
    if (choice.fx.risk != null) state.risk = Math.max(0, Math.min(100, (state.risk || 15) + choice.fx.risk));
    if (choice.fx.crime != null && state.stats) state.stats.crime = Math.max(0, Math.min(100, (state.stats.crime || 50) + choice.fx.crime));
    if (choice.fx.env != null && state.stats) state.stats.env = Math.max(0, Math.min(100, (state.stats.env || 45) + choice.fx.env));
    if (choice.fx.infra != null && state.stats) state.stats.infra = Math.max(0, Math.min(100, (state.stats.infra || 50) + choice.fx.infra));
  }

  if (choice.actors && typeof updateActorRelations === 'function') {
    updateActorRelations(choice.actors);
  }

  // Save Long-term flags & memories
  if (!state.flags) state.flags = {};
  if (choice.flag) state.flags[choice.flag] = true;

  const charNameFormatted = formatDialogueText(isEn ? d.character_en : d.character_id);
  const choiceToneFormatted = formatDialogueText(isEn ? choice.tone_en : choice.tone_id);
  const consequenceFormatted = formatDialogueText(isEn ? choice.consequence_en : choice.consequence_id);
  const choiceTextFormatted = formatDialogueText(isEn ? choice.text_en : choice.text_id);

  if (!state.longTermMemories) state.longTermMemories = [];
  state.longTermMemories.push({
    quarterIndex: qIdx + 1,
    year: state.year,
    quarterNum: d.quarterNum,
    character: charNameFormatted,
    choiceTone: choiceToneFormatted,
    consequence: consequenceFormatted,
    flag: choice.flag
  });

  // History & Social Feed
  state.history.push({
    year: state.year,
    title: (isEn ? '⚡ Closed-Door: ' : '⚡ Pertemuan: ') + formatDialogueText(isEn ? d.title_en : d.title_id),
    choice: choiceToneFormatted
  });

  if (!state.news) state.news = [];
  state.news.unshift({
    year: isEn ? `Yr ${state.year} Q${d.quarterNum}` : `Thn ${state.year} Q${d.quarterNum}`,
    text: `[Dinamika Politik] ${formatDialogueText(d.character_id)}: ${formatDialogueText(choice.consequence_id)}`,
    text_en: `[Political Dynamic] ${formatDialogueText(d.character_en)}: ${formatDialogueText(choice.consequence_en)}`,
    mood: (choice.fx && choice.fx.sat >= 0) ? 1 : -1
  });

  // Show Outcome Modal
  const modal = document.getElementById('dangerousOutcomeModal');
  const title = document.getElementById('dangerousOutcomeTitle');
  const qTag = document.getElementById('dangerousOutcomeQuarterTag');
  const textEl = document.getElementById('dangerousOutcomeText');
  const memEl = document.getElementById('dangerousMemoryText');
  const btn = document.getElementById('btnDangerousProceed');

  if (modal) {
    if (title) title.textContent = isEn ? '🎭 CLOSED-DOOR OUTCOME' : '🎭 HASIL PERTEMUAN RUANG TERTUTUP';
    if (qTag) qTag.textContent = isEn ? `Year ${state.year} • Quarter ${d.quarterNum}` : `Tahun ${state.year} • Triwulan ${d.quarterNum}`;
    if (textEl) {
      textEl.innerHTML = `
        <div style="margin-bottom:8px;">
          <b>${isEn ? 'Your Stance:' : 'Sikap Anda:'}</b> <span style="color:#60a5fa;font-weight:700;">${choiceToneFormatted}</span>
        </div>
        <div style="background:rgba(30,41,59,0.5);border-radius:8px;padding:8px 10px;font-style:italic;color:#e2e8f0;margin-bottom:8px;">
          “${choiceTextFormatted}”
        </div>
      `;
    }
    if (memEl) memEl.textContent = consequenceFormatted;
    if (btn) {
      if (state.eventIdx + 1 >= EVENTS_PER_YEAR) {
        btn.textContent = isEn ? 'Proceed to Annual Review →' : 'Lanjut ke Evaluasi Akhir Tahun →';
      } else if ((state.eventIdx + 1) % 3 === 0) {
        btn.textContent = isEn ? 'Proceed to Next Quarter →' : 'Lanjutkan ke Triwulan Berikutnya →';
      } else {
        btn.textContent = isEn ? 'Proceed to Next Agenda →' : 'Lanjutkan ke Agenda Berikutnya →';
      }
    }
    modal.style.display = 'flex';
    modal.classList.add('show');
  } else {
    advanceFromDangerousChoice();
  }
}

function closeDangerousOutcomeModal() {
  const modal = document.getElementById('dangerousOutcomeModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
  advanceFromDangerousChoice();
}

function advanceFromDangerousChoice() {
  state.currentActiveEvent = null;
  const prevIdx = state.eventIdx;
  state.eventIdx++;

  const panel = document.querySelector('.eventPanel');
  if (panel) {
    panel.classList.remove('secretMode');
    panel.removeAttribute('data-secret-label');
  }

  updateHUD();
  updateDashboard();
  updateGauges();
  updateCoreVitalSigns();
  renderNews();
  renderSocial();

  if (state.eventIdx >= EVENTS_PER_YEAR) {
    showYearSummaryModal();
  } else {
    // Announce next quarter if quarter just finished
    if (state.eventIdx % 3 === 0) {
      const nextQ = getQuarterInfo(state.eventIdx);
      const prevQ = getQuarterInfo(prevIdx);
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en')
        ? `🗓️ ${prevQ.name_en || prevQ.name} Completed! Entering ${nextQ.name_en || nextQ.name} (${nextQ.theme_en || nextQ.theme}).`
        : `🗓️ ${prevQ.name} Selesai! Memasuki ${nextQ.name} (${nextQ.theme}).`);
      notifySecretaryBriefingReady();
    }
    renderCurrentEvent();
    saveGame();
  }
}

function renderCurrentEvent() {
  updateCoreVitalSigns();
  if (isPersonalLifeBeat()) {
    renderPersonalLifeGame();
    return;
  }
  if (isDangerousDialogueBeat()) {
    renderDangerousDialogue();
    return;
  }
  // Update Accidental Tap Undo alert bar
  const undoBar = document.getElementById('undoAlertBar');
  const btnUndoHud = document.getElementById('btnUndoHud');
  if (state._lastUndoSnapshot && state._lastUndoSnapshot.choiceTitle) {
    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
    if (undoBar) {
      undoBar.style.display = 'flex';
      undoBar.className = 'undoAlertBar';
      undoBar.innerHTML = `
        <div class="undoAlertText">
          <span>⚠️ ${isEn ? 'Just selected:' : 'Baru saja memilih:'} <b>${state._lastUndoSnapshot.choiceTitle}</b></span>
        </div>
        <button class="undoActionBtn" onclick="undoLastChoice()">${isEn ? '↺ Undo Choice' : '↺ Batalkan Pilihan'}</button>
      `;
    }
    if (btnUndoHud) btnUndoHud.style.display = 'inline-flex';
  } else {
    if (undoBar) undoBar.style.display = 'none';
    if (btnUndoHud) btnUndoHud.style.display = 'none';
  }

  const currentEv = getCurrentEvent();
  if (!currentEv) return;

  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  const qInfo = getQuarterInfo(state.eventIdx);
  const locEv = typeof getLocalizedEvent === 'function' ? getLocalizedEvent(currentEv, lang) : currentEv;

  const labelEl = document.getElementById('progressLabel');
  if (labelEl) {
    const monthText = qInfo.monthName ? ` • ${qInfo.monthName}` : '';
    if (isEn) {
      labelEl.innerHTML = `<span>Quarter <b>${qInfo.quarterNum}</b> of <b>4</b> • Beat ${qInfo.eventInQuarter}/3${monthText}</span> <span style="opacity:0.4;margin:0 4px;">•</span> <span style="color:var(--blue-soft);font-weight:700;">${qInfo.short} (Year ${state.year})</span>`;
    } else {
      labelEl.innerHTML = `<span>Triwulan <b>${qInfo.quarterNum}</b> dari <b>4</b> • Agenda ${qInfo.eventInQuarter}/3${monthText}</span> <span style="opacity:0.4;margin:0 4px;">•</span> <span style="color:var(--blue-soft);font-weight:700;">${qInfo.short} (Tahun ke-${state.year})</span>`;
    }
  }

  const badgeEl = document.getElementById('eventRarityBadge');
  if (badgeEl) {
    if (currentEv.rarity && currentEv.rarity !== 'common') {
      badgeEl.className = 'eventBadge ' + currentEv.rarity;
      badgeEl.textContent = currentEv.rarity.toUpperCase();
    } else {
      badgeEl.textContent = `${qInfo.icon} ${isEn ? 'Quarter ' + qInfo.quarterNum : 'Triwulan ' + qInfo.quarterNum}`;
      badgeEl.className = 'eventBadge';
      badgeEl.style.background = 'rgba(59,124,246,0.15)';
      badgeEl.style.borderColor = 'rgba(59,124,246,0.3)';
      badgeEl.style.color = '#93c5fd';
    }
  }

  const card = document.getElementById('eventCard');
  if (!card) return;

  if (typeof AudioManager !== 'undefined') {
    const actorKey = (currentEv && currentEv.relatedActors && currentEv.relatedActors[0]) || (currentEv ? currentEv.actor : '') || '';
    AudioManager.playVoiceGrunt(actorKey);
  }

  const actorTags = (currentEv.relatedActors || []).map(a => {
    const act = ACTORS[a];
    const actorDisplayName = typeof getActorName === 'function' ? getActorName(a, lang) : (act ? act.name : a);
    return `<span class="actorTag">${act ? act.icon : '👥'} ${actorDisplayName}</span>`;
  }).join('');

  const panel = document.querySelector('.eventPanel');
  if (panel) panel.classList.remove('secretMode');

  // Atmospheric Living City Backdrop State (Dynamic Ambience)
  const body = document.body;
  if (body) {
    body.classList.remove('city-crisis', 'city-prosperous');
    if (state.sat < 40 || (state.risk && state.risk > 65) || state.apbd < 1.0) {
      body.classList.add('city-crisis');
    } else if (state.sat >= 70 && state.apbd >= 3.5) {
      body.classList.add('city-prosperous');
    }
  }

  // Update Live City Ticker Strip with latest citizen or news pulse
  const tickerBadge = document.getElementById('cityTickerBadge');
  const tickerText = document.getElementById('cityTickerText');
  if (tickerBadge && tickerText) {
    if (state.sat < 40) {
      tickerBadge.textContent = isEn ? 'CRISIS ALERT' : 'SIAGA KOTA';
      tickerBadge.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
    } else if (state.sat >= 70) {
      tickerBadge.textContent = isEn ? 'MUNICIPAL PULSE' : 'DENYUT KOTA';
      tickerBadge.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    } else {
      tickerBadge.textContent = isEn ? 'LATEST REPORT' : 'KILAS KOTA';
      tickerBadge.style.background = 'linear-gradient(135deg,#3b82f6,#1d4ed8)';
    }
    const latestNews = state.news && state.news.length > 0 ? state.news[state.news.length - 1] : null;
    if (latestNews) {
      tickerText.textContent = isEn ? (latestNews.text_en || latestNews.text) : latestNews.text;
    } else {
      tickerText.textContent = isEn ? 'Monitoring civic satisfaction and ongoing municipal services across Nusapura...' : 'Memantau indeks kepuasan publik dan kelancaran pelayanan birokrasi di Nusapura...';
    }
  }

  const choicesList = (locEv.choices || currentEv.choices || []).map((c, idx) => {
    let stampActionType = 'acc';
    let stampActionLabel = isEn ? '✅ APPROVE' : '✅ SETUJUI (ACC)';
    if (idx === 1) {
      stampActionType = 'reject';
      stampActionLabel = isEn ? '❌ REJECT / STRICT' : '❌ TOLAK / DISPOSISI';
    } else if (idx >= 2) {
      stampActionType = 'compromise';
      stampActionLabel = isEn ? '⚖️ COMPROMISE' : '⚖️ KOMPROMI / LOBI';
    }
    return `
      <button class="choiceBtn choiceBtnInteractive" onclick="handleChoiceClickWithStamp(${idx})">
        <div class="stampBadgeAction ${stampActionType}">${stampActionLabel}</div>
        <div class="choiceLabel">${typeof highlightGovTerms === 'function' ? highlightGovTerms(c.t) : c.t}</div>
        <div class="choiceDesc">${typeof highlightGovTerms === 'function' ? highlightGovTerms(c.d) : c.d}</div>
      </button>
    `;
  }).join('');

  const rawText = locEv.text || currentEv.text || '';
  const rawTitle = locEv.title || currentEv.title || (isEn ? 'City Event' : 'Peristiwa Kota');
  const evTextHighlighted = typeof highlightGovTerms === 'function' ? highlightGovTerms(rawText) : rawText;
  const evTitleHighlighted = typeof highlightGovTerms === 'function' ? highlightGovTerms(rawTitle) : rawTitle;

  // Persona Character Stage for Event Card
  const primeActorKey = (currentEv && currentEv.relatedActors && currentEv.relatedActors[0]) || (currentEv ? currentEv.actor : '') || 'Mahasiswa';
  const primeActor = (typeof ACTORS !== 'undefined' && ACTORS[primeActorKey]) ? ACTORS[primeActorKey] : { name: 'Perwakilan Publik', icon: '👤', desc: 'Aspirasi Warga' };
  
  const personaSpeakerMap = {
    LSM: { name: 'Hendri Setiawan, S.H.', role: isEn ? 'Director of Nusapura Legal Aid & Human Rights' : 'Direktur LBH & Koalisi Masyarakat Sipil', avatar: '🔍', stakes: isEn ? '⚖️ Threatens Judicial Review & Mass Public Inquest' : '⚖️ Mengancam Uji Materiil Perda & Praperadilan' },
    Mahasiswa: { name: 'Bintang Pratama', role: isEn ? 'President of University Student Executive Board (BEM)' : 'Ketua BEM Seluruh Nusapura (Aliansi Mahasiswa)', avatar: '🎓', stakes: isEn ? '🔥 Ready to Paralyze City Hall Gates with Mass Rallies' : '🔥 Siap Geruduk Gerbang Balaikota Bersama Ribuan Mahasiswa' },
    Pengusaha: { name: 'Drs. Gunawan Halim', role: isEn ? 'Chairman of Nusapura Chamber of Commerce (KADIN)' : 'Ketua Kamar Dagang & Industri (KADIN) Kota', avatar: '💼', stakes: isEn ? '📉 Threatens Capital Flight & Factory Closures' : '📉 Mengancam Relokasi Investasi Pabrik ke Daerah Lain' },
    Investor: { name: 'Victor Tanoto', role: isEn ? 'Executive Director of Nusantara Capital Consortium' : 'Direktur Konsorsium Finansial Megapolitan', avatar: '🏦', stakes: isEn ? '💰 Rp 1.5 Trillion Private Capital at Stake' : '💰 Taruhan Aliran Modal Swasta Rp 1.5 Triliun' },
    SerikatBuruh: { name: 'Siti Rahmawati', role: isEn ? 'Chairwoman of the United Labor Federation' : 'Ketua Presidium Serikat Pekerja & Buruh Kota', avatar: '⚒️', stakes: isEn ? '🛑 General Strike Threatens Seaport & Logistics' : '🛑 Ancaman Mogok Massal Mematikan Logistik & Pabrik' },
    KomunitasLingkungan: { name: 'Dr. Lestari Ningsih', role: isEn ? 'Ecology Scientist & Green Canopy Coalition' : 'Pakar Ekologi & Presidium Koalisi Hutan Kota', avatar: '🌱', stakes: isEn ? '🌊 Severe Flooding & Watershed Collapse Risk' : '🌊 Bahaya Krisis Air Tanah & Ancaman Ekosistem Teluk' },
    KPK: { name: 'Kompol Bagas Wicaksono', role: isEn ? 'Anti-Corruption Taskforce Lead Investigator' : 'Penyidik Khusus Satgas Pencegahan Tipikor/KPK', avatar: '🕵️', stakes: isEn ? '🚨 Covert Surveillance & Wiretap Dossier Active' : '🚨 Radar Penyelidikan Tertutup & Berkas Sadapan Tipikor' },
    DPRD: { name: 'Ir. Hendra Gunawan', role: isEn ? 'Chairman of the Legislative Budget Committee (Banggar)' : 'Ketua Badan Anggaran (Banggar) DPRD Nusapura', avatar: '👨‍⚖️', stakes: isEn ? '⚡ Motion of No Confidence & APBD Deadlock Threat' : '⚡ Ancaman Boikot Pengesahan APBD & Hak Interpelasi' },
    ASN: { name: 'Drs. H. Mulyadi', role: isEn ? 'Secretary of the Municipal Civil Service Corps' : 'Ketua Korps Pegawai Negeri (Korpri) & Sekda', avatar: '📋', stakes: isEn ? '⏳ Bureaucratic Slowdown & Administrative Paralysis' : '⏳ Risiko Mogok Kerja Diam-diam & Kelambatan Layanan' },
    Polri: { name: 'Kombes Pol Tejo Suwarno', role: isEn ? 'City Police Chief of Nusapura' : 'Kapolresta Nusapura', avatar: '🚓', stakes: isEn ? '🛡️ Public Order Crisis & High Security Alert' : '🛡️ Siaga 1 Keamanan Kota & Ketertiban Publik' },
    MediaNasional: { name: 'Rian Mahendra', role: isEn ? 'Chief Investigative Journalist (Tempo/Kompas)' : 'Jurnalis Investigasi Senior Media Nasional', avatar: '📺', stakes: isEn ? '📢 Prime-Time National Scandal Broadcast' : '📢 Siap Siarkan Skandal ke Panggung Berita Nasional' },
    MediaLokal: { name: 'Dewi Anggraini', role: isEn ? 'Editor-in-Chief of Nusapura Daily News' : 'Pemimpin Redaksi Harian Nusapura Post', avatar: '📰', stakes: isEn ? '🗞️ Relentless investigative front-page coverage' : '🗞️ Sorotan tajam headline koran atas keluhan warga' },
    TokohAgama: { name: 'K.H. Ahmad Fauzi', role: isEn ? 'Chairman of Interfaith Harmony Forum' : 'Ketua Forum Kerukunan Umat Beragama', avatar: '🕌', stakes: isEn ? '🕊️ Threatens moral boycott & communal disharmony' : '🕊️ Ancaman fatwa moral & gejolak kerukunan umat' },
    TokohAdat: { name: 'Datuk Tumenggung Hasan', role: isEn ? 'Elder of the Indigenous Council' : 'Tetua Presidium Adat Lembaga Adat Kota', avatar: '🗡️', stakes: isEn ? '🛡️ Sacred customary sanctions & territory boycott' : '🛡️ Ancaman boikot wilayah adat & sanksi hukum adat' },
    Pengembang: { name: 'Ir. Raymond Sanjaya', role: isEn ? 'Head of Regional Property Developers Association' : 'Ketua DPD Asosiasi Pengembang Properti', avatar: '🏘️', stakes: isEn ? '🏗️ Halts housing projects & industrial investments' : '🏗️ Penyetopan megaproyek perumahan & sengketa izin' },
    Akademisi: { name: 'Prof. Dr. Ir. Sudarmono', role: isEn ? 'Dean & Head of University Expert Council' : 'Ketua Dewan Pakar Universitas Riset', avatar: '🔬', stakes: isEn ? '📑 Releases critical scientific audit exposing project flaws' : '📑 Rilis kajian ilmiah kritis & bongkar cacat AMDAL' },
    Influencer: { name: 'Alif \'Sultan Nusa\' Pratama', role: isEn ? 'Leading Youth Content Creator (2M Followers)' : 'Kreator Konten & Penggerak Opini Gen-Z (2 Juta Pengikut)', avatar: '📱', stakes: isEn ? '💥 Viral boycott campaign trending on social media' : '💥 Ledakan tagar viral boikot walikota di medsos' },
    Kejaksaan: { name: 'Bambang Irawan, S.H., M.H.', role: isEn ? 'Chief District Prosecutor of Nusapura' : 'Kepala Kejaksaan Negeri (Kajari) Nusapura', avatar: '🏛️', stakes: isEn ? '⚖️ Formal investigation into municipal budget corruption' : '⚖️ Surat Perintah Penyelidikan korupsi APBD' },
    Inspektorat: { name: 'Dra. Endang Purwanti', role: isEn ? 'Chief Municipal Inspector' : 'Inspektur Pengawasan Internal Kota', avatar: '🔎', stakes: isEn ? '📋 Internal audit disciplinary sanction against civil servants' : '📋 Laporan Hasil Pemeriksaan pelanggaran ASN' },
    BPK: { name: 'Fajar Nugroho, S.E., Ak.', role: isEn ? 'Regional Audit Board Senior Auditor' : 'Pengendali Teknis BPK Perwakilan Daerah', avatar: '⚖️', stakes: isEn ? '📉 Threat of Disclaimer audit opinion & penalty findings' : '📉 Ancaman Opini WDP/Disclaimer dan temuan kerugian daerah' }
  };

  const persona = personaSpeakerMap[primeActorKey] || {
    name: (typeof getActorName === 'function') ? getActorName(primeActorKey, isEn ? 'en' : 'id') : (primeActor.name || 'Juru Bicara Warga'),
    role: (typeof getActorDesc === 'function' && getActorDesc(primeActorKey, isEn ? 'en' : 'id')) ? getActorDesc(primeActorKey, isEn ? 'en' : 'id') : (isEn ? 'Civic Representative' : 'Aspirasi Delegasi Kota'),
    avatar: primeActor.icon || '👤',
    stakes: isEn ? '⚖️ Directly impacts municipal stability and citizen approval' : '⚖️ Berdampak langsung pada stabilitas kota & citra walikota'
  };

  // High Stakes Risk Summary for this decision
  const highStakesNote = isEn 
    ? `<b>CRITICAL EXECUTIVE STAKES:</b> Your choice will trigger immediate ripples. Offending powerful factions accelerates DPRD impeachment motions, while ignoring citizens or risking corruption brings the KPK Anti-Corruption Taskforce directly to City Hall.`
    : `<b>TARUHAN POLITIK EKSEKUTIF:</b> Keputusan Anda memiliki konsekuensi nyata. Memprovokasi DPRD membuka pintu mosi pemakzulan, sementara kompromi gelap memicu radar penyidikan Tipikor/KPK dan protes keras warga.`;

  // Domino Consequence Visual Callout Banner
  let dominoBannerHtml = '';
  if (currentEv && (currentEv.isDomino || currentEv.triggerFlag)) {
    const dCtx = isEn ? (currentEv.consequenceContext_en || 'Direct consequence of your past closed-door choice.') : (currentEv.consequenceContext_id || 'Akibat langsung dari keputusan ruang tertutup Anda di masa lalu.');
    dominoBannerHtml = `
      <div style="background:linear-gradient(135deg,rgba(239,68,68,0.25),rgba(153,27,27,0.35));border:1px solid #ef4444;border-radius:10px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:flex-start;gap:10px;animation:pulseTension 2s infinite;">
        <span style="font-size:22px;line-height:1;">💥</span>
        <div>
          <div style="color:#fca5a5;font-weight:900;font-size:11px;letter-spacing:0.5px;text-transform:uppercase;">
            ${isEn ? '⚡ DIRECT DOMINO REPERCUSSION UNLEASHED' : '⚡ KONSEKUENSI BERANTAI PECAH KE PUBLIK'}
          </div>
          <div style="color:#f1f5f9;font-size:12px;font-weight:600;margin-top:2px;">
            ${dCtx}
          </div>
        </div>
      </div>
    `;
  }

  // Executive Orientation Tutorial Banner for Year 1 Kasus Latihan Sederhana
  let tutorialBoxHtml = '';
  if (currentEv && (currentEv.isTutorial || currentEv.id === 'ev_tutorial_apbd_dprd')) {
    tutorialBoxHtml = `
      <div class="tutorialOrientationBox">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="font-size:24px;">🎓</span>
          <div>
            <div style="font-size:13px;font-weight:900;color:#6ee7b7;letter-spacing:0.5px;text-transform:uppercase;">
              ${isEn ? 'EXECUTIVE ORIENTATION: 2 FOUNDATIONAL ENGINES' : 'PANDUAN EKSEKUTIF PEMULA: 2 MOTOR UTAMA KEKUASAAN'}
            </div>
            <div style="font-size:11px;color:#cbd5e1;">${isEn ? 'Understand fiscal spending vs legislative support before facing municipal crises' : 'Pahami korelasi kas daerah (APBD) vs dukungan dewan (DPRD) sebelum krisis melanda meja kerja Anda'}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div class="tutPillar" style="border-left-color:#facc15;">
            <b style="color:#fef08a;">${isEn ? '💰 1. Municipal APBD Reserves:' : '💰 1. Saldo Kas APBD:'}</b><br/>
            ${isEn ? 'All programs, infrastructure, and subsidies consume municipal budget. Falling into critical deficit (< Rp 1.0 T) leads to fiscal insolvency.' : 'Setiap pembangunan, bansos, dan subsidi mengurangi kas APBD. Belanja besar memicu kepuasan warga, tetapi defisit kritis (< Rp 1.0 T) mengancam kebangkrutan fiskal daerah.'}
          </div>
          <div class="tutPillar" style="border-left-color:#60a5fa;">
            <b style="color:#93c5fd;">${isEn ? '🏛️ 2. City Council (DPRD) Relations:' : '🏛️ 2. Respon & Hubungan Parlemen (DPRD):'}</b><br/>
            ${isEn ? 'Council factions hold the power over your budgets and ordinances. If relations drop below 40%, expect budget deadlocks, interpellations, and impeachment motions.' : 'Fraksi dewan memegang kunci pengesahan Perda dan APBD. Jika hubungan dewan memburuk (< 40%), dewan dapat memboikot anggaran, melayangkan Hak Interpelasi, hingga pemakzulan.'}
          </div>
          <div class="tutPillar" style="border-left-color:#34d399;">
            <b style="color:#a7f3d0;">${isEn ? '⚖️ 3. The Art of Balance:' : '⚖️ 3. Seni Menyeimbangkan:'}</b><br/>
            ${isEn ? 'Compare the impact of the 3 packages below. Choose your inaugural executive policy to start Year 1!' : 'Bandingkan dampak 3 paket di bawah ini. Tentukan langkah perdana Anda untuk memulai kepemimpinan Tahun ke-1!'}
          </div>
        </div>
      </div>
    `;
  }

  card.innerHTML = `
    ${dominoBannerHtml}
    <div class="quarterBannerRow" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:linear-gradient(90deg,rgba(59,124,246,0.12),rgba(30,58,110,0.22));border:1px solid rgba(120,170,255,0.28);border-radius:12px;margin-bottom:14px;font-size:12.5px;">
      <div style="display:flex;align-items:center;gap:7px;color:#93c5fd;font-weight:800;">
        <span style="font-size:16px;">${qInfo.icon}</span>
        <span>${qInfo.name}</span>
      </div>
      <div style="color:var(--gray-400);font-size:11.5px;">${isEn ? 'Focus:' : 'Fokus:'} <span style="color:#fff;font-weight:700;">${qInfo.theme}</span></div>
    </div>

    <!-- NARRATIVE UPGRADE 1: NAMED CHARACTER PERSONA STAGE -->
    <div class="eventPersonaStage">
      <div class="eventPersonaAvatarWrap">
        <span>${persona.avatar}</span>
      </div>
      <div class="eventPersonaInfo">
        <div class="eventPersonaName">${persona.name}</div>
        <div class="eventPersonaRole">${persona.role}</div>
        <div class="eventPersonaStakes">${persona.stakes}</div>
      </div>
    </div>

    ${currentEv.candId ? `
      <div style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,rgba(59,130,246,0.22),rgba(37,99,235,0.35));border:1px solid #60a5fa;border-radius:8px;padding:5px 12px;font-size:11px;font-weight:800;color:#bfdbfe;margin-bottom:12px;box-shadow:0 2px 8px rgba(59,130,246,0.2);">
        <span>👔</span>
        <span>${isEn ? 'EXCLUSIVE MAYORAL POLICY AGENDA • ' + (state.mayorCandidate ? state.mayorCandidate.name.split(',')[0] : 'Mayor') : 'AGENDA KEBIJAKAN EKSKLUSIF WALIKOTA • ' + (state.mayorCandidate ? state.mayorCandidate.name.split(',')[0] : 'Walikota')}</span>
      </div>
    ` : ''}

    <div class="eventHeader">
      <div class="eventIcon">${currentEv.icon || '📜'}</div>
      <div>
        <div class="eventCat">${locEv.cat || currentEv.cat || (isEn ? 'Policy' : 'Kebijakan')}</div>
        <div class="eventTitle">${evTitleHighlighted}</div>
      </div>
    </div>
    <div class="eventText">${evTextHighlighted}</div>
    ${actorTags ? `<div class="actorBadges">${actorTags}</div>` : ''}

    <!-- NARRATIVE UPGRADE 2: HIGH-STAKES CALLOUT -->
    <div class="eventStakesCallout">
      <span style="font-size:16px;line-height:1;">⚠️</span>
      <div>${highStakesNote}</div>
    </div>

    <div class="stampOverlay stampOverlayAcc" id="stampOverlayAcc">${isEn ? 'APPROVED / EXECUTIVE ORDER' : 'DISETUJUI / ACC'}</div>
    <div class="stampOverlay stampOverlayReject" id="stampOverlayReject">${isEn ? 'REJECTED / DISMISSED' : 'DITOLAK / DISPOSISI'}</div>
    ${tutorialBoxHtml}
    <div class="swipeHintBar">
      <span>👈 ${isEn ? 'Swipe Left: Reject (Choice 2)' : 'Geser Kiri: Tolak (Opsi 2)'}</span>
      <span>•</span>
      <span>👉 ${isEn ? 'Swipe Right: Approve (Choice 1)' : 'Geser Kanan: Setujui (Opsi 1)'}</span>
    </div>
    <div class="choiceList">
      ${choicesList}
    </div>
  `;
  attachEventCardSwipeGestures(card);
}

function triggerHostileActorBacklash() {
  if (!state.actors) return;
  const hostileKeys = Object.keys(state.actors).filter(k => state.actors[k] && state.actors[k].relation < 35);
  if (hostileKeys.length === 0) return;

  if (Math.random() > 0.35) return;

  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_protes');
  }

  const randActor = hostileKeys[Math.floor(Math.random() * hostileKeys.length)];
  const actInfo = ACTORS[randActor] || { name: randActor };
  const actNameEn = actInfo.name_en || actInfo.name;

  let text = '';
  let text_en = '';
  let satPenalty = 3;

  if (randActor === 'SerikatBuruh') {
    text = '📢 Serikat Buruh menggelar aksi demonstrasi menolak kebijakan pemkot! Kepuasan Warga -4% & Pengangguran +2%';
    text_en = '📢 Labor Unions staged protests rejecting municipal policies! Citizen Approval -4% & Unemployment +2%';
    if (state.stats) state.stats.unemp = Math.min(100, (state.stats.unemp || 7) + 2);
    satPenalty = 4;
  } else if (randActor === 'Investor') {
    text = '💸 Konsorsium Investor menunda investasi proyek baru! Investasi -5 & PAD -0.3 T';
    text_en = '💸 Investor Consortium delayed new project investments! Investment -5 & PAD -0.3 T';
    if (state.stats) state.stats.inv = Math.max(0, (state.stats.inv || 50) - 5);
    state.pad = Math.max(0.5, Math.round((state.pad - 0.3) * 10) / 10);
  } else if (randActor === 'LSM') {
    text = '🔍 LSM merilis laporan investigasi kritik transparansi Pemkot! Kepuasan Warga -4%';
    text_en = '🔍 NGOs released an investigative report criticizing City Hall transparency! Citizen Approval -4%';
    satPenalty = 4;
  } else if (randActor === 'BPK') {
    text = '📜 BPK menerbitkan LHP Opini WDP terkait ketidaksesuaian kas! APBD -0.4 T & Kepuasan -3%';
    text_en = '📜 Supreme Audit Agency (BPK) issued a Qualified Opinion audit report! Budget -0.4 T & Approval -3%';
    state.apbd = Math.max(1, Math.round((state.apbd - 0.4) * 10) / 10);
  } else if (randActor === 'Polri') {
    text = '🚨 Tensi sosial meningkat akibat minimnya koordinasi keamanan! Kriminalitas +4%';
    text_en = '🚨 Social tensions rose due to lack of security coordination! Crime rate +4%';
    if (state.stats) state.stats.crime = Math.min(100, (state.stats.crime || 50) + 4);
  } else if (randActor === 'TokohAdat' || randActor === 'Ormas') {
    text = `📜 Kelompok ${actInfo.name} menerbitkan petisi keprihatinan atas kebijakan pemkot! Kepuasan Warga -3%`;
    text_en = `📜 The ${actNameEn} group published a petition of concern regarding municipal policies! Approval -3%`;
  } else {
    text = `⚠️ Hubungan buruk dengan ${actInfo.name} memicu tekanan politik ke Balaikota! Kepuasan -3%`;
    text_en = `⚠️ Strained relations with ${actNameEn} triggered political friction against City Hall! Approval -3%`;
  }

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  state.sat = Math.max(0, state.sat - satPenalty);
  showToast(isEn ? `⚡ OPPOSITION PRESSURE: ${text_en}` : `⚡ TEKANAN OPOSISI: ${text}`);
  if (!state.news) state.news = [];
  state.news.push({
    year: isEn ? `Yr ${state.year}` : `Thn ${state.year}`,
    year_en: `Yr ${state.year}`,
    text: text,
    text_en: text_en,
    mood: -1
  });
}

function triggerCorruptionCheck() {
  const cStats = calculateCabinetStats();
  const limit = (state.selectedDiff === 'extreme') ? 15 : 25;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (cStats.riskKorupsi > limit && Math.random() < 0.25) {
    const cost = (state.selectedDiff === 'extreme') ? 0.8 : 0.5;
    const satCost = (state.selectedDiff === 'extreme') ? 5 : 3;
    state.apbd = Math.max(1, Math.round((state.apbd - cost) * 10) / 10);
    state.sat = Math.max(0, state.sat - satCost);
    const msg = isEn
      ? `🚨 BUREAUCRATIC SCANDAL: KPK anti-graft sting exposes departmental bribery! Treasury lost -Rp ${cost} T & Citizen Approval -${satCost}%!`
      : `🚨 SKANDAL BIROKRASI: OTT KPK membongkar praktik suap oknum dinas! Kas APBD terkuras -${cost} T & Kepuasan -${satCost}%!`;
    showToast(msg);
    if (!state.news) state.news = [];
    state.news.push({
      year: isEn ? `Yr ${state.year}` : `Thn ${state.year}`,
      text: isEn
        ? `KPK sting operation exposes permit kickback bribery among municipal department officials.`
        : `OTT KPK bongkar suap perizinan oknum birokrasi daerah.`,
      mood: -1
    });
  }
}


/* ==================== ACCIDENTAL TAP UNDO ENGINE ==================== */
function takeUndoSnapshot(choiceTitle) {
  try {
    state._lastUndoSnapshot = {
      eventIdx: state.eventIdx,
      year: state.year,
      term: state.term,
      subYearOrder: state.subYearOrder ? [...state.subYearOrder] : null,
      historyLength: (state.history || []).length,
      sat: state.sat,
      apbd: state.apbd,
      pad: state.pad,
      stats: state.stats ? JSON.parse(JSON.stringify(state.stats)) : {},
      life: state.life ? JSON.parse(JSON.stringify(state.life)) : null,
      choiceTitle: choiceTitle || ''
    };
  } catch (err) {
    console.warn('Undo snapshot error:', err);
  }
}

function undoLastChoice() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (!state._lastUndoSnapshot) {
    showToast(isEn ? '⚠️ No recent choice to undo.' : '⚠️ Tidak ada keputusan yang bisa dibatalkan.');
    return;
  }

  const snap = state._lastUndoSnapshot;
  state.eventIdx = snap.eventIdx;
  state.year = snap.year;
  state.term = snap.term;
  if (snap.subYearOrder) state.subYearOrder = [...snap.subYearOrder];
  if (state.history && snap.historyLength != null) {
    state.history = state.history.slice(0, snap.historyLength);
  }
  state.sat = snap.sat;
  state.apbd = snap.apbd;
  state.pad = snap.pad;
  if (snap.stats) state.stats = JSON.parse(JSON.stringify(snap.stats));
  if (snap.life) state.life = JSON.parse(JSON.stringify(snap.life));

  state._lastUndoSnapshot = null;

  showToast(isEn ? '↺ Last choice undone! Please choose another option.' : '↺ Keputusan dibatalkan! Silakan tentukan pilihan baru.');
  updateHUD();
  renderCurrentEvent();
}

function handleChoiceClick(choiceIdx) {
  const currentEv = getCurrentEvent();
  const choice = (currentEv && currentEv.choices && currentEv.choices[choiceIdx]) ? currentEv.choices[choiceIdx] : null;

  if (!choice) return;
  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_stempel');
  }
  takeUndoSnapshot(choice.t || choice.t_en || 'Pilihan');

  const diff = state.selectedDiff || 'normal';
  let satMult = 1.0;
  let satPenMult = 1.0;
  let apbdCostMult = 1.0;
  let statsGainMult = 1.0;
  let statsPenMult = 1.0;

  if (diff === 'hard') {
    satMult = 0.8; satPenMult = 1.3; apbdCostMult = 1.25; statsGainMult = 0.85; statsPenMult = 1.25;
  } else if (diff === 'extreme') {
    satMult = 0.6; satPenMult = 1.6; apbdCostMult = 1.45; statsGainMult = 0.70; statsPenMult = 1.50;
  }

  if (choice.fx) {
    if (choice.fx.apbd) {
      let delta = choice.fx.apbd;
      if (delta < 0) delta *= apbdCostMult;
      state.apbd = Math.max(1, Math.round((state.apbd + delta) * 10) / 10);
    }
    if (choice.fx.pad) state.pad = Math.max(0.5, Math.round((state.pad + choice.fx.pad) * 10) / 10);
    if (choice.fx.sat) {
      let delta = choice.fx.sat;
      delta = delta >= 0 ? delta * satMult : delta * satPenMult;
      state.sat = Math.max(0, Math.min(100, Math.round(state.sat + delta)));
    }
    if (choice.fx.risk != null) {
      state.risk = Math.max(0, Math.min(100, (state.risk || 15) + choice.fx.risk));
    }

    for (const k in choice.fx) {
      if (['apbd', 'pad', 'sat', 'risk'].includes(k)) continue;
      if (state.stats && state.stats[k] != null) {
        let delta = choice.fx[k];
        if (['unemp', 'pov', 'inf', 'traffic', 'poll', 'crime', 'flood'].includes(k)) {
          delta = delta >= 0 ? delta * statsPenMult : delta * statsGainMult;
        } else {
          delta = delta >= 0 ? delta * statsGainMult : delta * statsPenMult;
        }
        state.stats[k] = Math.max(0, Math.min(100, Math.round(state.stats[k] + delta)));
      }
    }
  }

  if (diff === 'hard' || diff === 'extreme') {
    triggerHostileActorBacklash();
    triggerCorruptionCheck();
  }

  if (choice.actors) updateActorRelations(choice.actors);
  if (choice.fx || choice.actors || choice.risk != null) {
    spawnFloatingStatsFeedback(choice.fx, choice.actors, choice);
  }
  if (choice.life && state.life) {
    if (choice.life.wealth != null) state.life.wealth = Math.max(0, Math.round((state.life.wealth + choice.life.wealth) * 100) / 100);
    if (choice.life.familyRel != null) state.life.familyRel = Math.max(0, Math.min(100, state.life.familyRel + choice.life.familyRel));
    if (choice.life.stress != null) state.life.stress = Math.max(0, Math.min(100, state.life.stress + choice.life.stress));
    if (choice.life.health != null) state.life.health = Math.max(0, Math.min(100, state.life.health + choice.life.health));
  }
  if (choice.risk != null) {
    state.risk = Math.max(0, Math.min(100, (state.risk || 15) + choice.risk));
  }
  if (choice.flag) state.flags[choice.flag] = true;

  if (choice.budgetType) {
    if (typeof applyBudgetPreset === 'function') {
      applyBudgetPreset(choice.budgetType);
    }
  }
  if (choice.openBudgetModalDirect) {
    setTimeout(() => {
      if (typeof openBudgetInteractiveModal === 'function') {
        openBudgetInteractiveModal();
      }
    }, 350);
  }

  if (choice.news) {
    const locEvEn = typeof getLocalizedEvent === 'function' ? getLocalizedEvent(currentEv, 'en') : null;
    const transChoiceEn = (locEvEn && locEvEn.choices && locEvEn.choices[choiceIdx]) ? locEvEn.choices[choiceIdx] : null;
    const newsEn = (transChoiceEn && transChoiceEn.news) ? transChoiceEn.news : (choice.news_en || (typeof translateDynamicText === 'function' ? translateDynamicText(choice.news, 'en') : choice.news));
    state.news.push({
      year: `Thn ${state.year}`,
      text: choice.news,
      text_en: newsEn,
      mood: choice.mood != null ? choice.mood : 0
    });
  }
  const locEvEn2 = typeof getLocalizedEvent === 'function' ? getLocalizedEvent(currentEv, 'en') : null;
  const transChoiceEn2 = (locEvEn2 && locEvEn2.choices && locEvEn2.choices[choiceIdx]) ? locEvEn2.choices[choiceIdx] : null;
  const choiceDescEn = (transChoiceEn2 && transChoiceEn2.d) ? transChoiceEn2.d : (choice.d_en || (typeof translateDynamicText === 'function' ? translateDynamicText(choice.d, 'en') : choice.d));
  
  const randomHandles = ['@WargaNusapura', '@SuaraPublik', '@AktivisKota', '@NetizenJujur', '@PedagangKota', '@AnakMudaNusa', '@DriverOnline', '@IbuRT_Kota'];
  const randomAvatars = ['👨', '👩', '🧑', '👵', '👨‍💼', '👩‍🔬', '🚴', '👨‍🏫'];
  const randH = randomHandles[Math.floor(Math.random() * randomHandles.length)];
  const randA = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
  const handleMapEn = {
    '@WargaNusapura': '@NusapuraCitizen',
    '@SuaraPublik': '@PublicVoice',
    '@AktivisKota': '@CityActivist',
    '@NetizenJujur': '@HonestNetizen',
    '@PedagangKota': '@UrbanMerchant',
    '@AnakMudaNusa': '@NusaYouth',
    '@DriverOnline': '@RideshareDriver',
    '@IbuRT_Kota': '@CommunityLeader'
  };
  const isPositive = (choice.mood != null ? choice.mood : 0) > 0 || (choice.fx && choice.fx.sat > 0);
  const isNegative = (choice.mood != null ? choice.mood : 0) < 0 || (choice.fx && choice.fx.sat < 0);
  const postSentiment = isPositive ? (Math.random() > 0.5 ? '👍' : '🤩') : (isNegative ? (Math.random() > 0.5 ? '😡' : '😤') : '💬');
  const postType = isPositive ? 'praise' : (isNegative ? (Math.random() > 0.5 ? 'anger' : 'complaint') : 'neutral');
  const postId = 'soc_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  state.social.push({
    id: postId,
    avatar: randA,
    handle: randH,
    handle_en: handleMapEn[randH] || randH,
    sentiment: postSentiment,
    type: postType,
    text: `${choice.d} ${postSentiment}`,
    text_en: `${choiceDescEn} ${postSentiment}`,
    handled: !isNegative,
    statusText: isNegative ? '' : '👍 Diapresiasi warga',
    statusText_en: isNegative ? '' : '👍 Appreciated by citizens'
  });
  state.history.push({ year: state.year, title: currentEv.title, choice: choice.t });

  if (!state.usedEventIds) state.usedEventIds = [];
  if (currentEv.id) state.usedEventIds.push(currentEv.id);
  state.currentActiveEvent = null;

  const prevIdx = state.eventIdx;
  state.eventIdx++;

  updateHUD();
  updateDashboard();
  updateGauges();
  renderNews();
  renderSocial();

  if (state.eventIdx >= EVENTS_PER_YEAR) {
    showYearSummaryModal();
  } else {
    // Check if moving to a new Quarter (every 3 events)
    if (state.eventIdx % 3 === 0) {
      const nextQ = getQuarterInfo(state.eventIdx);
      const prevQ = getQuarterInfo(prevIdx);
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `🗓️ ${prevQ.name_en || prevQ.name} Completed! Entering ${nextQ.name_en || nextQ.name} (${nextQ.theme_en || nextQ.theme}).` : `🗓️ ${prevQ.name} Selesai! Memasuki ${nextQ.name} (${nextQ.theme}).`);
      notifySecretaryBriefingReady();
    }
    renderCurrentEvent();
    saveGame();
  }
}

function showYearSummaryModal() {
  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_kas');
  }
  const modal = document.getElementById('yearSummaryModal');
  const title = document.getElementById('yearSummaryTitle');
  const body = document.getElementById('yearSummaryBody');

  const cStats = calculateCabinetStats();
  const econAlloc = (state.budgetAlloc && state.budgetAlloc.economy) ? state.budgetAlloc.economy : 10;
  const padGrowth = Math.round((0.3 + (econAlloc * 0.04)) * 10) / 10;

  if (!state.yearlySnapshots) {
    state.yearlySnapshots = (state.history || []).filter(h => h && h.sat !== undefined);
  }
  const existingIdx = state.yearlySnapshots.findIndex(h => h.year === state.year && h.term === state.term);
  const snap = {
    year: state.year,
    term: state.term,
    sat: Math.round(state.sat),
    unemp: state.stats ? state.stats.unemp : 7,
    pov: state.stats ? state.stats.pov : 8,
    apbd: state.apbd,
    pad: state.pad
  };
  if (existingIdx >= 0) {
    state.yearlySnapshots[existingIdx] = snap;
  } else {
    state.yearlySnapshots.push(snap);
  }

  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  if (title) {
    title.textContent = isEn 
      ? `🏛️ Annual Fiscal & Performance Evaluation Report (Year ${state.year})`
      : `🏛️ Laporan Evaluasi Anggaran & Kinerja Tahun ke-${state.year}`;
  }
  if (body) {
    
  // Generate Front-Page Newspaper Visual Card (Akbar's Visual Impact Feedback)
  let headline = '';
  let headline_en = '';
  let heroBadge = '';
  let heroBadgeColor = '';
  let visualIcon = '📰';
  let editorialQuote = '';
  let editorialQuote_en = '';

  if (state.sat >= 75) {
    headline = 'ERA KEJAYAAN KOTA: KEBIJAKAN WALIKOTA DIAPRESIASI LUAS OLEH MASYARAKAT NUSAPURA!';
    headline_en = 'ERA OF CIVIC PROSPERITY: MAYOR REFORMS PRAISED ACROSS NUSAPURA CITIZENRY!';
    heroBadge = '🌟 PRESTASI KOTA TERTINGGI';
    heroBadgeColor = 'background:rgba(74,222,128,0.2);color:#4ade80;border:1px solid #4ade80;';
    visualIcon = '🏆';
    editorialQuote = '"Nusapura bertransformasi menjadi kota yang jauh lebih tertata dan ramah keluarga. Tingkat kepuasan warga menembus rekor." — Redaksi Nusapura Times';
    editorialQuote_en = '"Nusapura has transformed into a livable, family-friendly metropolis. Citizen approval hits historic high." — Nusapura Times Editorial';
  } else if (state.sat >= 52) {
    headline = 'STABILITAS & PEMBANGUNAN: REFORMASI BALAI KOTA BERJALAN DI TENGAH DINAMIKA PARLEMEN';
    headline_en = 'PROGRESS & PRAGMATISM: CITY HALL NAVIGATES STEADY GROWTH AMID COUNCIL DYNAMICS';
    heroBadge = '⚖️ KINERJA KOTA STABIL';
    heroBadgeColor = 'background:rgba(96,165,250,0.2);color:#60a5fa;border:1px solid #60a5fa;';
    visualIcon = '🏙️';
    editorialQuote = '"Pemerintah kota mampu menjaga laju belanja APBD dan pelayanan publik tetap stabil di tahun ini." — Analis Kebijakan Publik';
    editorialQuote_en = '"Municipal administration maintained steady budget execution and essential public utilities." — Regional Policy Observer';
  } else {
    headline = 'SOROTAN TAJAM & GELOMBANG KRITIK: WARGA MENUNTUT AKUNTABILITAS TINGGI DARI BALAI KOTA!';
    headline_en = 'CITIZEN DISCONTENT GROWS: MOUNTING DEMANDS FOR CITY HALL REFORM & TRANSPARENCY!';
    heroBadge = '📢 TANTANGAN BESAR KEPEMIMPINAN';
    heroBadgeColor = 'background:rgba(239,68,68,0.2);color:#ef4444;border:1px solid #ef4444;';
    visualIcon = '⚠️';
    editorialQuote = '"Keluhan warga atas kemacetan, biaya hidup, dan birokrasi menjadi alarm keras bagi kepemimpinan Walikota." — Suara Warga Nusapura';
    editorialQuote_en = '"Widespread grievances over living costs and civic red tape raise urgent alarms for City Hall leadership." — Nusapura Citizen Voice';
  }

  const newspaperCardHtml = `
    <div class="newspaperCard">
      <div class="newspaperHeader">
        <div class="newspaperMasthead">📰 NUSAPURA TIMES</div>
        <div class="newspaperEdition">${isEn ? `YEAR ${state.year} SPECIAL REPORT` : `EDISI KHUSUS AKHIR TAHUN KE-${state.year}`}</div>
      </div>
      <div class="newspaperHeroBadge" style="${heroBadgeColor}">
        ${heroBadge}
      </div>
      <div class="newspaperHeadline">
        "${isEn ? headline_en : headline}"
      </div>
      <div class="newspaperGraphicFrame">
        <div class="newspaperVisualIcon">${visualIcon}</div>
        <div style="flex:1;">
          <div class="newspaperEditorialQuote">
            ${isEn ? editorialQuote_en : editorialQuote}
          </div>
        </div>
      </div>
    </div>
  `;

  body.innerHTML = `
      ${newspaperCardHtml}
      <div class="summaryGrid" style="grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:rgba(255,255,255,0.03);padding:10px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Active APBD Budget' : 'APBD Saat Ini'}</div>
          <div style="font-size:16px;font-weight:800;color:var(--blue-soft);">Rp ${state.apbd.toFixed(1)} T</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:10px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'PAD Realization (Local Taxes & Utility)' : 'Realisasi PAD (Setoran Pasar & Pajak)'}</div>
          <div style="font-size:16px;font-weight:800;color:var(--green);">Rp ${state.pad.toFixed(1)} T (+Rp ${padGrowth} T)</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:10px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Cabinet Integrity Index' : 'Tingkat Integritas Kabinet'}</div>
          <div style="font-size:16px;font-weight:800;color:${cStats.avgIntegritas >= 80 ? 'var(--green)' : 'var(--amber)'};">${cStats.avgIntegritas}%</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:10px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Bureaucracy Corruption Risk' : 'Risiko Korupsi Birokrasi'}</div>
          <div style="font-size:16px;font-weight:800;color:${cStats.riskKorupsi <= 25 ? 'var(--green)' : 'var(--red)'};">${cStats.riskKorupsi}%</div>
        </div>
      </div>
      <div class="summaryGrid" style="grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:rgba(168,85,247,0.08);padding:10px;border-radius:10px;border:1px solid rgba(168,85,247,0.25);">
          <div style="font-size:11px;color:#d8b4fe;">${isEn ? '🏡 Family Harmony' : '🏡 Harmoni Keluarga'}</div>
          <div style="font-size:16px;font-weight:800;color:#f8fafc;">${state.life ? state.life.familyRel : 85}%</div>
        </div>
        <div style="background:rgba(168,85,247,0.08);padding:10px;border-radius:10px;border:1px solid rgba(168,85,247,0.25);">
          <div style="font-size:11px;color:#d8b4fe;">${isEn ? '❤️ Physical & Mental Health' : '❤️ Kesehatan & Tingkat Stres'}</div>
          <div style="font-size:16px;font-weight:800;color:#f8fafc;">${state.life ? state.life.health : 85}% <span style="font-size:11px;color:#cbd5e1;">(Stres: ${state.life ? state.life.stress : 20}%)</span></div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--gray-400);line-height:1.5;">
        ${isEn ? `
          • Economic sector allocation (<b>${econAlloc}%</b>) successfully fostered municipal own-source PAD growth.<br>
          • Citizen Approval Rating closed the year at <b style="color:#fff;">${Math.round(state.sat)}%</b>.<br>
          • Municipal Cabinet average competence score of <b style="color:#fff;">${cStats.avgKinerja}%</b> maintained effective public service delivery.
        ` : `
          • Alokasi Sektor Ekonomi (<b>${econAlloc}%</b>) berhasil mendorong tambahan Pendapatan Asli Daerah.<br>
          • Tingkat Kepuasan Warga akhir tahun tercatat sebesar <b style="color:#fff;">${Math.round(state.sat)}%</b>.<br>
          • Kabinet dengan rata-rata kinerja <b style="color:#fff;">${cStats.avgKinerja}%</b> membantu kelancaran eksekusi Perda.
        `}
      </div>
    `;
  }
  if (modal) {
    modal.classList.add('show');
    modal.style.display = 'flex';
  }

  setTimeout(() => {
    const snaps = state.yearlySnapshots && state.yearlySnapshots.length ? state.yearlySnapshots : [snap];
    const labels = snaps.map(h => `Thn ${h.year}`);
    const satData = snaps.map(h => h.sat);
    const unempData = snaps.map(h => h.unemp);
    const povData = snaps.map(h => h.pov);
    const apbdData = snaps.map(h => h.apbd);
    const padData = snaps.map(h => h.pad);

    drawLineChart('chartMain', [
      { color: '#4ade80', data: satData, unit: '%' },
      { color: '#60a5fa', data: unempData, unit: '%' },
      { color: '#facc15', data: povData, unit: '%' }
    ], labels);

    drawLineChart('chartApbd', [
      { color: '#38bdf8', data: apbdData, unit: 'T' },
      { color: '#a78bfa', data: padData, unit: 'T' }
    ], labels);
  }, 100);
}

function advanceYear() {
  const modal = document.getElementById('yearSummaryModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }

  // Calculate annual budget execution effects
  if (!state.budgetAlloc) {
    state.budgetAlloc = { infra: 25, edu: 20, health: 20, env: 15, economy: 10, operasional: 10 };
  }

  const b = state.budgetAlloc;
  const padAdd = Math.round((0.05 + ((b.economy || 10) * 0.01)) * 100) / 100;
  state.pad = Math.round((state.pad + padAdd) * 10) / 10;

  // Realism: APBD is an Annual Budget (Tahun Anggaran Baru) = Central Transfer + Local Revenue (PAD) + SILPA Buffer
  if (state.transferPusat == null) state.transferPusat = 2.6;
  const baseNewBudget = Math.round((state.transferPusat + state.pad) * 10) / 10;
  const silpa = Math.max(-0.5, Math.min(0.5, Math.round((state.apbd - baseNewBudget) * 0.2 * 10) / 10));
  state.apbd = Math.round((baseNewBudget + silpa) * 10) / 10;

  // Apply budget effects and realistic sector degradation on stats
  if (state.stats) {
    if (b.infra >= 25) state.stats.infra = Math.min(100, (state.stats.infra || 50) + 3);
    else if (b.infra < 22) {
      state.stats.infra = Math.max(10, (state.stats.infra || 50) - 4);
      state.stats.traffic = Math.min(100, (state.stats.traffic || 50) + 3);
    }

    if (b.edu >= 20) state.stats.edu = Math.min(100, (state.stats.edu || 55) + 3);
    else if (b.edu < 18) state.stats.edu = Math.max(10, (state.stats.edu || 55) - 4);

    if (b.health >= 20) state.stats.health = Math.min(100, (state.stats.health || 55) + 3);
    else if (b.health < 18) {
      state.stats.health = Math.max(10, (state.stats.health || 55) - 4);
      state.sat = Math.max(10, state.sat - 2);
    }

    if (b.env >= 15) state.stats.env = Math.min(100, (state.stats.env || 45) + 2);
    else if (b.env < 12) {
      state.stats.env = Math.max(10, (state.stats.env || 45) - 4);
      state.stats.poll = Math.min(100, (state.stats.poll || 50) + 4);
    }

    if (b.economy >= 15) state.stats.unemp = Math.max(2, (state.stats.unemp || 7) - 1);
    else if (b.economy < 12) {
      state.stats.unemp = Math.min(25, (state.stats.unemp || 7) + 2);
      state.stats.pov = Math.min(30, (state.stats.pov || 8) + 2);
    }

    // Operational Maintenance for Completed Megastructures
    const activeMegas = (state.megastructures || []).filter(m => m.progress >= 100).length;
    if (activeMegas > 0) {
      const megaMaint = Math.round((activeMegas * 0.15) * 10) / 10;
      state.apbd = Math.max(0.5, Math.round((state.apbd - megaMaint) * 10) / 10);
      showToast(`🔧 Pemeliharaan & Operasional ${activeMegas} Megastruktur Kota menyerap Rp ${megaMaint} T APBD.`);
    }

    // DPRD Opposition Stalling Check
    const dprdRel = (state.actors && state.actors.DPRD && state.actors.DPRD.relation != null) ? state.actors.DPRD.relation : 50;
    if (dprdRel < 42) {
      const stallCost = 0.4;
      state.apbd = Math.max(0.5, Math.round((state.apbd - stallCost) * 10) / 10);
      state.sat = Math.max(10, state.sat - 3);
      showToast(`⚠️ OPOSISI DPRD: Hubungan DPRD buruk (${dprdRel}%). Sidang APBD deadlock, terjadi pemangkasan Rp ${stallCost} T!`);
    }

    // Natural Expectation Decay
    state.sat = Math.max(15, state.sat - 2);

    // Difficulty mechanics for annual governance
    const diff = state.selectedDiff || 'normal';
    if (diff === 'hard' || diff === 'extreme') {
      if (b.economy < 15) state.stats.pov = Math.min(30, (state.stats.pov || 8) + 2);
      if (state.sat > 60) state.sat = Math.max(15, state.sat - 3); // Citizens are much harder to satisfy
      
      const debtCost = (diff === 'extreme') ? 0.8 : 0.4;
      state.apbd = Math.max(0.5, Math.round((state.apbd - debtCost) * 10) / 10);
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `⚠️ Debt interest & municipal obligations deducted Rp ${debtCost} T from APBD!` : `⚠️ Bunga utang & kewajiban daerah menyerap Rp ${debtCost} T dari APBD!`);

      if (diff === 'extreme' && b.operasional < 15) {
        state.apbd = Math.max(0.5, Math.round((state.apbd - 0.6) * 10) / 10);
        showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '⚠️ Operational budget cuts triggered civil service strikes & -0.6 T treasury loss!' : '⚠️ Pemangkasan operasional memicu mogok kerja dinas & kerugian kas -0.6 T!');
      }
    }
  }

  // Cabinet corruption risk event check
  const cStats = calculateCabinetStats();
  if (cStats.riskKorupsi > 40) {
    state.sat = Math.max(10, state.sat - 4);
    if (!state.news) state.news = [];
    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: 'Kinerja birokrasi disorot akibat tingginya risiko kebocoran kas daerah.',
      text_en: 'Bureaucracy performance scrutinized due to heightened risk of budget leakage.',
      mood: -1
    });
  } else if (cStats.avgIntegritas >= 85) {
    state.sat = Math.min(100, state.sat + 2);
    if (!state.news) state.news = [];
    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: 'Integrasi birokrasi & integritas kabinet mendapat pujian dari lembaga pengawas.',
      text_en: 'Cabinet integrity and bureaucratic governance receive praise from independent oversight agencies.',
      mood: 1
    });
  }

  // Update Mayor Personal Life Engine
  if (!state.life) {
    state.life = typeof initLifeState === 'function' ? initLifeState(state.selectedMayor) : {
      age: 42, health: 85, stress: 20, wealth: 1.8, reputation: 75, familyRel: 85, salary: 0.35, spouse: 'dr. Sarah N.', childrenCount: 2, house: 'Rumah Pribadi Asri', car: 'SUV MPV Keluarga', investments: [], journal: []
    };
  }
  state.life.age++;
  state.life.wealth = Math.round((state.life.wealth + state.life.salary) * 100) / 100;
  if (state.life.investments) {
    state.life.investments.forEach(inv => {
      state.life.wealth = Math.round((state.life.wealth + (inv.amount * inv.returnRate)) * 100) / 100;
    });
  }

  // Regenerate dynamic citizen reports for Lapor Walikota 112
  if (typeof generateDynamicCitizenReports === 'function') {
    state.reportsList = generateDynamicCitizenReports();
  }

  state.eventIdx = 0;
  state.currentActiveEvent = null;
  state.year++;

  if (state.year > YEARS) {
    showEvaluationScreen();
  } else {
    updateHUD();
    updateDashboard();
    updateGauges();
    renderNews();
    renderCurrentEvent();
    saveGame();

    // Check Impeachment / KPK / Annual Life Events
    setTimeout(() => {
      const dprdRelVal = (state.actors && state.actors.DPRD && state.actors.DPRD.relation != null) ? state.actors.DPRD.relation : 50;
      const currentRisk = (typeof getCorruptionRisk === 'function') ? getCorruptionRisk() : (state.risk || 15);
      if ((state.sat < 35 && dprdRelVal < 30) || currentRisk > 80) {
        if (window.triggerImpeachmentTrial) window.triggerImpeachmentTrial();
      } else if (currentRisk > 65 && Math.random() > 0.4) {
        if (window.triggerKpkTrial) window.triggerKpkTrial();
      } else {
        if (window.triggerAnnualLifeEvent) window.triggerAnnualLifeEvent();
        else if (window.triggerBitLifeAnnualEvent) window.triggerBitLifeAnnualEvent();
      }
    }, 450);
  }
}

function showEvaluationScreen() {
  hideAllScreens();
  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_palu');
  }
  const screen = document.getElementById('evaluationScreen');
  const body = document.getElementById('evaluationBody');
  const actions = document.getElementById('evaluationActions');
  const titleEl = document.getElementById('evaluationTitle');
  const currentTerm = state.term || 1;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (titleEl) {
    if (isEn) {
      titleEl.textContent = currentTerm === 1 ? 'First Mayoral Term Concluded' : 'Second Mayoral Term Concluded';
    } else {
      titleEl.textContent = currentTerm === 1 ? 'Masa Jabatan Periode Pertama Usai' : 'Masa Jabatan Periode Kedua Usai';
    }
  }

  if (body) {
    if (isEn) {
      body.innerHTML = `
        <div class="startStory">
          <b>Your ${currentTerm === 1 ? 'First' : 'Second'} Mayoral Term in Nusapura has officially reached its conclusion!</b><br><br>
          • Final Citizen Approval: <b>${Math.round(state.sat)}%</b><br>
          • Remaining Municipal Treasury (APBD): <b>Rp ${state.apbd.toFixed(1)} T</b><br>
          • Total Realized Regional Revenue (PAD): <b>Rp ${state.pad.toFixed(1)} T</b>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div class="startStory">
          <b>Masa jabatan Periode ${currentTerm === 1 ? 'Pertama' : 'Kedua'} Anda di Kota Nusapura telah berakhir!</b><br><br>
          • Kepuasan Akhir Warga: <b>${Math.round(state.sat)}%</b><br>
          • Sisa Kas APBD Kota: <b>Rp ${state.apbd.toFixed(1)} T</b><br>
          • Realisasi Total PAD: <b>Rp ${state.pad.toFixed(1)} T</b>
        </div>
      `;
    }
  }

  if (actions) {
    if (currentTerm === 1) {
      actions.innerHTML = `
        <button class="bigBtn" id="btnToTerm2">${isEn ? '🗳️ Advance to Second Term Campaign Flow' : '🗳️ Maju ke Pilkada Periode Kedua'}</button>
        <button class="bigBtn secondary" id="btnEvaluationMenu">${isEn ? '🏠 Return to Main Menu' : '🏠 Kembali ke Menu Utama'}</button>
      `;
      const b2 = document.getElementById('btnToTerm2');
      if (b2) {
        b2.onclick = () => {
          state.term = 2;
          state.year = 1;
          state.eventIdx = 0;
          state.yearEvents = buildYearOrder();
          startCampaignFlow();
        };
      }
      const bm = document.getElementById('btnEvaluationMenu');
      if (bm) {
        bm.onclick = () => {
          showStartScreen();
        };
      }
    } else {
      actions.innerHTML = `
        <button class="bigBtn" id="btnShowEndingReport">${isEn ? '🏆 View Final Political Career Report' : '🏆 Lihat Laporan Akhir Karier Politik'}</button>
        <button class="bigBtn secondary" id="btnEvaluationMenu">${isEn ? '🏠 Return to Main Menu' : '🏠 Kembali ke Menu Utama'}</button>
      `;
      const be = document.getElementById('btnShowEndingReport');
      if (be) {
        be.onclick = () => {
          showEndingModal();
        };
      }
      const bm = document.getElementById('btnEvaluationMenu');
      if (bm) {
        bm.onclick = () => {
          showStartScreen();
        };
      }
    }
  }

  if (screen) screen.classList.add('show');
}

function showEndingModal(customTitle, customDesc, theme) {
  hideAllScreens();
  const modal = document.getElementById('endingModal');
  if (!modal) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const sat = Math.round(state.sat || 68);
  const apbd = (state.apbd || 18).toFixed(1);
  const cStats = calculateCabinetStats();
  const score = Math.min(100, Math.max(0, Math.round(sat * 0.5 + (cStats.avgIntegritas * 0.3) + (state.apbd * 1.2))));

  // Determine unlocked epilogue based on ending conditions
  let unlockedEpId = 'satu_periode';
  if (customTitle && customTitle.toLowerCase().includes('pemakzulan')) {
    unlockedEpId = 'pemakzulan_dprd';
  } else if (customTitle && (customTitle.toLowerCase().includes('tipikor') || customTitle.toLowerCase().includes('kpk'))) {
    unlockedEpId = 'skandal_kpk';
  } else if (state.apbd <= 0 || (customTitle && customTitle.toLowerCase().includes('bangkrut'))) {
    unlockedEpId = 'kota_bangkrut';
  } else if (score >= 85 && sat >= 80) {
    unlockedEpId = 'negarawan_agung';
  } else if (score >= 75 && state.apbd >= 4.0) {
    unlockedEpId = 'bapak_pembangunan';
  } else if (sat >= 75) {
    unlockedEpId = 'populis_rakyat';
  } else if (score < 40 && (state.corruptionRisk || 0) >= 60) {
    unlockedEpId = 'skandal_kpk';
  } else if (sat <= 20) {
    unlockedEpId = 'mogok_massal';
  } else if (state.apbd <= 2.0) {
    unlockedEpId = 'kota_bangkrut';
  } else {
    unlockedEpId = 'satu_periode';
  }

  // Audio response based on tragedy vs triumph
  if (typeof AudioManager !== 'undefined') {
    if (theme === 'red' || customTitle) {
      AudioManager.playBgm('krisis');
      AudioManager.playSfx('sfx_palu');
    } else {
      AudioManager.playBgm('pemilu');
      AudioManager.playSfx('sfx_tepuk_tangan');
    }
  }

  // Unlock in Gallery
  let epObj = null;
  if (typeof GalleryManager !== 'undefined') {
    GalleryManager.unlockEpilogue(unlockedEpId);
    epObj = GalleryManager.EPILOGUES.find(x => x.id === unlockedEpId);
  }

  // Populate Epilogue Showcase Card
  const epCard = document.getElementById('endingEpilogueCard');
  if (epCard && epObj) {
    const badgeEl = document.getElementById('endingEpilogueBadge');
    const imgEl = document.getElementById('endingEpilogueImg');
    const epTitleEl = document.getElementById('endingEpilogueTitle');
    const epStoryEl = document.getElementById('endingEpilogueStory');

    if (badgeEl) badgeEl.textContent = epObj.badge;
    if (imgEl) imgEl.src = epObj.image;
    if (epTitleEl) epTitleEl.textContent = isEn ? epObj.title_en : epObj.title_id;
    if (epStoryEl) epStoryEl.textContent = isEn ? epObj.desc_en : epObj.desc_id;
  }

  let grade = 'C';
  let title = isEn ? 'Standard Public Servant' : 'Walikota Biasa';
  if (score >= 88) {
    grade = 'S';
    title = isEn ? 'Reformist Mayor & Builder of the Century' : 'Walikota Reformis & Pahlawan Pembangunan';
  } else if (score >= 78) {
    grade = 'A';
    title = isEn ? 'Exemplary Mayor of Nusapura' : 'Walikota Teladan Nusapura';
  } else if (score >= 65) {
    grade = 'B';
    title = isEn ? 'Distinguished & High-Performing Mayor' : 'Walikota Berprestasi';
  } else if (score >= 50) {
    grade = 'C';
    title = isEn ? 'Standard Dedicated Mayor' : 'Walikota Pengabdian Standar';
  } else {
    grade = 'D';
    title = isEn ? 'Controversial & Scrutinized Tenure' : 'Walikota Banyak Catatan';
  }

  const scoreEl = document.getElementById('endingScore');
  const gradeEl = document.getElementById('endingGrade');
  const titleEl = document.getElementById('endingTitle');
  const statsEl = document.getElementById('endingStats');
  const typeHeaderEl = document.getElementById('endingTypeHeader');

  if (scoreEl) scoreEl.textContent = score;
  if (gradeEl) gradeEl.textContent = grade;
  if (titleEl) titleEl.textContent = title;

  if (typeHeaderEl) {
    if (customTitle) {
      typeHeaderEl.innerHTML = `
        <div style="background:rgba(239,68,68,0.18);padding:12px 14px;border-radius:12px;border:1px solid #ef4444;margin-bottom:12px;">
          <div style="color:#fca5a5;font-weight:900;font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">⚠️ ${customTitle}</div>
          <div style="color:#f1f5f9;font-size:12.5px;margin-top:4px;">${customDesc || ''}</div>
        </div>
      `;
    } else {
      typeHeaderEl.innerHTML = `
        <div style="background:rgba(255,255,255,0.03);padding:10px 14px;border-radius:12px;border:1px solid var(--line);margin-bottom:12px;">
          ${isEn
            ? '🏆 Pinnacle of 2 Full Terms serving as Mayor of Nusapura. Thank you for your leadership and dedication!'
            : '🏆 Puncak pengabdian 2 Periode sebagai Walikota Nusapura. Terima kasih atas jasa kepemimpinan Anda!'}
        </div>
      `;
    }
  }

  if (statsEl) {
    statsEl.innerHTML = `
      <div class="summaryGrid" style="grid-template-columns:1fr 1fr;gap:8px;">
        <div>${isEn ? 'Public Approval' : 'Kepuasan Publik'}: <b>${sat}%</b></div>
        <div>${isEn ? 'Remaining APBD' : 'Sisa APBD'}: <b>Rp ${apbd} T</b></div>
        <div>${isEn ? 'Cabinet Integrity' : 'Integritas Kabinet'}: <b>${cStats.avgIntegritas}%</b></div>
        <div>${isEn ? 'Corruption Risk' : 'Risiko Korupsi'}: <b>${cStats.riskKorupsi}%</b></div>
      </div>
    `;
  }

  modal.classList.add('show');

  setTimeout(() => {
    drawLineChart('chartEnding', [
      { color: '#4ade80', data: [50, 60, 68, sat] },
      { color: '#60a5fa', data: [8, 7.5, 7, (state.stats && state.stats.unemp) ? state.stats.unemp : 7] },
      { color: '#facc15', data: [10, 9, 8, (state.stats && state.stats.pov) ? state.stats.pov : 8] }
    ]);
  }, 100);
}

function updateHamburgerStatus() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const nameEl = document.getElementById('hamValName');
  const termEl = document.getElementById('hamValTerm');
  const apbdEl = document.getElementById('hamValApbd');
  const satEl = document.getElementById('hamValSat');
  const riskEl = document.getElementById('hamValRisk');

  if (nameEl) {
    const candName = (state.selectedCand && state.selectedCand.name) ? state.selectedCand.name : (state.candidate ? state.candidate.name : (isEn ? 'Mayor of Nusapura' : 'Walikota Nusapura'));
    nameEl.textContent = candName;
  }
  if (termEl) {
    termEl.textContent = isEn ? `Year ${state.year || 1} (Term ${state.term || 1})` : `Thn ke-${state.year || 1} (Periode ${state.term || 1})`;
  }
  if (apbdEl) apbdEl.textContent = `Rp ${(state.apbd != null ? state.apbd : 18).toFixed(1)} T`;
  if (satEl) satEl.textContent = `${Math.round(state.sat != null ? state.sat : 75)}%`;
  if (riskEl) {
    const crime = (state.stats && state.stats.crime) ? state.stats.crime : 50;
    if (crime >= 70) {
      riskEl.textContent = isEn ? '🔴 High' : '🔴 Tinggi';
      riskEl.style.color = '#ff6b6b';
    } else if (crime >= 40) {
      riskEl.textContent = isEn ? '🟡 Moderate' : '🟡 Sedang';
      riskEl.style.color = '#ffd166';
    } else {
      riskEl.textContent = isEn ? '🟢 Low' : '🟢 Rendah';
      riskEl.style.color = '#06d6a0';
    }
  }
}

let subModalSource = null;
let activeHamCategory = 'birokrasi';

const FEATURE_CATALOG = [
  // 1. BIROKRASI & TATA KELOLA
  {
    id: 'office_3d',
    cat: 'birokrasi',
    icon: '🏛️',
    title: 'Ruang Kerja Walikota 3D',
    title_en: "Mayor's Executive Chamber 3D",
    type: 'Eksplorasi Ruang Interaktif',
    type_en: 'Interactive 3D Chamber',
    desc: 'Kunjungi ruang kerja resmi walikota dalam visualisasi 3D realistis. Interaksi dengan dokumen APBD di meja, telepon hotline memo, portofolio LHKPN, dan jendela panorama kota.',
    desc_en: "Step inside the mayor's executive office in interactive 3D. Interact with APBD dossiers, confidential hotline phone, career wealth, and panoramic city skyline.",
    unlockDesc: 'Selalu Terbuka (Tahun 1)',
    unlockDesc_en: 'Always Unlocked (Year 1)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      const m = document.getElementById('hamburgerModal');
      if (m) m.classList.remove('show');
      openOffice3dModal();
    }
  },
  {
    id: 'secretary_briefing',
    cat: 'birokrasi',
    icon: '📂',
    title: 'Sekretaris Pribadi & Evaluasi Kebijakan',
    title_en: 'Executive Secretary & Policy Briefing',
    type: 'Intelijen & Evaluasi Dampak',
    type_en: 'Intelligence & Policy Impact',
    desc: 'Laporan berkas map resmi Ajudan mengenai dampak nyata Perda, kepatuhan OPD, progres megaproyek, dan dinamika politik.',
    desc_en: 'Official confidential dossier from the Mayor\'s private secretary detailing real outcomes of by-laws, agency health, mega-projects, and political dynamics.',
    unlockDesc: 'Selalu Terbuka (Tahun 1)',
    unlockDesc_en: 'Always Unlocked (Year 1)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      const m = document.getElementById('hamburgerModal');
      if (m) m.classList.remove('show');
      openSecretaryBriefingModal();
    }
  },
  {
    id: 'cabinet',
    cat: 'birokrasi',
    icon: '🗂️',
    title: 'Kabinet Dinas & OPD',
    title_en: 'Cabinet & Municipal Agency Heads',
    type: 'Aksi & Evaluasi',
    type_en: 'Action & Evaluation',
    desc: 'Evaluasi kinerja, integritas, mutasi, dan pencopotan kepala dinas daerah.',
    desc_en: 'Evaluate performance, integrity, reshuffle, or dismiss regional department heads.',
    unlockDesc: 'Selalu Terbuka (Tahun 1)',
    unlockDesc_en: 'Always Unlocked (Year 1)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderCabinetModal();
      document.getElementById('cabinetModal').classList.add('show');
    }
  },
  {
    id: 'budget',
    cat: 'birokrasi',
    icon: '💰',
    title: 'Perencanaan Alokasi APBD',
    title_en: 'APBD Budget Planning',
    type: 'Aksi Fiskal',
    type_en: 'Fiscal Policy',
    desc: 'Atur porsi alokasi belanja infrastruktur, pendidikan, kesehatan, dan ekonomi.',
    desc_en: 'Allocate spending quotas across infrastructure, education, health, and economy.',
    unlockDesc: 'Selalu Terbuka (Tahun 1)',
    unlockDesc_en: 'Always Unlocked (Year 1)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderBudgetModal();
      document.getElementById('budgetModal').classList.add('show');
    }
  },
  {
    id: 'reports',
    cat: 'birokrasi',
    icon: '📱',
    title: 'Lapor Walikota 112',
    title_en: 'Mayor Citizen Hotline (112)',
    type: 'Aksi Warga',
    type_en: 'Citizen Grievances',
    desc: 'Tangani keluhan langsung warga: jalan rusak, pungli sekolah, banjir, & sampah liar.',
    desc_en: 'Directly resolve citizen reports: damaged roads, school fees, flooding, and illegal dumping.',
    unlockDesc: 'Terbuka Triwulan 3 (Tahun ke-1)',
    unlockDesc_en: 'Unlocked Quarter 3 (Year 1)',
    isUnlocked: () => (state.year > 1 || state.eventIdx >= 4 || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openReportsModal();
    }
  },
  {
    id: 'perdas',
    cat: 'birokrasi',
    icon: '📜',
    title: 'Pusat Perda & Regulasi',
    title_en: 'Regional Legislation & By-Laws (Perda)',
    type: 'Aksi Regulasi',
    type_en: 'Regulatory Action',
    desc: 'Rancang peraturan daerah untuk mengatasi kemacetan, polusi, dan retribusi daerah.',
    desc_en: 'Draft municipal ordinances to resolve traffic congestion, air pollution, and local taxes.',
    unlockDesc: 'Terbuka Mulai Tahun ke-2',
    unlockDesc_en: 'Unlocked Starting Year 2',
    isUnlocked: () => (state.year >= 2 || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderPerdaModal();
      document.getElementById('perdaModal').classList.add('show');
    }
  },
  {
    id: 'integrity',
    cat: 'birokrasi',
    icon: '🛡️',
    title: 'Audit BPK & Integritas',
    title_en: 'BPK Audit & Integrity Unit',
    type: 'Aksi Pengawasan',
    type_en: 'Oversight Action',
    desc: 'Pemeriksaan audit menyeluruh, transparansi anggaran, dan pencegahan OTT KPK.',
    desc_en: 'Comprehensive fiscal audits, budget transparency portals, and KPK anti-graft safeguards.',
    unlockDesc: 'Tahun ke-3 ATAU Risiko Korupsi > 20%',
    unlockDesc_en: 'Year 3 OR Corruption Risk > 20%',
    isUnlocked: () => (state.year >= 3 || (state.term && state.term >= 2) || (typeof calculateCabinetStats === 'function' && calculateCabinetStats().riskKorupsi >= 20)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openIntegrityModal();
    }
  },
  {
    id: 'emergency',
    cat: 'birokrasi',
    icon: '🚨',
    title: 'Posko Tanggap Darurat',
    title_en: 'Emergency Crisis Command Post',
    type: 'Aksi Krisis',
    type_en: 'Crisis Response',
    desc: 'Pengerahan dana darurat BTT saat terjadi bencana banjir, wabah, atau kerusuhan.',
    desc_en: 'Deploy emergency BTT disaster funds during flash floods, disease outbreaks, or riots.',
    unlockDesc: 'Tahun ke-2 ATAU Banjir/Kriminalitas >= 60',
    unlockDesc_en: 'Year 2 OR Flood/Crime Index >= 60',
    isUnlocked: () => (state.year >= 2 || (state.term && state.term >= 2) || (state.stats && (state.stats.flood >= 60 || state.stats.crime >= 60))),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openEmergencyModal();
    }
  },

  // 2. EKONOMI & PROYEK DAERAH
  {
    id: 'procurement',
    cat: 'ekonomi',
    icon: '📦',
    title: 'Lelang PBJ & E-Katalog',
    title_en: 'E-Catalog & Public Tenders (PBJ)',
    type: 'Aksi Proyek',
    type_en: 'Capital Projects',
    desc: 'Pilih vendor pengadaan fisik & tender proyek strategis kota dengan transparansi harga.',
    desc_en: 'Select municipal project vendor consortia with verified price transparency and quality standards.',
    unlockDesc: 'Terbuka Mulai Tahun ke-2',
    unlockDesc_en: 'Unlocked Starting Year 2',
    isUnlocked: () => (state.year >= 2 || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openProcurementModal();
    }
  },
  {
    id: 'investment',
    cat: 'ekonomi',
    icon: '📈',
    title: 'Hub Investasi & KEK',
    title_en: 'Investment Hub & Special Economic Zones (KEK)',
    type: 'Aksi Investasi',
    type_en: 'Investment Policy',
    desc: 'Tawarkan insentif pajak & negosiasi konsorsium investor untuk serap ribuan tenaga kerja.',
    desc_en: 'Offer tax incentives and negotiate investor consortia to generate thousands of local jobs.',
    unlockDesc: 'Terbuka Mulai Tahun ke-2 Q3',
    unlockDesc_en: 'Unlocked Starting Year 2 Q3',
    isUnlocked: () => (state.year > 2 || (state.year === 2 && state.eventIdx >= 4) || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openInvestmentModal();
    }
  },
  {
    id: 'central',
    cat: 'ekonomi',
    icon: '🏛️',
    title: 'Lobi Pusat & DAK/PSN',
    title_en: 'Central Government Lobby & DAK/PSN',
    type: 'Aksi Diplomasi',
    type_en: 'Fiscal Diplomacy',
    desc: 'Lobi kementerian pusat & Bappenas untuk kucuran Dana Alokasi Khusus (DAK) triliunan.',
    desc_en: 'Lobby central ministries & Bappenas for trillion-rupiah Special Allocation Grants (DAK).',
    unlockDesc: 'Terbuka Mulai Tahun ke-3 ATAU Kas APBD < 2.5 T',
    unlockDesc_en: 'Unlocked Starting Year 3 OR APBD < 2.5 T',
    isUnlocked: () => (state.year >= 3 || (state.term && state.term >= 2) || (state.apbd != null && state.apbd < 2.5)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openCentralDiplomacyModal();
    }
  },
  {
    id: 'megastructures',
    cat: 'ekonomi',
    icon: '🏗️',
    title: 'Proyek Megastruktur',
    title_en: 'Megastructure Landmark Projects',
    type: 'Aksi Masterplan',
    type_en: 'Masterplan Action',
    desc: 'Bangun landmark spektakuler: LRT Nusapura, Giant Sea Wall, & Stadion Bertaraf Internasional.',
    desc_en: 'Construct monumental civic landmarks: Nusapura LRT, Giant Sea Wall, & International Stadium.',
    unlockDesc: 'Terbuka Mulai Tahun ke-3 (PAD > 1.5 T)',
    unlockDesc_en: 'Unlocked Starting Year 3 (PAD > 1.5 T)',
    isUnlocked: () => (state.year >= 3 || (state.term && state.term >= 2) || (state.pad != null && state.pad >= 1.5)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderMegastructuresModal();
      document.getElementById('megastructuresModal').classList.add('show');
    }
  },

  // 3. POLITIK & DINAMIKA PERSONAL
  {
    id: 'dprd',
    cat: 'politik',
    icon: '🏛️',
    title: 'Peta Fraksi DPRD Kota',
    title_en: 'DPRD Parliamentary Faction Map',
    type: 'Dinamika Politik',
    type_en: 'Political Dynamics',
    desc: 'Pantau komposisi kursi koalisi parlemen, lobi persetujuan APBD & negosiasi fraksi.',
    desc_en: 'Monitor coalition seat shares, lobby for APBD budget approvals, and negotiate party interests.',
    unlockDesc: 'Selalu Terbuka (Tahun 1)',
    unlockDesc_en: 'Always Unlocked (Year 1)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderDprdModal();
      document.getElementById('dprdModal').classList.add('show');
    }
  },
  {
    id: 'actors',
    cat: 'politik',
    icon: '👥',
    title: 'Aktor Politik & Stakeholder',
    title_en: 'Political Actors & Stakeholders',
    type: 'Relasi Politik',
    type_en: 'Political Relations',
    desc: 'Kelola hubungan dengan KPK, Ormas, Pengusaha, Serikat Buruh, dan Tokoh Masyarakat.',
    desc_en: 'Manage alliances with KPK, Civil Society, Business Chambers, Labor Unions, and Clergy.',
    unlockDesc: 'Terbuka Triwulan 2 (Tahun ke-1)',
    unlockDesc_en: 'Unlocked Quarter 2 (Year 1)',
    isUnlocked: () => (state.year > 1 || state.eventIdx >= 2 || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderActorsModal();
      document.getElementById('actorsModal').classList.add('show');
    }
  },
  {
    id: 'press',
    cat: 'politik',
    icon: '🎙️',
    title: 'Konferensi Pers & Media',
    title_en: 'Press Conference & Media Room',
    type: 'Aksi Reputasi',
    type_en: 'Public Relations',
    desc: 'Hadapi pertanyaan kritis jurnalis investigasi untuk mendongkrak citra & kepuasan publik.',
    desc_en: 'Face tough questions from investigative reporters to boost civic approval and public trust.',
    unlockDesc: 'Terbuka Triwulan 4 (Tahun ke-1)',
    unlockDesc_en: 'Unlocked Quarter 4 (Year 1)',
    isUnlocked: () => (state.year > 1 || state.eventIdx >= 6 || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openPressModal();
    }
  },
  {
    id: 'life',
    cat: 'politik',
    icon: '👤',
    title: 'Kehidupan & Karir Pribadi',
    title_en: 'Personal Life & Career Management',
    type: 'Simulasi Pribadi',
    type_en: 'Personal Simulation',
    desc: 'Kelola kekayaan pribadi, keluarga, kesehatan jasmani, tingkat stres, dan portofolio aset.',
    desc_en: 'Manage personal wealth, family welfare, physical health, stress levels, and asset portfolios.',
    unlockDesc: 'Selalu Terbuka (Tahun 1)',
    unlockDesc_en: 'Always Unlocked (Year 1)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      if (window.openLifeModal) window.openLifeModal();
    }
  },
  {
    id: 'campaign',
    cat: 'politik',
    icon: '🗳️',
    title: 'Debat & Kampanye Pilkada',
    title_en: 'Mayoral Debates & Campaign Hub',
    type: 'Aksi Elektoral',
    type_en: 'Electoral Strategy',
    desc: 'Latih strategi panggung debat kandidat & kampanye akbar menjelang kontestasi Pilkada berikutnya.',
    desc_en: 'Rehearse live televised debate strategies and district rallies heading into the next Pilkada.',
    unlockDesc: 'Terbuka Mulai Tahun ke-4 atau Periode 2',
    unlockDesc_en: 'Unlocked Starting Year 4 or Term 2',
    isUnlocked: () => (state.year >= 4 || (state.term && state.term >= 2)),
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      openCampaignModal();
    }
  },

  // 4. DATA & REFERENSI
  {
    id: 'stats',
    cat: 'data',
    icon: '📊',
    title: 'Statistik & Tren Kota',
    title_en: 'City Statistics & Indicator Trends',
    type: 'Referensi Data',
    type_en: 'Data Analytics',
    desc: 'Grafik riwayat kepuasan, kemiskinan, pengangguran, dan inflasi dari tahun ke tahun.',
    desc_en: 'Historical charts of citizen approval, poverty, unemployment, and inflation year-over-year.',
    unlockDesc: 'Selalu Terbuka (Referensi)',
    unlockDesc_en: 'Always Unlocked (Reference)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderStatsModal();
      document.getElementById('statsModal').classList.add('show');
    }
  },
  {
    id: 'encyclopedia',
    cat: 'data',
    icon: '📖',
    title: 'Ensiklopedia Otonomi',
    title_en: 'Indonesian Governance Encyclopedia',
    type: 'Referensi Teori',
    type_en: 'Governance Theory',
    desc: 'Panduan tata kelola APBD, kewenangan otonomi daerah, dan strategi kepemimpinan kepala daerah.',
    desc_en: 'Guide to APBD budgeting, regional autonomy laws, and mayoral leadership strategies.',
    unlockDesc: 'Selalu Terbuka (Referensi)',
    unlockDesc_en: 'Always Unlocked (Reference)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderEncyclopediaModal();
      document.getElementById('encyclopediaModal').classList.add('show');
    }
  },
  {
    id: 'achievements',
    cat: 'data',
    icon: '🏆',
    title: 'Pencapaian Kepemimpinan',
    title_en: 'Leadership Achievements & Medals',
    type: 'Medali & Rekor',
    type_en: 'Medals & Records',
    desc: 'Daftar medali kehormatan yang berhasil diraih selama masa pengabdian di Balaikota.',
    desc_en: 'Distinguished honor medals earned throughout your mayoral service at City Hall.',
    unlockDesc: 'Selalu Terbuka (Referensi)',
    unlockDesc_en: 'Always Unlocked (Reference)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderAchModal();
      document.getElementById('achModal').classList.add('show');
    }
  },
  {
    id: 'epilogue_gallery',
    cat: 'data',
    icon: '🏛️',
    title: 'Galeri Epilog Akhir Jabatan',
    title_en: 'Epilogue & Ending Gallery',
    type: 'Koleksi Sejarah',
    type_en: 'Historical Collection',
    desc: 'Koleksi 12 takdir sejarah dan ilustrasi resolusi akhir kepemimpinan politik Anda di Nusapura.',
    desc_en: 'Collection of 12 historical political destinies and end-of-tenure resolution artworks.',
    unlockDesc: 'Selalu Terbuka (Koleksi)',
    unlockDesc_en: 'Always Unlocked (Collection)',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      if (typeof GalleryManager !== 'undefined') {
        GalleryManager.openGalleryModal();
      }
    }
  },

  // 5. SISTEM & GAME DATA
  {
    id: 'save',
    cat: 'sistem',
    icon: '🌐',
    title: 'Ganti Bahasa (Language)',
    title_en: 'Change Language Mode',
    type: 'Preferensi',
    type_en: 'Preferences',
    desc: 'Beralih instan antara Bahasa Indonesia dan English kapan saja di tengah permainan.',
    desc_en: 'Instantly toggle between Indonesian and English mid-game without losing progress.',
    unlockDesc: 'Selalu Terbuka',
    unlockDesc_en: 'Always Unlocked',
    isUnlocked: () => true,
    action: () => {
      const cur = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
      const next = cur === 'en' ? 'id' : 'en';
      switchGameLanguage(next);
    }
  },
  {
    id: 'save',
    cat: 'sistem',
    icon: '💾',
    title: 'Simpan Permainan (Save)',
    title_en: 'Save Career Progress',
    type: 'Sistem',
    type_en: 'System',
    desc: 'Simpan posisi jabatan, anggaran, kondisi kabinet, dan sejarah kebijakan terkini.',
    desc_en: 'Save current mayoral term, treasury, cabinet roster, and policy history.',
    unlockDesc: 'Selalu Terbuka',
    unlockDesc_en: 'Always Unlocked',
    isUnlocked: () => true,
    action: () => {
      saveGame();
    }
  },
  {
    id: 'load',
    cat: 'sistem',
    icon: '📂',
    title: 'Muat Permainan (Load)',
    title_en: 'Load Saved Progress',
    type: 'Sistem',
    type_en: 'System',
    desc: 'Muat kembali checkpoint tersimpan sebelumnya di memori perangkat.',
    desc_en: 'Restore previously saved career checkpoint from local device memory.',
    unlockDesc: 'Selalu Terbuka',
    unlockDesc_en: 'Always Unlocked',
    isUnlocked: () => true,
    action: () => {
      loadGame();
      document.getElementById('hamburgerModal').classList.remove('show');
    }
  },
  {
    id: 'settings',
    cat: 'sistem',
    icon: '⚙️',
    title: 'Pengaturan & Profil',
    title_en: 'Settings & Simulation Preferences',
    type: 'Sistem',
    type_en: 'System',
    desc: 'Lihat rincian tingkat kesulitan game, mode cerita, dan preferensi aplikasi.',
    desc_en: 'View difficulty parameters, narrative modes, and application language preferences.',
    unlockDesc: 'Selalu Terbuka',
    unlockDesc_en: 'Always Unlocked',
    isUnlocked: () => true,
    action: () => {
      subModalSource = 'hamburger';
      document.getElementById('hamburgerModal').classList.remove('show');
      renderSettingsModal();
      document.getElementById('settingsModal').classList.add('show');
    }
  },
  {
    id: 'reset',
    cat: 'sistem',
    icon: '♻️',
    title: 'Reset Progress',
    title_en: 'Reset Progress',
    type: 'Sistem',
    type_en: 'System',
    desc: 'Hapus data tersimpan dan mulai perjalanan walikota baru dari nol.',
    desc_en: 'Wipe all saved simulation data and restart a new mayoral career from scratch.',
    unlockDesc: 'Selalu Terbuka',
    unlockDesc_en: 'Always Unlocked',
    isUnlocked: () => true,
    action: () => {
      const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
      if (confirm(isEn ? 'Are you sure you want to reset all game data and restart from scratch?' : 'Apakah Anda yakin ingin mereset permainan dan menghapus save data?')) {
        resetProgress();
        showStartScreen();
      }
    }
  }
];

function updateHamburgerTabBadges() {
  const cats = ['birokrasi', 'ekonomi', 'politik', 'data'];
  cats.forEach(cat => {
    const list = FEATURE_CATALOG.filter(f => f.cat === cat);
    const unlocked = list.filter(f => f.isUnlocked()).length;
    const badge = document.getElementById(`badgeTab${cat.charAt(0).toUpperCase() + cat.slice(1)}`);
    if (badge) {
      badge.textContent = `${unlocked}/${list.length}`;
      if (unlocked === list.length) {
        badge.style.color = '#4ade80';
      } else {
        badge.style.color = 'var(--blue-soft)';
      }
    }
  });
}

function switchHamburgerTab(cat) {
  activeHamCategory = cat;
  const tabBtns = document.querySelectorAll('.hamTabBtn');
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderHamburgerCategory(cat);
}

function renderHamburgerCategory(cat) {
  const container = document.getElementById('hamCardGrid');
  if (!container) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const items = FEATURE_CATALOG.filter(f => f.cat === cat);
  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:24px;color:var(--gray-400);">${isEn ? 'No options available in this section.' : 'Tidak ada menu di kategori ini.'}</div>`;
    return;
  }

  container.innerHTML = items.map(f => {
    const unlocked = f.isUnlocked();
    const tagCls = unlocked ? 'ready' : 'locked';
    const tagText = unlocked 
      ? (isEn ? '🟢 Ready to Access' : '🟢 Siap Akses') 
      : (isEn ? '🔒 Locked' : '🔒 Terkunci');
    const uDesc = (isEn && f.unlockDesc_en) ? f.unlockDesc_en : f.unlockDesc;
    const title = (isEn && f.title_en) ? f.title_en : f.title;
    const type = (isEn && f.type_en) ? f.type_en : f.type;
    const desc = (isEn && f.desc_en) ? f.desc_en : f.desc;
    const btnText = unlocked ? (isEn ? 'Open Feature →' : 'Buka Fitur →') : `🔒 ${uDesc}`;

    return `
      <div class="hamFeatureCard ${unlocked ? '' : 'locked'}" onclick="handleFeatureCardClick('${f.id}')">
        <div class="hamCardHead">
          <div class="hamCardIconTitle">
            <span class="hamCardIcon">${f.icon}</span>
            <div>
              <div class="hamCardTitle">${title}</div>
              <div style="font-size:10px;color:var(--blue-soft);font-weight:700;margin-top:1px;">${type}</div>
            </div>
          </div>
          <span class="hamCardTag ${tagCls}">${tagText}</span>
        </div>
        <div class="hamCardDesc">${desc}</div>
        ${!unlocked ? `<div class="hamCardLockNotice">🔒 ${isEn ? 'Requirement:' : 'Syarat:'} ${uDesc}</div>` : ''}
        <button class="hamCardActionBtn">${btnText}</button>
      </div>
    `;
  }).join('');
}

function handleFeatureCardClick(featureId) {
  const feat = FEATURE_CATALOG.find(f => f.id === featureId);
  if (!feat) return;

  if (feat.isUnlocked()) {
    feat.action();
  } else {
    showToast(`🔒 ${feat.title} masih terkunci! Syarat: ${feat.unlockDesc}`);
  }
}

function returnFromSubModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove('show');
    m.style.display = 'none';
  }
  if (subModalSource === 'hamburger') {
    openHamburgerMenu();
  } else if (subModalSource === 'yearSummaryModal') {
    const yModal = document.getElementById('yearSummaryModal');
    if (yModal) {
      yModal.classList.add('show');
      yModal.style.display = 'flex';
    }
    subModalSource = null;
  } else {
    subModalSource = null;
  }
}

function openHamburgerMenu() {
  updateHamLangToggleButtons();
  updateHamburgerStatus();
  updateHamburgerTabBadges();
  renderHamburgerCategory(activeHamCategory);
  
  // Wire up category buttons
  const tabBtns = document.querySelectorAll('.hamTabBtn');
  tabBtns.forEach(btn => {
    btn.onclick = () => {
      const cat = btn.getAttribute('data-cat');
      if (cat) switchHamburgerTab(cat);
    };
  });

  const m = document.getElementById('hamburgerModal');
  if (m) m.classList.add('show');
}

function renderSettingsModal() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const diffs = isEn ? {
    easy: '🟢 Easy (Casual)',
    normal: '🔵 Normal (Standard)',
    hard: '🟠 Hard (Challenging)',
    extreme: '🔴 Extreme (Realistic)'
  } : {
    easy: '🟢 Mudah (Santai)',
    normal: '🔵 Normal (Standar)',
    hard: '🟠 Sulit (Tantangan)',
    extreme: '🔴 Ekstrem (Realistis)'
  };
  const diffEl = document.getElementById('settingsDifficulty');
  const termEl = document.getElementById('settingsTerm');
  if (diffEl) diffEl.textContent = diffs[state.selectedDiff || 'normal'] || (isEn ? '🔵 Normal (Standard)' : '🔵 Normal');
  if (termEl) termEl.textContent = isEn ? `Term ${state.term} (Year ${state.year})` : `Periode ${state.term} (Tahun ke-${state.year})`;

  if (typeof AudioManager !== 'undefined') {
    const aStatus = AudioManager.getStatus();
    const sBgm = document.getElementById('sliderBgmVol');
    const sSfx = document.getElementById('sliderSfxVol');
    const chkVoice = document.getElementById('chkVoiceGrunts');
    if (sBgm) sBgm.value = Math.round(aStatus.bgmVolume * 100);
    if (sSfx) sSfx.value = Math.round(aStatus.sfxVolume * 100);
    if (chkVoice) chkVoice.checked = aStatus.voiceEnabled;
  }
}

function renderAchModal() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const achs = [
    { id: 'banjir', title: isEn ? '🌊 Flood-Free Metropolis' : '🌊 Kota Bebas Banjir', desc: isEn ? 'Complete the Urban Drainage Taskforce and construct the Flood-Free Masterplan.' : 'Selesaikan Rantai Drama Drainase & bangun Masterplan Bebas Banjir.', icon: '🏆' },
    { id: 'investasi', title: isEn ? '🏗️ Private Capital Magnet' : '🏗️ Magnet Investor', desc: isEn ? 'Attract trillions in direct private investment and create thousands of local jobs.' : 'Sukses datangkan investasi triliunan & serap ribuan tenaga kerja.', icon: '💼' },
    { id: 'kesehatan', title: isEn ? '👶 Zero-Stunting Generation' : '👶 Generasi Bebas Stunting', desc: isEn ? 'Win national awards for child nutrition, maternal care, and healthcare equity.' : 'Raih penghargaan nasional penanganan stunting anak.', icon: '🏅' },
    { id: 'bersih', title: isEn ? '♻️ Green & Sustainable City' : '♻️ Kota Hijau & Berkelanjutan', desc: isEn ? 'Operate the Waste-to-Energy PLTSa plant and achieve zero-waste urban recycling.' : 'Operasikan PLTSa & wujudkan pengelolaan sampah zero waste.', icon: '🌱' },
    { id: 'digital', title: isEn ? '📱 Digital Governance Pioneer' : '📱 Pelopor Kota Digital', desc: isEn ? 'Rank #1 nationally in E-Government & SPBE Digital Public Services.' : 'Raih peringkat 1 E-Government & SPBE Nasional.', icon: '⚡' }
  ];
  const body = document.getElementById('achModalBody');
  if (!body) return;
  body.innerHTML = achs.map(a => {
    const earned = (state.earnedAch || []).includes(a.id);
    return `
      <div class="achItem ${earned ? 'earned' : ''}">
        <span>${a.icon}</span>
        <div>
          <div style="font-weight:700;font-size:13.5px;">${a.title}</div>
          <small>${a.desc}</small>
        </div>
      </div>
    `;
  }).join('');
}

const ACTOR_EN_INFO = {
  LSM: { name: 'Civil Society & Human Rights NGO', desc: 'Advocates transparency, human rights, and environmental preservation.' },
  Mahasiswa: { name: 'Student Alliance Movement', desc: 'Vocal critics of municipal corruption, social equity, and public welfare.' },
  Pengusaha: { name: 'Local Business Chamber', desc: 'Demands streamlined licensing, regulatory certainty, and low business taxes.' },
  Investor: { name: 'Private Investor Consortium', desc: 'Requires legal guarantees, infrastructure readiness, and growth incentives.' },
  MediaNasional: { name: 'National Media Network', desc: 'Focuses on major headlines, high-profile scandals, and historic breakthroughs.' },
  MediaLokal: { name: 'Regional Press & Journalists', desc: 'Reports daily citizen grievances and local government accountability.' },
  TokohAgama: { name: 'Interfaith Leaders Council', desc: 'Guards communal peace, public morality, and interfaith harmony.' },
  TokohAdat: { name: 'Indigenous Heritage Council', desc: 'Protects customary ancestral lands, cultural identity, and local traditions.' },
  KomunitasLingkungan: { name: 'Green Canopy Coalition', desc: 'Fiercely opposes deforestation, air/water pollution, and loss of green spaces.' },
  SerikatBuruh: { name: 'United Labor Federation', desc: 'Fights for minimum wages (UMK), safe working conditions, and workers\' rights.' },
  ASN: { name: 'Municipal Civil Service Corps', desc: 'Ensures administrative continuity, merit bonuses, and stable career paths.' },
  BPK: { name: 'Regional Audit Board (BPK)', desc: 'Conducts strict statutory audits targeting clean financial ratings (WTP).' },
  KPK: { name: 'Anti-Corruption Agency (KPK)', desc: 'Monitors public procurement, prosecutes graft, and conducts covert stings.' },
  Kejaksaan: { name: 'District Prosecutor Office', desc: 'Enforces statutory compliance, investigates public fraud, and recovers state assets.' },
  Inspektorat: { name: 'Municipal Inspectorate', desc: 'Internal government oversight, administrative integrity, and discipline.' },
  Polri: { name: 'Nusapura City Police (Polresta)', desc: 'Maintains street security, civil order, and traffic enforcement.' },
  Pengembang: { name: 'Property Developers Association', desc: 'Demands zoning permits, housing corridors, and arterial roads.' },
  Akademisi: { name: 'University Expert Council', desc: 'Advocates evidence-based policy, scientific research, and environmental impact studies.' },
  Influencer: { name: 'Digital Creators & Influencers', desc: 'Shapes youth voter opinions, virality, and online public narrative.' },
  DPRD: { name: 'City Parliament (DPRD)', desc: 'Municipal legislature deciding APBD approval, by-laws, and executive oversight.' }
};

function getActorName(key, lang = 'id') {
  if (lang === 'en' && ACTOR_EN_INFO[key]) {
    return ACTOR_EN_INFO[key].name;
  }
  return (typeof ACTORS !== 'undefined' && ACTORS[key]) ? ACTORS[key].name : key;
}

function getActorDesc(key, lang = 'id') {
  if (lang === 'en' && ACTOR_EN_INFO[key]) {
    return ACTOR_EN_INFO[key].desc;
  }
  return (typeof ACTORS !== 'undefined' && ACTORS[key]) ? ACTORS[key].desc : '';
}

function renderActorsModal() {
  if (!state.actors) state.actors = initActors();
  const body = document.getElementById('actorsModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  body.innerHTML = Object.keys(state.actors).map(k => {
    const act = ACTORS[k];
    const rel = state.actors[k].relation;
    let badgeColor = 'var(--blue)';
    if (rel >= 70) badgeColor = 'var(--green)';
    else if (rel <= 35) badgeColor = 'var(--red)';
    const name = isEn && ACTOR_EN_INFO[k] ? ACTOR_EN_INFO[k].name : (act ? act.name : k);
    const desc = isEn && ACTOR_EN_INFO[k] ? ACTOR_EN_INFO[k].desc : (act ? act.desc : '');
    return `
      <div class="v3Row">
        <div class="v3RowHead">
          <span>${act ? act.icon : '👥'} ${name}</span>
          <span style="font-weight:700;color:${badgeColor};font-size:12px;">${isEn ? 'Relation:' : 'Hubungan:'} ${rel}%</span>
        </div>
        <div class="v3RowSub">${desc}</div>
        <div class="hudBarTrack" style="margin-top:6px;"><div class="hudBarFill" style="width:${rel}%;background:${badgeColor};"></div></div>
      </div>
    `;
  }).join('');
}

function initCabinet() {
  return [
    {
      id: 'sekda',
      role: 'Sekretaris Daerah (Sekda)',
      role_en: 'Regional Secretary (City Admin Chief)',
      deptKey: 'asn',
      name: 'Drs. H. Mulyadi, M.M.',
      avatar: '👔',
      integritas: 86,
      loyalitas: 90,
      kinerja: 88,
      pengalaman: '18 Tahun',
      pengalaman_en: '18 Years Exp.',
      status: 'Aktif',
      desc: 'Pimpinan birokrasi tertinggi ASN, penanggung jawab administrasi & anggaran.',
      desc_en: 'Supreme civil service bureaucratic commander, overseeing citywide administration and budgeting.',
      affinityActor: 'ASN'
    },
    {
      id: 'bappeda',
      role: 'Kepala Bappeda',
      role_en: 'Head of Regional Planning Agency (Bappeda)',
      deptKey: 'bappeda',
      name: 'Dr. Ir. Anisa Putri, M.Sc.',
      avatar: '📊',
      integritas: 92,
      loyalitas: 85,
      kinerja: 90,
      pengalaman: '14 Tahun',
      pengalaman_en: '14 Years Exp.',
      status: 'Aktif',
      desc: 'Arsitek tata kota dan tata kelola perencanaan investasi daerah.',
      desc_en: 'Chief urban architect orchestrating masterplans and regional investment zoning.',
      affinityActor: 'Akademisi'
    },
    {
      id: 'bpkad',
      role: 'Kepala BPKAD',
      role_en: 'Head of Financial & Asset Management (BPKAD)',
      deptKey: 'finance',
      name: 'Dedi Kurniawan, S.E., Ak.',
      avatar: '💰',
      integritas: 82,
      loyalitas: 80,
      kinerja: 87,
      pengalaman: '13 Tahun',
      pengalaman_en: '13 Years Exp.',
      status: 'Aktif',
      desc: 'Pengelola kas daerah, belanja APBD, dan pelaporan aset daerah.',
      desc_en: 'Treasurer of municipal accounts, expenditure controller, and asset manager.',
      affinityActor: 'BPK'
    },
    {
      id: 'inspektorat',
      role: 'Kepala Inspektorat',
      role_en: 'Head of City Inspectorate General',
      deptKey: 'audit',
      name: 'H. Farhan Basri, S.H., M.H.',
      avatar: '🔍',
      integritas: 95,
      loyalitas: 82,
      kinerja: 91,
      pengalaman: '17 Tahun',
      pengalaman_en: '17 Years Exp.',
      status: 'Aktif',
      desc: 'Pengawas internal daerah, penindak pelanggaran & indikasi korupsi.',
      desc_en: 'Chief internal watchdog investigating ethical breaches and anti-graft safeguards.',
      affinityActor: 'KPK'
    },
    {
      id: 'pupr',
      role: 'Kadis PUPR',
      role_en: 'Head of Public Works & Spatial Planning (PUPR)',
      deptKey: 'infra',
      name: 'Ir. Hendra Wijaya, M.T.',
      avatar: '🏗️',
      integritas: 68,
      loyalitas: 78,
      kinerja: 84,
      pengalaman: '15 Tahun',
      pengalaman_en: '15 Years Exp.',
      status: 'Aktif',
      desc: 'Penanggung jawab pembangunan fisik, jalan, jembatan, dan drainase.',
      desc_en: 'Supervisor of civil engineering, arterial roads, flood drainage, and public utilities.',
      affinityActor: 'Pengembang'
    },
    {
      id: 'diskes',
      role: 'Kadis Kesehatan',
      role_en: 'Head of Health Department (Dinkes)',
      deptKey: 'health',
      name: 'dr. Siti Rahmawati, Sp.KK',
      avatar: '👩‍⚕️',
      integritas: 88,
      loyalitas: 82,
      kinerja: 86,
      pengalaman: '12 Tahun',
      pengalaman_en: '12 Years Exp.',
      status: 'Aktif',
      desc: 'Pengelola RSUD, Puskesmas, dan penanganan pencegahan stunting.',
      desc_en: 'Commander of public hospitals, community clinics, and stunting eradication programs.',
      affinityActor: 'LSM'
    },
    {
      id: 'disdik',
      role: 'Kadis Pendidikan',
      role_en: 'Head of Education Department (Disdik)',
      deptKey: 'edu',
      name: 'Prof. Suparno, M.Pd.',
      avatar: '🎓',
      integritas: 80,
      loyalitas: 75,
      kinerja: 84,
      pengalaman: '20 Tahun',
      pengalaman_en: '20 Years Exp.',
      status: 'Aktif',
      desc: 'Penanggung jawab mutu sekolah negeri & beasiswa siswa kurang mampu.',
      desc_en: 'Director of public schools quality standards and underprivileged scholarship distributions.',
      affinityActor: 'Mahasiswa'
    },
    {
      id: 'dlh',
      role: 'Kadis Lingkungan Hidup',
      role_en: 'Head of Environmental Agency (DLH)',
      deptKey: 'env',
      name: 'Dra. Tari Lestari, M.Si.',
      avatar: '🌱',
      integritas: 90,
      loyalitas: 80,
      kinerja: 78,
      pengalaman: '10 Tahun',
      pengalaman_en: '10 Years Exp.',
      status: 'Aktif',
      desc: 'Penanggung jawab TPA sampah, energi hijau PLTSa, dan RTH kota.',
      desc_en: 'Director of waste management landfills, waste-to-energy power, and green canopy reserves.',
      affinityActor: 'KomunitasLingkungan'
    },
    {
      id: 'dishub',
      role: 'Kadis Perhubungan',
      role_en: 'Head of Transportation Department (Dishub)',
      deptKey: 'traffic',
      name: 'Bambang Sukoco, A.Td.',
      avatar: '🚌',
      integritas: 72,
      loyalitas: 70,
      kinerja: 75,
      pengalaman: '11 Tahun',
      pengalaman_en: '11 Years Exp.',
      status: 'Aktif',
      desc: 'Pengelola lalu lintas, armada bus listrik, dan retribusi parkir.',
      desc_en: 'Manager of urban traffic signals, municipal bus networks, and parking retribution.',
      affinityActor: 'Polri'
    },
    {
      id: 'umkm',
      role: 'Kadis Koperasi & UMKM',
      role_en: 'Head of Cooperatives & SME Department',
      deptKey: 'economy',
      name: 'Hj. Ratna Maya, S.E.',
      avatar: '🏬',
      integritas: 84,
      loyalitas: 88,
      kinerja: 80,
      pengalaman: '9 Tahun',
      pengalaman_en: '9 Years Exp.',
      status: 'Aktif',
      desc: 'Pembina pasar tradisional, pasar murah, dan permodalan UMKM.',
      desc_en: 'Facilitator of traditional public markets, fair bazaars, and micro-enterprise capital.',
      affinityActor: 'Pengusaha'
    },
    {
      id: 'satpol',
      role: 'Kasat Satpol PP',
      role_en: 'Head of Municipal Police (Satpol PP)',
      deptKey: 'crime',
      name: 'Kolonel (Purn) Herman S.',
      avatar: '🛡️',
      integritas: 76,
      loyalitas: 85,
      kinerja: 83,
      pengalaman: '16 Tahun',
      pengalaman_en: '16 Years Exp.',
      status: 'Aktif',
      desc: 'Penegak Perda, penertiban pedagang/parkir liar, dan ketertiban kota.',
      desc_en: 'Enforcer of municipal bylaws, public peace, and clearance of unlawful street stalls.',
      affinityActor: 'Polri'
    }
  ];
}

function getCorruptionRisk() {
  if (!state.cabinet || !Array.isArray(state.cabinet) || state.cabinet.length === 0) {
    state.cabinet = initCabinet();
  }
  const active = state.cabinet.filter(c => c.status === 'Aktif');
  const avgIntegritas = active.length > 0
    ? Math.round(active.reduce((acc, c) => acc + (c.integritas || 80), 0) / active.length)
    : 80;

  const operasional = (state.budgetAlloc && state.budgetAlloc.operasional) ? state.budgetAlloc.operasional : 10;
  let riskBonus = 0;
  if (operasional < 8) riskBonus = 12;
  else if (operasional > 15) riskBonus = -6;

  let auditReduction = 0;
  if (state.integritySystems && Array.isArray(state.integritySystems)) {
    state.integritySystems.forEach(sys => {
      if (sys.active) {
        if (sys.id === 'audit_bpk') auditReduction += 25;
        else if (sys.id === 'ebudget') auditReduction += 20;
        else if (sys.id === 'ekatalog') auditReduction += 15;
        else if (sys.id === 'whistle') auditReduction += 10;
        else auditReduction += 10;
      }
    });
  }

  const extraMod = state.riskModifier || 0;
  const netRisk = Math.max(5, Math.min(95, Math.round(100 - avgIntegritas + riskBonus - auditReduction + extraMod)));
  state.risk = netRisk;
  return netRisk;
}

function calculateCabinetStats() {
  if (!state.cabinet || !Array.isArray(state.cabinet) || state.cabinet.length === 0) {
    state.cabinet = initCabinet();
  }
  const active = state.cabinet.filter(c => c.status === 'Aktif');
  if (active.length === 0) return { avgIntegritas: 80, avgKinerja: 80, avgLoyalitas: 80, riskKorupsi: 15 };

  const sumIntegritas = active.reduce((acc, c) => acc + (c.integritas || 80), 0);
  const sumKinerja = active.reduce((acc, c) => acc + (c.kinerja || 80), 0);
  const sumLoyalitas = active.reduce((acc, c) => acc + (c.loyalitas || 80), 0);

  const avgIntegritas = Math.round(sumIntegritas / active.length);
  const avgKinerja = Math.round(sumKinerja / active.length);
  const avgLoyalitas = Math.round(sumLoyalitas / active.length);

  const riskKorupsi = getCorruptionRisk();

  return { avgIntegritas, avgKinerja, avgLoyalitas, riskKorupsi };
}

function syncCabinetTranslations() {
  if (!state || !state.cabinet || !Array.isArray(state.cabinet)) return;
  const canonical = typeof initCabinet === 'function' ? initCabinet() : [];
  state.cabinet.forEach(c => {
    const match = canonical.find(x => x.id === c.id || x.deptKey === c.deptKey);
    if (match) {
      if (!c.role_en) c.role_en = match.role_en;
      if (!c.desc_en) c.desc_en = match.desc_en;
      if (!c.pengalaman_en) c.pengalaman_en = match.pengalaman_en;
    }
  });
}

function renderCabinetModal() {
  if (!state.cabinet || !Array.isArray(state.cabinet) || state.cabinet.length === 0) {
    state.cabinet = initCabinet();
  }
  syncCabinetTranslations();
  const body = document.getElementById('cabinetModalBody');
  if (!body) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const cStats = calculateCabinetStats();

  let html = `
    <div style="background:rgba(255,255,255,0.04);border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:700;font-size:13px;color:#fff;">${isEn ? '📊 CABINET PERFORMANCE & INTEGRITY' : '📊 PERFORMA DERAJAT KABINET'}</span>
        <span style="font-size:11px;color:var(--gray-400);">${state.cabinet.filter(c => c.status === 'Aktif').length} ${isEn ? 'Active Agency Chiefs' : 'Pejabat Aktif'}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;">
        <div style="background:rgba(0,0,0,0.25);padding:8px;border-radius:8px;">
          <div style="font-size:10px;color:var(--gray-400);">${isEn ? 'Integrity Index' : 'Indeks Integritas'}</div>
          <div style="font-size:15px;font-weight:800;color:${cStats.avgIntegritas >= 80 ? 'var(--green)' : 'var(--amber)'}">${cStats.avgIntegritas}%</div>
        </div>
        <div style="background:rgba(0,0,0,0.25);padding:8px;border-radius:8px;">
          <div style="font-size:10px;color:var(--gray-400);">${isEn ? 'Avg Performance' : 'Rata-Rata Kinerja'}</div>
          <div style="font-size:15px;font-weight:800;color:var(--blue-soft);">${cStats.avgKinerja}%</div>
        </div>
        <div style="background:rgba(0,0,0,0.25);padding:8px;border-radius:8px;">
          <div style="font-size:10px;color:var(--gray-400);">${isEn ? 'Corruption Risk' : 'Risiko Korupsi'}</div>
          <div style="font-size:15px;font-weight:800;color:${cStats.riskKorupsi <= 25 ? 'var(--green)' : 'var(--red)'}">${cStats.riskKorupsi}%</div>
        </div>
      </div>
    </div>
  `;

  html += state.cabinet.map(c => {
    let statusText = isEn ? 'Active' : 'Aktif';
    let statusBadge = `<span style="background:rgba(62,207,142,0.15);color:var(--green);font-size:11px;padding:2px 8px;border-radius:10px;font-weight:700;">${statusText}</span>`;
    if (c.status === 'Dipecat') {
      statusBadge = `<span style="background:rgba(242,89,107,0.15);color:var(--red);font-size:11px;padding:2px 8px;border-radius:10px;font-weight:700;">${isEn ? 'Dismissed' : 'Dipecat'}</span>`;
    } else if (c.status === 'Dimutasi') {
      statusBadge = `<span style="background:rgba(245,181,68,0.15);color:var(--amber);font-size:11px;padding:2px 8px;border-radius:10px;font-weight:700;">${isEn ? 'Transferred' : 'Dimutasi'}</span>`;
    }

    const defaultKadis = (typeof initCabinet === 'function') ? initCabinet().find(x => x.id === c.id || x.deptKey === c.deptKey) : null;
    const expText = isEn
      ? (c.pengalaman_en || (defaultKadis && defaultKadis.pengalaman_en) || (c.pengalaman ? c.pengalaman.replace('Tahun', 'Years') : ''))
      : c.pengalaman;
    const roleText = isEn
      ? (c.role_en || (defaultKadis && defaultKadis.role_en) || c.role)
      : c.role;
    const descText = isEn
      ? (c.desc_en || (defaultKadis && defaultKadis.desc_en) || c.desc)
      : c.desc;

    return `
      <div class="v3Row" style="padding:12px;margin-bottom:10px;">
        <div class="v3RowHead" style="align-items:flex-start;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:22px;">${c.avatar || '👤'}</span>
            <div>
              <div style="font-weight:700;color:#fff;font-size:13.5px;">${c.name}</div>
              <div style="font-size:11px;color:var(--blue-soft);">${roleText} • ${expText}</div>
            </div>
          </div>
          <div>${statusBadge}</div>
        </div>
        <div class="v3RowSub" style="margin:6px 0 8px 0;font-size:11.5px;color:var(--gray-400);">${descText}</div>
        
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px;font-size:11px;">
          <div>
            <div style="display:flex;justify-content:space-between;color:var(--gray-400);"><span>${isEn ? 'Integrity' : 'Integritas'}</span><b>${c.integritas}%</b></div>
            <div class="indBarTrack"><div class="indBarFill" style="width:${c.integritas}%;background:${c.integritas >= 80 ? 'var(--green)' : 'var(--red)'};"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;color:var(--gray-400);"><span>${isEn ? 'Loyalty' : 'Loyalitas'}</span><b>${c.loyalitas}%</b></div>
            <div class="indBarTrack"><div class="indBarFill" style="width:${c.loyalitas}%;background:var(--blue);"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;color:var(--gray-400);"><span>${isEn ? 'Performance' : 'Kinerja'}</span><b>${c.kinerja}%</b></div>
            <div class="indBarTrack"><div class="indBarFill" style="width:${c.kinerja}%;background:var(--amber);"></div></div>
          </div>
        </div>

        <div style="display:flex;gap:8px;justify-content:flex-end;">
          <button class="backMenuBtn" style="font-size:11px;padding:4px 10px;border-color:rgba(245,181,68,0.4);color:var(--amber);" onclick="promptMutateCabinetMember('${c.id}')">${isEn ? '🔄 Reshuffle / Transfer' : '🔄 Mutasi Posisi'}</button>
          <button class="backMenuBtn" style="font-size:11px;padding:4px 10px;border-color:rgba(242,89,107,0.4);color:var(--red);" onclick="fireCabinetMemberPrompt('${c.id}')">${isEn ? '🚫 Dismiss Official' : '🚫 Pecat Pejabat'}</button>
        </div>
      </div>
    `;
  }).join('');

  body.innerHTML = html;
}

function fireCabinetMemberPrompt(memberId) {
  const c = state.cabinet.find(x => x.id === memberId);
  if (!c) return;

  const confirmModal = document.getElementById('v3ConfirmModal');
  const confirmTitle = document.getElementById('v3ConfirmTitle');
  const confirmBody = document.getElementById('v3ConfirmBody');
  const btnYes = document.getElementById('v3ConfirmYes');
  const btnNo = document.getElementById('v3ConfirmNo');

  if (!confirmModal || !confirmTitle || !confirmBody || !btnYes || !btnNo) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  confirmTitle.textContent = isEn ? `🚫 Confirm Official Dismissal` : `🚫 Konfirmasi Pecat Pejabat`;
  confirmBody.innerHTML = isEn ? `
    Are you sure you want to dismiss <b>${c.name}</b> (${c.role_en || c.role})?<br><br>
    <b>Official Stats:</b> Integrity: ${c.integritas}% | Performance: ${c.kinerja}%<br><br>
    Select successor candidate profile:
    <select id="replacementTypeSelect" style="width:100%;margin-top:8px;padding:8px;background:#1a2333;color:#fff;border:1px solid var(--line);border-radius:8px;">
      <option value="profesional">🎓 Professional & Scholar (Integrity 92%, Performance 88%)</option>
      <option value="asn">👔 Senior Civil Servant Promotion (Loyalty 90%, Performance 80%)</option>
      <option value="politik">🤝 Parliamentary DPRD Endorsement (Coalition +10, Integrity 68%)</option>
    </select>
  ` : `
    Apakah Anda yakin ingin memecat <b>${c.name}</b> (${c.role})?<br><br>
    <b>Statistik Pejabat:</b> Integritas: ${c.integritas}% | Kinerja: ${c.kinerja}%<br><br>
    Pilih profil pengganti pejabat baru:
    <select id="replacementTypeSelect" style="width:100%;margin-top:8px;padding:8px;background:#1a2333;color:#fff;border:1px solid var(--line);border-radius:8px;">
      <option value="profesional">🎓 Profesional & Akademisi (Integritas 92%, Kinerja 88%)</option>
      <option value="asn">👔 Promosi Senior ASN (Loyalitas 90%, Kinerja 80%)</option>
      <option value="politik">🤝 Rekomendasi Politik DPRD (Tambah Relasi Koalisi +10, Integritas 68%)</option>
    </select>
  `;

  if (btnYes) btnYes.textContent = isEn ? 'Yes, Dismiss' : 'Ya, Pecat';
  if (btnNo) btnNo.textContent = isEn ? 'Cancel' : 'Batal';

  confirmModal.classList.add('show');

  btnYes.onclick = function() {
    confirmModal.classList.remove('show');
    const sel = document.getElementById('replacementTypeSelect');
    const type = sel ? sel.value : 'profesional';
    executeFireCabinetMember(memberId, type);
  };

  btnNo.onclick = function() {
    confirmModal.classList.remove('show');
  };
}

function executeFireCabinetMember(memberId, replacementType) {
  const idx = state.cabinet.findIndex(x => x.id === memberId);
  if (idx === -1) return;

  const old = state.cabinet[idx];
  let satDiff = 0;
  let newsText = '';
  let newsTextEn = '';

  if (old.integritas < 75) {
    satDiff = 4;
    newsText = `Walikota memecat ${old.role} (${old.name}) terkait kinerja & dugaan integritas rendah. Kepuasan publik naik!`;
    newsTextEn = `Mayor dismissed ${old.role} (${old.name}) citing poor performance & integrity risks. Public trust rises!`;
    updateActorRelations({ KPK: 5, LSM: 6, ASN: -3 });
  } else {
    satDiff = -4;
    newsText = `Pemecatan ${old.role} (${old.name}) menuai kontroversi di kalangan birokrasi.`;
    newsTextEn = `Dismissal of ${old.role} (${old.name}) sparks bureaucratic controversy.`;
    updateActorRelations({ ASN: -7, MediaLokal: -4 });
  }

  state.sat = Math.max(10, Math.min(100, state.sat + satDiff));

  let newMember = {
    id: old.id,
    role: old.role,
    role_en: old.role_en,
    deptKey: old.deptKey,
    pengalaman: '10 Tahun',
    pengalaman_en: '10 Years Exp.',
    status: 'Aktif',
    desc: old.desc,
    desc_en: old.desc_en,
    affinityActor: old.affinityActor
  };

  if (replacementType === 'profesional') {
    newMember.name = 'Dr. ' + getRandomLastName() + ', M.Si (Plt)';
    newMember.avatar = '🎓';
    newMember.integritas = 92;
    newMember.loyalitas = 82;
    newMember.kinerja = 88;
  } else if (replacementType === 'asn') {
    newMember.name = 'Drs. ' + getRandomLastName() + ', M.M. (Plt)';
    newMember.avatar = '👔';
    newMember.integritas = 82;
    newMember.loyalitas = 92;
    newMember.kinerja = 80;
    updateActorRelations({ ASN: 6 });
  } else {
    newMember.name = 'H. ' + getRandomLastName() + ', S.H. (Plt)';
    newMember.avatar = '🤝';
    newMember.integritas = 68;
    newMember.loyalitas = 78;
    newMember.kinerja = 78;
    updateActorRelations({ DPRD: 10 });
  }

  state.cabinet[idx] = newMember;
  state.news.unshift({
    year: `Thn ${state.year}`,
    year_en: `Yr ${state.year}`,
    text: newsText,
    text_en: newsTextEn,
    mood: satDiff >= 0 ? 1 : -1
  });

  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `🚫 ${old.name} officially dismissed. ${newMember.name} appointed as successor!` : `🚫 ${old.name} resmi dipecat. ${newMember.name} ditunjuk sebagai pengganti!`);
  renderCabinetModal();
  updateHUD();
  saveGame();
}

function getRandomLastName() {
  const names = ['Suryadi', 'Pratama', 'Nugroho', 'Wibowo', 'Kusuma', 'Santoso', 'Hidayat', 'Saputra', 'Firmansyah', 'Ginting', 'Siregar', 'Lubis', 'Nasution', 'Situmorang', 'Tanjung', 'Wardhana', 'Subagyo', 'Utomo'];
  return names[Math.floor(Math.random() * names.length)];
}

/* ==================== SISTEM MUTASI & ROTASI PEJABAT KABINET ==================== */
let currentMutateMemberId = null;
let currentMutateMode = 'replace'; // 'replace' | 'swap'
let currentMutateCandidates = [];
let selectedCandidateIdx = 0;
let selectedSwapTargetId = null;

function generateIndonesianOfficialName(role, deptKey) {
  const maleFirst = ['Agus', 'Bambang', 'Hendra', 'Wahyu', 'Tri', 'Eko', 'Fajar', 'Dian', 'Bayu', 'Arif', 'Surya', 'Iwan', 'Yusuf', 'Iman', 'Prasetyo', 'Gunawan', 'Hartono'];
  const femaleFirst = ['Sri', 'Rina', 'Dewi', 'Endang', 'Anisa', 'Ratna', 'Tari', 'Maya', 'Siti', 'Yuliana', 'Fitri', 'Nurul', 'Indah'];
  const isFemale = Math.random() < 0.35;
  const firstName = isFemale ? femaleFirst[Math.floor(Math.random() * femaleFirst.length)] : maleFirst[Math.floor(Math.random() * maleFirst.length)];
  const lastName = getRandomLastName();

  let prefix = '';
  let suffix = '';

  const roleLower = (role || '').toLowerCase();
  if (deptKey === 'health' || roleLower.includes('kesehatan')) {
    prefix = 'dr. ';
    const docSuffixes = [', Sp.A', ', Sp.PD', ', Sp.KK', ', M.Kes', ', MARS'];
    suffix = docSuffixes[Math.floor(Math.random() * docSuffixes.length)];
  } else if (deptKey === 'infra' || roleLower.includes('pupr')) {
    prefix = 'Ir. ';
    const engSuffixes = [', M.T.', ', M.Eng', ', IPU', ', M.Si'];
    suffix = engSuffixes[Math.floor(Math.random() * engSuffixes.length)];
  } else if (deptKey === 'edu' || roleLower.includes('pendidikan')) {
    prefix = Math.random() < 0.4 ? 'Prof. ' : 'Dr. ';
    suffix = ', M.Pd.';
  } else if (deptKey === 'crime' || roleLower.includes('satpol')) {
    prefix = Math.random() < 0.5 ? 'Kolonel (Purn) ' : (isFemale ? 'Dra. ' : 'Drs. ');
    suffix = isFemale ? ', M.AP' : ', S.H., M.Si';
  } else if (deptKey === 'audit' || roleLower.includes('inspektorat')) {
    prefix = isFemale ? 'Dra. ' : 'Drs. ';
    suffix = ', S.H., M.H., CFrA';
  } else if (deptKey === 'finance' || roleLower.includes('bpkad')) {
    prefix = isFemale ? 'Hj. ' : 'H. ';
    suffix = ', S.E., Ak., M.M.';
  } else {
    const prefixes = isFemale ? ['Dra. ', 'Dr. ', 'Hj. ', ''] : ['Drs. ', 'Ir. ', 'Dr. ', 'H. '];
    const suffixes = [', M.Si', ', M.M.', ', M.AP', ', S.STP, M.AP', ', S.E., M.Si'];
    prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  }

  return `${prefix}${firstName} ${lastName}${suffix}`;
}

function promptMutateCabinetMember(memberId) {
  const c = state.cabinet.find(x => x.id === memberId);
  if (!c) return;

  currentMutateMemberId = memberId;
  currentMutateMode = 'replace';
  selectedCandidateIdx = 0;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  currentMutateCandidates = [
    {
      type: 'teknokrat',
      name: generateIndonesianOfficialName(c.role, c.deptKey),
      avatar: '🎓',
      label: isEn ? 'Technocrat & Meritocracy' : 'Jalur Teknokrat & Integritas Tinggi',
      label_en: 'Technocrat & Meritocracy',
      integritas: 89 + Math.floor(Math.random() * 6),
      kinerja: 87 + Math.floor(Math.random() * 6),
      loyalitas: 75 + Math.floor(Math.random() * 7),
      pengalaman: `${9 + Math.floor(Math.random() * 5)} Tahun`,
      pengalaman_en: `${9 + Math.floor(Math.random() * 5)} Years Exp.`,
      desc: 'Ahli kebijakan berbasis data & meritokrasi. Memangkas risiko korupsi dinas dan menertibkan anggaran.',
      desc_en: 'Data-driven policy expert. Drastically minimizes corruption risk and optimizes budget execution.',
      perk: isEn ? '🛡️ Corruption Risk -8% & Infrastructure Precision' : '🛡️ Risiko Korupsi -8% & Ketepatan Anggaran',
      perk_en: '🛡️ Corruption Risk -8% & Infrastructure Precision'
    },
    {
      type: 'asn_senior',
      name: generateIndonesianOfficialName(c.role, c.deptKey),
      avatar: '👔',
      label: isEn ? 'Career Senior Civil Servant' : 'Jalur Pamong Senior ASN (Karier)',
      label_en: 'Career Senior Civil Servant',
      integritas: 82 + Math.floor(Math.random() * 6),
      kinerja: 80 + Math.floor(Math.random() * 6),
      loyalitas: 93 + Math.floor(Math.random() * 6),
      pengalaman: `${15 + Math.floor(Math.random() * 7)} Tahun`,
      pengalaman_en: `${15 + Math.floor(Math.random() * 7)} Years Exp.`,
      desc: 'Birokrat senior berpengalaman tinggi. Sangat patuh pada arahan Walikota dan menjaga soliditas pegawai dinas.',
      desc_en: 'Veteran bureaucrat with deep departmental respect. Solid loyalty to the Mayor and internal unity.',
      perk: isEn ? '🤝 High Bureaucratic Loyalty & ASN Harmony' : '🤝 Loyalitas Tertinggi & Harmoni ASN',
      perk_en: '🤝 High Bureaucratic Loyalty & ASN Harmony'
    },
    {
      type: 'inovator_muda',
      name: generateIndonesianOfficialName(c.role, c.deptKey),
      avatar: '⚡',
      label: isEn ? 'Young Reformer & Fast Service' : 'Jalur Aparatur Muda & Pelayanan Cepat',
      label_en: 'Young Reformer & Fast Service',
      integritas: 85 + Math.floor(Math.random() * 5),
      kinerja: 93 + Math.floor(Math.random() * 6),
      loyalitas: 74 + Math.floor(Math.random() * 8),
      pengalaman: `${7 + Math.floor(Math.random() * 5)} Tahun`,
      pengalaman_en: `${7 + Math.floor(Math.random() * 5)} Years Exp.`,
      desc: 'Pejabat generasi baru yang responsif aduan warga, cepat menuntaskan proyek, dan mendorong digitalisasi.',
      desc_en: 'Agile digital native official. Swiftly resolves public complaints and accelerates citizen-facing services.',
      perk: isEn ? '⚡ Public Satisfaction +3% & Rapid Response' : '⚡ Kepuasan Publik +3% & Respons Kilat',
      perk_en: '⚡ Public Satisfaction +3% & Rapid Response'
    }
  ];

  const otherMembers = state.cabinet.filter(x => x.id !== memberId && x.status === 'Aktif');
  selectedSwapTargetId = otherMembers.length > 0 ? otherMembers[0].id : null;

  renderMutateModalHeader(c);

  const mTitle = document.getElementById('mutateModalTitle');
  const mSub = document.getElementById('mutateModalSub');
  const tabRep = document.getElementById('mutateTabReplaceLabel');
  const tabSwp = document.getElementById('mutateTabSwapLabel');
  const btnExec = document.getElementById('btnExecuteMutate');
  if (mTitle) mTitle.textContent = isEn ? '🔄 Executive Reshuffle & Transfer' : '🔄 Mutasi & Rotasi Pejabat Daerah';
  if (mSub) mSub.textContent = isEn ? 'Mayoral Decree for Structural Transfers of Senior Municipal Officials (Echelon II).' : 'Surat Keputusan (SK) Walikota Pengalihan Tugas Jabatan Pimpinan Tinggi Pratama (Eselon II).';
  if (tabRep) tabRep.textContent = isEn ? 'Replace Official (To Advisory)' : 'Ganti Pejabat (Ke Staf Ahli)';
  if (tabSwp) tabSwp.textContent = isEn ? 'Cross-Departmental Swap' : 'Rotasi Silang Antar-Dinas';
  if (btnExec) btnExec.textContent = isEn ? '📜 Issue Mutation Decree' : '📜 Terbitkan SK Mutasi';

  switchMutateMode('replace');

  const modal = document.getElementById('cabinetMutateModal');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
  }
}

function renderMutateModalHeader(c) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const officerCard = document.getElementById('mutateCurrentOfficerCard');
  if (!officerCard) return;

  const expText = isEn ? (c.pengalaman_en || c.pengalaman.replace('Tahun', 'Years')) : c.pengalaman;

  officerCard.innerHTML = `
    <div style="background:rgba(245,181,68,0.08);border:1px solid rgba(245,181,68,0.3);border-radius:10px;padding:10px 12px;">
      <div style="font-size:10.5px;color:var(--amber);font-weight:800;letter-spacing:0.5px;margin-bottom:6px;">
        ${isEn ? 'OFFICIAL BEING TRANSFERRED / RESHUFFLED:' : 'PEJABAT YANG AKAN DIMUTASI / DIROTASI:'}
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:26px;">${c.avatar || '👤'}</span>
        <div style="flex:1;">
          <div style="font-weight:800;color:#fff;font-size:14px;">${c.name}</div>
          <div style="font-size:11.5px;color:var(--blue-soft);">${c.role_en && isEn ? c.role_en : c.role} • ${expText}</div>
        </div>
        <div style="text-align:right;">
          <span style="background:rgba(245,181,68,0.2);color:var(--amber);border:1px solid rgba(245,181,68,0.4);font-size:10.5px;padding:3px 8px;border-radius:6px;font-weight:700;">
            ${isEn ? 'Current Chief' : 'Kadis Petahana'}
          </span>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px;font-size:10.5px;color:var(--gray-400);">
        <div>${isEn ? 'Integrity' : 'Integritas'}: <b style="color:${c.integritas >= 80 ? 'var(--green)' : 'var(--red)'};">${c.integritas}%</b></div>
        <div>${isEn ? 'Loyalty' : 'Loyalitas'}: <b style="color:var(--blue-soft);">${c.loyalitas}%</b></div>
        <div>${isEn ? 'Performance' : 'Kinerja'}: <b style="color:var(--amber);">${c.kinerja}%</b></div>
      </div>
    </div>
  `;
}

function switchMutateMode(mode) {
  currentMutateMode = mode;
  const btnReplace = document.getElementById('mutateTabBtnReplace');
  const btnSwap = document.getElementById('mutateTabBtnSwap');

  if (btnReplace && btnSwap) {
    if (mode === 'replace') {
      btnReplace.classList.add('active');
      btnSwap.classList.remove('active');
    } else {
      btnReplace.classList.remove('active');
      btnSwap.classList.add('active');
    }
  }

  renderMutateModalBody();
}

function renderMutateModalBody() {
  const bodyArea = document.getElementById('mutateModalBodyArea');
  if (!bodyArea) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const c = state.cabinet.find(x => x.id === currentMutateMemberId);
  if (!c) return;

  if (currentMutateMode === 'replace') {
    let html = `
      <div style="font-size:11.5px;color:var(--gray-300);margin-bottom:10px;line-height:1.4;">
        ${isEn
          ? `<b>${c.name}</b> will be reassigned out to the <i>Mayor's Executive Advisory Staff</i>. Select the new appointed Chief from the verified talent assessment pool for <b>${c.role_en || c.role}</b>:`
          : `<b>${c.name}</b> akan dimutasi menjadi <i>Staf Ahli Walikota</i> (non-operasional dinas). Pilih figur pejabat baru yang akan dilantik memimpin <b>${c.role}</b>:`}
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;max-height:36vh;overflow-y:auto;padding-right:4px;">
    `;

    currentMutateCandidates.forEach((cand, idx) => {
      const isSelected = selectedCandidateIdx === idx;
      const cLabel = isEn ? (cand.label_en || cand.label) : cand.label;
      const cDesc = isEn ? (cand.desc_en || cand.desc) : cand.desc;
      const cPerk = isEn ? (cand.perk_en || cand.perk) : cand.perk;
      html += `
        <div onclick="selectMutateCandidate(${idx})" style="cursor:pointer;border:1px solid ${isSelected ? '#f59e0b' : 'rgba(255,255,255,0.1)'};background:${isSelected ? 'rgba(245,181,68,0.12)' : 'rgba(0,0,0,0.25)'};border-radius:10px;padding:10px 12px;transition:all 0.15s ease;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:22px;">${cand.avatar}</span>
              <div>
                <div style="font-weight:800;color:#fff;font-size:13px;">${cand.name}</div>
                <div style="font-size:10.5px;color:#fde68a;font-weight:700;">${cLabel}</div>
              </div>
            </div>
            <input type="radio" name="mutateCandRadio" ${isSelected ? 'checked' : ''} style="margin-top:4px;">
          </div>
          <div style="font-size:11px;color:var(--gray-400);margin:4px 0 6px 0;">${cDesc}</div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:10.5px;border-top:1px solid rgba(255,255,255,0.06);padding-top:6px;">
            <span style="color:var(--green);font-weight:700;">${cPerk}</span>
            <div style="display:flex;gap:8px;color:var(--gray-300);">
              <span>${isEn ? 'Integrity' : 'Integritas'}: <b style="color:#34d399;">${cand.integritas}%</b></span>
              <span>${isEn ? 'Performance' : 'Kinerja'}: <b style="color:#fde68a;">${cand.kinerja}%</b></span>
              <span>${isEn ? 'Loyalty' : 'Loyalitas'}: <b style="color:#60a5fa;">${cand.loyalitas}%</b></span>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    bodyArea.innerHTML = html;
  } else {
    // SWAP MODE
    const otherMembers = state.cabinet.filter(x => x.id !== currentMutateMemberId && x.status === 'Aktif');
    if (otherMembers.length === 0) {
      bodyArea.innerHTML = `<div class="muted" style="padding:16px;text-align:center;">${isEn ? 'No other active agency heads available for cross-transfer.' : 'Tidak ada pejabat aktif lain untuk rotasi silang.'}</div>`;
      return;
    }

    if (!selectedSwapTargetId || !otherMembers.find(x => x.id === selectedSwapTargetId)) {
      selectedSwapTargetId = otherMembers[0].id;
    }

    const target = state.cabinet.find(x => x.id === selectedSwapTargetId) || otherMembers[0];
    const cRole = isEn ? (c.role_en || c.role) : c.role;
    const targetRole = isEn ? (target.role_en || target.role) : target.role;

    let html = `
      <div style="font-size:11.5px;color:var(--gray-300);margin-bottom:10px;line-height:1.4;">
        ${isEn
          ? `Swap position between <b>${c.name}</b> and another department head. Their respective integrity and competence will directly follow them to their newly assigned department:`
          : `Tukar posisi dinas antara <b>${c.name}</b> dengan Kepala Dinas lain di lingkungan Pemkot. Karakter, integritas, dan kapasitas kerja masing-masing akan berpindah ke dinas baru:`}
      </div>

      <div style="margin-bottom:10px;">
        <label style="font-size:11px;color:var(--gray-400);font-weight:700;display:block;margin-bottom:4px;">
          ${isEn ? 'CHOOSE PARTNER DEPARTMENT TO SWAP WITH:' : 'PILIH DINAS TUJUAN UNTUK BERTUKAR JABATAN:'}
        </label>
        <select id="swapTargetSelect" onchange="selectSwapTarget(this.value)" style="width:100%;padding:9px 10px;background:#0f172a;color:#fff;border:1px solid rgba(212,169,79,0.4);border-radius:8px;font-size:12.5px;font-weight:600;">
          ${otherMembers.map(m => {
            const mRole = isEn ? (m.role_en || m.role) : m.role;
            return `
            <option value="${m.id}" ${m.id === selectedSwapTargetId ? 'selected' : ''}>
              ${mRole} — ${m.name} (${isEn ? 'Integrity' : 'Integritas'}: ${m.integritas}%, ${isEn ? 'Performance' : 'Kinerja'}: ${m.kinerja}%)
            </option>
            `;
          }).join('')}
        </select>
      </div>

      <!-- LIVE PREVIEW OF THE SWAP -->
      <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(212,169,79,0.3);border-radius:10px;padding:12px;margin-top:10px;">
        <div style="font-size:10.5px;color:var(--amber);font-weight:800;margin-bottom:8px;text-align:center;">
          ${isEn ? '🔄 SIMULATION OF MUTATION ASSIGNMENTS' : '🔄 HASIL RESTRUKTURISASI ROTASI SILANG'}
        </div>
        <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:center;">
          <div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:8px;text-align:center;">
            <div style="font-size:22px;">${c.avatar || '👤'}</div>
            <div style="font-weight:700;font-size:12px;color:#fff;">${c.name}</div>
            <div style="font-size:10px;color:#f87171;text-decoration:line-through;">${cRole}</div>
            <div style="font-size:11px;color:#34d399;font-weight:800;margin-top:2px;">➡️ ${targetRole}</div>
          </div>
          <div style="font-size:22px;color:var(--amber);font-weight:900;">⇄</div>
          <div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:8px;text-align:center;">
            <div style="font-size:22px;">${target.avatar || '👤'}</div>
            <div style="font-weight:700;font-size:12px;color:#fff;">${target.name}</div>
            <div style="font-size:10px;color:#f87171;text-decoration:line-through;">${targetRole}</div>
            <div style="font-size:11px;color:#34d399;font-weight:800;margin-top:2px;">➡️ ${cRole}</div>
          </div>
        </div>
        <div style="margin-top:10px;font-size:11px;color:var(--gray-400);line-height:1.3;text-align:center;">
          ${isEn
            ? `📌 <b>Strategic Impact:</b> ${c.name} brings ${c.integritas}% integrity to ${targetRole}. ${target.name} brings ${target.integritas}% integrity to ${cRole}.`
            : `📌 <b>Dampak Strategis:</b> ${c.name} membawa integritas ${c.integritas}% ke ${target.role}. ${target.name} membawa integritas ${target.integritas}% ke ${c.role}.`}
        </div>
      </div>
    `;

    bodyArea.innerHTML = html;
  }
}

function selectMutateCandidate(idx) {
  selectedCandidateIdx = idx;
  renderMutateModalBody();
}

function selectSwapTarget(targetId) {
  selectedSwapTargetId = targetId;
  renderMutateModalBody();
}

function closeCabinetMutateModal() {
  const modal = document.getElementById('cabinetMutateModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
}

function confirmExecuteCabinetMutate() {
  const c = state.cabinet.find(x => x.id === currentMutateMemberId);
  if (!c) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (currentMutateMode === 'replace') {
    const cand = currentMutateCandidates[selectedCandidateIdx];
    if (!cand) return;

    const oldName = c.name;
    const oldRole = c.role;
    const oldRoleEn = c.role_en || c.role;
    const oldInteg = c.integritas;

    // Log history
    state.cabinetHistory = state.cabinetHistory || [];
    state.cabinetHistory.unshift({
      type: 'mutasi_staf_ahli',
      oldName: oldName,
      newName: cand.name,
      role: oldRole,
      year: state.year,
      note: `Dimutasi ke Staf Ahli Walikota. ${cand.name} resmi dilantik sebagai ${oldRole}.`
    });

    // GENUINELY MUTATE THE MEMBER!
    c.name = cand.name;
    c.avatar = cand.avatar;
    c.integritas = cand.integritas;
    c.loyalitas = cand.loyalitas;
    c.kinerja = cand.kinerja;
    c.pengalaman = cand.pengalaman;
    c.pengalaman_en = cand.pengalaman_en || cand.pengalaman;
    c.status = 'Aktif';

    // Consequences
    if (oldInteg < 75) {
      state.sat = Math.min(100, (state.sat || 70) + 3);
      updateActorRelations({ KPK: 4, LSM: 4 });
    } else {
      updateActorRelations({ ASN: 3 });
    }

    if (cand.type === 'asn_senior') {
      updateActorRelations({ ASN: 5 });
    } else if (cand.type === 'teknokrat') {
      updateActorRelations({ Akademisi: 4, Mahasiswa: 3 });
    } else if (cand.type === 'inovator_muda') {
      state.sat = Math.min(100, (state.sat || 70) + 2);
      updateActorRelations({ Warga: 3 });
    }

    const newsText = `Walikota menerbitkan SK Mutasi: ${oldName} dimutasi ke Staf Ahli Walikota. ${cand.name} resmi dilantik memimpin ${oldRole}!`;
    const newsTextEn = `Mayor issued Mutation Decree: ${oldName} reassigned to Advisory Staff. ${cand.name} inaugurated as Chief of ${oldRoleEn}!`;

    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: newsText,
      text_en: newsTextEn,
      mood: 1
    });

    showToast(isEn
      ? `🔄 Mutated! ${oldName} transferred to Advisory Staff. ${cand.name} sworn in as ${oldRoleEn}!`
      : `🔄 Mutasi resmi! ${oldName} dialihkan ke Staf Ahli. ${cand.name} resmi menjabat ${oldRole}!`);

  } else {
    // SWAP MODE
    const target = state.cabinet.find(x => x.id === selectedSwapTargetId);
    if (!target) return;

    const name1 = c.name;
    const role1 = c.role;
    const role1En = c.role_en || c.role;

    const name2 = target.name;
    const role2 = target.role;
    const role2En = target.role_en || target.role;

    // Log history
    state.cabinetHistory = state.cabinetHistory || [];
    state.cabinetHistory.unshift({
      type: 'rotasi_silang',
      name1: name1,
      role1: role1,
      name2: name2,
      role2: role2,
      year: state.year,
      note: `Rotasi silang eselon II: ${name1} memimpin ${role2}, ${name2} memimpin ${role1}.`
    });

    // GENUINELY SWAP THE OFFICIALS' ATTRIBUTES
    const temp = {
      name: c.name,
      avatar: c.avatar,
      integritas: c.integritas,
      loyalitas: c.loyalitas,
      kinerja: c.kinerja,
      pengalaman: c.pengalaman,
      pengalaman_en: c.pengalaman_en
    };

    c.name = target.name;
    c.avatar = target.avatar;
    c.integritas = target.integritas;
    c.loyalitas = Math.min(100, target.loyalitas + 2);
    c.kinerja = Math.max(60, target.kinerja - 2);
    c.pengalaman = target.pengalaman;
    c.pengalaman_en = target.pengalaman_en;

    target.name = temp.name;
    target.avatar = temp.avatar;
    target.integritas = temp.integritas;
    target.loyalitas = Math.min(100, temp.loyalitas + 2);
    target.kinerja = Math.max(60, temp.kinerja - 2);
    target.pengalaman = temp.pengalaman;
    target.pengalaman_en = temp.pengalaman_en;

    updateActorRelations({ ASN: 3 });
    state.sat = Math.min(100, (state.sat || 70) + 1);

    const newsText = `Walikota mengesahkan SK Rotasi Silang Eselon II: ${name1} kini memimpin ${role2}, sementara ${name2} dipercaya memimpin ${role1}!`;
    const newsTextEn = `Mayor enacted Cross-Agency Reshuffle: ${name1} now heads ${role2En}, while ${name2} takes command of ${role1En}!`;

    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: newsText,
      text_en: newsTextEn,
      mood: 1
    });

    showToast(isEn
      ? `🔄 Cross-rotation completed! ${name1} ➡️ ${role2En} & ${name2} ➡️ ${role1En}!`
      : `🔄 Rotasi silang tuntas! ${name1} ➡️ ${role2} & ${name2} ➡️ ${role1}!`);
  }

  if (typeof AudioManager !== 'undefined' && AudioManager.playSfx) {
    AudioManager.playSfx('sfx_stempel');
  }

  closeCabinetMutateModal();
  renderCabinetModal();
  updateHUD();
  saveGame();
}

function rotateCabinetMember(memberId) {
  promptMutateCabinetMember(memberId);
}


/* ==================== MUSRENBANG INTERACTIVE DELIBERATION ==================== */
function openMusrenbangModal() {
  state.musrenSelected = state.musrenSelected || [];
  renderMusrenbangModal();
  document.getElementById('musrenbangModal').classList.add('show');
}

var MUSRENBANG_DISTRICTS = [
  {
    id: 'all',
    name: 'Semua Wilayah',
    name_en: 'All 5 Districts',
    icon: '🗺️',
    desc: 'Seluruh usulan aspirasi masyarakat dari 5 kecamatan Kota Nusapura.',
    desc_en: 'All community aspirations across the 5 districts of Nusapura.'
  },
  {
    id: 'sentral',
    name: 'Kecamatan Sentral',
    name_en: 'Sentral District',
    icon: '🏛️',
    role: 'Pusat Pemerintahan & Kawasan Bisnis/Finansial',
    role_en: 'Government Center, Business & Finance Core',
    desc: 'Pusat administrasi Balai Kota, perbankan, hotel berbintang, dan koridor protokol modern.',
    desc_en: 'Seat of city government, financial towers, business hotels, and key metropolitan avenues.'
  },
  {
    id: 'nusajaya',
    name: 'Kecamatan Nusajaya',
    name_en: 'Nusajaya District',
    icon: '🏭',
    role: 'Kawasan Industri, Logistik & Pengembangan Baru',
    role_en: 'Industry, Logistics & Emerging Development',
    desc: 'Kawasan manufaktur padat karya, pergudangan kontainer, kargo, dan pusat pertumbuhan ekonomi baru.',
    desc_en: 'Manufacturing hub, container freight yards, bonded logistics, and emerging urban corridors.'
  },
  {
    id: 'cakrawala',
    name: 'Kecamatan Cakrawala',
    name_en: 'Cakrawala District',
    icon: '🎓',
    role: 'Kawasan Pemukiman, Pusat Pendidikan & Kesehatan',
    role_en: 'Residential Area, Education & Health Hub',
    desc: 'Pemukiman warga, sentra universitas, sekolah unggulan, dan rumah sakit rujukan utama.',
    desc_en: 'Dense residential communities, universities, top schools, and regional public hospitals.'
  },
  {
    id: 'bahari',
    name: 'Kecamatan Bahari',
    name_en: 'Bahari District',
    icon: '🌊',
    role: 'Kawasan Pesisir, Ekonomi Maritim & Pariwisata',
    role_en: 'Coastal Area, Maritime Economy & Tourism',
    desc: 'Dermaga nelayan pesisir, pelabuhan logistik, ekonomi kelautan, dan Nusapura Waterfront.',
    desc_en: 'Artisanal fisheries, seaport terminal, maritime commerce, and the iconic Nusapura Waterfront.'
  },
  {
    id: 'bukitasri',
    name: 'Kecamatan Bukit Asri',
    name_en: 'Bukit Asri District',
    icon: '🌲',
    role: 'Dataran Tinggi, Pertanian, Konservasi & Sabuk Hijau',
    role_en: 'Highland, Agriculture, Conservation & Green Belt',
    desc: 'Perkebunan holtikultura penyangga pangan, kawasan hutan lindung, dan resapan air kota.',
    desc_en: 'Highland agro-farms, regional food basket, eco-conservation forests, and water aquifer recharge.'
  }
];

var MUSRENBANG_PROPOSALS = [
  // 1. KECAMATAN SENTRAL (Government Center, Business & Finance Core)
  {
    id: 'musren_sentral_transit',
    district_id: 'sentral',
    district: 'Kecamatan Sentral (Pusat Pemerintahan & Finansial)',
    district_en: 'Sentral District (Government & Financial Core)',
    icon: '🏛️',
    title: 'Skywalk Pejalan Kaki & Integrasi Koridor Transit Cepat Perkantoran',
    title_en: 'Elevated Pedestrian Skywalk & Central Business Transit Integration',
    cost: 0.14,
    desc: 'Pembangunan jembatan pejalan kaki berkanopi modern yang menghubungkan stasiun transit, kawasan perbankan, dan balai perkantoran untuk memangkas kemacetan jam sibuk.',
    desc_en: 'Constructing modern sheltered skywalks linking mass transit terminals, banking hubs, and civic towers to alleviate rush-hour congestion.',
    impactText: '🚗 Kemacetan Koridor -15%, 💼 Investasi Finansial +12%, ❤️ Kepuasan Warga +18%, APBD -Rp 0.14 T',
    impactText_en: '🚗 Traffic Congestion -15%, 💼 Investment +12%, ❤️ Citizen Approval +18%, APBD -Rp 0.14 T',
    fx: { traffic: -15, inv: 12, sat: 6, apbd: -0.14 }
  },
  {
    id: 'musren_sentral_mpp',
    district_id: 'sentral',
    district: 'Kecamatan Sentral (Pusat Pemerintahan & Finansial)',
    district_en: 'Sentral District (Government & Financial Core)',
    icon: '🏢',
    title: 'Mal Pelayanan Publik Digital Terpadu 24 Jam & Sistem Parkir Cerdas',
    title_en: '24/7 Digital Civic Service Mall & Smart Street Parking Grid',
    cost: 0.10,
    desc: 'Gedung layanan perizinan terintegrasi dengan mesin cetak mandiri KTP/dokumen kilat tanpa calo serta sensor parkir pintar pengurai kemacetan jalan protokol.',
    desc_en: 'One-stop civic license hub with automated ID printing kiosks and automated smart parking sensors eliminating illicit street parking.',
    impactText: '⚡ Efisiensi Birokrasi +20%, 💰 Kas PAD +Rp 0.1 T, ❤️ Kepuasan Warga +15%, APBD -Rp 0.10 T',
    impactText_en: '⚡ Bureaucracy Efficiency +20%, 💰 Municipal Revenue +Rp 0.1 T, ❤️ Citizen Approval +15%, APBD -Rp 0.10 T',
    fx: { pad: 0.1, sat: 5, traffic: -8, apbd: -0.10 }
  },

  // 2. KECAMATAN NUSAJAYA (Industry, Logistics & Emerging Development)
  {
    id: 'musren_nusajaya_vokasi',
    district_id: 'nusajaya',
    district: 'Kecamatan Nusajaya (Industri, Logistik & Manufaktur)',
    district_en: 'Nusajaya District (Industry, Logistics & Development)',
    icon: '🏭',
    title: 'Balai Vokasi Otomasi Industri & Armada Shuttle Bus Murah Pekerja',
    title_en: 'Advanced Industrial Automation Academy & Subsidized Worker Transit',
    cost: 0.12,
    desc: 'Pusat sertifikasi kejuruan digital manufaktur CNC, mekatronika, dan logistik bagi angkatan kerja muda Nusapura serta armada bus rute kawasan pabrik.',
    desc_en: 'Certification workshops for youth in robotics, logistics, and mechatronics paired with scheduled worker factory transit routes.',
    impactText: '📉 Pengangguran -15%, 💼 Produktivitas Industri +15%, ❤️ Kepuasan Buruh +18%, APBD -Rp 0.12 T',
    impactText_en: '📉 Unemployment -15%, 💼 Industrial Output +15%, ❤️ Labor Approval +18%, APBD -Rp 0.12 T',
    fx: { unemp: -15, inv: 10, sat: 6, apbd: -0.12 }
  },
  {
    id: 'musren_nusajaya_ipal',
    district_id: 'nusajaya',
    district: 'Kecamatan Nusajaya (Industri, Logistik & Manufaktur)',
    district_en: 'Nusajaya District (Industry, Logistics & Development)',
    icon: '🚛',
    title: 'Flyover Jalur Angkutan Berat & Pengolahan Air Limbah Terpadu (IPAL Komunal)',
    title_en: 'Heavy Freight Logistics By-pass & Centralized Industrial Wastewater IPAL',
    cost: 0.16,
    desc: 'Pembangunan jalur lingkar khusus truk kontainer agar tidak merusak jalan lingkungan warga, dilengkapi instalasi terpadu pengolahan limbah industri ramah lingkungan.',
    desc_en: 'Dedicated heavy truck bypass ring road isolating logistics from residential roads with integrated automated industrial effluent treatment.',
    impactText: '🏗️ Kualitas Infrastruktur +15%, 🌿 Polusi Pabrik -15%, ❤️ Kenyamanan Warga +14%, APBD -Rp 0.16 T',
    impactText_en: '🏗️ Infrastructure +15%, 🌿 Pollution -15%, ❤️ Community Approval +14%, APBD -Rp 0.16 T',
    fx: { infra: 15, poll: -15, sat: 5, apbd: -0.16 }
  },

  // 3. KECAMATAN CAKRAWALA (Residential Area, Education & Health Hub)
  {
    id: 'musren_cakrawala_rth_edukasi',
    district_id: 'cakrawala',
    district: 'Kecamatan Cakrawala (Pemukiman, Pendidikan & Kesehatan)',
    district_en: 'Cakrawala District (Residential, Education & Health Hub)',
    icon: '🎓',
    title: 'Pusat Literasi Digital, Gelanggang Remaja & RTH Edukasi Terpadu',
    title_en: 'Digital Literacy Commons, Youth Civic Center & Educational Green Park',
    cost: 0.09,
    desc: 'Pembangunan perpustakaan publik modern dengan akses Wi-Fi berkecepatan tinggi, co-working space mahasiswa, ruang seni, dan fasilitas olahraga pemuda bebas biaya.',
    desc_en: 'Modern public library featuring high-speed digital access, student collaborative incubators, youth arts amphitheater, and free sports courts.',
    impactText: '📚 Mutu Pendidikan +18%, 🚨 Kenakalan Remaja -15%, ❤️ Kepuasan Keluarga +18%, APBD -Rp 0.09 T',
    impactText_en: '📚 Education Quality +18%, 🚨 Youth Crime -15%, ❤️ Family Approval +18%, APBD -Rp 0.09 T',
    fx: { edu: 18, crime: -15, sat: 6, apbd: -0.09 }
  },
  {
    id: 'musren_cakrawala_puskesmas_siaga',
    district_id: 'cakrawala',
    district: 'Kecamatan Cakrawala (Pemukiman, Pendidikan & Kesehatan)',
    district_en: 'Cakrawala District (Residential, Education & Health Hub)',
    icon: '🏥',
    title: 'Puskesmas Rawat Inap Paripurna 24 Jam & Ambulans Reaksi Cepat Lorong',
    title_en: '24/7 Comprehensive Community Clinic & Quick-Response Neighborhood Ambulance',
    cost: 0.11,
    desc: 'Peningkatan kapasitas puskesmas dengan dokter spesialis anak dan kandungan, pos penanganan stunting, serta armada ambulans motor lorong padat pemukiman.',
    desc_en: 'Upgrading clinic facilities to 24/7 in-patient care with pediatric specialists, maternal nutrition hubs, and compact narrow-alley motor ambulances.',
    impactText: '🩺 Akses Kesehatan +20%, 📉 Kemiskinan Rentan -10%, ❤️ Kepuasan Warga +20%, APBD -Rp 0.11 T',
    impactText_en: '🩺 Health Access +20%, 📉 Poverty -10%, ❤️ Citizen Approval +20%, APBD -Rp 0.11 T',
    fx: { health: 20, pov: -10, sat: 7, apbd: -0.11 }
  },

  // 4. KECAMATAN BAHARI (Coastal Area, Maritime Economy & Tourism)
  {
    id: 'musren_bahari_tanggul_nelayan',
    district_id: 'bahari',
    district: 'Kecamatan Bahari (Pesisir, Maritim & Pariwisata)',
    district_en: 'Bahari District (Coastal, Maritime Economy & Tourism)',
    icon: '🌊',
    title: 'Tanggul Laut Ekologis (Seawall), Pengerukan Muara & Pabrik Es Nelayan',
    title_en: 'Eco-Seawall Barrier, Estuary Dredging & Solar Ice Storage for Fishermen',
    cost: 0.15,
    desc: 'Perlindungan kampung pesisir dari pasang rob air laut, pengerukan lumpur jalur perahu muara, serta fasilitas penyimpanan ikan berpendingin energi surya.',
    desc_en: 'Protecting coastal neighborhoods from chronic tidal surges, deepening fishing boat channels, and installing solar cold storage facilities.',
    impactText: '🌊 Banjir Rob -20%, 🐟 Hasil Tangkap Nelayan +18%, ❤️ Kepuasan Warga Pesisir +22%, APBD -Rp 0.15 T',
    impactText_en: '🌊 Tidal Inundation -20%, 🐟 Fishermen Revenue +18%, ❤️ Coastal Approval +22%, APBD -Rp 0.15 T',
    fx: { flood: -20, pad: 0.08, sat: 7, apbd: -0.15 }
  },
  {
    id: 'musren_bahari_waterfront_promenade',
    district_id: 'bahari',
    district: 'Kecamatan Bahari (Pesisir, Maritim & Pariwisata)',
    district_en: 'Bahari District (Coastal, Maritime Economy & Tourism)',
    icon: '⛵',
    title: 'Revitalisasi Koridor Kuliner Apung & Promenade Waterfront Bahari',
    title_en: 'Bahari Waterfront Promenade & Floating Culinary Night Boardwalk',
    cost: 0.11,
    desc: 'Penataan kawasan wisata tepi laut Nusapura Waterfront dengan boardwalk pejalan kaki ramah turis, sentra kuliner seafood higienis, dan panggung seni bahari.',
    desc_en: 'Transforming the Nusapura Waterfront with tourist pedestrian promenades, hygienic seafood vendor stalls, and cultural maritime amphitheaters.',
    impactText: '🏖️ Wisatawan & PAD +Rp 0.12 T, 💼 Lapangan Kerja UMKM +14%, ❤️ Kebanggaan Kota +16%, APBD -Rp 0.11 T',
    impactText_en: '🏖️ Tourism & Revenue +Rp 0.12 T, 💼 Local Jobs +14%, ❤️ Civic Pride +16%, APBD -Rp 0.11 T',
    fx: { pad: 0.12, unemp: -8, sat: 6, apbd: -0.11 }
  },

  // 5. KECAMATAN BUKIT ASRI (Highland, Agriculture, Conservation & Green Belt)
  {
    id: 'musren_bukitasri_konservasi_retensi',
    district_id: 'bukitasri',
    district: 'Kecamatan Bukit Asri (Dataran Tinggi, Pertanian & Sabuk Hijau)',
    district_en: 'Bukit Asri District (Highland, Agriculture & Green Belt)',
    icon: '🌲',
    title: 'Konservasi Sabuk Hijau Perbukitan & 50 Kolam Retensi Resapan Air Alami',
    title_en: 'Green Belt Highland Reforestation & 50 Ecological Retention Runoff Ponds',
    cost: 0.12,
    desc: 'Penanaman 100.000 bibit pohon penyerap air di lereng perbukitan dan pembuatan embung resapan untuk menghentikan banjir kiriman ke pusat kota.',
    desc_en: 'Planting 100k slope-stabilizing native trees and excavating 50 retention ponds to replenish ground aquifers and mitigate downstream floods.',
    impactText: '🌿 Kualitas Lingkungan & Air +20%, 🌊 Banjir Kiriman -15%, ❤️ Dukungan Pegiat Hijau +18%, APBD -Rp 0.12 T',
    impactText_en: '🌿 Environment Quality +20%, 🌊 Downstream Flood -15%, ❤️ Green Activist Approval +18%, APBD -Rp 0.12 T',
    fx: { env: 20, flood: -15, sat: 6, apbd: -0.12 }
  },
  {
    id: 'musren_bukitasri_pasar_tani',
    district_id: 'bukitasri',
    district: 'Kecamatan Bukit Asri (Dataran Tinggi, Pertanian & Sabuk Hijau)',
    district_en: 'Bukit Asri District (Highland, Agriculture & Green Belt)',
    icon: '🌽',
    title: 'Sentra Pengolahan Pupuk Hayati, Embung Tani & Pasar Agrowisata Terpadu',
    title_en: 'Bio-Organic Fertilizer Processing Hub, Farmer Retention Dams & Agrotourism Market',
    cost: 0.08,
    desc: 'Fasilitas subsidi pupuk organik mandiri, irigasi tetes ladang perbukitan, serta sentra penjualan hasil tani segar langsung ke konsumen tanpa perantara.',
    desc_en: 'Locally produced organic bio-fertilizer facilities, precision drip irrigation dams, and direct farm-to-table consumer marketplace.',
    impactText: '📉 Inflasi Pangan Kota -12%, 💰 Kesejahteraan Petani +18%, ❤️ Kepuasan Warga +15%, APBD -Rp 0.08 T',
    impactText_en: '📉 Food Inflation -12%, 💰 Farmer Income +18%, ❤️ Citizen Approval +15%, APBD -Rp 0.08 T',
    fx: { inf: -12, unemp: -7, sat: 6, apbd: -0.08 }
  }
];


var activeMusrenDistrictFilter = 'all';

function filterMusrenbangDistrict(distId) {
  activeMusrenDistrictFilter = distId;
  renderMusrenbangModal();
}

function renderMusrenbangModal() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const body = document.getElementById('musrenbangModalBody');
  const budgetInfo = document.getElementById('musrenbangBudgetInfo');
  if (!body) return;

  state.musrenSelected = state.musrenSelected || [];

  // Filter proposals
  const filteredProposals = (activeMusrenDistrictFilter === 'all')
    ? MUSRENBANG_PROPOSALS
    : MUSRENBANG_PROPOSALS.filter(p => p.district_id === activeMusrenDistrictFilter);

  // Calculate total selected cost across ALL proposals
  let totalSelectedCost = 0;
  MUSRENBANG_PROPOSALS.forEach(p => {
    if (state.musrenSelected.includes(p.id)) {
      totalSelectedCost += p.cost;
    }
  });

  const curDistrict = (typeof MUSRENBANG_DISTRICTS !== 'undefined' ? MUSRENBANG_DISTRICTS : []).find(d => d.id === activeMusrenDistrictFilter) || { id: 'all', name: 'Semua Wilayah', name_en: 'All Districts' };

  // Render District Filter Tabs and City Profile Badge from Poster
  const filterTabsHtml = `
    <div style="margin-bottom:14px;">
      <!-- City Overview Banner from Poster -->
      <div style="background:linear-gradient(135deg, rgba(30,58,138,0.4), rgba(15,23,42,0.7));border:1px solid rgba(56,189,248,0.35);border-radius:14px;padding:12px 14px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;box-shadow:0 4px 15px rgba(0,0,0,0.3);">
        <div>
          <div style="font-size:11px;font-weight:900;color:#38bdf8;text-transform:uppercase;letter-spacing:0.5px;display:flex;align-items:center;gap:6px;">
            <span>🗺️</span> <span>${isEn ? 'Official Territory Map (5 Districts • 48 Sub-districts)' : 'Peta Wilayah Resmi Nusapura (5 Kecamatan • 48 Kelurahan)'}</span>
          </div>
          <div style="font-size:13px;font-weight:800;color:#fff;margin-top:3px;">
            ${isEn ? 'Area: 1,258 km² • Population: 1,350,000 • Municipal APBD: Rp 2.3 T' : 'Luas: 1.258 km² • Penduduk: 1.350.000 Jiwa • APBD: Rp 2,3 T'}
          </div>
        </div>
        <div style="display:flex;gap:5px;flex-wrap:wrap;">
          <span style="font-size:10.5px;background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:6px;color:#93c5fd;font-weight:800;">🏛️ Sentral</span>
          <span style="font-size:10.5px;background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:6px;color:#facc15;font-weight:800;">🏭 Nusajaya</span>
          <span style="font-size:10.5px;background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:6px;color:#4ade80;font-weight:800;">🎓 Cakrawala</span>
          <span style="font-size:10.5px;background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:6px;color:#38bdf8;font-weight:800;">🌊 Bahari</span>
          <span style="font-size:10.5px;background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:6px;color:#a78bfa;font-weight:800;">🌲 Bukit Asri</span>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;">
        ${(typeof MUSRENBANG_DISTRICTS !== 'undefined' ? MUSRENBANG_DISTRICTS : []).map(d => {
          const isActive = activeMusrenDistrictFilter === d.id;
          const label = isEn ? (d.name_en || d.name) : d.name;
          return `
            <button class="iconBtn" onclick="filterMusrenbangDistrict('${d.id}')" style="font-size:11.5px;padding:6px 12px;white-space:nowrap;font-weight:800;border-radius:8px;background:${isActive ? '#3b82f6' : 'rgba(255,255,255,0.05)'};color:${isActive ? '#fff' : '#cbd5e1'};border:1px solid ${isActive ? '#60a5fa' : 'rgba(255,255,255,0.1)'};">
              ${d.icon} ${label}
            </button>
          `;
        }).join('')}
      </div>

      <!-- District Role Info Card if single district selected -->
      ${curDistrict.id !== 'all' ? `
        <div style="margin-top:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:10px 14px;font-size:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            <div style="color:#facc15;font-weight:900;margin-bottom:2px;">
              ${curDistrict.icon} ${isEn ? (curDistrict.role_en || curDistrict.role) : curDistrict.role}
            </div>
            <div style="color:#cbd5e1;font-size:11.5px;line-height:1.4;">
              ${isEn ? (curDistrict.desc_en || curDistrict.desc) : curDistrict.desc}
            </div>
          </div>
          <button class="iconBtn" onclick="filterMusrenbangDistrict('all')" style="font-size:10.5px;padding:4px 8px;flex-shrink:0;">
            ${isEn ? 'Show All' : 'Lihat Semua'}
          </button>
        </div>
      ` : ''}
    </div>
  `;

  // Render proposal items
  const itemsHtml = filteredProposals.map(p => {
    const isChecked = state.musrenSelected.includes(p.id);
    const title = isEn ? (p.title_en || p.title) : p.title;
    const dist = isEn ? (p.district_en || p.district) : p.district;
    const desc = isEn ? (p.desc_en || p.desc) : p.desc;
    const impact = isEn ? (p.impactText_en || p.impactText) : p.impactText;

    return `
      <div class="musrenCard ${isChecked ? 'checked' : ''}" onclick="toggleMusrenbangItem('${p.id}')">
        <div class="musrenCheck">${isChecked ? '✓' : ''}</div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
            <span style="font-size:11.5px;font-weight:900;color:var(--blue-soft);display:flex;align-items:center;gap:4px;">
              <span>${p.icon}</span> <span>${dist}</span>
            </span>
            <span style="font-size:11.5px;font-weight:900;color:#facc15;background:rgba(234,179,8,0.15);padding:3px 10px;border-radius:6px;border:1px solid rgba(234,179,8,0.3);">
              Rp ${p.cost.toFixed(2)} T APBD
            </span>
          </div>
          <div style="font-size:14px;font-weight:800;color:#fff;margin:6px 0 3px 0;">${title}</div>
          <div style="font-size:12px;color:var(--gray-300);line-height:1.45;">${desc}</div>
          <div style="font-size:11px;color:#34d399;font-weight:700;margin-top:7px;display:flex;align-items:center;gap:4px;">
            <span>✨</span> <span>${impact}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  body.innerHTML = filterTabsHtml + itemsHtml;

  if (budgetInfo) {
    const curApbd = state.apbd != null ? state.apbd : 2.3;
    const remaining = Math.max(0, Math.round((curApbd - totalSelectedCost) * 100) / 100);
    budgetInfo.innerHTML = isEn
      ? `<b>Total Selected Proposals:</b> Rp ${totalSelectedCost.toFixed(2)} T • <b>Remaining APBD:</b> Rp ${remaining.toFixed(2)} T`
      : `<b>Total Biaya Usulan:</b> Rp ${totalSelectedCost.toFixed(2)} T • <b>Sisa Kas APBD:</b> Rp ${remaining.toFixed(2)} T`;
  }
}

function toggleMusrenbangItem(id) {
  state.musrenSelected = state.musrenSelected || [];
  const idx = state.musrenSelected.indexOf(id);
  if (idx >= 0) {
    state.musrenSelected.splice(idx, 1);
  } else {
    state.musrenSelected.push(id);
  }
  renderMusrenbangModal();
}

function executeMusrenbang() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  state.musrenSelected = state.musrenSelected || [];
  if (state.musrenSelected.length === 0) {
    showToast(isEn ? '⚠️ Please select at least one community proposal to fund.' : '⚠️ Pilih minimal 1 usulan warga yang ingin diakomodir.');
    return;
  }

  const selectedItems = MUSRENBANG_PROPOSALS.filter(p => state.musrenSelected.includes(p.id));
  let totalCost = 0;
  selectedItems.forEach(p => totalCost += p.cost);

  if (state.apbd < totalCost) {
    showToast(isEn ? '❌ Insufficient municipal APBD funds!' : '❌ Saldo kas APBD tidak mencukupi untuk membiayai seluruh usulan terpilih!');
    return;
  }

  // Deduct APBD & apply stat bonuses
  state.apbd = Math.max(0.5, Math.round((state.apbd - totalCost) * 100) / 100);
  selectedItems.forEach(p => {
    if (p.fx) {
      if (p.fx.sat) state.sat = Math.min(100, state.sat + p.fx.sat);
      if (p.fx.pad) state.pad = Math.round((state.pad + p.fx.pad) * 10) / 10;
      for (const k in p.fx) {
        if (['apbd', 'pad', 'sat'].includes(k)) continue;
        if (state.stats && state.stats[k] != null) {
          state.stats[k] = Math.max(0, Math.min(100, state.stats[k] + p.fx[k]));
        }
      }
    }
  });

  const count = selectedItems.length;
  showToast(isEn 
    ? `✅ Successfully funded ${count} Musrenbang proposals! Public approval surged.`
    : `✅ Berhasil mengakomodir ${count} usulan Musrenbang warga! Kepuasan publik melonjak.`);

  state.musrenSelected = [];
  document.getElementById('musrenbangModal').classList.remove('show');
  updateHUD();
}

/* ==================== OPEN BIDDING (LELANG JABATAN KADIS OPD) ==================== */
let currentBiddingAgencyKey = null;

function openOpenBiddingModal(agencyKey) {
  currentBiddingAgencyKey = agencyKey;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const modal = document.getElementById('openBiddingModal');
  const title = document.getElementById('openBiddingTitle');
  const sub = document.getElementById('openBiddingSub');
  const body = document.getElementById('openBiddingBody');

  const agencyNames = {
    kesehatan: isEn ? 'Health Agency (Dinkes)' : 'Dinas Kesehatan (Dinkes)',
    pupr: isEn ? 'Public Works & Housing (PUPR)' : 'Dinas PUPR',
    pendidikan: isEn ? 'Education Agency (Disdik)' : 'Dinas Pendidikan'
  };

  const aName = agencyNames[agencyKey] || agencyKey;
  if (title) title.textContent = isEn ? `🎯 Open Bidding: ${aName}` : `🎯 Seleksi Terbuka: ${aName}`;
  if (sub) sub.textContent = isEn 
    ? 'Choose the most qualified candidate across 3 distinct backgrounds with real governance impacts:'
    : 'Pilih pejabat terbaik berdasarkan 3 profil latar belakang yang berbeda dengan konsekuensi nyata:';

  const profiles = BIDDING_PROFILES[agencyKey] || BIDDING_PROFILES['kesehatan'];
  if (body) {
    body.innerHTML = profiles.map((p, idx) => {
      const badge = isEn ? (p.typeBadge_en || p.typeBadge) : p.typeBadge;
      const title = isEn ? (p.title_en || p.title) : p.title;
      const desc = isEn ? (p.desc_en || p.desc) : p.desc;
      const stats = isEn ? (p.statsText_en || p.statsText) : p.statsText;
      let badgeStyle = 'background:rgba(59,130,246,0.15);color:var(--blue-soft);border:1px solid rgba(59,130,246,0.3);';
      if (p.type === 'pakar') badgeStyle = 'background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);';
      if (p.type === 'parpol') badgeStyle = 'background:rgba(234,179,8,0.15);color:#facc15;border:1px solid rgba(234,179,8,0.3);';

      return `
        <div class="candidateBiddingCard">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="font-size:32px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;">${p.avatar}</div>
            <div style="flex:1;">
              <div class="biddingBadge" style="${badgeStyle}">${badge}</div>
              <div style="font-size:15px;font-weight:800;color:#fff;margin-top:2px;">${p.name}</div>
              <div style="font-size:11.5px;color:var(--blue-soft);">${title}</div>
            </div>
          </div>
          <div style="font-size:12px;color:var(--gray-300);line-height:1.45;">${desc}</div>
          <div style="font-size:11.5px;color:var(--amber);font-weight:700;background:rgba(0,0,0,0.3);padding:6px 10px;border-radius:8px;">
            📊 <b>${isEn ? 'Projected Impacts:' : 'Dampak Proyeksi:'}</b> ${stats}
          </div>
          <button class="bigBtn" onclick="appointCandidateBidding('${agencyKey}', ${idx})" style="padding:8px 14px;font-size:12px;margin-top:4px;">
            ${isEn ? 'Lantik Pejabat Ini →' : 'Lantik Pejabat Ini →'}
          </button>
        </div>
      `;
    }).join('');
  }

  modal.classList.add('show');
}

function closeOpenBiddingModal() {
  const modal = document.getElementById('openBiddingModal');
  if (modal) modal.classList.remove('show');
}

function appointCandidateBidding(agencyKey, profileIdx) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const profKey = (agencyKey === 'diskes' || agencyKey === 'kesehatan') ? 'kesehatan' : ((agencyKey === 'disdik' || agencyKey === 'pendidikan') ? 'pendidikan' : agencyKey);
  const profiles = BIDDING_PROFILES[profKey] || BIDDING_PROFILES['kesehatan'];
  const chosen = profiles[profileIdx];
  if (!chosen) return;

  state.cabinet = state.cabinet || initCabinet();
  const agencyIdMap = { kesehatan: 'diskes', diskes: 'diskes', pupr: 'pupr', pendidikan: 'disdik', disdik: 'disdik' };
  const targetId = agencyIdMap[agencyKey] || agencyKey;
  const targetChief = state.cabinet.find(c => c.id === targetId || c.id === agencyKey || c.deptKey === targetId || c.opdKey === agencyKey);
  if (targetChief) {
    targetChief.name = chosen.name;
    targetChief.nama = chosen.name;
    targetChief.avatar = chosen.avatar;
    targetChief.kinerja = chosen.effKinerja;
    targetChief.integritas = chosen.effIntegritas;
    targetChief.riskKorupsi = chosen.effRisk;
    targetChief.latarBelakang = chosen.type;
  }

  if (chosen.bonusPad) {
    state.pad = Math.round((state.pad + chosen.bonusPad) * 10) / 10;
  }

  showToast(isEn 
    ? `🎯 Appointed ${chosen.name} as new Agency Chief!` 
    : `🎯 Sukses melantik ${chosen.name} melalui Seleksi Terbuka!`);

  closeOpenBiddingModal();
  renderCabinetModal();
  updateHUD();
}

function toggleExtraDockTools() {
  const dock = document.getElementById('dockMoreActions');
  const btn = document.getElementById('btnToggleExtraTools');
  if (!dock) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (dock.classList.contains('collapsed')) {
    dock.classList.remove('collapsed');
    if (btn) btn.textContent = isEn ? '🛠️ Less Tools ▴' : '🛠️ Sembunyikan ▴';
  } else {
    dock.classList.add('collapsed');
    if (btn) btn.textContent = isEn ? '🛠️ More Tools ▾' : '🛠️ Menu Lainnya ▾';
  }
}

/* ==================== COMPACT STORY FOCUS VIEW ==================== */
function toggleCleanFocusMode() {
  state.cleanMode = !state.cleanMode;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const appContainer = document.getElementById('app');
  const indGrid = document.querySelector('.indGrid');
  const widgetRow = document.getElementById('v3WidgetRow');
  const cleanNotice = document.getElementById('cleanModeNotice');
  const btnToggle = document.getElementById('btnToggleCleanMode');
  const btnDashToggle = document.getElementById('btnDashToggle');

  if (state.cleanMode) {
    if (appContainer) appContainer.classList.add('clean-focus-mode');
    if (indGrid) indGrid.style.display = 'none';
    if (widgetRow) widgetRow.style.display = 'none';
    if (cleanNotice) cleanNotice.style.display = 'block';

    if (btnToggle) {
      btnToggle.textContent = isEn ? '📊 Detailed View' : '📊 Mode Lengkap';
      btnToggle.style.background = 'rgba(59,130,246,0.22)';
      btnToggle.style.color = '#93c5fd';
      btnToggle.style.borderColor = '#3b82f6';
      btnToggle.style.fontWeight = '800';
    }
    if (btnDashToggle) {
      btnDashToggle.textContent = isEn ? '📊 Detailed View' : '📊 Mode Lengkap';
      btnDashToggle.style.background = 'rgba(59,130,246,0.22)';
      btnDashToggle.style.color = '#93c5fd';
      btnDashToggle.style.borderColor = '#3b82f6';
    }
    showToast(isEn ? '👁️ Compact Focus Mode Active: Technical indicators hidden so you can focus on story dilemmas.' : '👁️ Mode Ringkas Aktif: 12 indikator makro disembunyikan agar Anda fokus pada alur cerita & keputusan.');
  } else {
    if (appContainer) appContainer.classList.remove('clean-focus-mode');
    if (indGrid) indGrid.style.display = 'grid';
    if (widgetRow) widgetRow.style.display = 'flex';
    if (cleanNotice) cleanNotice.style.display = 'none';

    if (btnToggle) {
      btnToggle.textContent = isEn ? '👁️ Compact View' : '👁️ Mode Ringkas';
      btnToggle.style.background = 'rgba(255,255,255,0.06)';
      btnToggle.style.color = '#cbd5e1';
      btnToggle.style.borderColor = 'var(--line)';
      btnToggle.style.fontWeight = '700';
    }
    if (btnDashToggle) {
      btnDashToggle.textContent = isEn ? '👁️ Compact View' : '👁️ Mode Ringkas';
      btnDashToggle.style.background = 'rgba(255,255,255,0.06)';
      btnDashToggle.style.color = '#cbd5e1';
      btnDashToggle.style.borderColor = 'var(--line)';
    }
    showToast(isEn ? '📊 Detailed View Active: Full macro indicators and gauges restored.' : '📊 Mode Lengkap Aktif: Seluruh 12 indikator makro dan gauge statistik kembali ditampilkan.');
  }
}
/* ==================== INTERACTIVE PARLIAMENTARY HUB & DPRD LOBBYING ==================== */
function dprdCoffeeMorning() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  state.dprdHarmony = Math.min(100, (state.dprdHarmony || 65) + 10);
  state.sat = Math.min(100, state.sat + 2);
  showToast(isEn ? '☕ Coffee morning breakfast hosted with party leaders! Legislative harmony +10%.' : '☕ Sarapan Kopi Pagi bersama pimpinan fraksi berhasil! Keharmonisan parlemen +10%.');
  renderDprdModal();
}

function dprdAccommodatePokir() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const pokirCost = 0.15;
  if (state.apbd < pokirCost) {
    showToast(isEn ? '❌ Insufficient APBD cash to allocate constituent funds.' : '❌ Kas APBD tidak cukup untuk mengalokasikan usulan Pokir DPRD.');
    return;
  }
  state.apbd = Math.max(0.5, Math.round((state.apbd - pokirCost) * 100) / 100);
  state.dprdHarmony = Math.min(100, (state.dprdHarmony || 65) + 25);
  state.sat = Math.min(100, state.sat + 4);
  showToast(isEn ? '💼 Accommodated Pokir constituent grants! Council factions back your bills (+25%).' : '💼 Akomodir usulan Pokir DPRD! Fraksi dewan kompak mendukung perda Walikota (+25%).');
  renderDprdModal();
  updateHUD();
}

function dprdPassBudget() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const harmony = state.dprdHarmony || 65;
  if (harmony >= 50) {
    state.apbd = Math.round((state.apbd + 0.3) * 10) / 10;
    showToast(isEn ? '⚖️ Annual APBD officially ratified by DPRD! Special national grant disbursed (+Rp 0.3 T).' : '⚖️ Paripurna DPRD sukses mengesahkan APBD tepat waktu! Dana Insentif Pusat cair (+Rp 0.3 T).');
  } else {
    showToast(isEn ? '⚠️ Opposition factions boycotted quorum! Need higher parliamentary harmony.' : '⚠️ Oposisi memboikot kuorum sidang! Tingkatkan keharmonisan dewan terlebih dahulu.');
  }
  renderDprdModal();
  updateHUD();
}

function renderDprdModal() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const dprdList = [
    { name: isEn ? 'PPD Faction (Regional Development Party)' : 'Fraksi PPD (Partai Pembangunan Daerah)', seats: 14, icon: '🏛️', status: isEn ? 'Ruling Coalition' : 'Koalisi Utama', color: 'var(--blue)' },
    { name: isEn ? 'PRK Faction (Reform & Justice Party)' : 'Fraksi PRK (Partai Reformasi & Keadilan)', seats: 12, icon: '⚖️', status: isEn ? 'Critical Opposition' : 'Oposisi Kritis', color: 'var(--red)' },
    { name: isEn ? 'PMI Faction (Indonesian Millennial Party)' : 'Fraksi PMI (Partai Milenial Indonesia)', seats: 9, icon: '🧢', status: isEn ? 'Key Coalition Ally' : 'Mitra Kunci', color: 'var(--amber)' },
    { name: isEn ? 'PPN Faction (United Nusapura Party)' : 'Fraksi PPN (Partai Persatuan Nusapura)', seats: 8, icon: '🤝', status: isEn ? 'Supporting Coalition' : 'Koalisi Pendukung', color: 'var(--green)' },
    { name: isEn ? 'PBI Faction (Indonesian Star Party)' : 'Fraksi PBI (Partai Bintang Indonesia)', seats: 4, icon: '⭐', status: isEn ? 'Neutral Faction' : 'Netral', color: 'var(--purple)' },
    { name: isEn ? 'Independent Faction' : 'Fraksi Independen', seats: 3, icon: '👤', status: isEn ? 'Parliamentary Balancer' : 'Penyeimbang', color: 'var(--gray-400)' }
  ];
  const body = document.getElementById('dprdModalBody');
  if (!body) return;
  
  const harmonyVal = state.dprdHarmony || 65;
  const harmonyBar = `
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px 14px;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:12.5px;font-weight:800;color:#fff;">🤝 ${isEn ? 'LEGISLATIVE HARMONY' : 'KEHARMONISAN & DUKUNGAN DPRD'}</span>
        <span style="font-size:13px;font-weight:800;color:${harmonyVal >= 60 ? '#4ade80' : '#facc15'};">${harmonyVal}%</span>
      </div>
      <div style="height:8px;border-radius:4px;background:rgba(255,255,255,0.08);overflow:hidden;margin-bottom:12px;">
        <div style="height:100%;width:${harmonyVal}%;background:${harmonyVal >= 60 ? 'var(--green)' : 'var(--amber)'};transition:width .3s;"></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        <button class="iconBtn" onclick="dprdCoffeeMorning()" style="font-size:11px;padding:6px 12px;background:rgba(59,130,246,0.15);color:var(--blue-soft);">
          ☕ ${isEn ? 'Coffee Morning & Breakfast' : 'Kopi Pagi & Dialog Fraksi'}
        </button>
        <button class="iconBtn" onclick="dprdAccommodatePokir()" style="font-size:11px;padding:6px 12px;background:rgba(234,179,8,0.15);color:#facc15;">
          💼 ${isEn ? 'Accommodate Pokir Grants (-Rp 0.15 T)' : 'Akomodir Pokir Dewan (-Rp 0.15 T)'}
        </button>
        <button class="iconBtn" onclick="dprdPassBudget()" style="font-size:11px;padding:6px 12px;background:rgba(16,185,129,0.15);color:#34d399;">
          ⚖️ ${isEn ? 'Ratify APBD Session' : 'Sidang Paripurna APBD'}
        </button>
      </div>
    </div>
  `;

  body.innerHTML = harmonyBar + dprdList.map(f => `
    <div class="v3Row">
      <div class="v3RowHead">
        <span>${f.icon} ${f.name}</span>
        <span style="font-weight:700;color:${f.color};font-size:12px;">${f.seats} ${isEn ? 'Seats' : 'Kursi'}</span>
      </div>
      <div class="v3RowSub">${isEn ? 'Political Stance:' : 'Sikap Politik:'} <b>${f.status}</b></div>
    </div>
  `).join('');
}

function renderBudgetModal() {
  if (!state.budgetAlloc) {
    state.budgetAlloc = { infra: 25, edu: 20, health: 20, env: 15, economy: 10, operasional: 10 };
  }

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const breakdown = document.getElementById('budgetBreakdown');
  const slidersContainer = document.getElementById('budgetSliders');

  const calcTotal = () => {
    return (state.budgetAlloc.infra || 0) + 
           (state.budgetAlloc.edu || 0) + 
           (state.budgetAlloc.health || 0) + 
           (state.budgetAlloc.env || 0) + 
           (state.budgetAlloc.economy || 0) + 
           (state.budgetAlloc.operasional || 0);
  };

  const updateBudgetUI = () => {
    const total = calcTotal();
    let totalBadgeColor = 'var(--green)';
    if (total !== 100) totalBadgeColor = 'var(--red)';

    renderBudgetLiveForecast();

    if (breakdown) {
      breakdown.innerHTML = `
        <div class="v3Row" style="padding:10px 14px;background:rgba(255,255,255,0.04);">
          <div class="v3RowHead">
            <span>${isEn ? '📊 Next Fiscal Year APBD Allocation' : '📊 Status Alokasi APBD Tahun Depan'}</span>
            <span style="font-weight:800;font-size:14px;color:${totalBadgeColor};">Total: ${total}% ${total === 100 ? (isEn ? '✅ (Exact 100%)' : '✅ (Pas 100%)') : (isEn ? '⚠️ (Must Equal 100%)' : '⚠️ (Harus 100%)')}</span>
          </div>
          <div class="v3RowSub" style="margin-top:4px;">
            ${isEn ? 'Projected PAD Growth:' : 'Proyeksi Pertumbuhan PAD:'} <b>+Rp ${(0.3 + ((state.budgetAlloc.economy || 10) * 0.04)).toFixed(1)} T / yr</b> | ${isEn ? 'Corruption Risk:' : 'Risiko Korupsi:'} <b>${calculateCabinetStats().riskKorupsi}%</b>
          </div>
        </div>
      `;
    }
  };

  if (slidersContainer) {
    const sectors = isEn ? [
      { key: 'infra', label: '🏗️ Infrastructure & Transportation', desc: 'Road repairs, bridges, drainage & flood mitigation networks.' },
      { key: 'edu', label: '🎓 Education & Youth Affairs', desc: 'School revitalization, student scholarships & digital learning tools.' },
      { key: 'health', label: '🏥 Public Health & Wellness', desc: 'Hospital operations, Puskesmas clinics & child stunting prevention.' },
      { key: 'env', label: '🌱 Sanitation & Green Environment', desc: 'Landfill waste processing, PLTSa clean energy & urban green parks.' },
      { key: 'economy', label: '🏬 Economy, SMEs & Investment', desc: 'SME capital grants, subsidized markets & investor incentives.' },
      { key: 'operasional', label: '👔 Civil Service & Public Integrity', desc: 'Civil servant performance bonuses & anti-corruption audit controls.' }
    ] : [
      { key: 'infra', label: '🏗️ Infrastruktur & Transportasi', desc: 'Memperbaiki jalan, jembatan & penanggulangan banjir.' },
      { key: 'edu', label: '🎓 Pendidikan & Kebudayaan', desc: 'Revitalisasi sekolah, beasiswa & sarana mengajar.' },
      { key: 'health', label: '🏥 Kesehatan & Kesejahteraan', desc: 'Operasional RSUD, Puskesmas & nutrisi cegah stunting.' },
      { key: 'env', label: '🌱 Kebersihan & Lingkungan Hidup', desc: 'Pengelolaan sampah TPA, PLTSa & RTH taman kota.' },
      { key: 'economy', label: '🏬 Ekonomi, UMKM & Investasi', desc: 'Bantuan modal UMKM, pasar murah & daya tarik investor.' },
      { key: 'operasional', label: '👔 Gaji ASN & Operasional Layanan', desc: 'Insentif kinerja pegawai & ketahanan sistem pencegahan korupsi.' }
    ];

    slidersContainer.innerHTML = sectors.map(sec => {
      const val = state.budgetAlloc[sec.key] !== undefined ? state.budgetAlloc[sec.key] : 15;
      return `
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span style="font-weight:700;color:#fff;font-size:13px;">${sec.label}</span>
            <span style="font-weight:800;color:var(--blue-soft);font-size:14px;" id="budVal_${sec.key}">${val}%</span>
          </div>
          <div style="font-size:11px;color:var(--gray-400);margin-bottom:8px;">${sec.desc}</div>
          <input type="range" min="5" max="50" step="1" value="${val}" style="width:100%;accent-color:var(--blue);cursor:pointer;" oninput="updateBudgetValue('${sec.key}', this.value)">
        </div>
      `;
    }).join('');
  }

  updateBudgetUI();

  const btnApply = document.getElementById('btnBudgetApply');
  if (btnApply) {
    btnApply.onclick = applyBudgetAllocation;
  }
}

function updateBudgetValue(key, val) {
  if (!state.budgetAlloc) state.budgetAlloc = {};
  state.budgetAlloc[key] = parseInt(val, 10);
  const label = document.getElementById(`budVal_${key}`);
  if (label) label.textContent = `${val}%`;

  const total = (state.budgetAlloc.infra || 0) + 
                (state.budgetAlloc.edu || 0) + 
                (state.budgetAlloc.health || 0) + 
                (state.budgetAlloc.env || 0) + 
                (state.budgetAlloc.economy || 0) + 
                (state.budgetAlloc.operasional || 0);
  let totalBadgeColor = 'var(--green)';
  if (total !== 100) totalBadgeColor = 'var(--red)';

  renderBudgetLiveForecast();

  const breakdown = document.getElementById('budgetBreakdown');
  if (breakdown) {
    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
    breakdown.innerHTML = `
      <div class="v3Row" style="padding:10px 14px;background:rgba(255,255,255,0.04);">
        <div class="v3RowHead">
          <span>📊 ${isEn ? 'Next Fiscal Year APBD Allocation' : 'Status Alokasi APBD Tahun Depan'}</span>
          <span style="font-weight:800;font-size:14px;color:${totalBadgeColor};">Total: ${total}% ${total === 100 ? (isEn ? '✅ (Exact 100%)' : '✅ (Pas 100%)') : (isEn ? '⚠️ (Must Equal 100%)' : '⚠️ (Harus 100%)')}</span>
        </div>
        <div class="v3RowSub" style="margin-top:4px;">
          ${isEn ? 'Projected PAD Growth:' : 'Proyeksi Pertumbuhan PAD:'} <b>+Rp ${(0.3 + ((state.budgetAlloc.economy || 10) * 0.04)).toFixed(1)} T / yr</b> | ${isEn ? 'Corruption Risk:' : 'Risiko Korupsi:'} <b>${calculateCabinetStats().riskKorupsi}%</b>
        </div>
      </div>
    `;
  }
}

function renderBudgetLiveForecast() {
  const container = document.getElementById('budgetLiveForecast');
  if (!container || !state.budgetAlloc) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  const b = state.budgetAlloc;
  const infraImpact = (b.infra || 20) >= 28 ? '+6% ' + (isEn ? 'Infra Growth' : 'Kualitas Jalan') : ((b.infra || 20) <= 15 ? '-4% ' + (isEn ? 'Pothole Risk' : 'Risiko Jalan Rusak') : 'Normal');
  const infraColor = (b.infra || 20) >= 28 ? 'var(--green)' : ((b.infra || 20) <= 15 ? 'var(--red)' : 'var(--blue-soft)');

  const socialImpact = ((b.edu || 15) + (b.health || 15)) >= 45 ? '+8% ' + (isEn ? 'Citizen Approval' : 'Kepuasan Warga') : (((b.edu || 15) + (b.health || 15)) <= 25 ? '-6% ' + (isEn ? 'Civic Protests' : 'Potensi Demo') : 'Normal');
  const socialColor = ((b.edu || 15) + (b.health || 15)) >= 45 ? 'var(--green)' : (((b.edu || 15) + (b.health || 15)) <= 25 ? 'var(--red)' : 'var(--blue-soft)');

  const econImpact = (b.economy || 10) >= 18 ? '+Rp ' + ((b.economy * 0.04)).toFixed(2) + ' T ' + (isEn ? 'PAD Bonus' : 'PAD Tambahan') : (isEn ? 'Standard Growth' : 'Pertumbuhan Wajar');
  const econColor = (b.economy || 10) >= 18 ? 'var(--green)' : 'var(--blue-soft)';

  const integrityImpact = (b.operasional || 10) >= 15 ? '-12% ' + (isEn ? 'Corruption Risk' : 'Risiko Korupsi') : ((b.operasional || 10) <= 8 ? '+15% ' + (isEn ? 'Graft Hazard' : 'Rentan Suap') : 'Stabil');
  const integrityColor = (b.operasional || 10) >= 15 ? 'var(--green)' : ((b.operasional || 10) <= 8 ? 'var(--red)' : 'var(--blue-soft)');

  container.innerHTML = `
    <div class="budgetLiveForecastItem">
      <div class="forecastLabel">${isEn ? '🏗️ INFRASTRUCTURE' : '🏗️ INFRASTRUKTUR'}</div>
      <div class="forecastValue" style="color:${infraColor};">${infraImpact}</div>
    </div>
    <div class="budgetLiveForecastItem">
      <div class="forecastLabel">${isEn ? '👥 SOCIAL & CITIZENS' : '👥 SOSIAL & WARGA'}</div>
      <div class="forecastValue" style="color:${socialColor};">${socialImpact}</div>
    </div>
    <div class="budgetLiveForecastItem">
      <div class="forecastLabel">${isEn ? '📈 OWN-SOURCE REVENUE' : '📈 PENDAPATAN ASLI'}</div>
      <div class="forecastValue" style="color:${econColor};">${econImpact}</div>
    </div>
    <div class="budgetLiveForecastItem">
      <div class="forecastLabel">${isEn ? '🛡️ BUREAUCRATIC INTEGRITY' : '🛡️ INTEGRITAS BIROKRASI'}</div>
      <div class="forecastValue" style="color:${integrityColor};">${integrityImpact}</div>
    </div>
  `;
}

function applyBudgetPreset(type) {
  if (!state.budgetAlloc) state.budgetAlloc = {};
  if (type === 'rakyat') {
    state.budgetAlloc = { infra: 15, edu: 30, health: 30, env: 10, economy: 10, operasional: 5 };
  } else if (type === 'infra') {
    state.budgetAlloc = { infra: 40, edu: 15, health: 15, env: 10, economy: 10, operasional: 10 };
  } else if (type === 'integritas') {
    state.budgetAlloc = { infra: 15, edu: 20, health: 20, env: 15, economy: 10, operasional: 20 };
  } else {
    // Seimbang
    state.budgetAlloc = { infra: 25, edu: 20, health: 20, env: 15, economy: 10, operasional: 10 };
  }
  if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_kas');
  renderBudgetModal();
  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `⚖️ Preset applied: ${type.toUpperCase()}!` : `⚖️ Preset APBD diterapkan: ${type.toUpperCase()}!`);
}

function autoBalanceBudget() {
  if (!state.budgetAlloc) state.budgetAlloc = { infra: 25, edu: 20, health: 20, env: 15, economy: 10, operasional: 10 };
  const keys = ['infra', 'edu', 'health', 'env', 'economy', 'operasional'];
  let currentTotal = keys.reduce((acc, k) => acc + (state.budgetAlloc[k] || 0), 0);
  let diff = 100 - currentTotal;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (diff === 0) {
    showToast(isEn ? '✅ APBD allocation is already balanced at 100%!' : '✅ Total APBD sudah tepat 100%!');
    return;
  }
  // Adjust operasional and infra
  let adjustedOperasional = Math.max(5, Math.min(40, (state.budgetAlloc.operasional || 10) + diff));
  state.budgetAlloc.operasional = adjustedOperasional;
  currentTotal = keys.reduce((acc, k) => acc + (state.budgetAlloc[k] || 0), 0);
  diff = 100 - currentTotal;
  if (diff !== 0) {
    state.budgetAlloc.infra = Math.max(5, (state.budgetAlloc.infra || 20) + diff);
  }
  if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_kas');
  renderBudgetModal();
  showToast(isEn ? '⚖️ APBD allocation automatically balanced to 100%!' : '⚖️ Alokasi APBD otomatis diseimbangkan hingga 100%!');
}

function applyBudgetAllocation() {
  if (!state.budgetAlloc) return;
  const total = (state.budgetAlloc.infra || 0) + 
                (state.budgetAlloc.edu || 0) + 
                (state.budgetAlloc.health || 0) + 
                (state.budgetAlloc.env || 0) + 
                (state.budgetAlloc.economy || 0) + 
                (state.budgetAlloc.operasional || 0);

  if (total !== 100) {
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `⚠️ Failed to apply APBD: Total allocation must equal exactly 100% (Current: ${total}%).` : `⚠️ Gagal menerapkan APBD: Total alokasi harus persis 100% (Saat ini: ${total}%).`);
    return;
  }

  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_palu');
  }

  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🔨 RAPBD ratified by hammer strike for next fiscal year!' : '🔨 RAPBD Resmi Disahkan Ketuk Palu untuk Tahun Anggaran Berikutnya!');
  saveGame();
  returnFromSubModal('budgetModal');
}

function drawLineChart(canvasId, datasets, labels) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof canvas.getContext !== 'function') return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const parent = canvas.parentElement;
  const w = canvas.width = parent ? parent.clientWidth || 320 : 320;
  const h = canvas.height = 170;

  ctx.clearRect(0, 0, w, h);

  const paddingLeft = 32;
  const paddingRight = 24;
  const paddingTop = 26;
  const paddingBottom = 28;

  const graphW = w - paddingLeft - paddingRight;
  const graphH = h - paddingTop - paddingBottom;

  // Background grid
  ctx.strokeStyle = 'rgba(255,255,255,0.07)';
  ctx.lineWidth = 1;
  for (let yStep = 0; yStep <= 3; yStep++) {
    const yPos = paddingTop + (yStep / 3) * graphH;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, yPos);
    ctx.lineTo(w - paddingRight, yPos);
    ctx.stroke();
  }

  // Draw datasets
  datasets.forEach(ds => {
    if (!ds.data || ds.data.length === 0) return;

    const data = ds.data;
    const len = data.length;
    let maxVal = Math.max(...data, 10);
    let minVal = Math.min(...data, 0);
    if (maxVal === minVal) { maxVal += 5; minVal = Math.max(0, minVal - 5); }
    const range = maxVal - minVal;

    ctx.strokeStyle = ds.color || '#3b7cf6';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    data.forEach((val, idx) => {
      const x = len === 1 
        ? paddingLeft + graphW / 2 
        : paddingLeft + (idx / (len - 1)) * graphW;
      const y = h - paddingBottom - ((val - minVal) / range) * graphH;

      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw points and values
    data.forEach((val, idx) => {
      const x = len === 1 
        ? paddingLeft + graphW / 2 
        : paddingLeft + (idx / (len - 1)) * graphW;
      const y = h - paddingBottom - ((val - minVal) / range) * graphH;

      ctx.fillStyle = ds.color || '#3b7cf6';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw value text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px system-ui, sans-serif';
      ctx.textAlign = 'center';
      const displayVal = typeof val === 'number' ? (val % 1 === 0 ? val : val.toFixed(1)) : val;
      ctx.fillText(displayVal + (ds.unit || ''), x, Math.max(12, y - 7));
    });
  });

  // Draw X-axis labels
  if (labels && labels.length) {
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '10px system-ui, sans-serif';
    ctx.textAlign = 'center';
    const len = labels.length;
    labels.forEach((lbl, idx) => {
      const x = len === 1 
        ? paddingLeft + graphW / 2 
        : paddingLeft + (idx / (len - 1)) * graphW;
      ctx.fillText(lbl, x, h - 8);
    });
  }
}

function renderStatsModal() {
  const summary = document.getElementById('statsSummary');
  const cStats = calculateCabinetStats();
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (summary) {
    summary.innerHTML = `
      <div class="summaryGrid" style="grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
        <div style="background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Cabinet Integrity Index' : 'Indeks Integritas Kabinet'}</div>
          <div style="font-size:16px;font-weight:800;color:var(--green);">${cStats.avgIntegritas}%</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Bureaucracy Corruption Risk' : 'Risiko Korupsi Birokrasi'}</div>
          <div style="font-size:16px;font-weight:800;color:${cStats.riskKorupsi <= 25 ? 'var(--green)' : 'var(--red)'};">${cStats.riskKorupsi}%</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Infrastructure' : 'Infrastruktur'}: <b>${state.stats.infra || 50}</b></div>
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Education' : 'Pendidikan'}: <b>${state.stats.edu || 55}</b></div>
        </div>
        <div style="background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:10px;border:1px solid var(--line);">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Healthcare' : 'Kesehatan'}: <b>${state.stats.health || 55}</b></div>
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Environment' : 'Lingkungan'}: <b>${state.stats.env || 45}</b></div>
        </div>
      </div>
    `;
  }
  setTimeout(() => {
    drawLineChart('chartStatsEcon', [
      { color: '#3ecf8e', data: [50, 58, 62, state.sat || 68] },
      { color: '#f2596b', data: [10, 9, 8, state.stats.pov || 8] },
      { color: '#f5b544', data: [8, 7.5, 7, state.stats.unemp || 7] }
    ]);
    drawLineChart('chartStatsInfra', [
      { color: '#3b7cf6', data: [40, 45, 48, state.stats.infra || 50] },
      { color: '#7fe0b3', data: [45, 48, 52, state.stats.edu || 55] },
      { color: '#5a8bff', data: [45, 50, 53, state.stats.health || 55] },
      { color: '#f5b544', data: [40, 42, 44, state.stats.env || 45] }
    ]);
  }, 100);
}

// ==================== COMPREHENSIVE INDONESIAN GOVERNANCE GLOSSARY ====================
// Note: Municipal governance glossary & contextual translation datasets
// are externalized to data/glossary_data.js for performance and modularity.


function translateDynamicText(text, targetLang = 'en') {
  if (!text || typeof text !== 'string') return text || '';
  if (targetLang === 'id') return text;

  // 1. Direct match in phrase dictionary
  const phrases = [
    // General terms & departments
    ['Dinas Perhubungan', 'Department of Transportation'],
    ['Dinas Kesehatan', 'Department of Health'],
    ['Dinas Pendidikan', 'Department of Education'],
    ['Dinas PUPR', 'Public Works Department (PUPR)'],
    ['Dinas Lingkungan Hidup', 'Environmental Agency (DLH)'],
    ['Dinas Sosial', 'Social Services Agency'],
    ['Dinas Pariwisata', 'Tourism Department'],
    ['Diskominfo', 'Communications & IT Agency (Diskominfo)'],
    ['Satpol PP', 'Civil Service Police (Satpol PP)'],
    ['Inspektorat', 'Municipal Inspectorate'],
    ['RSUD', 'RSUD General Hospital'],
    ['Puskesmas', 'Puskesmas Community Clinic'],
    ['Posyandu', 'Posyandu Health Post'],
    ['PDAM', 'PDAM Municipal Water Utility'],
    ['TPA', 'Municipal Landfill (TPA)'],
    ['PLTSa', 'Waste-to-Energy Plant (PLTSa)'],
    ['BTT', 'Emergency Reserve Fund (BTT)'],
    ['APBD', 'APBD Municipal Budget'],
    ['PAD', 'Local Own-Source Revenue (PAD)'],
    ['DAK', 'Special Allocation Fund (DAK)'],
    ['DAU', 'General Allocation Fund (DAU)'],
    ['DPRD', 'DPRD City Parliament'],
    ['BPK', 'Supreme Audit Board (BPK)'],
    ['KPK', 'Anti-Corruption Commission (KPK)'],
    ['RT/RW', 'Neighborhood Units (RT/RW)'],
    ['Pilkada', 'Mayoral Election (Pilkada)'],
    ['Walikota', 'Mayor'],
    ['Wakil Walikota', 'Vice Mayor'],
    ['Sekda', 'City Secretary (Sekda)'],
    ['Kadis', 'Agency Head (Kadis)'],
    ['Camat', 'Sub-District Head (Camat)'],
    ['Lurah', 'Village Head (Lurah)'],
    ['Honorer', 'Contract Staff (Honorer)'],
    ['PPPK', 'Civil Service Contract (PPPK)'],
    ['ASN', 'Civil Servants (ASN)'],
    ['PKL', 'Street Vendors (PKL)'],
    ['UMKM', 'MSMEs (UMKM)'],
    ['BUMD', 'Municipal Enterprise (BUMD)'],
    ['AMDAL', 'Environmental Impact Assessment (AMDAL)'],
    ['PSN', 'National Strategic Project (PSN)'],
    ['KEK', 'Special Economic Zone (KEK)'],
    ['RPJMD', '5-Year City Development Plan (RPJMD)'],
    ['LKPJ', 'Mayoral Accountability Report (LKPJ)'],

    // Common news headlines
    ['Revitalisasi Angkutan Umum', 'Public Transit Fleet Modernization'],
    ['Kemacetan Simpang Kota', 'Central Intersection Traffic Gridlock'],
    ['Renovasi Sekolah Rusak', 'Suburban Public School Renovations'],
    ['Beasiswa Anak Kurang Mampu', 'Low-Income Student Scholarship Initiative'],
    ['Antrean Panjang RSUD', 'City Regional Hospital (RSUD) Overcrowding'],
    ['Hujan Ekstrem & Banjir Bandang', 'Extreme Torrential Rain & River Inundation'],
    ['Aksi Protes Warga Korban Banjir', 'Community Outcry Over Drainage Failures'],
    ['Pemanggilan DPRD & Audit Drainase', 'DPRD Commission Hearing & Drainage Project Audit'],
    ['Pemeriksaan Kontraktor PUPR', 'Prosecutor Subpoenas Public Works Contractors'],
    ['Terbongkarnya Suap Oknum Pejabat', 'Kickback Scandal Exposed in Public Works Agency'],
    ['Reaksi & Gejolak Internal ASN', 'Bureaucratic Turbulence & Morale Rebuilding'],
    ['Tender Ulang & Masterplan Bebas Banjir', 'Tender Re-run & Flood-Free Masterplan 2030'],
    ['Proposal Konsorsium Investor', 'Port Special Economic Zone (KEK) Mega-Proposal'],
    ['Pembebasan Lahan & Penolakan Adat', 'Coastal Land Acquisition & Traditional Village Concerns'],
    ['Solusi Kompensasi vs Demo Mahasiswa', 'Environmental Demonstration vs Economic Development'],
    ['Groundbreaking & Penyerapan Tenaga Kerja', 'Groundbreaking & Local Workforce Absorption'],
    ['Lonjakan Angka Stunting Anak', 'Child Stunting Rate Surge in Vulnerable Neighborhoods'],
    ['Kejanggalan Pengadaan Paket Makanan', 'Supplementary Nutrition Packaging Irregularities'],
    ['Predikat Kota Sehat & Apresiasi Kemenkes', 'National Healthy City Award & Ministry Commendation'],
    ['Krisis Overload TPA Nusapura', 'Municipal Landfill (TPA) Capacity Crisis'],
    ['Operasional PLTSa & Zero Waste', 'Commercial Operation of WTE Facility & Zero-Waste Benchmark'],
    ['Peringkat 1 E-Government Nasional', '#1 National E-Government Ranking & AI Public Service'],
    ['Gempa Bumi Tektonik 5.8 SR', 'Major 5.8 Magnitude Earthquake Strikes City'],
    ['Penemuan Situs Purbakala di Proyek PUPR', 'Ancient Temple Relics Unearthed at Road Construction Site'],
    ['Anugerah Smart City UNESCO', 'UNESCO Global Smart City Award Nomination'],
    ['Kunjungan Kerja Presiden RI & Inpres Infrastruktur', 'Presidential Working Visit & National Strategic Infrastructure Decree'],
    ['Pungli Perizinan Terbongkar di Dinas Teknis', 'Permit Extortion Scandal in Technical Agency'],
    ['Sidak Mendadak Wali Kota ke RSUD Kota', 'Mayoral Surprise Midnight Inspection at City RSUD'],
    ['Sengketa Sektor Parkir Liar & Ormas Lokal', 'Illegal Parking Turf Dispute & Civil Groups'],
    ['Temuan BPK: SILPA Membengkak di Akhir Tahun', 'BPK Audit Finding: Budget Surplus (SILPA) Surges'],
    ['Aksi Mogok Sopir Angkutan Kota (Angkot)', 'City Minibus (Angkot) Drivers Strike'],
    ['Kelangkaan Sembako & Spekulasi Harga di Pasar', 'Staple Food Shortages & Market Speculation'],
    ['Bencana Angin Puting Beliung Pesisir', 'Coastal Whirlwind Disaster & Roof Destruction'],
    ['Pengangkatan Ribuan Tenaga Honorer ASN', 'Appointment of Non-Permanent Contract Staff to Civil Service'],
    ['Interpelasi DPRD Terkait Penyerapan Anggaran', 'DPRD Interpellation Motion on Budget Execution'],
    ['Operasi Tangkap Tangan (OTT) Oknum Camat', 'Anti-Graft Sting Operation (OTT) on Sub-District Head'],
    ['Lonjakan Inflasi Cabai & Bawang Merah', 'Chili & Shallot Inflation Spike Ahead of Holidays'],
    ['Revitalisasi Stadion & Gelanggang Olahraga Kota', 'Municipal Stadium & Sports Arena Modernization'],
    ['Polemik Sistem Zonasi PPDB Sekolah Negeri', 'School Zoning Admission System Controversy'],
    ['Lonjakan Kasus Demam Berdarah (DBD) Musim Hujan', 'Monsoon Dengue Fever Surge & Ward Shortage'],
    ['Pencemaran Limbah Tekstil di Sungai Kota', 'Textile Factory Industrial Waste River Pollution'],
    ['Penataan Pedagang Kakilima (PKL) Alun-Alun', 'Central Square Street Vendors (PKL) Relocation'],
    ['Festival Kebudayaan & Kuliner Nusantara', 'Nusantara Cultural & Culinary Arts Festival'],
    ['Program PJU: Kota Terang Bebas Begal', 'Smart Street Lighting (PJU) & Night Safety Drive'],
    ['Pelaksanaan Open Bidding Seleksi Jabatan Kadis', 'Open Merit-Based Bidding for Agency Head Posts'],
    ['Trotoar Ramah Disabilitas & Pedestrian Kota', 'Disability-Friendly Sidewalks & Pedestrian Promenade'],
    ['Krisis TPA Sampah & Proyek Listrik Sampah (PLTSa)', 'Landfill Crisis & Waste-to-Energy Project'],
    ['Program Lab Komputer & Coding Gratis SMK', 'Free Vocational Coding & Computer Labs Scheme'],
    ['Bantuan Kebakaran Pemukiman Padat Penduduk', 'High-Density Residential Fire Relief & Rebuilding'],
    ['Aksi Geng Motor & Program Jam Malam Remaja', 'Motorcycle Gang Curbs & Youth Night Curfew Program'],
    ['Isu Kelangkaan LPG 3 Kg & Antrean Melon Panjang', '3-Kg LPG Gas Shortage & Long Citizen Queues'],
    ['Sengketa Lahan Pasar Tradisional vs Modern Supermarket', 'Traditional Market Land Dispute vs Modern Retail Mall'],
    ['Dugaan Kebocoran Data Kependudukan Diskominfo', 'Alleged Civic Identity Registry Data Breach'],
    ['Aksi Mogok Angkutan Kota (Angkot) Menolak Bus Listrik', 'Minibus Strike Protesting Electric Bus Deployment'],
    ['Pengangkatan Guru Honorer Lolos PPPK Tertahan SK', 'Certified Contract Teachers Pending Official Decree'],
    ['Kericuhan Suporter Sepakbola di Stadion Kota', 'Football Fan Clashes at Municipal Stadium'],
    ['Temuan Benda Cagar Budaya Candi Saat Proyek Tol', 'Ancient Temple Heritage Discovery on Highway Site'],
    ['Tunggakan Klaim BPJS Kesehatan RSUD Kota', 'National Health Insurance (BPJS) Claim Arrears at Hospital'],
    ['Maraknya Judi Online & Pinjol Ilegal di Kelurahan', 'Illegal Online Gambling & Loan Shark Crackdown'],
    ['Sengketa Tempat Pembuangan Sampah Antar-Daerah', 'Inter-Regional Landfill Border Waste Dispute'],
    ['Dilema Pabrik Smelter EV: Investasi Rp 12 T vs Krisis Air Tanah', 'EV Smelter Dilemma: Rp 12T Capital vs Groundwater Scarcity'],
    ['Defisit APBD Mendadak: Pangkas Bansos Miskin vs Tunjangan ASN vs Utang Bank', 'Sudden Fiscal Deficit: Social Aid vs Civil Servant Allowances vs Bank Debt'],
    ['Skandal Korupsi RSUD: Serahkan Ketua Partai Pengusung vs Interpelasi DPRD', 'Hospital Graft Probe: Party Chair Handover vs Parliamentary Inquiry'],
    ['Penataan Bantaran Sungai: Penggusuran Masif vs Kampung Susun vs Tanggul Riskan', 'Riverbank Resettlement: Relocation vs Elevated Housing vs Embankment'],
    ['Revitalisasi Pasar Gedhe: Mall 15 Lantai vs Pasar Heritage APBD', 'Historic Market Revitalization: 15-Story Mall vs Heritage Market'],
    ['Abrasi Pesisir: Giant Sea Wall Rp 3 T vs Nasib 2.000 Nelayan Tradisional', 'Coastal Erosion Crisis: Rp 3T Giant Sea Wall vs 2,000 Fishermen'],
    ['Krisis TPA Sampah: Incinerator WTE Mahal vs Protes Polusi Warga', 'Landfill Crisis: Expensive WTE Plant vs Community Emission Protests'],
    ['Penertiban Kawasan Remang-remang: Penggusuran Hukum vs Nasib UMKM Sekitar', 'Red-Light District Cleanup: Legal Demolition vs Local MSME Livelihoods'],
    ['Kebocoran Pipa PDAM 45%: Kenaikan Tarif 40% vs Subsidi APBD Rp 250 M', '45% Water Utility Pipe Leakage: 40% Tariff Hike vs Rp 250B APBD Subsidy'],
    ['Smart City AI Surveillance: 500 Kamera Wajah vs Privasi Warga', 'Smart City AI Surveillance: 500 Facial Cameras vs Citizen Privacy'],
    ['Krisis Defisit Kas APBD: Jatuh Tempo Obligasi Rp 1.5 T vs TPP ASN', 'Municipal Treasury Crisis: Rp 1.5T Bond Maturity vs ASN Bonuses'],
    ['Ancaman Mogok Kerja Massal Sopir Angkot & Ojol: Penyesuaian Tarif vs Subsidi BBM APBD', 'Mass Transit Drivers Strike: Fare Hike vs Municipal Fuel Subsidy'],
    ['Skandal Sertifikat Fiktif Mafia Tanah & Indikasi Keterlibatan Oknum Kabinet', 'Land Mafia Fake Deeds Scandal & Cabinet Official Implication'],
    ['Izin Industri Smelter/Pabrik Kimia Rp 12 T vs Pencemaran Sumber Air PDAM', 'Rp 12T Chemical Smelter Permit vs Water Utility Source Contamination'],
    ['Wabah Demam Berdarah & Krisis RSUD: Dana BTT vs Gedung Olahraga', 'Dengue Outbreak & RSUD Crisis: Emergency BTT Funds vs Sports Arena'],
    ['Serangan Ransomware Server Data Dukcapil: Tebusan Rp 50 M vs Pemulihan Backup Manual', 'Dukcapil Data Ransomware Attack: Rp 50B Ransom vs Manual Backup Recovery'],
    ['Program Makan Bergizi Gratis Siswa: Dapur Umum APBD vs Konsorsium UMKM', 'Free Nutritious Student Meals: Municipal Kitchens vs Local MSME Consortium'],
    ['Infrastruktur SPKLU Listrik: Insentif Investor vs Subsidikan Angkot', 'EV Charging Station Rollout: Investor Tax Credits vs Public Minibus Subsidies'],
    ['Festival Seni & Budaya Nusantara Nusapura: Skala Internasional vs Efisiensi APBD', 'Nusantara Arts Festival: International Extravaganza vs Fiscal Thrift'],
    ['Layanan Darurat Kesehatan Mental & Judi Online: Hotline 112 vs Klinik Khusus', 'Mental Health & Gambling Crisis Desk: 112 Hotline vs Dedicated Clinics'],
    ['Renovasi Stadion Sepakbola Kota: Standar FIFA vs Kemitraan Klub Swasta', 'Municipal Stadium Renovation: FIFA Standards vs Private Club Partnership'],
    ['Kebakaran Hebat Pemukiman Padat: Hunian Sementara vs Penataan Ulang Tata Ruang', 'Dense District Fire Disaster: Temporary Shelter vs Urban Spatial Re-zoning'],
    ['Jalur Khusus Logistik Pelabuhan: Jalan Flyover Truk vs Pembatasan Jam Malam', 'Port Logistics Corridor: Dedicated Truck Flyover vs Night Curfew'],
    ['Modernisasi Pasar Malam Tradisional: QRIS Wajib vs Pelatihan Bebas Biaya', 'Night Market Modernization: Mandatory Digital QRIS vs Free Coaching'],
    ['Kolam Retensi Bencana Banjir: Pembebasan Lahan Lahan Pertanian vs Pompa Otomatis', 'Flood Retention Basins: Farmland Acquisition vs Automated Pumps'],
    ['Nusapura Innovation Award: Beasiswa Startup Pemuda vs Riset Kampus Lokal', 'Nusapura Innovation Award: Youth Startup Grants vs Campus Research'],
    ['Program Bedah Rumah Kumuh 1.000 Unit: Bantuan APBD vs Kemitraan CSR BUMN', '1,000 Slum Home Renovation Plan: APBD Grants vs State Firm CSR'],
    ['Penyehatan Bank Daerah (BPR Nusapura): Penyertaan Modal vs Audit Total Manajemen', 'Regional Bank Restructuring: Equity Injection vs Full Management Audit'],
    ['Aksi Balap Liar & Geng Motor Malam: Operasi Presisi Polri vs Sirkuit Resmi', 'Midnight Street Racing: Police Precision Sweeps vs Official Drag Strip'],
    ['Program Urban Farming & Taman Atap Gedung: Ketahanan Pangan Lokal', 'Urban Rooftop Farming Initiative: Community Local Food Security'],
    ['Pengembangan Waterfront City Nusapura: Pedestrian Hijau vs Reklamasi Komersial', 'Nusapura Waterfront Promenade: Green Walkway vs Commercial Reclamation'],
    ['Identitas Kependudukan Digital (IKD): Wajib Layanan Publik vs Transisi Bertahap', 'Digital Civil ID (IKD): Mandatory Requirement vs Phased Transition'],
    ['Layanan Kartu Nusapura Sehat Lansia: Ambulans Kelurahan vs Home Care', 'Elderly Health Card Scheme: Ward Ambulances vs Home Care Nurses'],
    ['Pusat Vokasi & Retraining Industri 4.0: Sinergi Politeknik vs Sertifikasi Gratis', 'Industry 4.0 Vocational Hub: Polytechnic Partnership vs Free Certificates'],
    ['Revitalisasi Kawasan Kota Tua Heritage: Restorasi Gedung vs Pusat Kreatif', 'Old Town Heritage Revitalization: Facade Restoration vs Creative Center'],
    ['Krisis Gelombang Panas & Kekeringan Air: Armada Tangki vs Drilling Sumur Dalam', 'Heatwave & Drought Crisis: Water Tanker Convoy vs Deep Well Drilling'],
    ['Kawasan Pedestrian Bebas Kendaraan: Car Free Day Total vs Jalur Logistik Toko', 'Vehicle-Free Pedestrian Boulevard: Full Car-Free Day vs Shop Logistics Lanes'],
    ['Program Panel Surya PLTS Atap Gedung DInas: Efisiensi Tagihan Listrik', 'Government Rooftop Solar Program: Municipal Power Bill Reduction'],
    ['Program Sekolah Inklusi & Rumah Belajar Ramah Disabilitas Nusapura', 'Inclusive Schools & Disability-Friendly Learning Centers'],
    ['Nusapura Export Center: Dorong Komoditas Olahan UMKM ke Pasar ASEAN', 'Nusapura Export Center: Promoting MSME Commodities to ASEAN Markets'],
    ['Perda Larangan Kantong Plastik Sekali Pakai: Toko Modern vs Pasar Rakyat', 'Single-Use Plastic Ban Ordinance: Modern Retail vs Traditional Stalls'],
    ['Pos Siskamling Digital & CCTV RT/RW: Integrasi Command Center Pemkot', 'Smart Neighborhood Security (Siskamling) & Integrated CCTV Network'],
    ['Nusapura eSports & Creative Technology Center: Wadah Bakat Generasi Z', 'Nusapura eSports & Creative Tech Arena: Nurturing Gen-Z Digital Talents'],
    ['Program Pemutihan Denda Pajak Kendaraan & PBB: Gebyar Sadar Pajak', 'Vehicle & Property Tax Penalty Amnesty: Civic Compliance Drive'],
    ['Program Halo Walikota Live Streaming: Tanya Jawab Warga Tanpa Settingan', 'Halo Mayor Live-Stream: Unfiltered Real-Time Citizen Q&A'],
    ['Kawasan Pedestrian & Wisata Kuliner Malam Malioboro-Style Nusapura', 'Pedestrian Night Culinary Walkway: Malioboro-Style Nusapura Avenue'],
    ['Pengolahan Sampah Modern: Teknologi Incinerator Waste-to-Energy (PLTSa)', 'Modern Waste Processing: Waste-to-Energy Incineration Technology'],
    ['Krisis Pasokan Air Bersih PDAM & Digitalisasi Pipa Distribusi Utama', 'Clean Water Supply Crisis & Distribution Main Pipe Digitalization'],
    ['Program Kartu Tani Nusapura & Subsidi Pupuk Organik Daerah', 'Nusapura Farmer Card & Regional Organic Fertilizer Subsidies'],
    ['Karnaval Maritim & Festival Budaya Internasional Nusapura', 'Nusapura International Maritime Carnival & Cultural Festival'],
    ['Revitalisasi Permukiman Kumuh & Program Rusunawa Subsidi', 'Slum Upgrading & Subsidized Municipal Housing Apartments'],
    ['Pengembangan Kawasan Industri AI & Tech Park Nusapura Silicon Coast', 'Silicon Coast AI & Tech Industrial Park Development'],
    ['Kartu Nusapura Sehat (KNS) & Layanan Ambulans Gratis 24 Jam', 'Nusapura Health Card (KNS) & Free 24-Hour Ambulance Fleet'],
    ['Operasi Pasar Murah & Stabilitas Harga Sembako Saat Inflasi', 'Subsidized Grocery Markets & Food Inflation Stabilization'],
    ['Pengembangan Kawasan Pelabuhan Maritim & Hub Logistik Nusantara', 'Maritime Port Logistics Hub & Inter-Island Shipping Terminal'],
    ['Sertifikasi Lahan Wakaf Gratis & Rumah Ibadah Ramah Anak', 'Free Religious Land Titling & Child-Friendly Places of Worship'],
    ['Digitalisasi System Parkir On-Street & Pemberantasan Juru Parkir Liar', 'Smart On-Street Parking Digitalization & Anti-Extortion Drive'],
    ['Pembangunan Stadion Utama Nusapura & Akademi Pembinaan Atlet Muda', 'Nusapura Main Stadium Construction & Youth Athlete Academy'],
    ['Penataan Pedagang Kakilima (PKL) Alun-Alun & Sentra UMKM Modern', 'City Square Street Vendor Zoning & Modern Culinary Center'],
    ['Inisiatif Transit-Oriented Development (TOD) Stasiun Utama Nusapura', 'Nusapura Central Station Transit-Oriented Development (TOD)'],

    // Common social media phrases
    ['Semoga aspirasi warga benar-benar didengar.', 'Hoping our community aspirations are genuinely heard.'],
    ['Jalanan makin macet tiap pagi, butuh solusi nyata!', 'Traffic gets worse every morning, we need real solutions!'],
    ['Alhamdulillah anak saya dapat beasiswa sekolah.', 'Thank goodness, my child received the education scholarship.'],
    ['Pelayanan RSUD sudah jauh lebih cepat dan ramah.', 'Hospital outpatient care is noticeably faster and friendlier.'],
    ['Drainase lingkungan sudah mulai dibersihkan.', 'Neighborhood drainage cleanup is finally underway.'],
    ['Harga beras di pasar mulai stabil kembali.', 'Rice prices at the market have finally stabilized.'],
    ['Semoga Walikota tetap amanah dan bersih dari korupsi.', 'May the Mayor remain faithful to the public and clean from graft.'],
    ['Terima kasih atas bantuan modal usaha UMKM.', 'Thank you for the MSME business capital grant.'],
    ['Taman kota makin asri dan nyaman buat keluarga.', 'City parks are looking greener and more pleasant for families.'],
    ['PJU jalan sudah terang benderang, jalanan aman.', 'Streetlights are bright now, night driving feels safe.']
  ];

  let res = text;
  for (const [idStr, enStr] of phrases) {
    if (res.includes(idStr)) {
      res = res.split(idStr).join(enStr);
    }
  }

  return res;
}

function getLocalizedEvent(ev, lang = 'id') {
  if (!ev) return ev;
  if (lang === 'id') return ev;

  // 1. Check EVENT_TRANSLATIONS dictionary by ID
  const evIdStr = String(ev.id);
  const trans = EVENT_TRANSLATIONS[evIdStr];

  const loc = { ...ev };

  if (trans) {
    loc.cat = trans.cat || ev.cat_en || loc.cat;
    loc.title = trans.title || ev.title_en || loc.title;
    loc.text = trans.text || ev.text_en || loc.text;

    if (ev.choices && Array.isArray(ev.choices)) {
      loc.choices = ev.choices.map((c, idx) => {
        const transChoice = (trans.choices && trans.choices[idx]) ? trans.choices[idx] : null;
        return {
          ...c,
          t: transChoice ? transChoice.t : (c.t_en || translateDynamicText(c.t || '', 'en')),
          d: transChoice ? transChoice.d : (c.d_en || translateDynamicText(c.d || '', 'en')),
          news: transChoice && transChoice.news ? transChoice.news : (c.news_en || (c.news ? translateDynamicText(c.news, 'en') : ''))
        };
      });
    }
    return loc;
  }

  // 2. Fallback to translateDynamicText and direct _en properties
  loc.cat = ev.cat_en || translateDynamicText(ev.cat || 'Kebijakan', 'en');
  loc.title = ev.title_en || translateDynamicText(ev.title || '', 'en');
  loc.text = ev.text_en || translateDynamicText(ev.text || '', 'en');
  if (ev.choices && Array.isArray(ev.choices)) {
    loc.choices = ev.choices.map(c => ({
      ...c,
      t: c.t_en || translateDynamicText(c.t || '', 'en'),
      d: c.d_en || translateDynamicText(c.d || '', 'en'),
      news: c.news_en || (c.news ? translateDynamicText(c.news, 'en') : '')
    }));
  }
  return loc;
}

let currentEncycCat = 'all';
let currentEncycQuery = '';

function getGameLanguage() {
  return localStorage.getItem('walikota_lang') || localStorage.getItem('nusapura_lang') || 'id';
}

function updateHamLangToggleButtons(lang) {
  const curLang = lang || (typeof getGameLanguage === 'function' ? getGameLanguage() : 'id');
  const btnId = document.getElementById('hamLangId');
  const btnEn = document.getElementById('hamLangEn');
  if (btnId) btnId.classList.toggle('active', curLang === 'id');
  if (btnEn) btnEn.classList.toggle('active', curLang === 'en');
}

function switchGameLanguage(newLang) {
  if (newLang !== 'id' && newLang !== 'en') return;
  setGameLanguage(newLang);
  updateHamLangToggleButtons(newLang);
  const isEn = newLang === 'en';
  showToast(isEn ? '🇬🇧 Switched to English mode smoothly!' : '🇮🇩 Berhasil beralih ke Bahasa Indonesia!');
}

function setGameLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') lang = 'id';
  localStorage.setItem('walikota_lang', lang);
  localStorage.setItem('nusapura_lang', lang);
  updateHamLangToggleButtons(lang);

  // Update button active classes on Start Screen
  const btnId = document.getElementById('langBtnId');
  const btnEn = document.getElementById('langBtnEn');
  if (btnId) btnId.classList.toggle('active', lang === 'id');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');

  // Update Settings Modal buttons
  const optId = document.getElementById('btnLangId');
  const optEn = document.getElementById('btnLangEn');
  if (optId) {
    optId.style.borderColor = lang === 'id' ? 'var(--blue-soft)' : 'var(--line)';
    optId.style.background = lang === 'id' ? 'rgba(59,124,246,0.22)' : 'rgba(255,255,255,0.03)';
  }
  if (optEn) {
    optEn.style.borderColor = lang === 'en' ? 'var(--blue-soft)' : 'var(--line)';
    optEn.style.background = lang === 'en' ? 'rgba(59,124,246,0.22)' : 'rgba(255,255,255,0.03)';
  }

  // Update static UI elements marked with data-i18n
  const dict = I18N_DICT[lang] || I18N_DICT.id;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render components that rely on language
  renderEncyclopediaModal(currentEncycCat, currentEncycQuery);
  renderDifficultyScreen();
  if (typeof renderMayorSelectionScreen === 'function' && document.getElementById('mayorSelectionScreen')?.classList.contains('show')) renderMayorSelectionScreen();
  if (typeof updateHUD === 'function') updateHUD();
  if (typeof updateDashboard === 'function') updateDashboard();
  if (typeof updateGauges === 'function') updateGauges();
  if (typeof renderNews === 'function') renderNews();
  if (typeof renderSocial === 'function') renderSocial();
  if (typeof renderCurrentEvent === 'function') renderCurrentEvent();
  if (typeof renderCandidateScreen === 'function' && document.getElementById('candidateScreen')?.classList.contains('show')) renderCandidateScreen();
  if (typeof renderPromiseScreen === 'function' && document.getElementById('promiseScreen')?.classList.contains('show')) renderPromiseScreen();
  if (typeof renderCampaignScreen === 'function' && document.getElementById('campaignScreen')?.classList.contains('show')) renderCampaignScreen();

  // Re-render active sub-modals & hamburger navigation
  if (typeof updateHamburgerStatus === 'function') updateHamburgerStatus();
  if (typeof renderHamburgerCategory === 'function') renderHamburgerCategory(activeHamCategory);
  if (typeof updateHamburgerTabBadges === 'function') updateHamburgerTabBadges();
  if (typeof renderCabinetModal === 'function' && document.getElementById('cabinetModal')?.classList.contains('show')) renderCabinetModal();
  if (typeof renderBudgetModal === 'function' && document.getElementById('budgetModal')?.classList.contains('show')) renderBudgetModal();
  if (typeof renderDprdModal === 'function' && document.getElementById('dprdModal')?.classList.contains('show')) renderDprdModal();
  if (typeof renderAchModal === 'function' && document.getElementById('achModal')?.classList.contains('show')) renderAchModal();
  if (typeof renderActorsModal === 'function' && document.getElementById('actorsModal')?.classList.contains('show')) renderActorsModal();
  if (typeof renderStatsModal === 'function' && document.getElementById('statsModal')?.classList.contains('show')) renderStatsModal();
  if (typeof renderMegastructuresModal === 'function' && document.getElementById('megastructuresModal')?.classList.contains('show')) renderMegastructuresModal();
  if (typeof renderProcurementModal === 'function' && document.getElementById('procurementModal')?.classList.contains('show')) renderProcurementModal();
  if (typeof renderCentralDiplomacyModal === 'function' && document.getElementById('centralDiplomacyModal')?.classList.contains('show')) renderCentralDiplomacyModal();
  if (typeof renderPerdaModal === 'function' && document.getElementById('perdaModal')?.classList.contains('show')) renderPerdaModal();
  if (typeof renderEmergencyModal === 'function' && document.getElementById('emergencyModal')?.classList.contains('show')) renderEmergencyModal();
  if (typeof renderCampaignModal === 'function' && document.getElementById('campaignModal')?.classList.contains('show')) renderCampaignModal();
  if (typeof renderReportsModal === 'function' && document.getElementById('reportsModal')?.classList.contains('show')) renderReportsModal();
  if (typeof renderInvestmentModal === 'function' && document.getElementById('investmentModal')?.classList.contains('show')) renderInvestmentModal();
  if (typeof renderIntegrityModal === 'function' && document.getElementById('integrityModal')?.classList.contains('show')) renderIntegrityModal();
  if (typeof renderLifeModal === 'function' && document.getElementById('lifeModal')?.classList.contains('show')) renderLifeModal();
  if (typeof renderSecretaryBriefing === 'function' && document.getElementById('secretaryBriefingModal')?.classList.contains('show')) renderSecretaryBriefing();
  if (typeof GalleryManager !== 'undefined' && typeof GalleryManager.renderGallery === 'function' && document.getElementById('galleryModal')?.classList.contains('show')) GalleryManager.renderGallery();

  showToast(lang === 'en' ? '🇬🇧 Switched to English (Hybrid Governance Mode)!' : '🇮🇩 Beralih ke Bahasa Indonesia!');
}

function t(key) {
  const lang = getGameLanguage();
  const dict = I18N_DICT[lang] || I18N_DICT.id;
  return dict[key] || key;
}

// Helper to highlight governance terms with interactive pop-up tooltips
function highlightGovTerms(text) {
  if (!text || typeof text !== 'string') return text || '';
  
  const termMap = [
    { regex: /\b(APBD)\b/g, id: 'apbd' },
    { regex: /\b(PAD)\b/g, id: 'pad' },
    { regex: /\b(DAK)\b/g, id: 'dak' },
    { regex: /\b(DAU)\b/g, id: 'dau' },
    { regex: /\b(DBH)\b/g, id: 'dbh' },
    { regex: /\b(DPRD)\b/g, id: 'dprd' },
    { regex: /\b(LKPJ)\b/g, id: 'lkpj' },
    { regex: /\b(SILPA)\b/g, id: 'silpa' },
    { regex: /\b(KPK)\b/g, id: 'kpk' },
    { regex: /\b(BPK)\b/g, id: 'bpk' },
    { regex: /\b(Bappeda)\b/gi, id: 'bappeda' },
    { regex: /\b(Sekda)\b/gi, id: 'sekda' },
    { regex: /\b(Kadis)\b/gi, id: 'kadis' },
    { regex: /\b(Perda)\b/gi, id: 'perda' },
    { regex: /\b(Pilkada)\b/gi, id: 'pilkada' },
    { regex: /\b(Satpol\s*PP)\b/gi, id: 'satpolpp' },
    { regex: /\b(Puskesmas)\b/gi, id: 'puskesmas' },
    { regex: /\b(Rusunawa)\b/gi, id: 'rusunawa' },
    { regex: /\b(AMDAL)\b/gi, id: 'amdal' },
    { regex: /\b(WTP)\b/g, id: 'wtp' },
    { regex: /\b(PPPK)\b/g, id: 'pppk' },
    { regex: /\b(BTT)\b/g, id: 'btt' },
    { regex: /\b(KEK)\b/g, id: 'kek' },
    { regex: /\b(PSN)\b/g, id: 'psn' },
    { regex: /\b(E-Katalog|LPSE)\b/gi, id: 'ekatalog' },
    { regex: /\b(Musrenbang)\b/gi, id: 'musrenbang' },
    { regex: /\b(KUA-PPAS|KUA\s*PPAS)\b/gi, id: 'kua_ppas' },
    { regex: /\b(RPJMD)\b/gi, id: 'rpjmd' },
    { regex: /\b(TAPD)\b/gi, id: 'tapd' },
    { regex: /\b(Inspektorat|APIP)\b/gi, id: 'inspektorat' },
    { regex: /\b(BPBD)\b/gi, id: 'bpbd' },
    { regex: /\b(BUMD)\b/gi, id: 'bumd' },
    { regex: /\b(Interpelasi|Hak\s*Angket)\b/gi, id: 'interpelasi' },
    { regex: /\b(WDP|Disclaimer)\b/g, id: 'wdp' },
    { regex: /\b(SPBE)\b/g, id: 'spbe' },
    { regex: /\b(PBB-P2|BPHTB|PBB)\b/g, id: 'pbb' },
    { regex: /\b(IPM)\b/g, id: 'ipm' }
  ];

  let res = text;
  termMap.forEach(item => {
    // Avoid double wrapping if already inside a span or tag
    res = res.replace(item.regex, (match) => {
      return `<span class="govTerm" onclick="showTermTooltip('${item.id}', event)">${match}</span>`;
    });
  });
  return res;
}

// ==================== INTERACTIVE TERM TOOLTIP CONTROLLER ====================
let currentTooltipTerm = null;

function showTermTooltip(termId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const cleanId = (termId || '').toLowerCase().trim();
  const entry = GOV_GLOSSARY.find(g => g.id === cleanId || g.term.toLowerCase().includes(cleanId));
  if (!entry) return;

  currentTooltipTerm = entry;
  const lang = getGameLanguage();

  const titleEl = document.getElementById('termTooltipTitle');
  const enEl = document.getElementById('termTooltipEn');
  const catEl = document.getElementById('termTooltipCat');
  const iconEl = document.getElementById('termTooltipIcon');
  const defEl = document.getElementById('termTooltipDef');
  const gameEl = document.getElementById('termTooltipGameplayText');
  const btnLearn = document.getElementById('btnTooltipLearnMore');

  if (titleEl) titleEl.textContent = entry.term;
  if (enEl) enEl.textContent = entry.enName;
  if (catEl) catEl.textContent = entry.cat.toUpperCase();
  if (iconEl) iconEl.textContent = entry.icon || '📜';
  if (defEl) defEl.textContent = lang === 'en' ? entry.desc_en : entry.desc_id;
  if (gameEl) gameEl.textContent = lang === 'en' ? entry.gameplay_en : entry.gameplay_id;

  if (btnLearn) {
    btnLearn.textContent = lang === 'en' ? '📖 Learn More in Encyclopedia' : '📖 Buka di Ensiklopedia';
    btnLearn.onclick = () => {
      closeTermTooltip();
      subModalSource = 'hud';
      filterEncyclopediaCategory('all');
      renderEncyclopediaModal('all', entry.id);
      const modal = document.getElementById('encyclopediaModal');
      if (modal) modal.classList.add('show');
      // Scroll entry into view with a subtle golden glow
      setTimeout(() => {
        const targetCard = document.getElementById(`encycCard_${entry.id}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('highlighted');
          setTimeout(() => targetCard.classList.remove('highlighted'), 2500);
        }
      }, 200);
    };
  }

  const tooltipModal = document.getElementById('termTooltipModal');
  if (tooltipModal) {
    tooltipModal.classList.add('show');
  }
}

function closeTermTooltip() {
  const tooltipModal = document.getElementById('termTooltipModal');
  if (tooltipModal) {
    tooltipModal.classList.remove('show');
  }
}

// ==================== ENHANCED ENCYCLOPEDIA RENDERER ====================
function filterEncyclopediaCategory(cat) {
  currentEncycCat = cat;
  const filterBtns = document.querySelectorAll('.encycFilterBtn');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  renderEncyclopediaModal(currentEncycCat, currentEncycQuery);
}

function handleEncyclopediaSearch(query) {
  currentEncycQuery = (query || '').toLowerCase().trim();
  renderEncyclopediaModal(currentEncycCat, currentEncycQuery);
}

function renderEncyclopediaModal(catFilter = currentEncycCat, searchQuery = currentEncycQuery) {
  const lang = getGameLanguage();
  const body = document.getElementById('encyclopediaModalBody');
  if (!body) return;

  const filtered = GOV_GLOSSARY.filter(entry => {
    if (catFilter && catFilter !== 'all' && entry.cat !== catFilter) return false;
    if (searchQuery) {
      const matchTerm = entry.term.toLowerCase().includes(searchQuery);
      const matchEn = entry.enName.toLowerCase().includes(searchQuery);
      const matchId = entry.id.toLowerCase().includes(searchQuery);
      const matchDesc = (entry.desc_id + ' ' + entry.desc_en).toLowerCase().includes(searchQuery);
      if (!matchTerm && !matchEn && !matchId && !matchDesc) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:32px 14px;color:var(--gray-400);">
        <div style="font-size:36px;margin-bottom:8px;">🔍</div>
        <div style="font-size:14.5px;font-weight:700;color:#fff;">${lang === 'en' ? 'No terms found' : 'Istilah tidak ditemukan'}</div>
        <div style="font-size:12px;margin-top:4px;">${lang === 'en' ? 'Try searching another keyword (e.g. APBD, PAD, DPRD, DAK, SILPA)...' : 'Coba cari dengan kata kunci lain (contoh: APBD, PAD, DPRD, DAK, SILPA)...'}</div>
      </div>
    `;
    return;
  }

  body.innerHTML = filtered.map(entry => {
    const desc = lang === 'en' ? entry.desc_en : entry.desc_id;
    const gameplay = lang === 'en' ? entry.gameplay_en : entry.gameplay_id;
    const gameLabel = lang === 'en' ? '🎮 Gameplay Impact:' : '🎮 Relevansi Permainan:';

    return `
      <div class="encycCard" id="encycCard_${entry.id}">
        <div class="encycCardHeader">
          <div>
            <div class="encycTermTitle">
              <span>${entry.icon || '📜'}</span>
              <span>${entry.term}</span>
            </div>
            <div class="encycEnSubtitle">${entry.enName}</div>
          </div>
          <span class="encycCatBadge">${entry.cat}</span>
        </div>
        <div class="encycDefText">${desc}</div>
        <div class="encycGameplayBox">
          <b>${gameLabel}</b> ${gameplay}
        </div>
      </div>
    `;
  }).join('');
}

function renderDifficultyScreen() {
  const lang = getGameLanguage();
  const diffs = lang === 'en' ? [
    { id: 'easy', name: '🟢 Relaxed (Easy)', desc: 'High starting APBD reserves & forgiving citizen approval ratings.' },
    { id: 'normal', name: '🔵 Balanced (Standard)', desc: 'Realistic budget management & balanced political faction dynamics.' },
    { id: 'hard', name: '🟠 Challenging (Hard)', desc: 'Constrained budget allocations & volatile citizen sentiment.' },
    { id: 'extreme', name: '🔴 Crisis Simulation (Extreme)', desc: 'Fiscal deficits, aggressive opposition DPRD, and unforgiving public scrutiny.' }
  ] : [
    { id: 'easy', name: '🟢 Mudah (Santai)', desc: 'APBD awal besar & kepuasan warga relatif aman.' },
    { id: 'normal', name: '🔵 Normal (Standar)', desc: 'Tantangan seimbang & dinamika politik sedang.' },
    { id: 'hard', name: '🟠 Sulit (Tantangan)', desc: 'Anggaran terbatas & gejolak warga tinggi.' },
    { id: 'extreme', name: '🔴 Ekstrem (Realistis)', desc: 'Krisis anggaran & konflik politik tajam.' }
  ];

  const grid = document.getElementById('diffGrid');
  if (!grid) return;
  grid.innerHTML = diffs.map(d => {
    const isSel = (state.selectedDiff || 'normal') === d.id;
    return `
      <div class="diffCard ${isSel ? 'selected' : ''}" onclick="selectDifficulty('${d.id}')">
        <div class="diffName">${d.name}</div>
        <div class="diffDesc">${d.desc}</div>
      </div>
    `;
  }).join('');
}

function selectDifficulty(id) {
  state.selectedDiff = id;
  renderDifficultyScreen();
}

// Note: Mayoral candidate pools, distinct personal profiles, and running-mate
// datasets are externalized to data/mayor_data.js.
function renderMayorSelectionScreen() {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  if (!state.selectedMayor) state.selectedMayor = 'ardhan';

  const mayorGrid = document.getElementById('mayorGrid');
  if (mayorGrid) {
    mayorGrid.innerHTML = MAYOR_CANDIDATES.map(m => {
      const isSel = state.selectedMayor === m.id;
      const title = isEn ? (m.title_en || m.title) : m.title;
      const bg = isEn ? (m.background_en || m.background) : m.background;
      const badge = isEn ? (m.badge_en || m.badge) : m.badge;
      const desc = isEn ? (m.desc_en || m.desc) : m.desc;
      const bonus = isEn ? (m.bonusText_en || m.bonusText) : m.bonusText;
      const trait = isEn ? (m.uniqueTrait_en || m.uniqueTrait) : m.uniqueTrait;
      const prof = (typeof MAYOR_PERSONAL_PROFILES !== 'undefined' && MAYOR_PERSONAL_PROFILES[m.id])
        ? MAYOR_PERSONAL_PROFILES[m.id]
        : {
            spouse: 'dr. Sarah N. (Dokter Spesialis)',
            spouse_en: 'Dr. Sarah N. (Medical Specialist)',
            childrenDesc: '2 Anak',
            childrenDesc_en: '2 Children',
            house: 'Rumah Pribadi Asri',
            house_en: 'Serene Private Residence',
            car: 'SUV MPV Keluarga',
            car_en: 'Family MPV Vehicle',
            hobby: 'Olahraga & Membaca',
            hobby_en: 'Sports & Reading',
            wealth: 2.0
          };

      return `
        <div class="mayorCard ${isSel ? 'selected' : ''}" onclick="selectMayorCandidate('${m.id}')" data-mayor-id="${m.id}">
          <div class="mayorCardHead">
            <div class="mayorAvatar">${m.avatar}</div>
            <div style="flex:1;">
              <div class="mayorName">${m.name}</div>
              <div class="mayorTitle">${title}</div>
            </div>
            ${isSel ? '<span style="color:#60a5fa;font-size:18px;font-weight:900;">✓</span>' : ''}
          </div>
          <div class="mayorTraitBadge">${badge}</div>
          <div style="font-size:11px;color:#93c5fd;font-weight:600;margin-bottom:5px;">📌 ${bg}</div>
          <div class="mayorDesc">${desc}</div>
          <div class="mayorBonus">✨ <b>${isEn ? 'Special Buff & Trait:' : 'Keunggulan & Trait Khusus:'}</b> ${bonus} <span style="display:block;margin-top:3px;color:#fef08a;font-weight:600;">⭐ ${trait}</span></div>
          
          <!-- PERSONAL LIFE & FAMILY PROFILE PREVIEW -->
          <div style="margin-top:10px;padding:9px 11px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;font-size:11px;line-height:1.45;">
            <div style="color:#d8b4fe;font-weight:800;margin-bottom:4px;display:flex;align-items:center;gap:5px;">
              <span>🏡 ${isEn ? 'Personal Life & Family Profile:' : 'Profil Keluarga & Kehidupan Pribadi:'}</span>
            </div>
            <div style="color:var(--gray-300);">
              💍 <b>${isEn ? 'Spouse:' : 'Pasangan:'}</b> ${isEn ? (prof.spouse_en || prof.spouse) : prof.spouse}
            </div>
            <div style="color:var(--gray-300);margin-top:2px;">
              👶 <b>${isEn ? 'Children:' : 'Anak:'}</b> ${isEn ? (prof.childrenDesc_en || prof.childrenDesc) : prof.childrenDesc}
            </div>
            <div style="color:var(--gray-400);margin-top:2px;">
              🏠 <b>${isEn ? 'Residence:' : 'Kediaman:'}</b> ${isEn ? (prof.house_en || prof.house) : prof.house} • 🚗 ${isEn ? (prof.car_en || prof.car) : prof.car}
            </div>
            <div style="color:#fef08a;margin-top:3px;">
              🌿 <b>${isEn ? 'Hobbies:' : 'Hobi:'}</b> ${isEn ? (prof.hobby_en || prof.hobby) : prof.hobby}
            </div>
            <div style="color:#4ade80;font-weight:700;margin-top:3px;">
              💰 <b>${isEn ? 'LHKPN Wealth:' : 'Kekayaan Awal LHKPN:'}</b> Rp ${prof.wealth.toFixed(2)} Miliar
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  const btnConfirm = document.getElementById('btnConfirmMayor');
  if (btnConfirm) {
    btnConfirm.onclick = () => {
      if (typeof AudioManager !== 'undefined') {
        AudioManager.playSfx('sfx_stempel');
      }
      hideAllScreens();
      renderDifficultyScreen();
      const diffScreen = document.getElementById('difficultyScreen');
      if (diffScreen) diffScreen.classList.add('show');
    };
  }
}

function selectMayorCandidate(id) {
  state.selectedMayor = id;
  const mayor = MAYOR_CANDIDATES.find(m => m.id === id);
  if (mayor) {
    state.mayorCandidate = mayor;
    state.gender = mayor.gender;
    if (typeof initLifeState === 'function') {
      state.life = initLifeState(id);
    }
    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
    showToast(isEn ? `👔 Selected Mayor Candidate: ${mayor.name}` : `👔 Memilih Calon Walikota: ${mayor.name}`);
  }
  renderMayorSelectionScreen();
}

function renderCandidateScreen() {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  // Ensure selected vice mayor default
  if (!state.selectedViceMayor) state.selectedViceMayor = 'syarifuddin';

  // 1. Render Vice Mayor Running Mates
  const viceGrid = document.getElementById('viceGrid');
  if (viceGrid) {
    viceGrid.innerHTML = VICE_MAYORS.map(v => {
      const isSel = state.selectedViceMayor === v.id;
      const title = isEn ? (v.title_en || v.title) : v.title;
      const bg = isEn ? (v.background_en || v.background) : v.background;
      const badge = isEn ? (v.badge_en || v.badge) : v.badge;
      const desc = isEn ? (v.desc_en || v.desc) : v.desc;
      const bonus = isEn ? (v.bonusText_en || v.bonusText) : v.bonusText;

      return `
        <div class="viceCard ${isSel ? 'selected' : ''}" onclick="selectViceMayor('${v.id}')">
          <div class="viceCardHead">
            <div class="viceAvatar">${v.avatar}</div>
            <div style="flex:1;">
              <div class="viceName">${v.name}</div>
              <div class="viceTitle">${title}</div>
            </div>
            ${isSel ? '<span style="color:#4ade80;font-size:16px;font-weight:900;">✓</span>' : ''}
          </div>
          <div class="viceTraitBadge">${badge}</div>
          <div class="viceDesc">${desc}</div>
          <div style="margin-top:6px;font-size:10.5px;color:var(--amber);font-weight:700;">✨ <b>${isEn ? 'Buff:' : 'Dampak:'}</b> ${bonus}</div>
        </div>
      `;
    }).join('');
  }

  // 2. Render Opponent Candidate Banner & Rivalry
  if (!state.opponentCand) pickRandomOpponent();
  const opp = state.opponentCand;
  const oppBannerWrap = document.getElementById('opponentBannerWrap');
  if (oppBannerWrap && opp) {
    const oppParty = isEn ? (opp.party_en || opp.party) : opp.party;
    const oppTitle = isEn ? (opp.title_en || opp.title) : opp.title;
    const oppVision = isEn ? (opp.vision_en || opp.vision) : opp.vision;
    const oppDesc = isEn ? (opp.desc_en || opp.desc) : opp.desc;
    oppBannerWrap.innerHTML = `
      <div style="background:linear-gradient(135deg, rgba(239,68,68,0.12), rgba(0,0,0,0.4));border:1.5px solid rgba(239,68,68,0.35);border-radius:14px;padding:14px;display:flex;align-items:center;gap:14px;margin-bottom:14px;">
        <div style="font-size:36px;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;">${opp.avatar}</div>
        <div style="flex:1;">
          <div style="font-size:11px;color:var(--red);font-weight:800;letter-spacing:.05em;">${isEn ? 'MAIN ELECTION RIVAL (RANDOMIZED)' : 'LAWAN UTAMA PILKADA (ACAK)'}</div>
          <div class="candName" style="font-size:16.5px;font-weight:800;">${opp.name}</div>
          <div class="candParty" style="font-size:11.5px;color:var(--blue-soft);margin-bottom:4px;">${oppParty} • ${oppTitle}</div>
          <div class="candMeta" style="font-size:11.5px;color:var(--gray-400);line-height:1.5;"><b>${isEn ? 'Key Vision:' : 'Visi Utama:'}</b> ${oppVision}<br><b>${isEn ? 'Dynamics:' : 'Dinamika:'}</b> ${oppDesc}</div>
        </div>
        <button class="iconBtn" onclick="pickRandomOpponent(); renderCandidateScreen();" style="font-size:11px;padding:8px 12px;border-radius:10px;">${isEn ? '🎲 Re-roll Rival' : '🎲 Acak Lawan'}</button>
      </div>
    `;
  }

  // 3. Render Other Contenders
  const otherCands = OPPONENT_POOL.filter(c => c.id !== opp.id).slice(0, 3);
  const othersGrid = document.getElementById('candGridOthers');
  if (othersGrid) {
    othersGrid.innerHTML = otherCands.map(c => {
      const cParty = isEn ? (c.party_en || c.party) : c.party;
      const cTitle = isEn ? (c.title_en || c.title) : c.title;
      return `
        <div class="candCard">
          <div class="candAvatar">${c.avatar}</div>
          <div class="candName">${c.name}</div>
          <div class="candParty">${cParty}</div>
          <div class="candMeta"><b>${isEn ? 'Background:' : 'Latar Belakang:'}</b> ${cTitle}</div>
        </div>
      `;
    }).join('');
  }
}

function selectViceMayor(id) {
  state.selectedViceMayor = id;
  const vm = VICE_MAYORS.find(v => v.id === id);
  if (vm) {
    state.viceMayor = vm;
    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
    showToast(isEn ? `👥 Selected Vice Mayor: ${vm.name}` : `👥 Memilih Calon Wakil Walikota: ${vm.name}`);
  }
  renderCandidateScreen();
}


function renderPromiseScreen() {
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  state.promises = state.promises || [];

  const list = document.getElementById('promiseList');
  if (!list) return;

  const pool = (typeof activePromisePool !== 'undefined' && activePromisePool.length > 0) 
    ? activePromisePool 
    : ALL_CAMPAIGN_PROMISES.slice(0, 7);

  list.innerHTML = pool.map(p => {
    const checked = state.promises.includes(p.id);
    const isLocked = !checked && state.promises.length >= 3;
    const title = isEn ? (p.title_en || p.title) : p.title;
    const desc = isEn ? (p.desc_en || p.desc) : p.desc;

    return `
      <div class="promiseItem ${checked ? 'checked' : ''} ${isLocked ? 'locked' : ''}" 
           onclick="togglePromise('${p.id}')" 
           style="${isLocked ? 'opacity:0.55;cursor:not-allowed;' : ''}">
        <div class="promiseCheck">${checked ? '✓' : ''}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:14px;color:#fff;">${p.icon || '📌'} ${title}</div>
          <div style="font-size:12px;color:var(--gray-400);line-height:1.4;margin-top:2px;">${desc}</div>
        </div>
      </div>
    `;
  }).join('');

  const counter = document.getElementById('promiseCounter');
  if (counter) {
    counter.textContent = isEn 
      ? `${state.promises.length} / 3 promises selected (must be 3)`
      : `${state.promises.length} / 3 janji dipilih (harus 3)`;
    counter.style.color = state.promises.length === 3 ? '#4ade80' : 'var(--blue-soft)';
  }

  const btnStart = document.getElementById('btnStartCampaign');
  if (btnStart) {
    if (state.promises.length === 3) {
      btnStart.disabled = false;
      btnStart.textContent = isEn ? '🚩 Launch Mayoral Campaign (3/3 Selected)' : '🚩 Mulai Kampanye Pilkada (3/3 Dipilih)';
      btnStart.style.opacity = '1';
      btnStart.style.cursor = 'pointer';
    } else {
      btnStart.disabled = true;
      btnStart.textContent = isEn 
        ? `⚠️ Select Exactly 3 Promises (${state.promises.length}/3)` 
        : `⚠️ Pilih Tepat 3 Janji Kampanye (${state.promises.length}/3)`;
      btnStart.style.opacity = '0.6';
      btnStart.style.cursor = 'not-allowed';
    }
  }
}

function togglePromise(id) {
  state.promises = state.promises || [];
  const idx = state.promises.indexOf(id);
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (idx >= 0) {
    state.promises.splice(idx, 1);
  } else {
    if (state.promises.length >= 3) {
      showToast(isEn 
        ? '⚠️ You have already selected 3 priority promises! Uncheck one to choose another.' 
        : '⚠️ Anda sudah memilih 3 janji prioritas! Batalkan salah satu jika ingin memilih janji lain.');
      return;
    }
    state.promises.push(id);
  }
  renderPromiseScreen();
}


// Note: Electoral campaign event sequences and televised debate dilemmas
// are externalized to data/campaign_events.js.

function startCampaignFlow() {
  hideAllScreens();
  showHamburgerFab();
  const diff = state.selectedDiff || 'normal';

  // Apply Vice Mayor running mate selection
  const chosenVmId = state.selectedViceMayor || 'syarifuddin';
  state.viceMayor = VICE_MAYORS.find(v => v.id === chosenVmId) || VICE_MAYORS[0];
  if (state.viceMayor && state.viceMayor.bonus) {
    if (state.viceMayor.bonus.sat) state.sat = Math.min(100, (state.sat || 68) + state.viceMayor.bonus.sat);
    if (state.viceMayor.bonus.pad) state.pad = Math.round(((state.pad || 7) + state.viceMayor.bonus.pad) * 10) / 10;
  }

  const isTerm2 = state.term === 2;

  if (!state.opponentCand) pickRandomOpponent();
  const opp = state.opponentCand;
  const oppBonus = opp ? (opp.bonus || 0) : 0;

  let baseElek = 44;
  let oppElek = 52 + oppBonus;
  let baseFunds = 3.0;
  let mult = 1.0;

  if (diff === 'easy') {
    baseElek = 52;
    oppElek = 40 + oppBonus;
    baseFunds = 5.0;
    mult = 1.25;
  } else if (diff === 'normal') {
    baseElek = 44;
    oppElek = 52 + oppBonus;
    baseFunds = 3.0;
    mult = 1.0;
  } else if (diff === 'hard') {
    baseElek = 26;
    oppElek = 68 + oppBonus;
    baseFunds = 1.0;
    mult = 0.70;
  } else if (diff === 'extreme') {
    baseElek = 16;
    oppElek = 78 + oppBonus;
    baseFunds = 0.5;
    mult = 0.50;
  }

  // Difficulty and track record adjustments
  if (isTerm2) {
    oppElek += 5;
    const cStats = calculateCabinetStats();
    if (cStats.riskKorupsi > 25) {
      const penalty = Math.min(10, Math.round((cStats.riskKorupsi - 25) / 4));
      baseElek -= penalty;
      showToast(`⚠️ Risiko korupsi birokrasi (${cStats.riskKorupsi}%) menurunkan elektabilitas awal sebesar -${penalty}%!`);
    }
    if (state.sat < 65) {
      const penaltySat = Math.min(8, Math.round((65 - state.sat) / 4));
      baseElek -= penaltySat;
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `⚠️ Low public approval (${Math.round(state.sat)}%) reduced initial electoral support by -${penaltySat}%!` : `⚠️ Kepuasan publik yang rendah (${Math.round(state.sat)}%) mengurangi dukungan awal sebesar -${penaltySat}%!`);
    } else if (state.sat >= 80) {
      const bonusSat = Math.min(8, Math.round((state.sat - 80) / 3) + 2);
      baseElek += bonusSat;
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `🌟 High public approval (${Math.round(state.sat)}%) granted initial electability bonus +${bonusSat}%!` : `🌟 Apresiasi kepuasan publik tinggi (${Math.round(state.sat)}%) memberi bonus elektabilitas awal +${bonusSat}%!`);
    }
  } else {
    // Term 1 candidate background bonus
    if (state.sat && state.sat > 70) {
      baseElek += 3;
    }
  }

  const promiseBonus = Math.min(10, (state.promises ? state.promises.length : 0) * 2);

  state.camp = {
    day: 1,
    diff: diff,
    mult: mult,
    elek: Math.max(5, Math.min(95, baseElek + promiseBonus)),
    oppElek: Math.max(10, Math.min(95, oppElek)),
    funds: baseFunds,
    selectedTab: 'times',
    media: {
      times: [isTerm2 ? `📰 Kampanye Petahana Periode Kedua Nusapura resmi dibuka melawan ${opp.name}.` : `📰 Kampanye resmi Pilkada Nusapura telah dimulai. Lawan utama: ${opp.name}.`],
      tv: [isTerm2 ? `📺 Liputan Khusus: Mampukah Walikota menahan gempuran kampanye ${opp.name}?` : `📺 Diskusi publik menyambut pendaftaran kandidat Walikota.`],
      forum: ['🗣️ Warga berharap Pilkada berjalan jujur, adil, dan sejuk.'],
      sosmed: [`💬 @InfoNusapura: ${opp.name} (${opp.party}) menjadi penantang utama di Pilkada tahun ini!`]
    }
  };
  const screen = document.getElementById('campaignScreen');
  if (screen) screen.classList.add('show');
  renderCampaignScreen();
}

function setupMediaTabListeners() {
  const btns = document.querySelectorAll('.mediaTabBtn');
  if (!btns || btns.length === 0) return;
  btns.forEach(btn => {
    btn.onclick = () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (state.camp) state.camp.selectedTab = btn.getAttribute('data-tab') || 'times';
      renderCampMediaList();
    };
  });
}

function renderCampMediaList() {
  const camp = state.camp;
  if (!camp) return;
  const listEl = document.getElementById('campMediaList');
  if (!listEl) return;
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  const tab = camp.selectedTab || 'times';
  const items = camp.media[tab] || [];
  if (items.length === 0) {
    listEl.innerHTML = `<div class="newsEmpty">${isEn ? 'No campaign media coverage yet.' : 'Belum ada liputan berita.'}</div>`;
    return;
  }
  listEl.innerHTML = items.slice(-8).reverse().map(text => `
    <div class="newsItem mood-1">
      <span>${text}</span>
    </div>
  `).join('');
}

function renderCampaignScreen() {
  const camp = state.camp;
  if (!camp) return;
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  const dayTrack = document.getElementById('campDayTrack');
  if (dayTrack) {
    dayTrack.innerHTML = Array.from({ length: 10 }).map((_, i) => {
      const d = i + 1;
      let cls = 'campDaySeg';
      if (d < camp.day) cls += ' done';
      else if (d === camp.day) cls += ' current';
      const title = isEn ? `Day ${d}` : `Hari ke-${d}`;
      return `<div class="${cls}" title="${title}"></div>`;
    }).join('');
  }

  const opp = state.opponentCand || { name: 'Lawan Politik' };
  const oppShortName = opp.name.split(',')[0];
  const campHud = document.getElementById('campHud');
  if (campHud) {
    campHud.innerHTML = `
      <div class="campHudItem">
        <div class="campHudLabel">${isEn ? 'Your Electability' : 'Elektabilitas Anda'}</div>
        <div class="campHudVal" style="color:var(--green);">${camp.elek.toFixed(1)}%</div>
      </div>
      <div class="campHudItem">
        <div class="campHudLabel">${isEn ? `Rival (${oppShortName})` : `Lawan (${oppShortName})`}</div>
        <div class="campHudVal" style="color:var(--red);">${camp.oppElek.toFixed(1)}%</div>
      </div>
      <div class="campHudItem">
        <div class="campHudLabel">${isEn ? 'Campaign War Chest' : 'Dana Kampanye'}</div>
        <div class="campHudVal" style="color:var(--amber);">Rp ${camp.funds.toFixed(1)} M</div>
      </div>
    `;
  }

  const labelEl = document.getElementById('campProgressLabel');
  const cardEl = document.getElementById('campEventCard');
  if (camp.day <= 10) {
    const evList = (state.term === 2) ? CAMPAIGN_EVENTS_TERM2 : CAMPAIGN_EVENTS;
    const rawEv = evList[camp.day - 1];
    const evCat = isEn ? (rawEv.cat_en || rawEv.cat) : rawEv.cat;
    const evTitle = isEn ? (rawEv.title_en || rawEv.title) : rawEv.title;
    const evText = isEn ? (rawEv.text_en || rawEv.text) : rawEv.text;

    if (labelEl) {
      labelEl.textContent = isEn 
        ? `Campaign Period Day ${camp.day} of 10 — ${evCat}`
        : `Masa Kampanye Hari ke-${camp.day} dari 10 — ${evCat}`;
    }
    if (cardEl) {
      cardEl.innerHTML = `
        <div class="eventHeader">
          <div class="eventIcon">${rawEv.icon}</div>
          <div>
            <div class="eventCat">${evCat}</div>
            <div class="eventTitle">${typeof highlightGovTerms === 'function' ? highlightGovTerms(evTitle) : evTitle}</div>
          </div>
        </div>
        <div class="eventText">${typeof highlightGovTerms === 'function' ? highlightGovTerms(evText) : evText}</div>
        <div class="choiceList">
          ${rawEv.choices.map((c, idx) => {
            const cT = isEn ? (c.t_en || c.t) : c.t;
            const cD = isEn ? (c.d_en || c.d) : c.d;
            return `
              <button class="choiceBtn" onclick="handleCampChoiceClick(${idx})">
                <div class="choiceLabel">${typeof highlightGovTerms === 'function' ? highlightGovTerms(cT) : cT}</div>
                <div class="choiceDesc">${typeof highlightGovTerms === 'function' ? highlightGovTerms(cD) : cD}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }
  } else {
    if (labelEl) labelEl.textContent = isEn ? '10-Day Campaign Period Completed!' : 'Masa Kampanye 10 Hari Telah Selesai!';
    if (cardEl) {
      const isLeading = camp.elek > camp.oppElek;
      cardEl.innerHTML = `
        <div class="startStory" style="margin-top:10px;">
          <b>🎉 ${isEn ? '10-Day Campaign Period Concluded!' : 'Masa Kampanye 10 Hari Telah Berakhir!'}</b><br>
          ${isEn ? 'Final Nusapura Mayoral Election Polls' : 'Hasil Akhir Survei Elektabilitas Pilkada Nusapura'} (${state.term === 2 ? (isEn ? 'Second Term' : 'Periode Kedua') : (isEn ? 'First Term' : 'Periode Pertama')}):<br>
          • <b>${isEn ? 'You' : 'Anda'}:</b> <span style="color:var(--green);font-weight:800;">${camp.elek.toFixed(1)}%</span><br>
          • <b>${opp.name}:</b> <span style="color:var(--red);font-weight:800;">${camp.oppElek.toFixed(1)}%</span><br><br>
          ${isLeading
            ? (isEn ? '🔥 You successfully led the polls heading into voting day! Prepare for the official ballot count.' : '🔥 Anda berhasil mengungguli lawan dalam survei elektabilitas! Persiapkan diri menuju pemungutan suara resmi.')
            : (isEn ? '⚠️ The race remains down to the wire! Let us see the final tally in the Quick Count.' : '⚠️ Persaingan sangat ketat hingga menit akhir! Mari kita lihat hasil akhir penghitungan di Quick Count.')}
        </div>
        <button class="bigBtn" style="margin-top:16px;width:100%;" onclick="runQuickCountAnimation()">${isEn ? '🗳️ Proceed to Polling Quick Count →' : '🗳️ Menuju Quick Count Pemungutan Suara →'}</button>
      `;
    }
  }

  renderCampMediaList();
  setupMediaTabListeners();
}

function handleCampChoiceClick(choiceIdx) {
  const camp = state.camp;
  if (!camp || camp.day > 10) return;
  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';
  const evList = (state.term === 2) ? CAMPAIGN_EVENTS_TERM2 : CAMPAIGN_EVENTS;
  const ev = evList[camp.day - 1];
  const choice = ev.choices[choiceIdx];
  if (!choice) return;

  const mult = camp.mult || 1.0;

  if (choice.effects) {
    if (choice.effects.elek) {
      const delta = choice.effects.elek * mult;
      camp.elek = Math.max(5, Math.min(95, camp.elek + delta));
    }
    if (choice.effects.oppElek) {
      const delta = choice.effects.oppElek * mult;
      camp.oppElek = Math.max(5, Math.min(95, camp.oppElek + delta));
    }
    if (choice.effects.funds) {
      const fundChange = choice.effects.funds / 1000;
      if (fundChange < 0 && (camp.funds + fundChange) < 0 && (state.selectedDiff === 'hard' || state.selectedDiff === 'extreme')) {
        camp.elek = Math.max(3, camp.elek - 4.5);
        showToast(isEn ? '⚠️ CAMPAIGN WAR CHEST DEPLETED! Mired in vendor debts! Electability plunged -4.5%!' : '⚠️ DANA KAMPANYE HABIS! Terlilit utang vendor & iklan! Elektabilitas anjlok -4.5%!');
        if (!state.news) state.news = [];
        state.news.push({ year: isEn ? 'Election' : 'Pilkada', text: isEn ? 'Campaign team overwhelmed with banner printing & vendor debts.' : 'Tim kampanye terlilit utang vendor & pencetakan spanduk.', mood: -1 });
      }
      camp.funds = Math.max(0.05, Math.round((camp.funds + fundChange) * 100) / 100);
    }
    if (choice.effects.sat && state.sat) {
      state.sat = Math.max(10, Math.min(100, state.sat + choice.effects.sat));
    }
    if (choice.effects.apbd && state.apbd) {
      state.apbd = Math.max(1, Math.round((state.apbd + choice.effects.apbd) * 10) / 10);
    }
    if (choice.effects.actors) {
      updateActorRelations(choice.effects.actors);
    }
  }

  if (choice.media) {
    const dayPrefix = isEn ? `Day ${camp.day}` : `Hari ${camp.day}`;
    const mTimes = isEn ? (choice.media.times_en || choice.media.times) : choice.media.times;
    const mTv = isEn ? (choice.media.tv_en || choice.media.tv) : choice.media.tv;
    const mForum = isEn ? (choice.media.forum_en || choice.media.forum) : choice.media.forum;
    const mSosmed = isEn ? (choice.media.sosmed_en || choice.media.sosmed) : choice.media.sosmed;
    if (mTimes) camp.media.times.push(`${dayPrefix}: ${mTimes}`);
    if (mTv) camp.media.tv.push(`${dayPrefix}: ${mTv}`);
    if (mForum) camp.media.forum.push(`${dayPrefix}: ${mForum}`);
    if (mSosmed) camp.media.sosmed.push(`${dayPrefix}: ${mSosmed}`);
  }

  const toastMsg = isEn 
    ? `✅ Day ${camp.day} campaign response recorded! (Electability ${choice.effects.elek >= 0 ? '+' : ''}${(choice.effects.elek * mult).toFixed(1)}%)`
    : `✅ Tanggapan Hari ke-${camp.day} tersampaikan! (Elektabilitas ${choice.effects.elek >= 0 ? '+' : ''}${(choice.effects.elek * mult).toFixed(1)}%)`;
  showToast(toastMsg);

  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_stempel');
  }

  camp.day++;
  renderCampaignScreen();
}

function startMainGameTerm(term) {
  try {
    state.term = term || 1;
    state.year = 1;
    state.eventIdx = 0;

    if (typeof AudioManager !== 'undefined') {
      AudioManager.playBgm('balaikota');
      AudioManager.playSfx('sfx_palu');
    }

    const diffKey = state.selectedDiff || 'normal';
    const diffs = {
      easy: { apbdBonus: 1.0, padBonus: 0.6, satBonus: 10, stats: { unemp: 5, pov: 5, inf: 2, traffic: 50, poll: 40, inv: 65, crime: 35, flood: 35, edu: 65, health: 65, infra: 65, env: 60 } },
      normal: { apbdBonus: 0.0, padBonus: 0.0, satBonus: 0, stats: { unemp: 7, pov: 8, inf: 3, traffic: 65, poll: 55, inv: 50, crime: 50, flood: 50, edu: 55, health: 55, infra: 50, env: 45 } },
      hard: { apbdBonus: -1.0, padBonus: -0.4, satBonus: -15, stats: { unemp: 11, pov: 12, inf: 5, traffic: 75, poll: 65, inv: 38, crime: 62, flood: 60, edu: 45, health: 45, infra: 40, env: 38 } },
      extreme: { apbdBonus: -1.8, padBonus: -0.7, satBonus: -26, stats: { unemp: 15, pov: 15, inf: 7, traffic: 82, poll: 75, inv: 28, crime: 72, flood: 70, edu: 38, health: 38, infra: 32, env: 30 } }
    };
    const diff = diffs[diffKey] || diffs.normal;

    if (state.transferPusat == null) state.transferPusat = 2.6;
    if (state.pad == null) state.pad = Math.round((1.2 + diff.padBonus) * 10) / 10;
    
    // Always set annual APBD based on annual revenue capacity for Year 1 of this term
    state.apbd = Math.round((state.transferPusat + state.pad + diff.apbdBonus) * 10) / 10;
    if (state.penduduk == null) {
      state.penduduk = 1350000;
    }
    if (state.sat == null) {
      state.sat = Math.max(15, Math.min(100, 68 + diff.satBonus));
    }
    if (state.stats == null) {
      state.stats = Object.assign({}, diff.stats);
    }

    // Apply Mayor Candidate specific starting buffs
    if (!state.mayorCandidate && state.selectedMayor) {
      state.mayorCandidate = MAYOR_CANDIDATES.find(m => m.id === state.selectedMayor) || MAYOR_CANDIDATES[0];
    }
    if (!state.mayorCandidate) {
      state.mayorCandidate = MAYOR_CANDIDATES[0];
      state.selectedMayor = state.mayorCandidate.id;
    }

    const mBonus = state.mayorCandidate.bonus || {};
    if (term === 1 && !state.mayorBuffsApplied) {
      state.mayorBuffsApplied = true;
      if (mBonus.pad != null) state.pad = Math.round((state.pad + mBonus.pad) * 10) / 10;
      if (mBonus.bonusApbd != null) state.apbd = Math.round((state.apbd + mBonus.bonusApbd) * 10) / 10;
      if (mBonus.sat != null) state.sat = Math.max(15, Math.min(100, state.sat + mBonus.sat));
      if (mBonus.elek != null) state.elek = Math.max(10, Math.min(100, (state.elek || 50) + mBonus.elek));
      if (mBonus.riskKorupsi != null) state.risk = Math.max(5, Math.min(95, (state.risk || 20) + mBonus.riskKorupsi));

      if (state.stats) {
        if (mBonus.infra != null) state.stats.infra = Math.max(10, Math.min(100, (state.stats.infra || 50) + mBonus.infra));
        if (mBonus.flood != null) state.stats.flood = Math.max(5, Math.min(100, (state.stats.flood || 50) + mBonus.flood));
        if (mBonus.pov != null) state.stats.pov = Math.max(2, Math.min(100, (state.stats.pov || 8) + mBonus.pov));
        if (mBonus.env != null) state.stats.env = Math.max(10, Math.min(100, (state.stats.env || 45) + mBonus.env));
        if (mBonus.inv != null) state.stats.inv = Math.max(10, Math.min(100, (state.stats.inv || 50) + mBonus.inv));
        if (mBonus.unemp != null) state.stats.unemp = Math.max(2, Math.min(100, (state.stats.unemp || 7) + mBonus.unemp));
        if (mBonus.health != null) state.stats.health = Math.max(10, Math.min(100, (state.stats.health || 55) + mBonus.health));
      }
    }

    if (state.actors == null || Object.keys(state.actors).length === 0) {
      state.actors = initActors();
      if (mBonus.actorLsm && state.actors.lsm) state.actors.lsm.relation = Math.min(100, state.actors.lsm.relation + mBonus.actorLsm);
      if (mBonus.actorBpk && state.actors.bpk) state.actors.bpk.relation = Math.min(100, state.actors.bpk.relation + mBonus.actorBpk);
    }
    if (!state.cabinet || !Array.isArray(state.cabinet) || state.cabinet.length === 0) {
      state.cabinet = initCabinet();
    }
    if (!state.budgetAlloc) {
      state.budgetAlloc = { infra: 25, edu: 20, health: 20, env: 15, economy: 10, operasional: 10 };
    }
    if (!state.cooldowns) state.cooldowns = {};
    if (!state.flags) state.flags = {};
    if (!state.earnedAch) state.earnedAch = [];
    if (!state.history) state.history = [];

    state.usedEventIds = [];
    state.currentActiveEvent = null;
    state.yearEvents = buildYearOrder();

    if (!state.news) state.news = [];
    const currentLang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
    const isEnMode = currentLang === 'en';
    if (term === 1) {
      const mayorName = state.mayorCandidate ? state.mayorCandidate.name : 'Walikota';
      const mayorTitle = state.mayorCandidate ? (isEnMode ? (state.mayorCandidate.title_en || state.mayorCandidate.title) : state.mayorCandidate.title) : '';
      state.news.unshift({
        year: isEnMode ? 'Yr 1' : 'Thn 1',
        text: `${mayorName} resmi dilantik sebagai Walikota untuk memimpin Kota Nusapura Periode Pertama (${mayorTitle}).`,
        text_en: `${mayorName} formally inaugurated as Mayor to lead Nusapura City for the First Term (${mayorTitle}).`,
        mood: 1
      });
    } else {
      const mayorName = state.mayorCandidate ? state.mayorCandidate.name : 'Walikota';
      state.news.unshift({
        year: isEnMode ? 'Yr 1 (T2)' : 'Thn 1 (P2)',
        text: `🎉 ${mayorName} resmi dilantik kembali untuk Periode Kedua kepemimpinan Kota Nusapura!`,
        text_en: `🎉 ${mayorName} officially inaugurated for the Second Term of Nusapura City governance!`,
        mood: 1
      });
    }
    if (!state.social) state.social = [];
    const salute = state.mayorCandidate && state.mayorCandidate.gender === 'female'
      ? (isEnMode ? 'Madam Mayor' : 'Ibu Walikota')
      : (isEnMode ? 'Mr. Mayor' : 'Pak Walikota');
    const mayorShort = state.mayorCandidate ? state.mayorCandidate.name.split(',')[0] : salute;
    state.social.unshift({
      avatar: '👤',
      handle: '@WargaNusapura',
      text: term === 1 ? `Selamat bertugas ${salute} ${mayorShort}! Bawa Kota Nusapura lebih maju dan sejahtera!` : `Selamat atas periode kedua ${salute}! Lanjutkan pembangunan!`,
      text_en: term === 1 ? `Congratulations ${salute} ${mayorShort}! Lead Nusapura City toward greater prosperity!` : `Congratulations on your second term ${salute}! Keep up the momentum!`
    });
    hideAllScreens();
    const appEl = document.getElementById('app');
    if (appEl) appEl.style.display = 'block';

    showHamburgerFab();
    updateHUD();
    updateDashboard();
    updateGauges();
    renderNews();
    renderSocial();
    renderCurrentEvent();
    notifySecretaryBriefingReady();
    saveGame();
  } catch (err) {
    console.error('Error starting main game term:', err);
    showToast('⚠️ Gagal memulai masa jabatan: ' + err.message);
  }
}

function runQuickCountAnimation() {
  hideAllScreens();
  const qcScreen = document.getElementById('quickCountScreen');
  if (qcScreen) qcScreen.classList.add('show');

  const qcBars = document.getElementById('qcBars');
  const qcLabel = document.getElementById('qcPercentLabel');
  const qcResult = document.getElementById('qcResult');
  const qcActions = document.getElementById('qcActions');

  const lang = typeof getGameLanguage === 'function' ? getGameLanguage() : 'id';
  const isEn = lang === 'en';

  if (qcActions) qcActions.style.display = 'none';
  if (qcResult) qcResult.textContent = '';
  if (qcLabel) qcLabel.textContent = isEn ? 'Tabulating ballots from 2,450 polling stations citywide...' : 'Menghitung suara masuk dari 2.450 TPS seluruh kota...';

  if (!state.opponentCand) pickRandomOpponent();
  const opp = state.opponentCand;
  const oppShortName = opp.name.split(',')[0];

  if (qcBars) {
    qcBars.innerHTML = `
      <div class="qcRow">
        <div class="qcAvatar">👔</div>
        <div class="qcName">${isEn ? 'You' : 'Anda'}</div>
        <div class="qcBarTrack">
          <div class="qcBarFill player" id="qcBarPlayer">0%</div>
        </div>
      </div>
      <div class="qcRow">
        <div class="qcAvatar">${opp.avatar}</div>
        <div class="qcName">${oppShortName}</div>
        <div class="qcBarTrack">
          <div class="qcBarFill opponent" id="qcBarOpp">0%</div>
        </div>
      </div>
    `;
  }

  const rawElek = state.camp ? state.camp.elek : 45.0;
  const rawOpp = state.camp ? state.camp.oppElek : 55.0;
  const total = rawElek + rawOpp;

  let finalPlayerScore = Math.round((rawElek / total) * 1000) / 10;
  let finalOppScore = Math.round((100 - finalPlayerScore) * 10) / 10;
  const isWin = finalPlayerScore >= 50.0;

  setTimeout(() => {
    const playerBar = document.getElementById('qcBarPlayer');
    const oppBar = document.getElementById('qcBarOpp');
    if (playerBar) {
      playerBar.style.width = `${finalPlayerScore}%`;
      playerBar.textContent = `${finalPlayerScore}%`;
    }
    if (oppBar) {
      oppBar.style.width = `${finalOppScore}%`;
      oppBar.textContent = `${finalOppScore}%`;
    }

    if (qcLabel) qcLabel.textContent = isEn ? '100% Ballots Counted — Official Quick Count Completed' : '100% Suara Masuk — Quick Count Resmi Selesai';
    if (qcResult) {
      if (isWin) {
        if (typeof AudioManager !== 'undefined') {
          AudioManager.playBgm('pemilu');
          AudioManager.playSfx('sfx_tepuk_tangan');
        }
        qcResult.className = 'qcResult win';
        if (isEn) {
          qcResult.textContent = `🎉 Congratulations! You have been elected Mayor of Nusapura (${state.term === 2 ? 'Second Term' : 'First Term'})!`;
        } else {
          qcResult.textContent = `🎉 Selamat! Anda Terpilih Sebagai Walikota Nusapura (${state.term === 2 ? 'Periode Kedua' : 'Periode Pertama'})!`;
        }
      } else {
        if (typeof AudioManager !== 'undefined') {
          AudioManager.playSfx('sfx_palu');
        }
        qcResult.className = 'qcResult lose';
        if (isEn) {
          qcResult.textContent = `❌ Election Defeat! ${opp.name} has been elected as the new Mayor (${finalOppScore}% vs ${finalPlayerScore}%)`;
        } else {
          qcResult.textContent = `❌ Kalah Pilkada! ${opp.name} Terpilih Sebagai Walikota Baru (${finalOppScore}% vs ${finalPlayerScore}%)`;
        }
      }
    }
    if (qcActions) {
      qcActions.style.display = 'flex';
      const targetTerm = state.term === 2 ? 2 : 1;
      if (isWin) {
        qcActions.innerHTML = `
          <button class="bigBtn" id="btnStartTermAfterQC" onclick="startMainGameTerm(${targetTerm})">${isEn ? `🏛️ Inaugurate ${targetTerm === 2 ? 'Second' : 'First'} Term (Year 1)` : `🏛️ Mulai Masa Jabatan ${targetTerm === 2 ? 'Kedua' : 'Pertama'} (Tahun ke-1)`}</button>
          <button class="bigBtn secondary" onclick="showStartScreen()">${isEn ? '🏠 Return to Main Menu' : '🏠 Kembali ke Menu Utama'}</button>
        `;
      } else {
        qcActions.innerHTML = `
          <button class="bigBtn" onclick="startCampaignFlow()">${isEn ? '🔄 Retry Mayoral Campaign' : '🔄 Ulangi Kampanye Pilkada'}</button>
          <button class="bigBtn secondary" onclick="showStartScreen()">${isEn ? '🏠 Return to Main Menu' : '🏠 Kembali ke Menu Utama'}</button>
        `;
      }
    }
  }, 1200);
}

// Window exports
/* ================= POINT 7: MEGASTRUCTURES ================= */
function getMegastructureList() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (!state.megastructures) {
    state.megastructures = [
      { id: 'mrt', name: '🚆 MRT Line 1 Nusapura', name_en: '🚆 MRT Line 1 Nusapura Rapid Transit', cost: 3.5, progress: 0, desc: 'Transportasi umum berbasis rel melayang terpadu pusat kota.', desc_en: 'Integrated elevated metropolitan rapid rail transit.', fx: 'Kemacetan -20%, PAD +1.2 T/thn, Kepuasan +10%', fx_en: 'Traffic -20%, PAD +1.2 T/yr, Approval +10%' },
      { id: 'solar', name: '☀️ PLTS 500MW Green Energy Hub', name_en: '☀️ 500MW Solar Clean Energy Hub', cost: 2.5, progress: 0, desc: 'Pembangkit listrik tenaga surya bersih terluas.', desc_en: 'Regional utility-scale solar renewable energy grid.', fx: 'Polusi -15%, Lingkungan +18%, PAD +0.8 T/thn', fx_en: 'Pollution -15%, Environment +18%, PAD +0.8 T/yr' },
      { id: 'hospital', name: '🏥 Smart Hospital International', name_en: '🏥 International Smart Referral Hospital', cost: 2.0, progress: 0, desc: 'Rumah sakit rujukan medis berbasis AI & telemedicine.', desc_en: 'AI-driven specialist telemedicine & trauma medical center.', fx: 'Kesehatan +22%, Kepuasan Warga +8%', fx_en: 'Healthcare +22%, Citizen Approval +8%' },
      { id: 'seawall', name: '🌊 Waterfront Defense & Sea Wall', name_en: '🌊 Waterfront Defense & Polder Sea Wall', cost: 2.8, progress: 0, desc: 'Tanggul laut polder pencegah banjir rob & promenade.', desc_en: 'Coastal flood protection barrier & urban promenade.', fx: 'Risiko Banjir -25%, Investasi +15%', fx_en: 'Flood Risk -25%, Investment +15%' },
      { id: 'techhub', name: '🚀 Nusapura Silicon Valley Hub', name_en: '🚀 Nusapura Silicon Valley & Tech Park', cost: 3.0, progress: 0, desc: 'Kawasan industri kreatif digital & riset sains.', desc_en: 'Digital innovation and startup research district.', fx: 'Pengangguran -15%, Investasi +20%, PAD +1.5 T/thn', fx_en: 'Unemployment -15%, Investment +20%, PAD +1.5 T/yr' }
    ];
  }
  return state.megastructures;
}

function renderMegastructuresModal() {
  const body = document.getElementById('megastructuresModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const list = getMegastructureList();

  body.innerHTML = list.map(m => {
    const isDone = m.progress >= 100;
    const name = (isEn && m.name_en) ? m.name_en : m.name;
    const desc = (isEn && m.desc_en) ? m.desc_en : m.desc;
    const fx = (isEn && m.fx_en) ? m.fx_en : m.fx;

    return `
      <div class="v3Row" style="padding:14px;border-color:${isDone ? 'rgba(62,207,142,0.4)' : 'var(--line)'};background:${isDone ? 'rgba(62,207,142,0.06)' : 'rgba(255,255,255,0.03)'}">
        <div class="v3RowHead">
          <span style="font-size:16px;">${name} ${isDone ? (isEn ? '✅ [COMPLETED]' : '✅ [SELESAI]') : ''}</span>
          <span style="color:var(--blue-soft);font-size:13px;">${isEn ? 'Total Cost' : 'Biaya'}: Rp ${m.cost.toFixed(1)} T</span>
        </div>
        <div class="v3RowSub" style="margin:6px 0;">${desc}</div>
        <div style="font-size:11.5px;color:var(--amber);margin-bottom:8px;">🌟 ${isEn ? 'Permanent Impact:' : 'Dampak Permanen:'} ${fx}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
          <div class="v3GaugeTrack" style="flex:1;height:10px;">
            <div class="v3GaugeFill" style="width:${Math.min(100, m.progress)}%;background:linear-gradient(90deg,var(--blue),var(--green));"></div>
          </div>
          <span style="font-size:12px;font-weight:800;">${Math.min(100, Math.round(m.progress))}%</span>
        </div>
        ${!isDone ? `
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="socialActionBtn" onclick="investMegastructure('${m.id}', 0.5)">💰 ${isEn ? 'Fund Rp 0.5 T' : 'Cicil Rp 0.5 T'} (+${Math.round((0.5 / m.cost) * 100)}%)</button>
            <button class="socialActionBtn" onclick="investMegastructure('${m.id}', 1.0)">💰 ${isEn ? 'Fund Rp 1.0 T' : 'Cicil Rp 1.0 T'} (+${Math.round((1.0 / m.cost) * 100)}%)</button>
          </div>
        ` : `<div style="font-size:12px;color:var(--green);font-weight:700;">🎉 ${isEn ? 'This megastructure is fully operational and benefiting the city.' : 'Proyek ini telah beroperasi dan memberikan dampak nyata bagi Kota Nusapura.'}</div>`}
      </div>
    `;
  }).join('');
}

function investMegastructure(mId, amount) {
  if (state.apbd < amount) {
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `⚠️ Insufficient APBD funds! Need Rp ${amount} T.` : `⚠️ Kas APBD tidak cukup! Butuh Rp ${amount} T.`);
    return;
  }
  const list = getMegastructureList();
  const proj = list.find(m => m.id === mId);
  if (!proj || proj.progress >= 100) return;

  state.apbd = Math.max(0, Math.round((state.apbd - amount) * 10) / 10);
  const progAdd = (amount / proj.cost) * 100;
  proj.progress = Math.min(100, proj.progress + progAdd);

  if (proj.progress >= 100) {
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `🎉 MEGAPROJECT COMPLETED: ${proj.name_en || proj.name} is officially operational! Permanent impact active!` : `🎉 MEGASTRUKTUR SELESAI: ${proj.name} resmi diresmikan! Dampak permanen aktif!`);
    state.sat = Math.min(100, state.sat + 8);
    if (!state.news) state.news = [];
    const projNameEn = proj.name_en || proj.name;
    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: `Proyek raksasa ${proj.name} resmi selesai dikerjakan & beroperasi!`,
      text_en: `Megaproject ${projNameEn} is officially completed and operational!`,
      mood: 1
    });
  } else {
    showToast(`🏗️ Investasi Rp ${amount} T disalurkan ke ${proj.name} (Progres: ${Math.round(proj.progress)}%).`);
  }
  updateHUD();
  renderMegastructuresModal();
  saveGame();
}

/* ================= FITUR 5: E-KATALOG & LELANG PROYEK DAERAH ================= */
function getProcurementProjects() {
  if (!state.procurementProjects || state.procurementProjects.length === 0) {
    state.procurementProjects = [
      { id: 'bus_trans', title: '🚍 Bus Rapid Transit (BRT) Trans Nusapura', cat: 'Transportasi Publik', desc: 'Pengadaan 100 unit armada bus listrik ramah lingkungan.', status: 'pending' },
      { id: 'polder_rob', title: '🌊 Konstruksi Tanggul & Stasiun Pompa Polder', cat: 'Infrastruktur Banjir', desc: 'Pembangunan stasiun pompa dan tanggul penahan banjir rob.', status: 'pending' },
      { id: 'alkes_rsud', title: '🏥 Digitalisasi Alkes & CT-Scan RSUD Rujukan', cat: 'Kesehatan Publik', desc: 'Pengadaan peralatan medis canggih dan telemedicine RSUD.', status: 'pending' },
      { id: 'pdam_smart', title: '🚰 Sensor Kebocoran & Digitalisasi Pipa PDAM', cat: 'Air Bersih & Sanita', desc: 'Pemasangan jaringan sensor debit air otomatis di 8 sub-zona.', status: 'pending' },
      { id: 'rehab_sekolah', title: '🏫 Rehabilitasi Gedung Sekolah & Laptop Guru', cat: 'Pendidikan', desc: 'Perbaikan sarana fisik SD/SMP negeri & bantuan perangkat digital.', status: 'pending' },
      { id: 'cctv_etle', title: '📹 Pengadaan Jaringan CCTV E-TLE & Smart Street Light', cat: 'Ketertiban & Energi', desc: 'Pemasangan 200 titik kamera tilang elektronik & penerangan hemat energi.', status: 'pending' }
    ];
  }
  return state.procurementProjects;
}

function openProcurementModal() {
  renderProcurementModal();
  document.getElementById('procurementModal').classList.add('show');
}

function renderProcurementModal() {
  const body = document.getElementById('procurementModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const list = getProcurementProjects();

  body.innerHTML = `
    <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.3);padding:14px;border-radius:12px;margin-bottom:16px;">
      <div style="font-weight:800;color:var(--blue-soft);font-size:15px;margin-bottom:4px;">${isEn ? '📦 E-Catalog & Public Works Procurement (PBJ) System' : '📦 Sistem Lelang Pengadaan Barang & Jasa (PBJ) E-Katalog'}</div>
      <div style="font-size:12.5px;color:var(--gray-300);line-height:1.5;">
        ${isEn 
          ? 'Select vendor consortia for municipal physical infrastructure and civic service packages. <b>Every vendor choice balances APBD budget impact, execution quality, council (DPRD) political alliances, and corruption audit exposure.</b>' 
          : 'Pilih konsorsium vendor untuk paket pekerjaan fisik & layanan publik kota. <b>Setiap pilihan vendor membawa pertimbangan realistis antara biaya APBD, kualitas hasil, hubungan politik dengan DPRD, dan risiko tindak pidana korupsi.</b>'}
      </div>
    </div>
  ` + list.map((proj, pIdx) => {
    const isDone = proj.status === 'completed';
    return `
      <div class="v3Row" style="padding:14px;margin-bottom:12px;border-color:${isDone ? 'rgba(62,207,142,0.4)' : 'var(--line)'};background:${isDone ? 'rgba(62,207,142,0.05)' : 'rgba(255,255,255,0.02)'}">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">${proj.title}</span>
          <span style="font-size:12px;font-weight:700;padding:2px 8px;border-radius:6px;background:${isDone ? 'rgba(62,207,142,0.2)' : 'rgba(255,255,255,0.1)'};color:${isDone ? 'var(--green)' : '#cbd5e1'};">
            ${isDone ? (isEn ? '✅ TENDER COMPLETED' : '✅ SELESAI DILELANG') : (isEn ? '⏳ READY FOR TENDER' : '⏳ SIAP LELANG')}
          </span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">🏷️ ${isEn ? 'Sector' : 'Kategori'}: ${proj.cat} — ${proj.desc}</div>
        
        ${isDone ? `
          <div style="font-size:12px;color:var(--green);font-weight:700;">${isEn ? 'Winning Contractor:' : 'Vendor Pemenang:'} ${proj.winnerVendor || (isEn ? 'State-Owned Consortium' : 'BUMN Konsorsium')} (${isEn ? 'Active Public Works Phase' : 'Paket Pekerjaan Berjalan'})</div>
        ` : `
          <div style="display:grid;grid-template-columns:1fr;gap:10px;">
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);padding:10px;border-radius:8px;">
              <div style="font-weight:700;color:var(--blue-soft);font-size:13px;">${isEn ? '🏛️ Vendor A: State Enterprise Consortium (High Precision & Clean Audit)' : '🏛️ Vendor A: BUMN/BUMD Utama (Presisi & Bersih)'}</div>
              <div style="font-size:11.5px;color:var(--gray-300);margin:3px 0;">${isEn ? 'Cost:' : 'Biaya:'} <b>Rp 0.6 T</b> | ${isEn ? 'Quality: 🌟🌟🌟 (Top Grade)' : 'Kualitas: 🌟🌟🌟 (Sangat Tinggi)'} | ${isEn ? 'Corruption Risk: 0%' : 'Risiko Korupsi: 0%'}</div>
              <div style="font-size:11px;color:var(--green);">${isEn ? 'Impact: Sector Index +8, Cabinet Integrity +4, Approval +5%' : 'Dampak: Indikator Sektor +8, Integritas Kabinet +4, Kepuasan Publik +5%'}</div>
              <button class="bigBtn" style="margin-top:6px;padding:6px 12px;font-size:12px;" onclick="chooseProcurementVendor(${pIdx}, 'A')">${isEn ? 'Select State Consortium' : 'Pilih BUMN/BUMD Utama'}</button>
            </div>

            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);padding:10px;border-radius:8px;">
              <div style="font-weight:700;color:var(--amber);font-size:13px;">${isEn ? '🏪 Vendor B: Regional SME & Cooperative Guild (Local Empowerment)' : '🏪 Vendor B: Asosiasi Koperasi & UMKM Lokal (Pemberdayaan Daerah)'}</div>
              <div style="font-size:11.5px;color:var(--gray-300);margin:3px 0;">${isEn ? 'Cost:' : 'Biaya:'} <b>Rp 0.4 T</b> | ${isEn ? 'Quality: 🌟🌟 (Moderate)' : 'Kualitas: 🌟🌟 (Sedang)'} | ${isEn ? 'Corruption Risk: +3%' : 'Risiko Korupsi: +3%'}</div>
              <div style="font-size:11px;color:var(--green);">${isEn ? 'Impact: Sector Index +5, Union & Business Alliance +8, PAD +0.1 T' : 'Dampak: Indikator Sektor +5, Hubungan Serikat Buruh & Pengusaha +8, PAD +0.1 T'}</div>
              <button class="bigBtn" style="margin-top:6px;padding:6px 12px;font-size:12px;background:var(--amber);" onclick="chooseProcurementVendor(${pIdx}, 'B')">${isEn ? 'Select Local SME Consortium' : 'Pilih Koperasi/UMKM Lokal'}</button>
            </div>

            <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);padding:10px;border-radius:8px;">
              <div style="font-weight:700;color:#f87171;font-size:13px;">${isEn ? '⚠️ Vendor C: Council Opposition Crony Contractor (Low Cost & Political Compromise)' : '⚠️ Vendor C: Rekanan "Titipan" Oposisi DPRD (Murah & Kompromi Politik)'}</div>
              <div style="font-size:11.5px;color:var(--gray-300);margin:3px 0;">${isEn ? 'Cost:' : 'Biaya:'} <b>Rp 0.2 T</b> | ${isEn ? 'Quality: 🌟 (Low)' : 'Kualitas: 🌟 (Rendah)'} | ${isEn ? 'Corruption Risk:' : 'Risiko Korupsi:'} <b>+15%</b></div>
              <div style="font-size:11px;color:#f87171;">${isEn ? 'Impact: Council Stance +12, Budget Savings, BUT High Risk of BPK Audit Probe' : 'Dampak: Hubungan DPRD +12, Hemat Anggaran, TAPI Rawan Audit BPK & Risiko Rusak/Mangkrak'}</div>
              <button class="bigBtn" style="margin-top:6px;padding:6px 12px;font-size:12px;background:#ef4444;" onclick="chooseProcurementVendor(${pIdx}, 'C')">${isEn ? 'Select Council Crony Contractor' : 'Pilih Rekanan Titipan DPRD'}</button>
            </div>
          </div>
        `}
      </div>
    `;
  }).join('');
}

function chooseProcurementVendor(pIdx, vendorType) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const list = getProcurementProjects();
  const proj = list[pIdx];
  if (!proj || proj.status === 'completed') return;

  if (vendorType === 'A') {
    if (state.apbd < 0.6) { showToast(isEn ? '⚠️ APBD insufficient for State-Owned Enterprise vendor (needs Rp 0.6 T)!' : '⚠️ APBD tidak cukup untuk vendor BUMN (butuh Rp 0.6 T)!'); return; }
    state.apbd = Math.round((state.apbd - 0.6) * 10) / 10;
    state.sat = Math.min(100, state.sat + 5);
    proj.winnerVendor = isEn ? 'State-Owned Enterprise Prime Consortium' : 'BUMN Konsorsium Utama';
    proj.status = 'completed';
    showToast(isEn ? `✅ Project ${proj.title} awarded to State-Owned Enterprise! Guaranteed precision.` : `✅ Proyek ${proj.title} diserahkan ke BUMN! Kualitas terjamin presisi.`);
  } else if (vendorType === 'B') {
    if (state.apbd < 0.4) { showToast(isEn ? '⚠️ APBD insufficient for SME Cooperatives (needs Rp 0.4 T)!' : '⚠️ APBD tidak cukup untuk Koperasi UMKM (butuh Rp 0.4 T)!'); return; }
    state.apbd = Math.round((state.apbd - 0.4) * 10) / 10;
    state.pad = Math.round((state.pad + 0.1) * 10) / 10;
    state.sat = Math.min(100, state.sat + 4);
    updateActorRelations({ Pengusaha: 8, SerikatBuruh: 8 });
    proj.winnerVendor = isEn ? 'Local SME & Cooperative Association' : 'Asosiasi UMKM & Koperasi Lokal';
    proj.status = 'completed';
    showToast(isEn ? `✅ Project ${proj.title} awarded to Local SMEs! Citizen economy stimulated.` : `✅ Proyek ${proj.title} diserahkan ke UMKM Lokal! Ekonomi warga bergerak.`);
  } else if (vendorType === 'C') {
    if (state.apbd < 0.2) { showToast(isEn ? '⚠️ APBD insufficient (needs Rp 0.2 T)!' : '⚠️ APBD tidak cukup (butuh Rp 0.2 T)!'); return; }
    state.apbd = Math.round((state.apbd - 0.2) * 10) / 10;
    updateActorRelations({ FraksiOposisi: 12, DPRD: 10 });
    proj.winnerVendor = isEn ? 'Council-Backed Contractor Firm' : 'PT Rekanan Titipan DPRD';
    proj.status = 'completed';
    
    state.riskModifier = (state.riskModifier || 0) + 15;
    if (typeof getCorruptionRisk === 'function') getCorruptionRisk();
    
    if (Math.random() < 0.6) {
      setTimeout(() => {
        showToast(isEn ? '⚠️ BPK AUDIT: Bid-rigging anomalies detected on vendor C! Investigation risk increased!' : '⚠️ AUDIT BPK: Terendus kejanggalan mark-up lelang vendor C! Risiko OTT naik!');
      }, 1200);
    }
    showToast(isEn ? `⚠️ Project ${proj.title} awarded to Council Crony. Opposition pleased (+12), but Corruption Risk spiked!` : `⚠️ Proyek ${proj.title} diserahkan ke Rekanan DPRD. Fraksi Oposisi senang (+12), tapi Risiko Korupsi melonjak!`);
  }

  renderProcurementModal();
  updateHUD();
  saveGame();
}

/* ================= FITUR 6: HUBUNGAN DIPLOMATIK VERTIKAL (GUBERNUR & PUSAT) ================= */
function openCentralDiplomacyModal() {
  renderCentralDiplomacyModal();
  document.getElementById('centralDiplomacyModal').classList.add('show');
}

function renderCentralDiplomacyModal() {
  const body = document.getElementById('centralDiplomacyModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.centralLobby) {
    state.centralLobby = { dakUsedYear: 0, psnUsedTerm: 0, rakorGovYear: 0, mouUsedYear: 0 };
  }

  const cL = state.centralLobby;
  const currYr = state.year;
  const cStats = calculateCabinetStats();

  body.innerHTML = `
    <div style="background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.3);padding:14px;border-radius:12px;margin-bottom:16px;">
      <div style="font-weight:800;color:#c084fc;font-size:15px;margin-bottom:4px;">${isEn ? '🏛️ Central Government Lobby & Intergovernmental Relations' : '🏛️ Pusat Diplomasi Vertikal & Hubungan Antar Lembaga'}</div>
      <div style="font-size:12.5px;color:var(--gray-300);line-height:1.5;">
        ${isEn 
          ? 'Lobby central ministries in Jakarta and the provincial Governor to secure Special Allocation Funds (DAK), National Strategic Project (PSN) status, and provincial fiscal aid grants.' 
          : 'Lobi kementerian di Jakarta dan Gubernur Provinsi untuk mengucurkan Dana Alokasi Khusus (DAK), penetapan Proyek Strategis Nasional (PSN), serta Bantuan Keuangan Daerah.'}
      </div>
    </div>

    <div class="v3ContentGroup">
      <div class="v3Row" style="padding:14px;margin-bottom:12px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">${isEn ? '1. DAK Special Grant Lobby (Ministry of Finance & Public Works)' : '1. Lobi DAK (Dana Alokasi Khusus) Kemenkeu & PUPR'}</span>
          <span style="font-size:12px;color:var(--blue-soft);font-weight:700;">
            ${cL.dakUsedYear === currYr ? (isEn ? '⏳ SUBMITTED THIS YEAR' : '⏳ SUDAH DIAJUKAN TAHUN INI') : (isEn ? '🟢 READY TO LOBBY' : '🟢 BISA DIAJUKAN')}
          </span>
        </div>
        <div class="v3RowSub" style="margin:6px 0;">
          ${isEn 
            ? 'Submit technical infrastructure & healthcare DAK proposals to the Ministry of Finance & Bappenas. Requirement: <b>Cabinet Integrity >= 45%</b>.' 
            : 'Mengirimkan proposal teknis DAK Fisik Infrastruktur & Kesehatan ke Kementerian Keuangan & Bappenas. Syarat utama: <b>Indeks Integritas Kabinet Minimal 45%</b>.'}
        </div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">🌟 ${isEn ? 'Grant Potential:' : 'Potensi Cair:'} <b>+Rp 0.8 T s/d +Rp 1.4 T</b> ${isEn ? 'Additional APBD Treasury.' : 'Kas APBD Tambahan.'}</div>
        <button class="bigBtn" style="padding:8px 16px;font-size:13px;" ${cL.dakUsedYear === currYr ? 'disabled style="opacity:0.5;"' : ''} onclick="actionLobbyDAK()">
          ${isEn ? '🏛️ Lobby Ministry for DAK Funds' : '🏛️ Ajukan Lobi DAK ke Kemenkeu'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;margin-bottom:12px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">${isEn ? '2. National Strategic Project (PSN) Proposal (Bappenas)' : '2. Usulan Proyek Strategis Nasional (PSN) Bappenas'}</span>
          <span style="font-size:12px;color:var(--blue-soft);font-weight:700;">
            ${cL.psnUsedTerm === state.term ? (isEn ? '⏳ SUBMITTED THIS TERM' : '⏳ SUDAH DIUSULKAN PERIODE INI') : (isEn ? '🟢 READY TO PROPOSE' : '🟢 BISA DIUSULKAN')}
          </span>
        </div>
        <div class="v3RowSub" style="margin:6px 0;">
          ${isEn 
            ? 'Present Nusapura masterplan vision at Bappenas to co-fund municipal megaprojects through the central APBN state budget.' 
            : 'Mempresentasikan Visi Nusapura di Bappenas agar Proyek Megastruktur Kota ditanggung sebagian oleh APBN Pusat dan memikat investor asing skala besar.'}
        </div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">🌟 ${isEn ? 'Impact: Megastructure Subsidy (25% Discount), Investment Climate +15%, National Media +10.' : 'Dampak: Subsidi Megastruktur (Diskon Biaya 25%), Iklim Investasi Kota +15%, Sorotan Media +10.'}</div>
        <button class="bigBtn" style="padding:8px 16px;font-size:13px;background:var(--amber);" ${cL.psnUsedTerm === state.term ? 'disabled style="opacity:0.5;"' : ''} onclick="actionProposePSN()">
          ${isEn ? '🚀 Present PSN Proposal at Bappenas (Cost 0.1 T)' : '🚀 Paparkan PSN di Bappenas (Biaya Kunker 0.1 T)'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;margin-bottom:12px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">${isEn ? '3. Provincial Governor Coordination & Fiscal Assistance' : '3. Rakor Sinergi Gubernur & Bantuan Keuangan Provinsi'}</span>
          <span style="font-size:12px;color:var(--blue-soft);font-weight:700;">
            ${cL.rakorGovYear === currYr ? (isEn ? '⏳ CONVENED THIS YEAR' : '⏳ SUDAH DILAKUKAN TAHUN INI') : (isEn ? '🟢 READY TO CONVENE' : '🟢 BISA DILAKUKAN')}
          </span>
        </div>
        <div class="v3RowSub" style="margin:6px 0;">
          ${isEn 
            ? 'Convene coordination summit with the provincial Governor to align regional zoning and disburse Special Provincial Fiscal Assistance (BKK).' 
            : 'Menghadiri Rapat Koordinasi dengan Gubernur Provinsi untuk penyelarasan tata ruang wilayah pesisir & pencairan Bantuan Keuangan Khusus (BKK).'}
        </div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">🌟 ${isEn ? 'Impact: Provincial Treasury Aid +Rp 0.4 T, Approval +3%, Political Elite Stance +5.' : 'Dampak: Bantuan Kas Provinsi +Rp 0.4 T, Kepuasan Publik +3%, Hubungan Tokoh Politik +5.'}</div>
        <button class="bigBtn" style="padding:8px 16px;font-size:13px;" ${cL.rakorGovYear === currYr ? 'disabled style="opacity:0.5;"' : ''} onclick="actionRakorGovernor()">
          ${isEn ? '🤝 Convene Governor Coordination Summit' : '🤝 Gelar Rakor Sinergi Gubernur'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;margin-bottom:12px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">${isEn ? '4. Ministry Smart & Green City Pioneer Pilot MoU' : '4. MoU Kota Percontohan Smart & Green City Kementerian'}</span>
          <span style="font-size:12px;color:var(--blue-soft);font-weight:700;">
            ${cL.mouUsedYear === currYr ? (isEn ? '⏳ SIGNED THIS YEAR' : '⏳ SUDAH DITANDATANGANI TAHUN INI') : (isEn ? '🟢 READY TO SIGN' : '🟢 BISA DITANDATANGANI')}
          </span>
        </div>
        <div class="v3RowSub" style="margin:6px 0;">
          ${isEn 
            ? 'Establish Nusapura as the national model city for municipal digitization and clean renewable energy.' 
            : 'Menjadikan Nusapura sebagai pilot project nasional untuk digitalisasi layanan dan energi bersih.'}
        </div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">🌟 ${isEn ? 'Impact: Election Polling +5%, Green & Health Index +6, Approval +4%.' : 'Dampak: Elektabilitas Pilkada +5%, Indeks Lingkungan & Kesehatan +6, Kepuasan +4%.'}</div>
        <button class="bigBtn" style="padding:8px 16px;font-size:13px;background:linear-gradient(135deg,var(--blue),var(--purple));" ${cL.mouUsedYear === currYr ? 'disabled style="opacity:0.5;"' : ''} onclick="actionMoUKementerian()">
          ${isEn ? '📜 Sign National Ministry MoU' : '📜 Penandatanganan MoU Kementerian'}
        </button>
      </div>
    </div>
  `;
}

function actionLobbyDAK() {
  if (!state.centralLobby) state.centralLobby = {};
  const cStats = calculateCabinetStats();
  if (cStats.avgIntegritas < 45) {
    showToast('❌ LOBI DAK DITOLAK KEMENKEU! Indeks Integritas Kabinet Anda terlalu rendah (<45%). Rapikan dinas Anda dulu!');
    return;
  }
  const gain = Math.round((0.8 + (Math.random() * 0.6)) * 10) / 10;
  state.apbd = Math.round((state.apbd + gain) * 10) / 10;
  state.centralLobby.dakUsedYear = state.year;
  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `🎉 DAK LOBBY SUCCESS! Ministry of Finance disbursed Additional Special Grant Rp ${gain} T to Nusapura APBD!` : `🎉 LOBI DAK BERHASIL! Kemenkeu mengucurkan Tambahan DAK Rp ${gain} T ke Kas APBD Nusapura!`);
  renderCentralDiplomacyModal();
  updateHUD();
  saveGame();
}

function actionProposePSN() {
  if (!state.centralLobby) state.centralLobby = {};
  if (state.apbd < 0.1) { showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '⚠️ Insufficient APBD funds for national planning consultation (0.1 T)!' : '⚠️ APBD tidak cukup untuk biaya kunker ke Bappenas (0.1 T)!'); return; }
  state.apbd = Math.round((state.apbd - 0.1) * 10) / 10;
  state.centralLobby.psnUsedTerm = state.term;
  
  if (state.stats) {
    state.stats.inv = Math.min(100, (state.stats.inv || 50) + 15);
  }
  updateActorRelations({ Investor: 12, MediaNasional: 10 });
  
  const ms = getMegastructureList();
  ms.forEach(m => {
    if (m.progress < 100) {
      m.cost = Math.max(0.8, Math.round((m.cost * 0.75) * 10) / 10);
    }
  });

  showToast('🚀 PRESENTASI PSN DITERIMA BAPPENAS! Nusapura masuk Kawasan Strategis Nasional! Biaya Megastruktur diskon 25%!');
  renderCentralDiplomacyModal();
  updateHUD();
  saveGame();
}

function actionRakorGovernor() {
  if (!state.centralLobby) state.centralLobby = {};
  state.apbd = Math.round((state.apbd + 0.4) * 10) / 10;
  state.sat = Math.min(100, state.sat + 3);
  state.centralLobby.rakorGovYear = state.year;
  updateActorRelations({ TokohPolitik: 6, BPK: 4 });
  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🤝 GOVERNOR SUMMIT CONCLUDED! Special Provincial Financial Grant Rp 0.4 T disbursed!' : '🤝 RAKOR GUBERNUR SELESAI! Bantuan Keuangan Khusus Provinsi Rp 0.4 T telah dicairkan!');
  renderCentralDiplomacyModal();
  updateHUD();
  saveGame();
}

function actionMoUKementerian() {
  if (!state.centralLobby) state.centralLobby = {};
  state.sat = Math.min(100, state.sat + 4);
  if (state.stats) {
    state.stats.env = Math.min(100, (state.stats.env || 50) + 6);
    state.stats.health = Math.min(100, (state.stats.health || 50) + 6);
  }
  state.centralLobby.mouUsedYear = state.year;
  showToast('📜 MoU KOTA PERCONTOHAN DITANDATANGANI! Kota Nusapura mendapat pengakuan publik nasional!');
  renderCentralDiplomacyModal();
  updateHUD();
  saveGame();
}

/* ================= POINT 5: PERDA BUILDER ================= */
function getPerdaList() {
  if (!state.activePerdas) state.activePerdas = [];
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  return [
    { id: 'curfew', name: '🌙 Perda Jam Malam Remaja & Patroli Presisi', name_en: '🌙 Youth Night Curfew & Police Precision Patrols By-Law', cost: 0.2, desc: 'Patroli terpadu pukul 22.00-04.00 WIB cegah kejahatan jalanan & tawuran.', desc_en: 'Nighttime patrols (22:00-04:00) preventing gang brawls and street violence.', fx: 'Kriminalitas -8, Kepuasan +3, Dukungan Polri +10', fx_en: 'Crime -8, Approval +3, Police Stance +10' },
    { id: 'plastic', name: '🌿 Perda Zero Plastik & Wajib Daur Ulang', name_en: '🌿 Zero Single-Use Plastics & Mandatory Recycling By-Law', cost: 0.1, desc: 'Larangan total kantong plastik sekali pakai di ritel & pasar.', desc_en: 'Complete ban on single-use plastic bags in all retail stores and wet markets.', fx: 'Polusi -10, Lingkungan +12, Pengusaha -5', fx_en: 'Pollution -10, Environment +12, Chamber Stance -5' },
    { id: 'tax_umkm', name: '💼 Perda Bebas Pajak 3 Tahun UMKM Baru', name_en: '💼 3-Year Local Tax Holiday for New Startups & SMEs By-Law', cost: 0.4, desc: 'Insentif bebas pajak daerah untuk merangsang wirausaha muda.', desc_en: 'Local tax exemption incentives accelerating youth entrepreneurship.', fx: 'Pengangguran -6, Investasi +10, PAD +0.5 T', fx_en: 'Unemployment -6, Investment +10, PAD +0.5 T' },
    { id: 'bus_free', name: '🚌 Perda Gratis Angkutan Umum & Bus Sekolah', name_en: '🚌 Free Public Transit & Student School Bus Network By-Law', cost: 0.5, desc: 'Subsidi penuh APBD untuk seluruh angkutan kota & bus pelajar.', desc_en: '100% municipal budget subsidies for city buses and student commuters.', fx: 'Kemacetan -12, Kepuasan Warga +6, Kemiskinan -2', fx_en: 'Congestion -12, Approval +6, Poverty -2' },
    { id: 'etle_ai', name: '📷 Perda Kamera ETLE AI Otonom', name_en: '📷 Autonomous AI Smart Traffic Camera (ETLE) By-Law', cost: 0.3, desc: 'Penerapan tilang otomatis & pemantauan AI di titik rawan.', desc_en: 'Automated AI electronic traffic enforcement at high-incident intersections.', fx: 'Kriminalitas -10, Kemacetan -5, LSM -8', fx_en: 'Crime -10, Congestion -5, NGO Watchdog -8' },
    { id: 'rth_30', name: '🏢 Perda Kewajiban Ruang Terbuka Hijau 30%', name_en: '🏢 Mandatory 30% Urban Green Space (RTH) Zoning By-Law', cost: 0.1, desc: 'Gedung & kawasan industri wajib sediakan 30% area RTH.', desc_en: 'Commercial and industrial zones must designate 30% for public green canopy.', fx: 'Polusi -8, Lingkungan +10, Pengusaha -4', fx_en: 'Pollution -8, Environment +10, Chamber Stance -4' }
  ];
}

function renderPerdaModal() {
  const body = document.getElementById('perdaModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const list = getPerdaList();
  const activeIds = state.activePerdas || [];

  body.innerHTML = list.map(p => {
    const isActive = activeIds.includes(p.id);
    const name = (isEn && p.name_en) ? p.name_en : p.name;
    const desc = (isEn && p.desc_en) ? p.desc_en : p.desc;
    const fx = (isEn && p.fx_en) ? p.fx_en : p.fx;

    return `
      <div class="v3Row" style="padding:14px;border-color:${isActive ? 'rgba(59,124,246,0.5)' : 'var(--line)'};background:${isActive ? 'rgba(59,124,246,0.1)' : 'rgba(255,255,255,0.03)'}">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">${name}</span>
          <span style="color:${isActive ? 'var(--green)' : 'var(--gray-400)'};font-size:12px;font-weight:700;">${isActive ? (isEn ? '🟢 ACTIVE BY-LAW' : '🟢 PERDA AKTIF') : (isEn ? '⚪ INACTIVE' : '⚪ NON-AKTIF')}</span>
        </div>
        <div class="v3RowSub" style="margin:6px 0;">${desc}</div>
        <div style="font-size:11.5px;color:var(--amber);margin-bottom:8px;">💡 ${isEn ? 'Enduring Policy Effects:' : 'Efek Berkelanjutan:'} ${fx}</div>
        <div style="font-size:11px;color:var(--gray-400);margin-bottom:10px;">💵 ${isEn ? 'Annual APBD Operating Cost:' : 'Biaya Operasional APBD:'} Rp ${p.cost.toFixed(1)} T/${isEn ? 'year' : 'tahun'}</div>
        <button class="bigBtn ${isActive ? 'secondary' : ''}" style="padding:8px 16px;font-size:13px;" onclick="togglePerda('${p.id}')">
          ${isActive ? (isEn ? '🚫 Repeal & Deactivate This By-Law' : '🚫 Non-Aktifkan Perda Ini') : (isEn ? '✅ Enact & Ratify This By-Law' : '✅ Sahkan & Aktifkan Perda Ini')}
        </button>
      </div>
    `;
  }).join('');
}

function togglePerda(pId) {
  if (!state.activePerdas) state.activePerdas = [];
  const idx = state.activePerdas.indexOf(pId);
  const list = getPerdaList();
  const perdaObj = list.find(p => p.id === pId);

  if (idx >= 0) {
    state.activePerdas.splice(idx, 1);
    showToast(`📜 Perda "${perdaObj.name}" dinonaktifkan.`);
  } else {
    if (state.apbd < perdaObj.cost) {
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `⚠️ Insufficient APBD funds to enact this regulation! Need Rp ${perdaObj.cost} T.` : `⚠️ APBD tidak mencukupi untuk mengaktifkan Perda ini! Butuh Rp ${perdaObj.cost} T.`);
      return;
    }
    state.activePerdas.push(pId);
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `✅ Regulation \"${perdaObj.name_en || perdaObj.name}\" officially enacted & enforced in Nusapura City!` : `✅ Perda \"${perdaObj.name}\" resmi disahkan & diberlakukan di Kota Nusapura!`);
  }
  renderPerdaModal();
  saveGame();
}

/* ================= POINT 2: INTERACTIVE PRESS CONFERENCE MINI-GAME ================= */
let pressMinigame = {
  round: 1,
  approval: 50,
  score: 0,
  totalRounds: 3
};

function generateDynamicPressQuestions() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const list = [];
  const s = state.stats || {};
  const ev = state.currentActiveEvent;
  const locEv = ev && typeof getLocalizedEvent === 'function' ? getLocalizedEvent(ev, isEn ? 'en' : 'id') : ev;
  const evTitle = locEv ? (locEv.title || ev.title) : '';
  const r = state.risk || 0;
  const apbdVal = (state.apbd != null ? state.apbd : 18).toFixed(1);

  if (ev) {
    list.push({
      name: isEn ? 'Ryan "Investigative" (Nusa Post Daily)' : 'Rian "Investigasi" (Harian Nusa Post)',
      avatar: '📰',
      trait: isEn ? 'Tough & Critical - Today\'s Breaking Issue' : 'Kritis & Keras - Isu Utama Hari Ini',
      q: isEn
        ? `Mr. Mayor! Regarding the crisis "${evTitle}" sparking heated civic debate, what concrete accountability and immediate solution will City Hall deliver?`
        : `Bapak Walikota! Mengenai insiden "${evTitle}" yang sedang ramai disorot warga, bagaimana pertanggungjawaban konkret dan kepastian solusi dari Balai Kota?`
    });
  } else if (r > 50) {
    list.push({
      name: isEn ? 'Sarah "Legal Watch" (Anti-Corruption Tribune)' : 'Siti "Hukum" (Koran Tipikor & Transparansi)',
      avatar: '⚖️',
      trait: isEn ? 'Integrity & Financial Audit Focus' : 'Fokus Integritas & Isu Audit KPK',
      q: isEn
        ? `Auditors have raised flags regarding municipal spending integrity (Corruption Risk Index: ${r}%). What concrete transparency safeguards can you guarantee to taxpayers?`
        : `Ada laporan auditor BPK terkait potensi penyimpangan kas dinas (Indikator Risiko: ${r}%). Apakah Walikota siap menjamin transparansi penuh?`
    });
  } else {
    list.push({
      name: isEn ? 'Ryan "Investigative" (Nusa Post Daily)' : 'Rian "Investigasi" (Harian Nusa Post)',
      avatar: '📰',
      trait: isEn ? 'Tough & Critical - Budget Transparency' : 'Kritis & Keras - Transparansi APBD',
      q: isEn
        ? `Mr. Mayor, public scrutiny is focused on the efficiency of the Rp ${apbdVal} T municipal treasury. How do you ensure departmental agencies avoid fiscal waste?`
        : `Bapak Walikota, efisiensi alokasi APBD senilai Rp ${apbdVal} T disorot publik. Bagaimana komitmen dinas-dinas dalam mencegah pemborosan anggaran?`
    });
  }

  if ((s.unemp || 7) > 8) {
    list.push({
      name: isEn ? 'Brian "Economy" (Nusapura Business Portal)' : 'Budi "Ekonomi" (Bisnis Nusapura)',
      avatar: '💼',
      trait: isEn ? 'Jobs & Business Environment Focus' : 'Fokus Lapangan Kerja & Usaha',
      q: isEn
        ? `The municipal unemployment rate has touched ${s.unemp}%. What tangible steps is City Hall taking to spur local jobs and attract capital investments?`
        : `Tingkat pengangguran kota menyentuh ${s.unemp}%. Apa langkah nyata Pemkot untuk mendorong lapangan kerja dan menarik investor baru?`
    });
  } else if ((s.flood || 50) > 60 || (s.traffic || 50) > 60) {
    const issueName = (s.flood || 50) > 60
      ? (isEn ? 'chronic flooding & drainage bottlenecks' : 'banjir berkepanjangan')
      : (isEn ? 'severe traffic congestion & gridlock' : 'kemacetan lalu lintas');
    list.push({
      name: isEn ? 'Diana "Infrastructure" (City Radar)' : 'Dewi "Infrastruktur" (Radar Kota)',
      avatar: '🏗️',
      trait: isEn ? 'Public Works & Utilities Focus' : 'Fokus Fasilitas Publik',
      q: isEn
        ? `Residents across multiple districts complain about ${issueName}. Why is infrastructure repair lagging behind mayoral campaign promises?`
        : `Warga di berbagai kecamatan mengeluhkan masalah ${issueName}. Mengapa perbaikan infrastruktur terasa lambat dibanding janji Pemkot?`
    });
  } else {
    list.push({
      name: isEn ? 'Sarah "Economy" (Prime Financial Daily)' : 'Siti "Ekonomi" (Koran Bisnis Utama)',
      avatar: '💼',
      trait: isEn ? 'Investment Climate & Regulatory Certainty' : 'Fokus Anggaran & Iklim Usaha',
      q: isEn
        ? `The business community is asking for legal certainty and streamlined licensing in Nusapura. How will you safeguard regional economic stability?`
        : `Dunia usaha menanyakan kepastian hukum & regulasi investasi di Nusapura. Bagaimana Walikota menjaga stabilitas ekonomi daerah?`
    });
  }

  const dprdRelPress = (state.actors && state.actors.DPRD && state.actors.DPRD.relation != null) ? state.actors.DPRD.relation : 50;
  if (state.sat < 45) {
    list.push({
      name: isEn ? 'Donny "Sensational" (24-Hour News TV)' : 'Doni "Sensasional" (TV Berita 24 Jam)',
      avatar: '📺',
      trait: isEn ? 'Hot-Seat & Citizen Approval Alert' : 'Hot-Seat & Kepuasan Warga',
      q: isEn
        ? `Public opinion polls show citizen approval is at a critical low (${state.sat}%). What is your honest response to this wave of public discontent?`
        : `Survei publik menunjukkan angka kepuasan warga berada di level kritis ${state.sat}%. Apa respons jujur Walikota atas gelombang kekecewaan publik?`
    });
  } else if (dprdRelPress < 40) {
    list.push({
      name: isEn ? 'Maya "Parliament" (Legislative Voice)' : 'Maya "Politik" (Suara Parlemen)',
      avatar: '🏛️',
      trait: isEn ? 'City Hall - DPRD Friction' : 'Fokus Gesekan Politikus DPRD',
      q: isEn
        ? `Tension between City Hall and the City Council factions is escalating (Relation: ${dprdRelPress}%). How will you prevent a legislative deadlock on the budget?`
        : `Ketegangan antara Balai Kota dan Fraksi DPRD makin meruncing (Hubungan: ${dprdRelPress}%). Bagaimana strategi Walikota agar pembahasan APBD dan Perda tidak deadlock?`
    });
  } else {
    list.push({
      name: isEn ? 'Donny "Sensational" (24-Hour News TV)' : 'Doni "Sensasional" (TV Berita 24 Jam)',
      avatar: '📺',
      trait: isEn ? 'Inquisitive & Hot-Seat' : 'Inquisitive & Hot-Seat',
      q: isEn
        ? `Netizens across social media are fiercely reacting to your governance record this year. What is your definitive statement to the press corps?`
        : `Netizen di media sosial merespons dinamika kepemimpinan Walikota tahun ini. Apa pesan utama yang ingin Anda sampaikan langsung kepada pers?`
    });
  }

  return list;
}

function openPressModal() {
  const m = document.getElementById('pressModal');
  if (m) {
    pressMinigame = {
      round: 1,
      approval: 50,
      score: 0,
      totalRounds: 3,
      journalists: generateDynamicPressQuestions()
    };
    m.classList.add('show');
    renderPressQuestion();
  }
}

function renderPressQuestion() {
  const body = document.getElementById('pressModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (pressMinigame.round > pressMinigame.totalRounds) {
    let grade = 'B';
    let rewardText = isEn ? 'Received public appreciation (+4% Citizen Approval)' : 'Mendapat apresiasi publik (+4% Kepuasan Warga)';
    if (pressMinigame.approval >= 75) {
      grade = isEn ? 'A+ (Master Public Communicator)' : 'A+ (Master PR & Komunikasi Publik)';
      rewardText = isEn ? 'Broad media acclaim! (+10% Approval, +15 Media Stance, +12 Investor Stance)' : 'Pujian luas dari seluruh media! (+10% Kepuasan, +15 Relasi Media, +12 Investor)';
      state.sat = Math.min(100, state.sat + 10);
      updateActorRelations({ MediaLokal: 15, Investor: 12 });
    } else if (pressMinigame.approval >= 55) {
      grade = isEn ? 'B (Resilient Spokesperson)' : 'B (Spokesperson Tangguh)';
      rewardText = isEn ? 'Solid press conference (+5% Approval, +8 Media Stance)' : 'Kinerja pers cukup memuaskan (+5% Kepuasan Warga, +8 Relasi Media)';
      state.sat = Math.min(100, state.sat + 5);
      updateActorRelations({ MediaLokal: 8 });
    } else if (pressMinigame.approval >= 40) {
      grade = isEn ? 'C (Tense Press Session)' : 'C (Sesi Pers Tegang)';
      rewardText = isEn ? 'Partially answered inquiries (+2% Approval)' : 'Pertanyaan pers terjawab sebagian (+2% Kepuasan Warga)';
      state.sat = Math.min(100, state.sat + 2);
    } else {
      grade = isEn ? 'D (PR Backlash & Media Controversy)' : 'D (Bencana PR & Polemik Media)';
      rewardText = isEn ? 'Harsh media backlash! (-3% Approval, -10 Media Stance)' : 'Media melontarkan kritik pedas! (-3% Kepuasan Warga, -10 Relasi Media)';
      state.sat = Math.max(0, state.sat - 3);
      updateActorRelations({ MediaLokal: -10 });
    }

    if (!state.news) state.news = [];
    state.news.unshift({ year: isEn ? `Yr ${state.year}` : `Thn ${state.year}`, text: isEn ? `City Hall press conference concluded with grade ${grade}.` : `Konferensi Pers selesai dengan predikat ${grade}.`, mood: pressMinigame.approval >= 50 ? 1 : -1 });

    updateHUD();
    saveGame();

    body.innerHTML = `
      <div class="v3Row" style="padding:20px;text-align:center;background:rgba(59,124,246,0.1);border-color:var(--blue);">
        <div style="font-size:14px;color:var(--blue-soft);font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">📊 ${isEn ? 'CITY HALL PRESS EVALUATION REPORT' : 'HASIL EVALUASI PERS BALAI KOTA'}</div>
        <div style="font-size:28px;font-weight:900;color:#fff;margin:10px 0;">${isEn ? 'Grade:' : 'Predikat:'} ${grade}</div>
        <div style="font-size:15px;color:var(--amber);margin-bottom:12px;">${isEn ? 'Media Approval Score:' : 'Skor Persetujuan Media:'} ${Math.round(pressMinigame.approval)}%</div>
        <div style="font-size:13px;color:#d0dcf5;margin-bottom:18px;">${rewardText}</div>
        <button class="bigBtn" style="max-width:300px;margin:0 auto;" onclick="openPressModal()">${isEn ? '🔄 Convene Another Press Conference' : '🔄 Mainkan Konferensi Pers Lagi'}</button>
      </div>
    `;
    return;
  }

  const journalists = pressMinigame.journalists || generateDynamicPressQuestions();
  const currentJ = journalists[pressMinigame.round - 1] || journalists[0];

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.03);padding:10px 14px;border-radius:8px;border:1px solid var(--line);margin-bottom:12px;flex-wrap:wrap;gap:8px;">
      <span style="font-size:13px;font-weight:800;color:var(--blue-soft);">${isEn ? `QUESTION ${pressMinigame.round} OF ${pressMinigame.totalRounds}` : `PERTANYAAN ${pressMinigame.round} DARI ${pressMinigame.totalRounds}`}</span>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:12px;color:var(--gray-400);">Approval Meter:</span>
        <div class="v3GaugeTrack" style="width:120px;height:10px;">
          <div class="v3GaugeFill" style="width:${pressMinigame.approval}%;background:${pressMinigame.approval >= 60 ? 'var(--green)' : pressMinigame.approval >= 40 ? 'var(--amber)' : '#ef4444'};"></div>
        </div>
        <span style="font-size:12px;font-weight:800;color:#fff;">${Math.round(pressMinigame.approval)}%</span>
      </div>
    </div>

    <div class="v3Row" style="padding:16px;background:rgba(59,124,246,0.08);border-color:rgba(59,124,246,0.3);margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <span style="font-size:24px;">${currentJ.avatar}</span>
        <div>
          <div style="font-size:15px;font-weight:800;color:#fff;">${currentJ.name}</div>
          <div style="font-size:11px;color:var(--amber);">${currentJ.trait}</div>
        </div>
      </div>
      <div style="font-size:14px;color:#d0dcf5;font-style:italic;">"${currentJ.q}"</div>
    </div>

    <div style="font-size:13px;font-weight:700;color:var(--gray-400);margin-bottom:10px;">${isEn ? "MAYOR'S STRATEGIC RESPONSE:" : 'RESPONS STRATEGIS WALIKOTA:'}</div>
    <div class="choiceList">
      <button class="choiceBtn" onclick="selectPressChoice(0)">
        <span class="choiceLabel">${isEn ? '📊 Data Precision & Open Audit Transparency' : '📊 Jawaban Data Presisi & Transparansi Audit'}</span>
        <span class="choiceDesc">${isEn ? 'Cite quantitative civic indices and disclose audit documents openly. (+15% Media Approval | PR Cost Rp 0.05 T)' : 'Gunakan data indikator kuantitatif dan buka dokumen laporan secara terbuka. (+15% Kepuasan Media | Biaya PR Rp 0.05 T)'}</span>
      </button>
      <button class="choiceBtn" onclick="selectPressChoice(1)">
        <span class="choiceLabel">${isEn ? '🤝 Empathetic Ground Response & Direct Action' : '🤝 Jawaban Empati & Komitmen Solusi Lapangan'}</span>
        <span class="choiceDesc">${isEn ? 'Demonstrate sincere compassion with immediate on-the-ground action. (+10% Media Approval | Free)' : 'Tunjukkan kepedulian tinggi dan janji penanganan langsung di lapangan. (+10% Kepuasan Media | Tanpa Biaya)'}</span>
      </button>
      <button class="choiceBtn" onclick="selectPressChoice(2)">
        <span class="choiceLabel">${isEn ? '💼 Highlight Strategic APBD Budget Programs & Growth' : '💼 Paparan Program Strategis APBD & Investasi'}</span>
        <span class="choiceDesc">${isEn ? 'Shift focus to high-impact capital investments and budget allocation. (+12% Media Approval | APBD Cost Rp 0.1 T)' : 'Arahkan fokus ke proyek strategis dan pembukaan alokasi APBD. (+12% Kepuasan Media | Biaya APBD Rp 0.1 T)'}</span>
      </button>
      <button class="choiceBtn" onclick="selectPressChoice(3)">
        <span class="choiceLabel">${isEn ? '🛡️ Defensive Political Rebuttal & Context Clarification' : '🛡️ Retorika Defensif & Tepis Narasi Politis'}</span>
        <span class="choiceDesc">${isEn ? 'Rebut biased angles and request balanced journalistic perspective. (-5% to +5% Media Approval)' : 'Tangkis tuduhan dan minta wartawan melihat konteks secara objektif. (-5% s/d +5% Kepuasan Media)'}</span>
      </button>
    </div>
  `;
  triggerCameraFlash();
  startPressConferenceTimer();
}

function selectPressChoice(idx) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (idx === 0) {
    if (state.apbd < 0.05) { showToast(isEn ? '⚠️ APBD budget insufficient!' : '⚠️ APBD tidak cukup!'); return; }
    state.apbd = Math.max(0, Math.round((state.apbd - 0.05) * 10) / 10);
    pressMinigame.approval = Math.min(100, pressMinigame.approval + 15);
    showToast(isEn ? '🎙️ Journalists impressed by Mayor data precision!' : '🎙️ Jurnalis terkesan dengan ketegasan data Walikota!');
  } else if (idx === 1) {
    pressMinigame.approval = Math.min(100, pressMinigame.approval + 10);
    showToast(isEn ? '🎙️ Empathetic answer defused press tension.' : '🎙️ Respon empati meredam suasana ketegangan pers.');
  } else if (idx === 2) {
    if (state.apbd < 0.1) { showToast(isEn ? '⚠️ APBD budget insufficient!' : '⚠️ APBD tidak cukup!'); return; }
    state.apbd = Math.max(0, Math.round((state.apbd - 0.1) * 10) / 10);
    pressMinigame.approval = Math.min(100, pressMinigame.approval + 12);
    showToast(isEn ? '🎙️ Strategic briefing received positive media coverage.' : '🎙️ Paparan program strategis mendapat tanggapan positif.');
  } else if (idx === 3) {
    const delta = Math.floor(Math.random() * 11) - 5;
    pressMinigame.approval = Math.max(0, Math.min(100, pressMinigame.approval + delta));
    showToast(isEn ? `🎙️ Defensive counter produced mixed results (${delta >= 0 ? '+' : ''}${delta}% media rating).` : `🎙️ Tangkisan defensif Walikota memberikan hasil netral (${delta >= 0 ? '+' : ''}${delta}% kepuasan media).`);
  }

  pressMinigame.round++;
  stopPressConferenceTimer();
  renderPressQuestion();
}

/* ================= POINT 3: EMERGENCY RESPONSE MODE ================= */
function openEmergencyModal() {
  const m = document.getElementById('emergencyModal');
  if (m) {
    m.classList.add('show');
    renderEmergencyModal();
  }
}

function renderEmergencyModal() {
  const body = document.getElementById('emergencyModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  const sat = state.sat || 60;
  const apbd = state.apbd || 18;
  const crime = (state.stats && state.stats.crime) || 40;
  const flood = (state.stats && state.stats.flood) || 30;

  let threatLevel = isEn ? 'GREEN (STABLE CIVIC CONDITIONS)' : 'HIJAU (KONDISI STABIL)';
  let threatColor = 'var(--green)';
  if (flood > 60 || crime > 65 || sat < 45) {
    threatLevel = isEn ? 'ALERT LEVEL 1 (HIGH CRISIS POTENTIAL)' : 'SIAGA 1 (POTENSI KRISIS TINGGI)';
    threatColor = '#ef4444';
  } else if (flood > 40 || crime > 50 || sat < 55) {
    threatLevel = isEn ? 'WARNING (EMERGENCY RESPONSE REQUIRED)' : 'WASPADA (PERLU TANGGAP DARURAT)';
    threatColor = 'var(--amber)';
  }

  const emergencyUnits = [
    { id: 'sar', name: isEn ? '🚤 SAR Rescue & Disaster Task Force (BPBD)' : '🚤 Tim SAR & Reaksi Cepat BPBD', cost: 0.2, desc: isEn ? 'Evacuate stranded citizens, deploy mobile pumps and erect flood sandbag levees.' : 'Evakuasi warga terisolasi, pembuatan tanggul darurat, dan pompa penyedot banjir.', fx: isEn ? 'Flood Risk -15, Citizen Approval +5%' : 'Turunkan Risiko Banjir -15, Kepuasan Warga +5%' },
    { id: 'damkar', name: isEn ? '🚒 Municipal Fire & Heavy Rescue Squad' : '🚒 Armada Pemadam Kebakaran & Rescue Unit', cost: 0.15, desc: isEn ? 'Extinguish high-density urban fires and manage emergency traffic accidents.' : 'Pemadaman cepat titik api pasar/sektor padat & evakuasi korban kecelakaan.', fx: isEn ? 'Safety +10, Citizen Approval +4%' : 'Turunkan Risiko Kebakaran, Keselamatan +10, Kepuasan +4%' },
    { id: 'medis', name: isEn ? '🚑 Emergency Medical & Mobile Clinic Units' : '🚑 Tim Medis Darurat & Mobile Clinic', cost: 0.2, desc: isEn ? 'Triage medical care, epidemic disease fogging, and free relief medication.' : 'Layanan medis darurat, fogging massal, dan pembagian obat gratis di posko.', fx: isEn ? 'Public Health +15, Epidemic Prevention, Approval +6%' : 'Kesehatan +15, Cegah Wabah, Kepuasan +6%' },
    { id: 'logistik', name: isEn ? '🍞 Relief Kitchen & Disaster Logistics Convoy' : '🍞 Dapur Umum & Posko Logistik Bencana', cost: 0.1, desc: isEn ? 'Distribute essential food staples, clean drinking water, and emergency shelter tents.' : 'Penyaluran sembako darurat, air bersih, dan tenda pengungsian.', fx: isEn ? 'Poverty Relief, Citizen Approval +7%' : 'Menekan Kemiskinan, Kepuasan Warga +7%' },
    { id: 'brimob', name: isEn ? '🚔 Police Precision Patrol & Civil Order Unit' : '🚔 Mobilisasi Brimob & Satpol PP Presisi', cost: 0.25, desc: isEn ? 'Wide-area patrols, secure relief shelters, and safeguard critical municipal infrastructure.' : 'Patroli berskala besar, penertiban posko, dan pengamanan objek vital kota.', fx: isEn ? 'Crime -12, Security +15, Approval +5%' : 'Kriminalitas -12, Keamanan +15, Kepuasan +5%' }
  ];

  body.innerHTML = `
    <div class="v3Row" style="padding:16px;background:rgba(239,68,68,0.08);border-color:rgba(239,68,68,0.3);margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div>
          <div style="font-size:11px;color:#ef4444;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">🚨 ${isEn ? 'NUSAPURA EMERGENCY CIVIC STATUS' : 'STATUS TANGGAP DARURAT KOTA NUSAPURA'}</div>
          <div style="font-size:18px;font-weight:900;color:${threatColor};margin-top:2px;">${threatLevel}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;color:var(--gray-400);">${isEn ? 'Emergency Reserves (BTT) / APBD:' : 'Dana BTT / APBD Tersedia:'}</div>
          <div style="font-size:16px;font-weight:800;color:var(--blue-soft);">Rp ${apbd.toFixed(1)} ${isEn ? 'Trillion' : 'Triliun'}</div>
        </div>
      </div>
    </div>

    <div style="font-size:13px;font-weight:700;color:var(--gray-400);margin-bottom:10px;">${isEn ? 'DEPLOY EMERGENCY CRISIS UNITS:' : 'MOBILISASI UNIT REAKSI CEPAT KRISIS:'}</div>
    <div class="v3ContentGroup">
      ${emergencyUnits.map(u => `
        <div class="v3Row" style="padding:14px;background:rgba(255,255,255,0.03);">
          <div class="v3RowHead">
            <span style="font-size:15px;font-weight:800;">${u.name}</span>
            <span style="color:var(--blue-soft);font-size:13px;font-weight:800;">${isEn ? 'Cost:' : 'Biaya:'} Rp ${u.cost.toFixed(2)} T</span>
          </div>
          <div class="v3RowSub" style="margin:6px 0;">${u.desc}</div>
          <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Direct Impact:' : 'Dampak Langsung:'} ${u.fx}</div>
          <button class="bigBtn" style="padding:8px 16px;font-size:13px;background:linear-gradient(135deg,#ef4444,#dc2626);" onclick="dispatchEmergencyUnit('${u.id}', ${u.cost})">
            🚀 ${isEn ? 'Deploy Unit Immediately' : 'Terjunkan Unit Sekarang'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function dispatchEmergencyUnit(type, cost) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (state.apbd < cost) {
    showToast(isEn ? `⚠️ Emergency Reserves / APBD insufficient! Needed Rp ${cost} T.` : `⚠️ Dana BTT / APBD tidak cukup! Butuh Rp ${cost} T.`);
    return;
  }

  state.apbd = Math.max(0, Math.round((state.apbd - cost) * 10) / 10);
  if (!state.stats) state.stats = {};

  if (type === 'sar') {
    state.stats.flood = Math.max(0, (state.stats.flood || 30) - 15);
    state.sat = Math.min(100, state.sat + 5);
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🚤 Search & Rescue (SAR) teams successfully evacuated residents and mitigated flood severity!' : '🚤 Tim SAR & BPBD berhasil mengevakuasi korban & menurunkan risiko banjir!');
  } else if (type === 'damkar') {
    state.sat = Math.min(100, state.sat + 4);
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🚒 Fire Brigade deployed rapidly to extinguish major urban fire hazards!' : '🚒 Armada Damkar sigap memadamkan potensi kebakaran kota!');
  } else if (type === 'medis') {
    state.sat = Math.min(100, state.sat + 6);
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🚑 Emergency Medical Squads responded swiftly at neighborhood relief posts!' : '🚑 Tim Medis Darurat bergerak cepat melayani warga di posko!');
  } else if (type === 'logistik') {
    state.sat = Math.min(100, state.sat + 7);
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🍞 Public kitchens and food parcel distributions eased citizen anxieties!' : '🍞 Penyaluran dapur umum & bantuan sembako meredam kegelisahan warga!');
  } else if (type === 'brimob') {
    state.stats.crime = Math.max(0, (state.stats.crime || 40) - 12);
    state.sat = Math.min(100, state.sat + 5);
    showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '🚔 High-visibility police patrols restored civic stability and public order!' : '🚔 Patroli presisi Brimob & Satpol PP memulihkan stabilitas keamanan kota!');
  }

  if (!state.news) state.news = [];
  state.news.unshift({
    year: `Thn ${state.year}`,
    year_en: `Yr ${state.year}`,
    text: `Walikota menginstruksikan penerjunan darurat unit ${type.toUpperCase()}.`,
    text_en: `Mayor instructed emergency deployment of ${type.toUpperCase()} disaster response unit.`,
    mood: 1
  });

  updateHUD();
  renderEmergencyModal();
  saveGame();
}

/* ================= FEATURE 2: ARENA DEBAT & KAMPANYE PILKADA ================= */
function openCampaignModal() {
  const m = document.getElementById('campaignModal');
  if (m) {
    m.classList.add('show');
    renderCampaignModal();
  }
}

function renderCampaignModal() {
  const body = document.getElementById('campaignModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.campaignData) {
    state.campaignData = {
      electability: Math.min(85, Math.max(35, Math.round((state.sat || 60) * 0.9 + 5))),
      funds: 2.5,
      districts: [
        { id: 'pusat', name: isEn ? 'Central Nusapura District' : 'Kec. Nusapura Pusat', support: 55 },
        { id: 'utara', name: isEn ? 'North Coast District' : 'Kec. Pesisir Utara', support: 48 },
        { id: 'selatan', name: isEn ? 'South Industrial District' : 'Kec. Industri Selatan', support: 52 },
        { id: 'timur', name: isEn ? 'East Suburbs District' : 'Kec. Suburbs Timur', support: 60 }
      ]
    };
  }

  const c = state.campaignData;
  c.electability = Math.min(95, Math.max(25, Math.round((state.sat || 60) * 0.85 + 8)));

  body.innerHTML = `
    <div class="v3Row" style="padding:16px;background:rgba(245,158,11,0.08);border-color:rgba(245,158,11,0.3);margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:11px;color:var(--amber);font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">🗳️ ${isEn ? 'REAL-TIME MAYORAL ELECTION POLLING' : 'SURVEI ELEKTABILITAS PILKADA REAL-TIME'}</div>
          <div style="font-size:22px;font-weight:900;color:#fff;margin-top:2px;">${isEn ? 'Incumbent Polling:' : 'Elektabilitas Incumbent:'} ${c.electability}%</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;color:var(--gray-400);">${isEn ? 'Campaign War Chest:' : 'Dana Kampanye Tim:'}</div>
          <div style="font-size:16px;font-weight:800;color:var(--amber);">Rp ${c.funds.toFixed(1)} ${isEn ? 'Billion' : 'Miliar'}</div>
        </div>
      </div>
    </div>

    <div style="font-size:13px;font-weight:700;color:var(--gray-400);margin-bottom:8px;">${isEn ? 'CAMPAIGN ACTIONS & PUBLIC DEBATE:' : 'STRATEGI KAMPANYE & ADU DEBAT:'}</div>
    <div class="v3ContentGroup" style="margin-bottom:16px;">
      <div class="v3Row" style="padding:12px;background:rgba(255,255,255,0.03);">
        <div class="v3RowHead">
          <span style="font-size:14px;font-weight:800;">📺 ${isEn ? 'National Broadcast Mayoral Debate' : 'Debat Terbuka KPU di TV Nasional'}</span>
          <span style="font-size:12px;color:var(--amber);font-weight:800;">${isEn ? 'Cost:' : 'Biaya:'} Rp 0.5 M</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0;">${isEn ? 'Debate municipal development vision and APBD governance against opposition candidates.' : 'Adu argumen visi-misi pembangunan & tata kelola APBD dengan calon oposisi.'}</div>
        <button class="socialActionBtn" onclick="runCampaignAction('debate', 0.5)">🎙️ ${isEn ? 'Join Live Debate (+5-10% Polling)' : 'Ikuti Debat Pilkada (+5-10% Elektabilitas)'}</button>
      </div>

      <div class="v3Row" style="padding:12px;background:rgba(255,255,255,0.03);">
        <div class="v3RowHead">
          <span style="font-size:14px;font-weight:800;">🏬 ${isEn ? 'Grassroots Market Visits & Town Halls' : 'Blusukan Pasar & Temu Tokoh Masyarakat'}</span>
          <span style="font-size:12px;color:var(--amber);font-weight:800;">${isEn ? 'Cost:' : 'Biaya:'} Rp 0.3 M</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0;">${isEn ? 'Listen to market traders, labor unions, and neighborhood elders at the grassroots.' : 'Menyerap aspirasi pedagang, buruh, dan tokoh agama di akar rumput.'}</div>
        <button class="socialActionBtn" onclick="runCampaignAction('blusukan', 0.3)">🤝 ${isEn ? 'Conduct Ground Visits (+4% Polling, +5 Approval)' : 'Lakukan Blusukan (+4% Elektabilitas, +5 Kepuasan)'}</button>
      </div>

      <div class="v3Row" style="padding:12px;background:rgba(255,255,255,0.03);">
        <div class="v3RowHead">
          <span style="font-size:14px;font-weight:800;">📲 ${isEn ? 'Targeted Digital & Social Campaign Ads' : 'Kampanye Digital & Baliho Presisi'}</span>
          <span style="font-size:12px;color:var(--amber);font-weight:800;">${isEn ? 'Cost:' : 'Biaya:'} Rp 0.4 M</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0;">${isEn ? 'Broadcast targeted performance highlights and youth-focused social ads.' : 'Penayangan iklan media sosial targeted & spanduk capaian kinerja Walikota.'}</div>
        <button class="socialActionBtn" onclick="runCampaignAction('media', 0.4)">🚀 ${isEn ? 'Launch Digital Ads (+6% Polling)' : 'Tayangkan Kampanye Digital (+6% Elektabilitas)'}</button>
      </div>
    </div>
  `;
}

function runCampaignAction(type, cost) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (!state.campaignData) renderCampaignModal();
  const c = state.campaignData;

  if (c.funds < cost) {
    if (state.apbd >= cost / 10) {
      state.apbd = Math.max(0, Math.round((state.apbd - cost / 10) * 10) / 10);
      c.funds += cost;
      showToast(isEn ? `💰 Allocated Rp ${(cost / 10).toFixed(2)} T from APBD to campaign funds!` : `💰 Alokasi Rp ${(cost / 10).toFixed(2)} T dari APBD disalurkan ke dana kampanye!`);
    } else {
      showToast(isEn ? `⚠️ Campaign funds insufficient! Needed Rp ${cost} Billion.` : `⚠️ Dana kampanye tidak cukup! Butuh Rp ${cost} Miliar.`);
      return;
    }
  }

  c.funds = Math.max(0, Math.round((c.funds - cost) * 10) / 10);

  if (type === 'debate') {
    const gain = Math.floor(Math.random() * 6) + 5;
    state.sat = Math.min(100, state.sat + 4);
    showToast(isEn ? `📺 Mayor delivered a stellar performance in the Mayoral Debate! Electability +${gain}%!` : `📺 Walikota tampil memukau di Debat Pilkada! Elektabilitas naik +${gain}%!`);
  } else if (type === 'blusukan') {
    state.sat = Math.min(100, state.sat + 5);
    showToast(isEn ? `🤝 Grassroots market walk was warmly received by citizens (+5% Approval)!` : `🤝 Blusukan ke pasar tradisional disambut antusias warga (+5% Kepuasan)!`);
  } else if (type === 'media') {
    state.sat = Math.min(100, state.sat + 3);
    showToast(isEn ? `🚀 Mayoral digital campaign ads successfully engaged youth voters!` : `🚀 Iklan digital kampanye Walikota menjangkau pemilih muda!`);
  }

  updateHUD();
  renderCampaignModal();
  saveGame();
}

/* ================= FEATURE 3: LAPOR WALIKOTA 112 & DISPOSISI ================= */
function generateDynamicCitizenReports() {
  const reports = [];
  const s = state.stats || {};

  if (state.currentActiveEvent) {
    reports.push({
      id: 'rep_ev_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      title: '🚨 Aduan Mendesak: Dampak ' + state.currentActiveEvent.title,
      sender: 'Forum Warga Terdampak & LSM Daerah',
      urgency: 'TINGGI',
      cost: 0.10,
      desc: 'Warga meminta Walikota segera menurunkan tim reaksi cepat dinas untuk mengatasi dampak ' + state.currentActiveEvent.title + '.'
    });
  }

  if ((s.traffic || 50) > 55) {
    reports.push({
      id: 'rep_trf_' + Math.floor(Math.random() * 1000),
      title: '🚗 Kemacetan Parah & Traffic Light Mati di Simpang Lima',
      sender: 'Komunitas Penglaju & Sopir Angkot',
      urgency: 'TINGGI',
      cost: 0.08,
      desc: 'Antrean kendaraan mengular hingga 2 km pada jam berangkat kerja akibat kemacetan dan kurangnya personel Dishub.'
    });
  }

  if ((s.flood || 50) > 55) {
    reports.push({
      id: 'rep_fld_' + Math.floor(Math.random() * 1000),
      title: '🌊 Genangan Banjir & Saluran Drainase Mampet di Pesisir',
      sender: 'Paguyuban RT/RW Kec. Suburbs',
      urgency: 'TINGGI',
      cost: 0.10,
      desc: 'Setiap kali hujan deras, selokan tumpah ke pemukiman warga akibat endapan lumpur & sampah.'
    });
  }

  if ((s.crime || 50) > 55) {
    reports.push({
      id: 'rep_crm_' + Math.floor(Math.random() * 1000),
      title: '🛡️ Maraknya Pungli & Rawan Curanmor Malam Hari',
      sender: 'Asosiasi Pedagang Pasar & Warga Malam',
      urgency: 'TINGGI',
      cost: 0.08,
      desc: 'Pedagang dan pengendara mengeluhkan oknum preman yang meminta uang retribusi liar secara paksa.'
    });
  }

  if ((s.poll || 50) > 55) {
    reports.push({
      id: 'rep_pol_' + Math.floor(Math.random() * 1000),
      title: '🏭 Cerobong Pabrik Kawasan Industri Hasilkan Asap Pekat',
      sender: 'Warga Kec. Nusapura Utara',
      urgency: 'SEDANG',
      cost: 0.06,
      desc: 'Asap industri sebabkan banyak balita terserang ISPA. Warga memohon inspeksi AMDAL dari Dinas Lingkungan.'
    });
  }

  if ((s.unemp || 7) > 8) {
    reports.push({
      id: 'rep_unm_' + Math.floor(Math.random() * 1000),
      title: '💼 Melonjaknya Pengangguran Usia Muda & Lulusan SMK',
      sender: 'Aliansi Pemuda & Karang Taruna',
      urgency: 'SEDANG',
      cost: 0.07,
      desc: 'Anak muda kesulitan mendapat kerja. Memohon penyelenggaraan Pelatihan Kerja Gratis & Job Fair Kota.'
    });
  }

  if ((s.edu || 55) < 50) {
    reports.push({
      id: 'rep_edu_' + Math.floor(Math.random() * 1000),
      title: '🏫 Atap Gedung SD Negeri 03 Roboh & Fasilitas Rusak',
      sender: 'Dewan Guru & Komite Sekolah',
      urgency: 'TINGGI',
      cost: 0.09,
      desc: 'Siswa terpaksa belajar di teras akibat kayu atap ruang kelas lapuk dan rawan ambruk.'
    });
  }

  if ((s.health || 55) < 50) {
    reports.push({
      id: 'rep_hlth_' + Math.floor(Math.random() * 1000),
      title: '🏥 Antrean Pasien BPJS Membludak di RSUD Kota',
      sender: 'Pasien & Keluarga Korban',
      urgency: 'TINGGI',
      cost: 0.09,
      desc: 'Antrean pendaftaran capai ratusan orang sejak subuh karena minimnya dokter spesialis dan loket.'
    });
  }

  const pool = [
    { title: '🕳️ Penambalan Jalan Protokol Berlubang Parah', sender: 'Pengguna Jalan Utama', urgency: 'SEDANG', cost: 0.06, desc: 'Lubang menganga mengancam keselamatan pengendara motor saat malam hari.' },
    { title: '💡 Perbaikan Lampu Penerangan Jalan (PJU) Padam', sender: 'Warga Perumahan Indah', urgency: 'SEDANG', cost: 0.05, desc: 'Jalur utama gelap gulita saat malam, memicu kerawanan pembegalan.' },
    { title: '🗑️ Penumpukan Sampah Liar di Pinggir Pasar', sender: 'Komunitas Peduli Lingkungan', urgency: 'SEDANG', cost: 0.05, desc: 'Aroma tidak sedap mengganggu pengguna jalan dan pedagang sekitar.' },
    { title: '🌳 Pemangkasan Pohon Lapuk Rawan Tumbang', sender: 'Dinas Pemadam & Penyelamatkan', urgency: 'SEDANG', cost: 0.04, desc: 'Pohon tua di tepi jalan berisiko tumbang saat hujan deras dan angin kencang.' }
  ];

  while (reports.length < 4) {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const id = 'rep_gen_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    if (!reports.some(r => r.title === pick.title)) {
      reports.push({ id, ...pick });
    }
  }

  return reports.slice(0, 5);
}

function refreshCitizenReports() {
  state.reportsList = generateDynamicCitizenReports();
  showToast('🔄 Aplikasi Lapor Walikota 112 diperbarui dengan aduan warga terbaru!');
  renderReportsModal();
  saveGame();
}

function openReportsModal() {
  const m = document.getElementById('reportsModal');
  if (m) {
    m.classList.add('show');
    renderReportsModal();
  }
}

function renderReportsModal() {
  const body = document.getElementById('reportsModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.reportsList || state.reportsList.length === 0) {
    state.reportsList = generateDynamicCitizenReports();
  }

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
      <div style="font-size:13px;font-weight:700;color:var(--gray-400);">${isEn ? 'INCOMING CITIZEN TICKETS (HOTLINE 112):' : 'DAFTAR ADUAN MASUK DARI APLIKASI LAPOR WALIKOTA 112:'}</div>
      <button class="bigBtn secondary" style="padding:6px 14px;font-size:12px;width:auto;" onclick="refreshCitizenReports()">
        🔄 ${isEn ? 'Sync Citizen Hotline 112' : 'Segarkan Aduan Masuk (Sync 112)'}
      </button>
    </div>
    <div class="v3ContentGroup">
      ${state.reportsList.length === 0 ? `<div style="color:var(--gray-400);font-size:13px;padding:12px;">🎉 ${isEn ? 'All citizen reports have been resolved!' : 'Seluruh aduan warga telah selesai ditindaklanjuti!'}</div>` : ''}
      ${state.reportsList.map(r => `
        <div class="v3Row" style="padding:14px;background:rgba(255,255,255,0.03);">
          <div class="v3RowHead">
            <span style="font-size:15px;font-weight:800;">${r.title}</span>
            <span style="color:${(r.urgency === 'TINGGI' || r.urgency === 'HIGH') ? '#ef4444' : 'var(--amber)'};font-size:11px;font-weight:800;">${isEn ? 'URGENCY:' : 'URGENSI:'} ${isEn && r.urgency === 'TINGGI' ? 'HIGH' : (isEn && r.urgency === 'SEDANG' ? 'MEDIUM' : r.urgency)}</span>
          </div>
          <div style="font-size:11.5px;color:var(--blue-soft);margin:4px 0;">${isEn ? 'Reported by:' : 'Pelapor:'} ${r.sender} | ${isEn ? 'Resolution Cost:' : 'Biaya Disposisi:'} Rp ${r.cost.toFixed(2)} T</div>
          <div class="v3RowSub" style="margin-bottom:10px;">"${r.desc}"</div>
          <button class="bigBtn" style="padding:8px 16px;font-size:13px;" onclick="resolveCitizenReport('${r.id}', ${r.cost})">
            ⚡ ${isEn ? 'Issue Executive Disposition Order' : 'Terbitkan Disposisi Cepat'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function resolveCitizenReport(rId, cost) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (state.apbd < cost) {
    showToast(isEn ? `⚠️ APBD treasury insufficient for directive! Needed Rp ${cost} T.` : `⚠️ Kas APBD tidak cukup untuk disposisi! Butuh Rp ${cost} T.`);
    return;
  }

  state.apbd = Math.max(0, Math.round((state.apbd - cost) * 10) / 10);
  state.sat = Math.min(100, state.sat + 4);

  state.reportsList = state.reportsList.filter(r => r.id !== rId);

  showToast(isEn ? `⚡ Mayoral directive issued! Assigned department executed emergency ground response (+4% Approval).` : `⚡ Disposisi Walikota diterbitkan! Dinas terkait langsung eksekusi di lapangan (+4% Kepuasan).`);
  updateHUD();
  renderReportsModal();
  saveGame();
}

/* ================= FEATURE 4: HUB INVESTASI & EKONOMI ================= */
function openInvestmentModal() {
  const m = document.getElementById('investmentModal');
  if (m) {
    m.classList.add('show');
    renderInvestmentModal();
  }
}

function renderInvestmentModal() {
  const body = document.getElementById('investmentModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.investmentSectors) {
    state.investmentSectors = [
      { id: 'kek', name: '🏭 Kawasan Ekonomi Khusus (KEK) Industri', name_en: '🏭 Special Economic Zone (KEK) Industrial Park', level: 1, max: 5, cost: 1.0, fx: 'Tarik Rp 5 T Investasi Asing, PAD +0.5 T/thn, Pengangguran -8%', fx_en: 'Attract Foreign FDI, PAD +0.5 T/yr, Unemployment -8%' },
      { id: 'port', name: '⚓ Pusat Logistik Pelabuhan Internasional', name_en: '⚓ International Port & Logistics Hub', level: 1, max: 5, cost: 1.2, fx: 'Ekspor-Impor +25%, PAD +0.8 T/thn, Investasi +15%', fx_en: 'Exports-Imports +25%, PAD +0.8 T/yr, Investment +15%' },
      { id: 'tech', name: '☁️ Data Center & Startup Digital Park', name_en: '☁️ Cloud Data Center & Tech Startup Park', level: 0, max: 5, cost: 0.8, fx: 'Lapangan Kerja Tinggi, PAD +0.4 T/thn, Generasi Muda +12%', fx_en: 'High-Tech Jobs, PAD +0.4 T/yr, Youth Stance +12%' },
      { id: 'tourism', name: '🏖️ Kawasan Wisata Bahari & Eco-Resort', name_en: '🏖️ Marine Ecotourism & Coastal Resort Zone', level: 1, max: 5, cost: 0.6, fx: 'Turis +40%, Ekonomi Lokal +15%, PAD +0.3 T/thn', fx_en: 'Tourism +40%, Local SME Economy +15%, PAD +0.3 T/yr' }
    ];
  }

  body.innerHTML = `
    <div class="v3Row" style="padding:14px;background:rgba(59,124,246,0.08);border-color:rgba(59,124,246,0.3);margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div>
          <div style="font-size:11px;color:var(--blue-soft);font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">📈 ${isEn ? 'GRDP & MUNICIPAL ECONOMIC GROWTH' : 'PDRB & PERTUMBUHAN EKONOMI KOTA'}</div>
          <div style="font-size:18px;font-weight:900;color:#fff;margin-top:2px;">${isEn ? 'Annual Growth Rate: +5.8% / Year' : 'Pertumbuhan Ekonomi: +5.8% / Tahun'}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;color:var(--gray-400);">${isEn ? 'Realized Investment FDI:' : 'Realisasi Investasi:'}</div>
          <div style="font-size:16px;font-weight:800;color:var(--green);">Rp 18.5 ${isEn ? 'Trillion' : 'Triliun'}</div>
        </div>
      </div>
    </div>

    <div style="font-size:13px;font-weight:700;color:var(--gray-400);margin-bottom:10px;">${isEn ? 'PRIORITY STRATEGIC ECONOMIC SECTORS:' : 'SEKTOR UNGGULAN INVESTASI KOTA NUSAPURA:'}</div>
    <div class="v3ContentGroup">
      ${state.investmentSectors.map(s => {
        const name = (isEn && s.name_en) ? s.name_en : s.name;
        const fx = (isEn && s.fx_en) ? s.fx_en : s.fx;
        return `
        <div class="v3Row" style="padding:14px;background:rgba(255,255,255,0.03);">
          <div class="v3RowHead">
            <span style="font-size:15px;font-weight:800;">${name}</span>
            <span style="color:var(--amber);font-size:12px;font-weight:800;">Level ${s.level}/${s.max}</span>
          </div>
          <div class="v3RowSub" style="margin:6px 0;">${fx}</div>
          <button class="bigBtn" style="padding:8px 16px;font-size:13px;" onclick="investSector('${s.id}', ${s.cost})">
            💰 ${isEn ? `Expand Sector (APBD Cost Rp ${s.cost.toFixed(1)} T)` : `Kembangkan Sektor (Biaya APBD Rp ${s.cost.toFixed(1)} T)`}
          </button>
        </div>
      `;}).join('')}
    </div>
  `;
}

function investSector(sId, cost) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (state.apbd < cost) {
    showToast(isEn ? `⚠️ APBD treasury insufficient! Needed Rp ${cost} T.` : `⚠️ Kas APBD tidak cukup! Butuh Rp ${cost} T.`);
    return;
  }

  const s = state.investmentSectors.find(item => item.id === sId);
  if (!s || s.level >= s.max) return;

  state.apbd = Math.max(0, Math.round((state.apbd - cost) * 10) / 10);
  s.level++;
  state.sat = Math.min(100, state.sat + 3);

  updateActorRelations({ Pengusaha: 10, Investor: 12 });
  showToast(isEn ? `📈 Sector ${s.name_en || s.name} successfully upgraded to Level ${s.level}! Economic growth accelerated.` : `📈 Sektor ${s.name} berhasil ditingkatkan ke Level ${s.level}! Pertumbuhan ekonomi naik.`);
  updateHUD();
  renderInvestmentModal();
  saveGame();
}

/* ================= FEATURE 5: AUDIT BPK & ANTI-KORUPSI ================= */
function openIntegrityModal() {
  const m = document.getElementById('integrityModal');
  if (m) {
    m.classList.add('show');
    renderIntegrityModal();
  }
}

function renderIntegrityModal() {
  const body = document.getElementById('integrityModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.integritySystems) {
    state.integritySystems = [
      { id: 'ebudget', name: '💻 E-Budgeting & E-Planning Publik', name_en: '💻 Public E-Budgeting & Digital E-Planning System', active: false, cost: 0.2, desc: 'Sistem penguncian anggaran otomatis mencegah proyek "titipan" DPRD & pejabat.', desc_en: 'Automatic budget locking system preventing clandestine project insertion.', fx: 'Risiko Korupsi -20%, Relasi BPK +15, LSM +10', fx_en: 'Corruption Risk -20%, BPK Audit Stance +15, NGO +10' },
      { id: 'ekatalog', name: '🛒 E-Katalog Pengadaan Barang & Jasa', name_en: '🛒 Mandatory E-Catalog Public Works Marketplace', active: false, cost: 0.15, desc: 'Seluruh tender dinas wajib lewat marketplace online resmi transparan.', desc_en: 'Mandatory online transparent portal for all municipal procurement.', fx: 'Efisiensi APBD +0.5 T/thn, Risiko Korupsi -15%', fx_en: 'APBD Efficiency +0.5 T/yr, Corruption Risk -15%' },
      { id: 'whistle', name: '🛡️ Whistleblowing System Anonymous', name_en: '🛡️ Anonymous Whistleblower Anti-Graft Channel', active: false, cost: 0.1, desc: 'Kanal aduan rahasia dugaan pungli & korupsi internal birokrasi.', desc_en: 'Secure encrypted portal for reporting bureaucratic extortion and bribery.', fx: 'Risiko Korupsi -10%, Kepercayaan Publik +5%', fx_en: 'Corruption Risk -10%, Public Trust +5%' },
      { id: 'audit_bpk', name: '🔎 Audit Investigatif Khusus BPK', name_en: '🔎 Special BPK Investigative Financial Audit', active: false, cost: 0.3, desc: 'Mengundang auditor BPK memeriksa seluruh neraca keuangan Pemkot.', desc_en: 'Invite supreme state auditors (BPK) to scrutinize all city ledgers.', fx: 'Opini WTP (Wajar Tanpa Pengecualian), Risiko Korupsi -25%', fx_en: 'WTP Clean Audit Rating, Corruption Risk -25%' }
    ];
  }

  const riskVal = typeof getCorruptionRisk === 'function' ? getCorruptionRisk() : (state.risk || 10);

  body.innerHTML = `
    <div class="v3Row" style="padding:14px;background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.3);margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div>
          <div style="font-size:11px;color:var(--green);font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">🛡️ ${isEn ? 'CITY INTEGRITY & TRANSPARENCY INDEX' : 'INDEKS INTEGRITAS & TRANSPARANSI PEMKOT'}</div>
          <div style="font-size:18px;font-weight:900;color:#fff;margin-top:2px;">${isEn ? 'BPK State Audit Rating:' : 'Status Audit BPK:'} ${riskVal < 20 ? (isEn ? '🟢 WTP (Unqualified Clean Opinion)' : '🟢 WTP (Wajar Tanpa Pengecualian)') : (isEn ? '🟡 WDP (Qualified Opinion with Exceptions)' : '🟡 WDP (Wajar Dengan Pengecualian)')}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;color:var(--gray-400);">${isEn ? 'Corruption Risk Probability:' : 'Tingkat Risiko Kebocoran:'}</div>
          <div style="font-size:16px;font-weight:800;color:${riskVal < 20 ? 'var(--green)' : '#ef4444'};">${riskVal}%</div>
        </div>
      </div>
    </div>

    <div style="font-size:13px;font-weight:700;color:var(--gray-400);margin-bottom:10px;">${isEn ? 'TRANSPARENCY & OVERSIGHT SYSTEMS:' : 'SISTEM DAN SISTEM PENGAWASAN TRANSPARANSI:'}</div>
    <div class="v3ContentGroup">
      ${state.integritySystems.map(sys => {
        const name = (isEn && sys.name_en) ? sys.name_en : sys.name;
        const desc = (isEn && sys.desc_en) ? sys.desc_en : sys.desc;
        const fx = (isEn && sys.fx_en) ? sys.fx_en : sys.fx;
        return `
        <div class="v3Row" style="padding:14px;background:${sys.active ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)'};border-color:${sys.active ? 'rgba(16,185,129,0.4)' : 'var(--line)'};">
          <div class="v3RowHead">
            <span style="font-size:15px;font-weight:800;">${name}</span>
            <span style="color:${sys.active ? 'var(--green)' : 'var(--gray-400)'};font-size:12px;font-weight:800;">${sys.active ? (isEn ? '🟢 ACTIVE' : '🟢 AKTIF') : (isEn ? '⚪ INACTIVE' : '⚪ NON-AKTIF')}</span>
          </div>
          <div class="v3RowSub" style="margin:6px 0;">${desc}</div>
          <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Audit Benefits:' : 'Efek Audit:'} ${fx}</div>
          <button class="bigBtn ${sys.active ? 'secondary' : ''}" style="padding:8px 16px;font-size:13px;" onclick="toggleAuditSystem('${sys.id}')">
            ${sys.active ? (isEn ? '🚫 Deactivate System' : '🚫 Non-Aktifkan Sistem') : (isEn ? `✅ Activate System (Cost Rp ${sys.cost.toFixed(2)} T)` : `✅ Aktifkan System (Biaya Rp ${sys.cost.toFixed(2)} T)`)}
          </button>
        </div>
      `;}).join('')}
    </div>
  `;
}

function toggleAuditSystem(sysId) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (!state.integritySystems) renderIntegrityModal();
  const sys = state.integritySystems.find(item => item.id === sysId);
  if (!sys) return;

  if (sys.active) {
    sys.active = false;
    showToast(isEn ? `🛡️ System "${sys.name_en || sys.name}" deactivated.` : `🛡️ Sistem "${sys.name}" dinonaktifkan.`);
  } else {
    if (state.apbd < sys.cost) {
      showToast(isEn ? `⚠️ APBD treasury insufficient! Needed Rp ${sys.cost} T.` : `⚠️ Kas APBD tidak cukup! Butuh Rp ${sys.cost} T.`);
      return;
    }
    state.apbd = Math.max(0, Math.round((state.apbd - sys.cost) * 10) / 10);
    sys.active = true;
    if (typeof getCorruptionRisk === 'function') getCorruptionRisk();
    updateActorRelations({ BPK: 15, LSM: 10 });
    showToast(isEn ? `✅ System "${sys.name_en || sys.name}" officially activated! Budget leakage risk reduced.` : `✅ Sistem "${sys.name}" resmi diaktifkan! Risiko kebocoran anggaran turun.`);
  }

  updateHUD();
  renderIntegrityModal();
  saveGame();
}

/* ================= BITLIFE MAYOR PERSONAL LIFE & TRIAL SYSTEMS ================= */
function openLifeModal() {
  const m = document.getElementById('lifeModal');
  if (m) {
    m.classList.add('show');
    renderLifeModal();
  }
}

function renderLifeModal() {
  const body = document.getElementById('lifeModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.life) {
    state.life = typeof initLifeState === 'function' ? initLifeState(state.selectedMayor) : {
      age: 42,
      health: 85,
      stress: 20,
      wealth: 1.8,
      reputation: 75,
      familyRel: 85,
      salary: 0.35,
      spouse: 'dr. Sarah N. (Dokter Spesialis)',
      spouse_en: 'Dr. Sarah N. (Medical Specialist)',
      childrenCount: 2,
      house: 'Rumah Pribadi Asri (Kec. Nusa Tengah)',
      house_en: 'Serene Private Residence (Central District)',
      car: 'SUV MPV Keluarga',
      car_en: 'Family MPV Vehicle',
      investments: [],
      journal: [
        {
          year: 1,
          text: '🎉 Resmi dilantik sebagai Walikota Nusapura. Kekayaan pribadi tercatat Rp 1.8 Miliar.',
          text_en: '🎉 Officially inaugurated as Mayor of Nusapura. Personal net worth recorded at Rp 1.8 Billion.'
        }
      ]
    };
  } else if (typeof syncLifeTranslations === 'function') {
    syncLifeTranslations();
  }

  const l = state.life;
  const mayorObj = (state.mayorCandidate && state.mayorCandidate.id)
    ? state.mayorCandidate
    : (MAYOR_CANDIDATES.find(m => m.id === (state.selectedMayor || (state.life && state.life.mayorId))) || MAYOR_CANDIDATES[0]);
  const avatar = mayorObj.avatar || l.avatar || (mayorObj.gender === 'female' ? '👩‍💼' : '👨‍💼');
  const mayorName = mayorObj.name || (isEn ? 'Mayor of Nusapura' : 'Walikota Nusapura');
  const mayorTitle = isEn ? (mayorObj.title_en || mayorObj.title) : mayorObj.title;
  const spouseStr = isEn ? (l.spouse_en || l.spouse) : l.spouse;
  const childrenStr = isEn ? (l.childrenDesc_en || l.childrenDesc || `${l.childrenCount} Children`) : (l.childrenDesc || `${l.childrenCount} Orang`);
  const houseStr = isEn ? (l.house_en || l.house) : l.house;
  const carStr = isEn ? (l.car_en || l.car) : l.car;
  const hobbyStr = isEn ? (l.hobby_en || l.hobby || 'Civic reading & Sports') : (l.hobby || 'Membaca & Olahraga');

  body.innerHTML = `
    <!-- PROFILE BANNER -->
    <div class="v3Row" style="padding:16px;background:linear-gradient(135deg,rgba(236,72,153,0.12),rgba(139,92,246,0.12));border-color:rgba(236,72,153,0.4);margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
        <div style="font-size:38px;background:rgba(255,255,255,0.1);padding:10px;border-radius:12px;">${avatar}</div>
        <div style="flex:1;min-width:240px;">
          <div style="font-size:18px;font-weight:900;color:#fff;">${mayorName}</div>
          <div style="font-size:12px;color:#93c5fd;font-weight:600;margin-top:1px;">${mayorTitle} • ${isEn ? `${l.age} Years Old` : `Usia ${l.age} Tahun`}</div>
          <div style="font-size:12px;color:var(--gray-300);margin-top:5px;">
            💍 <b>${isEn ? 'Spouse:' : 'Pasangan:'}</b> ${spouseStr}
          </div>
          <div style="font-size:12px;color:var(--gray-300);margin-top:2px;">
            👶 <b>${isEn ? 'Children:' : 'Keluarga:'}</b> ${childrenStr}
          </div>
          <div style="font-size:12px;color:var(--gray-400);margin-top:2px;">
            🏠 <b>${isEn ? 'Residence:' : 'Kediaman:'}</b> ${houseStr} • 🚗 ${carStr}
          </div>
          <div style="font-size:11.5px;color:#fef08a;margin-top:3px;">
            🌿 <b>${isEn ? 'Hobbies & Passion:' : 'Hobi & Minat:'}</b> ${hobbyStr}
          </div>
        </div>
        <div style="text-align:right;background:rgba(0,0,0,0.25);padding:10px 14px;border-radius:10px;border:1px solid var(--line);min-width:140px;">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Personal Wealth' : 'Kekayaan Pribadi'}</div>
          <div style="font-size:20px;font-weight:900;color:#4ade80;">Rp ${l.wealth.toFixed(2)} M</div>
          <div style="font-size:10px;color:var(--gray-400);margin-top:2px;">${isEn ? 'Official Salary: Rp' : 'Gaji Resmi: Rp'} ${l.salary.toFixed(2)} M/${isEn ? 'yr' : 'thn'}</div>
        </div>
      </div>
    </div>

    <!-- STATS BARS GRID -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:16px;">
      <div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:10px;border:1px solid var(--line);">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
          <span>❤️ ${isEn ? 'Physical Health' : 'Kesehatan'}</span>
          <span style="color:${l.health > 60 ? '#4ade80' : '#ef4444'};">${l.health}%</span>
        </div>
        <div class="hudBarTrack"><div class="hudBarFill" style="width:${l.health}%;background:${l.health > 60 ? '#4ade80' : '#ef4444'};"></div></div>
      </div>

      <div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:10px;border:1px solid var(--line);">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
          <span>⚡ ${isEn ? 'Stress Level' : 'Tingkat Stres'}</span>
          <span style="color:${l.stress < 40 ? '#4ade80' : '#ef4444'};">${l.stress}%</span>
        </div>
        <div class="hudBarTrack"><div class="hudBarFill" style="width:${l.stress}%;background:${l.stress < 40 ? '#4ade80' : '#ef4444'};"></div></div>
      </div>

      <div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:10px;border:1px solid var(--line);">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
          <span>⭐ ${isEn ? 'Personal Popularity' : 'Popularitas Personal'}</span>
          <span style="color:#38bdf8;">${l.reputation}%</span>
        </div>
        <div class="hudBarTrack"><div class="hudBarFill" style="width:${l.reputation}%;background:#38bdf8;"></div></div>
      </div>

      <div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:10px;border:1px solid var(--line);">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:800;margin-bottom:4px;">
          <span>👨‍👩‍👧‍👦 ${isEn ? 'Family Harmony' : 'Keharmonisan Keluarga'}</span>
          <span style="color:#ec4899;">${l.familyRel}%</span>
        </div>
        <div class="hudBarTrack"><div class="hudBarFill" style="width:${l.familyRel}%;background:#ec4899;"></div></div>
      </div>
    </div>

    <!-- ACTION CATEGORIES -->
    <div style="font-size:14px;font-weight:800;color:#fff;margin-bottom:10px;display:flex;align-items:center;gap:6px;">
      <span>🎯 ${isEn ? "MAYOR'S LIFE CHOICES & ACTIVITIES" : 'AKTIVITAS & PILIHAN KEHIDUPAN WALIKOTA'}</span>
    </div>

    <div class="v3ContentGroup" style="margin-bottom:16px;">
      <!-- KESEHATAN & GAYA HIDUP -->
      <div class="v3Row" style="padding:14px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">🧘 ${isEn ? 'Morning Jogging & Meditation' : 'Olahraga & Meditasi Pagi'}</span>
          <span style="font-size:12px;color:#4ade80;font-weight:800;">${isEn ? 'Free' : 'Gratis'}</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">${isEn ? 'Maintain mental tranquility and physical stamina amid intense City Hall meetings.' : 'Menjaga stamina fisik dan ketenangan pikiran di tengah padatnya agenda Pemkot.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Effect: Stress -15%, Health +5%, Popularity +2%' : 'Efek: Stres -15%, Kesehatan +5%, Popularitas +2%'}</div>
        <button class="bigBtn secondary" style="padding:8px 16px;font-size:13px;" onclick="executeLifeAction('meditate')">
          🧘 ${isEn ? 'Exercise & Meditate' : 'Lakukan Olahraga & Meditasi'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">🩺 ${isEn ? 'VIP Hospital Executive Medical Check-Up' : 'Medical Check-Up RSUD VIP'}</span>
          <span style="font-size:12px;color:#f39c12;font-weight:800;">Rp 0.05 M (${isEn ? 'Private' : 'Pribadi'})</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">${isEn ? 'Thorough clinical diagnostics and preventative wellness therapy by specialist physicians.' : 'Pemeriksaan kesehatan menyeluruh dan terapi kebugaran oleh tim medis spesialis.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Effect: Health +20%, Stress -10%' : 'Efek: Kesehatan +20%, Stres -10%'}</div>
        <button class="bigBtn secondary" style="padding:8px 16px;font-size:13px;" onclick="executeLifeAction('checkup')">
          🩺 ${isEn ? 'Undergo Medical Check-Up' : 'Jalani Check-Up Medis'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">✈️ ${isEn ? 'Family Ecotourism Vacation' : 'Liburan Keluarga Mewah'}</span>
          <span style="font-size:12px;color:#f39c12;font-weight:800;">Rp 0.15 M (${isEn ? 'Private' : 'Pribadi'})</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">${isEn ? 'Take extended family on a rejuvenating getaway away from politics.' : 'Ajak keluarga besar berlibur singkat untuk menyegarkan pikiran dari hiruk-pikuk politik.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Effect: Stress -30%, Family Harmony +25%' : 'Efek: Stres -30%, Keharmonisan Keluarga +25%'}</div>
        <button class="bigBtn secondary" style="padding:8px 16px;font-size:13px;" onclick="executeLifeAction('family_vacation')">
          ✈️ ${isEn ? 'Schedule Family Trip' : 'Agendakan Liburan'}
        </button>
      </div>

      <!-- KEUANGAN & BISNIS -->
      <div class="v3Row" style="padding:14px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">🎁 ${isEn ? 'Philanthropic Scholarship & Orphanage Aid' : 'Donasi Filantropi & Beasiswa Anak Yatim'}</span>
          <span style="font-size:12px;color:#f39c12;font-weight:800;">Rp 0.20 M (${isEn ? 'Private' : 'Pribadi'})</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">${isEn ? 'Donate personal funds for youth academic scholarships and local orphanages.' : 'Sumbangkan dana pribadi untuk beasiswa pendidikan dan panti asuhan kota.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Effect: Popularity +10%, Approval +3%, Religious Leaders +5' : 'Efek: Popularitas +10%, Kepuasan Warga +3%, Relasi Tokoh Agama +5'}</div>
        <button class="bigBtn secondary" style="padding:8px 16px;font-size:13px;" onclick="executeLifeAction('philanthropy')">
          🎁 ${isEn ? 'Disburse Personal Donation' : 'Salurkan Donasi Pribadi'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">📈 ${isEn ? 'Local BUMD Shares & Clean Property Equity' : 'Investasi Saham BUMD & Properti Lokal'}</span>
          <span style="font-size:12px;color:#f39c12;font-weight:800;">Rp 0.50 M (${isEn ? 'Private' : 'Pribadi'})</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">${isEn ? 'Legally invest personal savings into audited municipal enterprise dividend portfolios.' : 'Tanamkan modal pribadi pada sektor ritel & BUMD kota secara legal untuk dividen tahunan.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Effect: Passive Dividend Returns ~Rp 0.10 M per year' : 'Efek: Imbal Hasil Pasif ~Rp 0.10 M per tahun'}</div>
        <button class="bigBtn secondary" style="padding:8px 16px;font-size:13px;" onclick="executeLifeAction('invest_bumd')">
          📈 ${isEn ? 'Buy Municipal Shares' : 'Beli Saham Investment'}
        </button>
      </div>

      <div class="v3Row" style="padding:14px;">
        <div class="v3RowHead">
          <span style="font-size:15px;font-weight:800;">🚗 ${isEn ? 'Eco Electric Fleet Vehicle Upgrade' : 'Ganti Kendaraan Dinas / MPV Listrik'}</span>
          <span style="font-size:12px;color:#f39c12;font-weight:800;">Rp 0.40 M (${isEn ? 'Private' : 'Pribadi'})</span>
        </div>
        <div class="v3RowSub" style="margin:4px 0 10px 0;">${isEn ? 'Switch to a zero-emission electric vehicle setting a sustainable benchmark.' : 'Gunakan mobil ramah lingkungan untuk menunjukkan komitmen energi hijau Pemkot.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">✨ ${isEn ? 'Effect: Popularity +5%, Green Index +4%' : 'Efek: Popularitas Personal +5%, Citra Lingkungan +4%'}</div>
        <button class="bigBtn secondary" style="padding:8px 16px;font-size:13px;" onclick="executeLifeAction('upgrade_car')">
          🚗 ${isEn ? 'Upgrade to Electric MPV' : 'Upgrade Mobil Listrik'}
        </button>
      </div>
    </div>

    <!-- TIMELINE JOURNAL -->
    <div style="font-size:14px;font-weight:800;color:#fff;margin-bottom:10px;">📜 ${isEn ? "MAYOR'S CAREER & LIFE JOURNAL" : 'JURNAL KEHIDUPAN & RECORD KARIR WALIKOTA'}</div>
    <div style="background:rgba(0,0,0,0.25);padding:14px;border-radius:12px;border:1px solid var(--line);max-height:220px;overflow-y:auto;">
      ${(l.journal || []).length === 0 ? `<div style="color:var(--gray-400);font-size:12px;">${isEn ? 'No timeline records yet.' : 'Belum ada riwayat tercatat.'}</div>` : ''}
      ${(l.journal || []).slice().reverse().map(j => `
        <div style="font-size:12px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:var(--gray-300);">
          <b style="color:var(--blue-soft);">${isEn ? `Year ${j.year}:` : `Tahun ${j.year}:`}</b> ${j.text}
        </div>
      `).join('')}
    </div>
  `;
}

function executeLifeAction(actId) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (!state.life) renderLifeModal();
  const l = state.life;

  if (actId === 'meditate') {
    l.stress = Math.max(0, l.stress - 15);
    l.health = Math.min(100, l.health + 5);
    l.reputation = Math.min(100, l.reputation + 2);
    l.journal.push({
      year: state.year,
      text: isEn ? '🧘 Maintained daily morning exercise & meditation. Calmer mindset and elevated physical stamina.' : '🧘 Rutin olahraga & meditasi pagi. Pikiran lebih tenang dan fisik lebih segar.'
    });
    showToast(isEn ? '🧘 Morning meditation succeeded! Stress alleviated.' : '🧘 Olahraga & meditasi berhasil! Stres berkurang.');
  } else if (actId === 'checkup') {
    if (l.wealth < 0.05) {
      showToast(isEn ? '⚠️ Personal funds insufficient! Needed Rp 0.05 Billion.' : '⚠️ Uang pribadi tidak cukup! Butuh Rp 0.05 Miliar.');
      return;
    }
    l.wealth -= 0.05;
    l.health = Math.min(100, l.health + 20);
    l.stress = Math.max(0, l.stress - 10);
    l.journal.push({
      year: state.year,
      text: isEn ? '🩺 Underwent comprehensive VIP medical checkup. Physical condition declared prime.' : '🩺 Jalani medical check-up VIP RSUD. Kondisi fisik kini prima.'
    });
    showToast(isEn ? '🩺 Medical check-up complete! Health condition substantially improved.' : '🩺 Check-up medis selesai! Kesehatan membaik pesat.');
  } else if (actId === 'family_vacation') {
    if (l.wealth < 0.15) {
      showToast(isEn ? '⚠️ Personal funds insufficient! Needed Rp 0.15 Billion.' : '⚠️ Uang pribadi tidak cukup! Butuh Rp 0.15 Miliar.');
      return;
    }
    l.wealth -= 0.15;
    l.stress = Math.max(0, l.stress - 30);
    l.familyRel = Math.min(100, l.familyRel + 25);

    if (state.sat < 40) {
      l.reputation = Math.max(10, l.reputation - 10);
      updateActorRelations({ Oposisi: -8 });
      l.journal.push({
        year: state.year,
        text: isEn ? '✈️ Family holiday questioned by opposition press during municipal crisis period.' : '✈️ Liburan keluarga disorot media oposisi karena kota sedang krisis kepuasan.'
      });
      showToast(isEn ? '⚠️ Vacation concluded, though opposition press issued sharp critiques!' : '⚠️ Liburan selesai, namun pers oposisi melayangkan kritik!');
    } else {
      l.journal.push({
        year: state.year,
        text: isEn ? '✈️ Joyful family getaway. Domestic bond and family harmony strongly reinforced.' : '✈️ Liburan manis bersama keluarga. Keharmonisan rumah tangga sangat tinggi.'
      });
      showToast(isEn ? '✈️ Family vacation concluded with warmth and memorable joy!' : '✈️ Liburan keluarga berlangsung hangat & menyenangkan!');
    }
  } else if (actId === 'philanthropy') {
    if (l.wealth < 0.20) {
      showToast(isEn ? '⚠️ Personal funds insufficient! Needed Rp 0.20 Billion.' : '⚠️ Uang pribadi tidak cukup! Butuh Rp 0.20 Miliar.');
      return;
    }
    l.wealth -= 0.20;
    l.reputation = Math.min(100, l.reputation + 10);
    state.sat = Math.min(100, state.sat + 3);
    updateActorRelations({ Agama: 5 });
    l.journal.push({
      year: state.year,
      text: isEn ? '🎁 Donated Rp 200 Million in private savings for city youth orphanage educational scholarships.' : '🎁 Menyumbangkan Rp 200 Juta dana pribadi untuk beasiswa panti asuhan kota.'
    });
    showToast(isEn ? '🎁 Charitable grant disbursed! Citizens and religious leaders express deep gratitude.' : '🎁 Donasi disalurkan! Warga & tokoh agama memberi apresiasi tinggi.');
  } else if (actId === 'invest_bumd') {
    if (l.wealth < 0.50) {
      showToast(isEn ? '⚠️ Personal funds insufficient! Needed Rp 0.50 Billion.' : '⚠️ Uang pribadi tidak cukup! Butuh Rp 0.50 Miliar.');
      return;
    }
    l.wealth -= 0.50;
    if (!l.investments) l.investments = [];
    l.investments.push({ type: 'BUMD Share', amount: 0.50, returnRate: 0.18 });
    l.journal.push({
      year: state.year,
      text: isEn ? '📈 Acquired equity shares in municipal retail and renewable utilities worth Rp 500 Million.' : '📈 Membeli saham portofolio BUMD ritel & energi lokal senilai Rp 500 Juta.'
    });
    showToast(isEn ? '📈 Municipal enterprise shares purchased! Yielding steady annual returns.' : '📈 Saham BUMD dibeli! Akan memberikan imbal hasil tiap tahun.');
  } else if (actId === 'upgrade_car') {
    if (l.wealth < 0.40) {
      showToast(isEn ? '⚠️ Personal funds insufficient! Needed Rp 0.40 Billion.' : '⚠️ Uang pribadi tidak cukup! Butuh Rp 0.40 Miliar.');
      return;
    }
    l.wealth -= 0.40;
    l.car = 'Mobil MPV Listrik Modern';
    l.car_en = 'Modern Electric MPV';
    l.reputation = Math.min(100, l.reputation + 5);
    if (state.stats) state.stats.env = Math.min(100, (state.stats.env || 45) + 3);
    l.journal.push({
      year: state.year,
      text: isEn ? '🚗 Replaced personal motor vehicle with zero-emission electric MPV.' : '🚗 Mengganti armada pribadi dengan MPV Listrik ramah lingkungan.'
    });
    showToast(isEn ? '🚗 Zero-emission Electric MPV officially inaugurated for daily duties!' : '🚗 Mobil MPV Listrik resmi digunakan!');
  }

  updateHUD();
  renderLifeModal();
  saveGame();
}

/* ================= DPRD IMPEACHMENT SYSTEM ================= */
function triggerImpeachmentTrial() {
  const m = document.getElementById('impeachmentModal');
  if (m) {
    m.classList.add('show');
    renderImpeachmentModal();
  }
}

function renderImpeachmentModal() {
  const body = document.getElementById('impeachmentModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (!state.impeachmentState) {
    state.impeachmentState = {
      step: 1,
      supportVotes: 35,
      coalitionVotes: 35,
      oppositionVotes: 40,
      neutralVotes: 25,
      log: []
    };
  }

  const imp = state.impeachmentState;
  body.innerHTML = `
    <div class="v3Row" style="padding:16px;background:rgba(239,68,68,0.1);border-color:#ef4444;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:11px;color:#ef4444;font-weight:900;letter-spacing:0.1em;">${isEn ? '⚖️ SPECIAL PLENARY SESSION (DPRD)' : '⚖️ SIDANG PARIPURNA ISTIMEWA DPRD'}</div>
          <div style="font-size:18px;font-weight:900;color:#fff;">${isEn ? 'Mayoral Impeachment Motion' : 'Mosi Pemakzulan Walikota (Impeachment)'}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Safe Quorum Threshold:' : 'Ambang Batas Selamat:'}</div>
          <div style="font-size:22px;font-weight:900;color:var(--green);">> 50% ${isEn ? 'Votes' : 'Suara'}</div>
        </div>
      </div>
    </div>

    <!-- PARLIAMENT SUPPORT GAUGE -->
    <div style="background:rgba(0,0,0,0.3);padding:14px;border-radius:12px;border:1px solid var(--line);margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:800;margin-bottom:6px;">
        <span style="color:var(--green);">🟢 ${isEn ? 'Supporting Factions' : 'Suara Pendukung'}: ${imp.supportVotes}%</span>
        <span style="color:#ef4444;">🔴 ${isEn ? 'Opposition Factions' : 'Fraksi Oposisi'}: ${100 - imp.supportVotes}%</span>
      </div>
      <div style="width:100%;height:12px;background:#334155;border-radius:6px;overflow:hidden;position:relative;">
        <div style="height:100%;width:${Math.min(100, imp.supportVotes)}%;background:${imp.supportVotes >= 50 ? 'var(--green)' : '#ef4444'};transition:width 0.4s ease;"></div>
        <div style="position:absolute;left:50%;top:0;bottom:0;width:2px;background:#fff;z-index:2;" title="${isEn ? '50% Threshold Line' : 'Garis Batas 50%'}"></div>
      </div>
      <div style="font-size:11px;color:var(--gray-400);margin-top:6px;text-align:center;">
        ${imp.supportVotes >= 50 
          ? (isEn ? '✅ Safe position: above 50% parliamentary majority threshold.' : '✅ Posisi aman di atas 50% kuorum dewan.') 
          : (isEn ? '⚠️ Danger! Below 50% parliamentary survival threshold.' : '⚠️ Bahaya! Kurang dari 50% suara dewan mendukung Anda.')}
      </div>
    </div>

    <!-- POLITICAL LOBBYING STAGES -->
    ${imp.step === 1 ? `
      <div class="v3List">
        <div class="v3Row" style="padding:14px;">
          <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '1. Open Plenary Speech & Moral Defense' : '1. Pidato Pertanggungjawaban Terbuka & Pembelaan Moral'}</div>
          <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Deliver a passionate keynote address highlighting city achievements and fiscal integrity.' : 'Sampaikan pembelaan diri secara heroik di mimbar parlemen dengan data prestasi kota.'}</div>
          <button class="bigBtn" style="padding:10px;" onclick="chooseImpeachmentChoice(1, 'speech')">${isEn ? '🎙️ Plenary Defense Speech (+15% Votes)' : '🎙️ Pidato Paripurna (+15% Suara Fraksi)'}</button>
        </div>
        <div class="v3Row" style="padding:14px;">
          <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '2. Legislative Grants (Pokpir) Concession' : '2. Kompromi Anggaran Pokpir (Pokok Pikiran Dewan)'}</div>
          <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Allocate Rp 0.6 T in district community project funds to absorb faction aspirations.' : 'Alokasikan dana hibah pokok pikiran (Pokpir) sebesar Rp 0.6 T dari APBD untuk menyerap aspirasi fraksi.'}</div>
          <button class="bigBtn" style="padding:10px;" onclick="chooseImpeachmentChoice(1, 'pokpir')">${isEn ? '💰 Grant Rp 0.6 T Pokpir (+25% Votes)' : '💰 Alokasikan Pokpir Rp 0.6 T (+25% Suara Fraksi)'}</button>
        </div>
      </div>
    ` : ''}

    ${imp.step === 2 ? `
      <div class="v3List">
        <div class="v3Row" style="padding:14px;">
          <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '1. Cabinet Reshuffle & Agency Seats for Neutral Factions' : '1. Reshuffle Kabinet & Berikan Kursi Dinas ke Fraksi Netral'}</div>
          <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Offer strategic agency director posts to swing legislators and moderate factions.' : 'Tawari posisi Kepala Dinas Strategis kepada politisi dari fraksi ragu-ragu.'}</div>
          <button class="bigBtn" style="padding:10px;" onclick="chooseImpeachmentChoice(2, 'reshuffle')">${isEn ? '🗂️ Offer Cabinet Positions (+20% Votes)' : '🗂️ Akomodasi Kursi Kabinet (+20% Suara Fraksi)'}</button>
        </div>
        <div class="v3Row" style="padding:14px;">
          <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '2. Mobilize Grassroots Public Support & Peaceful Rallies' : '2. Galang Mobilisasi Opini Publik & Demo Warga'}</div>
          <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Call on loyal civic organizations to stage peaceful rallies outside parliament.' : 'Minta pendukung setia menggelar aksi massa damai di luar gedung DPRD untuk menekan fraksi oposisi.'}</div>
          <button class="bigBtn" style="padding:10px;" onclick="chooseImpeachmentChoice(2, 'mobilize')">${isEn ? '📢 Mobilize Citizen Backing (+15% Votes)' : '📢 Pimpin Aksi Dukungan Publik (+15% Suara Fraksi)'}</button>
        </div>
      </div>
    ` : ''}

    ${imp.step === 3 ? `
      <div class="v3List">
        <div class="v3Row" style="padding:14px;background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.3);">
          <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? 'Final Impeachment Roll Call Vote' : 'Voting Akhir Mosi Pemakzulan'}</div>
          <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Council factions strike the gavel to determine the ultimate fate of your administration.' : 'Seluruh fraksi memukul palu sidang untuk menentukan nasib kepemimpinan Anda.'}</div>
          <button class="bigBtn primary" style="padding:12px;font-size:15px;" onclick="chooseImpeachmentChoice(3, 'vote')">${isEn ? '🗳️ Reveal Final Parliamentary Vote Results' : '🗳️ Buka Hasil Pemungutan Suara Akhir DPRD'}</button>
        </div>
      </div>
    ` : ''}

    <!-- TRIAL LOG -->
    <div style="margin-top:14px;background:rgba(0,0,0,0.3);padding:12px;border-radius:10px;border:1px solid var(--line);">
      <div style="font-size:12px;font-weight:800;color:var(--gray-400);margin-bottom:6px;">${isEn ? 'Parliamentary Session Log:' : 'catatan dinamika persidangan:'}</div>
      ${imp.log.map(l => `<div style="font-size:12px;color:#fff;margin-bottom:4px;">• ${l}</div>`).join('')}
    </div>
  `;
}

function chooseImpeachmentChoice(step, choice) {
  if (!state.impeachmentState) return;
  const imp = state.impeachmentState;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (step === 1) {
    if (choice === 'speech') {
      imp.supportVotes += 15;
      imp.log.push(isEn 
        ? '🎙️ Plenary defense address moved moderate legislators. Support votes +15%.' 
        : '🎙️ Pidato pertanggungjawaban memukau beberapa anggota fraksi independen. Suara naik +15%.');
    } else if (choice === 'pokpir') {
      state.apbd = Math.max(0.5, Math.round((state.apbd - 0.6) * 10) / 10);
      imp.supportVotes += 25;
      imp.log.push(isEn 
        ? '💰 Rp 0.6 T Pokpir compromise appeased swing factions. Support votes +25%.' 
        : '💰 Alokasi Pokpir Rp 0.6 T melunakkan fraksi ragu-ragu. Suara naik +25%.');
    }
    imp.step = 2;
  } else if (step === 2) {
    if (choice === 'reshuffle') {
      imp.supportVotes += 20;
      imp.log.push(isEn 
        ? '🗂️ Strategic agency director positions secured full Reformist backing. Support votes +20%.' 
        : '🗂️ Akomodasi jabatan dinas amankan dukungan penuh Fraksi Reformasi. Suara naik +20%.');
    } else if (choice === 'mobilize') {
      imp.supportVotes += 15;
      imp.log.push(isEn 
        ? '📢 Grassroots peaceful rallies surrounded parliament. Opposition pressured +15%.' 
        : '📢 Ribuan warga mengepung gedung DPRD menyuarakan penolakan pemakzulan. Oposisi gentar +15%.');
    }
    imp.step = 3;
  } else if (step === 3) {
    const finalVal = imp.supportVotes;
    const modal = document.getElementById('impeachmentModal');
    if (modal) modal.classList.remove('show');

    if (finalVal >= 50) {
      state.sat = Math.min(100, state.sat + 10);
      updateActorRelations({ DPRD: 20 });
      showToast(isEn ? '🎉 CONGRATULATIONS! You successfully defeated the DPRD Impeachment Motion!' : '🎉 SELAMAT! Anda berhasil lolos dari Mosi Pemakzulan DPRD!');
      if (state.life) {
        state.life.journal.push({ 
          year: state.year, 
          text: isEn ? '🏛️ Defeated major political impeachment motion at parliament!' : '🏛️ Memenangkan pertempuran politik besar di DPRD dan lolos dari ancaman pemakzulan!' 
        });
      }
      state.impeachmentState = null;
      saveGame();
    } else {
      showEndingModal(
        isEn ? 'PARLIAMENTARY IMPEACHMENT' : 'PEMAKZULAN POLITIK (IMPEACHED)',
        isEn ? 'You were officially impeached by the Nusapura Regional Parliament after losing council majority and civic trust.' : 'Anda resmi dimakzulkan oleh majelis pleno DPRD Nusapura karena kehilangan mayoritas dukungan fraksi dan kepercayaan publik.',
        'red'
      );
      state.impeachmentState = null;
    }
    return;
  }

  renderImpeachmentModal();
}

/* ================= KPK & COURT TRIAL SYSTEM ================= */
function triggerKpkTrial() {
  const m = document.getElementById('kpkTrialModal');
  if (m) {
    m.classList.add('show');
    renderKpkTrialModal();
  }
}

function renderKpkTrialModal() {
  const body = document.getElementById('kpkTrialModalBody');
  if (!body) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  const currentRisk = typeof getCorruptionRisk === 'function' ? getCorruptionRisk() : (state.risk || 60);
  const evidenceLevel = Math.min(95, Math.max(30, currentRisk));

  body.innerHTML = `
    <div class="v3Row" style="padding:16px;background:rgba(245,158,11,0.1);border-color:#f59e0b;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:11px;color:#f59e0b;font-weight:900;letter-spacing:0.1em;">${isEn ? '⚖️ KPK SPECIAL ANTI-CORRUPTION TASKFORCE' : '⚖️ TIM INVESTIGASI KHUSUS KPK'}</div>
          <div style="font-size:18px;font-weight:900;color:#fff;">${isEn ? 'Summons for Examination & Corruption Court Trial' : 'Surat Panggilan Pemeriksaan & Pengadilan Tipikor'}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Legal Evidence Weight:' : 'Indikasi Bukti Hukum:'}</div>
          <div style="font-size:22px;font-weight:900;color:#ef4444;">${evidenceLevel}%</div>
        </div>
      </div>
    </div>

    <div style="font-size:13.5px;color:var(--gray-300);margin-bottom:14px;line-height:1.5;">
      ${isEn 
        ? 'KPK state auditors have identified irregularities in municipal procurement contracts. Formulate your legal defense strategy before the special prosecutors!'
        : 'Auditor KPK menemukan penyimpangan kas pengadaan barang/jasa Pemkot Nusapura. Tentukan strategi pertahanan hukum Anda di hadapan jaksa penuntut umum!'}
    </div>

    <div class="v3List">
      <div class="v3Row" style="padding:14px;">
        <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '1. Retain Senior Legal Defense Counsel & Pre-Trial Experts' : '1. Sewa Tim Pengacara Kondang & Pakar Hukum'}</div>
        <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Challenge the formal indictment through pre-trial motions with top constitutional lawyers.' : 'Gunakan pakar hukum top untuk membatalkan dakwaan lewat praperadilan.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">${isEn ? '✨ Personal Cost: Rp 0.50 Billion • Reduces Legal Evidence -40%' : '✨ Biaya Pribadi: Rp 0.50 Miliar • Menurunkan Indikasi Bukti -40%'}</div>
        <button class="bigBtn" style="padding:10px;" onclick="chooseKpkChoice('lawyer')">${isEn ? '⚖️ Retain Senior Legal Counsel' : '⚖️ Rekrut Tim Pengacara Kondang'}</button>
      </div>

      <div class="v3Row" style="padding:14px;">
        <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '2. Full Cooperation & State Loss Restitution' : '2. Sikap Kooperatif & Kembalikan Kerugian Negara'}</div>
        <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Restitute disputed funds to state treasury to dismiss criminal liability with administrative closure.' : 'Gunakan kas pribadi/pemerintah membayar denda administrasi untuk menghentikan tuntutan pidana.'}</div>
        <div style="font-size:11.5px;color:var(--green);margin-bottom:10px;">${isEn ? '✨ Fine / Restitution: Rp 0.80 Billion • Avoids Jail, Normalizes Risk' : '✨ Bayar Denda: Rp 0.80 Miliar • Terhindar dari Penjara, Risiko Korupsi Netral'}</div>
        <button class="bigBtn" style="padding:10px;" onclick="chooseKpkChoice('cooperative')">${isEn ? '🤝 Pay Restitution & Settle Accounts' : '🤝 Bayar Denda & Kembalikan Kas'}</button>
      </div>

      <div class="v3Row" style="padding:14px;">
        <div style="font-size:15px;font-weight:800;color:#fff;">${isEn ? '3. Public Counter-Offensive & Decry Political Persecution' : '3. Konferensi Pers Perlawanan & Tuding Politisasi'}</div>
        <div style="font-size:12px;color:var(--gray-400);margin:4px 0 10px 0;">${isEn ? 'Hold national press conference denouncing the investigation as opposition criminalization.' : 'Serang balik tuduhan KPK sebagai upaya kriminalisasi oleh lawan politik.'}</div>
        <div style="font-size:11.5px;color:#ef4444;margin-bottom:10px;">${isEn ? '⚠️ Extreme Risk: 50% Full Exoneration / 50% Maximum Prison Sentence!' : '⚠️ Risiko Ekstrem: 50% Bebas Murni / 50% Vonis Maksimal Penjara!'}</div>
        <button class="bigBtn secondary" style="padding:10px;" onclick="chooseKpkChoice('fight')">${isEn ? '📢 Launch Public Counter-Offensive' : '📢 Lancarkan Perlawanan Terbuka'}</button>
      </div>
    </div>
  `;
}

function chooseKpkChoice(choice) {
  const modal = document.getElementById('kpkTrialModal');
  if (modal) modal.classList.remove('show');

  const l = state.life;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (choice === 'lawyer') {
    if (l && l.wealth >= 0.50) l.wealth -= 0.50;
    state.riskModifier = (state.riskModifier || 0) - 25;
    if (typeof getCorruptionRisk === 'function') getCorruptionRisk();
    showToast(isEn ? '⚖️ Legal defense team won the pre-trial motion! Suspect status vacated.' : '⚖️ Tim pengacara sukses memenangi Praperadilan! Anda bebas dari status tersangka.');
    if (l) {
      l.journal.push({ 
        year: state.year, 
        text: isEn ? '⚖️ Won KPK pre-trial motion through top defense counsel strategy.' : '⚖️ Menang Praperadilan KPK berkat pertahanan tim pengacara papan atas.' 
      });
    }
  } else if (choice === 'cooperative') {
    if (l && l.wealth >= 0.80) l.wealth -= 0.80;
    else state.apbd = Math.max(0.5, Math.round((state.apbd - 0.8) * 10) / 10);
    state.riskModifier = 0;
    if (typeof getCorruptionRisk === 'function') getCorruptionRisk();
    showToast(isEn ? '🤝 Administrative settlement finalized! Legal investigation closed.' : '🤝 Denda administrasi dibayarkan! Kasus ditutup secara damai.');
    if (l) {
      l.journal.push({ 
        year: state.year, 
        text: isEn ? '🤝 Finalized KPK investigation by paying administrative restitution.' : '🤝 Menyelesaikan penyelidikan KPK dengan kooperatif membayar denda penyelesaian.' 
      });
    }
  } else if (choice === 'fight') {
    const isSuccess = Math.random() > 0.45;
    if (isSuccess) {
      state.riskModifier = (state.riskModifier || 0) - 20;
      if (typeof getCorruptionRisk === 'function') getCorruptionRisk();
      state.sat = Math.min(100, state.sat + 8);
      showToast(isEn ? '🎉 Public defense succeeded! Case dropped due to lack of conclusive evidence.' : '🎉 Pembelaan publik berhasil! Tuntutan gugur karena kekurangan bukti.');
      if (l) {
        l.journal.push({ 
          year: state.year, 
          text: isEn ? '🎉 Exonerated from KPK indictments following outspoken public defense.' : '🎉 Lolos dari tuduhan KPK setelah perlawanan hukum terbuka.' 
        });
      }
    } else {
      showEndingModal(
        isEn ? 'KPK ANTI-CORRUPTION COURT CONVICTION' : 'VONIS TIPIKOR & OPERASI TANGKAP TANGAN',
        isEn ? 'The Anti-Corruption Special Court found you guilty of municipal procurement irregularities and abuse of executive office.' : 'Pengadilan Tipikor menjatuhkan vonis bersalah terkait penyalahgunaan wewenang dan korupsi APBD.',
        'red'
      );
      return;
    }
  }

  updateHUD();
  saveGame();
}

/* ================= ANNUAL MAYOR RANDOM LIFE EVENT ================= */
const MAYOR_ANNUAL_EVENTS = [
  {
    id: 'kid_car',
    title: '🏎️ Permintaan Mobil Listrik dari Anak Sulung',
    title_en: '🏎️ Electric Car Request from Eldest Child',
    desc: 'Anak sulung Anda yang baru lulus kuliah meminta dibelikan mobil listrik anyar seharga Rp 350 Juta untuk ke kantor.',
    desc_en: 'Your eldest child who recently graduated asks for a new electric car worth Rp 350M for daily commuting.',
    choices: [
      {
        t: '🚗 Belikan Mobil Listrik Anyar (Rp 0.35 M)',
        t_en: '🚗 Buy the Electric Car (Rp 0.35B Private Wealth)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          if (state.life && state.life.wealth >= 0.35) {
            state.life.wealth -= 0.35;
            state.life.familyRel = Math.min(100, state.life.familyRel + 20);
            return isEn ? 'Your child is overjoyed! Family harmony +20%.' : 'Anak Anda gembira! Keharmonisan keluarga meningkat.';
          } else {
            return isEn ? 'Insufficient personal savings; provided standard allowance.' : 'Uang pribadi tidak cukup, Anda memberikan uang saku biasa.';
          }
        }
      },
      {
        t: '🙅 Beri Nasihat & Minta Cari Uang Sendiri',
        t_en: '🙅 Give Advice & Encourage Financial Independence',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          if (state.life) state.life.familyRel = Math.max(10, state.life.familyRel - 10);
          return isEn ? 'Your child is slightly disappointed but understands modesty and thrift.' : 'Anak Anda agak cemberut, namun memahami prinsip kesederhanaan.';
        }
      }
    ]
  },
  {
    id: 'coalition_project_quota',
    title: '🤝 Tagihan Janji Proyek dari Pimpinan Koalisi Parpol',
    title_en: '🤝 Coalition Demand: APBD Project Quota Fulfillment',
    desc: 'Ketua DPC Partai koalisi pengusung menagih paket proyek pengadaan RSUD senilai Rp 500 Miliar untuk rekanan partai sebagai kompensasi mahar politik masa kampanye.',
    desc_en: 'The ruling coalition party boss demands a Rp 500M hospital procurement contract package for party-affiliated vendors as political payback.',
    choices: [
      {
        t: '🛡️ Tolak Keras & Tegakkan Lelang Elektronik Transparan',
        t_en: '🛡️ Reject Firmly & Enforce Transparent E-Procurement',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.min(100, state.sat + 6);
          updateActorRelations({ DPRD: -20, Pengusaha: -10, Mahasiswa: 15 });
          if (state.life) state.life.stress = Math.min(100, state.life.stress + 15);
          state.risk = Math.max(0, (state.risk || 15) - 10);
          return isEn ? 'Integrity upheld! Public approval rises, but party faction threatens budget boycott.' : 'Integritas ditegakkan! Sentimen publik naik, namun koalisi parlemen memanas!';
        }
      },
      {
        t: '💼 Akomodasi Titipan demi Stabilitas Parlemen',
        t_en: '💼 Accommodate Party Vendor for Coalition Stability',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 8);
          state.apbd = Math.max(1, Math.round((state.apbd - 0.4) * 10) / 10);
          updateActorRelations({ DPRD: 25, Pengusaha: 15, Mahasiswa: -15 });
          state.risk = Math.min(100, (state.risk || 15) + 20);
          if (state.life) state.life.wealth += 0.1;
          return isEn ? 'Coalition appeased! APBD passes smoothly, but corruption audit risk increases.' : 'Koalisi puas! Sidang APBD lancar, namun risiko audit korupsi melonjak!';
        }
      }
    ]
  },
  {
    id: 'child_viral_flexing',
    title: '🏎️ Skandal Flexing Supercar Anak Walikota di Medsos',
    title_en: '🏎️ Mayor Child Supercar Flexing & Traffic Violation Scandal',
    desc: 'Video viral memperlihatkan anak Anda menerobos jalur busway dengan supercar mewah berpelat khusus dan membentak petugas patroli.',
    desc_en: 'A viral video shows your child cutting into dedicated transit lanes in an exotic supercar with custom plates and arguing with traffic police.',
    choices: [
      {
        t: '📢 Minta Maaf Publik, Tilang & Sita Kendaraan',
        t_en: '📢 Issue Public Apology, Impound Car & Enforce Maximum Fine',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.min(100, state.sat + 10);
          if (state.life) {
            state.life.familyRel = Math.max(10, state.life.familyRel - 20);
            state.life.stress = Math.min(100, state.life.stress + 10);
          }
          return isEn ? 'Public praises exemplary legal equality! Family relations take a hard hit.' : 'Warga memuji ketegasan hukum! Hubungan keluarga sempat memanas.';
        }
      },
      {
        t: '🛡️ Bela Anak & Sebut Framing Politik Oposisi',
        t_en: '🛡️ Defend Child & Blame Opposition Framing',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 18);
          if (state.life) {
            state.life.familyRel = Math.min(100, state.life.familyRel + 10);
            state.life.stress = Math.min(100, state.life.stress + 20);
          }
          return isEn ? 'Netizens outraged! Heavy public backlash and trending boycott hashtags.' : 'Netizen mengamuk! Sentimen publik anjlok drastis dan menuai kritik.';
        }
      }
    ]
  },
  {
    id: 'spouse_greenzone_amdal',
    title: '🌿 Izin Resort Keluarga di Zona Resapan Air',
    title_en: '🌿 Family Resort Permit Conflict in Protected Green Zone',
    desc: 'Bisnis resort keluarga milik pasangan Anda membutuhkan izin AMDAL khusus di lereng bukit kota yang berstatus kawasan tangkapan air.',
    desc_en: 'Your spouse family boutique resort requires a special environmental permit on hillside water catchment zones.',
    choices: [
      {
        t: '🚫 Tolak Izin demi Kelestarian Lingkungan Kota',
        t_en: '🚫 Reject Permit to Preserve Urban Watershed & Greenery',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          if (state.stats) state.stats.env = Math.min(100, (state.stats.env || 50) + 8);
          if (state.life) state.life.familyRel = Math.max(10, state.life.familyRel - 25);
          updateActorRelations({ KomunitasLingkungan: 20 });
          return isEn ? 'Green zones protected! Environmentalists applaud, but spouse is deeply disappointed.' : 'Kawasan hijau selamat! Aktivis lingkungan apresiasi, namun pasangan kecewa berat.';
        }
      },
      {
        t: '📝 Terbitkan Diskresi Khusus Perluasan Usaha',
        t_en: '📝 Issue Mayoral Discretion Permit for Family Enterprise',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 8);
          if (state.life) {
            state.life.familyRel = Math.min(100, state.life.familyRel + 20);
            state.life.wealth += 0.35;
          }
          state.risk = Math.min(100, (state.risk || 15) + 15);
          return isEn ? 'Family business thrives (+Rp 0.35B), but green NGOs file administrative lawsuit!' : 'Bisnis keluarga berkembang (+Rp 0.35 M), namun LSM lingkungan melayangkan gugatan!';
        }
      }
    ]
  },
  {
    id: 'secret_share',
    title: '💼 Tawaran Saham Tertutup Pengusaha KEK',
    title_en: '💼 Private Equity Offer from Special Economic Zone Developer',
    desc: 'Seorang pengusaha papan atas menawarkan porsi saham rahasia pada proyek kawasan industri kota dengan diskon 50%.',
    desc_en: 'A top industrialist secretly offers discounted private equity shares in the new municipal industrial zone.',
    choices: [
      {
        t: '📈 Ambil Saham Rahasia (Risiko Audit KPK +20%)',
        t_en: '📈 Accept Confidential Shares (KPK Audit Risk +20%)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          if (state.life) state.life.wealth += 0.80;
          state.risk = Math.min(100, (state.risk || 15) + 20);
          return isEn
            ? 'Personal net worth surges by +Rp 0.80B, but audit watchdogs detect suspicious transactions!'
            : 'Kekayaan pribadi Anda melambung +Rp 0.80 Miliar, namun BPK mulai mencium transaksi mencurigakan!';
        }
      },
      {
        t: '🛡️ Tolak & Minta BUMD Garap Proyek Transparan',
        t_en: '🛡️ Decline Firmly & Direct Public Enterprise Open Tender',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.risk = Math.max(0, (state.risk || 15) - 10);
          updateActorRelations({ BPK: 10, LSM: 10 });
          return isEn
            ? 'Offer firmly rejected. Your reputation for zero-tolerance integrity soars!'
            : 'Tawaran ditolak tegas. Reputasi integritas Anda semakin meroket!';
        }
      }
    ]
  },
  {
    id: 'health_burnout',
    title: '🩺 Gejala Hipertensi & Stres Beban Kerja',
    title_en: '🩺 Hypertension Symptoms & Severe Work Fatigue',
    desc: 'Tim medis Pemkot memperingatkan tekanan darah Anda melonjak tajam akibat maraton rapat APBD & inspeksi lapangan.',
    desc_en: 'City Hall medical team warns your blood pressure spiked due to non-stop late-night budget sessions.',
    choices: [
      {
        t: '🛋️ Ambil Cuti Singkat & Istirahat (Stres -25%)',
        t_en: '🛋️ Take Brief Medical Leave & Rest (Stress -25%, Health +15%)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          if (state.life) {
            state.life.stress = Math.max(0, state.life.stress - 25);
            state.life.health = Math.min(100, (state.life.health || 70) + 15);
          }
          return isEn ? 'Refreshed and revitalized for the remaining mayoral term!' : 'Kondisi fisik dan mental Anda kembali bugar memimpin kota!';
        }
      },
      {
        t: '⚡ Tetap Bekerja Maraton demi Target RPJMD',
        t_en: '⚡ Continue Marathon Work for City Development Targets',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          if (state.life) {
            state.life.stress = Math.min(100, state.life.stress + 15);
            state.life.health = Math.max(10, (state.life.health || 70) - 20);
          }
          state.sat = Math.min(100, state.sat + 3);
          return isEn ? 'RPJMD progress advances, but your physical endurance is severely tested!' : 'Pembangunan terkejar, namun fisik Anda kelelahan berat!';
        }
      }
    ]
  },

  /* ==================== CANDIDATE-SPECIFIC ANNUAL EVENTS ==================== */
  // --- ARDHAN WICAKSONO ---
  {
    id: 'ardhan_annual_waterfront',
    candId: 'ardhan',
    title: '🌊 Visi Megaproyek Waterfront Esplanade Teluk Nusapura',
    title_en: '🌊 Coastal Waterfront Esplanade & Promenade Masterplan',
    desc: 'Ikatan Arsitek Indonesia bersama delegasi perencana tata ruang internasional mengajukan proposal sayembara desain Waterfront Teluk Nusapura untuk mengubah bantaran pelabuhan kumuh menjadi ruang publik ikonik berkelas dunia.',
    desc_en: 'The Institute of Architects alongside international urban planning delegates submit a global design competition proposal for the Nusapura Waterfront, transforming decrepit port edges into world-class public promenades.',
    choices: [
      {
        t: '🏛️ Gelar Sayembara Arsitektur Terbuka & Rusun Bahari Hijau (APBD -0.25 T)',
        t_en: '🏛️ Launch Open Architectural Competition & Marine Eco-Flats (APBD -0.25 T)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.apbd = Math.max(1, Math.round((state.apbd - 0.25) * 10) / 10);
          state.sat = Math.min(100, state.sat + 10);
          if (state.stats) {
            state.stats.infra = Math.min(100, (state.stats.infra || 50) + 10);
            state.stats.env = Math.min(100, (state.stats.env || 50) + 8);
          }
          if (typeof updateActorRelations === 'function') updateActorRelations({ KomunitasLingkungan: 15, LSM: 12 });
          return isEn ? 'Masterplan Waterfront Nusapura acclaimed globally! Civic pride soars.' : 'Masterplan Waterfront Nusapura menuai decak kagum arsitek dunia! Citra kota melambung tinggi.';
        }
      },
      {
        t: '💼 Serahkan ke Konsorsium Swasta Monopoli Lahan Reklamasi (Kas +0.3 T)',
        t_en: '💼 Concede Coastal Precinct to Private Reclamation Monopolies (APBD +0.3 T)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.apbd = Math.round((state.apbd + 0.3) * 10) / 10;
          state.sat = Math.max(0, state.sat - 8);
          if (state.stats) state.stats.env = Math.max(0, (state.stats.env || 50) - 10);
          if (typeof updateActorRelations === 'function') updateActorRelations({ Pengusaha: 18, KomunitasLingkungan: -18, LSM: -12 });
          return isEn ? 'City coffers gain Rp 0.3 T, but green advocates condemn shoreline privatization.' : 'Kas daerah bertambah Rp 0.3 T, namun aktivis lingkungan memprotes privatisasi sempadan pantai.';
        }
      }
    ]
  },
  {
    id: 'ardhan_annual_kampung_susun',
    candId: 'ardhan',
    title: '🏘️ Desain Partisipatif Kampung Susun Hijau Bantaran Kali',
    title_en: '🏘️ Community-Designed Vertical Eco-Housing along Riverbanks',
    desc: 'Ribuan keluarga bantaran Kali Nusa terancam relokasi. Sebagai arsitek, Anda ditantang merancang Kampung Susun Bahari di lokasi setempat (in-situ) tanpa penggusuran paksa yang traumatik.',
    desc_en: 'Thousands of families along Kali Nusa riverbanks face eviction. As an architect, you are challenged to design an in-situ vertical eco-housing village without traumatic forced evictions.',
    choices: [
      {
        t: '🏗️ Bangun Kampung Susun Partisipatif Ramah Lingkungan (APBD -0.2 T)',
        t_en: '🏗️ Construct Community Eco-Flats with Citizen Architects (APBD -0.2 T)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.apbd = Math.max(1, Math.round((state.apbd - 0.2) * 10) / 10);
          state.sat = Math.min(100, state.sat + 12);
          if (state.stats) {
            state.stats.flood = Math.max(0, (state.stats.flood || 40) - 8);
            state.stats.pov = Math.max(0, (state.stats.pov || 40) - 5);
          }
          if (typeof updateActorRelations === 'function') updateActorRelations({ LSM: 15, KomunitasLingkungan: 12 });
          return isEn ? 'Vertical eco-village erected! Flood risk drops while community social bonds are preserved.' : 'Kampung Susun berhasil berdiri! Risiko banjir surut dan ikatan sosial warga tetap terjaga utuh.';
        }
      },
      {
        t: '🚜 Relokasi Jauh ke Pinggiran Kota demi Menghemat Anggaran',
        t_en: '🚜 Distant Suburban Relocation to Minimize Municipal Outlays',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 12);
          if (state.life) state.life.stress = Math.min(100, (state.life.stress || 20) + 15);
          if (typeof updateActorRelations === 'function') updateActorRelations({ LSM: -15, Mahasiswa: -12 });
          return isEn ? 'Protests erupt over distant relocation sites lacking public transport!' : 'Gelombang protes di Balaikota! Warga kesulitan mencari nafkah akibat relokasi yang terlampau jauh.';
        }
      }
    ]
  },

  // --- DR. HJ. DIAN PARAMITA ---
  {
    id: 'dian_annual_koperasi_srikandi',
    candId: 'dian',
    title: '👩‍💼 Konsorsium Modal Bergulir 15.000 UMKM Perempuan Srikandi',
    title_en: '👩‍💼 Revolving Capital Fund for 15,000 Women Micro-Enterprises',
    desc: 'Sebagai ekonom pembangunan, Anda menginisiasi program kredit ultra-mikro \'Nusa Srikandi Berdaya\' dengan bunga 0% bagi ibu rumah tangga pedagang makanan olahan dan pasar tradisional guna memutus jeratan rentenir.',
    desc_en: 'As a development economist, you propose the \'Nusa Srikandi\' 0%-interest micro-credit fund empowering home-based caterers and market women, eradicating predatory loan sharks.',
    choices: [
      {
        t: '💰 Suntikkan Dana Bergulir Rp 200 Miliar via Bank Pasar BUMD (APBD -0.2 T)',
        t_en: '💰 Inject Rp 200B Revolving Fund via Municipal Bank (APBD -0.2 T)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.apbd = Math.max(1, Math.round((state.apbd - 0.2) * 10) / 10);
          state.pad = Math.round((state.pad + 0.3) * 10) / 10;
          state.sat = Math.min(100, state.sat + 12);
          if (state.stats) {
            state.stats.pov = Math.max(0, (state.stats.pov || 40) - 8);
            state.stats.unemp = Math.max(0, (state.stats.unemp || 40) - 5);
          }
          if (typeof updateActorRelations === 'function') updateActorRelations({ SerikatBuruh: 15, LSM: 15 });
          return isEn ? 'Micro-enterprises flourish across Nusapura! Poverty indicators drop significantly.' : 'Belasan ribu pedagang kecil bebas dari rentenir! Ekonomi keluarga miskin bangkit pesat.';
        }
      },
      {
        t: '🏦 Alihkan Tanggung Jawab Permodalan ke Bank Komersial Swasta',
        t_en: '🏦 Delegate Financing Burdens to Commercial Private Banks',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 6);
          return isEn ? 'Stringent bank collateral requirements hinder small home cooks and market traders.' : 'Syarat agunan bank swasta terlalu berat, banyak pedagang pasar kecewa.';
        }
      }
    ]
  },
  {
    id: 'dian_annual_lumbung_pangan',
    candId: 'dian',
    title: '🌾 Sistem Resi Gudang & Stabilisasi Cadangan Pangan Kota',
    title_en: '🌾 Municipal Warehouse Receipt System & Food Price Reserve',
    desc: 'Menghadapi ancaman paceklik dan permainan kartel, Anda menginstruksikan pendirian lumbung pangan modern terintegrasi dengan asuransi gagal panen untuk melindungi petani dan menstabilkan harga sembako ibu rumah tangga.',
    desc_en: 'Confronting supply bottlenecks and cartel collusion, you mandate an integrated municipal food storage facility with crop failure insurance to guarantee price stability for households.',
    choices: [
      {
        t: '📦 Bangun Fasilitas Cold Storage & Buffer Cadangan Beras (APBD -0.2 T)',
        t_en: '📦 Construct Municipal Cold Storage & Staple Reserves (APBD -0.2 T)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.apbd = Math.max(1, Math.round((state.apbd - 0.2) * 10) / 10);
          state.pad = Math.round((state.pad + 0.25) * 10) / 10;
          state.sat = Math.min(100, state.sat + 10);
          if (state.stats) state.stats.pov = Math.max(0, (state.stats.pov || 40) - 4);
          return isEn ? 'Food price inflation curbed! Nusapura achieves regional food buffer security.' : 'Inflasi pangan terkendali total! Nusapura mandiri pangan dan stok beras stabil terjaga.';
        }
      },
      {
        t: '🚢 Serahkan Distribusi Pangan Sepenuhnya ke Importir Swasta',
        t_en: '🚢 Rely Entirely on Private Wholesale Importers',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 7);
          if (typeof updateActorRelations === 'function') updateActorRelations({ SerikatBuruh: -10, LSM: -8 });
          return isEn ? 'Food prices fluctuate unpredictably as private cartels dictate retail rates.' : 'Harga bahan pokok fluktuatif dipermainkan kartel, daya beli buruh tertekan.';
        }
      }
    ]
  },

  // --- TARI RATNASARI ---
  {
    id: 'tari_annual_open_budget_audit',
    candId: 'tari',
    title: '🛡️ Transparansi Radikal: Rilis Satuan Harga APBD ke Portal Publik',
    title_en: '🛡️ Radical Transparency: Publish Component Unit Costs Open-Data',
    desc: 'Sebagai pendekar integritas, Anda bersiap membuka portal e-Budgeting interaktif hingga nota kwitansi belanja ATK dan lembur dinas. Anggota dewan dan pejabat eselon II mendatangi ruangan Anda meminta data tertentu tetap dirahasiakan.',
    desc_en: 'As an anti-corruption champion, you prepare to release raw line-item receipts down to stationery and overtime allowances onto an open-data civic portal. Council bosses and senior bureaucrats lobby you to redact sensitive allocations.',
    choices: [
      {
        t: '📢 Buka 100% Data Tanpa Sensor & Lindungi Pelapor Tipikor',
        t_en: '📢 Publish 100% Unredacted Data & Protect Tipikor Whistleblowers',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.risk = Math.max(0, (state.risk || 15) - 20);
          state.sat = Math.min(100, state.sat + 14);
          if (typeof updateActorRelations === 'function') updateActorRelations({ BPK: 25, LSM: 25, Mahasiswa: 20, DPRD: -18, ASN: -10 });
          return isEn ? 'Radical transparency acclaimed nationwide! BPK and civil society laud Nusapura as the cleanest city.' : 'Transparansi radikal viral nasional! BPK dan aktivis menobatkan Nusapura sebagai kota paling bersih.';
        }
      },
      {
        t: '🔒 Sensor Belanja Tertentu demi Menjaga Keharmonisan Parlemen',
        t_en: '🔒 Redact Discretionary Spending for Coalition Peace',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.risk = Math.min(100, (state.risk || 15) + 12);
          state.sat = Math.max(0, state.sat - 8);
          if (typeof updateActorRelations === 'function') updateActorRelations({ DPRD: 15, LSM: -15 });
          return isEn ? 'Council tensions diffuse, but anti-graft watchdogs accuse you of compromising on your ideals.' : 'Sidang dewan kondusif, namun pegiat anti-korupsi kecewa karena prinsip integritas mulai kendor.';
        }
      }
    ]
  },
  {
    id: 'tari_annual_whistleblower_rsud',
    candId: 'tari',
    title: '🏥 Dokumen Rahasia Penggelembungan Alat Kesehatan RSUD',
    title_en: '🏥 Whistleblower Dossier: Inflated Hospital Medical Equipment',
    desc: 'Seorang dokter spesialis senior menyerahkan bukti flashdisk tentang penggelembungan harga mesin radiologi RSUD sebesar 300% yang melibatkan rekanan keluarga petinggi partai pengusung Anda.',
    desc_en: 'A senior medical specialist surrenders a flash drive detailing 300% price inflations on hospital radiology gear involving a firm affiliated with your ruling party\'s hierarchy.',
    choices: [
      {
        t: '⚖️ Laporkan Langsung ke Satgas KPK & Copot Direktur Terlibat',
        t_en: '⚖️ Direct Referral to KPK Anti-Corruption Taskforce & Dismiss Director',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.risk = Math.max(0, (state.risk || 15) - 15);
          state.sat = Math.min(100, state.sat + 12);
          if (typeof updateActorRelations === 'function') updateActorRelations({ LSM: 20, BPK: 20, DPRD: -15 });
          return isEn ? 'Decisive anti-graft enforcement! The corrupt cartel is neutralized and hospital procurement is sanitized.' : 'Ketegasan hukum tanpa pandang bulu! Mafia alkes ditindak tegas dan dana kesehatan terselamatkan.';
        }
      },
      {
        t: '🤫 Selesaikan secara Internal Tertutup tanpa Sorotan Media',
        t_en: '🤫 Settle Privately via Internal Inspection without Media Leaks',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.risk = Math.min(100, (state.risk || 15) + 15);
          state.sat = Math.max(0, state.sat - 10);
          return isEn ? 'The internal cover-up leaks to investigative media, eroding your moral authority!' : 'Kabar penyelesaian tertutup bocor ke media investigasi! Integritas Anda tercoreng.';
        }
      }
    ]
  },

  // --- IR. HENDRA KUSUMA ---
  {
    id: 'hendra_annual_nusapay_cashless',
    candId: 'hendra',
    title: '📱 Peluncuran \'NusaPay\' & Penertiban Kebocoran Parkir Liar',
    title_en: '📱 \'NusaPay\' Cashless Launch & Clampdown on Rogue Parking Extortion',
    desc: 'Sebagai technopreneur, Anda meluncurkan sistem pembayaran digital satu aplikasi \'NusaPay\' untuk retribusi parkir, pasar tradisional, dan tiket wisata. Sejumlah oknum preman berkedok ormas mengancam demo besar karena periuk nasi pungli mereka terancam.',
    desc_en: 'As a technopreneur, you launch the unified \'NusaPay\' cashless app for street parking, bazaar stalls, and transit fees. Rogue gangs disguised as civic groups threaten unrest as their illicit toll revenue dries up.',
    choices: [
      {
        t: '🛰️ Gandeng Kepolisian, Pasang Sensor Parkir IoT & Tegakkan Cashless Penuh',
        t_en: '🛰️ Deploy Police Backing, Install IoT Sensors & Enforce 100% Cashless',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.pad = Math.round((state.pad + 0.45) * 10) / 10;
          state.sat = Math.min(100, state.sat + 10);
          state.risk = Math.max(0, (state.risk || 15) - 10);
          if (typeof updateActorRelations === 'function') updateActorRelations({ Pengusaha: 12, Mahasiswa: 12, Polri: 10 });
          return isEn ? 'NusaPay successfully adopted citywide! Revenue leakage plugged and street extortion eradicated.' : 'NusaPay sukses besar diterapkan! Kebocoran retribusi tertutup rapat dan premanisme parkir punah.';
        }
      },
      {
        t: '🤝 Beri Kuota Setoran Tunai Tradisional untuk Meredam Ormas',
        t_en: '🤝 Concede Cash Quotas to Appease Local Gang Bosses',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 6);
          state.risk = Math.min(100, (state.risk || 15) + 8);
          return isEn ? 'Extortion persists on backstreets, sparking cynicism over digital smart city promises.' : 'Pungli masih bocor di jalanan, warga mencibir program smart city yang dinilai setengah hati.';
        }
      }
    ]
  },
  {
    id: 'hendra_annual_ai_traffic_grid',
    candId: 'hendra',
    title: '🚦 Command Center Cerdas & Lampu Merah Adaptif Berbasis AI',
    title_en: '🚦 Smart Municipal Command Center & AI Adaptive Traffic Grid',
    desc: 'Anda memimpin pemasangan jaringan kamera CCTV sensorik dan algoritma AI pengurai kemacetan otomatis di 80 persimpangan utama Kota Nusapura.',
    desc_en: 'You lead the deployment of sensory cameras and adaptive traffic AI across 80 major intersections in Nusapura to eliminate gridlock automatically.',
    choices: [
      {
        t: '🤖 Resmikan Nusapura Intelligent Command Center (APBD -0.15 T, Macet -12%)',
        t_en: '🤖 Inaugurate Nusapura Intelligent Command Center (APBD -0.15 T, Traffic -12%)',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.apbd = Math.max(1, Math.round((state.apbd - 0.15) * 10) / 10);
          state.sat = Math.min(100, state.sat + 10);
          if (state.stats) {
            state.stats.infra = Math.min(100, (state.stats.infra || 50) + 6);
            if (state.stats.traffic != null) state.stats.traffic = Math.max(10, state.stats.traffic - 12);
          }
          return isEn ? 'Traffic gridlock reduced by 35% during peak rush hours! Citizens laud the high-tech initiative.' : 'Kemacetan jam sibuk berkurang drastis hingga 35%! Warga memuji kecanggihan teknologi kota.';
        }
      },
      {
        t: '🛑 Tunda Proyek & Gunakan Polantas Manual Konvensional',
        t_en: '🛑 Defer Tech Deployment & Rely on Manual Traffic Cones',
        fx: () => {
          const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
          state.sat = Math.max(0, state.sat - 4);
          return isEn ? 'Traffic bottlenecks worsen across downtown avenues.' : 'Macet parah tetap menghantui jalan protokol saat jam pulang kerja.';
        }
      }
    ]
  }
];

function triggerAnnualLifeEvent() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (!state.usedMayorAnnualEvents) state.usedMayorAnnualEvents = [];
  const chosenMayor = state.selectedMayor || (state.mayorCandidate ? state.mayorCandidate.id : 'ardhan');

  // Priority 1: Pick an unused candidate-specific event for the chosen mayor
  const candEvents = MAYOR_ANNUAL_EVENTS.filter(e => e.candId === chosenMayor && !state.usedMayorAnnualEvents.includes(e.id));
  let ev;
  if (candEvents.length > 0) {
    ev = candEvents[Math.floor(Math.random() * candEvents.length)];
    state.usedMayorAnnualEvents.push(ev.id);
  } else {
    // Priority 2: Pool of available generic events or previously unused events
    const pool = MAYOR_ANNUAL_EVENTS.filter(e => !e.candId || e.candId === chosenMayor);
    ev = pool[Math.floor(Math.random() * pool.length)] || MAYOR_ANNUAL_EVENTS[0];
  }

  const m = document.getElementById('lifeEventModal');
  const body = document.getElementById('lifeEventModalBody');
  if (!m || !body) return;

  const title = (isEn && ev.title_en) ? ev.title_en : ev.title;
  const desc = (isEn && ev.desc_en) ? ev.desc_en : ev.desc;
  const mayorObj = (typeof MAYOR_CANDIDATES !== 'undefined') ? MAYOR_CANDIDATES.find(mc => mc.id === chosenMayor) : null;
  const mayorShort = mayorObj ? mayorObj.name.split(',')[0] : (state.mayorCandidate ? state.mayorCandidate.name.split(',')[0] : (isEn ? 'Mayor' : 'Walikota'));

  const exclusiveBadge = ev.candId ? `
    <div style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,rgba(59,130,246,0.22),rgba(37,99,235,0.35));border:1px solid #60a5fa;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:800;color:#bfdbfe;margin-bottom:12px;box-shadow:0 2px 8px rgba(59,130,246,0.2);">
      <span>👔</span>
      <span>${isEn ? 'EXCLUSIVE MAYOR STORYLINE: ' + mayorShort : 'ALUR KISAH EKSKLUSIF WALIKOTA: ' + mayorShort}</span>
    </div>
  ` : '';

  body.innerHTML = `
    ${exclusiveBadge}
    <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:8px;">${title}</div>
    <div style="font-size:13px;color:var(--gray-300);line-height:1.5;margin-bottom:16px;">${desc}</div>
    <div class="v3List">
      ${ev.choices.map((c, idx) => {
        const choiceText = (isEn && c.t_en) ? c.t_en : c.t;
        return `
          <button class="bigBtn" style="padding:12px;margin-bottom:8px;font-size:13.5px;" onclick="resolveAnnualLifeEvent(${idx})">
            ${choiceText}
          </button>
        `;
      }).join('')}
    </div>
  `;
  window.activeLifeEv = ev;
  m.classList.add('show');
}

function resolveAnnualLifeEvent(choiceIdx) {
  const ev = window.activeLifeEv;
  const m = document.getElementById('lifeEventModal');
  if (m) m.classList.remove('show');
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (ev && ev.choices && ev.choices[choiceIdx]) {
    const resText = ev.choices[choiceIdx].fx();
    showToast(resText);
    if (state.life) {
      const evTitle = (isEn && ev.title_en) ? ev.title_en : ev.title;
      state.life.journal.push({ year: state.year, text: `${evTitle}: ${resText}` });
    }
  }

  updateHUD();
  saveGame();
}

window.openLifeModal = openLifeModal;
window.renderLifeModal = renderLifeModal;
window.executeLifeAction = executeLifeAction;
window.triggerImpeachmentTrial = triggerImpeachmentTrial;
window.renderImpeachmentModal = renderImpeachmentModal;
window.chooseImpeachmentChoice = chooseImpeachmentChoice;
window.triggerKpkTrial = triggerKpkTrial;
window.renderKpkTrialModal = renderKpkTrialModal;
window.chooseKpkChoice = chooseKpkChoice;
window.triggerAnnualLifeEvent = triggerAnnualLifeEvent;
window.triggerBitLifeAnnualEvent = triggerAnnualLifeEvent;
window.resolveAnnualLifeEvent = resolveAnnualLifeEvent;
window.resolveBitLifeEvent = resolveAnnualLifeEvent;
window.refreshCitizenReports = refreshCitizenReports;
window.generateDynamicCitizenReports = generateDynamicCitizenReports;
window.generateDynamicPressQuestions = generateDynamicPressQuestions;

window.investMegastructure = investMegastructure;
window.renderMegastructuresModal = renderMegastructuresModal;
window.togglePerda = togglePerda;
window.renderPerdaModal = renderPerdaModal;
window.openPressModal = openPressModal;
window.selectPressChoice = selectPressChoice;
window.openEmergencyModal = openEmergencyModal;
window.renderEmergencyModal = renderEmergencyModal;
window.dispatchEmergencyUnit = dispatchEmergencyUnit;
window.openCampaignModal = openCampaignModal;
window.renderCampaignModal = renderCampaignModal;
window.runCampaignAction = runCampaignAction;
window.openReportsModal = openReportsModal;
window.renderReportsModal = renderReportsModal;
window.resolveCitizenReport = resolveCitizenReport;
window.openInvestmentModal = openInvestmentModal;
window.renderInvestmentModal = renderInvestmentModal;
window.investSector = investSector;
window.openIntegrityModal = openIntegrityModal;
window.renderIntegrityModal = renderIntegrityModal;
window.toggleAuditSystem = toggleAuditSystem;
window.handleChoiceClick = handleChoiceClick;
window.handleCampChoiceClick = handleCampChoiceClick;
window.handleSocialAction = handleSocialAction;
window.pickRandomOpponent = pickRandomOpponent;
window.renderMayorSelectionScreen = renderMayorSelectionScreen;
window.selectMayorCandidate = selectMayorCandidate;
window.renderCandidateScreen = renderCandidateScreen;
window.selectDifficulty = selectDifficulty;
window.togglePromise = togglePromise;
window.initNewGame = initNewGame;
window.startMainGameTerm = startMainGameTerm;
window.startCampaignFlow = startCampaignFlow;
window.runQuickCountAnimation = runQuickCountAnimation;
window.showStartScreen = showStartScreen;
window.showEndingModal = showEndingModal;

// Hybrid Localization & Encyclopedia exports
window.setGameLanguage = setGameLanguage;
window.getGameLanguage = getGameLanguage;
window.t = t;
window.highlightGovTerms = highlightGovTerms;
window.showTermTooltip = showTermTooltip;
window.closeTermTooltip = closeTermTooltip;
window.filterEncyclopediaCategory = filterEncyclopediaCategory;
window.handleEncyclopediaSearch = handleEncyclopediaSearch;
window.renderEncyclopediaModal = renderEncyclopediaModal;

// DOM Setup
function initApp() {
  applyLanguage(getGameLanguage());
  // Apply saved language preference
  const savedLang = getGameLanguage();
  const allI18nEls = document.querySelectorAll('[data-i18n]');
  allI18nEls.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const dict = I18N_DICT[savedLang] || I18N_DICT.id;
    if (dict && dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Splash Screen tataniti.app initialization
  const splash = document.getElementById('splashScreen');
  if (splash) {
    let splashHidden = false;
    const hideSplash = () => {
      if (splashHidden) return;
      splashHidden = true;
      splash.classList.add('fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
      }, 400);
    };
    splash.onclick = hideSplash;
    splash.ontouchstart = hideSplash;
    setTimeout(hideSplash, 1800);
    // Safety fallback
    setTimeout(() => {
      if (splash && splash.style.display !== 'none') {
        splash.style.display = 'none';
      }
    }, 2800);
  }
  if (hasSave()) {
    const banner = document.getElementById('continueBanner');
    if (banner) banner.style.display = 'flex';
  }

  const btnStartNew = document.getElementById('btnStartNew');
  if (btnStartNew) {
    btnStartNew.onclick = () => {
      if (typeof AudioManager !== 'undefined') {
        AudioManager.playSfx('sfx_mulai');
      }
      hideAllScreens();
      renderMayorSelectionScreen();
      const screen = document.getElementById('mayorSelectionScreen');
      if (screen) screen.classList.add('show');
    };
  }

  const btnMenuContinue = document.getElementById('btnMenuContinue');
  if (btnMenuContinue) btnMenuContinue.onclick = () => loadGame();

  const btnContinueSave = document.getElementById('btnContinueSave');
  if (btnContinueSave) btnContinueSave.onclick = () => loadGame();

  const btnMenuEncyclopedia = document.getElementById('btnMenuEncyclopedia');
  if (btnMenuEncyclopedia) {
    btnMenuEncyclopedia.onclick = () => {
      subModalSource = 'start';
      filterEncyclopediaCategory('all');
      renderEncyclopediaModal();
      const modal = document.getElementById('encyclopediaModal');
      if (modal) modal.classList.add('show');
    };
  }

  const btnMenuAchievement = document.getElementById('btnMenuAchievement');
  if (btnMenuAchievement) {
    btnMenuAchievement.onclick = () => {
      subModalSource = 'start';
      renderAchModal();
      const modal = document.getElementById('achModal');
      if (modal) modal.classList.add('show');
    };
  }

  const btnMenuSettings = document.getElementById('btnMenuSettings');
  if (btnMenuSettings) {
    btnMenuSettings.onclick = () => {
      subModalSource = 'start';
      renderSettingsModal();
      const modal = document.getElementById('settingsModal');
      if (modal) modal.classList.add('show');
    };
  }

  const btnMenuAbout = document.getElementById('btnMenuAbout');
  if (btnMenuAbout) {
    btnMenuAbout.onclick = () => {
      subModalSource = 'start';
      const modal = document.getElementById('aboutModal');
      if (modal) modal.classList.add('show');
    };
  }

  const btnConfirmDifficulty = document.getElementById('btnConfirmDifficulty');
  if (btnConfirmDifficulty) {
    btnConfirmDifficulty.onclick = () => {
      hideAllScreens();
      renderCandidateScreen();
      document.getElementById('candidateScreen').classList.add('show');
    };
  }

  const btnToPromise = document.getElementById('btnToPromise');
  if (btnToPromise) {
    btnToPromise.onclick = () => {
      hideAllScreens();
      renderPromiseScreen();
      document.getElementById('promiseScreen').classList.add('show');
    };
  }

  const btnStartCampaign = document.getElementById('btnStartCampaign');
  if (btnStartCampaign) {
    btnStartCampaign.onclick = () => {
      startCampaignFlow();
    };
  }

  const modalCloses = [
    ['btnCloseAbout', 'aboutModal'],
    ['btnCloseSettings', 'settingsModal'],
    ['btnCloseAch', 'achModal'],
    ['btnCloseActors', 'actorsModal'],
    ['btnCloseCabinet', 'cabinetModal'],
    ['btnCloseDPRD', 'dprdModal'],
    ['btnCloseBudget', 'budgetModal'],
    ['btnCloseStats', 'statsModal'],
    ['btnCloseEncyclopedia', 'encyclopediaModal'],
    ['btnCloseCorruption', 'corruptionModal'],
    ['btnCloseProcurement', 'procurementModal'],
    ['btnCloseCentral', 'centralDiplomacyModal'],
    ['btnCloseMegastructures', 'megastructuresModal'],
    ['btnClosePerdas', 'perdaModal'],
    ['btnClosePress', 'pressModal'],
    ['btnCloseEmergency', 'emergencyModal'],
    ['btnCloseCampaign', 'campaignModal'],
    ['btnCloseReports', 'reportsModal'],
    ['btnCloseInvestment', 'investmentModal'],
    ['btnCloseIntegrity', 'integrityModal'],
    ['btnCloseLife', 'lifeModal'],
    ['btnCloseHamburger', 'hamburgerModal'],
    ['btnCloseDprdParipurna', 'dprdParipurnaModal'],
    ['btnCloseQuickTweet', 'quickTweetModal']
  ];

  modalCloses.forEach(([btnId, modalId]) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.onclick = () => {
        if (modalId === 'pressModal') {
          stopPressConferenceTimer();
        }
        returnFromSubModal(modalId);
      };
    }
  });

  // Close modal when clicking backdrop overlay
  document.querySelectorAll('.modalOverlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        const id = overlay.id;
        if (id) {
          returnFromSubModal(id);
        } else {
          overlay.classList.remove('show');
        }
      }
    });
  });

  // Close any active modal when pressing Escape key (Game Pause standard)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeOverlay = document.querySelector('.modalOverlay.show');
      if (activeOverlay && activeOverlay.id) {
        returnFromSubModal(activeOverlay.id);
      } else {
        document.querySelectorAll('.modalOverlay.show').forEach(m => m.classList.remove('show'));
      }
    }
  });

  const btnSettingsReset = document.getElementById('btnSettingsReset');
  if (btnSettingsReset) {
    btnSettingsReset.onclick = () => {
      resetProgress();
      const m = document.getElementById('settingsModal');
      if (m) m.classList.remove('show');
    };
  }

  // HUD and Quick Access Action Buttons
  const btnShowHamburger = document.getElementById('btnShowHamburger');
  if (btnShowHamburger) {
    btnShowHamburger.onclick = () => openHamburgerMenu();
  }

  const hamburgerFab = document.getElementById('hamburgerFab');
  if (hamburgerFab) {
    hamburgerFab.onclick = () => openHamburgerMenu();
  }

  const btnShowLife = document.getElementById('btnShowLife');
  if (btnShowLife) {
    btnShowLife.onclick = () => {
      subModalSource = 'hud';
      if (window.openLifeModal) window.openLifeModal();
    };
  }

  const btnShowBudget = document.getElementById('btnShowBudget');
  if (btnShowBudget) {
    btnShowBudget.onclick = () => {
      subModalSource = 'hud';
      renderBudgetModal();
      const m = document.getElementById('budgetModal');
      if (m) m.classList.add('show');
    };
  }

  const btnShowStats = document.getElementById('btnShowStats');
  if (btnShowStats) {
    btnShowStats.onclick = () => {
      subModalSource = 'hud';
      renderStatsModal();
      const m = document.getElementById('statsModal');
      if (m) m.classList.add('show');
    };
  }

  const btnShowEmergency = document.getElementById('btnShowEmergency');
  if (btnShowEmergency) {
    btnShowEmergency.onclick = () => {
      subModalSource = 'hud';
      openEmergencyModal();
    };
  }

  const btnSave = document.getElementById('btnSave');
  if (btnSave) {
    btnSave.onclick = () => saveGame();
  }

  // Hamburger Footer Actions
  const btnHamburgerSave = document.getElementById('btnHamburgerSave');
  if (btnHamburgerSave) {
    btnHamburgerSave.onclick = () => saveGame();
  }

  const btnHamburgerLoad = document.getElementById('btnHamburgerLoad');
  if (btnHamburgerLoad) {
    btnHamburgerLoad.onclick = () => {
      document.getElementById('hamburgerModal').classList.remove('show');
      loadGame();
    };
  }

  const btnHamburgerHome = document.getElementById('btnHamburgerHome');
  if (btnHamburgerHome) {
    btnHamburgerHome.onclick = () => {
      const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
      if (confirm(isEn ? 'Return to Main Menu? Your progress will be saved automatically.' : 'Kembali ke Menu Utama? Progres permainan Anda akan otomatis disimpan.')) {
        saveGame();
        document.getElementById('hamburgerModal').classList.remove('show');
        showStartScreen();
      }
    };
  }

  const btnHamburgerResume = document.getElementById('btnHamburgerResume');
  if (btnHamburgerResume) {
    btnHamburgerResume.onclick = () => {
      document.getElementById('hamburgerModal').classList.remove('show');
    };
  }


  const btnYearNext = document.getElementById('btnYearNext');
  if (btnYearNext) btnYearNext.onclick = () => advanceYear();

  const btnToTerm2 = document.getElementById('btnToTerm2');
  if (btnToTerm2) {
    btnToTerm2.onclick = () => {
      state.term = 2;
      state.year = 1;
      state.eventIdx = 0;
      state.yearEvents = buildYearOrder();
      hideAllScreens();
      document.getElementById('app').style.display = 'block';
      updateHUD();
      renderCurrentEvent();
      saveGame();
    };
  }

  const btnBudgetApply = document.getElementById('btnBudgetApply');
  if (btnBudgetApply) {
    btnBudgetApply.onclick = applyBudgetAllocation;
  }

  const btnCabinetFollow = document.getElementById('btnCabinetFollow');
  if (btnCabinetFollow) {
    btnCabinetFollow.onclick = () => {
      state.sat = Math.min(100, state.sat + 3);
      updateHUD();
      const m = document.getElementById('cabinetMeetingModal');
      if (m) m.classList.remove('show');
      showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '✅ Cabinet recommendation implemented (+3% Approval)!' : '✅ Rekomendasi kabinet diterapkan (+3% Kepuasan)!');
    };
  }

  const btnCabinetIgnore = document.getElementById('btnCabinetIgnore');
  if (btnCabinetIgnore) {
    btnCabinetIgnore.onclick = () => {
      const m = document.getElementById('cabinetMeetingModal');
      if (m) m.classList.remove('show');
      showToast('➡️ Jalankan rencana mandiri.');
    };
  }

  ['btnScandalPecat', 'btnScandalMutasi', 'btnScandalLindungi'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.onclick = () => {
        const m = document.getElementById('scandalModal');
        if (m) m.classList.remove('show');
        showToast('⚖️ Keputusan skandal diproses.');
      };
    }
  });

  const btnConflictInvestigate = document.getElementById('btnConflictInvestigate');
  if (btnConflictInvestigate) {
    btnConflictInvestigate.onclick = () => {
      const m = document.getElementById('conflictModal');
      if (m) m.classList.remove('show');
      showToast('🔍 Audit Inspektorat Dimulai.');
    };
  }

  const btnConflictIgnore = document.getElementById('btnConflictIgnore');
  if (btnConflictIgnore) {
    btnConflictIgnore.onclick = () => {
      const m = document.getElementById('conflictModal');
      if (m) m.classList.remove('show');
      showToast('➡️ Belum ditindaklanjuti.');
    };
  }

  const v3ConfirmYes = document.getElementById('v3ConfirmYes');
  if (v3ConfirmYes) {
    v3ConfirmYes.onclick = () => {
      const m = document.getElementById('v3ConfirmModal');
      if (m) m.classList.remove('show');
    };
  }

  const v3ConfirmNo = document.getElementById('v3ConfirmNo');
  if (v3ConfirmNo) {
    v3ConfirmNo.onclick = () => {
      const m = document.getElementById('v3ConfirmModal');
      if (m) m.classList.remove('show');
    };
  }

  const btnGameOverRetry = document.getElementById('btnGameOverRetry');
  if (btnGameOverRetry) {
    btnGameOverRetry.onclick = () => {
      initNewGame();
    };
  }

  const btnGameOverMenu = document.getElementById('btnGameOverMenu');
  if (btnGameOverMenu) {
    btnGameOverMenu.onclick = () => {
      showStartScreen();
    };
  }

  const btnRestartEnding = document.getElementById('btnRestartEnding');
  if (btnRestartEnding) {
    btnRestartEnding.onclick = () => {
      showStartScreen();
    };
  }

  const btnEndingMenu = document.getElementById('btnEndingMenu');
  if (btnEndingMenu) {
    btnEndingMenu.onclick = () => {
      showStartScreen();
    };
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


function openPoliticalDossierModal() {
  const modal = document.getElementById('politicalDossierModal');
  const container = document.getElementById('dossierModalContent');
  const titleEl = document.getElementById('dossierModalTitle');
  const subEl = document.getElementById('dossierModalSubtitle');
  if (!modal || !container) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  if (titleEl) titleEl.textContent = isEn ? '📁 Secret Political Dossier & Consequences' : '📁 Berkas Jejak Rahasia Politik & Konsekuensi';
  if (subEl) subEl.textContent = isEn ? 'Record of Dark Deals, Statesmanship, & Active Timebombs' : 'Catatan Kompromi, Integritas, & Bom Waktu Kekuasaan';
  const closeBtn = document.getElementById('btnClosePoliticalDossier');
  if (closeBtn) closeBtn.textContent = isEn ? 'Close Dossier' : 'Tutup Berkas';

  const memories = state.longTermMemories || [];
  const flags = state.flags || {};

  // Count archetypes
  let cleanCount = 0;
  let dealCount = 0;
  let bombCount = 0;
  memories.forEach(m => {
    const fl = m.flag || '';
    if (fl.includes('refused') || fl.includes('rejected') || fl.includes('cleansed') || fl.includes('vetoed') || fl.includes('crushed') || fl.includes('enforced') || fl.includes('clean') || fl.includes('honesty')) {
      cleanCount++;
    } else if (fl.includes('took') || fl.includes('covered') || fl.includes('bribed') || fl.includes('shielded') || fl.includes('weaponized') || fl.includes('bought')) {
      bombCount++;
    } else {
      dealCount++;
    }
  });

  let html = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:6px;">
      <div style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.4);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:#86efac;">${cleanCount}</div>
        <div style="font-size:10px;font-weight:800;color:#cbd5e1;text-transform:uppercase;">${isEn ? '🛡️ Integrity' : '🛡️ Integritas'}</div>
      </div>
      <div style="background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.4);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:#93c5fd;">${dealCount}</div>
        <div style="font-size:10px;font-weight:800;color:#cbd5e1;text-transform:uppercase;">${isEn ? '⚖️ Pragmatic' : '⚖️ Kompromi'}</div>
      </div>
      <div style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:#fca5a5;">${bombCount}</div>
        <div style="font-size:10px;font-weight:800;color:#cbd5e1;text-transform:uppercase;">${isEn ? '💣 Timebombs' : '💣 Bom Waktu'}</div>
      </div>
    </div>
  `;

  if (memories.length === 0) {
    html += `
      <div style="text-align:center;padding:30px 10px;color:#94a3b8;font-size:13px;font-style:italic;">
        ${isEn ? 'No closed-door meetings recorded yet. Your decisions will appear here as you advance through the quarters.' : 'Belum ada pertemuan ruang tertutup yang tercatat. Keputusan Anda akan tercatat di sini seiring berjalannya triwulan.'}
      </div>
    `;
  } else {
    memories.forEach((m, idx) => {
      const fl = m.flag || '';
      let badgeStyle = 'background:rgba(59,130,246,0.2);color:#93c5fd;border:1px solid rgba(59,130,246,0.3);';
      let badgeText = isEn ? '⚖️ PRAGMATIC DEAL' : '⚖️ KOMPROMI REALISTIS';
      if (fl.includes('refused') || fl.includes('rejected') || fl.includes('cleansed') || fl.includes('vetoed') || fl.includes('crushed') || fl.includes('enforced') || fl.includes('clean') || fl.includes('honesty')) {
        badgeStyle = 'background:rgba(34,197,94,0.2);color:#86efac;border:1px solid rgba(34,197,94,0.3);';
        badgeText = isEn ? '🛡️ INTEGRITY UPHELD' : '🛡️ INTEGRITAS TEGAK';
      } else if (fl.includes('took') || fl.includes('covered') || fl.includes('bribed') || fl.includes('shielded') || fl.includes('weaponized') || fl.includes('bought')) {
        badgeStyle = 'background:rgba(239,68,68,0.25);color:#fca5a5;border:1px solid #ef4444;';
        badgeText = isEn ? '💣 ACTIVE TIMEBOMB' : '💣 BOM WAKTU AKTIF';
      }

      html += `
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:6px;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;">
            <span style="font-size:11px;font-weight:800;color:#94a3b8;text-transform:uppercase;">
              ${isEn ? 'Year ' + m.year + ' • Quarter ' + m.quarterNum : 'Tahun ' + m.year + ' • Triwulan ' + m.quarterNum}
            </span>
            <span style="font-size:10px;font-weight:900;padding:2px 8px;border-radius:12px;${badgeStyle}">
              ${badgeText}
            </span>
          </div>
          <div style="font-size:13px;font-weight:800;color:#f8fafc;">${m.character}</div>
          <div style="font-size:11px;color:#93c5fd;font-weight:700;">
            ${isEn ? 'Choice:' : 'Pilihan Anda:'} <span style="color:#e2e8f0;font-weight:500;">${m.choiceTone}</span>
          </div>
          <div style="font-size:11px;color:#cbd5e1;background:rgba(0,0,0,0.25);padding:6px 8px;border-radius:6px;font-style:italic;line-height:1.4;">
            📜 ${m.consequence}
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
  modal.style.display = 'flex';
  modal.classList.add('show');
}

function closePoliticalDossierModal() {
  const modal = document.getElementById('politicalDossierModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
}

/* ==========================================================================================
 * FITUR INTERAKTIF 1: CIVICNET & SUARA WARGA TRENDING
 * ========================================================================================== */
var CIVIC_TRENDING_POOL = [
  { tag: '#BanjirNusapura', tag_en: '#NusapuraFloods', vol: '12.4K Postingan', vol_en: '12.4K Posts', sentiment: 'neg' },
  { tag: '#TransparansiAPBD', tag_en: '#BudgetTransparency', vol: '8.9K Postingan', vol_en: '8.9K Posts', sentiment: 'neu' },
  { tag: '#JalanMulusKota', tag_en: '#SmoothCityRoads', vol: '15.2K Postingan', vol_en: '15.2K Posts', sentiment: 'pos' },
  { tag: '#KPKUsutDinas', tag_en: '#AntiGraftProbe', vol: '24.1K Postingan', vol_en: '24.1K Posts', sentiment: 'neg' },
  { tag: '#NusapuraSmartCity', tag_en: '#SmartNusapura', vol: '10.5K Postingan', vol_en: '10.5K Posts', sentiment: 'pos' },
  { tag: '#DemoBuruhNusa', tag_en: '#WorkerRally', vol: '18.7K Postingan', vol_en: '18.7K Posts', sentiment: 'neg' },
  { tag: '#PasarMurahPemkot', tag_en: '#SubsidizedMarket', vol: '7.3K Postingan', vol_en: '7.3K Posts', sentiment: 'pos' }
];

function renderCivicNetTrending(lang) {
  const container = document.getElementById('civicNetTrending');
  if (!container) return;
  const isEn = lang === 'en';

  const defaultPool = [
    { tag: '#BanjirNusapura', tag_en: '#NusapuraFloods', vol: '12.4K Postingan', vol_en: '12.4K Posts', sentiment: 'neg' },
    { tag: '#TransparansiAPBD', tag_en: '#BudgetTransparency', vol: '8.9K Postingan', vol_en: '8.9K Posts', sentiment: 'neu' },
    { tag: '#JalanMulusKota', tag_en: '#SmoothCityRoads', vol: '15.2K Postingan', vol_en: '15.2K Posts', sentiment: 'pos' },
    { tag: '#KPKUsutDinas', tag_en: '#AntiGraftProbe', vol: '24.1K Postingan', vol_en: '24.1K Posts', sentiment: 'neg' },
    { tag: '#NusapuraSmartCity', tag_en: '#SmartNusapura', vol: '10.5K Postingan', vol_en: '10.5K Posts', sentiment: 'pos' },
    { tag: '#DemoBuruhNusa', tag_en: '#WorkerRally', vol: '18.7K Postingan', vol_en: '18.7K Posts', sentiment: 'neg' },
    { tag: '#PasarMurahPemkot', tag_en: '#SubsidizedMarket', vol: '7.3K Postingan', vol_en: '7.3K Posts', sentiment: 'pos' }
  ];
  const pool = (typeof CIVIC_TRENDING_POOL !== 'undefined' && Array.isArray(CIVIC_TRENDING_POOL) && CIVIC_TRENDING_POOL.length >= 7)
    ? CIVIC_TRENDING_POOL
    : defaultPool;

  const sat = (state && state.sat) || 60;
  let activeTags = [];
  if (sat < 45) {
    activeTags = [pool[0], pool[3], pool[5]];
  } else if (sat > 70) {
    activeTags = [pool[2], pool[4], pool[6]];
  } else {
    activeTags = [pool[1], pool[2], pool[0]];
  }

  container.innerHTML = activeTags.map(t => {
    const tagName = isEn ? t.tag_en : t.tag;
    const volName = isEn ? t.vol_en : t.vol;
    const isNeg = t.sentiment === 'neg';
    const isPos = t.sentiment === 'pos';
    const color = isNeg ? '#f87171' : (isPos ? '#4ade80' : '#93c5fd');
    return `
      <div class="civicNetTrendingItem" onclick="filterCivicTopic('${tagName}')">
        <span class="civicNetTrendingTag" style="color:${color};">${tagName}</span>
        <span class="civicNetTrendingCount">${volName}</span>
      </div>
    `;
  }).join('');
}

function filterCivicTopic(topic) {
  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? `🔍 Filtering CivicNet feed by topic: ${topic}` : `🔍 Memfilter obrolan CivicNet untuk topik: ${topic}`);
}

function openQuickTweetModal() {
  const m = document.getElementById('quickTweetModal');
  if (m) {
    const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
    const title = document.getElementById('quickTweetTitle');
    const sub = document.getElementById('quickTweetSub');
    const toneLbl = document.getElementById('quickTweetToneLabel');
    const inputLbl = document.getElementById('quickTweetInputLabel');
    const input = document.getElementById('quickTweetInput');
    const cancelBtn = document.getElementById('quickTweetCancelBtn');
    const sendBtn = document.getElementById('quickTweetBroadcastBtn');
    const select = document.getElementById('quickTweetTone');

    if (title) title.textContent = isEn ? '📢 Mayoral Press Statement Release' : '📢 Rilis Pernyataan Resmi Walikota';
    if (sub) sub.textContent = isEn ? 'Broadcast an executive statement across the CivicNet feed to address citizen sentiment.' : 'Kirim siaran resmi ke linimasa CivicNet untuk merespons dinamika warganet.';
    if (toneLbl) toneLbl.textContent = isEn ? 'SELECT STATEMENT TONE:' : 'PILIH NADA PERNYATAAN:';
    if (inputLbl) inputLbl.textContent = isEn ? 'CUSTOM ADDENDUM MESSAGE (OPTIONAL):' : 'CATATAN PESAN TAMBAHAN (OPSIONAL):';
    if (input) input.placeholder = isEn ? 'e.g., All agencies are mobilized on site to address civic concerns...' : 'Contoh: Seluruh jajaran dinas sedang bekerja di titik banjir...';
    if (cancelBtn) cancelBtn.textContent = isEn ? 'Cancel' : 'Batal';
    if (sendBtn) sendBtn.textContent = isEn ? '🚀 Broadcast to CivicNet' : '🚀 Siarkan ke CivicNet';

    if (select) {
      const curVal = select.value;
      select.innerHTML = isEn ? `
        <option value="transparan">📊 Transparent Accountability (+Approval, PR Cost Rp 0.05 T)</option>
        <option value="empati">🤝 Compassionate Field Leadership (+Approval, No Cost)</option>
        <option value="tegas">⚖️ Legal Enforcement & Civil Service Discipline (+Stability, +Integrity)</option>
        <option value="optimis">🚀 Economic Optimism & Investment Growth (+Business Endorsement)</option>
      ` : `
        <option value="transparan">📊 Transparan & Kinerja Nyata (+Kepuasan, Biaya PR Rp 0.05 T)</option>
        <option value="empati">🤝 Empati & Solutif Terjun ke Lapangan (+Kepuasan, Tanpa Biaya)</option>
        <option value="tegas">⚖️ Penegakan Hukum & Disiplin ASN (+Stabilitas, +Integritas)</option>
        <option value="optimis">🚀 Optimisme Pertumbuhan & Investasi (+Dukungan Pengusaha)</option>
      `;
      select.value = curVal;
    }

    m.classList.add('show');
    m.style.display = 'flex';
  }
}

function sendOfficialCivicTweet() {
  const toneSelect = document.getElementById('quickTweetTone');
  const tone = toneSelect ? toneSelect.value : 'empati';
  const input = document.getElementById('quickTweetInput');
  const customNote = input ? input.value.trim() : '';

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  let tweetText = '';
  let tweetTextEn = '';
  let fxSat = 0;
  let fxApbd = 0;

  if (tone === 'transparan') {
    if (state.apbd < 0.05) {
      showToast(isEn ? '⚠️ Insufficient APBD for public transparency broadcast!' : '⚠️ APBD tidak cukup untuk rilis kampanye transparansi publik!');
      return;
    }
    fxApbd = -0.05;
    fxSat = 3;
    tweetText = `[RILIS RESMI WALIKOTA] Seluruh anggaran dan dokumen audit kota Nusapura terbuka dan dapat diawasi publik. ${customNote}`;
    tweetTextEn = `[OFFICIAL MAYOR'S RELEASE] Nusapura municipal audit documents and budgets are open to public scrutiny. ${customNote}`;
  } else if (tone === 'empati') {
    fxSat = 2;
    tweetText = `[PESAN BAPAK/IBU WALIKOTA] Saya mendengar setiap keluh kesah warga. Jajaran Pemkot tidak akan tidur sampai masalah tuntas di lapangan! ${customNote}`;
    tweetTextEn = `[MAYOR'S DIRECT MESSAGE] I hear every citizen concern. Our team will remain on the ground until resolved! ${customNote}`;
  } else if (tone === 'tegas') {
    fxSat = 1;
    if (state.stats) state.stats.crime = Math.max(0, (state.stats.crime || 40) - 2);
    tweetText = `[INSTRUKSI WALIKOTA] Tidak ada toleransi bagi pelanggar ketertiban dan pungli di jajaran birokrasi kota. ${customNote}`;
    tweetTextEn = `[MAYOR'S EXECUTIVE ORDER] Zero tolerance for civil order disruptions and illegal fees in municipal bureaucracy. ${customNote}`;
  } else {
    fxSat = 1;
    updateActorRelations({ Investor: 5 });
    tweetText = `[KABAR BAIK NUSAPURA] Iklim usaha dan kepastian ekonomi kita terus melaju positif. Nusapura siap jadi kota percontohan nasional! ${customNote}`;
    tweetTextEn = `[GOOD NEWS NUSAPURA] Our business climate and economic certainty continue to surge forward. ${customNote}`;
  }

  if (fxApbd !== 0) state.apbd = Math.max(0, Math.round((state.apbd + fxApbd) * 10) / 10);
  state.sat = Math.max(0, Math.min(100, state.sat + fxSat));

  if (!state.social) state.social = [];
  state.social.push({
    id: 'soc_official_' + Date.now(),
    avatar: '🏛️',
    handle: '@HumasPemkotNusapura',
    handle_en: '@NusapuraCityHall',
    sentiment: '👍',
    type: 'praise',
    text: tweetText,
    text_en: tweetTextEn,
    handled: true,
    statusText: '📢 Rilis Resmi Pemkot Disiarkan',
    statusText_en: '📢 Official Statement Broadcasted'
  });

  if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
  updateHUD();
  renderSocial();
  returnFromSubModal('quickTweetModal');
  if (input) input.value = '';
  showToast(isEn ? '🚀 Official statement broadcasted to CivicNet!' : '🚀 Pernyataan resmi Walikota berhasil disiarkan ke linimasa CivicNet!');
}

/* ==========================================================================================
 * FITUR INTERAKTIF 2: SIDANG PARIPURNA & NEGOSIASI FRAKSI DPRD (FITUR 2)
 * ========================================================================================== */
const DPRD_FACTIONS_FULL = [
  { id: 'f_pembangunan', name: 'Fraksi Pembangunan & Karya', name_en: 'Development & Works Faction', icon: '🏗️', seats: 15, leader: 'Bpk. Hendra Wijaya', stance: 55, demand: 'Alokasi Proyek Infrastruktur Distrik', demand_en: 'District Infrastructure Capital Works' },
  { id: 'f_rakyat', name: 'Fraksi Suara Rakyat', name_en: 'Civic Voice Faction', icon: '🌾', seats: 14, leader: 'Ibu Ratna Kumala', stance: 60, demand: 'Peningkatan Bansos & Puskesmas Gratis', demand_en: 'Increased Social Aid & Free Clinics' },
  { id: 'f_reformasi', name: 'Fraksi Reformasi & Keadilan', name_en: 'Justice & Reform Faction', icon: '⚖️', seats: 12, leader: 'Ust. Fajar Shiddiq', stance: 50, demand: 'Audit Transparansi Proyek & Anti-Korupsi', demand_en: 'Open Procurement Audits & Anti-Graft' },
  { id: 'f_mandiri', name: 'Fraksi Mandiri Sejahtera', name_en: 'Enterprise & Prosperity Faction', icon: '🏬', seats: 9, leader: 'Bpk. Albert Tan', stance: 45, demand: 'Insentif Pajak & Relaksasi Izin Usaha', demand_en: 'Tax Incentives & Business Licensing Relief' }
];

function renderDprdParipurnaModal() {
  const container = document.getElementById('dprdParipurnaBody');
  if (!container) return;
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  const titleEl = document.getElementById('dprdModalTitleHeader');
  const subEl = document.getElementById('dprdModalSubHeader');
  const backBtn = document.getElementById('btnBackParipurna');
  const footerBackBtn = document.getElementById('dprdFooterBackBtn');
  const voteBtn = document.getElementById('btnStartRollCallVote');

  if (titleEl) titleEl.textContent = isEn ? '🏛️ Plenary Assembly & DPRD Faction Bargaining' : '🏛️ Sidang Paripurna & Negosiasi Fraksi DPRD';
  if (subEl) subEl.textContent = isEn ? 'Nusapura City Council Chamber (50 Seats). Lobby 4 party factions to lock the 26-vote quorum for legislative passage!' : 'Ruang Parlemen Kota Nusapura (50 Kursi). Lobi 4 fraksi politik untuk mengamankan kuorum minimal 26 suara pengesahan!';
  if (backBtn) backBtn.textContent = isEn ? '← Back' : '← Kembali';
  if (footerBackBtn) footerBackBtn.textContent = isEn ? '← Back' : '← Kembali';
  if (voteBtn) voteBtn.textContent = isEn ? '🔨 Sound the Gavel: Initiate Roll Call Vote' : '🔨 Ketuk Palu: Mulai Pemungutan Suara Paripurna';

  if (!state.dprdFactions) {
    state.dprdFactions = JSON.parse(JSON.stringify(DPRD_FACTIONS_FULL));
  }

  // Calculate guaranteed votes
  let totalVotesInFavor = 0;
  state.dprdFactions.forEach(f => {
    if (f.stance >= 50) totalVotesInFavor += f.seats;
  });

  const isQuorum = totalVotesInFavor >= 26;
  const quorumColor = isQuorum ? '#4ade80' : '#f87171';
  const quorumText = isQuorum 
    ? (isEn ? `✅ QUORUM SECURED (${totalVotesInFavor}/50 Seats)` : `✅ KUORUM AMAN (${totalVotesInFavor}/50 Suara Terkunci)`)
    : (isEn ? `⚠️ LACKING QUORUM (${totalVotesInFavor}/50 Seats - Min 26 Needed)` : `⚠️ BELUM KUORUM (${totalVotesInFavor}/50 Suara - Butuh Min 26)`);

  let factionsHtml = state.dprdFactions.map(f => {
    const fName = isEn ? f.name_en : f.name;
    const fDemand = isEn ? f.demand_en : f.demand;
    const inFavor = f.stance >= 50;
    const statusColor = inFavor ? '#4ade80' : '#f87171';
    const statusText = inFavor ? (isEn ? 'VOTING YES' : 'SETUJU (DRAFT DITERIMA)') : (isEn ? 'OPPOSING / ABSTAIN' : 'MENOLAK / KRITIS');

    return `
      <div class="factionCard">
        <div class="factionHeaderRow">
          <div class="factionTitle">
            <span>${f.icon}</span>
            <div>
              <div style="color:#fff;font-weight:800;font-size:14px;">${fName}</div>
              <div style="font-size:11px;color:var(--gray-400);">${isEn ? 'Faction Whip:' : 'Ketua:'} <span style="color:#cbd5e1;font-weight:600;">${f.leader}</span></div>
            </div>
          </div>
          <div style="text-align:right;">
            <div class="factionSeatBadge">${f.seats} ${isEn ? 'Seats' : 'Kursi'}</div>
            <div style="font-size:11px;font-weight:800;color:${statusColor};margin-top:2px;">${statusText}</div>
          </div>
        </div>

        <div style="margin:8px 0;font-size:11.5px;color:#94a3b8;">
          📌 ${isEn ? 'Primary Demands:' : 'Tuntutan Utama Fraksi:'} <span style="color:#e2e8f0;font-weight:700;">${fDemand}</span>
        </div>

        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <span style="font-size:11px;color:var(--gray-400);min-width:70px;">${isEn ? 'Support:' : 'Loyalitas:'}</span>
          <div style="flex:1;height:8px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
            <div style="height:100%;width:${f.stance}%;background:${f.stance >= 50 ? 'var(--green)' : 'var(--amber)'};transition:width .3s;"></div>
          </div>
          <span style="font-size:11.5px;font-weight:800;color:#fff;min-width:32px;text-align:right;">${f.stance}%</span>
        </div>

        <div class="factionActionRow">
          <button class="factionActionBtn" onclick="lobbyDprdFaction('${f.id}', 'dialog')">
            ☕ ${isEn ? 'Political Dialogue & Concession' : 'Lobi Dialog & Konsolidasi'}
          </button>
          <button class="factionActionBtn" onclick="lobbyDprdFaction('${f.id}', 'pokir')">
            💼 ${isEn ? 'Grant Pokir (-Rp 0.1 T)' : 'Akomodir Pokir (-Rp 0.1 T)'}
          </button>
          <button class="factionActionBtn" onclick="lobbyDprdFaction('${f.id}', 'kompromi')">
            🤝 ${isEn ? 'Form Alliance Pact (+Stance)' : 'Pakta Koalisi (+Loyalitas)'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="dprdParipurnaBanner">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:800;color:var(--blue-soft);">${isEn ? '🏛️ PLENARY SESSION VOTE PROJECTION' : '🏛️ PROYEKSI SIDANG PARIPURNA PENGESAHAN PERDA'}</span>
        <span style="font-size:13px;font-weight:900;color:${quorumColor};">${quorumText}</span>
      </div>
      <div class="dprdSeatingMeter">
        <div class="dprdSeatingMeterFill" style="width:${(totalVotesInFavor / 50) * 100}%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--gray-400);margin-top:4px;">
        <span>${isEn ? '0 Seats' : '0 Kursi'}</span>
        <span style="color:#fbbf24;font-weight:800;">${isEn ? 'Quorum Threshold (26 Seats)' : 'Batas Minimal Kuorum (26 Kursi)'}</span>
        <span>${isEn ? '50 Total Seats' : '50 Kursi Total'}</span>
      </div>
    </div>

    <div style="font-size:12.5px;font-weight:700;color:var(--gray-400);margin-bottom:10px;">
      ${isEn ? 'PARTY FACTIONS & LOBBYING TABLE:' : 'FRAKSI PARTAI & MEJA NEGOSIASI:'}
    </div>
    ${factionsHtml}
  `;
}

function lobbyDprdFaction(factionId, strategy) {
  if (!state.dprdFactions) return;
  const f = state.dprdFactions.find(item => item.id === factionId);
  if (!f) return;

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (strategy === 'dialog') {
    f.stance = Math.min(100, f.stance + 10);
    if (typeof AudioManager !== 'undefined') AudioManager.playVoiceGrunt('voice_dprd');
    showToast(isEn ? `☕ Productive dialogue with ${f.name} leader!` : `☕ Lobi politik hangat dengan pimpinan ${f.name} (+10% Dukungan)!`);
  } else if (strategy === 'pokir') {
    if (state.apbd < 0.1) {
      showToast(isEn ? '⚠️ Insufficient APBD for Pokir grant allocation!' : '⚠️ APBD tidak cukup untuk akomodasi Pokir fraksi!');
      return;
    }
    state.apbd = Math.max(0, Math.round((state.apbd - 0.1) * 10) / 10);
    f.stance = Math.min(100, f.stance + 20);
    if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_kas');
    showToast(isEn ? `💼 Pokir funds allocated to ${f.name} constituency (+20% Stance)!` : `💼 Aspirasi Pokir disetujui untuk konstituen ${f.name} (+20% Dukungan)!`);
  } else if (strategy === 'kompromi') {
    f.stance = Math.min(100, f.stance + 15);
    state.sat = Math.max(0, state.sat - 1);
    if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
    showToast(isEn ? `🤝 Strategic coalition treaty signed with ${f.name}!` : `🤝 Nota kesepahaman politik koalisi diteken bersama ${f.name}!`);
  }

  updateHUD();
  renderDprdParipurnaModal();
}

function startDprdRollCallVote() {
  if (!state.dprdFactions) {
    state.dprdFactions = JSON.parse(JSON.stringify(DPRD_FACTIONS_FULL));
  }

  let votesYes = 0;
  state.dprdFactions.forEach(f => {
    if (f.stance >= 50) votesYes += f.seats;
  });

  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_palu');
  }

  if (votesYes >= 26) {
    state.sat = Math.min(100, state.sat + 6);
    updateActorRelations({ DPRD: 12 });
    if (!state.news) state.news = [];
    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: `Sidang Paripurna DPRD mengetuk palu: Perda Strategis disahkan dengan ${votesYes} dari 50 suara dewan!`,
      text_en: `DPRD Plenary Session ratified strategic municipal ordinance with ${votesYes} out of 50 votes!`,
      mood: 1
    });
    showToast(isEn ? `🔨 ROLLED CALL PASSED! Plenary ratified with ${votesYes} votes in favor!` : `🔨 KETUK PALU SAH! Paripurna mengesahkan Perda dengan ${votesYes} suara dewan!`);
    returnFromSubModal('dprdParipurnaModal');
  } else {
    state.sat = Math.max(0, state.sat - 4);
    updateActorRelations({ DPRD: -8 });
    showToast(isEn ? `❌ VOTING FAILED! Only ${votesYes} votes (Quorum requires 26). Lobby more factions!` : `❌ VOTING GAGAL! Hanya ${votesYes} suara (Kurang dari kuorum 26). Lobi lebih banyak fraksi!`);
  }

  updateHUD();
  saveGame();
}

/* ==========================================================================================
 * FITUR INTERAKTIF 3: KONFERENSI PERS & DOORSTOP WARTAWAN DENGAN HITUNGAN MUNDUR
 * ========================================================================================== */
let pressTimerInterval = null;
let pressTimeRemaining = 10;

function startPressConferenceTimer() {
  clearInterval(pressTimerInterval);
  pressTimeRemaining = 10;
  const bar = document.getElementById('pressCountdownBar');
  if (bar) {
    bar.style.width = '100%';
    bar.style.background = 'linear-gradient(90deg, #10b981, #3b82f6)';
  }

  pressTimerInterval = setInterval(() => {
    pressTimeRemaining -= 0.1;
    if (bar) {
      const pct = Math.max(0, (pressTimeRemaining / 10) * 100);
      bar.style.width = `${pct}%`;
      if (pct < 30) {
        bar.style.background = '#ef4444';
      } else if (pct < 60) {
        bar.style.background = '#f59e0b';
      }
    }

    if (pressTimeRemaining <= 0) {
      clearInterval(pressTimerInterval);
      triggerPressTimeout();
    }
  }, 100);
}

function stopPressConferenceTimer() {
  if (pressTimerInterval) {
    clearInterval(pressTimerInterval);
    pressTimerInterval = null;
  }
}

function triggerPressTimeout() {
  showToast((typeof getGameLanguage === 'function' && getGameLanguage() === 'en') ? '⏱️ Time expired! Journalists interpreted silence as hesitation.' : '⏱️ Waktu habis! Jurnalis menganggap keterdiaman Walikota sebagai keraguan.');
  selectPressChoice(3); // Defensive default
}

function triggerCameraFlash() {
  const overlay = document.getElementById('cameraFlashOverlay');
  if (overlay) {
    overlay.classList.add('flashActive');
    setTimeout(() => {
      overlay.classList.remove('flashActive');
    }, 400);
  }
}

/* ==========================================================================================
 * FITUR INTERAKTIF 4: STEMPEL DINAMIS (ACC / DITOLAK) & GESTUR SWIPE
 * ========================================================================================== */
function handleChoiceClickWithStamp(choiceIdx) {
  triggerStampVisualEffect(choiceIdx);
  setTimeout(() => {
    handleChoiceClick(choiceIdx);
  }, 320);
}

function triggerStampVisualEffect(choiceIdx) {
  const overlayAcc = document.getElementById('stampOverlayAcc');
  const overlayReject = document.getElementById('stampOverlayReject');

  if (choiceIdx === 0 && overlayAcc) {
    overlayAcc.classList.add('stampActive');
    if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
    setTimeout(() => overlayAcc.classList.remove('stampActive'), 600);
  } else if (choiceIdx === 1 && overlayReject) {
    overlayReject.classList.add('stampActive');
    if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
    setTimeout(() => overlayReject.classList.remove('stampActive'), 600);
  } else {
    if (typeof AudioManager !== 'undefined') AudioManager.playSfx('sfx_stempel');
  }
}

function attachEventCardSwipeGestures(cardEl) {
  if (!cardEl) return;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let isSwiping = false;

  const onTouchStart = (e) => {
    if (isDangerousDialogueBeat() || isPersonalLifeBeat()) return;
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    currentX = startX;
    isSwiping = true;
    cardEl.style.transition = 'none';
  };

  const onTouchMove = (e) => {
    if (!isSwiping) return;
    const touch = e.touches[0];
    currentX = touch.clientX;
    const deltaX = currentX - startX;
    const deltaY = touch.clientY - startY;

    // Check if horizontal swipe dominates
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      const rot = deltaX * 0.05;
      cardEl.style.transform = `translateX(${deltaX}px) rotate(${rot}deg)`;
      const overlayAcc = document.getElementById('stampOverlayAcc');
      const overlayReject = document.getElementById('stampOverlayReject');
      if (deltaX > 40 && overlayAcc) {
        overlayAcc.style.opacity = Math.min(0.8, (deltaX - 40) / 100);
      } else if (deltaX < -40 && overlayReject) {
        overlayReject.style.opacity = Math.min(0.8, (-deltaX - 40) / 100);
      }
    }
  };

  const onTouchEnd = () => {
    if (!isSwiping) return;
    isSwiping = false;
    cardEl.style.transition = 'transform 0.3s ease-out';
    const deltaX = currentX - startX;

    const overlayAcc = document.getElementById('stampOverlayAcc');
    const overlayReject = document.getElementById('stampOverlayReject');
    if (overlayAcc) overlayAcc.style.opacity = '';
    if (overlayReject) overlayReject.style.opacity = '';

    if (deltaX > 110) {
      // Swipe Right -> Opsi 1 (Acc)
      cardEl.style.transform = 'translateX(250px) rotate(15deg)';
      setTimeout(() => {
        cardEl.style.transform = '';
        handleChoiceClickWithStamp(0);
      }, 180);
    } else if (deltaX < -110) {
      // Swipe Left -> Opsi 2 (Reject)
      cardEl.style.transform = 'translateX(-250px) rotate(-15deg)';
      setTimeout(() => {
        cardEl.style.transform = '';
        handleChoiceClickWithStamp(1);
      }, 180);
    } else {
      cardEl.style.transform = '';
    }
  };

  cardEl.removeEventListener('touchstart', cardEl._touchStartHandler);
  cardEl.removeEventListener('touchmove', cardEl._touchMoveHandler);
  cardEl.removeEventListener('touchend', cardEl._touchEndHandler);

  cardEl._touchStartHandler = onTouchStart;
  cardEl._touchMoveHandler = onTouchMove;
  cardEl._touchEndHandler = onTouchEnd;

  cardEl.addEventListener('touchstart', onTouchStart, { passive: true });
  cardEl.addEventListener('touchmove', onTouchMove, { passive: true });
  cardEl.addEventListener('touchend', onTouchEnd, { passive: true });
}

/* ==================== FITUR BARU: SEKRETARIS PRIBADI & EVALUASI KEBIJAKAN ==================== */
let activeSecretaryTab = 'summary';

function notifySecretaryBriefingReady() {
  const dot = document.getElementById('secUrgentDot');
  if (dot) {
    dot.style.display = 'inline-block';
  }
}

function openSecretaryBriefingModal(autoOpened = false) {
  const modal = document.getElementById('secretaryBriefingModal');
  if (!modal) return;

  const dot = document.getElementById('secUrgentDot');
  if (dot) {
    dot.style.display = 'none';
  }

  if (typeof AudioManager !== 'undefined') {
    AudioManager.playSfx('sfx_dokumen');
  }

  renderSecretaryBriefing();
  modal.style.display = 'flex';
  modal.classList.add('show');
}

function closeSecretaryBriefingModal() {
  const modal = document.getElementById('secretaryBriefingModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
  if (typeof AudioManager !== 'undefined' && AudioManager.playSfx) {
    AudioManager.playSfx('sfx_dokumen');
  }
}

function switchSecretaryTab(tabKey) {
  activeSecretaryTab = tabKey;
  const tabs = ['summary', 'perda', 'cabinet', 'projects', 'politics'];
  tabs.forEach(t => {
    const btn = document.getElementById(`secTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (btn) {
      if (t === tabKey) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
  renderSecretaryBriefing();
  const scrollBody = document.getElementById('secDossierScrollBody');
  if (scrollBody) {
    scrollBody.scrollTop = 0;
  }
}

function executeSecretaryDisposition(actionType) {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';

  if (actionType === 'speedup') {
    if ((state.apbd || 0) < 0.05) {
      showToast(isEn ? '⚠️ Insufficient APBD funds for agency acceleration!' : '⚠️ Kas APBD tidak mencukupi untuk biaya percepatan dinas!');
      return;
    }
    state.apbd = Math.max(0, Math.round((state.apbd - 0.05) * 100) / 100);
    state.sat = Math.min(100, Math.round((state.sat || 60) + 4));
    if (state.stats) {
      state.stats.infra = Math.min(100, (state.stats.infra || 50) + 3);
      state.stats.traffic = Math.max(0, (state.stats.traffic || 60) - 2);
    }
    if (typeof AudioManager !== 'undefined') {
      AudioManager.playSfx('sfx_stempel');
    }
    showToast(isEn ? '🚀 Mayoral Directive Executed: All municipal departments operational speed accelerated (+4% Public Approval)!' : '🚀 Disposisi Walikota Berlaku: Seluruh dinas mempercepat operasional lapangan (+4% Kepuasan Warga)!');
    if (typeof addNewsFeedItem === 'function') {
      addNewsFeedItem(isEn ? 'Mayoral Executive Order: Operational budget boost accelerates municipal public works.' : 'Instruksi Khusus Walikota: Anggaran operasional darurat digulirkan percepat pelayanan dinas.', 'official');
    }
  } else if (actionType === 'audit') {
    if ((state.apbd || 0) < 0.02) {
      showToast(isEn ? '⚠️ Insufficient APBD funds for emergency audit!' : '⚠️ Kas APBD tidak mencukupi untuk audit mendadak!');
      return;
    }
    state.apbd = Math.max(0, Math.round((state.apbd - 0.02) * 100) / 100);
    if (state.risk != null) {
      state.risk = Math.max(0, Math.round(state.risk - 5));
    }
    if (state.integrity == null) state.integrity = 75;
    state.integrity = Math.min(100, state.integrity + 5);

    if (state.cabinet && Array.isArray(state.cabinet)) {
      state.cabinet.forEach(k => {
        k.integrity = Math.min(100, (k.integrity || 65) + 3);
      });
    }
    if (typeof AudioManager !== 'undefined') {
      AudioManager.playSfx('sfx_palu');
    }
    showToast(isEn ? '⚖️ Mayoral Directive Executed: Regional Inspectorate tightens internal anti-corruption compliance (-5% Risk)!' : '⚖️ Disposisi Walikota Berlaku: Inspektorat Daerah memperketat audit anti-pungli di seluruh OPD (-5% Risiko Korupsi)!');
    if (typeof addNewsFeedItem === 'function') {
      addNewsFeedItem(isEn ? 'Regional Inspectorate expands surprise inspections across municipal departments.' : 'Inspektorat Daerah gelar inspeksi mendadak cegah celah maladministrasi dinas.', 'official');
    }
  } else if (actionType === 'dismiss') {
    state.sat = Math.min(100, Math.round((state.sat || 60) + 1));
    if (typeof AudioManager !== 'undefined') {
      AudioManager.playSfx('sfx_stempel');
    }
    showToast(isEn ? '✍️ Confidential Briefing approved & officially archived (+1% Leadership Prestige).' : '✍️ Berkas Laporan Ajudan disetujui & diarsipkan ke sekretariat (+1% Kepemimpinan).');
    closeSecretaryBriefingModal();
    updateHUD();
    updateDashboard();
    updateGauges();
    saveGame();
    return;
  }

  updateHUD();
  updateDashboard();
  updateGauges();
  saveGame();
  renderSecretaryBriefing();
}

function renderSecretaryBriefing() {
  const isEn = typeof getGameLanguage === 'function' && getGameLanguage() === 'en';
  const body = document.getElementById('secDossierBody');
  const stampEl = document.getElementById('secDossierStamp');
  const refEl = document.getElementById('secDossierRef');
  const agencyEl = document.getElementById('secDossierAgency');
  const titleEl = document.getElementById('secDossierTitle');
  const subEl = document.getElementById('secDossierSub');
  const roleEl = document.getElementById('secRoleTitle');
  const quoteEl = document.getElementById('secSpeechQuote');
  const dispositionTitle = document.getElementById('secDispositionTitle');
  const dispositionBtns = document.getElementById('secDispositionBtns');
  const footerTime = document.getElementById('secFooterTime');
  const btnClose = document.getElementById('secBtnClose');

  const qInfo = getQuarterInfo(state.eventIdx != null ? state.eventIdx : 0);
  const currYear = state.year || 1;
  const qNum = (state.eventIdx != null ? Math.floor(state.eventIdx / 3) : 0) + 1;

  // Localize Header Text
  if (stampEl) stampEl.textContent = isEn ? 'CLASSIFIED INTELLIGENCE • LEVEL 1' : 'RAHASIA NEGARA • TINGKAT I';
  if (refEl) refEl.textContent = `REF: NSP/MEMO-EKSEKUTIF/${currYear}/Q${qNum}`;
  const ribbonBackBtn = document.getElementById('secRibbonBackBtn');
  if (ribbonBackBtn) ribbonBackBtn.textContent = isEn ? '← Back to Game' : '← Kembali ke Permainan';
  if (agencyEl) agencyEl.textContent = isEn ? 'OFFICE OF THE MAYOR OF NUSAPURA • EXECUTIVE ADMINISTRATION BUREAU' : 'KANTOR WALIKOTA NUSAPURA • BIRO ADMINISTRASI PIMPINAN';
  if (titleEl) titleEl.textContent = isEn ? 'POLICY IMPACT & EXECUTIVE GOVERNANCE MEMO' : 'MEMORANDUM DAMPAK KEBIJAKAN & EVALUASI BIROKRASI';
  if (subEl) subEl.textContent = isEn ? 'Official private secretary audit on city by-laws, agency compliance, capital projects, and council stability.' : 'Laporan berkas resmi Ajudan mengenai dampak Perda, kepatuhan OPD, megaproyek, dan stabilitas politik parlemen.';
  if (roleEl) roleEl.textContent = isEn ? 'Executive Secretary & Mayoral Aide-de-Camp' : 'Sekretaris Pribadi & Ajudan Khusus Walikota';
  if (footerTime) footerTime.textContent = isEn ? `${qInfo.name_en || qInfo.name} • Year ${currYear} (Term ${state.term || 1})` : `${qInfo.name} • Tahun ke-${currYear} (Periode ${state.term || 1})`;
  if (btnClose) btnClose.textContent = isEn ? '← Back to Game' : '← Kembali ke Permainan';

  // Dynamic Quotes based on quarter & condition
  if (quoteEl) {
    if (qNum === 1) {
      quoteEl.textContent = isEn
        ? '"Good morning, Honorable Mayor. As we inaugurate the first quarter, here is our tactical assessment of city bylaws, department alignment, and pending public projects."'
        : '"Selamat pagi Bapak/Ibu Walikota. Memasuki Triwulan I, berikut hasil verifikasi intelijen staf atas kesiapan perda, sinkronisasi dinas, dan pengawasan proyek kota."';
    } else if (qNum === 2) {
      quoteEl.textContent = isEn
        ? '"Honorable Mayor, field project executions are underway. We have audited the physical delivery of your infrastructure programs and inter-agency coordination."'
        : '"Izin melaporkan Pak Walikota, eksekusi fisik proyek triwulan kedua sedang berjalan. Kami telah mengaudit ketepatan waktu dinas dan pengaduan layanan warga."';
    } else if (qNum === 3) {
      quoteEl.textContent = isEn
        ? '"Mid-year civic dynamics require vigilance. Our monitoring shows immediate community feedback on your passed bylaws and regional council negotiations."'
        : '"Selamat siang Bapak Walikota. Memasuki triwulan ketiga, dinamika sosial kota semakin terasa. Dampak regulasi perda dan komunikasi fraksi DPRD terus kami pantau."';
    } else {
      quoteEl.textContent = isEn
        ? '"Year-end fiscal closure briefing, Mayor. We have consolidated APBD absorption rates, department integrity scores, and council quorum readiness."'
        : '"Laporan tutup tahun anggaran, Pak Walikota. Kami merangkum serapan APBD, evaluasi loyalitas kepala dinas, dan peta kekuatan sidang paripurna DPRD."';
    }
  }

  // Update Tab Labels & Badges
  const activePerdas = state.activePerdas || [];
  const perdaBadge = document.getElementById('secTabPerdaBadge');
  if (perdaBadge) perdaBadge.textContent = activePerdas.length;

  const tabSummaryLabel = document.getElementById('secTabSummaryLabel');
  const tabPerdaLabel = document.getElementById('secTabPerdaLabel');
  const tabCabinetLabel = document.getElementById('secTabCabinetLabel');
  const tabProjectsLabel = document.getElementById('secTabProjectsLabel');
  const tabPoliticsLabel = document.getElementById('secTabPoliticsLabel');

  if (tabSummaryLabel) tabSummaryLabel.textContent = isEn ? 'Executive Summary' : 'Ringkasan Eksekutif';
  if (tabPerdaLabel) tabPerdaLabel.textContent = isEn ? 'By-Laws Impact' : 'Dampak Perda';
  if (tabCabinetLabel) tabCabinetLabel.textContent = isEn ? 'Agency Health & Cabinet' : 'Kinerja Dinas & OPD';
  if (tabProjectsLabel) tabProjectsLabel.textContent = isEn ? 'Projects & Investment' : 'Proyek & Investasi';
  if (tabPoliticsLabel) tabPoliticsLabel.textContent = isEn ? 'Council & Central Lobby' : 'Parlemen & Lobi';

  // Gather Systemic States for Real-Time Feedback
  const cStats = typeof calculateCabinetStats === 'function' ? calculateCabinetStats() : { avgIntegrity: 72, avgLoyalty: 70, avgPerformance: 74 };
  const allPerdas = typeof getPerdaList === 'function' ? getPerdaList() : [];
  const allProjects = typeof getMegastructureList === 'function' ? getMegastructureList() : [];
  const activeProjects = allProjects.filter(p => p.progress > 0);

  // Compute DPRD coalition strength
  let coalitionSeats = 0;
  if (state.dprdFactions && Array.isArray(state.dprdFactions)) {
    state.dprdFactions.forEach(f => {
      if (f.stance === 'coalition' || (f.relationship != null && f.relationship >= 50)) {
        coalitionSeats += (f.seats || 0);
      }
    });
  } else {
    coalitionSeats = 28; // Safe baseline
  }

  if (!body) return;

  // RENDER TAB CONTENTS
  if (activeSecretaryTab === 'summary') {
    const isPerdaActive = activePerdas.length > 0;
    const isCabinetSolid = (cStats.avgIntegrity || 70) >= 70;
    const hasProjects = activeProjects.length > 0;
    const isQuorumSafe = coalitionSeats >= 26;

    body.innerHTML = `
      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🏛️</span> ${isEn ? 'Nusapura Municipal State of Affairs' : 'Indikator Utama Pemerintahan Nusapura'}</div>
          <span class="dossierStatusTag ${isCabinetSolid && isQuorumSafe ? 'positive' : 'warning'}">
            ${isCabinetSolid && isQuorumSafe ? (isEn ? 'STABLE GOVERNANCE' : 'PEMERINTAHAN SOLID') : (isEn ? 'VIGILANCE REQUIRED' : 'PERLU PERHATIAN')}
          </span>
        </div>
        <div class="dossierReportDesc">
          ${isEn
            ? `Mayoral administration is functioning in <b>Year ${currYear}</b> with total APBD of <b>Rp ${state.apbd || 3.8} T</b> and citizen satisfaction at <b>${Math.round(state.sat || 65)}%</b>. Supporting executive menus (By-Laws, Agency Heads, Investments, and Central Diplomacy) are directly impacting city performance below:`
            : `Pemerintahan Kota Nusapura berjalan di <b>Tahun ke-${currYear}</b> dengan kas APBD aktif <b>Rp ${state.apbd || 3.8} T</b> dan kepuasan publik sebesar <b>${Math.round(state.sat || 65)}%</b>. Kebijakan Anda di menu pendukung (Perda, Kadis, Megaproyek, dan Lobi Pusat) memberikan dampak terukur berikut:`}
        </div>
        <div class="dossierReportMetricGrid">
          <div class="dossierMetricItem">
            <div class="dossierMetricLabel">${isEn ? 'APBD TREASURY' : 'KAS APBD KOTA'}</div>
            <div class="dossierMetricVal">Rp ${state.apbd || 3.8} T</div>
          </div>
          <div class="dossierMetricItem">
            <div class="dossierMetricLabel">${isEn ? 'PUBLIC SATISFACTION' : 'KEPUASAN PUBLIK'}</div>
            <div class="dossierMetricVal">${Math.round(state.sat || 65)}%</div>
          </div>
          <div class="dossierMetricItem">
            <div class="dossierMetricLabel">${isEn ? 'CORRUPTION RISK' : 'RISIKO KORUPSI'}</div>
            <div class="dossierMetricVal" style="color:${(state.risk || 10) > 30 ? '#f87171' : '#34d399'};">${state.risk || 10}%</div>
          </div>
          <div class="dossierMetricItem">
            <div class="dossierMetricLabel">${isEn ? 'DPRD QUORUM' : 'KUORUM DPRD'}</div>
            <div class="dossierMetricVal" style="color:${isQuorumSafe ? '#34d399' : '#fbbf24'};">${coalitionSeats}/50 ${isEn ? 'Seats' : 'Kursi'}</div>
          </div>
        </div>
      </div>

      <!-- 4 EXECUTIVE PILLAR CARDS -->
      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>📜</span> ${isEn ? 'City By-Laws (Perda) Status' : 'Evaluasi Regulasi Perda Kota'}</div>
          <span class="dossierStatusTag ${isPerdaActive ? 'positive' : 'warning'}">${isPerdaActive ? `${activePerdas.length} ${isEn ? 'ACTIVE' : 'BERLAKU'}` : (isEn ? 'NO ACTIVE BY-LAWS' : 'BELUM ADA PERDA')}</span>
        </div>
        <div class="dossierReportDesc">
          ${isPerdaActive
            ? (isEn
                ? `<b>${activePerdas.length} strategic city by-laws</b> are actively enforced. Satpol PP and municipal agencies report concrete improvements in social discipline, environmental compliance, and business growth. (Open tab <i>By-Laws Impact</i> for specific reports).`
                : `Sebanyak <b>${activePerdas.length} Perda strategis</b> sedang berlaku aktif. Satpol PP dan dinas terkait melaporkan ketertiban warga membaik serta kepatuhan pelaku usaha terjaga. (Buka tab <i>Dampak Perda</i> untuk rincian tiap regulasi).`)
            : (isEn
                ? `Kota Nusapura currently relies on generic legacy regulations. We advise the Mayor to visit the <b>City By-Laws (Perda)</b> menu to pass prioritized regulations on tax incentives, clean environment, or curfew.`
                : `Kota Nusapura saat ini masih berjalan dengan payung hukum normatif. Ajudan menyarankan Bapak/Ibu menetapkan Perda prioritas di menu <b>Perda Kota</b> untuk mengamankan retribusi PAD dan ketertiban umum.`)}
        </div>
      </div>

      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🗂️</span> ${isEn ? 'Cabinet & Municipal Agency Heads' : 'Kondisi Kinerja Kabinet & OPD'}</div>
          <span class="dossierStatusTag ${isCabinetSolid ? 'positive' : 'warning'}">${isEn ? `INTEGRITY: ${cStats.avgIntegrity || 70}%` : `INTEGRITAS: ${cStats.avgIntegrity || 70}%`}</span>
        </div>
        <div class="dossierReportDesc">
          ${isCabinetSolid
            ? (isEn
                ? `Regional Agency Heads (Kadis) exhibit solid integrity and disciplined budget execution. Corruption leak risk remains controlled, preventing adverse audit findings.`
                : `Jajaran Kepala Dinas (Kadis) menunjukkan integritas yang baik dan disiplin anggaran. Risiko kebocoran APBD terkendali dan pengawasan internal berjalan efektif.`)
            : (isEn
                ? `⚠️ <b>Aide Warning:</b> Several department heads exhibit below-average integrity or lagging public service metrics. Consider conducting a reshuffle or merit auction in the <i>Cabinet</i> menu.`
                : `⚠️ <b>Peringatan Ajudan:</b> Beberapa Kepala Dinas terdeteksi memiliki integritas di bawah standar atau lambat melayani warga. Pertimbangkan rotasi atau seleksi terbuka di menu <i>Kabinet Kadis</i>.`)}
        </div>
      </div>

      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🏗️</span> ${isEn ? 'Capital Works & Private Investment' : 'Progres Megaproyek & Investasi'}</div>
          <span class="dossierStatusTag ${hasProjects ? 'positive' : 'warning'}">${hasProjects ? (isEn ? 'UNDER CONSTRUCTION' : 'PROYEK BERJALAN') : (isEn ? 'NO ACTIVE CAPITAL WORKS' : 'BELUM ADA PROYEK BESAR')}</span>
        </div>
        <div class="dossierReportDesc">
          ${hasProjects
            ? (isEn
                ? `Currently executing <b>${activeProjects.length} major infrastructure projects</b>, absorbing local construction workforce and strengthening Nusapura's business competitiveness.`
                : `Sedang melaksanakan <b>${activeProjects.length} proyek infrastruktur strategis</b>. Ribuan tenaga kerja lokal terserap dan iklim investasi kota meningkat pesat.`)
            : (isEn
                ? `No major megaproject is under active funding. Capital expenditure remains unutilized. We recommend allocating funds in the <b>Megaprojects & Investment Hub</b>.`
                : `Belum ada megaproyek fisik yang dibiayai aktif. Belanja modal kota belum optimal. Ajudan menyarankan pengalokasian dana di menu <b>Megaproyek</b>.`)}
        </div>
      </div>

      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🏛️</span> ${isEn ? 'City Council Quorum & Central Grants' : 'Peta Parlemen DPRD & Lobi Pusat'}</div>
          <span class="dossierStatusTag ${isQuorumSafe ? 'positive' : 'danger'}">${coalitionSeats}/50 ${isEn ? 'SEATS' : 'KURSI'}</span>
        </div>
        <div class="dossierReportDesc">
          ${isQuorumSafe
            ? (isEn
                ? `Mayoral legislative coalition commands <b>${coalitionSeats} of 50 seats</b>, exceeding the statutory 26-vote quorum. APBD approvals and ordinances will pass smoothly.`
                : `Koalisi pendukung Walikota menguasai <b>${coalitionSeats} dari 50 kursi</b> DPRD, melampaui kuorum 26 suara. Rancangan APBD dan Perda dijamin aman dari pemboikotan.`)
            : (isEn
                ? `⚠️ <b>Parliamentary Deadlock Risk:</b> Your coalition holds only <b>${coalitionSeats}/50 seats</b>. Opposition factions may delay municipal budgets. Engage party leaders in the <i>DPRD Plenary</i> menu.`
                : `⚠️ <b>Peringatan Deadlock Parlemen:</b> Koalisi hanya memegang <b>${coalitionSeats}/50 kursi</b>. Fraksi penyeimbang rentan menggulirkan interpelasi. Lakukan lobi fraksi di menu <i>Sidang DPRD</i>.`)}
        </div>
      </div>
    `;
  } else if (activeSecretaryTab === 'perda') {
    if (activePerdas.length === 0) {
      body.innerHTML = `
        <div class="dossierReportCard" style="text-align:center;padding:24px 16px;">
          <div style="font-size:38px;margin-bottom:8px;">📜</div>
          <div class="dossierReportLabel" style="justify-content:center;font-size:14px;color:#fde68a;">
            ${isEn ? 'No Strategic City By-Laws Currently Enacted' : 'Belum Ada Perda Strategis yang Ditetapkan'}
          </div>
          <div class="dossierReportDesc" style="max-width:480px;margin:10px auto 14px;color:#cbd5e1;">
            ${isEn
              ? 'Nusapura is operating solely on baseline ministerial decrees. By enacting local by-laws in the <b>Perda Kota</b> menu (such as SME Tax Holidays, Green Canopy Zoning, or Night Curfew), you directly unlock permanent civic multipliers, reduce crime, and accelerate revenue!'
              : 'Kota Nusapura saat ini hanya bertumpu pada peraturan bupati/walikota lama. Dengan mengesahkan Perda strategis di menu <b>Perda Kota</b> (seperti Insentif Pajak UMKM, Jam Malam Presisi, atau Bebas Plastik), Anda mengaktifkan multiplier permanen, menekan kriminalitas, dan melipatgandakan PAD!'}
          </div>
          <button class="bigBtn" onclick="openPerdaDirect()" style="background:linear-gradient(135deg,#d4a94f,#b2822b);color:#07192f;font-weight:900;border:none;margin:0 auto;display:inline-flex;align-items:center;gap:6px;">
            <span>📜</span> ${isEn ? 'Enact City By-Laws Now →' : 'Tetapkan Perda Sekarang →'}
          </button>
        </div>
      `;
    } else {
      const perdaImpactMap = {
        curfew: {
          report_id: 'Patroli terpadu Satpol PP & Polres Nusapura mencatat penurunan tawuran remaja dan kejahatan jalanan malam hingga 28%. Orang tua mengapresiasi rasa aman di kawasan protokol.',
          report_en: 'Joint patrols between Municipal Police (Satpol PP) and Police Precinct report a 28% drop in youth brawls and street robbery. Parents highly praise late-night neighborhood safety.'
        },
        plastic: {
          report_id: 'Dinas Lingkungan Hidup merekap pengurangan 22 ton sampah plastik per pekan di TPA Sentral. Supermarket dan pusat belanja 100% beralih ke kemasan ramah lingkungan.',
          report_en: 'Environment Agency records 22 tons less plastic waste entering Sentral Landfill per week. Modern supermarkets have shifted to biodegradable eco-packaging.'
        },
        tax_umkm: {
          report_id: 'Dinas DPMPTSP mencatat 56 izin UMKM dan rintisan usaha baru terbit bulan ini. Pembebasan pajak daerah memicu lonjakan wirausaha muda dan serapan tenaga kerja.',
          report_en: 'Licensing Board (DPMPTSP) logs 56 new SME licenses issued this month. The local tax holiday has accelerated youth entrepreneurship and direct hiring.'
        },
        bus_free: {
          report_id: 'Dinas Perhubungan melaporkan 9.200 warga & pelajar beralih menggunakan bus sekolah & angkutan umum gratis setiap hari, mengurai 12% titik macet di jalan arteri.',
          report_en: 'Transportation Agency reports 9,200 commuters & students using free municipal buses daily, cutting 12% of peak traffic choke-points.'
        },
        etle_ai: {
          report_id: 'Kamera ETLE AI Dishub merekam 410 pelanggaran marka lalu lintas secara akurat. Ketertiban berkendara meningkat drastis tanpa pungli tilang manual di jalanan.',
          report_en: 'Autonomous AI ETLE cameras successfully detected 410 moving violations. Traffic compliance surged without manual officer extortion on the roads.'
        },
        rth_30: {
          report_id: 'Dinas Tata Ruang memastikan 16 gedung perkantoran & kawasan industri baru telah menyerahkan sertifikasi 30% area resapan hijau. Kualitas udara terukur lebih sejuk.',
          report_en: 'Urban Planning Agency confirmed 16 new commercial towers comply with 30% green canopy zoning. Microclimate temperature in industrial zones is noticeably cooler.'
        }
      };

      let html = `<div style="font-size:12px;color:#cbd5e1;margin-bottom:12px;">${isEn ? `Evaluating <b>${activePerdas.length} active city ordinances</b> enforced in the field:` : `Evaluasi lapangan atas <b>${activePerdas.length} Peraturan Daerah aktif</b> di Kota Nusapura:`}</div>`;

      activePerdas.forEach(pId => {
        const perda = allPerdas.find(p => p.id === pId) || { name: `Perda ${pId}`, name_en: `By-Law ${pId}`, desc: '', desc_en: '', fx: '', fx_en: '' };
        const impact = perdaImpactMap[pId] || {
          report_id: 'Dinas pelaksana melaporkan regulasi telah diterapkan di 5 kecamatan dengan pengawasan rutin.',
          report_en: 'Municipal implementing agencies report regulatory compliance across all 5 city districts.'
        };
        const pName = (isEn && perda.name_en) ? perda.name_en : perda.name;
        const pFx = (isEn && perda.fx_en) ? perda.fx_en : perda.fx;
        const pReport = isEn ? impact.report_en : impact.report_id;

        html += `
          <div class="dossierReportCard">
            <div class="dossierReportHead">
              <div class="dossierReportLabel">${pName}</div>
              <span class="dossierStatusTag positive">${isEn ? 'ENFORCED & ACTIVE' : 'BERLAKU & EFEKTIF'}</span>
            </div>
            <div style="font-size:11px;color:#93c5fd;font-weight:700;margin-bottom:6px;">📈 ${isEn ? 'System Multiplier:' : 'Dampak Parameter:'} ${pFx}</div>
            <div class="dossierReportDesc" style="background:rgba(4,16,30,0.4);padding:8px 10px;border-radius:6px;border-left:3px solid #34d399;">
              <b>${isEn ? 'Field Intelligence Briefing:' : 'Laporan Intelijen Lapangan Ajudan:'}</b><br>
              ${pReport}
            </div>
          </div>
        `;
      });

      body.innerHTML = html;
    }
  } else if (activeSecretaryTab === 'cabinet') {
    const cab = state.cabinet || [];
    let html = `
      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🗂️</span> ${isEn ? 'Cabinet Health & Merit Index' : 'Indeks Integritas & Loyalitas Kabinet'}</div>
          <span class="dossierStatusTag ${(cStats.avgIntegrity || 70) >= 70 ? 'positive' : 'warning'}">
            ${isEn ? 'AVERAGE INTEGRITY' : 'RATA-RATA INTEGRITAS'}: ${cStats.avgIntegrity || 70}%
          </span>
        </div>
        <div class="dossierReportDesc">
          ${isEn
            ? `Your municipal cabinet manages <b>${cab.length || 6} core departments</b>. Integrity directly prevents budget leaks and avoids KPK/BPK surprise audits. You can reshuffle or dismiss underperforming agency heads anytime via the <b>Cabinet</b> menu.`
            : `Kabinet Anda memimpin <b>${cab.length || 6} dinas utama</b>. Integritas kadis mencegah kebocoran anggaran dan menghindarkan OTT KPK/BPK. Anda bisa merotasi atau memecat pejabat melalui menu <b>Kabinet Kadis</b>.`}
        </div>
      </div>
      <div style="font-size:12px;color:#cbd5e1;margin:10px 0 6px;">${isEn ? 'Agency Heads Inspection Ledger:' : 'Daftar Evaluasi Kepala Dinas & OPD:'}</div>
    `;

    if (cab.length === 0) {
      html += `<div class="dossierReportCard">${isEn ? 'Standard administrative cabinet serving.' : 'Jajaran dinas bertugas secara standar.'}</div>`;
    } else {
      cab.forEach(k => {
        const integ = k.integrity != null ? k.integrity : 70;
        const loy = k.loyalty != null ? k.loyalty : 70;
        const isDangerous = integ < 50;
        const isExcellent = integ >= 80;

        let statusTag = isDangerous ? `<span class="dossierStatusTag danger">${isEn ? 'CORRUPTION RISK' : 'RAWAN MALADMINISTRASI'}</span>` : (isExcellent ? `<span class="dossierStatusTag positive">${isEn ? 'EXCELLENT' : 'PRIMA & BERSIH'}</span>` : `<span class="dossierStatusTag warning">${isEn ? 'COMPLIANT' : 'CUKUP BAIK'}</span>`);

        let note = isDangerous
          ? (isEn
              ? `⚠️ <b>Aide Warning:</b> Suspicious vendor bidding patterns detected under this agency head. High probability of adverse audit findings!`
              : `⚠️ <b>Peringatan Ajudan:</b> Terdeteksi kejanggalan dalam lelang pengadaan barang di dinas ini. Segera evaluasi sebelum menjadi temuan hukum!`)
          : (isExcellent
              ? (isEn
                  ? `⭐ Exemplary clean governance. Project absorptions are rapid, and public complaints are resolved within 24 hours.`
                  : `⭐ Teladan birokrasi bersih. Serapan anggaran cepat dan pengaduan warga ditindaklanjuti dalam waktu 24 jam.`)
              : (isEn
                  ? `Routine operations maintained without major incident.`
                  : `Operasional kedinasan berjalan tertib sesuai SOP standar.`));

        html += `
          <div class="dossierReportCard">
            <div class="dossierReportHead">
              <div class="dossierReportLabel">${k.role_en && isEn ? k.role_en : (k.role || k.name)}</div>
              ${statusTag}
            </div>
            <div style="font-size:11.5px;color:#fde68a;font-weight:700;margin-bottom:4px;">👤 ${k.name || 'Kepala Dinas'}</div>
            <div class="dossierReportDesc">${note}</div>
            <div class="dossierReportMetricGrid">
              <div class="dossierMetricItem">
                <div class="dossierMetricLabel">${isEn ? 'INTEGRITY' : 'INTEGRITAS'}</div>
                <div class="dossierMetricVal" style="color:${integ < 50 ? '#f87171' : (integ >= 80 ? '#34d399' : '#fde68a')};">${integ}%</div>
              </div>
              <div class="dossierMetricItem">
                <div class="dossierMetricLabel">${isEn ? 'LOYALTY' : 'LOYALITAS'}</div>
                <div class="dossierMetricVal">${loy}%</div>
              </div>
            </div>
          </div>
        `;
      });
    }

    body.innerHTML = html;
  } else if (activeSecretaryTab === 'projects') {
    const sectors = state.investmentSectors || [];
    let html = `
      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🏗️</span> ${isEn ? 'Major Capital Works & Megaprojects' : 'Realisasi Megaproyek Infrastruktur'}</div>
          <span class="dossierStatusTag ${activeProjects.length > 0 ? 'positive' : 'warning'}">
            ${activeProjects.length} ${isEn ? 'ACTIVE PROJECTS' : 'PROYEK BERJALAN'}
          </span>
        </div>
        <div class="dossierReportDesc">
          ${isEn
            ? `Capital infrastructure projects boost local job absorption and permanently lower traffic/flood indicators across Nusapura:`
            : `Megaproyek fisik menyerap ribuan tenaga kerja lokal, menekan kemacetan/banjir, dan menjadi warisan monumental Walikota:`}
        </div>
      </div>
    `;

    if (allProjects.length > 0) {
      allProjects.forEach(proj => {
        const pName = (isEn && proj.name_en) ? proj.name_en : proj.name;
        const pProg = proj.progress || 0;
        const isDone = pProg >= 100;
        const isFunded = pProg > 0;

        html += `
          <div class="dossierReportCard">
            <div class="dossierReportHead">
              <div class="dossierReportLabel">${proj.icon || '🏗️'} ${pName}</div>
              <span class="dossierStatusTag ${isDone ? 'positive' : (isFunded ? 'warning' : 'danger')}">
                ${isDone ? (isEn ? 'COMPLETED' : 'SELESAI') : (isFunded ? `${pProg}% ${isEn ? 'PROGRESS' : 'PROGRES'}` : (isEn ? 'UNFUNDED' : 'BELUM DIBIAYAI'))}
              </span>
            </div>
            <div style="margin:6px 0;">
              <div style="background:rgba(4,16,30,0.6);height:8px;border-radius:4px;overflow:hidden;border:1px solid rgba(212,169,79,0.2);">
                <div style="background:linear-gradient(90deg,#d4a94f,#34d399);height:100%;width:${pProg}%;"></div>
              </div>
            </div>
            <div class="dossierReportDesc">
              ${isDone
                ? (isEn ? '✅ Monument completed and operating at full public utility.' : '✅ Proyek tuntas 100% dan telah beroperasi penuh melayani warga.')
                : (isFunded
                    ? (isEn ? `Contractor workforce active on-site. Estimated absorption: ~${Math.round(pProg * 25)} local technicians & workers.` : `Kontraktor dan pekerja aktif di lapangan. Penyerapan tenaga kerja lokal mencapai ~${Math.round(pProg * 25)} orang.`)
                    : (isEn ? 'Awaiting municipal capital budget allocation.' : 'Menunggu alokasi pembiayaan belanja modal APBD.'))}
            </div>
          </div>
        `;
      });
    }

    if (sectors.length > 0) {
      html += `<div style="font-size:12px;color:#cbd5e1;margin:12px 0 6px;">${isEn ? 'Private Investment & Economic Sectors:' : 'Sektor Investasi & Pertumbuhan Ekonomi:'}</div>`;
      sectors.forEach(sec => {
        const sName = (isEn && sec.name_en) ? sec.name_en : sec.name;
        const sFx = (isEn && sec.fx_en) ? sec.fx_en : sec.fx;
        html += `
          <div class="dossierReportCard">
            <div class="dossierReportHead">
              <div class="dossierReportLabel">${sName}</div>
              <span class="dossierStatusTag positive">${isEn ? `LEVEL ${sec.level}/${sec.max}` : `TINGKAT ${sec.level}/${sec.max}`}</span>
            </div>
            <div class="dossierReportDesc" style="font-size:11.5px;color:#86efac;">📊 ${sFx}</div>
          </div>
        `;
      });
    }

    body.innerHTML = html;
  } else if (activeSecretaryTab === 'politics') {
    const isQuorumSafe = coalitionSeats >= 26;
    const factions = state.dprdFactions || [];
    const centralLobby = state.centralLobby || {};

    let html = `
      <div class="dossierReportCard">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🏛️</span> ${isEn ? 'DPRD Legislative Quorum Map' : 'Peta Kuorum Sidang Paripurna DPRD'}</div>
          <span class="dossierStatusTag ${isQuorumSafe ? 'positive' : 'danger'}">
            ${coalitionSeats}/50 ${isEn ? 'COALITION SEATS' : 'KURSI KOALISI'}
          </span>
        </div>
        <div class="dossierReportDesc">
          ${isQuorumSafe
            ? (isEn
                ? `The Mayoral administration holds a secure parliamentary majority (<b>${coalitionSeats}/50 seats</b>). Crucial budgets, loans, and bylaws will pass plenary votes safely.`
                : `Pemerintahan Walikota mengamankan kuorum parlemen yang aman (<b>${coalitionSeats}/50 kursi</b>). Pengesahan APBD dan Perda dipastikan lolos tanpa boikot.`)
            : (isEn
                ? `⚠️ <b>Aide Warning:</b> High risk of legislative deadlock or interpellation inquiries! Coordinate party concessions in the <i>DPRD Plenary</i> chamber.`
                : `⚠️ <b>Peringatan Ajudan:</b> Risiko pemboikotan sidang paripurna atau hak interpelasi tinggi! Segera lakukan lobi kompromi di ruang <i>Sidang DPRD</i>.`)}
        </div>
      </div>
    `;

    if (factions.length > 0) {
      html += `<div style="font-size:12px;color:#cbd5e1;margin:10px 0 6px;">${isEn ? 'Party Factions Alignment:' : 'Peta Fraksi Politik Parlemen:'}</div>`;
      factions.forEach(f => {
        const isSupporting = f.stance === 'coalition' || (f.relationship != null && f.relationship >= 50);
        html += `
          <div class="dossierReportCard">
            <div class="dossierReportHead">
              <div class="dossierReportLabel">${f.name || 'Fraksi'} (${f.seats || 0} ${isEn ? 'Seats' : 'Kursi'})</div>
              <span class="dossierStatusTag ${isSupporting ? 'positive' : 'warning'}">
                ${isSupporting ? (isEn ? 'COALITION ALLY' : 'MITRA KOALISI') : (isEn ? 'OPPOSITION' : 'PENYEIMBANG')}
              </span>
            </div>
            <div class="dossierReportDesc" style="font-size:11.5px;">
              ${isSupporting
                ? (isEn ? 'Solidly back executive policies and ensure legislative passage.' : 'Mendukung penuh kebijakan Walikota dan mengamankan kuorum paripurna.')
                : (isEn ? 'Critical watchdog stance; demanding local constituency projects (Pokir).' : 'Kritis terhadap anggaran Walikota dan menuntut alokasi pokok pikiran (Pokir).')}
            </div>
          </div>
        `;
      });
    }

    html += `
      <div class="dossierReportCard" style="margin-top:12px;">
        <div class="dossierReportHead">
          <div class="dossierReportLabel"><span>🏛️</span> ${isEn ? 'Central Government & Ministry Diplomacy' : 'Hubungan Diplomatik Pemerintah Pusat'}</div>
          <span class="dossierStatusTag positive">${isEn ? 'SYNCHRONIZED' : 'TERKOORDINASI'}</span>
        </div>
        <div class="dossierReportDesc">
          ${isEn
            ? `Special Allocation Grants (DAK) and National Strategic Project alignments with the Ministry of Finance remain active. Maintain vertical diplomacy in the <b>Central Lobby</b> menu to guarantee timely fiscal transfers.`
            : `Dana Alokasi Khusus (DAK) dan sinergi Proyek Strategis Nasional (PSN) dengan Kementerian Keuangan berjalan aktif. Jaga hubungan vertikal di menu <b>Lobi Pusat</b> agar transfer APBD lancar.`}
        </div>
      </div>
    `;

    body.innerHTML = html;
  }

  // RENDER ACTIONABLE MAYORAL DISPOSITION BUTTONS
  if (dispositionTitle) {
    dispositionTitle.textContent = isEn ? 'TACTICAL MAYORAL DISPOSITION & DIRECTIVES' : 'TINDAK LANJUT & DISPOSISI EKSEKUTIF WALIKOTA';
  }

  if (dispositionBtns) {
    dispositionBtns.innerHTML = `
      <button class="dossierActBtn primary" onclick="executeSecretaryDisposition('speedup')">
        <div class="dossierActBtnTitle"><span>🚀</span> ${isEn ? 'Accelerate Agency Field Operations' : 'Instruksikan Percepatan Operasional OPD'}</div>
        <div class="dossierActBtnCost">${isEn ? 'Cost: Rp 0.05 T APBD' : 'Biaya: Rp 0.05 T APBD'}</div>
        <div class="dossierActBtnFx">${isEn ? '+4% Public Satisfaction, Boost Agency Delivery' : '+4% Kepuasan Warga, Pacu Eksekusi Program Dinas'}</div>
      </button>

      <button class="dossierActBtn" onclick="executeSecretaryDisposition('audit')">
        <div class="dossierActBtnTitle"><span>⚖️</span> ${isEn ? 'Tighten Internal Anti-Graft Inspection' : 'Perketat Pengawasan Internal & Audit Integritas'}</div>
        <div class="dossierActBtnCost">${isEn ? 'Cost: Rp 0.02 T APBD' : 'Biaya: Rp 0.02 T APBD'}</div>
        <div class="dossierActBtnFx">${isEn ? '-5% Corruption Risk, Protect Against Scandals' : '-5% Risiko Korupsi, Cegah Temuan Hukum & OTT'}</div>
      </button>

      <button class="dossierActBtn" onclick="executeSecretaryDisposition('dismiss')" style="grid-column:1/-1;">
        <div class="dossierActBtnTitle"><span>✍️</span> ${isEn ? 'Sign Executive Approval & Return to Desk' : 'Tandatangani Disposisi Rutin & Lanjutkan Kerja'}</div>
        <div class="dossierActBtnCost">${isEn ? 'Cost: Free (Standard Review)' : 'Biaya: Bebas Biaya (Disposisi Standar)'}</div>
        <div class="dossierActBtnFx">${isEn ? '+1% Leadership Prestige, Officially Archive Dossier' : '+1% Kepemimpinan, Berkas Resmi Diarsipkan ke Sekretariat'}</div>
      </button>
    `;
  }
}

// Window exports for global onclick bindings
window.openSecretaryBriefingModal = openSecretaryBriefingModal;
window.closeSecretaryBriefingModal = closeSecretaryBriefingModal;
window.switchSecretaryTab = switchSecretaryTab;
window.executeSecretaryDisposition = executeSecretaryDisposition;
window.notifySecretaryBriefingReady = notifySecretaryBriefingReady;

