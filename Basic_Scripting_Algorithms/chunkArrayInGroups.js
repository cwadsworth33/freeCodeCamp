//Write a function that splits an array (first argument)
//into groups the length of size (second argument) and
//returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var a = [];
  var sub = [];
  for(i=0; i<arr.length; i=i+size){
    sub = arr.slice(i, size + i );
    var length = a.push(sub);

  }
  return a;
}
