function reverseString(str) {
  var newString="";
  var placeChar="";
  for(i=0;i<str.length;i++){
    placeChar = str.charAt(str.length-1-i);
    newString = newString.concat(placeChar);

  }
  return newString;
}
