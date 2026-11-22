

function calculateTotalCostDs(price, quantity, taxRate, discount = 0) {

    // Validate all inputs
    if (
        typeof price !== "number" ||   typeof quantity !== "number" ||
        typeof taxRate !== "number" || typeof discount !== "number" ||
        !Number.isFinite(price) ||  !Number.isFinite(quantity) ||
        !Number.isFinite(taxRate) ||   !Number.isFinite(discount) ||
        price < 0 ||
        quantity < 0 ||
        taxRate < 0 ||
        discount < 0
    ) 
	{
        return "Invalid input.";
    } 

      // Calculate subtotal
    let subtotal = price * quantity;


        // Subtract discount before applying tax
    let discountedSubtotal = subtotal - discount;

     // Calculate total cost including tax
    let totalCost = discountedSubtotal * (1 + taxRate);

 // Return total cost rounded to two decimal places
    return totalCost.toFixed(2);
}



//  No discount provided
console.log(calculateTotalCostDs(100, 2, 0.10));

//  Discount provided
console.log(calculateTotalCostDs(100, 2, 0.10, 20));

// Zero discount
console.log(calculateTotalCostDs(50, 4, 0.08, 0));

// Invalid price
console.log(calculateTotalCostDs("80", 2, 0.10, 20));