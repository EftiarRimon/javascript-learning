function Displayer(text){
    document.getElementById("demo").innerHTML+=text+"<br>";
}


async function hello() {
    return "hello world!";
}

hello().then(function(value){
    Displayer(value)
})


Displayer("hi")
