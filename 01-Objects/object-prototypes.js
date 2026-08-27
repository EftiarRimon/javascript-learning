function Player 
    (name, club, jersey, age, pos,nation) {
        this.playerName = name;
        this.clubName = club;
        this.jerseyNum = jersey;
        this.age = age;
        this.position = pos;
        this.nationality=nation;
    }
//prototype property allows to add new methods to object
// constructors:

    Player.prototype.language="Spanish"


const myfavtPlayer= new Player("Messi","Barca", "10", "39","Forward","Argentine");
const myfavtPlayer2= new Player("Neymar","Barca","11","34","LeftWIng")

document.getElementById("demo").innerHTML="My favourite player is: "+
myfavtPlayer.playerName+ ", who plays for: "+ myfavtPlayer.clubName+
"<br>"+"And"+"<br>" +"My 2nd fvt player is: "+myfavtPlayer2.playerName+
", Who plays for: "+myfavtPlayer2.clubName;

document.getElementById("demo1").innerHTML="Messi's nationality is: "+
myfavtPlayer.nationality+"<br>"+"Messi's Language is: "+myfavtPlayer.language;
