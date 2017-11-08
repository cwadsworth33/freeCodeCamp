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
        $("#temp").html(json.main.temp + " C");
        $("#clouds").html(json.weather[0].main);
        console.log(json);
        //var x = document.createElement("IMG");
        //x.src = json.weather[0].icon;
        //var imagePar = document.getElementById("icon");
        //imagePar.appendChild(x);
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
    x.innerHTML = "" + temp + " F";
  }
  else{
    temp = (temp - 32) * 5/9;
    isCelsius = true;
    temp = Math.round( temp * 100) / 100;
    x.innerHTML = "" + temp + " C";
  }
}
