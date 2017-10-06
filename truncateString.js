//Truncate a string (first argument) if it is longer than
//the given maximum string length (second argument).
//Return the truncated string with a ... ending.

function truncateString(str, num) {
  var chop = 0;
  if(str.length>num){
    if(num<=3){
      chop = num;
    }
    else{
      chop = num-3;
    }
    return str.substring(0,chop) + "...";
  }
  else{
    return str;
  }

}
