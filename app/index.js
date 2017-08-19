import 'whatwg-fetch';


const one = document.getElementById('one');
const two = document.getElementById('two');


function alert() {
  one.style.display = 'none';
  two.style.display = 'block';
}

one.onmouseover = alert;

function show() {
  two.style.display = 'none';
  one.style.display = 'block';
}

two.onmouseout = show;


const modal = document.querySelector('.modal');
modal.style.display = 'none';
//
// const picBox = document.querySelectorAll('.pic-box');
// picBox.addEventListener('click', () => {
//   modal.style.display = 'block';
// }, true);
//
// Array.from(picBox).forEach(() => {
//   modal.classList.toggle('click');
// });
