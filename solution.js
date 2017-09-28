function removeKFromList(l, k) {
    var current = l;
    var previous = null;
    // case of 0 nodes
    if (l == null) {
        return null;
    }
    // case of 1 node
    if (current.value == k && current.next == null) {
        return null;
    }
    // first nodes
    while (current.value == k) {
        if (current.next) {
            current.value = current.next.value;
            current.next = current.next.next;
        }
        else {
            return null;
        }
    }
    // at this point, current.value !== k and current.next !== null
    // middle nodes
    while (current.next) {
        if (current.value == k) {
            previous.next = current.next;
            current = previous.next;
        }
        else {
            previous = current;
            current = current.next;
        }
    }
    // the last node.
    if (previous.next.value == k) {
        previous.next = null;
    }
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
var testCase = toLinkedList(null);
var k = -1000;
console.log(toArray(testCase), k);
var answer = removeKFromList(testCase, k);
console.log(toArray(answer));
//# sourceMappingURL=solution.js.map