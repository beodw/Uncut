import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './appSlice';

const persistConfig = {
	key: 'root',
	storage: storage,
};

const rootReducer = combineReducers({
	appSlice: appReducer,
});

export type appState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);
