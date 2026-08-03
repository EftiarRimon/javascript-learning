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




const fruits = {
    Bananas : 300,
    Oranges:200, 
    apples: 500
};
let textt="";

for (let [fruit, amount] of Object.entries(fruits)){
    textt+=fruit+":"+amount+"<br>";
}

document.getElementById("demo3").innerHTML= textt;



const KadirFamily ={
    father:"Kadir",
    mother:"Parveen",
    Daughter1:"Trishna",
    Daughter2:"Moly",

};

let KadirFamilyTree=Object.values(KadirFamily);

document.getElementById("demo4").innerHTML=KadirFamilyTree;


const football= [
    {name:"Brazil", trophy:5},
    {name:"Italy", trophy:4},
    {name:"Germany" ,trophy:4},
    {name:"Argentina",trophy:3},
    {name:"France",trophy:2},
    {name:"Uruguay",trophy:2},
    {name:"Spain",trophy:2},
    {name:"England",trophy:1},
]

function myCallBack({trophy}){
    return trophy>2? "elite" : "Good";
}

const result =Object.groupBy(football,myCallBack);

let texttt= "These Teams are ELITE: <br>";
for (let [x,y] of result.elite.entries()){
    texttt+=y.name+" "+y.trophy+"<br>";
}

texttt+="<br> These teams are GOOD :<br>";

for (let[x,y] of result.Good.entries()){
    texttt+=y.name+" "+y.trophy+"<br>";
}

document.getElementById("demo5").innerHTML=texttt;