"use strict"
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 25 / 100;
        alert("Цена со скидкой на " + this.name + " " + this.price + " рублей")
    }
}
let discount = new Product("Огурцы", 100);
discount.make25PercentDiscount();