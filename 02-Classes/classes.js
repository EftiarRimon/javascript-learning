class Car {
    constructor (name, year){
        this.name=name;
        this.year=year;
    }
}

const myCar1=new Car("Audi", 2020);
const myCar2=new Car("Ford","2026");

document.getElementById("demo").innerHTML=myCar1.name+
"  is from year: "+myCar1.year+"<br>"+myCar2.name+
" is from year: "+myCar2.year;