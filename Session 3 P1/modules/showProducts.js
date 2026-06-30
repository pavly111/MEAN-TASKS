let products = require('../data/products');

function showProducts() {
    console.log("===============Products============");
    products.forEach(product => {
        console.log(`ID: ${product.id}`);
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Description: ${product.description}`);
        console.log('-----------------------------------');
    });
}

module.exports = showProducts;
    