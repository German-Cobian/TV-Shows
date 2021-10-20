import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import displayCommentPopup from './comments.js';

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');

button1.addEventListener('click', () => displayCommentPopup(1));
button2.addEventListener('click', () => displayCommentPopup(2));