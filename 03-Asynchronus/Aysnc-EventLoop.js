function step1(){
    myDisplayer("step1");
}

function step2(){
    setTimeout(function(){
    myDisplayer("step2");
    })
    
}



step2();
step1();

function myDisplayer(text){
document.getElementById("demo").innerHTML+=text+"<br>";
}


myDisplayer1("9 Aguero");
setTimeout(function(){
    myDisplayer1("10 Messi")
},3000);

myDisplayer1("11 Di Maria");

function myDisplayer1(player){
    document.getElementById("demo1").innerHTML+=player+"<br> ";
}

myDisplayer2("1 BARCA");

Promise.resolve().then(function(){
    myDisplayer2("2 Hala Madrid");
});

myDisplayer2("3 Atim Madrid");

function myDisplayer2(team){
    document.getElementById("demo2").innerHTML+=team+"<br>";
}


function wait(){
    let i=4e9;
    while(--i>0);
}

myDisplayer3("start");

setTimeout(function(){
    wait();
    myDisplayer3("Done")
},100);

function myDisplayer3(data) {
    document.getElementById("demo3").innerHTML+=data+"<br>";
}