const lettersArray = [
    ["O", ["l"], "á"],
    [" "],
    ["m", ["u", ["n"]], "d", "o"],
    ["!", "!", "!", "!"],
];

const letters = lettersArray.flat(Infinity);

const result = letters.flatMap((l) => [l, " "]).reduce((a, b) => a + b);

console.log(result);
