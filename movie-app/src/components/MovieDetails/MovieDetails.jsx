import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Badge, Button, Card, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { baseApi, apiKey } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, removeSelectMovie } from "../../redux/action/movies";

const MovieDetails = () => {
  // useParams
  const { movieId } = useParams();

  // dispatch
  const dispatch = useDispatch();

  // Fetch movie details
  const fetchMovieDetails = async () => {
    const response = await baseApi.get(`/movie/${movieId}?api_key=${apiKey}`);
    dispatch(selectMovie(response.data));
    // console.log(dispatch);
  };

  const movieDetail = useSelector((state) => state.movieReducer.movie || {});

  console.log(movieDetail);

  // useEffect
  useEffect(() => {
    if (movieId) {
      fetchMovieDetails();
    }
    return () => dispatch(removeSelectMovie({}));
  }, []);

  return (
    <>
      <Link to={"/home"}>
        <Button
          className="text-black my-2"
          outline
          gradientDuoTone="cyanToBlue"
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </Button>
      </Link>
      <div className="container mx-auto flex justify-center p-3">
        {JSON.stringify(movieDetail) == "{}" ? (
          <div className="text-center">
            <Spinner aria-label="Large spinner example" size="xl" />
          </div>
        ) : (
          <Card
            className="max-w-max "
            imgAlt=""
            imgSrc={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
          >
            <div className="flex justify-between">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movieDetail.original_title}
              </h5>
              <div className="flex flex-wrap gap-1">
                {movieDetail.genres.map((genre) => (
                  <Badge color="info" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movieDetail.overview}
            </p>
            <div className="flex justify-start items-center gap-2">
              <p className="p-1 bg-gray-200 rounded">
                <i className="fa-solid fa-star me-2"></i>
                {Math.floor(movieDetail.vote_average * 10) / 10}
              </p>
              <p className="p-1 bg-gray-200 rounded">
                <i className="fa-regular fa-calendar me-2"></i>
                {movieDetail.release_date}
              </p>
              <p className="p-1 bg-gray-200 rounded">
                <i className="fa-solid fa-users me-2"></i>
                {movieDetail.vote_count}
              </p>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
