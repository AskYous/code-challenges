"use strict";
exports.__esModule = true;
/**
 * Converts a ListNode to an array.
 * @param listNode the linked list to convert
 */
function toArray(listNode) {
    var array = [];
    var current = listNode;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}
exports.toArray = toArray;
/**
 * Converts an array to a linked list
 * @param array the array to convert
 */
function toLinkedList(array) {
    if (array.length == 0) {
        return null;
    }
    return {
        value: array[0],
        next: toLinkedList(array.slice(1))
    };
}
exports.toLinkedList = toLinkedList;
//# sourceMappingURL=LinkedListHelper.js.map