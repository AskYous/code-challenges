function possibleSums(coins: number[], quantities: number[]): number {
    const sums = new Set<number>();

    for (let c = 0; c < coins.length; c++) {
        const coin = coins[c];
        const sumsOfThisCoin = new Set<number>();

        /**
         * For 0 to coin's quantity
         */
        for (let q = 0; q <= quantities[c]; q++) {
            const newSum = coin * q;
            sumsOfThisCoin.add(newSum);
        }

        /**
         * For all the possible sums so far
         */
        if (sums.size == 0) {
            sumsOfThisCoin.forEach(s => sums.add(s));
        } else {
            const sumsCopy = Array.from(sums);
            for (let newSum of Array.from(sumsOfThisCoin)) {
                for (let oldSum of Array.from(sumsCopy)) {
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
const coins = [10, 50, 100, 500];
const quantities = [5, 3, 2, 2];

// 50 100 150
// 10 20 30 40 50 



console.log(possibleSums(coins, quantities));