function adjacentElementsProduct(inputArray) {
    var products = [inputArray[0] * inputArray[1]];
    for (var i = 1; i < inputArray.length - 1; i++) {
        products.push(inputArray[i] * inputArray[i + 1]);
    }
    return Math.max.apply(Math, products);
}
console.log(adjacentElementsProduct([1, 2, 3, 4, 5]) == 20);
//# sourceMappingURL=solution.js.map