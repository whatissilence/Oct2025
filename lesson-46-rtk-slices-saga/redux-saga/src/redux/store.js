import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice.js';
import createSagaMiddleware from 'redux-saga';
import { watchUserSaga } from './userSaga.js';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(watchUserSaga)