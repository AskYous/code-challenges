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
            // check other row values
            for (var ci2 = 0; ci2 < grid.length; ci2++) {
                if (grid[ri][ci2] !== empty && ci !== ci2) {
                    if (grid[ri][ci2] == currentVal) {
                        return false;
                    }
                }
            }
            // check other col values
            for (var ri2 = 0; ri2 < grid.length; ri2++) {
                if (grid[ri2][ci] !== empty && ri !== ri2) {
                    if (grid[ri2][ci] == currentVal) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
console.log(sudoku2([
    ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
    ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
    ['7', '1', '.', '.', '2', '5', '.', '.', '.'],
    ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
    ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '.', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '.', '3', '.', '.', '.', '.']
]));
//# sourceMappingURL=solution.js.map