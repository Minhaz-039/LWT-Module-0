async function getData() {
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => console.log(json))

    }catch(err){
        console.error("Error occurred: ", err);
    }
}

function bigWork() {
    // Do Something
    return getData(); // This function returns a promise not the data itself
}

async function DATA() {
    const Data = await bigWork(); 
}
DATA();