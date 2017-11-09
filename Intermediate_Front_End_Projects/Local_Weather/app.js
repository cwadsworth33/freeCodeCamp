var isCelsius = true;

$(document).ready(function() {
  isC = true;
       if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+
    position.coords.latitude+"&lon="+position.coords.longitude, function(json){
        //$("#data").html(JSON.stringify(json));
        $("#location").html(json.name + ", "+json.sys.country);
        $("#temp").html(json.main.temp + " &degC");
        $("#clouds").html(json.weather[0].main + " ("+json.weather[0].description+")");
        console.log(json);
        var x = document.createElement("IMG");
        x.src = json.weather[0].icon;
        var imagePar = document.getElementById("icon");
        imagePar.appendChild(x);

        //setTheme(json.weather[0].main);
        setTheme("Night");
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
  }
  else{
    temp = (temp - 32) * 5/9;
    isCelsius = true;
    temp = Math.round( temp * 100) / 100;
    x.innerHTML = "" + temp + " &degC";
  }
}

function setTheme(weather){
  if(weather == "Clouds"){
    $("div").css("background-color","#C67A43");
    $("h1").css("color","#0B5293");
    $("button").css("background-color","#5A4D44");
    $('body').css('background-image', 'url(' + "clouds.jpeg" + ')');
    $("#quote").html("&quotThere are no rules of architecture for a castle in the clouds.&quot<br>-Gilbert K. Chesterton");
  }
  else if(weather == "Rain"){
    $("div").css("background-color","#C67A43");
    $('body').css('background-image', 'url(' + "rain.jpeg" + ')');
  }
  else if(weather == "Sun"){
    $("div").css("background-color","#C67A43");
    $('body').css('background-image', 'url(' + "spring.jpeg" + ')');
  }
  else if(weather == "Clear"){
    $("div").css("background-color","#C67A43");
    $('body').css('background-image', 'url(' + "clear.jpeg" + ')');
  }
  else if(weather == "Night"){
    $("div").css("background-color","#C67A43");
    $('body').css('background-image', 'url(' + "night-trees-stars.jpg" + ')');
  }
}
