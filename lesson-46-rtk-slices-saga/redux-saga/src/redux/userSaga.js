import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserFailure, fetchUserSuccess } from './userSlice.js';

const fetchUserFromApi = async (userId) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(async response => {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Просто пауза

      if (!response.ok) {
        throw new Error('Запит не вдався: ' + response.status);
      }
      return response.json();
    });

  return user;
}

function* workFetchUserSaga(action) {
  try {
    const user = yield call(fetchUserFromApi, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchUserSaga() {
  yield takeEvery('user/fetchUserRequest', workFetchUserSaga)
}