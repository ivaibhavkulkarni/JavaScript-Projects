let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let intervalId;

function clearPreviousTimer(){
    clearInterval(intervalId);
};

function startTimer(duration){
    let count = duration;
    clearPreviousTimer(intervalId);
    timerText.textContent = count + " seconds left";
    intervalId = setInterval(function(){
    if (count > 0){
        count = count - 1;
        timerText.textContent = count + " seconds left";
    }
    else{
        timerText.textContent = "Your moment is complete";
        clearInterval(intervalId);
    }
    },1000);
}

twentySecondsBtn.onclick = function(){
    startTimer(20);
};

thirtySecondsBtn.onclick = function(){
    startTimer(30);
};

fortySecondsBtn.onclick = function(){
    startTimer(40);
};

oneMinuteBtn.onclick = function(){
    startTimer(60);
};
