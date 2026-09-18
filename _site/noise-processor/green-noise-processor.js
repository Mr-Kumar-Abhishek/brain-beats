class GreenNoiseProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      const output = outputs[0]
      output.forEach(channel => {
        for (let i = 0; i < channel.length; i++) {
          channel[i] = Math.random() * 2 - 1
        }
      })
      return true
    }
  }
  
  // Change the class name to match the processor name
  registerProcessor('green-noise-processor', GreenNoiseProcessor);
