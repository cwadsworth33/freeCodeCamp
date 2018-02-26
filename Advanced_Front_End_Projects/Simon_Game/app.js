var progression = [];
var index = 0;
var isLit;
var interval;
var isStrict;

/*
* Main method, runs on page load
*/
$(document).ready(function(){
  $("#win").hide();
  $("#new-game-question").click(function(){
    $("#landing-page-txt").hide();
    $("#landing-page").hide();
    clearLights();
    $("#center").css("background-color","#333");
    $("#level").html("Level: 0");
    newLevel();
  });
  $("#game-over").hide();
  $("#new-game-question").hide();
    $("#new-game").click(function(){
      $("#strict-mode").show();
      $("#new-game").hide();
    });
    $("#no").click(function(){
      isStrict = false;
      $("#landing-page-txt").hide();
      $("#landing-page").hide();
      newLevel();
    });
    $("#yes").click(function(){
      isStrict = true;
      $("#landing-page-txt").hide();
      $("#landing-page").hide();
      newLevel();
    });
});

/*
* Turns the lights off on all buttons
*/
function clearLights(){
  $("#b1").css("background-color", "blue");
  $("#b2").css("background-color", "red");
  $("#b3").css("background-color", "yellow");
  $("#b4").css("background-color", "green");
}

function removeEventHandlers(){
  $("#b1").off();
  $("#b1").removeClass("pointer");
  $("#b2").off();
  $("#b2").removeClass("pointer");
  $("#b3").off();
  $("#b3").removeClass("pointer");
  $("#b4").off();
  $("#b4").removeClass("pointer");
  $("#reset-button").off();
}

  /*
  * Plays a sound and lights up the cooresponding button
  *
  * @param num a number from 0-3 cooresponding to a button
  *            on the game board
  */
  function play(num){
    if(num == 1){
      document.getElementById("sound1").load();
      document.getElementById("sound1").play();
      $("#b1").css("background-color","#ADD8E6");
    }
    else if(num == 2){
      document.getElementById("sound2").load();
      document.getElementById("sound2").play();
      $("#b2").css("background-color","#ff4d79");
    }
    else if(num == 3){
      document.getElementById("sound3").load();
      document.getElementById("sound3").play();
      $("#b3").css("background-color","lightyellow");
    }
    else if(num == 4){
      document.getElementById("sound4").play();
      document.getElementById("sound4").play();
      $("#b4").css("background-color","lightgreen");
    }
    else{
      alert(num);
    }
  }

function playProgression(){
  if(isLit){
    if(index < progression.length){
      play(progression[index]);
      index = index + 1;
    }
    else{
      clearInterval(interval);
      index = 0;
      attachEventHandlers();
    }
  }
  else{
    clearLights();
  }
  isLit = !isLit;
}

function newLevel(){
  var rando = 1 + Math.floor(Math.random() * 3);
  progression.push(rando);
  $("#level").html("Level: " + progression.length);
  removeEventHandlers();
  interval = setInterval(playProgression, 1000);
}

function attachEventHandlers(){
  $("#center").css("background-color", "#333");

  $("#b1").click(function(){
    document.getElementById("sound1").load();
    document.getElementById("sound1").play();
    receiveButtonClick(1);
  });
  $("#b1").addClass("pointer");
  $("#b1").mousedown(function(){
    $("#b1").css("background-color", "#ADD8E6")
  });
  $("#b1").mouseup(function(){
    $("#b1").css("background-color", "blue");
  });

  $("#b2").click(function(){
    document.getElementById("sound2").load();
    document.getElementById("sound2").play();
    receiveButtonClick(2);
  });
   $("#b2").addClass("pointer");
  $("#b2").mousedown(function(){
    $("#b2").css("background-color", "#ff4d79")
  });
  $("#b2").mouseup(function(){
    $("#b2").css("background-color", "red");
  });

  $("#b3").click(function(){
    document.getElementById("sound3").load();
    document.getElementById("sound3").play();
    receiveButtonClick(3);
  });
   $("#b3").addClass("pointer");
  $("#b3").mousedown(function(){
    $("#b3").css("background-color", "lightyellow");
  });
  $("#b3").mouseup(function(){
    $("#b3").css("background-color", "yellow");
  });

  $("#b4").click(function(){
    document.getElementById("sound4").load();
    document.getElementById("sound4").play();
    receiveButtonClick(4);
  });
   $("#b4").addClass("pointer");
  $("#b4").mousedown(function(){
    $("#b4").css("background-color", "green");
  });
  $("#b4").mouseup(function(){
    $("#b4").css("background-color", "lightgreen");
  });

  $("#reset-button").click(function(){
    $("#landing-page").show();
    $("#landing-page-txt").show();
    $("#new-game").show();
    $("#strict-mode").hide();
    $("#new-game-question").hide();
    $("#game-over").hide();
    $("#win").hide();
    progression.length = 0;
    index = 0;
  });
}

function receiveButtonClick(button){
  if(button == progression[index]){
    if(index == progression.length-1){
      if(index == 19){
        $("#landing-page").show();
        $("#landing-page-txt").show();
        $("#strict-mode").hide();
        $("#new-game-question").show();
        $("#win").show();
        $("#level").html("Level: 0");
        $("#game-over").hide();
        index = 0;
        progression.length = 0;
       }
      else{
        $("#center").css("background-color", "#50c878");
        index = 0;
        newLevel();
      }
    }
    else{
      index = index + 1;
    }
  }
  else{
    $("#center").css("background-color", "crimson");
    index = 0;
    if(isStrict){
      $("#landing-page").show();
      $("#landing-page-txt").show();
      $("#game-over").show();
      $("#strict-mode").hide();
      $("#new-game-question").show();
      $("#win").hide();
      progression.length = 0;
    }
    else{
      removeEventHandlers();
      interval = setInterval(playProgression, 1000);
    }
  }
}
