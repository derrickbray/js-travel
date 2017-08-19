import 'whatwg-fetch';


const one = document.getElementById('one');
const two = document.getElementById('two');

function oneShow() {
  one.style.display = 'block';
  two.style.display = 'none';
}

function twoShow() {
  one.style.display = 'none';
  two.style.display = 'block';
}

one.onmouseover = twoShow;
two.onmouseout = oneShow;


const modal = document.querySelector('.modal');


//
// const picBox = document.querySelectorAll('.pic-box');
// picBox.addEventListener('click', () => {
//   modal.style.display = 'block';
// }, true);
//
// Array.from(picBox).forEach(() => {
//   modal.classList.toggle('click');
// });
