function greet(name, callback){
    callback("hello "+ name);
}

function display(message){
    document.getElementById("demo").innerHTML+=message;
}

greet("john",display);