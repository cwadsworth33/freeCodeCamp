//Sum All Odd Fibonacci Numbers

//Given a positive integer num, return the sum of all
//odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  return sumFibsHelper(num, 1, 1) + 2;
}

function sumFibsHelper(num, fib1, fib2){
  var newFib = fib1 + fib2;
  console.log("fib1 " + fib1 + " fib2 " + fib2);
  console.log("newFib " + newFib);
  if(newFib >= num){
    if(num % 2 == 0){
      return 0;
    }
    return newFib;
  }
  else if(newFib % 2 == 0){
    return sumFibsHelper(num, fib2, newFib);
  }
  else{
    return newFib + sumFibsHelper(num, fib2, newFib);
  }
}
