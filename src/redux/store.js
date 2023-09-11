import {combineReducers} from 'redux'
import { contactsReducer, filtersReducer } from './tasksSlice';

import { configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer
})
const store = configureStore({
    reducer:rootReducer,
});

export default store;