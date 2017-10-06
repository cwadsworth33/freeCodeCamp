//Return true if the string in the first element of the
//array contains all of the letters of the string in the
//second element of the array.

function mutation(arr) {
  var left = arr[0];
  var right = arr[1];
  left = left.toLowerCase();
  right = right.toLowerCase();
  for(i=0; i<right.length; i++){
    var num = left.indexOf(right.charAt(i));
    if(num == -1){
      return false;
    }
  }
  return true;
}
