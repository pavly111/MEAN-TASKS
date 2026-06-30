let cart= require('../data/cart');
let products = require('../data/products');

function removeFromCart(productId) {
    let productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        let removedProduct = cart.splice(productIndex, 1);
        console.log(`Product "${removedProduct.name}" removed from cart.`);
    } else {
        console.log(`Product with ID ${productId} not found in cart.`);
    }
}

module.exports = removeFromCart;