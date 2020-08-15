const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('white-noise-processor.js')
const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor');
const whiteNoiseNodeGain = audioContext.createGain();
whiteNoiseNodeGain.gain.value = 0.0;
whiteNoiseNode.connect(whiteNoiseNodeGain);
whiteNoiseNodeGain.connect(audioContext.destination);