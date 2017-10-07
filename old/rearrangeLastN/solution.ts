import { ListNode } from './ListNode';
import ListNodeHelper = require('./LinkedListHelper');

function rearrangeLastN(l: ListNode<number>, n: number): ListNode<number> {
    const elements: number[] = [];
    let reversed: ListNode<number>;
    let current = l;

    if (!l) { return null; }
    if (!l.next || n == 0) { return l; }

    // populate stack
    while (current) {
        elements.push(current.value);
        current = current.next;
    }

    // create the first element in the reversed linked list
    reversed = new ListNode<number>(elements[elements.length - n]);
    current = reversed;

    // start the reversed linked list
    for (let i = elements.length - n + 1; i < elements.length; i++) {
        let element = elements[i];
        current.next = new ListNode<number>(element);
        current = current.next;
    }

    // get the rest of the elements of the linked list
    elements.slice(0, elements.length - n).forEach(element => {
        current.next = new ListNode<number>(element);
        current = current.next;
    });

    return reversed;

}

const test = rearrangeLastN(ListNodeHelper.toLinkedList([1, 2, 3, 4, 5]), 3);
// const test = rearrangeLastN(ListNodeHelper.toLinkedList([1, 2, 3, 4, 5, 6, 7]), 1);
console.log(ListNodeHelper.toArray(test));