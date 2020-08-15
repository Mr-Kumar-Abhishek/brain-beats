
async function white_noise_process(val) {
    const audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/white-noise-processor.js');
    const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor');
    const whiteNoiseNodeGain = audioContext.createGain();
    whiteNoiseNodeGain.gain.value = val;
    whiteNoiseNode.connect(whiteNoiseNodeGain);
    whiteNoiseNodeGain.connect(audioContext.destination);
}
