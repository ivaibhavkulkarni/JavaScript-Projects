let requestBody = document.getElementById("requestBody");
let sendPostRequestBtn = document.getElementById("sendPostRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function postData(){
    let content = requestBody.value;
    let option = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json",
            Authorization : "Bearer 601811742abaf96399830214ef6444e32aeaf0d0ea042ca21e7c07f710c0c15f"
        },
        body:content
    };
    loading.classList.remove("d-none");
    let url = "https://gorest.co.in/public-api/users";
    fetch(url,option)
        .then(function (response){
            return response.json();
        })
        .then(function (jsonData){
            //console.log(jsonData);
            loading.classList.add("d-none");
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData);
        });
        
}

sendPostRequestBtn.addEventListener("click",postData);




