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

function myDisplayer(text){
    document.getElementById("demo").textContent =text;
}
