import React from "react";
import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import ErrorPage from "./components/ErrorPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => {
  return (
    <>
      <NavigationBar />

      {/* Routes */}
      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </>
  );
};

export default App;
