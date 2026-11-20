
function fullName(firstName, lastName) {

    // Check ifeither name is missing
    if (!firstName || !lastName) {
        return "Invalid name input.";   }


     // Capitalize  first name
    firstName = firstName.charAt(0).toUpperCase() +
                firstName.slice(1).toLowerCase();

    // Capitalize  last name
    lastName = lastName.charAt(0).toUpperCase() +
               lastName.slice(1).toLowerCase();

    // Return full name
    return `${firstName} ${lastName}`;}


    
console.log(fullName("henry", "paul"));

console.log(fullName("HARRY", "Lineker"));

console.log(fullName("Frederick", "sAMuel"));

console.log(fullName("", "KnighT"));