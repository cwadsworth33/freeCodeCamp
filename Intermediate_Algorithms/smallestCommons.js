//Smallest Common Multiple

//Find the smallest common multiple of the provided
//parameters that can be evenly divided by both, as
//well as by all sequential numbers in the range between
//these parameters.

function smallestCommons(arr){
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var array = [];
  for(i=min+1; i<=max; i++){
    array[i-min-1] = i;
  }
  return smallestCommonsHelper(array, min);
}

function smallestCommonsHelper(array, currentSCM){
  if(array.length == 0){
    return currentSCM;
  }
  else{
    return smallestCommonsHelper(array.slice(1), scm(array[0], currentSCM));
  }
}

function scm(small, large){
  return small * large / gcd(small, large);
}

function gcd(small, large){
  if(large % small == 0){
    return small;
  }
  var r = large % small;
  return gcd(r, small);
}
