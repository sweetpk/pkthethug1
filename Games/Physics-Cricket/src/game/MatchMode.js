export function createExhibitionMatch(overs = 5, rng = Math.random) {
  const validOvers = [2, 5, 10].includes(overs) ? overs : 5;
  const totalOvers = validOvers;
  const maxBalls = totalOvers * 6;
  const maxWickets = 10;

  // Target required run rate (RPO): 2 overs -> 15.0-19.0 RRR (30-38),
  // 5 & 10 overs -> 18.0-21.0 RRR (90-105 / 180-210)
  const [minRR, maxRR] = totalOvers === 2 ? [15.0, 19.0] : [18.0, 21.0];
  const minTarget = Math.ceil(totalOvers * minRR);
  const maxTarget = Math.floor(totalOvers * maxRR);
  const target = minTarget + Math.floor(rng() * (maxTarget - minTarget + 1));
  const reqRR = +((target / maxBalls) * 6).toFixed(1);

  return {
    mode: 'exhibition',
    overs: totalOvers,
    totalOvers,
    maxBalls,
    maxWickets,
    startBalls: 0,
    startRuns: 0,
    startWickets: 0,
    wicketsRemaining: maxWickets,
    target,
    needRuns: target,
    ballsRemaining: maxBalls,
    reqRR,
    banner: `CHASE ${target} IN ${totalOvers} OVERS!`
  };
}

export function createScenarioMatch(rng = Math.random) {
  const totalOvers = 10;
  const maxBalls = totalOvers * 6; // 60
  const maxWickets = 10;

  // 4 or 5 overs already passed -> 24 or 30 balls bowled -> 36 or 30 balls left
  const elapsedOvers = rng() < 0.5 ? 4 : 5;
  const startBalls = elapsedOvers * 6;
  const ballsRemaining = maxBalls - startBalls;

  // 3 to 5 wickets remaining -> 5, 6, or 7 wickets down
  const wicketsRemaining = 3 + Math.floor(rng() * 3);
  const startWickets = maxWickets - wicketsRemaining;

  // Realistic base score already accumulated at ~13.5-17.0 RPO
  const priorRR = 13.5 + rng() * 3.5;
  const startRuns = Math.round((startBalls / 6) * priorRR);

  // Remaining chase requires 21.0-24.0 RRR
  const minNeed = Math.ceil((ballsRemaining / 6) * 21.0);
  const maxNeed = Math.floor((ballsRemaining / 6) * 24.0);
  const needRuns = minNeed + Math.floor(rng() * (maxNeed - minNeed + 1));
  const target = startRuns + needRuns;
  const reqRR = +((needRuns / ballsRemaining) * 6).toFixed(1);

  return {
    mode: 'scenario',
    overs: totalOvers,
    totalOvers,
    maxBalls,
    maxWickets,
    elapsedOvers,
    startBalls,
    startRuns,
    startWickets,
    wicketsRemaining,
    target,
    needRuns,
    ballsRemaining,
    reqRR,
    banner: `SCENARIO: ${startRuns}/${startWickets} (${elapsedOvers}.0 OV) · NEED ${needRuns} OFF ${ballsRemaining}B`
  };
}

export function evaluateMatchStatus({ runs, wickets, balls, target, maxBalls, maxWickets }) {
  const runsNeeded = Math.max(0, target - runs);
  const ballsRemaining = Math.max(0, maxBalls - balls);
  const wicketsRemaining = Math.max(0, maxWickets - wickets);
  const reqRR = ballsRemaining > 0
    ? +((runsNeeded / ballsRemaining) * 6).toFixed(1)
    : (runsNeeded > 0 ? 99.9 : 0);

  if (runs >= target) {
    return {
      finished: true,
      outcome: 'won',
      title: 'VICTORY!',
      badge: 'TARGET CHASED!',
      summary: `Won by ${wicketsRemaining} wicket${wicketsRemaining === 1 ? '' : 's'} (${ballsRemaining} ball${ballsRemaining === 1 ? '' : 's'} remaining)`,
      runsNeeded: 0,
      ballsRemaining,
      wicketsRemaining,
      reqRR: 0
    };
  }

  if (wickets >= maxWickets || balls >= maxBalls) {
    if (runs === target - 1) {
      return {
        finished: true,
        outcome: 'tied',
        title: 'MATCH TIED!',
        badge: 'SCORES LEVEL',
        summary: `Tied at ${runs}/${wickets} (Target ${target})`,
        runsNeeded,
        ballsRemaining,
        wicketsRemaining,
        reqRR
      };
    }

    const margin = (target - 1) - runs;
    return {
      finished: true,
      outcome: 'lost',
      title: 'DEFEAT!',
      badge: wickets >= maxWickets ? 'ALL OUT' : 'OVERS UP',
      summary: `Lost by ${margin} run${margin === 1 ? '' : 's'} · Needed ${target}`,
      runsNeeded,
      ballsRemaining,
      wicketsRemaining,
      reqRR
    };
  }

  return {
    finished: false,
    outcome: 'in_progress',
    runsNeeded,
    ballsRemaining,
    wicketsRemaining,
    reqRR
  };
}
