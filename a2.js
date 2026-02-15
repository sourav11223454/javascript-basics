// w a p to check an element present in the array or not
arr=[12,43,54,22,11,40]
let check=100
let found=false
for(let i=0;i<arr.length;i++){
    if(arr[i]==check){
        found=true
    break}
}
if(found){
    console.log("the element is present");
    
}else{
    console.log("the element is not present");
    
}