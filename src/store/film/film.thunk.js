import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getFilmByID = createAsyncThunk('get/getFilmByID', async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/films-showing/${id}`);
    return data;
  } catch (err) {
    if (!err.respose) throw err;
    return rejectWithValue(err.response.data);
  }
});
