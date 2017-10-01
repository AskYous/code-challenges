import { ListNode } from './ListNode';
/**
 * Converts a ListNode to an array.
 * @param listNode the linked list to convert
 */
export function toArray(listNode: ListNode<any>): any[] {
    const array = [];
    let current = listNode;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}

/**
 * Converts an array to a linked list
 * @param array the array to convert
 */
export function toLinkedList(array: any[]): ListNode<any> {
    if (array.length == 0) { return null; }
    return {
        value: array[0],
        next: toLinkedList(array.slice(1))
    }
}