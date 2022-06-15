import { createSlice } from '@reduxjs/toolkit';
import { setToken, deleteToken } from './authentication.actions';

const authenticationSlice = createSlice({
  name: 'authen',
  initialState: {
    token: '',
    isLoggedIn: false
  },
  reducers: {
    setToken,
    deleteToken
  }
});

export default authenticationSlice;
