// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var double_tone_oscillator_1;
var double_tone_oscillator_2;
var single_tone_oscillator;
var rife_oscillators;

var monaural_flag = 0;
var binaural_flag = 0;
var pure_tone_flag = 0;
var double_tone_flag = 0;
var single_tone_flag = 0;
var solfeggio_flag = 0;
var isochronic_flag = 0;
var sq_monaural_flag = 0;
var white_noise_flag = 0;
var pink_noise_flag = 0;
var toggle_flag = 0;
var dreamachine_flag = 0;
var angel_flag = 0;

var volume;
var volume_1;
var volume_2;

var beat_freq_1;
var beat_freq_2;
var single_tone_freq;
let tone_freq_array;

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
var redNoiseNode;
var redNoiseNodeGain;
var blackNoiseNode;
var blackNoiseNodeGain;
var greenNoiseNode;
var greenNoiseNodeGain;
var blueNoiseNode;
var blueNoiseNodeGain;
var violetNoiseNode;
var violetNoiseNodeGain;
var boolWhite = 0;
var boolPink = 0;
var boolBrown = 0;
var boolRed = 0;
var boolBlack = 0;
var boolGreen = 0;
var boolBlue = 0;
var boolViolet = 0;
var boolRifeMonaural = 0;
var boolRife3D = 0;
var boolRife3Dauto = 0;
var x_value;
var y_values;
var z_values;

var notification;
var toggler;

// A global variable to keep track of the number of frequency fields  
var freq_count = 1;

var oscillator_type = 'sine'; // default values
var deviation_type = 'binaural'; // default values
var panning_model = 'HRTF'; // used in binaural and 3D sounds

  // Get the body element
  var body = document.querySelector("body");

  var cards = document.querySelectorAll(".card");

  // Define a variable to store the animation duration
  var duration = 0.01;
  

function start_dreamachine(freq) {
  if(dreamachine_flag == 0 ) {
    dreamachine_flag = 1;
      // Add the flicker class to the body element
    body.classList.add("flicker");

    // Calculate the animation duration in seconds
    duration = 1 / freq;

    // Set the animation duration property on the body element
    body.style.animationDuration = duration + "s";
    
    for (var i = 0; i < cards.length; i++) {
      // Add the class "flicker" to each element
      cards[i].classList.add("flicker");
      cards[i].style.animationDuration = duration + "s";
    }
  }else {
    stop_dreamachine();
    start_dreamachine(freq);
  }
}

function stop_dreamachine() {
  if(dreamachine_flag == 1 ){
  dreamachine_flag = 0;
    // Remove the flicker class from the body element
  body.classList.remove("flicker");
  for (var i = 0; i < cards.length; i++) {
    // remove the class "flicker" to each element
    cards[i].classList.remove("flicker");
  }
  }
}

function start_dreamachine_generator(){
  var dream_freq = $("#freq").val();
  start_dreamachine(dream_freq);
}

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

function play_angel(freq) {
  if (angel_flag == 0 ){
    stop_all();
    angel_flag = 1;
    play_single_tone(freq);
  }else {
    stop_angel();
    play_angel(freq);
  }  
}

function stop_angel(){
  angel_flag = 0;
  stop_single_tone();
}

function play_single_tone(freq, oscillator_type) {
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

function play_isochronic(freq1, freq2) {
  if (isochronic_flag == 0) {
    isochronic_flag = 1;
    beat_freq_1 = freq1;
    beat_freq_2 = freq2 - freq1;
    console.log("Playing isochronic at " + freq1 + " " + freq2 + " At beat " + beat_freq_1 + " " + beat_freq_2);
    play_single_tone(beat_freq_1, "square");
    toggler = window.setInterval(toggle_volume, (1000/(beat_freq_2*2)));
  }else {
    stop_isochronic();
    play_isochronic(freq1, freq2);
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

async function play_red_noise() {
  if(boolRed == 0) {
      stop_all();
      boolRed = 1;
      audioContext = new AudioContext();
      await audioContext.audioWorklet.addModule('noise-processor/red-noise-processor.js');
      redNoiseNode = new AudioWorkletNode(audioContext, 'red-noise-processor');
      redNoiseNodeGain = audioContext.createGain();
      redNoiseNodeGain.gain.value = volume_set();
      redNoiseNode.connect(redNoiseNodeGain);
      redNoiseNodeGain.connect(audioContext.destination);
  }
}

async function play_black_noise() {
  if (boolBlack == 0) {
    stop_all();
    boolBlack = 1;
    var audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/black-noise-processor.js');
    blackNoiseNode = new AudioWorkletNode(audioContext, 'black-noise-processor');
    blackNoiseNodeGain = audioContext.createGain();
    blackNoiseNodeGain.gain.value = volume_set();
    blackNoiseNode.connect(blackNoiseNodeGain);
    blackNoiseNodeGain.connect(audioContext.destination);
  }
}

async function play_blue_noise() {
  if (boolBlue == 0) {
    stop_all();
    boolBlue = 1;
    var audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/blue-noise-processor.js');
    blueNoiseNode = new AudioWorkletNode(audioContext, 'blue-noise-processor');
    blueNoiseNodeGain = audioContext.createGain();
    blueNoiseNodeGain.gain.value = volume_set();
    blueNoiseNode.connect(blueNoiseNodeGain);
    blueNoiseNodeGain.connect(audioContext.destination);
  }
}


async function play_violet_noise() {
  if (boolViolet == 0) {
    stop_all();
    boolViolet = 1;
    var audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/violet-noise-processor.js');
    violetNoiseNode = new AudioWorkletNode(audioContext, 'violet-noise-processor');
    violetNoiseNodeGain = audioContext.createGain();
    violetNoiseNodeGain.gain.value = volume_set();
    violetNoiseNode.connect(violetNoiseNodeGain);
    violetNoiseNodeGain.connect(audioContext.destination);
  }
}

async function play_green_noise() {
  if (boolGreen == 0) {
    stop_all();
    boolGreen = 1;
    var audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('noise-processor/green-noise-processor.js');
    greenNoiseNode = new AudioWorkletNode(audioContext, 'green-noise-processor');
    greenNoiseNodeGain = audioContext.createGain();
    greenNoiseNodeGain.gain.value = volume_set();

    // Add a lowpass filter
    const filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1000;

    // Connect the nodes
    greenNoiseNode.connect(filter);
    filter.connect(greenNoiseNodeGain);
    greenNoiseNodeGain.connect(audioContext.destination);
  }
}

function play_rife_monaural_generator(){
  // Create an empty array to store the frequency values
  tone_freq_array = [];

  // Loop through all the input elements with id starting with "freq-"
  $("input[id^='freq-']").each(function(){
    // Get the value of each input element and push it to the array
    var tone_freq = $(this).val();
    tone_freq_array.push(tone_freq);
  });

  // Pass the array as an argument to play_pure_tone
  // play_pure_tone(tone_freq_array);
    console.log(tone_freq_array);
    play_rife_monaural(tone_freq_array);

}

function play_rife_3d_auto_generator() {
    // Create an empty array to store the frequency values
    tone_freq_array = [];

    // Loop through all the input elements with id starting with "freq-"
    $("input[id^='freq-']").each(function(){
      // Get the value of each input element and push it to the array
      var tone_freq = $(this).val();
      tone_freq_array.push(tone_freq);
    });
    play_rife_3d_auto(tone_freq_array);
}

// A function to generate a random number between min and max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// A function to distribute n points evenly in 3D space
function distributePoints(n) {
  // Initialize the 2D array
  let points = [[], [], []];

  // Calculate the radius of the sphere that contains the points
  let radius = Math.cbrt(n / (4 / 3 * Math.PI));

  // Scale the radius to fit the range [-1, 1]
  let scale = 1 / radius;

  // Loop through n times
  for (let i = 0; i < n; i++) {
    // Generate a random point on the surface of the sphere using spherical coordinates
    let theta = random(0, Math.PI); // The polar angle
    let phi = random(0, 2 * Math.PI); // The azimuthal angle
    let x = scale * radius * Math.sin(theta) * Math.cos(phi); // The x coordinate
    let y = scale * radius * Math.sin(theta) * Math.sin(phi); // The y coordinate
    let z = scale * radius * Math.cos(theta); // The z coordinate

    // Push the coordinates to the corresponding arrays
    points[0].push(x);
    points[1].push(y);
    points[2].push(z);
  }

  // Return the 2D array
  return points;
}



function play_rife_3d_auto(tone_freq_array) {

  if (boolRife3Dauto ==  0 ) {

  
    var auto_matrix = distributePoints(tone_freq_array.length);

    console.log(auto_matrix);

    x_values = auto_matrix[0];
    y_values = auto_matrix[1];
    z_values = auto_matrix[2];

    console.log(x_values);
    console.log(y_values);
    console.log(z_values);
    play_rife_3d(tone_freq_array, x_values, y_values, z_values);
  } else {
    stop_rife_3d_auto();
    play_rife_3d_auto(tone_freq_array);
  }
}


function play_rife_monaural(tone_freq_array) {
    if (boolRifeMonaural == 0) {
      stop_all();
      boolRifeMonaural = 1;
      
      x_values = [];
      y_values = [];
      z_values = [];

      for (var i = 0; i < tone_freq_array.length; i++) {
        x_values.push(0);
        y_values.push(0);
        z_values.push(0);
      }

      play_rife_3d(tone_freq_array, x_values, y_values, z_values);
    } else {
      stop_rife_monaural();
      play_rife_monaural(tone_freq_array);
    }
}

 // A function to play the pure tone generator
 function play_rife_3d_generator() {

      // Get the frequency values from the input elements
      tone_freq_array = [];
      for (var i=0; i<freq_count; i++) {
        var freq_input= document.getElementById("freq-"+i);
        if (freq_input) {
          var freq_value= parseFloat(freq_input.value);
          if (!isNaN(freq_value) && freq_value > 0) {
            tone_freq_array.push(freq_value);
          }
        }
      }

      // Get the x-coordinate values from the input elements
      x_values= [];
      for (var i=0; i<freq_count; i++) {
        var x_input= document.getElementById("x-"+i);
        if (x_input) {
          var x_value= parseFloat(x_input.value);
          if (!isNaN(x_value)) {
            x_values.push(x_value);
          }
        }
      }

      // Get the y-coordinate values from the input elements
      y_values= [];
      for (var i=0; i<freq_count; i++) {
        var y_input= document.getElementById("y-"+i);
        if (y_input) {
          var y_value= parseFloat(y_input.value);
          if (!isNaN(y_value)) {
            y_values.push(y_value);
          }
        }
      }

      // Get the z-coordinate values from the input elements
      z_values= [];
      for (var i=0; i<freq_count; i++) {
        var z_input= document.getElementById("z-"+i);
        if (z_input) {
          var z_value= parseFloat(z_input.value);
          if (!isNaN(z_value)) {
            z_values.push(z_value);
          }
        }
      }

      play_rife_3d(tone_freq_array, x_values, y_values, z_values);
}

function play_rife_3d(tone_freq_array, x_values, y_values, z_values) {
  if (boolRife3D == 0 ) {
    boolRife3D = 1;
  
      // Check if there are any valid frequency values
      if (tone_freq_array.length > 0) {

        // Create an array of oscillators for each frequency value
        rife_oscillators = [];
        for (var i = 0; i < tone_freq_array.length; i++) {
          var oscillator = audioCtx.createOscillator();
          oscillator.type = oscillator_type;
          oscillator.frequency.value = tone_freq_array[i];
          rife_oscillators.push(oscillator);
        }

        // Create an array of panners for each coordinate value
        var panners = [];
        for (var i = 0; i < tone_freq_array.length; i++) {
          var panner = audioCtx.createPanner();
          panner.panningModel = panning_model; 
          panner.positionX.setValueAtTime(x_values[i], audioCtx.currentTime);
          panner.positionY.setValueAtTime(y_values[i], audioCtx.currentTime);
          panner.positionZ.setValueAtTime(z_values[i], audioCtx.currentTime);
          panners.push(panner);
        }

        // Connect each oscillator to its corresponding panner
        for (var i = 0; i < tone_freq_array.length; i++) {
          rife_oscillators[i].connect(panners[i]);
        }

        volume = audioCtx.createGain();

        // Connect each panner to the destination
        for (var i = 0; i < tone_freq_array.length; i++) {
          panners[i].connect(volume);
        }

        volume.connect(audioCtx.destination);

        volume.gain.value = volume_set();
        
        // Start each oscillator
        for (var i = 0; i < tone_freq_array.length; i++) {
          rife_oscillators[i].start();
        }

      }
  } else {
      stop_rife_3d();
      play_rife_3d(tone_freq_array, x_values, y_values, z_values);
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

function stop_red_noise() {
  if(boolRed == 1) {
      boolRed = 0;
      redNoiseNodeGain.disconnect();
  }
}

function stop_black_noise() {
  if(boolBlack == 1) {
      boolBlack = 0;
      blackNoiseNodeGain.disconnect();
  }
}

function stop_green_noise() {
  if(boolGreen == 1) {
      boolGreen = 0;
      greenNoiseNodeGain.disconnect();
  }
}

function stop_blue_noise() {
  if(boolBlue == 1) {
      boolBlue = 0;
      blueNoiseNodeGain.disconnect();
  }
}


function stop_violet_noise() {
  if(boolViolet == 1) {
      boolViolet = 0;
      violetNoiseNodeGain.disconnect();
  }
}


function stop_isochronic() {
  if (isochronic_flag == 1) {
    isochronic_flag = 0;
    clearInterval(toggler);
    stop_single_tone();
    console.log("isochronic stopped.");
  }
}

function stop_rife(){
   // Check if there is an audio context and oscillators stored in global variables
   if (audioCtx && rife_oscillators) {

    // Stop each oscillator
    for (var i = 0; i < rife_oscillators.length; i++) {
      rife_oscillators[i].stop();
    }
  }
  
}

function stop_rife_3d() {
  stop_rife();
  boolRife3D = 0;
}

function stop_rife_monaural() {
  stop_rife();
  boolRifeMonaural = 0;
}

function stop_rife_3d_auto() {
  stop_rife();
  boolRife3Dauto = 0;
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

function play_isochronic_generator(){
  var freq1 = $("#freq1").val();
  var freq2 = $("#freq2").val();
  play_isochronic(freq1, freq2);
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
    case 3:
      alert("Sit in a dark room. Set the desired frequency, keep it in front of your eyes, play the dreamachine generator and CLOSE YOUR EYES!");
      break;
    case 4:
      alert("Sit in a dark room, choose a preset, keep it in front of your eyes, play it and CLOSE YOUR EYES!")
      break;    
    case 5:
      alert("The minimum and maximum values of x y and z co-ordinates is -1 and 1. You could use decimals. And you already know the minimum and maximum values for frequency (20 hz - 22000)");
      break;
    case 6:
      alert("Use of headphones/earphones is required. If you don't like the auto adjustment of frequencies, stop and play again, without changing the frequencies, the brain beats will try to adjust it again.");
      break;
    case 7:
      alert("Use of headphones/earphones is required.If you don't like the auto adjustment of frequencies, stop and play again, without changing from your opted the frequencies, the brain beats will try to adjust it again.");
      break;
    } 
      
}


function toggle_volume(){
  if (isochronic_flag == 1) {
    if ( toggle_flag == 0) {
      toggle_flag = 1;
      volume.gain.value = volume_set();
    } else {
      toggle_flag = 0;
      volume.gain.value = 0;
    }  
  }
}

function live_volume_set(){
  console.log("live volume ran");
  
  if(solfeggio_flag == 1 || pure_tone_flag  == 1 || single_tone_flag == 1 | angel_flag == 1 || boolRifeMonaural == 1 || boolRife3D == 1 || boolRife3Dauto == 1){
   if(volume.gain.value != undefined) {
    console.log("segi section")
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
  }else if (boolRed== 1) {
    if (redNoiseNodeGain.gain.value != undefined) {
      redNoiseNodeGain.gain.value = volume_set();
    }
  }else if (boolBlack== 1) {
    if (blackNoiseNodeGain.gain.value != undefined) {
      blackNoiseNodeGain.gain.value = volume_set();
    }
  }else if (boolGreen == 1) {
    if (greenNoiseNodeGain.gain.value != undefined) {
      greenNoiseNodeGain.gain.value = volume_set();
    }
  }else if (boolBlue == 1) {
    if (blueNoiseNodeGain.gain.value != undefined) {
      blueNoiseNodeGain.gain.value = volume_set();
    }
  }else if (boolViolet == 1) {
    if (violetNoiseNodeGain.gain.value != undefined) {
      violetNoiseNodeGain.gain.value = volume_set();
    }
  }  
}
    
$("#volume").change(function(){
  live_volume_set();
});

$("#volume").inputSpinner();

function stop_all() {
  if (boolWhite == 1 ) { stop_white_noise(); }
  if (boolPink == 1 ) { stop_pink_noise(); }
  if (boolBrown == 1 ) { stop_brown_noise(); }
  if (boolRed == 1 ) { stop_red_noise(); }
  if (boolBlack == 1 ) { stop_black_noise(); }
  if (boolGreen == 1 ) { stop_green_noise(); }
  if (boolBlue == 1 ) { stop_blue_noise(); }
  if (boolViolet == 1 ) { stop_violet_noise() }
  if (solfeggio_flag == 1 ) { stop_solfeggio(); }
  if (pure_tone_flag == 1 ) { stop_pure_tone(); }
  if (binaural_flag == 1 ) { stop_binaural(); }
  if (monaural_flag == 1 ) { stop_monaural (); }
  if (sq_monaural_flag == 1 ) { stop_sq_monaural(); }
  if (single_tone_flag == 1 ) { stop_single_tone(); }
  if (double_tone_flag == 1 ) { stop_double_tone(); }
  if (angel_flag == 1 ) { stop_angel(); }
  if (boolRife3D == 1) { stop_rife_3d(); }
  if (boolRifeMonaural == 1 ) { stop_rife_monaural(); } 
}