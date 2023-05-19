import React, { lazy } from 'react'
import { Route, Routes } from "react-router-dom";
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import NotFound from "pages/NotFound/NotFound";
// import Movies from "../pages/Movies";
// import MovieDetails from "../pages/MovieDetails/MovieDetails";
// import Cast from './Cast';
// import Reviews from './Reviews';

const Movies = lazy(()=>import("../pages/Movies"));
const MovieDetails = lazy(()=>import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(()=> import('./Cast'));
const Reviews = lazy(()=> import('./Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          
            <Route path="/movies/:movieId" element={<MovieDetails/>} >
            <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
            </Route>
          
          
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};
export default App;