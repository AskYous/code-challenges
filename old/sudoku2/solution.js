function sudoku2(grid) {
    var dimension = grid[0].length; // aka 9
    var sqrt = Math.sqrt(dimension); // aka 9
    var empty = '.';
    for (var ri = 0; ri < grid.length; ri++) {
        for (var ci = 0; ci < grid.length; ci++) {
            var currentVal = grid[ri][ci];
            var pivot = { ri: 0, ci: 0 };
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
            // check its square
            // get starting position of its square
            for (var i = ri; i > 0; i--) {
                if (i % sqrt == 0) {
                    pivot.ri = i;
                    break;
                }
                ;
            }
            for (var i = ci; i > 0; i--) {
                if (i % sqrt == 0) {
                    pivot.ci = i;
                    break;
                }
                ;
            }
            if (pivot.ri !== ri && pivot.ci !== ci) {
                if (grid[pivot.ri][pivot.ci] == currentVal) {
                    return false;
                }
            }
            for (var ri2 = pivot.ri + 1; ri2 % sqrt !== 0; ri2++) {
                for (var ci2 = pivot.ci + 1; ci2 % sqrt !== 0; ci2++) {
                    if (grid[ri2][ci2] == currentVal && (ri2 !== ri && ci2 !== ci)) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
console.log(sudoku2([
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."]
]));
//# sourceMappingURL=solution.js.map