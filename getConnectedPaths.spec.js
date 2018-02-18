const c = require('./solution').getConnectedPaths;

let expected = [
    [0, 2, 5, 7],
    [1, 6]
];
let actual = c([
    [0, 2],
    [5, 7],
    [2, 7],
    [1, 6]
]);
console.assert(expected.sort() == actual.sort());

expected = [1, 3, 4];
actual = c([
    [1, 4],
    [3, 4]
]);
console.assert(expected.sort() == actual.sort());

expected = [
    [1, 3, 6, 8],
    [2, 7],
]
actual = c([
    [1, 3],
    [6, 8],
    [3, 8],
    [2, 7]
]);
console.assert(expected.sort() == actual.sort());