// let i=1

// while(i<=5){
//     console.log(i);
//     i++
    
// }

//write a program to print 1 to 10

// let a=1

// while(a<=10) {
//    console.log(a);
//     a++   
// }
//     console.log("---------------------------");

    //write a program to print even numbers bewteen 1-50


// let num = 1;

// while (num <= 50) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// }

//  console.log("---------------------------");

 //write a program to print 5 t0 1


// let x = 5;

// while (x >= 1) {
//   console.log(x);
//   x--;
// }
//  console.log("---------------------------");

//write a program to print total sum of all numbers from 1 to 10

// let z=1
// let sum=0
// while(z<=10){
//    sum = sum + z
//     z++
    
// }
// console.log("Total sum:", sum);

// write a program to print reverse a number i/p: 3456  o/p:6543

const prompt=require('prompt-sync')({sigint:true})

let number = prompt("enter a number ")
reverse = 0
digit = 0
while(number>0){
     digit = number%10
     reverse=reverse * 10 + digit
     number = Math.floor(number/10)
}
console.log(reverse);

