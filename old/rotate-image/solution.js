function rotateImage(a) {
    var rotatedImage = [];
    var dimension = a.length - 1;
    a.forEach(function (row) { return rotatedImage.push([]); });
    a.forEach(function (row, ri) { return row.forEach(function (value, ci) {
        rotatedImage[ci][dimension - ri] = value;
    }); });
    return rotatedImage;
}
console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//                       [7, 4, 1], [8, 5, 2], [9, 6, 3]  
//# sourceMappingURL=solution.js.map