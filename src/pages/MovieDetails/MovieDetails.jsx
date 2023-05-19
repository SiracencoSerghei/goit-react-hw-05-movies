import React, { useEffect, useState, Suspense, useRef } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchShowDetails } from '../../services/api-service';
import './MovieDetails.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const prevPathRef = useRef(null);

  useEffect(()=>{
    // Store the path of the previous page in useRef
    prevPathRef.current = location.state?.from;
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShowDetails(movieId);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };
    fetchData();

  }, [movieId]);
// console.log( prevPathRef );
  const backTo = prevPathRef.current || '/';

  return (
    <div className="container">
      <Link to={backTo} className="backBtn">
        <FaArrowLeft />Back
      </Link>
      <div className="poster">
        <img
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        />
        <div>
          <h2>{details.title}</h2>
          <h3>User score: {Math.round(details.vote_average * 10)}%</h3>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3>Genres:</h3>
          <ul className='movieGenres'>
            {details.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul className='detailsMenu'>
        <li>
          <h3 className='menuDetail'>
            <Link to="cast">Cast</Link>
          </h3>
        </li>
        <li>
          <h3 className='menuDetail'>
            <Link to="reviews">Reviews</Link>
          </h3>
        </li>
      </ul>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>


  );
};

export default MovieDetails;