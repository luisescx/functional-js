const cart = [
    { name: "Pen", qtd: 10, price: 5.99 },
    { name: "Pencil", qtd: 12, price: 6.43 },
    { name: "Notebook", qtd: 2, price: 10.25 },
    { name: "Printer", qtd: 0, price: 815 },
    { name: "scissors", qtd: 1, price: 2.3 },
];

const getName = item => item.name;
const qtdHigherThanZero = item => item.qtd > 0;
// const qtdHigherEqualThanZero = item => item.qtd >= 0;
// const qtdToHigh = item => item.qtd > 1000;

const validName = cart.filter(qtdHigherThanZero).map(getName);

console.log(validName);

Array.prototype.myFilter = function(fn) {
    const newArray = [];

    for (let index = 0; index < this.length; index++) {
        if (fn(this[index], index, this)) {
            newArray.push(this);
        }
    }

    return newArray;
}

const validItens2 = cart.myFilter(qtdHigherThanZero).map(getName);
console.log(validItens2);