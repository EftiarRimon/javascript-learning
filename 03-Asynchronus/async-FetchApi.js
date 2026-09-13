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