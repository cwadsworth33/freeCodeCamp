var currentJson = {};

function getNewQuote(){
  var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://talaikis.com/api/quotes/random/');
myRequest.onload = function(){
  var json = JSON.parse(myRequest.responseText);
  currentJson = json;
  $("#quote").html("&quot"+json.quote+"&quot");
  $("#author").html("- "+json.author);
  $("#twitter-button").removeClass("disabled");
}
myRequest.send();
}

function twitter(){
  var url="https://twitter.com/intent/tweet";
  var text= "%22"+currentJson.quote+"%22";
  var hashtags="randomquote";
  //var via="";
  window.open(url+"?text="+text+" - "+currentJson.author+";hashtags="+hashtags);
}

function spin(){
  $('#refresh-icon').addClass("fa-spin");
}

function stop(){
  $('#refresh-icon').removeClass("fa-spin");
}
