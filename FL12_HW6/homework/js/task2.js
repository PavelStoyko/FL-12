let a = parseInt(prompt('Input side A for triangle', '1'), 10);
let b = parseInt(prompt('Input side B for triangle', '1'), 10);
let c = parseInt(prompt('Input side C for triangle', '1'), 10);
if(a ==='' || b==='' || c === '' || a ==='undefined' || b ==='undefined' || c ==='undefined'){
    alert('input values should be ONLY numbers');
} else if( a===0 || b ===0 || c ===0){
    alert('A triangle must have 3 sides with a positive definite length');
} else if( a<0 || b<0 || c<0){
    alert('Triangle doesn’t exist');
} else {
    if(a===b && b ===c){
        console.log('Equilateral triangle');
    } else if(a===b || a===c || b===c){
        console.log('Isosceles triangle');
    } else{
        console.log('Scalene triangle');
    }
}