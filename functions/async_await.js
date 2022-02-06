function waitFor(time = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

function returnValue() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 2000);
    });
}

async function exec() {
    let value = await returnValue();

    await waitFor(1500);
    console.log(`Value is ${value}`);

    await waitFor(1500);
    console.log(`Value is ${value + 1}`);

    await waitFor(1500);
    console.log(`Value is ${value + 2}`);

    return value + 3;
}

async function trulyExec() {
    const value = await exec();

    console.log(value);
}

trulyExec();
