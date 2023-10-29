class VelvetNoiseProcessor extends AudioWorkletProcessor {
    process (inputs, outputs, parameters) {
      const output = outputs[0]
      output.forEach(channel => {
        // Define the parameters for the velvet noise
        var amplitude = 0.5; // The amplitude of the impulses
        var rate = 100; // The rate of the impulses in Hz
        var probability = rate / sampleRate; // The probability of inserting an impulse
        
        for (let i = 0; i < channel.length; i++) {
          // Generate a random number between 0 and 1
          var random = Math.random();
          
          // If the random number is less than the probability, insert an impulse
          if (random < probability) {
            // Choose a random sign for the impulse (+ or -)
            var sign = Math.random() < 0.5 ? -1 : 1;
            
            // Insert the impulse with the chosen sign and amplitude
            channel[i] = sign * amplitude;
          } else {
            // Otherwise, insert zero
            channel[i] = 0;
          }
        }
      })
      return true
    }
  }
  
  registerProcessor('velvet-noise-processor', VelvetNoiseProcessor);
  