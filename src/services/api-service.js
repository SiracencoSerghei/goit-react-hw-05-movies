import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const key = 'cb1bcc244723619ea7f2217b5a84ccd8';

export const fetchShowDetails = async showId => {
  try {
    const response = await axios.get(`${baseURL}/movie/${showId}?api_key=${key}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching show details:', error);
    throw error;
  }
};

export const fetchMostPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/trending/movie/week?api_key=${key}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching most popular movies:', error);
    throw error;
  }
};

export const fetchMoviesWithQuery = async (searchQuery) => {
  try {
    const response = await axios.get(`${baseURL}/search/movie?api_key=${key}&query=${searchQuery}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies with query:', error);
    throw error;
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(`${baseURL}/movie/${id}/credits?api_key=${key}`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw error;
  }
};

export const fetchReviews = async id => {
  try {
    const response = await axios.get(`${baseURL}/movie/${id}/reviews?api_key=${key}&page=1`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};