let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let count = 0;
let timeInterval;
function startTimer() {
        clearInterval(timeInterval);
        count = 0;
        timeInterval = setInterval(function() {
        timer.innerHTML = `<h1> ${count}<span class="seconds pl-2">seconds <span> <h1>`;
        count += 1;
    }, 1000);
}


function getRandomQuote() {
    let apiKey = "H4ngx+RSSJYLs5I4cVKZuQ==gxUpzED9rcbA9Itj";
    let option = {
        method: "GET",
        headers: {
            'x-api-Key': apiKey,
        }
    };
    spinner.classList.remove("d-none");
    let category = 'happiness'; 
    let url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplay.textContent = jsonData[0].quote;
            spinner.classList.add("d-none");
            //console.log(jsonData);
        });

}


getRandomQuote();
startTimer();

resetBtn.onclick = function() {
    clearInterval(timeInterval);
    getRandomQuote();
    timer.innerHTML = `<h1> 0<span class="seconds pl-2">seconds <span> <h1>`;
    startTimer();
    quoteInput.value = "";
    result.textContent = "";
};

submitBtn.onclick = function(){
    if(quoteInput.value === quoteDisplay.textContent){
        clearInterval(timeInterval);
        result.innerHTML = `<p>You have typed in ${count-1} seconds</p>`;
    }
    else{
        result.textContent = "You have typed incorrect sentence";
    }
};

