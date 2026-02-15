// write a program to print "FIZZ" when a number is divisible by 3,"BUZZ" if number is divisible by 5 and "FIZZBUZZ" if number is divisible by 15
// n=16

// if(n%3==0 && n%5==0){
//     console.log("FIZZBUZZ");
    
// }

// else if(n%3==0){
//     console.log("FIZZ");
    
// }
// else if(n%5==0){
//     console.log("BUZZ");
    
// }
// else{
//     console.log("the number is not divisible by 3,5,15");
    
// }

const prompt=require('prompt-sync')({sigint:true})

const number=prompt("Enter a number")
switch(true){
    case number%15==0:console.log('FIZZBUZZ');
    break
    case number%3==0:console.log('FIZZ');
    break
    case number%5==0:console.log('BUZZ');
    break
    default:console.log('the number is not divisibe by 3,5,15');
}