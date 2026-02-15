const prompt=require('prompt-sync')({sigint:true})

// const day=prompt("enter the weekday")
// console.log(day);

// switch(day){
//     case 'Monday':console.log("its a weekday");
//                   break
//                    case 'Tuesday':console.log("its a weekday");
//                   break
//                    case 'Wednesday':console.log("its a weekday");
//                   break
//                    case 'Thursday':console.log("its a weekday");
//                   break
//                    case 'Friday':console.log("its a weekday");
//                   break
//                    case 'Saturday':console.log("its a weekday");
//                   break
//                    case 'Sunday':console.log("its a Holiday");
//                   break
//                   default:console.log("enter a valid weekday");
                  
    
// }

const weight=prompt("enter the weight")

switch(true){
    case weight>80:console.log("overwieght");
    break
    case weight>30:console.log("normal weight");
    break
    case weight<30:console.log("underweight");
    
    
}

// write a program to print "FIZZ" when a number is divisible by 3,"BUZZ" if number is divisible by 5 and "FIZZBUZZ" if number is divisible by 15
// write a program to input 3 numbers display second largest number and display them in any sorted order
// ex:input 23.12.25
// output: second largest number:23
// sorted order: 12 23 15

