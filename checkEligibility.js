

function checkEligibility(age, isEmployed) {

    // Check if over 18 and employed
    if (age > 18 && isEmployed === true) {
        return "Eligible for the program.";

  // Check if over 18 but unemployed
    } else if (age > 18 && isEmployed === false) {
        return "Conditionally eligible for the program.";

    // If person is 18 or younger
    } else {
        return "Not eligible for the program.";     }
}


// Resuls of fuction
console.log(checkEligibility(27, true));
console.log(checkEligibility(30, false));
console.log(checkEligibility(17, true));
console.log(checkEligibility(16, false));

