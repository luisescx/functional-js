const fs = require("fs");
const path = require("path");

const fullPath = path.join(__dirname, "data.txt");

function showContent(_, content) {
    console.log(content.toString());
}
fs.readFile(fullPath, showContent);
fs.readFile(fullPath, (_, content) => console.log(content.toString()));
