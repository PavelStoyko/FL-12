/*task 1*/
function convert() {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i]==='string'){
            newArr[i] = +arguments[i];
        } else if (typeof arguments[i]==='number'){
            newArr[i] = arguments[i].toString();
        }
    }
    return newArr;
}
// console.log(convert(1, '2', 3, 4, '5', '6'));
/*task 2 */
function executeForEach(arr, func){
    for (let i = 0; i < arr.length; i++) {
            func(arr[i]);
    }
}
// console.log(executeForEach([1,2,3,4], function (el){
//  console.log(el*2)
// }));
/*task3*/
function mapArray(arr, func) {
    let result = [];
    executeForEach(arr, function(el){
        result.push(func(+el))
    });
    return result;
}
// console.log(mapArray([2, '5', 8], function (el) {
//     return el+3;
// }));
/*task 4*/
function filterArray(arr, func) {
    let result = [];
    executeForEach(arr, function (el) {
        if (func(el)){
            result.push(el);
        }
    });
    return result;
}
// console.log(filterArray([2,5,8], function (el){
//     return el%2===0;
// }));
/*task 5 */
function flipOver(str) {
    let newStr='';
    for (let i = str.length-1; i>=0; i--) {
        newStr+=str[i];
    }
    return newStr;
}
// console.log(flipOver('hey world'));
/*task6*/
function makeListFromRange(arr) {
    if(arr[0]<arr[1]){
        let newArr =[];
        for (let i = arr[0]; i <= arr[1]; i++) {
            newArr.push(i);
        }
        return newArr;
    } else {
 return 'error!'; 
}
}
// console.log(makeListFromRange([2,10]));
/*task 7*/
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr, keyName) {
    let result = [];
    executeForEach(arr, function(el) {
        result.push(el[keyName]);
    });
    return result;
}
/*task 8*/
function substitute(arr) {
    return mapArray(arr, function(el) {
        const someNumber = 30;
        return el < someNumber ? '*' : el;
    });
}
/*task 9*/
function getPastDay(date, days) {
    const sec = 86400000;
    return new Date(date.getTime() - days * sec).getDate();
}
/*task 10*/
function formatDate(date) {
    const Leading0 = 10;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const s_hours = hours < Leading0 ? '0' + hours : '' + hours;
    const s_minutes = minutes < Leading0 ? '0' + minutes : '' + minutes;
    return `${year}/${month}/${day} ${s_hours}:${s_minutes}`;
}