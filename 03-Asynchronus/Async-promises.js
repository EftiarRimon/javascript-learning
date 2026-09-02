fetch("03-Asynchronus/message.txt")
.then(function(response){
    return response.text()
})
.then(function(data){
    myDisplayer(data);
})
.catch(function(error){
    myDisplayer(error);
})
.finally(function() {
  myDisplayer("Finished!");
});

function myDisplayer(fileErVitoreJaAche){
console.log(fileErVitoreJaAche);
}



//Create own Promise

//const promise=new promise(function(resolve,reject){
  //  if (success){
      //  resolve(value);
    //} else{
        //reject(error);
    //}
//});


let myPromise=new Promise(function(resolve,reject){
    let success=false;
    if(success){
        resolve("Done");
    }else{
        reject("Failed");
    }
});

myPromise.then(function(value)
    {myDisplayerAccept(value)}, function(value){myDisplayerReject("error :"+value)}
);
function myDisplayerAccept(text){
    document.getElementById("demo2").innerHTML=text;
}
function myDisplayerReject(text){
    document.getElementById("demo2").innerHTML=text;
}


//Running Functions in Steps

function myDisplayerNew(some){
    document.getElementById("demo3").innerHTML=some;
}

function step1(){
    return Promise.resolve("A")
};
function step2(value){
    return Promise.resolve(value+"B")
};
function step3(value){
    return Promise.resolve(value+"C")
};

step1()
.then(function(value){
    return step2(value)
})
.then(function(value){
    return step3(value)
})
.then(function(value){
    return myDisplayerNew(value)
});



//Use catch to Handle Errors

fetch("missing.txt")
.then(function(response){
    if(!response.ok){
        throw new Error(response.status);
    }
    return response.text();
})
.catch(function (error){
myDisplayerNew2(error.message)
});
function myDisplayerNew2(textt){
    document.getElementById("demo5").textContent =textt;
}


myDisplayer4("Start");

fetch("03-Asynchronus/message.txt")
.then(function(){
    myDisplayer4("END!")
});

myDisplayer4("Running. . . .")

function myDisplayer4(text){
    document.getElementById("demo6").innerHTML+=text+"<br>";
}