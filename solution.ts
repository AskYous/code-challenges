import ListNode = require('./ListNode');
function addTwoHugeNumbers(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
    let sum: string;
    let answer: ListNode<number>;
    let iteratorA: ListNode<number> = a;
    let iteratorB: ListNode<number> = b;

    if (!a && !b) {
        return null;
    } else {
        if (!a) { return b; }
        if (!b) { return a; }
    }

    sum = String(a.value + b.value);

    if (sum.length > 4) {
        const leftNum: number = Number(sum.slice(0, 1));
        const rightNum: number = Number(sum.slice(1))
        answer = { value: leftNum, next: new ListNode<number>(rightNum) }
    } else {
        answer = { value: Number(sum), next: addTwoHugeNumbers(a.next, b.next) }
    }
    return answer;
}

import LinkedListHelper = require('./LinkedListHelper');
const a = [9876, 5432, 1999];
const b = [1, 8001];

const testResult = addTwoHugeNumbers(LinkedListHelper.toLinkedList(a), LinkedListHelper.toLinkedList(b));
console.log(LinkedListHelper.toArray(testResult));
