function isCryptSolution(crypt: string[], solution: string[][]): boolean {
    let encrypted: string[] = [];
    let sum: number = 0;
    let lastWord: string;
    encrypted = crypt.map(word => word.split('').map(char => solution.filter(x => x[0] == char)[0][1]).join(''));
    lastWord = encrypted[encrypted.length - 1];
    if (lastWord[0] == '0' && lastWord.length > 1) { return false; }
    for (let i = 0; i < encrypted.length - 1; i++) {
        const current = encrypted[i];
        if (current[0] == '0' && current.length > 1) { return false; }
        sum += Number(current);
    }
    return sum == Number(encrypted[encrypted.length - 1]);
}

console.log(isCryptSolution(["A", "A", "A"], [["A", "0"]]));