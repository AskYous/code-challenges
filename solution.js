/**
 * Given a string str and array of pairs that indicates which indices in the 
 * string can be swapped, return the * lexicographically largest string that 
 * results from doing the allowed swaps. You can swap indices any number of 
 * times.
 * @param {string} str The string
 * @param {number[][]} pairs The pairs you're allowed to swap
 */
function swapLexOrder(str, pairs) {
    /** @type{Set<string>} */
    const possibilities = new Set([str]);
    for (let pair of pairs) {
        let first = Math.min(pair[0], pair[1]);
        let last = Math.max(pair[0], pair[1]);
        possibilities.add(swap(str, first, last));
        const copy = Array.from(possibilities);
        for (let pair2 of pairs) {
            for (let p of copy) {
                let first = Math.min(pair2[0], pair2[1]);
                let last = Math.max(pair2[0], pair2[1]);
                possibilities.add(swap(p, first, last));
            }
        }
    }

    const answer = Array.from(possibilities).sort()[possibilities.size - 1];
    return answer;
}

/**
 * Swaps a string's any two characters
 * @param {string} string The string to swap its indexes
 * @param {number} i1 the first character to swap
 * @param {number} i2 the second character to swap
 */
function swap(string, i1, i2) {
    return string.substring(0, i1 - 1) +
        string.charAt(i2 - 1) +
        string.substring(i1, i2 - 1) +
        string.charAt(i1 - 1) +
        string.substring(i2, string.length);
}

module.exports = {
    swap,
    swapLexOrder
};