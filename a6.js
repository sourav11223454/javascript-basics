arr=[7,56,2,9,11,56,23]

arr.forEach(element => console.log(element))
arr.forEach(element => element>20 && console.log(element))

data=arr.filter(num=>num>20)
console.log(data);
console.log("----------");
console.log(arr.filter(num=>num%2==0));
console.log("----------");

console.log(arr.map(num=>num**2));
console.log(arr.map(num=>num<20?num-1:num+1));

numArray=[10,2,32,41,6,11,72]
// find largest number
// find smallest number
// find total sum of all numbers

console.log(numArray.reduce((a,b)=>a<b?a:b));
console.log(numArray.reduce((a,b)=>a>b?a:b));
console.log(numArray.reduce((a,b)=>a+b));




