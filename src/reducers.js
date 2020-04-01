import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './users/reducers/index';

export default (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer
});
