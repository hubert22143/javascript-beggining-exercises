let arrNumbers = [16, 25, 30, 45, 60, 95, 1, 3, 4, 25, 6, 23];

const filterRange = (arr,a,b) =>{
  let filteredNumbers = arr.filter(number => number > a && number<b);
  return filteredNumbers;
}
let betweenRange = filterRange(arrNumbers, 0,15);
alert(betweenRange);