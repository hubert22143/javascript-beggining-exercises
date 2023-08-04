const palindromes = function (palindromeSentence) {
let palindromeLowerCase = palindromeSentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let palindromeReversed = palindromeLowerCase.split("").reverse().join("");
return  palindromeLowerCase === palindromeReversed;
};

// Do not edit below this line
module.exports = palindromes;
