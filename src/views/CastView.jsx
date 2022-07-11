import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../services/moviesApi.js'
import Cast from 'components/Cast/Cast'

export default function CastView() {

    const { movieId } = useParams();

    const [movieCast, setMovieCast] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchMovieCast() {
            try {
                const movieCast = await getMovieCast(movieId);
                setMovieCast(movieCast.cast)
            } catch (error) {
                setError(error)
            } 
        }

        fetchMovieCast();

      }, [movieId]);

    return (
        <div>
            {error && <p>An error occurred: {error.message}</p>}
            {movieCast && <Cast cast={movieCast}/>}
        </div>
    )
}