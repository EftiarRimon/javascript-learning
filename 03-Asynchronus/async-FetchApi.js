async function loadText(file) {
    const response= await fetch (file);

    myDisplayer(await response.text());
}

loadText("03-Asynchronus/fetch.txt");

function myDisplayer(text){
    document.getElementById("demo").innerHTML+=text;
}



async function loadText1(file1) {
    const response1=await fetch(file1);
    myDisplayer1(response1.url);
}

loadText1("03-Asynchronus/fetch.txt");
function myDisplayer1(text1){
    document.getElementById("demo2").innerHTML=text1
}

// <---fetching JSON--->
async function loadCustomer() {
    const response2=await fetch("03-Asynchronus/customer.json");
    const customer=await response2.json();

    myDisplayer2(customer.name)
}

loadCustomer();

function myDisplayer2(text){
    document.getElementById("demo3").innerHTML+=text;
}


//<---fetching multiple JSON--->

async function loadMultipleData() {
    const[customerResponse, productResponse, newsResponse]=await Promise.all([
        fetch("03-Asynchronus/customer.json"),
        fetch("03-Asynchronus/products.json"),
        fetch("03-Asynchronus/news.json")
    ]);

    const customer=await customerResponse.json();
    const products=await productResponse.json();
    const news=await newsResponse.json();

    myDisplayer3("customer Name: "+customer.name);
    myDisplayer3("products number "+products.length);
    myDisplayer3("news number "+news.length);
}

loadMultipleData();

function myDisplayer3(text){
    document.getElementById("demo3").innerHTML+=text+"<br>";
}

//<<----Response Status----->>
async function loadTextTest(file) {
    const response = await fetch(file);
    myDisplayer4(response.ok);
}

loadTextTest("03-Asynchronus/fetch.txt");

function myDisplayer4(textTest){
    document.getElementById("demo4").innerHTML=textTest;
}

//<<----fetch api handling error----->>

async function loadFileErrorHndl(file) {

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }

        myDisplayer5(await response.text());

    } catch (err) {
        myDisplayer5(err.message);
    }
}
loadFileErrorHndl("03-Asynchronus/fetchh.txt");

function myDisplayer5(text){
    document.getElementById("demo5").innerHTML=text;
}