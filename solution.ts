function sudoku2(grid: string[][]): boolean {
    const dimension: number = grid[0].length; // aka 9
    const empty = '.';

    for (let ri = 0; ri < grid.length; ri++) {
        for (let ci = 0; ci < grid.length; ci++) {
            const currentVal = grid[ri][ci];
            const otherRowValues: string[] = [];
            const otherColValues: string[] = [];
            const otherSquareValues: string[] = [];

            if (currentVal == empty) { continue; }

            // get other col values
            for (let ci2 = 0; ci2 < grid.length; ci2++) {
                if (grid[ri][ci2] !== empty && ci !== ci2) {
                    otherRowValues.push(grid[ri][ci2]);
                }
            }

            for (let val in otherRowValues) {
                if (val == currentVal) { return false; }
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