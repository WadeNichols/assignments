//GETTING ALL OF MY DATA
var url = "https://api.vschool.io/wade/todo/";

//getRequest is a PROMISE
var getRequest = axios.get(url)
getRequest.then(function(response){
    var todos = response.data;
    todos.forEach(function(todo) {
        var li = document.createElement("li");
        li.innerText = todo.title;
        ul.appendChild(li);
    })
})
.catch(function(err){
    console.log(err);
})

function displayTodo(function){
    var li = document.createElement("li");
    li.innerText = todo.title;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.id = todo._id;
    deleteBtn.addEventListener("click", handleDelete);

    var completedForm = document.createElement("form");
    completedForm.innerText = "Completed: ";
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo._id;
    input.checked = todo.completed
    input.addEventListener("input", handledComplete)

    
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    li.appendChild(completedForm);
    completedForm.appendChild(input);
}

function handleComplete(e){
    var input = this;
    var putRequest = axios.put(url + input.id, {completed: input.checked})
        
        .catch(function(err){
            console.log(err);
        })
}

function handleDelete(e){
    var deleteBtn = this;
    var deleteRequest = axios.delete(url + this.id);
    deleteRequest.then(function(response){
        ul.removeChild(this.parentNode);
    })
    .catch(function(err){
        console.log(err);
    })
}

form.addEventListener("submit", handleNewTodo)
    e.preventDefault();
function handleNewTodo(e){
    var todo = {
        title: this.title.value,
        description: this.description.value,
        price: this.price.value
    }
    var postRequest = axios.post(url, todo)
    postRequest.then(function(response){
        var recievedToDo = response.data;
        displayTodo(revievedTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

var promise = new Promise(function(resolve, reject){
    var coinFlip = Math.random() < .5;
    setTimeout(function(){
        if(coinFlip){
            resolve("HEADS");
        } else {
            reject("TAILS");
        }
    }, 2000)
});

promise.then(function(result){
    console.log("The coin is " + result);
})

.catch(function(result){
    console.log("The coin is " + result);
})