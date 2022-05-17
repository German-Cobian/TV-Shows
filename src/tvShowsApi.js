const searchMysteryTvShowsURL = 'https://api.tvmaze.com/search/shows?q=comedy';
const MysteryTvShowsBaseURL = 'https://api.tvmaze.com/shows/';

const getTvShows = async () => {
  const results = await fetch(searchMysteryTvShowsURL);

  const tvshows = await results.json();
  return tvshows;
};

const getTvShowById = async (id) => {
  const result = await fetch(MysteryTvShowsBaseURL + id);

  const tvshow = await result.json();
  return tvshow;
};

export { getTvShows, getTvShowById };