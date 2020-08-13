class BrownNoiseProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      const output = outputs[0];
      output.forEach(channel => {
        for (let i = 0; i < channel.length; i++) {
            let white = Math.random() * 2 - 1;
            channel[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = channel[i];
            channel[i] *= 3.5; // (roughly) compensating for gain
        }
      })
      return true
    }
  }
  
  registerProcessor('brown-noise-processor', BrownNoiseProcessor);