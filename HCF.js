// w a p to print HCF(highest common factor) of two numbers

const prompt=require('prompt-sync')({sigint:true})
let num1=prompt("enter number1: ")
let num2=prompt("enter number2: ")
digit = 0
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        digit = i
    }
}
console.log(`HCF is ${digit}`);