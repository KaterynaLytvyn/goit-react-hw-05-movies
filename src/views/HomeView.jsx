import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../services/moviesApi.js'
import Loader from 'components/Loader'

export default function HomeView() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            try {
                const movies = await getTrendingMovies();
                setMovies(movies.results)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies();

      }, []);

    return(
        <div>
            {loading && <Loader />}
            {error && <p>An error occured: {error.message}</p>}
            {movies && 
                <div>
                    <h1>Trending Movies</h1>
                    <ul>
                        {movies.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
                    </ul>
                </div>
            }
        </div>
    )
}