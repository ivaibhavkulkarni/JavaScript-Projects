let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

function addWordsToCloud(){
    let userMsg = userInput.value;
    if (userMsg === ""){
        errorMsg.textContent = "Please Enter a word";
    }
    
    else{
    errorMsg.textContent = "";
    let userMsg = userInput.value;
    wordCloud.push(userMsg);
    wordsContainer.innerHTML = "";
    for (let word of wordCloud){
        let msgE1 = document.createElement("span");
        let randomFontSize = (Math.ceil(Math.random() * 50)) + "px";
        msgE1.style.fontSize = randomFontSize;
        msgE1.textContent = word;
        wordsContainer.appendChild(msgE1);
    }
    userInput.value = "";
}
}
addBtn.onclick = function(){
    addWordsToCloud();
}





