/*

Nullish = Null / Undefined
Coalescing = Merging / Combining

( ?? ) ==> Nullish Coalescing Operator , it returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
It is similar to the OR operator ( || ), but it only considers null and undefined as "falsy" values, while the OR operator considers all falsy values (0, "", false, NaN) as "falsy".

( || ) ==> OR operator , it returns the right-hand operand when the left-hand operand is falsy, otherwise it returns the left-hand operand.
It is used to provide default values for variables or function parameters when the value is null or undefined.

( && ) ==> AND operator , it returns the right-hand operand when the left-hand operand is truthy, otherwise it returns the left-hand operand.
It is used to execute a block of code only if a certain condition is true.

*/

let lang = null ;
let Name = "Minhaz" ;

console.log(lang ?? "Javascript") // Default Language
console.log(Name ?? "Hasnain Reza" ) 
console.log(Name || "Hasnain Reza" ) 
console.log(lang || "Hasnain Reza" ) 
console.log(Name && "Hasnain Reza" ) 
console.log(lang && "Hasnain Reza" ) 