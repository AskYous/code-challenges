"use strict";
exports.__esModule = true;
var ListNode_1 = require("./ListNode");
var ListNodeHelper = require("./LinkedListHelper");
function rearrangeLastN(l, n) {
    var elements = [];
    var reversed;
    var current = l;
    if (!l) {
        return null;
    }
    if (!l.next || n == 0) {
        return l;
    }
    // populate stack
    while (current) {
        elements.push(current.value);
        current = current.next;
    }
    // create the first element in the reversed linked list
    reversed = new ListNode_1.ListNode(elements[elements.length - n]);
    current = reversed;
    // start the reversed linked list
    for (var i = elements.length - n + 1; i < elements.length; i++) {
        var element = elements[i];
        current.next = new ListNode_1.ListNode(element);
        current = current.next;
    }
    // get the rest of the elements of the linked list
    elements.slice(0, elements.length - n).forEach(function (element) {
        current.next = new ListNode_1.ListNode(element);
        current = current.next;
    });
    return reversed;
}
var test = rearrangeLastN(ListNodeHelper.toLinkedList([1, 2, 3, 4, 5]), 3);
// const test = rearrangeLastN(ListNodeHelper.toLinkedList([1, 2, 3, 4, 5, 6, 7]), 1);
console.log(ListNodeHelper.toArray(test));
//# sourceMappingURL=solution.js.map