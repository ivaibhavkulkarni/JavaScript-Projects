let formData = {
    name : "",
    email : "",
    status : "Active",
    gender : "Male"
};



let myForm = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameER = document.getElementById("nameER");
let emailER = document.getElementById("emailER");
let emailEl = document.getElementById("Email")
let workingStatus = document.getElementById("status");
let genderMale = document.getElementById("genderMale");
let genderFemale = document.getElementById("genderFemale");

function submitFormData(formData){
    
    let option = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : "Bearer 1018df7ac080ef5bf18dc890c8674cb30a2da1624c32c5316aa07adc6e75b57c"
        },
        body:JSON.stringify(formData)
    };

    let url = "https://gorest.co.in/public/v2/users"
    fetch(url,option)
        .then(function(response){
            return response.json();
        })
        .then(function (jsonData){
            console.log(jsonData);
            if (jsonData[0].message === "has already been taken"){
                emailER.textContent = "Email Already Exists.";
            }
        });
}


myForm.addEventListener("submit",function(event){
    event.preventDefault();
    submitFormData(formData);
});


nameEl.addEventListener("change",function(event){
    if (event.target.value === ""){
        nameER.textContent = "Required*";
    }
    else{
        nameER.textContent = "";
    }
    formData.name = event.target.value;
})


emailEl.addEventListener("change",function(event){
    if (event.target.value === ""){
        emailER.textContent = "Required*";
    }
    else{
        emailER.textContent = "";
    }
    formData.email = event.target.value;
});


workingStatus.addEventListener("change",function(event){
    formData.status = event.target.value;
});

genderMale.addEventListener("change",function(event){
    formData.gender = event.target.value;
})

genderFemale.addEventListener("change",function(event){
    formData.gender = event.target.value;
})

