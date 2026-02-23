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
// arr=[10,20,30,40]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// ------2-------
// find the largest number in an array
// lar=[5,12,3,19,8]
// let largest=0
// for(let i=0;i<lar.length;i++){
//     if(lar[i]>largest){
//         largest=lar[i]
//     }
// }console.log("largest:",largest);


// ------3-------
// find the smallest number in an array
// lar=[5,12,3,19,8]
// let smallest=lar[0]
// for(let i=0;i<lar.length;i++){
//     if(lar[i]<smallest){
//         smallest=lar[i]
//     }
// }console.log("smallest:",smallest);

// -------4--------
// sum of elements
// a=[10,20,30]
// let sum=0
// for(let i=0;i<a.length;i++){
//     sum+=a[i]
// }  console.log(sum);

// ------5-------
// count even & odd numbers
// b=[1,2,3,4,5]
// let countEven=0
// let countOdd=0
// for(let i=0;i<b.length;i++){
//     if(b[i]%2==0){
//         countEven++
//     }else{
//         countOdd++
//     }
// }
// console.log(`even: ${countEven}`);
// console.log(`odd: ${countOdd}`);


// --------DAY-7-------
// ---------1----------
// Find second largest element
// arr=[5,10,3,19,8]
// let largest=arr[0]
// let secondLargest=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secondLargest=largest
//         largest=arr[i]
//         if(arr[i]>largest){
//             secondLargest=arr[i]
//         }
//     }
// }
// console.log(`${secondLargest}`);

// --------2-------
// check whether an element is exists in array
// arr=[10,20,30,40]
// let search=10
// isfound=false
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==search){
//         isfound=true
//         break
//     }
// }console.log(isfound?"found":"not found");

// -------3--------
// count positive/negative/zero
// arr=[3,-1,0,5,-9]
// let pos=0,neg=0,zero=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         pos++
//     }else if(arr[i]<0){
//         neg++
//     }else{zero++}
// }console.log(`positive:${pos}`);
// console.log(`negative:${neg}`);
// console.log(`zero:${zero}`);

// -------4------
// reverse array
// arr=[10,20,30,40]
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// ------5------
// sum of even numbers
// arr=[1,2,3,4,5,6]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum+=arr[i]
//     }
// }console.log(`sum of even number is ${sum}`);

// array-methods
// -----1-----
// add & remove elements
// arr=[10,20,30]
// arr.push(40)
// console.log(arr);
// arr.unshift(5)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);

// -------2------
// replace element
// arr=[10,20,30,40]
// arr.splice(2,1,35);
// console.log(arr);

// -------3--------
// extract portion
// arr = [5,10,15,20,25,30]
// console.log(arr.slice(2,-1));

// -------4-------
// element existence check
// arr = [100,200,300,400]
// console.log(arr.includes(500)?'exists':'not exists');
// console.log(arr.indexOf(300));

// --------5---------
// insert without removing
// arr = [10,20,40,50]
// arr.splice(2,0,30)
// console.log(arr);

// ------6-----
// remove specific value
// arr = [10,20,30,40,50]
// arr.splice(1,1)
// console.log(arr);

// -----task-1=join()---
// array=['apple','banana','orange']
// console.log(array.join('|'));

// // ------task-2=forEach()-----
// a=[10,20,30]
// a.forEach(d=>console.log(d))

// // ----task-3=map()-----
// b=[1,2,3,4]
// console.log(b.map(d=>d**2));

// // ----task-4=filter()-----
// c=[5,12,8,130,44]
// console.log(c.filter(d=>d>10));

// // -----task-5=reduce()-----
// cd=[10,20,30,40]
// console.log(cd.reduce((sum,b)=>sum+b,0));

// // -----task-6=some()
// e=[3,7,11,18]
// console.log(e.some(d=>d%2==0)?"yes":"No");

// // -----task-7=find()
// f=[4,9,16,25]
// console.log(f.find(d=>d>10));

// // ------task-8=flat()
// g=[1,2,[3,4],[5,[6,7]]]
// console.log(g.flat(Infinity));

// // ------task-9=map()
// h=[10,15,20,25]
// console.log(h.map(d=>d%2==0?"even":"odd"));

// // -------task-10=filter()
// i=["cat","elephant","dog","tiger"]
// console.log(i.filter(d=>d.length>3));


// // ------DAY-8-------
// // -------1--------
// a=[1,2,3,4,5,6]
// console.log(a.reduce((sum,b)=>b%2==0?sum+b:sum,0));

// // -------2-------
// // multiply all numbers
// arr=[10,15,20,25]
// console.log(arr.reduce((sum,b)=>sum*b));

// // -------3-------
// // check if all numbers are positive
// b=[3,7,10,13]
// console.log(b.some(d=>d>0));

// // -------4-------
// // find first word with length>5
// c=["apple","banana","kiwi","fig"]
// console.log(c.find(d=>d.length>5));

// // ------5-----
// // check if all numbers are even
// d=[2,4,6,7,8]
// console.log(d.every(f=>f%2===0));

// // ------6-------
// // create new array->divide each no by 2
// e=[5,12,8,130,44]
// console.log(e.map(d=>d/2));

// // --------1--------
// // product of only even numbers
// a=[1,2,3,4,5,6]
// console.log(a.reduce((sum,b)=>b%2==0?sum*b:sum,1));

// // --------2-------
// // check if any number>30
// b=[10,15,20,25]
// console.log(b.some(d=>d>30));

// // ------3-------
// // length of first word>4
// c=["cat","elephant","dog","tiger"]
// console.log(c.find(d=>d.length>4).length);

// // ------4-------
// // sum of numbers>10
// d=[5,12,8,130,44]
// console.log(d.reduce((sum,b)=>b>10?sum+b:sum,0));

// ---------1--------
// Average of numbers > 10
// a=[5,12,8,130,44]
// console.log(a.reduce((sum,b)=>b>10?sum+b%b.length:sum,0));

// // -------2-------
// // Count of even numbers
// b=[1,2,3,4,5,6]
// console.log(b.find(d=>d%2==0).length);

// // ------3--------
// // Total characters count
// c=["apple","banana","kiwi","fig"]
// console.log(c.find(d=>d.length).length);

// // ------4-------
// // sum of even numbers greater than 10
// let even=a.reduce((sum,b)=>{
//     if(b>10&&b%2==0){
//         return sum+b
//     }
//     return sum
// },0)
// console.log(even);


// STRING-METHODS
// ------DAY-8-------
// a='javascript'
// console.log(a.toUpperCase());

// b='HELLO WORLD'
// console.log(b.toLowerCase());

// c='I Love Programming'
// console.log(c.includes('Love'));

// d="OpenAI"
// console.log(d.slice(4));

// e="apple,banana,mango"
// console.log(e.split());

// ---------DAY-9--------
// ---------1------------
// count vowels
// a='javascript'
// let vowels=['a','e','i','o','u']
// console.log(a.split('').filter(d=>vowels.includes(d)).length);

// // -------2--------
// // number of words
// b='i love programming'
// console.log(b.split(' ').length);

// // --------3--------
// // capitalise first letter only
// c="javascript is fun"
// console.log(c[0].toUpperCase()+c.slice(1));

// // --------4--------
// // Capitalize EVERY word
// d="I love programming"
// let result=d.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
// console.log(result);

// // -------5-------
// // replace '-'
// e="hello_world_javascript"
// console.log(e.split('_').join(' '));

// // -------6-------
// // reverse
// f="javascript"
// console.log(f.split('').reverse().join(''));

// // -------7-------
// g="javascript is fun"
// console.log(g.split(" ").join(''));

// // -----8-------
// // Replace "JS" → "JavaScript"
// h='I Love JS'
// console.log(h.replace('JS','Javascript'));


// // ------9------
// // find longest word
// i="apple banana mango"
// let split=i.split(' ')
// console.log(split.reduce((a,b)=>a.length>b.length?a:b));

// // ------10------
// // remove vowels
// j='javascript'
// let vowelss=['a','e','i','o','u']
// console.log(j.split('').filter(d=>vowels.includes(d)).join(''));

// // -------11------
// // count words
// k="I love programming"
// console.log(k.split(' ').join('').length);


// ---------DAY-10--------
//----------1----------
// accessing & modifying property
student = {
    name: "Sourav",
    marks: 75
}
console.log("name:",student.name);
if(student.marks>=75){
    console.log("grade : distinction");
}else if(student.marks>=60){
    console.log("grade:first class");
}else{
    console.log("grade:pass");
}

// -------2--------
product = {
    name: "Laptop",
    price: 50000
}
console.log(Object.assign(product,{discount:10}));

// ------3------
calculator = {
    substract(a,b) {
        return a-b
     },
    divide(a,b) { 
       return a/b
    }
}
console.log(calculator.substract(10,5));
console.log(calculator.divide(10,5));

// --------4--------
user = {
   username: "admin",
   password: "1234"
}
console.log(user.hasOwnProperty("email")?"it exists":"doesn't exists");

// ------5------
employee = {
    name: "Rahul",
    salary: 40000
}
if(employee.salary>=50000){
    console.log("salary category : high salary");
}else if(employee.salary>=30000){
    console.log("salary category : medium salary");
}else{
    console.log("salary category : low salary");
}

// --------6--------
employees = [
    {eid: 1, name: 'Rahul', dept: 'HR', salary: 25000},
    {eid: 2, name: 'Anita', dept: 'IT', salary: 60000},
    {eid: 3, name: 'Kiran', dept: 'Finance', salary: 45000},
    {eid: 4, name: 'Sneha', dept: 'IT', salary: 70000},
    {eid: 5, name: 'Amit', dept: 'HR', salary: 30000},
]
// Print employee names only
employees.forEach(d=>console.log(d.name))
// Print all IT department employees
console.log(employees.filter(d=>d.dept=='IT'));
// Print names of employees whose salary > 40000
let salaryname=employees.filter(d=>d.salary>40000)
salaryname.forEach(d=>console.log(d.name))
// Sort employees by salary (Low → High)
let sortsalary=employees.sort((a,b)=>a.salary-b.salary)
sortsalary.forEach(d=>console.log(d.name,d.salary))
// Find highest paid employee
console.log(employees.reduce((a,b)=>a.salary>b.salary?a:b).name);
// Find lowest paid employee
console.log(employees.reduce((a,b)=>a.salary<b.salary?a:b).name);
// Count number of employees in IT department
console.log(employees.filter(d=>d.dept=='IT').length);
// Calculate total salary expense
console.log(employees.reduce((sum,b)=>sum+b.salary,0));
// Print employees earning between 30000 & 65000
console.log(employees.filter(d=>d.salary<=65000 && d.salary>=30000));
// Check if ANY employee earns more than 80000
console.log(employees.some(d=>d.salary>80000));

// ---------7---------
orders = [
    {
        oid: 1,
        customer: "Rahul",
        items: [
            {name: "Laptop", price: 50000},
            {name: "Mouse", price: 500}
        ]
    },
    {
        oid: 2,
        customer: "Anita",
        items: [
            {name: "Phone", price: 30000},
            {name: "Charger", price: 800}
        ]
    },
    {
        oid: 3,
        customer: "Kiran",
        items: [
            {name: "Tablet", price: 20000}
        ]
    }
]
// Print customer names only
orders.forEach(d=>console.log(d.customer))
// Print ALL items from ALL orders
orders.map(d=>d.items).flat().forEach(d=>console.log(d.name))
// Calculate TOTAL revenue
let total=orders.map(d=>d.items).flat().reduce((sum,b)=>sum+b.price,0)
// Find MOST expensive item
let expensive=orders.map(d=>d.items).flat()
console.log(expensive.reduce((a,b)=>a.price>b.price?a:b).name);
// Print orders where ANY item price > 40000
orders.filter(order=>order.items.some(item=>item.price>40000)).forEach(order=>console.log(order.customer))
// Count TOTAL number of items
console.log(orders.map(d=>d.items).flat().length);
// Find customer who spent MOST money
let enriched = orders.map(order => {
    let total = order.items.reduce((sum,item)=>sum+item.price,0);
    return {
        customer: order.customer,
        totalSpent: total
    };
});
console.log(
    enriched.reduce((a,b)=>a.totalSpent>b.totalSpent?a:b).customer
);
// Print items costing less than 1000
orders.map(d=>d.items).flat().filter(d=>d.price<1000).forEach(d=>console.log(d.name))
// Check if ALL orders have at least 1 item
console.log(orders.some(d=>d.items.length>0));
// Create NEW array → all item names
console.log(orders.map(d=>d.items).flat().map(d=>d.name));


// ------8------
students = [
    {
        name: "Rahul",
        marks: [60, 70, 80]
    },
    {
        name: "Anita",
        marks: [90, 85, 88]
    },
    {
        name: "Kiran",
        marks: [35, 40, 30]
    }
]
// Print student names only
students.forEach(d=>console.log(d.name))
// Calculate TOTAL marks for EACH student
students.forEach(d=>{
    let totalmarks=d.marks.reduce((sum,b)=>sum+b,0)
    console.log(d.name,"=>",totalmarks);
})
// Find TOPPER
console.log(students.reduce((a,b)=>{
    let totalSumA=a.marks.reduce((sum,m)=>sum+m,0)
    let totalSumB=b.marks.reduce((sum,m)=>sum+m,0)
    return totalSumA>totalSumB?a:b
}).name);
// Find student with LOWEST marks
console.log(students.reduce((a,b)=>{
    let totalSumA=a.marks.reduce((sum,n)=>sum+n,0)
    let totalSumB=b.marks.reduce((sum,n)=>sum+n,0)
    return totalSumA<totalSumB?a:b
}).name);
// Students with Average ≥ 50
students.filter(d=>{
    let average=d.marks.reduce((sum,b)=>sum+b,0)/d.marks.length
   return average>=50
}).forEach(d=>console.log(d.name))
// Check if ANY student failed
console.log(students.some(d=>d.marks.some(mark=>mark<40)));
// Count TOTAL number of subjects
console.log(students.reduce((sum,student)=>sum + student.marks.length, 0));
//Find BEST average scorer
console.log(

    students.reduce((a,b) => {

        let avgA = a.marks.reduce((sum,n)=>sum+n,0) 
                   / a.marks.length;

        let avgB = b.marks.reduce((sum,n)=>sum+n,0) 
                   / b.marks.length;

        return avgA > avgB ? a : b;

    }).name

);












































































































        
        
        











