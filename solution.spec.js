const solution = require("./solution");

let expected = "Doctor";
let actual = solution(3, 3);
console.assert(expected == actual);

expected = "Doctor";
actual = solution(4, 2);
console.assert(expected == actual);

expected = "Engineer";
actual = solution(1, 1);
console.assert(expected == actual);

expected = "Engineer";
actual = solution(25, 16777216);
console.assert(expected == actual);