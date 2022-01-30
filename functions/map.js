const numList = [3, 4, 5, 2, 6];
const double = (n) => n * 2;
console.log(numList.map(double));

const names = ["Luis", "John", "David"];
const firstLetter = (word) => word[0];
console.log(names.map(firstLetter));

const cart = [
    { name: "Pen", qtd: 10, price: 5.99 },
    { name: "Pencil", qtd: 12, price: 6.43 },
    { name: "Notebook", qtd: 2, price: 10.25 },
    { name: "Printer", qtd: 3, price: 815 },
    { name: "scissors", qtd: 1, price: 2.3 },
];

const getName = ({ name }) => name;
const getValue = ({ qtd, price }) => Number((qtd * price).toFixed(2));

console.log(cart.map(getName));
console.log(cart.map(getValue));

// how map works
Array.prototype.customMap = function (fn) {
    const mapped = [];
    for (let index = 0; index < this.length; index++) {
        const result = fn(this[index], index, this);
        mapped.push(result);
    }
    return mapped;
};

console.log(cart.customMap(getName));
console.log(cart.customMap(getValue));
