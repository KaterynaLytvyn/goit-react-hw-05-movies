import PropTypes from 'prop-types';
import s from './Cast.module.css'

export default function Cast(props) {

    const {cast} = props

    return(
        <div>
            <h3>Cast</h3>
            <ul>
                {cast.map(actor => 
                    <li key={actor.id} className={s.item}>
                        <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} width="100px"/>
                        {actor.name}
                    </li>)}
            </ul>
        </div>
    )
}

Cast.propTypes = {
    cast: PropTypes.array.isRequired
}