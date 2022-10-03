const createBtn = document.getElementById("create-btn");
const containerTask = document.getElementById("container-task");
const btnAdd = document.getElementById("btn-add");
const btnCancel = document.getElementById("btn-cancel");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");

let tasks = [];
let count = 0;

class Task {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }
}

createBtn.addEventListener("click", () => {
  containerTask.classList.add("container-task-show");
  containerTask.classList.remove("container-task-hidden");
  createBtn.classList.remove("btn-create");
  createBtn.classList.add("btn-create-hidden");
});

btnCancel.addEventListener("click", () => {
  closeContainerTask();
});

btnAdd.addEventListener("click", () => {
  if (inputTask.value.length > 0) {
    tasks.push(new Task(count, inputTask.value));
    count++;
    showTasks();
  }
  closeContainerTask();
});

function closeContainerTask() {
  containerTask.classList.add("container-task-hidden");
  containerTask.classList.remove("container-task-show");
  createBtn.classList.add("btn-create");
  createBtn.classList.remove("btn-create-hidden");
}

function showTasks() {
  taskList.innerHTML = ``;

  tasks.map((task) => {
    taskList.innerHTML += `
            <li class ="task" id=${task.id}>${task.value}</li>
        `;
  });
}
taskList.addEventListener("click", (e) => {
  e.target.remove();
  let tasksFilter = [];
 
  tasks.map((task) => {
    if (task.id != e.target.id) {
      tasksFilter.push(task);
    }
  });

  tasks = tasksFilter;
});
