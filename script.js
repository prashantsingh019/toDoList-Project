const userInput = document.querySelector("#takeInput");
const addBtn = document.querySelector(".addBtn");
const child2 = document.querySelector(".child2");
var taskSno = 1;
addBtn.addEventListener("click",addTask);
function addTask(){
  const toDoDiv = document.createElement("div");
  const task = document.createElement("p");
  if(userInput.value == "") return;
  task.innerHTML =(`${taskSno}.`+" "+ userInput.value);
  toDoDiv.classList.add("task");
  toDoDiv.appendChild(task);
  child2.appendChild(toDoDiv);
  const deleteBtn = document.createElement("button");
  toDoDiv.appendChild(deleteBtn);
  deleteBtn.innerHTML ='<i class="ri-delete-bin-7-line"></i>';
  deleteBtn.classList.add("deletebtn");
  userInput.value = '';
  taskSno++;
 toDoDiv.addEventListener("click",deleteItem);

function deleteItem(e){
  const item = e.target;
  if(item.classList[0] === "deletebtn"){
    const parent = item.parentElement;
    console.log(parent);
    parent.remove();
  }
}
}