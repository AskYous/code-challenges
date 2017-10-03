function checkPalindrome(inputString: string): boolean {
    const arrayFrom = inputString.split('');
    const stack: string[] = [];
    // remove middle if odd number
    if (inputString.length % 2 !== 0) {
        arrayFrom.splice(Math.floor(inputString.length / 2), 1).join('');
        console.log(arrayFrom);
    }

    // populate stack with first half
    for (let i = 0; i < (arrayFrom.length / 2); i++) {
        stack.push(arrayFrom[i]);
    }

    for (let i = (arrayFrom.length / 2); i < arrayFrom.length; i++) {
        if (arrayFrom[i] !== stack.pop()) { return false; }
    }

    return true;
}
console.log(checkPalindrome('hlbeeykoqqqqokyeeblh'));