// let str="java script"
// console.log(str);

// console.log(str.substring(5));
// console.log(str.startsWith('j'));

// console.log(str.endsWith('pt'));
// console.log(str.toUpperCase());

// let str1="   oreo   "
// console.log(str1.length);
// console.log(str1.trim());
// console.log(str1.trim().length);
// console.log(str.split("a"));
// console.log(str.includes('va'));

// check an email is valid or not
var email="manu@gmail.com"
console.log(email.endsWith('@gmail.com')?"valid email":"invalid email");

// check given word starts with "ma"
word="malayalam"
console.log(word.startsWith('ma'));

// display word count of given paragraph
para="jbsjc cjknfdhjns dbeuwdbib"
console.log(para.split(" ").length);

// display all vowels from the given data
sentence="hello hai"
let vowels=["a","e","i","o","u"]
console.log(sentence.split("").filter(d=>vowels.includes(d)));

// [id,name,price,stock]
product=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
// search a string is available in product array it returns an array of product which includes the given string otherwise display no products are available
search='zza'
const filterArray=product.filter(pro=>pro[1].includes(search))
console.log(filterArray);
if(filterArray.length>0){
    console.log(filterArray.map(pro=>pro[1]));
    
}else{
    console.log("no products are available");
}

str="fundamentals"
console.log(str.slice(-2));



















