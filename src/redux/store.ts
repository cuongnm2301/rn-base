import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
// import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';

// import createSagaMiddleware from 'redux-saga';
import rootReducer from 'redux/rootReducer';

// persistInit
const persistConfig = {
    blacklist: ['AlertReducer', 'profile', 'countMessage'],
    whitelist: [
        'resource',
        'userInfo',
        'location',
        'stationHistory',
        'stationsSelect',
        'receipt',
        'profileCustom',
    ],
    key: 'amela@2019',
    debug: __DEV__,
    storage: AsyncStorage,
};

const middleware: any = [];

if (__DEV__) {
    // middleware.push(logger);
}

const reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export { store, persistor };
