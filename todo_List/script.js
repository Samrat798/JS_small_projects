let tasks = [];

const input = document.querySelector('.input');
const add = document.querySelector('.add');
const listDom = document.querySelector('.list');

window.addEventListener('load', getFromLocalStorage());

add.addEventListener('click', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  if (!input.value) {
    return alert('Please enter an task!');
  }
  const task = input.value;
  const newTask = {
    id: Date.now(),
    task,
    done: false,
  };
  tasks.push(newTask);
  saveToLocalStorage(tasks);
  input.value = '';
  console.log(listDom);
}

function displayTask(tasks) {
  listDom.innerHTML = '';
  tasks.map((task) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.setAttribute('data-key', task.id);
    li.innerHTML = `${task.task}
        <div class="btn-container">
            <button class="btn delete">Delete</button> 
            <button class="btn edit">Edit</button>
        </div>
    `;
    listDom.appendChild(li);
  });
}

function saveToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTask(todos);
}

function getFromLocalStorage() {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    tasks = JSON.parse(storedTodos);
    displayTask(tasks);
  }
}

function deleteItem(id) {
  tasks = tasks.filter((task) => task.id != id);
  saveToLocalStorage(tasks);
  displayTask(tasks);
}

listDom.addEventListener('click', function (e) {
  const todoItem = document.querySelector('.list-item');
  todoItem.classList.toggle('strik');
  if (e.target.classList.contains('delete')) {
    console.log(e.target.parentNode.parentNode.getAttribute('data-key'));
    deleteItem(e.target.parentNode.parentNode.getAttribute('data-key'));
  }
});
