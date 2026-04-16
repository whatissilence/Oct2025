import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducers.js';

export const store = configureStore({
  reducer: {
    app: appReducer,
  }
})