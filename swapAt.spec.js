const {
    swapAt
} = require("./solution");

let expected = "koob";
let actual = swapAt("book", 1, 4);
console.assert(expected == actual);

expected = "klil";
actual = swapAt("kill", 2, 3);
console.assert(expected == actual);

expected = "book";
actual = swapAt("book", 2, 3);
console.assert(expected == actual);

expected = "boko";
actual = swapAt("book", 3, 4);
console.assert(expected == actual);