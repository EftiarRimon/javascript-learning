const person1 = {
    firstName:"Lionel",
    lastName:"Messi",
    jersey:"10",
    age:"39",
    Club:"Barca",
    nationality:"Argentina"
};

const person2={firstName:"Javier", lastName:"Mashcherano", age:"42",jersey:"14"};

Object.assign(person1,person2);

let text=Object.assign(person1,person2);

document.getElementById("demo").innerHTML=JSON.stringify(text);