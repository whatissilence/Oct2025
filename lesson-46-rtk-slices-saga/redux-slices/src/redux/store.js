import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice.js';
import userReducer from '../redux/userSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer
  }
})