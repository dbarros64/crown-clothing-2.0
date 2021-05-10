import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root.saga';

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

 //eslint-disable-next-line
export default { store, persistor };
