import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {moviesData} from '../../data';

const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`

export const getPopularMovies = createAsyncThunk('movies/getPopularMovies', () => {
  return fetch(popularUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(error));
});

const initialState = {
    popularMovies: [],
    newReleases:[],
    isLoading: true,
  };

  const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers:{
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
    }
    
    
  })

export const {  clearMovies } = moviesSlice.actions;

  export default moviesSlice.reducer;


