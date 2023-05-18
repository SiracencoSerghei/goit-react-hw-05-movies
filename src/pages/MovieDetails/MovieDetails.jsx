import React, {Suspense,Outlet, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import {FaArrowLeft}from 'react-icons/fa';
import {fetchShowDetails} from '../../services/api-service';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

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

  // const backTo = location?.state?.from?.pathname || '/';
  const backTo = location?.state?.from || '/';

  console.log('backTo', backTo);
  console.log('location', location);
  console.log(location);
  return (
    <>
    <div> HELLO DETAIL!!!!</div>
          <Link to={backTo}>
       Back
      </Link>
    </>
    

  );
};

export default MovieDetails;

//     <>

//       <div>
//         <img
//           alt={details.title}
//           src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
//         ></img>
//         <div>
//           <h2>{details.title}</h2>
//           <h3>User score: {details.vote_average * 10}%</h3>
//           <h3>Overview</h3>
//           <p>{details.overview}</p>
//           <h3>Genres</h3>
//           <ul>
//             {details.genres?.map(genre => (
//               <li key={genre.id}>{genre.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {/* <h2>Additional information</h2> */}
//       <ul>
//         <li>
//           <h3>
//             <Link to="cast">cast</Link>
//           </h3>
//         </li>
//         <li>
//           <h3>
//             <Link to="reviews">reviews</Link>
//           </h3>
//         </li>
//       </ul>
//       <Suspense fallback={<div>Loading</div>}>
//         <Outlet />
//       </Suspense>
//     </>