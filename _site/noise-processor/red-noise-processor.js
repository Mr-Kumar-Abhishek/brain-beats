class RedNoiseProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      var lastOut = 0.0;
      var R = 0.4;
      const output = outputs[0];
      output.forEach(channel => {
        for (let i = 0; i < channel.length; i++) {
            let white = Math.random() * 2 - 1;
            channel[i] = (lastOut + (R * white)) / (1 + R);
            lastOut = channel[i];
            // channel[i] *= 3.5; // (roughly) compensating for gain
        }
      })
      return true
    }
  }
  
  registerProcessor('red-noise-processor', RedNoiseProcessor);