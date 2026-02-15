// w a p to find a factorial of a number
const prompt=require('prompt-sync')({sigint:true})

let number=prompt("enter a number")
num=number
fact=1

// while(number>0){
//     fact=fact*number
//     number--
// }
// console.log(`factorial of ${num} is ${fact}`);

let i=1
while(i<=number){
    fact=fact*i
    i++
}
console.log(`factorial of ${num} is ${fact}`);

