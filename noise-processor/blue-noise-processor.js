class WhiteNoiseProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      const output = outputs[0];
      // Generate blue noise samples
      let lastValue = 0;
      output.forEach(channel => {
        for (let i = 0; i < channel.length; i++) {
          var whiteNoise = Math.random() * 2 - 1;
          var blueNoise = (whiteNoise + lastValue) / 2;
          channel[i] = blueNoise;
          lastValue = blueNoise;
        }
      })
      return true
    }
  }
  
  registerProcessor('white-noise-processor', WhiteNoiseProcessor);