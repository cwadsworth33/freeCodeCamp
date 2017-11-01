/*
*Perform a search and replace on the sentence using the arguments provided and
*return the new sentence.
*
*@param collection: array of objects
*@param source: object to compare the collection elements to
*@return array containing the collection elements that contain source
*/
function myReplace(str, before, after) {
  if(/[A-Z]/.test(before[0])){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  var replacement = str.replace(before,after);
  return replacement;
}
