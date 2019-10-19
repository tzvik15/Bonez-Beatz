
// global variables
var imageState = "";
var path = "";
//audio files
var kick1 = new Audio("assets/audioSamples/kick1.mp3");
var kick2 = new Audio("assets/audioSamples/kick2.mp3");
var snare1 = new Audio("assets/audioSamples/snare1.mp3");
var snare2 = new Audio("assets/audioSamples/snare2.mp3");
var snare3 = new Audio("assets/audioSamples/snare3.mp3");
var symbol1 = new Audio("assets/audioSamples/symbol1.mp3");
var symbol2 = new Audio("assets/audioSamples/symbol2.mp3");
var symbol3 = new Audio("assets/audioSamples/symbol3.mp3");
var symbol4 = new Audio("assets/audioSamples/symbol4.mp3");
var symbol5 = new Audio("assets/audioSamples/symbol5.mp3");
var tock = new Audio("assets/audioSamples/tock.mp3");
var tom1 = new Audio("assets/audioSamples/tom1.mp3");
var tom2 = new Audio("assets/audioSamples/tom2.mp3");
var tom3 = new Audio("assets/audioSamples/tom3.mp3");
var tom4 = new Audio("assets/audioSamples/tom4.mp3");
var tom5 = new Audio("assets/audioSamples/tom5.mp3");
var tom6 = new Audio("assets/audioSamples/tom6.mp3");

var testArr = [kick1, kick2,snare1,snare2,snare3,symbol1,symbol2,symbol3,symbol4,symbol5,tock,tom1,tom2,tom3,tom4,tom5,tom6];

var testFun = function(path) {
    
    var parsed = Number.parseInt(path);
    
    testArr[parsed].play();

   
}

$("#c").on("click", function(){
    testFun(path);
});
//linking click events to buttons to play sounds
// $("#kick1").on("click", function() {
//     audio1.play();
// })
// $("#kick2").on("click", function() {
//     audio2.play();
// })
// $("#snare1").on("click", function() {
//     audio3.play();
// })
// $("#snare2").on("click", function() {
//     audio4.play();
// })
// $("#snare3").on("click", function() {
//     audio5.play();
// })
// $("#symbol1").on("click", function() {
//     audio6.play();
// })
// $("#symbol2").on("click", function() {
//     audio7.play();
// })
// $("#symbol3").on("click", function() {
//     audio8.play();
// })
// $("#symbol4").on("click", function() {
//     audio9.play();
// })
// $("#symbol5").on("click", function() {
//     audio10.play();
// })
// $("#tock").on("click", function() {
//     audio11.play();
// })
// $("#tom1").on("click", function() {
//     audio12.play();
// })
// $("#tom2").on("click", function() {
//     audio13.play();
// })
// $("#tom3").on("click", function() {
//     audio14.play();
// })
// $("#tom4").on("click", function() {
//     audio15.play();
// })
// $("#tom5").on("click", function() {
//     audio16.play();
// })
// $("#tom6").on("click", function() {
//     audio17.play();
// })

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
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) + Math.pow(event.pageY - event.y0, 2) | 0)).toFixed(2) + 'px')
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

// enable draggables to be dropped into this
interact('#c').dropzone({
    // only accept elements matching this CSS selector
    accept: '.button',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
        
      },
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
        
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.textContent = 'Dragged out'
        
      },
      ondrop: function (event) {
        event.relatedTarget.textContent = 'Dropped';
        
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
        
        path = event.relatedTarget.attributes[1].nodeValue;
             
    }
    })
    
    interact('.drag-drop')
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        onmove: dragMoveListener
      })




// Dropdown function
$('.dropdown').on('click', function() {
    $(this).toggleClass('is-active');
})


// AJAX call for artist facts
$('#lyric-search').on('click', function() {
    var song = $('#song').val();
    var artist = $('#artist').val()
    var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track="+ song +"&q_artist="+artist+"&apikey=9bc85e11d0b8beb2e1986fadfa254ba4";

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
})