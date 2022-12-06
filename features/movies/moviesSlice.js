import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Urls
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
const detailsUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
const creditsUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
const videosUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;

// Reducers
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

export const getDetails = createAsyncThunk("movies/getDetails", (id) => {
  return fetch(detailsUrl(id))
    .then((resp) => resp.json())
    .catch((err) => console.log(error));
});

export const getCredits = createAsyncThunk("movies/getCredits", (id) => {
  return fetch(creditsUrl(id))
    .then((resp) => resp.json())
    .catch((err) => console.log(error));
});

export const getVideos = createAsyncThunk("movies/getVideos", (id) => {
  return fetch(videosUrl(id))
    .then((resp) => resp.json())
    .catch((err) => console.log(error));
});

// Initial State
const initialState = {
  popularMovies: [],
  upcoming: [],
  details: [],
  credits: [],
  videos: [],
  isLoading: true,
};

// Slice
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    // Popular Movies
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
    // Upcoming Movies
    [getUpcomingMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUpcomingMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.upcoming = action.payload;
    },
    [getUpcomingMovies.rejected]: (state) => {
      state.isLoading = false;
    },

    // Movie Details

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

    // Credit Details
    [getCredits.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCredits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.credits = action.payload;
    },
    [getCredits.rejected]: (state) => {
      state.isLoading = false;
    },

    // Video Details
    [getVideos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    },
    [getVideos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
