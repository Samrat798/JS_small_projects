const form = document.querySelector('.form-control');
const inputTask = document.getElementById('todo-input');
const submitBtn = document.querySelector('.todo-submit');
const todoContainer = document.querySelector('.todo-container');
const todoList = document.querySelector('.todo-list');

const todos = [];

submitBtn.addEventListener('click', addItem);

function addItem(e) {
  e.preventDefault();
  if (inputTask.value === '') {
    alert('Enter a task...');
    return;
  }
  let newTask = {
    task: inputTask.value,
    id: new Date().getTime().toString(),
    edit: false,
  };
  todos.push(newTask);
  inputTask.value = '';
  console.log(todos);
}

// function createListItem(item) {
//   const element = document.createElement('article');
//   element.classList.add('todo-item');
//   const attr = document.createAttribute('data-id');
//   attr.value = id;
//   element.setAttribute(attr);
//   element.innerHTML = `
//     <p class="title">${value}</p>
//     <div class="btn-container">
//       <button type="button" class="edit-btn">
//         <i class="fas fa-edit"></i>
//       </button>
//       <button type="button" class="delete-btn">
//         <i class="fas fa-trash"></i>
//       </button>
//     </div>
//   `;
//   todoList.appendChild(element);
// }
