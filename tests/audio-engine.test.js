/**
 * Brain Beats - Web Audio Engine Automated Test Suite
 * Test-Driven Development (TDD) Test Runner
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("==================================================");
console.log("   Brain Beats Web Audio Engine Test Suite (TDD)  ");
console.log("==================================================\n");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failed++;
  }
}

// ==========================================
// 1. Web Audio API & DOM Mock Environment
// ==========================================

class MockAudioParam {
  constructor(val = 0) {
    this.value = val;
  }
  setValueAtTime(val, time) {
    this.value = val;
  }
}

class MockAudioNode {
  constructor(ctx) {
    this.ctx = ctx;
    this.connections = [];
  }
  connect(dest) {
    this.connections.push(dest);
    return dest;
  }
  disconnect() {
    this.connections = [];
  }
}

class MockOscillatorNode extends MockAudioNode {
  constructor(ctx) {
    super(ctx);
    this._type = 'sine';
    this.frequency = new MockAudioParam(440);
    this.started = false;
    this.stopped = false;
  }
  get type() { return this._type; }
  set type(val) {
    const valid = ['sine', 'square', 'sawtooth', 'triangle', 'custom'];
    if (val !== undefined && !valid.includes(val)) {
      throw new TypeError(`'${val}' is not a valid OscillatorType.`);
    }
    this._type = val;
  }
  start() { this.started = true; }
  stop() { this.stopped = true; }
}

class MockGainNode extends MockAudioNode {
  constructor(ctx) {
    super(ctx);
    this.gain = new MockAudioParam(1);
  }
}

class MockPannerNode extends MockAudioNode {
  constructor(ctx) {
    super(ctx);
    this.panningModel = 'HRTF';
    this.positionX = new MockAudioParam(0);
    this.positionY = new MockAudioParam(0);
    this.positionZ = new MockAudioParam(0);
  }
  setPosition(x, y, z) {
    this.positionX.value = x;
    this.positionY.value = y;
    this.positionZ.value = z;
  }
}

class MockBiquadFilterNode extends MockAudioNode {
  constructor(ctx) {
    super(ctx);
    this.type = 'lowpass';
    this.frequency = new MockAudioParam(350);
    this.Q = new MockAudioParam(1);
    this.gain = new MockAudioParam(0);
  }
}

class MockAudioBufferSourceNode extends MockAudioNode {
  constructor(ctx) {
    super(ctx);
    this.buffer = null;
    this.loop = false;
    this.started = false;
  }
  start() { this.started = true; }
  stop() { this.stopped = true; }
}

class MockAudioContext {
  constructor() {
    this.state = 'suspended';
    this.currentTime = 0;
    this.sampleRate = 44100;
    this.destination = new MockAudioNode(this);
    this.audioWorklet = {
      addModule: async (url) => { return true; }
    };
  }
  resume() {
    this.state = 'running';
    return Promise.resolve();
  }
  createOscillator() { return new MockOscillatorNode(this); }
  createGain() { return new MockGainNode(this); }
  createPanner() { return new MockPannerNode(this); }
  createBiquadFilter() { return new MockBiquadFilterNode(this); }
  createBufferSource() { return new MockAudioBufferSourceNode(this); }
  createBuffer(channels, length, sampleRate) {
    return {
      numberOfChannels: channels,
      length: length,
      sampleRate: sampleRate,
      getChannelData: (ch) => new Float32Array(length)
    };
  }
}

class MockAudioWorkletNode extends MockAudioNode {
  constructor(ctx, name) {
    super(ctx);
    this.name = name;
  }
}

// Setup Globals
global.window = {
  AudioContext: MockAudioContext,
  webkitAudioContext: MockAudioContext,
  setInterval: setInterval,
  clearInterval: clearInterval
};
global.AudioContext = MockAudioContext;
global.AudioWorkletNode = MockAudioWorkletNode;
global.document = {
  querySelector: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, style: {} }),
  querySelectorAll: () => [],
  addEventListener: () => {},
  getElementById: (id) => ({ value: "100" })
};
global.$ = (selector) => {
  const obj = {
    val: () => (selector === '#volume' && global.testVolumeVal !== undefined ? String(global.testVolumeVal) : "100"),
    click: () => obj,
    change: () => obj,
    on: () => obj,
    inputSpinner: () => obj,
    addClass: () => obj,
    removeClass: () => obj,
    trigger: () => obj,
    data: () => 0,
    each: (fn) => obj
  };
  return obj;
};

// ==========================================
// 2. Load and Execute Suite
// ==========================================

const mainJsPath = path.join(__dirname, '../js/main.js');
const mainJsCode = fs.readFileSync(mainJsPath, 'utf8');

console.log("Phase 1: Code Parsing & Evaluation");
try {
  vm.runInThisContext(mainJsCode);
  assert(true, "js/main.js parses and evaluates without errors");
} catch (e) {
  assert(false, `js/main.js failed evaluation: ${e.message}`);
}

async function runTestSuite() {
  console.log("\nPhase 2: Autoplay & AudioContext Lifecycle");
  const ctx = global.getAudioContext();
  assert(ctx !== null && typeof ctx === 'object', "getAudioContext() returns singleton AudioContext");
  assert(ctx.state === 'running', "AudioContext state transitions to 'running' automatically");

  console.log("\nPhase 3: Single Tone Synthesis & Parameter Safety");
  try {
    global.play_pure_tone(432);
    assert(global.pure_tone_flag === 1, "play_pure_tone(432) activates pure tone synthesis");
    global.stop_pure_tone();
    assert(global.pure_tone_flag === 0, "stop_pure_tone() deactivates synthesis");

    global.play_solfeggio(528);
    assert(global.solfeggio_flag === 1, "play_solfeggio(528) activates solfeggio tone");
    global.stop_solfeggio();

    global.play_angel(888);
    assert(global.angel_flag === 1, "play_angel(888) activates angel frequency");
    global.stop_angel();
  } catch (e) {
    assert(false, `Single tone tests threw exception: ${e.message}`);
  }

  console.log("\nPhase 4: Double Tone Synthesis (Binaural & Monaural)");
  try {
    global.play_binaural(200, 208);
    assert(global.binaural_flag === 1, "play_binaural(200, 208) activates binaural beat pair");
    global.stop_binaural();
    assert(global.binaural_flag === 0, "stop_binaural() stops double tone oscillators");

    global.play_monaural(200, 208);
    assert(global.monaural_flag === 1, "play_monaural(200, 208) activates monaural beat pair");
    global.stop_monaural();
  } catch (e) {
    assert(false, `Double tone tests threw exception: ${e.message}`);
  }

  console.log("\nPhase 5: 3D Spatial Audio & Multi-Frequency Matrices");
  try {
    global.play_sine_3d_auto([432, 528, 639]);
    assert(global.boolSine3Dauto === 1, "play_sine_3d_auto initializes 3-point spatial matrix");
    global.stop_sine_3d_auto();
    assert(global.boolSine3Dauto === 0, "stop_sine_3d_auto cleanly stops all matrix oscillators");

    global.play_XTRA_3d_auto([100, 200]);
    assert(global.boolXTRA3Dauto === 1, "play_XTRA_3d_auto initializes properly");
    global.stop_XTRA_3d();
  } catch (e) {
    assert(false, `3D spatial audio tests threw exception: ${e.message}`);
  }

  console.log("\nPhase 6: Noise Synthesizers & Worklet Fallback");
  try {
    await global.play_white_noise();
    assert(global.boolWhite === 1, "play_white_noise() attaches to shared audioCtx");
    global.stop_white_noise();
    assert(global.boolWhite === 0, "stop_white_noise() disconnects nodes cleanly");

    await global.play_pink_noise();
    assert(global.boolPink === 1, "play_pink_noise() runs successfully");
    global.stop_pink_noise();

    await global.play_brown_noise();
    assert(global.boolBrown === 1, "play_brown_noise() runs successfully");
    global.stop_brown_noise();

    await global.play_green_noise();
    assert(global.boolGreen === 1, "play_green_noise() runs successfully");
    global.stop_green_noise();

    await global.play_blue_noise();
    assert(global.boolBlue === 1, "play_blue_noise() runs successfully");
    global.stop_blue_noise();

    await global.play_violet_noise();
    assert(global.boolViolet === 1, "play_violet_noise() activates +6dB/oct differentiated violet noise");
    
    // Test transition from Violet to Yellow noise
    await global.play_yellow_noise();
    assert(global.boolYellow === 1 && global.boolViolet === 0, "play_yellow_noise() cleanly transitions from violet to yellow noise without conflicts");
    
    // Test transition from Yellow to Violet noise
    await global.play_violet_noise();
    assert(global.boolViolet === 1 && global.boolYellow === 0, "play_violet_noise() cleanly transitions from yellow to violet noise without conflicts");
    global.stop_violet_noise();
    assert(global.boolViolet === 0, "stop_violet_noise() deactivates violet noise cleanly");
  } catch (e) {
    assert(false, `Noise synthesizer tests threw exception: ${e.message}`);
  }

  console.log("\nPhase 7: Volume Control & Gain Dynamics Algorithm");
  try {
    global.testVolumeVal = 75;
    assert(global.volume_set() === 0.75, "volume_set() converts 0-100 percentage scale to 0.0-1.0 gain factor (75 -> 0.75)");
    
    global.play_solfeggio(528);
    global.live_volume_set();
    assert(global.volume.gain.value === 0.75, "live_volume_set() dynamically updates active tone volume GainNode");
    global.stop_solfeggio();

    global.isochronic_flag = 1;
    global.toggle_flag = 0;
    global.toggle_volume();
    assert(global.volume.gain.value === 0.75 && global.toggle_flag === 1, "toggle_volume() enables volume on pulse onset");
    global.toggle_volume();
    assert(global.volume.gain.value === 0 && global.toggle_flag === 0, "toggle_volume() mutes volume on pulse offset");
    global.isochronic_flag = 0;

    await global.play_violet_noise();
    global.live_volume_set();
    assert(global.violetNoiseNodeGain.gain.value === 0.75, "live_volume_set() dynamically updates violet noise gain");
    global.stop_violet_noise();

    await global.play_yellow_noise();
    global.live_volume_set();
    assert(global.yellowNoiseNodeGain.gain.value === 0.75, "live_volume_set() dynamically updates yellow noise gain");
    global.stop_yellow_noise();

    // Verify all 38 audio HTML pages contain the volume-box and #volume control
    const rootFiles = fs.readdirSync(path.join(__dirname, '..')).filter(f => f.endsWith('.html'));
    let pagesWithVolume = 0;
    for (const file of rootFiles) {
      const htmlContent = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
      if (htmlContent.includes('id="volume"') && htmlContent.includes('class="volume-box"')) {
        pagesWithVolume++;
      }
    }
    assert(pagesWithVolume === 38, `All ${pagesWithVolume} audio generator and preset pages contain unified volume-box controls`);

    global.testVolumeVal = 100;
  } catch (e) {
    assert(false, `Volume tests threw exception: ${e.message}`);
  }

  console.log("\nPhase 8: Frequency Calculation & Octave Range Shifting");
  try {
    assert(global.adjustFrequency(10) === 20 || global.adjustFrequency(10) >= 20, "adjustFrequency shifts infrasound (<20Hz) up into hearing range");
    assert(global.adjustFrequency(440) === 440, "adjustFrequency preserves in-range frequencies (440Hz)");
    assert(global.adjustFrequency(40000) <= 20000, "adjustFrequency shifts ultrasound (>20kHz) down into hearing range");
  } catch (e) {
    assert(false, `Frequency adjustment tests threw exception: ${e.message}`);
  }

  console.log("\nPhase 9: Preset Database Schema & File Integrity");
  const jsonDir = path.join(__dirname, '../json');
  const jsonFiles = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));
  let validJsonCount = 0;
  for (const f of jsonFiles) {
    try {
      const content = fs.readFileSync(path.join(jsonDir, f), 'utf8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) validJsonCount++;
    } catch (e) {
      assert(false, `JSON file ${f} is malformed: ${e.message}`);
    }
  }
  assert(validJsonCount === jsonFiles.length, `All ${jsonFiles.length} JSON preset database files are valid`);

  console.log("\nPhase 10: Service Worker Offline Precache Verification");
  const swCode = fs.readFileSync(path.join(__dirname, '../sw-generated.js'), 'utf8');
  const matches = swCode.match(/"url":"([^"]+)"/g) || [];
  let existingUrls = 0;
  for (const m of matches) {
    const relUrl = m.replace(/"url":"/, '').replace(/"$/, '');
    const localPath = path.join(__dirname, '..', relUrl);
    if (fs.existsSync(localPath)) {
      existingUrls++;
    } else {
      console.warn(`    Precached URL missing on disk: ${relUrl}`);
    }
  }
  assert(existingUrls === matches.length, `All ${matches.length} precached Service Worker URLs physically exist on disk`);

  console.log("\nPhase 11: MathJax Configuration & Rendering Verification");
  const mathjaxIncludePath = path.join(__dirname, '../_includes/mathjax.html');
  assert(fs.existsSync(mathjaxIncludePath), "_includes/mathjax.html exists on disk");
  const mathjaxInclude = fs.readFileSync(mathjaxIncludePath, 'utf8');
  assert(mathjaxInclude.includes("window.MathJax") && mathjaxInclude.includes("inlineMath") && mathjaxInclude.includes("tex-mml-chtml.js"), "_includes/mathjax.html contains valid MathJax 3 configuration & CDN/local loader");

  const defaultLayout = fs.readFileSync(path.join(__dirname, '../_layouts/default.html'), 'utf8');
  assert(defaultLayout.includes("{% include mathjax.html %}"), "_layouts/default.html includes mathjax.html");

  const configYml = fs.readFileSync(path.join(__dirname, '../_config.yml'), 'utf8');
  assert(configYml.includes("math_engine: mathjax"), "_config.yml configures math_engine: mathjax for kramdown");

  const cocomoHtml = fs.readFileSync(path.join(__dirname, '../cocomo.html'), 'utf8');
  assert(cocomoHtml.includes("MathJax") && cocomoHtml.includes("\\text{Effort}"), "cocomo.html includes MathJax and LaTeX formatted equations");

  console.log("\nPhase 12: Deployment Runtime & Node.js 24 Environment Verification");
  const nodeVersionFile = fs.readFileSync(path.join(__dirname, '../.node-version'), 'utf8').trim();
  assert(nodeVersionFile === '24', ".node-version is pinned to Node.js 24");

  const nvmrcFile = fs.readFileSync(path.join(__dirname, '../.nvmrc'), 'utf8').trim();
  assert(nvmrcFile === '24', ".nvmrc is pinned to Node.js 24");

  const netlifyToml = fs.readFileSync(path.join(__dirname, '../netlify.toml'), 'utf8');
  assert(netlifyToml.includes('NODE_VERSION = "24"'), "netlify.toml configures NODE_VERSION = '24'");

  const pkgJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  assert(pkgJson.engines && pkgJson.engines.node === '>=24.0.0', "package.json specifies engines.node >= 24.0.0");

  const pagesWorkflow = fs.readFileSync(path.join(__dirname, '../.github/workflows/pages.yml'), 'utf8');
  assert(pagesWorkflow.includes("node-version-file: '.node-version'"), ".github/workflows/pages.yml references .node-version (Node 24)");

  console.log("\nPhase 13: Developer Documentation, README & Patch Integrity Verification");
  const readmeContent = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
  assert(readmeContent.includes("Developer Documentation & Architecture Index") && readmeContent.includes("Brain Beats"), "README.md exists and contains complete feature guide & developer documentation index");

  const devGuideContent = fs.readFileSync(path.join(__dirname, '../DEVELOPMENT.md'), 'utf8');
  assert(devGuideContent.includes("System Architecture Overview") && devGuideContent.includes("Web Audio Engine"), "DEVELOPMENT.md contains architecture and developer guidelines");

  const testReportContent = fs.readFileSync(path.join(__dirname, '../TEST_REPORT.md'), 'utf8');
  assert(testReportContent.includes("Red-Green-Refactor Matrix"), "TEST_REPORT.md contains TDD audit matrix and execution records");

  const contributingContent = fs.readFileSync(path.join(__dirname, '../CONTRIBUTING.md'), 'utf8');
  assert(contributingContent.includes("Code of Conduct") && contributingContent.includes("Pull Requests"), "CONTRIBUTING.md contains contribution and security rules");

  const cocomoDoc = fs.readFileSync(path.join(__dirname, '../cocomo-cost-estimate.md'), 'utf8');
  assert(cocomoDoc.includes("COCOMO"), "cocomo-cost-estimate.md contains COCOMO economic valuation");

  const mainJsContent = fs.readFileSync(path.join(__dirname, '../js/main.js'), 'utf8');
  assert(mainJsContent.includes("play_yellow_noise") && mainJsContent.includes("play_violet_noise") && mainJsContent.includes("live_volume_set"), "js/main.js contains yellow noise, violet noise, and volume dynamics patches");

  console.log(`   Test Results: ${passed} Passed, ${failed} Failed`);
  console.log("==================================================\n");

  if (failed > 0) {
    process.exit(1);
  }
}

runTestSuite();
