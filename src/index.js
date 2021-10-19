import './style.css';
import Logo from './img/logo.png';
import { displayCommentPopup } from './comments.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

const button = document.querySelectorAll('[data-id="33492"]')[0];

button.addEventListener('click', (e) => {
  const tvshowId = e.target.getAttribute('data-id');
  displayCommentPopup(tvshowId);
});