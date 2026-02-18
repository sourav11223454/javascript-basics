// print each word count
// sentence="hi all hello hi welcome to js"
// count={}
// sentence.split(" ").forEach(word=>count.hasOwnProperty(word)?count[word]+=1:count[word]=1)
// console.log(count);


// find first reccurssive character from the given pattern

pattern="ABECBAD"
let ob={}
const arr=pattern.split('')
for(let char of arr){
    if(ob.hasOwnProperty(char)){
        console.log(char);
        break
    }else{
        ob[char]=1
    }
}

// display number count
count={}
num=[10,22,13,10,9,2,22,2,10,11,22,9]
num.forEach(number=>count.hasOwnProperty(number)?count[number]+=1:count[number]=1)
console.log(count);











