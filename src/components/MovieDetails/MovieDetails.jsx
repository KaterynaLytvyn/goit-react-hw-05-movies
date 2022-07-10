import PropTypes from 'prop-types';
import s from './MovieDetails.module.css';

export default function MovieDetails(props) {

    const {movie} = props

    return(
        <div className={s.container}>
            <div className={s.imageWrapper}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div>
                <h1>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                <p>User Score: {movie.vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                {movie.genres.map(g => g.name+' ')}
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired
}