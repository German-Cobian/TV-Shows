import { getTvShows } from './tvShowsApi.js';
import { displayCommentPopup } from './comments.js';

const displayTvShows = async () => {
  const tvshows = await getTvShows();
  const tvShowsList = document.getElementById('tvshow-list');
  tvShowsList.innerHTML = '';
  tvshows.forEach((tvshow) => {
    const image = tvshow.show.image?.medium ?? 'https://pics.filmaffinity.com/sherlock_holmes-617003864-large.jpg';
    tvShowsList.insertAdjacentHTML('beforeend', ` 
      <div class="tvshow-list-container">
        <div class="tvshow-listcontent">
          <img src="${image}" />
        </div>
          <div>
            <h2>${tvshow.show.name}</h2>
          </div>
          <button data-id="${tvshow.show.id}" class="btn-comments">Comments</button>
      </div>`);
    const button = document.querySelectorAll(`[data-id="${tvshow.show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const tvShowId = e.target.getAttribute('data-id');
      displayCommentPopup(tvShowId);
    });
  });
};

export { displayTvShows };