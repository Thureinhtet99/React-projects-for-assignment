import { combineReducers } from "redux";
import { movieReducer } from "./movie";

const reducers = combineReducers({
  movieReducer: movieReducer,
});

export default reducers;
