#!/usr/bin/env python3
"""
Audio Generator for Walikota Simulator (Nusapura)
Synthesizes professional 16-bit 44.1kHz stereo audio tracks:
- BGM 1: Balaikota Theme (ambient gamelan & orchestral strings loop)
- BGM 2: Krisis Politik & Darurat (tense percussion & dramatic drone)
- BGM 3: Pemilu & Kemenangan (celebratory fanfare & festive bells)
- SFX: Stempel Basah, Palu Paripurna, Kas Perbendaharaan, Sirene Darurat, Tepuk Tangan, Suara Demo
- Voice Grunts: Wakil Walikota, Ketua DPRD, Sekda, Investor, Aktivis LSM
"""
import os
import wave
import struct
import math
import random

SAMPLE_RATE = 44100

def write_wav(filepath, audio_left, audio_right):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    num_samples = len(audio_left)
    with wave.open(filepath, 'w') as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(SAMPLE_RATE)
        frames = bytearray()
        for i in range(num_samples):
            l = max(-32767, min(32767, int(audio_left[i] * 32767)))
            r = max(-32767, min(32767, int(audio_right[i] * 32767)))
            frames.extend(struct.pack('<hh', l, r))
        wav.writeframes(frames)
    size_mb = os.path.getsize(filepath) / (1024 * 1024)
    print(f"Generated {filepath}: {size_mb:.2f} MB")

def gen_bgm_balaikota(duration=20.0):
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    
    # Noble, uplifting civic progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4 -> G
    # Beautiful diatonic frequencies (Hz):
    # C major chords: C3, G3, B3, E4, D4
    # A minor chords: A2, E3, G3, C4, B4
    # F major chords: F2, C3, A3, E4, G4
    # G major chords: G2, D3, G3, B3, D4
    chord_prog = [
        {"bass": 130.81, "pad": [261.63, 329.63, 392.00, 493.88], "arps": [523.25, 659.25, 783.99, 587.33]}, # Cmaj9
        {"bass": 110.00, "pad": [220.00, 261.63, 329.63, 392.00], "arps": [440.00, 523.25, 659.25, 493.88]}, # Am9
        {"bass": 87.31,  "pad": [174.61, 261.63, 349.23, 440.00], "arps": [349.23, 440.00, 523.25, 659.25]}, # Fmaj7
        {"bass": 98.00,  "pad": [196.00, 246.94, 293.66, 392.00], "arps": [392.00, 493.88, 587.33, 783.99]}  # Gadd9
    ]
    chord_duration = 5.0 # 4 chords * 5s = 20.0s loop
    
    # Layer 1: Warm orchestral strings & cello pad (smooth, rich, dignified)
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        prog_idx = int((t / chord_duration) % len(chord_prog))
        chord = chord_prog[prog_idx]
        
        # Bass cello warmth
        bass_freq = chord["bass"]
        bass = (math.sin(2 * math.pi * bass_freq * t) * 0.16 +
                math.sin(2 * math.pi * bass_freq * 2 * t) * 0.08 +
                math.sin(2 * math.pi * bass_freq * 3 * t) * 0.03)
        
        # String ensemble harmony
        strings = 0.0
        for idx, f in enumerate(chord["pad"]):
            detune = 1.0 + 0.002 * math.sin(t * 0.8 + idx)
            strings += (math.sin(2 * math.pi * f * detune * t) * 0.045 +
                        math.sin(2 * math.pi * f * 2 * t) * 0.015)
        
        # Gentle stereo motion
        pan_l = 0.75 + 0.15 * math.sin(2 * math.pi * 0.1 * t)
        pan_r = 0.75 + 0.15 * math.cos(2 * math.pi * 0.1 * t)
        
        left[i] += (bass + strings) * pan_l
        right[i] += (bass + strings) * pan_r
        
    # Layer 2: Warm grand piano chords (stately civic cadence)
    piano_interval = 2.5 # hit every half-chord
    num_piano_hits = int(duration / piano_interval)
    for h in range(num_piano_hits):
        t_hit = h * piano_interval
        start_sample = int(t_hit * SAMPLE_RATE)
        prog_idx = int((t_hit / chord_duration) % len(chord_prog))
        chord = chord_prog[prog_idx]
        
        for idx, f in enumerate(chord["pad"] + [chord["bass"] * 2]):
            for j in range(int(3.2 * SAMPLE_RATE)):
                sample_idx = start_sample + j
                if sample_idx >= num_samples:
                    break
                dt = j / SAMPLE_RATE
                # Piano envelope: instant attack, natural acoustic exponential decay
                env = math.exp(-dt * 2.2) * (1.0 - math.exp(-dt * 250))
                # Natural harmonics
                piano_note = (math.sin(2 * math.pi * f * dt) * 0.07 +
                              math.sin(2 * math.pi * f * 2 * dt) * 0.03 +
                              math.sin(2 * math.pi * f * 3 * dt) * 0.012 +
                              math.sin(2 * math.pi * f * 4 * dt) * 0.005)
                sig = piano_note * env
                left[sample_idx] += sig * 0.8
                right[sample_idx] += sig * 0.8

    # Layer 3: Melodic gentle marimba / glockenspiel arpeggio (optimistic & pleasant civic pride)
    step_time = 0.3125 # ~96 BPM 16th notes
    num_arps = int(duration / step_time)
    for a in range(num_arps):
        t_arp = a * step_time
        start_sample = int(t_arp * SAMPLE_RATE)
        prog_idx = int((t_arp / chord_duration) % len(chord_prog))
        chord = chord_prog[prog_idx]
        note_idx = a % len(chord["arps"])
        note_freq = chord["arps"][note_idx]
        
        # Soft acoustic bell/marimba hit
        pan = 0.35 + 0.3 * (a % 3)
        decay = 1.0
        for j in range(int(decay * SAMPLE_RATE)):
            sample_idx = start_sample + j
            if sample_idx >= num_samples:
                break
            dt = j / SAMPLE_RATE
            env = math.exp(-dt * 6.5) * (1.0 - math.exp(-dt * 300))
            # Pure, sweet, warm wooden tone (pure harmonic sine)
            tone = (math.sin(2 * math.pi * note_freq * dt) * 0.045 +
                    math.sin(2 * math.pi * note_freq * 2 * dt) * 0.01)
            sig = tone * env
            left[sample_idx] += sig * (1.0 - pan)
            right[sample_idx] += sig * pan

    # Normalize to -1.5 dB (clean and comfortable volume)
    max_val = max(max(abs(x) for x in left), max(abs(x) for x in right), 0.001)
    scale = 0.72 / max_val
    return [x * scale for x in left], [x * scale for x in right]

def gen_bgm_krisis(duration=18.0):
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    
    # Tension drone in C minor
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Pulsing low sub drone
        pulse = 0.5 + 0.5 * math.sin(2 * math.pi * 1.6 * t)
        drone = (math.sin(2 * math.pi * 55.0 * t) * 0.25 +
                 math.sin(2 * math.pi * 65.4 * t) * 0.20 +
                 math.sin(2 * math.pi * 82.4 * t + 0.3) * 0.15) * pulse
        # Menacing filter sweep
        cutoff = 100 + 80 * math.sin(2 * math.pi * 0.1 * t)
        drone_filtered = drone * (1.0 + 0.3 * math.sin(2 * math.pi * cutoff * t))
        left[i] += drone_filtered * 0.7
        right[i] += drone_filtered * 0.7

    # Tension clock tick & deep war drums
    beat_interval = 0.5 # 120 BPM
    num_beats = int(duration / beat_interval)
    
    for b in range(num_beats):
        t_start = b * beat_interval
        start_sample = int(t_start * SAMPLE_RATE)
        
        # Heavy heartbeat/taiko on downbeats
        if b % 2 == 0:
            for j in range(int(0.6 * SAMPLE_RATE)):
                idx = start_sample + j
                if idx >= num_samples:
                    break
                t_hit = j / SAMPLE_RATE
                pitch = 90.0 * math.exp(-t_hit * 12.0)
                env = math.exp(-t_hit * 6.0)
                boom = math.sin(2 * math.pi * pitch * t_hit) * env * 0.5
                left[idx] += boom
                right[idx] += boom
                
        # Clock tick on every beat
        for j in range(int(0.08 * SAMPLE_RATE)):
            idx = start_sample + j
            if idx >= num_samples:
                break
            t_hit = j / SAMPLE_RATE
            env = math.exp(-t_hit * 60.0)
            noise = (random.random() * 2 - 1) * env * 0.15
            click = math.sin(2 * math.pi * 1800 * t_hit) * env * 0.2
            left[idx] += (noise + click) * 0.6
            right[idx] += (noise + click) * 0.6

    max_val = max(max(abs(x) for x in left), max(abs(x) for x in right), 0.001)
    scale = 0.78 / max_val
    return [x * scale for x in left], [x * scale for x in right]

def gen_bgm_pemilu(duration=16.0):
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    
    # Festive fanfare chords (C major -> F major -> G major -> C)
    chords = [
        [261.63, 329.63, 392.00, 523.25], # C
        [349.23, 440.00, 523.25, 698.46], # F
        [392.00, 493.88, 587.33, 783.99], # G
        [523.25, 659.25, 783.99, 1046.50] # C high
    ]
    
    chord_len = 4.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        chord_idx = int((t / chord_len) % len(chords))
        active_chord = chords[chord_idx]
        
        # Warm brass synth pad
        brass = 0.0
        for note in active_chord:
            brass += (math.sin(2 * math.pi * note * t) * 0.08 +
                      math.sin(2 * math.pi * note * 2 * t) * 0.04)
        left[i] += brass * (0.8 + 0.1 * math.sin(t * 3))
        right[i] += brass * (0.8 + 0.1 * math.cos(t * 3))

    # Upbeat celebration rhythm
    step = 0.25 # 120 BPM 16th notes
    num_steps = int(duration / step)
    for s in range(num_steps):
        t_start = s * step
        start_sample = int(t_start * SAMPLE_RATE)
        
        # Snare/percussion roll
        if s % 2 == 1:
            for j in range(int(0.12 * SAMPLE_RATE)):
                idx = start_sample + j
                if idx >= num_samples:
                    break
                t_snare = j / SAMPLE_RATE
                env = math.exp(-t_snare * 30.0)
                noise = (random.random() * 2 - 1) * env * 0.18
                left[idx] += noise * 0.7
                right[idx] += noise * 0.7

    max_val = max(max(abs(x) for x in left), max(abs(x) for x in right), 0.001)
    scale = 0.75 / max_val
    return [x * scale for x in left], [x * scale for x in right]

def gen_sfx_stempel():
    # Official paper stamp: paper flutter + crisp mechanical stamp impact & release
    duration = 0.55
    n = int(SAMPLE_RATE * duration)
    left = [0.0] * n
    right = [0.0] * n
    for i in range(n):
        t = i / SAMPLE_RATE
        whoosh = 0.0
        if t < 0.09:
            w_env = math.sin(math.pi * t / 0.09)
            whoosh = (random.random() * 2 - 1) * w_env * 0.15
        stamp = 0.0
        if t >= 0.08:
            dt = t - 0.08
            thud_env = math.exp(-dt * 32.0)
            thud_pitch = 180.0 * math.exp(-dt * 45.0) + 70.0
            thud = math.sin(2 * math.pi * thud_pitch * dt) * thud_env * 0.75
            click_env = math.exp(-dt * 130.0)
            click = (math.sin(2 * math.pi * 1400.0 * dt) * 0.3 + (random.random() * 2 - 1) * 0.35) * click_env
            release_env = math.exp(-dt * 18.0) * math.sin(math.pi * min(1.0, dt * 15.0))
            release = (random.random() * 2 - 1) * release_env * 0.12
            stamp = thud + click + release
        sig = whoosh + stamp
        left[i] = sig
        right[i] = sig
    max_val = max(max(abs(x) for x in left), 0.001)
    return [x * 0.85 / max_val for x in left], [x * 0.85 / max_val for x in right]

def gen_sfx_palu():
    # Parliamentary assembly gavel: oak impact transient, natural teak click, chamber reverb
    duration = 1.05
    n = int(SAMPLE_RATE * duration)
    left = [0.0] * n
    right = [0.0] * n
    for i in range(n):
        t = i / SAMPLE_RATE
        sub_pitch = 140.0 * math.exp(-t * 22.0) + 48.0
        sub_thump = math.sin(2 * math.pi * sub_pitch * t) * math.exp(-t * 18.0) * 0.75
        wood_click_env = math.exp(-t * 85.0)
        wood_click = (math.sin(2 * math.pi * 520.0 * t) * 0.45 +
                      math.sin(2 * math.pi * 880.0 * t) * 0.25 +
                      (random.random() * 2 - 1) * 0.35) * wood_click_env
        reverb_tail = (math.sin(2 * math.pi * 165.0 * t) * 0.35 +
                       math.sin(2 * math.pi * 245.0 * t) * 0.20 +
                       math.sin(2 * math.pi * 92.0 * t) * 0.25) * math.exp(-t * 5.2) * (1.0 - math.exp(-t * 60.0))
        sig_l = sub_thump + wood_click * 1.1 + reverb_tail * 0.85
        sig_r = sub_thump + wood_click * 0.9 + reverb_tail * 0.95
        left[i] = sig_l
        right[i] = sig_r
    max_val = max(max(abs(x) for x in left), max(abs(x) for x in right), 0.001)
    return [x * 0.85 / max_val for x in left], [x * 0.85 / max_val for x in right]

def gen_sfx_mulai():
    # Inspiring, ceremonial civic start chime (Genta / Bells Pelantikan)
    duration = 1.6
    n = int(SAMPLE_RATE * duration)
    left = [0.0] * n
    right = [0.0] * n
    bell_partials = [
        (261.63, 0.40, 1.8), # C4
        (523.25, 0.45, 2.4), # C5
        (659.25, 0.38, 2.7), # E5
        (783.99, 0.32, 3.0), # G5
        (987.77, 0.22, 3.4), # B5
        (1046.50, 0.18, 3.6),# C6
        (1174.66, 0.12, 3.8) # D6
    ]
    for i in range(n):
        t = i / SAMPLE_RATE
        sig_l = 0.0
        sig_r = 0.0
        for idx, (freq, amp, decay) in enumerate(bell_partials):
            env = math.exp(-t * decay) * (1.0 - math.exp(-t * 300.0))
            tone = math.sin(2 * math.pi * freq * t) + 0.15 * math.sin(2 * math.pi * freq * 2.01 * t)
            pan = 0.3 + 0.4 * (idx % 2)
            sig_l += tone * amp * env * (1.0 - pan)
            sig_r += tone * amp * env * pan
        left[i] = sig_l
        right[i] = sig_r
    max_val = max(max(abs(x) for x in left), max(abs(x) for x in right), 0.001)
    return [x * 0.85 / max_val for x in left], [x * 0.85 / max_val for x in right]

def gen_sfx_kas():
    # Treasury cash register & coins: bright cascading metal chimes
    duration = 1.2
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    
    coin_freqs = [1975.53, 2349.32, 2637.02, 3135.96, 3951.07]
    for idx_c, f in enumerate(coin_freqs):
        delay = idx_c * 0.07
        start_sample = int(delay * SAMPLE_RATE)
        for j in range(int(0.5 * SAMPLE_RATE)):
            idx = start_sample + j
            if idx >= num_samples:
                break
            t_coin = j / SAMPLE_RATE
            env = math.exp(-t_coin * 12.0)
            sig = (math.sin(2 * math.pi * f * t_coin) +
                   math.sin(2 * math.pi * f * 1.62 * t_coin) * 0.4) * env * 0.25
            pan = (idx_c / len(coin_freqs))
            left[idx] += sig * (1.0 - pan)
            right[idx] += sig * pan
            
    max_val = max(max(abs(x) for x in left), 0.001)
    return [x * 0.8 / max_val for x in left], [x * 0.8 / max_val for x in right]

def gen_sfx_sirene():
    # Emergency services two-tone wail siren
    duration = 2.0
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Siren pitch modulated between 650Hz and 1000Hz
        f = 825.0 + 175.0 * math.sin(2 * math.pi * 1.5 * t)
        phase = 2 * math.pi * (825.0 * t - (175.0 / (2 * math.pi * 1.5)) * math.cos(2 * math.pi * 1.5 * t))
        sig = (math.sin(phase) * 0.6 +
               math.sin(phase * 2) * 0.25 +
               math.sin(phase * 3) * 0.15) * 0.4
        left[i] = sig * (0.8 + 0.2 * math.sin(t * 2))
        right[i] = sig * (0.8 + 0.2 * math.cos(t * 2))
        
    max_val = max(max(abs(x) for x in left), 0.001)
    return [x * 0.8 / max_val for x in left], [x * 0.8 / max_val for x in right]

def gen_sfx_tepuk_tangan():
    # Room applause / claps
    duration = 2.2
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    random.seed(101)
    
    # Generate hundreds of micro claps
    for _ in range(600):
        t_clap = random.uniform(0.05, 2.0)
        start_sample = int(t_clap * SAMPLE_RATE)
        pan = random.random()
        intensity = random.uniform(0.04, 0.18) * math.sin(math.pi * t_clap / 2.0)
        for j in range(int(0.03 * SAMPLE_RATE)):
            idx = start_sample + j
            if idx >= num_samples:
                break
            t_c = j / SAMPLE_RATE
            env = math.exp(-t_c * 150.0)
            noise = (random.random() * 2 - 1) * env * intensity
            left[idx] += noise * (1.0 - pan)
            right[idx] += noise * pan

    max_val = max(max(abs(x) for x in left), 0.001)
    return [x * 0.82 / max_val for x in left], [x * 0.82 / max_val for x in right]

def gen_sfx_protes():
    # Protest murmurs and angry crowd chant
    duration = 2.4
    num_samples = int(SAMPLE_RATE * duration)
    left = [0.0] * num_samples
    right = [0.0] * num_samples
    
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Low rumble and boos
        rumble = (math.sin(2 * math.pi * 95.0 * t) + math.sin(2 * math.pi * 115.0 * t)) * 0.2
        # Modulation imitating crowd chants
        crowd_mod = 0.5 + 0.5 * math.sin(2 * math.pi * 1.8 * t)
        noise = (random.random() * 2 - 1) * 0.15 * crowd_mod
        sig = (rumble + noise) * math.sin(math.pi * t / 2.4)
        left[i] = sig
        right[i] = sig
        
    max_val = max(max(abs(x) for x in left), 0.001)
    return [x * 0.8 / max_val for x in left], [x * 0.8 / max_val for x in right]

def gen_voice_grunt_organic(base_pitch, f1, f2, f3, duration=0.38):
    n = int(SAMPLE_RATE * duration)
    left = [0.0] * n
    right = [0.0] * n
    glottal = [0.0] * n
    phase = 0.0
    for i in range(n):
        t = i / SAMPLE_RATE
        pitch_curve = base_pitch * (1.0 + 0.06 * math.sin(math.pi * t / duration) - 0.10 * (t / duration))
        phase += pitch_curve / SAMPLE_RATE
        if phase >= 1.0: phase -= 1.0
        if phase < 0.65:
            pulse = 0.5 * (1.0 - math.cos(math.pi * phase / 0.65))
        elif phase < 0.85:
            pulse = math.cos(0.5 * math.pi * (phase - 0.65) / 0.2)
        else:
            pulse = 0.0
        breath = (random.random() * 2 - 1) * 0.018
        glottal[i] = pulse + breath

    def resonator(src, cf, bw):
        r = math.exp(-math.pi * bw / SAMPLE_RATE)
        theta = 2.0 * math.pi * cf / SAMPLE_RATE
        a1 = -2.0 * r * math.cos(theta)
        a2 = r * r
        gain = 1.0 - r
        out = [0.0] * len(src)
        y1 = y2 = 0.0
        for idx, x in enumerate(src):
            y0 = gain * x - a1 * y1 - a2 * y2
            out[idx] = y0
            y2 = y1
            y1 = y0
        return out

    r1 = resonator(glottal, f1, 95.0)
    r2 = resonator(glottal, f2, 115.0)
    r3 = resonator(glottal, f3, 145.0)
    for i in range(n):
        t = i / SAMPLE_RATE
        env = math.sin(math.pi * t / duration) ** 1.25
        v = (r1[i] * 0.58 + r2[i] * 0.32 + r3[i] * 0.15) * env
        left[i] = v
        right[i] = v
    max_val = max(max(abs(x) for x in left), 0.001)
    return [x * 0.80 / max_val for x in left], [x * 0.80 / max_val for x in right]

def main():
    target_dir = os.path.abspath("app/src/main/assets/audio")
    os.makedirs(target_dir, exist_ok=True)
    
    print("Synthesizing BGM tracks...")
    l, r = gen_bgm_balaikota(24.0)
    write_wav(os.path.join(target_dir, "bgm_balaikota.wav"), l, r)
    
    l, r = gen_bgm_krisis(20.0)
    write_wav(os.path.join(target_dir, "bgm_krisis.wav"), l, r)
    
    l, r = gen_bgm_pemilu(18.0)
    write_wav(os.path.join(target_dir, "bgm_pemilu.wav"), l, r)
    
    print("Synthesizing SFX...")
    l, r = gen_sfx_stempel()
    write_wav(os.path.join(target_dir, "sfx_stempel.wav"), l, r)
    
    l, r = gen_sfx_palu()
    write_wav(os.path.join(target_dir, "sfx_palu.wav"), l, r)

    l, r = gen_sfx_mulai()
    write_wav(os.path.join(target_dir, "sfx_mulai.wav"), l, r)
    
    l, r = gen_sfx_kas()
    write_wav(os.path.join(target_dir, "sfx_kas.wav"), l, r)
    
    l, r = gen_sfx_sirene()
    write_wav(os.path.join(target_dir, "sfx_sirene.wav"), l, r)
    
    l, r = gen_sfx_tepuk_tangan()
    write_wav(os.path.join(target_dir, "sfx_tepuk_tangan.wav"), l, r)
    
    l, r = gen_sfx_protes()
    write_wav(os.path.join(target_dir, "sfx_protes.wav"), l, r)
    
    print("Synthesizing Character Voice Grunts...")
    # Wakil Walikota (polite, mid-low, polite greeting cue)
    l, r = gen_voice_grunt_organic(130.0, 500.0, 1450.0, 2400.0, 0.36)
    write_wav(os.path.join(target_dir, "voice_wakil.wav"), l, r)
    
    # Ketua DPRD (deep, authoritative, commanding cue)
    l, r = gen_voice_grunt_organic(105.0, 450.0, 1250.0, 2200.0, 0.40)
    write_wav(os.path.join(target_dir, "voice_dprd.wav"), l, r)
    
    # Sekda / BPKAD (measured, formal, crisp)
    l, r = gen_voice_grunt_organic(145.0, 580.0, 1650.0, 2600.0, 0.34)
    write_wav(os.path.join(target_dir, "voice_sekda.wav"), l, r)
    
    # Investor / Konglomerat (smooth, confident, self-assured)
    l, r = gen_voice_grunt_organic(120.0, 540.0, 1380.0, 2450.0, 0.38)
    write_wav(os.path.join(target_dir, "voice_investor.wav"), l, r)
    
    # Aktivis LSM / Rakyat (urgent, passionate, resonant)
    l, r = gen_voice_grunt_organic(160.0, 650.0, 1750.0, 2750.0, 0.35)
    write_wav(os.path.join(target_dir, "voice_aktivis.wav"), l, r)
    
    print("All audio assets synthesized successfully!")

if __name__ == "__main__":
    main()
