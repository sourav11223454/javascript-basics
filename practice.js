// -------DAY-1----------
// -------1-----
// for(let i=1;i<=20;i++){
//     console.log(i);
// }

// let i=1
// while(i<=20){
//     console.log(i);
//     i++
// }
// ----------2--------
// print all even numbers from one to 50
// let a=1
// while(a<=50){
//     if(a%2==0){
//         console.log(a)
//     }
//     a++
// }

// ---------3----------
// find the sum of numbers from 1 to n
// const prompt=require('prompt-sync')({sigint:true})
// let n=prompt("enter a number")
// let sum=0
// for(let i=1;i<=n;i++){
//     sum+=i
// }if(n<=0){
//     console.log("enter a positive number");
// }else{
//     console.log(sum);
    
// }

// --------4---------
// given a number,count how many digits it has
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// digit=0
// while(number>0){
//     digit++
//     number=Math.floor(number/10)
// }
// console.log(`number of digits is:${digit}`);

// ---------5--------
// check whether a number is palindrome
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// num=number
// digit=0
// reverse=0
// while(number>0){
//     digit=number%10
//     reverse=reverse*10+digit
//     number=Math.floor(number/10)
// }
// console.log(num==reverse?"palindrome":"not palindrome");

// --------6--------
// print this pattern
// *
// **
// ***
// ****
// for(let row=1;row<=5;row++){
//     rowconstent=""
//     for(let col=1;col<=row;col++){
//         rowconstent+=" *"
//     }
//     console.log(rowconstent);
    
// }

// ---------DAY-2---------
// --------1---------
// create a function that prints number from 1 to n

// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function print(number){
// for(i=1;i<=number;i++){
//      console.log(i);}
// }
// print(number)

// -------2--------
// create a function that checks if a number is even or odd
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function evenodd(number){
//     if(number%2==0){
//         console.log("even");        
//     }else{
//         console.log("odd");
//     }
// }
// evenodd(number)

// -------3--------
// create a function that returns the sum of numbers from 1 to N
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function add(number){
//     let sum=0
//     if(number<=0){
//         console.log("enter a valid number");
//     }else{

//     for(i=1;i<=number;i++){
//         sum+=i
//     }
//             console.log(sum);
// }
// }
// add(number)

// -------4------
// create a function that returns the number of digits
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function count(number){
//     let digit=0
//     while(number>0){
//         digit++
//         number=Math.floor(number/10)
//     }
//     console.log(digit);
    
// }
// count(number)

// -------5-------
// create a function that checks the number is palindrome or not
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function palindrome(number){
//     let digit=0
//     let reverse=0
//     let num=number
//     while(number>0){
//         digit=number%10
//         reverse=reverse*10+digit
//         number=Math.floor(number/10)
//     }
//     console.log(num==reverse?"palindrome":"not palindrome");
// }
// palindrome(number)

// -------6------
// print following pattern using function
// *
// **
// ***
// ****
// function pattern(a){
//     for(let row=1;row<=5;row++){
//         rowcontent=""
//         for(let col=1;col<=row;col++){
//             rowcontent+=" *"
//         }
//         console.log(rowcontent);
        
//     }
// }
// pattern(4)
// ------7-----
// Create a function that finds the middle number among three numbers
// (Not smallest, not largest).
// function middle(a,b,c){
//     if((a>b && a<c) || (a<b && a>c)){
//         console.log(`middle number is:${a}`);
//     }
//     else if((b>a && b<c )|| (b<a && b>c)){
//                 console.log(`middle number is:${b}`);
//     }
//         else if((c>a && c<b) || (c<a && c>b)){
//                 console.log(`middle number is:${c}`);
//     }else{
//         console.log("no middle number");
        
//     }
// }
// middle(1000,800,560)


// -------DAY-3-------
// --------1---------
// write a function that finds the largest number among three numbers
// const prompt=require('prompt-sync')({sigint:true})
// let num1=prompt("enter first number")
// let num2=prompt("enter second number")
// let num3=prompt("enter third number")
// function largest(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         console.log(`${num1} is the largest`);
//     }else if(num2>num1 && num2>num3){
//         console.log(`${num2} is the largest`);
//     }else if(num3>num1 && num3>num2){
//         console.log(`${num3} is the largest`);
//     }else{
//         console.log("enter valid numbers");
//     }
// }
// largest(num1,num2,num3)

// -------2---------
// create a function that checks whether a number is :
// -positive
// -negative
// -zero
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function check(number){
//     if(number>0){
//         console.log("it is a positive number");
//     }else if(number<0){
//         console.log("it is a negative number");
//     }else if(number==0){
//         console.log("the number is zero");
//     }else{
//         console.log("enter a valid number");
        
//     }
// }
// check(number)

// -------3-------
// Create a function that checks whether a year is a leap year.
// const prompt=require('prompt-sync')({sigint:true})
// let year=prompt("enter a year")
// function leapyear(year){
//     if(year%4==0 && year%100!==0 || year%400==0){
//         console.log(`${year} is a leap year`);
        
//     }else{
//         console.log(`${year} is not a leap year`);
        
//     }
// }
// leapyear(year)

// ------4-------
// Create simple calculator
// const prompt=require('prompt-sync')({sigint:true})
// let a=Number(prompt("enter first number"))
// let b=Number(prompt("enter second number"))
// let operator=prompt("Choose an operator:addition substraction multiplication division: ")
// function calculate(a,b,operator){
//     switch(operator){
//         case 'addition':return(a+b)
//         break
//         case 'substraction':return a-b
//         break
//         case 'multiplication':return a*b
//         break
//         case 'division':return a/b
//         break
//     }
// }
// console.log(calculate(a,b,operator));

// --------5-------
// Create a function that checks whether three numbers form a valid triangle
// const prompt=require('prompt-sync')({sigint:true})
// let a=Number(prompt("enter the first number"))
// let b=Number(prompt("enter the second number"))
// let c=Number(prompt("enter the third number"))
// function triangle(a, b, c) {
//     if (
//         a > 0 && b > 0 && c > 0 &&
//         a + b > c &&
//         a + c > b &&
//         b + c > a
//     ) {
//         console.log("it will form a valid triangle");
//     } else {
//         console.log("it will not form a valid triangle");
//     }
// }

// triangle(a,b,c);


// -------DAY-4---------
// ---------1----------
// Create a function that finds the smallest number among three numbers
// const prompt=require('prompt-sync')({sigint:true})
// let num1=prompt("enter first number")
// let num2=prompt("enter second number")
// let num3=prompt("enter third number")
// function smallest(num1,num2,num3){
//     if(num1<num2 && num1<num3){
//         console.log(`${num1} is the smallest`);
//     }else if(num2<num1 && num2<num3){
//         console.log(`${num2} is the smallest`);
//     }else if(num3<num1 && num3<num2){
//         console.log(`${num3} is the smallest`);
        
//     }else{
//         console.log("enter valid number");
        
//     }
// }
// smallest(num1,num2,num3)

// -------2--------
// create a grade calculator
// const prompt=require('prompt-sync')({sigint:true})
// let mark=prompt('enter your mark')
// function grade(mark){
//     switch(true){
//         case mark>=75:console.log("distinction");
//         break
//         case mark>=60:console.log("first class");
//         break
//         case mark>=50:console.log("second class");
//         break
//         case mark>=35:console.log("pass");
//         break
//         case mark<35:console.log("fail");
//         break
//     }
// }
// grade(mark)
        
// ---------3---------
// create function that checks whether the number is even posiive or even negative or odd positive or odd negative or zero
// const prompt=require('prompt-sync')({sigint:true})
// let number=prompt("enter a number")
// function check(number){
//     if(number==0){
//         console.log("zero");
        
//     }else if(number<0 && number%2==0){
//         console.log("even negative");
        
//     }else if(number<0 && number%2!=0){
//         console.log("odd negative");
        
//     }else if(number>0 && number %2==0){
//         console.log("even positive");
        
//     }else if(number>0 && number%2!=0){
//         console.log("odd positive");
        
//     }else{
//         console.log("enter a valid number");
        
//     }
// }
// check(number)

// -------4--------
// create a function to perform operators
// const prompt=require('prompt-sync')({sigint:true})
// let a=Number(prompt("enter first number"))
// let b=Number(prompt("enter second number"))
// let operator=prompt("choose an operator: + - * / ")
// function calculate(a,b,operator){
//     switch(operator){
//         case '+':return a+b
//         break
//         case '-':return a-b
//         break
//         case '*':return a*b
//         break
//         case '/':return a/b
//         break
//     }
// }
// console.log(calculate(a,b,operator));

// ----------DAY-5---------
// --------1---------
// create a function that takes one character and prints
// uppercase/lowercase/digit/special character
// const prompt=require('prompt-sync')({sigint:true})
// let input=prompt("enter input")
// function typecheck(input){
//     if(input>='A' && input<='Z'){
//         console.log("Uppercase");
        
//     }
//      else if(input>='a' && input<='z'){
//         console.log("Lowercase");
        
//     }
//      else if(input>='0' && input<='9'){
//         console.log("Digit");
        
//     }
//     else{
//         console.log("Special Character");
        
//     }
// }
// typecheck(input)

// -------2-------
// create a function that calculates final price based on amount
// amount>=5000->20% discount
// amount>=3000->10% discount
// amount>=1000->5% discount
// amount below 1000->no discount\
// const prompt=require('prompt-sync')({sigint:true})
// let amount=Number(prompt("enter amount"))
// function discount(amount){
//     if(amount>=5000){
//         let amt=20/100*amount
//         amt=amount-amt
//         console.log(amt);
//     }else if(amount>=3000){
//         amt=10/100*amount
//         amt=amount-amt
//         console.log(amt);
//     }else if(amount>=1000){
//         amt=5/100*amount
//         amt=amount-amt
//         console.log(amt);
//     }else{
//         console.log(amount);
        
//     }
// }
// discount(amount)

// --------DAY-6---------
// ---------1---------
// given an array,print all elements
arr=[10,20,30,40]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// ------2-------
// find the largest number in an array
lar=[5,12,3,19,8]
let largest=0
for(let i=0;i<lar.length;i++){
    if(lar[i]>largest){
        largest=lar[i]
    }
}console.log("largest:",largest);


// ------3-------
// find the smallest number in an array
lar=[5,12,3,19,8]
let smallest=lar[0]
for(let i=0;i<lar.length;i++){
    if(lar[i]<smallest){
        smallest=lar[i]
    }
}console.log("smallest:",smallest);

// -------4--------
// sum of elements
a=[10,20,30]
let sum=0
for(let i=0;i<a.length;i++){
    sum+=a[i]
}  console.log(sum);

// ------5-------
// count even & odd numbers
b=[1,2,3,4,5]
let countEven=0
let countOdd=0
for(let i=0;i<b.length;i++){
    if(b[i]%2==0){
        countEven++
    }else{
        countOdd++
    }
}
console.log(`even: ${countEven}`);
console.log(`odd: ${countOdd}`);




        
        
        











