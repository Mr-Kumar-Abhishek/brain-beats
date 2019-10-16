// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;
var monaural_oscillator_1;
var monaural_oscillator_2;
var binaural_oscillator_1;
var binaural_oscillator_2;
var NoiseNode;

var solfeggio_flag = 0;
var monaural_flag = 0;
var binaural_flag = 0;

var solfeggio_freq;
var beat_freq_1;
var beat_freq_2

var bufferSize = 4096;

var oscillator_type = 'sine';

function volume_set(){
  var user_volume = $("#volume").val();
  console.log ("User volume " + user_volume);
  var prog_volume = user_volume/100;
  return prog_volume;
}

function play_solfeggio(freq) {
 
  solfeggio_freq = freq;
  
  if (solfeggio_flag == 0){
  
   solfeggio_flag = 1;
   oscillator = audioCtx.createOscillator();

   oscillator.type = 'sine';
    
   var volume = audioCtx.createGain();
   oscillator.connect(volume);
   oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); // value in hertz
   volume.connect(audioCtx.destination);
   volume.gain.value = volume_set();
   oscillator.start();
  }else {
    stop_solfeggio();
    play_solfeggio(freq);
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

function stop_binaural(){
  if(binaural_flag == 1){
    binaural_flag = 0;
    binaural_oscillator_2.stop();
    binaural_oscillator_1.stop();
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

function play_white_noise(){
          
         console.log("white noise ran !!")
         oscillator = audioCtx.createOscillator();
         oscillator.type = 'sine';
         var volume = audioCtx.createGain();
         oscillator.connect(volume);
         oscillator.frequency.setValueAtTime(30, audioCtx.currentTime); // value in hertz
         var whiteModule = audioCtx.audioWorklet.addModule('noise-generator.js');
  
         
         volume.gain.value = volume_set();
         oscillator.start();
    
        const noiseGenerator = new AudioWorkletNode(audioCtx, 'noise-generator');
        volume.connect(audioCtx.destination);
  
        oscillator.start();
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


// css range slider 

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();

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
    
  }
  
}
    
$("#volume").change(function(){
  live_volume_set();
});


$(play_white_noise());