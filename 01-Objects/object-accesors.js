const player={
    name:"Messi",
    club:"Inter Miami",
    jersey:"10",
    position:"forward",
    nationality:"argentina",

    get team(){
        return this.club;
    }
};
document.getElementById("demo").innerHTML=player.name+" playes for: "+ player.team;



const mySelf