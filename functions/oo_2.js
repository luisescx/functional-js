class Product {
    constructor(name, price, desc) {
        this.name = name;
        this.price = price;
        this.desc = desc;
    }

    finalPrice() {
        return this.price * (1 - this.desc);
    }
}

const p1 = new Product("Pen", 1.4);
console.log(p1.name);

const p2 = new Product("car", 5000, 0.5);
console.log(p2.price);
console.log(p2.finalPrice());
