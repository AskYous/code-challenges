const c = require('./solution').getConnectedPaths;

let expected = [
    [0, 2, 7, 5],
    [1, 6]
];
let actual = c([
    [0, 2],
    [5, 7],
    [2, 7],
    [1, 6]
]);
test(expected, actual);

expected = [
    [1, 3, 4]
];
actual = c([
    [1, 4],
    [3, 4]
]);
test(expected, actual);

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
test(expected, actual);

function test(p1, p2) {
    p1 = p1.sort();
    p2 = p2.sort();
    p1.forEach((p, i) => p1[i] = p.sort());
    p2.forEach((p, i) => p2[i] = p.sort());
    for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p1[i].length; j++) {
            console.assert(p1[i][j] == p2[i][j]);
        }
    }
}