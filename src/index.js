import './style.css';
import Logo from './img/logo.png';
import { displayTvShows } from './listTvShow.js';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

document.addEventListener('DOMContentLoaded', () => { displayTvShows(); });