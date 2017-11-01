//Arguments Optional

//Create a function that sums two arguments together. If
//only one argument is provided, then return a function
//that expects one argument and returns the sum.

function addTogether() {
  if(arguments.length == 2){
    if(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
      return arguments[0] + arguments[1];
    }
    else{
      return undefined;
    }
  }

  else{
    if(Number.isInteger(arguments[0])){
      var ham = arguments[0];
      var x = function (b) {
        if(Array.isArray(arguments[0])){
          return undefined;
        }
        return ham + b;};
      return x;
    }
    else{
      return undefined;
    }
  }
}
