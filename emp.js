// [empId,empname,designation,location,salary,experience]
employee=[
    [1000,"Akhil","Analyst","kochi",15000,3],
    [1001,"Neel","developer","kochi",15000,2],
    [1002,"Max","Tester","kochi",25000,3],
    [1003,"MaxWell","QA","kochi",50000,3],
    [1004,"Vyom","QA","kochi",45000,3],
    [1005,"Laisha","developer","kochi",35000,3],
    [1006,"Ahan","Tester","kochi",20000,3],
    [1007,"Nishan","QA","kochi",50000,3],
    [1008,"shyam","developer","kochi",35000,3],

]
//1. Print all employee  names
// for(let emp of employee){
//     console.log(emp[1]);
// }
employee.forEach(emp => console.log(emp[1]));
//2. Print total number of employees
console.log(employee.length);

//3. Print developer employee details
// for(let emp of employee){
//     if(emp[2]=="developer"){
//         console.log(emp);
//     }
// }
console.log(employee.filter(emp=>emp[2]=="developer"));

console.log("---------");
//4. Print employee name and salary whose salary >30000
// for(let emp of employee){
//     if(emp[4]>30000){
//         console.log(`${emp[1]}=${emp[4]}`);
//     }
// }
result=employee.filter(emp=>emp[4]>30000);
result.forEach(emp=>console.log(emp[1],emp[4]))


console.log("---------");
//5. Print details of employee Laisha
// for(let emp of employee){
//     if(emp[1]=="Laisha")
//         console.log(emp);  
// }
// console.log(employee.filter(emp=>emp[1]=="Laisha"));
console.log(employee.find(emp=>emp[1]=="Laisha"));

console.log("---------");
//6. display employee name and salary based on their salary descending order
console.log(employee.sort((a,b)=>b[4]-a[4]));
for(let emp of employee){
    console.log(`${emp[1]}=${emp[4]}`);
    
}
console.log("---------");
//7. display employee name and experience based on their experience ascending order
console.log(employee.sort((a,b)=>a[5]-b[5]));
for(let emp of employee){
    console.log(`${emp[1]}=${emp[5]}`);
    
}
console.log("---------");

//find the employee with minimum salary
console.log(employee.reduce((a,b) => a[4]<b[4]?a:b));
console.log("---------");

//find the employee with maximum salary
console.log(employee.reduce((a,b) => a[4]>b[4]?a:b));

// find total sum of salary
console.log(employee.reduce((sum,b) => sum+b[4],0));


 