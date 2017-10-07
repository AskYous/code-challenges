"use strict";
exports.__esModule = true;
function mergeTwoLinkedLists(a, b) {
    var sorted;
    if (!a !== !b) {
        return a || b;
    } // if a or b is null, return the not-null one.
    if (!a && !b) {
        return null;
    }
    if (a.value > b.value) {
        sorted = b;
        sorted.next = mergeTwoLinkedLists(a, b.next);
    }
    else {
        sorted = a;
        sorted.next = mergeTwoLinkedLists(a.next, b);
    }
    return sorted;
}
var LinkedListHelper = require("./LinkedListHelper");
(function test() {
    var a = [1, 3];
    var b = [2, 4];
    var testResult = mergeTwoLinkedLists(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();
//# sourceMappingURL=solution.js.map