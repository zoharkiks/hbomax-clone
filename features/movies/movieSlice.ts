import { createSlice } from '@reduxjs/toolkit';
import {moviesData} from '../../data';

const initialState = {
    movies: moviesData,
    isLoading: true,
  };

  const movieSlice = createSlice({
    name: 'movie',
    initialState,
  })

  export default movieSlice.reducer;


