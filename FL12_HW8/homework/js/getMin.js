function getMin() {
    let smaller = 0;
    for (let i = 0; i < arguments.length; i++) {
        if(smaller>arguments[i]){
            smaller = arguments[i];
        }
    }
    return smaller;
}
console.log(getMin(1, 3, -1, 22, -33, 50, -45));