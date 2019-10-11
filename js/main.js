// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;
var monaural_oscilator_1;
var monaural_oscilator_2;

var solfeggio_flag = 0;
var monaural_flag = 0;

function play_solfeggio(freq) {

  if (solfeggio_flag == 0){
  
   solfeggio_flag = 1;
   oscillator = audioCtx.createOscillator();

   oscillator.type = 'sine';
   oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); // value in hertz
   oscillator.connect(audioCtx.destination);
   oscillator.start();
  }else {
    stop_solfeggio();
    play_solfeggio(freq);
  }
}

function play_monaural(freq1, freq1){
  if ()  
}

function stop_solfeggio(){
  if (solfeggio_flag == 1){
    solfeggio_flag = 0;
    oscillator.stop(); 
  }
}
