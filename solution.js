function findProfession(level, pos) {
    const tree = new Tree(true, 1, level);
    const absPos = Math.pow(2, level - 1) + (pos - 2);
    const answer = findNthChildAtLevel(tree, absPos);
    return answer ? "Engineer" : "Doctor";
}

function findNthChildAtLevel(tree, n, i = 0) {
    if (tree == null) return;
    if (i == n) {
        return tree.value;
    }
    const left = findNthChildAtLevel(tree.leftChild, n, (2 * i) + 1);

    if (left == null) return findNthChildAtLevel(tree.rightChild, n, (2 * i) + 2);
    else return left;
}

class Tree {
    constructor(rootValue, row = 1, max) {
        this.value = rootValue;
        if (row < max) {
            this.leftChild = new Tree(rootValue, row + 1, max);
            this.rightChild = new Tree(!rootValue, row + 1, max);
        }
    }
}

module.exports = findProfession;