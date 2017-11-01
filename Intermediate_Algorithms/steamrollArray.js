//Steamroller

//Flatten a nested array. You must account for varying
//levels of nesting.

function steamrollArray(arr){
  var array = [];
  return steamrollArrayHelp(arr, array, 0);
}

function steamrollArrayHelp(arr, flattened, counter) {
  var array = [];
  //base case original array is empty
  if(arr.length == 0){
    return flattened;
  }
  //first index of arr is not an array. Push arr[0] to
  //flattened and slice arr
  else if(!Array.isArray(arr[0])){
    flattened[counter] = arr[0];
    return steamrollArrayHelp(arr.slice(1), flattened, counter+1);
  }
  //first index of array is an array. Flatten the first layer
  //of the array after checking if array is empty
  else{
    if(arr[0].length == 0){
      return steamrollArrayHelp(arr.slice(1),flattened,counter);
    }
    for(i=0; i<arr[0].length; i++){
      array[i] = arr[0][i];
    }
    for(j=arr[0].length; j<arr.length; j++){
      array[j] = arr[j];
    }
    return steamrollArrayHelp(array, flattened, counter);
  }
}
