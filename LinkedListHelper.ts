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

export function toLinkedList(array: any[]): ListNode<any> {
    if (array.length == 0) { return null; }
    return {
        value: array[0],
        next: toLinkedList(array.slice(1))
    }
}