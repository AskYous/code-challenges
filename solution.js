function containsCloseNums(nums, k) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
}
var nums = [0, 1, 2, 3, 5, 2];
var k = 5;
console.log(containsCloseNums(nums, k));
//# sourceMappingURL=solution.js.map