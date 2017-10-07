//Write a function which takes a ROT13 encoded string
//as input and returns a decoded string.

function rot13(str) {
  var code = 0;
  var a = [];
  var word = "";
  for(i=0; i<str.length; i++){

      //first half of the alphabet
      if(str.charAt(i).match(/[A-M]/)){
        code = str.charCodeAt(i);
        code = code+13;
        word = word + String.fromCharCode(code);
      }
      //second half of the alphabet
      else if(str.charAt(i).match(/[N-Z]/)){
        code = str.charCodeAt(i);
        code = code-13;
        word = word + String.fromCharCode(code);
      }
      //not a letter
      else{
        word = word + str.charAt(i);
      }

  }
  return word;

}
