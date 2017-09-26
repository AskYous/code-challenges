function firstNotRepeatingCharacter(s) {
    // abacabad
    var temp = {};
    var charArray = s.split('');
    charArray.forEach(function (char) { return typeof temp[char] == 'number' ? temp[char] + 1 : 0; });
    for (var i = 0; i < charArray.length; i++) {
        var char = charArray[i];
        if (temp[char] == 1) {
            return char;
        }
    }
    return '_';
}
console.assert(firstNotRepeatingCharacter('abacabad') == 'c');
//# sourceMappingURL=copying.js.map