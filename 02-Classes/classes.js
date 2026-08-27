class Car {
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}

const myCar1=new Car("Audi", 2020);
const myCar2=new Car("Ford","2026");

document.getElementById("demo").innerHTML=myCar1.name+
"  is from year: "+myCar1.year+"<br>"+myCar2.name+
" is from year: "+myCar2.year;


class laptop{
    constructor(model,year){
        this.name=model;
        this.year=year;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}
const myLaptop=new laptop("Dell",2018);
const mylaptop2=new laptop("lenovo",2020);

document.getElementById("demo1").innerHTML= "My "+
myLaptop.name+" laptop is "+myLaptop.age()+" years old"+
"<br>"+"My new "+mylaptop2.name+" laptop is "+mylaptop2.age()+
" years old";