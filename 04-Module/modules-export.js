//Export-------------------//
import { PI, substract,multiply,divide } from "./math.js"

//Default Export---------------------//
import addd from"./math.js"

let addition=addd(4,6);
let subs=substract(4,2);
let mul=multiply(2,3);
let div=divide(3,4);

document.getElementById("demo").innerHTML=PI+"<br>"+"addition is: "
+addition+"<br>"+"substraction is: "+subs+"<br>"+
"multiplication is: "+mul+"<br>"+"divition is: "+div;


