const solution = require("./solution");

/**
 * Test swap function.
 */
(() => {
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
})();

/**
 * Testing swapLexOrder function
 */
(() => {
    let expected = "dbca";
    let actual = solution.swapLexOrder("abdc", [
        [1, 4],
        [3, 4]
    ]);
    console.assert(expected == actual);

    expected = "zdsnxamwoj";
    actual = solution.swapLexOrder("dznsxamwoj", [
        [1, 2],
        [3, 4],
        [6, 5],
        [8, 10]
    ]);
    console.assert(expected == actual);
})();