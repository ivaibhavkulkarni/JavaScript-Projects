
let buttonElement = document.getElementById("saveButton");
let textConatiner = document.getElementById("textArea");


buttonElement.onclick = function(){
    let textvalue = textConatiner.value;
    localStorage.setItem("userInput",textvalue);
}

let storedValue = localStorage.getItem("userInput");
textConatiner.value = storedValue;

if (textvalue === null){
    textConatiner.value = "";
}
else{
    textConatiner.value = storedValue; 
}