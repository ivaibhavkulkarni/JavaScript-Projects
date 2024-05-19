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