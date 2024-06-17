let questionsForm = document.getElementById("questionsForm");
let submitBtn = document.getElementById("submitBtn");
let resultMsg = document.getElementById("resultMsg");
let cityHyderabad = document.getElementById("cityHyderabad"); 
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");

let selectedCity;

cityHyderabad.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityChennai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityDelhi.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityMumbai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});



questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === undefined) {
        resultMsg.classList.add("error");
        resultMsg.textContent = "Please select the answer!";
    } else if (selectedCity === "Delhi") {
        resultMsg.textContent = "Correct Answer!";
        resultMsg.className = "correct";
    } else {
        resultMsg.textContent = "Wrong Answer!";
        resultMsg.className = "error";
    }
});