//Return Largest Numbers in Arrays

//Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  var largest = [0,0,0,0];
  for(i=0; i<4; i++){
    for(j=0; j<4; j++){
      if (arr[i][j] > largest[i])
        largest[i] = arr[i][j];
    }
  }
  return largest;
}
