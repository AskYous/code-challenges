import { ListNode } from './ListNode';
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
            const temp: ListNode<number> = new ListNode<number>(a.value);
            temp.next = a.next;
            a = new ListNode<number>(0);
            a.next = temp;
            makeSameLength(a2, b2.next);
        }
        else if (!aNextIsNull && bNextIsNull) {
            const temp: ListNode<number> = new ListNode<number>(b.value);
            temp.next = b.next;
            b = new ListNode<number>(0);
            b.next = temp;
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
                const temp: ListNode<number> = new ListNode<number>(sum.value);
                temp.next = sum.next;
                sum = new ListNode<number>(+tempSum.slice(1));
                sum.next = temp;
            }
        } else {
            carry = 0;
            if (sum == null) {
                sum = new ListNode<number>(+tempSum);
            } else {
                const temp: ListNode<number> = new ListNode<number>(sum.value);
                temp.next = sum.next;
                sum = new ListNode<number>(+tempSum);
                sum.next = temp;
            }
        }

        nextA = stackA.pop();
        nextB = stackB.pop();
    }
    if (carry > 0) {
        const answer = new ListNode<number>(carry);
        answer.next = sum;
        return answer;
    } else {
        return sum;
    }
}

import LinkedListHelper = require('./LinkedListHelper');
(function test() {
    const a = [123, 4, 5];
    const b = [100, 100, 100];

    const testResult = addTwoHugeNumbers(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();

