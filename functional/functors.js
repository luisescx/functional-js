// Objects that implements the MAP function
// they are also wrappers of a value

const nums = [1, 2, 3, 4, 6];
const newNums = nums.map((num) => num + 10).map((num) => num * 2);

console.log(newNums);

function safeType(value) {
    return {
        value,
        map(fn) {
            return safeType(fn(this.value));
        },
    };
}

const result = safeType("This is a text")
    .map((t) => t.toUpperCase())
    .map((t) => t.split("").join(" "));
console.log(result.value);
