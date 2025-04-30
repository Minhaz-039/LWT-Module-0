function hello() {
    console.log("Hello, world!");
}
function hello2() {
    console.log("Hello, world 2!");
}

// select element 
const  button = document.getElementById("btn")
button.addEventListener('click' , hello2 );