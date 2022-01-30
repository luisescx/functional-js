function goodMorning() {
    console.log("Good Morning");
}

function goodAfternoon() {
    console.log("Good Afternoon");
}

function excuteFunction(fn) {
    fn();
}
excuteFunction(goodMorning);
excuteFunction(goodAfternoon);

function power(base) {
    return function (exp) {
        return Math.pow(base, exp);
    };
}
const power2 = power(2);
console.log(power2(8));
console.log(power(2)(8));
