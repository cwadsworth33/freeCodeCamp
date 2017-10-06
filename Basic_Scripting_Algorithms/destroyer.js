//You will be provided with an initial array (the
//first argument in the destroyer function), followed
//by one or more arguments. Remove all elements from
//the initial array that are of the same value as these arguments.

function destroyer(arr) {
  for(i=1; i<arguments.length; i++){
    for(j=0; j<arr.length; j++){
      if(arr[j]==arguments[i]){
        arr.splice(j,1);
        j = j-1;
      }
    }
  }
  return arr;
}
