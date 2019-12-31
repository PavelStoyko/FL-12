function addOne(x) {
    return x+1;
}
function pipe(input) {
    for (let i = 1; i < arguments.length; i++) {
        input = arguments[i](input);
    }
    return input;
}
console.log(pipe(2, addOne, addOne));