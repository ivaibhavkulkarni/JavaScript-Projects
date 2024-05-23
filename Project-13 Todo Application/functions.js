let todoItemContainer = document.getElementById("todoItemContainer");


let todoList = [
    {
        text:"learn Html"
    },
    {
        text:"learn Css"
    },
    {
        text:"learn JS"
    }

];


function createAndAppendTodo(todo){
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoItemContainer.appendChild(todoElement);


    let inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.id = "radioButtonInput";
    inputElement.classList.add("radio-button")
    todoElement.appendChild(inputElement);


    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row","col-11");
    todoElement.appendChild(labelContainer);


    let labelElement = document.createElement("label");
    labelElement.setAttribute("for","radioButtonInput");
    labelElement.classList.add("label-text")
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);


    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("delete-icon-container")
    labelContainer.appendChild(deleteContainer);

    deleteContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
    </svg>`;
}



for (let todo of todoList){
    createAndAppendTodo(todo);
}
