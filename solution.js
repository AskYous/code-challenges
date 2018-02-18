/**
 * Given a string str and array of pairs that indicates which indices in the 
 * string can be swapped, return the lexicographically largest string that 
 * results from doing the allowed swaps. You can swap indices any number of 
 * times.
 * @param {string} str The string
 * @param {number[][]} pairs The pairs you're allowed to swap
 */
function swapLexOrder(str, pairs) {
    const swaps = new Set();
    const paths = getConnectedPaths(pairs);
    for (let path of paths) {
        for (path2 of paths) {
            for (let v1 of path) {
                for (let v2 of path2) {
                    const swap = swapAt(str, v1, v2);
                    swaps.add(swap);
                }
            }
        }
    }
    return Array.from(swaps).sort().reverse()[0];
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

    /** @type {Set<number>} */
    let vertices = new Set(pairs.reduce((a, c) => {
        a = a.concat(c);
        return a
    }));

    for (let v of vertices) {
        if (paths.find(p => p.find(v2 => v2 == v)) !== undefined) {
            continue;
        }
        let path = [v];
        for (let v of path) {
            for (let pair of pairs) {
                if (path.includes(pair[0]) && path.includes(pair[1])) continue;
                if (pair.includes(v)) {
                    path.push(pair.find(x => x !== v));
                }
            }
        }
        paths.push(path);
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
    if (i1 == i2) return string;
    const j1 = Math.min(i1, i2);
    const j2 = Math.max(i1, i2);
    const swap = string.substring(0, j1 - 1) +
        string.charAt(j2 - 1) +
        string.substring(j1, j2 - 1) +
        string.charAt(j1 - 1) +
        string.substring(j2, string.length);
    return swap;
}

module.exports = {
    swapAt,
    swapLexOrder,
    getConnectedPaths
};