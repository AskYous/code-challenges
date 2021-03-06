function addTwoHugeNumbersOld(a, b) {
    var DIGIT_LENGTH = 4;
    var aConverted = convertToHugeNum(a);
    var bConverted = convertToHugeNum(b);
    var sum = +aConverted + +bConverted;
    var answer = convertHugeNumToLL(sum);
    function convertToHugeNum(l) {
        var current = l;
        var hugeNum = '';
        while (current) {
            hugeNum += toDigitStr(current.value.toString());
            current = current.next;
        }
        return hugeNum;
    }
    function convertHugeNumbToStr(number) {
        if (number.toString().indexOf('e') == -1) {
            return number.toString();
        }
        var exponent = getExponentOfHugeNumber(number);
        var temp = number;
        var hugeStr = '';
        if (exponent == 1) {
            return number.toString();
        }
        for (var i = exponent; i > 0; i--) {
            var leftNum = temp.toString().slice(0, 1);
            var subtractBy = Math.pow(10, i) * Number(leftNum);
            hugeStr += leftNum;
            temp = temp - subtractBy;
            if (temp.toString().indexOf('e') == -1) {
                hugeStr += temp;
                // console.assert(Number(hugeStr) == number);
                return hugeStr;
            }
        }
    }
    function getExponentOfHugeNumber(number) {
        var index = number.toString().indexOf('e+');
        if (index == -1) {
            return 1;
        }
        return Number(number.toString().slice(index + 2, number.toString().length));
    }
    function convertHugeNumToLL(number) {
        var strForm = convertHugeNumbToStr(number);
        var ll = new ListNode(null);
        var amountLeftOver = strForm.length % DIGIT_LENGTH;
        var current = ll;
        if (strForm.length <= DIGIT_LENGTH) {
            return new ListNode(number);
        }
        for (var i = strForm.length; i >= DIGIT_LENGTH; i -= DIGIT_LENGTH) {
            var currentSet = strForm.slice(i - DIGIT_LENGTH, i);
            var next = new ListNode(ll.value);
            next.next = ll.next;
            ll.value = Number(currentSet);
            ll.next = next.value == null ? null : next;
        }
        // end of the list
        if (amountLeftOver) {
            var temp = ll;
            ll = new ListNode(Number(strForm.slice(0, amountLeftOver)));
            ll.value = Number(strForm.slice(0, amountLeftOver));
            ll.next = temp;
        }
        return ll;
    }
    function toDigitStr(number) {
        if (number.length == DIGIT_LENGTH) {
            return number;
        }
        return toDigitStr("0" + number);
    }
    return answer;
}
//# sourceMappingURL=solution.js.map