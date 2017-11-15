var isCelsius = true;

$(document).ready(function() {
  isC = true;
       if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+
    position.coords.latitude+"&lon="+position.coords.longitude, function(json){
        //$("#data").html(JSON.stringify(json));
        $("#location").html(json.name + ", "+json.sys.country);
        $("#temp").html(json.main.temp + " &degC");
        $("#clouds").html(json.weather[0].main +
          " ("+json.weather[0].description+")");
        console.log(json);
        var x = document.createElement("IMG");
        x.src = json.weather[0].icon;
        var imagePar = document.getElementById("icon");
        imagePar.appendChild(x);
        $("#toggle-button").removeClass("hidden");
      //Set temperature icon depending on temperature
        if(json.main.temp < 0){
          $("#temp-icon").addClass("fa fa-thermometer-0");
        }
        else if(json.main.temp >= 0 && json.main.temp < 12.7){
          $("#temp-icon").addClass("fa fa-thermometer-1");
        }
        else if(json.main.temp >= 12.7 && json.main.temp < 23.8){
          $("#temp-icon").addClass("fa fa-thermometer-2");
        }
        else if(json.main.temp >= 23.8 && json.main.temp < 32.2){
          $("#temp-icon").addClass("fa fa-thermometer-3");
        }
        else{
          $("#temp-icon").addClass("fa fa-thermometer-4");
        }

      var sunsetDate = new Date(json.sys.sunset*1000);
      var sunriseDate = new Date(json.sys.sunrise*1000);
      var currentDate = new Date();

      var isEarly = currentDate.getHours() < 12;
      var isLate = currentDate.getHours() >= 12;
      var isNight = false;
      if(isLate){
        isNight = (currentDate.getHours() > sunsetDate.getHours()) ||
        (currentDate.getHours() == sunsetDate.getHours() &&
        currentDate.getMinutes() > sunsetDate.getMinutes());
      }
      if(isEarly){
        isNight = (currentDate.getHours() < sunriseDate.getHours()) ||
        (currentDate.getHours() == sunriseDate.getHours() &&
        currentDate.getMinutes() < sunriseDate.getMinutes());
      }
        setTheme(json.weather[0].main, isNight);
      });
  });
}
  });

function convert(){
  var x = document.getElementById("temp");
  var temp = parseFloat(x.innerHTML);
  if(isCelsius){
    temp = temp * 9/5 + 32;
    isCelsius = false;
    temp = Math.round( temp * 10) / 10;
    x.innerHTML = "" + temp + " &degF";
    $("#toggle").removeClass("fa-flip-horizontal");
  }
  else{
    temp = (temp - 32) * 5/9;
    isCelsius = true;
    temp = Math.round( temp * 100) / 100;
    x.innerHTML = "" + temp + " &degC";
    $("#toggle").addClass("fa-flip-horizontal");
  }
}

function setTheme(weather, night){
  if(night){
    $("body").css("background-color", "#1974D2");
    $("body").css("color", "white");
    $("#github").css("color", "white");
  }
  else if(weather == "Clouds" || weather == "Mist"){
    $("body").css("background-color", "#ADD8E6");
  }
  else if(weather == "Rain"){
    $("body").css("background-color", "#D3D3D3");
  }
  else if(weather == "Sun"){
    $("body").css("background-color", "#FFDF00");
  }
  else if(weather == "Clear"){
    $("body").css("background-color", "#FFDF00");
    //$("body").css("background", "linear-gradient(to bottom right, #FFDF00, yellow)");
    $("#github").css("color", "#0044cc");
  }

}
