"use strict";
exports.__esModule = true;
var ListNode = require("./ListNode");
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
            a = { value: 0, next: a };
            makeSameLength(a2, b2.next);
        }
        else if (!aNextIsNull && bNextIsNull) {
            b = { value: 0, next: b };
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
                sum = new ListNode(+tempSum.slice(1));
            }
            else {
                sum = {
                    value: +tempSum.slice(1),
                    next: sum
                };
            }
        }
        else {
            carry = 0;
        }
        nextA = stackA.pop();
        nextB = stackB.pop();
    }
    return carry > 0 ? { value: carry, next: sum } : sum;
}
var LinkedListHelper = require("./LinkedListHelper");
(function test() {
    var a = [9876, 5432, 1999];
    var b = [1, 8001];
    var testResult = addTwoHugeNumbers(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();
//# sourceMappingURL=solution.js.map