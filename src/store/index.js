import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './films/films.slice';
import authenSlice from './authentication/authentication.slice';

const store = configureStore({
  reducer: {
    films: filmsSlice,
    authen: authenSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

export default store;
