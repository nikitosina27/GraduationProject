import { all } from 'redux-saga/effects';
import { watchSearchMovies } from './moviesSaga'; 

export default function* rootSaga() {
  yield all([
    watchSearchMovies(),
  ]);
}
