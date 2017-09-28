function removeKFromList(l: ListNode<number>, k: number): ListNode<number> {
    let current = l;
    let previous: ListNode<number> = null;

    // case of 0 nodes
    if (l == null) { return null; }

    // case of 1 node
    if (current.value == k && current.next == null) { return null; }

    // first nodes
    while (current.value == k) {
        if (current.next) {
            current.value = current.next.value;
            current.next = current.next.next;
        } else {
            return null;
        }
    }

    // at this point, current.value !== k and current.next !== null
    // middle nodes
    while (current.next) {
        if (current.value == k) {
            previous.next = current.next;
            current = previous.next;
        } else {
            previous = current;
            current = current.next;
        }
    }

    // the last node.
    if (previous.next.value == k) { previous.next = null; }

    return l;
}
function toArray(l: ListNode<number>) {
    const array = [];
    let current = l;
    while (current !== null) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}
function toLinkedList(array: any[]): ListNode<number> {
    const l = { value: null, next: null };
    let temp = l;

    for (let i = 0; i < array.length - 1; i++) {
        temp.value = array[i];
        temp.next = { value: array[i + 1], next: null };
        temp = temp.next;
    }
    return l;
}
const testCase = toLinkedList(null);
const k = -1000;
console.log(toArray(testCase), k);
const answer = removeKFromList(testCase, k);
console.log(toArray(answer));