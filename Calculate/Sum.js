
console.log("sum modulerendered")
let a =20;
let b=30;

const calculateSum=(a,b)=>{
    const sum= a+b;
    console.log("The sum is: ", sum);
    return sum;
}

let x='i am here;'


module.exports={calculateSum, x};