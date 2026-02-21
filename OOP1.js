class Employee{
    // properties
    empId
    empName
    designation
    salary

    // constructor
    constructor(id,name,desig,salary){
        this.empId=id
        this.empName=name
        this.designation=desig
        this.salary=salary
    }
    // user-defines function
    displayData(){
        console.log(`Id:${this.empId}
            Name:${this.empName}
            Designation:${this.designation}
            Salary:${this.salary}`);
    }
}
// object creation
const emp=new Employee(1000,"miya","developer",50000)
emp.displayData()

