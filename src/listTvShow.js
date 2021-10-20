import { getTvShows } from './tvShowsApi.js';
import { addLike, getLikes } from './likesApi.js';

const displayTvShows = async () => {
  const tvShows = await getTvShows();
  const tvShowsList = document.getElementById('tvshow-list');
  tvShowsList.innerHTML = '';
   /* eslint-disable no-await-in-loop */
  for (const tvShow of tvShows) {
    const likes = await getLikes(tvShow.show.id);
    const likeObject = likes.filter((like) => like.item_id === tvShow.show.id);
    console.log(likeObject);
    let numberOfLikes = '';
    if (likeObject.length > 0) {
      console.log(likeObject[0].likes); // remove
      numberOfLikes = `${likeObject[0].likes} likes`;
    }
    const image = tvShow.show.image?.medium ?? 'https://pics.filmaffinity.com/sherlock_holmes-617003864-large.jpg';
    tvShowsList.insertAdjacentHTML('beforeend', ` 
      <div class="tvshow-list-container">
        <div class="tvshow-listcontent">
          <img src="${image}" />
        </div>
          <div>
            <h2>${tvShow.show.name}</h2>
            <p>${numberOfLikes}</p>
          </div>
          <button data-id="${tvShow.show.id}" class="btn-comments">Comments</button>
          <button like-id="${tvShow.show.id}" class="btn-likes"><i class="fas fa-heart"></i></button>
      </div>`
      );
    const button = document.querySelectorAll(`[data-id="${tvShow.show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const tvShowId = e.target.getAttribute('data-id');
      displayCommentPopup(tvShowId);
    });
    const likeBtn = document.querySelectorAll(`[like-id="${tvShow.show.id}"]`)[0];
      likeBtn.addEventListener('click', async (e) => {
        const tvShowId = e.target.parentElement.parentElement.getAttribute('like-id');
        const status = await addLike(Number(tvShowId));
        const newLikes = await getLikes(tvShowId);
        console.log(newLikes)
        const newLikesObject = newLikes.filter(like => like.item_id === tvShow.show.id);
        const numberOfLikes = `${newLikesObject[0].likes} likes`;
        console.log(numberOfLikes);
        if (status === 201) {
          const likeDisplay = likeBtn.previousElementSibling.previousElementSibling.children[1];
          console.log(likeDisplay);
          likeDisplay.innerText = numberOfLikes;
        }
      });
  };
}
