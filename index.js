const person={
    firstName:"Eftiare",
    lastName:"Rimon",
    age:"27",
    nature: "Angry",
    color : "Brown",
    height: "5.7 feet",
    weight: "66"
};

const man=Object.create(person);
man.firstName="Tushar"

const players=[
    ["Messi", 10],
    ["Ronaldo",7],
    ["Di Maria",11],
    ["Iniesta",8],
    ["Xavi",6]
];
const myObj=Object.fromEntries(players);
document.getElementById("demo1").innerHTML=myObj.Messi;

document.getElementById("demo").innerHTML=person.firstName 
+" "+ "is"+" "+person.color+" " +"color guy"+man.firstName;
