import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchMostPopularMovies } from '../../services/api-service';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchMostPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching most popular movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul className='trending-movies'>
          {movies.map(movie => (
              <li className='movie-item' key={movie.id}>
                <Link
                  to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
                >
                  <div className='posterWrapper'>
                    <img
                    className='movie-poster'
                    alt={movie.title}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      width="120"
                      height="180">
                    </img>
                  </div>
                  <p className='movie-title'>{movie.title}</p>
                </Link>
              </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;