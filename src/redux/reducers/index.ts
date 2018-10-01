/* @flow */

import { combineReducers, applyMiddleware } from 'redux'


const rootReducer = combineReducers({
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store

