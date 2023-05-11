const baseURL = 'https://api.themoviedb.org/3';
const key = 'cb1bcc244723619ea7f2217b5a84ccd8';

export const fetchShowDetails = showId => {                                        // show one movies details by id
  return fetch(`${baseURL}/movie/${showId}?api_key=${key}`).then(res => res.json());
};

export const fetchMostPopularMovies = () => {
  return fetch(`${baseURL}/trending/movie/week?api_key=${key}`)
  .then(res => res.json())
  .then(movies => movies.results.map(movie => movie))
};

export const fetchMoviesWithQuery = searchQuery => {                                 // search movies by request
  return fetch(`${baseURL}/search/movie?api_key=${key}&query=${searchQuery}`)
    .then(res => res.json())
    .then(movies => movies.results.map(movie => movie))
};

export const fetchCast = (id) => {
  return fetch(`${baseURL}/movie/${id}/credits?api_key=${key}`)
  .then(res => res.json())
  .then(movie => movie.cast)
}

export const fetchReviews = (id) => {
  return fetch(`${baseURL}/movie/${id}/reviews?api_key=${key}&page=1`)
  .then(res => res.json())
  .then(movie => movie.results)
}