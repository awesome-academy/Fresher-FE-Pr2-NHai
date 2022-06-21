import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('login', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${process.env.BASE_URL}/login`, data);
    return res.data;
  } catch (err) {
    if (!err.response) throw err;
    return rejectWithValue(err.response.data);
  }
});

export const register = createAsyncThunk('register', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${process.env.BASE_URL}/register`, data);
    return res.data;
  } catch (err) {
    if (!err.response) throw err;
    return rejectWithValue(err.response.data);
  }
});
