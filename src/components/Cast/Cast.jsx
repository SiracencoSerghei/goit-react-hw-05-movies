import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchCast} from '../../services/api-service';
import './Cast.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <ul className='castList'>
    {cast.length > 0 ? (
      cast.map((actor) => (
        <li className='castItem' key={actor.id}>
          <img
            alt={actor.name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            width='100px'
          ></img>
          <p>{actor.name}</p>
          <p>AS: {actor.character}</p>
        </li>
      ))
    ) : (
      <p>No cast members found</p>
    )}
  </ul>
  );
};

export default Cast;