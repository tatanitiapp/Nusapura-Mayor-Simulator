# -*- coding: utf-8 -*-
"""
Applies all 9 core improvements from Akbar and Iqbal's playtest feedback:
1. Candidate Screen: Vice Mayor selection (Drs. Syarifuddin, dr. Anindya, Ir. Hendra, KH Mansyur) + Opponent
2. Campaign Promises: Pool of 12 promises, enforce EXACTLY 3 (bug fix: player can no longer select all 5!), re-roll options
3. Accidental Tap Undo: Snapshot state before choice, floating Undo banner & HUD button
4. Front-Page Newspaper Visual Impact Card at Year-End
5. Seleksi Terbuka / Lelang Jabatan Kadis OPD (Pakar Murni vs Alumni IPDN vs Rekanan Parpol)
6. Interactive DPRD Parliamentary Hub: Factions, Coffee Morning, Pokir Dapil, APBD Ratification, BUMD Seat
7. Interactive Musrenbang: Real citizen proposals from 4 districts
8. UI Simplification, Clean Focus Mode toggle, and Layman Governance Terms Guide (Panduan Istilah Awam)
9. 100% Full Bilingual support (Indonesian & English)
"""

import re
import json

def run():
    with open('app/src/main/assets/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    print("Initial length:", len(html))

    # ==================== 1. CSS ADDITIONS ====================
    css_to_add = """
/* ==================== VICE MAYOR SELECTION & RUNNING MATE STYLES ==================== */
.viceGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 8px;
}
@media (max-width: 600px) {
  .viceGrid { grid-template-columns: 1fr; }
}
.viceCard {
  background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  text-align: left;
}
.viceCard:hover {
  border-color: rgba(59,130,246,0.6);
  background: rgba(59,130,246,0.08);
  transform: translateY(-2px);
}
.viceCard.selected {
  border-color: var(--blue);
  background: linear-gradient(145deg, rgba(59,130,246,0.22), rgba(30,58,110,0.3));
  box-shadow: 0 0 16px rgba(59,130,246,0.4);
}
.viceCardHead {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}
.viceAvatar {
  font-size: 28px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.viceName {
  font-size: 13.5px;
  font-weight: 800;
  color: #fff;
  line-height: 1.25;
}
.viceTitle {
  font-size: 11px;
  color: var(--blue-soft);
  font-weight: 600;
}
.viceTraitBadge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  color: #34d399;
  background: rgba(16,185,129,0.15);
  border: 1px solid rgba(16,185,129,0.3);
  padding: 2px 7px;
  border-radius: 6px;
  margin-bottom: 4px;
}
.viceDesc {
  font-size: 11px;
  color: var(--gray-300);
  line-height: 1.4;
}

/* ==================== UNDO BAR & COMPACT FOCUS MODE ==================== */
.undoAlertBar {
  background: linear-gradient(90deg, rgba(234,179,8,0.16), rgba(202,138,4,0.10));
  border: 1.5px solid rgba(234,179,8,0.45);
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  margin-bottom: 12px;
  animation: fadeIn 0.3s ease;
}
.undoAlertText {
  font-size: 12px;
  color: #fef08a;
  line-height: 1.35;
}
.undoActionBtn {
  background: #eab308;
  color: #000;
  font-size: 11.5px;
  font-weight: 800;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(234,179,8,0.4);
  transition: all 0.15s ease;
}
.undoActionBtn:hover {
  background: #facc15;
  transform: scale(1.03);
}

/* ==================== NEWSPAPER FRONT-PAGE VISUAL IMPACT CARD ==================== */
.newspaperCard {
  background: linear-gradient(180deg, #182030 0%, #0d131f 100%);
  border: 1.5px solid rgba(148,163,184,0.25);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  text-align: left;
  position: relative;
  overflow: hidden;
}
.newspaperHeader {
  border-bottom: 2px solid rgba(255,255,255,0.15);
  padding-bottom: 8px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newspaperMasthead {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: #f8fafc;
  text-transform: uppercase;
}
.newspaperEdition {
  font-size: 10px;
  color: var(--blue-soft);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.newspaperHeroBadge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.newspaperHeadline {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 16.5px;
  font-weight: 800;
  color: #fff;
  line-height: 1.35;
  margin-bottom: 10px;
}
.newspaperGraphicFrame {
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.newspaperVisualIcon {
  font-size: 40px;
  line-height: 1;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
}
.newspaperEditorialQuote {
  font-style: italic;
  font-size: 11.5px;
  color: var(--gray-300);
  line-height: 1.45;
  border-left: 2px solid var(--blue-soft);
  padding-left: 8px;
}

/* ==================== MUSRENBANG & OPEN BIDDING STYLES ==================== */
.musrenCard {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}
.musrenCard:hover {
  background: rgba(59,130,246,0.06);
  border-color: rgba(59,130,246,0.4);
}
.musrenCard.checked {
  background: rgba(16,185,129,0.1);
  border-color: rgba(16,185,129,0.5);
}
.musrenCheck {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 14px;
  color: #fff;
  flex-shrink: 0;
  margin-top: 2px;
}
.musrenCard.checked .musrenCheck {
  background: var(--green);
  border-color: var(--green);
}
.candidateBiddingCard {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.2s;
  text-align: left;
}
.candidateBiddingCard:hover {
  border-color: var(--blue);
  background: rgba(59,130,246,0.08);
}
.biddingBadge {
  font-size: 10px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
  display: inline-block;
  text-transform: uppercase;
}

/* ==================== LAYMAN GLOSSARY CARDS ==================== */
.laymanCard {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 12px 14px;
  margin-bottom: 10px;
  text-align: left;
}
.laymanTerm {
  font-size: 14px;
  font-weight: 800;
  color: #38bdf8;
  display: flex;
  align-items: center;
  gap: 6px;
}
.laymanFormal {
  font-size: 11px;
  color: var(--gray-400);
  margin-bottom: 4px;
}
.laymanSimple {
  font-size: 12px;
  color: #f1f5f9;
  line-height: 1.45;
}
"""
    if "viceGrid" not in html:
        style_end = html.find('</style>')
        html = html[:style_end] + css_to_add + html[style_end:]
        print("CSS added.")

    # ==================== 2. CANDIDATE SCREEN HTML ====================
    new_cand_screen = """<div class="overlayScreen" id="candidateScreen">
  <div class="overlayCard overlayCardWide glass" style="max-width:680px;text-align:left;">
    <div style="text-align:center;margin-bottom:12px;">
      <div class="stepEyebrow" data-i18n="step2_eyebrow">Langkah 2 dari 3</div>
      <div class="stepTitle" data-i18n="step2_title">Pasangan & Lawan Pilkada</div>
    </div>
    
    <!-- SECTION A: PILIH CALON WAKIL WALIKOTA -->
    <div style="margin-bottom:16px;">
      <div style="font-size:15px;font-weight:800;color:#fff;display:flex;align-items:center;gap:8px;">
        <span>👥</span> <span data-i18n="step2_vice_title">Pilih Calon Wakil Walikota Anda</span>
      </div>
      <p class="muted" style="font-size:12px;margin:4px 0 10px 0;" data-i18n="step2_vice_sub">
        Wakil Walikota mendampingi kepemimpinan Anda selama 5 tahun serta memberikan keahlian dan dukungan politik khusus:
      </p>
      <div class="viceGrid" id="viceGrid"></div>
    </div>

    <!-- SECTION B: LAWAN UTAMA PILKADA -->
    <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:14px;margin-bottom:14px;">
      <div style="font-size:14px;font-weight:800;color:var(--red);margin-bottom:6px;display:flex;align-items:center;gap:6px;">
        <span>⚔️</span> <span data-i18n="step2_opp_title">Lawan Utama Pilkada (Rivalitas Politik)</span>
      </div>
      <div id="opponentBannerWrap"></div>
      <div class="candGrid" id="candGridOthers" style="margin-top:10px;"></div>
    </div>

    <button class="bigBtn" id="btnToPromise" data-i18n="step2_btn_next" style="width:100%;">Lanjut Susun Janji Kampanye →</button>
  </div>
</div>"""

    html = re.sub(
        r'<div class="overlayScreen" id="candidateScreen">[\s\S]*?id="btnToPromise"[\s\S]*?</div>\s*</div>',
        new_cand_screen,
        html,
        count=1
    )
    print("Candidate screen HTML updated.")

    # ==================== 3. PROMISE SCREEN HTML ====================
    new_promise_screen = """<div class="overlayScreen" id="promiseScreen">
  <div class="overlayCard glass" style="max-width:640px;text-align:left;">
    <div style="text-align:center;margin-bottom:12px;">
      <div class="stepEyebrow" data-i18n="step3_eyebrow">Langkah 3 dari 3</div>
      <div class="stepTitle" data-i18n="step3_title">Janji Kampanye Prioritas (Pilih Tepat 3)</div>
      <p class="muted" data-i18n="step3_sub">Pilih tepat <b>3 janji kampanye prioritas</b> yang akan menjadi visi misi utama dan fokus belanja APBD Anda.</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
      <div class="promiseCounter" id="promiseCounter" style="margin:0;font-weight:800;color:var(--blue-soft);">0 / 3 janji dipilih</div>
      <button class="iconBtn" id="btnRerollPromises" onclick="rerollCampaignPromisesPool()" style="font-size:11px;padding:6px 12px;">🎲 Acak Opsi Janji</button>
    </div>
    <div class="promiseList" id="promiseList"></div>
    <button class="bigBtn" id="btnStartCampaign" data-i18n="step3_btn_next" style="width:100%;margin-top:14px;" disabled>🚩 Pilih Tepat 3 Janji Kampanye</button>
  </div>
</div>"""

    html = re.sub(
        r'<div class="overlayScreen" id="promiseScreen">[\s\S]*?id="btnStartCampaign"[\s\S]*?</div>\s*</div>',
        new_promise_screen,
        html,
        count=1
    )
    print("Promise screen HTML updated.")

    # ==================== 4. HUD & ACTION BUTTONS IN #APP ====================
    if 'id="hudViceItem"' not in html:
        hud_sat_marker = '<div class="hudItem">\n      <div class="hudLabel" data-i18n="hud_sat_label">Kepuasan Warga</div>'
        replacement_hud = """<div class="hudItem" id="hudViceItem">
      <div class="hudLabel" data-i18n="hud_vice_label">👥 Wawalkot</div>
      <div class="hudValue" id="hudViceName" style="font-size:12px;color:var(--blue-soft);">-</div>
    </div>
    <div class="hudItem">
      <div class="hudLabel" data-i18n="hud_sat_label">Kepuasan Warga</div>"""
        if hud_sat_marker in html:
            html = html.replace(hud_sat_marker, replacement_hud, 1)
            print("HUD Vice Mayor item added.")

    if 'id="btnUndoHud"' not in html:
        hud_actions_marker = '<button class="iconBtn" id="btnShowHamburger"'
        replacement_actions = """<button class="iconBtn" id="btnUndoHud" onclick="undoLastChoice()" style="display:none;background:rgba(234,179,8,0.22);color:#facc15;border-color:#eab308;font-weight:800;" data-i18n="btn_undo">↺ Batalkan Pilihan</button>
    <button class="iconBtn" id="btnToggleCleanMode" onclick="toggleCleanFocusMode()" style="background:rgba(255,255,255,0.06);color:#cbd5e1;font-weight:700;">👁️ Mode Ringkas</button>
    <button class="iconBtn" id="btnShowLaymanGuide" onclick="openLaymanGuideModal()" style="background:rgba(245,158,11,0.15);color:#fbbf24;border-color:rgba(245,158,11,0.4);font-weight:700;">💡 Istilah Awam</button>
    <button class="iconBtn" id="btnShowHamburger" """
        if hud_actions_marker in html:
            html = html.replace(hud_actions_marker, replacement_actions, 1)
            print("HUD action buttons added.")

    if 'id="undoAlertBar"' not in html:
        event_panel_marker = '<div id="eventCard"></div>'
        replacement_event_panel = """<div id="undoAlertBar" style="display:none;"></div>\n        <div id="eventCard"></div>"""
        if event_panel_marker in html:
            html = html.replace(event_panel_marker, replacement_event_panel, 1)
            print("undoAlertBar placeholder added.")

    if 'id="dashTitleRow"' not in html:
        dash_title_marker = '<div class="dashTitle" data-i18n="dash_title">Dashboard Kota Nusapura</div>'
        replacement_dash = """<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;" id="dashTitleRow">
          <div class="dashTitle" data-i18n="dash_title" style="margin:0;">Dashboard Kota Nusapura</div>
          <button class="iconBtn" id="btnDashToggle" onclick="toggleCleanFocusMode()" style="font-size:10.5px;padding:4px 8px;">Mode Ringkas</button>
        </div>"""
        if dash_title_marker in html:
            html = html.replace(dash_title_marker, replacement_dash, 1)
            print("Dashboard view toggle added.")

    # ==================== 5. ADD MODALS ====================
    modals_to_add = """
<!-- ==================== MODAL: MUSRENBANG USULAN WARGA ==================== -->
<div class="modalOverlay" id="musrenbangModal">
  <div class="modalBox fullModal" role="dialog" aria-modal="true">
    <div class="modalHeaderRow">
      <button class="backMenuBtn" onclick="returnFromSubModal('musrenbangModal')">← Kembali</button>
      <div class="modalHeaderTitleGroup">
        <h2 data-i18n="musren_modal_title">🤝 Musrenbang Usulan Warga Kota</h2>
        <p class="muted" data-i18n="musren_modal_sub">Musyawarah Perencanaan Pembangunan: Tentukan usulan prioritas warga 4 kecamatan yang akan diakomodir APBD.</p>
      </div>
      <button class="closeX" aria-label="Tutup" onclick="returnFromSubModal('musrenbangModal')">✕</button>
    </div>
    <div id="musrenbangModalBody" class="v3List"></div>
    <div class="modalFooterRow" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
      <div id="musrenbangBudgetInfo" style="font-size:12px;color:var(--gray-300);"></div>
      <div style="display:flex;gap:8px;">
        <button class="bigBtn secondary" onclick="returnFromSubModal('musrenbangModal')">Tutup</button>
        <button class="bigBtn" id="btnExecuteMusrenbang" onclick="executeMusrenbang()">✅ Akomodir Usulan Terpilih</button>
      </div>
    </div>
  </div>
</div>

<!-- ==================== MODAL: SELEKSI TERBUKA KADIS OPD ==================== -->
<div class="modalOverlay" id="openBiddingModal">
  <div class="modalBox fullModal" role="dialog" aria-modal="true">
    <div class="modalHeaderRow">
      <button class="backMenuBtn" onclick="closeOpenBiddingModal()">← Kembali ke Kabinet</button>
      <div class="modalHeaderTitleGroup">
        <h2 id="openBiddingTitle">🎯 Seleksi Terbuka Kepala Dinas</h2>
        <p class="muted" id="openBiddingSub">Pilih pejabat terbaik dari 3 profil latar belakang yang berbeda untuk memimpin dinas.</p>
      </div>
      <button class="closeX" aria-label="Tutup" onclick="closeOpenBiddingModal()">✕</button>
    </div>
    <div id="openBiddingBody" class="v3List"></div>
  </div>
</div>

<!-- ==================== MODAL: PANDUAN ISTILAH AWAM ==================== -->
<div class="modalOverlay" id="laymanModal">
  <div class="modalBox fullModal" role="dialog" aria-modal="true">
    <div class="modalHeaderRow">
      <button class="backMenuBtn" onclick="returnFromSubModal('laymanModal')">← Kembali</button>
      <div class="modalHeaderTitleGroup">
        <h2 data-i18n="layman_modal_title">💡 Panduan Istilah Awam Tata Kelola</h2>
        <p class="muted" data-i18n="layman_modal_sub">Penjelasan santai istilah birokrasi & APBD agar siapa saja paham tanpa perlu gelar pamong praja.</p>
      </div>
      <button class="closeX" aria-label="Tutup" onclick="returnFromSubModal('laymanModal')">✕</button>
    </div>
    <div id="laymanModalBody" class="v3List"></div>
    <div class="modalFooterRow">
      <button class="bigBtn secondary" onclick="returnFromSubModal('laymanModal')" style="width:100%;">Mengerti, Kembali ke Permainan</button>
    </div>
  </div>
</div>
"""
    if 'id="musrenbangModal"' not in html:
        insert_marker = '<!-- ==================== MODAL: DPRD ==================== -->'
        if insert_marker in html:
            html = html.replace(insert_marker, modals_to_add + "\n" + insert_marker, 1)
            print("New modals inserted.")

    with open('app/src/main/assets/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Step 1 (HTML/CSS) done.")

if __name__ == '__main__':
    run()
