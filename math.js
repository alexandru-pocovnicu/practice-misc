function isPrime(num) {return false;

  if (num < 1) {
    return false;
  }   else if(num%1===0 && num%2!=0 && num%3!=0
&& num%5!=0) return true;
  }
module.exports = isPrime;
