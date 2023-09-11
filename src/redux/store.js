import { combineReducers } from 'redux';
import { contactsReducer, filtersReducer } from './tasksSlice';
import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
const persistConfig = {
  key: 'store',
  storage, 
  blacklist: ['filters'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});
export const persistor = persistStore(store);
