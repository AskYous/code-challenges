"use strict";
exports.__esModule = true;
var reverseNodesInKGroups = require("./solution");
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var testCases = [
    { list: [1, 2, 3, 4, 5], k: 2 },
    { list: [1, 2, 3, 4, 5], k: 1 },
    { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], k: 3 }
];
testCases.forEach(function (testCase) {
    var linkedList = toLinkedList(testCase.list);
    console.log(testCase.list, testCase.k);
    reverseNodesInKGroups(linkedList, testCase.k);
    console.log('----');
});
function toLinkedList(list) {
    var linkedList = { value: null, next: null };
    var current = linkedList;
    for (var i = 0; i < list.length; i++) {
        current.value = list[i];
        current.next = { value: list[i + 1], next: null };
        current = current.next;
    }
    return linkedList;
}
//# sourceMappingURL=tests.js.map