import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFilms = createAsyncThunk('get/getFilms', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/films-showing`);
    return res.data;
  } catch (err) {
    if (!err.response) throw err;
    return rejectWithValue(err.response.data);
  }
});

export const addFilm = createAsyncThunk('post/addFilm', async (_thunkApi) => {});
