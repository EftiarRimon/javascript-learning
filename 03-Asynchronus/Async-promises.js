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

