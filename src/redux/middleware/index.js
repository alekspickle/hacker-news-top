

import { fork } from ‘redux-saga/effects’;
import { getFlight } from ‘./saga’;
export default function* root_saga() {
 yield [
  fork(getFlight)
 ];
}