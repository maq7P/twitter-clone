import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux'
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()
// @ts-ignore
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
  sagaMiddleware
)))
sagaMiddleware.run(rootSaga)