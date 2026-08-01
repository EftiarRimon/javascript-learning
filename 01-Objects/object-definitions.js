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
man.firstName="Tusharr"

const players=[
    ["Messi", 10],
    ["Ronaldo",7],
    ["Di Maria",11],
    ["Iniesta",8],
    ["Xavi",6]
];

const person3={
    firstName:"Tawsif",
    lastName:"ahmed",
    age:"20",
    color:"brown"
}

const fruits=[
    ["apples",300],
    ["banana",200],
    ["mango",250]
];
const myObj2= Object.fromEntries(fruits);
document.getElementById("demo4").innerHTML=myObj2.mango;


const x=person3;
x.age="17";
document.getElementById("demo3").innerHTML=person3.firstName +" er "+person3.age +" years"
const myObj=Object.fromEntries(players);
document.getElementById("demo1").innerHTML=myObj.Messi;

document.getElementById("demo").innerHTML=person.firstName 
+" "+ "is"+" "+person.color+" " +"color guy"+man.firstName;
