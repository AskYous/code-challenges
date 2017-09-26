function sudoku2(grid: string[][]): boolean {
    const dimension: number = grid[0].length; // aka 9
    const empty = '.';

    for (let ri = 0; ri < grid.length; ri++) {
        for (let ci = 0; ci < grid.length; ci++) {
            const currentVal = grid[ri][ci];
            const pivot: { ri: number, ci: number } = { ri: 0, ci: 0 };

            if (currentVal == empty) { continue; }

            // check other row values
            for (let ci2 = 0; ci2 < grid.length; ci2++) {
                if (grid[ri][ci2] !== empty && ci !== ci2) {
                    if (grid[ri][ci2] == currentVal) {
                        return false;
                    }
                }
            }

            // check other col values
            for (let ri2 = 0; ri2 < grid.length; ri2++) {
                if (grid[ri2][ci] !== empty && ri !== ri2) {
                    if (grid[ri2][ci] == currentVal) {
                        return false;
                    }
                }
            }

            // check its square
            // get starting position of its square
            for (let i = ri; i > 0; i--) {
                if (i % Math.sqrt(dimension) == 0) {
                    pivot.ri = i;
                    break;
                };
            }
            for (let i = ci; i > 0; i--) {
                if (i % Math.sqrt(dimension) == 0) {
                    pivot.ci = i;
                    break;
                };
            }
        }
    }
    return true;
}

console.log(sudoku2([
    ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']
]));