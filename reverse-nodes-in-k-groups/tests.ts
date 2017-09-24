import reverseNodesInKGroups = require("./solution");
class ListNode<T> {
    value: T;
    next: ListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
const testCases = [
    { list: [1, 2, 3, 4, 5], k: 2 },
    { list: [1, 2, 3, 4, 5], k: 1 },
    { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], k: 3 }
];
testCases.forEach(testCase => {
    const linkedList = toLinkedList(testCase.list);
    console.log(testCase.list, testCase.k);
    reverseNodesInKGroups(linkedList, testCase.k);
    console.log('----');
});
function toLinkedList(list: number[]): ListNode<number> {
    const linkedList: ListNode<number> = { value: null, next: null };
    let current = linkedList;
    for (let i = 0; i < list.length; i++) {
        current.value = list[i];
        current.next = { value: list[i + 1], next: null };
        current = current.next;
    }
    return linkedList;
}
