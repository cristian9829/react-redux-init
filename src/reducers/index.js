import { combineReducers } from 'redux';
import citasReducer from './citasReducers';
import validacionReducer from './validacionReducer';

export default combineReducers({
    citas: citasReducer,
    error: validacionReducer
})