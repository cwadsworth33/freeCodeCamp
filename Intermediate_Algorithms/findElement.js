//Finders Keepers

//Create a function that looks through an array
//(first argument) and returns the first element
//in the array that passes a truth test
//(second argument).

function findElement(arr, func) {
  var num = arr.filter(func);
  return num[0];
}
