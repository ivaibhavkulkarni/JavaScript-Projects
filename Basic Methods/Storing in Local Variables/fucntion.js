/*
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

*/

// Splice 

let Myarray = [5,"six",2,5.8];
let deletedItem = Myarray.splice(2,2);
console.log(deletedItem);

// Replacing items using splice 

Myarray.splice(2,2,"one","Flase");
console.log(Myarray); 

// adding

Myarray.splice(2,0,1);

// knowing the index of an item

let array = [5,12,3,5,7,8];
let indexItem = array.findIndex(function(eachitem){
    if (eachitem === 8){
        return true;
    }
    else{
        return false;
    }
});
console.log(indexItem);








