let myForm = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameER = document.getElementById("nameER");
let emailER = document.getElementById("emailER");
let emailEl = document.getElementById("Email")

myForm.addEventListener("submit",function(event){
    event.preventDefault();
});


nameEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        nameER.textContent = "Required*";
    }
    else{
        nameER.textContent = "";
    }
})


emailEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        emailER.textContent = "Required*";
    }
    else{
        emailER.textContent = "";
    }
})