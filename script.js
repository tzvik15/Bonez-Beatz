// global variables
var imageState = '';
var path = '';
var tempText = '';
//audio files
var kick1 = new Audio('assets/audioSamples/kick1.mp3');
var kick2 = new Audio('assets/audioSamples/kick2.mp3');
var snare1 = new Audio('assets/audioSamples/snare1.mp3');
var snare2 = new Audio('assets/audioSamples/snare2.mp3');
var snare3 = new Audio('assets/audioSamples/snare3.mp3');
var symbol1 = new Audio('assets/audioSamples/symbol1.mp3');
var symbol2 = new Audio('assets/audioSamples/symbol2.mp3');
var symbol3 = new Audio('assets/audioSamples/symbol3.mp3');
var symbol4 = new Audio('assets/audioSamples/symbol4.mp3');
var symbol5 = new Audio('assets/audioSamples/symbol5.mp3');
var tock = new Audio('assets/audioSamples/tock.mp3');
var tom1 = new Audio('assets/audioSamples/tom1.mp3');
var tom2 = new Audio('assets/audioSamples/tom2.mp3');
var tom3 = new Audio('assets/audioSamples/tom3.mp3');
var tom4 = new Audio('assets/audioSamples/tom4.mp3');
var tom5 = new Audio('assets/audioSamples/tom5.mp3');
var tom6 = new Audio('assets/audioSamples/tom6.mp3');

var testArr = [kick1, kick2, snare1, snare2, snare3, symbol1, symbol2, symbol3, symbol4, symbol5, tock, tom1, tom2, tom3, tom4, tom5, tom6];

var testFun = function(path) {
  var parsed = Number.parseInt(path);

  testArr[parsed].play();
};

for (let i = 0; i < testArr.length; i++) {
  $('#' + i).on('click', function(e) {
    e.preventDefault();
    testFun(i);
  });
}

// Dropdown function
$('.dropdown').on('click', function() {
  $(this).toggleClass('is-active');
});

// AJAX call for artist facts
$('#lyric-search').on('click', function() {
  var song = $('#song').val();
  var artist = $('#artist').val();
  var queryURL =
    'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=' +
    song +
    '&q_artist=' +
    artist +
    '&apikey=9bc85e11d0b8beb2e1986fadfa254ba4';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
  });
});

function allowDrop(ev) {
  console.log('TCL: allowDrop -> ev', ev.target.id);
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
  console.log('TCL: drag -> ev.target.id', ev.target.id);
  path = ev.target.id;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  var id = ev.target.id.toUpperCase();
  console.log('TCL: drop -> id', id);
  console.log('TCL: drop -> data', data);
  ev.target.appendChild(document.getElementById(data));
  $('#' + data).append('<br/>' + id); // appends the dragged button with the id of the box you dragged onto
  $('#' + data).css({ width: '100%', height: '100%' }); // allows you to style the dragged button
  testFun(path);

  // create keydown event based on the data letter
}

$(document).on('keydown', function(e) {
  var letter = e.key.toUpperCase();
  console.log(e.key.toUpperCase());
  switch (letter) {
    case 'Q':
      var q = $('#q')
        .find('a')
        .attr('id');
      testFun(q);
      break;
    case 'W':
      var w = $('#w')
        .find('a')
        .attr('id');
      testFun(w);
      break;

    default:
      break;
  }
});
