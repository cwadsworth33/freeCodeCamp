//Repeat a given string (first argument) num times
//(second argument). Return an empty string if num
//is not a positive number.

function repeatStringNumTimes(str, num) {
  var repeated = "";
  for(i=0;i<num;i++){
    repeated = repeated + str;
  }
  return repeated;
}
