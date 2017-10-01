"use strict";
exports.__esModule = true;
var ListNode_1 = require("./ListNode");
function addTwoHugeNumbers(a, b) {
    var DIGIT_LENGTH = 4;
    var stackA = [];
    var stackB = [];
    var sum;
    var nextA;
    var nextB;
    var carry = 0;
    (function makeSameLength(a2, b2) {
        var aNextIsNull = (a2.next == null);
        var bNextIsNull = (b2.next == null);
        if (aNextIsNull && bNextIsNull) {
            return;
        }
        if (aNextIsNull && !bNextIsNull) {
            var temp = new ListNode_1.ListNode(a.value);
            temp.next = a.next;
            a = new ListNode_1.ListNode(0);
            a.next = temp;
            makeSameLength(a2, b2.next);
        }
        else if (!aNextIsNull && bNextIsNull) {
            var temp = new ListNode_1.ListNode(b.value);
            temp.next = b.next;
            b = new ListNode_1.ListNode(0);
            b.next = temp;
            makeSameLength(a2.next, b2);
        }
        else {
            makeSameLength(a2.next, b2.next);
        }
    })(a, b);
    (function fillStack() {
        while (a) {
            stackA.push(a.value);
            a = a.next;
        }
        while (b) {
            stackB.push(b.value);
            b = b.next;
        }
    })();
    nextA = stackA.pop();
    nextB = stackB.pop();
    while (nextA != null) {
        var tempSum = void 0;
        var leftNumber = void 0;
        var rightNumber = void 0;
        tempSum = String(nextA + nextB + carry);
        if (tempSum.length > DIGIT_LENGTH) {
            carry = +tempSum.slice(0, 1);
            if (sum == null) {
                sum = new ListNode_1.ListNode(+tempSum.slice(1));
            }
            else {
                var temp = new ListNode_1.ListNode(sum.value);
                temp.next = sum.next;
                sum = new ListNode_1.ListNode(+tempSum.slice(1));
                sum.next = temp;
            }
        }
        else {
            carry = 0;
            if (sum == null) {
                sum = new ListNode_1.ListNode(+tempSum);
            }
            else {
                var temp = new ListNode_1.ListNode(sum.value);
                temp.next = sum.next;
                sum = new ListNode_1.ListNode(+tempSum);
                sum.next = temp;
            }
        }
        nextA = stackA.pop();
        nextB = stackB.pop();
    }
    if (carry > 0) {
        var answer = new ListNode_1.ListNode(carry);
        answer.next = sum;
        return answer;
    }
    else {
        return sum;
    }
}
var LinkedListHelper = require("./LinkedListHelper");
(function test() {
    var a = [123, 4, 5];
    var b = [100, 100, 100];
    var testResult = addTwoHugeNumbers(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();
//# sourceMappingURL=solution.js.map