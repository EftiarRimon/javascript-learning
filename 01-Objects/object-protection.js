"use strict";
const person={
    firstName:"efti",
    lastName:"rimon"
};

Object.preventExtensions(person)

let text="";
try {
    person.age="27";
}
catch (err1){
    text=err1;
}

document.getElementById("demo1").innerHTML=text;

const club = ["barca", "real madrid", "bayern", "M.city", "AC milan", "PSG", "Chelsea"];
Object.preventExtensions(club);

let text2="";
try{
    club.push("atm");
}
catch (err){
    text2=err;
};
let answer = Object.isExtensible(person);

document.getElementById("demo2").innerHTML=text2+"<br> "+answer;

//object.seal() prevent add and delete but can mod

//object.freeze() prevent add,delete, and mod