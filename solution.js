function possibleSums(coins, quantity) {
    var coinsSpreadOut = getCoinsSpreadOut(coins, quantity);
    var sum = 0;
    for (var i = 0; i < coins.length; i++) {
        grid.push(coinsSpreadOut);
    }
    return sum;
}
function getCoinsSpreadOut(coins, quantity) {
    var coinsSpreadOut = []; // [ '10', '50', '50', '100' ]
    coins.forEach(function (c, i) {
        var q = quantity[i];
        for (var i_1 = 0; i_1 < q; i_1++) {
            coinsSpreadOut.push(c);
        }
    });
    console.log(coinsSpreadOut);
    return coinsSpreadOut;
}
var coins = [10, 50, 100];
var quantity = [1, 2, 1];
console.log(possibleSums(coins, quantity));
//# sourceMappingURL=solution.js.map