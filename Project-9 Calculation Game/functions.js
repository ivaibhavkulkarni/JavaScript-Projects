let operatorArray = ["+","-","*"];
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let operators = document.getElementById("operatorS");
var firstNumber1;
var secondNumber2;
var selectedoperatorS;

function restartGame(){
    firstNumber1 = Math.floor(Math.random() * 101);
    secondNumber2 = Math.floor(Math.random() * 101);
    selectedoperatorS = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    firstNumber.textContent = firstNumber1;
    secondNumber.textContent = secondNumber2;
    operators.textContent = selectedoperatorS;
    userInput.value = "";
    gameResult.textContent = "";

}

restartGame();


function checkResult(){
    let userInputValue = parseInt(userInput.value);

    let totalNum;

    if (isNaN(userInputValue)){
        gameResult.textContent = "Please enter valid Number."
        gameResult.style.backgroundColor = "red";
        return;
    }

    switch (selectedoperatorS){

        case "+":
            totalNum = firstNumber1 + secondNumber2;
            break;

        case "-":
            totalNum = firstNumber1 - secondNumber2;
            break;
        
        case "*":
            totalNum = firstNumber1 * secondNumber2;
            break;

    }


    if (totalNum === userInputValue){
        gameResult.textContent = "Congratulations !! You got it Right."
        gameResult.style.backgroundColor = "#028a0f";
    }

    else{
        gameResult.textContent = "Please Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }

}