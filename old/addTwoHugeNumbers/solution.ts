function addTwoHugeNumbersOld(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
    const DIGIT_LENGTH: number = 4;
    let aConverted = convertToHugeNum(a);
    let bConverted = convertToHugeNum(b);
    let sum = +aConverted + +bConverted;
    const answer = convertHugeNumToLL(sum);

    function convertToHugeNum(l: ListNode<number>): string {
        let current = l;
        let hugeNum: string = '';
        while (current) {
            hugeNum += toDigitStr(current.value.toString());
            current = current.next;
        }
        return hugeNum;
    }
    function convertHugeNumbToStr(number: number): string {
        if (number.toString().indexOf('e') == -1) { return number.toString(); }
        const exponent: number = getExponentOfHugeNumber(number);
        let temp = number;
        let hugeStr: string = '';
        if (exponent == 1) { return number.toString(); }

        for (let i = exponent; i > 0; i--) {
            const leftNum = temp.toString().slice(0, 1);
            const subtractBy = Math.pow(10, i) * Number(leftNum);
            hugeStr += leftNum;
            temp = temp - subtractBy;
            if (temp.toString().indexOf('e') == -1) {
                hugeStr += temp;
                // console.assert(Number(hugeStr) == number);
                return hugeStr;
            }
        }
    }
    function getExponentOfHugeNumber(number: number): number {
        const index = number.toString().indexOf('e+');
        if (index == -1) { return 1; }
        return Number(number.toString().slice(index + 2, number.toString().length));
    }
    function convertHugeNumToLL(number: number): ListNode<number> {
        let strForm = convertHugeNumbToStr(number);
        let ll: ListNode<number> = new ListNode<number>(null);

        const amountLeftOver = strForm.length % DIGIT_LENGTH;
        const current = ll;

        if (strForm.length <= DIGIT_LENGTH) {
            return new ListNode<number>(number);
        }
        for (let i = strForm.length; i >= DIGIT_LENGTH; i -= DIGIT_LENGTH) {
            const currentSet = strForm.slice(i - DIGIT_LENGTH, i);
            const next = new ListNode<number>(ll.value);
            next.next = ll.next;
            ll.value = Number(currentSet);
            ll.next = next.value == null ? null : next;
        }

        // end of the list
        if (amountLeftOver) {
            const temp = ll;
            ll = new ListNode<number>(Number(strForm.slice(0, amountLeftOver)));
            ll.value = Number(strForm.slice(0, amountLeftOver));
            ll.next = temp;
        }
        return ll;
    }
    function toDigitStr(number: string): string {
        if (number.length == DIGIT_LENGTH) { return number; }
        return toDigitStr(`0${number}`);
    }
    return answer;
}
