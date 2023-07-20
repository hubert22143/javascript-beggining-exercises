    // Don't worry about this code here, just checking your results :)
    // I get it, you're curious, 
    // but it's OK if you don't understand what's going on in here, you'll learn it in time.


    // Nothing changed in this code. It was simply for analyze and understand.
    let numCorrect = 0;
    let numChecked = 0;

    const result = numberChecker();
    console.log(`You entered: ${number}, and got result: ${result}`);
    console.log("\n\n\n Test Results: \n")

    function checkNumberChecker(num) {
      number = num;
      const result = numberChecker();
      if ((result === true && number >= 10) || (result === false && number < 10)) {
        numCorrect++;
        console.log(`If I enter ${number}, the result is ${result}. This is correct!`);
      } else {
        console.error(`I entered "${number}", and got "${result}" as a result, I should have gotten "${number >= 10}" instead`);
      }

      numChecked++
      console.log("\n");
    }

    checkNumberChecker(11)
    checkNumberChecker(22)
    checkNumberChecker(33)
    checkNumberChecker(44)
    checkNumberChecker(55)

    if (numCorrect === numChecked) {
      console.log("You've passed all the tests, continue to the next exercise!")
    } else {
      console.log(`You have failed ${numChecked - numCorrect} out of ${numChecked}, please try again`);
    }


    // This code had a hidden formula for numberchecker, it won't work valid for as it is now. 
    // The purpose of this exercise was to analyze the code, as in all of examples in this folder and understand it.