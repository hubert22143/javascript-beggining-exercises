//Small update, I am so dumb. I haven't notice that i had math.js file accomplished in every following of examples in this folder
// Due to what I have been analyzing the code without every file, still I somehow managed to do two exercises, kinda dumb of me but cuz
// I wont upload the rest of code(math js, and the rest for others) as for sake for the exercises.
// In this one I just had to change the values to math expressions as they were described in math.js
// Instead of that i've tried parseinting those values because of console.log displayed 8+1


const { a, b, c, d, e } = require("./math");
if (a === 9) {
  console.log("'a' is correct!");
} else {
  console.log(`'a' is incorrect, got ${a}, expected 9`);
}
console.log("\n");

if (b === 66) {
  console.log("'b' is correct!")
} else {
  console.log(`'b' is incorrect, got ${b}, expected 66`)
}
console.log("\n");

if (c === 1) {
  console.log("'c' is correct!")
} else {
  console.log(`'c' is incorrect, got ${c}, expected 1`)
}
console.log("\n");

if (d === -8) {
  console.log("'d' is correct!")
} else {
  console.log(`'d' is incorrect, got ${d}, expected -8`)
}
console.log("\n");

if (e === 68) {
  console.log("'e' is correct!")
  console.log("\n Congrats! You may move onto the next exercise")
} else {
  console.log(`'e' is incorrect, got ${e}, expected 68`)
}