// when functions can return functions or call another function

function execute(fn, ...params) {
    return fn(...params);
}

function sum(a, b, c) {
    return a + b + c;
}

function times(a, b) {
    return a, b;
}

const sumResult = execute(sum, 4, 5, 6);
const timesResult = execute(times, 30, 40);

console.log(sumResult, timesResult);
