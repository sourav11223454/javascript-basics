// 1.w a js code to print the fibonnaci series for a given number
// input:8
// output:0 1 1 2 3 5 8 13

// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// let a=0,b=1,temp
// console.log("fibonnaci series");
// for(let i=1;i<=number;i++){
//     console.log(a);
//     temp=a+b
//     a=b
//     b=temp
    
// }


// 2. w a js code to print the number of digit in a number 
// input:2345
// ouput: no of digits:4
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// count=0
// while(number>0){
//     count++
//     number=Math.floor(number/10)
// }
// console.log(`no of digits ${count}`);


// 3.grade system:
// input a score(0-100)
// print grade
// A:90+
// B: 80-89
//C: 70-79
//D: 60-69
// F: below 60

// const prompt=require('prompt-sync')({sigint:true})
// let score=prompt("input score")
// switch(true){
//     case score>=90:console.log("A");
//     break
//     case score>=80:console.log("B");
//     break
//     case score>=70:console.log("C");
//     break
//     case score>=60:console.log("D");
//     break
//     case score<60:console.log("E");
//     break
//     default:console.log("enter a valid score");
// }

// //4. Find the sum of all even numbers between 1 and 100.
// let sum=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum+=i
//     }
// }
// console.log(i);

// 5.write a program to find given number is armstrong or not
// input:153
// output:armstrong number
// input:1634
// output:armstrong number

const prompt=require('prompt-sync')({sigint:true})
let number=prompt("Enter a number")
num=number
temp=number
digit=0
sum=0
count=0
while(temp>0){
    count++
    temp=Math.floor(temp/10)
}
while(number>0){
    digit=number%10
    sum+=digit**count
    number=Math.floor(number/10)
}
console.log(num==sum?`${num} is armstrong`: `${num} is not armstrong`);









