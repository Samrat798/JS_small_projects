const form = document.querySelector('.form-control');
const inputTask = document.getElementById('todo-input');
const submitBtn = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');

let todos = [];

submitBtn.addEventListener('click', addItem);

function addItem(e) {
  e.preventDefault();
  if (inputTask.value === '') {
    inputTask.value = '';
    return;
  }
  const newTask = {
    task: inputTask.value,
    id: Date.now(),
    completed: false,
  };
  todos.push(newTask);
  addToLocalStorage(todos);
  inputTask.value = '';
  console.log(todos);
}

function renderTask(todos) {
  todoList.innerHTML = '';
  todos.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.setAttribute('data-key', item.id);
    li.innerHTML = `
      <input type='checkbox'/>
      ${item.task}
      <div class="btn-container">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    todoList.append(li);
  });
}

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTask(todos);
}

function getFromLocalStorage() {
  const localTodo = localStorage.getItem('todos');
  if (localTodo) {
    todos = JSON.parse(localTodo);
    renderTask(todos);
  }
}
getFromLocalStorage();

function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed ? (completed = true) : (completed = false);
    }
  });
}

todoList.addEventListener('click', function (e) {
  if (e.target.type === 'checkbox') {
    toggle(e.target.parentElement.getAttribute('data-key'));
  }
});
