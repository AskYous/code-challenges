function makeArrayConsecutive2(statues) {
    var min = Math.min.apply(Math, statues);
    var max = Math.max.apply(Math, statues);
    var missingNumCount = 0;
    for (var i = min; i < max; i++) {
        if (statues.indexOf(i) == -1) {
            missingNumCount++;
        }
    }
    return missingNumCount;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
//# sourceMappingURL=solution.js.map