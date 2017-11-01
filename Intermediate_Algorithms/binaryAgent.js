//Binary Agents

//Return an English translated sentence of
//the passed binary string.

function binaryAgent(str){
  console.log(str);
  var binString = "";
  var decimal = 0;
  if(str.length <= 1){
    return "";
  }
  for(i=0; i<8; i++){
    binString = binString + str.charAt(i);
  }
  decimal = toDecimal(binString);
  return String.fromCharCode(decimal) +
  binaryAgent(str.substring(9,str.length));
}

function toDecimal(str){
  var sum = 0;
  for(i=0; i<str.length; i++){
    if(str.charAt(str.length-1-i) == "1"){
      sum = sum + Math.pow(2, i);
    }
  }
  return sum;
}
