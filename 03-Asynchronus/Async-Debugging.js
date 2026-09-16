
//Debugging Start

console.log("Before Fetch");

const promise=fetch("03-Asynchronus/fetch.txt");

console.log(promise);

console.log("after fetch");


//Async Debbugging

async function loadText(file) {
    const response = await fetch (file);
    const text=await response.text();
    myDisplayer(text);
    
}

myDisplayer("before fetch");

loadText("03-Asynchronus/Product.txt");

myDisplayer("after fetch");

function myDisplayer(text){
    document.getElementById("demo").innerHTML+= text+"<br>";
}


async function loadData(file) {
    try{
        let response=await fetch (file);
         if (!response.ok) {
console.log("HTTP Error:", response.status);
      return;        }
        let data =await response.json();

         myDisplayer1(JSON.stringify(data));

    }catch(Error){
    myDisplayer1(Error);
   
} 
}

loadData("03-Asynchronus/Customer.json")

function myDisplayer1(text){
    document.getElementById("demo1").innerHTML+=text+" ";
}