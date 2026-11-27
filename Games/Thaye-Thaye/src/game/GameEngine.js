import * as THREE from "three";
import { ArenaWorld } from "../world/ArenaWorld.js";
import { CharacterFactory, BOT_PALETTES, LIMB_ZONES } from "../characters/CharacterFactory.js";
import { WeaponSystem, WEAPON_STATS } from "../weapons/WeaponSystem.js";
import { RagdollSystem } from "../physics/RagdollSystem.js";
import { Combatant } from "./Combatant.js";
import { BotController } from "../ai/BotController.js";
import { ProceduralAnimator } from "../characters/ProceduralAnimator.js";

const BOT_NAMES = ["ARJUN", "ROHAN", "KABIR", "VIKRAM"];

export class GameEngine {
  constructor(canvas, sound, ui, isTouchMode = false) {
    this.canvas = canvas;
    this.sound = sound;
    this.ui = ui;
    this.isTouchMode = !!isTouchMode;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(76, window.innerWidth / window.innerHeight, 0.08, 120);
    this.camera.rotation.order = "YXZ";
    this.scene.add(this.camera);

    this.arena = new ArenaWorld(this.scene);
    this.charFactory = new CharacterFactory();
    this.weaponSystem = new WeaponSystem(this.scene, this.camera);
    this.ragdolls = null;

    this.state = "loading"; // loading | menu | playing | gameover
    this.selectedGender = "male";
    this.previewWeapon = "rifle";
    this.difficulty = "hard";
    this.scoreLimit = 20;
    this.sensitivity = 1.0;

    this.combatants = [];
    this.player = null;
    this.botControllers = [];

    this.matchTime = 300;
    this.matchClock = 0;
    this.paused = false;
    this.clock = new THREE.Clock();
    this.menuTime = 0;
    this.menuStage = "home"; // home | play | arsenal | settings | controls
    this.menuCamPos = new THREE.Vector3(-0.75, 3.36, 4.95);
    this.menuLookAt = new THREE.Vector3(-0.65, 3.22, 1.45);
    this.previewChar = null;
    this.previewAnimator = null;

    // Player input
    this.keys = {};
    this.mouseDown = false;
    this.adsDown = false;
    this.pointerLocked = false;
    this.camRecoilPitch = 0;
    this.camRecoilYaw = 0;
    this.camShake = 0;
    this.fovKick = 0;
    this.multiKillCount = 0;
    this.multiKillTimer = 0;
    this.footstepTimer = 0;
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
    this.wasPlayerGrounded = true;
    this.landDip = 0;
    this.thirdPerson = false;
    this.tpsCamDist = 2.15;
    this.tpsActualDist = 2.15;
    this.tpsAdsAlpha = 0;
    this.tpsRecoilZ = 0;

    // Mobile touch state (strictly active only when this.isTouchMode === true)
    this.touchMoveX = 0;
    this.touchMoveY = 0;
    this.touchSprint = false;
    this.touchCrouch = false;
    this.touchLooking = false;
    this.scoreboardToggled = false;
    this._resetTouchUI = null;

    this._bindEvents();
  }

  async init() {
    await Promise.all([
      this.arena.load(),
      this.charFactory.load(),
      this.weaponSystem.load(),
      this.sound.preload(),
    ]);
    this.ragdolls = new RagdollSystem(this.scene, this.arena, this.charFactory);
    this.state = "menu";
    this._buildMenuPreview();
    this.ui.onAssetsReady();
    this._loop();
  }

  setMenuStage(stage) {
    this.menuStage = stage || "home";
  }

  _buildMenuPreview() {
    if (this.previewChar) {
      this.scene.remove(this.previewChar.root);
      this.charFactory.disposeCharacter(this.previewChar);
      this.previewChar = null;
      this.previewAnimator = null;
    }
    if (this.state !== "menu") return;
    this.previewChar = this.charFactory.createCharacter(this.selectedGender, {
      armor: 0xfacc15,
      visor: 0x1ee8ff,
    });
    this.previewAnimator = new ProceduralAnimator(this.previewChar);
    this.previewChar.root.position.set(0.0, 2.4, 1.45);
    this.scene.add(this.previewChar.root);
    this.weaponSystem.attachToCharacterHand(this.previewChar, this.previewWeapon);
    this.previewAnimator.update(0.016, 0, true, 0, this.previewWeapon);
    this.camera.fov = 54;
    this.camera.updateProjectionMatrix();
    this.camera.position.copy(this.menuCamPos);
    this.camera.lookAt(this.menuLookAt);
  }

  setGender(gender) {
    this.selectedGender = gender;
    if (this.state === "menu") {
      this._buildMenuPreview();
    }
  }

  setPreviewWeapon(weaponId) {
    if (!WEAPON_STATS[weaponId]) return;
    this.previewWeapon = weaponId;
    if (this.state === "menu" && this.previewChar) {
      this.weaponSystem.attachToCharacterHand(this.previewChar, weaponId);
    }
  }

  cleanupMatch() {
    for (const c of this.combatants) {
      c.dispose?.();
    }
    this.ragdolls?.clearAll();
    this.weaponSystem.clearProjectiles();
    this.combatants = [];
    this.botControllers = [];
    this.player = null;
  }

  startMatch({ gender, difficulty, scoreLimit }) {
    this.selectedGender = gender;
    this.difficulty = difficulty;
    this.scoreLimit = scoreLimit;
    this.coyoteTimer = 0;
    this.jumpBufferTimer = 0;
    this.wasPlayerGrounded = true;
    this.landDip = 0;
    this.tpsCamDist = 2.15;
    this.tpsAdsAlpha = 0;
    this.tpsRecoilZ = 0;
    this.mouseDown = false;
    this.adsDown = false;
    this.camRecoilPitch = 0;
    this.camRecoilYaw = 0;
    this.camShake = 0;

    // Clean previous match entities
    if (this.previewChar) {
      this.scene.remove(this.previewChar.root);
      this.charFactory.disposeCharacter(this.previewChar);
      this.previewChar = null;
    }
    this.cleanupMatch();

    // Create 1 human player + 4 bots (using the SAME chosen gender model, themed colors!)
    this.player = new Combatant({
      id: "player",
      name: "YOU",
      isPlayer: true,
      gender: this.selectedGender,
      palette: { hex: "#24d8ff", color: 0x24d8ff, armor: 0xfacc15, visor: 0x1ee8ff },
      charFactory: this.charFactory,
      weaponSystem: this.weaponSystem,
      scene: this.scene,
    });
    this.combatants.push(this.player);

    for (let i = 0; i < 4; i++) {
      const bot = new Combatant({
        id: `bot_${i}`,
        name: BOT_NAMES[i],
        isPlayer: false,
        gender: this.selectedGender,
        palette: BOT_PALETTES[i],
        charFactory: this.charFactory,
        weaponSystem: this.weaponSystem,
        scene: this.scene,
      });
      this.combatants.push(bot);
      this.botControllers.push(new BotController(bot, this.arena, this.difficulty));
    }

    // Spawn all 5 combatants at the 5 Foundry spawn points
    const spawns = [...this.arena.spawns].sort(() => Math.random() - 0.5);
    this.combatants.forEach((c, idx) => {
      const sp = spawns[idx % spawns.length];
      c.spawnAt(sp.position, sp.yaw);
    });
    if (this.player?.charInst) {
      this.player.charInst.root.visible = this.thirdPerson;
    }
    this.botControllers.forEach((bc) => bc.onSpawn());

    // Reset pickups
    for (const pk of this.arena.pickups) {
      pk.active = true;
      pk.respawnTimer = 0;
    }

    this.matchTime = 300;
    this.matchClock = 0;
    this.paused = false;
    this.multiKillCount = 0;
    this.multiKillTimer = 0;
    this.fovKick = 0;
    this.camera.fov = this.thirdPerson ? 72 : 76;
    this.camera.updateProjectionMatrix();
    this.state = "playing";
    this.weaponSystem.setActiveViewmodel(this.player.activeWeapon, !this.thirdPerson);
    this.resetTouchInputs();
    this.ui.showMatchHUD(this.scoreLimit);
    this.ui.setPointerHint(false);
    this.requestLock();
  }

  resetTouchInputs() {
    if (!this.isTouchMode) return;
    this.touchMoveX = 0;
    this.touchMoveY = 0;
    this.touchSprint = false;
    this.touchCrouch = false;
    this.touchLooking = false;
    this.scoreboardToggled = false;
    this.mouseDown = false;
    this.adsDown = false;
    this._resetTouchUI?.();
  }

  pauseMatch() {
    if (this.state !== "playing" || this.paused) return;
    this.paused = true;
    this.sound.pause();
    this.resetTouchInputs();
    this.ui.setScoreboardVisible(false, this.combatants);
    this.ui.setPointerHint(true);
  }

  resumeMatch() {
    if (this.state !== "playing") return;
    this.sound.init();
    this.sound.resume();
    this.paused = false;
    this.ui.setPointerHint(false);
    this.requestLock();
  }

  requestLock() {
    if (this.isTouchMode) return;
    if (this.state === "playing" && document.pointerLockElement !== this.canvas) {
      Promise.resolve(this.canvas.requestPointerLock?.()).catch(() => {});
    }
  }

  _bindEvents() {
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener("pointerlockchange", () => {
      const wasLocked = this.pointerLocked;
      this.pointerLocked = document.pointerLockElement === this.canvas;
      if (this.state === "playing" && !this.pointerLocked) {
        if (wasLocked) {
          this.paused = true;
          this.sound.pause();
          this.ui.setScoreboardVisible(false, this.combatants);
        }
        this.ui.setPointerHint(this.paused);
        this.mouseDown = false;
        this.adsDown = false;
        this.keys = {};
      } else if (this.pointerLocked) {
        this.paused = false;
        this.sound.resume();
        this.ui.setPointerHint(false);
      }
    });

    document.addEventListener("pointerlockerror", () => {
      if (this.state === "playing") {
        this.paused = true;
        this.sound.pause();
        this.ui.setPointerHint(true);
      }
    });

    this.canvas.addEventListener("mousedown", (e) => {
      if (this.state !== "playing" || this.paused || !this.pointerLocked) return;
      this.sound.init();
      if (e.button === 2) {
        this.adsDown = true;
      }
      if (e.button === 0) {
        this.mouseDown = true;
        this._tryPlayerFire(true);
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (e.button === 0) this.mouseDown = false;
      if (e.button === 2) this.adsDown = false;
    });

    this.canvas.addEventListener("contextmenu", (e) => e.preventDefault());

    window.addEventListener("mousemove", (e) => {
      if (this.state !== "playing" || !this.pointerLocked || !this.player?.alive) return;
      const canAds = this.adsDown && this.player.hasLeftArm() && this.player.hasRightArm();
      const sens = 0.0021 * this.sensitivity * (canAds ? 0.65 : 1.0);
      this.player.yaw -= e.movementX * sens;
      this.player.pitch = THREE.MathUtils.clamp(this.player.pitch - e.movementY * sens, -1.48, 1.48);
      this.weaponSystem.addSway(e.movementX, e.movementY);
    });

    window.addEventListener("wheel", (e) => {
      if (this.state !== "playing" || !this.player?.alive || !this.pointerLocked) return;
      const order = ["knife", "rifle", "shotgun", "revolver", "grenade"];
      const idx = order.indexOf(this.player.activeWeapon);
      const next = order[(idx + (e.deltaY > 0 ? 1 : order.length - 1)) % order.length];
      this._switchPlayerWeapon(next);
    });

    window.addEventListener("keydown", (e) => {
      if (this.state !== "playing" || this.paused) return;
      this.keys[e.code] = true;

      if (e.code === "Tab") {
        e.preventDefault();
        this.ui.setScoreboardVisible(true, this.combatants);
      }
      if (e.code === "KeyV" && !e.repeat) {
        this._toggleCameraView();
      }
      if (!this.player?.alive) return;

      if (e.code === "Digit1") this._switchPlayerWeapon("knife");
      if (e.code === "Digit2") this._switchPlayerWeapon("rifle");
      if (e.code === "Digit3") this._switchPlayerWeapon("shotgun");
      if (e.code === "Digit4") this._switchPlayerWeapon("revolver");
      if (e.code === "Digit5") this._switchPlayerWeapon("grenade");
      if (e.code === "KeyG" && !e.repeat) {
        this._throwQuickGrenade();
      }
      if (e.code === "KeyR" && this.player.hasRightArm()) {
        if (this.player.startReload()) this.sound.playReload(this.player.activeWeapon);
      }
      if (e.code === "Space" && !e.repeat) {
        this.jumpBufferTimer = 0.12;
      }
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
      if (e.code === "Tab") {
        this.ui.setScoreboardVisible(false, this.combatants);
      }
    });

    if (this.isTouchMode) {
      this._bindTouchEvents();
    }
  }

  _bindTouchEvents() {
    const joyZone = document.getElementById("mob-joy-zone");
    const joyBase = document.getElementById("mob-joy-base");
    const joyKnob = document.getElementById("mob-joy-knob");
    const sprintBadge = document.getElementById("mob-sprint-badge");
    const lookZone = document.getElementById("mob-look-zone");

    const btnFire = document.getElementById("btn-mob-fire");
    const btnAds = document.getElementById("btn-mob-ads");
    const btnJump = document.getElementById("btn-mob-jump");
    const btnCrouch = document.getElementById("btn-mob-crouch");
    const btnReload = document.getElementById("btn-mob-reload");
    const btnFrag = document.getElementById("btn-mob-frag");
    const btnPause = document.getElementById("btn-mob-pause");
    const btnScore = document.getElementById("btn-mob-score");
    const btnCam = document.getElementById("btn-mob-cam");

    let joyTouchId = null;
    let joyOriginX = 0;
    let joyOriginY = 0;
    const maxRadius = 46;

    let lookTouchId = null;
    let lookLastX = 0;
    let lookLastY = 0;

    let fireTouchId = null;
    let fireLastX = 0;
    let fireLastY = 0;

    const resetJoystickVisuals = () => {
      joyTouchId = null;
      this.touchMoveX = 0;
      this.touchMoveY = 0;
      this.touchSprint = false;
      if (joyKnob) joyKnob.style.transform = "translate3d(0px, 0px, 0px)";
      if (joyBase) {
        joyBase.classList.remove("active", "sprinting");
        joyBase.style.left = "";
        joyBase.style.top = "";
        joyBase.style.bottom = "";
      }
      if (sprintBadge) sprintBadge.classList.remove("active");
    };

    this._resetTouchUI = () => {
      resetJoystickVisuals();
      lookTouchId = null;
      fireTouchId = null;
      this.touchLooking = false;
      btnFire?.classList.remove("active");
      btnAds?.classList.remove("active");
      btnCrouch?.classList.remove("active");
      btnScore?.classList.remove("active");
    };

    const updateJoystickFromTouch = (t) => {
      const dx = t.clientX - joyOriginX;
      const dy = t.clientY - joyOriginY;
      const dist = Math.hypot(dx, dy);
      const deadzone = 5;

      if (dist <= deadzone) {
        this.touchMoveX = 0;
        this.touchMoveY = 0;
        this.touchSprint = false;
        if (joyKnob) joyKnob.style.transform = "translate3d(0px, 0px, 0px)";
      } else {
        const clampedDist = Math.min(maxRadius, dist);
        const angle = Math.atan2(dy, dx);
        const knobX = Math.cos(angle) * clampedDist;
        const knobY = Math.sin(angle) * clampedDist;
        if (joyKnob) {
          joyKnob.style.transform = `translate3d(${knobX.toFixed(1)}px, ${knobY.toFixed(1)}px, 0px)`;
        }

        const norm = Math.min(1, (dist - deadzone) / (maxRadius - deadzone));
        this.touchMoveX = Math.cos(angle) * norm;
        this.touchMoveY = -Math.sin(angle) * norm;
        this.touchSprint = dist >= maxRadius * 0.80 && this.touchMoveY > 0.45;
        if (this.touchSprint && this.touchCrouch) {
          this.touchCrouch = false;
        }
      }

      const showSprint = this.touchSprint && !this.adsDown && !this.touchCrouch && !this.player?.isLegCrippled();
      joyBase?.classList.toggle("sprinting", !!showSprint);
      sprintBadge?.classList.toggle("active", !!showSprint);
    };

    if (joyZone) {
      joyZone.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          if (this.state !== "playing" || this.paused || joyTouchId !== null) return;
          this.sound.init();
          const t = e.changedTouches[0];
          if (!t) return;
          joyTouchId = t.identifier;

          const zoneRect = joyZone.getBoundingClientRect();
          const pad = 64;
          const cx = THREE.MathUtils.clamp(t.clientX, zoneRect.left + pad, zoneRect.right - pad);
          const cy = THREE.MathUtils.clamp(t.clientY, zoneRect.top + pad, zoneRect.bottom - pad);
          joyOriginX = cx;
          joyOriginY = cy;

          if (joyBase) {
            joyBase.classList.add("active");
            joyBase.style.left = `${cx - zoneRect.left - 62}px`;
            joyBase.style.top = `${cy - zoneRect.top - 62}px`;
            joyBase.style.bottom = "auto";
          }
          updateJoystickFromTouch(t);
        },
        { passive: false }
      );

      joyZone.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
          if (joyTouchId === null) return;
          for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === joyTouchId) {
              updateJoystickFromTouch(t);
              break;
            }
          }
        },
        { passive: false }
      );

      const endJoy = (e) => {
        if (joyTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === joyTouchId) {
            resetJoystickVisuals();
            break;
          }
        }
      };
      joyZone.addEventListener("touchend", endJoy, { passive: false });
      joyZone.addEventListener("touchcancel", endJoy, { passive: false });
    }

    if (lookZone) {
      lookZone.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          if (this.state !== "playing" || this.paused) return;
          this.sound.init();
          if (this.scoreboardToggled) {
            this.scoreboardToggled = false;
            btnScore?.classList.remove("active");
            this.ui.setScoreboardVisible(false, this.combatants);
          }
          if (lookTouchId !== null) return;
          const t = e.changedTouches[0];
          if (!t) return;
          lookTouchId = t.identifier;
          lookLastX = t.clientX;
          lookLastY = t.clientY;
          this.touchLooking = true;
        },
        { passive: false }
      );

      lookZone.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
          if (lookTouchId === null) return;
          for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === lookTouchId) {
              const dx = t.clientX - lookLastX;
              const dy = t.clientY - lookLastY;
              lookLastX = t.clientX;
              lookLastY = t.clientY;
              this._applyTouchLook(dx, dy);
              break;
            }
          }
        },
        { passive: false }
      );

      const endLook = (e) => {
        if (lookTouchId === null) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
          if (e.changedTouches[i].identifier === lookTouchId) {
            lookTouchId = null;
            this.touchLooking = fireTouchId !== null;
            break;
          }
        }
      };
      lookZone.addEventListener("touchend", endLook, { passive: false });
      lookZone.addEventListener("touchcancel", endLook, { passive: false });
    }

    if (btnFire) {
      btnFire.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (this.state !== "playing" || this.paused) return;
          this.sound.init();
          const t = e.changedTouches[0];
          if (t && fireTouchId === null) {
            fireTouchId = t.identifier;
            fireLastX = t.clientX;
            fireLastY = t.clientY;
          }
          this.mouseDown = true;
          this.touchLooking = true;
          btnFire.classList.add("active");
          this._tryPlayerFire(true);
        },
        { passive: false }
      );

      btnFire.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (fireTouchId === null) return;
          for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === fireTouchId) {
              const dx = t.clientX - fireLastX;
              const dy = t.clientY - fireLastY;
              fireLastX = t.clientX;
              fireLastY = t.clientY;
              this._applyTouchLook(dx, dy);
              break;
            }
          }
        },
        { passive: false }
      );

      const endFire = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (fireTouchId !== null) {
          for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === fireTouchId) {
              fireTouchId = null;
              break;
            }
          }
        }
        if (fireTouchId === null) {
          this.mouseDown = false;
          this.touchLooking = lookTouchId !== null;
          btnFire.classList.remove("active");
        }
      };
      btnFire.addEventListener("touchend", endFire, { passive: false });
      btnFire.addEventListener("touchcancel", endFire, { passive: false });
    }

    const bindTouchAction = (el, fn) => {
      if (!el) return;
      let touchedRecently = false;
      el.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          touchedRecently = true;
          this.sound.init();
          fn();
          setTimeout(() => {
            touchedRecently = false;
          }, 350);
        },
        { passive: false }
      );
      el.addEventListener("click", (e) => {
        if (touchedRecently) return;
        e.stopPropagation();
        this.sound.init();
        fn();
      });
    };

    bindTouchAction(btnAds, () => {
      if (this.state !== "playing" || this.paused || !this.player?.alive) return;
      if (this.player.activeWeapon === "knife" || this.player.activeWeapon === "grenade") {
        this.adsDown = false;
        return;
      }
      this.adsDown = !this.adsDown;
    });

    bindTouchAction(btnJump, () => {
      if (this.state !== "playing" || this.paused || !this.player?.alive) return;
      if (this.touchCrouch) {
        this.touchCrouch = false;
      }
      this.jumpBufferTimer = 0.15;
    });

    const toggleCrouch = () => {
      if (this.state !== "playing" || this.paused || !this.player?.alive) return;
      if (this.player.isLegCrippled()) return;
      this.touchCrouch = !this.touchCrouch;
    };
    bindTouchAction(btnCrouch, toggleCrouch);
    bindTouchAction(document.getElementById("stance-pill"), toggleCrouch);

    const triggerReload = () => {
      if (this.state !== "playing" || this.paused || !this.player?.alive) return;
      if (this.player.hasRightArm() && this.player.startReload()) {
        this.adsDown = false;
        this.sound.playReload(this.player.activeWeapon);
      }
    };
    bindTouchAction(btnReload, triggerReload);
    bindTouchAction(document.getElementById("ammo-readout"), triggerReload);

    bindTouchAction(btnFrag, () => {
      if (this.state !== "playing" || this.paused || !this.player?.alive) return;
      this._throwQuickGrenade();
    });

    const toggleCam = () => {
      if (this.state !== "playing" || this.paused) return;
      this._toggleCameraView();
    };
    bindTouchAction(btnCam, toggleCam);
    bindTouchAction(document.getElementById("cam-mode-pill"), toggleCam);

    bindTouchAction(btnPause, () => {
      if (this.state !== "playing") return;
      if (this.paused) this.resumeMatch();
      else this.pauseMatch();
    });

    const toggleScore = () => {
      if (this.state !== "playing" || this.paused) return;
      this.scoreboardToggled = !this.scoreboardToggled;
      btnScore?.classList.toggle("active", this.scoreboardToggled);
      this.ui.setScoreboardVisible(this.scoreboardToggled, this.combatants);
    };
    bindTouchAction(btnScore, toggleScore);
    bindTouchAction(document.querySelector(".hud-match-card"), toggleScore);
    bindTouchAction(document.getElementById("scoreboard"), () => {
      if (this.scoreboardToggled) {
        this.scoreboardToggled = false;
        btnScore?.classList.remove("active");
        this.ui.setScoreboardVisible(false, this.combatants);
      }
    });

    document.querySelectorAll(".w-slot[data-weapon]").forEach((slot) => {
      bindTouchAction(slot, () => {
        if (this.state !== "playing" || this.paused || !this.player?.alive) return;
        const w = slot.dataset.weapon;
        if (w) {
          if (w === "knife" || w === "grenade") this.adsDown = false;
          this._switchPlayerWeapon(w);
        }
      });
    });

    // Auto-pause on mobile tab switch / backgrounding to prevent stuck touch states
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.state === "playing" && !this.paused) {
        this.pauseMatch();
      }
    });
    window.addEventListener("blur", () => {
      if (this.state === "playing" && !this.paused) {
        this.pauseMatch();
      }
    });
  }

  _getTouchAimTarget(maxAngleCos = 0.984, maxRange = 28) {
    const p = this.player;
    if (!p || !p.alive) return null;
    const { origin, dir } = this._getPlayerAimRay();
    let bestTarget = null;
    let bestDot = maxAngleCos;

    for (const other of this.combatants) {
      if (other === p || !other.alive) continue;
      const drop = other.getStanceDrop();
      const aimPt = new THREE.Vector3(
        other.pos.x,
        other.pos.y + 1.24 - (other.crouchAlpha || 0) * 0.38 - drop,
        other.pos.z
      );
      const toBot = aimPt.clone().sub(origin);
      const dist = toBot.length();
      if (dist > maxRange || dist < 0.8) continue;
      const dirTo = toBot.divideScalar(dist);
      const dot = dir.dot(dirTo);
      if (dot < bestDot) continue;

      const wall = this.arena.raycast(origin, dirTo, dist - 0.15);
      if (wall && wall.distance < dist - 0.25) continue;

      bestDot = dot;
      bestTarget = { combatant: other, aimPt, dirTo, dist, dot };
    }
    return bestTarget;
  }

  _applyTouchLook(dx, dy) {
    if (this.state !== "playing" || this.paused || !this.player?.alive) return;
    const canAds = this.adsDown && this.player.hasLeftArm() && this.player.hasRightArm();

    // Sticky reticle friction when crosshair is already over a visible enemy on touch
    const assistTarget = this._getTouchAimTarget(0.986, 30);
    const stickyMult = assistTarget ? 0.68 : 1.0;

    const baseSens = 0.0044 * this.sensitivity * (canAds ? 0.62 : 1.0) * stickyMult;
    this.player.yaw -= dx * baseSens;
    this.player.pitch = THREE.MathUtils.clamp(this.player.pitch - dy * baseSens * 0.88, -1.48, 1.48);
    this.weaponSystem.addSway(dx * 1.4, dy * 1.4);
  }

  _applyTouchAimMagnetism(dt) {
    const p = this.player;
    if (!this.isTouchMode || !p || !p.alive || p.activeWeapon === "grenade") return;
    const target = this._getTouchAimTarget(0.985, 26);
    if (!target) return;

    const eyeHeight = Math.max(0.45, 1.60 - p.crouchAlpha * 0.58 - p.getStanceDrop());
    const eye = new THREE.Vector3(p.pos.x, p.pos.y + eyeHeight, p.pos.z);
    const delta = target.aimPt.clone().sub(eye);
    const horizDist = Math.max(0.01, Math.hypot(delta.x, delta.z));
    const desiredYaw = Math.atan2(-delta.x, -delta.z);
    const desiredPitch = THREE.MathUtils.clamp(Math.atan2(delta.y, horizDist), -1.42, 1.42);

    let yawDiff = desiredYaw - p.yaw;
    while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
    while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
    const pitchDiff = desiredPitch - p.pitch;

    const pullStrength = this.mouseDown ? 4.2 : 2.5;
    p.yaw += yawDiff * Math.min(1, dt * pullStrength);
    p.pitch = THREE.MathUtils.clamp(p.pitch + pitchDiff * Math.min(1, dt * pullStrength * 0.75), -1.48, 1.48);
  }

  _toggleCameraView() {
    this.thirdPerson = !this.thirdPerson;
    this.sound.playSwitch();
    if (this.player?.alive) {
      if (this.player.charInst) {
        this.player.charInst.root.visible = this.thirdPerson;
      }
      this.weaponSystem.setActiveViewmodel(
        this.player.activeWeapon,
        !this.thirdPerson && this.player.hasRightArm()
      );
    }
  }

  _switchPlayerWeapon(wId) {
    if (this.player.switchWeapon(wId)) {
      this.sound.stopReload();
      this.weaponSystem.setActiveViewmodel(wId, !this.thirdPerson && this.player.hasRightArm());
      this.weaponSystem.triggerSwitch();
      this.sound.playSwitch();
    }
  }

  _pickBestSpawn() {
    let best = this.arena.spawns[0];
    let bestMinD2 = -1;
    for (const sp of this.arena.spawns) {
      let minD2 = Infinity;
      for (const c of this.combatants) {
        if (!c.alive) continue;
        const d2 = c.pos.distanceToSquared(sp.position);
        if (d2 < minD2) minD2 = d2;
      }
      if (minD2 > bestMinD2) {
        bestMinD2 = minD2;
        best = sp;
      }
    }
    return best;
  }

  _getPlayerAimRay() {
    const p = this.player;
    if (!this.thirdPerson) {
      return {
        origin: this.camera.position.clone(),
        dir: new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion).normalize(),
      };
    }

    const eyeHeight = Math.max(0.45, 1.60 - p.crouchAlpha * 0.58 - p.getStanceDrop());
    const origin = new THREE.Vector3(p.pos.x, p.pos.y + eyeHeight, p.pos.z);
    const camOrigin = this.camera.position.clone();
    const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion).normalize();
    const actualCamDist = this.tpsActualDist ?? this.tpsCamDist;
    const minOffset = Math.max(0.35, actualCamDist * 0.85);
    const rayStart = camOrigin.clone().addScaledVector(camDir, minOffset);

    const wallHit = this.arena.raycast(rayStart, camDir, 80);
    let bestDist = wallHit ? wallHit.distance : 80;
    for (const other of this.combatants) {
      if (other === p || !other.alive) continue;
      const res = other.raycastHit(rayStart, camDir, bestDist);
      if (res && res.distance < bestDist) bestDist = res.distance;
    }

    const aimPoint = rayStart.addScaledVector(camDir, bestDist);
    const dir = aimPoint.sub(origin).normalize();
    return { origin, dir };
  }

  _tryPlayerFire(isClick) {
    const p = this.player;
    if (!p || !p.alive || !p.hasRightArm() || p.isReloading || p.fireCooldown > 0) return;
    const st = WEAPON_STATS[p.activeWeapon];
    const am = p.ammo[p.activeWeapon];
    if (am.mag <= 0) {
      if (am.reserve > 0 && p.startReload()) {
        this.adsDown = false;
        this.sound.playReload(p.activeWeapon);
      } else if (isClick || st.auto) {
        this._switchPlayerWeapon("knife");
      }
      return;
    }
    if (!isClick && !st.auto) return;

    const { origin, dir } = this._getPlayerAimRay();

    if (p.activeWeapon === "grenade") {
      this._throwGrenade(p, origin, dir);
      if (p.ammo.grenade.mag <= 0) {
        setTimeout(() => {
          if (this.state === "playing" && !this.paused && this.player?.alive && this.player.activeWeapon === "grenade") {
            this._switchPlayerWeapon(this.player.ammo.rifle.mag > 0 ? "rifle" : "knife");
          }
        }, 280);
      }
      return;
    }

    if (p.activeWeapon === "knife" && p.grounded && !p.isLegCrippled()) {
      // Slight melee lunge
      const fwd = new THREE.Vector3(dir.x, 0, dir.z).normalize();
      p.vel.addScaledVector(fwd, 4.2);
    }

    const effectiveAds = this.adsDown && p.hasLeftArm() && p.hasRightArm();
    this._executeFire(p, origin, dir, effectiveAds);
  }

  _throwQuickGrenade() {
    const p = this.player;
    if (!p || !p.alive || !p.hasRightArm() || p.isReloading || p.fireCooldown > 0) return;
    if (!p.ammo.grenade || p.ammo.grenade.mag <= 0) return;
    const { origin, dir } = this._getPlayerAimRay();
    this._throwGrenade(p, origin, dir);
    if (p.activeWeapon === "grenade" && p.ammo.grenade.mag <= 0) {
      setTimeout(() => {
        if (this.state === "playing" && !this.paused && this.player?.alive && this.player.activeWeapon === "grenade") {
          this._switchPlayerWeapon(this.player.ammo.rifle.mag > 0 ? "rifle" : "knife");
        }
      }, 280);
    }
  }

  _throwGrenade(thrower, origin, dir) {
    const am = thrower.ammo.grenade;
    if (!am || am.mag <= 0) return;
    if (thrower.spawnProtectTimer > 0) thrower.spawnProtectTimer = 0;
    am.mag -= 1;
    thrower.fireCooldown = 0.65;

    const distToPlayer = thrower.isPlayer ? 0 : thrower.pos.distanceTo(this.player.pos);
    const audioGain = thrower.isPlayer ? 1.0 : Math.max(0, 1.0 - distToPlayer / 30);
    this.sound.playGrenadePin(audioGain);

    if (thrower.isPlayer) {
      if (thrower.activeWeapon === "grenade") this.weaponSystem.triggerFireFX("grenade");
      else this.weaponSystem.switchDrop = Math.max(this.weaponSystem.switchDrop, 0.14);
    }
    if (thrower.animator) {
      thrower.animator.triggerSlash();
    }

    const nearWall = this.arena.raycast(origin, dir, 0.65);
    const fwdOffset = nearWall ? Math.max(0.10, nearWall.distance - 0.16) : 0.52;
    const spawnPos = origin.clone().addScaledVector(dir, fwdOffset);
    spawnPos.y -= 0.06;
    this.weaponSystem.spawnGrenade(spawnPos, dir, thrower, thrower.vel);
  }

  _detonateGrenade(g) {
    const distToPlayer = this.player ? g.pos.distanceTo(this.player.pos) : 30;
    const audioGain = Math.max(0, 1.0 - distToPlayer / 38);
    this.sound.playExplosion(audioGain);
    if (distToPlayer < 16) {
      this.camShake = Math.min(0.14, this.camShake + (1 - distToPlayer / 16) * 0.11);
    }

    const blastCenter = g.pos.clone().add(new THREE.Vector3(0, 0.22, 0));
    const radius = 6.2;
    const st = WEAPON_STATS.grenade;

    for (const c of this.combatants) {
      if (!c.alive || c.spawnProtectTimer > 0) continue;
      const torso = new THREE.Vector3(
        c.pos.x,
        c.pos.y + 1.05 - (c.crouchAlpha || 0) * 0.35 - c.getStanceDrop(),
        c.pos.z
      );
      const delta = torso.clone().sub(blastCenter);
      const dist = delta.length();
      if (dist > radius) continue;

      const dir = delta.clone().divideScalar(Math.max(0.01, dist));
      const wall = dist > 0.45 ? this.arena.raycast(blastCenter, dir, dist - 0.25) : null;
      if (wall && wall.distance < dist - 0.35) continue;

      const falloff = Math.max(0.18, 1.0 - (dist / radius) * 0.82);
      const rawDmg = st.damage * falloff * (c === g.thrower ? 0.55 : 1.0);
      c.lastAttacker = g.thrower;
      const res = c.applyDamage(rawDmg);

      const blastDir = dir.clone();
      blastDir.y = Math.max(0.28, blastDir.y + 0.35);
      blastDir.normalize();

      if (c.isPlayer) {
        this.sound.playHurt();
        this.ui.showDamageDirection(blastCenter, this.player.pos, this.player.yaw);
      }

      if (g.thrower?.isPlayer && c !== this.player) {
        this.sound.playHitmarker(false, res.killed);
        this.ui.showHitmarker(res.killed);
      }

      if (res.killed) {
        const zones = ["leftArm", "rightArm", "leftLeg", "rightLeg", "head"];
        const hitInfo = {
          point: torso,
          dir: blastDir,
          zone: zones[Math.floor(Math.random() * zones.length)],
          dist,
          headshot: false,
        };
        const killer = c === g.thrower ? c : g.thrower;
        this._handleKill(killer, c, hitInfo, st);
      } else if (res.actualDmg > 0) {
        c.vel.addScaledVector(blastDir, st.hitKnockback * falloff);
        this.ragdolls.spawnBloodBurst(torso, blastDir.clone().multiplyScalar(3.5), 6, false);

        // Close non-lethal frag blasts can blow off a limb too
        if (res.actualDmg >= 35 && c.charInst) {
          const intact = ["leftArm", "rightArm", "leftLeg", "rightLeg"].filter(
            (z) => !c.charInst.severedZones.has(z)
          );
          if (intact.length > 0 && (rawDmg >= 55 || Math.random() < 0.65)) {
            const z = intact[Math.floor(Math.random() * intact.length)];
            if (c.recordLimbDamage(z, 30)) {
              this._severCombatantLimb(c, z, torso, blastDir, st.impulse * 0.85, g.thrower);
            }
          }
        }
      }
    }
  }

  _severCombatantLimb(victim, zone, hitPoint, dir, impulse, shooter) {
    if (!victim?.charInst) return false;
    const boneName = LIMB_ZONES[zone]?.rootBone;
    const limbPos = new THREE.Vector3();
    const bone = boneName ? victim.charInst.bones[boneName] : null;
    if (bone) bone.getWorldPosition(limbPos);
    else limbPos.copy(hitPoint);

    if (!this.charFactory.severLimbOnSkeleton(victim.charInst, zone)) return false;

    victim.bleedRate += 4.5;
    if (shooter && shooter !== victim) shooter.gibs += 1;

    const launchVel = dir.clone().multiplyScalar(impulse * 0.72);
    this.ragdolls.spawnSeveredLimb(victim.charInst, zone, limbPos, launchVel);
    this.sound.playGore(shooter?.isPlayer || victim.isPlayer ? 1.0 : 0.55);

    // If shooting arm was severed, disarm them & drop their gun on the floor
    if (zone === "rightArm") {
      if (victim.charInst.weaponMount) {
        while (victim.charInst.weaponMount.children.length > 0) {
          victim.charInst.weaponMount.remove(victim.charInst.weaponMount.children[0]);
        }
      }
      const dropped = this.weaponSystem.createThirdPersonModel(victim.activeWeapon);
      this.ragdolls.spawnDroppedWeapon(dropped, limbPos, victim.vel, launchVel);

      if (victim.isPlayer) {
        victim.isReloading = false;
        victim.reloadTimer = 0;
        this.sound.stopReload();
        this.adsDown = false;
        this.weaponSystem.setActiveViewmodel(victim.activeWeapon, false);
      }
    } else if (zone === "leftArm" && victim.isPlayer) {
      this.adsDown = false;
    }

    const partNames = {
      leftArm: "LEFT ARM",
      rightArm: "RIGHT ARM",
      leftLeg: "LEFT LEG",
      rightLeg: "RIGHT LEG",
    };

    if (victim.isPlayer) {
      this.camShake = Math.min(0.12, this.camShake + 0.085);
      const effectTag =
        zone === "rightArm"
          ? " • DISARMED!"
          : zone === "leftArm"
            ? " • UNSTEADY AIM!"
            : victim.hasBothLegsSevered()
              ? " • IMMOBILIZED!"
              : " • CRIPPLED!";
      this.ui.showKillBanner(`YOUR ${partNames[zone] || "LIMB"} WAS BLOWN OFF${effectTag}`);
    } else if (shooter?.isPlayer) {
      this.ui.showKillBanner(`SEVERED ${victim.name}'S ${partNames[zone] || "LIMB"}!`);
    }

    return true;
  }

  _executeFire(shooter, origin, baseDir, isADS = false, dmgMult = 1.0, cooldownMult = 1.0) {
    const st = WEAPON_STATS[shooter.activeWeapon];
    const am = shooter.ammo[shooter.activeWeapon];
    if (shooter.spawnProtectTimer > 0) shooter.spawnProtectTimer = 0;
    if (am.mag !== Infinity) am.mag = Math.max(0, am.mag - 1);
    shooter.fireCooldown = st.fireRate * cooldownMult;

    // Distance gain for 3D audio
    const distToPlayer = shooter.isPlayer ? 0 : shooter.pos.distanceTo(this.player.pos);
    const audioGain = shooter.isPlayer ? 1.0 : Math.max(0, 1.0 - distToPlayer / 34);

    if (shooter.activeWeapon === "rifle") this.sound.playRifle(audioGain);
    else if (shooter.activeWeapon === "shotgun") this.sound.playShotgun(audioGain);
    else if (shooter.activeWeapon === "revolver") this.sound.playRevolver(audioGain);
    else this.sound.playKnifeSlash(audioGain);

    // Visual animations
    if (shooter.isPlayer) {
      const crouchFactor = 1 - (shooter.crouchAlpha || 0) * 0.22;
      const oneHandPitch = shooter.hasLeftArm() ? 1.0 : 1.45;
      const oneHandYaw = shooter.hasLeftArm() ? 1.0 : 1.75;
      const tpsPitchBoost = this.thirdPerson
        ? st.id === "shotgun"
          ? 1.45
          : st.id === "revolver"
            ? 1.4
            : 1.25
        : 1.0;
      const tpsYawBoost = this.thirdPerson
        ? st.id === "shotgun"
          ? 1.5
          : st.id === "revolver"
            ? 1.4
            : 1.2
        : 1.0;
      const tpsShakeMult = this.thirdPerson ? 1.45 : 1.0;
      this.weaponSystem.triggerFireFX(
        shooter.activeWeapon,
        this.thirdPerson ? shooter.charInst : null
      );
      this.camRecoilPitch += st.recoilPitch * (isADS ? 0.68 : 1.0) * crouchFactor * oneHandPitch * tpsPitchBoost;
      this.camRecoilYaw += (Math.random() - 0.5) * st.recoilYaw * crouchFactor * oneHandYaw * tpsYawBoost;
      const shakeGain =
        (shooter.activeWeapon === "shotgun" ? 0.062 : shooter.activeWeapon === "revolver" ? 0.042 : 0.01) *
        tpsShakeMult;
      const shakeCap = (shooter.activeWeapon === "rifle" ? 0.05 : 0.085) * tpsShakeMult;
      this.camShake = Math.min(shakeCap, this.camShake + shakeGain);
      if (this.thirdPerson) {
        this.tpsRecoilZ = Math.min(
          0.22,
          this.tpsRecoilZ +
            (st.id === "shotgun" ? 0.145 : st.id === "revolver" ? 0.10 : st.id === "rifle" ? 0.028 : 0)
        );
      }
    }
    if (shooter.animator) {
      if (shooter.activeWeapon === "knife") shooter.animator.triggerSlash();
      else shooter.animator.triggerFire(shooter.activeWeapon === "shotgun" ? 1.0 : shooter.activeWeapon === "revolver" ? 0.85 : 0.55);
    }

    let muzzleStart;
    if (shooter.isPlayer && !this.thirdPerson) {
      muzzleStart = this.weaponSystem.getMuzzleWorldPos(shooter.activeWeapon, origin, baseDir);
    } else if (shooter.charInst?.weaponMount) {
      shooter.charInst.root.updateMatrixWorld(true);
      const mp = shooter.charInst.weaponMount.getObjectByName("MuzzlePoint");
      if (mp) {
        muzzleStart = new THREE.Vector3();
        mp.getWorldPosition(muzzleStart);
      } else {
        muzzleStart = origin.clone().addScaledVector(baseDir, 0.5).add(new THREE.Vector3(0, -0.18, 0));
      }
    } else {
      muzzleStart = origin.clone().addScaledVector(baseDir, 0.5).add(new THREE.Vector3(0, -0.18, 0));
    }

    if (shooter.isPlayer && this.thirdPerson && st.id !== "knife") {
      this.weaponSystem.triggerThirdPersonFlash(muzzleStart, baseDir, st.id);
    }

    let anyHit = false;
    let anyHeadshot = false;
    let anyKill = false;
    const oneHandSpread = shooter.isPlayer && !shooter.hasLeftArm() ? 0.038 : 0;
    const spreadAmt = ((isADS ? st.adsSpread : st.spread) + oneHandSpread) * (1 - (shooter.crouchAlpha || 0) * 0.22);

    // Track per-victim damage in case multiple shotgun pellets hit same target
    const victimHits = new Map();

    for (let pIdx = 0; pIdx < st.pellets; pIdx++) {
      const dir = baseDir.clone();
      if (spreadAmt > 0) {
        dir.x += (Math.random() - 0.5) * spreadAmt * 2;
        dir.y += (Math.random() - 0.5) * spreadAmt * 2;
        dir.z += (Math.random() - 0.5) * spreadAmt * 2;
        dir.normalize();
      }

      const wallHit = this.arena.raycast(origin, dir, st.range);
      let maxT = wallHit ? wallHit.distance : st.range;

      let hitTarget = null;
      let hitRes = null;

      for (const other of this.combatants) {
        if (other === shooter || !other.alive) continue;
        const res = other.raycastHit(origin, dir, maxT);
        if (res && res.distance < maxT) {
          maxT = res.distance;
          hitTarget = other;
          hitRes = res;
        }
      }

      // Touch-only subtle bullet magnetism for near-miss shots on small phone screens
      if (!hitTarget && this.isTouchMode && shooter.isPlayer && st.id !== "knife") {
        let bestMagDot = 0.9988; // ~2.8 degree cone
        for (const other of this.combatants) {
          if (other === shooter || !other.alive) continue;
          const drop = other.getStanceDrop();
          const chestPt = new THREE.Vector3(
            other.pos.x,
            other.pos.y + 1.18 - (other.crouchAlpha || 0) * 0.35 - drop,
            other.pos.z
          );
          const toChest = chestPt.clone().sub(origin);
          const dist = toChest.length();
          if (dist > maxT || dist < 0.5) continue;
          const dirTo = toChest.divideScalar(dist);
          const dot = dir.dot(dirTo);
          if (dot > bestMagDot) {
            const snapRes = other.raycastHit(origin, dirTo, maxT);
            if (snapRes && snapRes.distance < maxT) {
              bestMagDot = dot;
              maxT = snapRes.distance;
              hitTarget = other;
              hitRes = snapRes;
            }
          }
        }
      }

      // Wide sweeping melee cone fallback for reliable knife hits
      if (!hitTarget && st.id === "knife") {
        let bestMeleeDist = st.range;
        for (const other of this.combatants) {
          if (other === shooter || !other.alive) continue;
          const drop = other.getStanceDrop();
          const torsoPt = new THREE.Vector3(other.pos.x, other.pos.y + 1.15 - drop, other.pos.z);
          const toTorso = torsoPt.clone().sub(origin);
          const dist = toTorso.length();
          if (dist > bestMeleeDist) continue;
          const dirTo = toTorso.clone().divideScalar(Math.max(0.001, dist));
          if (dirTo.dot(baseDir) < 0.72) continue;

          const wallBlock = this.arena.raycast(origin, dirTo, dist);
          if (wallBlock && wallBlock.distance < dist - 0.15) continue;

          const headPt = new THREE.Vector3(other.pos.x, other.pos.y + 1.56 - drop, other.pos.z);
          const toHead = headPt.clone().sub(origin).normalize();
          const isHeadSlash = toHead.dot(baseDir) > 0.91;

          bestMeleeDist = dist;
          hitTarget = other;
          hitRes = {
            distance: dist,
            point: isHeadSlash ? headPt : torsoPt,
            zone: isHeadSlash ? "head" : "chest",
          };
        }
      }

      if (hitTarget && hitRes) {
        anyHit = true;
        const isHead = hitRes.zone === "head";
        if (isHead) anyHeadshot = true;
        const dmg = st.damage * (isHead ? st.headMult : 1.0) * dmgMult;

        if (!victimHits.has(hitTarget)) {
          victimHits.set(hitTarget, {
            dmg: 0,
            zone: hitRes.zone,
            point: hitRes.point,
            dir: dir.clone(),
            dist: hitRes.distance,
            headshot: isHead,
          });
        }
        const agg = victimHits.get(hitTarget);
        agg.dmg += dmg;
        if (isHead) {
          agg.headshot = true;
          agg.zone = "head";
          agg.point = hitRes.point;
        }

        this.ragdolls.spawnBloodBurst(hitRes.point, dir.clone().multiplyScalar(2.2), shooter.activeWeapon === "shotgun" ? 4 : 6, false);
        if (shooter.activeWeapon !== "knife") {
          const tracerOrigin = hitRes.distance < 0.75 ? origin.clone().lerp(muzzleStart, 0.35) : muzzleStart;
          this.weaponSystem.spawnTracer(tracerOrigin, hitRes.point, st.tracerColor);
        }
      } else {
        const endPt = wallHit ? wallHit.point : origin.clone().addScaledVector(dir, st.range);
        if (shooter.activeWeapon !== "knife") {
          const tracerOrigin = wallHit && wallHit.distance < 0.75 ? origin.clone().lerp(muzzleStart, 0.35) : muzzleStart;
          this.weaponSystem.spawnTracer(tracerOrigin, endPt, st.tracerColor);
        }
        if (wallHit) {
          this.weaponSystem.spawnImpactSparks(wallHit.point, wallHit.normal, shooter.activeWeapon === "shotgun" ? 3 : 6);
          if (pIdx === 0) this.sound.playImpact(wallHit.isSteel, audioGain * 0.7);
        }
      }
    }

    if (shooter.isPlayer && (st.id === "shotgun" || st.id === "revolver" || (this.thirdPerson && st.id === "rifle"))) {
      const fovAdd = this.thirdPerson
        ? st.id === "shotgun"
          ? 5.2
          : st.id === "revolver"
            ? 3.4
            : 1.1
        : st.id === "shotgun"
          ? 4.2
          : 2.5;
      const fovCap = this.thirdPerson && st.id !== "rifle" ? 7.0 : 5.5;
      this.fovKick = Math.min(fovCap, this.fovKick + fovAdd);
    }

    // Apply aggregated damage, live bullet impact pushback, wall splatter, & live dismemberment!
    for (const [victim, info] of victimHits.entries()) {
      victim.lastAttacker = shooter;
      const result = victim.applyDamage(info.dmg);

      // Spray arterial blood onto wall/crate/container behind victim if nearby
      const wallBehind = this.arena.raycast(info.point, info.dir, 2.4);
      if (wallBehind && wallBehind.distance < 2.4) {
        this.ragdolls.spawnWallBloodSplatter(
          wallBehind.point,
          wallBehind.normal,
          st.id === "shotgun" ? 1.02 : 0.68
        );
      }

      if (victim.isPlayer) {
        this.sound.playHurt();
        this.camShake = Math.min(0.06, this.camShake + 0.025);
        this.ui.showDamageDirection(shooter.pos, this.player.pos, this.player.yaw);
      }

      if (result.killed) {
        anyKill = true;
        this._handleKill(shooter, victim, info, st);
      } else if (result.actualDmg > 0) {
        // Snappy live bullet impact knockback
        const kb = st.hitKnockback || 1.5;
        victim.vel.x += info.dir.x * kb;
        victim.vel.z += info.dir.z * kb;
        this.ragdolls.spawnBloodBurst(info.point, info.dir.clone().multiplyScalar(3.4), 6, false);

        // Live Non-Lethal Limb Dismemberment (arms & legs can be shot off BEFORE dying!)
        if (victim.charInst && victim.recordLimbDamage(info.zone, info.dmg)) {
          this._severCombatantLimb(victim, info.zone, info.point, info.dir, st.impulse, shooter);
        }
      }
    }

    if (shooter.isPlayer && anyHit) {
      if (shooter.activeWeapon === "knife") {
        this.sound.playKnifeHit();
        this.camShake = Math.min(0.06, this.camShake + 0.022);
      }
      this.sound.playHitmarker(anyHeadshot, anyKill);
      this.ui.showHitmarker(anyKill);
    }
  }

  _handleKill(killer, victim, hitInfo, weaponStats) {
    const isSelfKill = !killer || killer === victim;
    if (!isSelfKill) {
      killer.kills += 1;
      if (killer.isPlayer && killer.alive) {
        killer.hp = Math.min(100, killer.hp + 15);
        this.fovKick = Math.min(4.0, this.fovKick + 1.8);
        if (this.multiKillTimer > 0) this.multiKillCount += 1;
        else this.multiKillCount = 1;
        this.multiKillTimer = 4.5;
        if (this.multiKillCount >= 2) {
          this.sound.playKillStreak(this.multiKillCount);
        }
      }
    }

    let dismemberedZone = null;
    if (victim.charInst) {
      victim.charInst.root.visible = true;
      // Decide if dismemberment triggers on lethal shot
      let targetZone = hitInfo.zone;
      if (targetZone === "chest" && (weaponStats.id === "shotgun" || weaponStats.id === "knife")) {
        const limbs = ["head", "leftArm", "rightArm", "leftLeg", "rightLeg"];
        targetZone = limbs[Math.floor(Math.random() * limbs.length)];
      }
      const closeShotgun = weaponStats.id === "shotgun" && hitInfo.dist < 10;
      const shouldSever =
        LIMB_ZONES[targetZone] &&
        !victim.charInst.severedZones.has(targetZone) &&
        (hitInfo.headshot || closeShotgun || Math.random() < weaponStats.dismemberChance);

      if (shouldSever) {
        const boneName = LIMB_ZONES[targetZone].rootBone;
        const limbWorldPos = new THREE.Vector3();
        const bone = victim.charInst.bones[boneName];
        if (bone) bone.getWorldPosition(limbWorldPos);
        else limbWorldPos.copy(hitInfo.point);

        if (this.charFactory.severLimbOnSkeleton(victim.charInst, targetZone)) {
          dismemberedZone = targetZone;
          if (killer && killer !== victim) killer.gibs += 1;
          const launchVel = hitInfo.dir.clone().multiplyScalar(weaponStats.impulse * 0.65);
          this.ragdolls.spawnSeveredLimb(victim.charInst, targetZone, limbWorldPos, launchVel);
          this.sound.playGore(killer?.isPlayer || victim.isPlayer ? 1.0 : 0.5);
        }
      }

      // Subtle, weighty lethal bullet pushback onto ragdoll + drop held weapon (if still holding it)
      const impulse = hitInfo.dir.clone().multiplyScalar(weaponStats.impulse);
      impulse.y += weaponStats.id === "shotgun" ? 1.8 : 0.85;
      const droppedWeapon = victim.hasRightArm() ? this.weaponSystem.createThirdPersonModel(victim.activeWeapon) : null;
      this.ragdolls.spawnRagdoll(victim.charInst, impulse, hitInfo.zone, victim.vel, droppedWeapon);
      victim.charInst = null; // Owned by ragdoll until cleanup!
    }

    // Extra blood fountain & floor pool (reduced ~25% for cleaner combat readability)
    this.ragdolls.spawnBloodBurst(hitInfo.point, hitInfo.dir.clone().multiplyScalar(3.2), 21, true);
    this.ragdolls.spawnBloodDecal(new THREE.Vector3(victim.pos.x, victim.pos.y, victim.pos.z), 1.12);

    this.ui.addKillFeed(killer, victim, weaponStats.label, hitInfo.headshot, dismemberedZone);

    if (killer?.isPlayer && !isSelfKill) {
      const tags = [];
      if (this.multiKillCount === 2) tags.push("DOUBLE KILL");
      else if (this.multiKillCount === 3) tags.push("TRIPLE KILL");
      else if (this.multiKillCount >= 4) tags.push("RAMPAGE");
      if (hitInfo.headshot) tags.push("HEADSHOT");
      if (dismemberedZone) tags.push("DISMEMBERED");
      this.ui.showKillBanner(`ELIMINATED ${victim.name}${tags.length ? " • " + tags.join(" • ") : ""}`);
    }

    if (victim.isPlayer) {
      this.multiKillCount = 0;
      this.multiKillTimer = 0;
      this.sound.stopReload();
      if (this.isTouchMode) {
        this.adsDown = false;
        this.touchCrouch = false;
        this.mouseDown = false;
        document.getElementById("btn-mob-fire")?.classList.remove("active");
      }
      this.weaponSystem.setActiveViewmodel(this.player.activeWeapon, false);
      this.ui.showDeathOverlay(isSelfKill ? "YOURSELF" : killer.name);
    }

    // Check score limit victory!
    if (!isSelfKill && killer.kills >= this.scoreLimit) {
      this._endMatch();
    }
  }

  _endMatch() {
    if (this.state === "gameover") return;
    this.state = "gameover";
    this.paused = false;
    this.sound.stopReload();
    this.resetTouchInputs();
    this.sound.resume();
    if (document.pointerLockElement === this.canvas) {
      document.exitPointerLock?.();
    }
    this.ui.setPointerHint(false);
    this.weaponSystem.setActiveViewmodel(this.player.activeWeapon, false);
    this.ui.showGameOver(this.combatants);
  }

  _updatePlayer(dt) {
    const p = this.player;
    p.updateTimers(dt);

    if (!p.alive) {
      p.respawnTimer -= dt;
      this.ui.updateDeathCountdown(Math.max(0, Math.ceil(p.respawnTimer)));
      if (this.thirdPerson) {
        const focus = new THREE.Vector3(p.pos.x, p.pos.y + 0.45, p.pos.z);
        const backDir = new THREE.Vector3(Math.sin(p.yaw), 0.36, Math.cos(p.yaw)).normalize();
        const wall = this.arena.raycast(focus, backDir, 2.5);
        const dist = wall ? Math.max(0.6, wall.distance - 0.2) : 2.3;
        const targetPos = focus.clone().addScaledVector(backDir, dist);
        targetPos.y = Math.max(p.pos.y + 0.35, targetPos.y);
        this.camera.position.lerp(targetPos, Math.min(1, dt * 6));
        this.camera.lookAt(focus);
      } else {
        // Dramatic death camera tilt looking down
        const back = new THREE.Vector3(Math.sin(p.yaw) * 0.45, 0.52, Math.cos(p.yaw) * 0.45);
        this.camera.position.lerp(p.pos.clone().add(back), dt * 4);
        this.camera.rotation.z = THREE.MathUtils.lerp(this.camera.rotation.z, 0.38, dt * 5);
      }
      if (p.respawnTimer <= 0) {
        const sp = this._pickBestSpawn();
        p.spawnAt(sp.position, sp.yaw);
        if (p.charInst) p.charInst.root.visible = this.thirdPerson;
        this.coyoteTimer = 0;
        this.jumpBufferTimer = 0;
        this.wasPlayerGrounded = true;
        this.landDip = 0;
        this.tpsCamDist = 2.15;
        this.tpsAdsAlpha = 0;
        this.tpsRecoilZ = 0;
        this.camera.rotation.z = 0;
        this.weaponSystem.setActiveViewmodel(p.activeWeapon, !this.thirdPerson);
        this.ui.hideDeathOverlay();
      }
      return;
    }

    // Arterial stump bleeding when player is dismembered while alive
    if (p.bleedRate > 0 && p.alive) {
      p.hp = Math.max(0, p.hp - p.bleedRate * dt);
      p.bleedDripTimer += dt;
      if (p.bleedDripTimer > 0.28) {
        p.bleedDripTimer = 0;
        const spurtPos = new THREE.Vector3(p.pos.x, p.pos.y + 1.05 - p.getStanceDrop(), p.pos.z);
        this.ragdolls.spawnBloodBurst(spurtPos, p.vel.clone().multiplyScalar(0.3), 2, false);
        if (p.grounded && Math.random() < 0.34) {
          this.ragdolls.spawnBloodDecal(p.pos, 0.36);
        }
      }
      if (p.hp <= 0) {
        p.alive = false;
        p.deaths += 1;
        p.respawnTimer = 3.0;
        p.isReloading = false;
        p.reloadTimer = 0;
        this.sound.stopReload();
        const killer = p.lastAttacker || p;
        const hitInfo = {
          point: new THREE.Vector3(p.pos.x, p.pos.y + 1.0 - p.getStanceDrop(), p.pos.z),
          dir: new THREE.Vector3(0, 0, -1),
          zone: "chest",
          dist: 3,
          headshot: false,
        };
        this._handleKill(killer, p, hitInfo, WEAPON_STATS[killer.activeWeapon] || WEAPON_STATS.rifle);
        return;
      }
    }

    // Movement & crouch input (Hold C only; disabled when leg-crippled)
    let fwdInput = 0;
    let rightInput = 0;
    if (this.keys["KeyW"] || this.keys["ArrowUp"]) fwdInput += 1;
    if (this.keys["KeyS"] || this.keys["ArrowDown"]) fwdInput -= 1;
    if (this.keys["KeyD"] || this.keys["ArrowRight"]) rightInput += 1;
    if (this.keys["KeyA"] || this.keys["ArrowLeft"]) rightInput -= 1;
    if (this.isTouchMode) {
      fwdInput = THREE.MathUtils.clamp(fwdInput + this.touchMoveY, -1, 1);
      rightInput = THREE.MathUtils.clamp(rightInput + this.touchMoveX, -1, 1);
    }

    const crippled = p.isLegCrippled();
    const bothLegsLost = p.hasBothLegsSevered();
    const shiftHeld = !!(this.keys["ShiftLeft"] || this.keys["ShiftRight"]);
    let wantCrouch = !crippled && (!!this.keys["KeyC"] || (this.isTouchMode && this.touchCrouch));
    if (!crippled && !wantCrouch && p.crouchAlpha > 0.04) {
      const ceilCheck = this.arena.raycast(
        new THREE.Vector3(p.pos.x, p.pos.y + 0.9, p.pos.z),
        new THREE.Vector3(0, 1, 0),
        1.05
      );
      if (ceilCheck && ceilCheck.distance < 0.96) {
        wantCrouch = true;
      }
    }
    p.isCrouching = wantCrouch;
    p.crouchAlpha = THREE.MathUtils.lerp(p.crouchAlpha, wantCrouch ? 1 : 0, Math.min(1, dt * 13));
    p.height = Math.max(0.75, THREE.MathUtils.lerp(1.76, 1.14, p.crouchAlpha) - p.getStanceDrop());

    const effectiveAds = this.adsDown && p.hasLeftArm() && p.hasRightArm();
    const wantSprint =
      ((shiftHeld && fwdInput > 0) || (this.isTouchMode && this.touchSprint && fwdInput > 0.45)) &&
      !effectiveAds &&
      !wantCrouch &&
      !crippled;
    p.isSprinting = wantSprint;
    const knifeBoost = p.activeWeapon === "knife" ? 1.2 : 1.0;
    const baseSpeed = wantCrouch ? 3.9 : wantSprint ? 9.2 : effectiveAds ? 4.6 : 6.8;
    const legMult = bothLegsLost ? 0 : crippled ? 0.40 : 1.0;
    const maxSpeed = baseSpeed * knifeBoost * legMult;

    const fwd = new THREE.Vector3(-Math.sin(p.yaw), 0, -Math.cos(p.yaw));
    const right = new THREE.Vector3(Math.cos(p.yaw), 0, -Math.sin(p.yaw));
    const wishDir = new THREE.Vector3().addScaledVector(fwd, fwdInput).addScaledVector(right, rightInput);
    if (this.isTouchMode) {
      const len = wishDir.length();
      if (len > 1) wishDir.divideScalar(len);
    } else if (wishDir.lengthSq() > 0) {
      wishDir.normalize();
    }

    // Coyote time + jump buffering for ultra-responsive jumps on ledges & ramps
    this.coyoteTimer = p.grounded ? 0.11 : Math.max(0, this.coyoteTimer - dt);
    this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - dt);
    if (this.jumpBufferTimer > 0 && this.coyoteTimer > 0 && !crippled) {
      p.vel.y = 7.75;
      p.grounded = false;
      this.coyoteTimer = 0;
      this.jumpBufferTimer = 0;
    }

    const accel = p.grounded ? 15.0 : 5.5;
    p.vel.x = THREE.MathUtils.lerp(p.vel.x, wishDir.x * maxSpeed, Math.min(1, dt * accel));
    p.vel.z = THREE.MathUtils.lerp(p.vel.z, wishDir.z * maxSpeed, Math.min(1, dt * accel));
    p.vel.y -= 20.5 * dt;

    const preFallVy = p.vel.y;
    const moveRes = this.arena.moveCharacter(p.pos, p.vel, p.radius, p.height, dt);
    p.grounded = moveRes.grounded;
    p.onSteel = moveRes.onSteel;

    if (!this.wasPlayerGrounded && p.grounded && preFallVy < -3.2) {
      this.landDip = Math.min(0.10, Math.abs(preFallVy) * 0.008);
      this.sound.playFootstep(p.onSteel, wantCrouch ? 0.8 : 1.3);
    }
    this.wasPlayerGrounded = p.grounded;
    const dampFast = 1 - Math.exp(-16 * dt);
    const dampRec = 1 - Math.exp(-12 * dt);
    this.landDip = THREE.MathUtils.lerp(this.landDip, 0, dampFast);

    // Footstep SFX
    const horizSpeed = Math.hypot(p.vel.x, p.vel.z);
    if (p.grounded && horizSpeed > 1.2) {
      this.footstepTimer -= dt * (wantSprint ? 1.35 : wantCrouch ? 0.72 : 1.0);
      if (this.footstepTimer <= 0) {
        this.footstepTimer = 0.36;
        this.sound.playFootstep(p.onSteel, wantCrouch ? 0.56 : 1.0);
      }
    }

    // Continuous auto-fire & keep weapon pointed forward while shooting on the run
    if (this.mouseDown && (this.pointerLocked || this.isTouchMode) && p.hasRightArm()) {
      if (!p.isReloading && p.ammo[p.activeWeapon]?.mag > 0) {
        this.weaponSystem.fireHoldTimer = Math.max(this.weaponSystem.fireHoldTimer, 0.22);
      }
      this._tryPlayerFire(false);
    }

    if (this.isTouchMode && (this.mouseDown || this.touchLooking || Math.hypot(this.touchMoveX, this.touchMoveY) > 0.22)) {
      this._applyTouchAimMagnetism(dt);
    }

    // Pickups check
    this._checkPickups(p);

    // Camera transform + framerate-independent recoil recovery + ADS FOV (1P & 3P)
    this.camRecoilPitch = THREE.MathUtils.lerp(this.camRecoilPitch, 0, dampRec);
    this.camRecoilYaw = THREE.MathUtils.lerp(this.camRecoilYaw, 0, dampRec);
    this.camShake = Math.max(0, this.camShake - dt * 0.28);
    this.tpsRecoilZ = THREE.MathUtils.lerp(this.tpsRecoilZ, 0, Math.min(1, dt * 15));

    const shakeX = (Math.random() - 0.5) * this.camShake;
    const shakeY = (Math.random() - 0.5) * this.camShake;

    const bob = p.grounded && horizSpeed > 0.5 ? Math.sin(this.weaponSystem.bobPhase * 2) * (wantCrouch ? 0.012 : 0.022) : 0;
    const eyeHeight = Math.max(0.45, 1.60 - p.crouchAlpha * 0.58 - p.getStanceDrop());
    const camPitch = THREE.MathUtils.clamp(p.pitch + this.camRecoilPitch + shakeY, -1.52, 1.52);
    const camYaw = p.yaw + this.camRecoilYaw + shakeX;

    if (this.thirdPerson) {
      const targetTpsAds =
        effectiveAds && p.activeWeapon !== "knife" && p.activeWeapon !== "grenade" && !p.isReloading && !wantSprint ? 1 : 0;
      this.tpsAdsAlpha = THREE.MathUtils.lerp(this.tpsAdsAlpha, targetTpsAds, Math.min(1, dt * 14));

      const tpsPitch = THREE.MathUtils.clamp(camPitch, -1.28, 1.28);
      const qCam = new THREE.Quaternion().setFromEuler(new THREE.Euler(tpsPitch, camYaw, 0, "YXZ"));
      const camFwd = new THREE.Vector3(0, 0, -1).applyQuaternion(qCam);
      const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(qCam);
      const camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(qCam);

      const pivot = new THREE.Vector3(p.pos.x, p.pos.y + eyeHeight + bob * 0.4 - this.landDip, p.pos.z);
      let rightOff = THREE.MathUtils.lerp(0.46, 0.38, this.tpsAdsAlpha);
      const upOff = THREE.MathUtils.lerp(0.18, 0.10, this.tpsAdsAlpha);
      const desiredBack = THREE.MathUtils.lerp(2.15, 1.32, this.tpsAdsAlpha);

      const shoulderWall = this.arena.raycast(pivot, camRight, rightOff + 0.18);
      if (shoulderWall && shoulderWall.distance < rightOff + 0.18) {
        rightOff = Math.max(0.05, shoulderWall.distance - 0.18);
      }

      const shoulderPivot = pivot
        .clone()
        .addScaledVector(camRight, rightOff)
        .addScaledVector(camUp, upOff);
      const backDir = camFwd.clone().negate();
      const backWall = this.arena.raycast(shoulderPivot, backDir, desiredBack + 0.22);
      const targetDist = backWall ? Math.max(0.35, backWall.distance - 0.18) : desiredBack;
      const distLerp = targetDist < this.tpsCamDist ? Math.min(1, dt * 24) : Math.min(1, dt * 10);
      this.tpsCamDist = THREE.MathUtils.lerp(this.tpsCamDist, targetDist, distLerp);
      const maxSafeDist = backWall ? Math.max(0.35, backWall.distance - 0.14) : this.tpsCamDist + this.tpsRecoilZ;
      const finalDist = Math.min(this.tpsCamDist + this.tpsRecoilZ, maxSafeDist);
      this.tpsActualDist = finalDist;

      this.camera.position.copy(shoulderPivot).addScaledVector(camFwd, -finalDist);
      this.camera.position.y = Math.max(p.pos.y + 0.22, this.camera.position.y);
      this.camera.rotation.set(tpsPitch, camYaw, 0);
    } else {
      this.camera.position.set(p.pos.x, p.pos.y + eyeHeight + bob - this.landDip, p.pos.z);
      this.camera.rotation.set(camPitch, camYaw, 0);
    }

    this.fovKick = Math.max(0, this.fovKick - dt * 16);
    if (this.multiKillTimer > 0) this.multiKillTimer = Math.max(0, this.multiKillTimer - dt);

    const baseFov =
      effectiveAds && p.activeWeapon !== "knife" && p.activeWeapon !== "grenade" && !p.isReloading
        ? p.activeWeapon === "revolver"
          ? 60
          : 56
        : wantSprint
          ? this.thirdPerson
            ? 78
            : 82
          : this.thirdPerson
            ? 72
            : 76;
    const targetFov = baseFov + this.fovKick;
    if (Math.abs(this.camera.fov - targetFov) > 0.05) {
      this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, Math.min(1, dt * 14));
      this.camera.updateProjectionMatrix();
    }

    // Keep player's 3rd-person body animated & hitboxes accurate in both 1P and 3P
    if (p.charInst) {
      p.charInst.root.visible = this.thirdPerson;
      p.updateAnimation(dt);
    }
    this.weaponSystem.setActiveViewmodel(p.activeWeapon, !this.thirdPerson && p.hasRightArm());

    const st = WEAPON_STATS[p.activeWeapon];
    const reloadProg = p.isReloading && st.reloadTime > 0 ? 1 - p.reloadTimer / st.reloadTime : 0;
    this.weaponSystem.updateViewmodel(
      dt,
      p.activeWeapon,
      horizSpeed,
      p.grounded,
      wantSprint,
      effectiveAds,
      p.isReloading,
      reloadProg
    );
  }

  _updateBots(dt) {
    for (const bc of this.botControllers) {
      const b = bc.bot;
      b.updateTimers(dt);

      if (!b.alive) {
        b.respawnTimer -= dt;
        if (b.respawnTimer <= 0) {
          const sp = this._pickBestSpawn();
          b.spawnAt(sp.position, sp.yaw);
          bc.onSpawn();
        }
        continue;
      }

      const intent = bc.update(dt, this.combatants);
      b.vel.y -= 20.5 * dt;
      const res = this.arena.moveCharacter(b.pos, b.vel, b.radius, b.height, dt);
      b.grounded = res.grounded;

      this._checkPickups(b);

      // Arterial stump bleeding when dismembered while alive
      if (b.bleedRate > 0 && b.alive) {
        b.hp = Math.max(0, b.hp - b.bleedRate * dt);
        b.bleedDripTimer += dt;
        if (b.bleedDripTimer > 0.28) {
          b.bleedDripTimer = 0;
          b._redrawNameplate();
          const spurtPos = new THREE.Vector3(b.pos.x, b.pos.y + 1.05 - b.getStanceDrop(), b.pos.z);
          this.ragdolls.spawnBloodBurst(spurtPos, b.vel.clone().multiplyScalar(0.3), 2, false);
          if (b.grounded && Math.random() < 0.34) {
            this.ragdolls.spawnBloodDecal(b.pos, 0.36);
          }
        }
        if (b.hp <= 0) {
          b.alive = false;
          b.deaths += 1;
          b.respawnTimer = 3.0;
          if (b.nameSprite) {
            b.nameSprite.visible = false;
            b.nameSprite.parent?.remove(b.nameSprite);
          }
          const killer = b.lastAttacker || b;
          const hitInfo = {
            point: new THREE.Vector3(b.pos.x, b.pos.y + 1.0 - b.getStanceDrop(), b.pos.z),
            dir: new THREE.Vector3(0, 0, -1),
            zone: "chest",
            dist: 3,
            headshot: false,
          };
          this._handleKill(killer, b, hitInfo, WEAPON_STATS[killer.activeWeapon] || WEAPON_STATS.rifle);
          continue;
        }
      }

      if (intent?.action === "fire") {
        this._executeFire(b, intent.origin, intent.dir, false, intent.dmgMult ?? 1.0, intent.cooldownMult ?? 1.0);
      } else if (intent?.action === "grenade") {
        this._throwGrenade(b, intent.origin, intent.dir);
      }

      b.updateAnimation(dt);

      // Update floating bot nameplate visibility (only when within 24m & in line-of-sight)
      if (b.nameSprite && this.player) {
        const d = b.pos.distanceTo(this.player.pos);
        if (d < 24) {
          const camEye = this.camera.position;
          const bHead = new THREE.Vector3(b.pos.x, b.pos.y + 1.85 - b.getStanceDrop(), b.pos.z);
          const dir = bHead.sub(camEye);
          const len = dir.length();
          dir.divideScalar(Math.max(0.01, len));
          const wall = this.arena.raycast(camEye, dir, len);
          b.nameSprite.visible = !wall || wall.distance >= len - 0.25;
        } else {
          b.nameSprite.visible = false;
        }
      }
    }
  }

  _checkPickups(combatant) {
    for (const pk of this.arena.pickups) {
      if (!pk.active) continue;
      if (combatant.pos.distanceToSquared(pk.position) > 1.35 * 1.35) continue;

      let consumed = false;
      if (pk.kind === "health" && (combatant.hp < 100 || combatant.bleedRate > 0)) {
        combatant.hp = Math.min(100, combatant.hp + 50);
        combatant.bleedRate = 0;
        if (!combatant.isPlayer) combatant._redrawNameplate();
        consumed = true;
      } else if (pk.kind === "armor" && combatant.armor < 100) {
        combatant.armor = Math.min(100, combatant.armor + 50);
        consumed = true;
      } else if (pk.kind === "heavy_weapon") {
        // Refill all weapons + grenades & grant +25 armor
        combatant.ammo.rifle.reserve = WEAPON_STATS.rifle.reserveMax;
        combatant.ammo.shotgun.mag = WEAPON_STATS.shotgun.magSize;
        combatant.ammo.shotgun.reserve = WEAPON_STATS.shotgun.reserveMax;
        combatant.ammo.revolver.reserve = WEAPON_STATS.revolver.reserveMax;
        combatant.ammo.grenade.mag = Math.min(4, (combatant.ammo.grenade.mag || 0) + 2);
        combatant.armor = Math.min(100, combatant.armor + 25);
        consumed = true;
      }

      if (consumed) {
        pk.active = false;
        pk.respawnTimer = pk.cooldown;
        if (combatant.isPlayer) {
          this.sound.playPickup(pk.kind);
          this.ui.flashPickup();
        }
      }
    }
  }

  _loop = () => {
    requestAnimationFrame(this._loop);
    const dt = Math.min(this.clock.getDelta(), 0.05);

    if (this.state === "menu") {
      this.menuTime += dt;
      this.arena.updatePickups(dt, this.menuTime);

      // Stage-reactive cinematic camera framing the full operative on the Foundry platform
      const isArsenal = this.menuStage === "arsenal";
      const swayX = Math.sin(this.menuTime * 0.42) * (isArsenal ? 0.08 : 0.14);
      const targetPos = isArsenal
        ? new THREE.Vector3(-0.42 + swayX, 3.55, 3.65)
        : this.menuStage === "home"
          ? new THREE.Vector3(-0.75 + swayX, 3.36, 4.95)
          : new THREE.Vector3(-0.82 + swayX, 3.38, 4.65);
      const lookX = this.isTouchMode
        ? isArsenal
          ? -0.58
          : this.menuStage === "home"
            ? -0.82
            : -0.96
        : isArsenal
          ? -0.30
          : -0.62;
      const targetLook = isArsenal
        ? new THREE.Vector3(lookX, 3.40, 1.45)
        : new THREE.Vector3(lookX, 3.22, 1.45);
      const targetFov = isArsenal ? 48 : 54;

      this.menuCamPos.lerp(targetPos, Math.min(1, dt * 5));
      this.menuLookAt.lerp(targetLook, Math.min(1, dt * 5));
      this.camera.position.copy(this.menuCamPos);
      this.camera.lookAt(this.menuLookAt);
      if (Math.abs(this.camera.fov - targetFov) > 0.05) {
        this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, Math.min(1, dt * 6));
        this.camera.updateProjectionMatrix();
      }

      if (this.previewChar && this.previewAnimator) {
        this.previewAnimator.update(dt, 0, true, 0, this.previewWeapon);
        const targetYaw = isArsenal
          ? Math.PI - 0.52 + Math.sin(this.menuTime * 0.55) * 0.24
          : Math.PI - 0.36 + Math.sin(this.menuTime * 0.45) * 0.15;
        this.previewChar.root.rotation.y = THREE.MathUtils.lerp(
          this.previewChar.root.rotation.y,
          targetYaw,
          Math.min(1, dt * 5)
        );
      }
    } else if (this.state === "playing" && !this.paused) {
      this.matchTime = Math.max(0, this.matchTime - dt);
      this.matchClock += dt;
      this.arena.updatePickups(dt, this.matchClock);
      this._updatePlayer(dt);
      if (this.state === "playing") this._updateBots(dt);
      this.ragdolls.update(dt);
      this.weaponSystem.updateFX(
        dt,
        this.arena,
        (g) => this._detonateGrenade(g),
        (pos) => {
          const d = this.player ? pos.distanceTo(this.player.pos) : 25;
          this.sound.playImpact(true, Math.max(0, 1 - d / 24) * 0.5);
        }
      );

      if (this.state === "playing") {
        this.ui.updateHUD(
          this.player,
          this.combatants,
          this.matchTime,
          this.adsDown && this.player.hasLeftArm() && this.player.hasRightArm(),
          this.weaponSystem.grenades,
          this.camRecoilPitch,
          this.thirdPerson
        );

        if (this.matchTime <= 0) {
          this._endMatch();
        }
      }
    }

    this.renderer.render(this.scene, this.camera);
  };
}
