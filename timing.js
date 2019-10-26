var x = []; //array to push recording into, and read playback from
var y = 0; //
var timer = 0; //time intiger placeholder
var whichKey = ""; //value of last key pressed
var lastKey = "";
var lastNote = 0;
var recording = false;
var keyDown = false;
var intervalTime = 1; //keeps record and playback times in sync
var timerVar = 4000; //timer length (unit subject to change)
var newSound = true;
var stop = false;

function record() {
  $(".bone").attr("src", "assets/images/skeleton-animate.gif");
  recording = true;
  x = [];
  t = setInterval(function() {
    if (keyDown === true && whichKey === 81) {
      x.push("q");
    }
    if (keyDown === true && whichKey === 87) {
      x.push("w");
    }
    if (keyDown === true && whichKey === 69) {
      x.push("e");
    }
    if (keyDown === true && whichKey === 65) {
      x.push("a");
    }
    if (keyDown === true && whichKey === 83) {
      x.push("s");
    }
    if (keyDown === true && whichKey === 68) {
      x.push("d");
    }
    if (keyDown === true && whichKey === 90) {
      x.push("z");
    }
    if (keyDown === true && whichKey === 88) {
      x.push("x");
    }
    if (keyDown === true && whichKey === 67) {
      x.push("c");
    }
    if (keyDown === false) {
      x.push("0");
    }
    timer++;
    if (timer >= timerVar) {
      stopTimers();
      recording = false;
      timer = 0;
    }
  }, intervalTime);
}

function playback() {
  t = setInterval(function() {
    var stopSound = false;
    if (x[y] == "q") {
      testArr[qKey].play();
    }
    if (x[y] == "w") {
      testArr[wKey].play();
    }
    if (x[y] == "e") {
      testArr[eKey].play();
    }
    if (x[y] == "a") {
      testArr[aKey].play();
    }
    if (x[y] == "s") {
      testArr[sKey].play();
    }
    if (x[y] == "d") {
      testArr[dKey].play();
    }
    if (x[y] == "z") {
      testArr[zKey].play();
    }
    if (x[y] == "x") {
      testArr[xKey].play();
    }
    if (x[y] == "c") {
      testArr[cKey].play();
    }

    if (x[y + 1] !== 0 && x[y + 1] !== x[y]) {
      stopSound = true;
    }

    if (x[y + 1] == 0) {
      stopSound = false;
    }

    if (stopSound === true) {
      for (var i = 0; i < testArr.length; i++) {
        testArr[i].pause();
        testArr[i].currentTime = 0.0;
      }
    }

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
  $(".bone").attr("src", "assets/images/skeleton-still.jpg");
}

$(document).on("keydown", function(event) {
  whichKey = event.which;
  keyDown = true;
});

$(document).on("keyup", function(event) {
  whichKey = event.which;
  lastKey = whichKey;
  keyDown = false;
});

$("#record").on("click", function() {
  if (recording === false) {
    record();
  }
});

$("#playback").on("click", function() {
  if (recording === true) {
  } else {
    playback();
  }
});

$("#stop").on("click", function() {
  stopTimers();
  timer = 0;
  y = 0;
  recording = false;
});

$(document).on("keydown", function() {
  var stopSound2 = false;
  if (whichKey == lastKey) {
    stopSound2 = false;
  } else {
    stopSound2 = true;
  }
  if (whichKey == lastNote) {
    stopSound2 = true;
  }
  if (stopSound2 === true) {
    for (var i = 0; i < testArr.length; i++) {
      testArr[i].pause();
      testArr[i].currentTime = 0.0;
    }
  }
  if (whichKey === 81) {
    testArr[qKey].play();
    lastNote = 81;
  }
  if (whichKey === 87) {
    testArr[wKey].play();
    lastNote = 87;
  }
  if (whichKey === 69) {
    testArr[eKey].play();
    lastNote = 69;
  }
  if (whichKey === 65) {
    testArr[aKey].play();
    lastNote = 65;
  }
  if (whichKey === 83) {
    testArr[sKey].play();
    lastNote = 83;
  }
  if (whichKey === 68) {
    testArr[dKey].play();
    lastNote = 68;
  }
  if (whichKey === 90) {
    testArr[zKey].play();
    lastNote = 90;
  }
  if (whichKey === 88) {
    testArr[xKey].play();
    lastNote = 88;
  }
  if (whichKey === 67) {
    testArr[cKey].play();
    lastNote = 67;
  }
});
