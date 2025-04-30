let x = 6 ;
let y = 7 ;
x = y ;
y = 8 ;
console.log(x , y); // 7 8
// x is a primitive data type, so it gets copied by value.


let a =  ["JS" , "Python"];
let b = ["HTML" , "CSS"];
b = a ;
a.push("Go");
console.log(a);
console.log(b); // b also gets updated because it is a non-primitive data type , and copied by reference.