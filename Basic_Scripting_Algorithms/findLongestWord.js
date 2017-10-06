//this function takes a string and finds
//the longest word in it
function findLongestWord(str) {
  var c = str.split(' ');
  var d = 0;
  for(i=0;i<c.length;i++){
    if(c[i].length > d){
      d = c[i].length;
    }
  }
  return d;
}
