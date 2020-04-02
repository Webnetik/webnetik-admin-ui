import { post } from 'axios';
import { LOGIN_URL } from './urls';
import { SET_TOKEN } from './types';
import { history } from '../../store';

export function login({ username, password }) {
    return async dispatch => {
        return new Promise((resolve, reject) => {
            const data = {
                username,
                password
            };

            post(LOGIN_URL, data).then(result => {
                dispatch(setToken(result.data.token));
                redirect('/');
            }).catch(error => {
                reject('Invalid username or password');
            });
        })
    }
}

export function authenticateUserOnLoginPage(redirectTarget = '/') {
    return async dispatch => {
        const token = localStorage.getItem("token");

        if (token !== null) {
            redirect(redirectTarget);
        }
    }
}

export function authenticateUser(redirectTarget = '/login') {
    return dispatch => {
        const token = localStorage.getItem("token");

        if (token !== null) {
            dispatch(setToken(token));
            return {
                status: 'OK',
                token
            }
        } else {
            redirect(redirectTarget);
            return {
                status: 'ERROR'
            }
        }
    }

}

function redirect(target) {
    history.push(target);
}

export function redirectToHome() {
    redirect('/');
}

export function setToken(token) {
    localStorage.setItem("token", token);
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export function logOut() {
    return dispatch => {
        dispatch(doLogOut());
        redirect('/login');
    }
}

function doLogOut() {
    localStorage.removeItem("token");
    return {
        type: SET_TOKEN,
        payload: null
    };
}