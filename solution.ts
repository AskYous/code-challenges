function reverseNodesInKGroups(l: ListNode<number>, k: number): ListNode<number> {
    let stack: number[] = [];
    let answer: ListNode<number> = null;
    let answerIter: ListNode<number> = answer;
    let current: ListNode<number> = l;

    if (l == null) { return null; }
    for (let i = 0; current; i++) {
        stack.push(current.value);

        // when reached end of a k group
        if ((i + 1) % k == 0) {
            if (!answer) {
                answer = new ListNode<number>(stack.pop());
                answerIter = answer;
            }
            while (stack.length) {
                answerIter.next = new ListNode<number>(stack.pop());
                answerIter = answerIter.next;
            }
        }
        current = current.next;
    }

    // consider liknedlist length < k
    // stack is gaurenteed to have items if list length < k
    if (!answerIter) {
        answer = new ListNode<number>(stack[0]);
        for (let i = 1; i < stack.length; i++) {
            answer.next = new ListNode<number>(stack[i]);
            answerIter = answer.next;
        }
        return answer;
    }
    stack = stack.reverse();
    while (stack.length) {
        answerIter.next = new ListNode<number>(stack.pop());
        answerIter = answerIter.next;
    }
    return answer;
}

import { ListNode } from './ListNode';
import LinkedListHelper = require('./LinkedListHelper');
(function test() {
    const a = [1, 3];
    const k = 3;

    const testResult = reverseNodesInKGroups(LinkedListHelper.toLinkedList(a), k);
    console.log(LinkedListHelper.toArray(testResult));
})();

