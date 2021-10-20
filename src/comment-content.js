const popup = document.getElementById('popup');
const bodyStyle = document.body.style;

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
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fas fa-times fa-2x');

  closeButton.appendChild(closeIcon);

  imageClose.appendChild(showCover, closeButton);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');

  const descriptionHeader = document.createElement('h2');
  descriptionHeader.innerText = tvShow.name;

  const descriptionOne = document.createElement('div');
  descriptionOne.classList.add('description-1');

  const network = document.createElement('p');
  network.innerText = tvShow.network.name;

  const language = document.createElement('p');
  language.innerText = tvShow.language;

  descriptionOne.appendChild(network, language);

  const descriptionTwo = document.createElement('div');
  descriptionOne.classList.add('description-2');

  const rating = document.createElement('p');
  rating.innerText = tvShow.rating.average;

  const genre = document.createElement('p');
  [genre.innerText] = tvShow.genres;

  descriptionTwo.appendChild(rating, genre);

  descriptionContainer.appendChild(descriptionHeader, descriptionOne, descriptionTwo);

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  const commentsHeader = document.createElement('h3');
  commentsHeader.innerText = `Comments: ${commentList.length}`;

  commentsContainer.appendChild(commentsHeader,
    commentList.map((comment) => {
      const commentItem = document.createElement('p');
      commentItem.innerText = `${comment.creation_date} ${comment.username} ${comment.comment}`;
      return commentItem;
    }));
};

export default generatePopupContent;