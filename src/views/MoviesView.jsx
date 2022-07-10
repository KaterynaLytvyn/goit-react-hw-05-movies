import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm'
import { getMovieByKeyword } from '../services/moviesApi.js'
import Loader from 'components/Loader'

export default function MoviesView() {

    const location = useLocation();

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            try {
                const movies = await getMovieByKeyword(filter);
                console.log('found movies:', movies)
                setMovies(movies.results)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies();

      }, [filter]);

    const handleFormSubmit = (searchString) => {
        setFilter(searchString)
    }

    return(
        <div>
            {loading && <Loader />}
            {error && <p>An error occured: {error.message}</p>}
            <MovieSearchForm onSubmit={handleFormSubmit}/>
            {movies && 
                <ul>
                    {movies.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>)}
                </ul>
            }
        </div>
    ) 
}