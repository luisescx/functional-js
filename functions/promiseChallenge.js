const fs = require("fs");
const path = require("path");

function readFile(filePath) {
    return new Promise((resolve) => {
        fs.readFile(filePath, (_, content) => resolve(content.toString()));
    });
}

const fullPath = path.join(__dirname, "data.txt");
readFile(fullPath).then((content) => console.log(content));
