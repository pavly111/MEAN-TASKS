let cart= require('../data/cart');
let products = require('../data/products');

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`Product "${product.name}" added to cart.`);
    } else {
        console.log(`Product with ID ${productId} not found.`);
    }
}

module.exports = addToCart;