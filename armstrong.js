// w a p to find a 3 digit number is armstrong or not

const prompt=require('prompt-sync')({sigint:true})

let number=prompt("Enter a number")
num=number
digit=0
sum=0
while(number>0){
    digit=number%10
    sum=sum+digit**3
    number=Math.floor(number/10)
}
console.log(num==sum?`${num} is armstrong`: `${num} is not armstrong`);


