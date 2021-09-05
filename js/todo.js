const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

let toDos=[];
function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}
function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;
    const button=document.createElement("button");
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",deleteToDo);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo); 
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);
function sayHello(item){
    paintToDo(item);
}
const savedToDos=localStorage.getItem("toDos")
if(saveToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(sayHello);
}