import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getSlider = createAsyncThunk('get/getSlider', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/films-slider`);
    return res.data;
  } catch (err) {
    if (!err.respose) throw err;
    return rejectWithValue(err.response.data);
  }
});
