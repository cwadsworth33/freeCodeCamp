//Drop it

//Drop the elements of an array (first argument), starting
//from the front, until the predicate (second argument)
//returns true.

function dropElements(arr, func) {
  var index = 0;
  var newarr = arr.filter(func);
  for(i=0; i<arr.length; i++){
    if(arr[i] == newarr[0]){
      return arr.slice(i,arr.length);
    }
  }
  return [];
}
