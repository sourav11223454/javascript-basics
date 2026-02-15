// w a p to check the number is prime or not
const prompt = require('prompt-sync')({ sigint: true });

let number=prompt("enter a number")
let num=true
for(let i=2;i<Math.ceil(number/2);i++){  //math.ceil=4.5 to 5
    if(number%i==0){
        num=false
        
        break
    }
    else{
        num=true
        
    }
}

if(num){
    console.log("It is a prime number");
}else{
    console.log("It is not a prime number");
}



