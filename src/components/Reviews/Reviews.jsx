import PropTypes from 'prop-types';

export default function Reviews(props) {

    const {reviews} = props

    return(
        <div>
            <ul>
                {reviews.map(review => 
                    <li key={review.id}>
                        <p>Author: <b>{review.author}</b></p>
                        {review.content}
                    </li>)}
            </ul>
        </div>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.array.isRequired
}