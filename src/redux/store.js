import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './authSlice';
import bookSlice from './bookSlice';

const store = configureStore({
  reducer: {
    bookify: bookSlice,
    auth: authSlice,
  },
});
export default store;
