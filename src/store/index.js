import { configureStore } from '@reduxjs/toolkit';
import filmSlice from './films/films.slice';
import authenSlice from './authentication/authentication.slice';

const store = configureStore({
  reducer: {
    film: filmSlice,
    authen: authenSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

export default store;
