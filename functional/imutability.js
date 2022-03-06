// the original data never changes

function orderNumbers(array) {
    return [...array].sort((a, b) => a - b);
}

const numbers = [3, 1, 7, 9, 4, 6];
const orderedNumbers = orderNumbers(numbers);

console.log(numbers);
console.log(orderedNumbers);

function sumNumbers(array, total = 0) {
    if (array.length === 0) {
        return total;
    }

    return sumNumbers(array.slice(1), total + array[0]);
}
