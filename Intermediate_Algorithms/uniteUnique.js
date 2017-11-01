//Sorted Union

//Write a function that takes two or more arrays and
//returns a new array of unique values in the order
//of the original provided arrays.

function uniteUnique(arr) {
  var keys = {};
  var array = [];
  var index = 0;
  for(i=0; i<arguments.length; i++){
    for(j=0; j<arguments[i].length; j++){
      if(keys[arguments[i][j]] != 1){
        array[index] = arguments[i][j];
        keys[arguments[i][j]] = 1;
        index++;
      }
    }
  }
  return array;
}
