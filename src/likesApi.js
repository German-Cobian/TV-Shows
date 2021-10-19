const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'
const gameEndpoint = '/apps/6XTY5c5cttB49FIPrztB/likes/';

export const addLike = async (id) => {

  const response = await fetch(
    `${baseUrl}${gameEndpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
};

export const refreshScoreTableAPI = async () => {
  const response = await fetch(
    `${baseUrl}${gameEndpoint}`,
  )
    .then((response) => response.json())
    .then((json) => {
      json.result.forEach((element) => { 

      });
    });
};