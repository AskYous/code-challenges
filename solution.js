function findProfession(level, pos) {
    let str = 'E';
    for (let i = 1; i < level; i++) {
        let nextLevel = '';
        for (let j = 0; j < str.length; j++) {
            nextLevel += str[j] == 'E' ? 'ED' : 'DE';
        }
        str = nextLevel;
    }
    return str[pos - 1] == 'D' ? 'Doctor' : 'Engineer';
}

module.exports = findProfession;