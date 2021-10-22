import './style.css';
import Logo from './img/logo.png';
import { displayTvShows } from './listTvShow.js';

const logo = document.getElementById('logo');
logo.src = Logo;

document.addEventListener('DOMContentLoaded', () => { displayTvShows(); });
