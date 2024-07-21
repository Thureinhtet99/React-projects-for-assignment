import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Movie = () => {
  const movieList = useSelector((state) => state.movieReducer.movies || []);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {movieList.length > 0 ? (
            movieList.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <Card
                  className="max-w-sm my-2 border"
                  imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.original_title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {movie.overview.slice(0, 150) + "....."}
                  </p>
                  <div className="flex justify-start items-center gap-2">
                    <p className="p-1 bg-gray-200 rounded">
                      <i className="fa-solid fa-star me-2"></i>
                      {Math.floor(movie.vote_average * 10) / 10}
                    </p>
                    <p className="p-1 bg-gray-200 rounded">
                      <i className="fa-regular fa-calendar me-2"></i>
                      {movie.release_date}
                    </p>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center">No movies available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
