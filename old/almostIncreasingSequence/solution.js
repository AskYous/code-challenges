/**
 * 
 * @param {number[]} sequence 
 */
function almostIncreasingSequence(sequence) {
    // 1. Find an element that's less than it's previous neighbor
    // 2. remove that element
    // 3. return arrayIsSorted
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            const temp1 = [...sequence];
            const temp2 = [...sequence];

            let passed = true;

            temp1.splice(i, 1);
            temp2.splice(i - 1, 1);

            for (i = 1; i < temp1.length; i++) {
                if (temp1[i] <= temp1[i - 1]) {
                    passed = false;
                    break;
                }
            }

            if (!passed) {
                for (i = 1; i < temp2.length; i++) {
                    if (temp2[i] <= temp2[i - 1]) {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}

module.exports = {
    almostIncreasingSequence
};