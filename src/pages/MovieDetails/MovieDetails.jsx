import { useRef, Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { RevolvingDot } from  'react-loader-spinner';
import {fetchShowDetails} from '../../services/api-service';

const MovieDetails = () => {
  const location = useLocation();
  const { movieID } = useParams();
  const locationLink = useRef(location.state?.from ?? '/movies');
  const [details, setDetails] = useState({});
  //useEffect for movieDetails
  // console.log(location.state?.from);
  // console.log(movieID);
  // const results = fetchShowDetails(movieID)
  // .then(result => console.log(result));
  
  // useEffect(() => {
  //   const fetch = async () => {
  //     fetchShowDetails(movieID);
  // }, [movieID]);
  return (
    <>
      <Link to={locationLink.current}>
      Back to previous page
      </Link>
      <div>
        <img
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        ></img>
        <div>
          <h2>{details.title}</h2>
          <h3>User score: {details.vote_average * 10}%</h3>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <ul>
            {details.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <h3>
            <Link to="cast">cast</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to="reviews">reviews</Link>
          </h3>
        </li>
      </ul>
      <Suspense fallback={<div><RevolvingDot
  height="100"
  width="100"
  radius="6"
  color="#4fa94d"
  secondaryColor=''
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;