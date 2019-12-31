function makeNumber(num) {
   let Numbers = '';
    for (let i = 0; i < num.length; i++) {
        if(isFinite(num[i])){
            Numbers = Numbers + (num[i]);
        }
    }
    return Numbers;
}
console.log(makeNumber('rdgd0rgrgrgrgrgrg'));