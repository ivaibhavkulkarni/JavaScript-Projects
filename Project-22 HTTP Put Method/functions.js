let userInput = document.getElementById("userInput");
let requestBody = document.getElementById("requestBody");
let sendPutRequestBtn = document.getElementById("sendPutRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function putRequest(){
    let content = requestBody.value;
    let url = "https://gorest.co.in/public-api/users/" + content;
    
    let option = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json",
            Authorization : "Bearer 601811742abaf96399830214ef6444e32aeaf0d0ea042ca21e7c07f710c0c15f"
        },
        body:content
    };
    
    loading.classList.remove("d-none");
    fetch(url,option)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            loading.classList.add("d-none");
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData);
        });
}

sendPutRequestBtn.addEventListener("click",putRequest);
