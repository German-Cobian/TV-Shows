import { getTvShows } from './tvShowsApi.js';
// import displayCommentPopup from './comments.js';
import { addLike, getLikes } from './likesApi.js';

const countTvShows = () => {
  const tvShowsCount = document.getElementById('tvshow-list').children.length;
  return tvShowsCount;
};

const updateTvShowHeader = (count) => {
  const tvShowTitle = document.getElementById('tvShows-link');
  tvShowTitle.innerText = `Tv-Shows (${count})`;
};

const displayTvShows = async () => {
  const tvShows = await getTvShows();
  const likes = await getLikes();

  const tvShowsList = document.getElementById('tvshow-list');
  tvShowsList.innerHTML = '';
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < tvShows.length; i += 1) {
    const likeObject = likes.filter((like) => like.item_id === tvShows[i].show.id);

    let numberOfLikes = '';
    if (likeObject.length > 0) {
      numberOfLikes = `${likeObject[0].likes} likes`;
    }
    const image = tvShows[i].show.image?.medium ?? 'https://pics.filmaffinity.com/sherlock_holmes-617003864-large.jpg';
    tvShowsList.insertAdjacentHTML('beforeend', ` 
      <div class="tvshow-list-container">
        <div class="tvshow-listcontent">
          <img src="${image}" />
        </div>
        <div>
          <h2>${tvShows[i].show.name}</h2>
          <p>${numberOfLikes}</p>
        </div>
        <button data-id="${tvShows[i].show.id}" class="btn-comments">Comments</button>
        <span like-id="${tvShows[i].show.id}" class="btn-likes"><i class="fas fa-heart"></i></span>
      </div>`);

    const button = document.querySelectorAll(`[data-id="${tvShows[i].show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      //const tvShowId = e.target.getAttribute('data-id');
      //displayCommentPopup(tvShowId);
    });

    const likeBtn = document.querySelectorAll(`[like-id="${tvShows[i].show.id}"]`)[0];
    likeBtn.addEventListener('click', async (e) => {
      const tvShowId = e.target.parentElement.getAttribute('like-id');
      const status = await addLike(tvShowId);
      const newLikes = await getLikes(tvShowId);
      const newLikesObject = newLikes.filter((like) => like.item_id === tvShowId);
      const numberOfLikes = `${newLikesObject[0].likes} likes`;
      if (status === 201) {
        const likeDisplay = likeBtn.previousElementSibling.previousElementSibling.children[1];
        likeDisplay.innerText = numberOfLikes;
      }
    });
  }
  const tvShowsCounter = countTvShows();
  updateTvShowHeader(tvShowsCounter);
};

export default displayTvShows;