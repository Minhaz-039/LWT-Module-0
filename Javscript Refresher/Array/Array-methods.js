/**
 * 1. Array.find() method
 * 2. Array.findIndex() method
 * 3. Array.filter() method
 * 4. Array.slice() method
 * 5. Array.splice() method
 * 6. Array.concat() method
 * 7. Array.push() method
 * 8. Array.pop() method
 * 9. Array.join() method
 * 10. Array.map() method
 * 11. Array.reduce() method
 * 12. Array.forEach() method
 * 13. for of loop
 * 14. for in loop
 **/


const fruits = [ 'Apple' , "Banana" , "Cherry" , "Mango" ] ;

// Array.find() method
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
const result = fruits.find((f) => f === "Mango" || f=== "Banana") ;
console.log(result); // Output: Mango


// Array.findIndex() method
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
const result2 = fruits.findIndex((f) => f === "Mango" || f=== "Banana") ;
console.log(result2); // Output: 1


// Array.filter() method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const result3 = fruits.filter((f) => f === "Mango" || f=== "Banana") ;
console.log(result3); // Output: [ 'Banana', 'Mango' ]


// Array.slice() method
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.
const result4 = fruits.slice(1,3) ; // start from index 1 to index 3 (not included)
console.log(result4);


//Array.splice() method
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The original array will be modified.
// splice(start, deleteCount, item1, item2, ...)
const result5 = fruits.splice(2, 2, "Orange", "Pineapple") ; // start from index 1 and delete 2 elements and add new elements
console.log(result5); // Output: [ 'Cherry', 'Mango' ]
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple' ]


// Array.concat() method
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// The concat() method can take any number of arguments, which can be arrays or values.
// The original array will not be modified.
const result6 = fruits.concat(["Grapes", "Peach"]) ; // merge two arrays
console.log(result6); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes', 'Peach' ]
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple' ]


// Array.push() method
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// The original array will be modified.
const result7 = fruits.push("Grapes", "Peach") ; // add new elements to the end of the array
console.log(result7); // Output: 6
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes', 'Peach' ]


// Array.pop() method
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// The original array will be modified.
const result8 = fruits.pop() ; // remove the last element from the array
console.log(result8); // Output: Peach
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes' ]


// Array.join() method
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// If the array has only one item, then that item will be returned without using the separator.
// The original array will not be modified.
const result9 = fruits.join(" - ") ; // join the elements of the array with a separator
console.log(result9); // Output: Apple - Banana - Orange - Pineapple - Grapes
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes' ]


// Array.map() method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method executes the function once for each element present in the array, in order, and constructs a new array from the results.
// The original array will not be modified.
const result10 = fruits.map((f) => f.toUpperCase());
console.log(result10); // Output: [ 'APPLE', 'BANANA', 'ORANGE', 'PINEAPPLE', 'GRAPES' ]
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes' ]


// Array.reduce() method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method executes the function once for each element present in the array, in order, and constructs a new array from the results.
// The original array will not be modified.
// reduce((accumulator, currentValue) => { /* ... */ }, initialValue)
const result11 = fruits.reduce((acc, currentValue) => acc + currentValue + " ", "Fruits: ") ; // reduce the array to a single string
console.log(result11); // Output: Fruits: Apple Banana Orange Pineapple Grapes


// Array.forEach() method
// The forEach() method executes a provided function once for each array element.
// The forEach() method executes the function once for each element present in the array, in order, and constructs a new array from the results.    
// The original array will not be modified.
// forEach((element, index) => { /* ... */ })
const result12 = fruits.forEach((f, i) => console.log(`Element: ${f}, Index: ${i}`)); // print each element and its index


// for of loop
// The for...of statement creates a loop iterating over iterable objects, including built-in String, Array, array-like objects (arguments or NodeList), and other iterable objects.
// The for...of loop iterates over the values of an iterable object.
// The for...of loop does not create a new array, but instead iterates over the existing array and executes the code block for each element in the array.
// The original array will not be modified.
const result13 = () => {
    for (const f of fruits) {
        console.log(`${f} is yummy`); // print each element of the array
    }
} ; // print each element of the array
result13(); // Output: Apple is yummy, Banana is yummy, Orange is yummy, Pineapple is yummy, Grapes is yummy


// for in loop
// The for...in statement iterates over all enumerable properties of an object (including inherited properties), in the same order as that provided by a for...in loop.
// The for...in loop iterates over the keys of an object, not the values.
// The for...in loop does not create a new array, but instead iterates over the existing array and executes the code block for each element in the array.
// The original array will not be modified.
const language = {
    name: "JavaScript",
    type: "Programming Language",
    year: 1995,
    creator: "Brendan Eich"
}
for (const key in language) {
    console.log(`${key}: ${language[key]}`); // print each key and its value
}


