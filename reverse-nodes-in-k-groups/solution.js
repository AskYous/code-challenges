"use strict";
// Definition for singly-linked list:
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
function reverseNodesInKGroups(linkedList, k) {
    var newSortedLinkedList = JSON.parse(JSON.stringify(linkedList));
    var current = newSortedLinkedList;
    // [1][2][3][4][5]
    // the algorithm
    for (var i = 0; current.next; i++) {
        var reachedEndOfSubset = (i != 0) && (i % k == 0);
        if (reachedEndOfSubset) {
            reverse(i - k, i);
        }
        current = current.next;
    }
    function reverse(from, to) {
        var tempArray = [];
        var currentNode2;
        // get node before the sublist
        currentNode2 = linkedList;
        for (var i = 0; i < from - 1; i++) {
            currentNode2 = currentNode2.next;
        }
        // push the rest of the sublist into the temp array
        for (; from < to; from++) {
            tempArray.push(currentNode2);
            currentNode2 = currentNode2.next;
        }
        // push the node that's after the sublist into the array
        tempArray.push(currentNode2.next);
        // reverse
        tempArray = tempArray.reverse();
        // set all the 'next' values of the nodes in the sublist
        for (var i = 0; i < tempArray.length - 1; i++) {
            tempArray[i].next = tempArray[i + 1];
        }
    }
    function toArray(ll) {
        var array = [];
        var current = ll;
        while (current.next) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    console.log(toArray(newSortedLinkedList));
    return newSortedLinkedList;
}
module.exports = reverseNodesInKGroups;
//# sourceMappingURL=solution.js.map