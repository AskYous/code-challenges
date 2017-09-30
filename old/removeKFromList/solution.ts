function removeKFromList(l: ListNode<number>, k: number): ListNode<number> {
    if (l == null) return null;
    if (l.value == k) { return removeKFromList(l.next, k); }
    l.next = removeKFromList(l.next, k);
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
// const testCase = toLinkedList([1, 2, 3, 4, 5]);
// const k = 2;
// console.log(toArray(testCase), k);
// const answer = removeKFromList(testCase, k);
// console.log(toArray(answer));