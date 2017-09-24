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
    var current = linkedList;
    // the algorithm
    for (var i = 0; current.next; i++) {
        var reachedEndOfSubset = (i != 0) && (i % k == 0);
        if (reachedEndOfSubset) {
            console.log(toArray(linkedList));
            reverse(i - k, i);
        }
        current = current.next;
    }
    function reverse(from, to) {
        var tempArray = [];
        var initialFrom = from;
        var currentNode2;
        var lastNodeInSubList;
        // get node before the sublist
        currentNode2 = linkedList;
        for (var i = 0; i < from; i++) {
            currentNode2 = currentNode2.next;
        }
        // push the rest of the sublist into the temp array
        for (; from < to; from++) {
            tempArray.push(currentNode2);
            currentNode2 = currentNode2.next;
        }
        lastNodeInSubList = currentNode2;
        // reverse
        tempArray = tempArray.reverse();
        // set all the 'next' values of the nodes in the sublist
        for (var i = 0; i < tempArray.length - 1; i++) {
            tempArray[i].next = tempArray[i + 1];
        }
        // set the last node's next to the next node outside the sublist
        tempArray[tempArray.length - 1].next = lastNodeInSubList;
        if (initialFrom == 0) {
            linkedList = tempArray[0];
        }
        else {
            var previousNode = getNthNode(initialFrom - 1);
            previousNode.next = tempArray[0];
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
    function getNthNode(n) {
        var current = linkedList;
        for (var i = 0; i < n; i++) {
            current = current.next;
        }
        return current;
    }
    console.log(toArray(linkedList));
    return linkedList;
}
module.exports = reverseNodesInKGroups;
//# sourceMappingURL=solution.js.map