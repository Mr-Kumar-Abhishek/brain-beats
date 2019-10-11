// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;
var monaural_oscillator_1;
var monaural_oscillator_2;

var solfeggio_flag = 0;
var monaural_flag = 0;
var oscillator_type = 'sine'

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

function play_monaural(freq1, freq2){
  if (monaural_flag == 0){
    monaural_flag = 1;
    
    monaural_oscillator_1 = audioCtx.createOscillator();
    monaural_oscillator_2 = audioCtx.createOscillator();
    
    monaural_oscillator_1.type = oscillator_type;
    monaural_oscillator_2.type = oscillator_type;
    
    monaural_oscillator_1.frequency.setValueAtTime(freq1, audioCtx.currentTime);
    monaural_oscillator_2.frequency.setValueAtTime(freq2, audioCtx.currentTime);
    
    monaural_oscillator_1.connect(audioCtx.destination);
    monaural_oscillator_2.connect(audioCtx.destination);
    monaural_oscillator_1.start();
    monaural_oscillator_2.start();
  }else {
    stop_monaural();
    play_monaural(freq1, freq2);
  }
}

function stop_solfeggio(){
  if (solfeggio_flag == 1){
    solfeggio_flag = 0;
    oscillator.stop(); 
  }
}

function stop_monaural(){
  if(monaural_flag == 1){
    monaural_flag = 0;
    monaural_oscillator_2.stop();
    monaural_oscillator_1.stop();
  }
}