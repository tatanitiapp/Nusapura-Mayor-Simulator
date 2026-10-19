#!/usr/bin/env python3
"""
Generates 12 High-Definition Vector Artworks for the 12 Epilogues / Endings of Walikota Simulator
Saved into app/src/main/assets/images/
"""
import os

TARGET_DIR = os.path.abspath("app/src/main/assets/images")
os.makedirs(TARGET_DIR, exist_ok=True)

def create_negarawan_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#312E81"/>
      <stop offset="85%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <radialGradient id="sun" cx="50%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#FEF08A" stop-opacity="1"/>
      <stop offset="40%" stop-color="#F59E0B" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#C2410C" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="450" fill="url(#sky)"/>
  <circle cx="400" cy="320" r="280" fill="url(#sun)"/>
  
  <!-- Distant Skyline -->
  <path d="M 50 400 L 50 260 L 80 260 L 80 240 L 110 240 L 110 320 L 140 320 L 140 220 L 180 220 L 180 400 Z" fill="#1E1B4B" opacity="0.6"/>
  <path d="M 620 400 L 620 230 L 660 230 L 660 280 L 700 280 L 700 210 L 730 210 L 730 400 Z" fill="#1E1B4B" opacity="0.6"/>

  <!-- Grand City Hall (Balaikota Agung) -->
  <polygon points="400,110 240,190 560,190" fill="url(#gold)"/>
  <rect x="250" y="190" width="300" height="20" fill="#78350F"/>
  <g fill="#FEF3C7">
    <rect x="270" y="210" width="22" height="150" rx="4"/>
    <rect x="312" y="210" width="22" height="150" rx="4"/>
    <rect x="354" y="210" width="22" height="150" rx="4"/>
    <rect x="424" y="210" width="22" height="150" rx="4"/>
    <rect x="466" y="210" width="22" height="150" rx="4"/>
    <rect x="508" y="210" width="22" height="150" rx="4"/>
  </g>
  <path d="M 385 240 Q 400 220 415 240 L 415 360 L 385 360 Z" fill="#451A03"/>
  <rect x="220" y="360" width="360" height="40" fill="#92400E"/>
  <rect x="180" y="400" width="440" height="30" fill="#78350F"/>

  <!-- Golden Laurels & Emblems -->
  <circle cx="400" cy="160" r="18" fill="#FEF3C7" stroke="#92400E" stroke-width="3"/>
  <path d="M 392 160 L 400 152 L 408 160 L 400 168 Z" fill="#B45309"/>

  <!-- Banner Base -->
  <rect x="0" y="420" width="800" height="30" fill="#0F172A"/>
  <text x="400" y="440" text-anchor="middle" fill="#FDE68A" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 1: SANG NEGARAWAN AGUNG • NUSAPURA MAKMUR
  </text>
</svg>"""

def create_teknokrat_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="techSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="60%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="cyberGrid" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#techSky)"/>

  <!-- Smart High-Rise Glass Towers -->
  <rect x="80" y="140" width="80" height="270" fill="#0C4A6E" stroke="#38BDF8" stroke-width="1.5"/>
  <rect x="190" y="90" width="100" height="320" fill="#075985" stroke="#38BDF8" stroke-width="2"/>
  <rect x="520" y="110" width="90" height="300" fill="#075985" stroke="#38BDF8" stroke-width="2"/>
  <rect x="640" y="160" width="80" height="250" fill="#0C4A6E" stroke="#38BDF8" stroke-width="1.5"/>

  <!-- Digital Grid Glow on Center Spire -->
  <polygon points="400,50 350,140 450,140" fill="#0284C7" stroke="#E0F2FE" stroke-width="2"/>
  <rect x="360" y="140" width="80" height="270" fill="#0369A1" stroke="#38BDF8" stroke-width="2"/>
  <line x1="400" y1="20" x2="400" y2="50" stroke="#38BDF8" stroke-width="4"/>
  <circle cx="400" cy="20" r="5" fill="#38BDF8"/>

  <!-- High-Speed LRT Viaduct Bridge -->
  <path d="M 0 320 Q 400 290 800 320 L 800 345 Q 400 315 0 345 Z" fill="#0369A1"/>
  <line x1="0" y1="320" x2="800" y2="320" stroke="#38BDF8" stroke-width="3"/>
  <!-- LRT Train Car -->
  <rect x="340" y="295" width="130" height="20" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="2"/>
  <rect x="355" y="300" width="25" height="8" rx="2" fill="#0284C7"/>
  <rect x="390" y="300" width="25" height="8" rx="2" fill="#0284C7"/>
  <rect x="425" y="300" width="25" height="8" rx="2" fill="#0284C7"/>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#082F49"/>
  <text x="400" y="440" text-anchor="middle" fill="#BAE6FD" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 3: TEKNOKRAT MODERN • KOTA CERDAS BERKELANJUTAN
  </text>
</svg>"""

def create_bapak_pembangunan_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="sunset" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="45%" stop-color="#431407"/>
      <stop offset="80%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#FBBF24"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#sunset)"/>
  
  <!-- Sea / Deepwater Harbour Base -->
  <rect x="0" y="340" width="800" height="110" fill="#082F49"/>
  <path d="M 0 340 Q 200 335 400 340 T 800 340 L 800 450 L 0 450 Z" fill="#0C4A6E" opacity="0.7"/>

  <!-- Mega Sea Port Container Gantry Cranes -->
  <!-- Crane 1 -->
  <g stroke="#F97316" stroke-width="4" fill="none">
    <line x1="140" y1="360" x2="190" y2="180"/>
    <line x1="260" y1="360" x2="210" y2="180"/>
    <line x1="120" y1="180" x2="330" y2="180"/>
    <line x1="120" y1="180" x2="200" y2="130"/>
    <line x1="330" y1="180" x2="200" y2="130"/>
  </g>
  <!-- Crane 2 -->
  <g stroke="#EA580C" stroke-width="4" fill="none">
    <line x1="480" y1="360" x2="530" y2="180"/>
    <line x1="600" y1="360" x2="550" y2="180"/>
    <line x1="460" y1="180" x2="670" y2="180"/>
    <line x1="460" y1="180" x2="540" y2="130"/>
    <line x1="670" y1="180" x2="540" y2="130"/>
  </g>

  <!-- Container Ship Cargo -->
  <polygon points="310,335 340,365 470,365 485,335" fill="#DC2626"/>
  <rect x="350" y="315" width="30" height="20" fill="#2563EB"/>
  <rect x="385" y="315" width="30" height="20" fill="#16A34A"/>
  <rect x="420" y="315" width="30" height="20" fill="#F59E0B"/>
  <rect x="365" y="295" width="30" height="20" fill="#F59E0B"/>
  <rect x="400" y="295" width="30" height="20" fill="#2563EB"/>

  <!-- Cable-Stayed Bridge in Distance -->
  <line x1="0" y1="280" x2="800" y2="280" stroke="#CBD5E1" stroke-width="2"/>
  <polygon points="70,160 65,280 75,280" fill="#94A3B8"/>
  <line x1="70" y1="170" x2="20" y2="280" stroke="#94A3B8" stroke-width="1.5"/>
  <line x1="70" y1="190" x2="40" y2="280" stroke="#94A3B8" stroke-width="1.5"/>
  <line x1="70" y1="170" x2="120" y2="280" stroke="#94A3B8" stroke-width="1.5"/>
  <line x1="70" y1="190" x2="100" y2="280" stroke="#94A3B8" stroke-width="1.5"/>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#1C1917"/>
  <text x="400" y="440" text-anchor="middle" fill="#FED7AA" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 2: BAPAK PEMBANGUNAN • KARYA MEGASTRUKTUR ABADI
  </text>
</svg>"""

def create_kpk_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="crimeSky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="60%" stop-color="#1E1B4B"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#crimeSky)"/>

  <!-- Emergency Flashers Red & Blue -->
  <circle cx="120" cy="80" r="140" fill="#EF4444" opacity="0.3"/>
  <circle cx="680" cy="80" r="140" fill="#3B82F6" opacity="0.3"/>

  <!-- Seal Investigation Tape Across Screen -->
  <g transform="rotate(-10 400 220)">
    <rect x="-100" y="190" width="1000" height="45" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
    <text x="400" y="222" text-anchor="middle" fill="#000000" font-family="'Impact', 'Arial Black', sans-serif" font-size="22" letter-spacing="8">
      DISEGEL PENEGAK HUKUM • PROSES INVESTIGASI OTT
    </text>
  </g>

  <!-- Evidence Dossier & Gavel -->
  <rect x="330" y="260" width="140" height="100" rx="6" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3"/>
  <rect x="350" y="275" width="100" height="10" fill="#EF4444"/>
  <rect x="350" y="295" width="70" height="6" fill="#64748B"/>
  <rect x="350" y="310" width="85" height="6" fill="#64748B"/>
  <rect x="350" y="325" width="50" height="6" fill="#64748B"/>
  <!-- Red Confidential Stamp -->
  <circle cx="420" cy="325" r="22" fill="none" stroke="#DC2626" stroke-width="3"/>
  <text x="420" y="330" text-anchor="middle" fill="#DC2626" font-family="sans-serif" font-weight="900" font-size="9">BARBUK</text>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#450A0A"/>
  <text x="400" y="440" text-anchor="middle" fill="#FECACA" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 7: TERJARING OPERASI TANGKAP TANGAN (OTT)
  </text>
</svg>"""

def create_dprd_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="dprdSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18181B"/>
      <stop offset="60%" stop-color="#27272A"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#dprdSky)"/>

  <!-- Council Chamber Rows -->
  <ellipse cx="400" cy="340" rx="360" ry="100" fill="#3F3F46" stroke="#52525B" stroke-width="4"/>
  <ellipse cx="400" cy="355" rx="310" ry="80" fill="#27272A" stroke="#52525B" stroke-width="3"/>
  
  <!-- Podium Speaker -->
  <rect x="340" y="180" width="120" height="110" fill="#713F12" stroke="#A16207" stroke-width="3"/>
  <polygon points="340,180 400,165 460,180" fill="#854D0E"/>
  <circle cx="400" cy="220" r="18" fill="#FEF08A" stroke="#CA8A04" stroke-width="2"/>

  <!-- Parliament Gavel with Impact Lines -->
  <g transform="translate(400, 110)">
    <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#92400E" stroke="#B45309" stroke-width="2"/>
    <rect x="-6" y="8" width="12" height="45" fill="#78350F"/>
    <line x1="-50" y1="-25" x2="-35" y2="-15" stroke="#FDE047" stroke-width="3"/>
    <line x1="50" y1="-25" x2="35" y2="-15" stroke="#FDE047" stroke-width="3"/>
  </g>

  <!-- Voting Board -->
  <rect x="250" y="30" width="300" height="50" rx="6" fill="#09090B" stroke="#DC2626" stroke-width="2"/>
  <text x="400" y="62" text-anchor="middle" fill="#EF4444" font-family="'Courier New', monospace" font-weight="900" font-size="20">
    MOSI MAKZUL: SETUJU (82%)
  </text>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#18181B"/>
  <text x="400" y="440" text-anchor="middle" fill="#FCA5A5" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 8: PEMAKZULAN SIDANG PARIPURNA DPRD
  </text>
</svg>"""

def create_bencana_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="stormSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="60%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#stormSky)"/>

  <!-- Violent Waves -->
  <path d="M 0 320 Q 150 250 300 320 T 600 310 T 800 330 L 800 450 L 0 450 Z" fill="#0E7490"/>
  <path d="M 0 350 Q 200 280 400 350 T 800 340 L 800 450 L 0 450 Z" fill="#0891B2" opacity="0.8"/>
  <path d="M 0 380 Q 250 310 500 380 T 800 370 L 800 450 L 0 450 Z" fill="#06B6D4" opacity="0.5"/>

  <!-- Submerged Seawall -->
  <polygon points="80,410 120,290 280,290 320,410" fill="#475569" stroke="#64748B" stroke-width="2"/>
  <line x1="200" y1="290" x2="200" y2="410" stroke="#DC2626" stroke-width="4" stroke-dasharray="10 10"/>

  <!-- Searchlight Beams -->
  <polygon points="720,160 250,380 400,380" fill="#FEF08A" opacity="0.25"/>

  <!-- Orange SAR Rescue Boat -->
  <polygon points="260,370 290,395 380,395 400,370" fill="#EA580C"/>
  <rect x="310" y="355" width="40" height="15" rx="3" fill="#F97316"/>
  <circle cx="330" cy="350" r="4" fill="#3B82F6"/>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#042F2E"/>
  <text x="400" y="440" text-anchor="middle" fill="#99F6E4" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 11: BENCANA ROB PESISIR MENENGGELAMKAN KOTA
  </text>
</svg>"""

def create_populis_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="festiveSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="50%" stop-color="#831843"/>
      <stop offset="85%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#FB7185"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#festiveSky)"/>

  <!-- Cheering Crowd Silhouettes -->
  <rect x="0" y="340" width="800" height="110" fill="#0F172A"/>
  <!-- Colorful Bunting Flags -->
  <path d="M 0 120 Q 200 170 400 130 T 800 120" stroke="#FDE047" stroke-width="2" fill="none"/>
  <polygon points="80,140 100,180 120,140" fill="#EF4444"/>
  <polygon points="160,150 180,190 200,150" fill="#3B82F6"/>
  <polygon points="240,145 260,185 280,145" fill="#10B981"/>
  <polygon points="320,135 340,175 360,135" fill="#F59E0B"/>
  <polygon points="480,135 500,175 520,135" fill="#8B5CF6"/>
  <polygon points="560,145 580,185 600,145" fill="#EC4899"/>
  <polygon points="640,150 660,190 680,150" fill="#14B8A6"/>

  <!-- Town Square Clock Tower -->
  <rect x="360" y="160" width="80" height="180" fill="#881337" stroke="#F43F5E" stroke-width="2"/>
  <polygon points="350,160 400,100 450,160" fill="#9F1239"/>
  <circle cx="400" cy="190" r="18" fill="#FFF1F2" stroke="#E11D48" stroke-width="2"/>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#4C0519"/>
  <text x="400" y="440" text-anchor="middle" fill="#FECDD3" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 4: POPULIS SEJATI • PAHLAWAN RAKYAT KECIL
  </text>
</svg>"""

def create_fiskal_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="vaultSky" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#022C22"/>
      <stop offset="60%" stop-color="#064E3B"/>
      <stop offset="100%" stop-color="#065F46"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#vaultSky)"/>

  <!-- Gold Vault Door Silhouette -->
  <circle cx="400" cy="220" r="140" fill="#047857" stroke="#FBBF24" stroke-width="6"/>
  <circle cx="400" cy="220" r="110" fill="#065F46" stroke="#F59E0B" stroke-width="3"/>
  <!-- Vault Wheel -->
  <circle cx="400" cy="220" r="30" fill="#FBBF24"/>
  <line x1="400" y1="130" x2="400" y2="310" stroke="#FBBF24" stroke-width="8"/>
  <line x1="310" y1="220" x2="490" y2="220" stroke="#FBBF24" stroke-width="8"/>

  <!-- BPK WTP Official Certificate Scroll -->
  <rect x="100" y="140" width="140" height="180" rx="8" fill="#FEF3C7" stroke="#CA8A04" stroke-width="3"/>
  <circle cx="170" cy="180" r="16" fill="#F59E0B"/>
  <text x="170" y="225" text-anchor="middle" fill="#78350F" font-family="'Impact', sans-serif" font-size="18">OPINI WTP</text>
  <text x="170" y="245" text-anchor="middle" fill="#92400E" font-family="sans-serif" font-weight="700" font-size="10">KAS SURPLUS</text>

  <!-- Base Banner -->
  <rect x="0" y="420" width="800" height="30" fill="#064E3B"/>
  <text x="400" y="440" text-anchor="middle" fill="#A7F3D0" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG 6: PENJAGA FISKAL & PREDIKAT WTP BERUNTUN
  </text>
</svg>"""

def create_generic_svg(filename, title, epilog_num, color1, color2, icon_text):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_{epilog_num}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{color1}"/>
      <stop offset="100%" stop-color="{color2}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg_{epilog_num})"/>
  <circle cx="400" cy="210" r="110" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
  <text x="400" y="240" text-anchor="middle" font-size="80">{icon_text}</text>
  <rect x="0" y="420" width="800" height="30" fill="#090D16"/>
  <text x="400" y="440" text-anchor="middle" fill="#E2E8F0" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="4">
    EPILOG {epilog_num}: {title.upper()}
  </text>
</svg>"""

def main():
    arts = {
        "epilogue_negarawan.svg": create_negarawan_svg(),
        "epilogue_teknokrat.svg": create_teknokrat_svg(),
        "epilogue_bapak_pembangunan.svg": create_bapak_pembangunan_svg(),
        "epilogue_populis.svg": create_populis_svg(),
        "epilogue_fiskal.svg": create_fiskal_svg(),
        "epilogue_kpk.svg": create_kpk_svg(),
        "epilogue_dprd.svg": create_dprd_svg(),
        "epilogue_bencana.svg": create_bencana_svg(),
        "epilogue_kompromi.svg": create_generic_svg("epilogue_kompromi.svg", "Raja Kompromi Politik", 5, "#1E1B4B", "#312E81", "🤝"),
        "epilogue_bangkrut.svg": create_generic_svg("epilogue_bangkrut.svg", "Kota Bangkrut Defisit", 9, "#3F1D1D", "#7F1D1D", "📉"),
        "epilogue_kerusuhan.svg": create_generic_svg("epilogue_kerusuhan.svg", "Mogok Massal & Kerusuhan", 10, "#451A03", "#78350F", "🔥"),
        "epilogue_satu_periode.svg": create_generic_svg("epilogue_satu_periode.svg", "Karier Mentok Satu Periode", 12, "#18181B", "#3F3F46", "📦"),
    }
    
    for fname, content in arts.items():
        path = os.path.join(TARGET_DIR, fname)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content.strip())
        print(f"Generated {fname}")

if __name__ == "__main__":
    main()
