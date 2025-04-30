const Student = {
    id : 39 ,
    name : "Minhaz" ,
    age : 24 ,
    education : {
        degree : "BSc in CSE" ,
        university : "Gopalganj Science & Technology University" ,
        year : 2026 ,
        cgpa : {
            current : 3.75 ,
            // target : 4.00
        }
    }
}

const {id , name , age} = Student ;
console.log(id) ; // 39
const { education : {degree}} = Student ;
console.log(degree) ; // BSc in CSE
const { education : {cgpa : {current}}} = Student ;
console.log(current) ; // 3.75

//------Setting a default value------
const { education : {cgpa : {target }} = {}} = Student ;
console.log(target) ; // undefined because target is not defined in the object