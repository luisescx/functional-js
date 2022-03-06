function composition(...fns) {
    return function (value) {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, value);
    };
}

function scream(text) {
    return text.toUpperCase();
}

function addSymbol(text) {
    return `${text}!!!!`;
}

function separate(text) {
    return text.split("").join(" ");
}

const result = composition(scream, addSymbol, separate)("STOP");
console.log(result);
