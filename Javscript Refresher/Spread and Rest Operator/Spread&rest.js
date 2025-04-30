//--------------------------SPREAD--------------------------------------


const object_1 = {
    name: 'John',
    age: 30,        
    city: 'New York',
    country: 'USA',
}

const object_2 = {
    person_1 :{
        name: 'Jane',
        age: 25,
        city: 'Los Angeles',
        country: 'USA',
    },
    person_2 : { 
        name: 'Mike',
        age: 35,
        city: 'Chicago',
        country: 'USA',
    }
}

const Spread_1 = {...object_1}
const Spread_2 = {...object_2}
const DeepCopy = JSON.parse(JSON.stringify(object_2))
// console.log(DeepCopy); // This is a deep copy of the object_2
// console.log(Spread_1);
// console.log(Spread_2);

object_2.person_1.name = 'Sarah' ;
object_1.name = 'Michael' ;

console.log(Spread_1); // This is a perfect copy , so for spreading this is good example
console.log(Spread_2); // But in this case it is not a perfect copy , so for spreading this is not a good example , in this case we need to use deep copy
// So for spreading we need to use deep copy , so we can use JSON.parse(JSON.stringify(object_2)) to make a deep copy of the object
console.log(DeepCopy); // This is a deep copy of the object_2




//-------------------------REST--------------------------------------


function sum(text , ...rest){
    const result = rest.reduce((accumulator , currentValue) => accumulator + currentValue , 0)
    return `${text} ${result}`
}
const REST = sum('The sum is : ' , 1 , 2 , 3 , 4 , 5) // The sum is : 15
console.log(REST);
