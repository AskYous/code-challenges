var myArray = [{ name: '0' }];
var myObject = { name: '0' };
function case1() {
    var temp = myArray[0];
    temp.name = '1'; // edits original
    console.log(myArray[0].name, temp.name);
}
function case2() {
    var temp = myObject;
    temp.name = '1'; // edits original
    console.log(myObject.name, temp.name);
}
function case3() {
    var temp = myObject; // edits original
    var temp2 = myArray[0]; // edits original
    modify(temp);
    modify(temp2);
    console.log(myArray[0], myObject, temp, temp2);
}
function modify(object) {
    object.name = '1'; // edits original
}
//# sourceMappingURL=copying.js.map