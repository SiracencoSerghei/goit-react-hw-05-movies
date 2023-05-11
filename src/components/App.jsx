import { Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
// import Movies from "pages/Movies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<div><SearchBar /></div>} />
          <Route path="/movies/:movieId" element={<div>movieId</div>} />
          <Route path="/movies/:movieId/cast" element={<div>element/ cast movie</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>element/ reviews movie</div>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;