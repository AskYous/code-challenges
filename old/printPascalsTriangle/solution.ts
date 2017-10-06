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
    for (var ir = 1; ir < n; ir++) {

        // create first column
        values[ir] = []; // create the array
        values[ir][0] = 1;

        for (var ic = 1; ic < ir + 1; ic++) {
            const leftParent: number = values[ir - 1][ic - 1];
            const rightParent: number = values[ir - 1][ic];
            const currentValue = (leftParent || 0) + (rightParent || 0);
            values[ir][ic] = currentValue;
        }
    }

    // printing
    for (var i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}