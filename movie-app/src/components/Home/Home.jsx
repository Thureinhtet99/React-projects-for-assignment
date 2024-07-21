import React, { useEffect } from "react";
import Movie from "../Movie/Movie";
import { baseApi, apiKey } from "../../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/action/movies";

const Home = () => {
  const dispatch = useDispatch();

  // Get Movies
  const getMovies = async () => {
    const response = await baseApi.get(`movie/now_playing?api_key=${apiKey}`);
    dispatch(fetchMovies(response.data.results));
    // console.log(response.data.results);
  };

  // useEffect
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Movie />
    </>
  );
};

export default Home;
