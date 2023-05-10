import { NavLink, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/dogs">Movies </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div> Home </div>} />
        <Route path="/dogs" element={<div> Dogs </div>} />
      </Routes>
      <SearchBar />
    </>
  );
};