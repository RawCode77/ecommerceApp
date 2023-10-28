import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {}; //initialstate is empty
const middleware = [thunk];

let store;

try {
  store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  });
} catch (error) {
  console.error("An error occurred while creating the store:", error);

  // Attempt to recreate the store if an error occurs
  store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  });
}

export default store;
