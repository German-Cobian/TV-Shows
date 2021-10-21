import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import displayCommentPopup from './comments.js';

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');

button1.addEventListener('click', () => displayCommentPopup(1));
button2.addEventListener('click', () => displayCommentPopup(2));