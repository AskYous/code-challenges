function sudoku2(grid) {
    var dimension = grid[0].length; // aka 9
    var empty = '.';
    for (var ri = 0; ri < grid.length; ri++) {
        for (var ci = 0; ci < grid.length; ci++) {
            var currentVal = grid[ri][ci];
            var otherRowValues = [];
            var otherColValues = [];
            var otherSquareValues = [];
            if (currentVal == empty) {
                continue;
            }
            // get other col values
            for (var ci2 = 0; ci2 < grid.length; ci2++) {
                if (grid[ri][ci2] !== empty && ci !== ci2) {
                    otherRowValues.push(grid[ri][ci2]);
                }
            }
            for (var val in otherRowValues) {
                if (val == currentVal) {
                    return false;
                }
            }
        }
    }
    return true;
}
console.log(sudoku2([
    ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
    ['.', '.', '.', '.', '2', '.', '.', '.', '.'],
    ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
    ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
    ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '.', '3', '.', '.', '.', '.']
]));
//# sourceMappingURL=solution.js.map