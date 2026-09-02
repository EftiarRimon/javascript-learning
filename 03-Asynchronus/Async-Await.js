//ASYNC FUNCTION

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

// AWAIT FUNCTION

function myDisplayer1(text1){
    document.getElementById("demo1").innerHTML=text1;
}

async function getData() {
    let response=await fetch("03-Asynchronus/fetch.txt");
    let text=await response.text();
    myDisplayer1(text);
    
}
getData();


//What Happens During await?


function myDisplayer2(text2){
    document.getElementById("demo2").innerHTML+=text2+"<br>";
}

myDisplayer2("Task: START --> ");

async function GetData() {
    await fetch("03-Asynchronus/fetch.txt");
    myDisplayer2("Task: COMPLETED!");
}

GetData();

myDisplayer2("CONTINIUE")


