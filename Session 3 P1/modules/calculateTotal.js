let cart= require('../data/cart');
let products = require('../data/products');

function calculateTotal() {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });
    return total;
}
module.exports = calculateTotal;