const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //check parentNode
    // console.dir(event.target.parentElement.innerText);
    console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    console.log(li.id);
    function myFilter(item){
        console.log("ìì´íid",item.id);
        console.log("liID",li.id)
        console.log(item.id !== parseInt(li.id))
        return item.id !== parseInt(li.id)
    }
    const newtoDos =toDos.filter(myFilter);
    console.log(toDos.filter(myFilter))
    console.log(myFilter(toDos))
    toDos = newtoDos;
    console.log(toDos);
    saveToDos();
    // toDos.filter( item => item !== parseInt(li.id))
    li.remove();
}

function paintToDo(newTodo) {
    console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "â"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is turn of",item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //ë¡ì»¬ìë°°ì´ì´ ììë ì´ì  ë°°ì´ë¡ ì¸í
    toDos = parsedToDos;
    console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);
    //parsedToDosë§ë¤ paintToDo ì¤í
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(item) { return item !== 3

}
[1, 2, 3, 4].filter(sexyFilter)

sexyFilter()