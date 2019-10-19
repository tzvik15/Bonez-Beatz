var x = "";
var whichKey = "";
var recording = false;
var keyDown = false;


  function record() {
    setInterval(function(){
        if (enterDown === true){
        console.log(enterDown);
        x = x +"0";
        enterDown = false;}
    }, 1000);
  }


$(document).on("keydown", function( event ) {
    y = event.which;
    keyDown = true;
    console.log(y);
    console.log(keyDown);
  });

  $(document).on("keyup", function( event ) {
    y = event.which;
    keyDown = false;
    console.log(y);
    console.log(keyDown);
  });


$("#record").on("click", function(){
    if(recording === false){
        recording = true;
        record();}else{
            alert("recording in progress");
        }
});