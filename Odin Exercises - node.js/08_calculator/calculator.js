const add = function(addX,addY) {
	let sum = addX + addY
  return sum;
};

const subtract = function(substractX,substractY) {
	let substractSum = substractX - substractY
  return substractSum
};

const sum = function(sumResult) {
	let totalSum = 0;
  for(let i = 0; i<sumResult.length; i++){
    totalSum += sumResult[i];
  }
  return parseInt(totalSum);
};

const multiply = function(MultiplyValue) {
let MultiplySum = 1;
for(let i = 0; i<MultiplyValue.length; i++){
  MultiplySum *= MultiplyValue[i];
}
return MultiplySum;
};

const power = function(number,power) {
	total = 1;
  for(let i = 0; i<power; i++){
    total *= number;
  }
  return total;

};

const factorial = function(n) {
  let answer = 1;
  if(n === 1 || n === 0){
    return answer;
  }else if(n>1){
    for(let i = n; i>=1; i--){
      answer = answer * i;
    }
    return answer;
  }else{
    return "Number has to be a positive";
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
