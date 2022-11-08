const MidiWriter = require('midi-writer-js');
const fs = require('fs');

class Spine

class Wheel
    let ticks:number

let notes = [8,8,8,8,32,32,32,32,8,8,8];

const track = new MidiWriter.Track();

for (var note_len of notes) {
    track.addEvent([
            new MidiWriter.NoteEvent({pitch: ['C4'], duration: note_len, velocity: 127}),
        ], function(event, index) {
        return {sequential: true};
    }
    );
}

const write = new MidiWriter.Writer(track);
console.log(write.dataUri());
const file = write.buildFile()
fs.writeFile('midi-demo.mid', file, err =>{
	if (err) {
		console.log(err);
	}
});