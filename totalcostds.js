

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