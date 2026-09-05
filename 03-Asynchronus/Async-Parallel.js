//Running Async Tasks in Parallel

function myDisplayer(data){
    document.getElementById("demo").innerHTML+=data;
}

async function loadData() {
    let response1=await fetch("03-Asynchronus/Customer.txt");
    let customer=await response1.text();
    let response2=await fetch("03-Asynchronus/Product.txt");
    let product=await response2.text();

    let text="";
    text+=
    JSON.stringify(customer);
     text+="<br><br>"
     text+=
    JSON.stringify(product);

    myDisplayer(text);
}

 loadData();


 //Promise ALL

 function myDisplayer1(text1){
    document.getElementById("demo2").innerHTML+=text1+"<br> ";
 }

 async function loadData1() {
    
    let responses=await Promise.all([
        fetch("03-Asynchronus/Customer.txt"),
        fetch("03-Asynchronus/message.txt"),
        fetch("03-Asynchronus/Product.txt")
    ]);

    let data=await Promise.all(
        responses.map(response=> response.text())
    );

    myDisplayer1(data);

    }
    
 
 loadData1();

 //Promise All error
 
 function myDisplayer2(text) {
    document.getElementById("demo3").innerHTML = text;
}

async function loadData2() {
    try {
        let responses1 = await Promise.all([
           fetch("03-Asynchronus/Customer.txt"),
        fetch("03-Asynchronus/messag.txt"),
        fetch("03-Asynchronus/Produc.txt")
        ]);


    }
    catch (err) {
        myDisplayer2(err.message);
    }
}

loadData2();


//ThePromise.All() method reject promise

function myDisplayer3(text3){
    document.getElementById("demo4").innerHTML=text3;
}

async function getFile(url) {
    const response=await fetch(url);
    if(!response.ok){
        throw new Error(response.status+ " "+response.statusText);
    }
    return response.text();
}
async function loadData3() {
    try{
        let data2 = await 
        Promise.allSettled([
        getFile("03-Asynchronus/Customer.txt"),
        getFile("03-Asynchronus/message.txt"),
        getFile("03-Asynchronus/Product.txt")
    ]);
    myDisplayer3(data2.join("<br>"));
    }
    catch(err){
        myDisplayer3(err.message);
    }
}

loadData3();

