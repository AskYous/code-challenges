function isListPalindrome(l) {
    var array = [];
    var current = l;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    current = l;
    while (current) {
        if (current.value !== array.pop()) {
            return false;
        }
        current = current.next;
    }
    return true;
}
var test = [1, 2, 3, 2, 1];
console.log(isListPalindrome(toLinkedList(test)));
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
//# sourceMappingURL=solution.js.map