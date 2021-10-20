const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const likeEndpoint = '/apps/6XTY5c5cttB49FIPrztB/likes/';

export const addLike = async (id) => {
  const likeBody = {
    item_id: id,
  };

  const response = await fetch(`${baseUrl}${likeEndpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeBody),
  });

  const status = await results.json();
  return response.status;
};

export const getLikes = async (id) => {
  const result = await fetch(`${baseUrl}${likeEndpoint}?item_id=${id}`);

  const likes = await result.json();
  if (likes.error?.status === 500 || likes.error?.status === 400) {
    return [];
  }
  return likes;
};