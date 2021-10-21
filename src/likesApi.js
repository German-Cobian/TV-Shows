const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const likeEndpoint = 'apps/PumxHFpJbUGXK4Pi2oef/likes';

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

  return response.status;
};

export const getLikes = async () => {
  const result = await fetch(`${baseUrl}${likeEndpoint}`);
  const likes = await result.json();

  if (likes.error?.status === 500 || likes.error?.status === 400) {
    return [];
  }

  return likes;
};