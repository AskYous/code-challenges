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
    let newSortedLinkedList: ListNode<number> = JSON.parse(JSON.stringify(linkedList));
    let current: ListNode<number> = newSortedLinkedList;

    // the algorithm
    for (let i = 0; current.next; i++) {
        let reachedEndOfSubset = (i != 0) && (i % k == 0);
        if (reachedEndOfSubset) {
            reverse(i - k, i);
        }
        current = current.next;
    }
    function reverse(from: number, to: number) {
        let tempArray: ListNode<number>[] = [];
        let initialFrom = from;
        let currentNode2: ListNode<number>;
        let lastNodeInSubList: ListNode<number>;

        // get node before the sublist
        currentNode2 = newSortedLinkedList;
        for (let i = 0; i < from - 1; i++) {
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
        for (let i = 0; i < tempArray.length - 1; i++) {
            tempArray[i].next = tempArray[i + 1];
        }

        // set the last node's next to the next node outside the sublist
        tempArray[tempArray.length - 1].next = lastNodeInSubList;

        if (initialFrom == 0) {
            newSortedLinkedList = tempArray[0];
        } else {
            let previousNode = getNthNode(initialFrom - 2);
            previousNode.next = tempArray[0];
        }
    }
    function toArray(ll: ListNode<number>) {
        const array = [];
        let current = ll;
        while (current.next) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    function getNthNode(n: number): ListNode<number> {
        let current = newSortedLinkedList;
        for (let i = 0; i < n; i++) {
            current = current.next;
        }
        return current;
    }
    console.log(toArray(newSortedLinkedList));
    return newSortedLinkedList;
}
export = reverseNodesInKGroups;