import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesData } from "../../data";

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
const detailsUrl = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;

export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  () => {
    return fetch(popularUrl)
      .then((resp) => resp.json())
      .catch((err) => console.log(error));
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "movies/getUpcomingMovies",
  () => {
    return fetch(upcomingUrl)
      .then((resp) => resp.json())
      .catch((err) => console.log(error));
  }
);

export const getDetails  = createAsyncThunk("movies/getDetails", (id) => {
  return fetch(detailsUrl(id))
    .then((resp) => resp.json())
    .catch((err) => console.log(error));
});

const initialState = {
  popularMovies: [],
  upcoming: [],
  details: [],
  isLoading: true,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getPopularMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPopularMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.popularMovies = action.payload;
    },
    [getPopularMovies.rejected]: (state) => {
      state.isLoading = false;
    },

    [getUpcomingMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUpcomingMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.upcoming = action.payload;
    },
    [getPopularMovies.rejected]: (state) => {
      state.isLoading = false;
    },

    [getDetails.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    },
    [getDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;