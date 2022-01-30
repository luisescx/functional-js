// arrow function
const happNewYear = () => console.log("Happy New Year!");
console.log(happNewYear());

const greetings = (name) => `Hi ${name}`;
console.log(greetings("Luis"));

const sum = (...numbers) => {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
};
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6));

const powerArrowFunction = (base) => (exp) => Math.pow(base, exp);

console.log(powerArrowFunction(2)(8));

Array.prototype.log() = function() {
    console.log(this);
}

const numeros = [1,2,3]
numeros.log();