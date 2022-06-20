import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFilms = createAsyncThunk('get/getFilms', async (_thunkApi) => {
  const res = await axios.get('http://localhost:8000/films-showing');
  return res;
});

export const addFilm = createAsyncThunk('post/addFilm', async (_thunkApi) => {});
