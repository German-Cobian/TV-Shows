const tvShowAppCode = 'PumxHFpJbUGXK4Pi2oef';
const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvShowAppCode}/comments`;

const createComment = async (id, username, comment) => {
  const commentBody = {
    item_id: id,
    username,
    comment,
  };

  const results = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });
  return results.status;
};
const getComments = async (id) => {
  const result = await fetch(`${commentsURL}?item_id=${id}`);
  const comments = await result.json();
  if (comments.error?.status === 500 || comments.error?.status === 400) {
    return [];
  }
  return comments;
};
export { createComment, getComments };
