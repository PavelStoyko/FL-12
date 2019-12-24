let a = parseInt(prompt('Put a (only number)', '1'), 10);
let b = parseInt(prompt('Put b (only number)', '1'), 10);
let c = parseInt(prompt('Put c (only number)', '1'), 10);
if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
        let d = b*b - 4*a*c;
        if (d>0){
            d = Math.sqrt(d);
            let x1 = (-b+d)/(2*a);
            let x2 = (-b-d)/(2*a);
            console.log('x1 = ', x1);
            console.log('x2 = ', x2);
        } else if (d===0){
            let x=-b/(2*a);
            console.log('x = '+x);
        } else{
            console.log('no solution  D<0');
        }
    } else {
        console.log('Invalid input data','');
    }