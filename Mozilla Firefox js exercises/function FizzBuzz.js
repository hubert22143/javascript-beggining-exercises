document.addEventListener('DOMContentLoaded', () => {
    let UserNumber = prompt("User, in order to play fizzbuzz you need to enter a number! I hope you know the rules :D Have fun!");
    UserNumber = parseInt(UserNumber);
    function fizzbuzz(){
        if(UserNumber% 3 === 0 && UserNumber%5===0){
            alert("Fizzbuzz");
        }else if(UserNumber%3===0){
            alert("Fizz");
        }else if(UserNumber%5===0){
            alert("buzz");
        }
    };   
fizzbuzz()
});

// That was my first attempt to achieve desired result, but as I didn't wish to get the output's many times,
// I've changed it to the way I wanted to achieve it, and it was just the final result of the output.
// I know it may probably conflict with the basic rules of the game, but as well I am giving the
// second resolution below :) 
// document.addEventListener('DOMContentLoaded', () => {
//     let UserNumber = prompt("User, in order to play fizzbuzz you need to enter a number! I hope you know the rules :D Have fun!");
//     UserNumber = parseInt(UserNumber);
//     function fizzbuzz(){
//     for(let i = 1; i<=UserNumber; i++){
//         if(UserNumber% 3 === 0 && UserNumber%5===0){
//             alert("Fizzbuzz");
//         }else if(UserNumber%3===0){
//             alert("Fizz");
//         }else if(UserNumber%5===0){
//             alert("buzz");
//         }

//     };   
// }
// fizzbuzz()
// });