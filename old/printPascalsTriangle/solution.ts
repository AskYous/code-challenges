// Print out the first n lines of pascal's triangle
// For example if n = 6

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// 1 5 10 10 5 1

function printPascalsTriangle(n: number) {
    const values: number[][] = []
    if (n >= 0) {
        values[0] = [1];
        console.log(1);
    }

    // building the rows
    for (var row = 1; row < n; row++) {

        // create first column
        values[row] = []; // create the array
        values[row][0] = 1;

        for (var col = 1; col < row + 1; col++) {
            const leftParent: number = values[row - 1][col - 1];
            const rightParent: number = values[row - 1][col];
            const currentValue = (leftParent || 0) + (rightParent || 0);
            values[row][col] = currentValue;
        }
    }

    // printing
    for (var i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}