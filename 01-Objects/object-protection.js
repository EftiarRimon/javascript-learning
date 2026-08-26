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
catch (err){
    text=err;
}

document.getElementById("demo1").innerHTML=text;