import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './users/reducers/index';
import rolesReducer from './roles-and-capabilities/reducers/index';
import loginReducer from './login/reducers/login';
import menuReducer from './menu/reducers/index';
import profileReducer from './profile/reducers/index';

export default (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    roles: rolesReducer,
    login: loginReducer,
    menus: menuReducer,
    profile: profileReducer
});
