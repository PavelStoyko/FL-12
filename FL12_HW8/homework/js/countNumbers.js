function countNumbers(str) {
    let objNumbers = {};
    for (let i = 0; i < str.length; i++) {
        if(isFinite(str[i])){
            if (objNumbers[str[i]]){
                objNumbers[str[i]]++
            } else {
                objNumbers[str[i]] = 1;
            }
        }
    }
    return objNumbers;
}
console.log(countNumbers('hehfuefhefgheufgiu1239049478745b873457'));