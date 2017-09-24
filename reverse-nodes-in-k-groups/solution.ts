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
    const newSortedLinkedList: ListNode<number> = JSON.parse(JSON.stringify(linkedList));
    let current: ListNode<number> = newSortedLinkedList;

    // [1][2][3][4][5]

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
        let currentNode2: ListNode<number>;

        // get node before the sublist
        currentNode2 = linkedList;
        for (let i = 0; i < from - 1; i++) {
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
        for (let i = 0; i < tempArray.length - 1; i++) {
            tempArray[i].next = tempArray[i + 1];
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
    console.log(toArray(newSortedLinkedList));
    return newSortedLinkedList;
}
export = reverseNodesInKGroups;