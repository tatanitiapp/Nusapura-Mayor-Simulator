# -*- coding: utf-8 -*-
"""
Helper script to apply Akbar and Iqbal's gameplay, UX, and narrative improvements.
Features:
1. Vice Mayor (Wakil Walikota) Selection & Trait Buffs (Drs. Syarifuddin, dr. Anindya, Ir. Hendra, KH Mansyur)
2. Priority Campaign Promises fix: Strictly choose 3 (no more, no less), expanded & randomized promise pool
3. Accidental Tap Undo (↺ Batalkan Pilihan) & Confirmation protection
4. Front-Page Newspaper Visual Card at Year-End Evaluation & Impact News
5. Seleksi Terbuka / Lelang Jabatan Kadis OPD (Pakar Murni vs Pamong IPDN vs Rekanan Parpol)
6. Interactive Parliamentary Hub & DPRD Lobbying (Coffee Morning, Pokir, Pengesahan APBD, BUMD Seats)
7. Interactive Musrenbang Usulan Warga (Akomodasi usulan prioritas 4 kecamatan)
8. UI Simplification, Clean Focus Mode toggle, and Layman Governance Terms Guide (Panduan Istilah Awam)
9. 100% Bilingual support (Bahasa Indonesia & English)
"""

import re
import sys

def main():
    with open('app/src/main/assets/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    print("Original length:", len(html))

    # 1. ADD CSS STYLES
    css_addition = """
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
  background: linear-gradient(90deg, rgba(234,179,8,0.15), rgba(202,138,4,0.08));
  border: 1px solid rgba(234,179,8,0.4);
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
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
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: #f8fafc;
  text-transform: uppercase;
}
.newspaperEdition {
  font-size: 10.5px;
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
  font-size: 17px;
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

    # Inject CSS before </style>
    style_end = html.find('</style>')
    if style_end != -1:
        html = html[:style_end] + css_addition + html[style_end:]
        print("CSS injected successfully.")

    # Write intermediate html
    with open('app/src/main/assets/index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
