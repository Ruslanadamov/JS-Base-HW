"use strict";
const productss = [{
    id: 3,
    price: 200,
}, {
    id: 4,
    price: 900,
}, {
    id: 1,
    price: 1000,
}, ];

productss.forEach(function (product) {
    product.price = product.price - product.price * 0.15;
});
console.log(productss);