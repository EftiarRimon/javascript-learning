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


const country={
    1:"east pak",
    2:"west pak",

    get fullCountry(){
        return this[1]+" "+this[2];

    }
};

document.getElementById("demo3").innerHTML=country.fullCountry;


const language={
    Bangladesh:"Bangali",
    India:"Hindi",
    Pakistan:"urdu",
    SriLanka:"Tamil",

    get banLang(){
        return this.Bangladesh.toUpperCase();
    }
}

document.getElementById("demo4").innerHTML=language.banLang;


const club ={
    spanish :"Barca",
    england :"ManCity",
    german :"Bayern",
    french:"",

    set team(team){
        this.french=team.toUpperCase()
    }
}
club.team="psg"

document.getElementById("demo5").innerHTML=club.french;



const obj={counter:0};

Object.defineProperty(obj, "reset",{
    get : function(){this.counter=0}
});

Object.defineProperty(obj, "increment",{
    get:function(){this.counter++;}
});

Object.defineProperty(obj,"decrement",{
    get:function(){this.counter--;}
});

Object.defineProperty(obj, "add",{
    set:function(value){this.counter+=value;}
});

Object.defineProperty(obj,"subtract",{
    set: function(value){this.counter-=value;}
});

obj.reset;
obj.add=100;
obj.subtract=9;
obj.increment;
obj.increment;
obj.increment;
obj.decrement;
obj.decrement;
obj.add=2;
obj.subtract=3;


document.getElementById("demo6").innerHTML=obj.counter;
