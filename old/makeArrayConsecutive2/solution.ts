function makeArrayConsecutive2(statues: number[]): number {
    const min: number = Math.min(...statues);
    const max: number = Math.max(...statues);

    let missingNumCount: number = 0;

    for (let i = min; i < max; i++) {
        if (statues.indexOf(i) == -1) { missingNumCount++; }
    }
    return missingNumCount;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));