// global variables
var imageState = "";
var path = "";
var tempText = "";
var qKey = 0
var wKey = 0;
var eKey = 0;
var aKey = 0;
var sKey = 0;
var dKey = 0;
var zKey = 0;
var xKey = 0;
var cKey = 0;

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

var testArr = [
  kick1,
  kick2,
  snare1,
  snare2,
  snare3,
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5,
  tock,
  tom1,
  tom2,
  tom3,
  tom4,
  tom5,
  tom6
];

var testFun = function(letter) {
  var parsed = Number.parseInt(letter);
  // testArr[parsed].play();     this line is now determined in the dropdown function, and is assigned to the keydown listener on the timing sheet
};

for (let i = 0; i < testArr.length; i++) {
  $("#" + i).on("click", function(e) {
    e.preventDefault();
    testFun(i);
  });
}

// Dropdown function
$(".dropdown").on("click", function() {
  $(this).toggleClass("is-active");
});

var lyrics = "";
// AJAX call for lyrics search
$("#lyric-search").on("click", function() {
  var song = $("#song").val();
  var artist = $("#artist").val();
  var queryURL =
    "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=" +
    song +
    "&q_artist=" +
    artist +
    '&apikey=9bc85e11d0b8beb2e1986fadfa254ba4';
    // var Success = false;
    $.ajax({
      url: queryURL,
      method: "GET",
      data: {
          format: "jsonp",
          callback: "jsonp_callback"
      },
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json'
    }).then(function (response) {
        if (response.message.header.status_code === 404) {
          $('#modal').css('display', 'block')
        } else {
          lyrics =  response.message.body.lyrics.lyrics_body
          $('#lyrics-display').text(lyrics);
        }
      })   
    });
    $('.close-btn').on('click', function() {
      $('#modal').css('display','none');
      $('.search-input').val('')
    })


// SECOND AJAX CALL FOR KANYE QUOTE
var kQuote = "";
$('#kanye-btn').on('click', function() {
  $.ajax({
    url: 'https://api.kanye.rest?format=text',
    method: 'GET'
  }).then(function (response) {
    kQuote = response;
    $('#kanye-quote').text(kQuote)
  })

})

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  path = ev.target.id;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var testVar = document.getElementById(ev.target.id);
  testVar.setAttribute("style", "background:red");
  $("#" + data).css({  height: "100%", border: "none", background: "red"});
  if(testVar.id == "q"){
    qKey = parseInt(data);}
  if(testVar.id == "w"){
    wKey = parseInt(data);}
  if(testVar.id == "e"){
    eKey = parseInt(data);}
  if(testVar.id == "a"){
    aKey = parseInt(data);}
  if(testVar.id == "s"){
    sKey = parseInt(data);}
  if(testVar.id == "d"){
    dKey = parseInt(data);}
  if(testVar.id == "z"){
    zKey = parseInt(data);}
  if(testVar.id == "x"){
    xKey = parseInt(data);}
  if(testVar.id == "c"){
    cKey = parseInt(data);}
}

$(document).on("keydown", function(e) {
  var letter = e.key.toUpperCase();
  switch (letter) {
    case "Q":
      var q = $("#q")
        .find("a")
        .attr("id");
      testFun(q);
      break;
    case "W":
      var w = $("#w")
        .find("a")
        .attr("id");
      testFun(w);
      break;
    case "E":
      var e = $("#e")
        .find("a")
        .attr("id");
      testFun(e);
      break;
    case "A":
      var a = $("#a")
        .find("a")
        .attr("id");
      testFun(a);
      break;
    case "S":
      var s = $("#s")
        .find("a")
        .attr("id");
      testFun(s);
      break;
    case "D":
      var d = $("#d")
        .find("a")
        .attr("id");
      testFun(d);
      break;
    case "Z":
      var z = $("#z")
        .find("a")
        .attr("id");
      testFun(z);
      break;
    case "X":
      var x = $("#x")
        .find("a")
        .attr("id");
      testFun(x);
      break;
    case "C":
      var c = $("#c")
        .find("a")
        .attr("id");
      testFun(c);
      break;
  }
});


// Reset button
$('#reset-btn').on('click', function () {
  location.reload()
})

    
const artyom = new Artyom();

$("#speakKanye").on("click", function() {
  artyom.say(kQuote);
})

$("#lyricsBtn").on("click", function() {
  artyom.say(lyrics);
})

