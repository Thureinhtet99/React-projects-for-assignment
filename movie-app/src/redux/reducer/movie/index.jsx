import { ActionType } from "../../action/action_types";

const initialState = {
  fetchMovies: [],
  selectMovie: {},
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_MOVIES:
      return { ...initialState, movies: payload };

    case ActionType.SELECT_MOVIE:
      return { ...initialState, movie: payload };

    default:
      return state;
  }
};
