const taskInput = document.querySelector('.input-task');
const addBtn = document.querySelector('.add');
const taskContainer = document.querySelector('.task-list');

const taskList = [];

function addTask(e) {
  e.preventDefault();
  const newTask = {
    task: taskInput.value,
    id: Date.now(),
    complete: false,
  };
  taskList.push(newTask);
  taskInput.value = '';
  console.log(taskList);
}

addBtn.addEventListener('click', addTask);
