//Title Case a Sentence

//Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.

function titleCase(str) {
  var c = str.split(' ');
  var builder = "";
  var d = "";
  var e = "";
  var place = "";
  for(i=0;i<c.length;i++){
    place = c[i];
    d = place.substring(0, 1);
    d = d.toUpperCase();
    e = place.substring(1,str.length);
    e = e.toLowerCase();
    if(i!=0)
      builder = builder + " "+d+e;
    else
      builder = builder +d+e;
  }

  return builder;
}
