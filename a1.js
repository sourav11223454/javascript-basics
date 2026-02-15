const days=['monday','tuesday','wednesday']
console.log(days);
console.log(typeof days);

console.log(days[1]);
console.log(days.length);

// display last element in an array
console.log(days[days.length-1]);
days[1]=7
console.log(days);
days[3]=9
console.log(days);

console.log("-------Using for loop--------");


for(let i=0;i<days.length;i++){
    console.log(days[i]);
    
}

console.log("-------Using for of loop--------");

for(let day of days){
    console.log(day);
    
}

console.log("-------Using for in loop--------");

for(let day in days){
    console.log(day);
    
}

// numArray=[10,2,32,41,6,11,72]
// find largest number

const numArray=[10,2,32,41,6,11,72]
let largest=numArray[0]
for(let i=0;i<numArray.length;i++){
    if(numArray[i]>largest){
        largest=numArray[i]
    }
}
console.log(`largest is ${largest}`);

// find the smallest
// const numArray=[10,2,32,41,6,11,72]
let smallest=numArray[0]
for(let i=0;i<numArray.length;i++){
    if(numArray[i]<smallest){
        smallest=numArray[i]
    }
}
console.log(`smallest number is:${smallest}`);

// find the total sum of all numbers

let sum=0
for(let num of numArray){
    sum+=num
}
console.log(`sum of all number is ${sum}`);


// insert an element in between 22 and 11
arr=[12,43,54,22,11,40]
let pos
for(let i=0;i<arr.length;i++){
    if(arr[i]==22 && arr[i+1]==11){
        pos=i+1
        break
    }
}
for(i=arr.length;pos<i;i--){
    arr[i]=arr[i-1]
}
arr[pos]=25
console.log(arr);








