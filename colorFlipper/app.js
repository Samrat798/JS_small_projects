const textInput = document.querySelector('.input');
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

// document.addEventListener('DOMContentLoaded', function () {
//   const navItems = document.querySelectorAll('.nav_item');
//   navItems.forEach((item) =>
//     item.addEventListener('click', function () {
//       navItems.forEach((navItem) => navItem.classList.remove('active'));
//       this.classList.add('active');
//     })
//   );
// });

// Code for input color flipper
btn.addEventListener('click', function (e) {
  e.preventDefault();
  let bgColor = textInput.value;
  document.body.style.backgroundColor = bgColor;
  color.innerHTML = bgColor;
  textInput.value = '';
});

// Code for color flipper with an array
