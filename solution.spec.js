const solution = require("./solution");


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

    expected = "fzxmybhtuigowbyefkvhyameoamqei";
    actual = solution.swapLexOrder("fixmfbhyutghwbyezkveyameoamqoi", [
        [8, 5],
        [10, 8],
        [4, 18],
        [20, 12],
        [5, 2],
        [17, 2],
        [13, 25],
        [29, 12],
        [22, 2],
        [17, 11]
    ]);
    console.assert(expected == actual);

    expected = "lyyvurrhgxyzvonohunlfejihesiebjwbyatfkrv";
    actual = solution.swapLexOrder("lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv", [
        [13, 23],
        [13, 28],
        [15, 20],
        [24, 29],
        [6, 7],
        [3, 4],
        [21, 30],
        [2, 13],
        [12, 15],
        [19, 23],
        [10, 19],
        [13, 14],
        [6, 16],
        [17, 25],
        [6, 21],
        [17, 26],
        [5, 6],
        [12, 24]
    ]);
    console.assert(expected == actual);

    expected = "z";
    actual = solution.swapLexOrder("z", []);
    console.assert(expected == actual);
})();