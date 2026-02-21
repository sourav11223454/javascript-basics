// create a class for students with properties id,name and mark 
// and display 3 student details

class Student{
    stdName
    regNo
    mark

    constructor(name,regno,mark,){
        this.stdName=name
        this.regNo=regno
        this.mark=mark
    }

    studentDetails(){
        console.log(`Name:${this.stdName}
            RegNo${this.regNo}
            Mark:${this.mark}`);
        
    }
    findAverage(std1,std2,std3){
        let avg=(std1.mark+std2.mark+std3.mark)/3
        console.log(`AVERAGE MARKS:${avg}`);
        
    }

}
const std1=new Student("akash",1001,80)
const std2=new Student("kasi",1002,90)
const std3=new Student("midhul",1003,70)
std1.studentDetails()
std2.studentDetails()
std3.studentDetails()
std1.findAverage(std1,std2,std3)