import { fork } from "redux-saga/effects";
import { getTop } from "./saga";
import { createApiRequest } from "./api";

export function* rootSaga() {
  yield [fork(getTop)];
}

export default {
  rootSaga,
  createApiRequest
};
