// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;

function play_sample() {

 oscillator = audioCtx.createOscillator();

 oscillator.type = 'sine';
 oscillator.frequency.setValueAtTime(24, audioCtx.currentTime); // value in hertz
 oscillator.connect(audioCtx.destination);
 oscillator.start();
}

function stop_sample(){
 oscillator.stop();
}
