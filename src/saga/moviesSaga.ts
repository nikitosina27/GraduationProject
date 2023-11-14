import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

function* searchMoviesSaga(action:any) {
  try {
const response: AxiosResponse = yield call(axios.get,' http://www.omdbapi.com/?s=${action.payload}&apikey=88560c1b');
    yield put({ type: 'SEARCH_MOVIES_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'SEARCH_MOVIES_FAILURE', payload: error });
  }
}
export function* watchSearchMovies() {
  yield takeLatest('SEARCH_MOVIES', searchMoviesSaga);
}
