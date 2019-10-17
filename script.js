// global variables

//audio files
var audio1 = new Audio("assets/audioSamples/kick1.mp3");
var audio2 = new Audio("assets/audioSamples/kick2.mp3");
var audio3 = new Audio("assets/audioSamples/snare1.mp3");
var audio4 = new Audio("assets/audioSamples/snare2.mp3");
var audio5 = new Audio("assets/audioSamples/snare3.mp3");
var audio6 = new Audio("assets/audioSamples/symbol1.mp3");
var audio7 = new Audio("assets/audioSamples/symbol2.mp3");
var audio8 = new Audio("assets/audioSamples/symbol3.mp3");
var audio9 = new Audio("assets/audioSamples/symbol4.mp3");
var audio10 = new Audio("assets/audioSamples/symbol5.mp3");
var audio11 = new Audio("assets/audioSamples/tock.mp3");
var audio12 = new Audio("assets/audioSamples/tom1.mp3");
var audio13 = new Audio("assets/audioSamples/tom2.mp3");
var audio14 = new Audio("assets/audioSamples/tom3.mp3");
var audio15 = new Audio("assets/audioSamples/tom4.mp3");
var audio16 = new Audio("assets/audioSamples/tom5.mp3");
var audio17 = new Audio("assets/audioSamples/tom6.mp3");



//linking click events to buttons to play sounds
$("#kick1").on("click", function() {
    audio1.play();
})
$("#kick2").on("click", function() {
    audio2.play();
})
$("#snare1").on("click", function() {
    audio3.play();
})
$("#snare2").on("click", function() {
    audio4.play();
})
$("#snare3").on("click", function() {
    audio5.play();
})
$("#symbol1").on("click", function() {
    audio6.play();
})
$("#symbol2").on("click", function() {
    audio7.play();
})
$("#symbol3").on("click", function() {
    audio8.play();
})
$("#symbol4").on("click", function() {
    audio9.play();
})
$("#symbol5").on("click", function() {
    audio10.play();
})
$("#tock").on("click", function() {
    audio11.play();
})
$("#tom1").on("click", function() {
    audio12.play();
})
$("#tom2").on("click", function() {
    audio13.play();
})
$("#tom3").on("click", function() {
    audio14.play();
})
$("#tom4").on("click", function() {
    audio15.play();
})
$("#tom5").on("click", function() {
    audio16.play();
})
$("#tom6").on("click", function() {
    audio17.play();
})

//js for the dragging of buttons

interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    
    
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p')

      textEl && (textEl.textContent =
        'moved a distance of ' +
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                   Math.pow(event.pageY - event.y0, 2) | 0))
          .toFixed(2) + 'px')
    }
  })
  function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'
  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }
  

