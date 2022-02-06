new Promise(function (makePromise) {
    makePromise("hello world");
}).then((value) => {
    console.log(value);
});

function waitFor(time = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Inside setTimeout");
            resolve("Inside Resolve");
        });
    });
}

// waitFor(3000).then((value) => console.log(value));
waitFor(3000).then(waitFor).then(waitFor);

function generateNumbers(min, max, time = undefined) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve) => {
        const factor = max - min * 1;
        const aleatorio = parseInt(Math.random() * factor) + 1;

        if (time) {
            setTimeout(() => {
                resolve(aleatorio);
            }, time);

            return;
        }

        resolve(aleatorio);
    });
}
generateNumbers(10, 30).then(console.log);

function generateNumbersList() {
    return Promise.all([
        generateNumbers(1, 100, 100),
        generateNumbers(1, 100, 200),
        generateNumbers(1, 100, 300),
        generateNumbers(1, 100, 300),
        generateNumbers(1, 100, 400),
    ]);
}

generateNumbersList().then(console.log);

function doSomething(value, errorChance) {
    return new Promise((resolve, reject) => {
        if (Math.random() < errorChance) {
            reject("Error");

            return;
        }

        resolve(value);
    });
}

doSomething("testing...", 0.5).then(console.log).catch(console.log);
