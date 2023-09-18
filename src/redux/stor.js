import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./rootComban";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger,thunk))
);

// console.log('init store'+store.getState());
