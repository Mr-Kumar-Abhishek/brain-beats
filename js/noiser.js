function white_noiser() {
  const demoCode = async context => {
    await context.audioWorklet.addModule("js/white-noise-generator.js");
    const modulator = new OscillatorNode(context);
    const modGain = new GainNode(context);
    const noiseGenerator = new AudioWorkletNode(context, "noise-generator");
    noiseGenerator.connect(context.destination);
    // Connect the oscillator to 'amplitude' AudioParam.
    const paramAmp = noiseGenerator.parameters.get("amplitude");
    modulator.connect(modGain).connect(paramAmp);
    modulator.frequency.value = 0.5;
    modGain.gain.value = 0.75;
    modulator.start();
  };
}
