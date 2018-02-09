function possibleSums(coins, quantities) {
    var sums = new Set();
    for (var c = 0; c < coins.length; c++) {
        var coin = coins[c];
        var sumsOfThisCoin = new Set();
        /**
         * For 0 to coin's quantity
         */
        for (var q = 0; q <= quantities[c]; q++) {
            var newSum = coin * q;
            sumsOfThisCoin.add(newSum);
        }
        /**
         * For all the possible sums so far
         */
        if (sums.size == 0) {
            sumsOfThisCoin.forEach(function (s) { return sums.add(s); });
        }
        else {
            var sumsCopy = Array.from(sums);
            for (var _i = 0, _a = Array.from(sumsOfThisCoin); _i < _a.length; _i++) {
                var newSum = _a[_i];
                for (var _b = 0, _c = Array.from(sumsCopy); _b < _c.length; _b++) {
                    var oldSum = _c[_b];
                    sums.add(oldSum + newSum);
                }
            }
        }
    }
    return sums.size - 1;
}
/**
 *
 * 10
 * 10 10
 * 10 10 10
 * 10 10 10 10
 * 10 10 10 10 10
 *
 * 50
 * 50 50
 * 50 50 50
 *
 * 100
 * 100 100
 *
 * 500
 * 500 500
 */
var coins = [10, 50, 100, 500];
var quantities = [5, 3, 2, 2];
// 50 100 150
// 10 20 30 40 50 
console.log(possibleSums(coins, quantities));
//# sourceMappingURL=solution.js.map