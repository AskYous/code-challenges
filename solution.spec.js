const solution = require("./solution");

let expected = "koob";
let actual = solution.swap("book", 1, 4);
console.assert(expected == actual);

expected = "klil";
actual = solution.swap("kill", 2, 3);
console.assert(expected == actual);

expected = "book";
actual = solution.swap("book", 2, 3);
console.assert(expected == actual);

expected = "boko";
actual = solution.swap("book", 3, 4);
console.assert(expected == actual);