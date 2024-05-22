let h1Element = document.createElement('h1');
h1Element.textContent = "Hello World";

let containerElement = document.getElementById("containerElement");
containerElement.appendChild(h1Element)

let buttonElement = document.createElement("button");
buttonElement.textContent = "Change Heading";


// Function Expression

buttonElement.onclick = function(){
    h1Element.textContent = "This is built using Java Script!!!";
    h1Element.classList.add("heading");
};

containerElement.appendChild(buttonElement);


let removeStyle = document.createElement("button");
removeStyle.textContent = "Remove Style";

removeStyle.onclick = function(){
    h1Element.classList.remove("heading");
};

containerElement.appendChild(removeStyle);


// Creating Checkbox

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckBox";
document.body.appendChild(inputElement);

// Adding label

let labelElement = document.createElement("label");
labelElement.htmlFor = "myCheckBox";
labelElement.textContent = "Are you Vaibhav kulkarni ?";
document.body.appendChild(labelElement);


// An other way of adding label
let inputElement1 = document.createElement("input");
inputElement1.type = "checkbox";
inputElement1.id = "myCheckBox2";
document.body.appendChild(inputElement1);


let labelElement1 = document.createElement("label");
labelElement1.setAttribute("for","myCheckBox2");
labelElement1.textContent = "male";
document.body.appendChild(labelElement1);