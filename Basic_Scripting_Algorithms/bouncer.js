//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null,
//0, "", undefined, and NaN.

function bouncer(arr) {
  var a = [];
  var c = 0;

  for(i=0; i<arr.length; i++){
    if(arr[i]){
      a[c] = arr[i];
      c++;
    }
  }
  return a;
}
