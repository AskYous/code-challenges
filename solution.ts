function possibleSums(coins: number[], quantity: number[]): number {
    const coinsSpreadOut = getCoinsSpreadOut(coins, quantity);
}

function getCoinsSpreadOut(coins: number[], quantity: number[]): number[] {
    const coinsSpreadOut: number[] = []; // [ '10', '50', '50', '100' ]
    coins.forEach((c, i) => {
        const q = quantity[i];
        for (let i = 0; i < q; i++) {
            coinsSpreadOut.push(c);
        }
    });
    console.log(coinsSpreadOut);
    return coinsSpreadOut;
};

const coins = [10, 50, 100];
const quantity = [1, 2, 1];
console.log(possibleSums(coins, quantity));