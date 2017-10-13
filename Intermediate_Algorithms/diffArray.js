//Compare two arrays and return a new array with any
//items only found in one of the two given arrays,
//but not both. In other words, return the symmetric
//difference of the two arrays.

function diffArray(arr1, arr2) {
  var keyA = {};
  var keyB = {};
  var a = [];
  //setup hashmap for first array
  for(i=0; i<arr1.length; i++){
    keyA[arr1[i]] = 1;
  }
  //setup hashmap for second array
  for(k=0; k<arr2.length; k++){
    keyB[arr2[k]] = 1;
  }
  //compare arr2 to first hashmap
  //and push to a if there is a
  //discrepancy
  for(j=0; j<arr2.length; j++){
    if(keyA[arr2[j]] != 1){
      a.push(arr2[j]);
    }
  }
  //compare arr1 to second hashmap
  //and push to a if there is a
  //discrepancy
  for(g=0; g<arr1.length; g++){
    if(keyB[arr1[g]] != 1){
      a.push(arr1[g]);
    }
  }
  return a;

}
