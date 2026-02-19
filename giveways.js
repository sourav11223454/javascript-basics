function firstUnique(comments){
    let count = {};
    comments.forEach(name=>count.hasOwnProperty(name)?count[name]+=1:count[name]=1);
    for (let name of comments) {
        if (count[name] == 1) {
            return name;
        }
    }return "No unique commenter";
}
console.log(firstUnique(['nisha','arjun','nisha','vicky','arjun','meera']));
