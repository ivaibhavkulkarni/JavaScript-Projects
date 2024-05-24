// Grocery Items 

groceryItem = ["Tooth Paste","Milk","PeaNut Butter","Choco Chips",
    "Juice","Soaps"]


// Div Container 

let divMainContainer = document.createElement("div");
divMainContainer.classList.add("bg-container");
document.body.appendChild(divMainContainer);

// h1 heading 

let mainHeading = document.createElement("h1");
mainHeading.classList.add("heading");
mainHeading.textContent = "Grocery List";
divMainContainer.appendChild(mainHeading);

// Unordered list
let listContainer = document.createElement("ul"); 
listContainer.classList.add("list-container");
divMainContainer.appendChild(listContainer);

// list 

for (item of groceryItem){
    let list = document.createElement("li");
    list.textContent = item;
    listContainer.appendChild(list);
    divMainContainer.appendChild(listContainer);
}


// input Element

let CheckboxElement = document.createElement("input");
CheckboxElement.type = "checkbox";
CheckboxElement.id = "checkBox";
divMainContainer.appendChild(CheckboxElement);

// label for checkBox

let label = document.createElement("label");
label.classList.add("delivery-text");
label.setAttribute("for","checkBox");
label.textContent = "Need home delivery";
divMainContainer.appendChild(label);


// Button 

let buttonElelemnt = document.createElement("button");
buttonElelemnt.classList.add("btn","btn-primary");
buttonElelemnt.textContent = "Proceed to Pay";


// Button Container 

let buttonContainer = document.createElement("div");
buttonContainer.classList.add("mt-4")
buttonContainer.appendChild(buttonElelemnt);
divMainContainer.appendChild(buttonContainer);









