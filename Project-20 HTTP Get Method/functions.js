let sendGetRequestBtn = document.getElementById("sendGetRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function getData(url) {
    let options = {
        method: "GET"
    };
    loading.classList.remove("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            //console.log(jsonData);
            loading.classList.add("d-none");
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData);
        });
}

sendGetRequestBtn.onclick = function() {
    let url = "https://gorest.co.in/public-api/users";
    getData(url);
};