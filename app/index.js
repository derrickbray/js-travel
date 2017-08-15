import 'whatwg-fetch';


const one = document.getElementById('one');
const two = document.getElementById('two');


function alert() {
  one.style.display = 'none';
  two.style.display = 'block';
}

one.onclick = alert;

function show() {
  two.style.display = 'none';
  one.style.display = 'block';
}

two.onclick = show;
