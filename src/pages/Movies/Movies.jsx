import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesWithQuery } from '../../services/api-service';
import SearchBar from "components/SearchBar";
import { startTransition } from 'react';
import '../Home/Home.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchSubmit = (searchQuery) => {
    startTransition(() => {
      setSearchParams({ query: searchQuery });
      fetchMovies(searchQuery);
    });
  };

  const fetchMovies = async (searchQuery) => {
    try {
      const movies = await fetchMoviesWithQuery(searchQuery);
      setMovies(movies);
      setSearchQuery(searchQuery);
    } catch (error) {
      console.error('Error fetching movies with query:', error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if (query) {
      setSearchQuery(query);
      setSearchParams({ query });
      fetchMovies(query);
    }
  }, [location.search, setSearchParams]);
  const from = location.state?.from || { pathname: '/movies' };
  return (
    <>
      <SearchBar onSubmit={onSearchSubmit} searchQuery={searchQuery} />
      {movies.length > 0 && (
        <ul className='trending-movies'>
          {movies.map(movie => (
            <Link
            to={{
              pathname: `/movies/${movie.id}`,
              search: location.search,
              state: { from }
            }}
              key={movie.id}
            >
              <li className='movie-item'>
                <img
                  className='movie-poster'
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  width="120"
                  height="180"
                />
                <p className='movie-title'>{movie.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;