// function addnum(a,b){
//     result=a+b
//     console.log(`${a} + ${b} = ${result}`);
// }
// addnum(34,25)

// const addnum=(a,b)=>a+b
// console.log(addnum(23,43));


// function addnum(a,b){
//     return result=a+b
// }
// console.log( addnum(34,25));

// w a p to find cube of a number using function
const prompt=require('prompt-sync')({sigint:true})
// function cube(x){
//     result=x**3
//     console.log(result);
// }
let x=prompt("enter a number")
// cube(x)
const cube=(x)=>(x**3)
console.log(cube(x));



// w a p to find a number is even or odd using function

// function checkEvenOdd(num) {
//     if (num % 2 == 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
const checkEvenOdd=(num)=>num%2==0?'even':'odd'
let num=prompt("enter a number")
console.log(checkEvenOdd(num));


 






