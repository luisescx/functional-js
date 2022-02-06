const cart = [
    { name: "Pen", qtd: 10, price: 5.99, fragile: true },
    { name: "Pencil", qtd: 12, price: 6.43, fragile: true },
    { name: "Notebook", qtd: 2, price: 10.25, fragile: false },
    { name: "Printer", qtd: 3, price: 815, fragile: false },
    { name: "scissors", qtd: 1, price: 2.3, fragile: true },
];

const isFragile = ({ fragile }) => fragile;

const getTotal = ({ qtd, price }) => qtd * price;

const getAverage = (acc, el) => {
    const newQtd = acc.qtd + 1;
    const newTotal = acc.total + el;

    return {
        qtd: newQtd,
        total: newTotal,
        average: newTotal / newQtd,
    };
};

const initialAverage = { qtd: 0, total: 0, average: 0 };

const { average } = cart
    .filter(isFragile)
    .map(getTotal)
    .reduce(getAverage, initialAverage);

console.log(average);
