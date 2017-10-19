//Roman Numeral Converter

//Convert the given number into a roman numeral.

//object containing basic roman numerals
var basics = {
   "1":"I", "2":"II", "3":"III", "4":"IV", "5":"V","6":"VI", "7":"VII",
   "8":"VIII", "9":"IX", "10":"X", "20":"XX", "30":"XXX", "40":"XL", "50":"L",
   "60":"LX","70":"LXX","80":"LXXX","90":"XC","100":"C","200":"CC","300":"CCC",
   "400":"CD","500":"D","600":"DC","700":"DCC","800":"DCCC","900":"CM",
   "1000":"M","2000":"MM", "3000":"MMM", "0":"", "00":"", "000":"",  "0000":""
};
//function to convert a number <10000 into Roman Numberals
function convertToRoman(num) {
  var stringNum = num.toString();
  //base case if string is length 0
  if(stringNum.length <= 0){
    return "";
  }
  //base case if num is a basic number
  else if(stringNum in basics){
    return basics[stringNum];
  }
  //recursive call. Return the most significant digit roman numeral
  //and then do the same for each less signifcant digit
  else{
    var temp = "";
    //get most significant digit from num
    temp = temp + stringNum.charAt(0);
    //pad the most significant digit with zeros
    for(i=1; i<stringNum.length; i++){
      temp = temp + "0";
    }
    return basics[temp] + convertToRoman(stringNum.slice(1));
  }

}
