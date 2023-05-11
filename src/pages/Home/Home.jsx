import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import getQueryParams from '../../services/get-query-params';
import { fetchMostPopularMovies, fetchMoviesWithQuery } from '../../services/api-service';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const { query } = getQueryParams(location.search);
    if (query) {
      fetchMovies(query);
    } else {
      fetchMostPopularMovies().then(movies => setMovies(movies));
    }
  }, [location.search]);

  const fetchMovies = query => {
    fetchMoviesWithQuery(query).then(movies => setMovies(movies));
  };

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul className='trending-movies'>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
              >
                <img alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width="120"
                  height="180">
                </img>
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;