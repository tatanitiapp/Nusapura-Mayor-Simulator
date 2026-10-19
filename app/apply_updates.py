import re

with open('app/src/main/assets/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update dynamicNewsDict in getLocalizedNewsString
old_str = """    [/^Walikota menginstruksikan penerjunan darurat unit (.+)\\.?/i, 'Mayor ordered emergency deployment of $1 disaster response unit.'],
    [/^Konferensi Pers selesai dengan predikat (.+)\\.?/i, 'City Hall press conference concluded with grade $1.']"""

new_str = """    [/^Walikota menginstruksikan penerjunan darurat unit (.+)\\.?/i, 'Mayor ordered emergency deployment of $1 disaster response unit.'],
    [/^Konferensi Pers selesai dengan predikat (.+)\\.?/i, 'City Hall press conference concluded with grade $1.'],
    [/^📢 Serikat Buruh menggelar aksi demonstrasi menolak kebijakan pemkot/i, '📢 Labor Unions staged protests rejecting municipal policies!'],
    [/^💸 Konsorsium Investor menunda investasi proyek baru/i, '💸 Investor Consortium delayed new project investments!'],
    [/^🔍 LSM merilis laporan investigasi kritik transparansi Pemkot/i, '🔍 NGOs released an investigative report criticizing City Hall transparency!'],
    [/^📜 BPK menerbitkan LHP Opini WDP terkait ketidaksesuaian kas/i, '📜 Supreme Audit Agency (BPK) issued a Qualified Opinion audit report!'],
    [/^🚨 Tensi sosial meningkat akibat minimnya koordinasi keamanan/i, '🚨 Social tensions escalated due to lack of security coordination!'],
    [/^📜 Kelompok (.+) menerbitkan petisi keprihatinan atas kebijakan pemkot/i, '📜 The $1 group published a petition of concern regarding municipal policies!'],
    [/^⚠️ Hubungan buruk dengan (.+) memicu tekanan politik ke Balaikota/i, '⚠️ Strained relations with $1 triggered political friction against City Hall!']"""

if old_str in text:
    text = text.replace(old_str, new_str, 1)
    print("Updated dynamicNewsDict.")
else:
    print("Warning: old_str not found in dynamicNewsDict.")

# 2. Update triggerHostileActorBacklash
old_backlash = """  let text = '';
  let satPenalty = 3;
  if (randActor === 'SerikatBuruh') {
    text = '📢 Serikat Buruh menggelar aksi demonstrasi menolak kebijakan pemkot! Kepuasan Warga -4% & Pengangguran +2%';
    if (state.stats) state.stats.unemp = Math.min(100, (state.stats.unemp || 7) + 2);
    satPenalty = 4;
  } else if (randActor === 'Investor') {
    text = '💸 Konsorsium Investor menunda investasi proyek baru! Investasi -5 & PAD -0.3 T';
    if (state.stats) state.stats.inv = Math.max(0, (state.stats.inv || 50) - 5);
    state.pad = Math.max(0.5, Math.round((state.pad - 0.3) * 10) / 10);
  } else if (randActor === 'LSM') {
    text = '🔍 LSM merilis laporan investigasi kritik transparansi Pemkot! Kepuasan Warga -4%';
    satPenalty = 4;
  } else if (randActor === 'BPK') {
    text = '📜 BPK menerbitkan LHP Opini WDP terkait ketidaksesuaian kas! APBD -0.4 T & Kepuasan -3%';
    state.apbd = Math.max(1, Math.round((state.apbd - 0.4) * 10) / 10);
  } else if (randActor === 'Polri') {
    text = '🚨 Tensi sosial meningkat akibat minimnya koordinasi keamanan! Kriminalitas +4%';
    if (state.stats) state.stats.crime = Math.min(100, (state.stats.crime || 50) + 4);
  } else if (randActor === 'TokohAdat' || randActor === 'Ormas') {
    text = `📜 Kelompok ${actInfo.name} menerbitkan petisi keprihatinan atas kebijakan pemkot! Kepuasan Warga -3%`;
  } else {
    text = `⚠️ Hubungan buruk dengan ${actInfo.name} memicu tekanan politik ke Balaikota! Kepuasan -3%`;
  }

  state.sat = Math.max(0, state.sat - satPenalty);
  showToast(`⚡ TEKANAN OPOSISI: ${text}`);
  if (!state.news) state.news = [];
  state.news.push({ year: `Thn ${state.year}`, text: text, mood: -1 });"""

new_backlash = """  let text = '';
  let text_en = '';
  let satPenalty = 3;
  const actNameEn = actInfo.name_en || actInfo.name;
  if (randActor === 'SerikatBuruh') {
    text = '📢 Serikat Buruh menggelar aksi demonstrasi menolak kebijakan pemkot! Kepuasan Warga -4% & Pengangguran +2%';
    text_en = '📢 Labor Unions staged protests rejecting city hall policies! Citizen Approval -4% & Unemployment +2%';
    if (state.stats) state.stats.unemp = Math.min(100, (state.stats.unemp || 7) + 2);
    satPenalty = 4;
  } else if (randActor === 'Investor') {
    text = '💸 Konsorsium Investor menunda investasi proyek baru! Investasi -5 & PAD -0.3 T';
    text_en = '💸 Investor Consortium delayed new project investments! Investment -5 & PAD -0.3 T';
    if (state.stats) state.stats.inv = Math.max(0, (state.stats.inv || 50) - 5);
    state.pad = Math.max(0.5, Math.round((state.pad - 0.3) * 10) / 10);
  } else if (randActor === 'LSM') {
    text = '🔍 LSM merilis laporan investigasi kritik transparansi Pemkot! Kepuasan Warga -4%';
    text_en = '🔍 NGOs published an investigative report criticizing City Hall transparency! Citizen Approval -4%';
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
  });"""

if old_backlash in text:
    text = text.replace(old_backlash, new_backlash, 1)
    print("Updated triggerHostileActorBacklash.")
else:
    print("Warning: old_backlash not found.")

# 3. Update state.social.push in handleChoiceClick
old_soc_push = """  const randomHandles = ['@WargaNusapura', '@SuaraPublik', '@AktivisKota', '@NetizenJujur', '@PedagangKota', '@AnakMudaNusa', '@DriverOnline', '@IbuRT_Kota'];
  const randomAvatars = ['👨', '👩', '🧑', '👵', '👨‍💼', '👩‍🔬', '🚴', '👨‍🏫'];
  const randH = randomHandles[Math.floor(Math.random() * randomHandles.length)];
  const randA = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
  const isPositive = (choice.mood != null ? choice.mood : 0) > 0 || (choice.fx && choice.fx.sat > 0);
  const isNegative = (choice.mood != null ? choice.mood : 0) < 0 || (choice.fx && choice.fx.sat < 0);
  const postSentiment = isPositive ? (Math.random() > 0.5 ? '👍' : '🤩') : (isNegative ? (Math.random() > 0.5 ? '😡' : '😤') : '💬');
  const postType = isPositive ? 'praise' : (isNegative ? (Math.random() > 0.5 ? 'anger' : 'complaint') : 'neutral');
  const postId = 'soc_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
  state.social.push({
    id: postId,
    avatar: randA,
    handle: randH,
    sentiment: postSentiment,
    type: postType,
    text: `${choice.d} ${postSentiment}`,
    text_en: `${choiceDescEn} ${postSentiment}`,
    handled: !isNegative,
    statusText: isNegative ? '' : '👍 Diapresiasi warga',
    statusText_en: isNegative ? '' : '👍 Appreciated by citizens'
  });"""

new_soc_push = """  const randomHandles = ['@WargaNusapura', '@SuaraPublik', '@AktivisKota', '@NetizenJujur', '@PedagangKota', '@AnakMudaNusa', '@DriverOnline', '@IbuRT_Kota'];
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
  });"""

if old_soc_push in text:
    text = text.replace(old_soc_push, new_soc_push, 1)
    print("Updated state.social.push.")
else:
    print("Warning: old_soc_push not found.")

# 4. Update Megastructure news
old_mega_news = """    if (!state.news) state.news = [];
    state.news.unshift({ year: `Thn ${state.year}`, text: `Proyek raksasa ${proj.name} resmi selesai dikerjakan & beroperasi!`, mood: 1 });"""

new_mega_news = """    if (!state.news) state.news = [];
    const projNameEn = proj.name_en || proj.name;
    state.news.unshift({
      year: `Thn ${state.year}`,
      year_en: `Yr ${state.year}`,
      text: `Proyek raksasa ${proj.name} resmi selesai dikerjakan & beroperasi!`,
      text_en: `Megaproject ${projNameEn} is officially completed and operational!`,
      mood: 1
    });"""

if old_mega_news in text:
    text = text.replace(old_mega_news, new_mega_news, 1)
    print("Updated megastructure news.")
else:
    print("Warning: old_mega_news not found.")

# 5. Update Emergency news
old_emerg_news = """  if (!state.news) state.news = [];
  state.news.unshift({ year: `Thn ${state.year}`, text: `Walikota menginstruksikan penerjunan darurat unit ${type.toUpperCase()}.`, mood: 1 });"""

new_emerg_news = """  if (!state.news) state.news = [];
  state.news.unshift({
    year: `Thn ${state.year}`,
    year_en: `Yr ${state.year}`,
    text: `Walikota menginstruksikan penerjunan darurat unit ${type.toUpperCase()}.`,
    text_en: `Mayor instructed emergency deployment of ${type.toUpperCase()} disaster response unit.`,
    mood: 1
  });"""

if old_emerg_news in text:
    text = text.replace(old_emerg_news, new_emerg_news, 1)
    print("Updated emergency news.")
else:
    print("Warning: old_emerg_news not found.")

with open('app/src/main/assets/index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done saving index.html.")
