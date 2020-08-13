import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '@/store/reducers';
import rootSaga from './sagas'
import { createLogger } from 'redux-logger';
const middleware: any[] = [];
const sagaMiddleware = createSagaMiddleware()
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger(), sagaMiddleware);
}
const store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export default store;
