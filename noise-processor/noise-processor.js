
var audioContext;
var whiteNoiseNodel
var whiteNoiseNodeGain;

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