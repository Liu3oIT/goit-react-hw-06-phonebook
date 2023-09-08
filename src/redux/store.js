import {combineReducers, createStore} from 'redux'
import { contactsReducer, filtersReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer
})
const enchancer = devToolsEnhancer(); 
const store = createStore(rootReducer, enchancer);

export default store;