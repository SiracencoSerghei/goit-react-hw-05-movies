import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchReviews} from '../../services/api-service';

const Reviews = () => {

    const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await fetchReviews(movieId);
        setReviews(reviews);
        // console.log(reviews);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (<>
    {reviews.length > 0 ? (
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No reviews</p>
    )}
  </>)
}

export default Reviews;