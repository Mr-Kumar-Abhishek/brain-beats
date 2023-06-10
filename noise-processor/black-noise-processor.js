class BlackNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    var lastOutput = this.lastOutput || 0.0;
    var bufferSize = outputs[0][0].length;

    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;
      var output = (lastOutput + 0.02 * white) / 1.02;
      lastOutput = output;
      output *= 3.5;
      outputs[0][0][i] = output;
    }

    this.lastOutput = lastOutput;
    return true;
  }
}

registerProcessor('black-noise-processor', BlackNoiseProcessor);