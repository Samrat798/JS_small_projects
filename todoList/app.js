const form = document.querySelector('.form-control');
const inputTask = document.getElementById('todo-input');
const submitBtn = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');

const todos = [];

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
      ${item.task}
      <div class="btn-container">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    todoList.append(li);
  });
}
