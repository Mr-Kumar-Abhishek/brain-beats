class VioletNoiseProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      const output = outputs[0]
      output.forEach(channel => {
        for (let i = 0; i < channel.length; i++) {
          const whiteNoise = Math.random() * 2 - 1;
          const violetNoise = whiteNoise * Math.sqrt(i / channel.length);
          channel[i] = violetNoise
        }
      })
      return true
    }
  }
  
  registerProcessor('violet-noise-processor', VioletNoiseProcessor);