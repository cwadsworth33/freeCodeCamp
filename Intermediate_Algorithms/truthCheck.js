//Everything Be True

//Check if the predicate (second argument) is truthy
//on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  for(i=0; i<collection.length; i++){
    if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}
