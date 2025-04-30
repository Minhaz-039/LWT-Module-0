const a = 'Popularity' ;
const b = 'Almost a lot';
const c = 'Good language' ;

const language = {
    name : "JavaScript",
    version : "ES6",
    type : "Dynamic",
    paradigm : "Multi-paradigm",
    description : "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has become a standard for web development and is widely used for both client-side and server-side applications.",
    features : [
        "First-class functions",
        "Promises" ],
    usage : {
        "Web Development" : "JavaScript is the primary language for client-side web development, allowing developers to create interactive and dynamic web pages.",
    },
    libraries : {
        "React" : "A JavaScript library for building user interfaces, particularly single-page applications.",
        "Angular" : "A platform for building mobile and desktop web applications using TypeScript and JavaScript."
    },

    c // It means that the value of the key 'c' is the value of the variable 'c'.
        
}


const KEYS = Object.keys(language); // This will return an array of keys in the object
const VALUES = Object.values(language); // This will return an array of values in the object
const ENTRIES = Object.entries(language); // This will return an array of key-value pairs in the object
language[a] = b; 
// console.log(KEYS);
// console.log(VALUES);
// console.log(ENTRIES);
console.log(language);