var x = []; //array to push recording into, and read playback from
var y = 0; //
var timer = 0; //time intiger placeholder
var whichKey = ""; //value of last key pressed
var recording = false;
var keyDown = false;
var intervalTime = 1; //keeps record and playback times in sync
var timerVar = 1000; //timer length (unit subject to change)
var newSound = true;
var stop = false;

function record() {
  recording = true;
  x = [];
  t = setInterval(function() {      //reads keypresses and pushes value to array
    
    if (keyDown === true && whichKey === 81) {
      x.push("q");}
    if (keyDown === true && whichKey === 87) {
      x.push("w");}
    if (keyDown === true && whichKey === 69) {
      x.push("e");}
    if (keyDown === true && whichKey === 65) {
      x.push("a");}
    if (keyDown === true && whichKey === 83) {
      x.push("s");}
    if (keyDown === true && whichKey === 68) {
      x.push("d");}
    if (keyDown === true && whichKey === 90) {
      x.push("z");}
    if (keyDown === true && whichKey === 88) {
      x.push("x");}
    if (keyDown === true && whichKey === 67) {
      x.push("c");}
    if (keyDown === false) {
      x.push("0");}
    timer++;
    if (timer >= timerVar) {
      stopTimers();
      recording = false;
      timer = 0;}
  }, intervalTime);
}

function playback() {
  t = setInterval(function() {
    var stopSound = false;
    if (x[y] == "q") {
      audio1.play();
    }
    if (x[y] == "w") {
        audio2.play();}
      if (x[y] == "e") {
        audio3.play();}
      if (x[y] == "a") {
        audio4.play();}
      if (x[y] == "s") {
        audio5.play();}
      if (x[y] == "d") {
        audio6.play();}
      if (x[y] == "z") {
        audio7.play();}
      if (x[y] == "x") {
        audio8.play();}
      if (x[y] == "c") {
        audio9.play();}

    if (x[y + 1] !== 0 && x[y + 1] !== x[y]) {
      stopSound = true;}

    if (x[y + 1] == 0) {
      stopSound = false;}

    if (stopSound === true) {
        var audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9];
        for (var i = 0; i < audioArray.length; i++){
      audioArray[i].pause();
      audioArray[i].currentTime = 0.0;}}
      
    y++;
    timer++;
    if (timer >= timerVar) {
      stopTimers();
      timer = 0;
      y = 0;
    }
  }, intervalTime);
}

function stopTimers() {
  clearInterval(t);
}

$(document).on("keydown", function(event) {
  if (recording === true) {
    $(".bone").attr("src", "assets/images/skeleton-animate.gif");
  }
  whichKey = event.which;
  keyDown = true;
});

$(document).on("keyup", function(event) {
  whichKey = event.which;
  keyDown = false;
  $(".bone").attr("src", "assets/images/skeleton-still.jpg");
});

$("#record").on("click", function() {
  //launches record function if not recording
  if (recording === false) {
    record();
  } else {
    alert("recording in progress");
  }
});

$("#playback").on("click", function() {
  //launches playback
  if (recording === true) {
    alert("recording in progress");
  } else {
    playback();
  }
});

$("#stop").on("click", function(){
    stopTimers();
    timer = 0;
    y = 0;
    recording = false;
    timer = 0;
    alert("stop = true");
})


$(document).on("keydown", function() {
  testFun(path);
  if (whichKey === 81 && keyDown === true) {
      parsed = Number.parseInt(path);
      testArr[parsed].play();}else{
        testArr[parsed].pause();
        testArr[parsed].currentTime = 0.0;
      }
    if (whichKey === 87 && keyDown === true) {
      parsed = Number.parseInt(path);
      testArr[parsed].play();}else{
          testArr[parsed].pause();
          testArr[parsed].currentTime = 0.0;
      }
      if (whichKey === 69 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }
      if (whichKey === 65 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }
      if (whichKey === 83 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }
      if (whichKey === 68 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }
      if (whichKey === 90 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }
      if (whichKey === 88 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }
      if (whichKey === 67 && keyDown === true) {
          parsed = Number.parseInt(path);
          testArr[parsed].play();}else{
              testArr[parsed].pause();
              testArr[parsed].currentTime = 0.0;
          }})