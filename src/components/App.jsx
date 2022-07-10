import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';


const Home = lazy(() => import('../views/HomeView'));
const Movies = lazy(() => import('../views/MoviesView'));
const MovieDetails = lazy(() => import('../views/MovieView'));
const Cast = lazy(() => import('../views/CastView'));
const Reviews = lazy(() => import('../views/ReviewsView'));


export const App = () => {
  return (
    <div>
      <Navigation/>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </div>
  );
};
