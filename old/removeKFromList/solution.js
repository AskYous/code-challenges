function removeKFromList(l, k) {
    if (l == null)
        return null;
    if (l.value == k) {
        return removeKFromList(l.next, k);
    }
    l.next = removeKFromList(l.next, k);
    return l;
}
function toArray(l) {
    var array = [];
    var current = l;
    while (current !== null) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}
function toLinkedList(array) {
    var l = { value: null, next: null };
    var temp = l;
    for (var i = 0; i < array.length - 1; i++) {
        temp.value = array[i];
        temp.next = { value: array[i + 1], next: null };
        temp = temp.next;
    }
    return l;
}
var testCase = toLinkedList([1, 2, 3, 4, 5]);
var k = 2;
console.log(toArray(testCase), k);
var answer = removeKFromList(testCase, k);
console.log(toArray(answer));
//# sourceMappingURL=solution.js.map