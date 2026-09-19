

const controller= new AbortController();

async function loadFile(File) {
    try{
        const response= await fetch(File,{
            signal:controller.signal
        });
        myDisplayer(await response.text());
    }catch(err){
        if(err.name=="AbortError"){
            myDisplayer("Cancelled");
        }
    }
}


function myDisplayer(text){
    document.getElementById("demo").innerHTML+=text+"<br>";
}

window.loadFile = loadFile;
window.controller = controller;
