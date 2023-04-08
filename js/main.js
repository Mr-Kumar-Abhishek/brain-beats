// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var double_tone_oscillator_1;
var double_tone_oscillator_2;
var single_tone_oscillator;

var monaural_flag = 0;
var binaural_flag = 0;
var pure_tone_flag = 0;
var double_tone_flag = 0;
var single_tone_flag = 0;
var solfeggio_flag = 0;
var sq_monaural_flag = 0;
var white_noise_flag = 0;
var pink_noise_flag = 0;

var volume;
var volume_1;
var volume_2;

var beat_freq_1;
var beat_freq_2;
var single_tone_freq;

var bufferSize = 4096;

var white_noise_node;
var white_noise_volume;

var pink_noise_node;
var pink_noise_volume;


var audioContext;
var whiteNoiseNode;
var whiteNoiseNodeGain;
var pinkNoiseNode;
var pinkNoiseNodeGain;
var brownNoiseNode;
var brownNoiseNodeGain;
var boolWhite = 0;
var boolPink = 0;
var boolBrown = 0;
var notification;


var oscillator_type = 'sine'; // default values
var deviation_type = 'binaural'; // default values

function volume_set(){
  var user_volume = $("#volume").val();
//  console.log ("User volume " + user_volume);
  var prog_volume = user_volume/100;
  return prog_volume;
}

function play_solfeggio(freq) {
  if (solfeggio_flag == 0 ){
    stop_all();
    solfeggio_flag = 1;
    play_single_tone(freq);
  }else {
    stop_solfeggio();
    play_solfeggio(freq);
  }
}

function stop_solfeggio(){
  solfeggio_flag = 0;
  stop_single_tone();
}

function play_pure_tone(freq) {
 if (pure_tone_flag == 0) {
  stop_all();
  pure_tone_flag = 1;
  play_single_tone(freq);
 }else {

  stop_pure_tone();
  play_pure_tone(freq);
 }
}

function stop_pure_tone() {
  pure_tone_flag = 0;
  stop_single_tone();
}

function play_single_tone(freq) {
  single_tone_freq = freq;

  if (single_tone_flag == 0 ) {
    stop_all();
    single_tone_flag = 1;
    single_tone_oscillator = audioCtx.createOscillator();

    single_tone_oscillator.type = oscillator_type;
    
   volume = audioCtx.createGain();
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
    stop_all();
    monaural_flag = 1;
    play_double_tone(beat_freq_1, beat_freq_2, 'sine', 'monaural');
    
  }else {
    stop_monaural();
    play_monaural(freq1, freq2);
  }
}


function play_sq_monaural(freq1, freq2){
  
  beat_freq_1 = freq1;
  beat_freq_2 = freq2;
  
  if (sq_monaural_flag == 0){
    stop_all();
    sq_monaural_flag = 1;
    
    play_double_tone(beat_freq_1, beat_freq_2, 'square', 'monaural');
    
  }else {
    stop_sq_monaural();
    play_sq_monaural(freq1, freq2);
  }
}

function play_binaural(freq1, freq2){
  
    beat_freq_1 = freq1;
    beat_freq_2 = freq2;
  
    if (binaural_flag == 0){
    stop_all();
    binaural_flag = 1;
     
    play_double_tone(beat_freq_1, beat_freq_2, 'sine', 'binaural');
      
  }else {
    stop_binaural();
    play_binaural(freq1, freq2);
  }
  
}

function play_double_tone (freq1, freq2, form, deviation) {
  if (double_tone_flag == 0) {
    stop_all();
    double_tone_flag = 1;

    beat_freq_1 = freq1;
    beat_freq_2 = freq2;
    deviation_type = deviation;
    oscillator_type = form;
    double_tone_oscillator_1 = audioCtx.createOscillator();
    double_tone_oscillator_2 = audioCtx.createOscillator();
    
    var pannerNode_1 = audioCtx.createPanner();
    var pannerNode_2 = audioCtx.createPanner();
      
    double_tone_oscillator_1.type = double_tone_oscillator_2.type = oscillator_type;

    
    double_tone_oscillator_1.frequency.setValueAtTime(freq1, audioCtx.currentTime);
    double_tone_oscillator_2.frequency.setValueAtTime(freq2, audioCtx.currentTime);
    
    volume_1 = audioCtx.createGain();
    volume_2 = audioCtx.createGain();
    
    double_tone_oscillator_1.connect(pannerNode_1);
    double_tone_oscillator_2.connect(pannerNode_2);
      
    pannerNode_1.connect(volume_1);
    pannerNode_2.connect(volume_2);
    
    volume_1.connect(audioCtx.destination);
    volume_2.connect(audioCtx.destination);
    
    if (deviation == "binaural") {
      pannerNode_1.positionX.setValueAtTime(-1, audioCtx.currentTime);
      pannerNode_2.positionX.setValueAtTime(1, audioCtx.currentTime);
    } else if (deviation == "monaural") {
      pannerNode_1.positionX.setValueAtTime(0, audioCtx.currentTime);
      pannerNode_2.positionX.setValueAtTime(0, audioCtx.currentTime);
    }
    
    volume_1.gain.value = volume_set();
    volume_2.gain.value = volume_set();
    
    double_tone_oscillator_1.start();
    double_tone_oscillator_2.start();

  } else {
    stop_double_tone();
    play_double_tone(beat_freq_1, beat_freq_2, oscillator_type, deviation_type);
  }
}

async function play_white_noise() {
  if (boolWhite == 0) {
    stop_all();
    boolWhite = 1;
    audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/white-noise-processor.js');
    whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor');
    whiteNoiseNodeGain = audioContext.createGain();
    whiteNoiseNodeGain.gain.value = volume_set();
    whiteNoiseNode.connect(whiteNoiseNodeGain);
    whiteNoiseNodeGain.connect(audioContext.destination);
  }
}

async function play_pink_noise() {
  if (boolPink == 0 ){
    stop_all();
    boolPink = 1;
    audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/pink-noise-processor.js');
    pinkNoiseNode = new AudioWorkletNode(audioContext, 'pink-noise-processor');
    pinkNoiseNodeGain = audioContext.createGain();
    pinkNoiseNodeGain.gain.value = volume_set();
    pinkNoiseNode.connect(pinkNoiseNodeGain);
    pinkNoiseNodeGain.connect(audioContext.destination);
  }
}

async function play_brown_noise() {
  if(boolBrown == 0) {
      stop_all();
      boolBrown = 1;
      audioContext = new AudioContext();
      await audioContext.audioWorklet.addModule('noise-processor/brown-noise-processor.js');
      brownNoiseNode = new AudioWorkletNode(audioContext, 'brown-noise-processor');
      brownNoiseNodeGain = audioContext.createGain();
      brownNoiseNodeGain.gain.value = volume_set();
      brownNoiseNode.connect(brownNoiseNodeGain);
      brownNoiseNodeGain.connect(audioContext.destination);
  }
}

function stop_double_tone() {
  if(double_tone_flag == 1){
    double_tone_flag = 0;
    double_tone_oscillator_1.stop();
    double_tone_oscillator_2.stop();
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
    stop_double_tone();
  }
}

function stop_binaural(){
  if(binaural_flag == 1){
    binaural_flag = 0;
    stop_double_tone();
  }
}

function stop_sq_monaural(){
  if(sq_monaural_flag == 1){
    sq_monaural_flag = 0;
    stop_double_tone();
  }
}

function stop_white_noise() {
  if (boolWhite == 1 ) {
    boolWhite = 0;
    whiteNoiseNodeGain.disconnect();
  }
}

function stop_pink_noise() {
  if (boolPink == 1 ){
    boolPink = 0;
    pinkNoiseNodeGain.disconnect();
  }
}

function stop_brown_noise() {
  if(boolBrown == 1) {
      boolBrown = 0;
      brownNoiseNodeGain.disconnect();
  }
}

function stop_isochronic() {
  if (isochronic_flag == 1) {
    isochronic_flag = 0;
    console.log("isocrhronic stopped.");
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

function play_pure_tone_generator(){
  var tone_freq = $("#freq").val();
  play_pure_tone(tone_freq);
}

function play_single_tone_generator(){
  var tone_freq = $("#freq").val();
  play_pure_tone(tone_freq);
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
  
  if(solfeggio_flag == 1 || pure_tone_flag  == 1 || single_tone_flag == 1){
   if(volume.gain.value != undefined) {
    volume.gain.value = volume_set();
   } 
    
  }else if (monaural_flag == 1 || binaural_flag == 1 || 
            sq_monaural_flag == 1 || double_tone_flag == 1 ){
    
    if(volume_1.gain.value != undefined && volume_2.gain.value != undefined) {
      volume_1.gain.value = volume_set();
      volume_2.gain.value = volume_set();
     }  
  }else if (boolWhite == 1 ) {
    if(whiteNoiseNodeGain.gain.value != undefined ) {
      whiteNoiseNodeGain.gain.value = volume_set();
    }
  }else if (boolPink == 1 ) {
    if (pinkNoiseNodeGain.gain.value != undefined) {
      pinkNoiseNodeGain.gain.value = volume_set();
    }
  }else if (boolBrown == 1) {
    if (brownNoiseNodeGain.gain.value != undefined) {
      brownNoiseNodeGain.gain.value = volume_set();
    }
  }
}
    
$("#volume").change(function(){
  live_volume_set();
});

$("#volume").inputSpinner();

function stop_all() {
 /* if (boolWhite == 1 ) { stop_white_noise(); }
  if (boolPink == 1 ) { stop_pink_noise(); }
  if (boolBrown == 1 ) { stop_brown_noise(); }
  if (solfeggio_flag == 1 ) { stop_solfeggio(); }
  if (pure_tone_flag == 1 ) { stop_pure_tone(); }
  if (binaural_flag == 1 ) { stop_binaural(); }
  if (monaural_flag == 1 ) { stop_monaural (); }
  if (sq_monaural_flag == 1 ) { stop_sq_monaural(); }
  if (single_tone_flag == 1 ) { stop_single_tone(); }
  if (double_tone_flag == 1 ) { stop_double_tone(); } */
}