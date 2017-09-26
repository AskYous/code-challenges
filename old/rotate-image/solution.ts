function rotateImage(a: number[][]): number[][] {
    const rotatedImage: number[][] = [];
    const dimension = a.length - 1;

    a.forEach(row => rotatedImage.push([]));
    a.forEach((row, ri) => row.forEach((value, ci) => {
        rotatedImage[ci][dimension - ri] = value;
    }));
    return rotatedImage;
}


console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//                       [7, 4, 1], [8, 5, 2], [9, 6, 3] 