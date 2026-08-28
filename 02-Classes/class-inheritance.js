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