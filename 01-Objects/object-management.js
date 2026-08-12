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


const player={
    firstName : "Lionel",
    lastName: "Messi"
};
Object.defineProperty(player, "fullName",
    {
        get: function(){
            return this.firstName+" "+this.lastName;
        }

});

document.getElementById("demo2").innerHTML=player.fullName;
