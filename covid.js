// [no,district,+ve cases,death rate, curred rate, 1st dose vaccine,second dose vaccine]
covid_data=[
    [1,"ernkulama",34000,2000,23000,20000,2000],
    [2,"idukki",14000,3000,25000,30000,1000],
    [3,"trissur",24000,4000,33000,24000,2500],
    [4,"pathanamthitta",20000,2000,45000,22000,1500],
    [5,"Kozhikkode",44000,5000,12000,21000,500],
    [6,"palakkad",12000,1000,20000,23000,3400],
    [7,"kottayam",27000,1500,27000,14000,1000],
    [8,"kollam",14000,2500,25000,18000,2700],
]
// district having highest +ve case
let highest=covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(highest[1],highest[2]);

console.log("---------------");

// district having highest 1st dose vaccine
let highestVaccine=covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(highestVaccine[1],highestVaccine[5]);

console.log("---------------");

// district having lowest death rate
let lowestDeath=covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(lowestDeath[1],lowestDeath[3]);

console.log("---------------");

// display district  with +ve cases in descending order
covid_data.sort((a,b)=>b[2]-a[2]);
for( data of covid_data){
    console.log(`${data[1]}=${data[2]}`);
    
}
console.log("---------------");

// is district with +ve case>15000
// covid_data.forEach(data => data[2]>15000 && console.log(`${data[1]}=${data[2]}`))
console.log(covid_data.some(d=>d[2]>15000)?'YES':'NO');
console.log("---------------");

// display district  with 1st dose vaccine in ascending order
covid_data.sort((a,b)=>a[5]-b[5]).forEach(d=>console.log(d[1],d[5]))
// for( data of covid_data){
//     console.log(`${data[1]}=${data[2]}`);
    
// }
console.log("---------------");
// print trissur details
console.log(covid_data.find(data=>data[1]=="trissur"));
console.log("---------------");

// print total number of +ve cases
console.log(covid_data.reduce((sum,b)=>sum+b[2],0));
console.log("---------------");

// print total  number  of curred cases
console.log(covid_data.reduce((sum,b)=>sum+b[4],0));
console.log("---------------");

// print curred case in idukki
console.log(covid_data.find(data=>data[1]=="idukki")[4]);

