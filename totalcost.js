function calculateTotalCost(price, quantity, taxRate) {

 // Check whether all inputs are valid numbers
    if (
        typeof price !== "number" ||    typeof quantity !== "number" ||   typeof taxRate !== "number" ||
        !Number.isFinite(price) ||  !Number.isFinite(quantity) ||   !Number.isFinite(taxRate)
    ) {
        return "Invalid input.";
    }

    //Calculate total cost
    let totalCost = (price * quantity) * (1 + taxRate);

    //Return total cost
    return totalCost; }

// results of calculation function
console.log(calculateTotalCost(10, 3, 0.06));
console.log(calculateTotalCost(40, 8, 0.04));
console.log(calculateTotalCost("thirty", 5, 0.09));
console.log(calculateTotalCost(200, 4, 0.10));
