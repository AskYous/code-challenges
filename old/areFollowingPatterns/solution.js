function areFollowingPatterns(strings, patterns) {
    var frequencyMapA = {};
    var frequencyMapB = {};
    for (var i = 0; i < strings.length; i++) {
        if (!frequencyMapA[strings[i]]) {
            frequencyMapA[strings[i]] = [];
            frequencyMapB[patterns[i]] = [];
        }
        // create the frequency map for current
        for (var j = 0; j < strings.length; j++) {
            var foundMatch = false;
            ;
            if (strings[j] == strings[i]) {
                frequencyMapA[strings[i]].push(j);
                foundMatch = true;
            }
            ;
            if (patterns[j] == patterns[i]) {
                frequencyMapB[patterns[i]].push(j);
                foundMatch = true;
            }
            ;
            if (foundMatch) {
                var left = frequencyMapA[strings[i]].join('');
                var right = frequencyMapB[patterns[i]].join('');
                if (left !== right) {
                    return false;
                }
            }
        }
    }
    return true;
}
var strings = ["cat", "dog", "dog"];
var patterns = ["a", "b", "b"];
console.log(areFollowingPatterns(strings, patterns));
//# sourceMappingURL=solution.js.map