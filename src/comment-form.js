import { createComment } from "./comments-api";
import CommentFlag from "./comment-flags.js";

const popup = document.getElementById('popup');
const textFlag = new CommentFlag();

const submitComment = (event, id, user, text) => {
  event.preventDefault();
  if (textFlag.isValid) {
    createComment(id, user, text);
    user.value = '';
    text.value = '';
  }
  else {
    window.alert('The input is not valid');
  }
};

const validateText = (event, regexp, flag) => {
  const textInput = event.currentTarget;

  const dsrxp = new RegExp(/(\s\s)/);

  if (regexp.test(textInput.value) && !dsrxp.test(textInput.value)) {
    textInput.classList.remove('invalid');
    flag.setTrue();
  }
  else {
    textInput.classList.add('invalid');
    flag.setFalse();
  }
}

const countCharacters = (event, paragraph) => {
  const counter = 120 - event.currentTarget.value.length;

  if (counter < 1) {
    paragraph.innerText = `Characters left: 0`;
    paragraph.style.setProperty('color', 'red');
  }
  else {
    paragraph.innerText = `Characters left: ${counter}`;
    paragraph.style.setProperty('color', 'black');
  }
}

const generateCommentForm = (id) => {
  const commentForm = document.createElement('form');
  commentForm.classList.add('comment-form');
  commentForm.action = '#';

  const formHeader = document.createElement('h3');
  formHeader.innerText = 'Add a comment';

  const usernameInput = document.createElement('input');
  usernameInput.classList.add('username');
  usernameInput.placeholder = 'Enter your name (required)';
  usernameInput.required = true;
  usernameInput.type = 'text';
  usernameInput.title = 'No spaces. All lowercase. Min 3 chars. Max 15 chars.';

  //usernameInput.addEventListener('input', (e) => validateText(e, new RegExp(/^[a-z0-9]{3,15}$/), userFlag));

  const countParagraph = document.createElement('p');

  const commentText = document.createElement('textarea');
  commentText.classList.add('comment-text');
  commentText.placeholder = 'Type your comment here... (required)';
  commentText.required = true;

  commentText.addEventListener('input', (e) => {
    validateText(e, new RegExp(/^["\w].{0,118}["?!\.\w]$/s), textFlag);
    countCharacters(e, countParagraph);
  });

  const commentButton = document.createElement('button');
  commentButton.type = 'submit';
  commentButton.innerText = 'Comment';

  commentForm.appendChild(formHeader);
  commentForm.appendChild(usernameInput);
  commentForm.appendChild(commentText);
  commentForm.appendChild(countParagraph);
  commentForm.appendChild(commentButton);

  commentForm.addEventListener('submit', (e) => submitComment(e, id, usernameInput, commentText));

  popup.children[0].children[0].appendChild(commentForm);
};

export default generateCommentForm;