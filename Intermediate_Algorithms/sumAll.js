//Sum All Numbers in a Range

//We'll pass you an array of two numbers. Return the sum
//of those two numbers and all numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  var large = Math.max(arr[0], arr[1]);
  var small = Math.min(arr[0], arr[1]);
  return sumAllHelper(small, large);
}

function sumAllHelper(s, l){
  if(s>=l){
    return 0;
  }
  else{
    return (s+l) + sumAllHelper(s+1,l-1);
  }
  
}
