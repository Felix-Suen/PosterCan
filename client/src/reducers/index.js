import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import poster from './poster';

export default combineReducers({
    alert,
    auth,
    poster
});