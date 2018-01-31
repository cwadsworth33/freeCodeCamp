/*
* Main method, runs on page load
*/
$(document).ready(function(){
  var game = new SimonGame();

  $("#trigger").click(function(){
    game.newSound();
    game.setInterval(1000);
  });

  $("#b1").click(function(){
    game.receiveProgression(0);
  });

  $("#b1").mousedown(function(){
    var player = game.getPlay();
    player(0);
  });

  $("#b2").click(function(){
    game.receiveProgression(1);
  });

  $("#b2").mousedown(function(){
    var player = game.getPlay();
    player(1);
  });

  $("#b3").click(function(){
    game.receiveProgression(2);
  });

  $("#b3").mousedown(function(){
    var player = game.getPlay();
    player(2);
  });

  $("#b4").click(function(){
    game.receiveProgression(3);
  });

  $("#b4").mousedown(function(){
    var player = game.getPlay();
    player(3);
  });

});



/*
 * Creates a new Simon Game
 */
var SimonGame = function(){
  //holds the progression of button lights / sounds
  var soundArray = [];
  //pointer index for soundArray
  var index = 0;
  //timing interval
  var interval;
  //controls lighting up buttons
  var isLit = false;

  /*
  * Turns the lights off on all buttons
  */
  var clearLights = function(){
    console.log("lights cleared");
    $("#b1").css("background-color", "blue");
    $("#b2").css("background-color", "red");
    $("#b3").css("background-color", "yellow");
    $("#b4").css("background-color", "green");
  }

  //Generates a new random number from 0 to 4 and pushes it to soundArray
  this.newSound = function(){
    var sound = Math.random() * 4;
    sound = Math.floor(sound);
    soundArray.push(sound);
  };

  //sets a new interval
  this.setInterval = function(mili){
    interval = setInterval(this.playProgression, mili);
  };

  //plays the stored progression of buttons and sounds
  this.playProgression = function(){
    if(isLit){
      if(index < soundArray.length){
        play(soundArray[index]);
        index = index + 1;
      }
      else{
        clearInterval(interval);
        index = 0;
        $("#level").html("Level: "+soundArray.length);
      }
    }
    else{
      clearLights();
    }
    isLit = !isLit;
  }

  //receives a progression from the user
  this.receiveProgression = function(num){
    if(num == soundArray[index]){
      index = index + 1;
      if(index == soundArray.length){
        $("#indicator").css("background-color", "green");
        index = 0;
      }
    }
    else{
      $("#indicator").css("background-color", "red");
      index = 0;
    }
    clearLights();
  }

  /*
  * Plays a sound and lights up the cooresponding button
  *
  * @param num a number from 0-3 cooresponding to a button
  *            on the game board
  */
  var play = function(num){
    if(num == 0){
      document.getElementById("sound1").play();
      $("#b1").css("background-color","#ADD8E6");
    }
    else if(num == 1){
      document.getElementById("sound2").play();
      $("#b2").css("background-color","#ff4d79");
    }
    else if(num == 2){
      document.getElementById("sound3").play();
      $("#b3").css("background-color","lightyellow");
    }
    else if(num == 3){
      document.getElementById("sound4").play();
      $("#b4").css("background-color","lightgreen");
    }
  }

  this.getPlay = function(){
    return play;
  }

};
