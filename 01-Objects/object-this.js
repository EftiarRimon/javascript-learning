const person={
    firstName:"Lionel",
    lastName:"Messi",
    id:"10",
    fullName:function(){
        return this.firstName +" "+ this.lastName;
    }
};

document.getElementById("demo5").innerHTML=person.fullName();