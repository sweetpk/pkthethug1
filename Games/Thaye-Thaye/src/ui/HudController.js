import { WEAPON_STATS } from "../weapons/WeaponSystem.js";

const ZONE_LABELS = {
  head: "DECAPITATED",
  leftArm: "LEFT ARM SEVERED",
  rightArm: "RIGHT ARM SEVERED",
  leftLeg: "LEFT LEG SEVERED",
  rightLeg: "RIGHT LEG SEVERED",
};

export class HudController {
  constructor() {
    this.menuOverlay = document.getElementById("menu-overlay");
    this.gameoverOverlay = document.getElementById("gameover-overlay");
    this.hud = document.getElementById("hud");
    this.btnDeploy = document.getElementById("btn-deploy");
    this.btnQuickDeploy = document.getElementById("btn-quick-deploy");

    this.timerEl = document.getElementById("hud-timer");
    this.scoreLimitEl = document.getElementById("hud-score-limit");
    this.miniStandingsEl = document.getElementById("hud-mini-standings");
    this.spawnShieldEl = document.getElementById("spawn-shield");
    this.killFeedEl = document.getElementById("kill-feed");

    this.hpBar = document.getElementById("hp-bar");
    this.hpVal = document.getElementById("hp-val");
    this.armorBar = document.getElementById("armor-bar");
    this.armorVal = document.getElementById("armor-val");

    this.ammoReadout = document.getElementById("ammo-readout");
    this.ammoMag = document.getElementById("ammo-mag");
    this.ammoReserve = document.getElementById("ammo-reserve");
    this.nadeCountEl = document.getElementById("hud-nade-count");
    this.stancePill = document.getElementById("stance-pill");
    this.camModePill = document.getElementById("cam-mode-pill");
    this.limbStatusEl = document.getElementById("limb-status");
    this.grenadeWarning = document.getElementById("grenade-warning");
    this.weaponSlots = document.querySelectorAll(".w-slot");

    this.crosshair = document.getElementById("crosshair");
    this.hitmarker = document.getElementById("hitmarker");
    this.killBanner = document.getElementById("kill-banner");
    this.reloadPrompt = document.getElementById("reload-prompt");
    this.reloadFill = document.getElementById("reload-fill");
    this.pointerHint = document.getElementById("pointer-hint");

    this.deathOverlay = document.getElementById("death-overlay");
    this.deathKiller = document.getElementById("death-killer");
    this.respawnCountdown = document.getElementById("respawn-countdown");

    this.scoreboard = document.getElementById("scoreboard");
    this.sbBody = document.getElementById("sb-body");

    this.dmgVignette = document.getElementById("damage-vignette");
    this.pickupFlash = document.getElementById("pickup-flash");
    this.dmgIndicators = document.getElementById("damage-indicators");

    this.hitmarkerTimer = null;
    this.bannerTimer = null;
  }

  onAssetsReady() {
    if (this.btnDeploy) {
      this.btnDeploy.disabled = false;
      this.btnDeploy.textContent = "DEPLOY";
    }
    if (this.btnQuickDeploy) {
      this.btnQuickDeploy.disabled = false;
      const lbl = this.btnQuickDeploy.querySelector(".nav-label");
      if (lbl) lbl.textContent = "QUICK DEPLOY";
    }
  }

  showMatchHUD(scoreLimit) {
    this.menuOverlay.classList.add("hidden");
    this.gameoverOverlay.classList.add("hidden");
    this.deathOverlay.classList.add("hidden");
    this.scoreboard.classList.add("hidden");
    this.killBanner.classList.add("hidden");
    this.grenadeWarning?.classList.add("hidden");
    this.dmgVignette.classList.remove("low-hp");
    this.hud.classList.remove("hidden");
    this.scoreLimitEl.textContent = String(scoreLimit);
    this.killFeedEl.innerHTML = "";
  }

  showMenu() {
    this.hud.classList.add("hidden");
    this.gameoverOverlay.classList.add("hidden");
    this.deathOverlay.classList.add("hidden");
    this.scoreboard.classList.add("hidden");
    this.grenadeWarning?.classList.add("hidden");
    this.dmgVignette.classList.remove("low-hp");
    this.menuOverlay.classList.remove("hidden");
  }

  setPointerHint(show) {
    this.pointerHint.classList.toggle("hidden", !show);
  }

  showHitmarker(isKill) {
    this.hitmarker.classList.add("show");
    this.hitmarker.classList.toggle("kill", isKill);
    clearTimeout(this.hitmarkerTimer);
    this.hitmarkerTimer = setTimeout(() => {
      this.hitmarker.classList.remove("show", "kill");
    }, 120);
  }

  showKillBanner(text) {
    this.killBanner.textContent = text;
    this.killBanner.classList.remove("hidden");
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => {
      this.killBanner.classList.add("hidden");
    }, 1900);
  }

  flashPickup() {
    this.pickupFlash.style.opacity = "1";
    setTimeout(() => {
      this.pickupFlash.style.opacity = "0";
    }, 160);
  }

  showDamageDirection(attackerPos, playerPos, playerYaw) {
    this.dmgVignette.style.opacity = "1";
    setTimeout(() => {
      this.dmgVignette.style.opacity = "0";
    }, 180);

    const dx = attackerPos.x - playerPos.x;
    const dz = attackerPos.z - playerPos.z;
    // Angle in world relative to -Z, minus playerYaw
    const angleToAttacker = Math.atan2(-dx, -dz);
    const relAngle = playerYaw - angleToAttacker;

    const arc = document.createElement("div");
    arc.className = "dmg-arc";
    arc.style.transform = `rotate(${relAngle}rad)`;
    this.dmgIndicators.appendChild(arc);
    setTimeout(() => arc.remove(), 480);
  }

  addKillFeed(killer, victim, weaponLabel, isHeadshot, dismemberedZone) {
    const item = document.createElement("div");
    item.className = "kf-item";
    item.style.borderRightColor = killer.palette.hex;

    const kColor = killer.palette.hex;
    const vColor = victim.palette.hex;
    let badges = "";
    if (isHeadshot) badges += `<span class="kf-tag">HS</span>`;
    if (dismemberedZone) {
      const label = ZONE_LABELS[dismemberedZone] || "GIB";
      badges += `<span class="kf-tag">${label}</span>`;
    }

    item.innerHTML = `
      <span style="color:${kColor}">${killer.name}</span>
      <span class="kf-weapon">${weaponLabel}</span>
      ${badges}
      <span style="color:${vColor}">${victim.name}</span>
    `;
    this.killFeedEl.prepend(item);
    while (this.killFeedEl.children.length > 5) {
      this.killFeedEl.lastChild.remove();
    }
    setTimeout(() => item.remove(), 5500);
  }

  showDeathOverlay(killerName) {
    this.deathKiller.textContent = `ELIMINATED BY ${killerName}`;
    this.deathOverlay.classList.remove("hidden");
  }

  updateDeathCountdown(sec) {
    this.respawnCountdown.textContent = String(sec);
  }

  hideDeathOverlay() {
    this.deathOverlay.classList.add("hidden");
  }

  setScoreboardVisible(show, combatants) {
    this.scoreboard.classList.toggle("hidden", !show);
    if (!show) return;
    const sorted = [...combatants].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    this.sbBody.innerHTML = sorted
      .map((c, i) => {
        const kd = c.deaths === 0 ? c.kills.toFixed(1) : (c.kills / c.deaths).toFixed(2);
        return `
          <tr class="${c.isPlayer ? "is-player" : ""}">
            <td>#${i + 1}</td>
            <td style="color:${c.palette.hex}">${c.name}</td>
            <td>${c.kills}</td>
            <td>${c.deaths}</td>
            <td>${kd}</td>
            <td>${c.gibs}</td>
          </tr>
        `;
      })
      .join("");
  }

  showGameOver(combatants) {
    this.hud.classList.add("hidden");
    this.deathOverlay.classList.add("hidden");
    this.scoreboard.classList.add("hidden");
    this.gameoverOverlay.classList.remove("hidden");

    const sorted = [...combatants].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    const winner = sorted[0];
    const titleEl = document.getElementById("go-winner");
    const subEl = document.getElementById("go-subtitle");
    const listEl = document.getElementById("go-standings");

    if (winner.isPlayer) {
      titleEl.textContent = "VICTORY";
      titleEl.style.color = "#24d8ff";
      subEl.textContent = `${winner.kills} Kills • ${winner.gibs} Dismemberments`;
    } else {
      titleEl.textContent = "DEFEAT";
      titleEl.style.color = "#f87171";
      subEl.textContent = `${winner.name} won with ${winner.kills} Kills.`;
    }

    listEl.innerHTML = sorted
      .map(
        (c, i) => `
      <div class="go-row ${c.isPlayer ? "is-player" : ""}">
        <span>#${i + 1} <b style="color:${c.palette.hex}">${c.name}</b></span>
        <span>${c.kills} K / ${c.deaths} D • ${c.gibs} Gibs</span>
      </div>
    `
      )
      .join("");
  }

  updateHUD(player, combatants, matchTime, isADS, grenades = [], recoilPitch = 0, isThirdPerson = false) {
    // Timer
    const mins = Math.floor(matchTime / 60);
    const secs = Math.floor(matchTime % 60);
    this.timerEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    // Mini standings
    const sorted = [...combatants].sort((a, b) => b.kills - a.kills);
    this.miniStandingsEl.innerHTML = sorted
      .map(
        (c) => `
      <div class="mini-pill ${c.isPlayer ? "is-player" : ""}">
        <span class="mini-dot" style="background:${c.palette.hex}"></span>
        <span>${c.name}</span>
        <span>${c.kills}</span>
      </div>
    `
      )
      .join("");

    // Vitals & Low-HP pulse
    const hp = Math.ceil(player.hp);
    const ar = Math.ceil(player.armor);
    this.hpBar.style.width = `${hp}%`;
    this.hpBar.classList.toggle("low", hp <= 30);
    this.dmgVignette.classList.toggle("low-hp", player.alive && hp > 0 && hp <= 30);
    this.hpVal.textContent = String(hp);
    this.armorBar.style.width = `${ar}%`;
    this.armorVal.textContent = String(ar);

    // Weapon slots, stance & ammo
    this.weaponSlots.forEach((el) => {
      el.classList.toggle("active", el.dataset.weapon === player.activeWeapon);
    });
    if (this.nadeCountEl) {
      this.nadeCountEl.textContent = String(player.ammo.grenade?.mag ?? 0);
    }
    if (this.stancePill) {
      const bothLegsLost = player.hasBothLegsSevered();
      const crippled = player.isLegCrippled();
      const crouched = !crippled && (player.isCrouching || player.crouchAlpha > 0.35);
      this.stancePill.textContent = bothLegsLost
        ? "DOWNED"
        : crippled
          ? "CRIPPLED"
          : crouched
            ? "CROUCH"
            : player.isSprinting
              ? "SPRINT"
              : "STAND";
      this.stancePill.classList.toggle("crouched", crouched);
      this.stancePill.classList.toggle("sprinting", !crouched && !crippled && player.isSprinting);
      this.stancePill.classList.toggle("crippled", crippled);
    }
    if (this.camModePill) {
      this.camModePill.textContent = isThirdPerson ? "3P [V]" : "1P [V]";
    }
    if (this.limbStatusEl) {
      const chips = [];
      if (player.bleedRate > 0) chips.push(`<span class="limb-chip bleed">BLEEDING</span>`);
      if (!player.hasRightArm()) chips.push(`<span class="limb-chip">DISARMED</span>`);
      if (!player.hasLeftArm()) chips.push(`<span class="limb-chip">ONE-HANDED</span>`);
      if (player.hasBothLegsSevered()) chips.push(`<span class="limb-chip">NO LEGS</span>`);
      else if (player.isLegCrippled()) chips.push(`<span class="limb-chip">1 LEG LOST</span>`);
      this.limbStatusEl.innerHTML = chips.join("");
      this.limbStatusEl.classList.toggle("hidden", chips.length === 0);
    }

    const st = WEAPON_STATS[player.activeWeapon];
    const am = player.ammo[player.activeWeapon];
    if (am.mag === Infinity) {
      this.ammoMag.textContent = "∞";
      this.ammoReserve.textContent = "MELEE";
      this.ammoReadout?.classList.remove("low");
    } else if (player.activeWeapon === "grenade") {
      this.ammoMag.textContent = String(am.mag);
      this.ammoReserve.textContent = "FRAG";
      this.ammoReadout?.classList.toggle("low", am.mag === 0);
    } else {
      this.ammoMag.textContent = String(am.mag);
      this.ammoReserve.textContent = String(am.reserve);
      this.ammoReadout?.classList.toggle("low", am.mag <= Math.ceil(st.magSize * 0.25));
    }

    // Nearby live frag grenade warning
    if (this.grenadeWarning) {
      const danger = grenades.some((g) => g.pos.distanceTo(player.pos) < 6.4);
      this.grenadeWarning.classList.toggle("hidden", !danger);
    }

    // Reload bar
    if (player.isReloading && player.hasRightArm() && st.reloadTime > 0) {
      this.reloadPrompt.classList.remove("hidden");
      const prog = Math.min(100, ((st.reloadTime - player.reloadTimer) / st.reloadTime) * 100);
      this.reloadFill.style.width = `${prog}%`;
    } else {
      this.reloadPrompt.classList.add("hidden");
    }

    // Spawn shield indicator
    if (this.spawnShieldEl) {
      if (player.alive && player.spawnProtectTimer > 0) {
        this.spawnShieldEl.classList.remove("hidden");
        this.spawnShieldEl.textContent = `SPAWN SHIELD ${player.spawnProtectTimer.toFixed(1)}s`;
      } else {
        this.spawnShieldEl.classList.add("hidden");
      }
    }

    // Crosshair spread & crisp sight takeover when ADS on Rifle / Revolver (1st-person only)
    const speed = Math.hypot(player.vel.x, player.vel.z);
    const adsSight =
      !isThirdPerson &&
      isADS &&
      (player.activeWeapon === "rifle" || player.activeWeapon === "revolver") &&
      !player.isReloading &&
      !player.isSprinting &&
      player.hasLeftArm() &&
      player.hasRightArm();
    const adsShotgun = isADS && player.activeWeapon === "shotgun" && !player.isReloading && !player.isSprinting;
    const crouchTighten = 1 - (player.crouchAlpha || 0) * 0.28;
    const oneHandSpreadPx = player.hasLeftArm() ? 0 : 8;
    const recoilBloom = Math.min(11, Math.abs(recoilPitch) * 65);
    const spreadPx = isADS
      ? 3.5 + oneHandSpreadPx
      : (7 + speed * 1.1 + (player.activeWeapon === "shotgun" ? 8 : 0) + recoilBloom + oneHandSpreadPx) * crouchTighten;
    this.crosshair.style.setProperty("--spread", `${spreadPx.toFixed(1)}px`);
    this.crosshair.style.opacity = !player.hasRightArm() ? "0.35" : adsSight ? "0" : adsShotgun ? "0.85" : "1";
  }
}
