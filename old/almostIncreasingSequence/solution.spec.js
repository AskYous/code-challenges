const s = require("./solution").almostIncreasingSequence;

let expected = false
let actual = s([1, 2, 1, 2]);
console.assert(expected == actual);

expected = true;
actual = s([10, 1, 2, 3, 4, 5]);
console.assert(expected == actual);

expected=true;
actual=s([1, 2, 3, 4, 3, 6]);
console.assert(expected==actual);