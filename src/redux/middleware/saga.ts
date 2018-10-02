import {put, take, call} from 'redux-saga/effects';
import config from '../../config'

const action =() => {
  return fetch()
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
};
export function* getTop() {
  try {
    yield take(FETCH_TOP);
    const flights = yield call(action); //1
    yield put({type: 'FETCH_TOP_SUCCESS', flights}); //2
  } catch(error) {
    yield put({type: 'FETCH_TOP_FAILURE', error});
  }
}