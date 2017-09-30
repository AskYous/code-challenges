"use strict";
exports.__esModule = true;
var ListNode = require("./ListNode");
function addTwoHugeNumbers(a, b) {
    var sum;
    var answer;
    var iteratorA = a;
    var iteratorB = b;
    if (!a && !b) {
        return null;
    }
    else {
        if (!a) {
            return b;
        }
        if (!b) {
            return a;
        }
    }
    sum = String(a.value + b.value);
    if (sum.length > 4) {
        var leftNum = Number(sum.slice(0, 1));
        var rightNum = Number(sum.slice(1));
        answer = { value: leftNum, next: new ListNode(rightNum) };
    }
    else {
        answer = { value: Number(sum), next: addTwoHugeNumbers(a.next, b.next) };
    }
    return answer;
}
var LinkedListHelper = require("./LinkedListHelper");
var a = [9876, 5432, 1999];
var b = [1, 8001];
var testResult = addTwoHugeNumbers(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
console.log(LinkedListHelper.toArray(testResult));
//# sourceMappingURL=solution.js.map