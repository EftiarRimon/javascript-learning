
import {add} from './math.js';

let result = add(3,6);
myDisplayer("Addition is: "+result);

function myDisplayer(text){
    document.getElementById("demo").innerHTML=text;
}