// w a p to find following pattern
//  input : 2      3      4       5
//  output: 24    369    4936     ?
// logic : 12*2   123*3  1234*4

const prompt=require('prompt-sync')({sigint:true})

let number=prompt("enter a number")
i=1
num=0


while(i<=number){
     num=num*10+i
     i++

}
console.log(num*number);
