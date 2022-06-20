import { createSlice } from '@reduxjs/toolkit';
import { getFilms } from './films.thunk';

export const initialState = {
  films: [],
  isLoading: false,
  error: null
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: {
    [getFilms.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.films = [...payload];
    },

    [getFilms.pending]: (state) => {
      state.isLoading = true;
    },

    [getFilms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    }
  }
});

export default filmSlice.reducer;
