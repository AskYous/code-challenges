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
    { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], k: 3 },
    { list: [239], k: 1 },
    { list: [1, 2, 3, 4], k: 2 },
    { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], k: 3 },
    { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], k: 4 },
    { list: [1000000000, -849483855, -1000000000, 376365554, -847904832], k: 4 },
    { list: [376365554, -340557143, -849483855, 810952169, -847904832], k: 4 },
    { list: [810952169, -849483855, -340557143, 376365554, -847904832], k: 2 },
    { list: [-503549928, -526666356, 262916773, -508129645, 992040586, 867794712, 24042453, -540165420, -417669299, 766910780], k: 2 },
    { list: [-526666356, -503549928, -508129645, 262916773, 867794712, 992040586, -540165420, 24042453, 766910780, -417669299], k: 8 },
    { list: [24042453, -540165420, 992040586, 867794712, 262916773, -508129645, -503549928, -526666356, 766910780, -417669299], k: 6 },
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