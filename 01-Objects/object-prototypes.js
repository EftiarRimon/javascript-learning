function Player 
    (name, club, jersey, age, pos) {
        this.playerName = name;
        this.clubName = club;
        this.jerseyNum = jersey;
        this.age = age;
        this.position = pos;
    }


const myfavtPlayer= new Player("Messi","Barca", "10", "39","Forward");
const myfavtPlayer2= new Player("Neymar","Barca","11","34","LeftWIng")

document.getElementById("demo").innerHTML="My favourite player is: "+myfavtPlayer.playerName+ ", who plays for: "+ myfavtPlayer.clubName+"<br>"+"And"+"<br>" +"My 2nd fvt player is: "+myfavtPlayer2.playerName+", Who plays for: "+myfavtPlayer2.clubName;
