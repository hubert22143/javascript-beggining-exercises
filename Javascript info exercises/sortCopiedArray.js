let arrStrings = ["HTML" , "Javascript" , "CSS",'Österreich', 'Andorra', 'Vietnam'];

const sortedArrays = (arr) => {
  let arrCopy = arr.concat();
  let sortedCopiedArray = arrCopy.sort();
  return sortedCopiedArray;
}
let sortedArray = sortedArrays(arrStrings);
alert(sortedArray);
alert(arrStrings);