let redButton = document.getElementById("stopButton");
let redBulb = document.getElementById("stopLight");
let yellowButton = document.getElementById("readyButton");
let yellowBulb = document.getElementById("readyLight");
let greenButton = document.getElementById("goButton");
let greenBulb = document.getElementById("goLight");

function onRedLight(){
    redButton.style.backgroundColor = "#cf1124";
    redBulb.style.backgroundColor = "#cf1124";
    yellowButton.style.backgroundColor = "#1f1d41";
    greenButton.style.backgroundColor = "#1f1d41";
    yellowBulb.style.backgroundColor= "#4b5059";
    greenBulb.style.backgroundColor = "#4b5059";
}

function onyellowLight(){
    redButton.style.backgroundColor = "#1f1d41";
    redBulb.style.backgroundColor = "#4b5059";
    yellowButton.style.backgroundColor = "#f7c948";
    greenButton.style.backgroundColor = "#1f1d41";
    yellowBulb.style.backgroundColor= "#f7c948";
    greenBulb.style.backgroundColor = "#4b5059";
}

function ongreenLight(){
    redButton.style.backgroundColor = "#1f1d41";
    redBulb.style.backgroundColor = "#4b5059";
    yellowButton.style.backgroundColor = "#1f1d41";
    greenButton.style.backgroundColor = "#199473";
    yellowBulb.style.backgroundColor= "#4b5059";
    greenBulb.style.backgroundColor = "#199473";
}