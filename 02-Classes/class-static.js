//Static METHODS

class Player{
    constructor(name,club){
        this.playerName=name;
        this.playerClub=club;
    }

    static greet(){
        return "hello from player class"; 
    }
}

const myPlayer= new Player("messi");

document.getElementById("demo").innerHTML="Hi this is "+myPlayer.playerName;
//eta print hobe karon object class theke call korse
document.getElementById("demo2").innerHTML="this one " +Player.greet();  
//this one will not print karon static methods only object class e call kora jay
document.getElementById("demo1").innerHTML="this one " +myPlayer.greet();
