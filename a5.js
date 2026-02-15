// w a p to check an element present in the array or not
const prompt=require('prompt-sync')({sigint:true})
let search=prompt("enter a number")
arr=[12,2,43,5,54,22,11,40]
console.log(arr.sort((a,b)=>a-b));
// find mid mid=math.floor(low+up/2)
// arr[mid]==search,item found,break
// arr[mid]<search,low=mid+1
// arr[mid]>search,low=mid-1
let low=0
let up=arr.length-1
found=false
let count=0
while(low<up){
count++
let mid=Math.floor((low+up)/2)
if(arr[mid]==search){
    console.log("item found at index");
    found=true
    break
}else if(arr[mid]<search){
    low=mid+1
}else{
    up=mid-1
}
}
console.log(count);
if(!found){
    console.log("item not found");
}



