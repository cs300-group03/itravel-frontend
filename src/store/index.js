import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { scheduleReducer } from "./schedule";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    auth: authReducer,
    schedule: scheduleReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: reducer,
});