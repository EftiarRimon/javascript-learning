
//class inheritance
class Car{
    constructor(brand){
        this.carName=brand;
        }
    Present(){
        return 'I have a '+this.carName;
    }
}

class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.Model=mod;
    }
    show(){
        return this.Present()+", it is a "+this.Model
    }
}

const myCar=new Model("Ford","toyota");

document.getElementById("demo").innerHTML=myCar.show();


//Use getters and setters in class

class football{
    constructor(brand){
        this.footballBrand=brand;
    }
    get fBrandName(){
        return this.footballBrand;
    }
    set fBrandName(x){
        this.footballBrand=x;
    }
}
const myFootball=new football("trionda");

//use setter to change the BALLNAME 
myFootball.fBrandName="telstar";

document.getElementById("demo2").innerHTML=myFootball.fBrandName;



class Player{
    constructor(name){
        this.playerName=name;
    }
}
const myPlayer = new Player("messi");
document.getElementById("demo3").innerHTML=myPlayer.playerName;

