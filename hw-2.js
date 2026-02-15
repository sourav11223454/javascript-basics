// write a program to input 3 numbers display second largest number and display them in any sorted order
// const prompt=require('prompt-sync')({sigint:true})
// const num1=prompt("Enter the first number")
// const num2=prompt("Enter the second number")
// const num3=prompt("Enter the third number")

// switch(true){
//     case num1>num2 && num1<num3 || num1<num2 && num1>num3:console.log("second largest number is",num1);
//     break
//     case num2>num1 && num2<num3 || num2<num1 && num2>num3:console.log("second largest number is",num2);
//     break
//     case num3>num1 && num3<num2 ||num3<num1 && num3>num2:console.log("second largest number is",num3);
//     break
// }
num1=48
num2=39
num3=12
if(num1>num2 && num1<num3 || num1<num2 && num1>num3){
    console.log(`second largest number is ${num1}`);
    
}
else if(num2>num1 && num2<num3 || num2<num1 && num2>num3){
        console.log(`second largest number is ${num2}`);
}
else if(num3>num1 && num3<num2 ||num3<num1 && num3>num2){
        console.log(`second largest number is ${num3}`);
}
else{
    console.log("give a number");
    
}
if(num1<=num2 && num1<=num3){
    if(num2<=num3){
        console.log("sorted numbers",num1,num2,num3);
    }
    else{
        console.log("sorted numbers",num1,num3,num2);
        
    }
}
else if(num2<=num1 && num2<=num3){
    if(num1<=num3){
        console.log("sorted numbers",num2,num1,num3);
    }
    else{
        console.log("sorted numbers",num2,num3,num1);
        
    }
}
else {
    if (num1 <= num2) {
        console.log("sorted numbers", num3, num1, num2);
    } else {
        console.log("sorted numbers", num3, num2, num1);
    }
}