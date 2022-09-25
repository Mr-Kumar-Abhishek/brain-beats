// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;
var monaural_oscillator_1;
var monaural_oscillator_2;
var binaural_oscillator_1;
var binaural_oscillator_2;
var single_tone_oscillator;
var sq_monaural_oscillator_1;
var sq_monaural_oscillator_2;

var monaural_flag = 0;
var binaural_flag = 0;
var single_tone_flag = 0;
var solfeggio_flag = 0;
var sq_monaural_flag = 0;


var beat_freq_1;
var beat_freq_2;
var single_tone_freq;

var bufferSize = 4096;

var oscillator_type = 'sine';

function volume_set(){
  var user_volume = $("#volume").val();
  console.log ("User volume " + user_volume);
  var prog_volume = user_volume/100;
  return prog_volume;
}

function play_solfeggio(freq) {
  if (solfeggio_flag == 0 ){
    solfeggio_flag == 1;
    play_single_tone(freq);
  }else {
    stop_solfeggio();
    play_solfeggio(freq);
  }
}

function stop_solfeggio(){
  stop_single_tone();
}

function play_single_tone(freq) {
  single_tone_freq = freq;

  if (single_tone_flag == 0 ) {
    single_tone_flag = 1;
    single_tone_oscillator = audioCtx.createOscillator();

    single_tone_oscillator.type = oscillator_type;
    
   var volume = audioCtx.createGain();
   single_tone_oscillator.connect(volume);
   single_tone_oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); // value in hertz
   volume.connect(audioCtx.destination);
   volume.gain.value = volume_set();
   single_tone_oscillator.start();

  }else {
    stop_single_tone();
    play_single_tone(freq);
  }

}


function play_monaural(freq1, freq2){
  
  beat_freq_1 = freq1;
  beat_freq_2 = freq2;
  
  if (monaural_flag == 0){
    monaural_flag = 1;
    
    monaural_oscillator_1 = audioCtx.createOscillator();
    monaural_oscillator_2 = audioCtx.createOscillator();
    
    monaural_oscillator_1.type = oscillator_type;
    monaural_oscillator_2.type = oscillator_type;
    
    var volume_1 = audioCtx.createGain();
    var volume_2 = audioCtx.createGain();
    
    monaural_oscillator_1.connect(volume_1);
    monaural_oscillator_2.connect(volume_2);

    monaural_oscillator_1.frequency.setValueAtTime(freq1, audioCtx.currentTime);
    monaural_oscillator_2.frequency.setValueAtTime(freq2, audioCtx.currentTime);
    
    volume_1.connect(audioCtx.destination);
    volume_2.connect(audioCtx.destination);
    
    volume_1.gain.value = volume_set();
    volume_2.gain.value = volume_set();
    
    monaural_oscillator_1.start();
    monaural_oscillator_2.start();
    
  }else {
    stop_monaural();
    play_monaural(freq1, freq2);
  }
}


function play_sq_monaural(freq1, freq2){
  
  beat_freq_1 = freq1;
  beat_freq_2 = freq2;
  
  if (sq_monaural_flag == 0){
    sq_monaural_flag = 1;
    
    sq_monaural_oscillator_1 = audioCtx.createOscillator();
    sq_monaural_oscillator_2 = audioCtx.createOscillator();
    
    sq_monaural_oscillator_1.type = 'square';
    sq_monaural_oscillator_2.type = 'square';
    
    var volume_1 = audioCtx.createGain();
    var volume_2 = audioCtx.createGain();
    
    sq_monaural_oscillator_1.connect(volume_1);
    sq_monaural_oscillator_2.connect(volume_2);

    sq_monaural_oscillator_1.frequency.setValueAtTime(freq1, audioCtx.currentTime);
    sq_monaural_oscillator_2.frequency.setValueAtTime(freq2, audioCtx.currentTime);
    
    volume_1.connect(audioCtx.destination);
    volume_2.connect(audioCtx.destination);
    
    volume_1.gain.value = volume_set();
    volume_2.gain.value = volume_set();
    
    sq_monaural_oscillator_1.start();
    sq_monaural_oscillator_2.start();
    
  }else {
    stop_sq_monaural();
    play_sq_monaural(freq1, freq2);
  }
}

function play_binaural(freq1, freq2){
  
    beat_freq_1 = freq1;
    beat_freq_2 = freq2;
  
    if (binaural_flag == 0){
    binaural_flag = 1;
    
    binaural_oscillator_1 = audioCtx.createOscillator();
    binaural_oscillator_2 = audioCtx.createOscillator();
    var pannerNode_1 = audioCtx.createPanner();
    var pannerNode_2 = audioCtx.createPanner();
      
    binaural_oscillator_1.type = oscillator_type;
    binaural_oscillator_2.type = oscillator_type;
    
    binaural_oscillator_1.frequency.setValueAtTime(freq1, audioCtx.currentTime);
    binaural_oscillator_2.frequency.setValueAtTime(freq2, audioCtx.currentTime);
    
    var volume_1 = audioCtx.createGain();
    var volume_2 = audioCtx.createGain();
    
    binaural_oscillator_1.connect(pannerNode_1);
    binaural_oscillator_2.connect(pannerNode_2);
      
    pannerNode_1.connect(volume_1);
    pannerNode_2.connect(volume_2);
    
    volume_1.connect(audioCtx.destination);
    volume_2.connect(audioCtx.destination);
      
    pannerNode_1.setPosition(-1, 0, 0);
    pannerNode_2.setPosition(1, 0, 0);
    
    volume_1.gain.value = volume_set();
    volume_2.gain.value = volume_set();
    
    binaural_oscillator_1.start();
    binaural_oscillator_2.start();
      
  }else {
    stop_binaural();
    play_binaural(freq1, freq2);
  }
  
}

function stop_single_tone() {
  if(single_tone_flag == 1){
    single_tone_flag = 0;
    single_tone_oscillator.stop();
  }
}

function stop_monaural(){
  if(monaural_flag == 1){
    monaural_flag = 0;
    monaural_oscillator_2.stop();
    monaural_oscillator_1.stop();
  }
}

function stop_binaural(){
  if(binaural_flag == 1){
    binaural_flag = 0;
    binaural_oscillator_2.stop();
    binaural_oscillator_1.stop();
  }
}


function stop_sq_monaural(){
  if(sq_monaural_flag == 1){
    sq_monaural_flag = 0;
    sq_monaural_oscillator_2.stop();
    sq_monaural_oscillator_1.stop();
  }
}

function play_monaural_generator(){
  var freq1 = $("#freq1").val();
  var freq2 = $("#freq2").val();
  play_monaural(freq1, freq2);
}

function play_binaural_generator(){
  var freq1 = $("#freq1").val();
  var freq2 = $("#freq2").val();
  play_binaural(freq1, freq2);
}

function play_single_tone_generator(){
  var tone_freq = $("#freq").val();
  play_single_tone(tone_freq);
}

function play_sq_monaural_generator(){
  var freq1 = $("#freq1").val();
  var freq2 = $("#freq2").val();
  play_sq_monaural(freq1, freq2);
}

function warning(whichy){
  switch(whichy) {
    case 0: 
       alert("Lower your volume !!");
       break;
    case 1:
       alert("Lower your volume and use headphones !");
       break;
  }   
}


function live_volume_set(){
  console.log("live volume ran");
  
  if(solfeggio_flag == 1){
    
   stop_solfeggio();
   play_solfeggio(solfeggio_freq); 
    
  }else if (monaural_flag == 1){
    
    stop_monaural();
    play_monaural(beat_freq_1, beat_freq_2);
    
  }else if (binaural_flag == 1){
    
    stop_binaural();
    play_binaural(beat_freq_1, beat_freq_2);
    
  }else if (single_tone_flag == 1){
    
    stop_single_tone();
    play_single_tone(single_tone_freq);

  }else if (sq_monaural_flag == 1){
    
    stop_sq_monaural();
    play_sq_monaural(beat_freq_1, beat_freq_2);
    
  }
  
}
    
$("#volume").change(function(){
  live_volume_set();
});

$("#volume").inputSpinner();

