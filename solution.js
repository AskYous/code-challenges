/**
 * Given a string str and array of pairs that indicates which indices in the 
 * string can be swapped, return the lexicographically largest string that 
 * results from doing the allowed swaps. You can swap indices any number of 
 * times.
 * @param {string} str The string
 * @param {number[][]} pairs The pairs you're allowed to swap
 */
function swapLexOrder(str, pairs) {
    const paths = getPaths(pairs);
}

// (2,7)(0,2)(5,7)(1,6)
// (0,2,5,7) and (1,6)

/**
 * Merges the pairs to group them by examing their possible paths.
 * @param {number[][]} pairs The pairs
 * @return {number[][]}
 */
function getConnectedPaths(pairs) {
    /** @type {number[][]} */
    let paths = [];

    for (let pair of pairs) {
        /** @type {Set<number>} */
        let path = new Set();
        for (let v of pair) {
            if (path.has(v)) {
                continue;
            }
            let adjacents = pairs.filter(p => p.find(x => x == v) !== undefined);
            let temp = adjacents.reduce((a, c) => {
                a.concat(c);
                return a;
            });
            temp.forEach(v => path.add(v));
            for (let p of path) {
                adjacents = pairs.filter(p2 => p2.find(x => x == p) !== undefined);
                temp = adjacents.reduce((a, c) => {
                    a.concat(c);
                    return a;
                });
                temp.forEach(v => path.add(v));
            }
            let added = false;
            paths.push(Array.from(path));
        }
    }
    return paths;
}

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
    swapLexOrder,
    getConnectedPaths
};