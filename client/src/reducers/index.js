import { combineReducers } from 'redux';
import somethingReducer from './somethingReducer';
import dudeReducer from './dudeReducer';

export default combineReducers({
    something: somethingReducer,
    dude: dudeReducer
})
