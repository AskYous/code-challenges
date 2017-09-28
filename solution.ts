function removeKFromList(l: ListNode<number>, k: number): ListNode<number> {
    let current = l;
    let previous: ListNode<number>;

    while (current) {
        if (current.value == k) {
            current.value = current.next.value;
            current.next = current.next.next;
        }
        current = current.next;
    }
    console.log(toArray(l));
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
const testCase = toLinkedList([3, 1, 2, 3, 4, 5]);
const k = 3;
console.log(toArray(testCase), k);
removeKFromList(testCase, 3);