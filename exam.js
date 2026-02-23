// SET A
const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15 "
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];
// 1.Print all device names.
devices.forEach(d=>console.log(d.name))
// 2.Print all device names whose price is greater than $800.
console.log(devices.filter(d=>d.price>800).map(d=>d.name));
// 3.Print out-of-stock devices.
console.log(devices.filter(d=>d.inStock=='No'));
// 4.Find the device names with battery life greater than 20 hours.
console.log(devices.filter(d=>d.features.batteryLife>20).map(d=>d.name))
// 5.Calculate the total revenue generated when all available devices are sold out.
console.log(devices.filter(d=>d.inStock=='yes').reduce((sum,b)=>sum+b.price,0));

console.log("===============");
console.log("===============");


const employees = [
    { id: 1, name: "John", position: "Manager", salary: 60000, hired: true },
    { id: 2, name: "Sarah", position: "Developer", salary: 50000, hired: true },
    { id: 3, name: "Tom", position: "Designer", salary: 45000, hired: false },
    { id: 4, name: "Anna", position: "Tester", salary: 40000, hired: true },
    { id: 5, name: "Jack", position: "Developer", salary: 55000, hired: false }
];
// Questions:
// 1.Print all employee positions.
employees.forEach(d=>console.log(d.position))
// 2.Find the name of the employee with the highest salary.
console.log(employees.reduce((a,b)=>a.salary>b.salary?a:b,0).name);
// 3.List all employees who are not hired.
console.log(employees.filter(d=>d.hired==false));
// 4.Write a function to add a new employee to the list.
function addEmployees(id,name,position,salary,hired){
    let newEmployee = {id:id,
        name:name,
        position:position,
        salary:salary,
        hired:hired
    };
    employees.push(newEmployee);
    return employees;
}
console.log(addEmployees(6,'jerry','tester',35000,false));
// 7.List all employees with the position "Developer".
console.log(employees.filter(d=>d.position=='Developer'));
// 8.Calculate the total salary of all hired employees.
console.log(employees.filter(d=>d.hired==true).reduce((sum,b)=>sum+b.salary,0));
// 5.Write a function to remove an employee by their ID.
function removeEmployees(id){
    let index=employees.findIndex(d=>d.id==id)
    employees.splice(index,1)
    return employees
}
console.log(removeEmployees(4));
// 6.Create a function to update an employee’s salary.
function updateSalary(id){
    employees.forEach(d=>{
        if(d.id==id){
            d.salary+=5000
        }
    })    
}
updateSalary(1)
console.log(employees);


