import countComments from './comment-counter';

const popup = document.getElementById('popup');
const bodyStyle = document.body.style;

const closePopup = () => {
  popup.style.display = 'none';
  bodyStyle.setProperty('background-color', 'rgba(0,0,0,0)');
};

const generatePopupContent = (tvShow, commentList) => {
  bodyStyle.setProperty('background-color', 'rgba(0,0,0,0.6)');
  popup.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('popup-container');

  const innerContent = document.createElement('div');
  innerContent.classList.add('inner-content');

  const imageClose = document.createElement('div');
  imageClose.classList.add('photo-close');

  const showCover = document.createElement('img');
  showCover.classList.add('show-cover');
  showCover.src = tvShow.image.medium;

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');

  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fas', 'fa-times', 'fa-2x');

  closeButton.addEventListener('click', closePopup);

  closeButton.appendChild(closeIcon);

  imageClose.appendChild(showCover);
  imageClose.appendChild(closeButton);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');

  const descriptionHeader = document.createElement('h2');
  descriptionHeader.innerText = tvShow.name;

  const descriptionItems = document.createElement('div');
  descriptionItems.classList.add('description-items');

  const descriptionOne = document.createElement('div');
  descriptionOne.classList.add('description-1');

  const network = document.createElement('p');
  network.innerText = `Network: ${tvShow.network.name}`;

  const language = document.createElement('p');
  language.innerText = `Language: ${tvShow.language}`;

  descriptionOne.appendChild(network);
  descriptionOne.appendChild(language);

  const descriptionTwo = document.createElement('div');
  descriptionTwo.classList.add('description-2');

  const rating = document.createElement('p');
  rating.innerText = `Rating: ${tvShow.rating.average ? tvShow.rating.average : 0}/10`;

  const genre = document.createElement('p');
  genre.innerText = `Genre: ${tvShow.genres[0]}`;

  descriptionTwo.appendChild(genre);
  descriptionTwo.appendChild(rating);

  const descriptionThree = document.createElement('div');
  descriptionThree.classList.add('description-3');
  descriptionThree.innerHTML = tvShow.summary.replaceAll('<b>', '');

  descriptionItems.appendChild(descriptionOne);
  descriptionItems.appendChild(descriptionTwo);

  descriptionContainer.appendChild(descriptionHeader);
  descriptionContainer.appendChild(descriptionItems);
  descriptionContainer.appendChild(descriptionThree);

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  const commentsHeader = document.createElement('h3');
  commentsHeader.innerText = `Comments: ${countComments(commentList)}`;

  commentsContainer.appendChild(commentsHeader);

  const commentsList = document.createElement('div');
  commentsList.id = 'comments-list';

  commentList.forEach((comment) => {
    const commentItem = document.createElement('p');
    commentItem.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    commentsList.appendChild(commentItem);
  });

  commentsContainer.appendChild(commentsList);

  innerContent.appendChild(imageClose);
  innerContent.appendChild(descriptionContainer);
  innerContent.appendChild(commentsContainer);

  container.appendChild(innerContent);

  popup.appendChild(container);

  popup.style.setProperty('display', 'block');
};

export default generatePopupContent;
