// Add event Listener

function functionName(){
    console.log("hi");
}

let Btn = document.createElement("button");
Btn.addEventListener("click",functionName);


// Event Types

//KeyDown

Btn.addEventListener("keydwon",functionName);

// Key Event and return what ever we typed 

function printKey(event){
    console.log(event.key);
}

Btn.addEventListener("keydown",printKey);

