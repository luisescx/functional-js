function sum(number) {
    return function (number2) {
        return function (number3) {
            return number + number2 + number3;
        };
    };
}

const sumAB = sum(1)(2);
console.log(sumAB(3));

console.log(sum(1)(2)(3));

function multiply(number, number2) {
    return number * number2;
}

function calc(number) {
    return function (number2) {
        return function (fn) {
            return fn(number, number2);
        };
    };
}

const calcTimes2 = calc(2);
const resultCalcTimes2 = calcTimes2(10);
console.log(resultCalcTimes2(multiply));

console.log(calc(3)(3)(multiply));
