function greet(name, callback){
    callback("hello "+ name);
}

function display(message){
    document.getElementById("demo").innerHTML+=message;
}

greet("john",display);




function calculate (number,callback1){
    callback1(number+10);
}

function display1(message1){
    document.getElementById("demo1").innerHTML+=message1;
}

calculate(3,display1);



//Synchronous Callbacks

function hisheb(x,y,operation){
    return operation(x,y);
}
function add(a,b){
    return a+b;
}

let result=hisheb(10,33,add);

document.getElementById("demo3").innerHTML=result;




//TIMING PROBLEM
let result1;

setTimeout(function(){
    result1=5;
},1000);
document.getElementById("demo4").innerHTML="the result is "+result1

//solution of timing problem
function myDisplayer(some){
    document.getElementById("demo5").innerHTML+=some+" ";
}
function done(value){
    myDisplayer(value);
}

setTimeout(function(){
    done(5);
},2000);


//asynchronus CAllback
//Event Handling
function myDisplayer1(text){
        document.getElementById("demo6").innerHTML=text;
}
setTimeout(function(){
    myDisplayer1("Time finished")

},4000);


function displayDate(){
    document.getElementById("demo7").innerHTML+=Date();
}
document.getElementById("myButton").addEventListener("click",displayDate);
