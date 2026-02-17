num=[34,1,19,[4,51],[2],78,6]
// find all numbers>10
newArray=num.flat(Infinity)
console.log(newArray.filter(d=>d>10));


nameArray=["manu","manju","minnu","meenu"]
console.log(nameArray.includes("manu"));
console.log(nameArray.indexOf("minnu"));

// nameArray.splice(1,2)
// console.log(nameArray);
nameArray.splice(2,0,"veena","vinu")
console.log(nameArray);
nameArray.splice(2,1,"varada")
console.log(nameArray);
console.log(nameArray.join('=='));




