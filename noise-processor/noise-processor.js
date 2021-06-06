
var audioContext;
var whiteNoiseNode;
var whiteNoiseNodeGain;
var pinkNoiseNode;
var pinkNoiseNodeGain;
var brownNoiseNode;
var brownNoiseNodeGain;

async function white_noise_process(val) {
    audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/white-noise-processor.js');
    whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor');
    whiteNoiseNodeGain = audioContext.createGain();
    whiteNoiseNodeGain.gain.value = val;
    whiteNoiseNode.connect(whiteNoiseNodeGain);
    whiteNoiseNodeGain.connect(audioContext.destination);
}

function stopWhiteNoise(){
    whiteNoiseNodeGain.disconnect();
}

async function pink_noise_process(val) {
    audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/pink-noise-processor.js');
    pinkNoiseNode = new AudioWorkletNode(audioContext, 'pink-noise-processor');
    pinkNoiseNodeGain = audioContext.createGain();
    pinkNoiseNodeGain.gain.value = val;
    pinkNoiseNode.connect(pinkNoiseNodeGain);
    pinkNoiseNodeGain.connect(audioContext.destination);
}

function stopPinkNoise() {
    pinkNoiseNodeGain.disconnect();
}

async function brown_noise_process(val) {
    audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/brown-noise-processor.js');
    brownNoiseNode = new AudioWorkletNode(audioContext, 'brown-noise-processor');
    brownNoiseNodeGain = audioContext.createGain();
    brownNoiseNodeGain.gain.value = val;
    brownNoiseNode.connect(brownNoiseNodeGain);
    brownNoiseNodeGain.connect(audioContext.destination);
}

function stopBrownNoise() {
    brownNoiseNodeGain.disconnect();
}