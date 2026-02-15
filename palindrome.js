// write a program to check the number is palindrome or not

const prompt=require('prompt-sync')({sigint:true})

let number = prompt("enter a number ")

num=number
reverse=0
digit=0

while(number>0){
    digit=number%10
    reverse=reverse*10+digit
    number=Math.floor(number/10)  // math.floor is used to remove the fraction of a number
}
console.log(num==reverse?`${num} is palindrome`:`${num} is not palindrome`);
