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