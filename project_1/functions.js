const fs = require("fs");
const path = require("path");

function readFile(fullPath) {
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

module.exports = {
    elementsFinishedWith,
    readFile,
};
