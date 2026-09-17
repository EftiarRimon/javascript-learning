
//<--------------Dynamic Module import---------------->>

async function run() {
    const module = await import("./math.js");
    let result=module.add(3,6)
    myDisplayer(result);
}
run();

function myDisplayer(print){
    document.getElementById("demo").innerHTML=print;
}


//Another Example

async function runC(value) {
    const module=await import("./temp.js")
    let celcious=module.toCelcius(value);
    myDisplayer1("temp is: "+celcious+" C");
}

runC(104);

async function runF(value) {
    const module=await import('./temp.js')
    let farenheit=module.toFarenheit(value);
    myDisplayer1("temp is: "+farenheit+" F");
}

runF(35);

function myDisplayer1(print){
    document.getElementById("demo1").innerHTML+=print+"<br>";
}