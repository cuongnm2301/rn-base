import { applyMiddleware, compose, createStore } from 'redux';
// import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from 'redux/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// persistInit
const persistConfig = {
    blacklist: ['AlertReducer'],
    key: 'base@2019',
    debug: __DEV__,
    storage: AsyncStorage,
};

// const sagaMiddleware: any = createSagaMiddleware()
//
const middleware: any = [];

if (__DEV__) {
    // middleware.push(logger)
}

const reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };
