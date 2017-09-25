// Definition for singly-linked list:
class ListNode<T> {
    value: T;
    next: ListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

function reverseNodesInKGroups(linkedList: ListNode<number>, k: number) {
    let current: ListNode<number> = linkedList;

    if (k == 1) { return toArray(linkedList) }

    // the algorithm
    for (let i = 1; current; i++) {
        let reachedEndOfSubset = i % k == 0;
        if (reachedEndOfSubset) {
            reverse(i - k, i);
        }
        current = current.next;
    }
    function reverse(from: number, to: number) {
        let tempArray: ListNode<number>[] = [];
        let initialFrom = from;
        let currentNode2: ListNode<number>;
        let previousNode: ListNode<number>;
        let lastNodeInSubList: ListNode<number>;

        // get node before the sublist
        currentNode2 = linkedList;
        for (let i = 0; i < from; i++) {
            currentNode2 = currentNode2.next;
        }

        // push the rest of the sublist into the temp array
        for (; from < to && currentNode2; from++) {
            tempArray.push(currentNode2);
            previousNode = currentNode2;
            currentNode2 = currentNode2.next;
        }

        // reverse
        tempArray = tempArray.reverse();

        // set all the 'next' values of the nodes in the sublist
        for (let i = 0; i < tempArray.length - 1; i++) {
            tempArray[i].next = tempArray[i + 1];
        }

        // set the last node's next to the next node outside the sublist
        tempArray[tempArray.length - 1].next = lastNodeInSubList;

        if (initialFrom == 0) {
            linkedList = tempArray[0];
        } else {
            // toArray(linkedList);
            let previousNode = getNthNode(initialFrom - 1);
            previousNode.next = tempArray[0];
        }
    }
    function toArray(ll: ListNode<number>): number[] {
        const array = [];
        let current = ll;
        while (current.next) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    function getNthNode(n: number): ListNode<number> {
        let current = linkedList;
        for (let i = 0; i < n; i++) {
            current = current.next;
        }
        return current;
    }
    console.log(toArray(linkedList));
    return linkedList;
}
export = reverseNodesInKGroups;