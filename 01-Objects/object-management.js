// Create an Object:

const person = {
    firstName : "Eftiar",
    lastName : "Rimon",
    language : "en"
};

//add a property

Object.defineProperty(person, "age", {value:"27"})

document.getElementById("demo").innerHTML= person.firstName+"is "+person.age+" years old"