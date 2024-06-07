// Type 1

function displayGreeting(displayName){
    console.log("Hi");
    displayName();
    console.log("Good Morning");
}

displayGreeting(function(){
    console.log("Vaibhav");
});

console.log("--------------------------------------------")
// Type 2

function displayGreeting(){
    console.log("Hello");
    displayName();
    console.log("Good night");
}

function displayName(){
    console.log("Ram");
}

displayGreeting(displayName);

