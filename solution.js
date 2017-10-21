function possibleSums(coins, quantity) {
    var sums = {};
    var distributedCoins = [];
    var binary = '';
    var nextBinary = '';
    var maxBinary = '';
    // create distributed coins and
    coins.forEach(function (coin, i) {
        for (var i2 = 0; i2 < quantity[i]; i2++) {
            distributedCoins.push(coin);
        }
    });
    // create binary
    distributedCoins.forEach(function () {
        binary += '0';
        maxBinary += '1';
    });
    nextBinary = binary;
    // create max binary
    for (var i = 0; nextBinary != maxBinary; i++) {
        nextBinary = incrementAndPadBinary(nextBinary);
        var currentSum = 0;
        for (var j = 0; j < nextBinary.length; j++) {
            if (nextBinary.charAt(nextBinary.length - j - 1) == '1') {
                currentSum += distributedCoins[distributedCoins.length - j - 1];
            }
        }
        sums[currentSum] = true;
    }
    return Object.keys(sums).length;
}
function incrementAndPadBinary(binary) {
    var incremented = (parseInt(binary, 2) + 1).toString(2);
    return incremented;
}
var coins = [10, 50, 100];
var quantity = [1, 2, 1];
console.log(possibleSums(coins, quantity));
//# sourceMappingURL=solution.js.map