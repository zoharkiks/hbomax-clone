import { createSlice } from '@reduxjs/toolkit';
import {moviesData} from '../../data';

const initialState = {
    movies: moviesData,
    isLoading: true,
  };

  const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    
  })

  export default moviesSlice.reducer;


