num=4;

if(num<10){
    console.log(`${num} is less than 10`);
    
}

// truthy operator(&&)=alternative of if
num<10 && console.log(`${num} is less than 10`);


age=40

if(age>=18){
    console.log("eligible for voting");
    
}
else{
    console.log("not eligible for voting");
    
}
age>=18 ?console.log("eligible for voting"):console.log
("not eligible for voting");

// ---------OR--------

console.log(age>=18? "eligible for voting": "not eligible for voting");




// w.a.p to check a number is +ve or -negative

n=-2
if(n>0){
    console.log(`${n} is a positive number`);
    
}
else if(n<0){
    console.log(`${n} is a negative number`);
    
}
else{
    console.log('zero');
    
}

// w a p to find largest among 2 numbers

a=10
b=1
if(a>b){
    console.log(`${a} is the largest`);
    
}
else if(a<b){
    console.log(`${b} is the largest`);
    
}
else{
    console.log("both are equal");
    
}
