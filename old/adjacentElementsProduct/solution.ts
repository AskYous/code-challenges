function adjacentElementsProduct(inputArray: number[]): number {
    const products: number[] = [inputArray[0] * inputArray[1]];

    for (let i = 1; i < inputArray.length - 1; i++) {
        products.push(inputArray[i] * inputArray[i + 1]);
    }

    return Math.max(...products);

}
console.log(adjacentElementsProduct([1, 2, 3, 4, 5]) == 20);
