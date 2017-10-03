function checkPalindrome(inputString) {
    var arrayFrom = inputString.split('');
    var stack = [];
    // remove middle if odd number
    if (inputString.length % 2 !== 0) {
        arrayFrom.splice(Math.floor(inputString.length / 2), 1).join('');
        console.log(arrayFrom);
    }
    // populate stack with first half
    for (var i = 0; i < (arrayFrom.length / 2); i++) {
        stack.push(arrayFrom[i]);
    }
    for (var i = (arrayFrom.length / 2); i < arrayFrom.length; i++) {
        if (arrayFrom[i] !== stack.pop()) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome('hlbeeykoqqqqokyeeblh'));
//# sourceMappingURL=solution.js.map