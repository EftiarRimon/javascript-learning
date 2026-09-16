
import {add} from './math.js';

let result = add(3,6);
myDisplayer("Addition is: "+result);

function myDisplayer(text){
    document.getElementById("demo").innerHTML=text;
}

import {name,age} from './person.js';

let text = "My name is "+name+ ", and I am "+age+" years old";

document.getElementById("demo1").innerHTML=text;



//Import message
import message from './message.js';

const results = message();

document.getElementById("demo").innerHTML = results;