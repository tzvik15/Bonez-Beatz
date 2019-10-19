var x = [];     //array to push recording into, and read playback from
var y = 0;      //
var timer = 0;     //time intiger placeholder
var whichKey = "";  //value of last key pressed
var recording = false;
var keyDown = false;
var intervalTime = 10;     //keeps record and playback times in sync
var timerVar = 600       //timer length (unit subject to change)
var newSound = true;




function record() {
    recording = true;
    t = setInterval(function(){
        if (keyDown === true && whichKey === 81){
            x.push("q");}
        if (keyDown === true && whichKey === 87){
            x.push("w");}
        if (keyDown === true && whichKey === 69){
            x.push("e");}
        if (keyDown === true && whichKey === 65){
            x.push("a");}
        if (keyDown === true && whichKey === 83){
            x.push("s");}
        if (keyDown === true && whichKey === 68){
            x.push("d");}
        if (keyDown === true && whichKey === 90){
            x.push("z");}
        if (keyDown === true && whichKey === 88){
            x.push("x");}
        if (keyDown === true && whichKey === 67){
        x.push("c");}
        if (keyDown === false){
        x.push("0");}
        console.log(x);
        timer++;
        if(timer >= timerVar){    //sets recording time limit
            stopTimers();
            recording = false;
            timer = 0;
        }}, intervalTime); 
  }

    function stopTimers(){
        clearInterval(t);
    }


   function playback() {
     t = setInterval(function(){
         var stopSound = false;
         if (x[y] == "q"){
            audio1.play();}

         if(x[y+1] !== x[y]){
             stopSound = true;
         }

         if(x[y+1] == 0){
            stopSound = false;
        }

            
        if(stopSound === true){
            audio1.pause();
            audio1.currentTime = 0.0}

         console.log(x[y]);
         y++;
         timer++;
         if(timer >= timerVar){
            stopTimers();
            timer = 0;
        }
     }, intervalTime);
   }


$(document).on("keydown", function( event ) {
    $("#bone").attr("src", "assets/images/bone-animate.gif");
    whichKey = event.which;
    keyDown = true;

  });

  $(document).on("keyup", function( event ) {
      whichKey = event.which;
      keyDown = false;
      $("#bone").attr("src", "assets/images/bone-still.jpg");
  });

$("#record").on("click", function(){   //launches record function if not recording
    if(recording === false){
        record();}else{
            alert("recording in progress");
        }
});

$("#playback").on("click", function(){   //launches playback
    if(recording === true){
        alert("recording in progress");
        }else{
            playback();
        }
});