// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;

var flag = 0; 

function play_sample(freq) {

  if 
 flag = 1;
 oscillator = audioCtx.createOscillator();

 oscillator.type = 'sine';
 oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); // value in hertz
 oscillator.connect(audioCtx.destination);
 oscillator.start();
}

function stop_sample(){
 oscillator.stop();
}
