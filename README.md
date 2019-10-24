# Bone'z Beatz

Our app is a cosumizable soundboard. The users can select sounds from an existing library, and tie them to specific keyboard buttons. They make those connections by dragging the desired sound button on to the desired key. Once a sound has been assosiated with a key, the key representation button changes color to indicate that a sound has been assosiated with that button. The name of the sound selected is also visually apperant. 

Once sounds have been associated with keys, pressing the key on the keyboard plays the associated sound.

The 2nd main functionality of the app is recording. When the record button is clicked, a function launches that "records" which buttons are being pressed in 1 milisecond intervals, (as well as accounting for silance), pushes the recorded strokes into an array. The play button accesses that array and launches the corresponding sounds in order. The stop button stops the recording before it has run it's course. The default recording time is 10 seconds, and during active recording the skeleton will dance. The trashcan button empties the current recording array. If a second recording is launched, it will overwrite the current recording.

We use two external API's to offer additional music related functionality. The first one, on click, summons a random Kanye West quote. There is a button that will speak the quote to you. The 2nd accepts input of musician name and song name, and summons the lyrics for the requested song. There is a button that will speak the lyrics to you.

## User Story
As a user, I want to be able to play with different sounds, and experiment for future recordings, so that I can perfect my music, or cure potential boredom. 

### Formate and Language use
This Page is built using HTML, CSS, JavaScript, and jQuery. 

CSS frameworks used: Bulma.
API's used: Musixmatch, Kanye.rest, Artyom.js.


