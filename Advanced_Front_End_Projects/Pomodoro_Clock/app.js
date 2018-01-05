//control inputs
var breakLength = 5;
var sessionLength = 25;
//state
var isBreak = false;
var isCounting = false;
//interval is set to 1 second
var interval;

var seconds = 25*60;

/////////////////////////////////////////////////////////////////
function convertFormat(sec){
  var minutes = Math.floor(sec / 60);
  var secs = sec - minutes*60;
  var time = padNum(minutes) + ":" + padNum(secs);
  return time;
}

function padNum(num){
  var numString = num.toString();
  if(numString.length < 2){
    numString = "0" + numString;
  }
  return numString;
}

////////////////////////////////////////////////
function incBreakLength(){
  if(!isCounting && breakLength<60){
    breakLength = breakLength + 1;
    updateBreakLength();
    if(isBreak){
      initializeSeconds();
    }
  }
}

function incSessionLength(){
  if(!isCounting && sessionLength<60){
    sessionLength = sessionLength + 1;
    updateSessionLength();
    if(!isBreak){
      initializeSeconds();
    }
  }
}

function decBreakLength(){
  if(breakLength > 1 && !isCounting){
    breakLength = breakLength - 1;
    updateBreakLength();
    if(isBreak){
       initializeSeconds();
    }
  }
}

function decSessionLength(){
  if(sessionLength > 1 && !isCounting){
    sessionLength = sessionLength - 1;
    updateSessionLength();
    if(!isBreak){
      initializeSeconds();
    }
  }
}
///////////////////////////////////////////////

function updateBreakLength(){
  $("#breakLength").html(breakLength);
}

function updateSessionLength(){
  $("#sessionLength").html(sessionLength);
}

////////////////////////////////////////////////

function initializeSeconds(){
  if(isBreak){
    seconds = breakLength * 60;
  }
  else{
    seconds = sessionLength * 60;
  }
  $("#time").html(convertFormat(seconds));
}

/////////////////////////////////////////////////

function clock(){
  if(seconds == 0){
    isBreak = !isBreak;
    initializeSeconds();
    if(isBreak){
      $("#progress").width("0%");
      $("#progress").css("background-color", "springgreen");
      $("#isBreak").html("Break");
      $("#isBreak").css("color", "springgreen");
      document.getElementById("alert").play();
    }
    else{
      $("#progress").width("0%");
      $("#progress").css("background-color", "#DC143C");
      $("#isBreak").html("Session");
      $("#isBreak").css("color", "#DC143C");
      document.getElementById("alert1").play();
    }

  }

  else{
    seconds = seconds - 1;
    $("#time").html(convertFormat(seconds));
    if(isBreak){
      var totalSeconds = breakLength * 60;
    }
    else{
      var totalSeconds = sessionLength * 60;
    }
    var ratio = seconds / totalSeconds;
    var ratioString = "" + (100 - ratio*100) + "%";
    $("#progress").width(ratioString);
  }
}

function playPause(){
  if(isCounting){
    clearInterval(interval);
    isCounting = false;
  }
  else{
    interval = setInterval(clock, 1000);
    isCounting = true;
  }
}
