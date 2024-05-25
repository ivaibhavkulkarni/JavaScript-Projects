// label_list

let listTodoItems = [

];

let todoCount = listTodoItems.length;

// Function Structure

function createTodoStructure(){

    // Main bg Container

    let mainBgContainer = document.createElement("div");
    mainBgContainer.classList.add("todo-bg-container");
    document.body.appendChild(mainBgContainer);

    // Container

    let Container = document.createElement("div");
    Container.classList.add("container");
    mainBgContainer.appendChild(Container);

    // Row

    let Row = document.createElement("div");
    Row.classList.add("row")
    Container.appendChild(Row);

    // Elements Container 

    let elementContainer = document.createElement("div");
    Row.appendChild(elementContainer);
    // Main todo heading 

    let mainTodoHeading = document.createElement("h1");
    mainTodoHeading.classList.add("todos-heading");
    mainTodoHeading.textContent = "Todo.";
    elementContainer.appendChild(mainTodoHeading);


    // Create Heading 

    let createHeading = document.createElement("h2");
    createHeading.classList.add("create-text","mt-4");
    createHeading.textContent = "Create";
    elementContainer.appendChild(createHeading);
    // Create Heading Span
    let taskSpan = document.createElement("span");
    taskSpan.classList.add("tasks-text");
    taskSpan.textContent = " Tasks.";
    createHeading.appendChild(taskSpan);
    elementContainer.appendChild(createHeading);

    // input Container 

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("col-md-6","col-sm-12");
    elementContainer.appendChild(inputContainer);

    // input Element

    let inputElement  = document.createElement("input");
    inputElement.classList.add("todo-user-input")
    inputElement.type = "text";
    inputElement.id = "todoUserInput";
    inputElement.placeholder = "What needs to be done?";
    inputContainer.appendChild(inputElement);


    // Add Button 

    let addButton = document.createElement("button");
    addButton.classList.add("add-todo-button");
    addButton.textContent = "Add";
    addButton.id = "addButton";
    elementContainer.appendChild(addButton);

    // My Task Heading 

    let myTaskHeading = document.createElement("h3");
    myTaskHeading.classList.add("my-text");
    myTaskHeading.textContent = "My ";
    // Span Task
    let spanMyTask = document.createElement("span");
    spanMyTask.classList.add("tasks-text");
    spanMyTask.textContent = "Tasks.";

    myTaskHeading.appendChild(spanMyTask);
    elementContainer.appendChild(myTaskHeading);


    // Unordered list Container

    let todoItemContainer = document.createElement("ul");
    todoItemContainer.id = "todoItemContainer";
    elementContainer.appendChild(todoItemContainer);


}

// Functions for Status 

function onTodoStatusChanged(checkboxId,labelid){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelid);
    
    if (checkboxElement.checked === true ){
        labelElement.classList.add("checked");
    }
    else {
        labelElement.classList.remove("checked");
    }

    // we can also use Toggle for above cose 
    // labelElement.classList.toggle("checked");

}

// Function to delete 

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemContainer.removeChild(todoElement);
}



// Function for create and append Todo


function createAndAppendTodo(todoItems){
    
    // Assigning Unique checkbox id  and label element 
    let checkboxId = "checkbox" + todoItems.uniqueNo; 
    let labelid = "label" + todoItems.uniqueNo;
    let todoId = "todo" + todoItems.uniqueNo;


    // Creating List------------------------------------>

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row")
    todoElement.id = todoId;
    todoItemContainer.appendChild(todoElement);


    // Check box

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = checkboxId;
    checkBox.classList.add("checkbox");

    // checking if the checkbox is clicked or not 
    checkBox.onclick = function(){
        onTodoStatusChanged(checkboxId,labelid);
    }

    todoElement.appendChild(checkBox);


    // Label Container

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container","col-11","mt-2")
    todoElement.appendChild(labelContainer);

    // Label 

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("label-text");
    labelElement.id = labelid;
    labelElement.textContent = todoItems.text;
    labelContainer.appendChild(labelElement);


    // Delete Container and button  

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container");


    // delete icon link 

    deleteContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
    </svg>`
    deleteContainer.onclick = function(){
        onDeleteTodo(todoId);
    } 
    labelContainer.appendChild(deleteContainer);


}

createTodoStructure();

for (let items of listTodoItems){
    createAndAppendTodo(items);
}
    

function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    todoCount = todoCount + 1;
    if (userInputValue === ""){
        alert("Enter a valid Input");
        return;
    }
    let newTodo ={
        text : userInputValue,
        uniqueNo :  todoCount
    }

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}


let addTodoButton = document.getElementById("addButton");
addTodoButton.onclick = function(){
    onAddTodo();
}