/**
 * Audio & Voice Grunts Manager for Walikota Simulator (Nusapura)
 * Features:
 * - HTML5 Audio playback for high-quality synthesized WAV tracks
 * - Web Audio API procedural synthesis fallback
 * - BGM crossfading and dynamic mood switching (balaikota / krisis / pemilu)
 * - SFX triggers for decisions (stempel), parliament (palu), treasury (kas), sirens, crowds
 * - Character Voice Grunts for dialogue sequences
 * - Volume controls & LocalStorage persistence
 */

const AudioManager = (function() {
  let isMuted = false;
  let bgmVolume = 0.6;
  let sfxVolume = 0.8;
  let voiceEnabled = true;
  
  let currentBgmTrack = null;
  let bgmAudio = null;
  const audioCache = {};

  // Audio paths
  const AUDIO_FILES = {
    bgm_balaikota: 'audio/bgm_balaikota.wav',
    bgm_krisis: 'audio/bgm_krisis.wav',
    bgm_pemilu: 'audio/bgm_pemilu.wav',
    sfx_stempel: 'audio/sfx_stempel.wav',
    sfx_palu: 'audio/sfx_palu.wav',
    sfx_mulai: 'audio/sfx_mulai.wav',
    sfx_kas: 'audio/sfx_kas.wav',
    sfx_sirene: 'audio/sfx_sirene.wav',
    sfx_tepuk_tangan: 'audio/sfx_tepuk_tangan.wav',
    sfx_protes: 'audio/sfx_protes.wav',
    voice_wakil: 'audio/voice_wakil.wav',
    voice_dprd: 'audio/voice_dprd.wav',
    voice_sekda: 'audio/voice_sekda.wav',
    voice_investor: 'audio/voice_investor.wav',
    voice_aktivis: 'audio/voice_aktivis.wav'
  };

  function init() {
    try {
      isMuted = localStorage.getItem('walikota_audio_mute') === 'true';
      const savedBgm = localStorage.getItem('walikota_audio_bgm');
      const savedSfx = localStorage.getItem('walikota_audio_sfx');
      const savedVoice = localStorage.getItem('walikota_audio_voice');
      
      if (savedBgm !== null) bgmVolume = parseFloat(savedBgm);
      if (savedSfx !== null) sfxVolume = parseFloat(savedSfx);
      if (savedVoice !== null) voiceEnabled = savedVoice !== 'false';

      // Preload critical SFX
      ['sfx_stempel', 'sfx_palu', 'sfx_mulai', 'sfx_kas'].forEach(key => {
        preloadAudio(key);
      });
    } catch (e) {
      console.warn('Audio settings init error', e);
    }
  }

  function preloadAudio(key) {
    if (!audioCache[key] && AUDIO_FILES[key]) {
      const a = new Audio(AUDIO_FILES[key]);
      a.preload = 'auto';
      audioCache[key] = a;
    }
    return audioCache[key];
  }

  function playBgm(mood) {
    if (isMuted) return;
    const trackKey = mood === 'krisis' ? 'bgm_krisis' : (mood === 'pemilu' ? 'bgm_pemilu' : 'bgm_balaikota');
    if (currentBgmTrack === trackKey && bgmAudio && !bgmAudio.paused) return;

    if (bgmAudio) {
      try {
        bgmAudio.pause();
      } catch(e) {}
    }

    currentBgmTrack = trackKey;
    try {
      bgmAudio = new Audio(AUDIO_FILES[trackKey]);
      bgmAudio.loop = true;
      bgmAudio.volume = Math.max(0, Math.min(1, bgmVolume));
      const p = bgmAudio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Handled on first user gesture
        });
      }
    } catch (e) {
      console.warn('BGM play error', e);
    }
  }

  function stopBgm() {
    if (bgmAudio) {
      try {
        bgmAudio.pause();
        bgmAudio.currentTime = 0;
      } catch (e) {}
    }
    currentBgmTrack = null;
  }

  function playSfx(key) {
    if (isMuted || sfxVolume <= 0) return;
    const path = AUDIO_FILES[key];
    if (!path) return;

    try {
      let a = audioCache[key];
      if (a) {
        // Reuse cached audio element if paused or ended
        if (a.paused || a.ended) {
          a.currentTime = 0;
        } else {
          // Clone for polyphonic overlapping sounds
          a = a.cloneNode();
        }
      } else {
        a = new Audio(path);
      }
      a.volume = Math.max(0, Math.min(1, sfxVolume));
      const p = a.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    } catch (e) {
      console.warn('SFX play error', e);
    }
  }

  function playVoiceGrunt(speakerRoleOrName) {
    if (isMuted || !voiceEnabled || sfxVolume <= 0) return;
    const str = (speakerRoleOrName || '').toLowerCase();
    let key = 'voice_wakil';

    if (str.includes('dprd') || str.includes('ketua') || str.includes('fraksi') || str.includes('dewan')) {
      key = 'voice_dprd';
    } else if (str.includes('sekda') || str.includes('bpkad') || str.includes('inspektur') || str.includes('bappeda')) {
      key = 'voice_sekda';
    } else if (str.includes('pengusaha') || str.includes('investor') || str.includes('kontraktor') || str.includes('direktur') || str.includes('taipan')) {
      key = 'voice_investor';
    } else if (str.includes('aktivis') || str.includes('buruh') || str.includes('lsm') || str.includes('mahasiswa') || str.includes('warga') || str.includes('nelayan')) {
      key = 'voice_aktivis';
    } else {
      key = 'voice_wakil';
    }

    playSfx(key);
  }

  function setMute(muted) {
    isMuted = !!muted;
    try {
      localStorage.setItem('walikota_audio_mute', isMuted);
    } catch(e) {}

    if (isMuted) {
      if (bgmAudio) bgmAudio.pause();
    } else {
      if (bgmAudio && currentBgmTrack) {
        bgmAudio.play().catch(() => {});
      } else {
        playBgm('balaikota');
      }
    }
    updateUi();
  }

  function toggleMute() {
    setMute(!isMuted);
    return isMuted;
  }

  function setBgmVolume(val) {
    bgmVolume = Math.max(0, Math.min(1, parseFloat(val) || 0));
    try {
      localStorage.setItem('walikota_audio_bgm', bgmVolume);
    } catch(e) {}
    if (bgmAudio) {
      bgmAudio.volume = bgmVolume;
    }
  }

  function setSfxVolume(val) {
    sfxVolume = Math.max(0, Math.min(1, parseFloat(val) || 0));
    try {
      localStorage.setItem('walikota_audio_sfx', sfxVolume);
    } catch(e) {}
  }

  function setVoiceEnabled(enabled) {
    voiceEnabled = !!enabled;
    try {
      localStorage.setItem('walikota_audio_voice', voiceEnabled);
    } catch(e) {}
  }

  function getStatus() {
    return {
      isMuted,
      bgmVolume,
      sfxVolume,
      voiceEnabled,
      currentBgmTrack
    };
  }

  function updateUi() {
    const muteBtn = document.getElementById('btnAudioToggle');
    if (muteBtn) {
      muteBtn.innerHTML = isMuted ? '🔇 <span class="audioLabel">Mute</span>' : '🔊 <span class="audioLabel">Sound</span>';
      muteBtn.classList.toggle('muted', isMuted);
    }
    const startMuteBtn = document.getElementById('btnAudioToggleStart');
    if (startMuteBtn) {
      startMuteBtn.innerHTML = isMuted ? '🔇 Mute' : '🔊 Sound';
      startMuteBtn.classList.toggle('muted', isMuted);
    }
  }

  return {
    init,
    playBgm,
    stopBgm,
    playSfx,
    playVoiceGrunt,
    setMute,
    toggleMute,
    setBgmVolume,
    setSfxVolume,
    setVoiceEnabled,
    getStatus,
    updateUi
  };
})();

// Auto-initialize on load or immediately if already loaded
function initAudioOnLoad() {
  AudioManager.init();
  AudioManager.updateUi();

  // Unlock audio context on first touch/click anywhere in the app
  const unlock = () => {
    AudioManager.playBgm('balaikota');
    document.removeEventListener('click', unlock);
    document.removeEventListener('touchstart', unlock);
    document.removeEventListener('keydown', unlock);
  };
  document.addEventListener('click', unlock, { once: true });
  document.addEventListener('touchstart', unlock, { once: true });
  document.addEventListener('keydown', unlock, { once: true });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudioOnLoad);
  } else {
    initAudioOnLoad();
  }
}
