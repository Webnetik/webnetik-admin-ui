import { post } from 'axios';
import { LOGIN_URL, VALIDATE_USER_URL } from './urls';
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
            validateUserToken(dispatch, token);
        } else {
            redirect(redirectTarget);
            return {
                status: 'ERROR'
            }
        }
    }
}

function validateUserToken(dispatch, token) {
    console.log('validateUserToken: ');
    post(VALIDATE_USER_URL,
        {
            token
        }
    ).then(re => {
        dispatch(setToken(token));
        return {
            status: 'OK',
            token
        }
    }).catch(error => {
        console.log('HIBA: ', error.message);
        dispatch(doLogOut());
        redirect('/login');
    });
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
