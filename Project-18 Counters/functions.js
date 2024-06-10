let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let intervalId;

function clearPreviousTimers() {
    clearInterval(intervalId);
}

twentySecondsBtn.onclick = function() {
    let count = 20;
    clearPreviousTimers(intervalId);
    timerText.textContent = count + " seconds left";
    intervalId = setInterval(function() {
        if (count > 0) {
            count -= 1;
        } else {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
};

thirtySecondsBtn.onclick = function() {
    let count = 30;
    clearPreviousTimers(intervalId);
    timerText.textContent = count + " seconds left";
    intervalId = setInterval(function() {
        if (count > 0) {
            count -= 1;
        } else {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
};

fortySecondsBtn.onclick = function() {
    let count = 40;
    clearPreviousTimers(intervalId);
    timerText.textContent = count + " seconds left";
    intervalId = setInterval(function() {
        if (count > 0) {
            count -= 1;
        } else {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
};

oneMinuteBtn.onclick = function() {
    let count = 60;
    clearPreviousTimers(intervalId);
    timerText.textContent = count + " seconds left";
    intervalId = setInterval(function() {
        if (count > 0) {
            count -= 1;
        } else {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
};