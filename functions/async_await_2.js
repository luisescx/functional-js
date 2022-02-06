function generateNumbers(min, max, sortedNumbers) {
    if (min > max) [max, min] = [min, max];

    return new Promise((resolve, reject) => {
        const factor = max - min * 1;
        const random = parseInt(Math.random() * factor) + min;

        if (sortedNumbers.includes(random)) {
            reject("Repeated number");
            return;
        }

        resolve(random);
    });
}

// generateNumbers(1, 5, [1, 2, 4]).then(console.log).catch(console.log);

async function generateLottery(numbersQtd) {
    try {
        const numbers = [];

        for (let _ of Array(numbersQtd).fill()) {
            numbers.push(await generateNumbers(1, 60, numbers));
        }

        return numbers;
    } catch (e) {
        throw new Error(e);
    }
}

generateLottery(10).then(console.log).catch(console.log);
