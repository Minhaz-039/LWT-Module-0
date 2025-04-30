const Student = {
    id : 39 ,
    name : "Minhaz" ,
    age : 24 ,
    Education : {
        degree : "BSc" ,
        major : "CSE" ,
        university : "GSTU" ,
        year : 2020 ,
        gpa : 3.75 ,
        Interest : [
            "AI" ,
            "ML" ,
            "DSA" ,
            "Web Development" 
        ]
    }
}

console.log(Student?.Education?.Interest?.[3])