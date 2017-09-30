import ListNode = require('./ListNode');
function addTwoHugeNumbers(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
    const DIGIT_LENGTH = 4;
    const stackA: number[] = [];
    const stackB: number[] = [];

    let sum: ListNode<number>;
    let nextA: number;
    let nextB: number;
    let carry: number = 0;

    (function makeSameLength(a2: ListNode<number>, b2: ListNode<number>): void {
        const aNextIsNull: boolean = (a2.next == null);
        const bNextIsNull: boolean = (b2.next == null);

        if (aNextIsNull && bNextIsNull) { return; }
        if (aNextIsNull && !bNextIsNull) {
            a = { value: 0, next: a };
            makeSameLength(a2, b2.next);
        }
        else if (!aNextIsNull && bNextIsNull) {
            b = { value: 0, next: b };
            makeSameLength(a2.next, b2);
        } else {
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
        let tempSum: string;
        let leftNumber: string;
        let rightNumber: string;

        tempSum = String(nextA + nextB + carry);

        if (tempSum.length > DIGIT_LENGTH) {
            carry = +tempSum.slice(0, 1);
            if (sum == null) {
                sum = new ListNode<number>(+tempSum.slice(1));
            } else {
                sum = {
                    value: +tempSum.slice(1),
                    next: sum
                };
            }
        } else {
            carry = 0;
            sum = {
                value: +tempSum,
                next: sum
            };
        }

        nextA = stackA.pop();
        nextB = stackB.pop();
    }
    return carry > 0 ? { value: carry, next: sum } : sum;
}

import LinkedListHelper = require('./LinkedListHelper');
(function test() {
    const a = [9876, 5432, 1999];
    const b = [1, 8001];

    const testResult = addTwoHugeNumbers(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();

