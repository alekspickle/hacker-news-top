/* @flow */

import { combineReducers, createStore, applyMiddleware } from 'redux'
import {rootSaga }from '../middleware'

const rootReducer = combineReducers({
})

const sagaMiddleware = createSagaMiddleware()

const configureStore = (preloadedState) => {
    const store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(rootSaga)
    )
  
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  
    return store
  }

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store

