// =========================
// COLOR + PALETTE CONFIG
// =========================

const COLOR_CHANNELS = {
  bg: "#f1fa79".match(/\w\w/g).map((c) => parseInt(c, 16)),
  surface: "#f1fa79".match(/\w\w/g).map((c) => parseInt(c, 16)),
  text: "#000000".match(/\w\w/g).map((c) => parseInt(c, 16)),
  accent: "#334b00".match(/\w\w/g).map((c) => parseInt(c, 16)),
  mid: "#0004ff".match(/\w\w/g).map((c) => parseInt(c, 16)),
  muted: "#80ff00".match(/\w\w/g).map((c) => parseInt(c, 16)),
};
const COMPONENT_COLORS = {
  gearOuter: [104, 190, 28],      // outer big gear
  gearInner: [0, 150, 30],        // inner gear
  gearSpokes: [20, 115, 20],      // spokes / arms
  gearPetals: [205, 235, 25],     // flowers inside each gear

  lifeMark: [205, 235, 25],       // "Life" mark on non-index pages
  centerFlower: [245, 245, 40],   // big flower connecting all gears
  centerDot: [25, 95, 0],         // middle dot

  legendOuter: [90, 180, 25],
  legendInner: [0, 135, 35],
};
const ASPECT_PETAL_COLORS = {
  career: [210, 235, 25],
  mental: [160, 230, 45],
  financial: [120, 205, 35],
  physical: [185, 245, 30],
  community: [145, 220, 55],
  social: [230, 240, 45],
};
const ASPECT_OUTER_COLORS = {
  career: [100, 190, 30],
  mental: [135, 210, 45],
  financial: [80, 165, 25],
  physical: [115, 205, 35],
  community: [145, 215, 60],
  social: [95, 185, 45],
};
const ORIGINAL_GREEN_PALETTE = {
  channels: {
    bg: [241, 250, 121],
    surface: [241, 250, 121],
    text: [0, 0, 0],
    accent: [51, 75, 0],
    mid: [0, 4, 255],
    muted: [128, 255, 0],
  },
  components: {
    gearOuter: [104, 190, 28],
    gearInner: [0, 150, 30],
    gearSpokes: [20, 115, 20],
    gearPetals: [205, 235, 25],
    lifeMark: [205, 235, 25],
    centerFlower: [245, 245, 40],
    centerDot: [25, 95, 0],
    legendOuter: [90, 180, 25],
    legendInner: [0, 135, 35],
  },
  aspectPetals: {
    career: [210, 235, 25],
    mental: [160, 230, 45],
    financial: [120, 205, 35],
    physical: [185, 245, 30],
    community: [145, 220, 55],
    social: [230, 240, 45],
  },
  aspectOuters: {
    career: [100, 190, 30],
    mental: [135, 210, 45],
    financial: [80, 165, 25],
    physical: [115, 205, 35],
    community: [145, 215, 60],
    social: [95, 185, 45],
  },
};
const OVERLOAD_RED_PALETTE = {
  channels: {
    bg: [254, 206, 121],
    surface: [254, 206, 121],
    text: [33, 1, 0],
    accent: [140, 9, 2],
    mid: [177, 74, 54],
    muted: [230, 163, 65],
  },
  components: {
    gearOuter: [177, 74, 54],
    gearInner: [140, 9, 2],
    gearSpokes: [33, 1, 0],
    gearPetals: [230, 163, 65],
    lifeMark: [230, 163, 65],
    centerFlower: [230, 163, 65],
    centerDot: [33, 1, 0],
    legendOuter: [177, 74, 54],
    legendInner: [140, 9, 2],
  },
  aspectPetals: {
    career: [177, 74, 54],
    mental: [230, 163, 65],
    financial: [177, 74, 54],
    physical: [230, 163, 65],
    community: [177, 74, 54],
    social: [230, 163, 65],
  },
  aspectOuters: {
    career: [177, 74, 54],
    mental: [230, 163, 65],
    financial: [140, 9, 2],
    physical: [177, 74, 54],
    community: [140, 9, 2],
    social: [177, 74, 54],
  },
};
const FATIGUE_BLUE_PALETTE = {
  channels: {
    bg: [171, 210, 250],
    surface: [171, 210, 250],
    text: [9, 21, 64],
    accent: [27, 44, 193],
    mid: [61, 81, 140],
    muted: [118, 146, 255],
  },
  components: {
    gearOuter: [27, 44, 193],
    gearInner: [61, 81, 140],
    gearSpokes: [9, 21, 64],
    gearPetals: [118, 146, 255],
    lifeMark: [118, 146, 255],
    centerFlower: [118, 146, 255],
    centerDot: [9, 21, 64],
    legendOuter: [27, 44, 193],
    legendInner: [61, 81, 140],
  },
  aspectPetals: {
    career: [27, 44, 193],
    mental: [118, 146, 255],
    financial: [61, 81, 140],
    physical: [61, 81, 140],
    community: [27, 44, 193],
    social: [118, 146, 255],
  },
  aspectOuters: {
    career: [27, 44, 193],
    mental: [61, 81, 140],
    financial: [9, 21, 64],
    physical: [27, 44, 193],
    community: [61, 81, 140],
    social: [27, 44, 193],
  },
};
const PALETTE_TRANSITION_SPEED = 0.025;

// =========================
// DATA + GEAR CONFIG
// =========================

const STORAGE_KEY = "lifeformData";
const GEAR_SPIN_SPEED = Math.PI / 360;
// const BG_MOLD_COUNT = 1200;
// const BG_MOLD_FADE_ALPHA = 9;
// const BG_MOLD_DRAW_ALPHA = 22;
// const BG_MOLD_SPEED = 0.62;
// const BG_MOLD_TURN = 0.05;
// const BG_MOLD_DOT_SIZE = 0.9;
// const ENABLE_BACKGROUND_MOLD = false;

const REFERENCE_GEAR = {
  numTeeth: 52,
  outerR: 175,
  toothBase: 155,
  hubOuter: 70,
  holeR: 58,
  numSpokes: 34,
  gap: 0.025,
  burstOuter: 148,
  burstInner: 84,
};
const GEAR_STYLE_PRESETS = {
  career: {
    teethMin: 72,
    teethMax: 42,
    ringInnerRatio: 0.62,
    innerTeeth: 28,
    spokeCount: 4,
    spokeWeight: 8,
    toothDepth: 1.0,
    roundnessBoost: 0.15,
    petalCount: 5,
    jitter: 0,
  },

  financial: {
    teethMin: 42,
    teethMax: 24,
    ringInnerRatio: 0.55,
    innerTeeth: 18,
    spokeCount: 6,
    spokeWeight: 14,
    toothDepth: 0.75,
    roundnessBoost: 0.35,
    petalCount: 6,
    jitter: 0,
  },

  social: {
    teethMin: 52,
    teethMax: 30,
    ringInnerRatio: 0.68,
    innerTeeth: 22,
    spokeCount: 8,
    spokeWeight: 7,
    toothDepth: 0.65,
    roundnessBoost: 0.55,
    petalCount: 7,
    jitter: 0,
  },

  community: {
    teethMin: 60,
    teethMax: 34,
    ringInnerRatio: 0.64,
    innerTeeth: 20,
    spokeCount: 5,
    spokeWeight: 9,
    toothDepth: 1.15,
    roundnessBoost: 0.2,
    petalCount: 5,
    jitter: 0.04,
  },

  physical: {
    teethMin: 48,
    teethMax: 28,
    ringInnerRatio: 0.58,
    innerTeeth: 16,
    spokeCount: 6,
    spokeWeight: 13,
    toothDepth: 0.9,
    roundnessBoost: 0.45,
    petalCount: 6,
    jitter: 0,
  },

  mental: {
    teethMin: 76,
    teethMax: 48,
    ringInnerRatio: 0.72,
    innerTeeth: 32,
    spokeCount: 3,
    spokeWeight: 6,
    toothDepth: 0.55,
    roundnessBoost: 0.7,
    petalCount: 5,
    jitter: 0.08,
  },
};
// 6-gear layout configuration (including the new mental gear at index 1)
const FIXED_GEAR_LAYOUT = [
  { x: 0.0,   y: -1.0,  direction: -1, baseScale: 1.0, startAngle: 0.16 },  // Top (Career)
  { x: 0.866, y: -0.5,  direction: 1,  baseScale: 1.0, startAngle: -0.05 }, // Upper Right (Mental)
  { x: -0.866,y: 0.5,   direction: -1, baseScale: 1.0, startAngle: 0.22 },  // Lower Left (Financial)
  { x: 0.0,   y: 1.0,   direction: 1,  baseScale: 1.0, startAngle: -0.12 }, // Bottom (Physical)
  { x: -0.866,y: -0.5,  direction: 1,  baseScale: 1.0, startAngle: 0.08 },  // Upper Left (Community)
  { x: 0.866, y: 0.5,   direction: -1, baseScale: 1.0, startAngle: -0.08 }, // Lower Right (Social)
];

// Clockwise visual order of the 6 outer gears:
// top -> upper right -> lower right -> bottom -> lower left -> upper left
let VISUAL_RING_ORDER = [0, 1, 5, 3, 2, 4];
let layoutSlotByGearIndex = [];

function shuffleGearLayoutSlots() {
  layoutSlotByGearIndex = ELEMENTS.map((_, index) => index);

  for (let i = layoutSlotByGearIndex.length - 1; i > 0; i -= 1) {
    const j = floor(random(i + 1));
    const temp = layoutSlotByGearIndex[i];
    layoutSlotByGearIndex[i] = layoutSlotByGearIndex[j];
    layoutSlotByGearIndex[j] = temp;
  }
}

function getVisualGearOrder() {
  // Converts visual slot order into actual gear index order.
  // This is needed after randomizing positions.
  const order = [];

  for (let i = 0; i < VISUAL_RING_ORDER.length; i += 1) {
    const layoutSlot = VISUAL_RING_ORDER[i];
    const gearIndex = layoutSlotByGearIndex.indexOf(layoutSlot);

    if (gearIndex !== -1) {
      order.push(gearIndex);
    }
  }

  return order;
}
function getDirectionFromLayoutSlot(layoutSlot) {
  // Visual slot order:
  // 0 = position 1
  // 1 = position 2
  // 5 = position 3
  // 3 = position 4
  // 2 = position 5
  // 4 = position 6
  const visualPosition = VISUAL_RING_ORDER.indexOf(layoutSlot);

  // fallback
  if (visualPosition === -1) return 1;

  // position 1, 3, 5 = clockwise
  // position 2, 4, 6 = counter-clockwise
  return visualPosition % 2 === 0 ? -1 : 1;
}

const GEAR_OVERLAP_PX = 10;
const LAYOUT_RELAX_STEPS = 140;
const LAYOUT_RELAX_STRENGTH = 0.35;
const ANGLE_ANCHOR_STRENGTH = 0.08;
const BIG_GEAR_OFFSET_X_RATIO = 0.05;
const BIG_GEAR_OFFSET_Y_RATIO = 0.08;
const LEGEND_GEAR_SCALE = 0.16;
const LEGEND_GEAR_SCORE = 8;
const LEGEND_GEAR_SUBSCORES = [8, 8, 8];

let reverseDirectionSet = new Set();

function chooseAlternatingReverseGears() {
  reverseDirectionSet.clear();

  const visualGearOrder = getVisualGearOrder();
  const startParity = floor(random(2));

  for (let pos = 0; pos < visualGearOrder.length; pos += 1) {
    if (pos % 2 === startParity) {
      reverseDirectionSet.add(visualGearOrder[pos]);
    }
  }
}

const ELEMENTS = [
  {
    name: "career",
    label: "CAREER WELLBEING",
    keys: ["purpose", "autonomy", "growth"],
  },
  {
    name: "mental",
    label: "MENTAL WELLBEING",
    keys: ["mindfulness", "resilience", "balance"],
  },
  {
    name: "financial",
    label: "FINANCIAL WELLBEING",
    keys: ["security", "freedom", "generosity"],
  },
  {
    name: "physical",
    label: "PHYSICAL WELLBEING",
    keys: ["energy", "sleep", "movement"],
  },
  {
    name: "community",
    label: "COMMUNITY WELLBEING",
    keys: ["safety", "pride", "contribution"],
  },
  {
    name: "social",
    label: "SOCIAL WELLBEING",
    keys: ["intimacy", "belonging", "support"],
  },
];

function createBloomProfile() {
  return {
    bloomPhase: Math.random() * Math.PI * 2,
    bloomSpeed: 0.00185 + Math.random() * 0.00035,
    bloomPetalOffsets: Array.from({ length: 8 }, () => {
      return (Math.random() - 0.5) * 0.55; //randomise petal offset for bloom effect (up to +/- 0.55)
    }),
  };
}

// =========================
// PAGE STATE
// =========================

let gears = ELEMENTS.map((element, index) => ({
  ...element,
  ...createBloomProfile(),
  index,
  x: 0,
  y: 0,
  scale: 1,
  radius: REFERENCE_GEAR.outerR,
  direction: FIXED_GEAR_LAYOUT[index].direction,
  startAngle: FIXED_GEAR_LAYOUT[index].startAngle,
  score: 5,
  subScores: [5, 5, 5],
}));

let currentPageName = "home";
let isHeroPage = false;
let isStoryPage = false;
let heroGears = [];
let heroFlowers = [];
let clickFlowers = [];

const HERO_BASE_SPIN_SPEED = Math.PI / 420;
const HERO_CLICK_BOOST = Math.PI / 120;
const HERO_BOOST_DECAY = 0.94;
const CLICK_FLOWER_DURATION = 450;

let masterAngle = 0;
let clusterAngle = 0;
let clusterCenterX = 0;
let clusterCenterY = 0;
let needsRecompute = true;
let sketchReady = false;
let instructionPanel = null;
let soundToggleButton = null;
let outtroArrow = null;
let outtroArrowShown = false;
let soundEnabled = true;
// let bgMoldLayer = null;
// let bgMolds = [];
let aspectLegendAnchors = [];

// Motion fatigue state
let currentSpinSpeed = 0;
let fastSpinStartedAt = null;
let fatigueStoppedAt = null;
let isFatigued = false;
let fatigueMessage = null;

const FAST_SPIN_THRESHOLD = Math.PI / 200;

// Base fatigue timing.
const FATIGUE_AFTER_MS = 30000;
const FATIGUE_MIN_MS = 18000;
const FATIGUE_MAX_MS = 90000;

const REST_BEFORE_RESTART_MS = 30000;
const SLIDER_RETURN_SPEED = 0.025;

// If all aspect sliders are near the middle -> no fatigue
const BALANCED_CENTER_VALUE = 5;
const BALANCED_TOLERANCE = 0.35;

// A gear counts as "biggest size" when its aspect score is near max.
const BIGGEST_GEAR_SCORE = 9;


window.lifeformSketchState = {
  markDirty() {
    needsRecompute = true;
  },
};

window.lifeformData = normalizeLifeformData(loadStoredLifeformData());
persistLifeformData();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGearsPageUI);
} else {
  initGearsPageUI();
}

function getCurrentLifeformPageName() {
  const activePage = document.querySelector("[data-page].is-active");
  if (activePage?.dataset.page) {
    return activePage.dataset.page;
  }

  if (document.body.classList.contains("page-gears")) return "gears";
  if (document.body.classList.contains("page-outtro-story")) return "outtro";
  if (document.body.classList.contains("page-intro-story")) return "intro";
  return "home";
}

function applySketchPageState(pageName = getCurrentLifeformPageName()) {
  currentPageName = pageName;
  isHeroPage = currentPageName === "home";
  isStoryPage = currentPageName === "intro" || currentPageName === "outtro";

  instructionPanel = document.getElementById("instruction-panel");
  soundToggleButton = document.querySelector("[data-sound-toggle], #sound-toggle");
  outtroArrow = document.getElementById("outtro-next");

  if (currentPageName !== "gears") {
    closeInstructionPanel();
  }

  if (sketchReady && isHeroPage && !heroGears.length) {
    initializeHeroGears();
    initializeHeroFlowers();
  }

  if (sketchReady) {
    aspectLegendAnchors = [];
    needsRecompute = true;
  }
}

document.addEventListener("lifeform:pagechange", (event) => {
  applySketchPageState(event.detail?.page);
});

window.lifeformSetSketchPage = applySketchPageState;

// =========================
// P5 LIFECYCLE
// =========================

function setup() {
  const container = document.getElementById("canvas-container");
  if (!container) {
    noCanvas();
    return;
  }

  applySketchPageState();

  const canvas = createCanvas(displayWidth, displayHeight);
  canvas.parent("canvas-container");
  pixelDensity(1);
  angleMode(RADIANS);
  noStroke();

  // if (!isHeroPage && ENABLE_BACKGROUND_MOLD) {
  //   initializeBackgroundMolds();
  // }

  shuffleGearLayoutSlots();
  chooseAlternatingReverseGears();
  assignRankedMaxScaleProfile();
  rankedMaxScaleByAspect = getScaleRankOrder();

  if (isHeroPage) {
    initializeHeroGears();
    initializeHeroFlowers();
  }

  sketchReady = true;
  needsRecompute = true;
}

function draw() {
  if (!sketchReady) return;

  if (currentPageName === "gears") {
    updateFatigueState();
  }

  updateDynamicPalette();
  updateOuttroArrowState();
  background(...COLOR_CHANNELS.bg);

  if (isStoryPage) {
    drawClickFlowers();
    return;
  }

  if (isHeroPage) {
    drawHeroPageGears();
    drawHeroPageFlowers();
    drawClickFlowers();
    return;
  }

  // if (ENABLE_BACKGROUND_MOLD) {
  //   drawBackgroundMoldEffect();
  // }

  if (needsRecompute) {
    recomputeGearSystem();
  }

  const globalSpinSpeed = isFatigued ? 0 : getGlobalSpinSpeed();
  currentSpinSpeed = globalSpinSpeed;
  updateAudioFromGearSpeed(globalSpinSpeed);

  if (isFatigued) {
    returnSlidersToCenter();
  } else {
    const clusterOrbitSpeed = getClusterOrbitSpeed(globalSpinSpeed);

    // Individual gear rotation
    masterAngle -= globalSpinSpeed;

    // Whole gear set rotation
    clusterAngle -= clusterOrbitSpeed;
  }

  const overallScore = window.lifeformData?.scores?.overall ?? 5;
  const mentalScore = window.lifeformData?.scores?.mental ?? 5;
  const wobbleAmount = map(10 - mentalScore, 0, 10, 0, 6);
  const wobbleX = sin(millis() * 0.003) * wobbleAmount;
  const wobbleY = cos(millis() * 0.0024) * wobbleAmount;
  const bigGearOffsetX = width * BIG_GEAR_OFFSET_X_RATIO;
  const bigGearOffsetY = height * BIG_GEAR_OFFSET_Y_RATIO;

  push();
  translate(
    clusterCenterX + bigGearOffsetX + wobbleX,
    clusterCenterY + bigGearOffsetY + wobbleY
  );
  rotate(clusterAngle);

  blendMode(BLEND);
  for (let i = 0; i < gears.length; i += 1) {
    drawGear(gears[i], overallScore);
  }
  
  const clusterMetrics = getClusterMetrics();
  blendMode(BLEND);
  drawClusterPetals(clusterMetrics);
  blendMode(BLEND);
  drawClusterCenterPoint(clusterMetrics);
  pop();

  blendMode(BLEND);
  drawAspectLegend();
  drawFatigueMessage();
  drawClickFlowers();
}

function windowResized() {
  if (!sketchReady) return;
  resizeCanvas(windowWidth, windowHeight);
  // if (!isHeroPage && ENABLE_BACKGROUND_MOLD) {
  //   initializeBackgroundMolds();
  // }
  aspectLegendAnchors = [];
  needsRecompute = true;
}

// function initializeBackgroundMolds() {
//   bgMoldLayer = createGraphics(windowWidth, windowHeight);
//   bgMoldLayer.pixelDensity(1);
//   bgMoldLayer.background(...COLOR_CHANNELS.bg);
//   bgMoldLayer.noStroke();
//
//   bgMolds = [];
//   for (let i = 0; i < BG_MOLD_COUNT; i += 1) {
//     bgMolds.push(new BackgroundMold());
//   }
// }
//
// function drawBackgroundMoldEffect() {
//   if (!bgMoldLayer) return;
//
//   bgMoldLayer.fill(...COLOR_CHANNELS.bg, BG_MOLD_FADE_ALPHA);
//   bgMoldLayer.rect(0, 0, bgMoldLayer.width, bgMoldLayer.height);
//
//   bgMoldLayer.fill(...COLOR_CHANNELS.text, BG_MOLD_DRAW_ALPHA);
//   for (let i = 0; i < bgMolds.length; i += 1) {
//     bgMolds[i].update();
//     bgMolds[i].display(bgMoldLayer);
//   }
//
//   image(bgMoldLayer, 0, 0, width, height);
// }
//
// class BackgroundMold {
//   constructor() {
//     this.x = random(windowWidth);
//     this.y = random(windowHeight);
//     this.angle = random(TWO_PI);
//     this.turnBias = random(-0.02, 0.02);
//   }
//
//   update() {
//     this.angle += random(-BG_MOLD_TURN, BG_MOLD_TURN) + this.turnBias;
//     this.x += cos(this.angle) * BG_MOLD_SPEED;
//     this.y += sin(this.angle) * BG_MOLD_SPEED;
//
//     if (this.x < 0) this.x += width;
//     if (this.x >= width) this.x -= width;
//     if (this.y < 0) this.y += height;
//     if (this.y >= height) this.y -= height;
//   }
//
//   display(layer) {
//     layer.circle(this.x, this.y, BG_MOLD_DOT_SIZE);
//   }
// }

function mousePressed(event) {
  if (!shouldIgnoreClickFlower(event)) {
    clickFlower(mouseX, mouseY);
  }

  if (isStoryPage) {
    return undefined;
  }

  if (isHeroPage) {
    const clickedHeroGear = getClickedHeroGear(mouseX, mouseY);

    if (clickedHeroGear) {
      clickedHeroGear.spinBoost += HERO_CLICK_BOOST;

      if (window.lifeformAudio && window.lifeformAudio.playGearNote) {
        window.lifeformAudio.playGearNote(clickedHeroGear.sourceGear);
      }

      return false;
    }

    return undefined;
  }

  const clickedGear = getClickedLargeGear(mouseX, mouseY);

  if (!clickedGear) {
    return undefined;
  }

  // During fatigue, clicking gears cannot make sound or restart early.
  if (isFatigued) {
    if (canRestartFromFatigue()) {
      restartGearsAfterFatigue();

      if (window.lifeformAudio && window.lifeformAudio.playGearNote) {
        window.lifeformAudio.playGearNote(clickedGear);
      }
    } else {
      showFatigueMessage(mouseX, mouseY);
    }

    return false;
  }

  // Normal gear click sound.
  if (window.lifeformAudio && window.lifeformAudio.playGearNote) {
    window.lifeformAudio.playGearNote(clickedGear);
  }

  return false;
}

function shouldIgnoreClickFlower(event) {
  const target = event?.target;
  if (!target || !target.closest) return false;

  return Boolean(
    target.closest(
      "a, button, input, textarea, select, label, .range-shell, [data-range-shell]"
    )
  );
}

// Ref Tutorial: https://www.youtube.com/watch?v=UgHVX7VTu5M
// Creates a burst of flower petals at the click location
function clickFlower(x, y) {
  clickFlowers.push({
    x,
    y,
    createdAt: millis(),
    rotation: random(TWO_PI),
  });
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function drawClickFlowers() {
  for (let i = clickFlowers.length - 1; i >= 0; i -= 1) {
    const flower = clickFlowers[i];
    const age = millis() - flower.createdAt;

    if (age > CLICK_FLOWER_DURATION) {
      clickFlowers.splice(i, 1);
      continue;
    }

    const t = constrain(age / CLICK_FLOWER_DURATION, 0, 1);
    const easedT = easeInOutCubic(t);
    const fade = t < 0.78 ? 1 : 1 - (t - 0.78) / 0.22;
    const alpha = 220 * constrain(fade, 0, 1);
    const petalCount = 5;
    const outerR = lerp(18, 86, easedT);
    const widthVal = lerp(15, 12, easedT);
    const roundness = lerp(1, 0.16, easedT);
    const baseWidthBoost = lerp(1.65, 0.65, easedT);

    push();
    resetMatrix();
    translate(flower.x, flower.y);
    rotate(flower.rotation + easedT * 0.25);
    noStroke();
    fill(...COMPONENT_COLORS.gearPetals, alpha);

    for (let petal = 0; petal < petalCount; petal += 1) {
      drawPetal(
        (TWO_PI / petalCount) * petal,
        0,
        outerR,
        widthVal,
        roundness,
        baseWidthBoost
      );
    }

    pop();
  }
}
function getClickedHeroGear(x, y) {
  for (let i = 0; i < heroGears.length; i += 1) {
    const heroGear = heroGears[i];
    const cx = heroGear.xRatio * width;
    const cy = heroGear.yRatio * height;
    const r = Math.min(width, height) * heroGear.radiusRatio;

    if (dist(x, y, cx, cy) <= r) {
      return heroGear;
    }
  }

  return null;
}

function getClickedLargeGear(x, y) {
  const mentalScore = window.lifeformData?.scores?.mental ?? 5;
  const wobbleAmount = map(10 - mentalScore, 0, 10, 0, 6);
  const wobbleX = sin(millis() * 0.003) * wobbleAmount;
  const wobbleY = cos(millis() * 0.0024) * wobbleAmount;
  const bigGearOffsetX = width * BIG_GEAR_OFFSET_X_RATIO;
  const bigGearOffsetY = height * BIG_GEAR_OFFSET_Y_RATIO;

  const cx = clusterCenterX + bigGearOffsetX + wobbleX;
  const cy = clusterCenterY + bigGearOffsetY + wobbleY;

  const dx = x - cx;
  const dy = y - cy;

  const cosA = cos(-clusterAngle);
  const sinA = sin(-clusterAngle);

  const localX = dx * cosA - dy * sinA;
  const localY = dx * sinA + dy * cosA;

  for (let i = 0; i < gears.length; i += 1) {
    const gear = gears[i];
    const d = dist(localX, localY, gear.offsetX, gear.offsetY);

    if (d <= gear.radius) {
      return gear;
    }
  }

  return null;
}

function mouseWheel() {
  return undefined;
}

function initGearsPageUI() {
  if (!document.getElementById("canvas-container")) return;

  instructionPanel = document.getElementById("instruction-panel");
  soundToggleButton = document.querySelector("[data-sound-toggle], #sound-toggle");
  outtroArrow = document.getElementById("outtro-next");

  const instructionToggle = document.getElementById("instruction-toggle");
  const instructionClose = document.getElementById("instruction-close");

  if (instructionToggle) {
    instructionToggle.addEventListener("click", toggleInstructionPanel);
  }

  if (instructionClose) {
    instructionClose.addEventListener("click", closeInstructionPanel);
  }

  // if (soundToggleButton) {
  //   soundToggleButton.addEventListener("click", () => {
  //     soundEnabled = !soundEnabled;
  //     updateSoundButtonLabel();
  //   });
  // }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInstructionPanel();
    }
  });

  document.addEventListener("click", (event) => {
    if (!instructionPanel || !instructionPanel.classList.contains("is-open")) return;
    const instructionToggleButton = document.getElementById("instruction-toggle");
    if (
      instructionPanel.contains(event.target) ||
      (instructionToggleButton && instructionToggleButton.contains(event.target))
    ) {
      return;
    }
    closeInstructionPanel();
  });

  bindAdjustRanges();
  updateSoundButtonLabel();
}

function updateOuttroArrowState() {
  if (!outtroArrow || outtroArrowShown || currentPageName !== "gears") return;

  if (isFatigued && canRestartFromFatigue()) {
    outtroArrowShown = true;
    outtroArrow.classList.add("is-visible");
  }
}

function toggleInstructionPanel() {
  if (!instructionPanel) return;
  const willOpen = !instructionPanel.classList.contains("is-open");
  instructionPanel.classList.toggle("is-open", willOpen);
  instructionPanel.setAttribute("aria-hidden", String(!willOpen));
}

function closeInstructionPanel() {
  if (!instructionPanel) return;
  instructionPanel.classList.remove("is-open");
  instructionPanel.setAttribute("aria-hidden", "true");
}

function bindAdjustRanges() {
  const ranges = document.querySelectorAll(".adjust-range");
  if (!ranges.length) return;

  ranges.forEach((input) => {
    const section = input.dataset.section;
    const keys = (input.dataset.keys || input.dataset.key || "")
      .split(",")
      .map((key) => key.trim())
      .filter(Boolean);
    if (!section || !keys.length) return;

    const currentValue =
      keys.length > 1
        ? window.lifeformData?.scores?.[section]
        : window.lifeformData?.[section]?.[keys[0]];
    input.value = String(clampValue(currentValue));
    updateRangeFill(input);

    input.addEventListener("input", () => {
      const value = clampValue(input.value);
      if (!window.lifeformData[section]) {
        window.lifeformData[section] = {};
      }
      keys.forEach((key) => {
        window.lifeformData[section][key] = value;
      });
      recalculateScores(window.lifeformData);
      persistLifeformData();
      updateRangeFill(input);
      needsRecompute = true;
    });
  });
}

function updateRangeFill(input) {
  const shell = input.closest("[data-range-shell]");
  if (!shell) return;
  shell.style.setProperty("--percent", `${clampValue(input.value) * 10}%`);
  input.setAttribute("aria-valuenow", String(clampValue(input.value)));
}

function updateSoundButtonLabel() {
  if (!soundToggleButton) return;
  soundToggleButton.textContent = "Sound";
}

function loadStoredLifeformData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch (error) {
    console.warn("Unable to read stored LIFEFORM data.", error);
    return null;
  }
}

function buildDefaultLifeformData() {
  return {
    career: { purpose: 5, autonomy: 5, growth: 5 },
    mental: { mindfulness: 5, resilience: 5, balance: 5 }, // Default structure for the new gear
    social: { intimacy: 5, belonging: 5, support: 5 },
    financial: { security: 5, freedom: 5, generosity: 5 },
    physical: { energy: 5, sleep: 5, movement: 5 },
    community: { safety: 5, pride: 5, contribution: 5 },
    scores: {},
  };
}

function normalizeLifeformData(rawData) {
  const normalized = buildDefaultLifeformData();

  if (rawData && typeof rawData === "object") {
    ELEMENTS.forEach((element) => {
      element.keys.forEach((key) => {
        const candidate = rawData?.[element.name]?.[key];
        if (candidate !== undefined) {
          normalized[element.name][key] = clampValue(candidate);
        }
      });
    });
  }

  recalculateScores(normalized);
  return normalized;
}

function recalculateScores(data) {
  let total = 0;
  let count = 0;
  const scores = {};

  ELEMENTS.forEach((element) => {
    let sectionTotal = 0;
    element.keys.forEach((key) => {
      const value = clampValue(data[element.name]?.[key]);
      if (data[element.name]) {
        data[element.name][key] = value;
      }
      sectionTotal += value;
      total += value;
      count += 1;
    });
    scores[element.name] = Number((sectionTotal / element.keys.length).toFixed(2));
  });

  scores.overall = Number((total / count).toFixed(2));
  data.scores = scores;
  return data;
}

function persistLifeformData() {
  recalculateScores(window.lifeformData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(window.lifeformData));
}

function clampValue(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 5;
  return Math.max(0, Math.min(10, numeric));
}

function getSliderHeat() {
  const scores = ELEMENTS.map((element) => {
    return window.lifeformData?.scores?.[element.name] ?? BALANCED_CENTER_VALUE;
  });

  const averageScore =
    scores.reduce((total, score) => total + score, 0) / scores.length;
  const highestScore = Math.max(...scores);
  const averagePressure = Math.max(0, averageScore - BALANCED_CENTER_VALUE) / 5;
  const peakPressure = Math.max(0, highestScore - BALANCED_CENTER_VALUE) / 5;

  return Math.max(0, Math.min(1, averagePressure * 0.55 + peakPressure * 0.45));
}

function blendColor(fromColor, toColor, amount) {
  return fromColor.map((channel, index) => {
    return channel + (toColor[index] - channel) * amount;
  });
}

function blendColorMap(fromMap, toMap, amount) {
  const blended = {};

  Object.keys(fromMap).forEach((key) => {
    blended[key] = blendColor(fromMap[key], toMap[key], amount);
  });

  return blended;
}

function blendPalette(fromPalette, toPalette, amount) {
  return {
    channels: blendColorMap(fromPalette.channels, toPalette.channels, amount),
    components: blendColorMap(fromPalette.components, toPalette.components, amount),
    aspectPetals: blendColorMap(fromPalette.aspectPetals, toPalette.aspectPetals, amount),
    aspectOuters: blendColorMap(fromPalette.aspectOuters, toPalette.aspectOuters, amount),
  };
}

function shiftColorToward(currentColor, targetColor, amount) {
  for (let i = 0; i < currentColor.length; i += 1) {
    currentColor[i] += (targetColor[i] - currentColor[i]) * amount;
  }
}

function shiftColorMapToward(currentMap, targetMap, amount) {
  Object.keys(targetMap).forEach((key) => {
    if (!currentMap[key]) return;
    shiftColorToward(currentMap[key], targetMap[key], amount);
  });
}

function colorToCssRgb(color, alpha = 1) {
  const channels = color.map((channel) => Math.round(channel));
  return `rgba(${channels[0]}, ${channels[1]}, ${channels[2]}, ${alpha})`;
}

function getTargetPalette() {
  if (isHeroPage) {
    return ORIGINAL_GREEN_PALETTE;
  }

  if (isFatigued) {
    return canRestartFromFatigue()
      ? ORIGINAL_GREEN_PALETTE
      : FATIGUE_BLUE_PALETTE;
  }

  return blendPalette(
    ORIGINAL_GREEN_PALETTE,
    OVERLOAD_RED_PALETTE,
    getSliderHeat()
  );
}

function updateDynamicPalette() {
  const targetPalette = getTargetPalette();

  shiftColorMapToward(COLOR_CHANNELS, targetPalette.channels, PALETTE_TRANSITION_SPEED);
  shiftColorMapToward(COMPONENT_COLORS, targetPalette.components, PALETTE_TRANSITION_SPEED);
  shiftColorMapToward(ASPECT_PETAL_COLORS, targetPalette.aspectPetals, PALETTE_TRANSITION_SPEED);
  shiftColorMapToward(ASPECT_OUTER_COLORS, targetPalette.aspectOuters, PALETTE_TRANSITION_SPEED);

  document.documentElement.style.setProperty(
    "--stage-button-hover",
    colorToCssRgb(COLOR_CHANNELS.accent, 0.9)
  );
  document.documentElement.style.setProperty(
    "--stage-life-mark",
    colorToCssRgb(COMPONENT_COLORS.lifeMark, 1)
  );
  document.documentElement.style.setProperty(
    "--stage-panel-bg",
    colorToCssRgb(COLOR_CHANNELS.bg, 1)
  );
}

function getGlobalSpinSpeed() {
  const aspectScores = ELEMENTS.map((element) => {
      return window.lifeformData?.scores?.[element.name] ?? 5;
    });

  const averageScore =
    aspectScores.reduce((total, score) => total + score, 0) / aspectScores.length;

  const highestScore = Math.max(...aspectScores);
  const lowCount = aspectScores.filter((score) => score <= 3).length;

  // High sliders increase the whole machine speed.
  let speed = map(averageScore, 0, 10, Math.PI / 900, Math.PI / 170);

  // A very high aspect pulls the whole system faster.
  speed += map(highestScore, 0, 10, 0, Math.PI / 500);

  // Only slow the whole system strongly when 4+ aspects are low.
  if (lowCount >= 4) {
    speed *= map(lowCount, 4, 6, 0.45, 0.18);
  }

  return speed;
}
function areGearsBalanced() {
  return ELEMENTS.every((element) => {
    const score = window.lifeformData?.scores?.[element.name] ?? 5;
    return Math.abs(score - BALANCED_CENTER_VALUE) <= BALANCED_TOLERANCE;
  });
}
function hasAnyGearAboveMiddle() {
  return ELEMENTS.some((element) => {
    const score = window.lifeformData?.scores?.[element.name] ?? 5;
    return score > BALANCED_CENTER_VALUE + BALANCED_TOLERANCE;
  });
}
function getClusterOrbitSpeed(spinSpeed) {
  const minSpeed = Math.PI / 900;
  const maxSpeed = Math.PI / 130;

  const normalizedSpeed = constrain(
    map(spinSpeed, minSpeed, maxSpeed, 0, 1),
    0,
    1
  );

  // Slow individual gears = cluster barely turns
  // Fast individual gears = whole gear set rotates more noticeably
  const orbitMultiplier = lerp(0.05, 0.7, normalizedSpeed);

  return spinSpeed * orbitMultiplier;
}
function updateAudioFromGearSpeed(spinSpeed) {
  if (!window.lifeformAudio || !window.lifeformAudio.setGearAudioSpeed) {
    return;
  }

  const minSpeed = Math.PI / 900;
  const maxSpeed = Math.PI / 130;

  const normalizedSpeed = constrain(
    map(spinSpeed, minSpeed, maxSpeed, 0, 1),
    0,
    1
  );

  const keepOriginalBgmRate = !isFatigued && areGearsBalanced();

  window.lifeformAudio.setGearAudioSpeed(normalizedSpeed, {
    minRate: keepOriginalBgmRate ? 1 : 0.55,
    maxRate: keepOriginalBgmRate ? 1 : 1.85,
    forceSilent: isFatigued,
  });
}
function getDynamicFatigueDuration() {
  const scores = ELEMENTS.map((element) => {
    return window.lifeformData?.scores?.[element.name] ?? 5;
  });

  // Only values above middle create fatigue pressure.
  const overMiddleAmounts = scores.map((score) => {
    return Math.max(0, score - BALANCED_CENTER_VALUE);
  });

  const totalOverMiddle = overMiddleAmounts.reduce((sum, value) => sum + value, 0);
  const maxOverMiddle = Math.max(...overMiddleAmounts);

  // 0 = barely above middle, 1 = one or more gears are very large.
  const fatiguePressure = constrain(
    totalOverMiddle / (ELEMENTS.length * 5) + maxOverMiddle / 5,
    0,
    1
  );

  // Higher scale = sooner fatigue.
  return lerp(FATIGUE_MAX_MS, FATIGUE_MIN_MS, fatiguePressure);
}
function updateFatigueState() {
  // Once fatigued, stay fatigued for the full rest time.
  // Do NOT auto-restart just because sliders returned to middle.
  if (isFatigued) {
    return;
  }

  // If no aspect is above the middle, gears must never start building fatigue.
  if (!hasAnyGearAboveMiddle()) {
    fastSpinStartedAt = null;
    return;
  }

  const predictedSpeed = getGlobalSpinSpeed();
  const isFast = predictedSpeed >= FAST_SPIN_THRESHOLD;

  if (!isFast) {
    fastSpinStartedAt = null;
    return;
  }

  if (fastSpinStartedAt === null) {
    fastSpinStartedAt = millis();
  }

  const fatigueDuration =
    typeof getDynamicFatigueDuration === "function"
      ? getDynamicFatigueDuration()
      : FATIGUE_AFTER_MS;

  if (millis() - fastSpinStartedAt >= fatigueDuration) {
    isFatigued = true;
    fatigueStoppedAt = millis();
    fastSpinStartedAt = null;
  }
}

function returnSlidersToCenter() {
  if (!isFatigued) return;

  let changed = false;

  ELEMENTS.forEach((element) => {
    element.keys.forEach((key) => {
      const currentValue = clampValue(window.lifeformData[element.name][key]);
      const nextValue = lerp(currentValue, 5, SLIDER_RETURN_SPEED);

      if (Math.abs(nextValue - currentValue) > 0.001) {
        window.lifeformData[element.name][key] = nextValue;
        changed = true;
      }
    });
  });

  if (!changed) return;

  recalculateScores(window.lifeformData);
  persistLifeformData();
  syncRangeInputsFromData();
  needsRecompute = true;
}

function syncRangeInputsFromData() {
  const ranges = document.querySelectorAll(".adjust-range");

  ranges.forEach((input) => {
    const section = input.dataset.section;
    if (!section) return;

    const value = window.lifeformData?.scores?.[section] ?? 5;
    input.value = String(Math.round(clampValue(value)));
    updateRangeFill(input);
  });
}

function canRestartFromFatigue() {
  if (!isFatigued || fatigueStoppedAt === null) return false;
  return millis() - fatigueStoppedAt >= REST_BEFORE_RESTART_MS;
}

function restartGearsAfterFatigue() {
  isFatigued = false;
  fatigueStoppedAt = null;
  fastSpinStartedAt = null;
  fatigueMessage = null;
}

function showFatigueMessage(x, y) {
  fatigueMessage = {
    x,
    y,
    text: "[!] the machine needs to rest, try again later",
    createdAt: millis(),
  };
}

function drawFatigueMessage() {
  if (!fatigueMessage) return;

  const age = millis() - fatigueMessage.createdAt;
  if (age > 2200) {
    fatigueMessage = null;
    return;
  }

  const alpha = map(age, 0, 2200, 245, 0);

  push();
  resetMatrix();
  blendMode(BLEND);
  noStroke();

  const fontSize = 20; // same-ish size as slider label
  const paddingX = 20;
  const paddingY = 13;

  textFont("Syne Mono");
  textSize(fontSize);
  textAlign(LEFT, CENTER);

  const message = fatigueMessage.text;
  const boxW = textWidth(message) + paddingX * 2;
  const boxH = fontSize + paddingY * 2;

  // Keep warning box inside the screen
  const x = constrain(fatigueMessage.x + 18, 24, width - boxW - 24);
  const y = constrain(fatigueMessage.y - 46, 24, height - boxH - 24);

  // warning box
  fill(...COLOR_CHANNELS.surface, alpha);
  rect(x, y, boxW, boxH, 4);

  // subtle border
  stroke(...COLOR_CHANNELS.text, alpha * 0.45);
  strokeWeight(1);
  noFill();
  rect(x, y, boxW, boxH, 4);

  // text
  noStroke();
  fill(...COLOR_CHANNELS.text, alpha);
  text(message, x + paddingX, y + boxH / 2);

  pop();
}

function getScaleRankOrder() {
  // Career is always the biggest when everything is maxed.
  // The other 5 aspects get shuffled into:
  // 2nd biggest, 3rd biggest, middle, 2nd smallest, smallest
  const otherNames = ["mental", "financial", "physical", "community", "social"];

  // Shuffle the non-career aspects
  for (let i = otherNames.length - 1; i > 0; i -= 1) {
    const j = floor(random(i + 1));
    const temp = otherNames[i];
    otherNames[i] = otherNames[j];
    otherNames[j] = temp;
  }

  // Rank multipliers at full score.
  // Smallest is still quite large — just the least increase.
  const rankScaleByName = {
    career: 1.22,                 // biggest
    [otherNames[0]]: 1.14,        // 2nd biggest
    [otherNames[1]]: 1.08,        // 3rd biggest
    [otherNames[2]]: 1.02,        // middle
    [otherNames[3]]: 0.97,        // 2nd smallest
    [otherNames[4]]: 0.92,        // smallest
  };

  return rankScaleByName;
}

let rankedMaxScaleByAspect = {};

function assignRankedMaxScaleProfile() {
  const otherNames = ["mental", "financial", "physical", "community", "social"];

  // shuffle 5 gear còn lại
  for (let i = otherNames.length - 1; i > 0; i -= 1) {
    const j = floor(random(i + 1));
    const temp = otherNames[i];
    otherNames[i] = otherNames[j];
    otherNames[j] = temp;
  }

  // Career luôn biggest.
  // 5 gear còn lại sẽ random thứ hạng, nhưng ratio gần với image 2.
  rankedMaxScaleByAspect = {
    career: 1.38,
    [otherNames[0]]: 1.14,
    [otherNames[1]]: 1.07,
    [otherNames[2]]: 1.00,
    [otherNames[3]]: 0.95,
    [otherNames[4]]: 0.91,
  };
}

function getScoreScale(score, gearName) {
  const normalized = clampValue(score);
  const t = normalized / 10;

  // Base growth from low -> high
  const baseScale = lerp(0.58, 1.0, pow(t, 0.95));

  // Aspect-specific max multiplier
  const rankedMultiplier = rankedMaxScaleByAspect[gearName] ?? 1.0;

  // Only let the ranking really show when slider goes high.
  // So low / medium scores still feel more balanced.
  const rankInfluence = pow(t, 1.8);

  return baseScale * lerp(1.0, rankedMultiplier, rankInfluence);
}
function solveGearOffsets(radii) {
  const positions = new Array(radii.length);
  const anchors = new Array(radii.length);

  // Average target center-to-center distance between neighboring gears
  // target distance = r1 + r2 - overlap
  let avgTargetDist = 0;
  const visualGearOrder = getVisualGearOrder();

  for (let k = 0; k < visualGearOrder.length; k += 1) {
    const a = visualGearOrder[k];
    const b = visualGearOrder[(k + 1) % visualGearOrder.length];
    avgTargetDist += radii[a] + radii[b] - GEAR_OVERLAP_PX;
  }
  avgTargetDist /= visualGearOrder.length;

  // Initial seed positions based on the existing 6-direction layout
  for (let i = 0; i < radii.length; i += 1) {
    const layoutSlot = layoutSlotByGearIndex[i] ?? i;
    const layout = FIXED_GEAR_LAYOUT[layoutSlot];
    const len = Math.hypot(layout.x, layout.y) || 1;
    const ux = layout.x / len;
    const uy = layout.y / len;

    anchors[i] = { x: ux, y: uy };
    positions[i] = {
      x: ux * avgTargetDist,
      y: uy * avgTargetDist,
    };
  }


  for (let step = 0; step < LAYOUT_RELAX_STEPS; step += 1) {
    // Pair constraints
    for (let k = 0; k < VISUAL_RING_ORDER.length; k += 1) {
      const ia = visualGearOrder[k];
      const ib = visualGearOrder[(k + 1) % visualGearOrder.length];

      const pa = positions[ia];
      const pb = positions[ib];

      let dx = pb.x - pa.x;
      let dy = pb.y - pa.y;
      let dist = Math.hypot(dx, dy);

      if (dist < 0.0001) {
        dx = 1;
        dy = 0;
        dist = 1;
      }

      const targetDist = radii[ia] + radii[ib] - GEAR_OVERLAP_PX;
      const error = dist - targetDist;
      const adjust = error * 0.5 * LAYOUT_RELAX_STRENGTH;

      const nx = dx / dist;
      const ny = dy / dist;

      pa.x += nx * adjust;
      pa.y += ny * adjust;
      pb.x -= nx * adjust;
      pb.y -= ny * adjust;
    }

    // Keep each gear roughly in its intended angular sector
    for (let i = 0; i < positions.length; i += 1) {
      const p = positions[i];
      const a = anchors[i];
      const radial = Math.hypot(p.x, p.y) || avgTargetDist;

      const targetX = a.x * radial;
      const targetY = a.y * radial;

      p.x = lerp(p.x, targetX, ANGLE_ANCHOR_STRENGTH);
      p.y = lerp(p.y, targetY, ANGLE_ANCHOR_STRENGTH);
    }

    // Recenter cluster around (0,0)
    let meanX = 0;
    let meanY = 0;
    for (let i = 0; i < positions.length; i += 1) {
      meanX += positions[i].x;
      meanY += positions[i].y;
    }
    meanX /= positions.length;
    meanY /= positions.length;

    for (let i = 0; i < positions.length; i += 1) {
      positions[i].x -= meanX;
      positions[i].y -= meanY;
    }
  }

  return positions;
}

function recomputeGearSystem() {
  window.lifeformData = normalizeLifeformData(window.lifeformData);
  persistLifeformData();

  const baseScale = Math.min(width, height) / 1050;

  const stage = document.getElementById("gear-stage");

  let centerX = width * 0.5;
  let centerY = height * 0.5;

  if (stage) {
    const stageRect = stage.getBoundingClientRect();
    centerX = stageRect.left + stageRect.width * 0.38;
    centerY = stageRect.top + stageRect.height * 0.413;
  }
  clusterCenterX = centerX;
  clusterCenterY = centerY;

  // First pass:
  // Calculate each gear's data, scale, radius, direction, and sub-scores.
  // Do NOT position the gears here yet.
  for (let i = 0; i < gears.length; i += 1) {
    const gear = gears[i];
    const layoutSlot = layoutSlotByGearIndex[i] ?? i;
    const layout = FIXED_GEAR_LAYOUT[layoutSlot];

    const score = window.lifeformData.scores[gear.name] ?? 5;
    const scoreScale = getScoreScale(score, gear.name);

    gear.scale = baseScale * scoreScale;
    gear.radius = REFERENCE_GEAR.outerR * gear.scale;

      gear.direction = getDirectionFromLayoutSlot(layoutSlot);

    if (gear.name === "career" || gear.name === "financial" || gear.name === "social") {
      gear.direction = layout.direction;
    }

    gear.startAngle = layout.startAngle;
    gear.score = score;

    gear.subScores[0] = window.lifeformData[gear.name][gear.keys[0]];
    gear.subScores[1] = window.lifeformData[gear.name][gear.keys[1]];
    gear.subScores[2] = window.lifeformData[gear.name][gear.keys[2]];
  }

  const solvedOffsets = solveGearOffsets(
    gears.map((gear) => gear.radius)
  );

  for (let i = 0; i < gears.length; i += 1) {
    const gear = gears[i];
    const offset = solvedOffsets[i];

    gear.offsetX = offset.x;
    gear.offsetY = offset.y;

    gear.x = centerX + offset.x;
    gear.y = centerY + offset.y;
  }

  needsRecompute = false;
}

function getClusterMetrics() {
  const items = gears
    .map((gear) => {
      const offsetX = gear.offsetX ?? gear.x - clusterCenterX;
      const offsetY = gear.offsetY ?? gear.y - clusterCenterY;
      return {
        angle: Math.atan2(offsetY, offsetX),
        distance: Math.hypot(offsetX, offsetY),
        radius: gear.radius ?? 0,
      };
    })
    .sort((a, b) => a.angle - b.angle);

  const count = items.length || 1;
  const layoutRadius =
    items.reduce((total, item) => total + item.distance, 0) / count;
  const averageRadius =
    items.reduce((total, item) => total + item.radius, 0) / count;

  return { items, layoutRadius, averageRadius };
}

function getGapAngles(items) {
  if (!items.length) return [];
  const angles = [];

  for (let i = 0; i < items.length; i += 1) {
    const current = items[i].angle;
    let next = items[(i + 1) % items.length].angle;
    if (next < current) {
      next += TWO_PI;
    }
    angles.push(current + (next - current) * 0.5);
  }

  return angles;
}

function drawClusterPetals(metrics) {
  noFill();
  stroke(...COMPONENT_COLORS.centerFlower, 115);
  strokeCap(ROUND);
  strokeJoin(ROUND);

  gears.forEach((gear, index) => {
    const tx = gear.offsetX;
    const ty = gear.offsetY;
    const d = dist(0, 0, tx, ty);
    const theta = atan2(ty, tx);

    const score = clampValue(gear.score ?? 5);
    const scoreNorm = score / 10;

    const aspectVariation = [0.96, 1.08, 1.02, 0.94, 1.04, 0.98][index % 6];
    const petalLength = d * lerp(0.68, 0.92, scoreNorm);
    const petalWidth =
      metrics.averageRadius * lerp(0.24, 0.42, scoreNorm) * aspectVariation;

    strokeWeight(max(7, metrics.averageRadius * lerp(0.055, 0.09, scoreNorm)));
    drawCenterFlowerPetal(theta, petalLength, petalWidth);
  });
}

function drawCenterFlowerPetal(angle, length, width) {
  push();
  rotate(angle);
  beginShape();
  vertex(0, 0);
  bezierVertex(
    length * 0.18,
    -width * 0.12,
    length * 0.34,
    -width * 0.72,
    length * 0.66,
    -width * 0.66
  );
  bezierVertex(
    length * 0.98,
    -width * 0.58,
    length * 1.08,
    -width * 0.04,
    length * 0.9,
    width * 0.22
  );
  bezierVertex(
    length * 0.72,
    width * 0.5,
    length * 0.32,
    width * 0.36,
    0,
    0
  );
  endShape();
  pop();
}

function drawClusterCenterPoint(metrics) {
  const size = Math.max(6, metrics.averageRadius * 0.08);
  noStroke();
  fill(...COMPONENT_COLORS.centerDot);
  ellipse(0, 0, size, size);
}

function drawPetal(angle, innerR, outerR, width, roundness = 0.5, baseWidthBoost = 1) {
  push();
  rotate(angle);

  const neckWidth = width * lerp(0.25, 0.95, roundness) * baseWidthBoost;
  const tipWidth = width * lerp(0.45, 1.15, roundness);

  beginShape();

  vertex(innerR, -neckWidth);
  bezierVertex(
    lerp(innerR, outerR, 0.22),
    -width * baseWidthBoost,
    lerp(innerR, outerR, 0.72),
    -tipWidth,
    outerR,
    -tipWidth * 0.18
  );

  bezierVertex(
    outerR + tipWidth * 0.18,
    0,
    outerR,
    tipWidth * 0.18,
    lerp(innerR, outerR, 0.72),
    tipWidth
  );

  bezierVertex(
    lerp(innerR, outerR, 0.22),
    width * baseWidthBoost,
    innerR,
    neckWidth,
    innerR,
    neckWidth
  );

  endShape(CLOSE);
  pop();
}

function initializeHeroGears() {
  const pickedGears = [...gears];

  for (let i = pickedGears.length - 1; i > 0; i -= 1) {
    const j = floor(random(i + 1));
    const temp = pickedGears[i];
    pickedGears[i] = pickedGears[j];
    pickedGears[j] = temp;
  }

  // Red-circle positions = gears only
  const heroSlots = [
    // small left gear
    {
      xRatio: 0.082,
      yRatio: 0.655,
      radiusRatio: 0.072,
      direction: 1,
      alpha: 0.95,
    },

    // huge bottom-left cropped gear
    {
      xRatio: 0.05,
      yRatio: 0.93,
      radiusRatio: 0.18,
      direction: -1,
      alpha: 0.95,
    },

    // large lower-left gear
    {
      xRatio: 0.223,
      yRatio: 0.818,
      radiusRatio: 0.132,
      direction: 1,
      alpha: 0.95,
    },

    // huge right cropped gear
    {
      xRatio: 1.0,
      yRatio: 0.48,
      radiusRatio: 0.20,
      direction: -1,
      alpha: 0.95,
    },
  ];

  heroGears = heroSlots.map((slot, index) => {
    return {
      ...slot,
      ...createBloomProfile(),
      sourceGear: pickedGears[index % pickedGears.length],
      startAngle: random(TWO_PI),
      spinBoost: 0,
    };
  });
}
function initializeHeroFlowers() {
  const pickedGears = [...gears];

  for (let i = pickedGears.length - 1; i > 0; i -= 1) {
    const j = floor(random(i + 1));
    const temp = pickedGears[i];
    pickedGears[i] = pickedGears[j];
    pickedGears[j] = temp;
  }

  const flowerSlots = [
    // top-left small
    {
      xRatio: 0.162,
      yRatio: 0.135,
      radiusRatio: 0.047,
      direction: 1,
      alpha: 0.92,
    },

    // upper-right small
    {
      xRatio: 0.652,
      yRatio: 0.235,
      radiusRatio: 0.078,
      direction: -1,
      alpha: 0.92,
    },

    // center-right medium
    {
      xRatio: 0.575,
      yRatio: 0.455,
      radiusRatio: 0.115,
      direction: 1,
      alpha: 0.92,
    },

    // lower-right small
    {
      xRatio: 0.828,
      yRatio: 0.802,
      radiusRatio: 0.056,
      direction: -1,
      alpha: 0.92,
    },
  ];

  heroFlowers = flowerSlots.map((slot, index) => {
    return {
      ...slot,
      ...createBloomProfile(),
      sourceGear: pickedGears[index % pickedGears.length],
      startAngle: random(TWO_PI),
    };
  });
}

function drawHeroPageGears() {
  for (let i = 0; i < heroGears.length; i += 1) {
    const heroGear = heroGears[i];

    heroGear.spinBoost *= HERO_BOOST_DECAY;

    const spinSpeed = HERO_BASE_SPIN_SPEED + heroGear.spinBoost;
    heroGear.startAngle += spinSpeed * heroGear.direction;

    const radius = Math.min(width, height) * heroGear.radiusRatio;
    const scale = radius / REFERENCE_GEAR.outerR;

    const displayGear = {
      ...heroGear.sourceGear,
      scale,
      radius,
      direction: heroGear.direction,
      startAngle: 0,
      score: 8,
      subScores: [8, 8, 8],
      bloomPhase: heroGear.bloomPhase,
      bloomSpeed: heroGear.bloomSpeed,
      bloomPetalOffsets: heroGear.bloomPetalOffsets,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
    };

    push();
    translate(heroGear.xRatio * width, heroGear.yRatio * height);
    rotate(heroGear.startAngle);

    drawingContext.globalAlpha = heroGear.alpha;

    // gears only, no flower
    drawReferenceGear(displayGear, 8);

    drawingContext.globalAlpha = 1;
    pop();
  }
}
function drawHeroPageFlowers() {
  for (let i = 0; i < heroFlowers.length; i += 1) {
    const heroFlower = heroFlowers[i];

    const radius = Math.min(width, height) * heroFlower.radiusRatio;
    const scale = radius / REFERENCE_GEAR.outerR;

    const displayFlower = {
      ...heroFlower.sourceGear,
      scale,
      radius,
      direction: heroFlower.direction,
      startAngle: heroFlower.startAngle,
      score: 8,
      subScores: [8, 8, 8],
      bloomPhase: heroFlower.bloomPhase,
      bloomSpeed: heroFlower.bloomSpeed,
      bloomPetalOffsets: heroFlower.bloomPetalOffsets,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
    };

    push();
    translate(heroFlower.xRatio * width, heroFlower.yRatio * height);
    rotate(masterAngle * heroFlower.direction + heroFlower.startAngle);

    drawingContext.globalAlpha = heroFlower.alpha;

    // flowers only
    drawAnimatedPetals(displayFlower);

    drawingContext.globalAlpha = 1;
    pop();
  }

  masterAngle -= HERO_BASE_SPIN_SPEED * 0.75;
}

function drawGear(gear, overallScore) {
  push();
  const offsetX = gear.offsetX ?? gear.x;
  const offsetY = gear.offsetY ?? gear.y;

  translate(offsetX, offsetY);
  rotate(masterAngle * gear.direction + gear.startAngle);
  
  // Draw basic structural gear
  drawReferenceGear(gear, overallScore);
  
  // Draw looping petal animation on top of each gear
 
  drawAnimatedPetals(gear);
  pop();
}

function drawAspectLegend() {
  if (!aspectLegendAnchors.length) {
    cacheAspectLegendAnchors();
  }

  push();
  resetMatrix();
  blendMode(BLEND);

  for (let i = 0; i < aspectLegendAnchors.length; i += 1) {
    const anchor = aspectLegendAnchors[i];
    drawLegendGearItem(anchor.x, anchor.y, anchor.gear);
  }

  pop();
}

function cacheAspectLegendAnchors() {
  aspectLegendAnchors = [];

  for (let i = 0; i < gears.length; i += 1) {
    const gear = gears[i];
    const slot = document.querySelector(`[data-gear-slot="${gear.name}"]`);

    if (!slot) continue;

    const rect = slot.getBoundingClientRect();
    aspectLegendAnchors.push({
      gear,
      x: rect.left + rect.width * 0.5,
      y: rect.top + rect.height * 0.5,
    });
  }
}

function drawLegendGearItem(x, y, sourceGear) {
  push();
  translate(x, y);

  // Aspect icon.
  const miniGear = {
    ...sourceGear,
    scale: LEGEND_GEAR_SCALE,
    radius: REFERENCE_GEAR.outerR * LEGEND_GEAR_SCALE,
    score: LEGEND_GEAR_SCORE,
    subScores: [...LEGEND_GEAR_SUBSCORES],
  };

  rotate(masterAngle * miniGear.direction + miniGear.startAngle);

  // Draw mini gear base
  drawReferenceGear(miniGear, window.lifeformData?.scores?.overall ?? 5);

  // Draw mini petals on top
  drawAnimatedPetals(miniGear);

  pop();
}

// Morphing ease-in-out gear petal animation loop 
function drawAnimatedPetals(gear) {
  const preset = GEAR_STYLE_PRESETS[gear.name] || GEAR_STYLE_PRESETS.career;

  const score = gear.score ?? 5;
  const scoreNormalized = score / 10;

  // Roundest when the aspect score is near the middle.
  const middleBalance = 1 - Math.min(1, Math.abs(score - 5) / 5);

  const q3 = clampValue(gear.subScores?.[2] ?? 5);
  const q3Norm = q3 / 10;

  const stage2R = gear.radius * lerp(0.25, 1.05, q3Norm);
  const stage1R = stage2R * lerp(0.12, 0.35, scoreNormalized);

  const stage1W = stage1R * lerp(0.25, 0.52, middleBalance);
  const stage2W = stage2R * lerp(0.08, 0.2, middleBalance);

  // Wider at the base when score is around the middle.
  const baseWidthBoost = lerp(0.85, 1.65, middleBalance);

  noStroke();

  let alpha = 200;

  if (gear.name === "social") {
    alpha = map(gear.subScores[0], 0, 10, 90, 230);
  }

  const petalColor = ASPECT_PETAL_COLORS[gear.name] || COMPONENT_COLORS.gearPetals;
  fill(petalColor[0], petalColor[1], petalColor[2], alpha);

  const petalCount = preset.petalCount;
  const bloomPhase = gear.bloomPhase ?? 0;
  const bloomSpeed = gear.bloomSpeed ?? 0.002;
  const bloomPetalOffsets = gear.bloomPetalOffsets || [];
  const bloomTime = millis() * bloomSpeed + bloomPhase;
  const baseBloomT = (sin(bloomTime) + 1) / 2;

  for (let i = 0; i < petalCount; i++) {
    let angle = (TWO_PI / petalCount) * i;
    const offset = bloomPetalOffsets[i % bloomPetalOffsets.length] ?? 0;
    const petalBloomT = (sin(bloomTime + offset) + 1) / 2;
    const easedT = lerp(baseBloomT, petalBloomT, 0.55);
    const outerR = lerp(stage1R, stage2R, easedT);
    const widthVal = lerp(stage1W, stage2W, easedT);

    if (gear.name === "mental") {
      const quietMind = clampValue(gear.subScores[0]);
      const jitterAmount = map(10 - quietMind, 0, 10, 0, 0.12);
      angle += sin(millis() * 0.004 + i * 3) * jitterAmount;
    }

    drawPetal(angle, 0, outerR, widthVal, middleBalance, baseWidthBoost);
  }
}

// ==========================================================
// GEAR GEOMETRY AND INNER MOTION
// Adjusts styles depending on size (score). 
// Score < 5 uses 3-spoke ring style. Score >= 5 adds nested dual-ring and reverse-spinning teeth.
// ==========================================================
function drawReferenceGear(gear, overallScore) {
  const preset = GEAR_STYLE_PRESETS[gear.name] || GEAR_STYLE_PRESETS.career;
  const outerColor = ASPECT_OUTER_COLORS[gear.name] || COMPONENT_COLORS.gearOuter;

  const scaleFactor = gear.scale;
  const {
    outerR,
    toothBase,
    hubOuter,
    holeR,
    gap,
  } = REFERENCE_GEAR;

  const scaledOuterR = outerR * scaleFactor;
  const scaledToothBase = toothBase * scaleFactor;
  const scaledHubOuter = hubOuter * scaleFactor;
  const scaledHoleR = holeR * scaleFactor;

  const q1 = clampValue(gear.subScores?.[0] ?? 5);
  const q2 = clampValue(gear.subScores?.[1] ?? 5);
  const q3 = clampValue(gear.subScores?.[2] ?? 5);

  const q1Norm = q1 / 10;
  const q2Norm = q2 / 10;
  const q3Norm = q3 / 10;

  // Controls teeth character.
  const teethCount = Math.round(lerp(preset.teethMin, preset.teethMax, q1Norm));
  const toothDepth = lerp(1.15, preset.toothDepth, q1Norm);
  const roundness = constrain(q1Norm + preset.roundnessBoost, 0, 1);

  // Controls structural thickness.
  const innerCutoutRatio = constrain(
    lerp(0.78, preset.ringInnerRatio, q2Norm) * 1.08,
    0,
    0.9
  );

  // Controls inner gear strength.
  const innerScale = lerp(0.45, 0.75, q3Norm);

  noStroke();

  // Small gears stay simpler and do not have inner gears.
  if (gear.score < 5) {
    drawOuterGearShape({
      teethCount,
      outerRadius: scaledOuterR * lerp(0.82, 1.0, q1Norm),
      baseRadius: scaledToothBase * 0.9,
      gap: gap * 2,
      roundness,
      toothDepth,
      color: outerColor,
    });

    fill(...COLOR_CHANNELS.surface);
    ellipse(0, 0, scaledToothBase * 2 * innerCutoutRatio, scaledToothBase * 2 * innerCutoutRatio);

    drawAspectSpokes({
      gear,
      preset,
      radius: scaledToothBase * 0.72,
      scoreValue: q2,
      scaleFactor,
      smallMode: true,
    });

    fill(...COMPONENT_COLORS.gearInner);
    ellipse(0, 0, scaledHubOuter * 1.15, scaledHubOuter * 1.15);

    fill(...COLOR_CHANNELS.surface);
    ellipse(0, 0, scaledHoleR * 0.85, scaledHoleR * 0.85);

    return;
  }

  // Big gear outer body.
  drawOuterGearShape({
    teethCount,
    outerRadius: scaledOuterR,
    baseRadius: scaledToothBase / toothDepth,
    gap: gap,
    roundness,
    toothDepth,
    color: COMPONENT_COLORS.gearOuter,
  });

  // Main hole.
  fill(...COLOR_CHANNELS.surface);
  ellipse(0, 0, scaledToothBase * 2 * innerCutoutRatio, scaledToothBase * 2 * innerCutoutRatio);

  // Main spokes behind inner gear.
  drawAspectSpokes({ 
    gear,
    preset,
    radius: scaledToothBase * 0.78,
    scoreValue: q2,
    scaleFactor,
    smallMode: false,
  });

  // Nested reverse rotating inner gear.
  push();
  rotate(-2 * masterAngle * gear.direction);

  const innerGearR = scaledToothBase * innerScale;
  const innerBaseR = innerGearR * 0.82;

  drawOuterGearShape({
    teethCount: preset.innerTeeth,
    outerRadius: innerGearR,
    baseRadius: innerBaseR,
    gap: gap * 1.5,
    roundness: constrain(q3Norm + 0.2, 0, 1),
    toothDepth: 0.85,
    color: COMPONENT_COLORS.gearInner,
  });

  fill(...COLOR_CHANNELS.surface);
  ellipse(0, 0, innerGearR * 1.55, innerGearR * 1.55);

  drawAspectSpokes({
    gear,
    preset,
    radius: innerGearR * 0.72,
    scoreValue: q3,
    scaleFactor,
    smallMode: true,
  });

  fill(...COMPONENT_COLORS.gearInner);
  ellipse(0, 0, scaledHubOuter * 0.9, scaledHubOuter * 0.9);

  fill(...COLOR_CHANNELS.surface);
  ellipse(0, 0, scaledHoleR * 0.62, scaledHoleR * 0.62);

  pop();
}

function drawOuterGearShape({
  teethCount,
  outerRadius,
  baseRadius,
  gap,
  roundness,
  toothDepth,
  color = COLOR_CHANNELS.text,
}) {
  fill(...color);

  const visibleBaseRadius = Math.min(baseRadius, outerRadius * 0.82);
  const visibleOuterRadius = Math.max(outerRadius, visibleBaseRadius + outerRadius * 0.12);

  beginShape();
  for (let i = 0; i < teethCount; i += 1) {
    const a1 = (TWO_PI / teethCount) * i - HALF_PI;
    const a2 = a1 + TWO_PI / teethCount;
    const am = (a1 + a2) * 0.5;

    //Ensure visible tooth tips
    const tipSpan = lerp(0.16, 0.78, roundness);
    const tipSteps = Math.max(2, Math.round(lerp(2, 5, roundness)));

    const arcStart = lerp(am, a1, tipSpan * 0.5);
    const arcEnd = lerp(am, a2, tipSpan * 0.5);

    vertex(
      cos(a1 + gap) * visibleBaseRadius,
      sin(a1 + gap) * visibleBaseRadius
    );

    for (let step = 0; step <= tipSteps; step += 1) {
      const t = step / tipSteps;
      const angle = lerp(arcStart, arcEnd, t);

      vertex(
        cos(angle) * visibleOuterRadius,
        sin(angle) * visibleOuterRadius
      );
    }

    vertex(
      cos(a2 - gap) * visibleBaseRadius,
      sin(a2 - gap) * visibleBaseRadius
    );
  }

  endShape(CLOSE);

  ellipse(0, 0, visibleBaseRadius * 1.88, visibleBaseRadius * 1.88);
}

function drawAspectSpokes({
  gear,
  preset,
  radius,
  scoreValue,
  scaleFactor,
  smallMode,
}) {
  const scoreNorm = clampValue(scoreValue) / 10;
  const spokeCount = smallMode
    ? Math.max(3, Math.round(preset.spokeCount * 0.65))
    : preset.spokeCount;

  const spokeWeight = preset.spokeWeight * scaleFactor * lerp(0.65, 1.25, scoreNorm);

  stroke(...COMPONENT_COLORS.gearSpokes);
  strokeWeight(spokeWeight);
  strokeCap(ROUND);

  const mentalJitter =
    gear.name === "mental"
      ? map(10 - scoreValue, 0, 10, 0, preset.jitter)
      : 0;

  const communityIrregularity =
    gear.name === "community"
      ? map(10 - scoreValue, 0, 10, 0, 0.12)
      : 0;

  for (let i = 0; i < spokeCount; i += 1) {
    let angle = (TWO_PI / spokeCount) * i - HALF_PI;

    angle += sin(millis() * 0.002 + i) * mentalJitter;
    angle += sin(i * 4.1) * communityIrregularity;

    if (gear.name === "financial") {
      drawVaultSpoke(angle, radius, spokeWeight);
    } else if (gear.name === "social") {
      drawSoftSpoke(angle, radius, spokeWeight);
    } else if (gear.name === "physical") {
      drawMuscleSpoke(angle, radius, spokeWeight);
    } else {
      line(0, 0, cos(angle) * radius, sin(angle) * radius);
    }
  }

  noStroke();
}

function drawVaultSpoke(angle, radius, weight) {
  push();
  rotate(angle);
  line(0, 0, radius * 0.82, 0);
  strokeWeight(weight * 1.5);
  line(radius * 0.52, -weight * 0.65, radius * 0.52, weight * 0.65);
  pop();
}

function drawSoftSpoke(angle, radius, weight) {
  noFill();
  push();
  rotate(angle);
  beginShape();
  vertex(0, 0);
  bezierVertex(radius * 0.25, -weight, radius * 0.55, weight, radius * 0.88, 0);
  endShape();
  pop();
}

function drawMuscleSpoke(angle, radius, weight) {
  
  push();
  rotate(angle);
  strokeWeight(weight * 1.25);
  line(0, 0, radius * 0.95, 0);
  noStroke();
  fill(...COMPONENT_COLORS.gearSpokes);
  ellipse(radius * 0.58, 0, weight * 1.35, weight * 1.35);
  pop();
}
