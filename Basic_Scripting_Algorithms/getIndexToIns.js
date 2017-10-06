//Return the lowest index at which a value (second argument)
//should be inserted into an array (first argument) once it
//has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  sort(arr);
  //could improve efficiency of search with a
  //binary search (this is easier to code though)
  for(i=0; i<arr.length; i++){
    if(num<=arr[i]){
      return i;
    }
  }
  return arr.length;
}

//bubble sort (not an efficient algorithm but easy to code)
function sort(a){
  var temp = 0;
  var j = 0;
  while(j<a.length){
    for(i=0; i<a.length; i++){
    if(a[i]>a[i+1]){
      temp = a[i];
      a[i] = a[i+1];
      a[i+1] = temp;
    }
    else{
      j = j+1;
    }
  }
    if(j<a.length){
      j = 0;
    }
  }

}
