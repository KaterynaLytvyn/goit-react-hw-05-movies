import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/moviesApi.js'
import Reviews from '../components/Reviews/Reviews'

export default function ReviewsView() {

    const { movieId } = useParams();

    const [movieReviews, setMovieReviews] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchMovieReviews() {
            try {
                const movieReviews = await getMovieReviews(movieId);
                setMovieReviews(movieReviews.results)
            } catch (error) {
                setError(error)
            } 
        }

        fetchMovieReviews();

      }, [movieId]);

    return (
        <div>
            {error && <p>An error occurred: {error.message}</p>}
            {movieReviews.length>1?<Reviews reviews={movieReviews}/>:<p>There are no reviews for this movie</p>}
        </div>
    )
}