//Check if a string (first argument, str) ends
//with the given target string (second argument, target).

function confirmEnding(str, target) {
  var bol = true;
  var targetPointer = 0;
  var strPointer = 0;
  if(str[str.length-1] != target[target.length-1]){
    bol = false;
  }
  for(i=0;i<target.length;i++){
    targetPointer = target.length - i;
    strPointer = str.length - i;
    if(str[strPointer] != target[targetPointer]){
      bol = false;
    }
  }
    return bol;
}
