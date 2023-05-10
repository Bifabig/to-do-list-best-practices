import './style.css';
import { addTodo, deleteAll, renderTodos } from './functions.js';

document.querySelector('.text-input').addEventListener('keypress', (input) => {
  if (input.key === 'Enter') {
    if (input.target.value !== '') {
      addTodo(input.target.value);
    }
    renderTodos();
    input.target.value = '';
  }
});

document.querySelector('.clear-btn').addEventListener('click', () => {
  deleteAll();
});

renderTodos();
