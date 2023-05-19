import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesWithQuery } from '../../services/api-service';
import SearchBar from "components/SearchBar";
import '../Home/Home.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    if (savedSearch) {
      setSearch(savedSearch);
    }
  }, []);

  const fetchMovies = async (search) => {
    try {
      const movies = await fetchMoviesWithQuery(search);
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies with query:', error);
    }
  };

  useEffect(() => {
    if(!search) {
      return
    }
    setSearchParams({ query: search });
    localStorage.setItem('search', search);
      fetchMovies(search);

  }, [search, setSearchParams]);

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {movies.length > 0 && (
        <ul className='trending-movies'>
          {movies.map(movie => {
            return (
              <Link
                to={`${movie.id}`} state={{ from: location }}
                key={movie.id}
              >
                <li className='movie-item'>
                  <img
                    className='movie-poster'
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <p className='movie-title'>{movie.title}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;