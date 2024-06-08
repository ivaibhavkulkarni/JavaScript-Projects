let defuseEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let count = 10;
function counter(){
    count = count - 1;
    timerEl.textContent = count;

    // Stopping interval
    if (count === 0){
        timerEl.textContent = "BooooooooooooM";
        clearInterval(intervalid);
    }
}

let intervalid = setInterval(counter,1000);

// to defuse this bomb

function defuse(event){
    let defuserValue = defuseEl.value;
    if (defuserValue === "DeFuse" && count !== 0 && event.key === "Enter"){
        timerEl.textContent = "You Did it!!!!";
        clearInterval(intervalid);
    }

}


defuseEl.addEventListener("keydown",defuse);