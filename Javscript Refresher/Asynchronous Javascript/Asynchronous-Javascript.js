async function getData() {
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => console.log(json))

        // console.log(data); // This will log a Promise, not the data
    }catch(err){
        console.error("Error occurred: ", err);
    }
}

function bigWork() {
    // Do Something
    return getData();
}

async function DATA() {
    const Data = await bigWork(); 
}
DATA();