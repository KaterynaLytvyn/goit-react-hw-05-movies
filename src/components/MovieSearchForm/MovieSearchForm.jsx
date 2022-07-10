import { useState } from "react";
import PropTypes from 'prop-types'

export default function MovieSearchForm({onSubmit}) {

    const [searchString, setSearchString] = useState('')

    const handleChange = event => {
        setSearchString(event.target.value)
    }


    const handleSubmit = event => {
        event.preventDefault();

        if (searchString.trim() === '') {
            alert('input string to search');
            return;
        }

        onSubmit(searchString);
    }

    return(
        <form>
            <input type="text" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
    )
}

MovieSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};