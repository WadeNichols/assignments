
// GLOBAL DOM ELEMENTS
var addForm = document.querySelector("#add-form");
var todoList = document.querySelector("#todo-list");

addForm.addEventListener("submit", handleSubmit)

// HELPER FUNCTION TO HANDLE FORM SUBMISSION
function handleSubmit(e) {
    e.preventDefault();

    // STORE INPUT DATA AS AN OBJECT
    var todo = {
        title: this.title.value,
        description: this.description.value,
        price: +this.price.value,
    }


    // DISPLAY DATA TO THE DOM
    displayTodoItem(todo);

    // CLEAR INPUTS
    addForm.reset();
}

// HELPER FUNCTION TO DISPLAY TODO INFO
function displayTodoItem(todo) {

    // CREATE EACH DOM ELEMENT

    // WRAPPER
    var wrapper = document.createElement("div");
    wrapper.classList.add("todo-item-container");

    // TITLE
    var h3 = document.createElement("h3");
    h3.innerText = todo.title;

    // PRICE
    var price = document.createElement("p");
    price.innerText = "Price: $" + todo.price;

    // CHECKBOX
    var label = document.createElement("label");
    label.innerText = "Completed:";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("input", handleCompleted);

    function handleCompleted(e) {
        label.classList.toggle("completed");
    }

    // DESCRIPTION
    var desc = document.createElement("p");
    desc.innerText = todo.description;

    // DELETE BUTTON
    var button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", handleDelete);

    // APPEND EVERYTHING TO THE PAGE
    var children = [h3, label, checkbox, price, desc, button];
    children.forEach(function (el) {
        wrapper.appendChild(el);
    });
    todoList.appendChild(wrapper);
}

function handleDelete(e) {

    // REMOVES THE TODO WRAPPER FROM THE DOM
    todoList.removeChild(this.parentNode);
}

