const fs = require("fs");
const path = require("path");

function readFolder(fullPath) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(fullPath);
            files = files.map((file) => path.join(fullPath, file));
            resolve(files);
        } catch (e) {
            reject(e);
        }
    });
}

function elementsFinishedWith(array, pattern) {
    return array.filter((el) => el.endsWith(pattern));
}

function readFile(fullPath) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(fullPath, { encoding: "utf-8" });
            resolve(content.toString());
        } catch (e) {
            reject(e);
        }
    });
}

function readFiles(fullPath) {
    return Promise.all(fullPath.map((oldPath) => readFile(oldPath)));
}

function elementsFinishedWith(defaultValue) {
    return function (array) {
        return array.filter((el) => el.endsWith(defaultValue));
    };
}

function removeEmptyElements(array) {
    return array.filter((el) => el.trim());
}

function removeIfIncludes(defaultValue) {
    return function (array) {
        return array.filter((el) => !el.includes(defaultValue));
    };
}

function removeCharacters(symbols) {
    return function (array) {
        return array.map((el) => {
            let newText = el;
            symbols.forEach((symbol) => {
                newText = newText.split(symbol).join("");
            });
            return newText;
        });
    };
}

function removeIfNumber(array) {
    return array.filter((el) => {
        const num = parseInt(el.trim());
        return num !== num;
    });
}

function joinContent(content) {
    return content.join(" ");
}

function splitBy(symbol) {
    return function (allContent) {
        return allContent.split(symbol);
    };
}

function groupWords(words) {
    return Object.values(words.reduce((acc, word) => {
        const el = word.toLowerCase();
        const qtd = acc[el] ? acc[el].qtd++ : 1;
        acc[el] = { element: el, qtd };
        return acc;
    }, {}));
}

function orderByNumbers(attr, order = 'asc') {
    return function(array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];

        return array.sort(order === 'asc' ? asc : desc);
    }
}

module.exports = {
    elementsFinishedWith,
    readFolder,
    readFile,
    readFiles,
    elementsFinishedWith,
    removeEmptyElements,
    removeIfIncludes,
    removeIfNumber,
    removeCharacters,
    joinContent,
    splitBy,
    groupWords,
    orderByNumbers
};
