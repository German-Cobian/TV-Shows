import { createComment } from "./comments-api";

const popup = document.getElementById('popup');

const submitComment = (event, id, user, text) => {
  event.preventDefault();
  createComment(id, user, text);
};

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
  usernameInput.title = 'No spaces. All lowercase';

  const commentText = document.createElement('textarea');
  commentText.placeholder = 'Type your comment here... (required)';
  commentText.required = true;
  commentText.classList.add('comment-text');

  const commentButton = document.createElement('button');
  commentButton.type = 'submit';
  commentButton.innerText = 'Comment';

  commentForm.appendChild(formHeader);
  commentForm.appendChild(usernameInput);
  commentForm.appendChild(commentText);
  commentForm.appendChild(commentButton);

  commentForm.addEventListener('submit', (e) => {
    submitComment(e, id, usernameInput.value, commentText.value);
    usernameInput.value = '';
    commentText.value = '';
  });

  popup.children[0].children[0].appendChild(commentForm);
};

export default generateCommentForm;