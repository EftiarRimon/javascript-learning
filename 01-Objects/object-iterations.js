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

document.getElementById("demo4").innerHTML=JSON.stringify(text);




const fruits = {
    Bananas : 300,
    Oranges:200, 
    apples: 500
};


for (let [fruit, amount] of Object.entries(fruits)){
    textt+=fruit+":"+amount+"<br>";
}

document.getElementById("demo").innerHTML= textt;
