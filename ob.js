[1001,"neel","developer","kochi",15000,2]

// object
let emp1={
    empId:1001,
    name:"neel",
    designation:"developer",
    location:"kochi",
    salary:15000,
    experience:2

}
console.log(typeof emp1);
console.log(emp1);
console.log(emp1["designation"]);
console.log(emp1.salary);

for(let key in emp1){
    // console.log(emp1[key]);
    console.log(`${key}:${emp1[key]}`);
    
    
}
console.log("name" in emp1 ? emp1["name"] : "key is not present");
emp1.hasOwnProperty("isVaccinated")?console.log(emp1["isVaccinated"]):emp1["isVaccinated"]='YES'
console.log(emp1);

emp1.salary+=5000
console.log(emp1);
console.log(Object.keys(emp1));
console.log(Object.values(emp1));
Object.assign(emp1,{"isActivated":true})
console.log(emp1);

emp2={
    enwn:"jewnfob",
    erhbih:"erfnrg"
}
console.log(Object.assign(emp1,emp2));


var car={
    name:"baleno",
    model:"hatch-back",
    manufacturer:"suzuki",
    price:"13 L"
}
// display car name and its manufacturer
console.log(car.name,car.manufacturer);

// check model key is present,then display its value
car.hasOwnProperty("model")?console.log(car["model"]):console.log("model is not defined");

// add variant as automatic and manual
console.log(Object.assign(car,{variant:["automatic","manual"]}));

// add colors as red,blue,white,ash,black
console.log(Object.assign(car,{colors:["red","white","blue","ash","black"]}));

// add hybrid variant
car.variant.push("hybrid")
console.log(car);






