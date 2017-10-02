"use strict";
exports.__esModule = true;
function reverseNodesInKGroups(l, k) {
    var stack = [];
    var answer = null;
    var answerIter = answer;
    var current = l;
    if (l == null) {
        return null;
    }
    for (var i = 0; current; i++) {
        stack.push(current.value);
        // when reached end of a k group
        if ((i + 1) % k == 0) {
            if (!answer) {
                answer = new ListNode_1.ListNode(stack.pop());
                answerIter = answer;
            }
            while (stack.length) {
                answerIter.next = new ListNode_1.ListNode(stack.pop());
                answerIter = answerIter.next;
            }
        }
        current = current.next;
    }
    // consider liknedlist length < k
    // stack is gaurenteed to have items if list length < k
    if (!answerIter) {
        answer = new ListNode_1.ListNode(stack[0]);
        for (var i = 1; i < stack.length; i++) {
            answer.next = new ListNode_1.ListNode(stack[i]);
            answerIter = answer.next;
        }
        return answer;
    }
    stack = stack.reverse();
    while (stack.length) {
        answerIter.next = new ListNode_1.ListNode(stack.pop());
        answerIter = answerIter.next;
    }
    return answer;
}
var ListNode_1 = require("./ListNode");
var LinkedListHelper = require("./LinkedListHelper");
(function test() {
    var a = [1, 3];
    var k = 3;
    var testResult = reverseNodesInKGroups(LinkedListHelper.toLinkedList(a), k);
    console.log(LinkedListHelper.toArray(testResult));
})();
//# sourceMappingURL=solution.js.map