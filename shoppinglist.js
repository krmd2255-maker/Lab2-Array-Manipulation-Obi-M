

// Create an empty array
let shoppingList = [];


// Add an item to the shopping list
function addItem(item) {
    shoppingList.push(item); }


// Remove the last item
function removeLastItem() {
    shoppingList.pop(); }


// Display the shopping list
function displayList() {
    console.log(shoppingList); 
}



// Test functions
addItem("Milk");
addItem("Bread");
addItem("Butter");
addItem("Apples");


// Display  original list
console.log("Original Shopping List:");
displayList();

// Remove the last item
removeLastItem();

// Display the updated list
console.log("Updated Shopping List:");
displayList();
