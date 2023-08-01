document.addEventListener('DOMContentLoaded', () => {

    function isPrime(num){
      if(num<2){
        return false;
      }
      let s = Math.sqrt(num);
      let i = 2;
      do{
        if(num%i===0){
          return false;
        }
        i++;
      }while(i<=s);
      return true;
    }
    function checkPrimeNumbersAndLog(startNum,endNum){
      for(let num = startNum; num>= endNum; num--){
        if(isPrime(num)){
          console.log(num);
        }
      }
    }
    checkPrimeNumbersAndLog(500,2);
  });