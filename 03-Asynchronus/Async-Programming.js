function myDisplayer(some){
    document.getElementById("demo").innerHTML+=some+"<br> ";
}

myDisplayer("A B C")
myDisplayer("A")

function myFirst(){
    myDisplayer("This is 1");
}

function mySecond(){
    myDisplayer("this is 2")
}

mySecond();
myFirst();