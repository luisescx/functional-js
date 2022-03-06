// impure
function area(radius) {
    return radius * radius * Math.PI;
}

// pure
function area(radius, pi) {
    return radius * radius * pi;
}

// impure
function generateRandomNumber(min, max) {
    const factor = max - min + 1;
    return parseInt(Math.random() * factor) + min;
}
