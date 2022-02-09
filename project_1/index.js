const path = require("path");
const fn = require("./functions");

const fullPath = path.join(__dirname, "..", "data", "legends");

fn.readFile(fullPath)
    .then((files) => fn.elementsFinishedWith(files, "srt"))
    .then(console.log);
