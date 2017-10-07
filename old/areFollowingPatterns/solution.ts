function areFollowingPatterns(strings: string[], patterns: string[]): boolean {
    type map = { [x: string]: number[] };
    const frequencyMapA: map = {};
    const frequencyMapB: map = {};

    for (let i = 0; i < strings.length; i++) {
        if (!frequencyMapA[strings[i]]) {
            frequencyMapA[strings[i]] = [];
            frequencyMapB[patterns[i]] = [];
        }
        // create the frequency map for current
        for (let j = 0; j < strings.length; j++) {
            let foundMatch: boolean = false;;
            if (strings[j] == strings[i]) {
                frequencyMapA[strings[i]].push(j);
                foundMatch = true;
            };
            if (patterns[j] == patterns[i]) {
                frequencyMapB[patterns[i]].push(j);
                foundMatch = true;
            };
            if (foundMatch) {
                const left = frequencyMapA[strings[i]].join('');
                const right = frequencyMapB[patterns[i]].join('');
                if (left !== right) {
                    return false;
                }
            }
        }

    }

    return true;
}
const strings = ["cat", "dog", "dog"];
const patterns = ["a", "b", "b"];
console.log(areFollowingPatterns(strings, patterns));
