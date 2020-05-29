// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products
var products = [
    {
        name: "broccoli",
        vegetarian: true,
        glutenFree: true,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        price: 2.35
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        price: 10.00
    },
    {
        name: "chicken",
        vegetarian: false,
        glutenFree: true,
        price: 8.50
    },
    {
        name: "olives",
        vegetarian: true,
        glutenFree: true,
        price: 1.99
    },
    {
        name: "ice cream",
        vegetarian: true,
        glutenFree: false,
        price: 3.99
    },
    {
        name: "eggs",
        vegetarian: true,
        glutenFree: true,
        price: 2.99
    },
    {
        name: "bananas",
        vegetarian: true,
        glutenFree: true,
        price: 0.99
    },
    {
        name: "tomatoes",
        vegetarian: true,
        glutenFree: true,
        price: 1.50
    },
    {
        name: "oranges",
        vegetarian: true,
        glutenFree: true,
        price: 0.99
    }
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods, restriction) {
    let product_names = [];
    for (let i=0; i<prods.length; i+=1) {
        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
            product_names.push(prods[i].name);
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
            product_names.push(prods[i].name);
        }
        else if (restriction == "None"){
            product_names.push(prods[i].name);
        }
    }
    return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i=0; i<products.length; i+=1) {
        if (chosenProducts.indexOf(products[i].name) > -1){
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}
