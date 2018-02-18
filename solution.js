/**
 * Given a string str and array of pairs that indicates which indices in the 
 * string can be swapped, return the lexicographically largest string that 
 * results from doing the allowed swaps. You can swap indices any number of 
 * times.
 * @param {string} str The string
 * @param {number[][]} pairs The pairs you're allowed to swap
 */
function swapLexOrder(str, pairs) {
    if (str.length == 0 || pairs.length == 0) {
        return str;
    }
    const swaps = new Set();
    const paths = getConnectedPaths(pairs);

    for (let path of paths) {
        path = path.sort((a, b) => a - b);
        let chars = [];
        for (let v of path) {
            v--; // so annoying
            chars.push(str.charAt(v));
        }
        chars = chars.sort().reverse();
        for (let i = 0; i < chars.length; i++) {
            str = str.substr(0, path[i] - 1) + chars[i] + str.substr(path[i]);
        }
    }
    return str;
}

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
        if (paths.find(p => p.find(v2 => v2 == v))) {
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
module.exports = {
    swapLexOrder,
    getConnectedPaths
};