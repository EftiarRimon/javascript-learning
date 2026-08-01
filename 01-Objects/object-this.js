const person={
    firstName:"Lionel",
    lastName:"Messi",
    id:"10",
    fullName:function(){
        return this.firstName +" "+ this.lastName;
    }
};

document.getElementById("demo5").innerHTML=person.fullName();

const person1={
    firstName:"john",
    lastName:"abraham",
    id:"100",
   myFunction: function() {
    return this;
   }
};
document.getElementById("demo4").innerHTML="this is " + person1.myFunction();

const person4={
    fullName:function(){
        return this.firstName+ " " +this.lastName;
    }
}

const person2={
    firstName:"john",
    lastName:"doe",
}
let x=person4.fullName.call(person2);

document.getElementById("demo3").innerHTML=x;

