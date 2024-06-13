let userInput = document.getElementById("userInput");
let sendDeleteRequestBtn = document.getElementById("sendDeleteRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function deleteData(){
    let content = userInput.value; 
    let url = "https://gorest.co.in/public-api/users/" + content;
    let option = {
        method : "DELETE"
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


sendDeleteRequestBtn.addEventListener("click",deleteData);
