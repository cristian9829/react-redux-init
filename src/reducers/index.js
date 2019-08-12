import { combineReducers } from 'redux';
import citasReducer from './citasReducers';

export default combineReducers({
    citas: citasReducer
})