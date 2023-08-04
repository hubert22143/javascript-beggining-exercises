const reverseString = function(string) {
let reversedCharacters = "";
for (let i = string.length - 1; i>=0; i-- ){
    reversedCharacters += string[i];
}
return reversedCharacters;
};

// Do not edit below this line
module.exports = reverseString;
