import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducers from "./rootReducers";

const middlewares = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

// export default { store, persistor };
