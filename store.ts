import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Create Reducers

const reducer = combineReducers({
  movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});