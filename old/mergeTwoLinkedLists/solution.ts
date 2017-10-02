function mergeTwoLinkedLists(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
    let sorted: ListNode<number>;
    if (!a !== !b) { return a || b } // if a or b is null, return the not-null one.
    if (!a && !b) { return null; }

    if (a.value > b.value) {
        sorted = b;
        sorted.next = mergeTwoLinkedLists(a, b.next)
    } else {
        sorted = a;
        sorted.next = mergeTwoLinkedLists(a.next, b)
    }

    return sorted;
}

import { ListNode } from './ListNode';
import LinkedListHelper = require('./LinkedListHelper');
(function test() {
    const a = [1, 3];
    const b = [2, 4];

    const testResult = mergeTwoLinkedLists(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
    console.log(LinkedListHelper.toArray(testResult));
})();

