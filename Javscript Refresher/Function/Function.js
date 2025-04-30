// Regular function
function hello(){
    console.log("Hello wirld");
    // return undefined  ==> Jeta ami nije kichu jodi return na kori tahole undefined return hoy
}


// Function expression
const hello2 = function() {
    console.log("Hello world 2");
}


// Named Function Expression
const hello3 = function Hello() {
    console.log("Hello world 3");
    // return undefined  ==> Jeta ami nije kichu jodi return na kori tahole undefined return hoy
}


// Arrow function
const hello4 = () => {
    console.log("Hello world 4");
}
const hello5 = () => console.log("Hello world 5");
const hello6 = (a,b) => a+b ;
const hello7 = (a,b) => ({
    a : a + 1 ,
    b : b + 1
}) // This is an object shorthand notation
console.log(hello7(1,2)) // { a: 2, b: 3 }  


// Anonymous function
const hello8 = () => {
    // This is an anonymous function ; means this function has no name
    return function() {
        console.log("Hey this is an anonymous function");
    }
}