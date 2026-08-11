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



const mySelf = {
    name : "rimon",
    age: "27",
    nationality:"BD",
    wife:"",

    set partner(value){
        this.wife=value;
    }
};
mySelf.partner="Abida";

document.getElementById("demo1").innerHTML=mySelf.wife;


const person={
    name: "Towhidul",
    wife:"rasa",
    couple: function(){
        return this.name+ " "+this.wife;
    }
};

document.getElementById("demo2").innerHTML=person.couple();
