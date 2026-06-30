let cart = require('../data/cart');
let products = require('../data/products');
let addToCart = require('../modules/addToCart');
let removeFromCart = require('../modules/removeFromCart');
let listCart = require('../modules/listCart');
let calculateTotal = require('../modules/calculateTotal');
let showProducts = require('../modules/showProducts');

function main() {
    console.log("Welcome to the Shopping Cart Application!");
    console.log("Available Products:");
    showProducts();

    addToCart(1);
    addToCart(2);
    listCart();
    console.log(`Total: $${calculateTotal()}`);
    removeFromCart(1);
    listCart();
    console.log(`Total: $${calculateTotal()}`);
    removeFromCart(2);
    listCart();
    console.log(`Total: $${calculateTotal()}`);
    removeFromCart(3);
    listCart();
    console.log(`Total: $${calculateTotal()}`);
    removeFromCart(4);
    addToCart(3);
    listCart();
    console.log(`Total: $${calculateTotal()}`);

}

main();