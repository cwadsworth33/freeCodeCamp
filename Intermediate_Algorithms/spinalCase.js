//Spinal Tap Case

//Convert a string to spinal case. Spinal case is
//all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var newString = "";
  for(i=0; i<str.length; i++){
    if(/[A-Z]/.test(str[i])){
      if(i==0){
        newString = newString + str.charAt(0).toLowerCase();
      }
      else if(str[i-1]!=' '){
        newString += " " + str.charAt(i).toLowerCase();
      }
      else{
        newString += str.charAt(i).toLowerCase();
      }
    }
    else{
      newString += str.charAt(i);
    }
  }
  newString = newString.replace(/ /g,'-');
  newString = newString.replace(/_/g,'');

  return newString;
}
