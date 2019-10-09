// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node

var oscillator;

function play_sample() {

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
}

function stop_sample(){
 oscillator.stop();
}
