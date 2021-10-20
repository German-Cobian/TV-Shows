//import { createComment } from "./comments-api";

const popup = document.getElementById('popup');

const generateCommentForm = () => {
    const commentForm = document.createElement('form');
    
    const formHeader = document.createElement('h3');
    formHeader.innerText = 'Add a comment';

    const usernameInput = document.createElement('input');
    usernameInput.classList.add('username');
    usernameInput.placeholder = 'Enter your name';
    usernameInput.type = 'text';

    const commentText = document.createElement('textarea');
    commentText.placeholder = 'Type your comment here...';
    commentText.classList.add('comment-text');

    const submitComment = document.createElement('button');
    submitComment.type = 'button';
    submitComment.innerText = 'Submit Comment';

    commentForm.appendChild(formHeader);
    commentForm.appendChild(usernameInput);
    commentForm.appendChild(commentText);
    commentText.appendChild(submitComment);
}

export default generateCommentForm;