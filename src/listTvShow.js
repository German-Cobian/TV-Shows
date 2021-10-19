import { getTvShows } from './tvShowsApi.js';

const displayTvShows = async () => {
  const tvShows = await getTvShows();
  const tvShowsList = document.getElementById('tvshow-list');
  tvShowsList.innerHTML = '';
  tvShows.forEach((tvShow) => {
    const image = tvShow.show.image?.medium ?? 'https://pics.filmaffinity.com/sherlock_holmes-617003864-large.jpg';
    tvShowsList.insertAdjacentHTML('beforeend', ` 
      <div class="tvshow-list-container">
        <div class="tvshow-listcontent">
          <img src="${image}" />
        </div>
          <div>
            <h2>${tvShow.show.name}</h2>
            <button like-btn="${tvShow.show.id}" class="btn-likes"><i class="fas fa-heart"></i></button>
          </div>
          <button data-id="${tvShow.show.id}" class="btn-comments">Comments</button>
      </div>`);
    const button = document.querySelectorAll(`[data-id="${tvShow.show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const tvShowId = e.target.getAttribute('data-id');
      displayCommentPopup(tvShowId);
    });
    const like_btn = document.querySelectorAll(`[like-btn="${tvShow.show.id}"]`)[0];
    like_btn.addEventListener('click', (e) => {
        const tvShowId = e.target.getAttribute('like-btn');
        displayCommentPopup(tvShowId);
    });
  });
};

export { displayTvShows };
