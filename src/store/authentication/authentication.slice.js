import { createSlice } from '@reduxjs/toolkit';
import { set as setToken } from '../../services/localStorage/localStorage';
import logout from './authentication.actions';
import { login, register } from './authentication.thunk';

const authenticationSlice = createSlice({
  name: 'authen',
  initialState: {
    isLoggedIn: false,
    isLoading: false
  },
  reducers: {
    logout
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      const { accessToken, user } = payload.data;
      setToken('token', accessToken);
      state.isLoggedIn = true;
    },

    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [login.pending]: (state) => {
      state.isLoading = true;
    }
  }
});

export default authenticationSlice.reducer;
