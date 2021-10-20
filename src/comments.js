import { getTvShowById } from './tvShowsApi.js';
import { getComments } from './comments-api.js';
import generatePopupContent from './comment-content.js';

const displayCommentPopup = async (id) => {
  const tvShow = await getTvShowById(id);
  const commentList = await getComments(id);

  generatePopupContent(tvShow, commentList);
};

export default displayCommentPopup;