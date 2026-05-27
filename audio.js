(() => {
  if (!window.p5) {
    return;
  }

  // =========================
  // CONFIG + STATE
  // =========================

  const SOUND_PATH = "adelinaadel-spring-melody-trailer-music-320074.mp3";
  const MUSIC_STORAGE_KEY = "lifeformMusicEnabled";

  let sound = null;
  let p5Instance = null;
  let started = false;
  let shouldStart = false;
  let bgmEnabled = localStorage.getItem(MUSIC_STORAGE_KEY) !== "false";
  let effectsEnabled = true;
  let soundButtons = [];
  let soundPanel = null;
  let effectsToggle = null;
  let bgmToggle = null;
  let initInProgress = false;
  let uiSoundBound = false;

  let targetRate = 1;
  let currentRate = 1;
  let targetVolume = 0.5;
  let currentVolume = 0.5;

  const MIN_RATE = 0.55;
  const MAX_RATE = 1.85;
  const RATE_SMOOTHING = 0.08;
  const VOLUME_SMOOTHING = 0.06;

  // =========================
  // BACKGROUND MUSIC
  // =========================

  const ensureAudioInstance = () => {
    if (p5Instance || initInProgress) {
      return;
    }

    initInProgress = true;

    new window.p5((p) => {
      p5Instance = p;
      initInProgress = false;

      p.preload = () => {
        if (p.loadSound) {
          sound = p.loadSound(SOUND_PATH, () => {
            if (sound) {
              sound.setVolume(currentVolume);
              sound.rate(currentRate);
            }

            if (shouldStart && bgmEnabled) {
              startPlayback();
            }
          });
        }
      };

      p.setup = () => {
        p.noCanvas();

        if (sound) {
          sound.setVolume(currentVolume);
          sound.rate(currentRate);
        }
      };

      p.draw = () => {
        updateSoundRateAndVolume();
      };
    });
  };

  const startPlayback = () => {
    if (started || !sound || !sound.isLoaded()) {
      return;
    }

    started = true;
    sound.loop();
    sound.rate(currentRate);
    sound.setVolume(currentVolume);
  };

  const requestStart = () => {
    if (!bgmEnabled) {
      return;
    }

    shouldStart = true;
    ensureAudioInstance();

    if (p5Instance && p5Instance.userStartAudio) {
      p5Instance.userStartAudio();
    }

    startPlayback();
  };

  const unlockAudioContext = () => {
    ensureAudioInstance();

    if (p5Instance && p5Instance.userStartAudio) {
      p5Instance.userStartAudio();
    }
  };

  const stopPlayback = () => {
    if (!sound) {
      return;
    }

    if (sound.isPlaying()) {
      sound.pause();
    }

    started = false;
  };

  const updateSoundButtonLabel = () => {
    soundButtons.forEach((button) => {
      button.textContent = "Sound";
      button.setAttribute(
        "aria-expanded",
        soundPanel?.classList.contains("is-open") ? "true" : "false"
      );
      button.classList.toggle("is-muted", !bgmEnabled && !effectsEnabled);
    });
  };

  const updateSoundOption = (button, isOn) => {
    if (!button) return;

    button.setAttribute("aria-pressed", String(isOn));
    const mark = button.querySelector("[data-checkmark]");
    if (mark) {
      mark.textContent = isOn ? "■" : " ";
    }
  };

  const updateSoundControls = () => {
    updateSoundOption(effectsToggle, effectsEnabled);
    updateSoundOption(bgmToggle, bgmEnabled);
    updateSoundButtonLabel();
  };

  const toggleBgm = () => {
    bgmEnabled = !bgmEnabled;
    localStorage.setItem(MUSIC_STORAGE_KEY, String(bgmEnabled));

    if (bgmEnabled) {
      requestStart();
    } else {
      shouldStart = false;
      stopPlayback();
    }

    updateSoundControls();
  };

  const toggleEffects = () => {
    effectsEnabled = !effectsEnabled;
    updateSoundControls();
  };

  const toggleSoundPanel = () => {
    if (!soundPanel) return;

    const willOpen = !soundPanel.classList.contains("is-open");
    soundPanel.classList.toggle("is-open", willOpen);
    soundPanel.setAttribute("aria-hidden", String(!willOpen));
    updateSoundButtonLabel();
  };

  const updateSoundRateAndVolume = () => {
    if (!sound || !sound.isLoaded()) {
      return;
    }

    currentRate += (targetRate - currentRate) * RATE_SMOOTHING;
    currentVolume += (targetVolume - currentVolume) * VOLUME_SMOOTHING;

    sound.rate(currentRate);
    sound.setVolume(currentVolume);
  };

  const setGearAudioSpeed = (normalizedSpeed, options = {}) => {
    const safeSpeed = Number.isFinite(normalizedSpeed)
      ? Math.max(0, Math.min(1, normalizedSpeed))
      : 0.5;

    const minRate = options.minRate ?? MIN_RATE;
    const maxRate = options.maxRate ?? MAX_RATE;

    targetRate = minRate + (maxRate - minRate) * safeSpeed;

    // Optional: quieter when almost stopped, fuller when moving.
    targetVolume = 0.22 + 0.38 * safeSpeed;

    if (options.forceSilent) {
      targetRate = 0.55;
      targetVolume = 0.08;
    }

    if (bgmEnabled || shouldStart || started) {
      ensureAudioInstance();
    }
  };

  // =========================
  // SOUND PANEL
  // =========================

  const bindSoundPanel = () => {
    soundPanel = document.getElementById("sound-panel");
    if (!soundPanel) return;

    effectsToggle = soundPanel.querySelector('[data-sound-control="effects"]');
    bgmToggle = soundPanel.querySelector('[data-sound-control="bgm"]');

    if (effectsToggle) {
      effectsToggle.addEventListener("click", toggleEffects);
    }

    if (bgmToggle) {
      bgmToggle.addEventListener("click", toggleBgm);
    }
  };

  const bindSoundControls = () => {
    soundButtons = Array.from(
      document.querySelectorAll("[data-sound-toggle], #sound-toggle")
    );
    bindSoundPanel();

    soundButtons.forEach((button) => {
      button.addEventListener("click", toggleSoundPanel);
    });

    updateSoundControls();

    ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
      document.addEventListener(eventName, requestStart, { once: true });
    });

    document.addEventListener("click", (event) => {
      if (!soundPanel || !soundPanel.classList.contains("is-open")) return;
      const clickedSoundButton = soundButtons.some((button) => {
        return button.contains(event.target);
      });

      if (
        soundPanel.contains(event.target) ||
        clickedSoundButton
      ) {
        return;
      }

      soundPanel.classList.remove("is-open");
      soundPanel.setAttribute("aria-hidden", "true");
      updateSoundButtonLabel();
    });

    document.addEventListener("lifeform:pagechange", () => {
      if (!soundPanel) return;

      soundPanel.classList.remove("is-open");
      soundPanel.setAttribute("aria-hidden", "true");
      updateSoundButtonLabel();
    });
  };

  // =========================
  // GEAR + UI SOUND EFFECTS
  // =========================

  const activeGearNotes = [];
  const activeUiNotes = [];

  const getGearPianoFrequency = (gearName = "career") => {
    const notesByAspect = {
      career: 261.63, // C4
      mental: 293.66, // D4
      financial: 329.63, // E4
      physical: 392.0, // G4
      community: 440.0, // A4
      social: 523.25, // C5
    };

    return notesByAspect[gearName] ?? 329.63;
  };

  const stopAndCleanGearVoice = (voice) => {
    try {
      voice.fundamental.stop();
      voice.overtoneA.stop();
      voice.overtoneB.stop();
    } catch (error) {
      // ignore already-stopped nodes
    }

    const index = activeGearNotes.indexOf(voice);
    if (index !== -1) {
      activeGearNotes.splice(index, 1);
    }
  };

  const playGearNote = (gear = {}) => {
    if (!effectsEnabled) return;

    unlockAudioContext();

    if (!window.p5) return;

    const gearName = gear.name ?? "career";
    const score = Number.isFinite(gear.score) ? gear.score : 5;

    const stress = Math.max(0, Math.min(1, score / 10));
    const baseFreq = getGearPianoFrequency(gearName);

    // Bigger gears play slightly brighter, but still gentle.
    const brightness = 0.75 + stress * 0.35;

    while (activeGearNotes.length > 8) {
      stopAndCleanGearVoice(activeGearNotes[0]);
    }

    // Piano-like sound = fundamental + soft overtones.
    // Sine waves are gentler and blend better with melodic BGM.
    const fundamental = new p5.Oscillator("sine");
    fundamental.freq(baseFreq);
    fundamental.amp(0);
    fundamental.start();

    const overtoneA = new p5.Oscillator("sine");
    overtoneA.freq(baseFreq * 2.01);
    overtoneA.amp(0);
    overtoneA.start();

    const overtoneB = new p5.Oscillator("triangle");
    overtoneB.freq(baseFreq * 3.01);
    overtoneB.amp(0);
    overtoneB.start();

    const voice = {
      fundamental,
      overtoneA,
      overtoneB,
    };

    activeGearNotes.push(voice);

    // Fast attack, slow decay = soft piano/chime.
    fundamental.amp(0.16 * brightness, 0.015);
    fundamental.amp(0, 1.15, 0.08);

    overtoneA.amp(0.055 * brightness, 0.01);
    overtoneA.amp(0, 0.85, 0.06);

    overtoneB.amp(0.025 * brightness, 0.008);
    overtoneB.amp(0, 0.55, 0.04);

    // Very tiny detune drift so it feels organic, not robotic.
    const startTime = performance.now();
    const driftTimer = setInterval(() => {
      const t = (performance.now() - startTime) / 1000;
      const drift = Math.sin(t * Math.PI * 2.4) * 0.4;

      fundamental.freq(baseFreq + drift);
      overtoneA.freq(baseFreq * 2.01 + drift * 0.5);
      overtoneB.freq(baseFreq * 3.01 - drift * 0.25);
    }, 24);

    setTimeout(() => {
      clearInterval(driftTimer);
      stopAndCleanGearVoice(voice);
    }, 1300);
  };

  const stopAndCleanUiVoice = (voice) => {
    try {
      voice.fundamental.stop();
      voice.overtoneA.stop();
      voice.overtoneB.stop();
    } catch (error) {
      // ignore already-stopped nodes
    }

    const index = activeUiNotes.indexOf(voice);
    if (index !== -1) {
      activeUiNotes.splice(index, 1);
    }
  };

  const playUiTone = () => {
    if (!effectsEnabled || !window.p5) return;

    unlockAudioContext();

    const baseFreq = 523.25 + Math.random() * 35;
    const brightness = 0.85;

    while (activeUiNotes.length > 6) {
      stopAndCleanUiVoice(activeUiNotes[0]);
    }

    const fundamental = new p5.Oscillator("sine");
    fundamental.freq(baseFreq);
    fundamental.amp(0);
    fundamental.start();

    const overtoneA = new p5.Oscillator("sine");
    overtoneA.freq(baseFreq * 2.01);
    overtoneA.amp(0);
    overtoneA.start();

    const overtoneB = new p5.Oscillator("triangle");
    overtoneB.freq(baseFreq * 3.01);
    overtoneB.amp(0);
    overtoneB.start();

    const voice = {
      fundamental,
      overtoneA,
      overtoneB,
    };

    activeUiNotes.push(voice);

    fundamental.amp(0.055 * brightness, 0.01);
    fundamental.amp(0, 0.22, 0.03);

    overtoneA.amp(0.025 * brightness, 0.008);
    overtoneA.amp(0, 0.18, 0.025);

    overtoneB.amp(0.012 * brightness, 0.006);
    overtoneB.amp(0, 0.12, 0.02);

    const startTime = performance.now();
    const driftTimer = setInterval(() => {
      const t = (performance.now() - startTime) / 1000;
      const drift = Math.sin(t * Math.PI * 3) * 0.25;

      fundamental.freq(baseFreq + drift);
      overtoneA.freq(baseFreq * 2.01 + drift * 0.5);
      overtoneB.freq(baseFreq * 3.01 - drift * 0.25);
    }, 24);

    setTimeout(() => {
      clearInterval(driftTimer);
      stopAndCleanUiVoice(voice);
    }, 260);
  };

  const bindUiSound = () => {
    if (uiSoundBound) return;

    uiSoundBound = true;

    document.addEventListener(
      "click",
      (event) => {
        const control = event.target.closest("button, a[href]");

        if (
          !control ||
          control.disabled ||
          control.getAttribute("aria-disabled") === "true"
        ) {
          return;
        }

        playUiTone();
      },
      true
    );
  };

  const playTypeTone = () => {
    if (!effectsEnabled || !window.p5) return;

    unlockAudioContext();

    const osc = new p5.Oscillator("sine");
    const freq = 500 + Math.random() * 10;

    osc.freq(freq);
    osc.amp(0);
    osc.start();

    osc.amp(0.035, 0.005);
    osc.amp(0, 0.08, 0.015);

    setTimeout(() => {
      try {
        osc.stop();
      } catch (error) {
        // ignore already-stopped tone
      }
    }, 120);
  };

  // =========================
  // INIT + PUBLIC API
  // =========================

  const initAudio = () => {
    bindSoundControls();
    bindUiSound();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAudio);
  } else {
    initAudio();
  }

  window.lifeformAudio = {
    setGearAudioSpeed,
    playGearNote,
    playUiTone,
    playTypeTone,
    requestStart,
    stopPlayback,
    isEnabled: () => bgmEnabled || effectsEnabled,
    isBgmEnabled: () => bgmEnabled,
    isEffectsEnabled: () => effectsEnabled,
  };
})();
