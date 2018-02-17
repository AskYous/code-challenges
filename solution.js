/**
 * Given a string str and array of pairs that indicates which indices in the 
 * string can be swapped, return the lexicographically largest string that 
 * results from doing the allowed swaps. You can swap indices any number of 
 * times.
 * @param {string} str The string
 * @param {number[][]} pairs The pairs you're allowed to swap
 */
function swapLexOrder(str, pairs) {
    /** @type{Set<string>} */
    const swaps = new Set([str]);
    /** @type{Set<string>} */
    const tempSwaps = new Set([str]);

    for (let pair of pairs) {
        for (let swap of swaps) {
            let first = Math.min(pair[0], pair[1]);
            let last = Math.max(pair[0], pair[1]);
            let swapped = swapAt(swap, first, last);
            swaps.add(swapped);
        }
    }
    for (let pair of pairs) {
        for (let swap of swaps) {
            first = Math.min(pair[0], pair[1]);
            last = Math.max(pair[0], pair[1]);
            swapped = swapAt(swap, first, last);
            swaps.add(swapped);
        }
    }

    const answer = Array.from(swaps).sort()[swaps.size - 1];
    return answer; // need dbca
}

// abdc & [[1,4], [3,4]]
// cbda [1,4]
// acdb, 

/**
 * Swaps a string's any two characters
 * @param {string} string The string to swap its indexes
 * @param {number} i1 the first character to swap
 * @param {number} i2 the second character to swap
 */
function swapAt(string, i1, i2) {
    return string.substring(0, i1 - 1) +
        string.charAt(i2 - 1) +
        string.substring(i1, i2 - 1) +
        string.charAt(i1 - 1) +
        string.substring(i2, string.length);
}

module.exports = {
    swapAt,
    swapLexOrder
};