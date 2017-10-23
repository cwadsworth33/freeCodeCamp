/*
*Function that looks through an array of objects (first argument) and
*returns an *array of all objects that have matching property and value
*pairs (second argument).
*
*@param collection: array of objects
*@param source: object to compare the collection elements to
*@return array containing the collection elements that contain source
*/

function whatIsInAName(collection, source) {
  //create array of keys from the source object
  var sourceKey = Object.keys(source);
  var arr = [];
  //traverse length of collection in outer loop
  //and length of source keys in inner loop
  for(i=0; i<collection.length; i++){
    for(j=0; j<sourceKey.length; j++){
      //if the current collection object does not have a match
      //with the current key value pair from source, break the
      //inner loop
      if(collection[i][sourceKey[j]] != source[sourceKey[j]]){
        break;
      }
      //if collection[i] passes all tests from sourceKey[j],
      //push collection[i] to arr.
      else{
        if(j==sourceKey.length-1){
          arr.push(collection[i]);
        }
      }
    }

  }
  return arr;
}
