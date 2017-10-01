import { ListNode } from './ListNode';
function mergeTwoLinkedLists(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
    (function makeSameLength(a2: ListNode<number>, b2: ListNode<number>): void {
        const aNextIsNull: boolean = (a2.next == null);
        const bNextIsNull: boolean = (b2.next == null);

        if (aNextIsNull && bNextIsNull) { return; }
        if (aNextIsNull && !bNextIsNull) {
            const temp: ListNode<number> = new ListNode<number>(a.value);
            temp.next = a.next;
            a = new ListNode<number>(null);
            a.next = temp;
            makeSameLength(a2, b2.next);
        }
        else if (!aNextIsNull && bNextIsNull) {
            const temp: ListNode<number> = new ListNode<number>(b.value);
            temp.next = b.next;
            b = new ListNode<number>(null);
            b.next = temp;
            makeSameLength(a2.next, b2);
        } else {
            makeSameLength(a2.next, b2.next);
        }
    })(a, b);
}

import LinkedListHelper = require('./LinkedListHelper');
(function test() {
    const a = [1, 2, 3];
    const b = [4, 5, 6];

    const testResult = mergeTwoLinkedLists(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();

