function possibleSums(coins: number[], quantity: number[]): number {
    let sums: { [key: number]: true } = {};
    let distributedCoins: number[] = [];
    let binary: string = '';
    let nextBinary: string = '';
    let maxBinary: string = '';


    // create distributed coins and
    coins.forEach((coin, i) => {
        for (let i2: number = 0; i2 < quantity[i]; i2++) {
            distributedCoins.push(coin);
        }
    });


    // create binary
    distributedCoins.forEach(() => {
        binary += '0';
        maxBinary += '1';
    });
    nextBinary = binary;

    // create max binary


    for (let i: number = 0; nextBinary != maxBinary; i++) {
        nextBinary = incrementAndPadBinary(nextBinary);
        let currentSum = 0;
        for (let j: number = 0; j < nextBinary.length; j++) {
            if (nextBinary.charAt(nextBinary.length - j - 1) == '1') {
                currentSum += distributedCoins[distributedCoins.length - j - 1];
            }
        }
        sums[currentSum] = true;
    }

    return Object.keys(sums).length;
}

function incrementAndPadBinary(binary: string): string {
    let incremented = (parseInt(binary, 2) + 1).toString(2);
    return incremented
}

const coins = [10, 50, 100];
const quantity = [1, 2, 1];

console.log(possibleSums(coins, quantity));