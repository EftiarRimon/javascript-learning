// Create an Object:

const person = {
    firstName : "Eftiar",
    lastName : "Rimon",
    language : "en"
};

//add a property

Object.defineProperty(person, "age", {value:"27"})

//change a property

Object.defineProperty(person,"lastName", {value:"Ahmed"})

document.getElementById("demo").innerHTML= person.
firstName+" "+ person.lastName+ " is "+person.age+" years old";
