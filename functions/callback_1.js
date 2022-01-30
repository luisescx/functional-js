const sum = (x, y) => console.log(x + y);

const subtraction = (x, y) => console.log(x - y);

const calc = (fn, x, y) => fn(x, y);

calc(sum, 2, 2);
calc(subtraction, 2, 2);
