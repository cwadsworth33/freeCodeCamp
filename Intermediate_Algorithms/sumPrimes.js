//Sum All Primes

//Sum all the prime numbers up to and including
//the provided number.

function sumPrimes(num) {
  var sum = 0;
  if(isPrime(num)){
    sum = sum+num;
  }
  for(j=2; j<num; j++){
    if(isPrime(j)){
      console.log(j);
      sum = sum + j;
    }

  }
  return sum;
}

function isPrime(num){
  for(i=2; i<num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
