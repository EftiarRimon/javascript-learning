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