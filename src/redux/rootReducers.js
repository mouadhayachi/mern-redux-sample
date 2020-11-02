import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counterReducer from "./counter/counter.reducer";
import movieReducer from "./movie/movie.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movie"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  movie: movieReducer,
});

export default persistReducer(persistConfig, rootReducer);
