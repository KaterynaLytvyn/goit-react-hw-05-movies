import axios from 'axios';

export const getTrendingMovies = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=92f9c720cb77c75804e80b01c8601d54')
    return response.data
}

export const getMovie = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=92f9c720cb77c75804e80b01c8601d54`)
    return response.data
}

export const getMovieByKeyword = async (searchString) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=92f9c720cb77c75804e80b01c8601d54&query=${searchString}`)
    return response.data
}

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=92f9c720cb77c75804e80b01c8601d54`)
    return response.data
}

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=92f9c720cb77c75804e80b01c8601d54`)
    return response.data
}

