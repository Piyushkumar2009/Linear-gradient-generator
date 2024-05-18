const input = document.getElementById('input');

const btn = document.getElementById('btn');

const tasks = document.querySelector('.tasks');

const addTodo = () =>{
  let pElem = document.createElement('p');
  pElem.textContent = input.value;
  tasks.append(pElem);
  input.value='';
}

btn.addEventListener('click',()=>{
  addTodo();
})

tasks.addEventListener('click',(event)=>{
  let currentElem = event.target;
  currentElem.remove();
})