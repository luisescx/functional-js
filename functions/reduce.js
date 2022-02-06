const cart = [
    { name: "Pen", qtd: 10, price: 5.99, fragile: true },
    { name: "Pencil", qtd: 12, price: 6.43, fragile: true },
    { name: "Notebook", qtd: 2, price: 10.25, fragile: false },
    { name: "Printer", qtd: 0, price: 815, fragile: false },
    { name: "scissors", qtd: 1, price: 2.3, fragile: true },
];

const getTotal = ({ qtd, price }) => qtd * price;
const sum = (acc, el) => acc + el;

const total = cart.map(getTotal).reduce(sum, 0);
console.log(total);

Array.prototype.myReduce = function (fn, initial) {
    let acc = initial;

    for (let index = 0; index < this.length; index++) {
        if (!acc && index === 0) {
            acc = this[index];
            continue;
        }

        acc = fn(acc, this[index], index, this);
    }
    return acc;
};

const total2 = cart.map(getTotal).myReduce(sum);
console.log(total2);
