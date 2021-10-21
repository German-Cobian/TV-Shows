import './style.css';
import displayTvShows from './listTvShow.js';


//fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
//    method: 'POST',
//}).then(response => response.text()).then(response => console.log(response));

document.addEventListener('DOMContentLoaded', () => { displayTvShows(); });