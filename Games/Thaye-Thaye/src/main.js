function isTouchOnlyDevice() {
  const hasFinePointer =
    window.matchMedia?.("(any-pointer: fine)")?.matches ||
    window.matchMedia?.("(pointer: fine)")?.matches;
  const hasHover =
    window.matchMedia?.("(any-hover: hover)")?.matches ||
    window.matchMedia?.("(hover: hover)")?.matches;
  const isCoarsePrimary = window.matchMedia?.("(pointer: coarse)")?.matches;
  const hasTouch = (navigator.maxTouchPoints || 0) > 0 || "ontouchstart" in window;
  const mobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1);
  const hasPointerLock = "requestPointerLock" in document.createElement("canvas");

  if (!hasFinePointer && (hasTouch || isCoarsePrimary || !hasHover || mobileUA)) {
    return true;
  }
  if (!hasPointerLock && (hasTouch || isCoarsePrimary || mobileUA)) {
    return true;
  }
  return false;
}

if (isTouchOnlyDevice()) {
  document.getElementById("menu-overlay")?.classList.add("hidden");
  document.getElementById("desktop-only-overlay")?.classList.remove("hidden");
} else {
  bootDesktopGame();
}

async function bootDesktopGame() {
  const [{ SoundEngine }, { HudController }, { GameEngine }] = await Promise.all([
    import("./audio/SoundEngine.js"),
    import("./ui/HudController.js"),
    import("./game/GameEngine.js"),
  ]);

  const canvas = document.getElementById("game-canvas");
  const sound = new SoundEngine();
  const ui = new HudController();
  const engine = new GameEngine(canvas, sound, ui);

  // Fullscreen support
  const fsRoot = document.documentElement;
  const reqFullscreen = fsRoot.requestFullscreen || fsRoot.webkitRequestFullscreen;
  const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;
  const getFullscreenEl = () => document.fullscreenElement || document.webkitFullscreenElement;
  const fsButtons = document.querySelectorAll("[data-fullscreen-btn]");

  function toggleFullscreen() {
    if (!reqFullscreen) return;
    if (getFullscreenEl()) {
      if (exitFullscreen) Promise.resolve(exitFullscreen.call(document)).catch(() => {});
    } else {
      Promise.resolve(reqFullscreen.call(fsRoot)).catch(() => {});
    }
  }

  function syncFullscreenUI() {
    const active = !!getFullscreenEl();
    fsButtons.forEach((btn) => {
      btn.textContent = active ? "⛶ EXIT FULLSCREEN" : "⛶ FULLSCREEN";
      btn.setAttribute("title", active ? "Exit Fullscreen (F)" : "Fullscreen (F)");
    });
  }

  if (reqFullscreen) {
    fsButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFullscreen();
      });
    });
    const onFsChange = () => {
      syncFullscreenUI();
      window.dispatchEvent(new Event("resize"));
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    window.addEventListener("keydown", (e) => {
      if (e.code === "KeyF" && !e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tag = document.activeElement?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        toggleFullscreen();
      }
    });
    syncFullscreenUI();
  } else {
    fsButtons.forEach((btn) => {
      btn.style.display = "none";
    });
  }

  const STAGE_LABELS = {
    home: "MAIN LOBBY",
    play: "MATCH SETUP",
    arsenal: "ARSENAL // 3D INSPECT",
    settings: "SETTINGS",
    controls: "COMBAT CONTROLS",
  };

  const DIFF_LABELS = {
    normal: "FAIR REACTION & SPREAD",
    hard: "SHARP • COMMANDO TACTICS",
    nightmare: "APEX • MARCOS PRECISION",
  };

  const WEAPON_SPECS = {
    knife: {
      name: "COMBAT KNIFE",
      role: "MELEE • +20% SPRINT SPEED",
      stats: "75 DMG • 1.85x HEADSHOT • SILENT DISMEMBERMENT",
      bars: [65, 90, 18],
    },
    rifle: {
      name: "MK-II ASSAULT RIFLE",
      role: "AUTO • HOLOGRAPHIC SIGHT",
      stats: "24 DMG • 30 MAG • MEDIUM / LONG RANGE",
      bars: [50, 86, 84],
    },
    shotgun: {
      name: "SHOTGUN",
      role: "PUMP • 9-PELLET BUCKSHOT",
      stats: "126 MAX DMG • 6 SHELLS • HEAVY RECOIL BLAST",
      bars: [95, 46, 38],
    },
    revolver: {
      name: ".44 APEX MAGNUM REVOLVER",
      role: "RAPID AUTO • TRITIUM IRON SIGHTS",
      stats: "58 DMG • 2.15x HEADSHOT • 6-SHOT HAND CANNON",
      bars: [82, 72, 78],
    },
    grenade: {
      name: "M69 FRAG GRENADE",
      role: "THROWN • [G] QUICK TOSS ANYTIME",
      stats: "135 BLAST DMG • 6.2M RADIUS • SHRAPNEL GIBS",
      bars: [100, 30, 56],
    },
  };

  const stageCrumb = document.getElementById("stage-crumb");
  const allStages = document.querySelectorAll(".menu-stage");

  function goToMenuStage(stage) {
    allStages.forEach((el) => el.classList.toggle("active", el.dataset.stage === stage));
    if (stageCrumb) stageCrumb.textContent = STAGE_LABELS[stage] || "MAIN LOBBY";
    engine.setMenuStage(stage);
    sound.playSwitch();
  }

  document.getElementById("btn-nav-play")?.addEventListener("click", () => goToMenuStage("play"));
  document.getElementById("btn-nav-arsenal")?.addEventListener("click", () => goToMenuStage("arsenal"));
  document.getElementById("btn-nav-settings")?.addEventListener("click", () => goToMenuStage("settings"));
  document.getElementById("btn-nav-controls")?.addEventListener("click", () => goToMenuStage("controls"));
  document.querySelectorAll(".back-btn[data-back]").forEach((btn) => {
    btn.addEventListener("click", () => goToMenuStage(btn.dataset.back));
  });

  const specName = document.getElementById("spec-name");
  const specRole = document.getElementById("spec-role");
  const specStats = document.getElementById("spec-stats");
  const barDmg = document.getElementById("bar-dmg");
  const barRof = document.getElementById("bar-rof");
  const barRng = document.getElementById("bar-rng");

  document.querySelectorAll("#arsenal-tabs .arsenal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#arsenal-tabs .arsenal-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const w = btn.dataset.weapon;
      const spec = WEAPON_SPECS[w];
      if (spec) {
        specName.textContent = spec.name;
        specRole.textContent = spec.role;
        specStats.textContent = spec.stats;
        if (barDmg) barDmg.style.width = `${spec.bars[0]}%`;
        if (barRof) barRof.style.width = `${spec.bars[1]}%`;
        if (barRng) barRng.style.width = `${spec.bars[2]}%`;
      }
      engine.setPreviewWeapon(w);
      sound.playSwitch();
    });
  });

  function wireSegGroup(groupId, hiddenInputId, onSelect = null) {
    const hidden = document.getElementById(hiddenInputId);
    const btns = document.querySelectorAll(`#${groupId} .seg-btn`);
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        hidden.value = btn.dataset.value;
        onSelect?.(btn.dataset.value);
        sound.playSwitch();
      });
    });
  }

  const diffDesc = document.getElementById("diff-desc");
  wireSegGroup("diff-group", "opt-difficulty", (val) => {
    if (diffDesc && DIFF_LABELS[val]) diffDesc.textContent = DIFF_LABELS[val];
  });
  wireSegGroup("score-group", "opt-score-limit");

  const sensInput = document.getElementById("opt-sens");
  const sensVal = document.getElementById("sens-val");
  sensInput.addEventListener("input", () => {
    const v = parseFloat(sensInput.value);
    sensVal.textContent = v.toFixed(1);
    engine.sensitivity = v;
  });

  const volInput = document.getElementById("opt-vol");
  const volVal = document.getElementById("vol-val");
  volInput.addEventListener("input", () => {
    const v = parseFloat(volInput.value);
    volVal.textContent = `${Math.round(v * 100)}%`;
    sound.setVolume(v);
  });

  document.getElementById("btn-reset-settings")?.addEventListener("click", () => {
    sensInput.value = "1.0";
    sensVal.textContent = "1.0";
    engine.sensitivity = 1.0;
    volInput.value = "0.75";
    volVal.textContent = "75%";
    sound.setVolume(0.75);
    sound.playSwitch();
  });

  const diffInput = document.getElementById("opt-difficulty");
  const scoreInput = document.getElementById("opt-score-limit");

  function launchMatch() {
    sound.init();
    sound.setVolume(parseFloat(volInput.value));
    engine.startMatch({
      gender: "male",
      difficulty: diffInput.value,
      scoreLimit: parseInt(scoreInput.value, 10),
    });
  }

  function returnToMainMenu() {
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock?.();
    }
    sound.stopReload();
    engine.weaponSystem.setActiveViewmodel(engine.player?.activeWeapon, false);
    engine.cleanupMatch();
    engine.state = "menu";
    goToMenuStage("home");
    engine._buildMenuPreview();
    ui.setPointerHint(false);
    ui.showMenu();
  }

  document.getElementById("btn-quick-deploy")?.addEventListener("click", launchMatch);
  document.getElementById("btn-deploy").addEventListener("click", launchMatch);
  document.getElementById("btn-play-again").addEventListener("click", launchMatch);
  document.getElementById("btn-change-char").addEventListener("click", returnToMainMenu);
  document.getElementById("btn-resume-match")?.addEventListener("click", () => {
    sound.init();
    engine.requestLock();
  });
  document.getElementById("btn-quit-menu")?.addEventListener("click", returnToMainMenu);

  engine.init().catch((err) => {
    console.error("Failed to initialize game:", err);
    const btn = document.getElementById("btn-deploy");
    if (btn) btn.textContent = "ERROR LOADING ASSETS (CHECK CONSOLE)";
  });
}
