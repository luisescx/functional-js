const path = require("path");
const fn = require("./functions");

const fullPath = path.join(__dirname, "..", "data", "legends");

const symbols = [
    ".",
    "?",
    "-",
    ",",
    '"',
    "_",
    "<i>",
    "♪",
    "</i>",
    "\r",
    "[",
    "]",
    "(",
    ")",
];

fn.readFolder(fullPath)
    .then(fn.elementsFinishedWith(".srt"))
    .then(fn.readFiles)
    .then(fn.joinContent)
    .then(fn.splitBy("\n"))
    .then(fn.removeEmptyElements)
    .then(fn.removeIfIncludes("-->"))
    .then(fn.removeIfNumber)
    .then(fn.removeCharacters(symbols))
    .then(fn.joinContent)
    .then(fn.splitBy(" "))
    .then(fn.removeEmptyElements)
    .then(console.log);
