function isCryptSolution(crypt, solution) {
    var encrypted = [];
    var sum = 0;
    var lastWord;
    encrypted = crypt.map(function (word) { return word.split('').map(function (char) { return solution.filter(function (x) { return x[0] == char; })[0][1]; }).join(''); });
    lastWord = encrypted[encrypted.length - 1];
    if (lastWord[0] == '0' && lastWord.length > 1) {
        return false;
    }
    for (var i = 0; i < encrypted.length - 1; i++) {
        var current = encrypted[i];
        if (current[0] == '0' && current.length > 1) {
            return false;
        }
        sum += Number(current);
    }
    return sum == Number(encrypted[encrypted.length - 1]);
}
console.log(isCryptSolution(["A", "A", "A"], [["A", "0"]]));
//# sourceMappingURL=solution.js.map